# CURRENT_STATE.md — where the course stands

**Updated:** 2026-11-20. This file records what exists, where the model’s inputs come from, and what comes next. The lesson notes describe the existing pages. Use [AGENTS.md](AGENTS.md) for how to teach new or revised lessons.

History is in git. The per-lesson notes of Lessons 9.1–10.45, the side lesson and the cheatsheet, the old handoff and the old feedback log are at commit `3715feb`:

```bash
git show 3715feb:liquid-glass-learning-docs/CURRENT_STATE.md
```

(the same for `curriculum/liquid_glass_ios_handoff.md`, `FEEDBACK_LOG.md`, `USER_PREFERENCES.md`, `NEW_CHAT_PROMPT_PART_TWO.md`).

## The course

- Swift, SwiftUI, Metal (`.metal` + `ShaderLibrary`), iOS 17 or later. Test device: iPhone 16 Pro, 402 × 874 pt.
- Part one, Lessons 1.1–10.45: `course/chapters/chapter-NN/`, done. Part two, from 10.46: `course/part-two/chapter-NN/`, following [the Safari menu plan, section 4](curriculum/safari_spring_menu_plan.md#4-the-new-plan).
- Progress line after a generated lesson: `Course progress: X of 323 lessons completed.` X comes only from the learner. If X is unavailable, report `Course progress: unknown — tell me your current count.`
- **Open, the learner's call:** the old curriculum (`curriculum/liquid_glass_ios_curriculum.md`), the Chapter 10 hub, the course home and the count 323 still describe the old plan; no page links to part two yet; Lesson 10.45's “Where this is used” still names the old 10.46 and 10.47.
- **Open, the learner’s call:** whether the restriction on lab build exercises also applies to short questions on concept pages. The current page format keeps the short questions, as in 10.46 and 10.47.
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
- **Added in 10.47:** `chain`, `perimAt`/`perimOf` (the outline as one path, with the direction straight out), `hOf` (the rim's height), `rimScene` (the 3D view: the glass near a pixel, cut straight down; camera yaw 0°, pitch 48°: the screen's x axis drawn horizontal), `screenImage`, `bandZoom`, `flatSlice`, `barsFlat`, `mapBase`, and Lesson 10.45's `Orbit3D` and `viewBar`.

## Lesson 10.46 — Which way is out? (`C`, rewritten 2026-11-20)

File: `course/part-two/chapter-10/lesson-10-46-which-way-is-out.html`. HTML only.

- **Result and first use.** `outwardAt` estimates the direction straight out near a pixel. Lesson 10.47 takes the two screen parts of that direction to tell which way the glass faces at the outline. Comparing the facing direction with the lamp helps set the rim line’s brightness.
- **Opening and straight edge.** The menu and close-up show the same marked P and its shortest path to the outline. Step 1 starts below the straight top edge at U, 5.60 pt inside. A 1.00 pt move up to V leaves 4.60 pt to go. Signed distance rises from −5.60 to −4.60 pt. The prediction reveals a 1.00 pt move right from U to W and shows that the distance stays 5.60 pt.
- **Corner example.** P = (126.06, 660.28) pt is a chosen point 5.60 pt inside. The model uses a 36 pt corner radius and top and left edges at y = 648.60 and x = 108.30, based on the Safari recording. K = (144.30, 684.60) pt is one radius in from each edge. The visible tables derive the horizontal samples A and B first and then the vertical samples D and E. Each sample is 0.50 pt from P and each pair is 1.00 pt apart. The signed distances at A, B, D and E are approximately −5.29739, −5.89734, −5.19854 and −5.99850 pt. The changes per point are about −0.59995 and −0.79996.
- **The arrow.** The two changes estimate the direction of fastest local increase in signed distance. The example arrow has length ≈ 0.99994 and gives outward ≈ (−0.60, −0.80) after division. The one-unit length keeps the lamp comparison tied to direction. At S = (164.30, 704.60) pt, two edges are each 56 pt away. The samples give (−0.50, −0.50), length ≈ 0.70711, and outward ≈ (−0.70711, −0.70711). At the menu center, each pair has equal signed distances. The shader returns (0, 0) before dividing.
- **Explorer and exercises.** P is draggable in both views. The five presets include the menu center, and the four sample offsets are 0.25, 0.50, 1.00 and 2.00 pt. The trace shows the actual change from a full move along the sampled arrow. Both exercises give the four distances and the gap beside the question. The answers work through the two changes and the unit arrow. Under the straight top edge the result is (0, −1). On the “⋯” button at (358.30, 821.60) pt it is approximately (0.80, 0.60).
- **Code and page helpers.** The copyable Metal function `float2 outwardAt(float2 P, float4 box, float cornerRadius)` is the same snippet for the 10.48 build. `distanceSample`, `pairLines`, `lengthLines` and `unitLines` now supply the 10.46 page’s arithmetic, including the live explorer and line table. The model carries more digits than it displays.

## Lesson 10.47 — The rim line (`C`, made 2026-11-19)

File: `course/part-two/chapter-10/lesson-10-47-the-rim-line.html`. HTML only. The first page with a 3D view of the menu's glass.

- **Result and first use:** `addRimLine` returns the pixel color with the bright line added. In 10.48, the build applies it to the tinted menu so the outline is brighter in two opposite corners.
- **Input sources:** the 1.20 pt band width and lamp direction are fitted to the resting recording. The 0.40 contribution from light all around keeps the dimmer corners close to that frame. The lamp’s 0.60 share is the remainder of the 0-to-1 light scale. The 0.125 strength is fitted to the line’s brightness. The example uses a chosen position 0.36 pt inside the outline and a chosen starting gray of 0.10 per channel.
- The **hero** gives several outputs before showing what goes into them. In Step 1, connect the distance across the strip to the fade before showing the `smoothstep` arithmetic. In Step 2, point out Q, the nearest point on the outline, in both views. Introduce the arrow at Q before explaining why the shader reuses it at the nearby shaded pixel. Step 3 calls the raw dot product the lamp’s light. Step 5 multiplies its magnitude by the lamp’s share. Keep the alignment score, strip weight, light, and added channel value distinct.
- **Step 4** presents one possible path of light through glass as the reason for the bright opposite corner. The recording shows the bright corner, and the absolute-value rule reproduces it in the model. The path is a proposed explanation. Step 5’s roughly 47 is the example pixel’s color on the 0–255 scale. Roughly 53 is the model’s peak at the outline. The contrast boost in the opening is a display aid for the recording and reconstruction. In the exercise, the outward arrow can be a stated given while the learner works out light at R.
- **The idea:** the line's light takes the absolute value of dot(N, L), so glass that faces away from the lamp is lit like glass that faces it; max(dot, 0) is a solid body's rule.
- **Numbers:** P = (122.916, 656.088) pt, the chosen example pixel 0.36 pt inside the top-left corner; band = smoothstep(−1.20, 0, sd) = 0.784; on the outline the rim stands straight up, so N at P = (−0.60, −0.80, 0); dot(N, L) = 0.768 at P, −0.768 at the opposite corner P′, 0.192 at the top-right corner V; light = 0.40 + 0.60 × |dot| = 0.8608 at P and P′, 0.5152 at V; line = 0.125 × 0.784 × 0.8608 = 0.0843584, added to each channel.
- **Exercise:** R = (134.304, 834.872), outward (−0.28, 0.96): light 0.66496.
- **Names:** the lamp (the source), light (the number), band, the rim line (the strip, 1.20 pt wide), M (the center of the rim's circle).
- **Section 4 (the code, after the exercise):** `half3 addRimLine(half3 color, float sd, float2 outward)` in Metal: returns the color unchanged where sd > 0 (no glass), band = smoothstep(−1.2, 0, sd), N = (outward, 0), L = (−0.48, −0.60, 0.64), light = 0.40 + 0.60 × abs(dot(N, L)), strength 0.125, color + strength × band × light. A line table gives each line's numbers at Section 1's P (0.1843584 on a 0.10 gray), and a button copies the code.

## Next: 10.48, then 11.1

- **10.48** (`B`, needs Xcode and the lab) joins 10.45–10.47 in one Metal function: the outline's soft edge, a flat tint, the rim line and the shadow. It takes the code of 10.46's and 10.47's Section 4 as written (`outwardAt`, `addRimLine`). The side lesson's shader draws its rim with one even brightness; the build's answer key adds 10.47's lit line instead. 10.48 is where a channel sum above 1 can first be seen.
- **11.1** (`E`) starts the lens: the glass picture and `layerEffect`.
