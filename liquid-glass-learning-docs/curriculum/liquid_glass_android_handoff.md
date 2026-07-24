# Liquid Glass on Android — Conversation Handoff

**Updated:** 2026-07-24  
**Course plan version:** 2.8

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

The learner completed Lesson 2.7 and asked to continue.

```yaml
course: Liquid Glass on Android
course_version: 2.8
course_lessons_total: 216
course_lessons_completed_by_learner: 15
completed_lessons:
  - 1.1-1.8
  - 2.1-2.7
completed_through: 2.7
generated_frontier: 2.8
next_learner_checkpoint: 2.8
chapter_01_completed_by_learner: true
lesson_02_07_completed_by_learner: true
lesson_02_08_generated: true
lesson_02_08_completed_by_learner: false
completion_basis_for_02_07: learner asked to continue with the next lesson after Lesson 2.7
lesson_02_08_android_changed_files:
  - app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
  - app/src/main/java/com/example/liquidglasslab/chapter02/NormalizedCoordinatesExplorer.kt
```

## Lesson 2.8 — Normalized coordinates

A normalized coordinate describes a local point as a fraction of the drawing area.

The formulas are:

```text
normalizedX = localX / width
normalizedY = localY / height

localX = normalizedX * width
localY = normalizedY * height
```

The fixed teaching example is:

```text
rectangle size = 640 × 360 px
local point    = (160, 270) px

normalizedX = 160 / 640 = 0.25
normalizedY = 270 / 360 = 0.75

normalized point = (0.25, 0.75)
```

The Android value path is:

```text
onSizeChanged stores the real drawing size in px
    ↓
detectTapGestures supplies one point in the rectangle's local px system
    ↓
X is divided by measured width
Y is divided by measured height
    ↓
coerceIn(0f, 1f) enforces the inside-rectangle range
    ↓
normalizedX and normalizedY are stored as relative state
    ↓
Canvas multiplies them by its current width and height
    ↓
the marker is drawn at the new local px position
```

Division performs the normalization. Clamping does not normalize. Clamping only limits a result to a minimum and maximum.

The right and bottom boundaries map to normalized 1. A width-8 rectangle has its right boundary at local X = 8. The last pixel index is 7 and is not the right boundary coordinate.

## Lesson 2.8 files

Learning file:

```text
course/chapters/chapter-02/lesson-02-08-normalized-coordinates.html
```

Android changes:

```text
app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter02/NormalizedCoordinatesExplorer.kt
```

Earlier Chapter 2 Android files remain unchanged.

## Lesson 2.8 checkpoint

Lesson 2.8 is complete only when:

- [ ] Both incremental archives were applied after the completed Lesson 2.7 state.
- [ ] The app builds and opens Lesson 2.8 on the Pixel 8 Pro.
- [ ] The actual measured pixel size was recorded for at least one drawing-area preset.
- [ ] Tapping inside the rectangle updates both local and normalized values.
- [ ] Normalized `(0.25, 0.75)` remains unchanged when the rectangle size changes, while the local px point changes.
- [ ] The edge meanings of 0, 0.5, and 1 are understood.
- [ ] Division-to-normalize and multiplication-to-denormalize are explained in the learner's own words.
- [ ] The coding challenge and four exercises are complete.
- [ ] The work is committed to Git.

## Next action

Open:

```text
course/chapters/chapter-02/lesson-02-08-normalized-coordinates.html
```

After Lesson 2.8 is complete, generate Lesson 2.9: **Build a coordinate inspector**.

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
