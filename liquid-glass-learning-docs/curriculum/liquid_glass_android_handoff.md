# Liquid Glass on Android — concise conversation handoff

**Updated:** 2026-08-17  
**Course version:** 7.1.0

## Read order

1. `USER_PREFERENCES.md`
2. `AGENTS.md`
3. `CURRENT_STATE.md`
4. This handoff
5. `liquid_glass_android_curriculum.md` when the full plan is needed
6. Current lesson HTML and Android files

Treat `CURRENT_STATE.md` as authoritative.

## Authoritative status

```yaml
course_lessons_total: 216
learner_confirmed_completed: 62
completed_through: "Lesson 6.11 — Build a two-layer scene architecture"
completed_chapters: [1, 2, 3, 4, 5, 6]
chapter_07_status: "in progress; 0 of 12 complete"
next_unresolved_checkpoint: "Lesson 7.1 — Blur as neighborhood averaging"
generated_frontier: "Lesson 7.1 — Blur as neighborhood averaging"
next_planned_after_checkpoint: "Lesson 7.2 — Blur radius"
lesson_06_11_complete: true
lesson_07_01_generated: true
lesson_07_01_complete: false
```

## Completed Chapter 6 prerequisite

The production panel already has a separated sample layer and sharp foreground:

```text
BackdropArtwork
→ backgroundLayer
→ panelSampleLayer
→ material additions
→ sharp ForegroundContent
→ ParentScene
```

The production integration point is `panelSampleLayer.renderEffect = blurEffect`. Lesson 7.1 demonstrates the new blur mechanism on isolated test artwork instead of reteaching capture, crop, freshness, feedback, or command-versus-buffer lessons.

## Generated Lesson 7.1 contract

### Principal idea

A blurred output position receives color from nearby source positions rather than copying only the same-position source color.

### Exact teaching trace

The selected 3 × 3 neighborhood uses four `RGB(18, 54, 90)` cells and five `RGB(225, 153, 45)` cells. Each cell contributes `1 ÷ 9` in the equal-weight model.

```text
Rout = (4 × 18  + 5 × 225) ÷ 9 = 133
Gout = (4 × 54  + 5 × 153) ÷ 9 = 109
Bout = (4 × 90  + 5 × 45)  ÷ 9 = 65

output = RGB(133, 109, 65)
```

This is a transparent box-average teaching model. It does not claim Android uses exactly nine samples, equal weights, displayed 8-bit sRGB arithmetic, or integer rounding.

### Browser lesson

The standalone lesson contains:

- a sharp-versus-soft practical visual;
- five precisely named objects;
- flat-field, color-edge, and bright-speck source presets;
- one synchronized nine-state neighborhood walkthrough;
- a complete per-channel RGB trace;
- a short real-Android route;
- a styled three-choice prediction;
- one focused Kotlin averaging challenge;
- four explain-back exercises;
- a ten-item Preview/device checkpoint;
- explicit boundaries for radius, edge treatment, and downsampling.

### Android implementation

`BlurNeighborhoodAveragingExplorer.kt` contains:

- a pure `Rgb8` teaching model;
- one readable `averageRgb8` function;
- one 3 × 3 neighborhood grid;
- one sharp hard-edge test image;
- one matching test image with a fixed Compose `BlurEffect`;
- a fixed 12 dp radius converted to runtime pixels;
- a fixed `TileMode.Clamp` so this lesson has one explicit edge rule while comparison is deferred;
- no backdrop-capture duplication;
- no stale-state, feedback, or failure-mode branches;
- named constants with nearby reasons.

`MainActivity.kt` now opens `Chapter07Screen`.

### Evidence boundary

Lesson 7.1 establishes neighborhood dependence and one exact teaching average. It does not establish Android's private kernel details, compare radii, analyze source-edge requests, downsample, or measure GPU performance.

## New-learning rule

Every full lesson must add a genuinely new mechanism, API behavior, mathematical operation, measurement method, or implementation step. Keep prerequisite recap short. Convert mostly repetitive consolidation into a checkpoint or merge it into the next substantive lesson.

## Current files

```text
liquid-glass-learning-docs/course/chapters/chapter-06/lesson-06-11-two-layer-scene-architecture.html
liquid-glass-learning-docs/course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
liquid-glass-learning-docs/course/chapters/chapter-07/lesson-07-01-blur-as-neighborhood-averaging.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/BlurNeighborhoodAveragingExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
```

## Continuation rule

Do not mark Lesson 7.1 complete merely because it was generated or reviewed. Wait for explicit learner confirmation. Do not generate Lesson 7.2 before that confirmation unless the learner explicitly asks to generate ahead.

Course progress: 62 of 216 lessons completed.
