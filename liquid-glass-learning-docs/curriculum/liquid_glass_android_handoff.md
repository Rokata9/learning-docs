# Liquid Glass on Android — concise conversation handoff

**Updated:** 2026-08-12  
**Course version:** 5.12.0  

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
learner_confirmed_completed: 50
completed_through: "Lesson 5.11 — Reversal and interruption"
completed_chapters: [1, 2, 3, 4]
chapter_05_status: "11 of 12 complete"
next_unresolved_checkpoint: "Lesson 5.12 — Slow-motion controller"
generated_frontier: "Lesson 5.12"
next_planned_after_completion: "Lesson 6.1 — Composition, layout, and drawing"
```

Lessons 5.10 and 5.11 are learner-confirmed complete. Do not mark Lesson 5.12 complete until explicit confirmation.

## Lesson 5.12 contract

### Variable path

```text
previous frame timestamp t_p
current frame timestamp t_c
→ real delta Δt_r = t_c − t_p

debug speed s
→ simulation delta Δt_s = Δt_r × s

direction dir
→ p_next = clamp(p + dir × Δt_s, 0, duration)

progress u = p ÷ duration
→ width, height, radius, and alpha
```

Paused playback preserves `p`. The manual step button adds one chosen `16 ms` simulation increment. That value is a debug quantum, not a claim about device refresh timing.

### Android path

```text
withFrameNanos
→ real frame delta
→ local speed scaling
→ signed play-time accumulator
→ TargetBasedAnimation.getValueFromNanos
→ capsule-to-panel geometry
```

## Preview placement rule

- Complete chapter-screen previews live in `Chapter05Screen.kt`.
- Direct custom-composable previews live in the custom composable's own file.
- Lesson 5.12 therefore keeps direct `SlowMotionController` light/dark previews in `SlowMotionController.kt`.

## Canonical explanation standards

- Lesson 4.8: visual intermediate images and explicit layer ownership.
- Lesson 4.9: prerequisite-complete step depth for difficult math.
- Consolidated Lesson 5.8: prominent all-formulas panel, moment matrix, dependency traces, and event markers.
- Walkthrough length follows causal complexity; fourteen is not a target.
- Total-beginner comprehension is QA stage zero.
- Use diagram plus visible stepper by default; use overlay controls only when the visual evidence needs the full width.

## Response footer

```text
Course progress: X of 216 lessons completed.
Estimated remaining conversation context: ~N tokens (approximate).
```
