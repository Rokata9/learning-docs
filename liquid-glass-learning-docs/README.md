# Liquid Glass on Android — Learning Documents

This repository contains the interactive course documents. The Android Studio project is intentionally separate.

## Start here

Open `liquid-glass-course.html` directly in a Chromium-based browser. No local server is required. Every lesson is self-contained and works from `file://`.

## Authoritative current state

- Total course size: **216 lessons**.
- Learner-confirmed complete: **57 of 216 lessons**.
- Completed through: **Lesson 6.6 — Record the background**.
- Completed chapters: **1 through 5**.
- Chapter 6: **6 of 11 lessons complete**.
- Current unresolved checkpoint: **Lesson 6.7 — Crop the correct region**.
- Generated frontier: **Lesson 6.7**.
- Lesson 6.7 is generated and is not learner-confirmed complete.
- Next planned lesson after review: **Lesson 6.8 — Keep the sample current**.

`CURRENT_STATE.md` is authoritative when an older historical note disagrees.

## Current learning path

Open the Chapter 6 hub:

```text
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
```

Open the current lesson:

```text
course/chapters/chapter-06/lesson-06-07-crop-the-correct-region.html
```

Lesson 6.7 starts from the completed full-background recording route. It converts `GlassPanel` bounds into the recorded backdrop owner's local coordinate space, clips a panel-sized destination, and translates the full `backgroundLayer` by the negative source origin before replay.

The interactive lesson compares the correct route with two visible defects: using parent coordinates directly and omitting the replay translation. It deliberately keeps the selected region sharp so coordinate correctness can be judged before blur is introduced.

The lesson does not yet define how to keep the recorded image and measured rectangle current during scrolling or animation, prevent feedback, perform CPU pixel readback, or make a production cost decision.

## Matching Android files

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/CropCorrectRegionExplorer.kt
```

The complete chapter-screen previews live in `Chapter06Screen.kt`. The direct custom-composable previews live in `CropCorrectRegionExplorer.kt`. Both preview levels are vertically scrollable in finite-height Android Studio Preview.

## Theme rule

Standalone lesson HTML follows the operating-system light or dark preference automatically. Android screens use the project theme and `MaterialTheme.colorScheme` for interface chrome. Exact instructional color values remain fixed where the lesson traces a specific color.

## Incremental delivery rule

Each lesson archive contains only files created or modified for that lesson. Paths are preserved beneath `liquid-glass-learning-docs/` or `LiquidGlassLab/`. A lesson with no Android source change has no empty Android ZIP.

## Naming rule

Course home: `liquid-glass-course.html`  
Chapter hub: `lesson-[chapter-name].html`  
Sub-lesson: `lesson-[chapter-number]-[lesson-number]-[lesson-name].html`

Generic chapter `index.html` files are not used.

Course progress: 57 of 216 lessons completed.
