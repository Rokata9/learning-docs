# Liquid Glass on Android — Learning Documents

This repository contains the interactive course documents. The Android Studio project is intentionally separate.

## Start here

Open `liquid-glass-course.html` directly in a Chromium-based browser. No local server is required. Every lesson is self-contained and works from `file://`.

## Authoritative current state

- Total course size: **216 lessons**.
- Learner-confirmed complete: **59 of 216 lessons**.
- Completed through: **Lesson 6.8 — Keep the sample current**.
- Completed chapters: **1 through 5**.
- Chapter 6: **8 of 11 lessons complete**.
- Current unresolved checkpoint: **Lesson 6.9 — Avoid feedback loops**.
- Generated frontier: **Lesson 6.9**.
- Lesson 6.9 is generated and is not learner-confirmed complete.
- Next planned lesson after review: **Lesson 6.10 — Offscreen cost**.

`CURRENT_STATE.md` is authoritative when an older historical note disagrees.

## Current learning path

Open the Chapter 6 hub:

```text
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
```

Open the current lesson:

```text
course/chapters/chapter-06/lesson-06-09-avoid-feedback-loops.html
```

Lesson 6.9 starts from the completed record → map → clip → translate → replay route. It makes the recording source smaller than the complete scene: `BackdropHost` owns only `BackdropArtwork`, while `GlassPanel` remains a later sibling that consumes `backgroundLayer`.

The main route is deliberately linear:

```text
BackdropHost
→ backgroundLayer
→ GlassPanel
→ ParentScene
```

A compact warning diagram shows the forbidden return edge, but error cases do not drive the Android implementation. The explorer uses one layer, one current crop, and one movable panel. Every non-obvious scene dimension and drawing coordinate is named and explained in comments.

## Matching Android files

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/AvoidFeedbackLoopsExplorer.kt
```

The complete chapter-screen previews live in `Chapter06Screen.kt`. The direct custom-composable previews live in `AvoidFeedbackLoopsExplorer.kt`. Both preview levels are vertically scrollable in finite-height Android Studio Preview.

## Main-path-first teaching rule

The production route is the default teaching and implementation path. Diagnostic defects are secondary and should not introduce duplicate layers, extra mode enums, or branching code unless that machinery is essential to the lesson's main concept.

## Theme rule

Standalone lesson HTML follows the operating-system light or dark preference automatically. Android screens use the project theme and `MaterialTheme.colorScheme` for interface chrome. Exact instructional color values remain fixed where the lesson traces a specific color.

## Incremental delivery rule

Each lesson archive contains only files created or modified for that lesson. Paths are preserved beneath `liquid-glass-learning-docs/` or `LiquidGlassLab/`. A lesson with no Android source change has no empty Android ZIP.

## Naming rule

Course home: `liquid-glass-course.html`  
Chapter hub: `lesson-[chapter-name].html`  
Sub-lesson: `lesson-[chapter-number]-[lesson-number]-[lesson-name].html`

Generic chapter `index.html` files are not used.

Course progress: 59 of 216 lessons completed.
