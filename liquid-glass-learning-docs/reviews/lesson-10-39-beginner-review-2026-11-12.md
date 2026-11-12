# Lesson 10.39 — One light direction for every pixel: the dot map · fresh beginner reviews, 2026-11-12 (rewording)

Job: bring Lessons 10.36–10.40 in line with `AGENTS.md` Rule 0, “Standard math words, no coined terms”. Two fresh reviews (`AGENTS.md` rule 20), each by an agent that did not write the page, on the page text with every answer open, every tooltip, and screenshots of the whole page and every stepper state. Both counted **one new idea** (type C fits; no split): with a very far light every pixel uses one L, so each pixel's dot(N, L) can be shown as a gray, the dot map.

## Review 1 (22 items: 9 slows, 13 minor)

Fixed:
- slows · hero label “light: N leans the way L leans · dark: it leans away” (vague, wrong at the flat top) → “light: dot(N, L) near 1 · darker than gray 0.5: dot(N, L) below 0”.
- slows · Step 1's “two lines … meet there … they point the same way” → the size of the difference, with its number (see review 2).
- slows · Step 2's side sentence “S's height does not enter” → cut.
- slows · the label C sat on point 3's arrow foot → moved clear.
- slows · Step 4 “so all three products are plus; the number is near 1” → the signs with their reason (N leans outward, Lesson 10.3) and point 9's value, 0.92892.
- slows · Step 4 caption over 5 lines → shortened.
- slows · Section 2's “x leg along L's line”, “two legs = …” (a leg's name used as a number) → “S to F₁, the x leg”, “F₂ at 0.2904 + 0 = 0.2904”.
- slows · L's tick label “0.5” sat on the height leg → moved beside L's line (`walk3D` `tkDx`).
- slows · length → cuts (lead sentence, “with the mirror direction”, S's height, repeats).
- minor · “the number” → dot(N, L); “Between it and …” → “Between the red line and …”; “whole chain” → “calculation”; “gray: N” in Step 1 → “thin arrows: N”; Uses wording; “the light on the other side” → “moved to the opposite side (L₂)”; “middle gray” → “gray 0.5”; the legs' legend says a leg can be 0 long.

Left as is: #2 (the circles' legend in Steps 1–2; they are named from Step 3), #19 (the pixel scale of the number line), the inherited names “dot map” and “arrow units”.

## Review 2 (19 items: 4 slows, 15 minor)

Fixed:
- slows · Step 1's “far less than L's last decimal” had no number → “about 5 cm ÷ 150 million km ≈ 0.0000000000003: far below L's last decimal, 0.01”; L named as the direction toward the light.
- slows · Step 4 did not say why dot(N, L) goes below 0 near the lower-left outline → the rim is steeper there, N's x and y parts grow and its height part shrinks (Lesson 10.3); point 10: F₂ at −0.70308, −0.70308 + 0.25024 = −0.45284.
- slows · the F₁, F₂ tooltip named A, not drawn where the y leg is 0 long → “the foot of Gx (the y leg is 0 long here, so it also ends at Gx)” (engine `walk3D`, also in 10.38 and 10.40).
- slows · length → cuts: Step 3's repeat line, the exercise's first sentence, Step 4's bullets.
- minor · hero label “darker than gray 0.5”; “the same signs as L's”, “the signs opposite to L's”; “red: where dot(N, L) = 0”; “where F₃ is: dot(N, L)”; “F₂ at …” in the exercise answer.

Left as is (minor): #5 (circles' legend before Step 3), #11 (Step 4's flat picture keeps point 2's blue dots from Step 3), #15 (“leg” in Lesson 10.1's rim-triangle tooltip, “step 0.01”), #17 (L₂'s “opposite side” wording).
