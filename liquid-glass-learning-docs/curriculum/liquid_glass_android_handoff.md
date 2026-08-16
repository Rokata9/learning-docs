# Liquid Glass on Android — concise conversation handoff

**Updated:** 2026-08-16  
**Course version:** 6.8.0

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
learner_confirmed_completed: 58
completed_through: "Lesson 6.7 — Crop the correct region"
completed_chapters: [1, 2, 3, 4, 5]
chapter_06_status: "in progress; 7 of 11 complete"
next_unresolved_checkpoint: "Lesson 6.8 — Keep the sample current"
generated_frontier: "Lesson 6.8 — Keep the sample current"
next_planned_after_checkpoint: "Lesson 6.9 — Avoid feedback loops"
lesson_06_07_complete: true
lesson_06_08_generated: true
lesson_06_08_complete: false
```

## Completed Lesson 6.7 prerequisite contract

```text
panel and backdrop LayoutCoordinates
→ panel rectangle in backdrop-local pixels
→ panel-local clip
→ negative crop translation
→ replay the matching sharp region from backgroundLayer
```

The receiver of `localBoundingBoxOf` defines the returned local coordinate space. The selected source region is then translated so its top-left lands at panel-local `(0, 0)`.

## Generated Lesson 6.8 contract

### Stable objects and two freshness channels

```text
LiveBackdropState
→ current backdrop drawing
→ currentBackgroundLayer

CurrentPanelCoordinates
→ current crop bounds in backdrop-local pixels

selected layer + selected crop bounds
→ PanelLocalTarget
```

A sample is current only when both selected products correspond to the current inputs displayed by the lesson.

### Controlled teaching model

```text
s = backdrop content step, 0...8
m = panel motion step, 0...8

R_b(s) = (250 - 14s, 62 + 6s) dp · backdrop-local
P_p(m) = (48 + 8m, 58 + 4m) dp · ParentScene-local
B_p = (12, 10) dp · ParentScene-local BackdropHost origin
C_b(m) = P_p(m) - B_p · backdrop-local crop origin

R_panel = R_b(selected layer step) - C_b(selected bounds step)
```

At the main trace state `s = 6`, `m = 6`:

```text
R_b(6) = (166, 98) dp
C_b(6) = (84, 72) dp
R_panel,desired = (82, 26) dp
```

Comparison errors:

```text
captured pixels 2 + current bounds 6 → error (56, -24) dp
current pixels 6 + captured bounds 2 → error (32, 16) dp
captured pixels 2 + captured bounds 2 → error (88, -8) dp
```

### Android route

```text
BackdropHost draw
→ currentBackgroundLayer.record { drawContent() }
→ current layer-content channel

BackdropHost and GlassPanel placement
→ LayoutCoordinates
→ localBoundingBoxOf(..., clipBounds = false)
→ current bounds channel

selected layer + selected bounds
→ clipRect
→ translate(-crop.left, -crop.top)
→ drawLayer(selectedLayer)
```

The explorer retains `capturedBackgroundLayer` and a captured measurement only to make stale states selectable. The visible backdrop is drawn directly as diagnostic evidence while the comparison layer can remain frozen.

### Browser lesson

- One canonical state drives four freshness modes, two sliders, four presets, capture/play controls, metrics, formulas, diagrams, and the seventeen-state walkthrough.
- The objects and both producer routes are named before formulas.
- A complete variable ledger precedes the symbolic and substituted marker trace.
- Prediction, repair challenge, five hidden-answer exercises, ten-item checkpoint, and explicit evidence boundaries are included.
- Provenance popups choose a viewport-safe direction, and dark code containers reset nested inline-code styling.

### Evidence boundary

The lesson proves two independent freshness dependencies and their visible failure modes. It does not prove an atomic same-frame production architecture, add blur, permit self-capture, perform CPU readback, or measure offscreen cost. Lesson 6.9 handles feedback loops.

## Preview placement and scrollability

- Complete previews: `Chapter06Screen.kt`.
- Direct previews: `KeepSampleCurrentExplorer.kt`.
- Both levels are vertically scrollable in finite-height Android Studio Preview.

## Current files

```text
Learning:
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
course/chapters/chapter-06/lesson-06-07-crop-the-correct-region.html
course/chapters/chapter-06/lesson-06-08-keep-the-sample-current.html

Android:
app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter06/KeepSampleCurrentExplorer.kt
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
- A dynamic sample with independently changing image and geometry inputs must expose and trace both freshness channels separately.
- Diagnostic frozen layers or rectangles must be labelled as evidence, not presented as production architecture.
- Generate only incremental changed-file packages.

## Fresh-account continuation

`NEW_CHAT_PROMPT.md` is the canonical paste-ready continuation prompt. It carries the exact 58-of-216 state, marks Lesson 6.8 as generated but incomplete, and lists the current files required to review it or generate Lesson 6.9 after explicit completion.

## Response footer

```text
Course progress: X of 216 lessons completed.
Estimated remaining conversation context: ~N tokens (approximate).
```
