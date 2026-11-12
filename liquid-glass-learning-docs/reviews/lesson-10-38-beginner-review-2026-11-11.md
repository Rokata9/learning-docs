# Lesson 10.38 — The dot product formula · fresh beginner reviews, 2026-11-11

Two fresh reviews; both counted **one new idea** (type C fits): dot(N, L) = N's x part × L's x part + N's y part × L's y part + N's height part × L's height part, the sum of the three legs' moves, each a product (10.35–10.37), added as in 10.24. The code line writes the same formula.

## Review 1 (17 items: 1 blocks, 4 slows, 12 minor) — all fixed

- blocks · Section 2's lead stated a wrong sign rule (“a minus part gives a minus product: its leg goes the minus way”), false at both shown positions of K → cut.
- slows · the height leg's move argued from walks from S without Lesson 10.33 → cited, and 10.33 in Uses.
- slows · the emerald bar from S to F₃ was hidden under L's arrow → drawn over it.
- slows · labels on wrong points at some positions of K → `walk3D` labels placed by `freeLab` (engine patch `op.free`), sweep 0.
- slows · the exercise tooltips called b's line “L's line” → they name b (engine patch).
- minor · the hero's “y leg” plate under a dot; violet curves unnamed; the “x leg” plate on the cyan line; guide lines through the row labels (guides drawn first); captions over 5 lines; “now exact”; the “no angle” sentence (cut); conclusion said five times (step titles “The three moves”, “Add them”); length; table cells repeating the row names; −0.18 against −0.180; the exercise's elided “are not”.

## Review 2 (13 items: 4 slows, 9 minor)

Fixed:
- slows · length: the Uses lines that Step 1 repeats are cut; the table cells hold numbers only.
- slows · “grown by 0.864” and three recalls in one line → “a walk of 1 up moves it to 0.64 (Lesson 10.34); 0.864 up, 0.864 times as far (10.35, 10.33)”.
- slows · “Minus parts work too” vague → “When N has a minus part, the product still gives that leg's move (Lesson 10.37); Section 2 shows such pixels.”
- slows · why b may replace L → “b is 1 long like L, and Steps 1–2 used nothing else about L, so the formula holds with b's parts: dot(N, b) …”.
- minor · “dot product” named (“the dot product of N and L”); “F₂ = number” → “reading at F₂”; “L stays (0.48, −0.60, 0.64)” in Section 2; −0.180 printed the same everywhere (a Trace fix for minus values, also in 10.37 and 10.39); the answer's legend no longer names an orange leg that is 0 long; the b tooltip “Rounded to 3 decimals: 1.000”; the lead says “N's part × L's part for that leg”.

Left open:
- minor · at some dragged positions of K (e.g. (0.36, 0.40), where N stands nearly straight up) L's ruler numbers “1” and “0.5” sit near N's tip and the height leg; the sweep finds no overlapping labels there.
- The page is above 300 words (about 420 with the required hero, Uses and “Where this is used” lines).

QA: no script errors; label sweep of 101 states (2 steps, 97 positions of K anywhere on the glass, exercise, hero): 0 overlapping or cut labels, 0 points under a label, the corner box or a legend; Decimal audit of 483 steps: 0 problems.
