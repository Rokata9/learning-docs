# Liquid Glass on Android — concise conversation handoff

**Updated:** 2026-08-16  
**Course version:** 6.9.0

## Read order

1. `USER_PREFERENCES.md`
2. `AGENTS.md`
3. `CURRENT_STATE.md`
4. This handoff
5. `liquid_glass_android_curriculum.md` when the full plan is needed
6. Current lesson HTML and Android files

Treat `CURRENT_STATE.md` as authoritative.

## Authoritative status

```yaml
course_lessons_total: 216
learner_confirmed_completed: 59
completed_through: "Lesson 6.8 — Keep the sample current"
completed_chapters: [1, 2, 3, 4, 5]
chapter_06_status: "in progress; 8 of 11 complete"
next_unresolved_checkpoint: "Lesson 6.9 — Avoid feedback loops"
generated_frontier: "Lesson 6.9 — Avoid feedback loops"
next_planned_after_checkpoint: "Lesson 6.10 — Offscreen cost"
lesson_06_08_complete: true
lesson_06_09_generated: true
lesson_06_09_complete: false
```

## Completed Lesson 6.8 prerequisite contract

```text
current backdrop inputs
→ current backgroundLayer recording

current panel geometry
→ current crop bounds in BackdropHost-local pixels

current recording + current bounds
→ current sharp panel sample
```

The lesson distinguished stale source content from stale crop geometry. Its frozen comparison objects were diagnostic evidence only.

## Generated Lesson 6.9 contract

### Principal idea

Prevent backdrop feedback by making the recorded source owner exclude the consumer:

```text
ParentScene
├── BackdropHost
│   └── BackdropArtwork
└── GlassPanel
```

### One-way ownership route

```text
BackdropArtwork draw commands
→ BackdropHost.drawWithContent
→ backgroundLayer.record { drawContent() }
→ drawLayer(backgroundLayer)
→ GlassPanel panel-local target
→ panel tint, border, label, and details
→ ParentScene final composite
```

There is no edge from `GlassPanel` output back to `BackdropHost` recording. Moving the panel changes its crop but does not change which draw commands belong to the source.

### Android implementation

`AvoidFeedbackLoopsExplorer.kt` intentionally contains one production route:

- one `rememberGraphicsLayer()` value named `backgroundLayer`;
- one current crop rectangle from `localBoundingBoxOf(..., clipBounds = false)`;
- one `BackdropHost` recording owner;
- one later `GlassPanel` sibling consumer;
- replay first, then panel material and child content;
- no diagnostic mode enum, frozen duplicate layer, or alternate defect branches.

The fixed scene dimensions, panel range, slider detents, landmark positions, alpha values, and coordinate conversions are named and commented at their source.

### Browser lesson

The browser lesson contains:

- a safe one-way route beside one compact forbidden-cycle diagram;
- five stable object names;
- one horizontal panel-position control with three presets;
- a synchronized nine-state causal walkthrough;
- one command-ownership trace;
- short Android route excerpts;
- a visibly styled three-choice prediction;
- one three-blank coding challenge;
- five explain-back exercises;
- a ten-item browser/Preview checkpoint.

### Evidence boundary

Lesson 6.9 proves source membership and an acyclic producer → consumer route. It does not add blur, quantify offscreen cost, perform CPU readback, or claim the final multi-panel architecture. Lesson 6.10 measures offscreen cost.

## Reusable rule from Lesson 6.8 feedback

### Main path first; diagnostics have a code budget

1. The learner-facing Android source should first express one clean production route.
2. Error cases are included only when they are required to establish or test the principal idea.
3. Prefer a compact diagram, prediction, or isolated explanation over duplicate layers, mode enums, and large conditional branches created solely for defects.
4. The main point must remain understandable without reverse-engineering diagnostic machinery.
5. Name and comment non-obvious dimensions, ratios, alpha choices, coordinate conversions, and formulas near their use.
6. Prediction controls must have dedicated visible styling and complete click-path QA.

## Current files

```text
liquid-glass-learning-docs/course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
liquid-glass-learning-docs/course/chapters/chapter-06/lesson-06-08-keep-the-sample-current.html
liquid-glass-learning-docs/course/chapters/chapter-06/lesson-06-09-avoid-feedback-loops.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/AvoidFeedbackLoopsExplorer.kt
```

## Continuation rule

Do not mark Lesson 6.9 complete merely because it was generated or reviewed. Wait for explicit learner confirmation. Do not generate Lesson 6.10 before that confirmation unless the learner explicitly asks to generate ahead.

Course progress: 59 of 216 lessons completed.
