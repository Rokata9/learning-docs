# Liquid Glass Android course — current state

**Updated:** 2026-08-17  
**Course version:** 7.3.1  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **64 of 216 lessons**.
- Completed through: **Lesson 7.2 — Blur radius**.
- Completed chapters: **1, 2, 3, 4, 5, and 6**.
- Chapter 7: in progress; **2 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.3 — Edge treatment**.
- Generated frontier: **Lesson 7.3 — Edge treatment**.
- Next planned lesson after the unresolved checkpoint: **Lesson 7.4 — Downsampled blur**.
- Lesson 7.3 is generated and is not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, reviewed, or because the learner said only “continue” while questions or corrections remain.

## Current lesson files

```text
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
course/chapters/chapter-07/lesson-07-01-blur-as-neighborhood-averaging.html
course/chapters/chapter-07/lesson-07-02-blur-radius.html
course/chapters/chapter-07/lesson-07-03-edge-treatment.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/BlurNeighborhoodAveragingExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/BlurRadiusExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/BlurEdgeTreatmentExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

## Completed Lesson 7.2 prerequisite contract

Lesson 7.2 established one control:

```text
larger blur radius
→ farther source positions can influence an output
→ broader transitions
→ less distinct small detail
```

The one-dimensional `N = 2r + 1` equal-weight window was a transparent teaching model. It did not claim Android uses that kernel, sample count, weighting, rounding, or displayed 8-bit RGB arithmetic.

Lesson 7.3 keeps the blur radius fixed. It must not repeat the full radius derivation or Chapter 6 sampling architecture merely to introduce edge treatment.

## Revised Lesson 7.3 contract

### Principal new mechanism

A blur near the outer boundary of its source can request coordinates that are not part of the source:

```text
requested source coordinate is outside the input
→ edgeTreatment supplies a replacement value
```

The lesson now starts with that single question and does not mix production panel integration into the main walkthrough.

### Two meanings of edge

1. **Color boundary inside the source:** real source pixels exist on both sides, so blur mixes those real colors and `edgeTreatment` is not used.
2. **Outer boundary of the source:** a requested coordinate lies outside the source, so `edgeTreatment` supplies a value.

A later destination clip is mentioned only as a separate note: it can hide output pixels but cannot provide missing blur input.

### Six-state teaching trace

Five source cells `A…E` occupy valid indexes `0…4`. For output index `0`, the fixed teaching radius requests `−2, −1, 0, 1, 2`; only `−2` and `−1` are missing.

The walkthrough contains only:

```text
source bounds
→ output target
→ neighborhood requests
→ missing requests
→ TileMode replacements
→ teaching output
```

The four conceptual extensions are:

```text
Clamp:    A A | A B C D E | E E
Decal:    T T | A B C D E | T T
Mirror:   B A | A B C D E | E D
Repeated: D E | A B C D E | A B
```

`T` is defined immediately as transparent black `RGBA(0, 0, 0, 0)`.

### Decal and transparent black

The lesson no longer uses the undefined word “hue.” In the uniform-orange trace:

```text
T, T, C, C, C
→ premultiplied output (0.60, 0.24, 0.06, 0.60)
→ straight output (1.00, 0.40, 0.10, 0.60)
```

Plain-language conclusion: the straight RGB values remain orange, while alpha falls to `0.60`. Transparent black adds no visible black because its alpha is zero; it makes the result less opaque.

### Glass-panel application, kept separate

The application section defines every rectangle before using `crop`:

```text
read a larger rectangle from the real backdrop
→ blur that larger rectangle
→ select only the smaller inner rectangle matching the panel
```

Here, **crop after blur** means select the panel-sized inner rectangle and ignore the extra outer border. The lesson does not use “overscan” or “padded source,” and it does not claim an exact extra-margin formula.

### Android route

`BlurEdgeTreatmentExplorer.kt` keeps one fixed blur radius and changes only the selected `TileMode`:

```text
selected mode
→ tileMode
→ isSupported()
→ selected mode or Clamp fallback
→ BlurEffect.edgeTreatment
```

The UI copy defines transparent black directly and uses “source image” rather than the undefined phrase “opaque crop.”

### Evidence boundary

The public Compose API documents `edgeTreatment` as the strategy for pixels outside the original input bounds. `Clamp`, `Mirror`, and `Repeated` are guaranteed; `Decal` is capability-checked and an unsupported mode is consumed as `Clamp`.

Lesson 7.3 does not reveal Android's internal blur implementation, weights, exact sample positions, exact extra-margin requirement, allocation strategy, or measured GPU cost.

## New-learning gate

A full lesson must introduce a genuinely new mechanism, API behavior, mathematical operation, measurement method, or implementation step. A prerequisite recap should be brief and should exist only to feed the new operation.

If planned material is mostly consolidation, make it a short checkpoint or merge it into the next substantive lesson. Do not count repeated architecture prose as new graphics progress.

## Android preview rules

- Complete chapter-screen previews live in `Chapter07Screen.kt`.
- Direct custom-composable previews for Lesson 7.3 live in `BlurEdgeTreatmentExplorer.kt`.
- Both preview levels provide light and dark variants.
- Both preview levels allow vertical scrolling through the complete generated content in finite-height Android Studio Preview.

Course progress: 64 of 216 lessons completed.
