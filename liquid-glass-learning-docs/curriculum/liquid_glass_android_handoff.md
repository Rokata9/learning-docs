# Liquid Glass Android course — implementation handoff

**Updated:** 2026-08-17  
**Course version:** 7.3.0

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
learner_confirmed_complete: 64
completed_through: "Lesson 7.2 — Blur radius"
completed_chapters: [1, 2, 3, 4, 5, 6]
chapter_7_complete: "2 of 12"
next_unresolved_checkpoint: "Lesson 7.3 — Edge treatment"
generated_frontier: "Lesson 7.3 — Edge treatment"
next_planned_after_checkpoint: "Lesson 7.4 — Downsampled blur"
```

Lesson 7.3 is generated and is not learner-confirmed complete.

## Completed blur prerequisites

Lesson 7.1 established neighborhood dependence. Lesson 7.2 established blur radius as spatial influence distance. Their transparent equal-weight models do not describe Android's internal blur implementation.

Lesson 7.3 may rely on those facts but must not repeat their full arithmetic or rebuild Chapter 6 capture architecture.

## Revised Lesson 7.3 contract

### Principal idea

```text
blur requests a source coordinate outside the input
→ edgeTreatment supplies the value for that missing coordinate
```

The main explanation must remain this direct. Do not reintroduce unexplained “hue,” “overscan,” “padded source,” or “crop center” language.

### Browser lesson

The revised standalone lesson contains:

- a direct five-cell source example;
- a clear distinction between an internal color boundary and the outer source boundary;
- `Clamp`, `Decal`, `Mirror`, and `Repeated` controls;
- edge and interior target controls;
- a synchronized six-state walkthrough;
- a direct explanation that transparent black has alpha zero and contributes no visible black;
- the uniform-orange premultiplied trace, ending in the plain conclusion “same orange straight RGB, alpha 0.60”;
- a separate glass-panel application section that defines the larger source rectangle, the panel rectangle, and `crop after blur`;
- one styled prediction;
- one three-blank Kotlin challenge;
- four explain-back exercises;
- a ten-item Preview/device checkpoint.

### Android implementation

`BlurEdgeTreatmentExplorer.kt` keeps one controlled route:

```text
selected mode
→ tileMode
→ isSupported()
→ selected mode or Clamp fallback
→ BlurEffect.edgeTreatment
```

The explorer fixes radius at 18 dp and changes only edge treatment. Its UI defines transparent black directly and renames the “opaque crop” test to an opaque source image.

### Glass-panel application

The lesson now says:

```text
read a larger rectangle from the real backdrop
→ blur it
→ select the smaller inner rectangle matching the visible panel
```

`Crop after blur` is defined as selecting that smaller inner rectangle and ignoring the extra outer border. No exact extra-margin formula is claimed.

### Evidence boundary

Compose defines `edgeTreatment` as the strategy for pixels outside the original input bounds. `Clamp`, `Mirror`, and `Repeated` are guaranteed. `Decal` is capability-checked; an unsupported mode consumes `Clamp`.

Lesson 7.3 does not claim Android's exact kernel, weights, sample positions, extra-margin requirement, allocation behavior, or measured performance.

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
course/chapters/chapter-07/lesson-07-02-blur-radius.html
course/chapters/chapter-07/lesson-07-03-edge-treatment.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/BlurRadiusExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/BlurEdgeTreatmentExplorer.kt
```

## Completion rule

Do not mark Lesson 7.3 complete merely because it was generated or reviewed. Wait for explicit learner confirmation. Do not generate Lesson 7.4 before that confirmation unless the learner explicitly asks to generate ahead.

Course progress: 64 of 216 lessons completed.
