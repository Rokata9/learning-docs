# Liquid Glass on Android — Conversation Handoff

**Course plan version:** 4.8.3  
**Updated:** 2026-08-02  
**Current position:** Lessons 1.1 through 4.7 are complete by learner confirmation. **35 of 216 lessons are complete.** Chapters 1, 2, and 3 are complete. Chapter 4 is in progress. Lesson 4.8 is generated and is both the next unresolved checkpoint and the generated frontier.

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
- Do not explicitly import `androidx.compose.foundation.layout.weight` or `androidx.compose.foundation.layout.matchParentSize`. Use those member extensions only through the corresponding layout scope.
- Put a full chapter-screen preview and a direct active-child preview in the chapter screen file. For Lesson 3.1 and later, provide light and dark variants for both.
- Lessons 3.1 and later follow the operating-system light or dark theme. Instructional color data remains unchanged across themes.
- Count only learner-confirmed lesson completion.
- A request to proceed does not confirm completion when the learner explicitly says questions or corrections remain. Keep the unresolved checkpoint and generated frontier separate.
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

## Beginner-comprehension gate added after the rejected Lesson 3.6 draft

The rejected first Lesson 3.6 used an **expert-backfill** pattern: it began with the completed relative-luminance pipeline and formula, then added labels such as `encoded`, `linear light`, `transfer function`, and `coefficient` as if the labels supplied the missing causal explanation.

This pattern is now prohibited.

For every new beginner lesson:

1. The first learner-facing sentence starts from a concrete object already taught, or defines every new term immediately. It must not begin with revision history, an unexplained “failure,” or an undefined pipeline.
2. Before writing prose, build a prerequisite ledger for every new noun, acronym, symbol, constant, representation, and operation. Each item must point to an earlier completed lesson or an earlier defining paragraph in the current lesson.
3. The practical question appears before new vocabulary.
4. A formula appears only after its input object, input meaning, output meaning, purpose, and next consumer are clear.
5. A three-channel calculation first traces one channel through every arithmetic step.
6. Standard constants are identified as fixed standard values. Their role is explained. The course does not pretend to derive untaught color-space mathematics.
7. The first two sections and first formula receive a cold-read audit. Every noun, number, and arrow must answer: what is it, where did it come from, why does it exist, and what consumes it next?
8. Correct code, working controls, screenshots, and ZIP integrity do not compensate for an explanation that fails this audit.
9. **VERY IMPORTANT:** perform the final audit while assuming no graphics or mathematics knowledge beyond completed lessons. Any hesitation means the lesson fails and must be rewritten or split before delivery.

## Mandatory lesson-feedback review

After every learner message about a lesson, always inspect the message for reusable evidence.

- A question, clarification, defect, or regeneration request may reveal missing prerequisites, ambiguous representations, bad ordering, or a weak verification check. Record a reusable prevention rule in `AGENTS.md` and this handoff when one exists.
- A clean lesson completion may reveal a teaching order or visual approach that succeeded. Record and reuse it only when it generalizes.
- The review is mandatory even when no new rule is recorded. Do not add one-off policy merely to prove the review happened.

## Successful formula-lesson sequence confirmed by Lesson 3.6

Reuse this order for later standardized formulas:

- start from the exact output object of the completed lesson;
- state the practical question before new terminology;
- define the formula inputs and output before symbols;
- trace one input fully before repeating the operation;
- explain each fixed constant's immediate role and defer deeper derivation honestly;
- pair isolation examples with a fixed mixed-value example;
- reconnect alpha and compositing before measuring a final displayed color;
- identify which later operation consumes the new result.

The learner's clean progression after the final Lesson 3.6 clarification is evidence that this order succeeded.

## Lesson 3.6 alpha-to-luminance clarification

- Relative luminance has red, green, and blue terms only. Alpha is not a fourth term.
- Alpha acts earlier in source-over. It changes the output RGB.
- If source-over produces output alpha below `1`, continue compositing over lower layers until an opaque displayed RGB is known.
- The Lesson 3.6 Android order is `source.compositeOver(destination)` followed by `visibleOutput.luminance()`.
- Do not say `precomputed RGB` without naming whether the tuple is straight sRGB, premultiplied RGB, decoded linear-light RGB, or output straight RGB.
- Pure-primary examples with two zero channels are isolation tests. They must be labelled as such and paired with a mixed all-non-zero example. Lesson 3.6 now includes fixed `Mixed check` sRGB `(0.37, 0.58, 0.21)`.

## Color-transform versus color-measurement gate

- Name whether an operation transforms, measures, composites, or classifies color data before showing coefficients.
- State the RGB representation consumed and the output type produced.
- When a transform formula resembles an earlier measurement formula, compare preprocessing, coefficients, output type, and next consumer side by side.
- Define the exact saturation contract. Do not silently exchange AndroidX ColorMatrix saturation with HSL, HSV, or another tool.
- Prove factor regions with gray reference, signed distance, scaled distance, pre-clamp matrix result, and clamping.
- Recalculate luminance and contrast after a transform changes RGB.

## Lesson 3.7 — Foreground contrast

- Starts from the completed Lesson 3.6 background: straight sRGB RGBA `(0.80, 0.25, 0.60, 1.00)`, relative luminance near `0.187759`.
- Defines foreground and candidate before contrast terminology.
- Defines both relative-luminance inputs and the unitless ratio output before revealing the formula.
- Uses `(lighter + 0.05) / (darker + 0.05)`. The `0.05` value is fixed by the standard and keeps the denominator above zero for black.
- Black contrast is near `4.7552:1`. White contrast is near `4.4162:1`. Black is selected because its ratio is larger.
- Candidate selection and accessibility target checking remain separate. The lesson displays `3:1` for meaningful non-text icon context and `4.5:1` for normal-size text context.
- A 50% black icon is composited over the background before luminance and contrast are calculated.
- Varying photographs, gradients, and moving backdrops are explicitly deferred until backdrop access and image sampling are taught.
- Android changes: `Chapter03Screen.kt` and new `ForegroundContrastExplorer.kt`. Both chapter and child previews have light and dark variants.


## Lesson 3.8 — Tint

- Starts from the completed opaque background straight sRGB RGBA `(0.80, 0.25, 0.60, 1.00)`.
- Defines one explicit tint model: draw a chosen straight sRGB tint source over the destination with source-over.
- Default tint source is straight sRGB RGBA `(0.20, 0.65, 1.00, 0.25)`.
- Traces red completely through output premultiplied red, output alpha, and output straight red before repeating green and blue.
- Default output is straight sRGB RGBA `(0.65, 0.35, 0.70, 1.00)`.
- Tint amount is the tint source alpha for this operation. It is not the final output opacity.
- The opaque destination makes output alpha remain `1.00`.
- Luminance and black/white contrast are recalculated from the tinted output.
- Android changes: `Chapter03Screen.kt` and new `TintExplorer.kt`, with chapter and child previews in light and dark modes.
- Lesson 3.9 remains Saturation.

## Lesson 3.8 clarification — directional proof and derived measurements

Learner feedback confirmed that the tint concept was clear but exposed two reusable gaps:

1. The phrase `channels move toward the tint` must be proved, not merely asserted. Lesson 3.8 now uses:

```text
output = base + amount × (tint − base)
```

For the default values:

```text
Red:   gap = 0.20 − 0.80 = −0.60; change = 0.25 × −0.60 = −0.15; output = 0.65.
Green: gap = 0.65 − 0.25 = +0.40; change = 0.25 × +0.40 = +0.10; output = 0.35.
Blue:  gap = 1.00 − 0.60 = +0.40; change = 0.25 × +0.40 = +0.10; output = 0.70.
```

The browser and Android lesson now update these values live.

2. `Do not reuse the untinted luminance` now means: the old luminance remains valid for the old base RGB, but it must not be attached to the new tinted RGB. Relative luminance is derived from one exact RGB triplet. The default values are:

```text
base RGB (0.80, 0.25, 0.60)
→ base luminance ≈ 0.187759

tinted output RGB (0.65, 0.35, 0.70)
→ output luminance ≈ 0.185009
```

The lesson now shows the stale path and the correct recomputation path side by side. At tint amount `0`, the two measurements agree because the RGB input did not change.

Reusable prevention rules were added to `AGENTS.md` under `Qualitative-claim proof and derived-value dependency gate`.

Lesson 3.8 is complete by learner progression. Course progress is 25 of 216.


## Lesson 3.9 — Saturation

- Starts from the completed Lesson 3.8 output: straight sRGB RGBA `(0.65, 0.35, 0.70, 1.00)`.
- Defines saturation as the exact factor accepted by AndroidX `ColorMatrix.setToSaturation`. It does not equate this operation with HSL, HSV, or every design tool named saturation.
- Calculates the gray reference directly from stored sRGB channels: `0.213R + 0.715G + 0.072B = 0.43910` for the course input.
- Calculates each channel with `gray + factor × (input − gray)`.
- At factor `0.40`, the output is approximately straight sRGB RGBA `(0.52346, 0.40346, 0.54346, 1.00)`.
- Proves factor regions through signed distances: `0` makes gray, values below `1` reduce distances, `1` is identity, values above `1` enlarge distances, and large factors can require clamping.
- Separates the saturation gray reference from relative luminance. The gray reference consumes stored straight sRGB directly and produces one transform value. Relative luminance decodes sRGB into linear light and produces one measurement.
- Recalculates output luminance and black/white contrast after RGB changes.
- Leaves alpha unchanged. A future transformed source with alpha below `1` still requires source-over compositing over its actual destination before visible-output luminance or contrast is known.
- Android changes: `Chapter03Screen.kt` and new `SaturationExplorer.kt`, with chapter and child previews in light and dark modes.
- Lesson 3.10 remains Blend modes.

