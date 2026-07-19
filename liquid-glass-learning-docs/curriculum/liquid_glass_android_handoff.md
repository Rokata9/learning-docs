# Liquid Glass on Android — Conversation Handoff

**Updated:** 2026-07-19  
**Course plan version:** 1.3

## Stable course decisions

- Kotlin and Jetpack Compose are the Android implementation path.
- The Pixel 8 Pro is the physical learning and verification device.
- The main learning path uses `minSdk = 33` for Android `RuntimeShader` and Android Graphics Shading Language (AGSL).
- Lesson 1.3 uses the dated 2026-07-19 toolchain snapshot `compileSdk = 37`, `targetSdk = 37`, and `minSdk = 33`. Keep the current Android Studio template's generated plugin and dependency versions.
- The learner is a senior web engineer and an absolute beginner in mathematics, graphics programming, shaders, graphics processing unit (GPU) concepts, and Android rendering internals.
- Explanations use short declarative sentences and plain English.
- At the end of every response, state a clearly labelled best-effort estimate of the remaining conversation context window in tokens. The number is approximate, not exact.
- Each lesson introduces one main graphics idea and at most one main mathematical idea.
- The course does not use a third-party glass-effect library for the main implementation.
- The course does not claim to know Apple’s private Liquid Glass implementation.
- The long-term capstone is a Safari-style three-dot control that expands into a rounded Liquid Glass menu with convincing middle frames, source anchoring, refraction, diffusion, edge lighting, shadow, depth, interruption handling, accessibility, and performance work.

## Course file decisions

The master curriculum Markdown file is a plan and file manifest. It is not the lesson bundle.

The course content uses this structure:

- one descriptively named course home: `liquid-glass-course.html`;
- one descriptively named chapter hub: `lesson-[chapter-name].html`;
- no generic chapter `index.html` files;
- one numbered, descriptive, standalone `.html` file per sub-lesson;
- a separate Android Studio project containing the Kotlin and AGSL source;
- no `android/` directory inside the learning-document package;
- optional `.patch`, `.kt`, `.agsl`, SVG, PNG, Mermaid, or Markdown companion files when they improve teaching or make code transfer safer;
- this handoff Markdown file as the authoritative progress record.

Every lesson HTML file must:

- work from `file://`;
- use inline CSS and JavaScript;
- use inline SVG, Canvas, or WebGL2 when needed;
- use a light desktop layout;
- render correctly at `1920×1080` or larger;
- use `5120×1440` for an intentionally ultrawide explanation;
- show a meaningful initial state;
- use manual steppers for sequences before free-running animation;
- include live numbers and formulas for math;
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
course_version: 1.3
platform: Kotlin + Jetpack Compose
learning_device: Pixel 8 Pro
learning_min_sdk: 33
toolchain_snapshot_date: 2026-07-19
compile_sdk: 37
target_sdk: 37
delivery_format: HTML-first
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
lesson_01_03_android_companion: LiquidGlassLab-lesson-01-03-source-overlay.zip
lesson_01_03_android_files:
  - app/src/main/java/com/example/liquidglasslab/MainActivity.kt
  - app/src/main/java/com/example/liquidglasslab/chapter01/Chapter01Screen.kt
lesson_01_03_completed_by_learner: false
chapter_1_completed_by_learner: false
current_chapter: 1
current_lesson: 1.3
current_lesson_file: course/chapters/chapter-01/lesson-01-03-create-the-android-project.html
next_required_output: review the learner's Lesson 1.3 build result, Pixel screenshot, completion record, source problem, or question; do not generate Lesson 1.4 until Lesson 1.3 is complete
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

The related Android source lives in the separate project:

```text
LiquidGlassLab/
└── app/src/main/java/com/example/liquidglasslab/
    ├── MainActivity.kt
    └── chapter01/
        └── Chapter01Screen.kt
```

Lesson 1.3 deliberately does not create `Chapter01Route.kt`. The app has one destination, so `MainActivity` calls `Chapter01Screen` directly. A navigation abstraction will be introduced only when a second destination creates a routing requirement.

## Lesson 1.3 delivery details

The lesson file is:

```text
course/chapters/chapter-01/lesson-01-03-create-the-android-project.html
```

It includes:

- a known-good baseline explanation;
- exact project-wizard values for `LiquidGlassLab` and `com.example.liquidglasslab`;
- a live `compileSdk`, `minSdk`, and `targetSdk` laboratory;
- direct editor changes and clickable presets that share one SDK preview state;
- a clickable generated-project tree with exact file responsibilities;
- the complete `MainActivity.kt` and `Chapter01Screen.kt` source;
- a browser illustration of the expected three-line Pixel result;
- a manual eight-step source-to-pixels pipeline;
- exact input → operation → output descriptions for every pipeline stage;
- USB and wireless debugging paths for the Pixel 8 Pro;
- a Windows versus WSL ADB warning tailored to the learner’s setup;
- troubleshooting grouped by build, authorization, installation, launch, and visible-result boundaries;
- one editor-driven SDK coding challenge;
- four exercises with hidden answers;
- a copyable completion record;
- official Android source links and a concrete browser-model limitation.

The separate Android companion ZIP contains:

