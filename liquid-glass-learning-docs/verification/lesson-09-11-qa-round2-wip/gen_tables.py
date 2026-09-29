# One source for the derivation tables of Lesson 9.11 Q&A (2026-09-29, 3-decimal policy N3):
#   card 9 (C9 data array), the lesson box #upd-derive, card 10 step C, cards 15, 16, 19, 23.
import json, sys, os, html
sys.path.insert(0, os.path.dirname(__file__))
from n3 import *

M = '−'   # minus
X = '×'   # times
D = '÷'   # divide
SQ = '√'
OUT = os.path.join(os.path.dirname(__file__), 'gen')
os.makedirs(OUT, exist_ok=True)

import re as _re
def dread(t):
    # 2026-09-29: the read point's distance r is called d_read; the two formulas of steps 5 and 6 get names that say what they give
    t = t.replace('r-from-d formula', 'read-distance formula').replace('d-from-r formula', 'pixel-distance formula')
    return _re.sub(r'(?<![A-Za-z0-9_.])r(?![A-Za-z0-9_])', 'd_read', t)

def esc(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')

# ---------------- formula names and colors (one color per formula) ----------------
COL = {
    'p': '#0369a1', 'dist': '#1e3a8a', 'sd': '#475569', 't': '#a16207', 'lin': '#c2410c',
    'pushc': '#0e7490', 'dir': '#6b21a8', 'read': '#9d174d',
    'fo': '#b45309', 'push': '#0f766e', 'r': '#334155', 'ray': '#1d4ed8', 'rfd': '#4338ca',
    'dfr': '#7e22ce', 'str': '#be185d', 'curve': '#4d7c0f', 'lerp': '#57534e', 'gray': '#4b5563',
}
def chip(key, name, code, frm):
    return f'<span class="chip" style="--c:{COL[key]}"><b>{name}</b> <code>{esc(code)}</code> <i>{frm}</i></span>'
def fn(key, name):
    return f'<span class="fn" style="--c:{COL[key]}">{name}</span>'
def ins(key, s):
    return f'<span class="ins" style="--c:{COL[key]}">{esc(s)}</span>'
def row(k, move, letters, nums):
    return f'<tr><td class="k">{k}</td><td class="m">{move}</td><td class="f">{letters}</td><td class="f">{esc(nums)}</td></tr>'
def head(nums_head, letters_head='With letters'):
    return f'<tr><th>#</th><th>What we do (one move per line)</th><th>{letters_head}</th><th>{nums_head}</th></tr>'

def L(*lines):
    return '\n'.join(lines)

def op(a, sym, b, r):
    return f'{a} {sym} {b} = {r}'

# ---------------- card 9: numbers of R and S ----------------
r = fr('0.20')
c15 = fr('0.15')
c0225 = sq(c15)            # 0.0225
r2 = sq(r)                 # 0.04
dif = sub(r2, c0225)       # 0.0175
root = sqrt(dif)           # 0.132
RY = sub(fr('0.5'), root)  # 0.368
ry_off = sub(RY, fr('0.5'))  # -0.132
ry_sq = sq(ry_off)         # 0.017424
rsum = c0225 + ry_sq       # 0.039924
rchk = sqrt(rsum)          # 0.20
assert rchk == r, rchk
d = div(add(r, fr('0.175')), fr('1.5'))  # 0.25
ratio = div(d, r)          # 1.25
offx = mul(c15, ratio)     # 0.1875
SX = add(fr('0.5'), offx)  # 0.6875
offy = mul(ry_off, ratio)  # -0.165
SY = add(fr('0.5'), offy)  # 0.335
print('R', fmt(RY), 'S', fmt(SX), fmt(SY), 'd', fmt(d))

USES = '<span class="uselabel">Uses in this step:</span> '
steps = []

# ---- step 1
t1 = head('With numbers: a pixel on the circle edge, d = 0.25')
t1 += row(1, f'sd: how far the pixel is past the circle edge ({fn("sd","sd rule")})', 'sd = d − 0.25', '0.25 − 0.25 = 0')
t1 += row(2, f'{fn("t","t")}: how far sd is through the band (Lesson 9.3)', 't = (sd − (−0.10)) ÷ (0.10 − (−0.10))', '(0 − (−0.10)) ÷ (0.10 − (−0.10))')
t1 += row(3, 'the bottom: 0.10 − (−0.10) is 0.10 + 0.10', 't = (sd − (−0.10)) ÷ 0.20', '0.10 + 0.10 = 0.20')
t1 += row(4, 'the top: “− (−0.10)” is “+ 0.10”', 't = (sd + 0.10) ÷ 0.20', L('0 + 0.10 = 0.10', '0.10 ÷ 0.20 = 0.5'))
t1 += row(5, f'put in the {fn("sd","sd rule")} from line 1', f't = ({ins("sd","d − 0.25")} + 0.10) ÷ 0.20', L('0.25 − 0.25 = 0', '0 + 0.10 = 0.10', '0.10 ÷ 0.20 = 0.5'))
t1 += row(6, 'add the two numbers: −0.25 + 0.10 = −0.15', 't = (d − 0.15) ÷ 0.20', L('0.25 − 0.15 = 0.10', '0.10 ÷ 0.20 = 0.5'))
t1 += row(7, f'{fn("lin","linear falloff")} is 1 − t (Lesson 9.3)', 'falloff = 1 − t', '1 − 0.5 = 0.5')
t1 += row(8, f'put in {fn("t","t")} from line 6', f'falloff = 1 − {ins("t","(d − 0.15) ÷ 0.20")}', L('0.25 − 0.15 = 0.10', '0.10 ÷ 0.20 = 0.5', '1 − 0.5 = 0.5'))
t1 += row(9, 'write 1 as 0.20 ÷ 0.20, so both parts are “something ÷ 0.20”', 'falloff = (0.20 − (d − 0.15)) ÷ 0.20', L('0.25 − 0.15 = 0.10', '0.20 − 0.10 = 0.10', '0.10 ÷ 0.20 = 0.5'))
t1 += row(10, 'remove the inner brackets: the minus in front flips both signs inside: − (d − 0.15) = − d + 0.15', 'falloff = (0.20 − d + 0.15) ÷ 0.20', L('0.20 − 0.25 = −0.05', '−0.05 + 0.15 = 0.10', '0.10 ÷ 0.20 = 0.5'))
t1 += row(11, 'add the two numbers: 0.20 + 0.15 = 0.35', 'falloff = (0.35 − d) ÷ 0.20', L('0.35 − 0.25 = 0.10', '0.10 ÷ 0.20 = 0.5'))
steps.append(dict(kind='fo', uses=['sd', 't', 'lin'], new='fo',
  cap='<b>Step 1 of 9 — linear falloff, written with d.</b> With “linear”, the falloff graph is a straight line inside the band. We write falloff with d, the distance from C to the pixel, one move per line. The numbers column checks every line with a pixel on the circle edge (d = 0.25).',
  known='<span class="bdg b-sh">shader</span> radius 0.25, band 0.10, the rule “linear” <span class="bdg b-fd">found here</span> falloff as a formula of d',
  table=t1,
  result='New: ' + chip('fo', 'falloff formula', 'falloff = (0.35 − d) ÷ 0.20', 'from step 1') + ' — valid inside the band, d from 0.15 to 0.35. In the graph it is the straight orange line.'))

# ---- step 2
t2 = head('With numbers: the same pixel, d = 0.25')
t2 += row(1, f'the {fn("pushc","push")} is dispLen × falloff, with dispLen = 0.10', 'push = 0.10 × falloff', L('falloff = 0.5 (step 1)', '0.10 × 0.5 = 0.05'))
t2 += row(2, f'put in the {fn("fo","falloff formula")} (step 1)', f'push = 0.10 × {ins("fo","(0.35 − d) ÷ 0.20")}', L('0.35 − 0.25 = 0.10', '0.10 × 0.10 = 0.01', '0.01 ÷ 0.20 = 0.05'))
t2 += row(3, 'do the division of the two numbers first (× and ÷ can go in any order): 0.10 ÷ 0.20 = 0.5', 'push = 0.5 × (0.35 − d)', L('0.35 − 0.25 = 0.10', '0.5 × 0.10 = 0.05'))
t2 += row(4, 'multiply each part of the bracket by 0.5: 0.5 × 0.35 = 0.175, and 0.5 × d', 'push = 0.175 − 0.5 × d', L('0.5 × 0.25 = 0.125', '0.175 − 0.125 = 0.05'))
steps.append(dict(kind='push', uses=['pushc', 'fo'], new='push',
  cap='<b>Step 2 of 9 — the push, written with d.</b> The push is dispLen × falloff. We put the falloff formula of step 1 into it.',
  known='<span class="bdg b-sh">shader</span> dispLen 0.10 <span class="bdg b-fd">found here</span> the push as a formula of d',
  table=t2,
  result='New: ' + chip('push', 'push formula', 'push = 0.175 − 0.5 × d', 'from step 2') + ' — the pixel on the circle edge gets half of 0.10.'))

# ---- step 3
t3 = head('With numbers: R, 0.20 from C')
t3 += row(1, f'the distance from C to R, squared ({fn("dist","length formula")}, used for R): R is 0.15 right of C', '0.15² + (0.50 − R.y)² = r²', L('0.15 × 0.15 = 0.0225', '0.20 × 0.20 = 0.04'))
t3 += row(2, 'take 0.15² away from both sides', '(0.50 − R.y)² = r² − 0.15²', op('0.04', M, '0.0225', fmt(dif)))
t3 += row(3, 'take the square root of both sides', '0.50 − R.y = √(r² − 0.15²)', f'{SQ}{fmt(dif)} = {fmt(root)}')
t3 += row(4, 'move R.y to one side and the number to the other side', 'R.y = 0.50 − √(r² − 0.15²)', op('0.50', M, fmt(root), fmt(RY)))
t3 += row(5, f'check with the {fn("dist","length formula")} of the chain, used for R', 'r = √((R.x − 0.50)² + (R.y − 0.50)²)',
          L('0.65 − 0.50 = 0.15', op(fmt(RY), M, '0.50', fmt(ry_off)), '0.15 × 0.15 = 0.0225', op(fo(ry_off), X, fo(ry_off), fmt(ry_sq)), op('0.0225', '+', fmt(ry_sq), fmt(rsum)), f'{SQ}{fmt(rsum)} = {fmt(rchk)}'))
steps.append(dict(kind='R', uses=['dist'], new='r',
  cap='<b>Step 3 of 9 — pick a point R of the white line.</b> We pick the point of the white line that is 0.20 from C, so that the numbers stay short. <b>r</b> is the distance from C to R. It is the same length formula as d, used for the point R instead of for a pixel.',
  known='<span class="bdg b-ch">our choice</span> the white line x = 0.65, and r = 0.20 <span class="bdg b-fd">found here</span> R.y = ' + fmt(RY),
  table=t3,
  result=f'R = (0.65, {fmt(RY)}), and r = 0.20. (The lesson writes R.y = 0.367712: the same point with 6 decimals.)'))

# ---- step 4
t4 = head('With numbers: R and S (the numbers of S come from step 6; here they only check the rule)')
t4 += row(1, 'read the three rulers beside the violet ray: the blue ruler (C to R) and the teal ruler (R to S) together are as long as the yellow ruler (C to S)', 'r + push = d', '0.20 + 0.05 = 0.25')
t4 += row(2, 'take the push away from both sides', 'r = d − push', '0.25 − 0.05 = 0.20')
steps.append(dict(kind='ray4', uses=['dir', 'read'], new='ray',
  cap='<b>Step 4 of 9 — the ray rule.</b> The push of a pixel points straight at C (in the chain, <code>dir = p ÷ d</code> points away from C, and <code>readUv = uv − dir × push</code> goes back toward C). So the pixel S that shows R lies on the violet ray from C through R, and S is farther from C than R by exactly the push of S. Three <b>rulers</b> beside the ray measure the three lengths. They are drawn beside the ray, not on it, so that they do not cover the ray and the push arrow.',
  known='<span class="bdg b-ch">our choice</span> R, r = 0.20 <span class="bdg b-fd">found here</span> the ray rule, true for every pixel and every falloff rule',
  table=t4,
  result='New: ' + chip('ray', 'ray rule', 'r = d − push', 'from step 4') + ' — for every pixel: its read point is closer to C by its push.'))

# ---- step 5
t5 = head('With numbers: S: d = 0.25')
t5 += row(1, f'start from the {fn("ray","ray rule")} (step 4)', 'r = d − push', '0.25 − 0.05 = 0.20')
t5 += row(2, f'put in the {fn("push","push formula")} (step 2)', f'r = d − {ins("push","(0.175 − 0.5 × d)")}', L('0.5 × 0.25 = 0.125', '0.175 − 0.125 = 0.05', '0.25 − 0.05 = 0.20'))
t5 += row(3, 'remove the brackets: the minus in front flips both signs inside: − (0.175 − 0.5 × d) = − 0.175 + 0.5 × d', 'r = d − 0.175 + 0.5 × d', L('0.25 − 0.175 = 0.075', '0.5 × 0.25 = 0.125', '0.075 + 0.125 = 0.20'))
t5 += row(4, 'put the two d’s together: d + 0.5 × d = 1.5 × d', 'r = 1.5 × d − 0.175', L('1.5 × 0.25 = 0.375', '0.375 − 0.175 = 0.20'))
steps.append(dict(kind='push5', uses=['ray', 'push'], new='rfd',
  cap='<b>Step 5 of 9 — put the push formula into the ray rule.</b> The ray rule still contains the word “push”. The push formula of step 2 says what the push is for a pixel at distance d. We put it in — like inlining a variable in code — and then tidy up, one move per line.',
  known='<span class="bdg b-fd">found here</span> r as a formula of d: where a pixel at distance d reads',
  table=t5,
  result='New: ' + chip('rfd', 'r-from-d formula', 'r = 1.5 × d − 0.175', 'from step 5') + ' — where a pixel at distance d reads (inside the band).'))

# ---- step 6
t6 = head('With numbers: R: r = 0.20 — here we find d')
t6 += row(1, f'start from the {fn("rfd","r-from-d formula")} (step 5)', 'r = 1.5 × d − 0.175', L('put in r = 0.20:', '0.20 = 1.5 × d − 0.175'))
t6 += row(2, 'add 0.175 to both sides: on the right, − 0.175 + 0.175 = 0', 'r + 0.175 = 1.5 × d', L('0.20 + 0.175 = 0.375', '0.375 = 1.5 × d'))
t6 += row(3, 'divide both sides by 1.5: on the right, 1.5 × d ÷ 1.5 = d', '(r + 0.175) ÷ 1.5 = d', L('0.375 ÷ 1.5 = 0.25', '0.25 = d'))
t6 += row(4, 'swap the two sides', 'd = (r + 0.175) ÷ 1.5', 'd = 0.25')
steps.append(dict(kind='rd6', uses=['rfd'], new='dfr',
  cap='<b>Step 6 of 9 — turn it around: d from r.</b> We know r, because we chose R. We look for d, the distance of the pixel that shows R. So we move everything except d to the other side, one move per line. <b>The graph is not a part of the wallpaper or the output.</b> It shows one ray from C: across, where a pixel is (its distance d); up, where the pixel reads (the distance r of its read point). The strip under the graph draws the same ray, laid flat.',
  known='<span class="bdg b-ch">our choice</span> r = 0.20 <span class="bdg b-lf">looked for</span> d <span class="bdg b-fd">found here</span> d = 0.25',
  table=t6,
  result='New: ' + chip('dfr', 'd-from-r formula', 'd = (r + 0.175) ÷ 1.5', 'from step 6') + ' — S, the pixel that shows R, is 0.25 from C: on the circle edge.'))

# ---- step 7
t7 = head('With numbers: R and S')
t7 += row(1, 'how many times farther from C is S than R', 'd ÷ r', op('0.25', D, '0.20', fmt(ratio)))
t7 += row(2, 'the sideways offset of R from C', 'R.x − 0.50', '0.65 − 0.50 = 0.15')
t7 += row(3, 'enlarge the offset d ÷ r times (the triangle grows, see the picture)', '(R.x − 0.50) × d ÷ r', op('0.15', X, fmt(ratio), fmt(offx)))
t7 += row(4, 'add the offset to the x of C', 'S.x = 0.50 + (R.x − 0.50) × d ÷ r', op('0.50', '+', fmt(offx), fmt(SX)))
t7 += row(5, 'put in R.x − 0.50 = 0.15 from line 2', 'S.x = 0.50 + 0.15 × d ÷ r', L(op('0.15', X, '0.25', '0.0375'), op('0.0375', D, '0.20', fmt(offx)), op('0.50', '+', fmt(offx), fmt(SX))))
t7 += row(6, 'the same for y, to draw S', 'S.y = 0.50 + (R.y − 0.50) × d ÷ r',
          L(op(fmt(RY), M, '0.50', fmt(ry_off)), op(fo(ry_off), X, fmt(ratio), fmt(offy)), f'0.50 + {fo(offy)} = 0.50 {M} {fmt(-offy)} = {fmt(SY)}'))
steps.append(dict(kind='tri', uses=['dfr', 'r'], new='str',
  cap='<b>Step 7 of 9 — the stretch rule.</b> S lies on the violet ray from C through R, d ÷ r times as far from C. The triangle from C to S is the triangle from C to R, enlarged d ÷ r times. So the sideways offset from C is enlarged by the same number.',
  known=f'<span class="bdg b-ch">known</span> R = (0.65, {fmt(RY)}), r = 0.20, d = 0.25 <span class="bdg b-lf">looked for</span> S <span class="bdg b-fd">found here</span> S = ({fmt(SX)}, {fmt(SY)})',
  table=t7,
  result='New: ' + chip('str', 'stretch rule', 'S.x = 0.50 + 0.15 × d ÷ r', 'from step 7') + f' — S = ({fmt(SX)}, {fmt(SY)}), a point of the light-green curve.'))

# ---- step 8
t8 = head('With numbers: R: r = 0.20 (every line must give 0.6875)')
t8 += row(1, f'start from the {fn("str","stretch rule")} (step 7)', 'x = 0.50 + 0.15 × d ÷ r', L('d = 0.25:', '0.15 × 0.25 = 0.0375', '0.0375 ÷ 0.20 = 0.1875', '0.50 + 0.1875 = 0.6875'))
t8 += row(2, f'put in the {fn("dfr","d-from-r formula")} (step 6)', f'x = 0.50 + 0.15 × {ins("dfr","(r + 0.175) ÷ 1.5")} ÷ r', L('0.20 + 0.175 = 0.375', '0.375 ÷ 1.5 = 0.25', '0.15 × 0.25 = 0.0375', '0.0375 ÷ 0.20 = 0.1875', '0.50 + 0.1875 = 0.6875'))
t8 += row(3, 'do the division of the two numbers first (× and ÷ can go in any order): 0.15 ÷ 1.5 = 0.10', 'x = 0.50 + 0.10 × (r + 0.175) ÷ r', L('0.20 + 0.175 = 0.375', '0.10 × 0.375 = 0.0375', '0.0375 ÷ 0.20 = 0.1875', '0.50 + 0.1875 = 0.6875'))
t8 += row(4, 'divide each part of the bracket by r: (r + 0.175) ÷ r = r ÷ r + 0.175 ÷ r', 'x = 0.50 + 0.10 × (r ÷ r + 0.175 ÷ r)', L('0.20 ÷ 0.20 = 1', '0.175 ÷ 0.20 = 0.875', '1 + 0.875 = 1.875', '0.10 × 1.875 = 0.1875', '0.50 + 0.1875 = 0.6875'))
t8 += row(5, 'r ÷ r = 1', 'x = 0.50 + 0.10 × (1 + 0.175 ÷ r)', L('0.175 ÷ 0.20 = 0.875', '1 + 0.875 = 1.875', '0.10 × 1.875 = 0.1875', '0.50 + 0.1875 = 0.6875'))
t8 += row(6, 'multiply each part of the bracket by 0.10: 0.10 × 1 = 0.10, and 0.10 × 0.175 = 0.0175', 'x = 0.50 + 0.10 + 0.0175 ÷ r', L('0.0175 ÷ 0.20 = 0.0875', '0.50 + 0.10 = 0.60', '0.60 + 0.0875 = 0.6875'))
t8 += row(7, 'add the two numbers: 0.50 + 0.10 = 0.60', 'x = 0.60 + 0.0175 ÷ r', L('0.0175 ÷ 0.20 = 0.0875', '0.60 + 0.0875 = 0.6875 = S.x'))
steps.append(dict(kind='many', uses=['str', 'dfr'], new='curve',
  cap='<b>Step 8 of 9 — put the d-from-r formula into the stretch rule.</b> The stretch rule still contains d. The d-from-r formula of step 6 gives d from r. We put it in and tidy up, one move per line. The numbers column puts r = 0.20 into every line: the value stays 0.6875 on every line, so no move changed the result.',
  known='<span class="bdg b-fd">found here</span> the x of the pixel that shows a point of the white line, from its distance r alone: no d, no trying',
  table=t8,
  result='New: ' + chip('curve', 'curve formula', 'x = 0.60 + 0.0175 ÷ r', 'from step 8') + ' — valid inside the band: r from 0.15 (the peak) to 0.35 (P). Above P the push is 0, and the curve is the white line itself. The yellow dots are made by this formula from the white dots.'))

# ---- step 9: the gray line from P and the peak, both from the curve formula
pr = fr('0.35')
q1 = div(fr('0.0175'), pr)      # 0.05
PX = add(fr('0.60'), q1)        # 0.65
s35 = sq(pr)                    # 0.1225
pd = sub(s35, c0225)            # 0.10
proot = sqrt(pd)                # 0.316
PY = sub(fr('0.5'), proot)      # 0.184
q2 = div(fr('0.0175'), c15)     # 0.117
PKX = add(fr('0.60'), q2)       # 0.717
dy_ = sub(fr('0.5'), PY)        # 0.316
dx_ = sub(PKX, PX)              # 0.067
slope = div(dx_, dy_)           # 0.212
prod = mul(PY, slope)           # 0.039
icpt = sub(fr('0.65'), prod)    # 0.611
gm = mul(slope, SY)             # 0.071
gx = add(icpt, gm)              # 0.682
gap = sub(SX, gx)               # 0.0055
print('P', fmt(PX), fmt(PY), 'peak', fmt(PKX), 'slope', fmt(slope), 'icpt', fmt(icpt), 'gx', fmt(gx), 'gap', fmt(gap))
t9 = head('With numbers: P, the peak, and S = (' + fmt(SX) + ', ' + fmt(SY) + ')')
t9 += row(1, f'P is the point of the white line on the outer ring, so r = 0.35. The {fn("curve","curve formula")} gives the x of its pixel: 0.65. So P gets no push; P shows itself', 'x = 0.60 + 0.0175 ÷ r', L(op('0.0175', D, '0.35', fmt(q1)), op('0.60', '+', fmt(q1), fmt(PX))))
t9 += row(2, f'P.y: the point of the white line 0.35 from C ({fn("dist","length formula")}, as in step 3)', 'P.y = 0.50 − √(0.35² − 0.15²)', L('0.35 × 0.35 = 0.1225', '0.15 × 0.15 = 0.0225', op('0.1225', M, '0.0225', fmt(pd)), f'{SQ}{fmt(pd)} = {fmt(proot)}', op('0.50', M, fmt(proot), fmt(PY))))
t9 += row(3, f'the peak shows the point (0.65, 0.50) of the white line: it is 0.15 from C, so r = 0.15. The {fn("curve","curve formula")} again', 'x = 0.60 + 0.0175 ÷ r', L(op('0.0175', D, '0.15', fmt(q2)), op('0.60', '+', fmt(q2), fmt(PKX)), f'the peak = ({fmt(PKX)}, 0.50)'))
t9 += row(4, f'the gray line: the straight line through P and the peak — a {fn("lerp","lerp")} (Chapter 5): x moves by the same amount for every step of y', 'x = P.x + (y − P.y)\n      ÷ (peak.y − P.y)\n      × (peak.x − P.x)', L(op('0.50', M, fmt(PY), fmt(dy_)), op(fmt(PKX), M, '0.65', fmt(dx_))))
t9 += row(5, 'do the division of the two fixed numbers first (× and ÷ can go in any order): (peak.x − P.x) ÷ (peak.y − P.y)', f'x = 0.65 + (y − {fmt(PY)}) × {fmt(slope)}', op(fmt(dx_), D, fmt(dy_), fmt(slope)))
t9 += row(6, f'multiply the bracket out: (y − {fmt(PY)}) × {fmt(slope)} = {fmt(slope)} × y − {fmt(PY)} × {fmt(slope)}', f'x = 0.65 − {fmt(PY)} × {fmt(slope)} + {fmt(slope)} × y', op(fmt(PY), X, fmt(slope), fmt(prod)))
t9 += row(7, 'subtract the two fixed numbers', f'x = {fmt(icpt)} + {fmt(slope)} × y', op('0.65', M, fmt(prod), fmt(icpt)))
t9 += row(8, f'the gray line on the row of S, y = {fmt(SY)}', f'x = {fmt(icpt)} + {fmt(slope)} × {fmt(SY)}', L(op(fmt(slope), X, fmt(SY), fmt(gm)), op(fmt(icpt), '+', fmt(gm), fmt(gx))))
t9 += row(9, 'the gap at S: the curve minus the gray line (the red segment)', 'gap = S.x − gray-line x', op(fmt(SX), M, fmt(gx), fmt(gap)))
steps.append(dict(kind='cmp', uses=['curve', 'dist', 'lerp'], new='gray',
  cap='<b>Step 9 of 9 — compare with a straight line.</b> The <b>gray line</b> is the straight line through P and the peak: the two ends of the bent part of the curve. Here we build its formula from two points of the curve formula, on this screen. Then we measure the gap between the curve and the gray line at S. A straight line has the form x = (a fixed number) + (a fixed number) × y. The curve formula divides by r, and r contains a square root, so the curve cannot have that form.',
  known='<span class="bdg b-ch">known</span> the curve formula (step 8), S (step 7) <span class="bdg b-fd">found here</span> the gray line, and the gap at S',
  table=t9,
  result=f'The gray line: <code>x = {fmt(icpt)} + {fmt(slope)} × y</code> — only “fixed + fixed × y”. The curve: <code>x = 0.60 + 0.0175 ÷ r</code> — “÷ r”, and r has a square root inside. At S the curve is {fmt(gap)} to the right of the gray line (the thick red segment). The lesson writes the gray line with 6 decimals: x = 0.611257 + 0.210819 × y. With 3 decimals the second number is {fmt(slope)}, not 0.211, because 0.066667 was rounded to {fmt(dx_)} before the division.'))

steps_out = [dict(st, cap=dread(st['cap']), known=dread(st['known']), table=dread(st['table']), result=dread(st['result'])) for st in steps]
json.dump(steps_out, open(os.path.join(OUT, 'c9.json'), 'w'), ensure_ascii=False)
nums = dict(RY=fmt(RY), SX=fmt(SX), SY=fmt(SY), PY=fmt(PY), PKX=fmt(PKX), slope=fmt(slope), icpt=fmt(icpt), gx=fmt(gx), gap=fmt(gap))
json.dump(nums, open(os.path.join(OUT, 'c9nums.json'), 'w'))

# ---------------- the lesson box #upd-derive: steps 1-8 ----------------
FORMS_USE = {  # chips for the box's "Uses" line (same colors)
  'sd': chip('sd', 'sd rule', 'sd = d − 0.25', 'from Lesson 9.2'),
  't': chip('t', 't', 't = (sd + 0.10) ÷ 0.20', 'from Lesson 9.3'),
  'lin': chip('lin', 'linear falloff', 'falloff = 1 − t', 'from Lesson 9.3'),
  'pushc': chip('pushc', 'push', 'push = 0.10 × falloff', 'the chain'),
  'fo': chip('fo', 'falloff formula', 'falloff = (0.35 − d) ÷ 0.20', 'from step 1'),
  'dist': chip('dist', 'length formula', 'd = √(p.x² + p.y²)', 'the chain, Lesson 9.1'),
  'dir': chip('dir', 'direction', 'dir = p ÷ d', 'the chain'),
  'read': chip('read', 'read point', 'readUv = uv − dir × push', 'the chain'),
  'ray': chip('ray', 'ray rule', 'r = d − push', 'from step 4'),
  'push': chip('push', 'push formula', 'push = 0.175 − 0.5 × d', 'from step 2'),
  'rfd': chip('rfd', 'r-from-d formula', 'r = 1.5 × d − 0.175', 'from step 5'),
  'dfr': chip('dfr', 'd-from-r formula', 'd = (r + 0.175) ÷ 1.5', 'from step 6'),
  'r': chip('r', 'R and r', 'R = (0.65, ' + fmt(RY) + '), r = 0.20', 'from step 3'),
  'str': chip('str', 'stretch rule', 'S.x = 0.50 + 0.15 × d ÷ r', 'from step 7'),
}
box = []
box.append('<details id="upd-derive"><summary>Where x = 0.60 + 0.0175 ÷ r comes from — step by step</summary><div class="body">')
box.append('<p class="small">The same steps as Q&amp;A card 9, which also draws a picture for every step. R = (0.65, ' + fmt(RY) + ') is the point of the white line 0.20 from C. S is the output pixel that shows R. Every step shows the formulas that it uses; a formula that is put in keeps its color; every line does one move, named in words; the numbers column checks every line. Numbers have 3 decimals; a result that is exact with 4 decimals, like 0.6875, is kept.<a class="upd" href="lesson-09-11-qa.html#q9">updated · Q&amp;A 9</a><a class="upd" href="lesson-09-11-qa.html#q11">updated · Q&amp;A 11</a></p>')
titles = ['linear falloff, written with d', 'the push, written with d', 'pick a point R of the white line', 'the ray rule', 'put the push formula into the ray rule', 'turn it around: d from r', 'the stretch rule', 'put the d-from-r formula into the stretch rule']
for i, st in enumerate(steps[:8]):
    tab = st['table']
    if st['kind'] == 'ray4':
        tab = tab.replace('read the three rulers beside the violet ray: the blue ruler (C to R) and the teal ruler (R to S) together are as long as the yellow ruler (C to S)',
                          'along the ray from C: C to R is r, R to S is the push, C to S is d (the three rulers of Q&amp;A card 9, step 4)')
    if st['kind'] == 'tri':
        tab = tab.replace('(the triangle grows, see the picture)', '(the triangle grows: Q&amp;A card 9, step 7)')
    uses = ' '.join(FORMS_USE[u] for u in st['uses'])
    if st['kind'] == 'ray4':
        usesline = '<span class="uselabel">Uses:</span> ' + uses + ' <span class="uselabel">and the picture of Q&amp;A card 9, step 4.</span>'
    else:
        usesline = '<span class="uselabel">Uses:</span> ' + uses
    box.append(f'<h4>Step {i+1} — {titles[i]}</h4><div class="chips">{usesline}</div><table class="deriv">{tab}</table><div class="res">{st["result"]}</div>')
box.append('</div></details>')
open(os.path.join(OUT, 'lesson_box.html'), 'w').write(dread(''.join(box)))
print('steps', len(steps), 'box chars', sum(len(b) for b in box))

# ---------------- card 10, step C: a check with the curve formula, in full ----------------
Lk, vk = chain('0.705', '0.40', 'linear')
K_d, K_push, K_dy, K_ey, K_ry = vk['d'], vk['push'], vk['dy'], vk['ey'], vk['ry']
rk_ox = sub('0.65', '0.5'); rk_oy = sub(K_ry, '0.5'); rk_s = sq(rk_ox) + sq(rk_oy); rk_r = sqrt(rk_s)
q15 = div('0.15', '1.5'); c060 = add('0.5', q15); c0175 = mul(q15, '0.175')
qk = div(c0175, rk_r); kx = add(c060, qk)
assert fmt(kx) == '0.705', kx
tc = head('With numbers: K = (0.705, 0.40), the pixel of Step B')
tc += row(1, f'the {fn("dir","direction")} of K, y part. K’s d = {fmt(K_d)} comes from Step A, line 3', 'dir.y = p.y ÷ d', op(fo(fr('-0.10')), D, fmt(K_d), fmt(K_dy)))
tc += row(2, f'the move of the read point, y part. K’s {fn("pushc","push")} = {fmt(K_push)} comes from Step A, line 7', 'disp.y = dir.y × push', op(fo(K_dy), X, fmt(K_push), fmt(K_ey)))
tc += row(3, f'the {fn("read","read point")}, y part', 'readUv.y = y − disp.y', f'0.40 {M} {fo(K_ey)} = 0.40 + {fmt(-K_ey)} = {fmt(K_ry)}')
tc += row(4, 'so K reads R_K: its x is 0.65 (Step A, line 10), its y comes from line 3', 'R_K = (readUv.x, readUv.y)', f'R_K = (0.65, {fmt(K_ry)})')
tc += row(5, f'r: the distance from C to R_K — the {fn("dist","length formula")}, used for R_K', 'r = √((R_K.x − 0.50)² + (R_K.y − 0.50)²)',
          L(op('0.65', M, '0.50', fmt(rk_ox)), op(fmt(K_ry), M, '0.50', fmt(rk_oy)), op(fmt(rk_ox), X, fmt(rk_ox), fmt(sq(rk_ox))), op(fo(rk_oy), X, fo(rk_oy), fmt(sq(rk_oy))), op(fmt(sq(rk_ox)), '+', fmt(sq(rk_oy)), fmt(rk_s)), f'{SQ}{fmt(rk_s)} = {fmt(rk_r)}'))
tc += row(6, 'the two numbers of the curve formula (card 9, steps 7 and 8): 0.15 is how far the white line is right of C; 1.5 and 0.175 come from the r-from-d formula r = 1.5 × d − 0.175', '0.60 = 0.50 + 0.15 ÷ 1.5\n0.0175 = (0.15 ÷ 1.5) × 0.175',
          L(op('0.15', D, '1.5', fmt(q15)), op('0.50', '+', fmt(q15), fmt(c060)), op(fmt(q15), X, '0.175', fmt(c0175))))
tc += row(7, f'the {fn("curve","curve formula")} (card 9, step 8)', 'x = 0.60 + 0.0175 ÷ r', L(op('0.0175', D, fmt(rk_r), fmt(qk)), op('0.60', '+', fmt(qk), fmt(kx))))
tc += row(8, 'compare with Step B', 'x = K.x', f'{fmt(kx)} = 0.705: the same pixel')
refresher = ('<div class="refresh"><b>Where the curve formula comes from</b> — card 9, in five lines:<ol>'
  f'<li>{chip("ray","ray rule","r = d − push","step 4")} — the read point is closer to C by the push (every rule).</li>'
  f'<li>put in the {chip("push","push formula","push = 0.175 − 0.5 × d","step 2")} → {chip("rfd","r-from-d formula","r = 1.5 × d − 0.175","step 5")}</li>'
  f'<li>turn it around → {chip("dfr","d-from-r formula","d = (r + 0.175) ÷ 1.5","step 6")}</li>'
  f'<li>{chip("str","stretch rule","x = 0.50 + 0.15 × d ÷ r","step 7")} — the pixel is d ÷ r times as far from C as its read point (every rule).</li>'
  f'<li>put in the d-from-r formula → {chip("curve","curve formula","x = 0.60 + 0.0175 ÷ r","step 8")} (linear only).</li></ol></div>')
usesC = ('<span class="uselabel">Uses:</span> ' + chip('dir', 'direction', 'dir = p ÷ d', 'the chain') + ' ' + chip('pushc', 'push', 'push = 0.10 × falloff', 'the chain') + ' '
         + chip('read', 'read point', 'readUv = uv − dir × push', 'the chain') + ' ' + chip('dist', 'length formula', 'd = √(p.x² + p.y²)', 'the chain, Lesson 9.1') + ' '
         + chip('curve', 'curve formula', 'x = 0.60 + 0.0175 ÷ r', 'card 9, step 8'))
open(os.path.join(OUT, 'c10C.html'), 'w').write(dread(f'<div class="chips">{usesC}</div>{refresher}<table class="deriv">{tc}</table>'))
json.dump(dict(Kry=fmt(K_ry), r=fmt(rk_r), Kd=fmt(K_d), Kpush=fmt(K_push)), open(os.path.join(OUT, 'c10nums.json'), 'w'))
print('card 10 C: R_K.y', fmt(K_ry), 'r', fmt(rk_r), 'x', fmt(kx))

# ---------------- card 15: the gray line, K from R_K, and the gap at K ----------------
rows9 = t9.split('<tr>')[2:9]          # the rows 1-7 of step 9 (index 0 is empty, 1 is the head)
t15 = head('With numbers: P, the peak, and K')
t15 += ''.join('<tr>' + r_ for r_ in rows9)
ky_off = sub('0.427', '0.5'); ks = c0225 + sq(ky_off); kr = sqrt(ks)
kq = div('0.0175', kr); kX = add('0.60', kq)
kd = div(add(kr, '0.175'), '1.5'); kra = div(kd, kr); kyo = mul(ky_off, kra); kY = add('0.5', kyo)
kg = mul(slope, '0.40'); kgx = add(icpt, kg); kgap = sub(kX, kgx)
t15 += row(8, f'K shows the point R_K = (0.65, 0.427) of the white line. (Card 10 finds R_K from the chain of K.) Its distance r, with the {fn("dist","length formula")}', 'r = √(0.15² + (R_K.y − 0.50)²)',
           L(op('0.427', M, '0.50', fmt(ky_off)), '0.15 × 0.15 = 0.0225', op(fo(ky_off), X, fo(ky_off), fmt(sq(ky_off))), op('0.0225', '+', fmt(sq(ky_off)), fmt(ks)), f'{SQ}{fmt(ks)} = {fmt(kr)}'))
t15 += row(9, f'K.x with the {fn("curve","curve formula")} (card 9, step 8)', 'x = 0.60 + 0.0175 ÷ r', L(op('0.0175', D, fmt(kr), fmt(kq)), op('0.60', '+', fmt(kq), fmt(kX))))
t15 += row(10, f'K.y with the {fn("str","stretch rule")}, y part (card 9, step 7); d from the {fn("dfr","d-from-r formula")} (step 6)', 'd = (r + 0.175) ÷ 1.5\ny = 0.50 + (R_K.y − 0.50) × (d ÷ r)',
           L(op(fmt(kr), '+', '0.175', fmt(add(kr, '0.175'))), op(fmt(add(kr, '0.175')), D, '1.5', fmt(kd)), op(fmt(kd), D, fmt(kr), fmt(kra)), op(fo(ky_off), X, fmt(kra), fmt(kyo)), f'0.50 + {fo(kyo)} = 0.50 {M} {fmt(-kyo)} = {fmt(kY)}'))
t15 += row(11, 'the gray line on the row of K, y = 0.40', f'x = {fmt(icpt)} + {fmt(slope)} × 0.40', L(op(fmt(slope), X, '0.40', fmt(kg)), op(fmt(icpt), '+', fmt(kg), fmt(kgx))))
t15 += row(12, 'the gap at K: the curve minus the gray line (the red segment)', 'gap = K.x − gray-line x', op(fmt(kX), M, fmt(kgx), fmt(kgap)))
open(os.path.join(OUT, 'c15.html'), 'w').write(dread(t15))
print('card 15: K', fmt(kX), fmt(kY), 'gray', fmt(kgx), 'gap', fmt(kgap))

# ---------------- card 16: which formulas hold for smoothstep ----------------
Y_ = '<b class="yes">yes</b>'; N_ = '<b class="no">no</b>'
t16 = '<tr><th>Card 9, step</th><th>Formula</th><th>linear</th><th>smoothstep</th><th>Why</th></tr>'
for stp, name, code, lin, smo, why in [
    ('1', chip('fo','falloff formula','falloff = (0.35 − d) ÷ 0.20','step 1'), '', Y_, N_, 'It is 1 − t written with d. Smoothstep uses 1 − (3t² − 2t³).'),
    ('2', chip('push','push formula','push = 0.175 − 0.5 × d','step 2'), '', Y_, N_, 'Built from step 1.'),
    ('3', chip('r','R and r','R = (0.65, 0.368), r = 0.20','step 3'), '', Y_, Y_, 'Only the white line and the length formula: no falloff.'),
    ('4', chip('ray','ray rule','r = d − push','step 4'), '', Y_, Y_, 'The push points at C for every rule, so the read point is always closer to C by the push.'),
    ('5', chip('rfd','r-from-d formula','r = 1.5 × d − 0.175','step 5'), '', Y_, N_, 'Built from the push formula. Smoothstep: r = d − 0.10 × (1 − 3t² + 2t³), with t = (d − 0.15) ÷ 0.20.'),
    ('6', chip('dfr','d-from-r formula','d = (r + 0.175) ÷ 1.5','step 6'), '', Y_, N_, 'With smoothstep, r written with d contains d³. Turning it around has no short formula.'),
    ('7', chip('str','stretch rule','S.x = 0.50 + 0.15 × d ÷ r','step 7'), '', Y_, Y_, 'Only geometry: S lies on the ray through R, d ÷ r times as far from C.'),
    ('8', chip('curve','curve formula','x = 0.60 + 0.0175 ÷ r','step 8'), '', Y_, N_, 'Built from step 6. With smoothstep, the pixel for a point of the white line is found by trying.')]:
    t16 += f'<tr><td class="k">{stp}</td><td>{name}</td><td class="k">{lin}</td><td class="k">{smo}</td><td>{why}</td></tr>'
open(os.path.join(OUT, 'c16.html'), 'w').write(dread(t16))

# ---------------- card 19: squaring and x to the 4th ----------------
from decimal import Decimal as Dm, ROUND_HALF_UP
def s3(v):
    v = Dm(v)
    if v == 0: return '0'
    q = Dm(1).scaleb(v.adjusted() - 2)
    out = str(v.quantize(q, rounding=ROUND_HALF_UP))
    if 'E' in out or 'e' in out: out = format(v.quantize(q, rounding=ROUND_HALF_UP), 'f')
    if '.' in out: out = out.rstrip('0').rstrip('.')
    return out.replace('-', M)
t19a = head('With numbers')
t19a += row(1, 'the equation: y is under a square root', '√y = 3', '')
t19a += row(2, '<b>square</b> both sides: multiply each side by itself', '√y × √y = 3 × 3', '3 × 3 = 9')
t19a += row(3, 'a square root times itself gives back what is under it: √y × √y = y', 'y = 9', '')
t19a += row(4, 'check: put y = 9 into line 1', '√9 = 3', '√9 = 3: yes')
t19b = head('With numbers: x = 4')
t19b += row(1, 'x is outside the root, and x is also inside it', 'x × √(x² + 9) = 20', L('4 × 4 = 16', '16 + 9 = 25', '√25 = 5', '4 × 5 = 20: yes'))
t19b += row(2, 'square both sides: multiply each side by itself', '(x × √(x² + 9)) × (x × √(x² + 9))\n  = 20 × 20', '20 × 20 = 400')
t19b += row(3, 'put the two x together, and the two roots together: x × x = x², and √ × √ removes the root', 'x² × (x² + 9) = 400', L('16 × 25 = 400: yes'))
t19b += row(4, 'multiply the bracket out: <b>x² × x² = x⁴</b> — the outside x, squared, meets the x² from inside the root', 'x⁴ + 9 × x² = 400', L('16 × 16 = 256', '9 × 16 = 144', '256 + 144 = 400: yes'))
# our condition, x = 0.705: p.x = 0.205, d = 0.228, push = 0.061, dir.x x push = 0.055 (Step A)
t19c = head('With numbers: x = 0.705, so p.x = 0.205 (Step A: d = 0.228, dir.x × push = 0.055)')
t19c += row(1, 'the condition (card 10, Step A, line 12)', 'x − (x − 0.50) ÷ d × (0.175 − 0.5 × d)\n  = 0.65', L('left: 0.705 − 0.055 = 0.65', 'right: 0.65'))
t19c += row(2, f'write x − 0.50 as p.x (the {fn("p","arrow p")}), and x as 0.50 + p.x', '0.50 + p.x − p.x ÷ d × (0.175 − 0.5 × d)\n  = 0.65', L('0.50 + 0.205 = 0.705', '0.705 − 0.055 = 0.65'))
t19c += row(3, 'take 0.50 away from both sides', 'p.x − p.x ÷ d × (0.175 − 0.5 × d) = 0.15', L('left: 0.205 − 0.055 = 0.15', 'right: 0.65 − 0.50 = 0.15'))
t19c += row(4, 'multiply the bracket out: p.x ÷ d × 0.175 = 0.175 × p.x ÷ d, and p.x ÷ d × 0.5 × d = 0.5 × p.x (÷ d and × d cancel)', 'p.x − 0.175 × p.x ÷ d + 0.5 × p.x = 0.15',
            L('0.175 × 0.205 = 0.036', '0.036 ÷ 0.228 = 0.158', '0.5 × 0.205 = 0.1025', '0.205 − 0.158 = 0.047', '0.047 + 0.1025 = 0.1495', '0.1495: 0.15 up to the rounding'))
t19c += row(5, 'add the two p.x parts: p.x + 0.5 × p.x = 1.5 × p.x', '1.5 × p.x − 0.175 × p.x ÷ d = 0.15', L('1.5 × 0.205 = 0.3075', '0.3075 − 0.158 = 0.1495'))
t19c += row(6, 'multiply both sides by d: this removes the “÷ d”', '1.5 × p.x × d − 0.175 × p.x = 0.15 × d', L('left: 0.3075 × 0.228 = 0.07', '0.07 − 0.036 = 0.034', 'right: 0.15 × 0.228 = 0.0342', '0.034 and 0.0342: equal up to the rounding'))
t19c += row(7, 'move 0.15 × d to the left side, and 0.175 × p.x to the right side (each move changes the sign)', '1.5 × p.x × d − 0.15 × d = 0.175 × p.x', L('left: 0.07 − 0.0342 = 0.0358', 'right: 0.036'))
t19c += row(8, 'take d out of both left parts: 1.5 × p.x × d − 0.15 × d = d × (1.5 × p.x − 0.15). Now d — the square root — stands once, times a bracket', 'd × (1.5 × p.x − 0.15) = 0.175 × p.x', L('0.3075 − 0.15 = 0.1575', 'left: 0.228 × 0.1575 = 0.036', 'right: 0.036'))
t19c += row(9, '<b>square</b> both sides: multiply each side by itself', 'd × d × (1.5 × p.x − 0.15)²\n  = (0.175 × p.x)²', L('d × d = √0.052025 × √0.052025 = 0.052025', '0.1575 × 0.1575 = 0.02480625', 'left: 0.052025 × 0.02480625 = ' + s3('0.00129054515625'), 'right: 0.035875 × 0.035875 = ' + s3('0.001287015625')))
t19c += row(10, 'd × d is what is under the root: d × d = p.x² + 0.01 (Step A, line 3). The root is gone', '(p.x² + 0.01) × (1.5 × p.x − 0.15)²\n  = 0.030625 × p.x²', L('0.042025 + 0.01 = 0.052025', 'left: 0.052025 × 0.02480625 = ' + s3(Dm('0.052025') * Dm('0.02480625')), '0.175 × 0.175 = 0.030625', 'right: 0.030625 × 0.042025 = ' + s3(Dm('0.030625') * Dm('0.042025'))))
t19c += row(11, '<b>the 4th power</b>: the first bracket has p.x², and the second bracket, squared, has (1.5 × p.x)² = 2.25 × p.x². Their product has p.x² × 2.25 × p.x² = 2.25 × p.x⁴', '2.25 × p.x⁴ + (smaller powers) …', L('p.x² = 0.042025', '0.042025 × 0.042025 = ' + s3('0.001766100625'), '2.25 × ' + s3('0.001766100625') + ' = ' + s3(Dm('2.25') * Dm(s3('0.001766100625')))))
t19d = head('With numbers: p.x = 0.205 (3 digits after the zeros)')
t19d += row(12, 'the square of a difference: (A − B)² = A² − 2 × A × B + B², with A = 1.5 × p.x and B = 0.15', '(1.5 × p.x − 0.15)²\n  = 2.25 × p.x² − 0.45 × p.x + 0.0225', L('2.25 × 0.042025 = ' + s3(Dm('2.25') * Dm('0.042025')), '0.45 × 0.205 = ' + s3(Dm('0.45') * Dm('0.205')), s3(Dm('2.25') * Dm('0.042025')) + ' − ' + s3(Dm('0.45') * Dm('0.205')) + ' = ' + s3(Dm(s3(Dm('2.25') * Dm('0.042025'))) - Dm(s3(Dm('0.45') * Dm('0.205')))), s3(Dm(s3(Dm('2.25') * Dm('0.042025'))) - Dm(s3(Dm('0.45') * Dm('0.205')))) + ' + 0.0225 = ' + s3(Dm(s3(Dm(s3(Dm('2.25') * Dm('0.042025'))) - Dm(s3(Dm('0.45') * Dm('0.205'))))) + Dm('0.0225')), 'line 9 has 0.02480625: equal up to the rounding'))
# 2026-09-29: every line uses the value shown in the line above it (2.25 × 0.00177 = 0.00398, as in line 11), so a calculator reproduces it
def S3(v):
    return Dm(s3(v).replace(M, '-'))   # the shown (rounded) value, as a number
P2 = Dm('0.042025')
P3 = S3(P2 * Dm('0.205')); P4 = S3(P2 * P2)   # 0.00862 and 0.00177, as shown
a4 = S3(Dm('2.25') * P4); a3 = S3(Dm('0.45') * P3); a2 = S3(Dm('0.0225') * P2); a1 = S3(Dm('0.0045') * Dm('0.205')); a0 = Dm('0.000225'); a2b = S3(Dm('0.014375') * P2)
u1 = S3(a4 - a3); u2 = S3(u1 + a2b); u3 = S3(u2 - a1); u4 = S3(u3 + a0)
a2x = S3(Dm('0.045') * P2); v1 = S3(a4 - a3); v2 = S3(v1 + a2x); v3 = S3(v2 - a1); v4 = S3(v3 + a0); rgt = S3(Dm('0.030625') * P2)
t19d += row(13, 'multiply by (p.x² + 0.01): each part of one bracket times each part of the other', '2.25 × p.x⁴ − 0.45 × p.x³ + 0.0225 × p.x²\n  + 0.0225 × p.x² − 0.0045 × p.x + 0.000225\n  = 0.030625 × p.x²',
            L('p.x³ = 0.042025 × 0.205 = ' + s3(P3), 'p.x⁴ = 0.042025 × 0.042025 = ' + s3(P4), '2.25 × p.x⁴ = 2.25 × ' + s3(P4) + ' = ' + s3(a4), '0.45 × p.x³ = 0.45 × ' + s3(P3) + ' = ' + s3(a3), '0.0225 × p.x² = 0.0225 × 0.042025 = ' + s3(a2), '0.0045 × p.x = 0.0045 × 0.205 = ' + s3(a1)))
t19d += row(14, 'add the two p.x² parts: 0.0225 + 0.0225 = 0.045', '2.25 × p.x⁴ − 0.45 × p.x³ + 0.045 × p.x²\n  − 0.0045 × p.x + 0.000225 = 0.030625 × p.x²', L(s3(a2) + ' + ' + s3(a2) + ' = ' + s3(a2 + a2), '0.045 × p.x² = 0.045 × 0.042025 = ' + s3(Dm('0.045') * P2), 'left: ' + s3(a4) + ' − ' + s3(a3) + ' = ' + s3(v1), s3(v1) + ' + ' + s3(a2x) + ' = ' + s3(v2), s3(v2) + ' − ' + s3(a1) + ' = ' + s3(v3), s3(v3) + ' + 0.000225 = ' + s3(v4), 'right: 0.030625 × 0.042025 = ' + s3(rgt), s3(v4) + ' and ' + s3(rgt) + ': equal up to the rounding'))
t19d += row(15, 'take 0.030625 × p.x² away from both sides: 0.045 − 0.030625 = 0.014375', '2.25 × p.x⁴ − 0.45 × p.x³ + 0.014375 × p.x²\n  − 0.0045 × p.x + 0.000225 = 0',
            L('0.014375 × p.x² = 0.014375 × 0.042025 = ' + s3(a2b), s3(a4) + ' − ' + s3(a3) + ' = ' + s3(u1), s3(u1) + ' + ' + s3(a2b) + ' = ' + s3(u2), s3(u2) + ' − ' + s3(a1) + ' = ' + s3(u3), s3(u3) + ' + 0.000225 = ' + s3(u4), 'almost 0: x = 0.705 is the answer rounded to 3 decimals'))
open(os.path.join(OUT, 'c19a.html'), 'w').write(t19a)
open(os.path.join(OUT, 'c19b.html'), 'w').write(t19b)
open(os.path.join(OUT, 'c19c.html'), 'w').write(t19c)
open(os.path.join(OUT, 'c19d.html'), 'w').write(t19d)
print('card 19 end sum', s3(u4))

# ---------------- card 23: the walk back from R_K ----------------
w_ox = sub('0.65', '0.5'); w_oy = sub('0.427', '0.5'); w_s = sq(w_ox) + sq(w_oy); w_r = sqrt(w_s)
w_dx = div(w_ox, w_r); w_dy = div(w_oy, w_r); w_rr = add(w_r, '0.175'); w_d = div(w_rr, '1.5'); w_push = sub(w_d, w_r)
w_wx = mul(w_dx, w_push); w_wy = mul(w_dy, w_push); w_Kx = add('0.65', w_wx); w_Ky = add('0.427', w_wy)
t23 = head('With numbers: R_K = (0.65, 0.427)')
t23 += row(1, 'the walk: start at the read point R_K, go outward along its direction from C, by the push of the pixel', 'K = R_K + dir × push', '')
t23 += row(2, f'r: the distance from C to R_K ({fn("dist","length formula")})', 'r = √((R_K.x − 0.50)² + (R_K.y − 0.50)²)', L(op('0.65', M, '0.50', fmt(w_ox)), op('0.427', M, '0.50', fmt(w_oy)), '0.15 × 0.15 = 0.0225', op(fo(w_oy), X, fo(w_oy), fmt(sq(w_oy))), op('0.0225', '+', fmt(sq(w_oy)), fmt(w_s)), f'{SQ}{fmt(w_s)} = {fmt(w_r)}'))
t23 += row(3, f'the unit vector (the {fn("dir","direction")}, length 1) of R_K. K lies on the same ray from C, so K has the same direction', 'dir = (R_K − C) ÷ r', L(op(fmt(w_ox), D, fmt(w_r), fmt(w_dx)), op(fo(w_oy), D, fmt(w_r), fmt(w_dy))))
t23 += row(4, f'the pixel’s distance d: the {fn("dfr","d-from-r formula")} (card 9, step 6). We cannot use length(p) yet: p belongs to the pixel, and the pixel is what we look for (card 24)', 'd = (r + 0.175) ÷ 1.5', L(op(fmt(w_r), '+', '0.175', fmt(w_rr)), op(fmt(w_rr), D, '1.5', fmt(w_d))))
t23 += row(5, f'the length of the walk: the {fn("ray","ray rule")} r = d − push, turned around', 'push = d − r', op(fmt(w_d), M, fmt(w_r), fmt(w_push)))
t23 += row(6, 'walk, x part', 'K.x = R_K.x + dir.x × push', L(op(fmt(w_dx), X, fmt(w_push), fmt(w_wx)), op('0.65', '+', fmt(w_wx), fmt(w_Kx))))
t23 += row(7, 'walk, y part', 'K.y = R_K.y + dir.y × push', L(op(fo(w_dy), X, fmt(w_push), fmt(w_wy)), f'0.427 + {fo(w_wy)} = 0.427 {M} {fmt(-w_wy)} = {fmt(w_Ky)}', f'K = ({fmt(w_Kx)}, {fmt(w_Ky)}): the pixel of card 10'))
# the walk is the stretch rule, x part
e1 = mul(w_dx, w_push); e_p = mul('0.15', w_d); e_q = div(e_p, w_r)
t23s = head('With numbers: R_K, r = ' + fmt(w_r) + ', d = ' + fmt(w_d))
t23s += row(1, 'the walk, x part', 'x = R.x + dir.x × push', L(op(fmt(w_dx), X, fmt(w_push), fmt(e1)), op('0.65', '+', fmt(e1), fmt(add('0.65', e1)))))
t23s += row(2, f'put in the {fn("dir","direction")}, x part: dir.x = (R.x − 0.50) ÷ r', f'x = R.x + {ins("dir","(R.x − 0.50) ÷ r")} × push', L(op('0.65', M, '0.50', '0.15'), op('0.15', D, fmt(w_r), fmt(w_dx)), op(fmt(w_dx), X, fmt(w_push), fmt(e1)), op('0.65', '+', fmt(e1), fmt(add('0.65', e1)))))
t23s += row(3, f'put in the {fn("ray","ray rule")}, turned around: push = d − r', f'x = R.x + (R.x − 0.50) ÷ r × {ins("ray","(d − r)")}', L(op('0.65', M, '0.50', '0.15'), op('0.15', D, fmt(w_r), fmt(w_dx)), op(fmt(w_d), M, fmt(w_r), fmt(w_push)), op(fmt(w_dx), X, fmt(w_push), fmt(e1)), op('0.65', '+', fmt(e1), fmt(add('0.65', e1)))))
t23s += row(4, 'multiply the bracket out: ÷ r × d = × d ÷ r, and ÷ r × r cancels', 'x = R.x + (R.x − 0.50) × d ÷ r − (R.x − 0.50)', L(op('0.15', X, fmt(w_d), fmt(e_p)), op(fmt(e_p), D, fmt(w_r), fmt(e_q)), op('0.65', '+', fmt(e_q), fmt(add('0.65', e_q))), op(fmt(add('0.65', e_q)), M, '0.15', fmt(sub(add('0.65', e_q), '0.15')))))
t23s += row(5, 'R.x − (R.x − 0.50) = 0.50', f'x = 0.50 + (R.x − 0.50) × d ÷ r   ← the {fn("str","stretch rule")}', op('0.50', '+', fmt(e_q), fmt(add('0.5', e_q))))
# the wrong walk: the read point's own push
h_ = mul('0.5', w_r); pw = sub('0.175', h_); ww_x = mul(w_dx, pw); ww_y = mul(w_dy, pw); K2x = add('0.65', ww_x); K2y = add('0.427', ww_y)
Lw, vw = chain(K2x, K2y, 'linear', label="K′")
t23w = head('With numbers')
t23w += row(1, 'the wrong length: the push formula with R_K’s own distance r, as if R_K were the pixel', 'push = 0.175 − 0.5 × r', L(op('0.5', X, fmt(w_r), fmt(h_)), op('0.175', M, fmt(h_), fmt(pw))))
t23w += row(2, 'the wrong walk', 'K′ = R_K + dir × 0.0915', L(op(fmt(w_dx), X, fmt(pw), fmt(ww_x)), op('0.65', '+', fmt(ww_x), fmt(K2x)), op(fo(w_dy), X, fmt(pw), fmt(ww_y)), f'0.427 + {fo(ww_y)} = 0.427 {M} {fmt(-ww_y)} = {fmt(K2y)}'))
Lwx, vwx = chain(K2x, K2y, 'linear', xonly=True)   # 2026-09-29: the chain in full, x part (it was "d = …, push = … (tooltip of K′)")
assert vwx['rx'] == vw['rx']
t23w += row(3, 'where does K′ read? The chain of K′, x part', 'readUv.x = K′.x − dir.x × push', L(*Lwx, f'{fmt(vw["rx"])} is not 0.65: K′ does not show the white line'))
open(os.path.join(OUT, 'c23.html'), 'w').write(dread(t23))
open(os.path.join(OUT, 'c23s.html'), 'w').write(dread(t23s))
open(os.path.join(OUT, 'c23w.html'), 'w').write(dread(t23w))
json.dump(dict(K2x=fmt(K2x), K2y=fmt(K2y), K2rx=fmt(vw['rx']), K2ry=fmt(vw['ry']), wr=fmt(w_r), wd=fmt(w_d), wpush=fmt(w_push), wdx=fmt(w_dx), wdy=fmt(w_dy), pw=fmt(pw)), open(os.path.join(OUT, 'c23nums.json'), 'w'))
print("card 23: K", fmt(w_Kx), fmt(w_Ky), "K'", fmt(K2x), fmt(K2y), 'reads', fmt(vw['rx']))

# ---------------- card 24: two ways to get d ----------------
Lk2, vk2 = chain('0.705', '0.40', 'linear')
t24 = head('With numbers')
t24 += row(1, f'way 1, before we know the pixel: the {fn("dfr","d-from-r formula")} needs only r, the distance of the read point R_K', 'd = (r + 0.175) ÷ 1.5', L(op(fmt(w_r), '+', '0.175', fmt(w_rr)), op(fmt(w_rr), D, '1.5', fmt(w_d))))
t24 += row(2, 'the walk (card 23) then finds the pixel', 'K = R_K + dir × (d − r)', 'K = (0.705, 0.40)')
t24 += row(3, f'way 2, after we know the pixel: {fn("p","the arrow p")} of K', 'p = K − C', L('0.705 − 0.50 = 0.205', '0.40 − 0.50 = −0.10'))
t24 += row(4, f'the {fn("dist","length formula")}: d = length(p)', 'd = √(p.x² + p.y²)', L('0.205 × 0.205 = 0.042025', '(−0.10) × (−0.10) = 0.01', '0.042025 + 0.01 = 0.052025', f'√0.052025 = {fmt(vk2["d"])}'))
t24 += row(5, 'both ways give the same d', 'd', f'{fmt(w_d)} = {fmt(vk2["d"])}')
open(os.path.join(OUT, 'c24.html'), 'w').write(dread(t24))
print('card 24: d', fmt(w_d), fmt(vk2['d']))