## Color-transform versus color-measurement rule from Lesson 3.9

When two formulas use similar RGB coefficients, compare their complete contracts instead of comparing only the numbers:

```text
operation purpose
→ input representation
→ preprocessing
→ coefficients
→ output type
→ next consumer
```

A color transform outputs another color or channel value. A color measurement outputs a scalar. Do not reuse one as the other. For saturation factors, prove every qualitative label with the gray reference, signed channel distance, scaled distance, pre-clamp matrix result, and clamping.

## Current progress

```yaml
course: Liquid Glass on Android
course_version: 4.2.0
platform: Kotlin + Jetpack Compose
learning_device: Pixel 8 Pro
learning_min_sdk: 33
course_lessons_total: 216
course_lessons_completed_by_learner: 29
completed_through: 4.1
generated_frontier: 4.2
next_learner_checkpoint: 4.2
chapter_01_completed_by_learner: true
chapter_02_completed_by_learner: true
chapter_03_completed_by_learner: true
chapter_04_completed_by_learner: false
lesson_03_11_completed_by_learner: true
lesson_04_01_file: course/chapters/chapter-04/lesson-04-01-rectangles-and-circles.html
lesson_04_01_generated: true
lesson_04_01_completed_by_learner: true
lesson_04_01_completion_basis: learner explicitly requested that the prior pending work be marked complete and asked to continue
lesson_04_02_file: course/chapters/chapter-04/lesson-04-02-rounded-rectangles.html
lesson_04_02_generated: true
lesson_04_02_completed_by_learner: false
lesson_04_02_android_source_changed: true
invalid_scope_extension_imports_fixed: true
chapter_and_child_preview_rule_recorded: true
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

## Lesson 3.6 — From a visible color to relative luminance

### Status

The earlier 3.6 draft is rejected. It is not a valid learner checkpoint. The replacement keeps the same lesson number and file path, but rebuilds the explanation from first principles.

### First concrete object

```text
Color(
    red = 0.80,
    green = 0.25,
    blue = 0.60,
    alpha = 1.00,
)
```

The object draws one uniform opaque color. Because alpha is `1.00`, the color completely covers its destination. The main calculation therefore begins with the final visible RGB. No photograph, shader, texture, screen sample, or hidden destination is involved.

### New question

How can the program turn this one final visible color into one number that later contrast calculations can consume?

The answer is **relative luminance**:

- one unitless software number;
- `0` for sRGB reference black;
- `1` for sRGB reference white;
- not a color;
- not alpha;
- not the Android brightness setting;
- not a physical light measurement in nits.

### First operation: decode one sRGB channel

An **sRGB channel code value** is the red, green, or blue number held by the `Color` object. It is a standardized code value. It is not proportional to modeled light.

A **linear-light channel value** is the output of sRGB decoding. Its numerical size is proportional to the modeled contribution of that channel. Doubling it means doubling that modeled contribution.

The lesson follows one channel before all three. For sRGB code value `0.50`:

```text
0.50 > 0.04045

((0.50 + 0.055) ÷ 1.055) raised to 2.4
= (0.555 ÷ 1.055) raised to 2.4
≈ 0.526066 raised to 2.4
≈ 0.214041
```

A piecewise formula contains multiple cases, but one input chooses only one case. The constants `0.04045`, `12.92`, `0.055`, `1.055`, and `2.4` are fixed by the sRGB standard. They are not calculated from the current color and are not reported by the Pixel 8 Pro.

### Repeat for the course color

```text
sRGB channel code values:
red   = 0.80
green = 0.25
blue  = 0.60

linear-light channel values:
red   ≈ 0.603827
green ≈ 0.050876
blue  ≈ 0.318547
```

These three outputs form one linear-light RGB triplet. Relative luminance has not been calculated yet.

### Second operation: calculate relative luminance

A **coefficient** is a fixed multiplier. The standard sRGB relative-luminance coefficients are:

```text
red   0.2126
green 0.7152
blue  0.0722
```

They come from the standardized conversion from linear sRGB to the XYZ color-measurement model. The course does not derive that matrix yet. Their immediate properties are taught explicitly: they are fixed, unequal, positive, and sum to `1.0000`.

```text
red contribution
= 0.2126 × 0.603827
≈ 0.128374

green contribution
= 0.7152 × 0.050876
≈ 0.036389

blue contribution
= 0.0722 × 0.318547
≈ 0.022996

relative luminance
= 0.128374 + 0.036389 + 0.022996
≈ 0.187759
```

The result means that the color's relative luminance is approximately `0.187759` when reference black is `0` and reference white is `1`. It does not mean the display brightness is `18.7759%` or that a human sees exactly that percentage of apparent brightness.

### Alpha and destination rule

The main input is opaque. When source alpha is below `1`, the source RGB is not the final visible color.

Use this order:

```text
translucent source
→ source-over with the actual destination
→ final visible opaque straight sRGB color
→ sRGB decoding
→ relative luminance
```

For the same source RGB at alpha `0.50`:

```text
over opaque white:
visible straight RGB = (0.9000, 0.6250, 0.8000)
relative luminance ≈ 0.460255

over opaque navy:
visible straight RGB = (0.4250, 0.1700, 0.3800)
relative luminance ≈ 0.058262
```

The source and source alpha are the same. The destination changes the final visible RGB, so the relative luminance also changes.

### Replacement Android files

```text
app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter03/BrightnessLuminanceExplorer.kt
```

The child explorer now follows the same teaching order as the HTML:

1. known opaque `Color` object;
2. one selected sRGB channel;
3. exact branch and arithmetic;
4. all three decoded channels;
5. three luminance contributions;
6. final relative-luminance result;
7. translucent-source destination comparison.

The chapter file includes both complete-screen and direct-child previews in light and dark modes.

## Lesson 3.6 checkpoint

- [ ] Apply both replacement ZIPs over the current Lesson 3.6 state.
- [ ] Build and open Lesson 3.6 on the Pixel 8 Pro.
- [ ] Confirm that both full-screen and direct-child previews render in light and dark modes.
- [ ] Define an sRGB channel code value without calling it a light fraction.
- [ ] Define a linear-light channel value and explain why decoding is needed.
- [ ] Select the correct formula branch for `0.50` and `0.02`.
- [ ] Explain the role of every sRGB constant shown in the lesson.
- [ ] Trace the course color through all three decoded channels.
- [ ] Explain what the three coefficients are and why their sum is `1`.
- [ ] Interpret `0.187759` without calling it a color, alpha, brightness setting, or physical measurement.
- [ ] Explain why a translucent source must be composited over the actual destination before visible-output luminance is calculated.
- [ ] Complete the coding challenge and four exercises.
- [ ] Commit the work.

After completion:

```text
Course progress: 23 of 216 lessons completed.
Next lesson: 3.7 — Foreground contrast.
```


## Lesson 3.10 generated-ahead state

Lesson 3.10 is generated, but Lesson 3.9 remains incomplete because the learner explicitly reserved questions about it.

```yaml
learner_confirmed_completed_total: 25
completed_through: "Lesson 3.8"
lesson_03_09_generated: true
lesson_03_09_completed_by_learner: false
lesson_03_09_status: "questions pending"
lesson_03_10_generated: true
lesson_03_10_completed_by_learner: false
lesson_03_10_status: "generated ahead"
next_unresolved_checkpoint: "Lesson 3.9"
generated_frontier: "Lesson 3.10"
```

Do not increase the completed total merely because Lesson 3.10 was requested or generated.

### Lesson 3.10 model

The lesson keeps these inputs fixed:

```text
Source straight sRGB RGBA:
(0.84, 0.36, 0.18, 1.00)

Destination straight sRGB RGBA:
(0.22, 0.58, 0.76, 1.00)

Draw order:
destination first, source circle second
```

Only the blend mode changes.

The opaque solid-interior outputs are:

```text
Normal / SrcOver:
(0.8400, 0.3600, 0.1800)

Multiply:
(0.1848, 0.2088, 0.1368)

Screen:
(0.8752, 0.7312, 0.8032)

Plus pre-clamp:
(1.0600, 0.9400, 0.9400)

Plus displayed after clamping:
(1.0000, 0.9400, 0.9400)
```

The exact opaque-input channel rules are:

```text
Normal:
output = source

Multiply:
output = source × destination

Screen:
output = 1 − (1 − source) × (1 − destination)
       = source + destination − source × destination

Plus:
pre-clamp output = source + destination
displayed output = clamp(pre-clamp output, 0, 1)
```

The lesson explicitly does not generalize these short formulas to alpha below `1`. Translucent blend-mode compositing requires source coverage, destination coverage, output alpha, and the blend function. That larger calculation is deferred.

### Android files

```text
app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter03/BlendModesExplorer.kt
```

`Chapter03Screen.kt` contains full-screen and direct-child previews in light and dark modes.


## Reusable continuation prompt

```text
We are continuing my Liquid Glass on Android beginner-to-expert course.

Read liquid_glass_android_curriculum.md, liquid_glass_android_handoff.md, and AGENTS.md first.

Assume I am an absolute beginner in mathematics and graphics. Use simple English and baby-step pacing. Define every term before using it. Trace exact values through input, operation, intermediate values, and output.

Before writing a formula, start from an object already taught, state the practical question, define the formula input and output, and trace one value through every operation. Audit the first two sections as a cold read. A first sentence containing an undefined essential term is a failed lesson.

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

Do not explicitly import `androidx.compose.foundation.layout.weight` or `androidx.compose.foundation.layout.matchParentSize`; use them only through their layout scope. Put both a full chapter-screen preview and a direct child preview in the chapter screen file, with light and dark variants for Lesson 3.1 and later.

