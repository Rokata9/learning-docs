# Liquid Glass on Android — concise conversation handoff

**Updated:** 2026-08-16  
**Course version:** 6.11.0

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
learner_confirmed_completed: 61
completed_through: "Lesson 6.10 — Offscreen cost"
completed_chapters: [1, 2, 3, 4, 5]
chapter_06_status: "in progress; 10 of 11 complete"
next_unresolved_checkpoint: "Lesson 6.11 — Build a two-layer scene architecture"
generated_frontier: "Lesson 6.11 — Build a two-layer scene architecture"
next_planned_after_checkpoint: "Lesson 7.1 — Blur as neighborhood averaging"
lesson_06_10_complete: true
lesson_06_11_generated: true
lesson_06_11_complete: false
```

## Completed Lesson 6.10 prerequisite contract

Lesson 6.10 distinguishes:

```text
full-backdrop command recording
≠
panel-sized destination pixel target
≠
measured GPU or frame-time cost
```

The controlled route deliberately uses:

```text
BackdropArtwork commands
→ backgroundLayer full command source
→ matching crop replay
→ panelSampleLayer recorded in the panel DrawScope
→ CompositingStrategy.Offscreen
→ panel-sized raster target
→ panel material and content
→ ParentScene
```

`CompositingStrategy.Offscreen` is forced only to make one panel-sized target concrete for the lesson's arithmetic. It is not required for the sharp result and is not a general optimization. A future `RenderEffect` can require rasterization while the compositing strategy remains `Auto`.

The panel-sized target estimate does not include:

```text
full backdrop command recording
normal full-backdrop rendering
second replay command traversal
command culling
bandwidth
exact GPU allocation
measured frame time
```

The corrected controlled movement route is:

```text
one panelLeftDp + fixed panelTopDp
→ panel placement
→ crop translation
```

No callback-written duplicate crop state remains.

## Generated Lesson 6.11 contract

### Principal idea

Use two controlled `GraphicsLayer` objects and one ordinary foreground role so future blur input is separated from sharp labels.

### Owner tree

```text
ParentScene
├── BackdropHost
│   └── BackdropArtwork
└── GlassPanel
    ├── GlassMaterial
    └── ForegroundContent
```

### Two layers

```text
backgroundLayer
= full BackdropArtwork command source

panelSampleLayer
= panel-sized translated crop command layer
```

### Third role, not a third layer

```text
ForegroundContent
= sharp dot and label
= ordinary later Compose child
= outside both record calls
```

### Production route

```text
BackdropArtwork
→ backgroundLayer
→ panelSampleLayer
→ tint and border
→ ForegroundContent
→ ParentScene
```

`BackdropHost` and `GlassPanel` are siblings, so panel output cannot enter the source recording. Inside `GlassPanel`, `GlassMaterial` is declared first and `ForegroundContent` second. Compose draws the later child after the material.

Both controlled layers remain on `Auto` in Lesson 6.11. Layer count is not buffer count. Chapter 7 will add the first real neighborhood blur operation.

### Controlled coordinate trace

```text
red backdrop marker B = (92, 82) dp
panel origin P = (72, 72) dp
panel-local marker L = B - P
                     = (20, 10) dp
```

One panel-left value drives both placement and crop translation because `BackdropHost` fills `ParentScene` and both share origin `(0, 0)` in the controlled scene.

### Browser lesson

The browser lesson contains:

- the practical sharp-label problem;
- a two-layer/three-role object ledger;
- one interactive position and role-focus lab;
- one synchronized eleven-state walkthrough;
- one coordinate and ownership trace;
- concise Android excerpts;
- a styled three-choice prediction;
- one three-blank coding challenge;
- four explain-back exercises;
- a ten-item Chapter 6 checkpoint.

### Android implementation

`TwoLayerSceneArchitectureExplorer.kt` contains:

- exactly one `backgroundLayer`;
- exactly one `panelSampleLayer`;
- one panel position source;
- one producer sibling and one consumer sibling;
- one `GlassMaterial` first child;
- one ordinary `ForegroundContent` second child;
- no `Offscreen` setting;
- no `RenderEffect` yet;
- no post-layout crop state;
- no diagnostic mode enum;
- named constants with nearby reasons.

### Evidence boundary

Lesson 6.11 does not apply blur, downsample, edge treatment, saturation, contrast, polished lighting, profiling, caching, or adaptive quality. Lesson 7.1 begins blur as neighborhood averaging.

## Reusable rules from Lessons 6.10 and 6.11

1. Distinguish recorded commands, allocated pixel targets, and measured device cost.
2. State whether explicit `Offscreen` is required, redundant, or deliberately forced only for teaching.
3. When a small destination consumes a large recorded source, state which full-source costs remain.
4. Keep the source producer outside the consumer subtree to prevent feedback.
5. Keep labels and icons outside the layer that will later receive blur when they must remain sharp.
6. Derive placement and crop translation from one state source in controlled shared-origin geometry.
7. Keep the Android lesson on one production path; prefer diagrams to executable defect matrices.
8. Name and explain non-obvious dimensions, positions, intervals, alpha values, and coordinate math.
9. Test all prediction choices and selected styling in light and dark themes.

## Current files

```text
liquid-glass-learning-docs/course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
liquid-glass-learning-docs/course/chapters/chapter-06/lesson-06-10-offscreen-cost.html
liquid-glass-learning-docs/course/chapters/chapter-06/lesson-06-11-two-layer-scene-architecture.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/OffscreenCostExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/TwoLayerSceneArchitectureExplorer.kt
```

## Continuation rule

Do not mark Lesson 6.11 complete merely because it was generated or reviewed. Wait for explicit learner confirmation. Do not generate Lesson 7.1 before that confirmation unless the learner explicitly asks to generate ahead.

Course progress: 61 of 216 lessons completed.
