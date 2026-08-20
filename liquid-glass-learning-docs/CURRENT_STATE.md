# Liquid Glass Android course — current state

**Updated:** 2026-08-20  
**Course version:** 7.7.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **68 of 216 lessons**.
- Completed through: **Lesson 7.6 — Saturation and contrast**.
- Completed chapters: **1, 2, 3, 4, 5, and 6**.
- Chapter 7: in progress; **6 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.7 — Static rim**.
- Generated frontier: **Lesson 7.7 — Static rim**.
- Next planned lesson after the unresolved checkpoint: **Lesson 7.8 — Inner highlight**.
- Lesson 7.7 is generated and is not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation.

## Current lesson files

```text
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
course/chapters/chapter-07/lesson-07-06-saturation-and-contrast.html
course/chapters/chapter-07/lesson-07-07-static-rim.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/SaturationContrastExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/StaticRimExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

## Completed Lesson 7.6 prerequisite contract

Lesson 7.6 established:

```text
blurred + tinted glass group
→ ColorFilter.colorMatrix(setToSaturation(factor))
→ measure label contrast from the new RGB
→ keep the label outside the filter
```

Saturation is the Lesson 3.9 transform. Contrast is the Lesson 3.7 measurement. Tint amount stayed `0.25`.

Lesson 7.7 keeps blur `18.dp`, tint `0.25`, and saturation `0.40` fixed. It does not repeat those derivations.

## Lesson 7.7 contract

### Principal new operation

```text
quieted frosted fill, clipped to the panel path
→ a Canvas Stroke is centered on its path
→ clipping to that same path discards the outer half
→ production insets the path by width ÷ 2
→ inner corner radius = panel corner radius − inset
```

The stroke uses one color and one width on every side. It is not a lighting model.

### Controlled values

```text
HTML teaching width   = 8 CSS px (so the lost outer half is visible)
Android default width = 3.dp
Android corner radius = 14.dp  (same as the 7.5 / 7.6 card)
HTML corner radius    = 36 px  (teaching canvas)
```

Those pixel numbers are not interchangeable.

### Android route

`StaticRimExplorer.kt` keeps the Lesson 7.6 glass group, then draws a sibling `Stroke`. Three stacked cards compare no rim, a stroke on the clip path, and a stroke on the inset path.

### Evidence boundary

This is not a specular highlight, not a signed-distance inner glow, and not Apple’s private edge treatment. Lesson 7.8 will add a soft inner band as a separate object.

## Android preview rules

- Complete chapter-screen previews live in `Chapter07Screen.kt`.
- Direct custom-composable previews for Lesson 7.7 live in `StaticRimExplorer.kt`.
- Both preview levels provide light and dark variants and vertical scrolling.
- Stack the dark `@Preview` annotation first, then light.
- Do not generate ZIP archives. Leave changed files in the repositories.

Course progress: 68 of 216 lessons completed.
