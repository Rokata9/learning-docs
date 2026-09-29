# Recompute every displayed "a op b = c" and "√a = c" with exact decimals.
# policy N3: c is the exact value, or the exact value rounded half up to 3 decimals (exact values with up to 4 decimals must stay exact)
# policy N6: c is the exact value, or rounded half up to 6 decimals
# policy S3: tiny numbers with 3 significant digits (card 19)
import re, json, sys
from decimal import Decimal as D, ROUND_HALF_UP, getcontext
getcontext().prec = 50
NUM = r'\(?[-]?\d+(?:\.\d+)?\)?'

def val(tok):
    tok = tok.strip()
    neg_paren = tok.startswith('(') and tok.endswith(')')
    t = tok.strip('()')
    return D(t)

def ev(piece):
    """value of 'NUM', 'NUM op NUM', or '√NUM'; None if not purely numeric"""
    p = piece.strip()
    m = re.fullmatch(r'√\s*(\d+(?:\.\d+)?)', p)
    if m: return ('sqrt', D(m.group(1)))
    m = re.fullmatch(rf'({NUM})\s*([+\-*/])\s*({NUM})', p)
    if m:
        a, op, b = val(m.group(1)), m.group(2), val(m.group(3))
        return ('op', {'+': a + b, '-': a - b, '*': a * b, '/': a / b if b != 0 else None}[op], op)
    m = re.fullmatch(NUM, p)
    if m: return ('num', val(p))
    return None

def decimals(x):
    s = format(x.normalize(), 'f')
    return len(s.split('.')[1]) if '.' in s else 0

def rnd(x, n): return x.quantize(D(1).scaleb(-n), rounding=ROUND_HALF_UP)
def sig3(x):
    if x == 0: return x
    return x.quantize(D(1).scaleb(x.adjusted() - 2), rounding=ROUND_HALF_UP)

def ok(exact, shown, policy, kind):
    if kind == 'sqrt':
        root = exact.sqrt()
        if shown * shown == exact: return True
        if policy == 'N3': return shown == rnd(root, 3)
        if policy == 'N6': return shown == rnd(root, 6)
        if policy == 'S3': return shown == sig3(root)
    if exact is None: return False
    if shown == exact: return True                      # exact results are always right
    if policy == 'N3':
        return decimals(exact) > 4 and shown == rnd(exact, 3)
    if policy == 'N6': return shown == rnd(exact, 6)
    if policy == 'S3': return shown == sig3(exact) or shown == rnd(exact, 3)
    return False

def norm(s):
    return s.replace('−', '-').replace('×', '*').replace('÷', '/').replace(' ', ' ')

def audit_text(text, policy, where, bad, count):
    for line in norm(text).split('\n'):
        for seg in re.split(r'[;|\t]| → |→', line):
            if '=' not in seg: continue
            pieces = seg.split('=')
            for i in range(len(pieces) - 1):
                left = pieces[i].strip()
                right = pieces[i + 1].strip()
                # the right side may have trailing words: keep its leading numeric expression
                mr = re.match(rf'(√\s*\d+(?:\.\d+)?|{NUM}(?:\s*[+\-*/]\s*{NUM})?)', right)
                if not mr: continue
                rexpr = mr.group(1)
                # the left side: its trailing numeric expression
                ml = re.search(rf'(√\s*\d+(?:\.\d+)?|{NUM}\s*[+\-*/]\s*{NUM})\s*$', left)
                if not ml: continue
                L, R = ev(ml.group(1)), ev(rexpr)
                if not L or not R: continue
                count[0] += 1
                if R[0] == 'num':
                    if L[0] == 'sqrt': good = ok(L[1], R[1], policy, 'sqrt')
                    else: good = ok(L[1], R[1], policy, 'op')
                elif R[0] == 'op' and L[0] == 'op':
                    good = (L[1] == R[1])                   # a rewrite, like a − (−b) = a + b
                else:
                    continue
                if not good: bad.append((where, ml.group(1), rexpr, seg.strip()[:120]))

if __name__ == '__main__':
    bad = []; count = [0]
    d = json.load(open(sys.argv[1]))['cards']
    for cid, states in d.items():
        n = int(cid[1:]) if cid.startswith('q') else 99
        if n < 9: continue
        policy = 'N3'
        seen = set()
        for st in states:
            texts = st.get('math', []) + st.get('svgtext', []) + [t.get('html', '') for t in st.get('tips', [])]
            for t in texts:
                if t in seen: continue
                seen.add(t)
                pol = 'S3' if cid == 'q19' else policy
                audit_text(t, pol, cid, bad, count)
    print('checked', count[0], 'calculations in cards 9-25 and the summary;', len(bad), 'mismatches')
    for b in bad[:60]: print('  ', b)
