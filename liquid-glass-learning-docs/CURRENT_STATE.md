# Liquid Glass Android course — current state

**Updated:** 2026-08-16  
**Course version:** 6.11.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro

## Authoritative progress

- Learner-confirmed complete: **61 of 216 lessons**.
- Completed through: **Lesson 6.10 — Offscreen cost**.
- Completed chapters: **1, 2, 3, 4, and 5**.
- Chapter 6: in progress; **10 of 11 lessons complete**.
- Current unresolved checkpoint: **Lesson 6.11 — Build a two-layer scene architecture**.
- Generated frontier: **Lesson 6.11 — Build a two-layer scene architecture**.
- Next planned lesson after the unresolved checkpoint: **Lesson 7.1 — Blur as neighborhood averaging**.
- Lesson 6.11 is generated and is not learner-confirmed complete.

## Current lesson files

```text
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
course/chapters/chapter-06/lesson-06-10-offscreen-cost.html
course/chapters/chapter-06/lesson-06-11-two-layer-scene-architecture.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/OffscreenCostExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/TwoLayerSceneArchitectureExplorer.kt
```

## Completed Lesson 6.10 prerequisite contract

Lesson 6.10 separates three different facts that must not be collapsed:

```text
full-backdrop command recording
≠
panel-sized destination pixel target
≠
measured frame-time cost
```

The controlled route is:

```text
BackdropArtwork commands
→ backgroundLayer full command source
→ matching crop replay
→ panelSampleLayer recorded in the panel DrawScope
→ deliberately forced panel-sized Offscreen target
→ panel tint, child content, and border
→ ParentScene
```

The explicit `CompositingStrategy.Offscreen` setting is a teaching choice. It guarantees one concrete panel-sized intermediate target whose extent can be estimated. It does not improve the sharp result and is not a general optimization. A later `RenderEffect` can require rasterization while the compositing strategy remains `Auto`.

The panel-sized estimate covers only the explicitly forced `panelSampleLayer` color target. The app still pays for the full backdrop command source, the normal full-backdrop draw, and a second replay of that source into the panel destination. Target-size arithmetic does not measure command traversal, culling, bandwidth, driver behavior, exact allocation, or frame time.

The corrected controlled Android scene keeps one position source:

```text
panelLeftDp + fixed panelTopDp
→ panel placement
→ crop translation
```

This avoids a callback-written duplicate crop state that can trail the newest panel position.

## Generated Lesson 6.11 contract

Lesson 6.11 introduces one final Chapter 6 architecture:

```text
ParentScene
├── BackdropHost
│   └── BackdropArtwork
└── GlassPanel
    ├── GlassMaterial
    └── ForegroundContent
```

The scene owns exactly two controlled `GraphicsLayer` objects:

```text
backgroundLayer
= full BackdropArtwork command source

panelSampleLayer
= panel-sized translated crop command layer
```

The third role is not another layer:

```text
ForegroundContent
= ordinary later Compose child
= sharp dot and label outside both record calls
```

The one-way draw route is:

```text
BackdropArtwork
→ backgroundLayer
→ panelSampleLayer
→ tint and border
→ ForegroundContent
→ ParentScene
```

`BackdropHost` and `GlassPanel` are siblings. The source owner excludes the consumer, so the panel cannot record itself. `GlassMaterial` is the first panel child. `ForegroundContent` is the second child and therefore draws later.

Both layers remain on the default `Auto` compositing strategy in Lesson 6.11. Two `GraphicsLayer` objects do not imply two guaranteed offscreen textures. Chapter 7 will introduce the real neighborhood blur operation and the pixel input it requires.

## Explicit Lesson 6.11 boundaries

Lesson 6.11 does not yet:

- apply a blur kernel;
- teach blur radius or edge treatment;
- downsample the panel sample;
- tune tint, saturation, contrast, rim, shadow, or noise;
- measure device GPU time or memory bandwidth;
- introduce multi-panel caching or adaptive quality.

Lesson 7.1 begins blur from first principles as neighborhood averaging.

## Reusable command, buffer, and architecture rules

- A `GraphicsLayer` command recording is not automatically an allocated pixel texture.
- State whether `Offscreen` is functionally required, automatically implied by another property, or deliberately forced only for a teaching experiment.
- When a small destination consumes a large recorded source, distinguish destination pixel area from full-source recording, drawing, and replay work.
- Keep the Android example centered on one production route. Use diagrams rather than executable defect branches unless the defect code is essential.
- Keep foreground labels and icons outside a layer that will later receive blur when those elements must remain sharp.
- Derive panel placement and crop translation from one position source when the controlled coordinate relationship is known.
- Measure real performance in a release-like build on the physical device before making optimization claims.

## Android preview rules

- Complete chapter-screen previews live in `ChapterXXScreen.kt`.
- Direct custom-composable previews live in the custom composable's own Kotlin file.
- Both preview levels must allow vertical scrolling through the complete generated content in finite-height Android Studio Preview.

Course progress: 61 of 216 lessons completed.
