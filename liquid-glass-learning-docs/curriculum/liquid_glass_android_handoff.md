# Liquid Glass on Android — Conversation Handoff

**Course plan version:** 3.4  
**Updated:** 2026-07-25  
**Current position:** Lessons 1.1 through 3.3 are complete by learner confirmation. **20 of 216 lessons are complete.** Lesson 3.4 is generated and is the next learner checkpoint.

## Permanent course rules

- The learner is a senior web engineer and an absolute beginner in mathematics, graphics programming, shaders, GPU concepts, color science, and Android rendering internals.
- Use simple English. Define every new graphics or mathematical term at first use.
- Introduce one main graphics idea and at most one main mathematical idea per lesson.
- Trace one actual value through exact input → operation → output.
- Use one standalone interactive HTML file per lesson. It must work from `file://` with inline CSS and JavaScript.
- Use a manual stepper for a sequence that must be understood one state at a time.
- Include one small coding challenge and two to four exercises with hidden answers.
- Kotlin and AGSL live in the separate `LiquidGlassLab` project.
- Deliver only incremental ZIPs containing files added or changed by the current lesson.
- Preserve Lessons 1.1 through 2.9 as legacy light-only lesson files.
- Starting with Lesson 3.1, new lessons and changed course-navigation HTML follow the OS light or dark preference automatically.
- Android interface chrome uses the project theme and `MaterialTheme.colorScheme`.
- Instructional color data does not change with the OS theme.
- At the end of every response, report learner-confirmed progress and an approximate remaining-context estimate.

## Current progress

```yaml
course: Liquid Glass on Android
course_version: 3.4
platform: Kotlin + Jetpack Compose
learning_device: Pixel 8 Pro
learning_min_sdk: 33
course_lessons_total: 216
course_lessons_completed_by_learner: 20
completed_through: 3.3
generated_frontier: 3.4
next_learner_checkpoint: 3.4
chapter_01_completed_by_learner: true
chapter_02_completed_by_learner: true
chapter_03_completed_by_learner: false
lesson_03_03_generated: true
lesson_03_03_completed_by_learner: true
lesson_03_03_completion_basis: learner explicitly asked to proceed with Lesson 3.4
lesson_03_04_file: course/chapters/chapter-03/lesson-03-04-draw-order-matters.html
lesson_03_04_generated: true
lesson_03_04_completed_by_learner: false
html_theme_rule_from_lesson: 3.1
incremental_delivery_only: true
```

## Current Chapter 3 Android source

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/
├── MainActivity.kt
└── chapter03/
    ├── Chapter03Screen.kt
    ├── RgbChannelsExplorer.kt
    ├── AlphaExplorer.kt
    ├── OverOperationExplorer.kt
    └── DrawOrderExplorer.kt
```

`MainActivity.kt`, `RgbChannelsExplorer.kt`, `AlphaExplorer.kt`, and `OverOperationExplorer.kt` are unchanged in Lesson 3.4.

## Lesson 3.4 — Draw order matters

### Main idea

Draw order is the sequence in which drawing operations write into one drawing target.

At an overlap position:

```text
first colored call
    ↓
creates the lower colored contribution
    ↓
second colored call
    ↓
becomes the current source
```

### Fixed inputs

```text
magenta = RGBA(0.90, 0.10, 0.80, 0.50)
green   = RGBA(0.10, 0.90, 0.40, 0.60)
```

### Magenta over green

```text
source weight      = 0.50
destination weight = 0.60 × (1 - 0.50) = 0.30
output              = RGBA(0.60, 0.40, 0.65, 0.80)
```

### Green over magenta

```text
source weight      = 0.60
destination weight = 0.50 × (1 - 0.60) = 0.20
output              = RGBA(0.30, 0.70, 0.50, 0.80)
```

Both outputs have alpha `0.80`. Their RGB values differ.

### Per-position rule

```text
only one colored layer covers a position
→ reversing the colored calls does not change that position

both colored layers cover a position
→ reversing the calls changes which color is source
```

### Android value path

```text
order button
    ↓
topLayer state
    ↓
when (topLayer)
    ↓
first colored draw call
    ↓
second colored draw call with BlendMode.SrcOver
    ↓
exact overlap output readout
```

### Changed Android files

```text
app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter03/DrawOrderExplorer.kt
```

### Lesson checkpoint

Lesson 3.4 is complete only when:

- [ ] Both incremental ZIPs were applied after Lesson 3.3.
- [ ] The app builds and opens Lesson 3.4.
- [ ] Magenta on top produces `RGBA(0.60, 0.40, 0.65, 0.80)`.
- [ ] Green on top produces `RGBA(0.30, 0.70, 0.50, 0.80)`.
- [ ] Both orders report output alpha `0.80`.
- [ ] The learner can explain why only overlap positions change.
- [ ] The learner can name source and destination from the actual call order.
- [ ] Browser and Android chrome follow OS themes while instructional colors remain exact.
- [ ] The coding challenge and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress: 21 of 216 lessons completed.
Next lesson: 3.5 — Why transparent edges can look wrong.
```

## Next action

Open and complete:

```text
course/chapters/chapter-03/lesson-03-04-draw-order-matters.html
```

Do not generate Lesson 3.5 until Lesson 3.4 is complete or the learner explicitly asks to continue after completing it.

## Reusable continuation prompt

```text
We are continuing my “Liquid Glass on Android” beginner-to-expert course.

Read liquid_glass_android_curriculum.md and liquid_glass_android_handoff.md first.

Assume I am a senior web engineer and an absolute beginner in mathematics, graphics programming, shaders, GPU concepts, color science, and Android rendering internals. Use simple English. Define each new term. Trace one real value through input → operation → output.

Use one standalone interactive HTML file per lesson. Use inline CSS and JavaScript. Starting with Lesson 3.1, follow the OS light/dark preference automatically. Preserve exact instructional colors across themes. Use manual steppers for sequences. Include a coding challenge, two to four hidden-answer exercises, and a copyable completion record.

Kotlin and AGSL live in the separate LiquidGlassLab project. Deliver only incremental ZIPs containing files changed by the lesson. Do not create an empty Android ZIP.

At the end of every response, state `Course progress: X of 216 lessons completed.` using learner-confirmed completion only. Then include a clearly labelled approximate remaining-context estimate.

CURRENT COMPLETION RECORD, CODE, SCREENSHOT, OBSERVATION, EXERCISE ANSWERS, OR ERROR:
[paste here]
```
