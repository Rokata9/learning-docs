# Liquid Glass Android course — implementation handoff

**Updated:** 2026-09-10  
**Course version:** 9.10.0

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
learner_confirmed_complete: 94
completed_through: "Lesson 9.8 — Translate sample coordinates"
completed_chapters: [1, 2, 3, 4, 5, 6, 7, 8]
chapter_8_complete: "12 of 12"
chapter_9_complete: "8 of 14"
next_unresolved_checkpoint: "Lesson 9.9 — Scale around the center"
generated_frontier: "Lesson 9.10 — Build a displacement field"
next_planned_after_frontier: "Lesson 9.11 — Refraction as displaced sampling"
```

Lessons 8.2 through 9.8 are learner-confirmed complete. Lesson 9.9 is generated and is not complete. Lesson 9.10 is generated ahead and is not complete.

Chapter 7 frost stays fixed: blur `18.dp` / `18` CSS px, tint amount `0.25`, saturation `0.40`. Do not rebuild blur, tint, saturation, inset-stroke math, band blur, shadow room, or the 7.10 store formula.

Do not edit CircleSdfExplorer, SoftMaskExplorer, or RoundedRectSdfExplorer math. Those Android files were confirmed excellent.

## Load-bearing section budget (2026-08-31)

Learner confirmed 9.2 and 9.3 were progressing well, then named reusable friction in later sections. Recorded in `AGENTS.md`. Apply to every later lesson:

- First sections carry the lesson. Merge known-info visualization into the intro.
- The essence section (formula + one traced value, plus lab when it is the practice) is load-bearing.
- Skip a multi-pixel comparison table that restates the lab.
- Keep a stepper only when the new operation is a sequence the lab cannot show in order (piecewise region, nearest-on-segment, multi-stage grow, two fields then min/max). If the essence section plus lab already traces the value, omit the stepper. When kept, every step must change the current operation.
- Replace **Not claimed** with **What’s next**.
- Cut negate-references, meta-lab sentences, 8.9 slot-write recaps, and vague “same arithmetic as the HTML table” lines.
- Beginner traces stay. If a cut would make the causal chain uncertain, keep the sentence.

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

## Completed Lesson 9.1

```text
right triangle first
→ countable 3-4-5, then 0.30 / 0.40 / 0.50
→ 0.09 + 0.16 = 0.25
→ sqrt(0.25) = 0.50
→ length(p) stored as gray
```

Teaching `p = (0.30, −0.40)` on a square rectangle. Walk-around 0.70 is not the long side. × 2 unused. Sign unused.

## Completed Lesson 9.2

```text
sd = length(p) − radius
→ minus inside, zero boundary, plus outside
→ if (sd < 0.0) orange else navy
```

Default radius 0.25. Teaching pixel sd = +0.25 (outside). Center sd = −0.25 (inside). `smoothstep` unused.

## Completed Lesson 9.3

```text
mask = 1.0 − smoothstep(−band, band, sd)
→ mix(navy, orange, mask)
```

Default band 0.10. Teaching band pixel `p = (0.18, −0.24)`, `sd = +0.05`. linearFraction 0.75. curvedFraction 0.84375. mask 0.15625. stored red 0.221875. The 1 minus turns the growing-as-you-leave-the-shape smoothstep into an inside-amount.

## Completed Lesson 9.4

```text
innerHalf = outerHalf − cornerRadius
→ q = abs(p) − innerHalf
→ piecewise sdBox, then sd = sdBox − cornerRadius
→ if (sd < 0.0) orange else navy
```

Default outer half `(0.30, 0.20)` means full size `0.60 × 0.40`. Corner radius 0.10. Growing the inner sharp box by the corner radius produces Lesson 4.2’s rounded rectangle. Teaching pixel `p = (0.26, −0.18)` is the top-right inner corner plus a 3-4-5 unit direction scaled by 0.10; `sd = 0`. Visual center `C` is not a construction-circle center.

## Exercise-answer compared silhouettes (2026-09-02)

Learner could not parse two 9.5 hidden answers: the circle-vs-capsule diagnostic used a calculator length 0.2236 with no picture, and the half-width-equals-radius item named “Lesson 4.3’s circle limit” without showing the inner segment collapsing to a point. Recorded in `AGENTS.md`. Hidden answers still need labelled pictures and exact-root lengths. The diagnostic pixel is now `p = (0.15, −0.20)` so `0.15² + 0.20² = 0.25²`.

## Completed Lesson 9.5

```text
nearestX = clamp(p.x, −innerHalfW, innerHalfW)
→ sd = length(p − (nearestX, 0)) − radius
→ if (sd < 0.0) orange else navy
```

Default outer half `(0.40, 0.20)`, radius 0.20 equal to half-height. Teaching cap-boundary `p = (0.32, −0.16)` has `sd = 0`. Width slider; radius stays derived from height. Combining two complete fields with min/max is Lesson 9.6.

## Completed Lesson 9.6

```text
sdA = length(p) − radiusA
→ pB = p − B
→ sdB = length(pB) − radiusB
→ union sd = min(sdA, sdB)
→ intersection sd = max(sdA, sdB)
→ B minus A sd = max(sdB, −sdA)
→ if (sd < 0.0) orange else navy
```

Two Lesson 9.2 circles. Teaching left-only `p = (−0.10, 0)` has `sdA = length(p) − radiusA = 0.10 − 0.25 = −0.15` and `sdB = length(pB) − radiusB = 0.30 − 0.25 = +0.05`. `pB = p − B` is the same 8.8 subtract, now from B’s center. Soft mask unused.

Named-formula-before-substitution (2026-09-08, recorded in `AGENTS.md`): every teaching calculation keeps the named operations visible. Write `sdA = length(p) − radiusA = 0.10 − 0.25 = −0.15`, never `sdA = 0.10 − 0.25` or `sdA = −0.15` as the formula. Live readouts recompute that chain.

## Completed Lesson 9.7

```text
uniform shader background
→ sampled = background.eval(fragCoord)
→ if (fragCoord.x < resolution.x / 2.0) sampled else orange
```

The sampled color is the half4 that `eval` returns: a copy of the input shader’s color at the read coordinate. Stripe input: `fract(uv.x * 5.0)`, `cell < 0.5` orange else navy. Teaching `uv.x = 0.15` is navy. Kotlin `setInputShader("background", stripeShader)`. Offset is Lesson 9.8. Geometry mask unused.

## Completed Lesson 9.8

```text
readCoord = fragCoord − float2(offsetU * resolution.x, 0)
→ sampled = background.eval(readCoord)
→ return sampled
```

Default `offsetU = 0.10` is one stripe width as a fraction of the rectangle width. Teaching write `uv.x = 0.15` reads `0.05` and stores orange. The picture shifts opposite the read offset. `eval` does not wrap a negative read x. The stripe input’s `fract` still returns a color. Scale around the center is Lesson 9.9. A displacement field is Lesson 9.10. Edge safety is Lesson 9.12.

## Unresolved checkpoint — Lesson 9.9

```text
p = uv − 0.5
→ readUv = p / scale + 0.5
→ sampled = background.eval(readUv × resolution)
```

No inner-half `if`. Inner 2 × 2 is the image of the square under a halved walk. Right outer navy always stores inner orange. Left outer orange always stores inner navy. Half of `C → (1,1)` is `(0.75, 0.75)`, still orange on that diagonal. Outer input would be painted off-picture. Teaching write 0.30 from `C` asks 0.15 from `C`, stores orange. Not complete.

## Generated ahead — Lesson 9.10

```text
dir = p / length(p)
→ disp = dir × dispLen
→ readUv = uv − disp
→ sampled = background.eval(readUv × resolution)
```

A vertical side tilts because its two ends sit on two rays. `H = (0.75, 0.50)` walks to `(0.85, 0.50)`; `Q = (0.75, 0.25)` splits the same walk on the 45° ray, so they no longer share an x. Four corners → trapezoid leaning toward `C`. Shader inward ask is the inverse. `dir = p / length(p)` so H and Q walk the same length. Default `dispLen = 0.10`. Skip the divide at `C`. Refraction falloff is Lesson 9.11. Not complete.

## Future conversation

Paste `NEW_CHAT_PROMPT.md`, then in the same message name generate or questions. When the checkpoint or frontier moves, refresh section 12 of that prompt after `CURRENT_STATE.md`.

Standing delivery: no ZIP archives; new `@Preview` stacks light then dark. Details in `USER_PREFERENCES.md`.

Course progress: 94 of 216 lessons completed.
