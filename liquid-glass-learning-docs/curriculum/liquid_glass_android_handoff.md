# Liquid Glass on Android — Conversation Handoff

**Course plan version:** 3.3  
**Updated:** 2026-07-25  
**Current position:** Lessons 1.1 through 3.2 are complete by learner confirmation. **19 of 216 lessons are complete.** Lesson 3.3 is generated and is the next learner checkpoint.

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
course_version: 3.3
platform: Kotlin + Jetpack Compose
learning_device: Pixel 8 Pro
learning_min_sdk: 33
course_lessons_total: 216
course_lessons_completed_by_learner: 19
completed_through: 3.2
generated_frontier: 3.3
next_learner_checkpoint: 3.3
chapter_01_completed_by_learner: true
chapter_02_completed_by_learner: true
chapter_03_completed_by_learner: false
lesson_03_02_generated: true
lesson_03_02_completed_by_learner: true
lesson_03_02_completion_basis: learner explicitly asked to proceed with the next lesson
lesson_03_03_file: course/chapters/chapter-03/lesson-03-03-the-over-operation.html
lesson_03_03_generated: true
lesson_03_03_completed_by_learner: false
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
    └── OverOperationExplorer.kt
```

`MainActivity.kt`, `RgbChannelsExplorer.kt`, and `AlphaExplorer.kt` are unchanged in Lesson 3.3.

## Lesson 3.3 — The over operation

### Main idea

Source-over compositing combines the source being drawn now with the destination already present at the same drawing-target position.

```text
source      = RGBA(0.90, 0.10, 0.80, 0.50)
destination = RGBA(0.10, 0.90, 0.40, 0.60)
```

### Output alpha

```text
opening behind source
= 1 - 0.50
= 0.50
```

```text
surviving destination alpha
= 0.60 × 0.50
= 0.30
```

```text
output alpha
= 0.50 + 0.30
= 0.80
```

### RGB result

```text
weighted red   = 0.48
weighted green = 0.32
weighted blue  = 0.52
```

Divide each by output alpha `0.80`:

```text
output = RGBA(0.60, 0.40, 0.65, 0.80)
```

### Android value path

```text
source-alpha and destination-alpha controls
    ↓
StraightRgba source and destination
    ↓
sourceOver(source, destination)
    ↓
output alpha and weighted RGB values
    ↓
straight output RGBA
    ↓
compare two paths:
  destination then source using BlendMode.SrcOver
  one calculated flattened output color
```

### Changed Android files

```text
app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter03/OverOperationExplorer.kt
```

### Lesson checkpoint

Lesson 3.3 is complete only when:

- [ ] Both incremental ZIPs were applied after Lesson 3.2.
- [ ] The app builds and opens Lesson 3.3.
- [ ] Course values produce output `RGBA(0.60, 0.40, 0.65, 0.80)`.
- [ ] The renderer stack and flattened output look the same over the checkerboard.
- [ ] The learner can calculate output alpha.
- [ ] The learner can calculate each output RGB channel.
- [ ] The learner can explain why the destination factor is `Ad × (1 - As)`.
- [ ] Opaque-source and all-transparent boundary cases are tested.
- [ ] Browser and Android chrome follow OS themes while instructional colors remain exact.
- [ ] The coding challenge and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress: 20 of 216 lessons completed.
Next lesson: 3.4 — Draw order matters.
```

## Next action

Open and complete:

```text
course/chapters/chapter-03/lesson-03-03-the-over-operation.html
```

Do not generate Lesson 3.4 until Lesson 3.3 is complete or the learner explicitly asks to continue after completing it.

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