Count only learner-confirmed completion. A request to proceed does not mark a lesson complete when the learner explicitly says questions or corrections remain. Track the next unresolved checkpoint separately from the generated frontier. End every response with course progress and an approximate remaining-context estimate.

LATEST HANDOFF:
[paste this file]

CURRENT CODE, SCREENSHOT, OBSERVATION, OR ERROR:
[paste here]
```


## Lesson 3.9 clarification — pending learner review

The revised Lesson 3.9 now defines and demonstrates:

- pre-clamp matrix results versus final clamped channels;
- all five ColorMatrix row terms, including the constant offset;
- why `setToSaturation` preserves alpha with `[0, 0, 0, 1, 0]`;
- which matrix values vary with the factor and which are fixed by this operation;
- saturation of a translucent source followed by source-over compositing;
- contrast repair options and their relevance to later Liquid Glass material stabilization;
- clickable value-provenance controls.

Complete Android source-file viewers were removed from Lessons 3.9 and 3.10. Future lessons include only short explanatory excerpts and coding challenges; complete code remains in Android Studio and the incremental Android ZIP.

Lesson 3.9 is still not learner-complete. Lesson 3.10 remains generated ahead. Learner-confirmed progress remains 25 of 216.

## Lesson 3.10 clarification — formula scope and stepper layout

The learner asked what `The short RGB formulas are exact for that controlled case` meant. The lesson now lists the exact conditions instead of using the vague label:

```text
inspected position is fully inside the source shape
source coverage = 100%
source alpha = 1.00
destination alpha = 1.00
destination drawn first
source drawn second
```

It also substitutes the two opaque alpha values into Android's general Multiply equation and shows why the extra contribution terms become zero. If alpha drops below `1` or boundary coverage becomes partial, the short opaque formula is incomplete.

The manual stepper was also revised. At `1920×1080`, the compact SVG stays beside the step card instead of occupying nearly the full viewport height. The SVG has a fixed maximum width, and Step 5's Screen calculation is split across four explicit lines.

`AGENTS.md` now requires explicit formula-validity contracts and longest-step viewport QA for all future steppers. Lesson 3.9 remains the unresolved learner checkpoint. Lesson 3.10 remains generated ahead. Progress remains 25 of 216.

## Historical status — Lessons 3.9 and 3.10 completed; Lesson 3.11 generated

The learner explicitly confirmed both pending lessons complete on 2026-07-28.

```yaml
learner_confirmed_completed_total: 27
completed_through: "Lesson 3.10"
lesson_03_09_completed_by_learner: true
lesson_03_10_completed_by_learner: true
lesson_03_11_generated: true
lesson_03_11_completed_by_learner: false
next_unresolved_checkpoint: "Lesson 3.11"
generated_frontier: "Lesson 3.11"
next_after_completion: "Lesson 4.1 — Rectangles and circles"
```

### Lesson-feedback review

The clean completion of Lessons 3.9 and 3.10 reinforces two existing reusable rules:

- recurring values need explicit provenance;
- simplified formulas need a complete validity contract and one general-to-short reduction.

Both rules already exist in `AGENTS.md`. No duplicate policy was added.

## Lesson 3.11 — Compositing laboratory

### New integration idea

A **running composite** is the current straight RGBA result after every completed stage. Each later draw consumes that result as its destination. A bypassed stage returns its input unchanged.

The lesson adds no new color formula. It combines completed Chapter 3 operations in this order:

1. opaque base;
2. first adjustable translucent source-over layer;
3. second adjustable translucent source-over layer;
4. optional AndroidX saturation transform of the complete middle-layer result;
5. optional opaque top layer using Normal, Multiply, Screen, or Plus;
6. relative-luminance and foreground-contrast calculations from the final output.

### Default stack

```text
Opaque base:
straight sRGB RGBA(0.22, 0.58, 0.76, 1.00)

Layer A:
straight sRGB RGBA(0.90, 0.10, 0.80, 0.50)
source-over

Layer B:
straight sRGB RGBA(0.20, 0.65, 1.00, 0.25)
source-over

Saturation:
factor 0.40 applied to the complete middle-layer output

Opaque top source:
straight sRGB RGBA(0.84, 0.36, 0.18, 1.00)
Multiply
```

Default running outputs:

```text
base
= (0.220000, 0.580000, 0.760000, 1.000000)

after Layer A
= (0.560000, 0.340000, 0.780000, 1.000000)

after Layer B
= (0.470000, 0.417500, 0.835000, 1.000000)

after saturation factor 0.40
= (0.463246, 0.442245, 0.609246, 1.000000)

after opaque Multiply top layer
= (0.389126, 0.159208, 0.109664, 1.000000)
```

The final relative luminance is approximately `0.043074`. Black contrast is approximately `1.8615:1`. White contrast is approximately `11.2814:1`.

### Exact formula boundary

- The inspected position is fully inside every enabled shape.
- The base alpha is `1.00`.
- The middle sources may be translucent and use the complete source-over formula.
- Every middle output remains opaque because the destination below it is opaque.
- The top source alpha is `1.00`.
- The running destination alpha is `1.00` before the top blend.
- The opaque top source is drawn second at `100%` position coverage.

These conditions make the Lesson 3.10 short top-blend formulas complete at the inspected position. The lesson does not extend those formulas to translucent top sources or partial edge coverage.

### Interactive controls

- opaque base presets: Course blue, Navy, Pale;
- Layer A enable and alpha;
- Layer B enable and alpha;
- A-then-B versus B-then-A draw order;
- saturation enable and factor;
- opaque top enable and blend mode;
- complete bypass and reset controls;
- stage-by-stage swatches;
- one red-channel manual stepper;
- dynamic Multiply-versus-Screen prediction;
- final luminance and contrast;
- value-provenance controls;
- coding challenge that replaces accidental reuse of the original base with the current running destination.

### Android files

```text
app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter03/CompositingLaboratory.kt
```

`Chapter03Screen.kt` includes full-screen and direct-child previews in light and dark modes.

### Evidence boundary

The browser and Kotlin teaching functions calculate uniform colors at one fully covered position. The Android Canvas comparison executes the selected final `BlendMode` over a uniform calculated destination. The lesson does not perform pixel readback and does not claim to model a photograph, moving backdrop, partial shape edge, blur, refraction, or translucent top blend.

### Lesson 3.11 checkpoint

Lesson 3.11 is complete only when:

- [ ] The incremental learning-docs and Android ZIPs were applied.
- [ ] The Android project builds and opens Lesson 3.11 on the Pixel 8 Pro.
- [ ] Full-screen and direct-child previews render in light and dark modes.
- [ ] The learner can define the running composite.
- [ ] The learner can reproduce default Layer A red `0.56`.
- [ ] The learner can reproduce default Layer B red `0.47` using the Layer A output as destination.
- [ ] The learner can explain why reversing Layer A and Layer B changes the result.
- [ ] The learner can identify the exact input consumed by the saturation stage.
- [ ] The learner can list every condition that makes the opaque top-blend shortcut complete.
- [ ] The learner recalculates luminance and contrast from the final output.
- [ ] The prediction, coding challenge, and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 28 of 216.
Chapter 3 becomes complete.
Next lesson becomes 4.1 — Rectangles and circles.
```



---

## Latest authoritative status — Chapter 3 complete; Lesson 4.1 generated

The learner requested the next lesson after Lesson 3.11 without reporting a remaining question, correction, or test problem. Under the existing completion gate, Lesson 3.11 is now learner-confirmed complete.

```yaml
learner_confirmed_completed_total: 28
completed_through: "Lesson 3.11"
chapter_03_completed_by_learner: true
lesson_04_01_generated: true
lesson_04_01_completed_by_learner: false
next_unresolved_checkpoint: "Lesson 4.1"
generated_frontier: "Lesson 4.1"
next_after_completion: "Lesson 4.2 — Rounded rectangles"
```

### Lesson 4.1 — Rectangles and circles

The lesson starts from the completed Lesson 2.4 rectangle model. It adds one new shape contract:

```text
Rectangle:
left + top + width + height as inputs
→ derive right and bottom
→ four straight boundary coordinates

Circle:
center X + center Y + radius
→ diameter and four extreme positions
→ one curved boundary
```

The reset browser values are:

```text
Rectangle:
left 80, top 70, width 240, height 150
right 320, bottom 220

Circle:
center (520, 145), radius 75, diameter 150
leftmost 445, rightmost 595, topmost 70, bottommost 220
```

The circle's enclosing square is shown as construction geometry. It has side length equal to the circle diameter, but it is not the circle. Its corner regions lie outside the circle.

The radius handle in the browser moves horizontally only. This avoids requiring the untaught distance formula between two arbitrary points. The full point-to-point distance formula remains deferred until Chapter 9.

### Android value path

