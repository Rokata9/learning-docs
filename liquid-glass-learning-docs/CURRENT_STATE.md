# Liquid Glass Android course — current state

**Updated:** 2026-08-20  
**Course version:** 7.12.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **68 of 216 lessons**.
- Completed through: **Lesson 7.6 — Saturation and contrast**.
- Completed chapters: **1, 2, 3, 4, 5, and 6**.
- Chapter 7: in progress; **6 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.7 — Static rim**.
- Generated frontier: **Lesson 7.12 — Compare backgrounds**.
- Next planned lesson after the generated frontier: **Lesson 8.1 — What a shader does**.
- Lesson 7.7 is generated and is not learner-confirmed complete.
- Lessons 7.8 through 7.12 are generated ahead and are not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation.

## Current lesson files

```text
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
course/chapters/chapter-07/lesson-07-07-static-rim.html
course/chapters/chapter-07/lesson-07-08-inner-highlight.html
course/chapters/chapter-07/lesson-07-09-outer-shadow.html
course/chapters/chapter-07/lesson-07-10-fine-noise.html
course/chapters/chapter-07/lesson-07-11-compose-the-layers.html
course/chapters/chapter-07/lesson-07-12-compare-backgrounds.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/StaticRimExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/InnerHighlightExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/OuterShadowExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/FineNoiseExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/ComposeLayersExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/CompareBackgroundsExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

Lessons 7.7–7.12 keep the 7.6 fill contract as a prerequisite and do not rebuild it.

## Generated-ahead Lesson 7.11 contract

### Principal new operation

```text
slot(ingredient) = (clip membership, effect owner, sibling order)
wrong clip membership → pixels outside the path are discarded
wrong sibling order → the later sibling covers the earlier sibling
```

Production tree:

```text
unclipped stage
→ padded shadow (own BlurEffect)
→ clip(panel)
   → fill (blur 18.dp, tint 0.25, saturation 0.40)
   → grain overlay (occupies the sibling after fill)
   → inner band (own 6.dp BlurEffect)
   → unblurred rim
   → sharp label outside the fill graphicsLayer
```

The Android grain overlay occupies the noise slot. It is not a second derivation of Lesson 7.10’s store formula.

## Generated-ahead Lesson 7.12 contract

### Principal new operation

```text
destination class
→ frozen 7.11 recipe
→ sample interior RGB
→ Lesson 3.7 white-label contrast
→ pass if ≥ 4.5:1, else fail
```

Structure leftover (readable glyphs, named patches) is a second observation, not a second formula. Uniform dark/light samples match the blurred GPU color. Photo, text, and gradient numbers are teaching samples, not GPU readbacks.

## Unresolved checkpoint

Lesson 7.7 remains the unresolved checkpoint. Completion stays 68 of 216.

Course progress: 68 of 216 lessons completed.
