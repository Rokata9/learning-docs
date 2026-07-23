# Photos Transition and Tiled Engine — Learning Documents

This repository contains the self-contained learning artifacts for rebuilding the Photos app's grid-to-detail transition handoff and native tiled image engine.

The Android Studio project is intentionally separate. This repository contains no copy of the Android project and no generated Android implementation.

## Start here

Open `photos-tiled-engine-course.html` directly in a Chromium-based browser. No local server is required.

Then read:

1. `LEARNER_AUTHORSHIP.md`
2. `curriculum/photos_transition_tiled_engine_curriculum.md`
3. `curriculum/photos_transition_tiled_engine_handoff.md`

## Current course state

- Course plan version: 2.0.
- Total: 216 lessons in 24 chapters.
- **0 of 216 lessons are complete.**
- Next learner checkpoint: **1.1 — Record the current user journey**.
- Prepared lesson: `course/chapters/chapter-01/lesson-01-01-record-current-user-journey.html`.
- Lesson 1.1 is prepared and awaiting learner evidence, exercise answers, and explicit completion confirmation.

## Repository boundary

The original Android project contains older learning chapters. Ignore them for this course. They are not prerequisites and this repository does not link to them.

The original `tiled-engine` implementation stays only in an immutable baseline outside the rebuild branch. It remains sealed until the final discrepancy review in Lesson 24.9.

## 100% learner-authored Android code

The learner writes every new Kotlin, C++, JNI, CMake, Gradle, test, benchmark, and Android-project helper-script line. Lessons provide explanation, behavioral contracts, test cases, review, and hints. They do not provide project-ready implementation patches.

Manual authorship means creating the solution from understanding. It does not mean manually typing a generated answer.

## Learning artifact layout

- `photos-tiled-engine-course.html` — course home.
- `COURSE_STATE.json` — machine-readable progress and policy state.
- `curriculum/` — master plan and conversation handoff.
- `course/glossary.html` — canonical terminology.
- `course/chapters/` — chapter hubs and prepared lessons.
- `course/templates/` — reusable artifact templates.
- `learner-work/` — exercises, observations, recordings, screenshots, traces, measurements, exports, and implementation log.
- `tools/` — learning-document verification helpers.

## Incremental delivery rule

After this initial package, each lesson ZIP contains only files created or modified for that lesson. Paths remain rooted beneath `photos-tiled-engine-learning-docs/`.

There is no Android-code ZIP. The lesson names exact target paths and behavior, and the learner makes every Android-project change manually.

## Naming rule

- Course home: `photos-tiled-engine-course.html`
- Chapter hub: `lesson-[chapter-name].html`
- Sub-lesson: `lesson-[chapter-number]-[lesson-number]-[lesson-name].html`
- Generic chapter `index.html` files are not used.

## Verify

From the repository root:

```text
node tools/verify-repository.mjs
node tools/verify-lesson.mjs photos-tiled-engine-course.html --links-only
```

When Chromium is available, omit `--links-only` to capture a `1920×1080` screenshot.
