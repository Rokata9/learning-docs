# Liquid Glass on Android — concise conversation handoff

**Updated:** 2026-08-13  
**Course version:** 6.2.1  

## Read order

1. `USER_PREFERENCES.md`
2. `AGENTS.md`
3. `CURRENT_STATE.md`
4. This handoff
5. `liquid_glass_android_curriculum.md` only when the full plan is needed
6. Current lesson HTML and Android files

Treat `CURRENT_STATE.md` as authoritative.

## Authoritative status

```yaml
course_lessons_total: 216
learner_confirmed_completed: 52
completed_through: "Lesson 6.1 — Composition, layout, and drawing"
completed_chapters: [1, 2, 3, 4, 5]
chapter_06_status: "in progress; 1 of 11 complete"
next_unresolved_checkpoint: "Lesson 6.2 — Draw order and ownership"
generated_frontier: "Lesson 6.2"
next_planned_after_completion: "Lesson 6.3 — Graphics layers"
```

Lesson 6.1 is learner-confirmed complete. Do not mark Lesson 6.2 complete until explicit confirmation.

## Lesson 6.2 contract

```text
one Box parent
→ three sibling owners
→ source child order
→ optional zIndex override
→ effective sibling draw order
→ owner-local draw commands
→ final frame
```

Ownership ledger:

```text
BackdropScene
→ base, stripes, circles, sharp line

GlassPanel
→ translucent fill and rim

ForegroundLabel
→ label capsule and text
```

The selected-position trace filters effective order by geometry coverage. A sibling can exist without contributing at the inspected coordinate.

## Android path

```text
Box
→ order preset emits three children
→ optional label zIndex
→ BackdropOwner Canvas
→ GlassPanel drawBehind / drawWithContent
→ ForegroundLabel Surface
```

Sibling order is separate from one node's internal order:

```text
drawBehind
→ drawContent()
→ overlay draw
```

## Preview placement rule

- Complete chapter-screen previews live in `Chapter06Screen.kt`.
- Direct custom-composable previews live in `DrawOrderOwnershipExplorer.kt`.
- Light and dark variants are required for both.

## Canonical explanation standards

- Lesson 4.8: visual intermediate images and explicit layer ownership.
- Lesson 4.9: prerequisite-complete step depth for difficult math.
- Consolidated Lesson 5.8: formulas panel, moment matrix, dependency traces, and event markers.
- Walkthrough length follows causal complexity; fourteen is not a target.
- Total-beginner comprehension is QA stage zero.
- Use diagram plus visible stepper by default; use overlay controls only when the visual evidence needs full width.

## Response footer

```text
Course progress: X of 216 lessons completed.
Estimated remaining conversation context: ~N tokens (approximate).
```


## Lesson 6.2 clarification

- Replace `no automatic sample path` with: no recorded backdrop image or texture is automatically passed to `GlassPanel` merely because it draws later.
- Replace `explicit capture path = deferred` with the concrete future route: record backdrop → map/crop panel region → replay or read recorded pixels.
- Preset buttons and the walkthrough diagram share one canonical order state. Never restore a hidden per-step render override.
