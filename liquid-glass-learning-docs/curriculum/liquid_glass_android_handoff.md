# Liquid Glass on Android — Conversation Handoff

**Course plan version:** 3.5.3  
**Updated:** 2026-07-26  
**Current position:** Lessons 1.1 through 3.4 are complete by learner confirmation. **21 of 216 lessons are complete.** Lesson 3.5 is generated again and remains pending.

## Permanent course rules

- Assume an absolute beginner in mathematics, graphics, raster images, color science, GPUs, shaders, and Android rendering internals.
- Use simple English and short declarative sentences.
- Introduce one main graphics idea and at most one main mathematical idea per lesson.
- Define every term before relying on it.
- Trace one exact value through input → operation → intermediate value → output.
- Every lesson is a standalone interactive HTML file with inline CSS and JavaScript.
- Every lesson includes a coding challenge, two to four hidden-answer exercises, and a copyable completion record.
- Android code lives in the separate `LiquidGlassLab` project.
- Deliver only changed files in incremental ZIPs.
- Lessons 3.1 and later follow the operating-system light or dark theme. Instructional color data remains unchanged across themes.
- Count only learner-confirmed lesson completion.
- End every response with `Course progress: X of 216 lessons completed.` and an approximate remaining-context estimate.

## Chapter 3 color and compositing terminology rules

1. Use **straight RGBA** or **unassociated RGBA**. Do not rely on the label `ordinary RGBA`.
2. Use **premultiplied RGBA** or **associated RGBA** when stored RGB already contains multiplication by that tuple's alpha.
3. A bare `RGB(r, g, b)` tuple does not identify a representation when alpha matters. Label it `straight RGB` or `premultiplied RGB`.
4. Teach the general source-over formula before the opaque-destination shortcut. The general straight-input destination term is:

   ```text
   destination straight RGB × destination alpha × (1 − source alpha)
   ```

5. Lesson 3.3's former `weighted total` is **output premultiplied RGB**.
6. Lesson 3.3's former `ordinary output` is **output straight RGB**.
7. Explain the practical representation choice through the API or buffer contract. Do not guess.
8. Explain why the two representations exist, what each stored field means, and why both valid paths describe the same represented output.
9. At alpha zero, explain that the straight RGB cannot be reconstructed from premultiplied `(0, 0, 0, 0)`.
10. Correct ambiguous earlier labels in every earlier file changed by the current lesson.

## Prerequisite and causal-operation gate

Before introducing a graphics intermediate such as a sample, filtered pixel, mask value, or edge pixel:

1. Name the real operation that creates the value.
2. Name the complete input and output objects.
3. State what makes the operation run.
4. Add shorthand labels such as P0 or Q only after the objects are clear.
5. When the operation has not been taught, split or defer the dependent topic.
6. Do not teach an image-filtering artifact before image filtering or sampling has been taught.

## Current progress

```yaml
course: Liquid Glass on Android
course_version: 3.5.3
platform: Kotlin + Jetpack Compose
learning_device: Pixel 8 Pro
learning_min_sdk: 33
course_lessons_total: 216
course_lessons_completed_by_learner: 21
completed_through: 3.4
generated_frontier: 3.5
next_learner_checkpoint: 3.5
chapter_01_completed_by_learner: true
chapter_02_completed_by_learner: true
chapter_03_completed_by_learner: false
lesson_03_05_file: course/chapters/chapter-03/lesson-03-05-straight-and-premultiplied-rgba.html
lesson_03_05_generated: true
lesson_03_05_revision: complete-source-over-representation-bridge
lesson_03_05_original_edge_versions_rejected_by_learner: true
lesson_03_05_opaque-background_version_rejected_by_learner: true
lesson_03_05_completed_by_learner: false
transparent_edge_halo_topic: deferred_until_image_boundary_and_sampling_prerequisites
html_theme_rule_from_lesson: 3.1
incremental_delivery_only: true
```

## Why Lesson 3.5 was rewritten again

The previous replacement taught one source over an opaque background. That removed the premature image-edge problem, but it hid the complete connection to Lesson 3.3.

The learner correctly identified these remaining defects:

- `ordinary RGBA` was not a precise or useful name;
- bare `RGB(...)` tuples did not state whether the values were straight or premultiplied;
- the relation between Lesson 3.3's `weighted total`, its `ordinary output`, and the new representations was unclear;
- two equations were shown without explaining which stored representation each equation consumed;
- the simplified destination term omitted destination alpha without first stating that the destination was opaque;
- the lesson did not explain when real APIs or buffers expect each representation.

