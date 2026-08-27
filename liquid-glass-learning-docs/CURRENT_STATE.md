# Liquid Glass Android course — current state

**Updated:** 2026-08-27  
**Course version:** 8.10.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **82 of 216 lessons**.
- Completed through: **Lesson 8.8 — Vector arithmetic**.
- Completed chapters: **1, 2, 3, 4, 5, 6, and 7**.
- Chapter 7: **12 of 12 lessons complete**.
- Chapter 8: **8 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 8.9 — Uniforms**.
- Generated frontier: **Lesson 8.10 — Time uniform**.
- Next planned lesson after the generated frontier: **Lesson 8.11 — clamp, mix, and smoothstep**.
- Lessons 8.2 through 8.8 are learner-confirmed complete.
- Lessons 8.9 and 8.10 are generated ahead and are not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation. Do not mark 8.9 complete because 8.10 exists.

Reusable new-chat starter: `NEW_CHAT_PROMPT.md`. Paste it, then name generate or questions in the same message. Progress in this file wins. When the checkpoint or frontier moves, refresh section 12 of that prompt.

## Current lesson files

```text
course/chapters/chapter-08/lesson-08-08-vector-arithmetic.html
course/chapters/chapter-08/lesson-08-09-uniforms.html
course/chapters/chapter-08/lesson-08-10-time-uniform.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/VectorArithmeticExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/UniformsExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/TimeUniformExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/Chapter08Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

## Last session compact record (2026-08-27)

Learner asked to generate Lesson 8.10 without marking 8.9 complete. Completion stays 82 of 216 through **8.8**. Checkpoint stays **8.9**. Frontier advances to **8.10**.

8.10 contract: elapsed seconds from `withFrameNanos` are divided by `SecondsPerTrip = 4` to make a trip count; `setFloatUniform("time", trips)` writes that count; `stripe = fract(uv.x - time)` is stored as red. `RuntimeShader` is not rebuilt. mix / smoothstep / sine are unused.

## Unresolved checkpoint — Lesson 8.9

Do not mark 8.9 complete until the learner confirms.

Course progress: 82 of 216 lessons completed.
