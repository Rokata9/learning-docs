# Liquid Glass Android course — current state

**Authoritative learner-confirmed progress:** 31 of 216 lessons completed.

## Completed

- Chapters 1, 2, and 3 are complete.
- Lesson 4.1 — Rectangles and circles is complete.
- Lesson 4.2 — Rounded rectangles is complete.
- Lesson 4.3 — Capsules is complete by the learner's progression without a remaining question.
- The latest completed lesson is **4.3 — Capsules**.

## Not completed

- **Lesson 4.4 — Concentric corners** is generated and is the current learner checkpoint.
- Chapter 4 remains in progress. Lessons 4.4 through 4.11 are not complete.

## Course pointers

- **Next unresolved learner checkpoint:** Lesson 4.4.
- **Generated frontier:** Lesson 4.4.
- **Next planned lesson after explicit Lesson 4.4 completion:** Lesson 4.5 — Paths.

## Lesson 4.4 model

Lesson 4.4 starts from the rounded-corner center calculation taught in Lesson 4.2 and places one rounded rectangle inside another.

The browser reset values use SVG-local teaching units:

```text
outer left = 110
outer top = 35
outer width = 600
outer height = 360
outer radius = 90
uniform padding = 30
```

The outer top-left curve center is:

```text
outer center
= (outer left + outer radius, outer top + outer radius)
= (110 + 90, 35 + 90)
= (200, 125)
```

The inner bounds begin at:

```text
inner left = 110 + 30 = 140
inner top = 35 + 30 = 65
inner width = 600 - 2 * 30 = 540
inner height = 360 - 2 * 30 = 300
```

To preserve the same corner center:

```text
inner radius
= outer radius - uniform padding
= 90 - 30
= 60

inner center
= (140 + 60, 65 + 60)
= (200, 125)
```

Copying the outer radius instead produces inner center `(230, 155)`, a shift of `(30, 30)`.

The interactive model varies padding from `0` through `90`, compares the concentric radius with the copied-radius defect, and exposes the radius-zero boundary at padding `90`. The primary diagram is capped at `820 × 430` CSS pixels, and complete coordinates remain in synchronized readouts outside the geometry.

The Android explorer uses:

```text
outer Canvas bounds = 280.dp × 224.dp
outer radius = 56.dp
reset padding = 20.dp
reset inner radius = 36.dp
outer and inner top-left center = (76.dp, 84.dp)
```

It applies the same derived radius to `RoundedCornerShape` and to `drawRoundRect` through `CornerRadius(innerRadiusPx, innerRadiusPx)`.

## Lesson-feedback review

The learner proceeded from Lesson 4.3 without a question or correction. This confirms that the capsule lesson's compact geometry, external readouts, boundary state, and exact radius derivation were understandable. The message does not reveal a new reusable policy beyond the existing beginner-first, formula-reveal, and interactive-geometry gates, so `AGENTS.md` is unchanged.

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
