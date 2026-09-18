# Lesson 9.10 visual revision — 2026-09-18

## Feedback review before authoring

Failure: Q&A answers put dense prose and repeated substitutions before their geometry. The reader had to hold the input, landing, straight-line candidate, and comparison point in memory. Most point marks had no coordinate inspection. The parent repeated the same ordering. The cutoff was incorrectly described as dividing at equality; the slope comparison mixed input x with output x.

Prevention: `AGENTS.md` → Picture-before-arithmetic and inspectable-point gate. `USER_PREFERENCES.md` → Interactive math diagrams. Show each operation with its input and output; keep the active trace beside the image; every point opens its own coordinate tooltip. Preserve learner completion at 40 of 216, with 9.10 unresolved.

## Prerequisite ledger (before prose)

| Object / operation | Definition available before use |
| --- | --- |
| Checker input / output, copy a color | Parent opening; companion opening restates both |
| UV x / y, down-positive y | Parent section 1; companion opening defines them again |
| C, W, R | Center, fixed output position, input read position; labelled on opening image |
| p, components, length d, square root | Parent calculation steps 1–2; Lesson 9.1; Q&A trace defines the pair and length before division |
| dir, normalization, dispLen, disp | Parent steps 3–4; Q&A ruler and sequential divide/multiply pictures |
| Q and landing | Input point and the output position that copies it; forward-view caption defines the switch from W→R |
| Spoke / ray | Line from C through one named input point, continuing in that direction |
| Straight join / tent | One segment between two landings / two such segments meeting at the highest landing; both drawn before comparison |
| Fraction along a segment | Horizontal distance already covered divided by the whole horizontal distance; drawn before interpolation |
| Slope / change Δ | Change in landing y divided by change in landing x; drawn rise/run triangle before formula |
| Guard 0.0001 | Fixed cutoff in this shader's `d > 0.0001` condition, not derived from the checker |
| Rounding | Labels round; all geometry and comparisons retain original numeric values |

## Verification

Completed. Both pages opened from `file://` with no external scripts or styles.

- All 19 questions retain their original wording in disclosures and now have visual explanations. The parent retains the opening, labs, challenges, exercises, and completion record.
- 89 visual-widget states, 36 original-stepper states, and 1,126 point states checked. No final JavaScript, coordinate-tooltip, SVG-label clipping, or horizontal-overflow errors.
- 54 local links and anchors resolve. The inline visual module is identical in both standalone files.
- Click and keyboard activation, Escape, close button, coincident-point alternatives, and closest-point mouse selection work. Inspecting W does not reposition it; clicking empty lab space still does.
- Original steppers checked at lengths 0, 0.10, and 0.20. Center read skips division. The five-step proof compares Q′ and T at the same output x and includes a fraction ruler and an enlarged gap.
- Default W `(0.65, 0.20)` reads `(0.6052786404500042, 0.2894427190999916)`. At the same x, output y = 0.15 remains orange and y = 0.16 becomes navy.
- Existing `DisplacementField.metal` inspected: its condition is `d > 0.0001`, so equality skips. Removed the incorrect float-underflow explanation. Swift and Metal source were not changed.
- Desktop evidence captured at 1920×1080 and 5120×1440. Light-only appearance follows the current explicit `USER_PREFERENCES.md` preference and remains light with either OS preference. Screenshots of the fraction step, gap step, coordinate popup, and original walkthrough were visually inspected.
- Detailed results: `lesson-09-10-visual-checks.json`. Representative images: `lesson-09-10-visual-qa-fraction-step.png`, `lesson-09-10-visual-qa-gap-step.png`, and `lesson-09-10-visual-parent-point-tooltip.png`.

## Beginner cold read

The parent still starts with the known checkerboard. The companion now also starts with that image, defines input/output, W/R/C, and UV directions, and states the chosen 0.10 distance. Question 1 names p, d, dir, and disp before using their equations. Question 2 shows one operation per state. The first formulas have named input positions and a visible next consumer. Input positions, output landings, vector components, the comparison point T, and the enlarged gap carry explicit coordinate-space labels. Slope uses output changes on both axes. Formal derivative reasoning is deferred rather than inferred from a few finite samples.

The learner subsequently requested lighter checking because of their remaining usage limit. The checks above were already complete; no additional test runs were started after that request. Lesson 9.10 remains unresolved, with 40 of 216 lessons completed.
