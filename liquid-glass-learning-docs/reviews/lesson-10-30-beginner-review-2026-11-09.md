# Lesson 10.30 — The flip keeps square corners: beginner review, 2026-11-09

Job: “Review and fix Lessons 10.30–10.35” (the learner's checklist A1–E25, after the 25 correction rounds on 10.25–10.29).

## Own review, before any fix (page as committed in 5938357)

In reading order. Severity: blocks / slows / minor.

1. Hero, “Where this is used”: the generic chain sentence; no later lesson named that uses the kept corner. Rule 0. minor.
2. Uses: “Lesson 10.29: it keeps every length on the sheet; Gx′ is on L's line, F₁′ on the x line.” The second half is Lesson 10.28's fact. C16. minor.
3. Section 1, caption line 3: “At F₁′, |SF₁′| = 0.14496 and |Gx′F₁′| = 0.265 ⓘ meet, with |SGx′| = 0.302 opposite, as at F₁”. Lengths do not meet; read twice. C15. slows.
4. Section 1, ⓘ on 0.265 (also Section 2's two ⓘ and the exercise's): “from its two parts on the indigo sheet (Lesson 10.29): part along = 0.1247 − 0.2598 = −0.1351 / part across = 0.0739 − (−0.154) = 0.2279 …”. Lesson 10.29 has no signed parts since 2026-11-09; “−0.154” beside 0.0739; none of the four numbers is drawn here. B9, B10, E24, rule 13. blocks.
5. Section 1, caption line 4: “So the corner at F₁′ is square, and so is any corner”. Not every corner is square. C17. slows.
6. Section 1, 3D view (also Section 2, the exercise): Lesson 10.29's old scene at scale 115: △SGxF₁ about 90 px long, six labels within 80 px of S, N, X, the tip of L and the turning rulers drawn though the argument uses none. Lesson 10.29 draws the same flip zoomed (scale 230, names only). A2, A6, A7. slows.
7. Section 1, 3D view: |GxF₁| and |Gx′F₁′| = 0.265, which the caption names, are drawn only in the flat drawing. A1. slows.
8. Section 1, both pictures: the half circles' middles are unlabelled dots; the legend says “teal: how Gx, F₁ move”. A4. minor.
9. Flat drawing: the flipped triangle's sides are labelled “0.302” and “0.14496” with no names. Rule 0 (a distance by its two points). slows.
10. Flat drawing, slider 1°–179°: “turned θ°: out of the sheet, so drawn shorter” lies over the footer legend (179 states); the turned Gx is under “|GxF₁| = 0.265” at 70° and 75°. A6. slows.
11. Section 2, 175 positions of K: 12 kinds of overlap (“Gx: 0.233” over “F₁′: 0.11184 on the x line's ruler”, Gx′ under the ruler's “0.5”, F₁ and Gx′ under the sheet's label, the tip of N under “L”, “1”, “X”). A6. slows.
12. Exercise: “what is the darker triangle's corner at F₁′” (a triangle named by its colour; “what is the corner”). C14, D22. minor. The question's Gx′ is under the ruler's “0.5”. A6. minor.

Sweep used: every slider value 0°–180°, 175 positions of K, the hero and the exercise; a script lists overlapping labels, labels cut at the edge or under the corner box, and points under a label.

## Fixes

- 3D views of Section 1, Section 2 and the exercise: Lesson 10.29's zoomed scene (scale 230; 130 at W; no N, X or tip of L; names only; floor patch ±0.035 UV), with △SGxF₁ and its flip filled, the square marks, the teal half circles with their middles A and B, and all six side lengths on the sides (free places beside each side, clear of every point and of the half circles). Section 2's scale follows N's x part, as in 10.29.
- Flat drawing redrawn by the same rules: |SGx′| = 0.302, |SF₁′| = 0.14496 with their names; A and B; the “turned θ°” note above the footer; no thin turning line.
- The ⓘ now says where each length comes from and prints no number the pictures do not draw: |GxF₁| = 0.265 “worked out from its two legs in Lesson 10.29, Step 5”. The signed chain is gone from the page (`lenChain` is Lesson 10.29's leg-length version).
- Caption, exercise and Uses reworded (see below, after review 1).
- Sweep after the fix: 0 problems in 181 slider values, 175 positions of K, the hero and the exercise.

## Fresh review 1 (on the fixed page)

About 60 claims checked; 9 listed: 0 blocks, 3 slows, 6 minor. New ideas: 1 (the flip keeps a triangle's three side lengths, and three lengths fix the corner). Fits type C.

1. Uses: “Lesson 10.28: it moves the x line onto L's line, so Gx′ is on L's line and F₁′ on the x line”: does not say where L's line goes. minor. **Fixed:** “it swaps the x line and L's line”.
2. Caption line 3: “At F₁′, as at F₁, sides of 0.14496 and 0.265 meet, and the side across from the corner is 0.302 long”: bare numbers, “across” with a second meaning, the ⓘ a line early. slows. **Fixed:** “The flip keeps each side's length (Lesson 10.29): |SF₁′| = |SF₁| = 0.14496, |Gx′F₁′| = |GxF₁| = 0.265, |SGx′| = |SGx| = 0.302 ⓘ.”
3. “Lesson 10.14: these three lengths fix the corner”: 10.14 shows it for one triangle; the general wording is in 10.26. slows. **Fixed:** “Two triangles whose sides have the same three lengths have the same corners (Lessons 10.14, 10.26). So ∠SF₁′Gx′ = ∠SF₁Gx = 90°.” (caption, Uses, Section 2's table, the exercise answer).
4. Caption line 5 “every corner … the three lengths”; the hero promised the result for 10.31's wall, whose points are off the sheet. slows. **Fixed:** “The same holds for any triangle on the sheet: the flip keeps its three sides, so its corners.”; the hero names only Lesson 10.34.
5. Slider at 0°: the 3D legend named flip objects that are not drawn; “F₁, turned 75°” started at B's dot; “the turned triangle points partly out”. minor. **Fixed:** the legend follows the slider; turned labels keep 10 px from every point; “is partly out of the sheet”.
6. “lime” for the x line and for △SGxF₁; “the lime triangle”, “the cyan line from Gx”; violet curves not named. minor. **Fixed:** “lime line” / “lime triangle” in the legends, △SGxF₁ and GxF₁ in the text, “violet: the glass near S”.
7. Section 2: the table repeats the drawings' lengths; N not drawn; “after” column without its source. minor. **Fixed in part:** the column header reads “after the flip (Lesson 10.29)”. Open: the table still repeats the six lengths (it is the section's traced value); the N readout stays (it is where |SGx| comes from).
8. Exercise caption: “N = (0.605, 0, 0.796). The lime triangle's sides carry their lengths.” minor. **Fixed:** “The sides of △SGxF₁ are labelled with their lengths.”
9. Length: about 465 words before the exercises. minor. **Cut in part** (the hero line, caption line 5, the exercise answer). Open: still over 300 words; the Uses box and the green key line are the rest.

Sweep after these fixes: 0 problems. No second fresh review (none of the nine items was a blocks item).

## Left open

- Section 2's table repeats lengths the drawings label (item 7).
- Page text above about 300 words (item 9).
- The exercise asks Section 1's question at another pixel (W); kept, because its third choice tests the lesson's point (which line F₁′ is on does not matter).
