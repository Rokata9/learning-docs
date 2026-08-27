# Liquid Glass Android course — implementation handoff

**Updated:** 2026-08-27  
**Course version:** 8.9.0

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
learner_confirmed_complete: 78
completed_through: "Lesson 8.4 — fragCoord"
completed_chapters: [1, 2, 3, 4, 5, 6, 7]
chapter_7_complete: "12 of 12"
chapter_8_complete: "4 of 12"
next_unresolved_checkpoint: "Lesson 8.5 — Resolution"
generated_frontier: "Lesson 8.9 — Uniforms"
next_planned_after_frontier: "Lesson 8.10 — Time uniform"
```

Lessons 8.2, 8.3, and 8.4 are learner-confirmed complete. Lessons 8.5 through 8.9 are generated ahead and are not learner-confirmed complete.

## Generate-ahead note

The checkpoint is 8.5. Lessons 8.5 through 8.9 exist as files. Do not mark 8.5 through 8.9 complete until the learner confirms.

## Completed Lesson 8.2

```text
AGSL string
→ RuntimeShader(string) compiles it
→ ShaderBrush(shader)
→ drawRect(brush)
```

The GPU calls `main` once per output pixel of that rectangle. There is no Kotlin cell loop. `fragCoord` is unread in 8.2 and 8.3.

## Completed Lesson 8.3

```text
8-bit RGB / 255
→ teaching half4
→ return is the store
→ unused Kotlin Color is a separate box
```

Teaching orange `half4(0.88, 0.48, 0.18, 1.0)`. Teaching navy `half4(0.10, 0.25, 0.40, 1.0)`. Rewriting the string rebuilds `RuntimeShader`. Uniforms are not used.

## Completed Lesson 8.4

```text
fragCoord float2
→ x pixels from left of the draw rectangle
→ if (x < 80.0) orange else navy
```

Origin is the top-left of the `drawRect` rectangle. y increases downward with Canvas, not GLSL’s lower-left origin. 80 is a pixel count, not half. y is unread. Resolution is not passed.

## Generated-ahead Lesson 8.5

```text
DrawScope.size
→ setFloatUniform("resolution", width, height)
→ splitX = resolution.x / 2.0
→ if (fragCoord.x < splitX) orange else navy
```

`fragCoord` is this pixel. Resolution is the whole rectangle’s size. Kotlin writes the slot once per draw. The GPU then calls `main` many times with the same pair. UV (`fragCoord / resolution`) is Lesson 8.6. Other uniforms are Lesson 8.9.

## Generated-ahead Lesson 8.6

```text
uv = fragCoord / resolution
→ u = x / width
→ v = y / height
→ red ramp stores u; four regions read v
```

Matching members. `uv.x < 0.5` matches 8.5’s half split and is not the proof. Last pixel is not exactly 1. Not a texture sample.

## Generated-ahead Lesson 8.7

```text
scalar = one number
→ vector = packed group (float2, half4)
→ member = named slot
→ half 16-bit, float 32-bit
```

y-split paints orange on the top half. No GPU timing claim.

## Generated-ahead Lesson 8.8

```text
origin of a pair = where both numbers are 0
→ subtract moves the origin
→ multiply by one number scales distances from it
```

After `uv - 0.5`, negative y is the top. The band `−0.25 < p.x < 0.25` shrinks after × 2. Not a circle.

## Generated-ahead Lesson 8.9

```text
uniform float splitU
→ uniform half4 leftColor
→ setFloatUniform writes them
→ mismatch leaves splitU at 0
```

Resolution is still written. RuntimeShader is not rebuilt. Time is Lesson 8.10. `setColorUniform` is unused.

## Future conversation

Paste `NEW_CHAT_PROMPT.md`, then in the same message name generate or questions. When the checkpoint or frontier moves, refresh section 12 of `NEW_CHAT_PROMPT.md` after this file.

## Completion rule

Do not mark Lessons 8.5 through 8.9 complete merely because they were generated or revised. Wait for explicit learner confirmation. Do not generate Lesson 8.10 unless the learner asks.

## Standing delivery preferences recorded 2026-08-20

- Do not generate `.zip` files. The learner works from the repositories.
- When a preview wrapper has both themes, put the dark `@Preview` annotation first, then light. Prospective only.

Course progress: 78 of 216 lessons completed.
