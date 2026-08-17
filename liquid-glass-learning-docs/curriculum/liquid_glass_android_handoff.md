# Liquid Glass Android course — implementation handoff

**Updated:** 2026-08-17  
**Course version:** 7.4.0

## Read order

1. `USER_PREFERENCES.md`
2. `AGENTS.md`
3. `CURRENT_STATE.md`
4. this handoff
5. `liquid_glass_android_curriculum.md` only when the full plan is needed
6. current and immediately preceding lesson HTML
7. current Android files

Treat `CURRENT_STATE.md` as authoritative when older prose disagrees.

## Authoritative status

```yaml
total_lessons: 216
learner_confirmed_complete: 65
completed_through: "Lesson 7.3 — Edge treatment"
completed_chapters: [1, 2, 3, 4, 5, 6]
chapter_7_complete: "3 of 12"
next_unresolved_checkpoint: "Lesson 7.4 — Downsampled blur"
generated_frontier: "Lesson 7.4 — Downsampled blur"
next_planned_after_checkpoint: "Lesson 7.5 — Tint layer"
```

Lesson 7.4 is generated and is not learner-confirmed complete.

## Completed blur prerequisites

Lesson 7.1 established neighborhood dependence. Lesson 7.2 established radius as spatial influence distance. Lesson 7.3 established how `edgeTreatment` supplies values outside the blur input.

Lesson 7.4 may rely on those facts but must not repeat their complete teaching arithmetic or rebuild Chapter 6 backdrop ownership.

## Lesson 7.4 contract

### Principal idea

```text
full-size source
→ smaller working image
→ blur fewer pixel positions
→ enlarge the blurred result
```

Define **downsample** as creating a smaller image by combining source pixels. Define **upsample** as enlarging that smaller image to the required output dimensions.

### Controlled arithmetic

The browser lesson uses a `32 × 16` model image and scale presets `1.0`, `0.5`, and `0.25`.

```text
working width  = full width × scale
working height = full height × scale
working area ratio = scale × scale
```

At half width and half height, the working image contains `25%` of the full pixel positions. At quarter width and quarter height, it contains `6.25%`.

One separate `2 × 2` trace averages four RGB source pixels into one working pixel. It is explicitly a transparent teaching calculation.

### Radius mapping

```text
working radius = desired final radius × scale
```

The reason is coordinate scaling: after a half-size result is enlarged by `2`, one working-image pixel spans two final-output pixels.

Do not claim that this equation describes Android's private kernel, weights, or sample count.

### Browser lesson

The standalone lesson contains:

- one direct shrink → blur → enlarge explanation;
- three scale presets;
- full source, working image, and enlarged result canvases;
- one synchronized eight-state walkthrough;
- one `2 × 2` RGB downsample trace;
- working-size and radius calculations;
- a short Android route;
- one styled prediction;
- one three-blank Kotlin challenge;
- four explain-back checks;
- a ten-item Preview/device checkpoint.

### Android implementation

`DownsampledBlurExplorer.kt` keeps one clean route:

```text
sourceLayer at full bounds
→ workingLayer recorded with smaller IntSize
→ source scaled into workingLayer
→ BlurEffect with scaled radius
→ workingLayer enlarged from TransformOrigin(0, 0)
→ current draw target
```

The explorer exposes only `1×`, `1/2`, and `1/4` working-size presets. It has no error-mode enum, stale geometry, crop callbacks, or duplicate production branches.

### Performance boundary

A smaller working layer contains fewer pixel positions. This does not prove proportional frame-time improvement. Performance must be measured in a release-like build on the Pixel 8 Pro.

## New-learning rule

Every full lesson must add a genuinely new mechanism, API behavior, mathematical operation, measurement method, or implementation step. Prerequisite recap is brief and exists only to supply the new operation.

If planned material is mostly consolidation, merge it into the next substantive lesson or make it a short checkpoint. Do not count repeated architecture prose as new graphics progress.

## Current files to attach in a future conversation

Recommended:

```text
complete liquid-glass-learning-docs repository
complete LiquidGlassLab repository
```

Minimum:

```text
USER_PREFERENCES.md
AGENTS.md
CURRENT_STATE.md
curriculum/liquid_glass_android_handoff.md
curriculum/liquid_glass_android_curriculum.md
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
course/chapters/chapter-07/lesson-07-03-edge-treatment.html
course/chapters/chapter-07/lesson-07-04-downsampled-blur.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/BlurEdgeTreatmentExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/DownsampledBlurExplorer.kt
```

## Completion rule

Do not mark Lesson 7.4 complete merely because it was generated or reviewed. Wait for explicit learner confirmation. Do not generate Lesson 7.5 before that confirmation unless the learner explicitly asks to generate ahead.

Course progress: 65 of 216 lessons completed.
