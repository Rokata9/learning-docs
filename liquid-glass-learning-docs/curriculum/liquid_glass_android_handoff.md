# Liquid Glass on Android — Conversation Handoff

**Updated:** 2026-07-23  
**Course plan version:** 2.7

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

The learner completed Lesson 2.6 and asked to continue with the next lesson.

```yaml
course: Liquid Glass on Android
course_version: 2.7
course_lessons_total: 216
course_lessons_completed_by_learner: 14
completed_lessons:
  - 1.1-1.8
  - 2.1-2.6
completed_through: 2.6
generated_frontier: 2.7
next_learner_checkpoint: 2.7
chapter_01_completed_by_learner: true
lesson_02_06_completed_by_learner: true
lesson_02_07_generated: true
lesson_02_07_completed_by_learner: false
completion_basis_for_02_06: learner asked to continue with the next lesson after Lesson 2.6
lesson_02_07_android_changed_files:
  - app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
  - app/src/main/java/com/example/liquidglasslab/chapter02/ParentScreenCoordinatesExplorer.kt
```

## Lesson 2.7 — Parent, window, and screen coordinates

The measured object is one concrete position: the control's top-left corner.

The lesson names three larger coordinate systems:

```text
parent-local position
    The control top-left measured from the parent content origin.

window-relative position
    The control top-left measured from the application-window origin.

screen-relative position
    The control top-left measured from the device-screen origin.
```

The controlled teaching derivation uses:

```text
control in parent = (130, 90)
parent in window  = (180, 120)
window on screen  = (40, 60)

control in window
= parent in window + control in parent
= (180 + 130, 120 + 90)
= (310, 210)

control on screen
= window on screen + control in window
= (40 + 310, 60 + 210)
= (350, 270)
```

The Android value path is:

```text
onGloballyPositioned receives final LayoutCoordinates
    ↓
positionInParent() returns the control top-left relative to the parent
positionInWindow() returns the control top-left relative to the app window
positionOnScreen() returns the control top-left relative to the device screen
    ↓
state stores the three readings
    ↓
text rows display each value with its coordinate-system name
    ↓
independent addition checks compare calculated and measured positions
```

`positionOnScreen()` can return `Offset.Unspecified` when the conversion cannot be performed. The explorer treats non-finite components as unavailable. It displays `not available`. It does not replace unavailable data with the valid position `(0, 0)`.

A full-screen phone window can begin at the screen origin. In that case, window-relative and screen-relative numbers can be equal. Equal values do not make the two coordinate systems identical.

Lesson 2.8 introduces normalized coordinates. It is not generated yet.

## Lesson 2.7 files

Learning file:

```text
course/chapters/chapter-02/lesson-02-07-parent-window-and-screen-coordinates.html
```

Android changes:

```text
app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter02/ParentScreenCoordinatesExplorer.kt
```

Earlier Chapter 2 Android files remain unchanged.

## Lesson 2.7 checkpoint

Lesson 2.7 is complete only when:

- [ ] Both incremental archives were applied after the completed Lesson 2.6 state.
- [ ] The app builds and opens Lesson 2.7 on the Pixel 8 Pro.
- [ ] Placement A and Placement B both move the measured control.
- [ ] The three coordinate readings are inspected for both placements.
- [ ] The learner identifies the origin used by every displayed pair.
- [ ] The parent-to-window calculated value agrees with the measured value.
- [ ] The window-to-screen result is inspected, including any `not available` state.
- [ ] The coding challenge and final exercises are completed.
- [ ] The work is committed to Git.

## Next action

Open:

```text
course/chapters/chapter-02/lesson-02-07-parent-window-and-screen-coordinates.html
```

After Lesson 2.7 is complete, generate Lesson 2.8: **Normalized coordinates**.

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
