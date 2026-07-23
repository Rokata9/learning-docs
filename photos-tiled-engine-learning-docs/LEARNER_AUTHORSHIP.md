# Learner Authorship Contract

## The rule

All new implementation inside the Android project is authored and typed by the learner.

This rule covers:

- Kotlin production code;
- C++ production code;
- Java Native Interface (JNI) declarations and registration;
- CMake and Gradle configuration;
- unit, native, integration, and instrumentation tests;
- benchmark, trace, and Android-project helper scripts;
- implementation comments.

The rule is about authorship, not keyboard activity. Manually typing a generated implementation would still be generated implementation.

## What the instructor creates

The instructor creates the curriculum and learning artifacts in this repository. Those artifacts may contain prose, diagrams, interactive HTML, commands, behavioral contracts, expected outputs, and short isolated syntax demonstrations.

The instructor does not create Android-project implementation patches or complete project-ready answers.

## Allowed implementation support

The lesson may state:

- the exact user-visible or measurable behavior;
- the exact files that the learner should inspect or change;
- names and signatures already required by surviving call sites, Android interfaces, JNI rules, or library APIs;
- data invariants and ownership rules;
- concrete input/output examples;
- test scenarios and expected outcomes in prose;
- build, test, logging, and profiling commands;
- progressively narrower hints;
- a diagnosis of code already written by the learner.

A short syntax example is allowed only when it teaches one language or API feature and cannot be copied as the current task's solution.

## Forbidden implementation support

Before the learner completes the task, the lesson and instructor response must not provide:

- a complete production or test file;
- a complete replacement function body;
- a patch or diff that solves the current task;
- near-transcribable pseudocode for the current algorithm;
- the erased native implementation;
- an Android-project code archive.

## Help ladder

When the learner is blocked, support narrows in this order:

1. Re-state the behavior contract.
2. Trace one concrete input through the intended operations.
3. Identify the responsible layer, thread, object, or file.
4. Name the concept or API to study.
5. Review the learner's current code and identify the first incorrect assumption.
6. Provide the smallest syntax-only illustration needed to unblock that one issue.

The learner writes the final correction.

## Existing code and final comparison

The surviving app code that directly hosts `TiledImageView` remains available because the rebuilt module must satisfy those real call sites. The custom transition framework is outside the course and is not a source of lesson work.

The original `tiled-engine` source stays sealed in the immutable baseline. It may be opened only after the Lesson 24.9 independent reconstruction is complete. The final review compares design choices and behavior. It is not a source for code to copy.

The older learning chapters stored inside the Android project are ignored. This repository is the canonical learning sequence.

## Evidence record

For every implementation lesson, record:

- learner commit hash;
- Android files changed;
- behavior or test demonstrated;
- evidence tier: reasoned, compile-verified, device-validated, or measured;
- support level used from the help ladder;
- learner confirmation that no generated project implementation was copied or transcribed.

Use `learner-work/implementation-log.md` for this record.
