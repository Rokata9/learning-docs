# Liquid Glass Android course — implementation handoff

**Updated:** 2026-08-20  
**Course version:** 7.7.0

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
learner_confirmed_complete: 68
completed_through: "Lesson 7.6 — Saturation and contrast"
completed_chapters: [1, 2, 3, 4, 5, 6]
chapter_7_complete: "6 of 12"
next_unresolved_checkpoint: "Lesson 7.7 — Static rim"
generated_frontier: "Lesson 7.7 — Static rim"
next_planned_after_checkpoint: "Lesson 7.8 — Inner highlight"
```

Lesson 7.7 is generated and is not learner-confirmed complete.

## Completed through Lesson 7.6

Lesson 7.6 attached `setToSaturation` to the blurred-and-tinted glass group and measured label contrast from the new RGB. Lesson 7.7 must not repeat that filter, the 3.9 matrix derivation, or the 3.7 contrast derivation.

Lesson 4.5 already taught `Stroke`. Lesson 4.7 already taught clipping. Lesson 4.4 already taught `inner radius = outer radius − uniform padding`. Lesson 7.7 combines those three facts on the frosted card.

## Lesson 7.7 contract

```text
quieted frosted fill, clipped to the panel path
→ centered Stroke loses its outer half to the clip
→ inset the path by width ÷ 2
→ inner corner radius shrinks by the same inset
→ same color all the way around; not lighting
```

`StaticRimExplorer.kt` uses one production route plus two comparison cards. Blur stays `18.dp`. Tint stays `0.25`. Saturation stays `0.40`. Rim-width presets are `0`, `3`, and `6` dp.

## Current files to attach in a future conversation

```text
USER_PREFERENCES.md
AGENTS.md
CURRENT_STATE.md
curriculum/liquid_glass_android_handoff.md
curriculum/liquid_glass_android_curriculum.md
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
course/chapters/chapter-07/lesson-07-06-saturation-and-contrast.html
course/chapters/chapter-07/lesson-07-07-static-rim.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/SaturationContrastExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/StaticRimExplorer.kt
```

## Completion rule

Do not mark Lesson 7.7 complete merely because it was generated. Wait for explicit learner confirmation. Do not generate Lesson 7.8 before that confirmation unless the learner asks to generate ahead.

## Standing delivery preferences recorded 2026-08-20

- Do not generate `.zip` files. The learner works from the repositories.
- When a preview wrapper has both themes, put the dark `@Preview` annotation first, then light. Prospective only.

## Feedback analysis for Lesson 7.6

The learner marked Lesson 7.6 complete without questions. No new reusable failure or success pattern was evidenced beyond the existing Chapter 7 visual-lab plus one-new-operation pattern.

Course progress: 68 of 216 lessons completed.
