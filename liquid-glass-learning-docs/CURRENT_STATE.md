# Liquid Glass Android course — current state

**Updated:** 2026-08-26  
**Course version:** 8.1.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **73 of 216 lessons**.
- Completed through: **Lesson 7.11 — Compose the layers**.
- Completed chapters: **1, 2, 3, 4, 5, and 6**.
- Chapter 7: in progress; **11 of 12 lessons complete**.
- Chapter 8: **0 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.12 — Compare backgrounds**.
- Generated frontier: **Lesson 8.1 — What a shader does**.
- Next planned lesson after the generated frontier: **Lesson 8.2 — Create a RuntimeShader**.
- Lessons 7.10 and 7.11 are learner-confirmed complete.
- Lesson 7.12 is generated ahead and is not learner-confirmed complete.
- Lesson 8.1 is generated ahead and is not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation. Do not mark 7.12 complete because 8.1 exists.

Reusable new-chat starter: `NEW_CHAT_PROMPT.md`. Paste it, then name generate or questions in the same message. Progress in this file wins. When the checkpoint or frontier moves, refresh section 12 of that prompt.

## Current lesson files

```text
course/chapters/chapter-07/lesson-07-12-compare-backgrounds.html
course/chapters/chapter-08/lesson-08-01-what-a-shader-does.html
course/chapters/chapter-08/lesson-your-first-agsl-shader.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/ShaderIdeaExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/Chapter08Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

## Last session compact record (2026-08-26)

Generated Lesson **8.1** ahead of unconfirmed **7.12**. A pixel function is `colorAt(column, row)`. The same body runs once per output pixel. The 8×4 grid is a CPU teaching loop, not `RuntimeShader`. Paint always stores orange. Stripe uses column remainder 2. A shader is this idea when the GPU runs it. `MainActivity` defaults to Chapter 7 because 7.12 is still the checkpoint.

## Unresolved checkpoint — Lesson 7.12

Do not mark 7.12 complete until the learner confirms.

Course progress: 73 of 216 lessons completed.
