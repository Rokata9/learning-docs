# Liquid Glass on Android — Conversation Handoff

**Updated:** 2026-07-21  
**Course plan version:** 2.3

## Stable course decisions

- Kotlin and Jetpack Compose are the Android implementation path.
- The Pixel 8 Pro is the physical learning and verification device.
- The main path uses `minSdk = 33`.
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

The learner explicitly clarified that all four previously generated lessons were completed: 1.7, 1.8, 2.1, and 2.2.

```yaml
course: Liquid Glass on Android
course_version: 2.3
generated_frontier: 2.3
completed_through: 2.2
next_learner_checkpoint: 2.3
lesson_01_07_completed_by_learner: true
lesson_01_08_completed_by_learner: true
chapter_01_completed_by_learner: true
lesson_02_01_completed_by_learner: true
lesson_02_02_completed_by_learner: true
lesson_02_03_generated: true
lesson_02_03_completed_by_learner: false
completion_basis_for_01_07_through_02_02: learner explicitly reported completion; exercise answers were not submitted for conversational grading
lesson_02_03_android_changed_files:
  - app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
  - app/src/main/java/com/example/liquidglasslab/chapter02/EnlargedPixelGrid.kt
  - app/src/main/java/com/example/liquidglasslab/chapter02/YAxisExplorer.kt
```

## Lesson 2.3 — The Y axis

The lesson keeps `X = 4` fixed and changes only Y from 0 through 7.

The central direction rule is:

```text
move down → Y + 1
move up   → Y - 1
```

The lesson distinguishes four related values:

```text
grid-row coordinate:             Y = 5
Android grid-local row center:   187.dp
browser SVG-local handle center: 356 SVG-local px
physical Pixel 8 Pro position:   not calculated yet
```

The Android grid uses 34.dp cells. For Y = 5:

```text
row top    = 5 × 34.dp = 170.dp
row center = 170.dp + 17.dp = 187.dp
```

The browser’s 356-pixel value comes from a separate teaching formula:

```text
96 + 5 × 52 = 356 SVG-local px
```

These numbers must not be treated as interchangeable.

## Lesson 2.3 files

Learning file:

```text
course/chapters/chapter-02/lesson-02-03-the-y-axis.html
```

Android changes:

```text
app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter02/EnlargedPixelGrid.kt
app/src/main/java/com/example/liquidglasslab/chapter02/YAxisExplorer.kt
```

`MainActivity.kt` and `XAxisExplorer.kt` remain unchanged.

## Lesson 2.3 checkpoint

Lesson 2.3 is complete only when:

- [ ] The learning-docs update was applied after Lesson 2.2.
- [ ] The Android code update was applied after Lesson 2.2.
- [ ] The learner can define vertical, Y axis, and coordinate system.
- [ ] The learner can explain that increasing Y moves downward in Android screen coordinates.
- [ ] X remains fixed at 4 while Y changes.
- [ ] Grid Y, Android grid-local dp, browser SVG-local pixels, and physical display pixels remain separate concepts.
- [ ] The slider and both movement buttons were tested on the Pixel 8 Pro.
- [ ] Y remains within 0 through 7.
- [ ] The work was committed to Git.

## Next action

Apply the Lesson 2.3 learning-docs ZIP and Android code ZIP. Then open:

```text
course/chapters/chapter-02/lesson-02-03-the-y-axis.html
```

After Lesson 2.3 is complete, generate Lesson 2.4: **Width, height, edges, and center**.

## Reusable continuation prompt

```text
We are continuing my “Liquid Glass on Android” beginner-to-expert course.

Read liquid_glass_android_curriculum.md and liquid_glass_android_handoff.md first.

Assume I am a senior web engineer and an absolute beginner in mathematics, graphics programming, shaders, GPU concepts, and Android rendering internals. Use simple English. Define each new term. Use short declarative sentences. Trace one real value through input → operation → output.

Use one standalone interactive HTML file per lesson. Use inline CSS and JavaScript. Light desktop layout only. Use manual steppers for sequences. Include a coding challenge, two to four hidden-answer exercises, and a copyable completion record.

Kotlin and AGSL live in the separate LiquidGlassLab project. Deliver only incremental ZIPs containing files changed by the lesson. Do not create an empty Android ZIP.

At the end of every response, include a clearly labelled best-effort estimate of the remaining conversation context window in tokens and state that it is approximate.

CURRENT COMPLETION RECORD, CODE, SCREENSHOT, OBSERVATION, EXERCISE ANSWERS, OR ERROR:
[paste here]
```
