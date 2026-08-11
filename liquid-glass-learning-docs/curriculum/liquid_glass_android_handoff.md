# Liquid Glass on Android — concise conversation handoff

**Updated:** 2026-08-10  
**Course version:** 5.10.0  

## Read order in a new conversation

1. `USER_PREFERENCES.md`
2. `AGENTS.md`
3. `CURRENT_STATE.md`
4. This handoff
5. `liquid_glass_android_curriculum.md` only when the full plan is needed
6. The current lesson HTML and current Android files

Treat `CURRENT_STATE.md` as authoritative when historical text elsewhere disagrees.

## Authoritative status

```yaml
course_lessons_total: 216
learner_confirmed_completed: 48
completed_through: "Lesson 5.9 — Overshoot and settle"
completed_chapters: [1, 2, 3, 4]
chapter_05_status: "in progress"
next_unresolved_checkpoint: "Lesson 5.10 — Press deformation"
generated_frontier: "Lesson 5.10"
next_planned_after_completion: "Lesson 5.11 — Reversal and interruption"
```

Lessons 5.7, 5.8, and 5.9 are learner-confirmed complete. Do not mark Lesson 5.10 complete until the learner explicitly confirms it.


## Consolidation note

- The old Lesson 5.8 and Lesson 5.9 were merged conceptually because their causal chain is one story.
- `lesson-05-08-spring-intuition.html` is now the primary lesson and includes overshoot and settle.
- `lesson-05-09-overshoot-and-settle.html` is a short archive/redirect page kept only for numbering stability and backward compatibility.
- Progress totals are unchanged.

## Current artifacts

```text
Learning:
course/chapters/chapter-05/lesson-motion-without-mystery.html
course/chapters/chapter-05/lesson-05-07-velocity.html
course/chapters/chapter-05/lesson-05-08-spring-intuition.html
course/chapters/chapter-05/lesson-05-09-overshoot-and-settle.html
course/chapters/chapter-05/lesson-05-10-press-deformation.html

Android:
app/src/main/java/com/example/liquidglasslab/chapter05/Chapter05Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter05/PressDeformationExplorer.kt
```


## Lesson 5.8 trace-matrix clarification

The consolidated spring lesson keeps a self-contained moment matrix. Every cell includes its value, compact substituted formula, and trend. The selected preset stiffness `k` and selected-tick displacement `d` are prominent. Target crossings are amber. Bounces are velocity reversals: peak columns are pink and trough columns are blue, with direct jump buttons.

## Current lesson contract — 5.10

### Scene objects

- measured control bounds `W × H`;
- local pointer-down position `p = (pₓ, pᵧ)`;
- normalized pivot fractions `(fₓ, fᵧ)`;
- Boolean pressed state `b`;
- current press amount `q` from 0 through 1;
- interpolated scales `sₓ`, `sᵧ` and corner radius `r`.

### Formula path

```text
fₓ = clamp(pₓ / W, 0, 1)
fᵧ = clamp(pᵧ / H, 0, 1)

q_target = if pressed then 1 else 0

sₓ = 1 + (1.04 - 1) × q
sᵧ = 1 + (0.90 - 1) × q
r  = 32 + (24 - 32) × q
```

Default inspectable snapshot:

```text
W = 320
H = 96
p = (64, 48)
(fₓ, fᵧ) = (0.20, 0.50)
b = true
q = 0.75
(sₓ, sᵧ) = (1.03, 0.925)
r = 26
```

### Android path

```text
onSizeChanged
→ detectTapGestures(onPress)
→ normalize local press position
→ pressed Boolean
→ animateFloatAsState with spring
→ graphicsLayer transform origin and scale
→ Canvas rounded-rectangle radius
```

Normal release and cancellation both clear the pressed state. The lesson does not read physical pressure.

## Layout policy clarified by learner feedback

- Side-by-side diagram and stepper is the default when both remain readable.
- Full-width diagram plus hidden/overlay stepper is reserved for dense visual explanations such as masks or layer stacks.
- Decide from the current lesson’s spatial needs. Do not copy the last lesson’s layout.
- At `1920×1080`, inspect the initial state and longest state before choosing the exception.

Lesson 5.10 uses two visible columns.

## Walkthrough-depth policy

- Fourteen is not a target.
- Use fewer states for simple causal chains and more for difficult ones.
- At ten or fewer states, direct state buttons are allowed.
- Above ten states, use Previous · Step X of N · Next instead of a wall of buttons.
- Hard formulas require a variable ledger, symbolic formula, numeric substitution, intermediates, result, and next consumer.
- Total-beginner comprehension is QA stage zero.

## Canonical positive exemplars

### Lesson 4.8 — Masks

Use actual intermediate images, stable target names, per-position traces, straight/premultiplied cases, color chips, provenance controls, and explicit safe/unsafe layer arrangements.

### Lesson 4.9 — Coverage and antialiasing

Use as many visible states as prerequisites require. Define the target result before calculation. Every unfamiliar helper concept receives its own visual explanation.

## Markdown compaction policy

This handoff is intentionally concise. Superseded revision narratives, repeated package listings, and repeated QA logs were removed in version 5.10.0. Permanent rules remain in `AGENTS.md` and `USER_PREFERENCES.md`; lesson-specific truth remains in the lesson HTML and Kotlin source.

## Response footer

End lesson-related responses with:

```text
Course progress: X of 216 lessons completed.
Estimated remaining conversation context: ~N tokens (approximate).
```


## 2026-08-10 visual-quality repair for consolidated 5.8/5.9

- The first consolidation flattened lesson design too much. The repaired consolidated Lesson 5.8 restores the advanced course visual language: hero/status area, prominent all-formulas panel, rich trace graphs, side-by-side stepper, and a paged moment-by-moment variable matrix.
- Memory files should remain compact but structured as rule indexes, not as deleted guidance. Preserve canonical exemplar summaries and current state; avoid patch-by-patch logs.

## Consolidated spring-lesson repair

The authoritative Lesson 5.8 now preserves the full course scaffold and advanced visual standard. All spring traces and selected markers use shared coordinate mappings. The full-width moment matrix keeps variables as rows and ticks as columns, with adaptive horizontal paging. The 24-state explanation stepper remains visible beside the traces at the normal desktop target. Lesson 5.9 remains a styled archive/redirect page for numbering stability.

- Consolidated Lesson 5.8 includes a conditional dependency table (`x → d → S`, `v → D`, `S + D → N → Δv → v_next → x_next`) and a live selected-tick chain. Each arrow states which other inputs are held fixed.
