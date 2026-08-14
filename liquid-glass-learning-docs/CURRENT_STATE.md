# Liquid Glass Android course — current state

**Updated:** 2026-08-14  
**Course version:** 6.4.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro

## Authoritative progress

- Learner-confirmed complete: **54 of 216 lessons**.
- Completed through: **Lesson 6.3 — Graphics layers**.
- Completed chapters: **1, 2, 3, 4, and 5**.
- Chapter 6: in progress; **3 of 11 lessons complete**.
- Current unresolved checkpoint: **Lesson 6.4 — RenderEffect on owned content**.
- Generated frontier: **Lesson 6.4**.
- Next planned after explicit completion: **Lesson 6.5 — The backdrop problem**.

## Current lesson files

```text
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
course/chapters/chapter-06/lesson-06-03-graphics-layers.html
course/chapters/chapter-06/lesson-06-04-render-effect-owned-content.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/RenderEffectOwnedContentExplorer.kt
```

## Lesson 6.4 contract

```text
BackdropSibling
→ separately owned sharp scene content

OwnedCard
→ selected owner content
→ graphicsLayer.renderEffect
→ offscreen owner pixels
→ BlurEffect
→ blurred owner output
→ source-over parent scene
```

Boundary:

```text
RenderEffect input
= pixels rasterized from the selected owner

RenderEffect input
≠ automatic pixels from unrelated backdrop siblings
```

The browser compares whole-owner, dot-only, and no-effect attachment. The Android explorer converts a dp radius to runtime px and applies `BlurEffect` only to the selected owner.

## Android preview rules

- Complete chapter-screen previews live in `ChapterXXScreen.kt`.
- Direct custom-composable previews live in the custom composable's own Kotlin file.
- Both preview levels must allow vertical scrolling through the complete generated content in Android Studio Preview.

Course progress: 54 of 216 lessons completed.
