# Liquid Glass on Android — Learning Documents

Interactive, graphics-first lessons for learning how to build Liquid Glass effects on Android from first principles.

## Start here

Open `liquid-glass-course.html` in a browser.

## Authoritative current state

- Total curriculum: **216 lessons**.
- Learner-confirmed complete: **65 of 216 lessons**.
- Completed through: **Lesson 7.3 — Edge treatment**.
- Completed chapters: **1 through 6**.
- Chapter 7: **3 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.4 — Downsampled blur**.
- Generated frontier: **Lesson 7.4**.
- Next planned lesson after review: **Lesson 7.5 — Tint layer**.

Generating or reviewing Lesson 7.4 does not increase the completion count. Only explicit learner confirmation does.

## Current learning path

Open the Chapter 7 hub:

```text
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
```

Then open:

```text
course/chapters/chapter-07/lesson-07-04-downsampled-blur.html
```

Lesson 7.4 introduces one new operation:

```text
full-size source
→ smaller working image
→ blur the smaller image
→ enlarge the blurred result
```

It traces how scaling both width and height changes the working pixel count, why the blur radius is scaled with the working image, and which fine details can disappear before enlargement.

## Matching Android files

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/DownsampledBlurExplorer.kt
```

The complete chapter-screen previews live in `Chapter07Screen.kt`. Direct Lesson 7.4 explorer previews live in `DownsampledBlurExplorer.kt`. Both Preview levels are vertically scrollable and include light and dark variants.

## Performance evidence rule

A smaller working image contains fewer pixel positions. That arithmetic does not prove a matching frame-time speedup. Device performance claims require release-like measurement on the physical test device.

## New-learning rule

A full lesson must introduce a new mechanism, API behavior, mathematical operation, measurement method, or implementation step. Keep prerequisite recap brief. If a planned lesson is mostly consolidation, make it a checkpoint or merge it into the next substantive lesson instead of presenting repeated architecture as new progress.
