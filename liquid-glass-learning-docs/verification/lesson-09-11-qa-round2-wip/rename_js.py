# Rename the read point's distance r -> d_read inside JS string literals only (never in code, never in ${...}, never the SVG attribute r="...").
import re, sys
PAT = re.compile(r'(?<![A-Za-z0-9_.\-])r(?![A-Za-z0-9_])(?!=")(?!="\$)')
CHANGES = []

def rn(t):
    t2 = t.replace('r-from-d formula', 'read-distance formula').replace('d-from-r formula', 'pixel-distance formula')
    t2 = PAT.sub('d_read', t2)
    if t2 != t:
        CHANGES.append((t, t2))
    return t2

def expr_end(src, i):
    """index of the } that closes a ${ expression starting at i"""
    depth = 1
    while i < len(src):
        c = src[i]
        if c in '"\'':
            i = str_end(src, i); continue
        if c == '`':
            i = tpl_end(src, i); continue
        if c == '{': depth += 1
        elif c == '}':
            depth -= 1
            if depth == 0: return i
        i += 1
    raise ValueError('unclosed ${')

def str_end(src, i):
    q = src[i]; j = i + 1
    while src[j] != q:
        j += 2 if src[j] == '\\' else 1
    return j + 1

def tpl_end(src, i):
    j = i + 1
    while src[j] != '`':
        if src[j] == '\\': j += 2; continue
        if src[j] == '$' and src[j + 1] == '{': j = expr_end(src, j + 2) + 1; continue
        j += 1
    return j + 1

def rename(src):
    out = []; i = 0; n = len(src)
    while i < n:
        c = src[i]
        if c == '/' and i + 1 < n and src[i + 1] == '/':
            j = src.find('\n', i); j = n if j < 0 else j; out.append(src[i:j]); i = j; continue
        if c == '/' and i + 1 < n and src[i + 1] == '*':
            j = src.find('*/', i + 2) + 2; out.append(src[i:j]); i = j; continue
        if c in '"\'':
            j = str_end(src, i); out.append(c + rn(src[i + 1:j - 1]) + c); i = j; continue
        if c == '`':
            j = i + 1; seg = []; out.append('`')
            while src[j] != '`':
                if src[j] == '\\': seg.append(src[j:j + 2]); j += 2; continue
                if src[j] == '$' and src[j + 1] == '{':
                    out.append(rn(''.join(seg))); seg = []
                    k = expr_end(src, j + 2)
                    out.append('${' + rename(src[j + 2:k]) + '}'); j = k + 1; continue
                seg.append(src[j]); j += 1
            out.append(rn(''.join(seg)) + '`'); i = j + 1; continue
        out.append(c); i += 1
    return ''.join(out)

if __name__ == '__main__':
    for p in sys.argv[1:]:
        CHANGES.clear()
        s = open(p, encoding='utf-8').read()
        s2 = rename(s)
        open(p, 'w', encoding='utf-8').write(s2)
        print('==', p, len(CHANGES), 'string literals changed')
        for a, b in CHANGES:
            print('   -', a[:150].replace('\n', ' '))
            print('   +', b[:150].replace('\n', ' '))
