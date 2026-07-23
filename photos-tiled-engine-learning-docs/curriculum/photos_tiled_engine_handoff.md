# Photos Native Tiled-Image Engine — Conversation Handoff

**Updated:** 2026-07-23  
**Course plan version:** 3.0 — native-engine-only, 100% learner-authored implementation

## Stable course decisions

- The course contains 216 lessons arranged as 24 chapters × 9 lessons.
- The learner is a senior web engineer and a total beginner in C++, native image processing, JNI, EGL, OpenGL ES, low-level memory, and GPU synchronization.
- The target device is the Pixel 8 Pro.
- The Android project and this learning-docs repository remain separate.
- The course covers `tiled-engine` and the smallest Android host boundary needed to run it.
- The canonical harness is `NativeTestingActivity`, which launches `TiledImageView` directly.
- Kotlin code is in scope whenever it changes what the viewer draws, when it draws, which photo it draws, how gestures change framing, or how native resources follow lifecycle events. Chapter 2 creates a Kotlin responsibility ledger so every behavior-bearing method, listener, callback, and saved-state path is assigned to a later lesson or deliberately classified as boilerplate.
- `PhotosListFragment`, grid navigation, `transition-framework`, overlay clones, scrims, HQ/LQ transition-image loading, and return animation are outside the course.
- The original `tiled-engine/` module is deleted from the rebuild branch after the isolated native baseline is recorded.
- The original native source remains sealed in an immutable baseline until Lesson 24.9.
- Existing learning chapters inside the Android project are ignored. This repository is the canonical course path.
- The course targets Google Photos-like public viewer behavior and performance discipline. It does not claim knowledge of Google's private implementation.

## Exact course boundary

The curriculum begins with these external inputs:

- a list of image files;
- a focused photo index;
- an Android surface;
- viewport dimensions;
- gesture and lifecycle events.

The curriculum follows those inputs through:

- Kotlin document preparation;
- JNI calls;
- C++ engine state;
- image metadata and orientation;
- pyramid and tile selection;
- region decoding;
- CPU pixel buffers;
- GPU textures;
- EGL/OpenGL drawing;
- frame presentation;
- readiness and error callbacks;
- later interaction, paging, lifecycle, memory, and performance behavior.

The curriculum stops at the engine's public output. It does not study how an external fragment animates into the viewer or what that fragment displays before or after `onReady()`.

## Learner-authorship decision

The learner authors and types every new line added to the Android project:

- Kotlin and C++ production code;
- JNI, CMake, and Gradle code;
- tests and benchmarks;
- tracing and project helper scripts;
- implementation comments.

The instructor provides explanations, standalone learning HTML, diagrams, contracts, expected results, code review, and hints. The instructor does not provide complete project files, replacement function bodies, implementation patches, complete tests, near-transcribable task solutions, or Android code ZIPs.

Manual authorship means creating the solution from understanding. Manually typing generated code does not satisfy the rule.

## Lesson delivery rules

- Each lesson is a standalone HTML file that works from `file://`.
- Light theme and desktop layout only.
- Verify at `1920×1080`; use `5120×1440` for intentionally ultrawide diagrams.
- Introduce one principal idea per lesson.
- Define each new term and acronym at first use.
- Trace one actual value through input → operation → intermediate state → output → later consumer.
- Use a Back/Next stepper when a sequence must be understood.
- Name exact Android paths and behavior without supplying project-ready implementation.
- End with two to four hidden-answer exercises and one diagnostic misconception check.
- Every multi-line code block identifies its language and uses readable light-theme syntax coloring with distinct token colors.
- Include a copyable completion record.
- After this scope-reset repository ZIP, deliver only incremental learning-docs ZIPs. Never deliver an Android source ZIP.

## Response footer rule

Every course response ends with both lines:

```text
Course progress: X of 216 lessons completed.
Estimated remaining context: ~N tokens. This is a best-effort approximation, not an exact measurement.
```

Count only learner-confirmed completion. A prepared lesson does not increase X.

## Progress truth

```yaml
course: Photos Native Tiled-Image Engine Reconstruction
course_plan_version: 3.0
course_scope: native-tiled-engine-only
course_lessons_total: 216
course_lessons_completed_by_learner: 0
completed_lessons: []
completed_through: null
prepared_frontier: 1.2
prepared_lessons: [1.1, 1.2]
lessons_awaiting_learner_confirmation: [1.1, 1.2]
next_lesson_to_prepare: 1.3
current_study_frontier: 1.2
android_project_learning_chapters_canonical: false
all_new_android_project_code_authored_by_learner: true
android_code_archives_allowed: false
original_tiled_engine_sealed_until: 24.9
transition_framework_in_course: false
```

## Current study frontier

**Lessons 1.1 and 1.2 are prepared. Neither lesson is complete.**

- Lesson 1.1: `course/chapters/chapter-01/lesson-01-01-record-native-viewer-baseline.html`
- Lesson 1.2: `course/chapters/chapter-01/lesson-01-02-record-initial-coverage-and-refinement.html`

The learner asked to continue to Lesson 1.2 before confirming Lesson 1.1. Preserve both as awaiting explicit confirmation. Do not infer completion from exercise answers, device observations, or moving to a later lesson.

Lesson 1.2 uses the same isolated `NativeTestingActivity` harness. It separates two visible properties:

- complete image coverage inside the displayed photo rectangle;
- higher-detail refinement that preserves source-to-screen placement.

The lesson uses the host-defined `3008 × 2008` synthetic image, 256-pixel coordinate grid, documented 512-pixel tile boundaries, and the `x = 1024` diagnostic boundary. It does not expose native implementation or change Android source.

The next unprepared lesson is **1.3 — Record interaction and lifecycle behavior**. The actual `tiled-engine` deletion still occurs in Lesson 1.6.

Course progress: 0 of 216 lessons completed.
