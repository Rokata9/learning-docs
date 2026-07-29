# Liquid Glass Android course — current state

**Authoritative learner-confirmed progress:** 28 of 216 lessons completed.

## Completed

- Chapters 1, 2, and 3 are complete.
- Lessons 3.1 through 3.11 are complete.
- The latest completed lesson is **3.11 — Compositing laboratory**.
- Lesson 3.11 was marked complete because the learner requested the next lesson without reporting a remaining question, correction, or test problem.

## Not completed

- **Lesson 4.1 — Rectangles and circles** is generated in this delivery.
- Lesson 4.1 has not yet been learner-confirmed complete.
- Chapter 4 remains in progress.

Do not infer Lesson 4.1 completion merely because its files were generated, opened, tested, or discussed.

## Course pointers

- **Next unresolved learner checkpoint:** Lesson 4.1.
- **Generated frontier:** Lesson 4.1.
- **Next planned lesson after explicit Lesson 4.1 completion:** Lesson 4.2 — Rounded rectangles.

## Lesson 4.1 model

Lesson 4.1 introduces one geometry distinction:

- a **rectangle** has four boundary coordinates: left, top, right, and bottom; this lesson supplies left, top, width, and height, then derives right and bottom;
- a **circle** is controlled by one center point and one radius;
- the circle's enclosing square is a rectangle that contains the circle, but the square is not the circle.

The browser reset values use SVG-local teaching units:

```text
Rectangle:
left = 80
top = 70
width = 240
height = 150
right = 320
bottom = 220

Circle:
center = (520, 145)
radius = 75
diameter = 150
leftmost = 445
rightmost = 595
topmost = 70
bottommost = 220
```

The Android explorer uses one controlled `320.dp × 220.dp` Compose drawing surface. It converts the requested shape dimensions from dp to Canvas-local px at runtime, draws one rectangle with `drawRect`, and draws one circle with `drawCircle`.

The lesson deliberately defers:

- rounded corners;
- capsules;
- arbitrary paths;
- clipping and masks;
- antialiasing theory;
- distance formulas for arbitrary points around a circle.

## Lesson-feedback review

The learner moved on from Lesson 3.11 without reporting a defect or question. This confirms completion but does not identify a new reusable teaching rule beyond the existing prerequisite, explicit-intermediate, and value-provenance rules. No new `AGENTS.md` policy was added.

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
