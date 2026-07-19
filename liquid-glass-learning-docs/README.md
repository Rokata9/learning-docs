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
- Glossary starter
- Chapter 1 hub
- Lesson 1.1: **Name the visible ingredients**
- Lesson 1.2: **Observe the transition one state at a time**
- Lesson 1.3: **Create the Android project and prove the path to pixels**
- Updated curriculum and conversation handoff

## Current lesson

```text
course/chapters/chapter-01/lesson-01-03-create-the-android-project.html
```

Lesson 1.3 creates the separate `LiquidGlassLab` project. Run the untouched Empty Activity template on the Pixel 8 Pro first. Then apply `LiquidGlassLab-lesson-01-03-source-overlay.zip`. The overlay contains only `MainActivity.kt` and `Chapter01Screen.kt`; it does not replace the generated Gradle, manifest, resource, or theme files. The learning-docs repository still contains no Android source tree.

## Naming rule

Chapter hubs use descriptive names such as:

```text
lesson-a-transparent-panel-is-not-yet-liquid-glass.html
```

Sub-lessons use numbered descriptive names such as:

```text
lesson-01-01-visible-ingredients.html
```

Generic chapter `index.html` files are not used.
