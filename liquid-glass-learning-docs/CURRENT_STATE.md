# Liquid Glass Android course — current state

**Updated:** 2026-08-19  
**Course version:** 7.5.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **66 of 216 lessons**.
- Completed through: **Lesson 7.4 — Downsampled blur**.
- Completed chapters: **1, 2, 3, 4, 5, and 6**.
- Chapter 7: in progress; **4 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.5 — Tint layer**.
- Generated frontier: **Lesson 7.5 — Tint layer**.
- Next planned lesson after the unresolved checkpoint: **Lesson 7.6 — Saturation and contrast**.
- Lesson 7.5 is generated and is not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation.

## Current lesson files

```text
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
course/chapters/chapter-07/lesson-07-04-downsampled-blur.html
course/chapters/chapter-07/lesson-07-04-scaling-cases-companion.html
course/chapters/chapter-07/lesson-07-05-tint-layer.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/DownsampledBlurExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/TintLayerExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

## Completed Lesson 7.4 prerequisite contract

Lesson 7.4 established:

```text
full-size source
→ smaller working image
→ blur fewer pixel positions
→ enlarge the blurred result
```

Downsample means create a smaller image by combining source pixels. Upsample means enlarge that smaller image to the required output size. Half width and half height produce one quarter of the pixel positions. That is an area count, not a proven four-times speedup.

Lesson 7.5 does not repeat downsample size or radius arithmetic. It consumes a blurred image as the destination of a later tint draw.

## Lesson 7.5 contract

### Principal new operation

```text
already-blurred destination image
→ draw a translucent tint rectangle
→ keep a sharp label on top
```

A **tint layer** is that second draw. The mix is the Lesson 3.8 short formula for an opaque destination:

```text
output = tint × amount + destination × (1 − amount)
```

The new mechanism is the independent later draw, not a new color formula.

### Controlled interiors

```text
navy destination   = (0.10, 0.25, 0.40)
orange destination = (0.90, 0.60, 0.20)
white tint         = (1.00, 1.00, 1.00)
amount             = 0.25
```

A pale amount keeps the two interiors in different families. Amount `1.00` replaces both with the tint.

### Android route

`TintLayerExplorer.kt` uses one clean path:

```text
artwork Canvas with BlurEffect and TileMode.Clamp
→ second Canvas drawRect of tintColor.copy(alpha = tintAmount)
→ sharp label
```

Blur radius stays fixed. Edge treatment stays `Clamp`. There is no downsample path and no diagnostic error mode.

### Evidence boundary

The public Compose API supports `BlurEffect` on one layer and a later `drawRect`. The lesson does not claim Apple's private glass tint, a `ColorFilter` contract, or that a uniform tint-then-linear-blur produces different pixels.

## Android preview rules

- Complete chapter-screen previews live in `Chapter07Screen.kt`.
- Direct custom-composable previews for Lesson 7.5 live in `TintLayerExplorer.kt`.
- Both preview levels provide light and dark variants.
- Both preview levels allow vertical scrolling through the complete generated content in finite-height Android Studio Preview.

Course progress: 66 of 216 lessons completed.
