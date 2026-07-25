# Liquid Glass on Android — Learning Documents

This repository contains the interactive course documents. The Android Studio project is intentionally separate.

## Start here

Open `liquid-glass-course.html` directly in a Chromium-based browser. No local server is required. Every lesson is self-contained and works from `file://`.

## Current course state

- Chapter 1 is complete.
- Chapter 2 is complete.
- **18 of 216 lessons are complete.**
- Lesson 3.1 is complete.
- Lesson 3.2 is generated and is the next learner checkpoint.
- The generated frontier is Lesson 3.2.

Open:

```text
course/chapters/chapter-03/lesson-03-02-alpha.html
```

## Android progression

- Chapter 1 built and diagnosed the first translucent panel.
- Chapter 2 built the coordinate vocabulary and the final coordinate inspector.
- Lesson 3.1 switched the app entry point to `Chapter03Screen` and added `RgbChannelsExplorer.kt`.
- Lesson 3.2 keeps `RGB(0.80, 0.25, 0.60)` fixed and adds `AlphaExplorer.kt`.
- The explorer varies alpha from `0.00` through `1.00` and compares the same source over a checkerboard, dark navy, and pale yellow.
- `Chapter03Screen.kt` now opens Lesson 3.2.

## Theme rule from Lesson 3.1 onward

New lesson HTML follows the operating-system light or dark preference automatically. Android screens use the project theme and `MaterialTheme.colorScheme` for interface chrome. Instructional color values remain exact across themes.

## Incremental delivery rule

Each lesson archive contains only files created or modified for that lesson. Paths are preserved beneath `liquid-glass-learning-docs/` or `LiquidGlassLab/`. A lesson with no Android source change has no empty Android ZIP.

## Naming rule

Course home: `liquid-glass-course.html`  
Chapter hub: `lesson-[chapter-name].html`  
Sub-lesson: `lesson-[chapter-number]-[lesson-number]-[lesson-name].html`

Generic chapter `index.html` files are not used.
