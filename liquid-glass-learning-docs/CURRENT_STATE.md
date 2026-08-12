# Liquid Glass Android course — current state

**Updated:** 2026-08-12  
**Course version:** 6.1.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  

## Authoritative progress

- Learner-confirmed complete: **51 of 216 lessons**.
- Completed through: **Lesson 5.12 — Slow-motion controller**.
- Completed chapters: **1, 2, 3, 4, and 5**.
- Chapter 6: in progress; **0 of 11 lessons complete**.
- Current unresolved checkpoint: **Lesson 6.1 — Composition, layout, and drawing**.
- Generated frontier: **Lesson 6.1**.
- Next planned after explicit completion: **Lesson 6.2 — Draw order and ownership**.

## Current lesson files

```text
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
course/chapters/chapter-06/lesson-06-01-composition-layout-and-drawing.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/CompositionLayoutDrawingExplorer.kt
```

## Lesson 6.1 scope

- Composition decides which UI nodes exist and outputs a UI tree.
- Layout consumes the tree and constraints, measures nodes, and places them.
- Drawing consumes placed geometry and paint data and produces visible pixels.
- The controlled browser model separates one composition input, one layout input, and one drawing input.
- The Android explorer deliberately reads badge state in composition, inset state in layout, and fill-color state in drawing.
- Phase-specific state reads are introduced as an implementation boundary, not as a promise that every similar-looking change always restarts only one phase.

## Android preview rule

- Complete Chapter 6 previews live in `Chapter06Screen.kt`.
- Direct `CompositionLayoutDrawingExplorer` previews live in `CompositionLayoutDrawingExplorer.kt`.
- Both preview levels have light and dark variants.

## Permanent sources of truth

- `USER_PREFERENCES.md` — learner preferences.
- `AGENTS.md` — repository and lesson-quality gates.
- `CURRENT_STATE.md` — current authoritative status only.
- `curriculum/liquid_glass_android_curriculum.md` — full plan and concise implementation state.
- `curriculum/liquid_glass_android_handoff.md` — continuation handoff.

Course progress: 51 of 216 lessons completed.
