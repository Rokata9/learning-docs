# Liquid Glass on Android — Conversation Handoff

**Updated:** 2026-07-18  
**Course plan version:** 1.2

## Stable course decisions

- Kotlin and Jetpack Compose are the Android implementation path.
- The Pixel 8 Pro is the physical learning and verification device.
- The main learning path uses `minSdk = 33` for Android `RuntimeShader` and Android Graphics Shading Language (AGSL).
- The learner is a senior web engineer and an absolute beginner in mathematics, graphics programming, shaders, graphics processing unit (GPU) concepts, and Android rendering internals.
- Explanations use short declarative sentences and plain English.
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
course_version: 1.2
platform: Kotlin + Jetpack Compose
learning_device: Pixel 8 Pro
learning_min_sdk: 33
delivery_format: HTML-first
learning_docs_repo_contains_android_project: false
course_home_file: liquid-glass-course.html
course_home_generated: true
chapter_1_hub_file: course/chapters/chapter-01/lesson-a-transparent-panel-is-not-yet-liquid-glass.html
chapter_1_hub_generated: true
lesson_01_01_file: course/chapters/chapter-01/lesson-01-01-visible-ingredients.html
lesson_01_01_generated: true
lesson_01_01_completed_by_learner: false
chapter_1_completed_by_learner: false
current_chapter: 1
current_lesson: 1.1
current_lesson_file: course/chapters/chapter-01/lesson-01-01-visible-ingredients.html
next_required_output: review learner answers and completion record for Lesson 1.1
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

The related Android source lives in a separate project and will use paths under:

```text
LiquidGlassLab/app/src/main/java/<package>/chapter01/
```

The learning-document package does not contain this Android project.

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
course/chapters/chapter-01/lesson-01-01-visible-ingredients.html
```

Lesson 1.1 is already generated. Do not generate Lesson 1.2 until the learner has:

- used the ingredient explorer;
- completed the in-lesson Kotlin syntax challenge;
- answered the four final exercises in chat without opening the hidden answers;
- copied the lesson completion record;
- reported any unclear wording or visual behavior.

After grading and updating this handoff, generate:

```text
course/chapters/chapter-01/lesson-01-02-observe-the-transition.html
```

## Reusable continuation prompt

```text
We are continuing my “Liquid Glass on Android” beginner-to-expert course.

Read these two files first:
1. liquid_glass_android_curriculum.md
2. liquid_glass_android_handoff.md

Assume I am a senior web engineer and an absolute beginner in mathematics, graphics programming, shaders, graphics processing unit (GPU) concepts, and Android rendering internals.

Use simple English. Define each new graphics or math term at first use. Use short sentences. Explain one actual value through input → operation → output.

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

If the current lesson file is missing, generate that one lesson file and any Android source or patch it needs. Keep the Android files outside the learning-docs tree.
If the lesson exists but the checkpoint is incomplete, review my result and teach the next smallest missing step.
If the checkpoint is complete, update the handoff and move to the next lesson.

Do not jump to the Safari menu capstone.

CURRENT CODE, SCREENSHOT, OBSERVATION, OR ERROR:
[paste here]
```
