# Liquid Glass on Android — Conversation Handoff

**Updated:** 2026-07-21  
**Course plan version:** 2.4

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

The learner explicitly reported Lesson 2.3 complete.

```yaml
course: Liquid Glass on Android
course_version: 2.4
course_lessons_total: 216
course_lessons_completed_by_learner: 11
completed_lessons:
  - 1.1-1.8
  - 2.1-2.3
completed_through: 2.3
generated_frontier: 2.4
next_learner_checkpoint: 2.4
chapter_01_completed_by_learner: true
lesson_02_03_completed_by_learner: true
lesson_02_04_generated: true
lesson_02_04_completed_by_learner: false
completion_basis_for_02_03: learner explicitly reported completion; exercise answers were not submitted for conversational grading
lesson_02_04_android_changed_files:
  - app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
  - app/src/main/java/com/example/liquidglasslab/chapter02/BoundsCenterExplorer.kt
```

## Lesson 2.4 — Width, height, edges, and center

The lesson keeps the rectangle’s top-left origin fixed at `(0, 0)`. Width and height can change independently.

Central formulas:

```text
width = right - left
height = bottom - top

centerX = left + width / 2
centerY = top + height / 2
```

Because left and top are 0 in the first model:

```text
centerX = width / 2
centerY = height / 2
```

The main examples are:

```text
8 × 6 → center (4, 3)
7 × 5 → center (3.5, 2.5)
4 × 4 → center (2, 2)
```

The diagnostic distinction is:

```text
width 8 → right edge X = 8
width 8 → cell indexes 0 through 7
```

Edge 8 closes cell 7. It is not a ninth cell.

## Lesson 2.4 files

Learning file:

```text
course/chapters/chapter-02/lesson-02-04-width-height-edges-and-center.html
```

Android changes:

```text
app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter02/BoundsCenterExplorer.kt
```

Earlier Chapter 2 files remain unchanged.

## Lesson 2.4 checkpoint

Lesson 2.4 is complete only when:

- [ ] The learning-docs and Android updates were applied after Lesson 2.3.
- [ ] The app builds and opens Lesson 2.4 on the Pixel 8 Pro.
- [ ] The learner can define bounds, edge, width, height, and center.
- [ ] The learner can calculate the center of 8 × 6 and 7 × 5 rectangles.
- [ ] The learner can explain right edge 8 versus last cell index 7.
- [ ] The width and height controls were tested independently.
- [ ] The green marker remains at the visual center.
- [ ] The work was committed to Git.

## Next action

Open:

```text
course/chapters/chapter-02/lesson-02-04-width-height-edges-and-center.html
```

After Lesson 2.4 is complete, generate Lesson 2.5: **Pixels, dp, and density**.

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
