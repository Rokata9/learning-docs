# Liquid Glass Android course — current state

**Updated:** 2026-08-10
**Merged note:** Lessons 5.8 and 5.9 are taught through one consolidated primary lesson in `lesson-05-08-spring-intuition.html`. `lesson-05-09-overshoot-and-settle.html` is retained as a backward-compatible archive page that redirects back to 5.8.  
**Course version:** 5.10.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  

## Authoritative progress

- Learner-confirmed complete: **48 of 216 lessons**.
- Completed through: **Lesson 5.9 — Overshoot and settle**.
- Completed chapters: **1, 2, 3, and 4**.
- Chapter 5: in progress.
- Current unresolved checkpoint: **Lesson 5.10 — Press deformation**.
- Generated frontier: **Lesson 5.10**.
- Next planned after explicit completion: **Lesson 5.11 — Reversal and interruption**.

## Consolidated lesson note

- Lesson 5.8 is now the primary teaching page for spring intuition, overshoot, and settle.
- Lesson 5.9 remains in the repo as a short archive/redirect page so downstream numbering stays stable.
- Learner-confirmed counts remain unchanged.


## Consolidated Lesson 5.8 matrix clarification

- The complete moment matrix now repeats compact substituted formulas in every tick cell.
- Current preset stiffness `k` and selected-tick displacement `d = T − x` are prominent above the matrix.
- Target crossings and actual bounces are separate events. Bounce means a peak or trough where velocity reverses.
- Peak and trough tick columns use distinct visual treatments and direct jump controls.

## Current lesson files

```text
course/chapters/chapter-05/lesson-05-10-press-deformation.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter05/Chapter05Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter05/PressDeformationExplorer.kt
```

## Lesson 5.10 scope

- One pointer-down position is measured in the control’s local coordinate system.
- Local pointer X/Y are normalized into `TransformOrigin` fractions.
- Pressed state is Boolean. It is not physical pressure or force.
- The Boolean selects press target `1` or released target `0`.
- A current press amount `q` may lie between those targets while a spring moves.
- `q` drives horizontal scale, vertical scale, and corner radius.
- The pointer-derived pivot remains stationary during scale.
- Release and cancellation both clear the pressed state.

## Current layout decision

Lesson 5.10 uses the normal two-column layout: diagram and stepper remain visible together at `1920×1080`. A full-width diagram with a hidden stepper is reserved for lessons whose visual evidence genuinely needs that space.

## Canonical course examples

- **Lesson 4.8 — Masks:** visual-first intermediate images, explicit targets, per-position trace, and color/value annotations.
- **Lesson 4.9 — Soft edges and antialiasing:** difficult concepts receive as many learner-visible states as required; every untaught term is introduced before use.
- **Lessons 5.8–5.9:** variable ledger → symbolic formula → substituted values → intermediate values → result and consumer.

## Permanent sources of truth

- `USER_PREFERENCES.md` — user-wide and course-specific preferences.
- `AGENTS.md` — repository rules and lesson-quality gates.
- `CURRENT_STATE.md` — only the current authoritative status.
- `curriculum/liquid_glass_android_curriculum.md` — full 216-lesson plan plus concise implementation status.
- `curriculum/liquid_glass_android_handoff.md` — concise continuation handoff.

## Recent lesson-quality update

- Consolidated Lesson 5.8 now includes a dependency cheat sheet beside the complete moment matrix and a live selected-tick causal chain.
- Dependency arrows are conditional: every row states which other inputs are held fixed.

## State-file hygiene

Historical patch-by-patch narratives were compacted in version 5.10.0. Lesson HTML, Kotlin source, prior ZIPs, and version control preserve implementation history. Current-state files no longer duplicate that history.

## Delivery rules

- Deliver only changed files in incremental learning-docs and Android ZIPs.
- Do not create an empty Android ZIP.
- Count only explicit learner completion.
- Include complete-screen and direct-child light/dark previews when the active Android lesson changes.

Course progress: 48 of 216 lessons completed.


## 2026-08-10 visual-quality repair for consolidated 5.8/5.9

- The first consolidation flattened lesson design too much. The repaired consolidated Lesson 5.8 restores the advanced course visual language: hero/status area, prominent all-formulas panel, rich trace graphs, side-by-side stepper, and a paged moment-by-moment variable matrix.
- Memory files should remain compact but structured as rule indexes, not as deleted guidance. Preserve canonical exemplar summaries and current state; avoid patch-by-patch logs.

## Consolidated 5.8/5.9 trace repair

- The authoritative consolidated Lesson 5.8 now uses one global tick-to-X mapping for every curve segment and selected marker.
- Displacement and spring pull share one Y scale and both receive selected-tick markers.
- The moment matrix uses variables as rows and ticks as columns, shows as many ticks as the viewport permits, and pages horizontally when required.
- The 24-state causal stepper and the prediction, challenge, exercises, review checkpoint, and evidence-boundary sections are present.
- Progress remains 48 of 216; Lesson 5.10 remains the current unresolved checkpoint.