```text
README-APPLY.md
CHECKPOINT.md
reference/APP_BUILD_GRADLE_CHECK.txt
app/src/main/java/com/example/liquidglasslab/MainActivity.kt
app/src/main/java/com/example/liquidglasslab/chapter01/Chapter01Screen.kt
```

It contains no complete Gradle build file. The learner must first create and run the current Empty Activity template, then overlay these source files.

## Lesson 1.3 checkpoint

Lesson 1.3 is complete only when:

- [ ] `LiquidGlassLab` was created with the Empty Activity Compose template.
- [ ] The package is `com.example.liquidglasslab`, or every supplied package declaration, import, and source path was deliberately adjusted to one consistent alternative.
- [ ] `compileSdk = 37`, `minSdk = 33`, and `targetSdk = 37` were verified for the 2026-07-19 course snapshot.
- [ ] The untouched generated template ran on the Pixel 8 Pro before course source was applied.
- [ ] The companion `MainActivity.kt` and `Chapter01Screen.kt` files compile.
- [ ] ADB lists the Pixel with the state `device`, not `unauthorized`.
- [ ] The Pixel shows the exact lines `Liquid Glass Lab`, `Chapter 1 · Android baseline`, and `No glass effect is implemented yet.`
- [ ] A screenshot was saved.
- [ ] The learner can name the last proven boundary when a later run fails.
- [ ] The Android work is committed to Git.

Suggested commits:

```text
course: create Compose project baseline
course: add chapter 1 Android baseline screen
```

## Chapter 1 checkpoint

Chapter 1 is complete only when:

- [ ] All eight lesson HTML files exist and open from `file://`.
- [ ] `lesson-a-transparent-panel-is-not-yet-liquid-glass.html` lists every lesson and every enabled link works.
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
course/chapters/chapter-01/lesson-01-03-create-the-android-project.html
```

Lesson 1.3 is the first Android implementation checkpoint. It creates a separate `LiquidGlassLab` project. It first runs the untouched Empty Activity template. It then applies the companion source overlay.

The lesson includes:

- exact Android Studio wizard values;
- an interactive `compileSdk`, `minSdk`, and `targetSdk` laboratory;
- a clickable generated-project map;
- two complete Kotlin files with input → operation → output traces;
- a manual eight-step source-to-pixels stepper;
- USB and wireless debugging paths for the Pixel 8 Pro;
- troubleshooting grouped by build, authorization, installation, launch, and visible-result boundaries;
- one editor-driven SDK coding challenge;
- four final exercises and a copyable completion record.

The separate Android companion ZIP is:

```text
LiquidGlassLab-lesson-01-03-source-overlay.zip
```

It contains:

```text
README-APPLY.md
CHECKPOINT.md
reference/APP_BUILD_GRADLE_CHECK.txt
app/src/main/java/com/example/liquidglasslab/MainActivity.kt
app/src/main/java/com/example/liquidglasslab/chapter01/Chapter01Screen.kt
```

The companion is a source overlay, not a complete generated Android Studio project. The learner must keep the Gradle wrapper, current plugin declarations, dependency versions, manifest, resources, and generated theme from the locally installed Android Studio template.

Lesson 1.3 deliberately does not add `Chapter01Route.kt`. The app has one destination. `MainActivity` calls `Chapter01Screen` directly. A route or navigation abstraction is deferred until it owns real state or selects between real destinations.

Do not generate Lesson 1.4 until the learner reports that the project builds and the exact three-line baseline appears on the Pixel, or supplies a build error, screenshot, source problem, exercise answers, completion record, or question for review.

After Lesson 1.3 is complete, generate:

```text
course/chapters/chapter-01/lesson-01-04-build-a-study-background.html
```

## Reusable continuation prompt

```text
We are continuing my “Liquid Glass on Android” beginner-to-expert course.

Read these two files first:
1. liquid_glass_android_curriculum.md
2. liquid_glass_android_handoff.md

Assume I am a senior web engineer and an absolute beginner in mathematics, graphics programming, shaders, graphics processing unit (GPU) concepts, and Android rendering internals.

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
- Use interactive SVG for math-heavy geometry.
- Use Canvas or WebGL2 when per-pixel behavior needs a real visual model.
- Clearly label browser approximations. Android behavior must be tested on the Pixel 8 Pro.
- Kotlin and AGSL source lives in the separate Android project. Quote the relevant lines, state the target path, and provide the complete changed file or patch beside the lesson delivery.
- Include at least one small coding challenge before the final exercises. End each lesson with two to four exercises and hidden answers.
- Provide a copyable lesson record for the handoff.
- Do not use a third-party glass library for the main implementation.
- Do not claim to know Apple’s private implementation.

Read the current progress in the handoff.

If the current lesson file is missing, generate that one lesson file and any Android source or patch it needs. Keep Android files outside the learning-docs tree.
If the lesson exists but the checkpoint is incomplete, review my result and teach the next smallest missing step.
If the checkpoint is complete, update the handoff and move to the next lesson.

Do not jump to the Safari menu capstone.

CURRENT CODE, SCREENSHOT, OBSERVATION, OR ERROR:
[paste here]
```
