# Liquid Glass Android course — current state

**Updated:** 2026-08-16  
**Course version:** 6.10.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro

## Authoritative progress

- Learner-confirmed complete: **60 of 216 lessons**.
- Completed through: **Lesson 6.9 — Avoid feedback loops**.
- Completed chapters: **1, 2, 3, 4, and 5**.
- Chapter 6: in progress; **9 of 11 lessons complete**.
- Current unresolved checkpoint: **Lesson 6.10 — Offscreen cost**.
- Generated frontier: **Lesson 6.10 — Offscreen cost**.
- Next planned lesson after the unresolved checkpoint: **Lesson 6.11 — Build a two-layer scene architecture**.
- Lesson 6.10 is generated and is not learner-confirmed complete.

## Current lesson files

```text
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
course/chapters/chapter-06/lesson-06-09-avoid-feedback-loops.html
course/chapters/chapter-06/lesson-06-10-offscreen-cost.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/AvoidFeedbackLoopsExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/OffscreenCostExplorer.kt
```

## Completed Lesson 6.9 prerequisite contract

The backdrop source owner excludes the consumer:

```text
ParentScene
├── BackdropHost
│   └── BackdropArtwork
└── GlassPanel
```

The dependency remains one-way:

```text
BackdropArtwork commands
→ BackdropHost recording boundary
→ backgroundLayer
→ GlassPanel replay
→ panel material and content
→ ParentScene final composite
```

`GlassPanel` is a later sibling outside `BackdropHost`, so its output cannot re-enter `backgroundLayer`.

### Synchronization correction carried into Lesson 6.10

The controlled Lesson 6.9 Android scene originally placed the panel from `panelLeftDp` but stored the crop rectangle through post-layout coordinate callbacks. That created two geometry state channels for one motion and could let the newest panel position draw once with an older crop.

The cumulative Lesson 6.10 patch removes that round trip:

```text
one panelLeftDp + one fixed panelTopDp
→ panel placement
→ crop translation
```

This direct derivation is valid because `BackdropHost` fills `ParentScene` and both share local origin `(0, 0)` in the controlled example. General arbitrary-layout coordination remains an architecture topic rather than being hidden behind this simplification.

## Generated Lesson 6.10 contract

Lesson 6.10 introduces one explicit panel-sized offscreen target:

```text
BackdropArtwork
→ backgroundLayer replayable commands
→ matching crop replay
→ panelSampleLayer.record { ... }
→ CompositingStrategy.Offscreen
→ panel-sized raster target
→ drawLayer(panelSampleLayer)
→ panel tint, content, and border
→ final ParentScene output
```

The lesson distinguishes:

```text
alignment trail
= panel placement and crop use different update states

frame stutter
= the complete frame misses a display deadline
```

The Android explorer contains one production route:

- one remembered `backgroundLayer`;
- one remembered `panelSampleLayer` forced to `CompositingStrategy.Offscreen`;
- one panel position source shared by placement and crop translation;
- one panel-sized target;
- no executable full-scene target comparison;
- no stale/correct mode enum or duplicate diagnostic rendering branch.

The browser lesson estimates target scale with a deliberately limited RGBA8 model:

```text
widthPx = round(widthDp × density)
heightPx = round(heightDp × density)
pixelCount = widthPx × heightPx
estimatedColorBytes = pixelCount × 4
estimatedMiB = estimatedColorBytes ÷ 1,048,576
```

Four bytes per pixel is a teaching assumption, not a claim about actual GPU allocation. Exact storage, bandwidth, GPU time, and dropped frames require measurement in a release-like build on the device.

## Explicit Lesson 6.10 boundaries

Lesson 6.10 does not yet:

- apply blur;
- downsample the sample target;
- quantify actual GPU allocation, bandwidth, or frame time;
- build the final reusable multi-layer scene architecture;
- perform CPU pixel readback.

Lesson 6.11 builds the two-layer scene architecture. Downsampled blur and deeper profiling remain later course topics.

## Reusable synchronization and performance rule

- Diagnose visual trailing before calling it a performance problem.
- When two operations represent the same controlled motion, derive them from one source of truth rather than writing a second geometry state from a later callback.
- Treat target-size arithmetic as an estimate of scaling, not as measured GPU cost.
- Keep comparison-only waste out of the production Android route; use arithmetic or a diagram unless an executable comparison is essential.
- Measure real performance in a release-like build with device tracing before making optimization claims.

## Android preview rules

- Complete chapter-screen previews live in `ChapterXXScreen.kt`.
- Direct custom-composable previews live in the custom composable's own Kotlin file.
- Both preview levels must allow vertical scrolling through the complete generated content in finite-height Android Studio Preview.

Course progress: 60 of 216 lessons completed.