```text
fixed dp geometry and three dimension controls
→ dp converted to Canvas-local px inside DrawScope
→ drawRect(topLeft, size)
→ drawCircle(center, radius)
→ optional separate drawRect for the circle's enclosing square
→ onSizeChanged reports the measured Canvas px dimensions
```

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/MainActivity.kt
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/RectanglesCirclesExplorer.kt
```

`Chapter04Screen.kt` contains full-screen and direct-child previews in light and dark modes. The lesson does not add rounded corners, capsules, paths, clipping, masks, antialiasing theory, or physical-pixel coverage claims.

### Lesson-feedback review

The clean progression from Lesson 3.11 confirms completion, but it does not reveal a new reusable lesson-quality rule beyond the existing prerequisite, explicit-intermediate, and formula-boundary gates. No duplicate `AGENTS.md` policy was added.

---

## Latest authoritative status — Lesson 4.1 complete; Lesson 4.2 generated

The learner explicitly asked to continue and to mark the prior pending work complete. The prior unresolved checkpoint was Lesson 4.1, so Lesson 4.1 is now learner-confirmed complete. This does not close Chapter 4 because Lessons 4.2 through 4.11 remain incomplete.

```yaml
learner_confirmed_completed_total: 29
completed_through: "Lesson 4.1"
chapter_04_completed_by_learner: false
lesson_04_01_completed_by_learner: true
lesson_04_02_generated: true
lesson_04_02_completed_by_learner: false
next_unresolved_checkpoint: "Lesson 4.2"
generated_frontier: "Lesson 4.2"
next_after_completion: "Lesson 4.3 — Capsules"
```

### Lesson 4.2 — Rounded rectangles

The lesson keeps one known rectangle bounds object fixed:

```text
left = 120
top = 80
width = 520
height = 260
right = 640
bottom = 340
```

It adds one uniform corner-radius input. At the reset radius `50`, the top-left corner is derived as:

```text
sharp corner = (120, 80)
curve center = (120 + 50, 80 + 50) = (170, 130)
top join = (170, 80)
left join = (120, 130)
```

A **join point** is the exact position where a straight rectangle edge ends and the corner arc begins. An **arc** is one connected piece of a circle boundary. In this controlled lesson, each corner uses one quarter-circle arc because the horizontal and vertical corner radii are equal.

The remaining straight spans are:

```text
top straight length = width - radius - radius
                    = 520 - 50 - 50
                    = 420

side straight length = height - radius - radius
                     = 260 - 50 - 50
                     = 160
```

The maximum controlled browser radius is `130`, which is half of the shorter rectangle side. At that value, the left and right straight spans become zero. Lesson 4.3 names and studies that special boundary shape.

### Interactive lesson model

The standalone browser lesson includes:

- a fixed rectangle bounds object;
- a radius slider from `0` through `130`;
- exact presets at `0`, `20`, `50`, `90`, and `130`;
- a horizontally constrained radius handle;
- the original sharp rectangle as optional construction evidence;
- the top-left construction square and full construction circle;
- all four curve centers;
- top-left top and left join points;
- live top and side straight-span calculations;
- an eight-step manual derivation;
- a radius-change prediction;
- a coding challenge that repairs `width - radius` to subtract the radius at both ends;
- four exercises and a copyable completion record.

### Android value path

The Android explorer uses these controlled dp values:

```text
drawing surface = 320.dp × 240.dp
rectangle left = 24.dp
rectangle top = 36.dp
rectangle width = 272.dp
rectangle height = 168.dp
initial corner radius = 32.dp
maximum corner radius = 84.dp
```

The value path is:

```text
cornerRadiusDp state
→ RoundedCornerShape(cornerRadiusDp.dp) for a Surface
→ cornerRadiusDp.dp.toPx() inside DrawScope
→ CornerRadius(radiusPx, radiusPx)
→ drawRoundRect(topLeft, size, cornerRadius)
→ separate construction circles, radius lines, centers, and join points
```

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/RoundedRectanglesExplorer.kt
```

`Chapter04Screen.kt` contains full-screen and direct-child previews in light and dark modes. `MainActivity.kt` remains unchanged because it already opens Chapter 4.

### Explicit deferrals

Lesson 4.2 does not teach:

- the capsule contract beyond naming it as the next lesson;
- different horizontal and vertical radii for one corner;
- different radius values at individual corners;
- paths, meaning boundaries built from connected drawing segments;
- clipping, meaning restricting drawing to a shape, or masks, meaning separate values that control visibility;
- antialiasing, meaning the renderer's softened transition along a mathematical boundary, or physical-pixel coverage.

### Lesson-feedback review

The learner's explicit completion wording resolves the previous checkpoint. It does not reveal a new reusable explanation or verification rule. No new `AGENTS.md` policy was added.

### Lesson 4.2 checkpoint

Lesson 4.2 is complete only when:

- [ ] The incremental learning-docs and Android ZIPs were applied.
- [ ] The Android project builds and opens Lesson 4.2 on the Pixel 8 Pro.
- [ ] Full-screen and direct-child previews render in light and dark modes.
- [ ] The learner can explain why the outer bounds remain fixed.
- [ ] The learner can calculate one corner curve center.
- [ ] The learner can calculate the two join points for one corner.
- [ ] The learner can calculate the remaining top and side straight spans.
- [ ] The learner can explain why the controlled maximum is half the shorter side.
- [ ] The prediction, coding challenge, and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 30 of 216.
Next lesson becomes 4.3 — Capsules.
```

---

## Latest authoritative correction — Lesson 4.2 interactive geometry

The learner reported that the Lesson 4.2 interactive explanation had overlapping text and was probably too large. Lesson 4.2 remains incomplete. Learner-confirmed progress remains **29 of 216**.

```yaml
learner_confirmed_completed_total: 29
completed_through: "Lesson 4.1"
lesson_04_02_generated: true
lesson_04_02_completed_by_learner: false
lesson_04_02_visual_correction_applied: true
next_unresolved_checkpoint: "Lesson 4.2"
generated_frontier: "Lesson 4.2"
next_after_completion: "Lesson 4.3 — Capsules"
```

### Defect in the first interaction

At the required `1920×1080` viewport, the responsive rule stacked the SVG above the controls even though both could fit side by side. The SVG expanded to roughly `1750 × 839` CSS pixels. Its left margin simultaneously carried:

- the fixed-height dimension label;
- the changing side-straight label;
- the left-join coordinate label;
- arrowheads and the rounded-rectangle boundary.

Those independent labels overlapped. The oversized SVG also forced the learner to scan and scroll more than the geometry required.

### Corrected interaction

The revised Lesson 4.2:

- uses a centered two-column laboratory at the 1920-pixel desktop target;
- caps the geometry at `820 × 430` CSS pixels at both 1920 and 5120 widths;
- keeps fixed width and fixed height in separate top and left lanes;
- uses short `C`, `T`, and `L` markers inside the geometry;
- places the complete live curve-center, top-join, left-join, and straight-span values in adjacent readout cards;
- highlights the actual remaining straight boundary in pink instead of drawing competing labelled arrows;
- hides point letters for very small radii, where the three correct points are physically close together;
- preserves the same slider, presets, drag handle, construction toggles, formulas, and teaching coordinates.

### Verification

The corrected interactive section measures approximately `882` CSS pixels high at `1920×1080`, compared with approximately `1631` CSS pixels before the correction. The SVG is `820 × 430` CSS pixels instead of approximately `1750 × 839`.

The interaction was checked in light and dark themes at `1920×1080` and `5120×1440`. Radius values `0`, `1`, `20`, `29`, `30`, `50`, `90`, and `130` were checked with all construction toggles enabled. No SVG text pairs overlapped, no SVG text was clipped, no horizontal page overflow appeared, and no JavaScript or browser-console error was produced.

### Reusable rule

`AGENTS.md` now contains an **Interactive geometry footprint and label-separation gate**. A free-play geometry diagram must cap growth that adds no information, preserve a sensible side-by-side desktop layout when it fits, reserve independent label lanes, move complete values to synchronized external readouts when necessary, and verify dense plus boundary states for overlap and clipping.

---

## Latest authoritative status — Lesson 4.2 complete; Lesson 4.3 generated

The learner explicitly confirmed Lesson 4.2 complete after reviewing the compact visual correction and requested the next lesson. Lesson 4.2 is therefore learner-confirmed complete. The correction's clean acceptance reinforces the existing interactive-geometry footprint and label-separation gate. It does not reveal a new reusable rule, so `AGENTS.md` is unchanged.

```yaml
learner_confirmed_completed_total: 30
completed_through: "Lesson 4.2"
chapter_04_completed_by_learner: false
lesson_04_02_completed_by_learner: true
lesson_04_03_generated: true
lesson_04_03_completed_by_learner: false
next_unresolved_checkpoint: "Lesson 4.3"
generated_frontier: "Lesson 4.3"
next_after_completion: "Lesson 4.4 — Concentric corners"
```

### Lesson 4.3 — Capsules

The lesson begins with the exact maximum-radius state already established in Lesson 4.2:

```text
left = 120
center Y = 210
height = 260
width = 520
radius = 130
```

A **capsule** is defined as a rounded-rectangle boundary whose two short ends are semicircles. A **semicircle** is one half of a circle boundary. The controlled lesson uses a horizontal capsule, so width is at least height.

The new geometry contract is:

```text
radius = height / 2
vertical straight side = height - radius - radius = 0
long straight span = width - radius - radius = width - height
```

For the reset values:

```text
radius = 260 / 2 = 130
left end center = (120 + 130, 210) = (250, 210)
right edge = 120 + 520 = 640
right end center = (640 - 130, 210) = (510, 210)
long straight span = 520 - 260 = 260
```

The top-left and bottom-left quarter-circle centers coincide at `(250, 210)`. Their boundary pieces therefore form one left semicircle. The two right corner centers coincide at `(510, 210)` and form the right semicircle.

### Interactive lesson model

The browser lesson:

- keeps height fixed at `260`;
- derives radius as `130` rather than exposing an independent radius control;
- varies width from `260` through `600` using a slider, exact presets, or a horizontal drag handle;
- shows optional full construction circles whose diameter equals the capsule height;
- keeps short `L`, `R`, and `r` labels inside the capped `820 × 430` SVG, then replaces coincident `L` and `R` labels with one `L = R` marker at the circle limit;
- places complete coordinates and formula results in synchronized external readouts;
- highlights the top and bottom straight spans directly;
- includes an eight-step manual derivation;
- includes a width-change prediction, a coding challenge, four hidden-answer exercises, and a copyable completion record.

At width `260`, width equals height. The two end centers meet, the long straight span becomes zero, and the boundary reaches the **circle limit**. The browser shows one `L = R` center marker instead of two overlapping labels.

### Android value path

The Android explorer uses:

```text
fixed height = 120.dp
minimum width = 120.dp
reset width = 240.dp
maximum width = 280.dp
derived radius = 120.dp / 2 = 60.dp
reset straight span = 240.dp - 120.dp = 120.dp
```

The value path is:

```text
CapsuleHeightDp
→ capsuleRadiusDp = CapsuleHeightDp / 2f
→ RoundedCornerShape(capsuleRadiusDp.dp)
→ width and height converted to Canvas-local px
→ radiusPx = heightPx / 2f
→ drawRoundRect(... CornerRadius(radiusPx, radiusPx))
```

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/CapsulesExplorer.kt
```

