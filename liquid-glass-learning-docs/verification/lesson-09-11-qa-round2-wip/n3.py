# N3 number policy for the Lesson 9.11 Q&A page (from card 9 on), 2026-09-29.
#  - a result that is exact with at most 4 decimals is kept (0.6875, 0.0175, 0.1875)
#  - any other result is rounded to 3 decimals, a 5 in the 4th decimal rounds away from 0
#  - a square that feeds a square root is written exactly (sq)
#  - every line uses the numbers shown in the lines above, so a calculator reproduces it
from fractions import Fraction as Fr
import math

KEEP = 10**4
RND = 10**3

def fr(x):
    if isinstance(x, Fr):
        return x
    return Fr(str(x))

def rhalf(v, scale):
    """round Fraction v to 1/scale, half away from zero"""
    n = v * scale
    neg = n < 0
    n = abs(n)
    q = n.numerator // n.denominator
    rem = n - q
    if rem >= Fr(1, 2):
        q += 1
    return Fr(-q if neg else q, scale)

def pol(v):
    v = fr(v)
    if (v * KEEP).denominator == 1:
        return v
    return rhalf(v, RND)

def add(a, b): return pol(fr(a) + fr(b))
def sub(a, b): return pol(fr(a) - fr(b))
def mul(a, b): return pol(fr(a) * fr(b))
def div(a, b): return pol(fr(a) / fr(b))
def sq(a):
    a = fr(a)
    return a * a  # exact, feeds a square root

def isqrt_frac(S):
    """exact sqrt if S is the square of a fraction with a power-of-10 denominator <= 1e4, else None"""
    S = fr(S)
    for sc in (1, 10, 100, 1000, 10000):
        n = S * sc * sc
        if n.denominator == 1:
            r = math.isqrt(n.numerator)
            if r * r == n.numerator:
                return Fr(r, sc)
    return None

