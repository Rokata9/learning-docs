# CURRENT_STATE.md — where the course stands

**Updated:** 2026-11-25. This file records what exists, where the model’s inputs come from, and what comes next. The lesson notes describe the existing pages. Use [AGENTS.md](AGENTS.md) for how to teach new or revised lessons.

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

- **Result and first use.** `outwardAt` estimates the direction straight out near a pixel. The six titled steps move from signed distance to two estimates, an arrow, unit length, and a rim comparison. In Step 6, R = (122.916, 656.088) pt and R′ = (354.684, 656.088) pt both have sd = −0.36 pt, so the rim fades by the same amount. Their outward arrows, approximately (−0.60, −0.80) and (0.60, −0.80), give different light in 10.47’s `addRimLine`. Step 6 explains its three inputs and previews gray 0.10 becoming about 0.184 and 0.150. Lesson 10.47 works out the fade, light, and finished gray. The plan also uses the arrow in Lesson 11.2 to choose a nearby spot farther inside the glass to read from.
- **Opening and straight edge.** The menu and close-up show the same marked P and its shortest path to the outline. Step 1 starts below the straight top edge at U, 5.60 pt inside. A 1.00 pt move up to V leaves 4.60 pt to go. Signed distance rises from −5.60 to −4.60 pt. The prediction reveals a 1.00 pt move right from U to W and shows that the distance stays 5.60 pt.
- **Corner example.** P = (126.06, 660.28) pt is a chosen point 5.60 pt inside. The model uses a 36 pt corner radius and top and left edges at y = 648.60 and x = 108.30, based on the Safari recording. K = (144.30, 684.60) pt is one radius in from each edge. The visible tables derive the horizontal samples A and B first and then the vertical samples D and E. Each sample is 0.50 pt from P and each pair is 1.00 pt apart. The signed distances at A, B, D and E are approximately −5.29739, −5.89734, −5.19854 and −5.99850 pt. The average changes per point across the two spans estimate the rates near P. They are about −0.59995 and −0.79996. The equal half-spans A to P and P to B have different signed-distance changes, about −0.30261 and −0.29734 pt.
- **The arrow.** Step 4 shows P and P′ = (119.98, 666.36) pt on the same inner arc. Both have sd = −5.60 pt. Their sampled arrows point in different directions, about (−0.60, −0.80) and (−0.80, −0.60). In the optional check Q and Q′ are the outline points nearest P and P′, respectively. The check labels each part of two chosen 1 pt moves separately from the sampled changes per point at P. Multiplying and adding gives estimated signed-distance rises of 0.60 pt left and 1.00 pt toward Q. The optional check names the straight distance from K to each point on Amber, then the signed distance at that point. Amber’s tip has sd ≈ −4.99 pt, a rise of 0.61 pt from −5.60. P’s example arrow has length ≈ 0.99994 before division. The one-unit length keeps the lamp comparison tied to direction. At S = (164.30, 704.60) pt, two edges are each 56 pt away. The samples give (−0.50, −0.50), length ≈ 0.70711, and outward ≈ (−0.70711, −0.70711). At the menu center, each pair has equal signed distances. The shader returns (0, 0) before dividing.
- **Explorer and exercises.** P is draggable in both views. The five presets include the menu center, and the four sample offsets are 0.25, 0.50, 1.00 and 2.00 pt. A diagram compares the 0.25 and 1.00 pt offsets at the corner preset. The wider gap gives a bigger signed-distance drop and nearly the same rightward rate. A second example uses P 0.50 pt right of S. The wider gap reaches samples whose closest edge changes and turns the arrow from (0, −1) to about (−0.32, −0.95). The trace previews the finished gray and shows the actual change from a full move along the sampled arrow. Both exercises give the four distances and the gap beside the question. The answers work through the two changes and the unit arrow. Under the straight top edge the result is (0, −1). On the “⋯” button at (358.30, 821.60) pt it is approximately (0.80, 0.60).
- **Code and page helpers.** The copyable Metal function `float2 outwardAt(float2 P, float4 box, float cornerRadius)` is the same snippet for the 10.48 build. `distanceSample`, `pairLines`, `lengthLines` and `unitLines` now supply the 10.46 page’s arithmetic, including the live explorer and line table. The model carries more digits than it displays.

## Lesson 10.47 — The rim line (`C`, rewritten 2026-11-20)

File: `course/part-two/chapter-10/lesson-10-47-the-rim-line.html`. HTML only.

