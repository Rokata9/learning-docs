# CURRENT_STATE.md — where the course stands

**Updated:** 2026-11-20. The live state only: what exists, the numbers the next lesson needs, what is open. The rules are in `AGENTS.md`.

History is in git. The per-lesson notes of Lessons 9.1–10.45, the side lesson and the cheatsheet, the old handoff and the old feedback log are at commit `3715feb`:

```bash
git show 3715feb:liquid-glass-learning-docs/CURRENT_STATE.md
```

(the same for `curriculum/liquid_glass_ios_handoff.md`, `FEEDBACK_LOG.md`, `USER_PREFERENCES.md`, `NEW_CHAT_PROMPT_PART_TWO.md`).

## The course

- Swift, SwiftUI, Metal (`.metal` + `ShaderLibrary`), iOS 17 or later. Test device: iPhone 16 Pro, 402 × 874 pt.
- Part one, Lessons 1.1–10.45: `course/chapters/chapter-NN/`, done. Part two, from 10.46: `course/part-two/chapter-NN/`, following `curriculum/safari_spring_menu_plan.md` section 4.
- Progress line after a generated lesson: `Course progress: X of 323 lessons completed.` X comes only from the learner.
- **Open, the learner's call:** the old curriculum (`curriculum/liquid_glass_ios_curriculum.md`), the Chapter 10 hub, the course home and the count 323 still describe the old plan; no page links to part two yet; Lesson 10.45's “Where this is used” still names the old 10.46 and 10.47.
- Frozen Chapter 7 frost stack (do not rebuild Chapter 7): blur 18 pt, tint 0.25, saturation 0.40, rim 3 pt, inner band 12 pt with band blur 6 pt, shadow blur 12 pt offset 4 pt; saturation weights 0.213 / 0.715 / 0.072. The menu uses its own values.
- Pending iOS changes: none.

## Files

