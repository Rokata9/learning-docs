# Liquid Glass Android course — current state

**Authoritative learner-confirmed progress:** 35 of 216 lessons completed.

## Completed

- Chapters 1, 2, and 3 are complete.
- Lessons 4.1 through 4.6 are complete.
- **Lesson 4.7 — Clipping is complete** by the learner's progression without a remaining question, correction, or test problem.
- The latest completed lesson is **4.7 — Clipping**.

## Not completed

- **Lesson 4.8 — Masks** is generated and is the current learner checkpoint.
- Chapter 4 remains in progress. Lessons 4.8 through 4.11 are not complete.

## Course pointers

- **Next unresolved learner checkpoint:** Lesson 4.8.
- **Generated frontier:** Lesson 4.8.
- **Next planned lesson after explicit Lesson 4.8 completion:** Lesson 4.9 — Soft edges and antialiasing.

## Lesson 4.8 model

Lesson 4.8 starts from Lesson 4.7's clearly inside-or-outside clip decisions and replaces the binary teaching result with one visibility amount from `0` through `1` at each enlarged zone.

Fixed straight sRGB inputs:

```text
candidate = RGBA(0.84, 0.36, 0.18, 1.00)
background = RGBA(0.10, 0.18, 0.30, 1.00)
```

Reset mask field:

```text
zone A = 0.00
zone B = 0.25
zone C = 0.60
zone D = 1.00
```

A mask value is separate data. The browser visualizes value `m` as opaque grayscale preview RGB(`m`, `m`, `m`), but that preview RGB is not painted as a tint.

At the reset trace in zone C:

```text
candidate alpha = 1.00
mask value = 0.60

effective source alpha
= candidate alpha × mask value
= 1.00 × 0.60
= 0.60

background opening
= 1 − 0.60
= 0.40
```

Source-over produces:

```text
red   = 0.84 × 0.60 + 0.10 × 0.40 = 0.5440
green = 0.36 × 0.60 + 0.18 × 0.40 = 0.2880
blue  = 0.18 × 0.60 + 0.30 × 0.40 = 0.2280
alpha = 1.0000
```

The browser interaction:

- shows candidate content, a four-zone grayscale mask-field preview, and the final output as separate objects;
- selects one zone and changes only its mask value;
- includes course, clip-like, all-hidden, all-visible, and reversed-field presets;
- exposes effective source alpha, background opening, channel arithmetic, and final output;
- distinguishes a grayscale data preview from a gray tint;
- compares mask endpoint values `0` and `1` with Lesson 4.7's clearly outside and clearly inside clip traces;
- includes a seven-step manual derivation, prediction, coding challenge, four hidden-answer exercises, and completion record;
- caps the main diagram and stepper at `820 × 430` CSS pixels.

The Android explorer reuses the completed badge `Path` and draws four non-overlapping zones inside `clipPath`. Each zone draws the same solid candidate with `alpha = maskValue`. This direct path is exact for the controlled single solid fill. Arbitrary multi-draw or captured content normally requires grouping before a separate mask operation or a shader that reads a mask value per position.

Android files changed:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/MasksExplorer.kt
```

## Lesson-feedback review

The learner requested the next lesson without a remaining Lesson 4.7 issue. This confirms that the clipping lesson's inside/outside trace, preserved-destination explanation, temporary-scope evidence, compact diagrams, and explicit mask deferral were understandable. The message does not reveal a new reusable rule beyond the existing beginner-first, causal-operation, formula-validity, stepper-fit, and compact-geometry gates, so `AGENTS.md` is unchanged.

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
