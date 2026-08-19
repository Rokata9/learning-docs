# Liquid Glass Android course — current state

**Updated:** 2026-08-17  
**Course version:** 7.4.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **65 of 216 lessons**.
- Completed through: **Lesson 7.3 — Edge treatment**.
- Completed chapters: **1, 2, 3, 4, 5, and 6**.
- Chapter 7: in progress; **3 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.4 — Downsampled blur**.
- Generated frontier: **Lesson 7.4 — Downsampled blur**.
- Next planned lesson after the unresolved checkpoint: **Lesson 7.5 — Tint layer**.
- Lesson 7.4 is generated and is not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation.

## Current lesson files

```text
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
course/chapters/chapter-07/lesson-07-03-edge-treatment.html
course/chapters/chapter-07/lesson-07-04-downsampled-blur.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/BlurEdgeTreatmentExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/DownsampledBlurExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

## Completed Lesson 7.3 prerequisite contract

Lesson 7.3 established one rule:

```text
blur requests a source coordinate outside the input
→ edgeTreatment supplies the missing value
```

It distinguished an internal color boundary from the outer source boundary. It also defined transparent black as `RGBA(0, 0, 0, 0)` and explained that alpha zero contributes no visible black.

Lesson 7.4 does not repeat the edge-mode arithmetic or the Chapter 6 sampling architecture.

## Lesson 7.4 contract

### Principal new operation

```text
full-size source
→ create a smaller working image
→ blur the smaller image
→ enlarge the blurred result
```

**Downsample** means create a smaller image by combining groups of source pixels. **Upsample** means enlarge that smaller image to the required output size.

### Size calculation

If both width and height use scale `s`:

```text
working width  = full width × s
working height = full height × s
working pixel count = working width × working height
```

For a `320 × 160` image:

```text
s = 1.00 → 320 × 160 = 51,200 pixels
s = 0.50 → 160 ×  80 = 12,800 pixels
s = 0.25 →  80 ×  40 =  3,200 pixels
```

Half width and half height therefore produce one quarter of the pixel positions. This is an area count, not proof of a four-times frame-time speedup.

### Radius calculation

The blur radius is expressed in pixels of the image being blurred. To preserve approximately the same displayed distance after enlargement:

```text
working radius = desired final radius × s
```

For final radius `24 px`:

```text
s = 1.00 → 24 px
s = 0.50 → 12 px
s = 0.25 →  6 px
```

This coordinate calculation does not describe Android's private blur sample count, weights, or kernel shape.

### Quality tradeoff

The smaller working image may combine thin lines, small dots, narrow text strokes, and tiny color changes before blur. Enlarging restores the output dimensions but cannot reconstruct details removed during shrinking.

### Android route

`DownsampledBlurExplorer.kt` uses one source `GraphicsLayer` and one smaller working `GraphicsLayer`:

```text
record sharp source at full size
→ record source into a smaller IntSize
→ apply BlurEffect using a scaled radius
→ enlarge working layer from top-left origin
→ draw final result
```

The explorer contains one production route and three scale presets: `1.0`, `0.5`, and `0.25`. It contains no diagnostic error modes, stale-state branches, or repeated crop geometry.

Lesson HTML section 7 is a link to `course/chapters/chapter-07/lesson-07-04-scaling-cases-companion.html`. The 28-step transform walkthrough was removed.

### Evidence boundary

The public Compose API supports recording a `GraphicsLayer` with an explicit size, applying `RenderEffect`, and transforming the layer when it is drawn. The lesson does not claim a measured speedup, allocation strategy, exact GPU bandwidth reduction, or Android's private resampling filter.

## New-learning gate

A full lesson must introduce a genuinely new mechanism, API behavior, mathematical operation, measurement method, or implementation step. A prerequisite recap should be brief and should exist only to feed the new operation.

If planned material is mostly consolidation, make it a short checkpoint or merge it into the next substantive lesson. Do not count repeated architecture prose as new graphics progress.

## Android preview rules

- Complete chapter-screen previews live in `Chapter07Screen.kt`.
- Direct custom-composable previews for Lesson 7.4 live in `DownsampledBlurExplorer.kt`.
- Both preview levels provide light and dark variants.
- Both preview levels allow vertical scrolling through the complete generated content in finite-height Android Studio Preview.

Course progress: 65 of 216 lessons completed.
