# Liquid Glass on Android — Conversation Handoff

**Course plan version:** 3.2  
**Updated:** 2026-07-25  
**Current position:** Lessons 1.1 through 3.1 are complete by learner confirmation. **18 of 216 lessons are complete.** Lesson 3.2 is generated and is the next learner checkpoint.

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
- Starting with Lesson 3.1, new lessons and changed course navigation HTML follow the OS light or dark preference automatically.
- Android interface chrome uses the project theme and `MaterialTheme.colorScheme`.
- Instructional color data does not change with the OS theme.
- At the end of every response, report learner-confirmed progress and an approximate remaining-context estimate.

## Current progress

```yaml
course: Liquid Glass on Android
course_version: 3.2
platform: Kotlin + Jetpack Compose
learning_device: Pixel 8 Pro
learning_min_sdk: 33
course_lessons_total: 216
course_lessons_completed_by_learner: 18
completed_through: 3.1
generated_frontier: 3.2
next_learner_checkpoint: 3.2
chapter_01_completed_by_learner: true
chapter_02_completed_by_learner: true
chapter_03_completed_by_learner: false
lesson_03_01_generated: true
lesson_03_01_completed_by_learner: true
lesson_03_01_completion_basis: learner said the revised lesson was ready and explicitly requested the next lesson
lesson_03_02_file: course/chapters/chapter-03/lesson-03-02-alpha.html
lesson_03_02_generated: true
lesson_03_02_completed_by_learner: false
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
    └── AlphaExplorer.kt
```

`MainActivity.kt` and `RgbChannelsExplorer.kt` are unchanged in Lesson 3.2.

## Lesson 3.2 — Alpha

### Main idea

Alpha is the fourth channel in an RGBA color.

In this lesson, alpha stores source opacity:

```text
alpha = 0.00  → no visible source contribution
alpha = 0.50  → partial source contribution
alpha = 1.00  → full source opacity
```

The source RGB stays fixed:

```text
RGB(0.80, 0.25, 0.60)
```

Only this value changes:

```text
RGBA(0.80, 0.25, 0.60, alpha)
```

### Important diagnostic

Lower alpha is not the same as lower brightness.

Lower alpha means:

```text
less source influence
more visible background influence
```

The same source and the same alpha therefore look different over dark navy and pale yellow.

### Important alpha-zero distinction

The straight-RGBA tuple can retain non-zero RGB values at alpha zero:

```text
RGBA(0.80, 0.25, 0.60, 0.00)
```

The source is invisible when drawn, but that does not prove the RGB numbers were erased. Premultiplied storage is deferred to Lesson 3.5.

### Android value path

```text
Slider or preset
    ↓
alpha state
    ↓
Color(
    red = 0.80f,
    green = 0.25f,
    blue = 0.60f,
    alpha = alpha,
)
    ↓
Canvas.drawRect(color = sourceColor)
    ↓
visible result over checkerboard or fixed background
```

### Changed Android files

```text
app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter03/AlphaExplorer.kt
```

### Lesson checkpoint

Lesson 3.2 is complete only when:

- [ ] Both incremental ZIPs were applied after Lesson 3.1.
- [ ] The app builds and opens Lesson 3.2.
- [ ] All five alpha presets work.
- [ ] Changing alpha leaves red, green, and blue unchanged.
- [ ] The same alpha differs over dark navy and pale yellow.
- [ ] Alpha zero reveals the checkerboard while the displayed straight-RGBA RGB values remain non-zero.
- [ ] The learner can explain why alpha is not a brightness control.
- [ ] Browser and Android chrome follow OS light and dark preferences while instructional colors remain exact.
- [ ] The coding challenge and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress: 19 of 216 lessons completed.
Next lesson: 3.3 — The “over” operation.
```

## Next action

Open and complete:

```text
course/chapters/chapter-03/lesson-03-02-alpha.html
```

Do not generate Lesson 3.3 until Lesson 3.2 is complete or the learner explicitly asks to continue after completing it.

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
