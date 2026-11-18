# Lesson 10.45 — Ambient light: fresh beginner reviews (2026-11-18)

Two fresh reviews (`AGENTS.md` rule 20), each by a new general-purpose agent with `tools/beginner-review/REVIEWER_PROMPT.md`, on a text extract (captions, drawn labels, point popups, ⓘ texts per state) and 1920-px screenshots.

## New-idea count

Both reviews: one idea (ambient light: the same chosen share at every pixel, the lamp the rest: total light = 0.15 + 0.85 × brightness). Steps 2–3, the two failed tries, belong to its argument. Fits `C`. No split.

## Round 1 — about 75 claims, 18 items (0 blocks, 8 slows, 10 minor). All fixed but two.

- “lit” never defined and clashing with 10.41–10.43's “lit piece”, “lit length” (slows) → “the total light”, `totalLight` in code.
- The formula written four times → twice (lead, Step 4's title).
- Lesson numbers in the lead and the code table's text → cut (the code table keeps its “taught in” column, rule 2).
- “Lesson 10.46 multiplies the surface color by it” → “the glass's color by the total light”.
- “0.15 of full light” (slows) → “full light: brightness 1, white”.
- −0.45284 unnamed in Step 1 → “max(dot(N, L), 0) = max(−0.45284, 0) = 0”.
- Length (slows) → hero captions and Step 1 cut.
- “A floor” clashed with “floor: the screen” (slows) → “At least 0.15”.
- “does the same”, “flat” (slows) → “also shows 0.15: that band is one even gray”, “one even white patch”.
- Why 0.85 in Step 3 (slows) → reworded in round 2.
- Why M (then A) is the brightest → “its N is almost L”.
- Why the lamp gets less, and the wrong “arrows do not cross” reason (slows) → “Why less from the lamp? So the total stays at most 1”.
- Caption at 0.15, pictures at the slider's value → “With ambient light 0.15”.
- A and D also named the N chain's neighbours (slows) → the pixels are U and M.
- Section 2's violet curves not in the legend → added.
- Exercise intro gave the method twice; “the lamp's part” → shorter; the line cut.
- N and L unlabelled in the exercise → labelled.
- Open: the kit places Section 2's “back” label and, at (0.64, 0.32), the flat front and back labels close to the board.

## Round 2 — about 75 claims, 18 items (0 blocks, 6 slows, 12 minor). All fixed but two.

- “Where this is used” pointed at “this line” → “the total light”.
- The lead did not use the title's name → “… from all around: ambient light”.
- Hero caption named an unmarked brightest pixel → cut.
- Why every pixel gets the same amount → “ambient light comes equally from all sides, so … whichever way it faces”.
- Step 1's 3D view: N and L at Z unlabelled → labelled.
- Step 2 never said why U's gray is wrong → “U should be lighter”.
- U's 0.1102 had no chain → ⓘ “dot(N, L) at U”.
- “Light adds up” without an everyday sight (slows) → “two lamps on one wall light it more than one”.
- “Shown as 1” not in the Uses box → Lesson 3.10 added.
- 0.85 with two meanings in Steps 3 and 4 → Step 3 says “where 0.15 + brightness is above 1”.
- “At 0.15:” read like a point (slows) → “With ambient light 0.15, at U”.
- The “gap … never 0” sentence (slows) → “No band or patch of one gray, as in Steps 2–3: two different brightnesses give two different grays”.
- Step 4 said “at most 1” twice (slows) → the M example cut.
- Section 2's number lines: which row the pixel shows → “below: the ways of Steps 2, 3 and 4; the pixel shows the last”.
- Section 2's 3D and flat front labels disagreed → the same meaning, shorter (“front: the lamp and ambient light”).
- “Step 4's line” → “Step 4's formula”.
- Open: the code table's “taught in” column stays (rule 2 asks for it); page text about 500 words with the Uses box, the Section 2 table and the code table (slows, Rule 0).
