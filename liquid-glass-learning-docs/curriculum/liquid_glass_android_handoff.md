# Liquid Glass on Android — Conversation Handoff

**Updated:** 2026-07-19  
**Course plan version:** 2.1

## Stable course decisions

- Kotlin and Jetpack Compose are the Android implementation path.
- The Pixel 8 Pro is the physical learning and verification device.
- The main path uses `minSdk = 33`.
- The dated toolchain snapshot uses `compileSdk = 37` and `targetSdk = 37`. Keep locally generated plugin and dependency versions.
- The learner is a senior web engineer and a mathematics and graphics beginner.
- Use short declarative sentences. Define each graphics, rendering, coordinate, and math term at first use.
- Trace one actual value through input → operation → output.
- Every response ends with a clearly labelled best-effort estimate of remaining context tokens.
- Do not use a third-party glass-effect library for the main implementation.
- Do not claim to know Apple’s private rendering implementation.

## Delivery rules

- The learning-docs and Android repositories are separate.
- Chapter hubs use `lesson-[chapter-name].html`, never `index.html`.
- Each lesson is one standalone HTML file with inline CSS and JavaScript and must work from `file://`.
- Light desktop layout only. Verify at 1920×1080 and at 5120×1440 when the wide layout benefits.
- Each lesson includes a coding challenge, two to four hidden-answer exercises, and a copyable completion record.
- Incremental ZIPs contain only files changed by that lesson and preserve the repository root path.
- Do not create an empty Android ZIP when a lesson changes no Android source.

## Progress truth

The learner asked for four lessons to be generated before being away from chat. Generation and completion are separate states.

```yaml
course: Liquid Glass on Android
course_version: 2.1
generated_frontier: 2.1
next_learner_checkpoint: 1.7
required_order:
  - 1.7
  - 1.8
  - 2.1
  - 2.2
lessons_01_01_through_01_06_completed_by_learner: true
lesson_01_06_completion_basis: learner reported everything else clear; the remaining question about channel value 0.40 was answered and inserted into the lesson
lesson_01_07_generated: true
lesson_01_07_completed_by_learner: false
lesson_01_08_generated: true
lesson_01_08_completed_by_learner: false
lesson_02_01_generated: true
lesson_02_01_completed_by_learner: false
lesson_01_07_android_changed_files:
  - app/src/main/java/com/example/liquidglasslab/chapter01/Chapter01Screen.kt
  - app/src/main/java/com/example/liquidglasslab/chapter01/TranslucentRoundedPanel.kt
  - app/src/main/java/com/example/liquidglasslab/chapter01/OpacityExperimentControls.kt
lesson_01_08_android_source_changed: false
lesson_02_01_android_changed_files:
  - app/src/main/java/com/example/liquidglasslab/MainActivity.kt
  - app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
  - app/src/main/java/com/example/liquidglasslab/chapter02/EnlargedPixelGrid.kt
```

Do not mark Lessons 1.7, 1.8, 2.1, or 2.2 complete merely because their files exist.

## Clarification added to Lesson 1.6

`0.40` is one normalized red, green, or blue channel value at one image position. It is not a complete color. RGBA still contains red, green, blue, and alpha. The same structure can be written with normalized floats or integer channels.

```text
normalized RGBA: (0.40, 0.65, 0.90, 1.00)
approximate 8-bit RGBA: (102, 166, 230, 255)
```

If all three color channels are `0.40` and alpha is `1.00`, the complete color is approximately opaque gray `#666666`.

## Generated files

- Lesson 1.7: `course/chapters/chapter-01/lesson-01-07-pixel-8-pro-experiment.html`
- Lesson 1.8: `course/chapters/chapter-01/lesson-01-08-diagnosis-and-checkpoint.html`
- Lesson 2.1: `course/chapters/chapter-02/lesson-02-01-what-a-pixel-is.html`
- Chapter 2 hub: `course/chapters/chapter-02/lesson-the-screen-is-a-grid.html`

## Lesson sequence

### Lesson 1.7 — controlled Pixel 8 Pro opacity experiment

Change only panel alpha. Capture 0%, 25%, 50%, 75%, and 100%. Keep the background, bounds, corner radius, source color, orientation, and window fixed. Android adds `OpacityExperimentControls.kt` and makes panel alpha state-driven.

### Lesson 1.8 — diagnosis and Chapter 1 checkpoint

Use observations and source traces to classify translucency as present and blur, refraction, highlight, shadow, and morphing as absent. No Android source changes.

### Lesson 2.1 — what a pixel is

Switch the app to `Chapter02Screen`. Draw an enlarged 8×8 raster teaching image. One large cell represents one raster position. It is not one physical Pixel 8 Pro display pixel.

### Lesson 2.2 — the X axis

Keep the selected row fixed at 3. Move the selected column from X = 0 through X = 7. Separate the grid coordinate from SVG-local drawing pixels and physical screen pixels.

## Next action

Apply and complete the generated updates in exactly this order:

```text
1. Lesson 1.7 learning-docs ZIP
2. Lesson 1.7 Android code ZIP
3. Complete and test Lesson 1.7
4. Lesson 1.8 learning-docs ZIP
5. Complete Lesson 1.8
6. Lesson 2.1 learning-docs ZIP
7. Lesson 2.1 Android code ZIP
8. Complete and test Lesson 2.1
9. Lesson 2.2 learning-docs ZIP
10. Lesson 2.2 Android code ZIP
11. Complete and test Lesson 2.2
```

Lesson 1.8 has no Android archive because it changes no Android source.

## Reusable continuation prompt

```text
We are continuing my “Liquid Glass on Android” beginner-to-expert course.

Read liquid_glass_android_curriculum.md and liquid_glass_android_handoff.md first.

Assume I am a senior web engineer and an absolute beginner in mathematics, graphics programming, shaders, GPU concepts, and Android rendering internals. Use simple English. Define each new term. Use short declarative sentences. Trace one real value through input → operation → output.

The course files may be generated ahead of my completion. Follow `next_learner_checkpoint` and `required_order` from the handoff. Do not infer completion from file existence.

Use one standalone interactive HTML file per lesson. Use inline CSS and JavaScript. Light desktop layout only. Use manual steppers for sequences. Include a coding challenge, two to four hidden-answer exercises, and a copyable completion record.

Kotlin and AGSL live in the separate LiquidGlassLab project. Deliver only incremental ZIPs containing files changed by the lesson. Do not create an empty Android ZIP.

At the end of every response, include a clearly labelled best-effort estimate of the remaining conversation context window in tokens and state that it is approximate.

CURRENT COMPLETION RECORD, CODE, SCREENSHOT, OBSERVATION, EXERCISE ANSWERS, OR ERROR:
[paste here]
```
