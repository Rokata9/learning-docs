# Liquid Glass Android course — current state

**Authoritative learner-confirmed progress:** 34 of 216 lessons completed.

## Completed

- Chapters 1, 2, and 3 are complete.
- Lesson 4.1 — Rectangles and circles is complete.
- Lesson 4.2 — Rounded rectangles is complete.
- Lesson 4.3 — Capsules is complete.
- Lesson 4.4 — Concentric corners is complete.
- Lesson 4.5 — Paths is complete.
- Lesson 4.6 — Cubic Bézier curves is complete by the learner's progression without a remaining question.
- The latest completed lesson is **4.6 — Cubic Bézier curves**.

## Not completed

- **Lesson 4.7 — Clipping** is generated and is the current learner checkpoint.
- Chapter 4 remains in progress. Lessons 4.7 through 4.11 are not complete.

## Course pointers

- **Next unresolved learner checkpoint:** Lesson 4.7.
- **Generated frontier:** Lesson 4.7.
- **Next planned lesson after explicit Lesson 4.7 completion:** Lesson 4.8 — Masks.

## Lesson 4.7 model

Lesson 4.7 reuses the completed closed badge `Path` from Lesson 4.5 as a temporary drawing restriction.

Browser teaching coordinates:

```text
A = (120, 90)
B = (520, 90)
C = (650, 215)
D = (520, 340)
E = (120, 340)
close()
```

The oversized candidate content contains four opaque horizontal bands. The amber band covers both trace positions before clipping is applied:

```text
inside point I = (300, 230)
outside point O = (720, 230)

candidate amber = straight sRGB RGBA(
  0.8510, 0.4667, 0.0235, 1.0000
)
```

The background already present at both positions is:

```text
straight sRGB RGBA(
  0.9451, 0.9608, 0.9765, 1.0000
)
```

With clipping enabled:

```text
I is inside the rectangular core of the badge
→ candidate draw allowed
→ final output at I = amber

O.x = 720
badge rightmost X = 650
720 > 650
→ O is outside
→ candidate draw rejected
→ final output at O = earlier background
```

A rejected clipped draw does not erase the destination and does not replace it with transparent black.

The browser interaction:

- toggles clipping on and off without changing the content commands;
- selects the inside or outside trace point;
- optionally shows the clip outline, candidate-content bounds, and post-clip evidence ring;
- moves only decorative content while the clip Path remains fixed;
- uses a six-step draw-order explanation;
- includes a scope prediction, coding challenge, four hidden-answer exercises, and completion record;
- caps both primary diagrams at `820 × 430` CSS pixels.

The Android explorer uses:

```text
Canvas = 320.dp × 240.dp
A = (32.dp, 40.dp)
B = (210.dp, 40.dp)
C = (288.dp, 120.dp)
D = (210.dp, 200.dp)
E = (32.dp, 200.dp)
inside point I = (120.dp, 145.dp)
outside point O = (304.dp, 145.dp)
```

Android draw order:

```text
draw opaque teaching background
→ build closed badge Path in Canvas-local px
→ clipPath(badgePath) {
      draw the unchanged oversized pattern
  }
→ temporary clip ends
→ draw badge outline
→ draw pink Q ring outside the badge
```

The pink Q ring remains visible because it is drawn after the `clipPath` block. Masks, gradual visibility, boundary antialiasing, nested clips, and subtractive clipping remain deferred.

## Lesson-feedback review

The learner requested the next lesson without a remaining Lesson 4.6 question, correction, or test problem. This confirms that Lesson 4.6's endpoint-versus-control-point distinction, exact `cubicTo` argument trace, repeated-midpoint construction, compact diagram, and external coordinate readouts were understandable. The message does not reveal a new reusable policy beyond the existing beginner-first, value-trace, stepper, and compact-geometry gates, so `AGENTS.md` is unchanged.

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
