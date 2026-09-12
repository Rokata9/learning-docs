# Lesson 9.10 revision audit — 2026-09-11

## Feedback diagnosis before authoring

The learner could not explain why a position above the navy input cell becomes navy, or how `dispLen = 0.10` changes that cell's size. The previous lesson followed the adjacent orange cell instead. It foregrounded corner constructions, used informal terms such as "floor stick" and "leftover", and drew straight corner-joining polygons over genuinely curved shader boundaries. Overcrowded labels further separated the explanation from the actual output.

The revision follows exactly the input cell `0.50 <= x < 0.75`, `0.25 <= y < 0.50`. The learner specified x = 0.65 but no exact y. The worked example chooses y = 0.20 and states that choice. It also tests y = 0.15, 0.16, 0.24, and a position to the right of the cell.

Reusable prevention is recorded in AGENTS.md under "Exact-cell readback and curved-region proof". Existing viewport and label-separation rules apply; another generic layout rule is unnecessary.

## Prerequisite ledger (written before lesson prose)

| Object, term, symbol, or operation | Earlier teaching / definition in this revision | Next consumer |
| --- | --- | --- |
| Input checker; output/write pixel; read coordinate; `eval` | 9.7–9.9; opening identifies the two actual images | Per-output read and copied color |
| UV, x/u, y/v, top-left origin, y downward | 8.6; opening briefly restates fractions of a square | Coordinate arithmetic |
| Center C = (0.5, 0.5); `p = uv - C` | 8.8; first walkthrough state | Distance and direction |
| Navy cell; bounds; `[a,b)` | Opening names the exact cell; bracket means include a, exclude b | Membership of the computed read |
| `dispLen`; UV length; 0.10; range 0–0.20 | Opening: chosen distance along the read segment; full square is one unit | Direction multiplied by chosen length |
| Ray | Edge section: straight line from C through a named point, extended beyond it | Outward boundary construction |
| Component, vector / pair | 8.7; walkthrough: horizontal and vertical entries, with signs | Matching-entry arithmetic |
| `d`, `length`, square, square root | 9.1; walkthrough refreshes one triangle and its exact numbers | Division by current distance |
| Direction with length one; `dir = p/d`; normalization | New mathematical idea; walkthrough defines it by making every length divide by d | Multiply both entries by dispLen |
| Multiply a pair; subtract a negative | Walkthrough explicitly follows x, then y; signs linked to image directions | Actual read coordinate |
| `disp`; displacement field | New graphics idea: a different coordinate-change pair at each output position | `readUv = uv - disp` |
| Ratio, fraction, percentage | Length section: 0.10 of full image vs 0.25 cell width; plain division with units | Reject uniform 10% enlargement |
| `floor`, `fract`, row/column indices, 4, 0.5 | 8.10 and 9.9; shader section refreshes exact checker calculation | Navy/orange return |
| Boundary; outward counterpart; curved edge; straight corner join | Edge section constructs multiple points on one already identified side | Actual curve and added-region evidence |
| Extra/gained region | Region section defines as outside original cell but reading inside that cell | Highlight and selected-pixel proof |
| 3D appearance versus geometry | Size/appearance section: bowed grid is observed; shader only calculates two-coordinate reads | Interpretation of the visible image |
| Center crossing; guard 0.0001 | Center section traces read past C; code defines tiny skip radius and zero division | Limits of outward explanation |
| RGBA, alpha, straight/premultiplied | Chapter 3; shader colors explicitly alpha 1, so both RGB representations agree | Color chips and returned half4 |
| Pixel coordinate vs inspectable mathematical coordinate | Browser/Android section; arbitrary decimal selection is not rounded to pixel center | Honest browser model |

## Verification plan

Cold-read first sentence, first two sections, first formula, and longest walkthrough state before browser QA. Verify the exact read, length, membership, center guard, center crossing, all boundary points, and the added region against the shader formula. Test all controls, every step, all presets, provenance controls, exercises, and completion-record copy. Inspect file:// screenshots at 1920×1080 and 5120×1440 in light mode. Check label bounds, horizontal overflow, relative links, and browser errors. Android source remains unchanged; do not claim device validation.

## Beginner cold-read audit (before final browser verification)

- First prose sentence starts from the completed Lesson 9.9 checker. The opening names the actual input cell, output W, input read R, and the chosen missing y coordinate. The first two images show the result before formula expansion.
- Before the first formula, section 1 defines both image coordinate systems, direction of y, the square-size condition, exact cell bounds including endpoint notation, W/uv, C, and the chosen read distance. The first displayed equation is the already learned `p = uv - C`, expanded entry by entry.
- The stepper defines components, length, squaring, square root, normalization, and displacement before using their new formulas. Division's purpose is visible as `d / d = 1`; multiplication's purpose is visible as `1 * dispLen`. Subtracting a negative vertical component is explained as moving downward.
- Section 2 consumes the exact read from section 1. It defines magnitude before the first-entry-distance calculation and verifies both x and y bounds. The default numerical example is explicitly fixed where live state could differ.
- The added-region diagram exposes the secondary below-left patch and names its operation immediately: reads there pass C into the named input cell. The later center section supplies the complete numerical trace.
- The term "mesh" was removed; no untaught 3D construction is needed. Straight corner joins are explicitly approximations and now have an equally scaled magnified comparison.
- Each walkthrough operation changes the drawing. Full numeric labels remain beside the diagram. The final check must frame the step controls and body together, not the longer introductory section.

## Completed verification

- The lesson opened from `file://` with no external resource requests and no browser or JavaScript errors. All 13 enabled links resolved to existing local files/anchors or the cited official documentation.
- The displayed displacement AGSL exactly matches the inspected Android `DisplaceAgsl` string. Android source was unchanged.
- 4,356 coordinate/distance cases checked finite reads, constant displacement length outside the guard, valid read bounds for the permitted controls, and identity at zero. 606 constructed boundary positions read back to their original inputs.
- 5,544 independently evaluated raster positions matched the input checker, output checker, gained-region highlight, and exact-cell ownership image.
- Default W reads `(0.6052786404500042, 0.2894427190999916)`. First entry distance is `0.05590169943749475`. The top boundary at output x = 0.65 is `0.15844022805632396`. Nearby orange/navy and center-crossing counterexamples passed.
- 112 layout states passed text bounds and overlap checks. These include all six steps, all presets, corners, exact C, nearby C, both edges, zero/default/maximum distance, very short distances, and ultrawide layout. Labels choose positions using actual text bounds and reserve space for axes and other labels. Exactly coincident W/R may share one label; small nonzero distances keep distinct labels.
- Both length controls and position controls update the canonical state. Real pointer picking agrees within one physical browser event pixel. All 34 visible provenance controls opened within the viewport and closed with Escape. Prediction choices, challenge feedback/reset/solution, every details disclosure, review checkboxes, record generation, and asynchronous clipboard copy passed. The record still says `completed_by_learner: false`.
- Inspected light-mode screenshots at 1920×1080 and 5120×1440. The longest step states fit with navigation, diagram, formula, and caption visible together. Detailed top/right edge screenshots include the enlarged curve-versus-corner-join gap. The slice uses continuous solid fills, with no artificial striped bands.
- Browser QA found and fixed the original slice-strip seams, an SVG disclosure visibility issue, and corner label collisions. `git diff --check` passes. No mobile or dark-theme QA, Android build, or physical-device result is claimed.

The JSON report includes a SHA-256 hash of the tested lesson. Screenshots are named `lesson-09-10-revised-*.png` in this directory.
