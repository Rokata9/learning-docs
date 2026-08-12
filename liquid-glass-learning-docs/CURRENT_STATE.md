# Liquid Glass Android course — current state

**Updated:** 2026-08-12  
**Course version:** 5.12.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  

## Authoritative progress

- Learner-confirmed complete: **50 of 216 lessons**.
- Completed through: **Lesson 5.11 — Reversal and interruption**.
- Completed chapters: **1, 2, 3, and 4**.
- Chapter 5: in progress; **11 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 5.12 — Slow-motion controller**.
- Generated frontier: **Lesson 5.12**.
- Next planned after explicit completion: **Lesson 6.1 — Composition, layout, and drawing**.

## Current lesson files

```text
course/chapters/chapter-05/lesson-05-12-slow-motion-controller.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter05/Chapter05Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter05/SlowMotionController.kt
```

## Lesson 5.12 scope

- Separate frame-clock timestamps from locally controlled animation play time.
- Calculate `realDelta`, `scaledDelta = realDelta × speed`, and signed play-time accumulation.
- Pause automatic accumulation without resetting the current animation value.
- Advance one chosen 16 ms debug simulation step while paused.
- Reverse direction by changing the sign of future play-time increments.
- Drive one `TargetBasedAnimation` from manually controlled play time.
- Treat 16 ms as a deterministic debug increment, not a measured physical display frame.

## Android preview rule

- Complete Chapter 5 previews remain in `Chapter05Screen.kt`.
- Direct `SlowMotionController` previews live in `SlowMotionController.kt`.
- Both preview levels have light and dark variants.

## Permanent sources of truth

- `USER_PREFERENCES.md` — learner preferences.
- `AGENTS.md` — repository and lesson-quality gates.
- `CURRENT_STATE.md` — current authoritative status only.
- `curriculum/liquid_glass_android_curriculum.md` — full plan and concise implementation state.
- `curriculum/liquid_glass_android_handoff.md` — continuation handoff.

Course progress: 50 of 216 lessons completed.
