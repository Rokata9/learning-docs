# Liquid Glass Android course — current state

**Updated:** 2026-09-09  
**Course version:** 9.8.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **93 of 216 lessons**.
- Completed through: **Lesson 9.7 — Sample an input shader**.
- Completed chapters: **1, 2, 3, 4, 5, 6, 7, and 8**.
- Chapter 8: **12 of 12 lessons complete**.
- Chapter 9: **7 of 14 lessons complete**.
- Current unresolved checkpoint: **Lesson 9.8 — Translate sample coordinates**.
- Generated frontier: **Lesson 9.8 — Translate sample coordinates**.
- Next planned lesson after the generated frontier: **Lesson 9.9 — Scale around the center**.
- Lessons 8.2 through 9.7 are learner-confirmed complete.
- Lesson 9.8 is generated and is not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation.

Reusable new-chat starter: `NEW_CHAT_PROMPT.md`. Paste it, then name generate or questions in the same message. Progress in this file wins. When the checkpoint or frontier moves, refresh section 12 of that prompt.

## Current lesson files

```text
course/chapters/chapter-09/lesson-09-01-distance-between-two-points.html
course/chapters/chapter-09/lesson-09-02-circle-signed-distance-field.html
course/chapters/chapter-09/lesson-09-03-turn-distance-into-a-soft-mask.html
course/chapters/chapter-09/lesson-09-04-rounded-rectangle-distance-field.html
course/chapters/chapter-09/lesson-09-05-capsule-distance-field.html
course/chapters/chapter-09/lesson-09-06-combine-shapes.html
course/chapters/chapter-09/lesson-09-07-sample-an-input-shader.html
course/chapters/chapter-09/lesson-09-08-translate-sample-coordinates.html
course/chapters/chapter-09/lesson-distance-fields-image-sampling-and-refraction.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/DistanceBetweenPointsExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/CircleSdfExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/SoftMaskExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/RoundedRectSdfExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/CapsuleSdfExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/CombineShapesExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/SampleInputShaderExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/TranslateSampleExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/Chapter09Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

## Last session compact record (2026-09-09)

Learner confirmed Lesson 9.7 complete. Count is **93 of 216**. Unresolved checkpoint is **Lesson 9.8**. Generated frontier remains **Lesson 9.8**.

## Prior session compact record (2026-09-08)

Learner confirmed Lessons 9.5 and 9.6 complete. Count is **92 of 216**. Unresolved checkpoint is **Lesson 9.7**. Generated frontier remains **Lesson 9.8**.

9.6 formula presentation was rewritten before this confirmation: every teaching surface uses `sdA = length(p) − radiusA = 0.10 − 0.25 = −0.15`. Reusable rule recorded in `AGENTS.md` as **Named-formula-before-substitution**.

## Prior session compact record (2026-09-02)

Learner confirmed Lesson 9.4 complete. Lesson 9.5 remains the unresolved checkpoint. Lessons 9.6, 9.7, and 9.8 were generated ahead of that checkpoint.

9.6 uses two Lesson 9.2 circles so it does not consume the unfinished capsule. Combining is `min` / `max` / `max(sdB, −sdA)` of two complete signed-distance numbers at one pixel.

9.7 introduces `uniform shader` and `eval`. 9.8 subtracts a width-fraction offset from the read coordinate. Geometry masks are unused in 9.7 and 9.8.

Reusable rule recorded in `AGENTS.md` as **First-section labelled geometry and teaching-pixel provenance**. Compressing later sections must not strip opening pictures. `C` and a construction-circle center are different points. Half-size is dimension-lined to full size. A teaching pixel needs a 3-4-5 provenance picture. A stepper’s left pane must change drawn objects every step.

Reusable teaching pattern recorded in `AGENTS.md` as **Load-bearing section budget**. First sections carry the lesson. Merge known-info visualization into the intro. Keep the essence section. Skip multi-pixel comparison tables that restate the lab. Keep a stepper only when the new operation is sequential. Replace **Not claimed** with **What’s next**. Cut negate-references, meta-lab sentences, and 8.9 slot-write recaps.

9.2 completed contract: `sd = length(p) − radius`. Negative inside, zero on the boundary, positive outside. Default radius `0.25`. Teaching pixel `sd = +0.25` (outside). Center `sd = −0.25` (inside). Production is `if (sd < 0.0) orange else navy`. `smoothstep` unused.

9.3 completed contract: `mask = 1.0 − smoothstep(−band, band, sd)`, then `mix(navy, orange, mask)`. Default `band = 0.10`. Teaching band pixel `p = (0.18, −0.24)`, `d = 0.30`, `sd = +0.05`. linearFraction `0.75`. curvedFraction `0.84375`. mask `0.15625`. stored red `0.221875`. Far 9.1/9.2 pixel stays navy. Center mask `1`. Boundary mask `0.50`. `edge1 > edge0` required.

9.4 completed contract: grow an inner sharp box by the corner radius. `innerHalf = outerHalf − cornerRadius`. `q = abs(p) − innerHalf`. Piecewise `sdBox`, then `sd = sdBox − cornerRadius`. Default outer half `(0.30, 0.20)` means full size `0.60 × 0.40`. Corner radius `0.10`. Teaching pixel `p = (0.26, −0.18)` is the top-right inner corner plus a 3-4-5 unit direction scaled by `0.10`; `sd = 0`. Visual center `C` is not a construction-circle center. Production is the hard `if` on this `sd`.

9.5 completed contract: grow an inner horizontal segment. `nearestX = clamp(p.x, −innerHalfW, innerHalfW)`. `sd = length(p − (nearestX, 0)) − radius`. Default outer half `(0.40, 0.20)`, radius `0.20` equal to half-height. Teaching cap-boundary `p = (0.32, −0.16)` has `sd = 0`. Width slider; radius stays derived from height.

9.6 completed contract: two complete circle fields. `sdA = length(p) − radiusA`. `pB = p − B`. `sdB = length(pB) − radiusB`. Union `sd = min(sdA, sdB)`. Intersection `sd = max(sdA, sdB)`. B minus A `sd = max(sdB, −sdA)`. Teaching left-only pixel `p = (−0.10, 0)` has `sdA = length(p) − radiusA = 0.10 − 0.25 = −0.15` and `sdB = length(pB) − radiusB = 0.30 − 0.25 = +0.05`. Production is the hard `if` on the combined `sd`. Every teaching calculation keeps the named formula visible, then substitutes numbers.

9.7 completed contract: `uniform shader background`, then `sampled = background.eval(fragCoord)`. Left half stores that sampled `half4`. Right half stores teaching orange. Stripe input: `fract((fragCoord.x / resolution.x) * 5.0)`; `cell < 0.5` orange else navy. Teaching `uv.x = 0.15` is navy. Kotlin binds the input with `setInputShader`.

9.8 checkpoint contract: `readCoord = fragCoord − float2(offsetU * resolution.x, 0)`. `sampled = background.eval(readCoord)`. Default `offsetU = 0.10` (one stripe width). Teaching write `uv.x = 0.15` reads `uv.x = 0.05` and stores orange. The picture shifts opposite the read offset.

## Unresolved checkpoint — Lesson 9.8

Do not mark 9.8 complete until the learner confirms.

Course progress: 93 of 216 lessons completed.
