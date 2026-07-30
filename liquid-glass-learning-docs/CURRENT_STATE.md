# Liquid Glass Android course — current state

**Authoritative learner-confirmed progress:** 29 of 216 lessons completed.

## Completed

- Chapters 1, 2, and 3 are complete.
- Lesson 4.1 — Rectangles and circles is complete by the learner's explicit request to mark the prior pending work complete and continue.
- The latest completed lesson is **4.1 — Rectangles and circles**.

## Not completed

- **Lesson 4.2 — Rounded rectangles** is generated and has received a visual-layout correction.
- The learner reported that the interactive explanation contained overlapping text and was probably too large.
- The corrected Lesson 4.2 remains pending learner review and has not been learner-confirmed complete.
- Chapter 4 remains in progress. Lessons 4.2 through 4.11 are not complete.

The request to mark the prior pending work complete applies to the previous learner checkpoint, Lesson 4.1. It does not close Chapter 4 because the remaining Chapter 4 lessons have not been completed.

## Course pointers

- **Next unresolved learner checkpoint:** Lesson 4.2.
- **Generated frontier:** Lesson 4.2.
- **Next planned lesson after explicit Lesson 4.2 completion:** Lesson 4.3 — Capsules.

## Lesson 4.2 model

Lesson 4.2 keeps one rectangle's outer bounds fixed and adds one uniform corner-radius input.

The browser reset values use SVG-local teaching units:

```text
Rectangle bounds:
left = 120
top = 80
width = 520
height = 260
right = 640
bottom = 340

Corner radius:
radius = 50
maximum controlled radius = min(520, 260) / 2 = 130
```

For the top-left corner:

```text
sharp corner = (120, 80)
curve center = (120 + 50, 80 + 50) = (170, 130)
top join = (170, 80)
left join = (120, 130)
```

The remaining straight spans are:

```text
top straight length = 520 - 50 - 50 = 420
side straight length = 260 - 50 - 50 = 160
```

The browser exposes the original sharp rectangle, the rounded silhouette, one construction circle, all four curve centers, both top-left join points, a radius slider, exact presets, a draggable horizontal radius handle, a manual derivation stepper, a prediction check, and a coding challenge.

The Android explorer uses a fixed `320.dp × 240.dp` requested drawing surface and a fixed rectangle at:

```text
left = 24.dp
top = 36.dp
width = 272.dp
height = 168.dp
initial radius = 32.dp
maximum controlled radius = 84.dp
```

It compares `RoundedCornerShape(cornerRadiusDp.dp)` with a direct `drawRoundRect` call whose dp values are converted to Canvas-local px inside the drawing scope.

The lesson deliberately defers:

- the capsule contract and name to Lesson 4.3;
- different radius values at individual corners;
- different horizontal and vertical radii for one corner;
- paths, meaning boundaries built from connected drawing segments;
- clipping, meaning restricting drawing to a shape, and masks, meaning separate values that control visibility;
- antialiasing, meaning the renderer's softened transition along a mathematical boundary, and physical-pixel coverage.

## Lesson 4.2 visual correction

The first interactive geometry used a full-width SVG when the browser width was below 2300 pixels. At `1920×1080`, this stacked the diagram above its controls, enlarged the SVG to about `1750 × 839` CSS pixels, and placed the fixed-height label, side-span label, and left-join coordinate text in the same left margin.

The corrected interaction now:

- keeps the geometry and controls side by side at the 1920-pixel desktop target;
- caps the live SVG at `820 × 430` CSS pixels and keeps the same cap on ultrawide displays;
- replaces long on-shape coordinate labels with short `C`, `T`, and `L` markers;
- moves complete live coordinates into four readout cards below the diagram;
- highlights the remaining top and side straight boundary directly in pink instead of adding competing arrow labels;
- keeps fixed width and fixed height in separate top and left label lanes;
- keeps the full interactive section below one 1080-pixel viewport height at the target desktop width.

Learner-confirmed progress remains **29 of 216**. Lesson 4.2 remains the unresolved checkpoint and generated frontier.

## Lesson-feedback review

The correction exposed a reusable quality gap: free-play geometry diagrams need the same viewport-fit discipline already required for steppers. `AGENTS.md`, the handoff, and the curriculum now require capped diagram growth, label-lane separation, exact external readouts when labels would crowd the shape, and minimum/reset/maximum overlap checks.

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
