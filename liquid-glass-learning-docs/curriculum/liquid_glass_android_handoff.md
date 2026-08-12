# Liquid Glass on Android — concise conversation handoff

**Updated:** 2026-08-12  
**Course version:** 6.1.0  

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
learner_confirmed_completed: 51
completed_through: "Lesson 5.12 — Slow-motion controller"
completed_chapters: [1, 2, 3, 4, 5]
chapter_06_status: "in progress; 0 of 11 complete"
next_unresolved_checkpoint: "Lesson 6.1 — Composition, layout, and drawing"
generated_frontier: "Lesson 6.1"
next_planned_after_completion: "Lesson 6.2 — Draw order and ownership"
```

Lesson 5.12 is learner-confirmed complete. Do not mark Lesson 6.1 complete until explicit confirmation.

## Lesson 6.1 contract

```text
requested state
→ composition
→ UI tree
→ layout
→ measured sizes and placed positions
→ drawing
→ visible pixels
```

Controlled inputs:

```text
showBadge
→ read in composition
→ badge node exists or does not exist

contentInset
→ read inside layout
→ existing nodes receive placed coordinates

cardColor
→ read inside drawing
→ fixed geometry receives another fill color
```

The browser uses fixed teaching units. Android measures real text and layout bounds at runtime.

## Android path

```text
if (showBadgeState.value)
→ composition decides child existence

Layout measure/placement lambda
→ reads inset state
→ measures and places current children

drawBehind / DrawScope
→ reads fill-color state
→ paints the rounded card
```

## Preview placement rule

- Complete chapter-screen previews live in `Chapter06Screen.kt`.
- Direct custom-composable previews live in `CompositionLayoutDrawingExplorer.kt`.
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
