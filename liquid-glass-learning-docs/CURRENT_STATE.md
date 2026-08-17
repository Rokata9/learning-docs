# Liquid Glass Android course — current state

**Updated:** 2026-08-17  
**Course version:** 7.1.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **62 of 216 lessons**.
- Completed through: **Lesson 6.11 — Build a two-layer scene architecture**.
- Completed chapters: **1, 2, 3, 4, 5, and 6**.
- Chapter 7: in progress; **0 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.1 — Blur as neighborhood averaging**.
- Generated frontier: **Lesson 7.1 — Blur as neighborhood averaging**.
- Next planned lesson after the unresolved checkpoint: **Lesson 7.2 — Blur radius**.
- Lesson 7.1 is generated and is not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, reviewed, or because the learner said only “continue” while questions or corrections remain.

## Current lesson files

```text
course/chapters/chapter-06/lesson-06-11-two-layer-scene-architecture.html
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
course/chapters/chapter-07/lesson-07-01-blur-as-neighborhood-averaging.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/BlurNeighborhoodAveragingExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

## Completed Lesson 6.11 prerequisite contract

Chapter 6 ends with this established ownership route:

```text
BackdropArtwork
→ backgroundLayer command source
→ panelSampleLayer crop command source
→ material additions
→ sharp ForegroundContent
→ ParentScene
```

`ForegroundContent` remains outside the sample layer that will receive blur. Lesson 7.1 may rely on that fact, but it must not spend another full lesson reteaching the Chapter 6 architecture.

## Generated Lesson 7.1 contract

### Principal new mechanism

One blur output position receives contributions from several nearby source positions:

```text
one output position
← nearby source RGB values
← one contribution from each source value
→ one mixed output RGB value
```

### Transparent teaching calculation

The controlled 3 × 3 neighborhood contains:

```text
four source cells = RGB(18, 54, 90)
five source cells = RGB(225, 153, 45)
```

Each of the nine source cells receives equal contribution `1 ÷ 9` in the teaching model.

```text
red   = (4 × 18  + 5 × 225) ÷ 9 = 133
green = (4 × 54  + 5 × 153) ÷ 9 = 109
blue  = (4 × 90  + 5 × 45)  ÷ 9 = 65

output = RGB(133, 109, 65)
```

The model averages displayed 8-bit RGB numbers directly. It is not a claim about Android's private kernel, weights, sample count, color space, internal precision, or rounding.

### Android route

The Android explorer deliberately avoids rebuilding the Chapter 6 capture architecture. It contains:

```text
one pure 3 × 3 RGB teaching average
+
one sharp test image
+
one identical test image with a fixed BlurEffect
```

The fixed effect route is:

```text
hard-edge artwork commands
→ graphicsLayer
→ BlurEffect with fixed 12 dp radius converted to px
→ softened output
```

The only Chapter 6 bridge is stated explicitly:

```text
panelSampleLayer.renderEffect = blurEffect
```

Lesson 7.2 will vary radius. Lesson 7.3 will study edge treatment. Lesson 7.4 will study downsampling.

## New-learning gate

A full lesson must introduce a genuinely new mechanism, API behavior, mathematical operation, measurement method, or implementation step. A prerequisite recap should be brief and should exist only to feed the new operation.

If planned material is mostly consolidation, make it a short checkpoint or merge it into the next substantive lesson. Do not count repeated architecture prose as new graphics progress.

## Android preview rules

- Complete chapter-screen previews live in `Chapter07Screen.kt`.
- Direct custom-composable previews live in `BlurNeighborhoodAveragingExplorer.kt`.
- Both preview levels provide light and dark variants.
- Both preview levels allow vertical scrolling through the complete generated content in finite-height Android Studio Preview.

Course progress: 62 of 216 lessons completed.
