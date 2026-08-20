# Liquid Glass Android course — current state

**Updated:** 2026-08-19  
**Course version:** 7.6.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **67 of 216 lessons**.
- Completed through: **Lesson 7.5 — Tint layer**.
- Completed chapters: **1, 2, 3, 4, 5, and 6**.
- Chapter 7: in progress; **5 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.6 — Saturation and contrast**.
- Generated frontier: **Lesson 7.6 — Saturation and contrast**.
- Next planned lesson after the unresolved checkpoint: **Lesson 7.7 — Static rim**.
- Lesson 7.6 is generated and is not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation.

## Current lesson files

```text
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
course/chapters/chapter-07/lesson-07-05-tint-layer.html
course/chapters/chapter-07/lesson-07-06-saturation-and-contrast.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/TintLayerExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/SaturationContrastExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

## Completed Lesson 7.5 prerequisite contract

Lesson 7.5 established:

```text
already-blurred destination
→ draw a translucent tint rectangle
→ keep a sharp label on top
```

The mix is the Lesson 3.8 short formula. A pale amount keeps navy and orange distinguishable.

Lesson 7.6 keeps that tint amount fixed at `0.25` and does not repeat the tint derivation.

## Lesson 7.6 contract

### Principal new operation

```text
blurred + tinted glass group
→ ColorFilter.colorMatrix(setToSaturation(factor))
→ measure label contrast from the new RGB
→ keep the label outside the filter
```

Saturation is the Lesson 3.9 transform. Contrast is the Lesson 3.7 measurement. The new step is attaching both to the frosted stack.

### Controlled interiors after the 7.5 white veil

```text
navy after tint   = (0.3250, 0.4375, 0.5500)
orange after tint = (0.9250, 0.7000, 0.4000)
default factor    = 0.40
```

Factor `0` makes each interior a gray from its own gray reference. Those two grays can differ in lightness.

### Android route

`SaturationContrastExplorer.kt` wraps the blur canvas and the tint rect in a `graphicsLayer` whose `colorFilter` is `ColorFilter.colorMatrix`. The sharp label is a sibling of that group.

### Evidence boundary

Saturation does not guarantee a 4.5 : 1 pass. The gray reference is not relative luminance. The 4×5 matrix derivation is not rebuilt.

## Android preview rules

- Complete chapter-screen previews live in `Chapter07Screen.kt`.
- Direct custom-composable previews for Lesson 7.6 live in `SaturationContrastExplorer.kt`.
- Both preview levels provide light and dark variants and vertical scrolling.

Course progress: 67 of 216 lessons completed.