- **Result and first use.** `addRimLine` returns the pixel color with the white rim line added. Lesson 10.48 calls it on the tinted menu color to draw the line with two brighter opposite corners. The opening marks P on the model beside the resting Safari recording. The contrast boost is a display aid for both pictures.
- **Fade at P.** The chosen example P = (122.916, 656.088) pt is 0.36 pt inside the outline. The fitted width is 1.20 pt based on the roughly 1 pt line in the recording. From the start of the fade to P is 0.84 pt. Dividing by the width gives 0.70. `smoothstep` uses that fraction to give a band weight of 0.784. The weight is 1 at the outline, 0 at least 1.20 pt inside, and the shader skips the line outside the glass.
- **Facing arrow and light.** Q is the point of the outline nearest P. The flat side view and the turnable view show Q at the foot of the glass and the facing arrow lying in the plane of the screen. The model uses the nearby `outwardAt` result at P as an estimate of the facing direction at Q. P’s facing arrow is approximately (−0.60, −0.80, 0). The fitted lamp direction is (−0.48, −0.60, 0.64). With the displayed arrow, the alignment score is 0.768. The fitted 0.40 from all around leaves up to 0.60 for the lamp. The lamp contributes about 0.4608, giving total light about 0.8608.
- **Prediction.** P′ is the mirrored pixel, the same distance inside the bottom-right corner with the same starting gray. The facing arrow reverses, giving the opposite alignment score (about −0.768). Taking the score’s size gives the same modeled light in both corners. The recording shows the two bright corners with unequal measured peaks. Light passing through the glass to the far edge is a hypothesis.
- **Color.** The fitted strength is 0.125 and the chosen starting gray is 0.10 per channel. At P the line adds about 0.0843584 to each channel. The new channel value is about 0.1843584, or 47 on the 0–255 scale. At the adjacent outline point Q, full band weight gives the peak of about 53 on that scale. At the other two marked corner positions the light is about 0.5152.
- **Explorer and exercise.** The explorer follows P on the menu, in the enlarged strip, and in 3D. Presets include the outline and a point outside. The worked steps keep the chosen camera angle and zoom when changing steps or corners. The exercise gives outward at R = (134.304, 834.872) pt as (−0.28, 0.96), with the lamp direction and light inputs alongside. The answer shows the signed sum −0.4416, its size 0.4416, and total light about 0.66496.
- **Code.** The copyable Metal snippet and its interface `half3 addRimLine(half3 color, float sd, float2 outward)` carry forward to 10.48. The line table works through P.

## Lesson 10.48 — Build: the resting menu’s outline, rim line and shadow (`B`, 2026-11-23)

File: `course/part-two/chapter-10/lesson-10-48-resting-menu.html`. The explorer is in Section 2.

- **Result and first use.** `restingMenuColor` colors the dark resting menu in screen points. It adds the rim line to the starting gray, limits each color channel to 0 through 1, and mixes that gray with the shaded page using the one-pixel coverage. Lesson 11.1 supplies the glass picture that replaces the flat starting color in 11.4, where the resting rim bends stripes and rows near the edge.
- **Worked P.** P = (122.76, 655.88) pt and the upper-left corner center K = (144.3, 684.6) pt. The distance from K to P is 35.90 pt. At radius 36 pt, sd is −0.10 pt and coverage is 0.80 at 3 device px per pt. The four half-point samples give outward ≈ (−0.599990, −0.800008). The lesson and lab choose a 2.00 pt rim fade and 0.25 strength so the opposite corners are easier to compare. The band weight is 0.99275 and the total light ≈ 0.860800, giving an addition of ≈ 0.213640 per channel at P. At the same depth, the opposite corner gives the same addition, and the other pair adds ≈ 0.127868.
- **Step 2.** The close-ups show the whole pixel as a teal square over the page and glass. They straighten the boundary and align it with the square’s sides to show the shader’s estimate. The amber line is the one-pixel-wide strip used in the calculation. The purple outline cuts Q’s square into equal halves and P’s into a 20% page slice and an 80% glass slice. At U (+⅙ pt) and V (−⅙ pt), the whole square is on one side and touches the outline. At one full width outside or inside, the formula gives −0.50 or 1.50 before clamping.
- **Dark starting color.** The worked example, explorer, and lab all use the dark menu. The recorded interior was about 25 out of 255, which converts to ≈ 0.098. The chosen 0.10 leaves 0.90 per channel before reaching 1.00. Step 4 shows the starting gray and the gray after adding the rim line at P, ≈ 0.313640. That sum is within the allowed range.
- **Shadow and composition.** The full 12 pt linear fade uses sd at the source S = (122.76, 651.88) pt, 4 pt above P. There, sd ≈ 3.173588 pt and mask ≈ 0.235534. The black shadow takes ≈ 0.056528 of the page color with chosen maximum strength 0.24. The page starts at 0.16 and becomes ≈ 0.150955 at P. The 0.80 glass contribution and 0.20 page contribution give a final gray of ≈ 0.281103 per channel. The shadow width, shift, strength, and page gray are choices for the exercise.
- **Explorer and lab.** Drag P on the menu or in the close-up. Presets exercise the center, the opposite corner, the outline, just outside, and the shadow below the menu. At (240, 840.6) pt, shifting down 4 pt takes the shadow mask from 1/6 to 1/2. In the iOS lab’s `LiquidGlassLab/chapter10/`, `RestingMenuExerciseView.swift` previews the completed `RestingMenuExercise.metal` and offers the shadow offset toggle. The shader uses the geometry and rim functions in `RestingMenuHelpers.h`. The page explains the same implementation.
- **Lab coordinates and inputs.** Swift supplies `.boundingRect`, the menu size, and the radius and shadow settings. The caller subtracts the menu center from the pixel’s preview position before passing P into `restingMenuColor`. In the 300 × 226 pt preview, the center is (150, 113) pt and the menu half-size is (130.5, 94) pt. `roundedRectSd` and `outwardAt` take positions measured from the menu center. The optional example matches the Section 1 point at (33.96, 26.28) pt in the preview and (−116.04, −86.72) pt from the menu center.
- **Rim comparison verification (2026-11-25).** Step 4 draws and labels all four corner samples at equal depth. The learner’s shader gave gray 66/255 at a mirrored top-left and bottom-right sample and 50/255 at the other pair on the iPhone 16 Pro simulator.
- **Completed preview verification (2026-11-25).** Xcode built the lab, and the iPhone 16 Pro simulator opened Chapter 10 with the completed shader and shadow toggle. The revised lab section loaded in both Chrome themes.

## Next: 11.1

- **11.1** (`E`) starts the lens with the glass picture and `layerEffect`.