`Chapter04Screen.kt` contains complete-screen and direct-child previews in light and dark modes. At the Android circle limit, the two construction circles and their centers coincide, so the Canvas overlay draws the visible guide and center once. `MainActivity.kt` remains unchanged because it already opens Chapter 4.

### Explicit deferrals

Lesson 4.3 does not teach:

- inner versus outer concentric corner radii, which begin in Lesson 4.4;
- paths built from connected drawing commands, which begin in Lesson 4.5;
- clipping or masks;
- antialiasing or physical-pixel coverage;
- distance fields or shader geometry.

### Lesson 4.3 checkpoint

Lesson 4.3 is complete only when:

- [ ] The incremental learning-docs and Android ZIPs were applied.
- [ ] The Android project builds and opens Lesson 4.3 on the Pixel 8 Pro.
- [ ] Complete-screen and direct-child previews render in light and dark modes.
- [ ] The learner can define a capsule and a semicircle.
- [ ] The learner can derive radius from height.
- [ ] The learner can prove why the vertical straight sides are zero.
- [ ] The learner can calculate the long straight span as width minus height.
- [ ] The learner can explain the circle limit.
- [ ] The prediction, coding challenge, and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 31 of 216.
Next lesson becomes 4.4 — Concentric corners.
```



---

## Latest authoritative status — Lesson 4.3 complete; Lesson 4.4 generated

The learner requested the next lesson without reporting a remaining Lesson 4.3 question, correction, or test problem. Lesson 4.3 is therefore learner-confirmed complete.

```yaml
learner_confirmed_completed_total: 31
completed_through: "Lesson 4.3"
chapter_04_completed_by_learner: false
lesson_04_03_completed_by_learner: true
lesson_04_04_generated: true
lesson_04_04_completed_by_learner: false
next_unresolved_checkpoint: "Lesson 4.4"
generated_frontier: "Lesson 4.4"
next_after_completion: "Lesson 4.5 — Paths"
```

### Lesson-feedback review

The learner's clean progression confirms that Lesson 4.3's compact geometry, external exact-value readouts, circle-limit state, and direct radius derivation were understandable. This reinforces existing rules rather than revealing a new reusable rule. `AGENTS.md` remains unchanged.

### Lesson 4.4 — Concentric corners

The lesson starts from the corner-center model taught in Lesson 4.2. It places one rounded rectangle inside another using equal left, top, right, and bottom padding.

Browser reset values:

```text
outer left = 110
outer top = 35
outer width = 600
outer height = 360
outer radius = 90
uniform padding = 30
```

The outer top-left curve center is:

```text
(110 + 90, 35 + 90) = (200, 125)
```

The inner bounds are:

```text
inner left = 110 + 30 = 140
inner top = 35 + 30 = 65
inner width = 600 - 2 * 30 = 540
inner height = 360 - 2 * 30 = 300
```

The inner radius is derived from the requirement that the inner curve use the same center:

```text
inner radius X = 200 - 140 = 60
inner radius Y = 125 - 65 = 60

inner radius = outer radius - uniform padding
             = 90 - 30
             = 60
```

The correct inner center is `(200, 125)`. Copying the outer radius `90` instead produces `(230, 155)`, so the center shifts by the padding on both axes.

The browser interaction varies padding from `0` through `90`, switches between the concentric rule and the copied-radius defect, exposes construction circles and radius lines, and displays all exact values in synchronized external readouts. The SVG is capped at `820 × 430` CSS pixels.

At padding `90`, the required inner radius is `0`. The inner boundary remains valid but has sharp corners. For padding larger than the outer radius, the required circular radius would be negative; clamping to zero would produce valid geometry but would not preserve a curved concentric pair.

Android controlled values:

```text
Canvas = 320.dp × 280.dp
outer bounds = left 20.dp, top 28.dp, width 280.dp, height 224.dp
outer radius = 56.dp
reset padding = 20.dp
reset inner radius = 36.dp
shared top-left center = (76.dp, 84.dp)
```

The Android explorer supplies the derived radius to both:

```text
RoundedCornerShape(innerRadiusDp.dp)
```

and:

```text
CornerRadius(innerRadiusPx, innerRadiusPx)
drawRoundRect(...)
```

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/ConcentricCornersExplorer.kt
```

### Explicit deferrals

Lesson 4.4 does not teach:

- unequal horizontal and vertical padding;
- elliptical or per-corner radius contracts;
- custom paths;
- clipping or masks;
- antialiasing or physical-pixel coverage.

### Lesson 4.4 checkpoint

Lesson 4.4 is complete only when:

- [ ] The Android patch builds and opens Lesson 4.4 on the Pixel 8 Pro.
- [ ] Full-screen and direct-child previews render in light and dark modes.
- [ ] The learner can define uniform padding and concentric corner curves.
- [ ] The learner can calculate all four inner bounds.
- [ ] The learner can derive the inner radius from the shared center.
- [ ] The learner can explain why copying the outer radius shifts the center.
- [ ] The learner can explain the radius-zero boundary and the validity limit.
- [ ] The prediction, coding challenge, and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 32 of 216.
Next lesson becomes 4.5 — Paths.
```

---

## Latest authoritative status — Lesson 4.4 complete; Lesson 4.5 generated

The learner requested the next lesson without reporting a remaining Lesson 4.4 question, correction, or test problem. Lesson 4.4 is therefore learner-confirmed complete.

```yaml
learner_confirmed_completed_total: 32
completed_through: "Lesson 4.4"
chapter_04_completed_by_learner: false
lesson_04_04_completed_by_learner: true
lesson_04_05_generated: true
lesson_04_05_completed_by_learner: false
next_unresolved_checkpoint: "Lesson 4.5"
generated_frontier: "Lesson 4.5"
next_after_completion: "Lesson 4.6 — Cubic Bézier curves"
```

### Lesson-feedback review

The learner's clean progression confirms that Lesson 4.4's shared-center derivation, compact geometry, external exact-value readouts, copied-radius counterexample, and radius-zero boundary were understandable. This reinforces existing rules rather than revealing a new reusable rule. `AGENTS.md` remains unchanged.

### Lesson 4.5 — Paths

Lesson 4.5 starts from local coordinates and the fixed shape APIs used through Lesson 4.4. It introduces one new graphics object:

```text
Path
= an ordered list of geometric instructions
```

The lesson defines these terms before using the API:

- **current point:** the local position where the next connected segment begins;
- **segment:** one connected part between two endpoints;
- **closed boundary:** a boundary whose final segment returns to the starting point;
- **moveTo:** set the current point without appending a visible segment;
- **lineTo:** append one straight segment from the current point to the supplied point, then make the supplied point current;
- **close:** append the final stored segment back to the starting point.

The lesson keeps two contracts separate. A stroke follows the segments stored in the `Path`, so its E-to-A edge appears only after `close()`. A fill-style Compose `drawPath` can treat an open connected run as closed while filling; this does not add `close()` to the stored command list. The teaching views reveal fill only after explicit closure so the command-state difference remains visible.

Browser reset points use SVG-local teaching coordinates:

```text
A = (120, 90)
B = (520, 90)
C = (650, 215)
D = (520, 340)
E = (120, 340)
```

The complete command sequence is:

```text
Path()
moveTo(A)
lineTo(B)
lineTo(C)
lineTo(D)
lineTo(E)
close()
```

The main exact-value trace follows `lineTo(C)`:

```text
current point B = (520, 90)
target point C = (650, 215)
operation = lineTo(C)
output segment = B → C
new current point = C
```

Point C is a shared endpoint. Moving it changes segments B → C and C → D. It does not change A → B, D → E, or E → A.

The browser interaction:

- builds the command list one step at a time;
- exposes empty, open, and closed states;
- varies point C's X coordinate;
- shows the missing stored E → A segment before `close()`;
- distinguishes explicit Path closure from the implicit closure that a fill-style draw can use while filling an open connected run;
- keeps A-through-E labels short inside the SVG;
- keeps complete point, segment-count, current-point, and boundary-status values outside the geometry;
- caps the primary SVG at `820 × 430` CSS pixels;
- includes a prediction, coding challenge, four hidden-answer exercises, and a copyable completion record.

Android reset values:

```text
Canvas = 320.dp × 220.dp
A = (28.dp, 32.dp)
B = (220.dp, 32.dp)
C = (280.dp, 110.dp)
D = (220.dp, 188.dp)
E = (28.dp, 188.dp)
```

Android value path:

```text
dp coordinate constants
→ LocalDensity conversion to Canvas-local px
→ build or reuse one Path for the current command step
→ moveTo / lineTo / close
→ teaching fill revealed after explicit closure
→ drawPath inspection stroke from stored segments
```

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/PathsExplorer.kt
```

`Chapter04Screen.kt` contains complete-screen and direct-child previews in light and dark modes.

