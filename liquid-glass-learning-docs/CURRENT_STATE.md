# Liquid Glass Android course — current state

**Updated:** 2026-08-31  
**Course version:** 9.5.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **89 of 216 lessons**.
- Completed through: **Lesson 9.3 — Turn distance into a soft mask**.
- Completed chapters: **1, 2, 3, 4, 5, 6, 7, and 8**.
- Chapter 8: **12 of 12 lessons complete**.
- Chapter 9: **3 of 14 lessons complete**.
- Current unresolved checkpoint: **Lesson 9.4 — Rounded rectangle distance field**.
- Generated frontier: **Lesson 9.5 — Capsule distance field**.
- Next planned lesson after the generated frontier: **Lesson 9.6 — Combine shapes**.
- Lessons 8.2 through 9.3 are learner-confirmed complete.
- Lessons 9.4 and 9.5 are generated ahead and are not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation. Do not mark 9.4 complete because 9.5 exists.

Reusable new-chat starter: `NEW_CHAT_PROMPT.md`. Paste it, then name generate or questions in the same message. Progress in this file wins. When the checkpoint or frontier moves, refresh section 12 of that prompt.

## Current lesson files

```text
course/chapters/chapter-09/lesson-09-01-distance-between-two-points.html
course/chapters/chapter-09/lesson-09-02-circle-signed-distance-field.html
course/chapters/chapter-09/lesson-09-03-turn-distance-into-a-soft-mask.html
course/chapters/chapter-09/lesson-09-04-rounded-rectangle-distance-field.html
course/chapters/chapter-09/lesson-09-05-capsule-distance-field.html
course/chapters/chapter-09/lesson-distance-fields-image-sampling-and-refraction.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/DistanceBetweenPointsExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/CircleSdfExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/SoftMaskExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/RoundedRectSdfExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/CapsuleSdfExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/Chapter09Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

## Last session compact record (2026-08-31)

Learner stopped in the first sections of generated-ahead Lesson 9.4: leftover cards, undefined names (construction-circle center, zero contour, outer right flat x), missing pictures, unexplained teaching pixel `(0.26, −0.18)` and `(0.6, 0.8)`, static stepper, and half-size mistaken for full size `0.60 × 0.30`. HTML was rewritten visual-first. Android explorer math was not changed. 9.4 is still not complete.

Reusable rule recorded in `AGENTS.md` as **First-section labelled geometry and teaching-pixel provenance**. Compressing later sections must not strip opening pictures. `C` and a construction-circle center are different points. Half-size is dimension-lined to full size. A teaching pixel needs a 3-4-5 provenance picture. A stepper’s left pane must change drawn objects every step.

Reusable teaching pattern recorded in `AGENTS.md` as **Load-bearing section budget**. First sections carry the lesson. Merge known-info visualization into the intro. Keep the essence section. Skip multi-pixel comparison tables that restate the lab. Keep a stepper only when the new operation is sequential. Replace **Not claimed** with **What’s next**. Cut negate-references, meta-lab sentences, and 8.9 slot-write recaps.

9.2 completed contract: `sd = length(p) − radius`. Negative inside, zero on the boundary, positive outside. Default radius `0.25`. Teaching pixel `sd = +0.25` (outside). Center `sd = −0.25` (inside). Production is `if (sd < 0.0) orange else navy`. `smoothstep` unused.

9.3 completed contract: `mask = 1.0 − smoothstep(−band, band, sd)`, then `mix(navy, orange, mask)`. Default `band = 0.10`. Teaching band pixel `p = (0.18, −0.24)`, `d = 0.30`, `sd = +0.05`. linearFraction `0.75`. curvedFraction `0.84375`. mask `0.15625`. stored red `0.221875`. Far 9.1/9.2 pixel stays navy. Center mask `1`. Boundary mask `0.50`. `edge1 > edge0` required.

9.4 contract (generated ahead, not complete): grow an inner sharp box by the corner radius. `innerHalf = outerHalf − cornerRadius`. `q = abs(p) − innerHalf`. Piecewise `sdBox`, then `sd = sdBox − cornerRadius`. Default outer half `(0.30, 0.20)`, corner radius `0.10`. Corner-boundary `p = (0.26, −0.18)` has `sd = 0`. Production is the hard `if` on this `sd`.

9.5 contract (generated ahead): grow an inner horizontal segment. `nearestX = clamp(p.x, −innerHalfW, innerHalfW)`. `sd = length(p − (nearestX, 0)) − radius`. Default outer half `(0.40, 0.20)`, radius `0.20` equal to half-height. Teaching cap-boundary `p = (0.32, −0.16)` has `sd = 0`. Combining two complete fields is Lesson 9.6.

## Unresolved checkpoint — Lesson 9.4

Do not mark 9.4 complete until the learner confirms.

Course progress: 89 of 216 lessons completed.
