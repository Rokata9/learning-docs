# Liquid Glass on Android — Learning Documents

This repository contains the interactive course documents. The Android Studio project is intentionally separate.

## Start here

Open `liquid-glass-course.html` directly in a Chromium-based browser. No local server is required. Every lesson is self-contained and works from `file://`.

## Current course state

- Chapter 1 is complete.
- Lessons 2.1 through 2.7 are complete.
- **15 of 216 lessons are complete.**
- Lesson 2.8 is generated and is the next learner checkpoint.
- The generated frontier is Lesson 2.8.

Open:

```text
course/chapters/chapter-02/lesson-02-08-normalized-coordinates.html
```

## Android progression

- Lesson 2.1 introduced the enlarged 8×8 teaching grid.
- Lesson 2.2 introduced the X axis.
- Lesson 2.3 introduced the Y axis.
- Lesson 2.4 introduced rectangle bounds, width, height, and center.
- Lesson 2.5 separated dp layout units from px drawing units.
- Lesson 2.6 introduced child-local coordinates.
- Lesson 2.7 compared parent-local, window-relative, and screen-relative coordinates.
- Lesson 2.8 converts local pixel positions into normalized values from 0 through 1 and converts them back for drawing.
- The Lesson 2.8 Android update adds `NormalizedCoordinatesExplorer.kt` and updates `Chapter02Screen.kt`.

## Incremental delivery rule

Each lesson archive contains only files created or modified for that lesson. Paths are preserved beneath `liquid-glass-learning-docs/` or `LiquidGlassLab/`. A lesson with no Android source change has no empty Android ZIP.

## Naming rule

Course home: `liquid-glass-course.html`  
Chapter hub: `lesson-[chapter-name].html`  
Sub-lesson: `lesson-[chapter-number]-[lesson-number]-[lesson-name].html`

Generic chapter `index.html` files are not used.
