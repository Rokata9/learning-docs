# Liquid Glass Android course — current state

**Updated:** 2026-08-30  
**Course version:** 9.2.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **86 of 216 lessons**.
- Completed through: **Lesson 8.12 — Shader error workflow**.
- Completed chapters: **1, 2, 3, 4, 5, 6, 7, and 8**.
- Chapter 8: **12 of 12 lessons complete**.
- Chapter 9: **0 of 14 lessons complete**.
- Current unresolved checkpoint: **Lesson 9.1 — Distance between two points**.
- Generated frontier: **Lesson 9.2 — Circle signed distance field**.
- Next planned lesson after the generated frontier: **Lesson 9.3 — Turn distance into a soft mask**.
- Lessons 8.2 through 8.12 are learner-confirmed complete.
- Lessons 9.1 and 9.2 are generated ahead and are not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation. Do not mark 9.1 complete because 9.2 exists.

Reusable new-chat starter: `NEW_CHAT_PROMPT.md`. Paste it, then name generate or questions in the same message. Progress in this file wins. When the checkpoint or frontier moves, refresh section 12 of that prompt.

## Current lesson files

```text
course/chapters/chapter-08/lesson-08-12-shader-error-workflow.html
course/chapters/chapter-09/lesson-09-01-distance-between-two-points.html
course/chapters/chapter-09/lesson-09-02-circle-signed-distance-field.html
course/chapters/chapter-09/lesson-distance-fields-image-sampling-and-refraction.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/DistanceBetweenPointsExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/CircleSdfExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/Chapter09Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/Chapter08Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

## Last session compact record (2026-08-30)

Learner confirmed Lessons 8.11 and 8.12 complete and asked for the next two lessons. Completion advances to 86 of 216 through **8.12**. Chapter 8 is complete. Checkpoint becomes **9.1**. Frontier advances to **9.2**.

8.11 completed contract: `clamp` keeps a number inside a closed interval; `mix` is Lesson 5.4 interpolation; `smoothstep` builds a 0..1 blend fraction in a UV band and bends it with `t × t × (3 − 2t)`. Production store is `mix(navy, orange, smoothstep(edge0, edge1, uv.x))`. Teaching pixel x=180, uv.x=0.45, edges 0.40 / 0.60, stored red 0.221875. Sine unused.

8.12 completed contract: compilation is `RuntimeShader(string)`; `IllegalArgumentException.message` holds the compiler text; shrink to a smallest failing program; teaching failure is `gl_FragCoord` in an otherwise legal 8.11 string. HTML does not compile AGSL.

9.1 contract: a right triangle is drawn first. Teaching `p = (0.30, −0.40)`. Legs 0.30 and 0.40. Walk-around `0.70` is not the straight-line length. `0.09 + 0.16 = 0.25`. `sqrt(0.25) = 0.50` because `0.50 × 0.50 = 0.25`. Production is `length(p)` stored as gray. Teaching rectangle is square. `× 2` unused. Sign unused. Nested equal-value outlines: smaller `length` circles are darker; smaller walk-around diamonds are the analog of those smaller circles. The diamond is a square standing on a vertex.

9.2 contract: `sd = length(p) − radius`. Negative inside, zero on the boundary, positive outside. Default radius `0.25`. Teaching pixel `sd = +0.25` (outside). Center `sd = −0.25` (inside). Production is `if (sd < 0.0) orange else navy`. `smoothstep` unused.

## Unresolved checkpoint — Lesson 9.1

Do not mark 9.1 complete until the learner confirms.

Course progress: 86 of 216 lessons completed.
