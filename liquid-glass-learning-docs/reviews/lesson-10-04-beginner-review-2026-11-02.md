# Lesson 10.4 — fresh beginner review (2026-11-02)

**Who reviewed.** A separate agent that did not write the lesson.

**What it read.** Only what the learner sees:
- the text of every state of Section 1 (each step, each button, the flip slider at 0% and 100%);
- every label drawn in the pictures and every tooltip;
- Sections 2–8;
- screenshots of every state, card and exercise.

**Its job.** Read as a total beginner in math and graphics, ask "why?" at every claim, and list what the page does not answer.

**Result.** It checked about 190 claims and listed 30.

| Severity | Count | Meaning |
|---|---|---|
| blocks | 2 | The reader cannot follow the next step without it. |
| slows | 13 | The reader can guess, but must stop. |
| minor | 15 | Wording, or one value printed two ways. |

- Nothing was listed in Sections 3, 4, 6 and 7.
- In Section 8, cards 1–4 answer their questions with reasons.
- Two numeric claims were checked against the page afterwards, and both are right:
  - #20: point 4's dot(N, L) is 0.0488, gray 0.5244;
  - #25: pixel c's N is (−0.542, 0.657, 0.524) when rounded through the chain and (−0.542, 0.658, 0.523) with every digit.

**Status.** Nothing is fixed yet. Fixing most items means adding a line to an existing step, and that needs the learner's decision.

The entries below are the reviewer's report, in reading order.

---

## Entries

### 1 · Hero, 3D caption (00_hero.png) — minor
- **Text:** “Pink: N at W, the pixel this lesson traces.”
- **Why a beginner can't answer it:** Section 1 traces K, not W, so it is unclear which pixel "this lesson" means. Section 2's W tooltip repeats the phrase.
- **Smallest fix:** “W, the pixel Section 2 traces (Section 1 uses K)”.

### 2 · Top "New here" and Step 2 (every button state) — minor
- **Text:** “An arrow and a line from one point always lie in one plane.”
- **Why a beginner can't answer it:** Stated as a rule with no reason. "Why always?" has no answer on the page.
- **Smallest fix:** One sentence: lay a flat sheet along the line and turn it around the line until it touches the arrow.

### 3 · Step 1 — minor
- **Text:** “Why K? K is on the rim, and there none of N's three parts is 0.”
- **Why a beginner can't answer it:** It does not say why a pixel with no 0 part is wanted.
- **Smallest fix:** Add “so each of Steps 7–9 has a move you can see”.

### 4 · Step 1 (01_step1.png), Step 2 "y line" (03_step2.png), Step 8 (14_step8.png) — slows
- **Text:** “L … (0.48, −0.60, 0.64): right, toward the top of the picture, and up.” / “toward the bottom of the picture” / “Why minus? The walk goes toward the bottom of the picture, L toward the top.”
- **Why a beginner can't answer it:**
  - Section 1's pictures never mark "right" or "the top/bottom of the picture". Only the hero does.
  - In the 3D view, x points almost into the screen and y points right, so L is drawn going up and to the left while the text says "right".
  - In Step 8's flat picture, "toward the bottom" is the right-hand side, and nothing says so.
- **Smallest fix:** Draw "right" and "top of the picture" arrows on Section 1's floor, as in the hero, and mark them on Step 8's flat picture.

### 5 · Step 2, title — minor
- **Text:** “N's parts are three such numbers.”
- **Why a beginner can't answer it:** "Such" points back to nothing. Step 1 never defined any kind of number this could refer to.
- **Smallest fix:** “Each part of N says how far N goes along one line.”

### 6 · Step 2, all three button states (02/03/04_step2.png) — slows — suspected before, confirmed
- **Text:** “That line meets the x line at G, 0.302 from S. So N's x part is the distance from S to G.”
- **Why a beginner can't answer it:**
  - The 0.302 is asserted and then repeated as the conclusion, so the argument is circular.
  - Nothing says why the square-corner line from the tip lands exactly where the 0.302 walk along x ends.
  - The missing reason: the rest of the walk to the tip (0.402 along y, 0.864 up) stays at a square corner to the x line.
  - Step 3 and Step 6 ("L's x part: 0.48 (Step 2)") build on this claim.
- **Smallest fix:** Draw the walk S → G → tip, and say that the y and height legs both stand at a square corner to the x line, so the foot is G.

