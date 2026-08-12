# Liquid Glass Android course — current state

**Updated:** 2026-08-11  
**Course version:** 5.10.1  
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

## Current lesson files

```text
course/chapters/chapter-05/lesson-05-10-press-deformation.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter05/Chapter05Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter05/PressDeformationExplorer.kt
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

Course progress: 48 of 216 lessons completed.
