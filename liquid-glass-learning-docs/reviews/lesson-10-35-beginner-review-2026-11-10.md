# Lesson 10.35 — Growing from S multiplies every side: beginner review, 2026-11-10

Job: “Review and fix Lessons 10.30–10.35” (the learner's checklist A1–E25).

**State of this file: the fresh review below is NOT applied yet.** The next session applies it, then fills in “Fixed” per item.

## Own review, before any fix (page as committed in 5938357)

1. Section 1, Step 2, line 3: “Every part of the arrow from X to J is multiplied by k too ⓘ, so X′J′ goes the same way as XJ”. The computation the lesson's idea rests on sat in a tooltip (the flat parts of XJ, with “L's ↑ per 1 along it = √0.7696 = 0.877”, a rounded number, and a signed “from X to J, → part = 0.2304 − 1 = −0.7696” with no word on its minus). Rule 17 (a computation the argument needs is a step of its own, never an ⓘ), B9, B10, B12. **blocks**.
2. Step 2, line 2: “X′'s reading on the x line = 1 × 0.60 = 0.60; J′'s reading on L's line = 0.48 × 0.60 = 0.288”; Step 3: “it reads 0.48 × 0.302”. A ruler reads at a point. C15. minor.
3. Both pictures: the growth drawn as before and after only; no way for X or for J. A3. slows.
4. Legends: “lime: the x line … lime: △SXJ · darker lime: △SGxF₁”. One colour word for two objects. Rule 1. minor.
5. Step 1: nothing said what is known and what is asked; “F₁: 0.14496” on the picture with no word that the page measured it (Lesson 10.24). B11. slows.
6. Sweep: Section 1, X′ under “X” at k 1.01–1.05, J′ under the ruler's “0.5” at k 1.11–1.20, X′ under “the x line” at k 1.20; Section 2, 9 kinds over 140 positions of K (Gx and X′ under “J′ = F₁”, points under the sheet's label). A6. slows.
7. Lead and “Where this is used”: “Here the x leg's move is found from the walk of 1 along x.”; the generic chain sentence. Rule 0. minor.
8. Exercise answer: “Grow S, U, J₂ from S”. Rule 0 (△SUJ₂). minor.

## Fixes, first pass (applied)

- Section 1 has 4 steps (`ST28 = 4`): Step 1 two triangles, one known, one asked; Step 2 grow △SXJ from S by k (slider); Step 3 “Growing multiplies every part of the arrow from X to J by k”, with a table under the flat drawing (`partsTable`: the three parts of the arrow from X to J, each × k, the three parts of the arrow from X′ to J′; exact products) and two ⓘ chains (`pA`, `pC`, built by `arrowChain`); Step 4 k = 0.302. The slider works in Steps 2 and 3.
- The old tooltip `parts` (flat parts, 0.877) is gone.
- The ways of X and J are drawn as arrows along their lines, in both pictures; X′ and J′ are labelled in free places; every label keeps clear of the points.
- Lead, “Where this is used”, Uses, the Section 2 table, the exercise answer and the legends reworded.
- Sweep after: 0 problems (every step, k 0.10–1.20 where the slider shows; 140 positions of K; the hero; the exercise). Step 3's table is 768 px wide in a 768 px column at k = 0.10, 0.37, 0.60, 1.20.

## Fresh review 1 (on the fixed page) — to apply