- iOS lab: `/Users/rosen/Code/LiquidGlassLab-iOS` (the learner's Mac only). Explorers in `LiquidGlassLab/chapterNN/`; the side lesson's glass shader `LiquidGlassLab/shortcut/SafariMenuGlass.metal` (rim alpha 0.12, width 1.2 in dark mode). Build with `DEVELOPER_DIR=/Applications/Xcode.app/Contents/Developer` (xcode-select points at the Command Line Tools); pass the simulator as `id=<udid>`.
- Reference pages: `course/glossary.html`, `course/reference-number-forms.html`, `course/reference-3d-geometry-qa.html`.
- Cheatsheet: `cheatsheet/index.html`, one page per chapter (`chapter-NN-<hub name>.html`) and `all-chapters-constants-and-conventions.html`. Open: the learner's “General” notes pass on the cards that came from the old topic sections 04–13.
- Side lesson (not counted): `course/shortcut/lesson-shortcut-safari-menu.html`. Its recording frames are base64 JPEGs in `const FRAMES` (643 × 394 px for 402 × 246 pt, from y = 624 pt).
- Tools: `tools/verify-lesson.mjs` (node), `tools/beginner-review/` (only when the learner asks for a review). Past reviews: `reviews/`.

## Part two: the glass

- Units: pt on the 402 × 874 pt screen, from its top-left corner, x to the right, y toward the bottom.
- The resting menu: a rounded rectangle 261 × 188 pt, center (238.8, 742.6), corner radius 36 (left 108.3, right 369.3, top 648.6, bottom 836.6).
- The “⋯” button: a circle of radius 25 around (342.3, 809.6).
- Both measured on the screen recording, good to about ±4 pt; not Apple's numbers.
- The rim, the rounded edge of the glass: a quarter circle seen from the side, 14 pt wide and 14 pt high at rest (chosen). Height d pt inside the outline: √(14² − (14 − d)²) up to d = 14, then 14. In flight: 28 pt wide, push 24 pt on the outline (chosen, fitted to the recording).
- The lamp of the rim line: L = (−0.48, −0.60, 0.64), toward the top left and up out of the screen (chosen: it fits one frame).

## Part two: the page kit

- **Theme block** (copy it from the newest lesson): a head script that uses only `matchMedia('(prefers-color-scheme: dark)')`, sets `<html data-theme>` to `light` or `dark`, follows changes and calls `window.onThemeChange` (the page's redraw-everything function); every page color is a CSS variable on `:root`, with the dark values under `:root[data-theme=dark]` (page `#161d27`, text `#ccd2dc`); canvas colors are named in their light value and swapped by the table `DARKC` in the dark theme (10.46: a `fillStyle`/`strokeStyle` setter; 10.47: `C()`). Add a row to `DARKC` for every new color. Pictures of the screen (recording frames, light maps) are dark in both themes.
- **Helpers in 10.46:** `f`, `pt`, `R12` (12 decimals under 1, one fewer per digit above), `Trace` (one operation per line; `K` marks known inputs green; `root` prints a root as exact only when its square checks in whole numbers), tooltips, `addPt` (also makes the point's labels clickable: every label starting with its name, or with `lab`; `addLab` for a point with no dot), `sdOf`, `whereOf`, `sdChain`, `measure` (takes the pixel's name), `kCheck`, `mkView`, `plate`/`plateIf`, `shapePath`, `zoomScene` (options `legs`, `pre`, `nText`, `pLab`, `kLabel`), `menuMap`.
- **Added in 10.47:** `chain`, `perimAt`/`perimOf` (the outline as one path, with the direction straight out), `hOf` (the rim's height), `rimScene` (the 3D view: the glass near a pixel, cut straight down; camera yaw −75°, pitch 48°), `screenImage`, `bandZoom`, `flatSlice`, `barsFlat`, `mapBase`, and Lesson 10.45's `Orbit3D` and `viewBar`.

## Lesson 10.46 — Which way is out (`C`; made 2026-11-19, revised twice 2026-11-20)

File: `course/part-two/chapter-10/lesson-10-46-which-way-is-out.html`. HTML only.

- **The idea (hero):** straight out of the glass is the way in which sd grows the most, 1 for each 1 pt; the changes of sd over 1 pt to the right and over 1 pt toward the bottom are the parts of an arrow, and that arrow divided by its length is outward.
- **Numbers:** P = (126.06, 660.28) pt, chosen, in the top-left corner; K = (144.3, 684.6), the corner circle's center; |KP| = 30.40; sd at P = −5.60; Q, the nearest point of the outline, on line KP; T = (125.46, 659.48), 1 pt from P toward Q, sd −4.60. S = (164.30, 704.60), chosen, 56 pt from the left edge (x = 238.80 − 130.50 = 108.30) and from the top edge (y = 742.60 − 94 = 648.60), both worked out in Step 6's first line: sd at A −55.50 (nearest the left edge), at B −56 (the top edge), changes −0.50 and −0.50, arrow 0.707 long, outward (−0.707, −0.707).
- **Steps:** 1 known and not used: the shader knows P and can ask for sd at any pixel (−5.60 at P = |KP| − 36); goal outward, from P toward Q; it does not use K or Q, because K is not the same everywhere: each corner has its own circle center, (144.30, 684.60), (333.30, 684.60), (144.30, 800.60), (333.30, 800.60), and (257, 654.20), under the top edge, has no circle and no K (own right picture: the whole menu at 1.9 px per pt) · 2 a 1 pt move (the gray circle) makes sd grow by at most 1 (else P would reach the outline in less than 1 + 4.60 = 5.60 pt), by 1 only toward Q (T); cyan curve 0; so the move with the biggest growth has outward's direction · 3 A, B, D, E 0.50 pt from P (chosen): changes −0.60 and −0.80 over 1 pt · 4 the arrow (−0.60, −0.80), signs in direction words (legs drawn); along a direction u, 1 long, sd grows by the dot product of the arrow and u: to the left 0.60, toward the top 0.80, along the arrow 1 (dots on the gray circle, own zoom at 150 px per pt); largest along the arrow, so it points straight out; length 1 · 5 the check with K: the arrow from K to P is 144.30 − 126.06 = 18.24 to the left and 684.60 − 660.28 = 24.32 toward the top, ÷ |KP| = 30.40 gives 0.60 and 0.80, so the arrow is outward; the shader knows no K · 6 at S, between two edges: the arrow (−0.50, −0.50) is 0.707 long, so the shader divides; why 1 long: dot(N, L) grows with N's length (own zoom at S with each neighbor's nearest edge, own overview with the two 56 pt distances and the pink line of pixels equally far from both edges).
- **Section 2:** P draggable; presets: Section 1's pixel, under the top edge (257, 654.2), outside the glass (104.3, 654.6), S, between two edges (164.3, 704.6); steps 0.25, 0.50, 1, 2 pt; one table row per step (Step 2's row: sd at T = P + outward; Step 5's row: the check with K in a corner, the edge's direction under an edge, no check between two edges).
- **Exercises:** under the top edge → (0, −1); on the “⋯” button (358.3, 821.6) → (0.80, 0.60).
- **Section 4 (the code, after the exercises):** `float2 outwardAt(float2 P, float4 box, float cornerRadius)` in Metal, only this lesson's part: four calls of `roundedRectSd` (Lesson 9.4) at A, B, D, E with `stepPt = 0.5`, the two changes divided by `2.0 * stepPt`, `length`, a guard that returns (0, 0) for length 0, the division. A line table gives each line's numbers at Section 1's P, and a button copies the code.
- **Names:** outward is 1 long; before the division it is “the arrow of the two changes”. Not “slope” or “gradient”. K, not C.

## Lesson 10.47 — The rim line (`C`, made 2026-11-19)

File: `course/part-two/chapter-10/lesson-10-47-the-rim-line.html`. HTML only. The first page with a 3D view of the menu's glass.

- **The idea:** the line's light takes the absolute value of dot(N, L), so glass that faces away from the lamp is lit like glass that faces it; max(dot, 0) is a solid body's rule.
- **Numbers:** P = (122.916, 656.088) pt, 0.36 pt inside the top-left corner (chosen so that no number prints twice); band = smoothstep(−1.20, 0, sd) = 0.784; on the outline the rim stands straight up, so N at P = (−0.60, −0.80, 0); dot(N, L) = 0.768 at P, −0.768 at the opposite corner P′, 0.192 at the top-right corner V; light = 0.40 + 0.60 × |dot| = 0.8608 at P and P′, 0.5152 at V; line = 0.125 (strength, chosen) × 0.784 × 0.8608 = 0.0843584, added to each channel.
- **Exercise:** R = (134.304, 834.872), outward (−0.28, 0.96): light 0.66496.
- **Names:** the lamp (the source), light (the number), band, the rim line (the strip, 1.20 pt wide), M (the center of the rim's circle).
- **Section 4 (the code, after the exercise):** `half3 addRimLine(half3 color, float sd, float2 outward)` in Metal: returns the color unchanged where sd > 0 (no glass), band = smoothstep(−1.2, 0, sd), N = (outward, 0), L = (−0.48, −0.60, 0.64), light = 0.40 + 0.60 × abs(dot(N, L)), strength 0.125, color + strength × band × light. A line table gives each line's numbers at Section 1's P (0.1843584 on a 0.10 gray), and a button copies the code.

## Next: 10.48, then 11.1

- **10.48** (`B`, needs Xcode and the lab) joins 10.45–10.47 in one Metal function: the outline's soft edge, a flat tint, the rim line and the shadow. It takes the code of 10.46's and 10.47's Section 4 as written (`outwardAt`, `addRimLine`). The side lesson's shader draws its rim with one even brightness; the build's answer key adds 10.47's lit line instead. 10.48 is where a channel sum above 1 can first be seen.
- **11.1** (`E`) starts the lens: the glass picture and `layerEffect`.
