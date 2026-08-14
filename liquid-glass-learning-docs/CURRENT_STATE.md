# Liquid Glass Android course — current state

**Updated:** 2026-08-14  
**Course version:** 6.5.2  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro

## Authoritative progress

- Learner-confirmed complete: **56 of 216 lessons**.
- Completed through: **Lesson 6.5 — The backdrop problem**.
- Completed chapters: **1, 2, 3, 4, and 5**.
- Chapter 6: in progress; **5 of 11 lessons complete**.
- Current unresolved checkpoint: **Lesson 6.6 — Record the background**.
- Generated frontier: **Lesson 6.5**. Lesson 6.6 has not been generated.
- Next planned lesson: **Lesson 6.6 — Record the background**.

## Current lesson files

```text
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
course/chapters/chapter-06/lesson-06-04-render-effect-owned-content.html
course/chapters/chapter-06/lesson-06-05-backdrop-problem.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/BackdropProblemExplorer.kt
```

## Latest status update

- Lesson 6.5 is learner-confirmed complete.
- The next unresolved checkpoint is Lesson 6.6.
- Lesson 6.6 has not been generated.
- `NEW_CHAT_PROMPT.md` is updated for fresh-account continuation.

## Completed Lesson 6.5 contract

```text
BackdropSibling
→ sharp parent destination pixels

GlassPanel
→ panel-owned pixels
→ optional panel-owned RenderEffect
→ panel effect output
→ source-over parent
```

The final visual overlap is not a readable backdrop input.

```text
same-position source-over
≠
neighborhood sampling
```

A real backdrop blur additionally needs:

```text
recorded or otherwise readable backdrop image
+ panel bounds mapped into backdrop coordinates
→ matching backdrop region
```

Lesson 6.6 creates the explicit recording route.

## Android preview rules

- Complete chapter-screen previews live in `ChapterXXScreen.kt`.
- Direct custom-composable previews live in the custom composable's own Kotlin file.
- Both preview levels must allow vertical scrolling through the complete generated content in Android Studio Preview.

Course progress: 56 of 216 lessons completed.
