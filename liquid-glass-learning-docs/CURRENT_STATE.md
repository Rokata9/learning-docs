# Liquid Glass Android course — current state

**Authoritative learner-confirmed progress:** 35 of 216 lessons completed.

## Completed

- Chapters 1, 2, and 3 are complete.
- Lessons 4.1 through 4.7 are complete.
- The latest completed lesson is **4.7 — Clipping**.

## Not completed

- **Lesson 4.8 — Masks** is generated and remains the current learner checkpoint.
- The Lesson 4.8 spatial teaching order was corrected after the learner's first mask question.
- The Android spatial mask implementation required a second correction after the learner observed that the content pattern remained visible outside the capsule.
- A third clarification now separates `DstIn` from `SrcIn`, alpha masks from grayscale previews, mask application from later source-over, and explicit Canvas layers from `graphicsLayer(Offscreen)`.
- Chapter 4 remains in progress. Lessons 4.8 through 4.11 are not complete.

## Course pointers

- **Next unresolved learner checkpoint:** Lesson 4.8.
- **Generated frontier:** Lesson 4.8.
- **Next planned lesson after explicit Lesson 4.8 completion:** Lesson 4.9 — Soft edges and antialiasing.

## Latest Lesson 4.8 clarification and implementation state

The learner confirmed the spatial purpose of masks, then identified five linked ambiguities:

- `DstIn` versus `SrcIn`;
- why opaque black can act as a full-strength mask;
- why the code may appear to work without `graphicsLayer(Offscreen)`;
- mask multiplication versus later source-over compositing;
- why the four-zone direct-alpha microscope is only a controlled shortcut.

The corrected lesson now begins from three separate scene objects:

```text
content being masked
→ multi-color pattern in the spatial demo
→ opaque orange content in the one-position microscope

mask data
→ one alpha value at every position
→ capsule alpha is 0 outside and selected value inside

background
→ opaque navy Surface behind the masked group
```

`source` and `destination` are not permanent names for those objects. They are temporary roles inside one blend operation.

The two `In` modes are now defined by the color operand they preserve:

```text
DstIn
→ keeps destination color
→ multiplies destination premultiplied RGB and alpha by source alpha

SrcIn
→ keeps source color
→ multiplies source premultiplied RGB and alpha by destination alpha
```

For the Android `DstIn` path:

```text
content group drawn first = destination
mask layer restored second = source
```

The mask source RGB is ignored. `Color.Black` is straight RGBA `(0, 0, 0, 1)`, so it supplies mask alpha `1`. `Color.Black.copy(alpha = 0.60f)` supplies mask alpha `0.60`. Transparent untouched mask-layer positions supply alpha `0`.

The grayscale row is now labelled only as a visualization of numeric mask values. Opaque gray RGB `(0.60, 0.60, 0.60)` still has alpha `1`; under `DstIn` it would keep the destination fully. A luminance mask would require another operation that converts RGB brightness into alpha.

The arithmetic is now taught as two consecutive stages:

```text
Stage A · apply mask
masked content alpha
= original content alpha × mask alpha

Stage B · draw masked group over navy
the masked content group becomes the source
its masked content alpha is now the source alpha consumed by source-over
```

For opaque orange content and mask alpha `0.60`:

```text
masked straight RGBA
= (0.8400, 0.3600, 0.1800, 0.6000)

masked premultiplied RGBA
= (0.5040, 0.2160, 0.1080, 0.6000)

source-over opaque navy
→ final straight sRGB RGBA
  (0.5440, 0.2880, 0.2280, 1.0000)
```

The four-zone direct-alpha microscope remains exact only because each zone contains one solid draw and the zones do not overlap. The revised lesson adds a counterexample:

```text
mask a completed two-shape group once at 0.60
→ overlap alpha = 0.60

draw each overlapping shape separately at alpha 0.60
→ overlap alpha = 0.60 + 0.60 × (1 − 0.60)
→ overlap alpha = 0.84
```

The revised Compose code owns the two required boundaries explicitly, with different jobs:

```text
navy parent Surface
→ graphicsLayer(Offscreen) isolates this Canvas's complete content group
→ draw complete multi-color pattern into that group
→ full-bounds Canvas.saveLayer starts as a transparent mask source
→ draw capsule alpha into the mask layer
→ restore the complete mask layer with DstIn
→ Compose draws the finished masked group over navy with SrcOver
```

The outer `graphicsLayer(Offscreen)` is retained because it states the composable-level destination boundary using Compose's documented masking mechanism. The inner `Canvas.saveLayer` is not a duplicate outer boundary; it creates the complete source-mask image, including alpha `0` outside the capsule. The learner's successful render after temporarily removing `Offscreen` proves only that the destination used in that run did not visibly include the navy parent. It does not identify which framework-owned render target supplied isolation, so the course does not promote that observation to a general Compose contract. An explicit outer `Canvas.saveLayer` could replace `graphicsLayer(Offscreen)`, but the implementation should not use both outer mechanisms without another need.

The spatial demo now exposes both capsule mask alpha `1.00` and `0.60`, so the partial-mask explanation has a visible counterpart in the actual multi-draw pattern.

Android file changed by this clarification:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/MasksExplorer.kt
```

`Chapter04Screen.kt` already contains the required complete-screen and direct-child previews and did not change.

## Lesson-feedback review

This feedback exposed a reusable teaching and implementation pattern. A mask lesson must name scene objects independently from blend operands, identify whether visibility is stored in alpha or derived from RGB, teach mask application before later source-over compositing, support every special case with a visible example and counterexample, and name the exact isolation layer rather than inferring one from a successful device render. `AGENTS.md` now contains the **Mask operands, representation, two-stage compositing, and isolation-boundary gate**.

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
