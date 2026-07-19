# Liquid Glass on Android — Conversation Handoff

**Updated:** 2026-07-19  
**Course plan version:** 1.4

## Stable course decisions

- Kotlin and Jetpack Compose are the Android implementation path.
- The Pixel 8 Pro is the physical learning and verification device.
- The main learning path uses `minSdk = 33` for Android `RuntimeShader` and Android Graphics Shading Language, abbreviated AGSL.
- The dated 2026-07-19 toolchain snapshot uses `compileSdk = 37`, `targetSdk = 37`, and `minSdk = 33`. Keep the locally generated Android Studio template's plugin and dependency versions.
- The learner is a senior web engineer and an absolute beginner in mathematics, graphics programming, shaders, graphics processing unit concepts, and Android rendering internals.
- Explanations use short declarative sentences and plain English.
- At the end of every response, state a clearly labelled best-effort estimate of the remaining conversation context window in tokens. The number is approximate, not exact.
- Each lesson introduces one main graphics idea and at most one main mathematical idea.
- The course does not use a third-party glass-effect library for the main implementation.
- The course does not claim to know Apple’s private Liquid Glass implementation.
- The long-term capstone is a Safari-style three-dot control that expands into a rounded Liquid Glass menu with convincing middle frames, source anchoring, refraction, diffusion, edge lighting, shadow, depth, interruption handling, accessibility, and performance work.

## Course file and delivery decisions

The master curriculum Markdown file is a plan and file manifest. It is not the lesson bundle.

The course content uses:

- one descriptively named course home: `liquid-glass-course.html`;
- one descriptively named chapter hub: `lesson-[chapter-name].html`;
- no generic chapter `index.html` files;
- one numbered, descriptive, standalone `.html` file per sub-lesson;
- a separate Android Studio project containing Kotlin and AGSL source;
- no Android source directory inside the learning-docs repository;
- this handoff Markdown file as the authoritative progress record.

Starting with Lesson 1.4, delivery is incremental:

- The learning-docs ZIP contains only files created or modified for the current lesson. It preserves paths beneath `liquid-glass-learning-docs/`.
- The Android code ZIP contains only Android files created or modified for the current lesson. It preserves paths beneath `LiquidGlassLab/`.
- Do not include unchanged files, cumulative copies, duplicate standalone downloads, verification screenshots, or a complete Android project unless the learner explicitly asks for them.
- When a lesson changes no Android source, state that fact and do not create an empty Android ZIP.

Every lesson HTML file must:

- work from `file://`;
- use inline CSS and JavaScript;
- use inline SVG, Canvas, or WebGL2 when needed;
- use a light desktop layout;
- render correctly at `1920×1080` or larger;
- use `5120×1440` for an intentionally ultrawide explanation;
- show a meaningful initial state;
- use manual steppers for sequences before free-running animation;
- include live numbers and formulas when math is introduced;
- quote the exact Kotlin or AGSL lines it teaches;
- state where the browser model differs from Android;
- include at least one small coding challenge before the final exercises;
- end with two to four exercises and hidden answers;
- provide a copyable lesson record.

## Count correction

The actual curriculum map contains **216 lessons**. An earlier conversational summary said 226. The chapter lists add up to 216, so 216 is the correct count.

## Current progress

