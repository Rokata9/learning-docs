# Liquid Glass Android course — current state

**Updated:** 2026-08-26  
**Course version:** 8.5.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **77 of 216 lessons**.
- Completed through: **Lesson 8.3 — Return one fixed color**.
- Completed chapters: **1, 2, 3, 4, 5, 6, and 7**.
- Chapter 7: **12 of 12 lessons complete**.
- Chapter 8: **3 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 8.4 — fragCoord**.
- Generated frontier: **Lesson 8.5 — Resolution**.
- Next planned lesson after the generated frontier: **Lesson 8.6 — UV coordinates**.
- Lessons 8.2 and 8.3 are learner-confirmed complete.
- Lesson 8.4 is generated ahead and is not learner-confirmed complete.
- Lesson 8.5 is generated ahead and is not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation. Do not mark 8.4 complete because 8.5 exists.

Reusable new-chat starter: `NEW_CHAT_PROMPT.md`. Paste it, then name generate or questions in the same message. Progress in this file wins. When the checkpoint or frontier moves, refresh section 12 of that prompt.

## Current lesson files

```text
course/chapters/chapter-08/lesson-08-04-fragcoord.html
course/chapters/chapter-08/lesson-08-05-resolution.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/FragCoordExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/ResolutionShaderExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/Chapter08Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

## Last session compact record (2026-08-26)

Learner confirmed 8.2 and 8.3 complete. Generated Lessons **8.4** and **8.5** ahead of unconfirmed **8.4**. 8.4 is the read: `fragCoord` is the current pixel position; `if (fragCoord.x < 80.0)` stores orange or navy. 80 is a pixel count, not half. y is unread. 8.5 is the missing size: Kotlin writes `uniform float2 resolution` with `setFloatUniform`; `splitX = resolution.x / 2.0`. UV and other uniforms stay deferred. `MainActivity` defaults to Chapter 8.

## Unresolved checkpoint — Lesson 8.4

Do not mark 8.4 complete until the learner confirms.

Course progress: 77 of 216 lessons completed.
