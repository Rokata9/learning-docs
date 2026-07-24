# Photos Tiled Engine — manual reconstruction course

This repository is the canonical learning path for manually rebuilding the Android `tiled-engine` module.

**Course version:** 4.0  
**Current plan:** **539 small lessons**, **60 chapters**, **9 phases**  
**Completed:** 1  
**Android implementation ownership:** 100% learner-authored

## Design reset

This plan replaces every earlier transition-oriented, observation-led, or fixed-count plan.

It was rebuilt from:

1. all four Kotlin source files inside `tiled-engine`;
2. all seven C++ headers and five C++ implementation files;
3. Gradle, CMake, manifest, and shrinker contracts;
4. only the prerequisite C++, image-processing, Android-surface, EGL, OpenGL ES, JNI, memory, and concurrency knowledge needed to reconstruct those files.

The number 539 was counted after the prerequisite audit. It was not selected in advance and is not tied to the Liquid Glass lesson count. It remains legal to split a future lesson when its finished explanation would otherwise rely on an undefined term, object, unit, coordinate space, ownership rule, or thread.

## Included

- the C++ tiled renderer;
- `TiledImageView`, `TileEngineNative`, `RegionDecodeShim`, and `ImageFormat` because they directly control or support that renderer;
- native build and JNI;
- pixels, memory layout, image resizing, decoding, geometry, EGL, OpenGL ES, threads, scheduling, caching, gestures, paging, lifecycle, tracing, and the optional hardware-buffer path.

## Excluded

- the photo grid and navigation;
- transition-framework internals;
- unrelated app architecture;
- project tours;
- baseline-observation lessons;
- videos, screenshot catalogues, journals, scratchpads, evidence diaries, and implementation logs.

`NativeTestingActivity` is only a launch and focused verification harness. Its routine activity code is not a teaching topic.

## Starting condition

Before Lesson 1.1, establish a clean rebuild state in the Android project:

1. delete the original `tiled-engine/` directory;
2. remove the stale `include(":tiled-engine")` registration from the root `settings.gradle.kts`;
3. remove the stale `implementation(project(":tiled-engine"))` dependency from `app/build.gradle.kts`.

Keep one sealed copy outside that branch. Do not inspect its implementation bodies until Lesson 60.13. Surviving app call sites may be inspected only when they define a public contract the rebuilt module must satisfy. The app is intentionally not buildable during the early reconstruction lessons.

## Current lesson

**1.2 — Configure the Android library plugin, namespace, compile SDK, and minimum SDK**

Status: prepared, awaiting learner implementation and confirmation. Lesson 1.1 is complete.

The first lesson changes the project. It is not an observation lesson.

## Repository map

- `photos-tiled-engine-course.html` — visual course index.
- `curriculum/tiled_engine_curriculum.md` — all 539 lessons.
- `curriculum/source_inventory.md` — exact source files used to design the plan.
- `curriculum/source_coverage_matrix.md` — native/build responsibility coverage.
- `curriculum/kotlin_coverage_matrix.md` — behavior-bearing Kotlin path coverage.
- `curriculum/prerequisite_gates.md` — ordering rules that prevent undefined concepts.
- `curriculum/design_method.md` — source-derived facts versus course-added prerequisites.
- `curriculum/lesson_delivery_contract.md` — rules for future lesson artifacts.
- `course/glossary.html` — canonical definitions.
- `course/chapters/` — one hub per chapter.
- `course/templates/` — future lesson templates.
- `tools/verify-course.mjs` — structural checks.
- `CHAT_HANDOFF_PROMPT.md` — pasteable continuation prompt and required attachments for a new chat.

## Progress rule

A lesson is complete only after the learner manually writes its requested implementation, passes its focused verification, answers its exercises, and explicitly confirms completion.

No superseded lesson is carried forward as completed, prepared, or pending.
