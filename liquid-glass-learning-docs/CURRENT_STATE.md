# Liquid Glass Android course — current state

**Updated:** 2026-08-27  
**Course version:** 8.9.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **78 of 216 lessons**.
- Completed through: **Lesson 8.4 — fragCoord**.
- Completed chapters: **1, 2, 3, 4, 5, 6, and 7**.
- Chapter 7: **12 of 12 lessons complete**.
- Chapter 8: **4 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 8.5 — Resolution**.
- Generated frontier: **Lesson 8.9 — Uniforms**.
- Next planned lesson after the generated frontier: **Lesson 8.10 — Time uniform**.
- Lessons 8.2, 8.3, and 8.4 are learner-confirmed complete.
- Lessons 8.5 through 8.9 are generated ahead and are not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation. Do not mark 8.5 complete because later lessons exist.

Reusable new-chat starter: `NEW_CHAT_PROMPT.md`. Paste it, then name generate or questions in the same message. Progress in this file wins. When the checkpoint or frontier moves, refresh section 12 of that prompt.

## Current lesson files

```text
course/chapters/chapter-08/lesson-08-04-fragcoord.html
course/chapters/chapter-08/lesson-08-05-resolution.html
course/chapters/chapter-08/lesson-08-06-uv-coordinates.html
course/chapters/chapter-08/lesson-08-07-scalars-and-vectors.html
course/chapters/chapter-08/lesson-08-08-vector-arithmetic.html
course/chapters/chapter-08/lesson-08-09-uniforms.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/FragCoordExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/ResolutionShaderExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/UvShaderExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/ScalarVectorExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/VectorArithmeticExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/UniformsExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/Chapter08Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

## Last session compact record (2026-08-27)

Learner confirmed **8.4** complete. Completion is 78 of 216. Checkpoint is **8.5**. Frontier stays **8.9**. Lessons 8.5 through 8.9 remain generated ahead.

8.4 contract: `fragCoord` is this pixel’s position; `if (fragCoord.x < 80.0)` stores orange or navy. 80 is a pixel count, not half. y is unread. Origin is the top-left of the draw rectangle. y increases downward with Canvas.

`MainActivity` defaults to Chapter 8.

## Unresolved checkpoint — Lesson 8.5

Do not mark 8.5 complete until the learner confirms.

Course progress: 78 of 216 lessons completed.
