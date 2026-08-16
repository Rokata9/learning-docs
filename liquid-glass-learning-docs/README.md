# Liquid Glass on Android — Learning Documents

This repository contains the interactive course documents. The Android Studio project is intentionally separate.

## Start here

Open `liquid-glass-course.html` directly in a Chromium-based browser. No local server is required. Every lesson is self-contained and works from `file://`.

## Authoritative current state

- Total course size: **216 lessons**.
- Learner-confirmed complete: **61 of 216 lessons**.
- Completed through: **Lesson 6.10 — Offscreen cost**.
- Completed chapters: **1 through 5**.
- Chapter 6: **10 of 11 lessons complete**.
- Current unresolved checkpoint: **Lesson 6.11 — Build a two-layer scene architecture**.
- Generated frontier: **Lesson 6.11**.
- Lesson 6.11 is generated and is not learner-confirmed complete.
- Next planned lesson after review: **Lesson 7.1 — Blur as neighborhood averaging**.

`CURRENT_STATE.md` is authoritative when an older historical note disagrees.

## Current learning path

Open the Chapter 6 hub:

```text
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
```

Open the current lesson:

```text
course/chapters/chapter-06/lesson-06-11-two-layer-scene-architecture.html
```

Lesson 6.11 turns the completed backdrop-sampling work into one explicit architecture:

```text
BackdropArtwork
→ backgroundLayer
→ panelSampleLayer
→ tint and border
→ ForegroundContent
→ ParentScene
```

The scene owns two controlled `GraphicsLayer` objects. `ForegroundContent` is ordinary Compose content drawn later, so it remains outside the sample layer that Chapter 7 will eventually blur.

## Matching Android files

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/OffscreenCostExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/TwoLayerSceneArchitectureExplorer.kt
```

The complete chapter-screen previews live in `Chapter06Screen.kt`. Direct custom-composable previews live in each explorer’s own file. Both Preview levels are vertically scrollable in a finite-height Android Studio Preview.

## Command recording versus pixel targets

A `GraphicsLayer` may retain replayable drawing commands without proving that Android allocated a same-sized offscreen texture. Lesson 6.10 explicitly forces one panel-sized target only to make target extent concrete. That estimate does not include full-backdrop command recording, normal backdrop drawing, replay traversal, bandwidth, or measured frame time.

## Main-path-first teaching rule

The production route is the default teaching and implementation path. Diagnostic defects are secondary and should not introduce duplicate layers, extra mode enums, or branching code unless that machinery is essential to the lesson's main concept.

## Theme rule

Standalone lesson HTML follows the operating-system light or dark preference automatically. Android screens use the project theme and `MaterialTheme.colorScheme` for interface chrome. Exact instructional color values remain fixed where the lesson traces a specific color.
