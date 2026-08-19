# Liquid Glass Android course — implementation handoff

**Updated:** 2026-08-19  
**Course version:** 7.5.0

## Read order

1. `USER_PREFERENCES.md`
2. `AGENTS.md`
3. `CURRENT_STATE.md`
4. this handoff
5. `liquid_glass_android_curriculum.md` only when the full plan is needed
6. current and immediately preceding lesson HTML
7. the current Android files

Treat `CURRENT_STATE.md` as authoritative when older prose disagrees.

## Authoritative status

```yaml
total_lessons: 216
learner_confirmed_complete: 66
completed_through: "Lesson 7.4 — Downsampled blur"
completed_chapters: [1, 2, 3, 4, 5, 6]
chapter_7_complete: "4 of 12"
next_unresolved_checkpoint: "Lesson 7.5 — Tint layer"
generated_frontier: "Lesson 7.5 — Tint layer"
next_planned_after_checkpoint: "Lesson 7.6 — Saturation and contrast"
```

Lesson 7.5 is generated and is not learner-confirmed complete.

## Completed through Lesson 7.4

Lesson 7.1 established neighborhood dependence. Lesson 7.2 established radius as spatial influence distance. Lesson 7.3 established how `edgeTreatment` supplies values outside the blur input. Lesson 7.4 established shrink → blur → enlarge on a smaller working image.

Lesson 7.5 may treat a blurred image as an already-finished destination. It must not repeat downsample size/radius arithmetic, edge-mode arithmetic, or Chapter 6 backdrop ownership.

## Lesson 7.5 contract

### Principal idea

```text
blurred destination
→ later translucent tint draw
→ sharp label on top
```

Reuse the Lesson 3.8 short formula. The new step is that the mix happens after blur, as its own draw.

### Browser lesson

- one pale-tint-over-blurred-image lab;
- navy and orange interior probes;
- six-state walkthrough;
- amount `0` / `0.25` / `1.00` identity comparison;
- one Android `drawRect` route;
- prediction, two-blank challenge, four explain-back checks, checkpoint.

### Android implementation

`TintLayerExplorer.kt` keeps one production route: `BlurEffect` on the artwork `Canvas`, then `drawRect` of `tintColor.copy(alpha = tintAmount)`, then a sharp label. Presets are white / cool / warm and amounts `0`, `0.25`, `0.50`, `1.00`.

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
course/chapters/chapter-07/lesson-07-04-downsampled-blur.html
course/chapters/chapter-07/lesson-07-05-tint-layer.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/TintLayerExplorer.kt
```

## Completion rule

Do not mark Lesson 7.5 complete merely because it was generated or reviewed. Wait for explicit learner confirmation. Do not generate Lesson 7.6 before that confirmation unless the learner explicitly asks to generate ahead.

Course progress: 66 of 216 lessons completed.