### 7 · Step 3, title — minor
- **Text:** “The same question for L: the dot product.”
- **Why a beginner can't answer it:** It is unclear which question. Step 2 never asked one, and Step 1's question is a different one.
- **Smallest fix:** Name it: Step 2's "how far does N go along x?", now along L.

### 8 · Step 4 (all states) — minor
- **Text:** “The more N and L point the same way, the larger the number.”
- **Why a beginner can't answer it:** "More the same way" has no measure except the number itself. The only reason is to drag and watch. Card 3's frames give the reason, but only in Section 8.
- **Smallest fix:** Add “as L turns toward N, the tip of N gets closer to L's line, so F slides toward the tip”.

### 9 · Step 4, "A square corner with N" state (08_step4.png) — slows — suspected before, confirmed
- **Text:** “A square corner with N: F is at S, so the number is 0.”
- **Why a beginner can't answer it:**
  - It never says why F lands on S. The reason: N itself is then the square-corner line from its tip, and it meets L's line at S.
  - The picture has no square-corner mark at S, and the S and F labels overlap.
- **Smallest fix:** Add “N itself is then the line from its tip at a square corner to L's line, and it meets L's line at S”, and draw the corner mark.

### 10 · Step 4, caption ⓘ — slows
- **Text:** “S to F is a shorter side. ⓘ” (the ⓘ opens “Lesson 4.9 wrote the part of a 1-long arrow as cos(38°)…”)
- **Why a beginner can't answer it:**
  - The reader asks why S to F is shorter than the long side.
  - The ⓘ opens a different topic, the cos name, with a vague "the part".
  - The 9.1 rule that answers it (long side² = SF² + other side², so SF² ≤ 1) is not used.
- **Smallest fix:** Have the ⓘ (or one line) say 1² = SF² + (F to tip)², so SF is at most 1.

### 11 · Step 5 — slows
- **Text:** “The GPU cannot draw a line from the tip of N. So walk from S to the tip of N along its x part… At each stop, draw a line to L's line, at a square corner.”
- **Why a beginner can't answer it:**
  - The "So" does not follow, because walking does not stop the drawing of lines.
  - It also seems to contradict itself: the GPU cannot draw, and the next line says to draw.
  - Who draws, and why does the walk help a GPU?
- **Smallest fix:** Add “We draw these lines only to find a rule; Steps 6–9 turn each one into a multiplication the GPU can do.”

### 12 · Step 5 (10_step5.png) — slows
- **Text:** “So each part moves you along L's line.”
- **Why a beginner can't answer it:**
  - "Moves you along L's line" is a made-up phrase with no definition. You walk in 3D.
  - What actually moves along L's line is the meeting point (F₁ → F₂ → F₃).
  - Steps 6–10 use the phrase constantly.
- **Smallest fix:** Define it once: "a part moves you along L's line" means the meeting point moves from one F to the next.

### 13 · Step 6 (11_step6.png) — minor
- **Text:** “Both have a square corner, a long side of 1, and the same corner at S (the arc).”
- **Why a beginner can't answer it:** "Both" comes before the caption names the lime triangle, which first appears two lines later. The caption also never says where each square corner is (J, Q).
- **Smallest fix:** Name “the lime triangle S, X, J (square corner at J)” before "Both".

### 14 · Step 6, slider 0% and 100% (11/12_step6.png) — slows
- **Text:** “The flip swaps the x line and L's line, so the flip swaps X and the tip of L. The yellow triangle lands exactly on the lime triangle. So “?” = 0.48.”
- **Why a beginner can't answer it:**
  - Nothing says why a flip over the halfway line swaps the two lines.
  - Nothing says why a flip keeps S, lengths and square corners, which is what takes X onto the tip of L and Q onto J.
  - The three facts listed one line earlier are never used. "Exactly" rests only on the slider picture.
  - Card 6 makes the link, but Section 8 says the page does not need it.
- **Smallest fix:** Add “S stays put and a flip keeps lengths and square corners, so X (1 along x) lands on the tip of L (1 along L) and Q's square corner lands on J's.”

