# Liquid Glass on Android — Learning Documents

Interactive, graphics-first lessons for learning how to build Liquid Glass effects on Android from first principles.

## Start here

Open `liquid-glass-course.html` in a browser.

## Authoritative current state

- Total curriculum: **216 lessons**.
- Learner-confirmed complete: **62 of 216 lessons**.
- Completed through: **Lesson 6.11 — Build a two-layer scene architecture**.
- Completed chapters: **1 through 6**.
- Chapter 7: **0 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.1 — Blur as neighborhood averaging**.
- Generated frontier: **Lesson 7.1**.
- Next planned lesson after review: **Lesson 7.2 — Blur radius**.

Generating or reviewing Lesson 7.1 does not increase the completion count. Only explicit learner confirmation does.

## Current learning path

Open the Chapter 7 hub:

```text
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
```

Then open:

```text
course/chapters/chapter-07/lesson-07-01-blur-as-neighborhood-averaging.html
```

Lesson 7.1 introduces one genuinely new mechanism:

```text
one output position
← several nearby source colors
→ one combined output color
```

The lesson traces a transparent equal-weight 3 × 3 RGB example, then compares a sharp Android test image with a real fixed `BlurEffect`. It explicitly does not claim that Android uses the displayed nine-sample kernel internally.

## Matching Android files

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/BlurNeighborhoodAveragingExplorer.kt
```

The complete chapter-screen previews live in `Chapter07Screen.kt`. Direct explorer previews live in `BlurNeighborhoodAveragingExplorer.kt`. Both Preview levels are vertically scrollable and include light and dark variants.

## New-learning rule

A full lesson must introduce a new mechanism, API behavior, mathematical operation, measurement method, or implementation step. Keep prerequisite recap brief. If a planned lesson is mostly consolidation, make it a checkpoint or merge it into the next substantive lesson instead of presenting repeated architecture as new progress.

## Source and evidence rule

The 3 × 3 equal-weight average is a teaching model. Android's public `BlurEffect` API does not expose exact sample count, weights, internal color representation, or implementation strategy. Keep model-derived facts separate from documented API behavior and measured device behavior.