```yaml
course: Liquid Glass on Android
course_version: 1.4
platform: Kotlin + Jetpack Compose
learning_device: Pixel 8 Pro
learning_min_sdk: 33
toolchain_snapshot_date: 2026-07-19
compile_sdk: 37
target_sdk: 37
delivery_format: HTML-first
incremental_archives_only: true
learning_docs_repo_contains_android_project: false
course_home_file: liquid-glass-course.html
course_home_generated: true
chapter_1_hub_file: course/chapters/chapter-01/lesson-a-transparent-panel-is-not-yet-liquid-glass.html
chapter_1_hub_generated: true
lesson_01_01_file: course/chapters/chapter-01/lesson-01-01-visible-ingredients.html
lesson_01_01_generated: true
lesson_01_01_completed_by_learner: true
lesson_01_01_completion_basis: learner explicitly reported completion and no questions; exercise answers were not submitted for conversational grading
lesson_01_02_file: course/chapters/chapter-01/lesson-01-02-observe-the-transition.html
lesson_01_02_generated: true
lesson_01_02_revision: 2026-07-19-code-preview-geometry-and-controls-fix
lesson_01_02_revision_validated: true
lesson_01_02_completed_by_learner: true
lesson_01_02_completion_basis: learner confirmed the reported defect was fixed and explicitly requested Lesson 1.3; exercise answers were not submitted for conversational grading
lesson_01_02_android_source_changed: false
lesson_01_03_file: course/chapters/chapter-01/lesson-01-03-create-the-android-project.html
lesson_01_03_generated: true
lesson_01_03_android_source_changed: true
lesson_01_03_android_files:
  - app/src/main/java/com/example/liquidglasslab/MainActivity.kt
  - app/src/main/java/com/example/liquidglasslab/chapter01/Chapter01Screen.kt
lesson_01_03_completed_by_learner: true
lesson_01_03_completion_basis: learner explicitly requested Lesson 1.4 without reporting a remaining Lesson 1.3 problem; exercise answers and a completion record were not submitted for conversational grading
lesson_01_04_file: course/chapters/chapter-01/lesson-01-04-build-a-study-background.html
lesson_01_04_generated: true
lesson_01_04_android_source_changed: true
lesson_01_04_android_changed_files:
  - app/src/main/java/com/example/liquidglasslab/chapter01/Chapter01Screen.kt
  - app/src/main/java/com/example/liquidglasslab/chapter01/StudyBackground.kt
lesson_01_04_completed_by_learner: false
chapter_1_completed_by_learner: false
current_chapter: 1
current_lesson: 1.4
current_lesson_file: course/chapters/chapter-01/lesson-01-04-build-a-study-background.html
next_required_output: review the learner's Lesson 1.4 Pixel result, code, completion record, exercise answers, question, or build error; do not generate Lesson 1.5 until Lesson 1.4 is complete
```

## Required Chapter 1 file set

```text
course/chapters/chapter-01/
├── lesson-a-transparent-panel-is-not-yet-liquid-glass.html
├── lesson-01-01-visible-ingredients.html
├── lesson-01-02-observe-the-transition.html
├── lesson-01-03-create-the-android-project.html
├── lesson-01-04-build-a-study-background.html
├── lesson-01-05-translucent-rounded-panel.html
├── lesson-01-06-alpha-mixture.html
├── lesson-01-07-pixel-8-pro-experiment.html
└── lesson-01-08-diagnosis-and-checkpoint.html
```

The cumulative Android source now lives in the separate project:

```text
LiquidGlassLab/
└── app/src/main/java/com/example/liquidglasslab/
    ├── MainActivity.kt
    └── chapter01/
        ├── Chapter01Screen.kt
        └── StudyBackground.kt
```

Lesson 1.3 deliberately did not create `Chapter01Route.kt`. The app has one destination, so `MainActivity` calls `Chapter01Screen` directly. A navigation abstraction will be introduced only when a second destination creates a routing requirement.

## Lesson 1.4 delivery details

The lesson file is:

```text
course/chapters/chapter-01/lesson-01-04-build-a-study-background.html
```

The new graphics idea is that a useful test background contains known visual clues. No new mathematical formula is introduced.

The lesson includes:

- plain definitions of study background, visual clue, edge, gradient, silhouette, opaque color, Compose `Brush`, inset, and safe drawing area;
- a side-by-side Canvas comparison of a flat background and the controlled study background;
- browser-only no-op, soft-blur, small-shift, and pale-blue-tint test modes;
- a clue isolator for gradient, solid color regions, circles, sharp lines, and text;
- a real value trace from `SharpLineCount = 11` through `repeat` to eleven line children with indexes `0` through `10`;
- a seven-step manual build sequence with exact input, operation, and output text;
- complete source tabs for the two changed Android files;
- a code-driven challenge in which editor changes and clickable buttons share one preview state;
- four exercises with hidden answers;
- a copyable completion record;
- official Android source links and a concrete browser-versus-Android evidence boundary.

The browser blur, shift, and tint operations are visibility demonstrations. They are not an Android glass pipeline and do not claim to reveal Apple's implementation.

## Lesson 1.4 Android code

