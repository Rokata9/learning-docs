# Liquid Glass Android course — implementation handoff

**Updated:** 2026-08-28  
**Course version:** 8.12.0

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
learner_confirmed_complete: 84
completed_through: "Lesson 8.10 — Time uniform"
completed_chapters: [1, 2, 3, 4, 5, 6, 7]
chapter_7_complete: "12 of 12"
chapter_8_complete: "10 of 12"
next_unresolved_checkpoint: "Lesson 8.11 — clamp, mix, and smoothstep"
generated_frontier: "Lesson 8.12 — Shader error workflow"
next_planned_after_frontier: "Lesson 9.1 — Distance between two points"
```

Lessons 8.2 through 8.10 are learner-confirmed complete. Lessons 8.11 and 8.12 are generated ahead and are not complete. Generating 8.12 does not complete 8.11. Do not generate Lesson 9.1 unless the learner asks.

Chapter 7 frost stays fixed: blur `18.dp` / `18` CSS px, tint amount `0.25`, saturation `0.40`. Do not rebuild blur, tint, saturation, inset-stroke math, band blur, shadow room, or the 7.10 store formula.

## Completed Chapter 8 chain (8.2–8.10)

```text
8.2  AGSL string → RuntimeShader → ShaderBrush → drawRect
8.3  8-bit / 255 → teaching half4 0..1 → return is the store
     orange half4(0.88, 0.48, 0.18, 1.0); navy half4(0.10, 0.25, 0.40, 1.0)
8.4  fragCoord.x from left; if (x < 80.0) orange else navy; Canvas y-down
8.5  setFloatUniform("resolution"); splitX = resolution.x / 2.0
8.6  uv = fragCoord / resolution; last pixel is not exactly 1
8.7  scalar / vector / member; half 16-bit; float 32-bit
8.8  p = uv - 0.5 from the middle; × 2 puts edges near ±1; 1 = one half-width
8.9  uniform splitU, leftColor; mismatch leaves splitU at 0; no setColorUniform
8.10 trips = elapsedSeconds / 4.0; fract(uv.x - time) as red
```

8.8 subtract is required. × 2 is the convention that makes 1 mean one half-width. The smaller stripe previews Lesson 9.9. Chapter 9 circle, center-scale, and sample offset consume `p`.

## Generated-ahead Lesson 8.11

```text
clamp(x, lo, hi)
→ mix(a, b, t) = a + (b − a) × t
→ linearFraction = clamp((x − edge0) / (edge1 − edge0), 0, 1)
→ curvedFraction = t × t × (3 − 2t)
→ mix(navy, orange, smoothstep(edge0, edge1, uv.x))
```

Teaching pixel x=180, uv.x=0.45, edges 0.40 / 0.60. linearFraction 0.25. curvedFraction 0.15625. stored red 0.221875. mix is Lesson 5.4 under an AGSL name. t is a blend fraction, not 7.10 amount. Sine unused. Distance fields are Lesson 9.3.

## Generated-ahead Lesson 8.12

```text
RuntimeShader(string) compiles
→ IllegalArgumentException carries error: line: message
→ reduce to smallest failing string
→ fix that line
→ restore the rest
```

Teaching failure is `gl_FragCoord` in an otherwise legal 8.11 program. HTML does not compile AGSL. A Lesson 8.9 name mismatch is not a compile error. Preview starts on the working string.

## Future conversation

Paste `NEW_CHAT_PROMPT.md`, then in the same message name generate or questions. When the checkpoint or frontier moves, refresh section 12 of that prompt after `CURRENT_STATE.md`.

Standing delivery: no ZIP archives; new `@Preview` stacks light then dark. Details in `USER_PREFERENCES.md`.

Course progress: 84 of 216 lessons completed.
