# Liquid Glass on Android — Learning Documents

Interactive, graphics-first lessons for learning how to build Liquid Glass effects on Android from first principles.

## Start here

Open `liquid-glass-course.html` in a browser.

## Authoritative current state

- Total curriculum: **216 lessons**.
- Learner-confirmed complete: **64 of 216 lessons**.
- Completed through: **Lesson 7.2 — Blur radius**.
- Completed chapters: **1 through 6**.
- Chapter 7: **2 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.3 — Edge treatment**.
- Generated frontier: **Lesson 7.3**.
- Next planned lesson after review: **Lesson 7.4 — Downsampled blur**.

Generating or reviewing Lesson 7.3 does not increase the completion count. Only explicit learner confirmation does.

## Current learning path

Open the Chapter 7 hub:

```text
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
```

Then open:

```text
course/chapters/chapter-07/lesson-07-03-edge-treatment.html
```

Lesson 7.3 introduces one new mechanism:

```text
blur neighborhood crosses the input boundary
→ edgeTreatment supplies missing source values
```

The browser separates artwork edges, blur-input boundaries, and destination clips. It traces the alpha difference between `Clamp` and transparent-black `Decal`, then shows all four `TileMode` extension rules.

## Matching Android files

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/BlurEdgeTreatmentExplorer.kt
```

The complete chapter-screen previews live in `Chapter07Screen.kt`. Direct Lesson 7.3 explorer previews live in `BlurEdgeTreatmentExplorer.kt`. Both Preview levels are vertically scrollable and include light and dark variants.

## New-learning rule

A full lesson must introduce a new mechanism, API behavior, mathematical operation, measurement method, or implementation step. Keep prerequisite recap brief. If a planned lesson is mostly consolidation, make it a checkpoint or merge it into the next substantive lesson instead of presenting repeated architecture as new progress.

## Source and evidence rule

The five-sample Clamp-versus-Decal arithmetic is a teaching model. Android's public `BlurEffect` and `TileMode` APIs document outside-bound behavior and support queries, but they do not expose exact blur sample count, sample coordinates, weights, kernel shape, padding requirement, internal color representation, or optimization strategy. Keep model-derived facts separate from documented API behavior and measured device behavior.
