# Liquid Glass Android course — current state

**Authoritative learner-confirmed progress:** 30 of 216 lessons completed.

## Completed

- Chapters 1, 2, and 3 are complete.
- Lesson 4.1 — Rectangles and circles is complete.
- Lesson 4.2 — Rounded rectangles is complete by the learner's explicit completion statement after the visual-layout correction.
- The latest completed lesson is **4.2 — Rounded rectangles**.

## Not completed

- **Lesson 4.3 — Capsules** is generated and is the current learner checkpoint.
- Chapter 4 remains in progress. Lessons 4.3 through 4.11 are not complete.

## Course pointers

- **Next unresolved learner checkpoint:** Lesson 4.3.
- **Generated frontier:** Lesson 4.3.
- **Next planned lesson after explicit Lesson 4.3 completion:** Lesson 4.4 — Concentric corners.

## Lesson 4.3 model

Lesson 4.3 starts from the maximum controlled radius reached in Lesson 4.2.

The browser reset values use SVG-local teaching units:

```text
left = 120
center Y = 210
height = 260
width = 520
radius = height / 2 = 130
```

The capsule contract is:

```text
horizontal capsule requires width >= height
radius = height / 2
vertical straight side = height - 2 * radius = 0
long straight span = width - 2 * radius = width - height
```

For the reset values:

```text
left end center = (120 + 130, 210) = (250, 210)
right edge = 120 + 520 = 640
right end center = (640 - 130, 210) = (510, 210)
long straight span = 520 - 260 = 260
```

The browser varies only width from `260` through `600`. Height remains `260`, so radius remains `130`. At width `260`, the two end centers meet and the boundary reaches the circle limit. The diagram replaces the coincident `L` and `R` labels with one `L = R` marker so the correct boundary state does not create overlapping text.

The Android explorer uses:

```text
fixed height = 120.dp
derived radius = 60.dp
adjustable width = 120.dp through 280.dp
reset width = 240.dp
reset long straight span = 120.dp
```

It applies the same derived radius to `RoundedCornerShape` and to `drawRoundRect` through `CornerRadius(radiusPx, radiusPx)`. At the `120.dp` circle limit, the two end-guide circles coincide, so the Canvas overlay draws that visible guide and center only once.

## Lesson-feedback review

The learner completed Lesson 4.2 after the compact visual correction and reported no remaining issue. This reinforces the existing interactive-geometry footprint and label-separation rule. It does not reveal a new reusable policy, so `AGENTS.md` is unchanged in the Lesson 4.3 delivery.

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
