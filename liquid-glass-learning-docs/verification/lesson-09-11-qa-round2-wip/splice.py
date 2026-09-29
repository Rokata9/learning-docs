# splice a card script (with optional __C9__ data) into the Q&A page, between two marker comments
import sys, json, os
P='/Users/rosen/Code/learning-docs/liquid-glass-learning-docs/course/chapters/chapter-09/lesson-09-11-qa.html'
def splice(js_file, start_marker, end_marker, subs=None):
    js=open(js_file,encoding='utf-8').read()
    for k,v in (subs or {}).items(): js=js.replace(k,v)
    h=open(P,encoding='utf-8').read()
    a=h.index(start_marker); b=h.index(end_marker)
    h=h[:a]+js.rstrip('\n')+'\n\n'+h[b:]
    open(P,'w',encoding='utf-8').write(h)
    print('spliced',js_file,len(js))
if __name__=='__main__':
    SP=os.path.dirname(os.path.abspath(__file__))+'/'
    c9=json.load(open(SP+'gen/c9.json'))
    splice(SP+'card9.js','/* ---------- card 9: the formula of the curve','/* ---------- card 10: solving the row y = 0.40 ---------- */',{'__C9__':json.dumps(c9,ensure_ascii=False)})
