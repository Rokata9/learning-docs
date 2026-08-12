# Liquid Glass Android course — current state

**Updated:** 2026-08-11  
**Course version:** 5.11.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro

## Authoritative progress

- Learner-confirmed complete: **48 of 216 lessons**.
- Completed through: **Lesson 5.9 — Overshoot and settle**.
- Completed chapters: **1, 2, 3, and 4**.
- Chapter 5: in progress.
- Current unresolved checkpoint: **Lesson 5.10 — Press deformation**.
- Generated frontier: **Lesson 5.11 — Reversal and interruption**.
- Generated ahead while Lesson 5.10 remains unresolved: **Lesson 5.11 — Reversal and interruption**.
- Next planned after Lesson 5.11: **Lesson 5.12 — Slow-motion controller**.

## Current unresolved and generated-ahead files

```text
course/chapters/chapter-05/lesson-05-10-press-deformation.html  # unresolved
course/chapters/chapter-05/lesson-05-11-reversal-and-interruption.html  # generated ahead
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter05/Chapter05Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter05/ReversalInterruptionExplorer.kt
```

## Lesson 5.10 contract

- One pointer-down point `P = (pₓ, pᵧ)` is measured in the control's local pixel coordinate system.
- Runtime width `W` and height `H` normalize P into pivot fractions `(fₓ, fᵧ)`.
- Pressed state `b` is Boolean. It selects `q_target = 1` while active and `0` after release/cancellation.
- Current animated amount `q` drives horizontal scale, vertical scale, and local corner radius.
- Pivoted scale is proved by tracking the right-edge point and the top-left point.
- `graphicsLayer` changes drawing while the measured layout bounds remain unchanged.
- Browser lesson: inspectable 20-state derivation with manual q.
- Android explorer: actual Compose press lifecycle, spring animation, graphics layer, overlays, light/dark full-screen and child previews.

## Canonical quality references

- **Lesson 4.8:** visual-first intermediate objects and explicit operation boundaries.
- **Lesson 4.9:** difficult concepts receive as many learner-visible states as required.
- **Consolidated Lesson 5.8:** prominent formulas, dependency traces, aligned graphs, and moment matrix.

## State-file hygiene

Keep this file authoritative and brief. Permanent rules live in `AGENTS.md` and `USER_PREFERENCES.md`; complete teaching detail lives in lesson HTML and Kotlin.

## Lesson 5.11 contract

- A new target request changes target `T` immediately while current progress `q` and velocity `v` remain continuous.
- The browser compares continuity-preserving reversal with velocity reset and value snap defects.
- The course trace uses two interruptions and shows that motion may continue briefly in the old direction.
- Android uses one `Animatable`; a new `animateTo` request cancels the in-flight request and continues from current value and velocity.
- Lesson 5.10 remains incomplete.

Course progress: 48 of 216 lessons completed.
