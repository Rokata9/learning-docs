# Liquid Glass on Android — concise conversation handoff

**Updated:** 2026-08-16  
**Course version:** 6.10.0

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
learner_confirmed_completed: 60
completed_through: "Lesson 6.9 — Avoid feedback loops"
completed_chapters: [1, 2, 3, 4, 5]
chapter_06_status: "in progress; 9 of 11 complete"
next_unresolved_checkpoint: "Lesson 6.10 — Offscreen cost"
generated_frontier: "Lesson 6.10 — Offscreen cost"
next_planned_after_checkpoint: "Lesson 6.11 — Build a two-layer scene architecture"
lesson_06_09_complete: true
lesson_06_10_generated: true
lesson_06_10_complete: false
```

## Completed Lesson 6.9 prerequisite contract

```text
ParentScene
├── BackdropHost
│   └── BackdropArtwork
└── GlassPanel
```

```text
BackdropArtwork
→ backgroundLayer
→ GlassPanel replay
→ panel material
→ ParentScene
```

`GlassPanel` is a later sibling outside the recorded producer, so no panel command can return to `backgroundLayer`.

### Carried correction for moving-panel alignment

The original controlled Lesson 6.9 Android route used:

```text
panelLeftDp
→ panel placement

post-layout coordinate callbacks
→ stored crop rectangle
```

Those were two update channels for one motion. The cumulative Lesson 6.10 patch now uses:

```text
one panelLeftDp + fixed panelTopDp
→ panel placement
→ crop translation
```

This is valid in the controlled scene because `BackdropHost` fills `ParentScene` and both local origins are `(0, 0)`. The code no longer waits for a post-layout state write before using the current crop.

## Generated Lesson 6.10 contract

### Principal idea

An offscreen target has a finite pixel extent. Keeping that extent panel-sized reduces the number of pixel positions compared with a full-scene target.

### Production route

```text
BackdropArtwork commands
→ backgroundLayer
→ clip and translate the matching crop
→ panelSampleLayer.record { ... }
→ CompositingStrategy.Offscreen
→ panel-sized color target
→ drawLayer(panelSampleLayer)
→ panel tint, content, and border
→ ParentScene
```

`backgroundLayer` is described as replayable recorded draw work. `panelSampleLayer` is the layer whose compositing strategy explicitly forces the panel-sized offscreen raster target.

### Controlled dimensions and estimate

```text
scene = 340 × 240 dp
panel = 196 × 116 dp
panel top = 72 dp
panel left range = 24...120 dp
teaching RGBA8 assumption = 4 bytes/pixel
```

At teaching density `3.0 px/dp`:

```text
panel width = round(196 × 3.0) = 588 px
panel height = round(116 × 3.0) = 348 px
panel pixels = 588 × 348 = 204,624
estimated color bytes = 204,624 × 4 = 818,496
estimated color MiB = 818,496 ÷ 1,048,576 ≈ 0.781 MiB
```

The hypothetical full-scene target is comparison arithmetic only. It is not allocated by the Android explorer.

### Symptom distinction

```text
sample trails panel position
→ first inspect geometry synchronization and state flow

whole frame stutters or skips
→ inspect CPU/GPU frame cost and deadlines
```

The lesson does not claim the Pixel 8 Pro is too slow. Real performance conclusions require a release-like build and a device trace.

### Browser lesson

The browser lesson contains:

- a practical alignment-versus-stutter distinction;
- one six-node production route;
- an interactive panel position, density, and 60/120 Hz lab;
- a synchronized twelve-state walkthrough;
- a variable ledger before all formulas;
- a complete target-size and byte-estimate trace;
- short Android excerpts;
- a visibly styled three-choice prediction;
- a four-blank coding challenge;
- five explain-back exercises;
- a ten-item Preview/device checkpoint;
- the course optimization roadmap.

### Android implementation

`OffscreenCostExplorer.kt` intentionally contains:

- one `backgroundLayer`;
- one `panelSampleLayer`;
- one shared panel position source;
- one explicit `CompositingStrategy.Offscreen` route;
- actual runtime density for the estimate;
- a 60/120 Hz teaching budget selector;
- named constants with nearby reasons;
- no executable full-scene target or diagnostic defect matrix.

### Evidence boundary

Lesson 6.10 estimates scale under an RGBA8 teaching assumption. It does not measure exact allocation, bandwidth, GPU time, dropped frames, or blur cost. Lesson 6.11 builds the two-layer scene architecture; later lessons add downsampled blur and device profiling.

## Reusable rule from the moving-panel report

1. Do not diagnose visible trailing as “performance” until checking whether placement and sampling geometry come from the same update.
2. In a controlled scene, one motion value should drive every dependent representation directly when the coordinate relationship is already known.
3. Do not add post-layout callback state merely to recompute geometry that can be derived from existing state.
4. Keep target-size estimates and measured GPU facts explicitly separate.
5. Do not allocate a deliberately wasteful comparison target in production code when arithmetic and a diagram prove the lesson point.
6. Test prediction controls for styling and click behavior in both themes.

## Current files

```text
liquid-glass-learning-docs/course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
liquid-glass-learning-docs/course/chapters/chapter-06/lesson-06-09-avoid-feedback-loops.html
liquid-glass-learning-docs/course/chapters/chapter-06/lesson-06-10-offscreen-cost.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/AvoidFeedbackLoopsExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/OffscreenCostExplorer.kt
```

## Continuation rule

Do not mark Lesson 6.10 complete merely because it was generated or reviewed. Wait for explicit learner confirmation. Do not generate Lesson 6.11 before that confirmation unless the learner explicitly asks to generate ahead.

Course progress: 60 of 216 lessons completed.
