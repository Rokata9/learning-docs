# Liquid Glass Android course — current state

**Updated:** 2026-08-13  
**Course version:** 6.2.2  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  

## Authoritative progress

- Learner-confirmed complete: **53 of 216 lessons**.
- Completed through: **Lesson 6.2 — Draw order and ownership**.
- Completed chapters: **1, 2, 3, 4, and 5**.
- Chapter 6: in progress; **2 of 11 lessons complete**.
- Current unresolved checkpoint: **Lesson 6.3 — Graphics layers** (not generated yet).
- Generated frontier: **Lesson 6.2**.
- Next planned: **Lesson 6.3 — Graphics layers**.

## Current lesson files

```text
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
course/chapters/chapter-06/lesson-06-01-composition-layout-and-drawing.html
course/chapters/chapter-06/lesson-06-02-draw-order-and-ownership.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/DrawOrderOwnershipExplorer.kt
```

## Latest completion

- Lesson 6.2 is learner-confirmed complete.
- Its clarification distinguishes final draw stacking from an explicit recorded-backdrop data route.
- The sibling-order buttons and walkthrough diagram share one canonical order state.

## Android preview rules

- Complete chapter-screen previews live in `ChapterXXScreen.kt`.
- Direct custom-composable previews live in the custom composable's own Kotlin file.
- For every future lesson, both preview levels must allow vertical scrolling through the complete generated content inside Android Studio Preview.
- Do not modify previous lessons solely to retrofit this behavior unless explicitly requested.

Course progress: 53 of 216 lessons completed.
