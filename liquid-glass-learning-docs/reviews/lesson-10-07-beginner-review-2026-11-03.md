# Lesson 10.7 — fresh beginner reviews (2026-11-03)

Fresh agents that did not write the pages reviewed them in turn (`AGENTS.md` rule 20, `tools/beginner-review/REVIEWER_PROMPT.md`). Extraction with headless Chrome and an injected driver (no Playwright on this Mac).

| Review | Page | Blocks | Slows | Minor | New ideas counted |
|---|---|---|---|---|---|
| 1 | “The spin keeps the length: T goes round a circle” (after the first split; now `course/archive/lesson-10-07-spin-length-circle-draft-2026-11-03.html` (deleted 2026-11-04; read it with `git show 91a51c6:liquid-glass-learning-docs/course/archive/lesson-10-07-spin-length-circle-draft-2026-11-03.html`)) | 0 | 5 | 9 | 3: the straight-on drawing shows a wall line at its whole length (Step 2); the kept length (Step 3); the circle (Step 4) |
| 2 | “The wall seen straight on draws its lines at their whole length” (`lesson-10-07-whole-length-seen-straight-on.html`) | 0 | 6 | 10 | 1 |
| 3 | the same page, after Review 2's fixes (the final list) | 0 | 3 | 9 | 1 (borderline: Step 5's length² = x part² + drawn length², which it counts as Lesson 10.3's sum plus Step 4) |

## Review 1 — what it changed

Three ideas against a `C` lesson's one, so the page was split at once (rule 16): its premise became the new 10.7, the kept length 10.8, the circle 10.9 (plan 310). The items went with their content:

- to the new 10.7: #2 (the angled view's shorter lines cite Lesson 10.6), #3 (label overlaps), #4 (“its end” → seen end-on, as one point), #5 (“full size” undefined; why the straight-on view does not shorten y and height), #6 (the slanted line needs both square corners and Lesson 9.1: the most serious item), #7 (which ruler). All fixed in the new page.
- to 10.8 (handoff entry): #1 (name the corner Lesson 10.12 needs), #8 (every point turns by the same angle, so the teal line turns as one straight piece; otherwise the argument assumes its result), #14 (Exercise 2's view).
- to 10.9 (handoff entry): #9 (the screen's line 0.577 below Gx and its dependence on the arrow ruler), #10 (65°, 25°, 115° are read off the slider), #11 (why the teal line along Gx to the tip of N matters), #12 (name both 0.302s), #13 (why points a and c lie on one line through Gx).

## Review 2 — fixed

- Slows: #2 “drawn” had two meanings (now “made … long in the 3D scene” for the arrow ruler, “drawn” only for how long a line looks); #4 “leaves the wall” for N, which ends on the wall (now “has an x part”); #5 Step 1's pixel numbers had no reference (now “at full size, facing us, 0.953 would be 205.8 px”, live with the zoom; “÷ 142, in this flat drawing only”); #11 Step 5's “only” had no reason (now length² = x part² + drawn length², with N's numbers); #12 “x part 0” and “on the wall” treated as one condition (the rule is now stated by the x part; Exercise 2 no longer asks where the line starts); #14 the flat tooltips did not follow the sign at K = (0.38, 0.34) (they do now; Section 2's 3D label moved off the x line).
- Minor: #1 the hero's smaller pixel numbers explained; #3 “at its whole length” and “at full size” defined under the coordinate table; #6 “such a drawing” named; #7 the teal line in the flat drawing only from Step 3, the Gx plate moved off the −1 and −0.5 ruler numbers; #8 the line straight up said in full; #9 “Each step changes one thing in the pictures”; #10 the y leg label moved below the ruler numbers; #13 the x-part row says both numbers count to the right of S; #15 every answer line named; #16 the 1.255 verdict gives the reason (length² = x part² + drawn length²). The reviewer's note that Exercise 2's answer (N is 1 long) was printed elsewhere: Exercise 2 now asks about line d (drawn 0.4, x part 0.3, length 0.5).

## Review 3 (the final list) — fixed, and what is left

- Slows, fixed: #1 “full size” used in Step 1 before Step 2 defined it (Step 1 now gives the 3D view's own scale instead); #2 the 205.8 px had no source (the 3D label now prints “1 arrow unit = 216 px across it” and 0.953 × 216 px = 205.848 px, live with the zoom; Step 2 says 142 is chosen and that the angled view has no one scale); #8 Step 5 used drawn length² = y part² + height part² for any line (it now says so in its own line: any line is drawn as its y part → and height part ↑ at full size and at a square corner, Step 4's reason).
- Minor, fixed: #3 “which drawing” (now “is there a drawing … Step 2 shows one”); #5 why 142; #6 the teal line's label moved below the ruler numbers, T visible; #7 the height-only sentence removed from Step 3 (Step 4's height leg is that case); #9 the dark gray line drawn wide under the thin pink N; #10 Exercise 1's answer tooltips say where each end is drawn and that the x part is not; #11 Exercise 2's drawing counts from S; #12 “length” cites Lesson 10.3's three-part length.
- Left, with the reason: #4 asked for an eye or arrow at S's side looking along the x line; `AGENTS.md` rule 6 forbids eye-position guidance, so the page keeps the words “the x line runs straight away from us: seen end-on” and the ⓘ recall of Lesson 10.4, Step 5.
- Not re-reviewed after these fixes (rule 20: two fresh reviews on this page, within the cap of four).
