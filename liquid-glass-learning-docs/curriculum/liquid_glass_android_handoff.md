# Liquid Glass on Android — Conversation Handoff

**Updated:** 2026-07-25  
**Course plan version:** 3.1.1

## Stable course decisions

- Kotlin and Jetpack Compose are the Android implementation path.
- The Pixel 8 Pro is the physical learning and verification device.
- The main path uses `minSdk = 33`.
- The learner is a senior web engineer and a mathematics and graphics beginner.
- Use short declarative sentences. Define each graphics, rendering, coordinate, input, color, and math term at first use.
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
- Desktop layout only.
- Lessons 1.1 through 2.9 remain legacy light-only files. Do not revise them only to add dark mode.
- Starting with Lesson 3.1, every new lesson follows the operating-system light or dark preference automatically through `prefers-color-scheme`.
- Theme chrome adapts. Instructional color data remains numerically exact.
- Verify each changed Lesson 3.1-or-later HTML file in both OS theme modes at 1920×1080 and at 5120×1440 when the wide layout benefits.
- Each lesson includes a coding challenge, two to four hidden-answer exercises, and a copyable completion record.
- Incremental ZIPs contain only files changed by that lesson and preserve the repository root path.
- Do not create an empty Android ZIP when a lesson changes no Android source.

## Progress truth

The learner requested the next lesson after Lesson 2.9. Record Lesson 2.9 and Chapter 2 as completed.

```yaml
course: Liquid Glass on Android
course_version: 3.1.1
course_lessons_total: 216
course_lessons_completed_by_learner: 17
completed_lessons:
  - 1.1-1.8
  - 2.1-2.9
completed_through: 2.9
generated_frontier: 3.1
next_learner_checkpoint: 3.1
chapter_01_completed_by_learner: true
chapter_02_completed_by_learner: true
chapter_03_completed_by_learner: false
lesson_02_09_completed_by_learner: true
lesson_03_01_generated: true
lesson_03_01_completed_by_learner: false
lesson_03_01_theme_revision_applied: pending_learner_application
html_theme_rule_from_lesson: 3.1
legacy_light_only_lessons: 1.1-2.9
completion_basis_for_02_09: learner asked to generate the next lesson after receiving Lesson 2.9
lesson_03_01_android_changed_files:
  - app/src/main/java/com/example/liquidglasslab/MainActivity.kt
  - app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
  - app/src/main/java/com/example/liquidglasslab/chapter03/RgbChannelsExplorer.kt
```

## Lesson 3.1 — Red, green, and blue channels

A color channel is one named numeric component inside a color.

Lesson 3.1 uses three channels:

```text
R = red
G = green
B = blue
```

The default normalized values are:

```text
R = 0.80
G = 0.25
B = 0.60
```

The complete opaque color is:

```text
RGB(0.80, 0.25, 0.60)
```

A normalized value uses the range `0.00` through `1.00`.

The approximate 8-bit values are:

```text
red8   = round(0.80 × 255) = 204
green8 = round(0.25 × 255) = 64
blue8  = round(0.60 × 255) = 153
```

The approximate representations are:

```text
Normalized RGB: RGB(0.80, 0.25, 0.60)
8-bit RGB:      RGB(204, 64, 153)
Hexadecimal:    #CC4099
```

These are different numeric scales for the same three named channel positions.

## Important lesson limit

Alpha is fixed at:

```text
alpha = 1.00
```

Lesson 3.1 does not vary opacity. Lesson 3.2 teaches alpha as a separate number.

The phrase `0.80` means 80% of the allowed numeric channel range in this representation. It does not by itself mean 80% physical screen light output or 80% perceived brightness. Those questions require color-space, display, and luminance knowledge that is taught later.

## Theme behavior added in revision 3.1.1

The operating-system preference is the input:

```text
OS light or dark preference
    ↓
isSystemInDarkTheme()
    ↓
LiquidGlassLabTheme(darkTheme = ...)
    ↓
MaterialTheme.colorScheme
    ↓
page, panel, border, text, and control chrome
```

The exact RGB swatches are excluded from theme recoloring:

```text
RGB(0.80, 0.25, 0.60)
    ↓
Color(red = 0.80, green = 0.25, blue = 0.60, alpha = 1.00)
    ↓
the same swatch in light and dark themes
```