Version 3.5.3 repairs those defects. It uses the same translucent source and translucent destination as Lesson 3.3. It renames the earlier intermediate values precisely. It shows the general source-over formula first. It then derives the opaque-destination formula as a special case.

## Lesson 3.5 — Straight and premultiplied RGBA

### The three concrete objects

The lesson follows one image position.

```text
Source drawn now:
Straight RGBA(0.90, 0.10, 0.80, 0.50)

Destination already present:
Straight RGBA(0.10, 0.90, 0.40, 0.60)

Output produced by source-over:
Straight RGBA(0.60, 0.40, 0.65, 0.80)
```

Both inputs are translucent. No opaque destination is assumed in the main calculation.

No image edge, circle, filtering, interpolation, resizing, antialiasing, shadow, gradient, or halo is part of this lesson.

### Straight RGBA

Straight RGBA stores RGB independently from alpha.

```text
Source straight RGBA:
(0.90, 0.10, 0.80, 0.50)
```

The straight red field is `0.90`. It does not yet contain multiplication by source alpha `0.50`.

### Premultiplied RGBA

Premultiplied RGBA stores alpha-weighted RGB contributions. Alpha remains unchanged.

```text
Source premultiplied RGB:
(0.90, 0.10, 0.80) × 0.50
= (0.45, 0.05, 0.40)

Source premultiplied RGBA:
(0.45, 0.05, 0.40, 0.50)
```

For the destination:

```text
Destination premultiplied RGB:
(0.10, 0.90, 0.40) × 0.60
= (0.06, 0.54, 0.24)

Destination premultiplied RGBA:
(0.06, 0.54, 0.24, 0.60)
```

The straight and premultiplied tuples are different stored numbers. They describe the same translucent source or destination under different representation contracts.

### The exact relation to Lesson 3.3

```text
Old Lesson 3.3 label:
source contribution

Precise name:
source premultiplied RGB

Course value:
(0.45, 0.05, 0.40)
```

```text
Old Lesson 3.3 label:
destination contribution

Precise name:
destination premultiplied RGB after the source opening

Course value:
(0.03, 0.27, 0.12)
```

```text
Old Lesson 3.3 label:
weighted total

Precise name:
output premultiplied RGB

Course value:
(0.48, 0.32, 0.52)
```

```text
Old Lesson 3.3 label:
ordinary output

Precise name:
output straight RGB

Course value:
(0.60, 0.40, 0.65)
```

Lesson 3.3's `weighted total` was not a complete straight output color. It was the output's alpha-weighted RGB contribution tuple. Dividing that tuple by output alpha produced the output straight RGB.

### General source-over from straight inputs

Straight RGB has not yet been weighted by alpha. The full calculation is:

```text
output premultiplied RGB
=
source straight RGB × source alpha
+
destination straight RGB × destination alpha × (1 − source alpha)
```

```text
output alpha
=
source alpha
+
destination alpha × (1 − source alpha)
```

For the course values:

```text
source opening
= 1 − 0.50
= 0.50
```

```text
source premultiplied RGB
= (0.90, 0.10, 0.80) × 0.50
= (0.45, 0.05, 0.40)
```

```text
destination contribution after source coverage
= (0.10, 0.90, 0.40) × 0.60 × 0.50
= (0.03, 0.27, 0.12)
```

```text
output premultiplied RGB
= (0.45, 0.05, 0.40) + (0.03, 0.27, 0.12)
= (0.48, 0.32, 0.52)
```

```text
output alpha
= 0.50 + 0.60 × 0.50
= 0.80
```

```text
output straight RGB
= (0.48, 0.32, 0.52) ÷ 0.80
= (0.60, 0.40, 0.65)
```

```text
output straight RGBA
= (0.60, 0.40, 0.65, 0.80)
```

### Equivalent source-over from premultiplied inputs

When source and destination RGB are already premultiplied, do not multiply them by their own alpha again.

```text
output premultiplied RGB
=
source premultiplied RGB
+
destination premultiplied RGB × (1 − source alpha)
```

For the course values:

```text
(0.45, 0.05, 0.40)
+
(0.06, 0.54, 0.24) × 0.50
=
(0.48, 0.32, 0.52)
```

Both valid paths produce the same output premultiplied RGB because they describe the same operation with differently represented inputs.

### Opaque destination as a special case

The general straight-input destination term is:

```text
destination straight RGB × destination alpha × (1 − source alpha)
```

Only when:

```text
destination alpha = 1
```

may it simplify to:

```text
destination straight RGB × (1 − source alpha)
```

