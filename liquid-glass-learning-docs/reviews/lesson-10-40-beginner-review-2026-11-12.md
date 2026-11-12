# Lesson 10.40 — Build: the dot product in Metal · fresh beginner reviews, 2026-11-12 (rewording)

Job: bring Lessons 10.36–10.40 in line with `AGENTS.md` Rule 0, “Standard math words, no coined terms”: the recall lines of 10.16–10.37 and their ⓘ, the hero caption, the code names (`xProduct`, `yProduct`, `heightProduct`) and the record. Two fresh reviews (`AGENTS.md` rule 20), each by an agent that did not write the page, on the page text with every answer open, every tooltip, and screenshots of the whole page. Both counted **no new idea** (type B fits): the new code words `static` and `.float3` are explained in their line-table rows. No banned word in the rendered text (the iPhone screenshots aside, below).

## Review 1 (18 items: 7 slows, 11 minor)

Fixed:
- slows · line 10.24 had lost its result → the feet F₁, F₂, F₃ and, at K, the two sums.
- slows · “how far each leg goes along L's line” gave −0.2412 with no sign meaning → “a minus piece goes toward the minus side”.
- slows · line 10.36 used Gy without saying what it is → “Gy, 0.402 along y from S (the y leg shifted to S)”.
- slows · line 10.37 put the foot of Gx at −0.14496 with no pixel named → “At K₂ = (0.38, 0.66), where N's x part is −0.302”.
- slows · the 10.37 ⓘ lacked the 10.33 step and used “the way back” for two arrows → GxS, SE, P, “shifting keeps the feet as far apart (Lesson 10.33)”.
- slows · “the three legs along L's line”, “the x leg along b's line”, the exercise's “the y leg written a.y * b.x” → “the three products”, `xProduct`…, “If dotOfArrows computes yProduct as a.y * b.x …”.
- minor · hero caption names F₃ by its point; the first heading as “The feet of the tip of N … are at N's parts”; 10.12's ⓘ names the sides 0.302 and 0.953; 10.15's ⓘ “at 0° the line points along y”; 10.19, 10.21, 10.22, 10.27, 10.32, 10.33, 10.34 lines reworded; the code comments “where F₂ is”, “where F₃ = F is”.

Not fixed in round 1: the 10.31 ⓘ (it was checked against the curriculum line, which says the flip carries the wall; review 2 repeated the point and the lesson itself was checked, see below).

## Review 2 (19 items: 6 slows, 13 minor)

Fixed:
- slows · the 10.31 ⓘ gave the flip as the reason; Lesson 10.31 itself turns a point around L's line (its circles fill a flat sheet at 90° to L's line) → that reason. (The curriculum's 10.31 entry still says the flip; it predates this job and is named as a follow-up.)
- slows · lines 10.9–10.15 said “the end of the x leg” where the hero says Gx → Gx, defined in line 10.4; “a line as long as GxN”.
- slows · line 10.24 “End to end …” → the sums with their numbers.
- slows · the 10.33 ⓘ → “First shift the leg at 90° to L's line … Then shift it along L's line to S”.
- slows · Exercise 1's answer called the products “x leg”, “height leg”, “half” → `xProduct`, `heightProduct`, “dotNL × 0.5”, `afterTwo`, as the Section 3 table.
- minor · 10.8's ⓘ adds “a turn keeps lengths”; 10.26's ⓘ writes △SMX and △SML; 10.37's ⓘ ends “= −0.14496” at K₂; line 10.38 “for parts of any sign”; the code note names the new `.float3` argument.

Left open:
- slows · length: the 36 recall lines (about 830 words) are the B lesson's required shape (rule 18: one recall line per joined idea).
- minor · the two iPhone screenshots in Section 4 were taken before this rewording and still show the app's old legend “dot(N, L): L's ruler, from S to F” and “Arrow ruler”. The app text is fixed and the lab rebuilt; the screenshots need retaking.
- minor · 10.25's line without “on line PG”, the `static` row's “another file may use the same name”, the doc comment's word order, Exercise 2's “the number”, the record's W chain without its products.
