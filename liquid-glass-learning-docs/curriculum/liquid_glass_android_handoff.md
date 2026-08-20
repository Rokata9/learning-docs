# Liquid Glass Android course — implementation handoff

**Updated:** 2026-08-20  
**Course version:** 7.12.0

## Read order

1. `USER_PREFERENCES.md`
2. `AGENTS.md`
3. `CURRENT_STATE.md`
4. this handoff
5. `liquid_glass_android_curriculum.md` only when the full plan is needed
6. current and immediately preceding lesson HTML
7. the current Android files

Treat `CURRENT_STATE.md` as authoritative when older prose disagrees.

## Authoritative status

```yaml
total_lessons: 216
learner_confirmed_complete: 68
completed_through: "Lesson 7.6 — Saturation and contrast"
completed_chapters: [1, 2, 3, 4, 5, 6]
chapter_7_complete: "6 of 12"
next_unresolved_checkpoint: "Lesson 7.7 — Static rim"
generated_frontier: "Lesson 7.12 — Compare backgrounds"
next_planned_after_frontier: "Lesson 8.1 — What a shader does"
```

Lesson 7.7 is generated and is not learner-confirmed complete. Lessons 7.8 through 7.12 are generated ahead and are not learner-confirmed complete.

## Generate-ahead note

The learner asked to generate the next two lessons after the 7.10 frontier without marking pending items done. No new reusable lesson-quality failure was evidenced. Do not treat 7.8–7.12 as the checkpoint.

## Generated-ahead Lesson 7.11

```text
slot(ingredient) = (clip membership, effect owner, sibling order)
wrong clip membership → pixels outside the path are discarded
wrong sibling order → the later sibling covers the earlier sibling
```

Does not rebuild blur, tint, saturation, inset-stroke math, band blur, shadow room, or the noise store formula. The Android grain overlay occupies the noise slot; the exact per-channel add remains Lesson 7.10.

`ComposeLayersExplorer.kt` compares production slots, shadow-inside-clip, and rim-before-fill.

## Generated-ahead Lesson 7.12

```text
destination class
→ frozen 7.11 recipe
→ sample interior RGB
→ Lesson 3.7 white-label contrast
→ pass if ≥ 4.5:1, else fail
```

Structure leftover is a second observation. Uniform classes match the blurred GPU color. Photo, text, and gradient numbers are teaching samples, not GPU readbacks. Chapter 7’s frost is still not a lens, a lamp, a shader, or a morph.

`CompareBackgroundsExplorer.kt` switches photo-like, text, gradient, dark, and light destinations.

## Current files to attach in a future conversation

```text
USER_PREFERENCES.md
AGENTS.md
CURRENT_STATE.md
curriculum/liquid_glass_android_handoff.md
curriculum/liquid_glass_android_curriculum.md
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
course/chapters/chapter-07/lesson-07-07-static-rim.html
course/chapters/chapter-07/lesson-07-08-inner-highlight.html
course/chapters/chapter-07/lesson-07-09-outer-shadow.html
course/chapters/chapter-07/lesson-07-10-fine-noise.html
course/chapters/chapter-07/lesson-07-11-compose-the-layers.html
course/chapters/chapter-07/lesson-07-12-compare-backgrounds.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/StaticRimExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/InnerHighlightExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/OuterShadowExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/FineNoiseExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/ComposeLayersExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/CompareBackgroundsExplorer.kt
```

## Completion rule

Do not mark Lesson 7.7–7.12 complete merely because they were generated. Wait for explicit learner confirmation. Do not generate Lesson 8.1 before 7.12 confirmation unless the learner asks to generate ahead.

## Standing delivery preferences recorded 2026-08-20

- Do not generate `.zip` files. The learner works from the repositories.
- When a preview wrapper has both themes, put the dark `@Preview` annotation first, then light. Prospective only.

Course progress: 68 of 216 lessons completed.