In that special case, output alpha becomes `1`. Output premultiplied RGB and output straight RGB are then numerically equal because dividing by `1` changes nothing.

### When each representation is used

- Compose `Color(red, green, blue, alpha)` and `Color.compositeOver` use straight, non-premultiplied component values at their public API boundary.
- A premultiplied buffer or premultiplied math function uses premultiplied values only when its contract explicitly says so.
- Android requires an alpha-bearing `Bitmap` drawn by `Canvas` to be premultiplied.
- Course code uses separate `StraightRgba` and `PremultipliedRgba` types. Conversion happens once when crossing the representation boundary.
- A bare `RGB(r, g, b)` label is not enough when alpha matters. The lesson always writes `straight RGB` or `premultiplied RGB`.

### Alpha zero

Many straight RGBA values with alpha zero convert to the same premultiplied value:

```text
Straight RGBA(0.90, 0.10, 0.80, 0.00)
Straight RGBA(0.10, 0.90, 0.40, 0.00)

both become:

Premultiplied RGBA(0.00, 0.00, 0.00, 0.00)
```

The original straight RGB cannot be reconstructed because reverse conversion would require division by zero.

## Current Chapter 3 Android source

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/
├── MainActivity.kt
└── chapter03/
    ├── Chapter03Screen.kt
    ├── RgbChannelsExplorer.kt
    ├── AlphaExplorer.kt
    ├── OverOperationExplorer.kt
    ├── DrawOrderExplorer.kt
    ├── PremultipliedRgbaExplorer.kt
    └── TransparentEdgeExplorer.kt  # old compatibility wrapper may still exist locally
```

### Changed Android files in the current replacement

```text
app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter03/PremultipliedRgbaExplorer.kt
app/src/main/java/com/example/liquidglasslab/chapter03/OverOperationExplorer.kt
```

`OverOperationExplorer.kt` changes because Lesson 3.3's ambiguous visible labels are corrected to `output premultiplied RGB` and `output straight RGB`.

## Lesson 3.5 checkpoint

- [ ] Apply both current Lesson 3.5 replacement ZIPs.
- [ ] Build and open Lesson 3.5 on the Pixel 8 Pro.
- [ ] Explain what straight RGBA stores.
- [ ] Explain what premultiplied RGBA stores.
- [ ] Explain why a bare RGB tuple does not identify the representation.
- [ ] Map Lesson 3.3's `weighted total` to `output premultiplied RGB`.
- [ ] Map Lesson 3.3's `ordinary output` to `output straight RGB`.
- [ ] Write the general straight-input destination term with destination alpha.
- [ ] Explain why the shorter destination formula is valid only when destination alpha is `1`.
- [ ] Explain when Compose expects straight values.
- [ ] Explain when a premultiplied buffer expects premultiplied values.
- [ ] Explain why straight → premultiplied multiplies.
- [ ] Explain why premultiplied → straight divides when alpha is greater than zero.
- [ ] Verify OS light and dark modes without changing instructional values.
- [ ] Complete the coding challenge and four exercises.
- [ ] Commit the work.

After completion:

```text
Course progress: 22 of 216 lessons completed.
Next lesson: 3.6 — Brightness and luminance.
```

## Reusable continuation prompt

```text
We are continuing my Liquid Glass on Android beginner-to-expert course.

Read liquid_glass_android_curriculum.md, liquid_glass_android_handoff.md, and AGENTS.md first.

Assume I am an absolute beginner in mathematics and graphics. Use simple English and baby-step pacing. Define every term before using it. Trace exact values through input, operation, intermediate values, and output.

For Chapter 3 and every later color-compositing lesson:
- use straight RGBA and premultiplied RGBA as the representation names;
- never leave a bare RGB tuple unlabeled when alpha matters;
- teach the general source-over formula with destination alpha before an opaque-destination shortcut;
- use output premultiplied RGB and output straight RGB as the precise Lesson 3.3 terms;
- explain which API or buffer contract expects each representation;
- reconcile every new term with the preceding lesson.

Do not introduce an intermediate graphics value until you have named the actual operation that creates it, its complete inputs and outputs, and why it runs. If a prerequisite operation has not been taught, split or defer the dependent topic.

Use standalone interactive HTML and Kotlin/Jetpack Compose. Starting with Lesson 3.1, support the OS light or dark theme automatically while keeping instructional color data exact.

Deliver only incremental ZIPs containing changed files.

Count only learner-confirmed completion. End every response with course progress and an approximate remaining-context estimate.

LATEST HANDOFF:
[paste this file]

CURRENT CODE, SCREENSHOT, OBSERVATION, OR ERROR:
[paste here]
```
