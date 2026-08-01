# Liquid Glass Android course — current state

**Authoritative learner-confirmed progress:** 35 of 216 lessons completed.

## Completed

- Chapters 1, 2, and 3 are complete.
- Lessons 4.1 through 4.7 are complete.
- The latest completed lesson is **4.7 — Clipping**.

## Not completed

- **Lesson 4.8 — Masks** is generated, corrected after learner feedback, and remains the current learner checkpoint.
- Chapter 4 remains in progress. Lessons 4.8 through 4.11 are not complete.

## Course pointers

- **Next unresolved learner checkpoint:** Lesson 4.8.
- **Generated frontier:** Lesson 4.8.
- **Next planned lesson after explicit Lesson 4.8 completion:** Lesson 4.9 — Soft edges and antialiasing.

## Lesson 4.8 corrected model

The learner understood the four-zone arithmetic but correctly identified that the lesson hid the main practical meaning of masks. The corrected lesson now defines a mask first as a **spatial visibility map**: separate data aligned with content that controls how much content survives at every position.

The lesson begins with three canonical uses:

```text
1. oversized content + fixed capsule mask
   → content is cut to the capsule silhouette

2. moving content + fixed capsule mask
   → the silhouette stays fixed while different content passes through it

3. fixed content + moving capsule mask
   → the mask reveals a changing region of the stationary content
```

A manual position slider exposes one state at a time. Time-driven animation remains in Chapter 5.

The hard capsule mask uses:

```text
outside capsule = mask value 0
inside capsule  = mask value 1
```

Away from the rendered edge, this can match the visible result of a hard clip. The concepts remain separate: a clip is a geometric draw-state restriction, while a mask is an independent value field that may also contain partial values, textures, images, or shader-calculated data.

The four-zone arithmetic microscope remains:

```text
zone A = 0.00
zone B = 0.25
zone C = 0.60
zone D = 1.00
```

Fixed straight sRGB inputs:

```text
candidate = RGBA(0.84, 0.36, 0.18, 1.00)
background = RGBA(0.10, 0.18, 0.30, 1.00)
```

At mask value `0.60`:

```text
effective source alpha
= candidate alpha × mask value
= 1.00 × 0.60
= 0.60
```

The corrected representation boundary is:

```text
masked straight RGBA
= (0.8400, 0.3600, 0.1800, 0.6000)

masked premultiplied RGBA
= (0.5040, 0.2160, 0.1080, 0.6000)
```

A pure opacity mask does not recolor straight RGB. Premultiplied RGB contributions scale because they already contain alpha weighting. Compositing the masked source over the opaque navy background then produces final straight sRGB RGBA approximately `(0.5440, 0.2880, 0.2280, 1.0000)`.

The Android spatial demonstration now groups a multi-draw pattern in an offscreen Canvas, draws the pattern first, then applies a capsule with `BlendMode.DstIn`. The parent navy background remains outside the isolated group. The original direct `alpha = maskValue` zone path remains only as a controlled arithmetic microscope for one solid candidate and non-overlapping zones.

Android files changed by the correction:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/MasksExplorer.kt
```

## Lesson-feedback review

The learner's question exposed a reusable ordering defect. A mask lesson can be numerically correct yet still fail if it begins with alpha multiplication and never establishes the spatial relationship between content, mask, and visible result. `AGENTS.md` now contains the **Spatial-first mask and visibility-field gate**. Future mask lessons must show a shape cut and both content-motion relationships before per-position arithmetic.

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
