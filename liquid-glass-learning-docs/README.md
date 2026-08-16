# Liquid Glass on Android — Learning Documents

This repository contains the interactive course documents. The Android Studio project is intentionally separate.

## Start here

Open `liquid-glass-course.html` directly in a Chromium-based browser. No local server is required. Every lesson is self-contained and works from `file://`.

## Authoritative current state

- Total course size: **216 lessons**.
- Learner-confirmed complete: **58 of 216 lessons**.
- Completed through: **Lesson 6.7 — Crop the correct region**.
- Completed chapters: **1 through 5**.
- Chapter 6: **7 of 11 lessons complete**.
- Current unresolved checkpoint: **Lesson 6.8 — Keep the sample current**.
- Generated frontier: **Lesson 6.8**.
- Lesson 6.8 is generated and is not learner-confirmed complete.
- Next planned lesson after review: **Lesson 6.9 — Avoid feedback loops**.

`CURRENT_STATE.md` is authoritative when an older historical note disagrees.

## Current learning path

Open the Chapter 6 hub:

```text
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
```

Open the current lesson:

```text
course/chapters/chapter-06/lesson-06-08-keep-the-sample-current.html
```

Lesson 6.8 starts from the completed record → map → clip → translate → replay route. It separates sample freshness into two independent channels: selected layer content and mapped panel bounds. Replaying the layer content produces the panel's backdrop pixels.

The interactive lesson can freeze either channel while the live scene continues changing. A moving red marker makes stale layer content visible; panel motion makes stale bounds visible. A complete numeric trace expresses every marker and crop value in its coordinate space and proves how the two errors combine.

The Android explorer records a live `GraphicsLayer`, retains a second captured layer only as diagnostic evidence, measures current and captured crop rectangles, and lets the learner compare all four current/stale combinations. The lesson deliberately keeps the region sharp and defers feedback prevention, blur, and cost.

## Matching Android files

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/KeepSampleCurrentExplorer.kt
```

The complete chapter-screen previews live in `Chapter06Screen.kt`. The direct custom-composable previews live in `KeepSampleCurrentExplorer.kt`. Both preview levels are vertically scrollable in finite-height Android Studio Preview.

## Theme rule

Standalone lesson HTML follows the operating-system light or dark preference automatically. Android screens use the project theme and `MaterialTheme.colorScheme` for interface chrome. Exact instructional color values remain fixed where the lesson traces a specific color.

## Incremental delivery rule

Each lesson archive contains only files created or modified for that lesson. Paths are preserved beneath `liquid-glass-learning-docs/` or `LiquidGlassLab/`. A lesson with no Android source change has no empty Android ZIP.

## Naming rule

Course home: `liquid-glass-course.html`  
Chapter hub: `lesson-[chapter-name].html`  
Sub-lesson: `lesson-[chapter-number]-[lesson-number]-[lesson-name].html`

Generic chapter `index.html` files are not used.

Course progress: 58 of 216 lessons completed.
