# AGENTS.md — Photos Native Tiled-Image Engine Learning Documents

## Scope

This repository contains the interactive learning documents for rebuilding the Photos app native tiled-image engine. The Android Studio project is separate. Do not copy the Android project or the erased `tiled-engine` module into this repository.

The Android project's existing learning chapters are non-canonical for this course. Do not link to them, import them, summarize them as prerequisites, or rely on them. The curriculum and lessons in this repository are the sole teaching path.

## Learner-authorship rule

The learner authors and types **100% of every new Android-project implementation line**. This includes Kotlin, C++, JNI, CMake, Gradle, tests, benchmarks, tracing scripts, project helper scripts, and implementation comments.

Manual authorship means creating the solution from understanding. It does not mean manually typing a generated answer.

Do not provide:

- complete Android-project files;
- replacement function bodies;
- implementation patches or diffs that solve the lesson;
- complete test bodies;
- near-transcribable pseudocode for the current task;
- excerpts from the erased native implementation before Lesson 24.9;
- an Android code ZIP.

You may provide:

- exact behavior contracts and invariants;
- required names or signatures already imposed by surviving call sites or framework APIs;
- input/output examples and test cases in prose;
- diagrams and interactive models;
- build, test, log, and tracing commands;
- short isolated syntax examples that do not solve the current project task;
- line-by-line review of code written by the learner;
- progressively narrower hints.

When the learner is blocked, first restate the invariant and trace a concrete value. Then identify the failing boundary. Then give a conceptual hint. Review the learner's own code before offering a syntax-only example. The learner still writes the correction.

## Native-only scope boundary

The course covers `TiledImageView`, its Android `SurfaceView` and gesture/lifecycle responsibilities, `TileEngineNative`, JNI, C++, image decoding, EGL/OpenGL rendering, tiling, caching, paging, synchronization, lifecycle recovery, and performance.

The canonical harness is `NativeTestingActivity`. Use it whenever the lesson does not specifically require another host call site.

Do not create lessons about `PhotosListFragment`, grid navigation, `transition-framework`, overlay clones, scrims, HQ/LQ transition-image loading, or animated return behavior. These systems may remain in the Android project, but they are outside the curriculum. Mention them only to state that they are excluded.

## Source policy

- Only app code that directly constructs, configures, or consumes `TiledImageView` defines the course host contract. The transition framework is outside the course.
- The original `tiled-engine` remains sealed in the immutable baseline until Lesson 24.9.
- The instructor may use the sealed baseline privately to verify contracts and evidence limits. Do not expose its implementation as a shortcut.
- Distinguish source-proven facts, framework-owned behavior, reasoned hypotheses, device observations, and measured results.

## File naming

- Course home: `photos-tiled-engine-course.html`.
- Chapter hub: `lesson-[chapter-name].html`.
- Sub-lesson: `lesson-[chapter-number]-[lesson-number]-[lesson-name].html`.
- Do not create generic chapter `index.html` files.

## Lesson requirements

Every lesson must be one standalone HTML file that works from `file://`. Use inline CSS and JavaScript. Use inline SVG, Canvas, or WebGL2 when they improve the explanation. Do not use external libraries or content delivery networks.

Every multi-line code block must identify its language and use real syntax highlighting. Use statically generated token spans or an inline highlighter. The rendered block must remain readable without JavaScript. Use an explicit light code background, dark base text, and distinct colors for comments, keywords, strings, numbers, types, and function names. Do not ship monochrome snippets or low-contrast light-gray text on white.

Every lesson must:

1. Introduce one principal idea and at most one principal mathematical idea.
2. Define every new C++, JNI, image, memory, operating-system, Android, GPU, rendering, geometry, and mathematical term at first use.
3. Use short declarative sentences. One idea per sentence.
4. Separate observation, source evidence, framework ownership, inference, and measurement.
5. Trace one actual value through exact input → operation → intermediate state → output → later consumer.
6. Include an interactive explanation when the concept is spatial, sequential, concurrent, or otherwise invisible.
7. State the exact Android target paths and behavior contract, without supplying project-ready implementation code.
8. Include a prediction before the learner changes or runs the project.
9. Include a learner-authored coding task when the lesson changes the Android project.
10. End with two to four exercises. Hide answers in `<details>` elements. Include at least one diagnostic misconception check.
11. Include a copyable Markdown completion record with learner commit, changed files, evidence tier, and assistance level.
12. Link the chapter hub, adjacent prepared lessons, curriculum, handoff, and glossary.

Sequence explanations use a Back/Next stepper with exactly one state change per step. Code anchors include only surviving source excerpts or learner-written code. Image lessons expose buffers, bounds, coordinate origins, row stride, texture storage, and transparency before showing the final composite.

## Visual target

- Light theme only.
- Desktop only.
- Verify at `1920×1080` or larger.
- Use `5120×1440` when an intentionally ultrawide explanation benefits.
- Keep prose in readable columns.
- Use manual steppers before free-running animation when a sequence must be understood.
- Do not hide essential information behind hover.

## Verification

Before delivery:

- open every changed HTML file from `file://`;
- check all enabled relative links;
- capture the initial state at `1920×1080` or larger;
- capture at least one changed interactive state;
- inspect for clipped labels, overlapping controls, unreadable text, and JavaScript errors;
- verify that the curriculum still contains exactly 216 `[Learner]` lessons and no `[M]` or `[G]` ownership markers.

## Progress truth

At the end of every course response, state both lines:

```text
Course progress: X of 216 lessons completed.
Estimated remaining context: ~N tokens. This is a best-effort approximation, not an exact measurement.
```

Count only lessons the learner explicitly confirms as completed. A prepared lesson does not increase X. Update the handoff after each learner-confirmed completion.

## Incremental delivery packages

After the native-only scope-reset package, deliver only an incremental ZIP containing learning-repository files created or modified for the new lesson. Preserve paths beneath `photos-tiled-engine-learning-docs/`.

Do not include unchanged files, cumulative repository copies, verification screenshots, the Android project, Android source patches, or an empty Android ZIP.
