# Liquid Glass on Android — concise conversation handoff

**Updated:** 2026-08-15  
**Course version:** 6.7.0

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
learner_confirmed_completed: 57
completed_through: "Lesson 6.6 — Record the background"
completed_chapters: [1, 2, 3, 4, 5]
chapter_06_status: "in progress; 6 of 11 complete"
next_unresolved_checkpoint: "Lesson 6.7 — Crop the correct region"
generated_frontier: "Lesson 6.7 — Crop the correct region"
next_planned_after_checkpoint: "Lesson 6.8 — Keep the sample current"
lesson_06_06_complete: true
lesson_06_07_generated: true
lesson_06_07_complete: false
```

## Completed Lesson 6.6 prerequisite contract

```text
BackdropArtwork
→ backgroundLayer.record
→ full recorded backgroundLayer
→ drawLayer
→ one or more replay targets
```

`GlassPanel` is a later sibling outside the recording owner. The full layer is reusable, but a panel-sized consumer still needs the matching source rectangle.

## Generated Lesson 6.7 contract

### Stable objects and spaces

```text
ParentScene
├── BackdropHost at parent origin (12, 10) dp
│   └── backgroundLayer local origin (0, 0)
│
└── GlassPanel at default parent origin (64, 70) dp
    └── PanelLocalTarget origin (0, 0)
```

### Coordinate-conversion route

```text
backgroundCoordinates
+
panelCoordinates
→ backgroundCoordinates.localBoundingBoxOf(
      sourceCoordinates = panelCoordinates,
      clipBounds = false,
  )
→ crop rectangle expressed in background-local pixels
```

The receiver controls the output space: the returned `Rect` addresses the recorded backdrop layer, not `ParentScene` and not the panel's own local target.

### Replay route

```text
crop source top-left
→ negate x and y
→ panel-local clip rectangle
→ translate full backgroundLayer
→ drawLayer(backgroundLayer)
→ aligned sharp selected region
→ later panel-owned material artwork
```

Default controlled values:

```text
B_p = (12, 10) dp
P_p = (64, 70) dp
C_b = P_p - B_p = (52, 60) dp
C_b,max = (262, 190) dp
T = -C_b = (-52, -60) dp
Q_b = (172, 163.2) dp
Q_panel = Q_b - C_b = (120, 103.2) dp
```

### Deliberate defects

1. Parent-coordinate defect: use `(64, 70)` as a background-local source origin. The source error is `(12, 10)` dp.
2. No-translation defect: replay from background-local `(0, 0)` regardless of panel movement.

### Evidence boundary

The lesson proves current-frame coordinate mapping and sharp region selection. It does not yet prove freshness during motion, blur, feedback prevention, CPU readback, or production cost. Lesson 6.8 handles freshness.

## Browser lesson

- One canonical state drives panel-position controls, three mapping modes, metrics, formulas, diagrams, and a seventeen-state walkthrough.
- Every difficult step keeps `ParentScene`, `backgroundLayer`, `PanelLocalTarget`, and final `GlassPanel` output visible together.
- The tracked horizontal-line point proves the source-origin subtraction numerically.
- Prediction, repair challenge, five hidden-answer exercises, ten-item checkpoint, completion record, and explicit boundaries are present.
- Provenance popups choose a viewport-safe direction and dark code containers reset nested inline-code styling.

## Android path

```text
BackdropHost
→ onGloballyPositioned → backgroundCoordinates
→ drawWithContent
→ backgroundLayer.record { drawContent() }
→ drawLayer(backgroundLayer) into ParentScene

GlassPanel
→ onGloballyPositioned → panelCoordinates
→ backgroundCoordinates.localBoundingBoxOf(panelCoordinates, false)
→ clipRect
→ translate(-crop.left, -crop.top)
→ drawLayer(backgroundLayer)
→ panel tint and details
```

The Android explorer also exposes two deliberately incorrect modes and reports actual runtime pixel measurements beside the controlled dp derivation.

## Preview placement and scrollability

- Complete previews: `Chapter06Screen.kt`.
- Direct previews: `CropCorrectRegionExplorer.kt`.
- Both levels are vertically scrollable in finite-height Android Studio Preview.

## Current files

```text
Learning:
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
course/chapters/chapter-06/lesson-06-06-record-the-background.html
course/chapters/chapter-06/lesson-06-07-crop-the-correct-region.html

Android:
app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter06/CropCorrectRegionExplorer.kt
```

## Canonical explanation standards

- Lesson 4.8: visual intermediate images and explicit layer ownership.
- Lesson 4.9: prerequisite-complete step depth for difficult math.
- Consolidated Lesson 5.8: formulas panel, moment matrix, dependency traces, and event markers.
- Walkthrough length follows causal complexity; fourteen is not a target.
- Total-beginner comprehension is QA stage zero.
- Use diagram plus visible stepper by default; use overlay controls only when spatial evidence needs full width.
- In visible HTML prose, code identifiers use semantic `<code>` elements rather than Markdown punctuation.
- Every click-controlled popup must remain inside the viewport and choose the side with usable space.
- Nested `<code>` inside a dark preformatted code container must inherit that container rather than the global inline-code background.
- Generate only incremental changed-file packages.

## Fresh-account continuation

`NEW_CHAT_PROMPT.md` is the canonical paste-ready continuation prompt. It carries the exact 57-of-216 state, marks Lesson 6.7 as generated but incomplete, and lists the current files required to review it or generate Lesson 6.8 after explicit completion.

## Response footer

```text
Course progress: X of 216 lessons completed.
Estimated remaining conversation context: ~N tokens (approximate).
```
