# Liquid Glass Android course — implementation handoff

**Updated:** 2026-08-26  
**Course version:** 8.1.0

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
learner_confirmed_complete: 73
completed_through: "Lesson 7.11 — Compose the layers"
completed_chapters: [1, 2, 3, 4, 5, 6]
chapter_7_complete: "11 of 12"
chapter_8_complete: "0 of 12"
next_unresolved_checkpoint: "Lesson 7.12 — Compare backgrounds"
generated_frontier: "Lesson 8.1 — What a shader does"
next_planned_after_frontier: "Lesson 8.2 — Create a RuntimeShader"
```

Lessons 7.7 through 7.11 are learner-confirmed complete. Lessons 7.12 and 8.1 are generated ahead and are not learner-confirmed complete.

## Generate-ahead note

The checkpoint is still 7.12. Lesson 8.1 exists as files. Do not mark 7.12 or 8.1 complete until the learner confirms.

## Generated-ahead Lesson 8.1

```text
pixel function colorAt(column, row)
→ CPU loop calls it once per output pixel
→ store that color in the cell
```

A shader is that pixel function when the GPU runs it. This lesson does not create `RuntimeShader`, compile AGSL, or introduce `fragCoord`. Paint always returns orange. Stripe uses column remainder 2. Teaching grid is 8×4.

`ShaderIdeaExplorer.kt` is the CPU loop. `MainActivity` still defaults to Chapter 7.

## Generated-ahead Lesson 7.12

```text
destination class
→ frozen 7.11 recipe
→ sample interior RGB
→ Lesson 3.7 white-label contrast
→ pass if ≥ 4.5:1, else fail
```

Leftover is remaining destination structure in the fill, not a 4.5 pass and not the sharp rim. A local backing is a plate under the letters, not the 7.9 shadow.

## Future conversation

Paste `NEW_CHAT_PROMPT.md`, then in the same message name generate or questions. When the checkpoint or frontier moves, refresh section 12 of `NEW_CHAT_PROMPT.md` after this file.

## Completion rule

Do not mark Lesson 7.12 or Lesson 8.1 complete merely because they were generated or revised. Wait for explicit learner confirmation. Do not generate Lesson 8.2 unless the learner asks.

## Standing delivery preferences recorded 2026-08-20

- Do not generate `.zip` files. The learner works from the repositories.
- When a preview wrapper has both themes, put the dark `@Preview` annotation first, then light. Prospective only.

Course progress: 73 of 216 lessons completed.
