# Liquid Glass on Android — concise conversation handoff

**Updated:** 2026-08-13  
**Course version:** 6.2.2  

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
learner_confirmed_completed: 53
completed_through: "Lesson 6.2 — Draw order and ownership"
completed_chapters: [1, 2, 3, 4, 5]
chapter_06_status: "in progress; 2 of 11 complete"
next_unresolved_checkpoint: "Lesson 6.3 — Graphics layers (not generated yet)"
generated_frontier: "Lesson 6.2"
next_planned: "Lesson 6.3 — Graphics layers"
```

Lessons 6.1 and 6.2 are learner-confirmed complete. Lesson 6.3 has not been generated.

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

## Preview placement and scrollability rule

- Complete chapter-screen previews live in `ChapterXXScreen.kt`.
- Direct custom-composable previews live in that custom composable's own Kotlin file.
- Light and dark variants are required for both.
- For every future lesson, both preview levels must be vertically scrollable through the complete lesson content inside Android Studio Preview.
- Do not retrofit previous lessons solely for this rule unless the learner asks.

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

## Latest completion

- Lesson 6.2 — Draw order and ownership is learner-confirmed complete.
- Course progress is 53 of 216.
- Lesson 6.3 — Graphics layers is the next unresolved checkpoint and has not been generated.
