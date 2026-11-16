# Lesson 10.43 — Facing away: max(dot, 0) · fresh beginner reviews, 2026-11-16

Job: “Generate lessons 10.41–10.43 included”. Two fresh reviews (`AGENTS.md` rule 20), each by an agent that did not write the page, on the page text with every answer open, every tooltip, the labels drawn in the pictures, and screenshots of the hero, every stepper state, Section 2 at two positions of Z, and the exercise. Both counted **one new idea** (type C fits; no split): where dot(N, L) is below 0, L is behind the board, the rays reach the board from behind and none lands on its front, so the brightness is 0; for every pixel brightness = max(dot(N, L), 0).

## Review 1 (15 items: 0 blocks, 3 slows, 12 minor)

Fixed:
- slows · the page never said why light that reaches the board from behind counts as none, and the lead said “no light reaches it” while Step 2 draws rays reaching the board → Step 2: “The front of the board (the glass near S) is the side N points to: the outside of the glass, the side we see. The brightness counts only light that lands on the front, as on SQ in Lesson 10.41.”; the lead: “no ray of light lands on the side of the glass that we see”; Uses: “lands on the front of the glass”.
- slows · “The corner between N and L is wider than 90°, because F is on the minus side”: unmarked angle, a coined word, half a reason → “∠NSL, the angle between N and L, is wider than 90°: at exactly 90° F is at S (Lesson 10.22), and here F is on the minus side”; the flat drawing draws the arc with its size, “∠NSL: 116.9°”; Lesson 10.22 is in Uses.
- slows · length, with four facts said two to four times → cuts: Section 2's lead is one sentence, Step 1's third line stops at “(Lesson 10.20)”, max is defined once in Uses and used in Step 3 as “the larger of the two numbers”, the hero caption's “White: brightness 1”, the quoted code line in the table.
- minor · the 3D whole-glass views (hero, exercise) showed no N at Z and a: from yaw −40° N points at the viewer → Lesson 10.39's view, yaw 50°.
- minor · hero map labels “Z: brightness 0”, “K: brightness 0.45672” (a bare “Z: 0” read as dot(N, L) = 0); K given with its coordinates in Step 3.
- minor · “F₂” in the tooltips → “the first two added”; the violet curves named in the legend; the tick number −0.5 back at its tick (tick numbers are placed before the floor's labels); “front” and “back” each on its own side of the board in the 3D view; “L lies on the back side of the board” (was “points to the back”); Step 3's title “No light on the front: brightness 0” and “the least a brightness can be”; “the pixels with brightness 0” (was “that side”); L in Section 2's read-out.

## Review 2 (16 items: 0 blocks, 6 slows, 10 minor)

Fixed:
- slows · “L lies on the back side” missed its premise → “The board is at 90° to N, and L is at 116.9° to N: past the board, on its back side.”
- slows · the reason for “wider than 90°” → “∠NSL, the angle between N and L, is 116.9° (measured on the flat drawing). Past 90°, F is on the minus side (Lessons 10.20–10.22), as here.”; the drawing's label says “(measured)”.
- slows · why a brightness cannot be below 0 → the lead and Step 3: a brightness is a share of the light (beam width ÷ lit length, Lesson 10.41): no light gives 0, never less.
- slows · length: the lead ends with the question (“This lesson finds the brightness at Z”); Step 3's repeat line cut.
- slows · “as on SQ in Lesson 10.41” pointed at a front 10.41 never named → cut; Uses: “brightness at S = beam width ÷ lit length”.
- slows · Section 2: Z names the dragged pixel → “Z starts at Section 1's pixel, (0.33, 0.67).”
- minor · Uses line of 10.42 without “front”; the hero caption names K; “above 0: the light lands on the front” (was “0 and above”); the table row “dot(N, L): where F is on L's line”; the exercise's “about five times” cut; the right choice moved to the middle; the answer says N's x part 0 means it leans neither left nor right, and drops the rays it does not draw.

Left as is (minor): the floor labels of the 3D view at Z stay small beside the labels F, −0.5 and Z (the label sweep finds no overlap); at K the 3D view's lower-left labels stay close.