def sqrt(S):
    S = fr(S)
    e = isqrt_frac(S)
    if e is not None and (e * KEEP).denominator == 1:
        return e
    # round sqrt(S) to 3 decimals, half up: find m with m/1000 nearest
    n = S * RND * RND  # sqrt(n) = sqrt(S)*1000
    m = math.isqrt(n.numerator // n.denominator)
    while Fr(m * m) > n:
        m -= 1
    while Fr((m + 1) * (m + 1)) <= n:
        m += 1
    # half up: sqrt(n) >= m + 0.5  <=>  n >= (m+0.5)^2
    if n >= Fr((2 * m + 1) ** 2, 4):
        m += 1
    return Fr(m, RND)

def fmt(v, mind=2):
    v = fr(v)
    neg = v < 0
    v = abs(v)
    # find decimals
    d = 0
    while (v * 10**d).denominator != 1:
        d += 1
        if d > 16:
            raise ValueError('not terminating: %r' % v)
    ip = v.numerator * 10**d // v.denominator
    s = str(ip).rjust(d + 1, '0')
    whole, frac = s[:-d] if d else s, s[-d:] if d else ''
    frac = frac.rstrip('0')
    if len(frac) < mind:
        frac = frac.ljust(mind, '0')
    out = whole + ('.' + frac if frac else '')
    return ('−' if neg else '') + out

def fo(v):
    """a negative operand in brackets"""
    return '(' + fmt(v) + ')' if fr(v) < 0 else fmt(v)

# ---------------- the lesson's chain, N3 ----------------
C = fr('0.5')
RAD = fr('0.25')
BAND = fr('0.10')
LEN = fr('0.10')

def chain(x, y, mode='linear', lines=None, xonly=False, upto=None, label=None):
    L = lines if lines is not None else []
    x = fr(x); y = fr(y)
    px = sub(x, C); py = sub(y, C)
    if label:
        L.append(f'{label} = ({fmt(x)}, {fmt(y)}), an output pixel, in UV')
    L.append('p = uv − C')
    L.append(f'  p.x = {fmt(x)} − 0.50 = {fmt(px)}')
    L.append(f'  p.y = {fmt(y)} − 0.50 = {fmt(py)}')
    px2 = sq(px); py2 = sq(py); s2 = px2 + py2; d = sqrt(s2)
    L.append('d = √(p.x² + p.y²)')
    L.append(f'  p.x² = {fo(px)} × {fo(px)} = {fmt(px2)}')
    L.append(f'  p.y² = {fo(py)} × {fo(py)} = {fmt(py2)}')
    L.append(f'  p.x² + p.y² = {fmt(px2)} + {fmt(py2)} = {fmt(s2)}')
    L.append(f'  d = √{fmt(s2)} = {fmt(d)}')
    sd = sub(d, RAD)
    L.append(f'sd = d − radius = {fmt(d)} − 0.25 = {fmt(sd)}')
    top = add(sd, BAND)
    t0 = div(top, fr('0.20'))
    t = min(fr(1), max(fr(0), t0))
    L.append('t = (sd − (−band)) ÷ (band − (−band))')
    L.append(f'  sd − (−0.10) = {fmt(sd)} + 0.10 = {fmt(top)}')
    L.append('  band − (−band) = 0.10 − (−0.10) = 0.10 + 0.10 = 0.20')
    L.append(f'  t = {fmt(top)} ÷ 0.20 = {fmt(t0)}')
    if t0 < 0:
        L.append('  t is below 0, so t is limited to 0')
    elif t0 > 1:
        L.append('  t is above 1, so t is limited to 1')
    else:
        L.append(f'  t lies from 0 to 1, so t stays {fmt(t)}')
    if mode == 'linear':
        fo_ = sub(1, t)
        L.append(f'falloff = 1 − t = 1 − {fmt(t)} = {fmt(fo_)}        (linear)')
    else:
        t2 = mul(t, t); t3 = mul(t2, t); a = mul(3, t2); b = mul(2, t3); s = sub(a, b); fo_ = sub(1, s)
        L.append('smoothstep = 3t² − 2t³')
        L.append(f'  t² = t × t = {fmt(t)} × {fmt(t)} = {fmt(t2)}')
        L.append(f'  t³ = t² × t = {fmt(t2)} × {fmt(t)} = {fmt(t3)}')
        L.append(f'  3t² = 3 × {fmt(t2)} = {fmt(a)}')
        L.append(f'  2t³ = 2 × {fmt(t3)} = {fmt(b)}')
        L.append(f'  smoothstep = {fmt(a)} − {fmt(b)} = {fmt(s)}')
        L.append(f'falloff = 1 − smoothstep = 1 − {fmt(s)} = {fmt(fo_)}')
    push = mul(LEN, fo_)
    L.append(f'push = dispLen × falloff = 0.10 × {fmt(fo_)} = {fmt(push)}')
    v = dict(px=px, py=py, d=d, sd=sd, t=t, fo=fo_, push=push)
    if upto == 'push':
        return L, v
    dx = div(px, d); dy = div(py, d); ex = mul(dx, push); ey = mul(dy, push)
    L.append('dir = p ÷ d')
    L.append(f'  dir.x = {fo(px)} ÷ {fmt(d)} = {fmt(dx)}')
    if not xonly:
        L.append(f'  dir.y = {fo(py)} ÷ {fmt(d)} = {fmt(dy)}')
    L.append('disp = dir × push')
    L.append(f'  disp.x = {fo(dx)} × {fmt(push)} = {fmt(ex)}')
    if not xonly:
        L.append(f'  disp.y = {fo(dy)} × {fmt(push)} = {fmt(ey)}')
    L.append('readUv = uv − disp')
    rx = sub(x, ex); ry = sub(y, ey)
    L.append('  readUv.x = ' + subtxt(x, ex))
    if not xonly:
        L.append('  readUv.y = ' + subtxt(y, ey))
    v.update(dx=dx, dy=dy, ex=ex, ey=ey, rx=rx, ry=ry)
    return L, v

def subtxt(a, b):
    a = fr(a); b = fr(b)
    if b < 0:
        return f'{fmt(a)} − {fo(b)} = {fmt(a)} + {fmt(-b)} = {fmt(sub(a, b))}'
    return f'{fmt(a)} − {fmt(b)} = {fmt(sub(a, b))}'

if __name__ == '__main__':
    for x in ['0.65', '0.66', '0.67', '0.68', '0.69', '0.70', '0.701', '0.702', '0.703', '0.704', '0.705', '0.71', '0.84']:
        L, v = chain(x, '0.40')
        print(x, '->', fmt(v['rx']), fmt(v['ry']), 'd', fmt(v['d']), 'push', fmt(v['push']))
    print()
    L, v = chain('0.705', '0.40', label='K')
    print('\n'.join(L))
    print()
    L, v = chain('0.717', '0.50', label='peak')
    print('\n'.join(L))
