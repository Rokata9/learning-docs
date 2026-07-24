# Liquid Glass on Android — Conversation Handoff

**Updated:** 2026-07-24  
**Course plan version:** 2.9

## Stable course decisions

- Kotlin and Jetpack Compose are the Android implementation path.
- The Pixel 8 Pro is the physical learning and verification device.
- The main path uses `minSdk = 33`.
- The learner is a senior web engineer and a mathematics and graphics beginner.
- Use short declarative sentences. Define each graphics, rendering, coordinate, input, and math term at first use.
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

The learner completed Lesson 2.8 and asked to continue.

```yaml
course: Liquid Glass on Android
course_version: 2.9
course_lessons_total: 216
course_lessons_completed_by_learner: 16
completed_lessons:
  - 1.1-1.8
  - 2.1-2.8
completed_through: 2.8
generated_frontier: 2.9
next_learner_checkpoint: 2.9
chapter_01_completed_by_learner: true
chapter_02_completed_by_learner: false
lesson_02_08_completed_by_learner: true
lesson_02_09_generated: true
lesson_02_09_completed_by_learner: false
completion_basis_for_02_08: learner said they were ready and asked for the next lesson after Lesson 2.8
lesson_02_09_android_changed_files:
  - app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
  - app/src/main/java/com/example/liquidglasslab/chapter02/CoordinateInspector.kt
```

## Lesson 2.9 — Build a coordinate inspector

A coordinate inspector is a diagnostic view that shows one point together with the coordinate system and unit used by every number.

The Android inspector displays:

```text
local bounds
local center
pointer in local px
pointer in local dp
pointer normalized
inspector origin in parent
pointer in parent
pointer in window
pointer on screen, when available
```

The visual drawing contains:

```text
local grid
local origin at (0, 0)
orange rectangular bounds
indigo dashed center guides
pink and blue pointer crosshair
selected point marker
```

The main default teaching snapshot is:

```text
inspector size             = 640 × 360 px
pointer local              = (160, 270) px
density                    = 2.5 px/dp
inspector origin in parent = (120, 80) px
parent origin in window    = (180, 100) px
window origin on screen    = (40, 60) px
```

The derived values are:

```text
local center
= (640 / 2, 360 / 2)
= (320, 180) px

normalized pointer
= (160 / 640, 270 / 360)
= (0.25, 0.75)

local dp
= (160 / 2.5, 270 / 2.5)
= (64, 108) dp

pointer in parent
= (120, 80) + (160, 270)
= (280, 350) px

pointer in window
= (180, 100) + (280, 350)
= (460, 450) px

pointer on screen
= (40, 60) + (460, 450)
= (500, 510) px
```

The visible point does not move between these rows. The origin, unit, or numeric scale changes.

## Pointer-input terms

A pointer is a physical object that can point at a coordinate. On the Pixel 8 Pro, it is normally the learner's finger.

A pointer event is one low-level data record produced when a pointer goes down, moves, or goes up.

The Android implementation uses:

```kotlin
.pointerInput(geometry.sizePx) {
    awaitEachGesture {
        val down = awaitFirstDown(requireUnconsumed = false)
        // Read and clamp the position, then track movement events.
    }
}
```

The active pointer changes are consumed. This keeps a drag inside the teaching inspector from becoming vertical scrolling in the parent screen.

## Android value path

```text
LocalDensity.current supplies px per dp
    ↓
onGloballyPositioned copies size and origin positions
    ↓
awaitFirstDown supplies one inspector-local pointer position
    ↓
the point is clamped to local bounds
    ↓
local X is divided by width
local Y is divided by height
    ↓
normalized X and Y are stored
    ↓
current width and height reconstruct local px
    ↓
local px is divided by density for dp
    ↓
local px is added to parent, window, and screen origins
    ↓
Canvas draws the grid, bounds, center, crosshair, and marker
    ↓
text rows display the same state
```

The implementation copies immutable values from `LayoutCoordinates` during `onGloballyPositioned`. It does not keep the `LayoutCoordinates` object in long-lived state.

Simple addition between local and larger coordinates is valid in this lesson because the inspector is not rotated or scaled. Later transformed layouts require a coordinate-conversion API.

## Coding challenge

The defective function adds a normalized pair directly to a screen-relative pixel origin:

```kotlin
return inspectorOriginOnScreenPx + normalizedPoint
```

The repair is:

```kotlin
return inspectorOriginOnScreenPx + pointerLocalPx
```

Both operands in the repaired addition are pixel offsets.

## Lesson 2.9 files

Learning file:

```text
course/chapters/chapter-02/lesson-02-09-build-a-coordinate-inspector.html
```

Android changes:

```text
app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter02/CoordinateInspector.kt
```

Earlier Chapter 2 Android files remain unchanged.

## Lesson 2.9 checkpoint

Lesson 2.9 is complete only when:

- [ ] Both incremental archives were applied after the completed Lesson 2.8 state.
- [ ] The app builds and opens Lesson 2.9 on the Pixel 8 Pro.
- [ ] The grid, orange bounds, dashed center guides, crosshair, and marker are visible.
- [ ] Touching and dragging inside the inspector updates the local point.
- [ ] The Center preset produces local half-width and half-height and normalized `(0.5, 0.5)`.
- [ ] The Bottom-right boundary preset produces local X = width, local Y = height, and normalized `(1, 1)`.
- [ ] Parent, window, and screen values can be explained without claiming that the point moved.
- [ ] The learner can explain why a normalized pair cannot be added directly to a pixel origin.
- [ ] The coding challenge and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Chapter 2 becomes complete.
Course progress becomes 17 of 216.
Next lesson becomes 3.1 — Red, green, and blue channels.
```

## Next action

Open:

```text
course/chapters/chapter-02/lesson-02-09-build-a-coordinate-inspector.html
```

After Lesson 2.9 is complete, generate Lesson 3.1: **Red, green, and blue channels**.

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
