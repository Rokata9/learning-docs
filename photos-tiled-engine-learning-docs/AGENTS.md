# AGENTS.md — Photos tiled-engine learning repository

## Canonical scope

Teach only the Android `tiled-engine` C++ implementation and the Kotlin code that directly controls or supports it.

Do not teach the photo grid, transition-framework internals, unrelated app architecture, project tours, baseline observation, recording catalogues, journals, scratchpads, evidence diaries, or implementation logs.

## Learner calibration

The learner is a senior web engineer and experienced general programmer.

Treat the learner as a total beginner in C++, native toolchains, application binary interfaces, JNI, image processing, decoding, memory layout, Android native surfaces, EGL, OpenGL ES, GPU resources, low-level concurrency, and synchronization.

Do not allocate standalone lessons to ordinary programming ideas such as what a branch or loop is. Teach their C++ form inside an engine-motivated task. Explain every unfamiliar low-level, image, graphics, memory, coordinate, ownership, or threading concept from first principles.

## Lesson size

The current plan contains 539 lessons. That number is not a quota.

Each lesson has one primary concept and one independently verifiable contribution. Split a lesson when it relies on an undefined object, term, unit, coordinate space, ownership rule, thread, or API; combines two independent algorithms; or requires arithmetic whose inputs are not already established.

## Explanation rules

- Define every term and acronym before use.
- Use short declarative sentences. Give one idea per sentence.
- Never substitute a metaphor or slogan for a causal explanation.
- Trace one real value through input → operation → output for math, memory, coordinates, ownership, or thread handoffs.
- Name the file and later consumer of every traced value.
- Introduce each coordinate space only when the object that owns that space has already been defined.
- Keep stored-image, logical-image, pyramid-level, tile-local, texture, view-local, Android screen, and normalized-device coordinates separate.
- Use source constants and runtime dimensions. Never invent an HTML viewport and present arithmetic from it as engine behavior.
- Use toy values only as explicitly labelled bridges. Map them to a real source constant or runtime value in the same lesson before drawing a design conclusion.
- Introduce a complete pyramid level before a tile cut from that level.
- Introduce geometry before decoder requests.
- Prove the CPU-buffer-to-texture copy path before the optional hardware-buffer path.
- Distinguish behavior proven by inspected source from prerequisite teaching added by the course.
- State explicit deferrals when an Android or C++ API must temporarily be treated as a black box.

## Source policy

The original implementation remains sealed until Lesson 60.13.

Before that lesson, use the source to design contracts and tests. Do not reveal original implementation bodies or provide project-ready generated code. Surviving app call sites may be shown only when they define the module's public contract.

## Lesson artifact contract

Every lesson is a standalone light-theme desktop HTML file containing:

1. placement in the prerequisite chain;
2. one primary outcome;
3. definitions;
4. a small source-derived contract or surviving call-site excerpt;
5. an exact value trace when applicable;
6. exact learner-authored file changes;
7. build, test, trace, or focused device verification of the code written in that lesson;
8. two to four exercises with hidden answers;
9. objective completion criteria.

Do not assign observation journals.

## Code presentation

Every multi-line code block labels its language, uses readable light-theme syntax coloring, and works without a content delivery network.

## Visual target

Light theme only. Desktop only. Verify at 1920×1080. Verify wide system diagrams at 5120×1440 when horizontal space improves clarity. Use steppers for sequences and interactive HTML/SVG for spatial or mathematical explanations. Draw geometry from actual formulas.

## Progress

`COURSE_STATE.json` is authoritative. Current progress is 1 of 539. Lesson 1.1 is complete. Lesson 1.2 is prepared and awaiting learner confirmation. No superseded lesson is completed, prepared, or pending.


## Conversation continuity

End every visible assistant message in this course conversation with a best-effort estimate in this exact form:

`Estimated remaining context window: ~N tokens.`

When moving to a new chat, use `CHAT_HANDOFF_PROMPT.md`. The new chat should receive the latest full learning-repository ZIP, the original Photos project ZIP, and the user's global `AGENTS.md`. The original source remains sealed from the learner until Lesson 60.13 even though the assistant may inspect it privately to derive contracts and coverage.
