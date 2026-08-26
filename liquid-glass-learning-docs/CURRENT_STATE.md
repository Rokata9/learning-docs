# Liquid Glass Android course — current state

**Updated:** 2026-08-26  
**Course version:** 8.3.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **75 of 216 lessons**.
- Completed through: **Lesson 8.1 — What a shader does**.
- Completed chapters: **1, 2, 3, 4, 5, 6, and 7**.
- Chapter 7: **12 of 12 lessons complete**.
- Chapter 8: **1 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 8.2 — Create a RuntimeShader**.
- Generated frontier: **Lesson 8.3 — Return one fixed color**.
- Next planned lesson after the generated frontier: **Lesson 8.4 — fragCoord**.
- Lessons 7.12 and 8.1 are learner-confirmed complete.
- Lesson 8.2 is generated ahead and is not learner-confirmed complete.
- Lesson 8.3 is generated ahead and is not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation. Do not mark 8.2 complete because 8.3 exists.

Reusable new-chat starter: `NEW_CHAT_PROMPT.md`. Paste it, then name generate or questions in the same message. Progress in this file wins. When the checkpoint or frontier moves, refresh section 12 of that prompt.

## Current lesson files

```text
course/chapters/chapter-08/lesson-08-02-create-a-runtime-shader.html
course/chapters/chapter-08/lesson-08-03-return-one-fixed-color.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/RuntimeShaderExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/FixedColorShaderExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter08/Chapter08Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

## Last session compact record (2026-08-26)

Learner confirmed 7.12 and 8.1 complete. Generated Lessons **8.2** and **8.3** ahead of unconfirmed **8.2**. 8.2 is the handoff: AGSL string → `RuntimeShader` compile → `ShaderBrush` → `drawRect`. 8.3 is the store: `return half4` in 0..1, teaching orange from 224/255, navy rewrite as proof, unused Kotlin `Color` as the trap. `fragCoord` is unread. Uniforms are not used. `MainActivity` defaults to Chapter 8.

## Unresolved checkpoint — Lesson 8.2

Do not mark 8.2 complete until the learner confirms.

Course progress: 75 of 216 lessons completed.
