# Liquid Glass on Android — Learning Documents

This repository contains the interactive course documents. The Android Studio project is intentionally separate.

## Start here

Open `liquid-glass-course.html` directly in a Chromium-based browser. No local server is required. Every lesson is self-contained and works from `file://`.

## Current course state

- Chapter 1 is complete.
- Chapter 2 is complete.
- **24 of 216 lessons are complete.**
- Lessons 3.1 through 3.7 are complete.
- Lesson 3.8 is generated and is the next learner checkpoint.
- The generated frontier is Lesson 3.8.

Open:

```text
course/chapters/chapter-03/lesson-03-08-tint.html
```

## Android progression

- Chapter 1 built and diagnosed the first translucent panel.
- Chapter 2 built the coordinate vocabulary and the final coordinate inspector.
- Lessons 3.1 through 3.5 built RGB, alpha, source-over, draw order, and straight versus premultiplied RGBA.
- Lesson 3.6 adds `BrightnessLuminanceExplorer.kt` and changes `Chapter03Screen.kt` to display it.
- The rejected first draft of Lesson 3.6 began from the finished luminance formula. The replacement starts from one known opaque `Color`, defines one stored sRGB channel number and one linear-light output, traces one channel through the conversion, and only then repeats the operation for all three channels and calculates relative luminance.
- The Lesson 3.6 code patch also removes every remaining invalid explicit `layout.weight` or `layout.matchParentSize` import from 16 existing Android source files across Chapters 1 through 3. The matching embedded Kotlin in the earlier HTML lessons is corrected in the learning-docs patch.
- Lesson 3.7 starts from the final opaque background color and relative luminance produced by Lesson 3.6. It defines foreground, candidate, ratio, lighter luminance, darker luminance, and the fixed contrast offset before revealing the contrast formula.
- Lesson 3.7 calculates black and white contrast separately, chooses the larger ratio, and keeps accessibility target checking as a separate policy step. It also demonstrates that a translucent foreground is composited before contrast is measured.
- The active Android child becomes `ForegroundContrastExplorer.kt`. `Chapter03Screen.kt` includes complete-screen and direct-child previews in both OS themes.
- `Chapter03Screen.kt` contains previews for both the complete chapter screen and the active child explorer, in light and dark modes.

- Lesson 3.8 starts from the completed Lesson 3.7 background. It defines one explicit tint model: a translucent straight sRGB tint source drawn over one opaque straight sRGB destination with source-over.
- The lesson traces one red channel through the general source-over calculation before repeating it for green and blue. It distinguishes tint amount from final output alpha and recalculates luminance and contrast from the tinted output.
- The active Android child becomes `TintExplorer.kt`. `Chapter03Screen.kt` includes complete-screen and direct-child previews in both OS themes.

## Theme rule from Lesson 3.1 onward

New lesson HTML follows the operating-system light or dark preference automatically. Android screens use the project theme and `MaterialTheme.colorScheme` for interface chrome. Instructional color values remain exact across themes.

## Incremental delivery rule

Each lesson archive contains only files created or modified for that lesson. Paths are preserved beneath `liquid-glass-learning-docs/` or `LiquidGlassLab/`. A lesson with no Android source change has no empty Android ZIP.

## Naming rule

Course home: `liquid-glass-course.html`  
Chapter hub: `lesson-[chapter-name].html`  
Sub-lesson: `lesson-[chapter-number]-[lesson-number]-[lesson-name].html`

Generic chapter `index.html` files are not used.
