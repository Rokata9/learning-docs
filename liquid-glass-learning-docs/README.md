# Liquid Glass on Android — Learning Documents

This repository contains the interactive course documents. The Android Studio project is intentionally separate.

## Start here

Open `liquid-glass-course.html` directly in a Chromium-based browser. No local server is required. Every lesson is self-contained and works from `file://`.

## Generated delivery frontier

- Course home
- Canonical glossary
- Chapter 1 hub
- Lessons 1.1 through 1.7 and 1.8
- Chapter 2 hub
- Lesson 2.1: **What a pixel is**
- Lesson 2.2: **The X axis**
- Updated curriculum and conversation handoff

## Next learner checkpoint

```text
course/chapters/chapter-01/lesson-01-07-pixel-8-pro-experiment.html
```

Lessons 1.1 through 1.6 are complete by learner confirmation. The question about `0.40` has been answered inside the revised Lesson 1.6: it is one normalized channel value, not a complete color.

Files after Lesson 1.7 were generated in advance. Complete them in this order:

```text
1.7 → 1.8 → 2.1 → 2.2
```

Generated availability is not learner completion.

## Android progression

- Lesson 1.7 adds exact 0%, 25%, 50%, 75%, and 100% controls.
- Lesson 1.8 changes no Android source.
- Lesson 2.1 switches the app entry point to `Chapter02Screen` and adds an enlarged 8×8 teaching grid.
- Lesson 2.2 adds an X-axis explorer and makes the selected column movable from 0 through 7.

## Incremental delivery rule

Each lesson archive contains only files created or modified for that lesson. Paths are preserved beneath `liquid-glass-learning-docs/` or `LiquidGlassLab/`. A lesson with no Android source change has no empty Android ZIP.

## Naming rule

Course home: `liquid-glass-course.html`  
Chapter hub: `lesson-[chapter-name].html`  
Sub-lesson: `lesson-[chapter-number]-[lesson-number]-[lesson-name].html`

Generic chapter `index.html` files are not used.
