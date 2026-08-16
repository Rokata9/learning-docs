# Liquid Glass on Android — Learning Documents

This repository contains the interactive course documents. The Android Studio project is intentionally separate.

## Start here

Open `liquid-glass-course.html` directly in a Chromium-based browser. No local server is required. Every lesson is self-contained and works from `file://`.

## Authoritative current state

- Total course size: **216 lessons**.
- Learner-confirmed complete: **60 of 216 lessons**.
- Completed through: **Lesson 6.9 — Avoid feedback loops**.
- Completed chapters: **1 through 5**.
- Chapter 6: **9 of 11 lessons complete**.
- Current unresolved checkpoint: **Lesson 6.10 — Offscreen cost**.
- Generated frontier: **Lesson 6.10**.
- Lesson 6.10 is generated and is not learner-confirmed complete.
- Next planned lesson after review: **Lesson 6.11 — Build a two-layer scene architecture**.

`CURRENT_STATE.md` is authoritative when an older historical note disagrees.

## Current learning path

Open the Chapter 6 hub:

```text
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
```

Open the current lesson:

```text
course/chapters/chapter-06/lesson-06-10-offscreen-cost.html
```

Lesson 6.10 starts from the completed one-way backdrop ownership route and introduces one explicit panel-sized offscreen target:

```text
backgroundLayer
→ matching crop
→ panelSampleLayer
→ panel material
→ ParentScene
```

The Android implementation uses the same panel position value for layout and crop translation in the controlled scene. It therefore avoids a separately stored crop rectangle that can trail the latest panel position.

The browser lesson estimates target scale with a clearly limited four-byte RGBA teaching model. A full-scene target appears only as arithmetic and a diagram; the Android explorer does not allocate a deliberately wasteful comparison branch.

## Matching Android files

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/AvoidFeedbackLoopsExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/OffscreenCostExplorer.kt
```

The complete chapter-screen previews live in `Chapter06Screen.kt`. Direct custom-composable previews live in each explorer’s own file. Both Preview levels are vertically scrollable in a finite-height Android Studio Preview.

## Performance interpretation rule

A sampled image that trails panel position is first treated as a synchronization/state-flow defect. A whole frame that stutters or skips is treated as a performance symptom. Exact GPU cost requires profiling a release-like build on the physical device; target-size arithmetic alone is not a profiler.

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

Course progress: 60 of 216 lessons completed.
