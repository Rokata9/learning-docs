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
- Lesson 1.5: **Draw a translucent rounded panel**
- Lesson 1.6: **Learn the first alpha-mixture formula**
- Updated curriculum and conversation handoff

## Current lesson

```text
course/chapters/chapter-01/lesson-01-06-alpha-mixture.html
```

Lesson 1.6 explains the one-channel teaching formula already visible in the Lesson 1.5 panel:

```text
result = foreground × alpha + background × (1 − alpha)
```

The course example uses `foreground = 1.00`, `background = 0.20`, and `alpha = 0.25`, which produces `result = 0.40`. The lesson also shows why ordinary alpha compositing reads the background at the same image position.

Lesson 1.6 changes no Android source. The cumulative `LiquidGlassLab` project remains at the Lesson 1.5 implementation.

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
lesson-01-05-translucent-rounded-panel.html
```

Generic chapter `index.html` files are not used.
