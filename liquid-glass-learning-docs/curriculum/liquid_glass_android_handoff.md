# Liquid Glass on Android — concise conversation handoff

**Updated:** 2026-08-14  
**Course version:** 6.4.0

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
learner_confirmed_completed: 54
completed_through: "Lesson 6.3 — Graphics layers"
completed_chapters: [1, 2, 3, 4, 5]
chapter_06_status: "in progress; 3 of 11 complete"
next_unresolved_checkpoint: "Lesson 6.4 — RenderEffect on owned content"
generated_frontier: "Lesson 6.4"
next_planned_after_completion: "Lesson 6.5 — The backdrop problem"
```

## Lesson 6.4 contract

```text
one parent scene
├── BackdropSibling · sharp, separate owner
└── OwnedCard · selected effect owner
    ├── translucent fill
    ├── amber stripe
    ├── green dot
    ├── white detail lines
    └── label
```

Whole-owner path:

```text
OwnedCard draw commands
→ graphicsLayer with non-null RenderEffect
→ offscreen rasterization
→ sharp owner pixels
→ BlurEffect(radiusX, radiusY)
→ blurred owner output
→ composite over parent
```

The backdrop sibling never enters that effect input. Dot-only mode moves the effect boundary to the dot child; no-effect mode sets `renderEffect = null`.

## Android path

```text
blurRadiusDp
→ LocalDensity conversion
→ blurRadiusPx
→ BlurEffect
→ graphicsLayer.renderEffect on selected owner
```

The course minimum is API 33, so the Android 12+ RenderEffect requirement is satisfied. `TileMode.Decal` is fixed for this lesson; detailed edge-treatment comparison is deferred to Lesson 7.3.

## Preview placement and scrollability

- Complete previews: `Chapter06Screen.kt`.
- Direct previews: `RenderEffectOwnedContentExplorer.kt`.
- Both levels are vertically scrollable in a finite-height Android Studio Preview.

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
