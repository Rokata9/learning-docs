# Liquid Glass on Android — Conversation Handoff

**Course plan version:** 3.8.1  
**Updated:** 2026-07-26  
**Current position:** Lessons 1.1 through 3.7 are complete by learner confirmation. **24 of 216 lessons are complete.** Lesson 3.8 is generated and remains pending.

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

Lesson 3.8 remains pending. Course progress remains 24 of 216.

## Current progress

```yaml
course: Liquid Glass on Android
course_version: 3.8.0
platform: Kotlin + Jetpack Compose
learning_device: Pixel 8 Pro
learning_min_sdk: 33
course_lessons_total: 216
course_lessons_completed_by_learner: 24
completed_through: 3.7
generated_frontier: 3.8
next_learner_checkpoint: 3.8
chapter_01_completed_by_learner: true
chapter_02_completed_by_learner: true
chapter_03_completed_by_learner: false
lesson_03_05_completed_by_learner: true
lesson_03_06_file: course/chapters/chapter-03/lesson-03-06-brightness-and-relative-luminance.html
lesson_03_06_generated: true
lesson_03_06_completed_by_learner: true
lesson_03_07_file: course/chapters/chapter-03/lesson-03-07-foreground-contrast.html
lesson_03_07_generated: true
lesson_03_07_completed_by_learner: true
lesson_03_08_file: course/chapters/chapter-03/lesson-03-08-tint.html
lesson_03_08_generated: true
lesson_03_08_completed_by_learner: false
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

Count only learner-confirmed completion. End every response with course progress and an approximate remaining-context estimate.

LATEST HANDOFF:
[paste this file]

CURRENT CODE, SCREENSHOT, OBSERVATION, OR ERROR:
[paste here]
```
