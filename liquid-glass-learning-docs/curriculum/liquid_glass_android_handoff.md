# Liquid Glass on Android — concise conversation handoff

**Updated:** 2026-08-14  
**Course version:** 6.5.2

## Read order

1. `USER_PREFERENCES.md`
2. `AGENTS.md`
3. `CURRENT_STATE.md`
4. This handoff
5. `liquid_glass_android_curriculum.md` when the full plan is needed
6. Current lesson HTML and Android files

Treat `CURRENT_STATE.md` as authoritative.

## Authoritative status

```yaml
course_lessons_total: 216
learner_confirmed_completed: 56
completed_through: "Lesson 6.5 — The backdrop problem"
completed_chapters: [1, 2, 3, 4, 5]
chapter_06_status: "in progress; 5 of 11 complete"
next_unresolved_checkpoint: "Lesson 6.6 — Record the background"
generated_frontier: "Lesson 6.5"
next_planned: "Lesson 6.6 — Record the background"
lesson_06_06_generated: false
```

## Completed Lesson 6.5 contract

### Current scene

```text
Parent scene
├── BackdropSibling · sharp bands, line, and circle
└── GlassPanel · tint, stripe, dot, details, and label
```

### Current effect path

```text
GlassPanel draw commands
→ graphicsLayer with panel-owned RenderEffect
→ offscreen panel pixels
→ blurred panel output
→ source-over sharp parent
```

### Missing backdrop path

```text
blurredBackdrop(p)
needs neighboring colors from a readable backdrop image
```

Visual overlap is not that image input. Lesson 6.5 contrasts:

```text
same-position compositing
versus
neighborhood sampling
```

The controlled browser blur uses three one-channel backdrop samples only as a teaching bridge. The Android reference crop reuses the teaching-pattern function and is explicitly not a capture of the main sibling.

## Android path

```text
BackdropPattern()
→ parent scene

OwnedGlassPanel.graphicsLayer(RenderEffect)
→ panel-owned effect only

reference crop
→ separately drawn teaching evidence
→ not sibling capture
```

## Preview placement and scrollability

- Complete previews: `Chapter06Screen.kt`.
- Direct previews: `BackdropProblemExplorer.kt`.
- Both levels are vertically scrollable in finite-height Android Studio Preview.

## Canonical explanation standards

- Lesson 4.8: visual intermediate images and explicit layer ownership.
- Lesson 4.9: prerequisite-complete step depth for difficult math.
- Consolidated Lesson 5.8: formulas panel, moment matrix, dependency traces, and event markers.
- Walkthrough length follows causal complexity; fourteen is not a target.
- Total-beginner comprehension is QA stage zero.
- Use diagram plus visible stepper by default; use overlay controls only when the visual evidence needs full width.


## Fresh-account continuation

`NEW_CHAT_PROMPT.md` is the canonical paste-ready continuation prompt. It contains:

- the exact 56-of-216 course state;
- the minimum and recommended upload sets;
- separate behavior for complete, partial, or absent attachments;
- a prohibition against pretending prior sandbox files or chat context are available;
- the current lesson-quality, preview, packaging, and code-formatting rules.

If a future account has no local files attached, conceptual discussion may continue from the prompt, but artifact editing or generation must wait until the relevant source files are uploaded.

## Response footer

```text
Course progress: X of 216 lessons completed.
Estimated remaining conversation context: ~N tokens (approximate).
```
