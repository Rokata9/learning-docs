# Liquid Glass on Android — concise conversation handoff

**Updated:** 2026-08-11  
**Course version:** 5.11.0

## Read order

1. `USER_PREFERENCES.md`
2. `AGENTS.md`
3. `CURRENT_STATE.md`
4. This handoff
5. `liquid_glass_android_curriculum.md` only when the full plan is needed
6. Current lesson HTML and Android files

Treat `CURRENT_STATE.md` as authoritative.

## Status

```yaml
course_lessons_total: 216
learner_confirmed_completed: 48
completed_through: "Lesson 5.9 — Overshoot and settle"
completed_chapters: [1, 2, 3, 4]
chapter_05_status: "in progress"
next_unresolved_checkpoint: "Lesson 5.10 — Press deformation"
generated_frontier: "Lesson 5.11 — Reversal and interruption"
generated_ahead: "Lesson 5.11 — Reversal and interruption"
next_planned: "Lesson 5.12 — Slow-motion controller"
```

## Current artifacts

```text
Learning:
course/chapters/chapter-05/lesson-motion-without-mystery.html
course/chapters/chapter-05/lesson-05-10-press-deformation.html
course/chapters/chapter-05/lesson-05-11-reversal-and-interruption.html

Android:
app/src/main/java/com/example/liquidglasslab/chapter05/Chapter05Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter05/ReversalInterruptionExplorer.kt
```

## Lesson 5.10 value path

```text
runtime measured size W,H
+ local pointer-down P = (pₓ,pᵧ)
→ pivot fractions fₓ,fᵧ
→ TransformOrigin O

pressed Boolean b
→ q target 0 or 1
→ current spring amount q
→ scale X, scale Y, radius

pivot O + current scale
→ transformed drawing points and draw bounds
→ measured layout bounds remain unchanged
```

Course teaching values:

```text
W = 320
H = 96
P = (64, 48)
(fₓ, fᵧ) = (0.20, 0.50)
b = true
q_target = 1
current q = 0.75
sₓ = 1.03
sᵧ = 0.925
r = 26 dp
```

Tracked-point proofs:

```text
right-edge R = (320, 48)
R′ = (327.68, 48)

top-left A = (0, 0)
A′ = (-1.92, 3.60)
```

## Implementation boundary

- The browser is an inspectable formula model. It does not reproduce Compose's internal spring solver.
- The Android lesson uses `onSizeChanged`, `detectTapGestures(onPress)`, `animateFloatAsState(spring)`, `TransformOrigin`, `graphicsLayer`, and Canvas.
- The direct pointer-input implementation is appropriate for this lesson. A reusable design-system version should consume `PressInteraction` inside a custom `Indication` node.
- Normal release and cancellation both clear the pressed state.

## Layout and walkthrough

- Use two visible columns at `1920×1080`: diagram left, stepper right.
- The walkthrough has 20 causal states because the concept chain requires them. Use Previous / Step X of N / Next, not twenty buttons.
- Base geometry must be painted before guide lines, labels, markers, and proof overlays.

## Canonical exemplars

- Lesson 4.8: layer/mask intermediate-state evidence.
- Lesson 4.9: prerequisite-first mathematical derivation.
- Consolidated Lesson 5.8: formulas panel, dependencies, and sampled trace matrix.

## Response footer

```text
Course progress: X of 216 lessons completed.
Estimated remaining conversation context: ~N tokens (approximate).
```

## Generated-ahead Lesson 5.11

- Does not depend on unresolved Lesson 5.10.
- Teaches target reversal, interruption, value continuity, velocity continuity, latest-request-wins, and coroutine cancellation.
- Browser teaching values: `k=0.10`, `c=0.20`, `m=1.00`, first reversal at Tick 4.
- Android uses `Animatable.animateTo` without overriding normal reversal velocity.
- Do not mark 5.10 or 5.11 complete until explicit learner confirmation.
