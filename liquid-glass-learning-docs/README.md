# Liquid Glass on Android — Learning Documents

This repository contains the interactive course documents. The Android Studio project is intentionally separate.

## Start here

Open this file directly in a Chromium-based browser:

```text
liquid-glass-course.html
```

No local web server is required. Every lesson is self-contained and works from `file://`.

## Current delivery

- Course home
- Canonical glossary
- Chapter 1 hub
- Lesson 1.1: **Name the visible ingredients**
- Lesson 1.2: **Observe the transition one state at a time**
- Lesson 1.3: **Create the Android project and prove the path to pixels**
- Lesson 1.4: **Build a study background**
- Updated curriculum and conversation handoff

## Current lesson

```text
course/chapters/chapter-01/lesson-01-04-build-a-study-background.html
```

Lesson 1.4 adds a controlled background to the separate `LiquidGlassLab` project. The Android code-change archive contains only the two files changed by this lesson:

```text
app/src/main/java/com/example/liquidglasslab/chapter01/Chapter01Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter01/StudyBackground.kt
```

The learning-docs repository still contains no Android source tree.

## Incremental delivery rule

New lesson archives contain only files created or modified for that lesson. They preserve repository-relative paths so they can be extracted over the existing learning-docs repository and Android project. Cumulative copies are not produced unless explicitly requested.

## Naming rule

Chapter hubs use descriptive names such as:

```text
lesson-a-transparent-panel-is-not-yet-liquid-glass.html
```

Sub-lessons use numbered descriptive names such as:

```text
lesson-01-04-build-a-study-background.html
```

Generic chapter `index.html` files are not used.