This separation is required. The surrounding interface may adapt. The color data under study must not change.

## Android value path

```text
MainActivity calls Chapter03Screen
    ↓
RgbChannelsExplorer stores red, green, and blue independently
    ↓
one Slider changes one matching state value
    ↓
Color receives named arguments
    ↓
Color(
    red = red,
    green = green,
    blue = blue,
    alpha = 1f,
)
    ↓
Modifier.background consumes finalColor
    ↓
the large swatch displays the three-channel result
```

The Android explorer also displays:

```text
isolated red contribution:   RGB(R, 0, 0)
isolated green contribution: RGB(0, G, 0)
isolated blue contribution:  RGB(0, 0, B)
complete color:              RGB(R, G, B)
```

The exact presets are:

```text
Mixed
Red
Green
Blue
Black
White
```

## Coding challenge

The defective code swaps green and blue:

```kotlin
return Color(
    red = red,
    green = blue,
    blue = green,
    alpha = 1f,
)
```

The repair is:

```kotlin
return Color(
    red = red,
    green = green,
    blue = blue,
    alpha = 1f,
)
```

Each input must reach the matching named channel argument.

## Lesson 3.1 files

Learning files created or changed:

```text
README.md
liquid-glass-course.html
course/glossary.html
course/chapters/chapter-02/lesson-the-screen-is-a-grid.html
course/chapters/chapter-02/lesson-02-09-build-a-coordinate-inspector.html
course/chapters/chapter-03/lesson-color-opacity-and-compositing.html
course/chapters/chapter-03/lesson-03-01-red-green-and-blue-channels.html
curriculum/liquid_glass_android_curriculum.md
curriculum/liquid_glass_android_handoff.md
```

Android changes:

```text
app/src/main/java/com/example/liquidglasslab/MainActivity.kt
app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter03/RgbChannelsExplorer.kt
```

Earlier Android files remain unchanged.

## Lesson 3.1 checkpoint

Lesson 3.1 is complete only when:

- [ ] Both incremental archives were applied after the completed Lesson 2.9 state.
- [ ] The app builds and opens Lesson 3.1 on the Pixel 8 Pro.
- [ ] Red, Green, Blue, Black, White, and Mixed presets work.
- [ ] Changing one slider leaves the other two displayed channel values unchanged.
- [ ] The learner can explain why one channel number is not a complete color.
- [ ] The learner can explain why equal RGB values produce gray in this model.
- [ ] The coding challenge and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 18 of 216.
Next lesson becomes 3.2 — Alpha.
```

## Next action

Open:

```text
course/chapters/chapter-03/lesson-03-01-red-green-and-blue-channels.html
```

First apply the Lesson 3.1 OS-theme revision. After Lesson 3.1 is complete, generate Lesson 3.2: **Alpha**. Every Lesson 3.2-or-later HTML file must support both OS theme modes automatically.

## Reusable continuation prompt

```text
We are continuing my “Liquid Glass on Android” beginner-to-expert course.

Read liquid_glass_android_curriculum.md and liquid_glass_android_handoff.md first.

Assume I am a senior web engineer and an absolute beginner in mathematics, graphics programming, shaders, GPU concepts, color science, and Android rendering internals. Use simple English. Define each new term. Use short declarative sentences. Trace one real value through input → operation → output.

Use one standalone interactive HTML file per lesson. Use inline CSS and JavaScript. Use a desktop layout. Starting with Lesson 3.1, follow the OS light/dark preference automatically with `prefers-color-scheme`; preserve Lessons 1.1–2.9 as legacy light-only files. Keep instructional color data exact while adapting only interface chrome. Use manual steppers for sequences. Include a coding challenge, two to four hidden-answer exercises, and a copyable completion record.

Kotlin and AGSL live in the separate LiquidGlassLab project. Deliver only incremental ZIPs containing files changed by the lesson. Do not create an empty Android ZIP.

At the end of every response, state `Course progress: X of 216 lessons completed.` using learner-confirmed completion only. Then include a clearly labelled best-effort estimate of the remaining conversation context window in tokens.

CURRENT COMPLETION RECORD, CODE, SCREENSHOT, OBSERVATION, EXERCISE ANSWERS, OR ERROR:
[paste here]
```
