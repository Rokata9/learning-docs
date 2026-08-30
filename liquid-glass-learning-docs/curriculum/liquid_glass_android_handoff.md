# Liquid Glass Android course — implementation handoff

**Updated:** 2026-08-30  
**Course version:** 9.2.0

## Read order

1. `USER_PREFERENCES.md`
2. `AGENTS.md`
3. `CURRENT_STATE.md`
4. this handoff
5. `liquid_glass_android_curriculum.md` only for the named lesson and its immediate neighbors in the 216-lesson plan
6. current and immediately preceding lesson HTML
7. the current Android files

Treat `CURRENT_STATE.md` as authoritative when older prose disagrees.

## Authoritative status

```yaml
total_lessons: 216
learner_confirmed_complete: 86
completed_through: "Lesson 8.12 — Shader error workflow"
completed_chapters: [1, 2, 3, 4, 5, 6, 7, 8]
chapter_8_complete: "12 of 12"
chapter_9_complete: "0 of 14"
next_unresolved_checkpoint: "Lesson 9.1 — Distance between two points"
generated_frontier: "Lesson 9.2 — Circle signed distance field"
next_planned_after_frontier: "Lesson 9.3 — Turn distance into a soft mask"
```

Lessons 8.2 through 8.12 are learner-confirmed complete. Lessons 9.1 and 9.2 are generated ahead and are not complete. Generating 9.2 does not complete 9.1. Do not generate Lesson 9.3 unless the learner asks.

Chapter 7 frost stays fixed: blur `18.dp` / `18` CSS px, tint amount `0.25`, saturation `0.40`. Do not rebuild blur, tint, saturation, inset-stroke math, band blur, shadow room, or the 7.10 store formula.

## Completed Chapter 8 chain (8.2–8.12)

```text
8.2  AGSL string → RuntimeShader → ShaderBrush → drawRect
8.3  8-bit / 255 → teaching half4 0..1 → return is the store
     orange half4(0.88, 0.48, 0.18, 1.0); navy half4(0.10, 0.25, 0.40, 1.0)
8.4  fragCoord.x from left; if (fragCoord.x < 80.0) orange else navy; Canvas y-down
8.5  setFloatUniform("resolution"); splitX = resolution.x / 2.0
8.6  uv = fragCoord / resolution; last pixel is not exactly 1
8.7  scalar / vector / member; half 16-bit; float 32-bit
8.8  p = uv - 0.5 from the middle; × 2 puts edges near ±1; 1 = one half-width
8.9  uniform splitU, leftColor; mismatch leaves splitU at 0; no setColorUniform
8.10 trips = elapsedSeconds / 4.0; fract(uv.x - time) as red
8.11 clamp; mix = 5.4; smoothstep bends 0..1; store red 0.221875 at uv.x=0.45
8.12 RuntimeShader throws; shrink to smallest failing program; gl_FragCoord
```

8.8 subtract is required. × 2 is the convention that makes 1 mean one half-width. The smaller stripe previews Lesson 9.9. Chapter 9 circle, center-scale, and sample offset consume `p`.

## Generated-ahead Lesson 9.1

```text
right triangle first
→ countable 3-4-5, then 0.30 / 0.40 / 0.50
→ 0.09 + 0.16 = 0.25
→ sqrt(0.25) = 0.50
→ length(p) stored as gray
```

Teaching `p = (0.30, −0.40)` on a square rectangle. Walk-around 0.70 is not the long side. × 2 unused. Sign unused.

Nested equal-value outlines (added after a 9.1 question): smaller `length` circles are darker; a smaller walk-around diamond is the analog of a smaller-radius circle. The diamond is a square standing on a vertex, rotated 45 degrees so vertices point along the axes.

## Generated-ahead Lesson 9.2

```text
sd = length(p) − radius
→ minus inside, zero boundary, plus outside
→ if (sd < 0.0) orange else navy
```

Default radius 0.25. Teaching pixel sd = +0.25 (outside). Center sd = −0.25 (inside). `smoothstep` unused.

## Future conversation

Paste `NEW_CHAT_PROMPT.md`, then in the same message name generate or questions. When the checkpoint or frontier moves, refresh section 12 of that prompt after `CURRENT_STATE.md`.

Standing delivery: no ZIP archives; new `@Preview` stacks light then dark. Details in `USER_PREFERENCES.md`.

Course progress: 86 of 216 lessons completed.
