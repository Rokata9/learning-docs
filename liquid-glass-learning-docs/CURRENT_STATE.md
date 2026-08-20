# Liquid Glass Android course — current state

**Updated:** 2026-08-20  
**Course version:** 7.10.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **68 of 216 lessons**.
- Completed through: **Lesson 7.6 — Saturation and contrast**.
- Completed chapters: **1, 2, 3, 4, 5, and 6**.
- Chapter 7: in progress; **6 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.7 — Static rim**.
- Generated frontier: **Lesson 7.10 — Fine noise or dither**.
- Next planned lesson after the generated frontier: **Lesson 7.11 — Compose the layers**.
- Lesson 7.7 is generated and is not learner-confirmed complete.
- Lessons 7.8, 7.9, and 7.10 are generated ahead and are not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation.

## Current lesson files

```text
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
course/chapters/chapter-07/lesson-07-07-static-rim.html
course/chapters/chapter-07/lesson-07-08-inner-highlight.html
course/chapters/chapter-07/lesson-07-09-outer-shadow.html
course/chapters/chapter-07/lesson-07-10-fine-noise.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/StaticRimExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/InnerHighlightExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/OuterShadowExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/FineNoiseExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

Lessons 7.7–7.10 keep the 7.6 fill contract as a prerequisite and do not rebuild it.

## Generated-ahead Lesson 7.10 contract

### Principal new operation

```text
slow true ramp (stand-in for post-blur interiors)
→ signed = 2 × unitNoise(column, row) − 1
→ offset = signed × amount
→ add the same offset to R, G, and B
→ store8 = round(clamp(sum) × 255)
```

Chroma noise uses a different signed value per channel and looks dirty. Production uses luminance noise at amount `0.02`.

The remainder recipe is a teaching table. It is not a GPU program and not a photograph.

### Teaching ramp

```text
left  RGB(0.32, 0.40, 0.52)
right RGB(0.36, 0.44, 0.56)
selected teaching pixel: column 200, row 80 of the 640-pixel HTML ramp
```

### Android route

`FineNoiseExplorer.kt` writes a card-sized bitmap with that exact store formula. Three cards compare no noise, luminance noise, and chroma noise. Rim and label stay sharp on top.

## Unresolved checkpoint

Lesson 7.7 remains the unresolved checkpoint. Completion stays 68 of 216.

Course progress: 68 of 216 lessons completed.
