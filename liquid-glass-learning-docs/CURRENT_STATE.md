# Liquid Glass Android course — current state

**Updated:** 2026-08-16  
**Course version:** 6.9.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro

## Authoritative progress

- Learner-confirmed complete: **59 of 216 lessons**.
- Completed through: **Lesson 6.8 — Keep the sample current**.
- Completed chapters: **1, 2, 3, 4, and 5**.
- Chapter 6: in progress; **8 of 11 lessons complete**.
- Current unresolved checkpoint: **Lesson 6.9 — Avoid feedback loops**.
- Generated frontier: **Lesson 6.9 — Avoid feedback loops**.
- Next planned lesson after the unresolved checkpoint: **Lesson 6.10 — Offscreen cost**.
- Lesson 6.9 is generated and is not learner-confirmed complete.

## Current lesson files

```text
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
course/chapters/chapter-06/lesson-06-08-keep-the-sample-current.html
course/chapters/chapter-06/lesson-06-09-avoid-feedback-loops.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/AvoidFeedbackLoopsExplorer.kt
```

## Completed Lesson 6.8 prerequisite contract

A current sharp panel sample depends on two independently refreshed products:

```text
current backdrop drawing inputs
→ current backgroundLayer recording

current panel geometry
→ current panel bounds in BackdropHost-local coordinates

current recording + current bounds
→ current sharp panel sample
```

Lesson 6.8 also proved that stale layer content and stale bounds are different defects. Its frozen comparison objects were diagnostic teaching evidence, not the intended production architecture.

## Generated Lesson 6.9 contract

Lesson 6.9 adds one production ownership rule:

```text
ParentScene
├── BackdropHost
│   └── BackdropArtwork
└── GlassPanel
```

The one-way data route is:

```text
BackdropArtwork commands
→ BackdropHost recording boundary
→ backgroundLayer
→ GlassPanel replay
→ panel material and panel content
→ ParentScene final composite
```

`GlassPanel` is a later sibling, not a child of `BackdropHost`. Therefore panel replay, tint, border, label, and details do not enter `backgroundLayer`. There is no return route from panel output to the source recording.

The Android explorer deliberately contains one clean route:

- one remembered `GraphicsLayer`;
- one current crop rectangle;
- one movable panel consumer;
- no failure-mode enum;
- no frozen duplicate layer;
- no alternate diagnostic rendering branches.

The browser lesson uses one compact unsafe-cycle diagram only to explain the boundary. The main walkthrough, code, prediction, and coding challenge all follow the production route.

## Explicit Lesson 6.9 boundaries

Lesson 6.9 does not yet:

- apply blur;
- measure render-target allocation, memory, bandwidth, or GPU time;
- prove a final multi-panel production architecture;
- perform CPU pixel readback.

Lesson 6.10 introduces offscreen cost.

## Main-path-first rule added from learner feedback

- Teach and implement the clean production route before discussing defects.
- Add a failure case only when it is necessary to understand or verify the main rule.
- Prefer a compact diagram or explanation over duplicate Android resources, mode enums, and branches created only to demonstrate errors.
- Name non-obvious constants and explain why they exist where they are declared or used.

## Android preview rules

- Complete chapter-screen previews live in `ChapterXXScreen.kt`.
- Direct custom-composable previews live in the custom composable's own Kotlin file.
- Both preview levels must allow vertical scrolling through the complete generated content in finite-height Android Studio Preview.

Course progress: 59 of 216 lessons completed.