### Explicit deferrals

Lesson 4.5 does not teach:

- quadratic or cubic curved segments;
- multiple disconnected path parts or general fill rules;
- clipping or masks;
- antialiasing or physical-pixel coverage;
- renderer tessellation.

### Lesson 4.5 checkpoint

Lesson 4.5 is complete only when:

- [ ] The Android patch builds and opens Lesson 4.5 on the Pixel 8 Pro.
- [ ] Complete-screen and direct-child previews render in light and dark modes.
- [ ] The learner can define a path, current point, segment, and closed boundary.
- [ ] The learner can explain why `moveTo` adds no visible segment.
- [ ] The learner can trace one `lineTo` from current point through target to new current point.
- [ ] The learner can explain the exact segment added by `close()`.
- [ ] The learner can explain why moving point C changes two adjacent segments.
- [ ] The prediction, coding challenge, and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 33 of 216.
Next lesson becomes 4.6 — Cubic Bézier curves.
```

---

## Latest authoritative status — Lesson 4.5 complete; Lesson 4.6 generated

The learner requested the next lesson without reporting a remaining Lesson 4.5 question, correction, or test problem. Lesson 4.5 is therefore learner-confirmed complete.

```yaml
learner_confirmed_completed_total: 33
completed_through: "Lesson 4.5"
chapter_04_completed_by_learner: false
lesson_04_05_completed_by_learner: true
lesson_04_06_generated: true
lesson_04_06_completed_by_learner: false
next_unresolved_checkpoint: "Lesson 4.6"
generated_frontier: "Lesson 4.6"
next_after_completion: "Lesson 4.7 — Clipping"
```

### Lesson-feedback review

The learner's clean progression confirms that Lesson 4.5's command-by-command current-point trace, explicit empty/open/closed states, compact diagram, and external exact-value readouts were understandable. This reinforces the existing beginner-first, sequence-stepper, and interactive-geometry footprint rules. It does not reveal a separate reusable rule, so `AGENTS.md` remains unchanged.

### Lesson 4.6 — Cubic Bézier curves

Lesson 4.6 starts from the completed Lesson 4.5 `Path` and current-point model. It changes one stored segment type:

```text
Lesson 4.5:
moveTo(start)
lineTo(end)

Lesson 4.6:
moveTo(start)
cubicTo(control 1, control 2, end)
```

The lesson defines these objects before showing the command:

- **start point:** the Path's current point before `cubicTo`; the curve begins there;
- **first control point:** a guide position that influences the beginning of the curve;
- **second control point:** a guide position that influences the ending part of the curve;
- **end point:** the position where the curved segment finishes and the new current point after `cubicTo`;
- **control guide:** a separate dashed teaching line from an endpoint to its nearby control point; it is not stored in the curve Path;
- **cubic Bézier curve:** one curved segment defined by one start endpoint, two control points, and one end endpoint.

The start and end are guaranteed positions on the visible curve. The two control points guide the shape and usually do not lie on the visible curve.

Browser reset geometry uses SVG-local teaching coordinates:

```text
start     = (120, 300)
control 1 = (280, 100)
control 2 = (540, 100)
end       = (700, 300)
```

The exact command trace is:

```text
input current point = start (120, 300)
input control 1 = (280, 100)
input control 2 = (540, 100)
input end = (700, 300)
operation = cubicTo(control 1, control 2, end)
output = one stored cubic segment
new current point = end (700, 300)
```

The lesson deliberately does not reveal the general progress-based cubic equation. Progress and linear interpolation are Chapter 5 prerequisites. It calculates one exact curve point at halfway by repeatedly taking midpoints:

```text
First round:
A = midpoint(start, control 1) = (200, 200)
B = midpoint(control 1, control 2) = (410, 100)
C = midpoint(control 2, end) = (620, 200)

Second round:
D = midpoint(A, B) = (305, 150)
E = midpoint(B, C) = (515, 150)

Final:
M = midpoint(D, E) = (410, 150)
```

The straight start-to-end midpoint is `(410, 300)`. The curve midpoint is `(410, 150)`, which is 150 SVG-local units nearer the top in the Android-style coordinate system.

The browser interaction:

- lets the learner drag all four defining points;
- gives focused markers keyboard arrow movement;
- supplies exact arch, straight, S-shaped, and valley presets;
- toggles endpoint-to-control guides, the straight comparison, and the repeated-halfway construction;
- uses a green square, amber circle, pink circle, blue diamond, and red outlined midpoint instead of full labels over the geometry;
- keeps complete coordinates and the `cubicTo` argument order in synchronized external readouts;
- caps the primary SVG at `820 × 430` CSS pixels;
- includes a seven-step fixed-value derivation, prediction, coding challenge, four hidden-answer exercises, and a completion record.

Android reset values:

```text
Canvas = 320.dp × 240.dp
start = (24.dp, 190.dp)
control 1 = (92.dp, 46.dp)
control 2 = (228.dp, 46.dp)
end = (296.dp, 190.dp)
halfway curve point = (160.dp, 82.dp)
```

Android value path:

```text
dp point inputs
→ runtime density conversion to Canvas-local px
→ Path.moveTo(start)
→ Path.cubicTo(control1, control2, end)
→ drawPath(curve Path)
```

The Android explorer supports dragging all four points and the same exact presets. It draws the curve, straight comparison, control guides, and midpoint construction as separate operations. Only the `moveTo` and `cubicTo` calls belong to the curve Path.

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/CubicBezierExplorer.kt
```

`Chapter04Screen.kt` contains complete-screen and direct-child previews in light and dark modes.

### Explicit deferrals

Lesson 4.6 does not teach:

- the general cubic equation for arbitrary progress values;
- linear interpolation or animation progress;
- quadratic Bézier curves;
- clipping or masks;
- antialiasing or physical-pixel coverage;
- renderer curve subdivision or tessellation.

### Lesson 4.6 checkpoint

Lesson 4.6 is complete only when:

- [ ] The Android patch builds and opens Lesson 4.6 on the Pixel 8 Pro.
- [ ] Complete-screen and direct-child previews render in light and dark modes.
- [ ] The learner can define the start endpoint, two control points, end endpoint, and cubic Bézier curve.
- [ ] The learner can explain why the start is not repeated inside `cubicTo`.
- [ ] The learner can identify the new current point after `cubicTo`.
- [ ] The learner can reproduce the repeated-midpoint result `(410, 150)`.
- [ ] The learner can explain why control guides and midpoint construction lines are not stored Path segments.
- [ ] The straight preset, prediction, coding challenge, and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 34 of 216.
Next lesson becomes 4.7 — Clipping.
```

---

## Latest authoritative status — Lesson 4.6 complete; Lesson 4.7 generated

The learner requested the next lesson without reporting a remaining Lesson 4.6 question, correction, or test problem. Lesson 4.6 is therefore learner-confirmed complete.

```yaml
learner_confirmed_completed_total: 34
completed_through: "Lesson 4.6"
chapter_04_completed_by_learner: false
lesson_04_06_completed_by_learner: true
lesson_04_07_generated: true
lesson_04_07_completed_by_learner: false
next_unresolved_checkpoint: "Lesson 4.7"
generated_frontier: "Lesson 4.7"
next_after_completion: "Lesson 4.8 — Masks"
```

### Lesson-feedback review

The clean Lesson 4.6 progression confirms that these choices worked:

- start from the completed `Path` and current-point model;
- define endpoints and control points before revealing `cubicTo`;
- defer the general curve equation until progress and interpolation are taught;
- calculate one exact halfway position from repeated midpoint operations;
- use distinct marker shapes and external exact-value readouts instead of dense labels over the geometry;
- keep both the free-play diagram and stepper within a compact, tested footprint.

This reinforces existing rules. It does not reveal a separate reusable rule, so `AGENTS.md` remains unchanged.

### Lesson 4.7 — Clipping

Lesson 4.7 reuses the completed closed badge `Path` as a temporary drawing restriction.

Browser Path:

```text
A = (120, 90)
B = (520, 90)
C = (650, 215)
D = (520, 340)
E = (120, 340)
close()
```

New terms are defined before the API call:

- **clip region:** the area in which the affected draw calls may change the output;
- **candidate drawing:** the color or shape a draw call would write before the clip decision;
- **discarded draw:** a current candidate that is prevented from replacing the existing destination at an outside position;
- **scope:** the exact code block affected by the temporary clip.

The same oversized four-band content is drawn with clipping off and on. The content coordinates and colors do not change. Only the allowed output region changes.

Both fixed trace points lie in the amber band's vertical range, so both receive the same candidate before clipping:

```text
candidate amber = straight sRGB RGBA(
  0.8510, 0.4667, 0.0235, 1.0000
)
```

The earlier background is:

```text
straight sRGB RGBA(
  0.9451, 0.9608, 0.9765, 1.0000
)
```

Inside trace:

```text
I = (300, 230)
I is inside the rectangular core X 120..520, Y 90..340
→ clip allows candidate
→ output at I = amber
```

Outside trace:

```text
O = (720, 230)
badge rightmost X = 650
720 > 650
→ O is outside
→ clip rejects candidate
→ output at O = earlier background
```

The lesson states explicitly that clipping does not erase the destination and does not replace rejected positions with transparent black.

A post-clip ring Q is drawn outside the badge after the `clipPath` block. It remains visible because the temporary clip is no longer applied after the block returns.

The browser interaction:

- toggles clipping on and off;
- selects I or O;
- toggles the Path outline, candidate-content bounds, and Q ring;
- shifts decorative content while keeping the Path fixed;
- includes a six-step draw-order explanation;
- includes a scope prediction, coding challenge, four hidden-answer exercises, and completion record;
- caps both primary SVGs at `820 × 430` CSS pixels.

Android reset values:

```text
Canvas = 320.dp × 240.dp
A = (32.dp, 40.dp)
B = (210.dp, 40.dp)
C = (288.dp, 120.dp)
D = (210.dp, 200.dp)
E = (32.dp, 200.dp)
inside point I = (120.dp, 145.dp)
outside point O = (304.dp, 145.dp)
```

Android draw order:

```text
drawRect(TeachingBackground)
→ build closed badgePath in Canvas-local px
→ clipPath(badgePath) {
      drawOversizedPattern(patternShiftPx)
  }
