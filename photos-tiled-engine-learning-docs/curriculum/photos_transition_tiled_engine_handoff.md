# Photos Transition and Tiled Engine — Conversation Handoff

**Updated:** 2026-07-23  
**Course plan version:** 2.0 — 100% learner-authored implementation

## Stable course decisions

- The course contains 216 lessons arranged as 24 chapters × 9 lessons.
- The learner is a senior web engineer and a total beginner in C++, native image processing, JNI, EGL, OpenGL ES, low-level memory, and GPU synchronization.
- The target device is the Pixel 8 Pro.
- The Android project and this learning-docs repository remain separate.
- The original `tiled-engine/` module is deleted from the rebuild branch after baseline evidence is recorded.
- The original native source remains sealed in an immutable baseline until Lesson 24.9.
- Existing learning chapters inside the Android project are ignored. This repository is the canonical course path.
- The course explains the surviving `app/` and `transition-framework/` code because those modules define the real integration contract.
- The course targets Google Photos-like public behavior and performance discipline. It does not claim knowledge of Google's private implementation.

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
- Include a copyable completion record.
- After the initial repository ZIP, deliver only incremental learning-docs ZIPs. Never deliver an Android source ZIP.

## Response footer rule

Every course response ends with both lines:

```text
Course progress: X of 216 lessons completed.
Estimated remaining context: ~N tokens. This is a best-effort approximation, not an exact measurement.
```

Count only learner-confirmed completion. A prepared lesson does not increase X.

## Progress truth

```yaml
course: Photos Transition and Tiled Engine Reconstruction
course_plan_version: 2.0
course_lessons_total: 216
course_lessons_completed_by_learner: 0
completed_lessons: []
completed_through: null
prepared_frontier: 1.1
next_lesson_to_prepare: 1.2
next_learner_checkpoint: 1.1
android_project_learning_chapters_canonical: false
all_new_android_project_code_authored_by_learner: true
android_code_archives_allowed: false
original_tiled_engine_sealed_until: 24.9
```

## Next lesson

**Current learner checkpoint: Lesson 1.1 — Record the current user journey**

Lesson 1.1 is prepared at `course/chapters/chapter-01/lesson-01-01-record-current-user-journey.html`. It creates baseline evidence only. It does not modify production source and does not delete `tiled-engine` yet.

Expected learner artifacts:

- a filled `learner-work/observations/lesson-01-01-current-user-journey.md`;
- filtered transition Logcat output;
- screenshots or short recordings for three controlled runs;
- device actions covering the forward handoff, first live tiled frame, gestures, paging, rotation, one animated return outcome, and the two causes for a plain exit;
- four exercise answers and a learner completion record submitted in chat.

The actual `tiled-engine` deletion occurs in Lesson 1.6 after the baseline and quarantine rules are recorded.

## Lesson 1.1 source findings that must remain explicit

- The overlay-clone transition is configured for 300 ms. That value does not include destination layout, transition-image acquisition, or native-engine readiness.
- The transition-image loader uses a 75 ms fallback decision. The current debug configuration delays high-quality success delivery by 2,000 ms, so the low-quality path is expected but still must be confirmed in Logcat.
- `fragment_photo_detail.xml` says native work warms during the shared-element animation, but `PhotoDetailFragment` calls `loadFullResolutionImage()` only from the transition-end callback. Course wording follows the call order: native work begins after the clone animation and remains covered by the destination placeholder.
- `tfNavigateToDestination` is documented as add/hide navigation, while its implementation calls `add(...)` without `hide(...)`. Do not claim that the source fragment is hidden.
- Back navigation has one animated-return outcome. Paging or recreation selects the plain-pop outcome.
- The native implementation remains sealed. Lesson 1.1 uses only public call sites, visible behavior, and logs.

Course progress: 0 of 216 lessons completed.
