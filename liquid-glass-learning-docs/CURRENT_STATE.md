# Liquid Glass Android course — current state

**Authoritative learner-confirmed progress:** 27 of 216 lessons completed.

## Completed

- Chapters 1 and 2 are complete.
- Lessons 3.1 through 3.10 are complete.
- The latest completed lesson is **3.10 — Blend modes**.
- Lessons 3.9 and 3.10 were explicitly confirmed complete by the learner on 2026-07-28.

## Not completed

- **Lesson 3.11 — Compositing laboratory** is generated in this delivery.
- Lesson 3.11 has not yet been learner-confirmed complete.
- Chapter 3 remains incomplete until Lesson 3.11 is confirmed complete.

Do not infer Lesson 3.11 completion merely because its files were generated, opened, tested, or discussed.

## Course pointers

- **Next unresolved learner checkpoint:** Lesson 3.11.
- **Generated frontier:** Lesson 3.11.
- **Next planned lesson after explicit Lesson 3.11 completion:** Lesson 4.1 — Rectangles and circles.

## Lesson 3.11 model

Lesson 3.11 introduces one new integration idea:

- the **running composite** is the current straight RGBA result after every completed stage;
- each later draw consumes the running composite as its destination;
- a bypassed stage returns its input unchanged.

The default ordered stack is:

1. opaque base: straight sRGB RGBA `(0.22, 0.58, 0.76, 1.00)`;
2. Layer A: straight sRGB RGBA `(0.90, 0.10, 0.80, 0.50)` using source-over;
3. Layer B: straight sRGB RGBA `(0.20, 0.65, 1.00, 0.25)` using source-over;
4. AndroidX saturation factor `0.40` applied to the complete middle-layer output;
5. opaque top source: straight sRGB RGBA `(0.84, 0.36, 0.18, 1.00)` using Multiply.

The default final output is approximately:

```text
straight sRGB RGBA(0.389126, 0.159208, 0.109664, 1.000000)
```

The lesson also supports:

- reversing Layer A and Layer B;
- bypassing either middle layer;
- changing both middle source alphas;
- bypassing or changing the saturation factor;
- selecting Normal, Multiply, Screen, or Plus for the opaque top layer;
- changing the opaque base preset;
- tracing one red channel through every stage;
- recalculating final luminance and contrast;
- a coding challenge that repairs accidental reuse of the original base.

## Lesson-feedback review

The clean completion of Lessons 3.9 and 3.10 confirms that two existing rules were useful:

- values that recur across sections need explicit provenance;
- simplified formulas need a complete validity contract and one general-to-short reduction.

Those rules already exist in `AGENTS.md`, so no duplicate policy was added.

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
