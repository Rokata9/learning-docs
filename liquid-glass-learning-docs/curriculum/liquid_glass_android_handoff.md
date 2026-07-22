# Liquid Glass on Android — Conversation Handoff

**Updated:** 2026-07-22  
**Course plan version:** 2.5

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

The learner explicitly reported Lesson 2.4 complete.

```yaml
course: Liquid Glass on Android
course_version: 2.5
course_lessons_total: 216
course_lessons_completed_by_learner: 12
completed_lessons:
  - 1.1-1.8
  - 2.1-2.4
completed_through: 2.4
generated_frontier: 2.5
next_learner_checkpoint: 2.5
chapter_01_completed_by_learner: true
lesson_02_04_completed_by_learner: true
lesson_02_05_generated: true
lesson_02_05_completed_by_learner: false
completion_basis_for_02_04: learner explicitly said ready for the next lesson; exercise answers were not submitted for conversational grading
lesson_02_05_android_changed_files:
  - app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
  - app/src/main/java/com/example/liquidglasslab/chapter02/DensityExplorer.kt
```

## Lesson 2.5 — Pixels, dp, and density

The lesson keeps these three values separate:

```text
dp       = Android layout unit
px       = Canvas and raster drawing coordinate unit
density  = runtime px-per-dp conversion scale
```

Central formulas:

```text
px = dp × density
dp = px ÷ density
```

The browser begins with this teaching example:

```text
96 dp × 2.75 px per dp = 264 px
```

The Android app does not assume that the Pixel 8 Pro uses density 2.75. It reads:

```kotlin
val density = LocalDensity.current
```

The Android trace is:

```text
selectedDp = 96
    ↓
requestedSize = 96.dp
    ↓
LocalDensity.current
    ↓
requestedSize.toPx()        // Float px distance
requestedSize.roundToPx()   // Int px count
    ↓
Modifier.size(requestedSize)
    ↓
onSizeChanged { measured px size }
    ↓
Canvas size.width and size.height in px
```

A 16.dp drawing inset is converted before it is used in Canvas-local coordinates:

```kotlin
val canvasInsetPx = with(density) {
    16.dp.toPx()
}
```

The lesson also compares:

```text
red line   = 1 px
green line = 1 dp converted to px
```

## Lesson 2.5 files

Learning file:

```text
course/chapters/chapter-02/lesson-02-05-pixels-dp-and-density.html
```

Android changes:

```text
app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter02/DensityExplorer.kt
```

Earlier Chapter 2 files remain unchanged.

## Lesson 2.5 checkpoint

Lesson 2.5 is complete only when:

- [ ] The learning-docs and Android updates were applied after Lesson 2.4.
- [ ] The app builds and opens Lesson 2.5 on the Pixel 8 Pro.
- [ ] The learner can define dp, px, and density.
- [ ] The learner recorded the runtime density reported by the app.
- [ ] The 48.dp, 72.dp, 96.dp, and 120.dp presets were tested.
- [ ] The measured integer px size agrees with the rounded conversion shown by the app.
- [ ] The red 1 px and green 1 dp lines were compared.
- [ ] The learner can explain why a dp design distance must be converted before use as a Canvas or shader distance.
- [ ] The work was committed to Git.

## Next action

Open:

```text
course/chapters/chapter-02/lesson-02-05-pixels-dp-and-density.html
```

After Lesson 2.5 is complete, generate Lesson 2.6: **Local coordinates**.

## Reusable continuation prompt

```text
We are continuing my “Liquid Glass on Android” beginner-to-expert course.

Read liquid_glass_android_curriculum.md and liquid_glass_android_handoff.md first.

Assume I am a senior web engineer and an absolute beginner in mathematics, graphics programming, shaders, GPU concepts, and Android rendering internals. Use simple English. Define each new term. Use short declarative sentences. Trace one real value through input → operation → output.

Use one standalone interactive HTML file per lesson. Use inline CSS and JavaScript. Light desktop layout only. Use manual steppers for sequences. Include a coding challenge, two to four hidden-answer exercises, and a copyable completion record.

Kotlin and AGSL live in the separate LiquidGlassLab project. Deliver only incremental ZIPs containing files changed by the lesson. Do not create an empty Android ZIP.

At the end of every response, state `Course progress: X of 216 lessons completed.` using learner-confirmed completion only. Then include a clearly labelled best-effort estimate of the remaining conversation context window in tokens.

CURRENT COMPLETION RECORD, CODE, SCREENSHOT, OBSERVATION, EXERCISE ANSWERS, OR ERROR:
[paste here]
```
