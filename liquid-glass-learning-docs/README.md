# Liquid Glass on Android — Learning Documents

Interactive, graphics-first lessons for learning how to build Liquid Glass effects on Android from first principles.

## Start here

Open `liquid-glass-course.html` in a browser.

## Authoritative current state

- Total curriculum: **216 lessons**.
- Learner-confirmed complete: **63 of 216 lessons**.
- Completed through: **Lesson 7.1 — Blur as neighborhood averaging**.
- Completed chapters: **1 through 6**.
- Chapter 7: **1 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.2 — Blur radius**.
- Generated frontier: **Lesson 7.2**.
- Next planned lesson after review: **Lesson 7.3 — Edge treatment**.

Generating or reviewing Lesson 7.2 does not increase the completion count. Only explicit learner confirmation does.

## Current learning path

Open the Chapter 7 hub:

```text
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
```

Then open:

```text
course/chapters/chapter-07/lesson-07-02-blur-radius.html
```

Lesson 7.2 introduces one new control:

```text
larger blur radius
→ farther source influence
→ broader transitions
→ less distinct small detail
```

The browser uses a transparent one-dimensional box model to trace exactly when a larger radius reaches across a blue/amber boundary. It separately maps a learner-facing dp radius to the raw pixel values consumed by Compose `BlurEffect`. The model is not presented as Android's private kernel.

## Matching Android files

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/BlurRadiusExplorer.kt
```

The complete chapter-screen previews live in `Chapter07Screen.kt`. Direct Lesson 7.2 explorer previews live in `BlurRadiusExplorer.kt`. Both Preview levels are vertically scrollable and include light and dark variants.

## New-learning rule

A full lesson must introduce a new mechanism, API behavior, mathematical operation, measurement method, or implementation step. Keep prerequisite recap brief. If a planned lesson is mostly consolidation, make it a checkpoint or merge it into the next substantive lesson instead of presenting repeated architecture as new progress.

## Source and evidence rule

The one-dimensional equal-weight window is a teaching model. Android's public `BlurEffect` API documents `radiusX`, `radiusY`, and edge treatment, but it does not expose exact sample count, sample coordinates, weights, kernel shape, internal color representation, or optimization strategy. Keep model-derived facts separate from documented API behavior and measured device behavior.