The Android changed-file ZIP contains only:

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter01/Chapter01Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter01/StudyBackground.kt
```

`Chapter01Screen.kt` delegates its full available size to `StudyBackground`.

`StudyBackground.kt` creates:

- one full-window diagonal gradient;
- four opaque color regions;
- four circle silhouettes;
- eleven sharp lines;
- one large monospace text row;
- one small monospace text row.

The important clue content uses `safeDrawingPadding()`. The gradient still fills the complete app window.

The lesson deliberately uses standard `Box`, `Column`, and `Row` composables. A custom Compose `Canvas` would introduce coordinate math before Chapter 2 teaches it. The scene is static and small. No measured performance problem currently justifies lower-level drawing code.

No alpha value, blur, refraction, highlight, shadow, or animation is added to the Android project in Lesson 1.4.

## Lesson 1.4 checkpoint

Lesson 1.4 is complete only when:

- [ ] The incremental learning-docs ZIP was extracted over the existing learning-docs repository.
- [ ] The incremental Android ZIP was extracted over the parent directory that contains `LiquidGlassLab`.
- [ ] `Chapter01Screen.kt` was replaced.
- [ ] `StudyBackground.kt` was added.
- [ ] The Android project builds without a Kotlin compiler error.
- [ ] The Pixel 8 Pro shows the full-window gradient.
- [ ] Four color regions are visible.
- [ ] Four circles are visible.
- [ ] Exactly eleven sharp lines are visible.
- [ ] Large and small monospace text are visible.
- [ ] No glass panel is present yet.
- [ ] A Pixel screenshot was saved.
- [ ] The learner can explain why the flat background hides a small blur or positional shift.
- [ ] The Android change was committed to Git.

Suggested commit:

```text
course: add chapter 1 study background
```

## Chapter 1 checkpoint

Chapter 1 is complete only when:

- [ ] All eight lesson HTML files exist and open from `file://`.
- [ ] The chapter hub lists every lesson and every enabled link works.
- [ ] The HTML lessons have been screenshot-checked at desktop size.
- [ ] `LiquidGlassLab` runs on the Pixel 8 Pro.
- [ ] A slider changes a white rounded panel fill from 0% to 100% opacity.
- [ ] Screenshots exist around 0%, 25%, 50%, 75%, and 100%.
- [ ] At least five observations have been written.
- [ ] The learner can explain the alpha mixture in simple words.
- [ ] The learner can explain why transparency alone is not blur or refraction.
- [ ] The Android work is committed to Git.

## Next action

Open and complete:

```text
course/chapters/chapter-01/lesson-01-04-build-a-study-background.html
```

Apply the separate Android changed-file ZIP. Run the result on the Pixel 8 Pro. Return with the completion record, screenshot observations, exercise answers, source question, or build error.

Do not generate Lesson 1.5 until Lesson 1.4 is complete.

After Lesson 1.4 is complete, generate:

```text
course/chapters/chapter-01/lesson-01-05-translucent-rounded-panel.html
```

Lesson 1.5 must add only a rounded translucent panel and its alpha control. It must not add blur or refraction.

## Reusable continuation prompt

```text
We are continuing my “Liquid Glass on Android” beginner-to-expert course.

Read these two files first:
1. liquid_glass_android_curriculum.md
2. liquid_glass_android_handoff.md

Assume I am a senior web engineer and an absolute beginner in mathematics, graphics programming, shaders, graphics processing unit concepts, and Android rendering internals.

Use simple English. Define each new graphics or math term at first use. Use short sentences. Explain one actual value through input → operation → output.
At the end of every response, include a clearly labelled best-effort estimate of the remaining conversation context window in tokens. State that the number is approximate.

Course file rules:
- The master curriculum is a plan. Do not put full lessons into it.
- Every chapter hub is named `lesson-[chapter-name].html`; do not create generic chapter `index.html` files.
- Every sub-lesson has one standalone interactive HTML file named `lesson-[chapter-number]-[lesson-number]-[lesson-name].html`.
- HTML must work from file:// with inline CSS, JavaScript, SVG, Canvas, or WebGL2.
- Light theme only. Desktop only. Verify at 1920×1080 or larger.
- Use 5120×1440 for an intentionally ultrawide explanation.
- Use a manual stepper before any free-running sequence animation.
- Clearly label browser approximations. Android behavior must be tested on the Pixel 8 Pro.
- Kotlin and AGSL source lives in the separate Android project.
- Deliver only two incremental archives when both repositories change: one learning-docs ZIP and one Android code ZIP.
- Each ZIP contains only files created or modified for the current lesson and preserves paths beneath `liquid-glass-learning-docs/` or `LiquidGlassLab/`.
- Do not include cumulative copies, duplicate direct downloads, unchanged files, screenshots, or complete projects unless I explicitly request them.
- Include at least one small coding challenge before the final exercises. End each lesson with two to four exercises and hidden answers.
- Provide a copyable lesson record for the handoff.
- Do not use a third-party glass library for the main implementation.
- Do not claim to know Apple’s private implementation.

Read the current progress in the handoff.

If the current lesson exists but its checkpoint is incomplete, review my result and teach the next smallest missing step.
If the checkpoint is complete, update the handoff and generate only the next lesson's changed files.

Do not jump to the Safari menu capstone.

CURRENT CODE, SCREENSHOT, OBSERVATION, COMPLETION RECORD, EXERCISE ANSWERS, OR ERROR:
[paste here]
```