→ clip block ends and previous clip returns
→ drawPath(badgePath, outline)
→ draw outside Q ring
```

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/ClippingExplorer.kt
```

`Chapter04Screen.kt` contains complete-screen and direct-child previews in light and dark modes.

### Explicit deferrals

Lesson 4.7 does not teach:

- a grayscale or alpha mask field;
- gradual visibility values;
- edge antialiasing or physical-pixel coverage;
- nested clipping;
- subtractive `ClipOp.Difference`;
- renderer pixel readback.

### Lesson 4.7 checkpoint

Lesson 4.7 is complete only when:

- [ ] The Android patch builds and opens Lesson 4.7 on the Pixel 8 Pro.
- [ ] Complete-screen and direct-child previews render in light and dark modes.
- [ ] The learner can define clip region, candidate drawing, discarded draw, and scope.
- [ ] The learner can explain why clipping off and on use the same content commands.
- [ ] The learner can trace inside point I to the amber output.
- [ ] The learner can trace outside point O to the unchanged background.
- [ ] The learner can explain why clipping does not erase the destination.
- [ ] The learner can explain why the Q ring is visible outside the badge.
- [ ] The learner can separate clipping from masks and antialiasing.
- [ ] The prediction, coding challenge, and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 35 of 216.
Next lesson becomes 4.8 — Masks.
```


---

## Latest authoritative clarification — Lesson 4.8 operands, alpha masks, two stages, and explicit layers

Lesson 4.8 remains generated and incomplete. Learner-confirmed progress remains **35 of 216**. This section supersedes earlier terminology that used `candidate content` and `effective source alpha` before their exact roles were clear.

### Three stable scene objects

```text
content being masked
→ multi-color pattern or opaque orange microscope content

mask data
→ alpha value at every position

background behind the masked group
→ opaque navy Surface
```

`source` and `destination` are assigned only inside one blend call. In the current `DstIn` operation, the content group is destination because it was drawn first; the mask layer is source because it is restored second.

### DstIn and SrcIn

```text
DstIn
output premultiplied RGB = destination premultiplied RGB × source alpha
output alpha             = destination alpha × source alpha
kept color               = destination
ignored color            = source RGB

SrcIn
output premultiplied RGB = source premultiplied RGB × destination alpha
output alpha             = source alpha × destination alpha
kept color               = source
ignored color            = destination RGB
```

Both can display only an overlap when the content and mask are placed in the matching reversed order. The overlap is the visible result, not the complete definition.

### Alpha mask versus grayscale preview

The Android path is an alpha mask:

```text
Color.Black                    → alpha 1.00 → keep fully
Color.Black.copy(alpha = 0.60) → alpha 0.60 → keep partially
transparent untouched position → alpha 0.00 → remove
```

`DstIn` ignores the mask RGB fields. The browser's opaque gray swatches only visualize numbers. Opaque gray RGB `(0.60, 0.60, 0.60)` has alpha `1.00` and would behave as a full-strength mask under `DstIn`. A luminance-mask design requires a separate RGB-to-alpha conversion.

### Two operations, not two alternatives

```text
Stage A · mask application
masked content alpha = original content alpha × mask alpha
masked premultiplied RGB = original premultiplied RGB × mask alpha

Stage B · source-over navy
masked group becomes source
masked content alpha becomes the source alpha consumed by source-over
```

The preferred name after Stage A is `masked content alpha`. `effective source alpha` is only its role in Stage B; it is not another independent number.

Reset zone C remains:

```text
content straight RGBA = (0.84, 0.36, 0.18, 1.00)
mask alpha             = 0.60
masked content alpha   = 0.60
final over navy        = (0.5440, 0.2880, 0.2280, 1.0000)
```

### Controlled shortcut and counterexample

The four non-overlapping zones may draw one solid orange rectangle with `alpha = maskAlpha` because that produces the same final output for that narrow structure. It is not a general mask implementation.

```text
completed two-shape group masked once at 0.60
→ overlap alpha 0.60

two overlapping shapes each drawn separately at 0.60
→ overlap alpha 0.60 + 0.60 × 0.40 = 0.84
```

### Revised Compose isolation

The code keeps one documented composable-level isolation boundary and one separate full-bounds mask layer:

```text
graphicsLayer(Offscreen)
→ isolates this Canvas's complete multi-draw content group
→ draw multi-color content

Canvas.saveLayer restored with DstIn
→ starts as a transparent mask source over the full Canvas bounds
→ draw capsule with selected alpha
→ restore the complete mask field onto the isolated content group

Compose draws the finished masked group
→ source-over the navy parent Surface
```

These two offscreen operations have different ownership and jobs. `graphicsLayer(Offscreen)` defines which completed content group `DstIn` may modify. The inner `Canvas.saveLayer` constructs the complete source mask, including alpha `0` outside the capsule. The learner's earlier successful render without the modifier proves only that the destination used in that run did not visibly include the navy parent. It does not reveal which framework-owned render target supplied isolation, so the course keeps the documented outer boundary. An explicit outer `Canvas.saveLayer` could replace it, but stacking both outer mechanisms without another requirement would add redundant offscreen work.

The spatial demo now includes mask alpha `1.00` and `0.60`, so the multi-color example visibly demonstrates both hard and partial masking.

Changed Android file:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/MasksExplorer.kt
```

Changed learning files include Lesson 4.8, `AGENTS.md`, this handoff, the curriculum, and `CURRENT_STATE.md`. Lesson 4.8 stays incomplete pending learner review and physical Pixel 8 Pro verification.


## Latest authoritative status — Lesson 4.7 complete; Lesson 4.8 generated

The learner requested the next lesson without reporting a remaining Lesson 4.7 question, correction, or test problem. Lesson 4.7 is therefore learner-confirmed complete.

```yaml
learner_confirmed_completed_total: 35
completed_through: "Lesson 4.7"
chapter_04_completed_by_learner: false
lesson_04_07_completed_by_learner: true
lesson_04_08_generated: true
lesson_04_08_completed_by_learner: false
next_unresolved_checkpoint: "Lesson 4.8"
generated_frontier: "Lesson 4.8"
next_after_completion: "Lesson 4.9 — Soft edges and antialiasing"
```

### Lesson-feedback review

The clean Lesson 4.7 progression confirms that these choices worked:

- start from one completed closed `Path` rather than introduce another shape;
- keep candidate content coordinates identical while changing only the clip state;
- trace one clearly inside and one clearly outside position;
- state that a rejected draw preserves the existing destination;
- prove temporary scope restoration with a post-clip marker;
- defer gradual mask values and edge antialiasing explicitly;
- keep the free-play diagram and stepper within the tested compact footprint.

This reinforces existing rules. It does not reveal a separate reusable rule, so `AGENTS.md` remains unchanged.

### Lesson 4.8 — Masks

Lesson 4.8 introduces a mask as separate visibility data. It does not treat a grayscale preview as a visible gray color layer.

Fixed input colors:

```text
candidate straight sRGB RGBA
= (0.84, 0.36, 0.18, 1.00)

background straight sRGB RGBA
= (0.10, 0.18, 0.30, 1.00)
```

Reset mask field:

```text
A = 0.00
B = 0.25
C = 0.60
D = 1.00
```

The four zones are enlarged teaching regions. They are not claims about physical Pixel 8 Pro display-pixel size.

The grayscale preview uses:

```text
mask value m
→ preview RGB(m, m, m), alpha 1
```

That preview exists only to make the data visible. Its RGB does not enter the source-over color arithmetic.

The mask contract is:

```text
effective source alpha
= candidate alpha × mask value
```

At reset zone C:

```text
1.00 × 0.60 = 0.60
```

The source-over result is:

```text
red   = 0.84 × 0.60 + 0.10 × 0.40 = 0.5440
green = 0.36 × 0.60 + 0.18 × 0.40 = 0.2880
blue  = 0.18 × 0.60 + 0.30 × 0.40 = 0.2280
alpha = 1.0000
```

The opaque background keeps final output alpha at `1.00`. Mask value `0.60` is not the final output alpha.

A fixed boundary example keeps candidate alpha separate:

```text
candidate alpha = 0.50
mask value = 0.60
effective source alpha = 0.30
```

The browser interaction:

- shows candidate, mask field, and final output separately;
- selects and edits A, B, C, or D;
- supplies course, clip-like, all-hidden, all-visible, and reverse presets;
- updates exact alpha and channel arithmetic;
- includes a diagnostic that rejects the gray-tint misconception;
- includes a compact seven-step derivation, prediction, coding challenge, exercises, and completion record.

Android reset geometry reuses the Lesson 4.7 badge:

```text
Canvas = 320.dp × 240.dp
A = (32.dp, 40.dp)
B = (210.dp, 40.dp)
C = (288.dp, 120.dp)
D = (210.dp, 200.dp)
E = (32.dp, 200.dp)
```

The mask zones cover X ranges:

```text
zone A = 32.dp through 96.dp
zone B = 96.dp through 160.dp
zone C = 160.dp through 224.dp
zone D = 224.dp through 288.dp
```

Android value path:

