# Liquid Glass Android course — current state

**Updated:** 2026-08-30  
**Course version:** 9.4.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **87 of 216 lessons**.
- Completed through: **Lesson 9.1 — Distance between two points**.
- Completed chapters: **1, 2, 3, 4, 5, 6, 7, and 8**.
- Chapter 8: **12 of 12 lessons complete**.
- Chapter 9: **1 of 14 lessons complete**.
- Current unresolved checkpoint: **Lesson 9.2 — Circle signed distance field**.
- Generated frontier: **Lesson 9.4 — Rounded rectangle distance field**.
- Next planned lesson after the generated frontier: **Lesson 9.5 — Capsule distance field**.
- Lessons 8.2 through 9.1 are learner-confirmed complete.
- Lessons 9.2, 9.3, and 9.4 are generated ahead and are not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation. Do not mark 9.2 complete because 9.3 or 9.4 exists.

Reusable new-chat starter: `NEW_CHAT_PROMPT.md`. Paste it, then name generate or questions in the same message. Progress in this file wins. When the checkpoint or frontier moves, refresh section 12 of that prompt.

## Current lesson files

```text
course/chapters/chapter-09/lesson-09-01-distance-between-two-points.html
course/chapters/chapter-09/lesson-09-02-circle-signed-distance-field.html
course/chapters/chapter-09/lesson-09-03-turn-distance-into-a-soft-mask.html
course/chapters/chapter-09/lesson-09-04-rounded-rectangle-distance-field.html
course/chapters/chapter-09/lesson-distance-fields-image-sampling-and-refraction.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/DistanceBetweenPointsExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/CircleSdfExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/SoftMaskExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/RoundedRectSdfExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/Chapter09Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

## Last session compact record (2026-08-30)

Learner marked Lesson 9.1 ready and asked to keep 9.2 pending while generating 9.3 and 9.4. Completion advances to 87 of 216 through **9.1**. Checkpoint stays **9.2**. Frontier advances to **9.4**.

9.1 completed contract: a right triangle is drawn first. Teaching `p = (0.30, −0.40)`. Legs 0.30 and 0.40. Walk-around `0.70` is not the straight-line length. `0.09 + 0.16 = 0.25`. `sqrt(0.25) = 0.50` because `0.50 × 0.50 = 0.25`. Production is `length(p)` stored as gray. Teaching rectangle is square. `× 2` unused. Sign unused. Nested equal-value outlines: smaller `length` circles are darker; smaller walk-around diamonds are the analog of those smaller circles. The diamond is a square standing on a vertex.

9.2 contract (generated ahead, not complete): `sd = length(p) − radius`. Negative inside, zero on the boundary, positive outside. Default radius `0.25`. Teaching pixel `sd = +0.25` (outside). Center `sd = −0.25` (inside). Production is `if (sd < 0.0) orange else navy`. `smoothstep` unused.

9.3 contract (generated ahead): `mask = 1.0 − smoothstep(−band, band, sd)`, then `mix(navy, orange, mask)`. Default `band = 0.10`. Teaching band pixel `p = (0.18, −0.24)`, `d = 0.30`, `sd = +0.05`. linearFraction `0.75`. curvedFraction `0.84375`. mask `0.15625`. stored red `0.221875`. Far 9.1/9.2 pixel stays navy. Center mask `1`. Boundary mask `0.50`. `edge1 > edge0` required. Not 4.8 binary, not 4.9 coverage, not blur.

9.4 contract (generated ahead): grow an inner sharp box by the corner radius. `innerHalf = outerHalf − cornerRadius`. `q = abs(p) − innerHalf`. Piecewise `sdBox`, then `sd = sdBox − cornerRadius`. Default outer half `(0.30, 0.20)`, corner radius `0.10`. Corner-boundary `p = (0.26, −0.18)` has `sd = 0`. Production is the hard `if` on this `sd`. Capsule is Lesson 9.5. `min`/`max` of two complete fields is Lesson 9.6.

## Unresolved checkpoint — Lesson 9.2

Do not mark 9.2 complete until the learner confirms.

Course progress: 87 of 216 lessons completed.
