# Rebuild the round-2 parts of lesson-09-11-qa.html from the scratchpad sources (idempotent).
import json, os, subprocess
SP = os.path.dirname(os.path.abspath(__file__)) + '/'
P = '/Users/rosen/Code/learning-docs/liquid-glass-learning-docs/course/chapters/chapter-09/lesson-09-11-qa.html'
LP = '/Users/rosen/Code/learning-docs/liquid-glass-learning-docs/course/chapters/chapter-09/lesson-09-11-refraction-as-displaced-sampling.html'

def between(h, a_marker, b_marker, new):
    a = h.index(a_marker); b = h.index(b_marker, a)
    return h[:a] + new + h[b:]

def main():
    subprocess.run(['python3', SP + 'gen_tables.py'], check=True, capture_output=True)
    h = open(P, encoding='utf-8').read()
    # scripts
    c9 = json.load(open(SP + 'gen/c9.json'))
    js9 = open(SP + 'card9.js', encoding='utf-8').read().replace('__C9__', json.dumps(c9, ensure_ascii=False)).rstrip('\n') + '\n\n'
    h = between(h, '/* ---------- card 9: the formula of the curve', '/* ---------- card 10: solving the row y = 0.40', js9)
    js10 = open(SP + 'card10.js', encoding='utf-8').read().rstrip('\n') + '\n\n'
    h = between(h, '/* ---------- card 10: solving the row y = 0.40', '/* ======================= round 2 (2026-09-29): cards 11', js10)
    jsn = open(SP + 'cards_new.js', encoding='utf-8').read().rstrip('\n') + '\n' + open(SP + 'summary.js', encoding='utf-8').read().rstrip('\n') + '\n\n'
    h = between(h, '/* ======================= round 2 (2026-09-29): cards 11', '/* ---------- the record ---------- */', jsn)
    # html: the new cards with their tables
    cards = open(SP + 'cards_new.html', encoding='utf-8').read()
    for key, f in [('__T15__', 'c15'), ('__T16__', 'c16'), ('__T19A__', 'c19a'), ('__T19B__', 'c19b'), ('__T19C__', 'c19c'), ('__T19D__', 'c19d'), ('__T23__', 'c23'), ('__T23S__', 'c23s'), ('__T23W__', 'c23w'), ('__T24__', 'c24')]:
        cards = cards.replace(key, open(SP + 'gen/' + f + '.html', encoding='utf-8').read())
    assert '__T' not in cards
    h = between(h, '<!-- ======================================================= round 2 (2026-09-29)', '<!-- ======================================================= problems -->', cards)
    # html: the summary card
    h = between(h, '<!-- ======================================================= summary (2026-09-29) -->', '<!-- ======================================================= Q1 -->', open(SP + 'summary.html', encoding='utf-8').read())
    # html: card 10's Step C block
    c10 = h.index('id="c10C"')
    a = h.index('<div class="chips"><span class="uselabel">Uses:</span> <span class="chip" style="--c:#6b21a8"><b>direction</b>', c10)
    b = h.index('</table>', a) + len('</table>')
    h = h[:a] + open(SP + 'gen/c10C.html', encoding='utf-8').read() + h[b:]
    open(P, 'w', encoding='utf-8').write(h)
    # the lesson's derivation box #upd-derive is made from the same tables as card 9 (2026-09-29)
    Ls = open(LP, encoding='utf-8').read()
    a = Ls.index('<details id="upd-derive">'); b = Ls.index('</details>', a) + len('</details>')
    box = open(SP + 'gen/lesson_box.html', encoding='utf-8').read()
    if Ls[a:b] != box:
        open(LP, 'w', encoding='utf-8').write(Ls[:a] + box + Ls[b:])
        print('lesson box updated')
    print('assembled')

if __name__ == '__main__':
    main()