### 15 · Step 7 (13_step7.png) and its corner tooltip — blocks
- **Text:** “The two lime triangles have the same shape: a square corner and the same corner at S. So 0.302 times as far along x → 0.302 times as far along L's line.”
- **Why a beginner can't answer it:**
  - "Same shape" is never defined.
  - Nothing says why two corners are enough. Card 6 has just told the reader that two facts do not fix a triangle.
  - Nothing says why "same shape" makes every side scale by 0.302.
  - This is the step that turns the picture into a multiplication.
- **Smallest fix:** “Grow the small triangle from S by 1 ÷ 0.302: its corners stay the same, so it lands on the big one, and growing multiplies every side by the same number.”

### 16 · Step 8 (14_step8.png) — blocks — suspected before, confirmed
- **Text:** “That start changes nothing: a copy of the y part from S moves you the same. Why? Slide a part without turning it: both of its ends shift equally along L's line.”
- **Why a beginner can't answer it:**
  - The "why" just repeats the claim in other words: why do both ends shift equally?
  - No slide is drawn.
  - The 3D picture labels F₂ (tooltip: −0.09624) and the copy's foot at a different spot, and F₁ is not drawn. So the reader cannot compare the two moves, and the picture seems to say the start does matter.
  - Where −0.09624 comes from is only explained in Step 10.
