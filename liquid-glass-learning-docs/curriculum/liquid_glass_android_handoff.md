# Liquid Glass on Android — Conversation Handoff

**Updated:** 2026-07-22  
**Course plan version:** 2.6

## Stable course decisions

- Kotlin and Jetpack Compose are the Android implementation path.
- The Pixel 8 Pro is the physical learning and verification device.
- The main path uses `minSdk = 33`.
- The learner is a senior web engineer and a mathematics and graphics beginner.
- Use short declarative sentences. Define each graphics, rendering, coordinate, and math term at first use.
- Trace one actual value through input → operation → output.
- Do not use a third-party glass-effect library for the main implementation.
- Do not claim to know Apple’s private rendering implementation.

## Response footer rules

Every response must end with both lines:

```text
Course progress: X of 216 lessons completed.
Estimated remaining context: ~N tokens. This is a best-effort approximation, not an exact measurement.
```

Use only learner-confirmed completion for X. A generated lesson does not count until the learner reports it complete.

## Delivery rules

- The learning-docs and Android repositories are separate.
- Chapter hubs use `lesson-[chapter-name].html`, never `index.html`.
- Each lesson is one standalone HTML file with inline CSS and JavaScript and must work from `file://`.
- Light desktop layout only. Verify at 1920×1080 and at 5120×1440 when the wide layout benefits.
- Each lesson includes a coding challenge, two to four hidden-answer exercises, and a copyable completion record.
- Incremental ZIPs contain only files changed by that lesson and preserve the repository root path.
- Do not create an empty Android ZIP when a lesson changes no Android source.

## Progress truth

The learner explicitly reported Lesson 2.5 complete.

```yaml
course: Liquid Glass on Android
course_version: 2.6
course_lessons_total: 216
course_lessons_completed_by_learner: 13
completed_lessons:
  - 1.1-1.8
  - 2.1-2.5
completed_through: 2.5
generated_frontier: 2.6
next_learner_checkpoint: 2.6
chapter_01_completed_by_learner: true
lesson_02_05_completed_by_learner: true
lesson_02_06_generated: true
lesson_02_06_completed_by_learner: false
completion_basis_for_02_05: learner explicitly said ready and asked to proceed with the next lesson
lesson_02_06_android_changed_files:
  - app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
  - app/src/main/java/com/example/liquidglasslab/chapter02/LocalCoordinatesExplorer.kt
```

## Lesson 2.6 — Local coordinates

A **local coordinate system** is the coordinate system owned by one specific element. In this lesson, the element's top-left corner is local `(0, 0)`.

The lesson keeps these objects separate:

```text
parent-local child origin
    The child's top-left position measured from the parent origin.

child-local point
    The selected point measured from the child's own origin.

parent-local point
    The same selected point measured from the parent origin.
```

Central conversions:

```text
point in parent = child origin in parent + point in child
point in child  = point in parent − child origin in parent
```

Fixed derivation example:

```text
child origin in parent = (180, 100)
point in parent        = (340, 220)

point in child
= (340, 220) − (180, 100)
= (160, 120)
```

The Android value path is:

```text
pointerInput is attached to the child Box
    ↓
detectTapGestures supplies localOffset
    ↓
selectedLocalPx = localOffset
    ↓
Canvas fills the same child bounds
    ↓
drawCircle(center = selectedPoint)
```

The child can move between Placement A and Placement B. The implementation uses `absoluteOffset` so positive placement X always moves right. The green point moves with the child on the device. The stored child-local X and Y values stay unchanged.

Parent, window, and physical-screen coordinates are not inspected in Lesson 2.6. Lesson 2.7 introduces the APIs and conversions needed for those coordinate systems.

## Lesson 2.6 files

Learning file:

```text
course/chapters/chapter-02/lesson-02-06-local-coordinates.html
```

Android changes:

```text
app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter02/LocalCoordinatesExplorer.kt
```

Earlier Chapter 2 Android files remain unchanged.

## Lesson 2.6 checkpoint

Lesson 2.6 is complete only when:

- [ ] Both incremental archives were applied after the completed Lesson 2.5 state.
- [ ] The app builds and opens Lesson 2.6 on the Pixel 8 Pro.
- [ ] Several points were tapped inside the child.
- [ ] The child was moved between Placement A and Placement B.
- [ ] The same child-local point remained unchanged while its visible parent-local position changed.
- [ ] The learner can identify the origin for a child-local value.
- [ ] The learner can calculate one parent-to-child conversion by subtraction.
- [ ] The coding challenge and final exercises were completed.
- [ ] The work was committed to Git.

## Next action

Open:

```text
course/chapters/chapter-02/lesson-02-06-local-coordinates.html
```

After Lesson 2.6 is complete, generate Lesson 2.7: **Parent and screen coordinates**.

## Reusable continuation prompt

```text
We are continuing my “Liquid Glass on Android” beginner-to-expert course.

Read liquid_glass_android_curriculum.md and liquid_glass_android_handoff.md first.

Assume I am a senior web engineer and an absolute beginner in mathematics, graphics programming, shaders, GPU concepts, and Android rendering internals. Use simple English. Define each new term. Use short declarative sentences. Trace one real value through input → operation → output.

Use one standalone interactive HTML file per lesson. Use inline CSS and JavaScript. Use a light desktop layout only. Use manual steppers for sequences. Include a coding challenge, two to four hidden-answer exercises, and a copyable completion record.

Kotlin and AGSL live in the separate LiquidGlassLab project. Deliver only incremental ZIPs containing files changed by the lesson. Do not create an empty Android ZIP.

At the end of every response, state `Course progress: X of 216 lessons completed.` using learner-confirmed completion only. Then include a clearly labelled best-effort estimate of the remaining conversation context window in tokens.

CURRENT COMPLETION RECORD, CODE, SCREENSHOT, OBSERVATION, EXERCISE ANSWERS, OR ERROR:
[paste here]
```
