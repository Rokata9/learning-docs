# Liquid Glass Android course — current state

**Authoritative learner-confirmed progress:** 35 of 216 lessons completed.

## Completed

- Chapters 1, 2, and 3 are complete.
- Lessons 4.1 through 4.7 are complete.
- The latest completed lesson is **4.7 — Clipping**.

## Not completed

- **Lesson 4.8 — Masks** is generated, has received an explicit positive quality review, and remains the current learner checkpoint.
- Chapter 4 remains in progress. Lessons 4.8 through 4.11 are not complete.

## Course pointers

- **Next unresolved learner checkpoint:** Lesson 4.8.
- **Generated frontier:** Lesson 4.8.
- **Next planned lesson after explicit Lesson 4.8 completion:** Lesson 4.9 — Soft edges and antialiasing.

## Latest authoritative Lesson 4.8 rewrite — visual layer movie and per-position algorithm

The learner rejected the preceding Lesson 4.8 rewrite without reading its long response because the explanation still depended too heavily on prose. The terms `outer target` and `inner target` did not create a usable mental picture. The lesson also failed to maintain value-origin tooltips consistently, described straight and premultiplied RGBA instead of calculating both in parallel, and did not show every intermediate image after every operation.

This delivery supersedes all earlier Lesson 4.8 correction packages.

### Visual-first structure

The lesson begins with four rendered images:

```text
complete pattern image
→ complete full-size mask image
→ masked-pattern intermediate image
→ final image over navy
```

The central layer explanation is now a seven-step movie. Every step shows:

```text
parent target image
pattern target image
mask target image
complete intermediate result after the step
active drawing target
exact input → operation → output
exact Kotlin line
```

A rotatable CSS 3D stack shows the layer order. Exact 2D front-view thumbnails remain visible below it so perspective is never the only evidence.

### Exact Android target creation

The implementation uses two explicit `Canvas.saveLayer` calls and no `graphicsLayer` modifier:

```kotlin
canvas.saveLayer(fullBounds, contentGroupPaint)
canvas.saveLayer(fullBounds, dstInMaskPaint)
```

The first call creates the pattern-only target. The second creates the full-size mask target. The mask target is explicitly initialized with alpha `0` across its complete bounds before the capsule writes the selected inside alpha.

### Per-position algorithm

The lesson includes an inside/outside microscope. One selected Canvas coordinate displays:

```text
pattern pixel at (x, y)
mask pixel at the same (x, y)
DstIn intermediate output pixel
final source-over-navy pixel
```

A transparent mask pixel is now described as a valid RGBA input with alpha `0`, not as missing data. The API-level result is calculated at matching positions. A GPU may optimize physical work only while preserving that required result.

### Straight and premultiplied cases

The lesson states the representation boundary at the beginning:

```text
Compose Color input boundary
→ straight sRGB RGBA

DstIn contribution arithmetic
→ premultiplied sRGB RGBA
```

Two complete cases are shown in parallel:

```text
Case A: content alpha 1.00, mask alpha 0.60
Case B: content alpha 0.50, mask alpha 0.60
```

Each RGB or RGBA tuple has a small rounded color chip. Premultiplied tuples use a chip that displays the represented color rather than interpreting premultiplied numbers as straight channels.

### Value provenance controls

Values inherited from earlier sections, selected by controls, fixed by an API, or derived in the current section have small click-controlled information marks placed beside the value like a superscript. The popup states origin, representation, and next consumer. Essential mathematics remains visible without opening it.

### `graphicsLayer` versus explicit `saveLayer`

The new isolation diagram compares four rendered arrangements:

```text
current safe design
→ explicit pattern-target Canvas.saveLayer + full-size mask-target saveLayer

safe alternative
→ graphicsLayer(Offscreen) + full-size mask saveLayer

unsafe design
→ no pattern-isolation method

redundant design
→ graphicsLayer + explicit pattern-target saveLayer + mask-target saveLayer
```

The current code works without `graphicsLayer(Offscreen)` because the first explicit `saveLayer` replaced that pattern-isolation role. Removing both pattern-isolation methods would allow `DstIn` to modify whatever pixels are already in the parent destination, including navy.

### Visible cost model

The lesson shows explicit temporary-target counts and one adjustable RGBA8 memory estimate. It distinguishes the model from actual GPU allocation, which can differ because of format, alignment, tiling, reuse, and driver behavior.

### Android companion

Changed Android file:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/MasksExplorer.kt
```

`Chapter04Screen.kt` remains unchanged because it already contains complete-screen and direct-child previews in light and dark modes.

### Reusable rule recorded

`AGENTS.md` now contains **Visual-first intermediate-state and value-annotation gate**. It requires actual intermediate images, parallel straight/premultiplied cases, RGB/RGBA color chips, superscript-style provenance controls, per-position algorithm graphics, isolation comparisons, target-count cost diagrams, and verification of every interactive state.

## Learner evaluation — canonical gold-standard exemplar

On 2026-08-03, the learner explicitly described the final visual-first Lesson 4.8 edit as **“world-class explanation level.”** This is a strong positive teaching signal. The exact visual-first state is now the canonical exemplar for future lessons involving layers, buffers, masks, compositing, or other invisible intermediate graphics state.

The exemplar is the state delivered by:

```text
liquid-glass-lesson-04-08-visual-layer-movie-rewrite-learning-docs.zip
liquid-glass-lesson-04-08-visual-layer-movie-rewrite-android.zip
```

The exemplar’s defining qualities are:

```text
visible scene objects before terminology
→ every target and intermediate image after every operation
→ active target plus exact Kotlin line
→ optional 3D ordering view plus authoritative 2D front views
→ same-coordinate pixel microscope
→ parallel straight and premultiplied worked cases
→ color chips beside every RGB/RGBA tuple
→ superscript-style value-provenance controls
→ safe / alternative / unsafe / redundant isolation diagrams
→ explicit target-count, bounds, pass-count, and memory model
```

This positive review does **not** mark Lesson 4.8 complete. The learner indicated that the files still need to be replaced locally. Completion remains pending local application/testing and an explicit completion statement.

Only the Markdown state and policy files change in the present documentation update. The lesson HTML and `MasksExplorer.kt` remain exactly the previously praised visual-first versions.

## Delivery rules

- Learning-doc ZIPs contain only learning-document files changed by the current delivery.
- Android ZIPs contain only Android files changed by the current delivery.
- Do not create an empty Android ZIP when Android code did not change.
- Do not embed complete Android source files or source-tab viewers in lesson HTML. Use short attributed excerpts only when needed for explanation or a coding challenge.
- Include both complete-screen and direct-child Compose previews for each newly active child composable.
- Starting with Lesson 3.1, HTML and Android lesson chrome follows the operating-system light/dark preference. Exact instructional colors remain unchanged.

## Response footer

Every lesson-related response ends with:

`Course progress: X of 216 lessons completed.`

Then include a clearly labelled best-effort estimate of the remaining conversation context. Count only learner-confirmed completion.