About 45 claims checked; 11 listed: 0 blocks, 3 slows, 8 minor. Every chain is calculator-exact (the table, both tooltip chains, 0.48 × 0.302 = 0.14496, 0.64 × 0.539 = 0.34496). New ideas: 1 (growing △SXJ from S by k multiplies every part of the arrow from X to J by k, so X′J′ keeps XJ's direction and square corner, and the meeting point goes k times as far). Fits type C. “Verdict on Step 3: it does not yet hold cleanly for a beginner (entries 3 and 4).”

1. Title and hero: “multiplies every side” (the body never says a side's length is multiplied, only “every part of the arrow”); “Shrink that walk” against “grow” (C14). minor. Fix: “Grow by 0.302” in the lead. (The title is in the file name, the hub and the curriculum: decide whether to change it.)
2. Step 2: “Is its corner at J′ square too?” while both pictures already draw the square mark at J′ (A2). minor. Fix: draw that mark from Step 3 on.
3. Step 3, lines 1–3: “Go from X to J by way of S … every part of each is multiplied by k (Lesson 10.5). So every part of the arrow from X′ to J′ is k × the same part …”. Lesson 10.5 says “each of its points is P plus a share of that arrow (0 at P, 1 at Q)”, “A share of an arrow has each part times the share”, a share being a number from 0 to 1: that covers S→J′, not X′→S, and not k up to 1.20. The second “So” needs “two arrows in a row add part by part”, which no lesson 10.3–10.34 states. Neither arrow is drawn; the ⓘ uses another route (J's numbers − X's numbers) (C16, C17, A1). **slows**. Fix: use the ⓘ's route in the caption: X′ and J′ have k × the numbers of X and J from S (pieces from S, 10.5); an arrow's part is end − start (10.5).
4. Step 3's table: only the two ⓘ say where rows 1 and 3 come from; neither picture draws J's three numbers or XJ's three legs; without the ⓘ, row 3 reads as row 2 copied (B12, A1, A5). **slows**. Fix: move the ⓘ lines into the table as rows (X and J from S, J − X; X′ and J′, J′ − X′).
5. ⓘ on “from X to J”: “J is 0.48 along L from S: 0.48 × each part of L = (0.48, −0.60, 0.64)” reads as if the product equals L's own parts; two different 0.48 (B10). minor. Fix: “L = (0.48, −0.60, 0.64); J is 0.48 of L”.
6. Step 3, line 4, and Uses: “goes the same way as XJ (Lesson 10.3)”: 10.3 says it only for dividing by the arrow's own length; “multiplying by k is dividing by 1 ÷ k” is only in Uses; no lesson says same way gives the same angle (the flat drawing shows it) (C16, C17). minor. Fix: cite 10.5 (k × every part is a piece of XJ, on XJ's line) and cut the 10.3 line from Uses.
7. Captions of Steps 2 and 3: Step 2's first bullet has 4 sentences; Step 3 has 7 sentences, 8 lines, four “So” (C18). **slows**. Fix: cut “the arrow from X to S, then the arrow from S to J” and the table sentence (make it the table's heading); merge lines 4–5.
8. Step 4, last line: “The x leg moves the meeting point by L's x part × N's x part.”: Section 1 never says 0.302 is N's x part, nor here that 0.48 is L's x part; the result is also in the hero, the heading, line 3 and Section 2's table. minor. Fix: cut the line; add the two names in brackets to line 3.
9. Step 4 and Section 2: two plates per point near S (“F₁: 0.14496” beside “J′ = F₁”, “Gx” beside “X′ = Gx”); 0.14496 three times per screen; “F₁ = 0.48 × …” makes a point equal a number; the teal triangle has two legend names; Section 2's flat drawing leaves X′ and J′ unlabelled (A6, A7, C14). minor. Fix: one plate per point (“Gx = X′”, “F₁ = J′: 0.14496”); “L's ruler at F₁ = …”; one legend name.
10. Exercise question: the red “the copy's meeting point: what does L's ruler read?” sits in the legend stack; the point is an unlabelled white dot that is not clickable (A1, D22). minor. Fix: put the red plate at the point.
11. Exercise answer, flat drawing: the height line and U's dot run through the header plate “the height line: drawn ↑ · at 90°…”; ruler labels 1 and 0.5 lie under the triangle fill, as does L's 0.5 beside J in Section 1 (A6). minor. Fix: move the plate off the line; draw tick labels after the fill.

Length: about 750 words before the exercises; the four captions alone are 344, Step 3 is 126.

Most serious, in the reviewer's order: 3, 4, 7, 6, 8.

## Left open

To be filled in after the fixes.