```text
four mask values in Compose state
→ build the completed badge Path in Canvas-local px
→ clipPath(badgePath)
→ draw one non-overlapping candidate rectangle per zone
→ use alpha = mask value for that controlled solid candidate
→ ordinary source-over over the opaque background
→ exact output readouts calculated by the same mask contract
```

This direct draw path is deliberately bounded. It is exact for one solid candidate with non-overlapping zones. Arbitrary groups of overlapping draws, captured backdrops, or filtered images normally require grouping before a separate mask operation or a shader that reads a mask value per position. Full offscreen-layer architecture remains in Chapter 6; shader mask fields remain in later chapters.

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/MasksExplorer.kt
```

`Chapter04Screen.kt` contains complete-screen and direct-child previews in light and dark modes.

### Explicit deferrals

Lesson 4.8 does not teach:

- renderer-created antialiasing at the mathematical badge boundary;
- continuous gradient interpolation mathematics;
- arbitrary image or captured-backdrop mask buffers;
- offscreen-group performance and ownership;
- shader sampling of a mask texture;
- blur, refraction, or filtering.

### Lesson 4.8 checkpoint

Lesson 4.8 is complete only when:

- [ ] The Android files compile and run on the Pixel 8 Pro.
- [ ] Both preview levels render in light and dark modes.
- [ ] The reset mask values are 0.00, 0.25, 0.60, and 1.00.
- [ ] Every zone can be selected and changed independently.
- [ ] The learner can define mask, mask value, mask field, and effective source alpha.
- [ ] The learner can reproduce reset zone C output `(0.5440, 0.2880, 0.2280, 1.0000)`.
- [ ] The learner can explain why mask-preview gray is not a tint.
- [ ] The learner can multiply candidate alpha by mask value.
- [ ] The learner can compare mask endpoints with the previous clip trace while keeping boundary antialiasing deferred.
- [ ] The prediction, coding challenge, and exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 36 of 216.
Next lesson becomes 4.9 — Soft edges and antialiasing.
```


---

## Earlier clarification — Lesson 4.8 spatial mask model (implementation details superseded below)

Lesson 4.8 remains generated and incomplete. Learner-confirmed progress remains **35 of 216**.

The learner understood the numeric field but asked whether a mask is mainly used to cut content to a shape or keep an animation inside a shape. That question exposed a reusable defect: the original lesson led with four mask values and source-over arithmetic, so the multiplication mechanism overshadowed the spatial purpose.

The corrected lesson now begins with three separate objects:

```text
content
mask shape or mask field
visible masked output
```

It demonstrates three canonical relationships before the four-zone arithmetic:

```text
fixed content + fixed hard mask
→ cut oversized content to a capsule

moving content + fixed hard mask
→ the capsule boundary stays still while content moves inside it

fixed content + moving hard mask
→ the mask reveals a changing region of the stationary content
```

The browser uses a manual position slider. It does not introduce time, easing, or automatic playback before Chapter 5.

### Correct representation boundary

A pure opacity mask controls alpha. It does not normally replace or tint the candidate's straight RGB.

For the opaque candidate and mask `0.60`:

```text
candidate straight RGBA
= (0.8400, 0.3600, 0.1800, 1.0000)

masked straight RGBA
= (0.8400, 0.3600, 0.1800, 0.6000)

masked premultiplied RGBA
= (0.5040, 0.2160, 0.1080, 0.6000)
```

At a straight-RGBA API boundary, straight RGB remains the candidate color while alpha changes. In premultiplied storage, the stored RGB contributions and alpha are multiplied by the mask because the RGB values already contain alpha weighting.

After the masked source is composited over the opaque navy destination, the final displayed straight RGB includes both source and background contributions:

```text
red   = 0.84 × 0.60 + 0.10 × 0.40 = 0.5440
green = 0.36 × 0.60 + 0.18 × 0.40 = 0.2880
blue  = 0.18 × 0.60 + 0.30 × 0.40 = 0.2280
```

### Clip versus mask

A hard binary mask uses `0` outside and `1` inside. Away from the antialiased boundary, it can look like a hard clip. The concepts are not collapsed:

- a clip is a geometric restriction on subsequent drawing;
- a mask is independent visibility data and may contain partial values, textures, images, or shader-calculated fields;
- a simple hard geometry should still use clipping when a general offscreen mask adds no capability.

### Android correction attempt (superseded below)

The first spatial implementation attempted this grouped-content path:

```text
parent navy Surface
→ isolated Canvas with CompositingStrategy.Offscreen
→ draw complete multi-color candidate pattern
→ draw capsule source with BlendMode.DstIn
→ source alpha keeps destination content inside the capsule
→ isolated masked result composites over the parent Surface
```

The parent background is outside the isolated Canvas so `DstIn` cannot remove it. The four-zone direct-alpha implementation remains only as a controlled arithmetic microscope.

Changed Android files remain:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/MasksExplorer.kt
```

### Reusable prevention rule

`AGENTS.md` now contains **Spatial-first mask and visibility-field gate**. Future lessons must show content, mask, and output separately; demonstrate a shape cut and both movement relationships; distinguish straight from premultiplied values; and state when clipping is the simpler production primitive.

```yaml
learner_confirmed_completed_total: 35
completed_through: "Lesson 4.7"
lesson_04_08_generated: true
lesson_04_08_completed_by_learner: false
lesson_04_08_status: "corrected after spatial-model question"
next_unresolved_checkpoint: "Lesson 4.8"
generated_frontier: "Lesson 4.8"
next_after_completion: "Lesson 4.9 — Soft edges and antialiasing"
```

---

## Latest authoritative implementation correction — Lesson 4.8 full-bounds mask source

Lesson 4.8 remains generated and incomplete. Learner-confirmed progress remains **35 of 216**.

This section supersedes the shape-only `DstIn` implementation described in the preceding Lesson 4.8 clarification.

### Learner-observed defect

On the physical Android result, the multi-color candidate remained visible across the complete Canvas instead of appearing only through the capsule.

The intended result is:

```text
inside capsule
→ candidate pattern visible

outside capsule
→ masked candidate group transparent
→ parent navy Surface visible
```

### Why the previous code failed

The previous code performed these operations:

```text
outer Canvas isolated with CompositingStrategy.Offscreen
→ draw complete candidate pattern
→ draw one opaque capsule directly with BlendMode.DstIn
```

`CompositingStrategy.Offscreen` correctly protected the parent navy background. The defect was the source-mask domain.

At one position clearly outside the capsule:

```text
candidate pattern already exists in the isolated destination
capsule draw has no source coverage at this position
→ no DstIn operation runs at this position
→ existing candidate destination remains unchanged
```

Offscreen isolation answers which destination content the blend operation can affect. It does not create a source alpha value of `0` at positions that the capsule draw never covers.

### Correct grouped-mask path

The corrected code creates a complete source-mask layer:

```text
parent navy Surface
→ outer offscreen Canvas isolates the candidate group
→ draw complete candidate pattern
→ Canvas.saveLayer creates a transparent layer over the full Canvas bounds
→ draw opaque capsule normally into that mask layer
→ mask layer alpha is 1 inside and 0 outside
→ restore the complete mask layer with BlendMode.DstIn
→ candidate is retained inside and removed outside
→ composite the corrected masked group over the parent Surface
```

The exact outside-position result is:

```text
mask source alpha = 0
DstIn output alpha
= destination alpha × source alpha
= destination alpha × 0
= 0
```

The masked group is therefore transparent outside the capsule, and the parent navy background shows through.

### Compose excerpt

```kotlin
// MasksExplorer.kt — applyFullBoundsCapsuleMask
val canvas = drawContext.canvas
canvas.saveLayer(
    Rect(0f, 0f, size.width, size.height),
    dstInMaskLayerPaint,
)
try {
    drawRoundRect(
        color = Color.Black,
        topLeft = maskTopLeft,
        size = maskSize,
        cornerRadius = maskCornerRadius,
    )
} finally {
    canvas.restore()
}
```

`dstInMaskLayerPaint` is created once with:

```kotlin
Paint().apply {
    blendMode = BlendMode.DstIn
}
```

The blend mode belongs to the restoration of the full-bounds mask layer, not to the capsule's individual draw call.

### Clip-versus-mask production boundary

For a fixed hard capsule containing only mask values `0` and `1`, `clipPath` remains the simpler production primitive. The full-bounds `DstIn` path is retained in Lesson 4.8 because it demonstrates the contract required by an independent mask field that may later contain partial values or come from an image or shader.

### Changed files in this correction

Learning documents:

```text
AGENTS.md
CURRENT_STATE.md
curriculum/liquid_glass_android_curriculum.md
curriculum/liquid_glass_android_handoff.md
course/chapters/chapter-04/lesson-04-08-masks.html
```

Android:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/MasksExplorer.kt
```

`Chapter04Screen.kt` remains unchanged because it already contains the required full-screen and direct-child previews in light and dark modes.

### Reusable prevention rule

`AGENTS.md` now contains the **Mask-field domain and source-coverage gate**. Future masking examples must distinguish:

```text
masked destination bounds
source draw coverage
complete mask-field bounds
```

A `DstIn` example must provide source alpha over the complete masked bounds. A shape-only draw is not accepted as a complete mask unless the implementation explicitly creates and composites a full-bounds mask layer.

```yaml
learner_confirmed_completed_total: 35
completed_through: "Lesson 4.7"
lesson_04_08_generated: true
lesson_04_08_completed_by_learner: false
lesson_04_08_status: "Android full-bounds DstIn mask correction pending learner review"
next_unresolved_checkpoint: "Lesson 4.8"
generated_frontier: "Lesson 4.8"
next_after_completion: "Lesson 4.9 — Soft edges and antialiasing"
```