- **Smallest fix:** Draw both moves (F₁→F₂ and S→the copy's foot, each 0.2412) and give a non-circular reason. For example: flat walls at a square corner to L's line at each ruler mark; the same walk crosses the same walls wherever it starts.

### 17 · Step 8 and Step 9 (14_step8.png, 15_step9.png) — slows
- **Text:** “The same flip works with the y line.” / “The same flip works with the height line.”
- **Why a beginner can't answer it:**
  - Neither step draws a gray line, a slider or a flip.
  - Step 8 is a different case: L's y part is negative, so the yellow triangle (Q at −0.60) and the walk's triangle are on opposite sides of S.
  - Step 6's "both lie between the two lines" no longer holds there.
  - The reader cannot check that the flip still works, or that it keeps the minus sign.
- **Smallest fix:** Give Step 8 its own flip slider and gray line, showing Q at −0.60 landing on J at −0.60.

### 18 · Step 10 — minor
- **Text:** “So the GPU needs three multiplications and two additions, no picture and no angle.”
- **Why a beginner can't answer it:** The lesson never uses "angle". It says "corner", so the reader asks which angle is meant.
- **Smallest fix:** “no corner between the arrows (no angle)”.

### 19 · Section 2, intro — minor
- **Text:** “L is the same at every pixel. Why? We treat the light as very far away, like the sun.”
- **Why a beginner can't answer it:** It does not say why "far away" makes the direction the same at every pixel.
- **Smallest fix:** Add “From very far away, the direction toward the light changes too little across the glass to matter.”

### 20 · Section 2, text under the table, and the point 4 tooltip (30_dmGrid.png) — slows — checked: point 4 is 0.0488, gray 0.5244
- **Text:** “N leans the other way (point 4, and nearer the outline): below 0, dark.”
- **Why a beginner can't answer it:**
  - Point 4's tooltip says dot(N, L) = 0.0488, gray 0.5244. That is above 0 and middle gray, so the example contradicts the sentence.
  - It also does not say why the number drops below 0 nearer the outline.
- **Smallest fix:** Add “point 4 is just above 0; nearer the outline N leans further, its height part shrinks, and the number goes below 0”.

### 21 · Section 2, number-line label (30_dmGrid.png), also in Exercise 1 — minor
- **Text:** “along L's line, from H · … · no unit: both arrows are 1 long”
- **Why a beginner can't answer it:** The coordinate table says "1 = the length of L", and Exercise 3 says "arrow units". "No unit" contradicts both.
- **Smallest fix:** Use “arrow units: 1 = the length of L” everywhere.

### 22 · Exercise 1 (40_exercise1.png) — minor
- **Text:** “Why this question. The flat top has a height, 0.10, and N points straight up there. Which of those enters the number?”
- **Why a beginner can't answer it:** The answer explains why N's direction counts. It never says why the height 0.10 does not count, which is exactly the trap the question sets.
- **Smallest fix:** Add “The height only says where H is; both arrows start at H, and the number uses only the arrows' parts.”

### 23 · Exercise 2 caption (41_exercise2.png) — minor
- **Text:** “Three pixels on the far side of the rim, from above.”
- **Why a beginner can't answer it:** "Far" from what? In a view from above there is no near or far side.
- **Smallest fix:** “on the side of the rim away from where L leans”.

### 24 · Exercise 2 answer — slows
- **Text:** “Pixels a and b are not as steep, so their F lies just on the plus side of H.”
- **Why a beginner can't answer it:**
  - The answer's own table points to a different main reason.
  - Pixel c leans away from both L's x part and L's y part, so it has two minus products (−0.260 and −0.3942). Pixels a and b each have one zero product.
  - Even at a and b's steepness (height part 0.707), c's lean direction gives about −0.09, still below 0. So "not as steep" does not explain the result.
- **Smallest fix:** Add “c leans away from both of L's level parts, so two products are minus; a and b lean away from only one.”

### 25 · Exercise 2, answer picture tooltip — minor — checked: true
- **Text:** “The tip of N. N = (−0.542, 0.658, 0.523)”. The label and the table say (−0.542, 0.657, 0.524).
- **Why a beginner can't answer it:** The same arrow is given two different values.
- **Smallest fix:** Use one value.

### 26 · Exercise 3 (42_exercise3.png) — slows
- **Text:** “Multiply each part of N by the same part of b, then add. Step 4 says what the result means.”
- **Why a beginner can't answer it:** Step 4 only says "square corner → 0". The exercise needs the reverse, "0 → square corner", which the page never states.
- **Smallest fix:** Add to Step 4: “And the other way: if the number is 0, F is at S, so N stands at a square corner to L's line.”

### 27 · Exercise 3, answer number-line tooltip — minor
- **Text:** “dot(N, b): 0.48158 + 0 = 0.48158, 0.48158 + (−0.48158) = 0 / Counted along L's line from H.”
- **Why a beginner can't answer it:** Exercise 3 has no L. The label says "along the line of b".
- **Smallest fix:** “Counted along the line of b from H.”

### 28 · Exercise 4 answer (43_exercise4.png) — slows
- **Text:** “At V the rim is steeper, so N leans further from L.”
- **Why a beginner can't answer it:** Section 2 taught "N leans right: more toward L". N at V leans even further right, yet it gets the smaller number (0.658 against 0.7994). Nothing explains why leaning further right now moves N away from L.
- **Smallest fix:** Add “From W to V the x product gains 0.166 but the height product loses 0.307.”

### 29 · Section 8, card 5 (the same phrase is in the Exercise 2 answer) — minor
- **Text:** “A number below 0 means: N points more away from L than toward it.”
- **Why a beginner can't answer it:** "More away than toward" is not something the reader can measure. It only restates the minus sign.
- **Smallest fix:** “…means: the tip of N is on the side of S that L does not point to.”

### 30 · Section 8, card 6, last two bullets (37_q6.png) — slows
- **Text:** “Grow the small lime triangle from S until its long side is 1: its square corner and its corner at S stay, so it lands on the big one.” / “Step 7 says why its two triangles have the same shape.”
- **Why a beginner can't answer it:**
  - "Grow" is not defined: it means multiplying every distance from S by one number.
  - Nothing says why the corners stay the same.
  - Step 7 does not actually say why (see #15), so the pointer is false.
  - The card does answer its own question, about Step 6's third fact.
- **Smallest fix:** Move the grow sentence into Step 7 and add “growing multiplies every side by the same number”.

---

## The reviewer's most serious problems

1. **#16, Step 8's slide:**
   - the reason is circular;
   - no slide is drawn;
   - the 3D picture shows F₂ and the copy's foot at different places, so the start seems to matter.
2. **#15, Step 7's "same shape":**
   - two corners are said to fix the shape, with no reason;
   - the same shape is said to give "0.302 times as far", with no reason;
   - it comes right after card 6 told the reader that two facts are not enough.
3. **#6, Step 2's G at 0.302:**
   - it is asserted, and the "So" just repeats it;
   - Steps 3 and 6 build on it.
4. **#14 and #17, the flip:**
   - Step 6 never links its three facts to "lands exactly";
   - Steps 8–9 say "the same flip works" with no flip drawn;
   - Step 8 is a different case, on the minus side.
5. **#9 and #10, Step 4:**
   - nothing says why F lands at S at a square corner;
   - the ⓘ after "S to F is a shorter side" explains the cos name, not why S to F is shorter.
