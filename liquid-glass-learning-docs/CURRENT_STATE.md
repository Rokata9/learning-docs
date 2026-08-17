# Liquid Glass Android course — current state

**Updated:** 2026-08-17  
**Course version:** 7.2.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **63 of 216 lessons**.
- Completed through: **Lesson 7.1 — Blur as neighborhood averaging**.
- Completed chapters: **1, 2, 3, 4, 5, and 6**.
- Chapter 7: in progress; **1 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.2 — Blur radius**.
- Generated frontier: **Lesson 7.2 — Blur radius**.
- Next planned lesson after the unresolved checkpoint: **Lesson 7.3 — Edge treatment**.
- Lesson 7.2 is generated and is not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, reviewed, or because the learner said only “continue” while questions or corrections remain.

## Current lesson files

```text
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
course/chapters/chapter-07/lesson-07-01-blur-as-neighborhood-averaging.html
course/chapters/chapter-07/lesson-07-02-blur-radius.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/BlurNeighborhoodAveragingExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/BlurRadiusExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

## Completed Lesson 7.1 prerequisite contract

Lesson 7.1 established one mechanism:

```text
one output position
← several nearby source colors
→ one combined output color
```

Its 3 × 3 equal-weight arithmetic is a transparent teaching model. It does not reveal Android's private blur kernel, sample count, weights, color representation, or rounding.

Lesson 7.2 may rely on neighborhood dependence. It must not repeat Chapter 6 capture architecture or repeat the full Lesson 7.1 averaging derivation merely to introduce radius.

## Generated Lesson 7.2 contract

### Principal new mechanism

Blur radius controls the spatial reach of the blur:

```text
larger radius
→ farther source positions can influence an output
→ broader transitions
→ less distinct small detail
```

Radius is not opacity or tint strength.

### Transparent one-dimensional model

The source strip contains nine displayed 8-bit RGB cells:

```text
index:  0    1    2    3    4    5    6    7    8
color: blue blue blue blue amber amber amber amber amber
```

```text
blue  = RGB(18, 54, 90)
amber = RGB(225, 153, 45)
selected output index i = 5
```

The teaching radius `r` is measured in whole source-cell offsets. Its symmetric box window includes indexes `i - r` through `i + r`, so this model alone has `N = 2r + 1` samples.

The four paired presets are:

```text
No blur: r = 0 teaching cells; Android test radius = 0 dp
Small:   r = 1 teaching cell;  Android test radius = 4 dp
Medium:  r = 2 teaching cells; Android test radius = 12 dp
Large:   r = 3 teaching cells; Android test radius = 24 dp
```

The pairs express relative size only. One teaching cell is not equal to four dp.

Exact model outputs at index 5:

```text
r = 0 → [amber]
      → RGB(225, 153, 45)

r = 1 → [amber, amber, amber]
      → RGB(225, 153, 45)

r = 2 → [blue, amber, amber, amber, amber]
      → RGB(184, 133, 54)

r = 3 → [blue, blue, amber, amber, amber, amber, amber]
      → RGB(166, 125, 58)
```

The model proves that a larger influence distance can admit farther colors. It does not claim Android uses a one-dimensional box filter, whole-pixel windows, `2r + 1` samples, equal weights, displayed 8-bit RGB arithmetic, or the shown rounding.

### Android route

`BlurRadiusExplorer.kt` contains one production-facing experiment:

```text
learner-facing radius in dp
→ current Density converts dp to px
→ radiusX receives the px value
→ radiusY receives the same px value
→ BlurEffect is attached to the artwork layer
```

The explorer provides:

- presets at `0`, `4`, `12`, and `24` dp;
- a continuous `0..28` dp slider;
- a sharp reference beside the selected radius;
- a runtime dp-to-px readout;
- equal `radiusX` and `radiusY` values for symmetric blur;
- fixed `TileMode.Clamp`, leaving edge comparison to Lesson 7.3;
- one hard color edge, one diagonal line, one small dot, and four narrow bars so transition width and detail loss are visible;
- no repeated backdrop capture, crop, freshness, or feedback-loop implementation.

A radius of `0 dp` attaches no effect, producing an exact sharp reference.

### Evidence boundary

The public Compose `BlurEffect` API documents horizontal and vertical blur radii plus edge treatment. It does not expose internal sample positions, sample count, weights, kernel shape, color arithmetic, or optimization strategy.

Lesson 7.2 establishes radius behavior and API data flow. It does not compare edge treatments, downsample, or claim measured GPU cost.

## New-learning gate

A full lesson must introduce a genuinely new mechanism, API behavior, mathematical operation, measurement method, or implementation step. A prerequisite recap should be brief and should exist only to feed the new operation.

If planned material is mostly consolidation, make it a short checkpoint or merge it into the next substantive lesson. Do not count repeated architecture prose as new graphics progress.

## Android preview rules

- Complete chapter-screen previews live in `Chapter07Screen.kt`.
- Direct custom-composable previews for Lesson 7.2 live in `BlurRadiusExplorer.kt`.
- Both preview levels provide light and dark variants.
- Both preview levels allow vertical scrolling through the complete generated content in finite-height Android Studio Preview.

Course progress: 63 of 216 lessons completed.
