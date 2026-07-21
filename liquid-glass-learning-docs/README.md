# Liquid Glass on Android — Learning Documents

This repository contains the interactive course documents. The Android Studio project is intentionally separate.

## Start here

Open `liquid-glass-course.html` directly in a Chromium-based browser. No local server is required. Every lesson is self-contained and works from `file://`.

## Current course state

- Chapter 1 is complete.
- Lessons 2.1, 2.2, and 2.3 are complete.
- **11 of 216 lessons are complete.**
- Lesson 2.4 is generated and is the next learner checkpoint.
- The generated frontier is Lesson 2.4.

Open:

```text
course/chapters/chapter-02/lesson-02-04-width-height-edges-and-center.html
```

## Android progression

- Lesson 2.1 introduced the enlarged 8×8 teaching grid.
- Lesson 2.2 kept row 3 fixed and moved the selected X coordinate through columns 0 through 7.
- Lesson 2.3 kept column 4 fixed and moved the selected Y coordinate through rows 0 through 7.
- Lesson 2.4 introduces rectangle bounds, width, height, and center.
- The Lesson 2.4 Android update adds `BoundsCenterExplorer.kt` and updates `Chapter02Screen.kt`.

## Incremental delivery rule

Each lesson archive contains only files created or modified for that lesson. Paths are preserved beneath `liquid-glass-learning-docs/` or `LiquidGlassLab/`. A lesson with no Android source change has no empty Android ZIP.

## Naming rule

Course home: `liquid-glass-course.html`  
Chapter hub: `lesson-[chapter-name].html`  
Sub-lesson: `lesson-[chapter-number]-[lesson-number]-[lesson-name].html`

Generic chapter `index.html` files are not used.
