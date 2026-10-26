# Liquid Glass iOS course — implementation handoff

**Updated:** 2026-09-30
**Course version:** 9.14.0

## Read order

1. `USER_PREFERENCES.md`
2. `AGENTS.md`
3. `CURRENT_STATE.md`
4. this handoff
5. `liquid_glass_ios_curriculum.md` only for the named lesson and its immediate neighbors in the 216-lesson plan
6. current and immediately preceding lesson HTML
7. the current iOS files under `/Users/rosen/Code/LiquidGlassLab-iOS`

Treat `CURRENT_STATE.md` as authoritative when older prose disagrees.

## Authoritative status

```yaml
total_lessons: 216
learner_confirmed_complete: 100
completed_chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9]
chapter_10_complete: "0 of 13"
next_unresolved_checkpoint: "Lesson 10.1 — Height-map idea"
generated_frontier: "Lesson 10.1 — Height-map idea"
next_planned_after_frontier: "Lesson 10.2 — Slope"
```

Chapters 1–9 are learner-confirmed complete. Lesson 10.1 is generated and is not complete. Do not mark it complete unless the learner confirms it.

Chapter 7 frost stays fixed: blur `18` pt / `18` CSS px, tint amount `0.25`, saturation `0.40`. Do not rebuild blur, tint, saturation, inset-stroke math, band blur, shadow room, or the 7.10 store formula.

Do not edit CircleSdfExplorer, SoftMaskExplorer, or RoundedRectSdfExplorer math. Those explorer math contracts were confirmed excellent.

## Load-bearing section budget (2026-08-31)

Learner confirmed 9.2 and 9.3 were progressing well, then named reusable friction in later sections. Recorded in `AGENTS.md`. Apply to every later lesson:

- First sections carry the lesson. Merge known-info visualization into the intro.
- The essence section (formula + one traced value, plus lab when it is the practice) is load-bearing.
- Skip a multi-pixel comparison table that restates the lab.
- Keep a stepper only when the new operation is a sequence the lab cannot show in order (piecewise region, nearest-on-segment, multi-stage grow, two fields then min/max). If the essence section plus lab already traces the value, omit the stepper. When kept, every step must change the current operation.
- Replace **Not claimed** with **What’s next**.
- Cut negate-references, meta-lab sentences, 8.9 slot-write recaps, and vague “same arithmetic as the HTML table” lines.
- Beginner traces stay. If a cut would make the causal chain uncertain, keep the sentence.

## Chapter 8 teaching chain (8.2–8.12)

```text
8.2  .metal file → ShaderLibrary → ShaderRect (colorEffect)
8.3  8-bit / 255 → teaching half4 0..1 → return is the store
     orange half4(0.88, 0.48, 0.18, 1.0); navy half4(0.10, 0.25, 0.40, 1.0)
8.4  position.x from left; if (x < 80.0 pixels) orange else navy; y-down; convert points with displayScale
8.5  pass resolution as a Shader argument; splitX = resolution.x / 2.0
8.6  uv = position / resolution; last pixel is not exactly 1
8.7  scalar / vector / member; half 16-bit; float 32-bit
8.8  p = uv - 0.5 from the middle; × 2 puts edges near ±1; 1 = one half-width
8.9  splitU, leftColor as Shader arguments; a missing argument still compiles and SwiftUI refuses the draw; pass 0 to show a zero slot
8.10 trips = elapsedSeconds / 4.0; fract(uv.x - time) as red
8.11 clamp; mix = 5.4; smoothstep bends 0..1; store red 0.221875 at uv.x=0.45
8.12 Xcode Metal compile error; shrink to smallest failing program; gl_FragCoord
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

## Lesson 9.7 teaching contract

```text
uniform shader background
→ sampled = background.eval(fragCoord)
→ if (fragCoord.x < resolution.x / 2.0) sampled else orange
```

The sampled color is the half4 that `eval` returns: a copy of the input shader’s color at the read coordinate. Stripe input: `fract(uv.x * 5.0)`, `cell < 0.5` orange else navy. Teaching `uv.x = 0.15` is navy. Swift `setInputShader("background", stripeShader)`. Offset is Lesson 9.8. Geometry mask unused.

## Lesson 9.8 teaching contract

```text
readCoord = fragCoord − float2(offsetU * resolution.x, 0)
→ sampled = background.eval(readCoord)
→ return sampled
```

Default `offsetU = 0.10` is one stripe width as a fraction of the rectangle width. Teaching write `uv.x = 0.15` reads `0.05` and stores orange. The picture shifts opposite the read offset. `eval` does not wrap a negative read x. The stripe input’s `fract` still returns a color. Scale around the center is Lesson 9.9. A displacement field is Lesson 9.10. Edge safety is Lesson 9.12.

## Lesson 9.9 teaching contract

```text
p = uv − 0.5
→ readUv = p / scale + 0.5
→ sampled = background.eval(readUv × resolution)
```

No inner-half `if`. Store is four big squares: inner 2 × 2 copied onto many writes (repeat, not average). Top-left orange, top-right navy, bottom-left navy, bottom-right orange. Half of `C → (1,1)` is `(0.75, 0.75)`, still orange on that diagonal. Outer input would be painted off-picture.

## Completed Lesson 9.10

```text
dir = p / length(p)
→ disp = dir × dispLen
→ readUv = uv − disp
→ sampled = checkerBackground(readUv × resolution, resolution)
```

W `(0.65, 0.20)` reads about `(0.60528, 0.28944)` at `dispLen = 0.10` and stores navy. `dispLen` is an absolute UV read distance, not a percentage enlargement. The guard skips `d <= 0.0001`; the Metal source gives no reason for that exact cutoff. iOS: `DisplacementFieldExplorer.swift` + `DisplacementField.metal`. Learner-confirmed 2026-09-30.

## Completed Lesson 9.11

```text
sd = length(p) − radius
→ falloff = 1.0 − smoothstep(−band, band, sd)
→ dir = p / d
→ disp = dir × dispLen × falloff
→ readUv = uv − disp
→ sampled = checkerBackground(readUv × resolution, resolution)
```

Teaching W = `(0.65, 0.30)`: `p = (0.15, −0.20)`, `d = 0.25`, `sd = 0`, falloff = 0.50, `disp = (0.03, −0.04)`, `readUv = (0.62, 0.34)`. Falloff is a length scale, not a color mix. The line x = 0.90 stays straight. iOS: `RefractionSamplingExplorer.swift` + `RefractionSampling.metal`. Learner-confirmed 2026-09-30. The lesson and its Q&A page were rolled back to commit `d6ca607` at the learner's request (the later proof rounds went beyond the lesson's one concept).

## Completed — Lesson 9.12 (learner-confirmed 2026-10-12)

```text
p = uv − center
→ the Lesson 9.11 chain
→ readUv = uv − disp
→ readUv = clamp(readUv, 0.0, 1.0)      (new)
→ sampled = checkerWithEdge(readUv)     (transparent outside 0 … 1)
```

Glass center C = `(0.50, 1.10)`. W = `(0.59, 0.98)` reads R = `(0.53, 1.06)` (outside), clamps to R′ = `(0.53, 1.00)`, stores navy. Pad (Lesson 7.3) is one note, not a section. Section 4 adds the figure “What the middle shows at dispLen = 0.20”: pixel 2 = `(0.56, 0.50)` reads `(0.36, 0.50)` past C; turned-around “Haptics” / “tions” and four gray loops through C are named (2026-09-30 learner report → rules 7 and 10; the lab zoom now fits W and R). iOS: `EdgeSafetyExplorer.swift` + `EdgeSafety.metal` (unchanged by this revision). Not complete.

## Generated — Lesson 9.13

```text
readRed   = clamp(uv − disp × (1 − spread), 0, 1)     (new: shorter push)
readGreen = clamp(uv − disp, 0, 1)                    (the 9.12 read point)
readBlue  = clamp(uv − disp × (1 + spread), 0, 1)     (new: longer push)
color     = half4(colRed.r, colGreen.g, colBlue.b, 1.0)
```

Black-and-white checker so any color comes from the read points. C = `(0.40, 0.54)`, spread 0.10. W = `(0.40, 0.405)` stores `(1, 0, 0)`. Fringe needs a push and an edge; it ends 0.35 from C. iOS files: `ChromaticSeparationExplorer.swift` + `ChromaticSeparation.metal` (`chromaticRefract`), built 2026-10-12. Not complete.


**2026-10-01 revision (learner report on Section 1 steps 5–6):** steps 5 and 6 now pair the output (left) with the wallpaper of the same part (right), one chosen pixel at a time, with the push 0.10 printed, read-point labels, and red/green/blue channel arrows from each read point back to the pixel. Step 6 uses Q₁…Q₄ just below C (push passes C). Rule 8 extended. The lab zoom fits all its points (rule 10).

**2026-10-01 revision (learner request on the Section 4 lab):** click any pixel to pick W; readRed, readGreen and readBlue are drawn as clickable dots on the lab picture (an explicit exception to rule 8, explained in the legend); the C and W drags now follow the pointer the whole way.

## Generated frontier — Lesson 9.14

```text
sd    = length(uv − center) − radius              (both answers start here)
bent  = the Lesson 9.13 color from three read points   (answer 2: where does the pixel read?)
mask  = 1 − smoothstep(−maskBand, maskBand, sd)   (new, answer 1: is the pixel glass? maskBand = 0.002)
plain = wall(uv, time)                            (new: the wallpaper at the pixel itself)
color = mix(plain, bent, mask)                    (new)
wall(x, y, time) = checker(x + speed × time, y)   (moving test pattern, speed = 0.10, moves left)
```

Answers the Chapter 9 checkpoint. C = `(0.40, 0.54)`. W = `(0.40, 0.24)` at time = 2 s: sd = 0.05 → mask 0; read points y = 0.2544 / 0.256 / 0.2576 → bent black; plain white → stores white. Falloff as the mask gives a 0.20-wide ghost ring; a hard if gives stair steps. iOS files: `LensCheckpointExplorer.swift` + `LensCheckpoint.metal` (`glassLens`, `movingChecker`), built 2026-10-12. Exercises (rebuilt 2026-10-19 → AGENTS.md rule 18): each opens with its picture, one question and choice buttons; answers: 1 no push → the checkerboard as with no glass, 2 capsule mask → neither T = (0.78, 0.54) nor M = (0.40, 0.33) differs from the wallpaper, 3 black strip → the read-point lines (clamps). Exercise 2 states what it checks and what to do (2026-10-19 → rules 17, 18). Learner-confirmed complete on 2026-10-19.

### Lesson 10.1 — Height-map idea (generated, not complete)

```text
inside = clamp(−sd, 0, bevel)
leg    = bevel − inside
h      = √(bevel² − leg²)        (the rim is a quarter circle: center K, bevel inside the outline, radius bevel)
gray   = h ÷ bevel
```

C = `(0.50, 0.50)`, radius 0.25, bevel 0.10. W = `(0.71, 0.50)`: sd = −0.04, inside 0.04, leg 0.06, h = 0.08, gray 0.80. The height uses only sd (any shape). iOS files: `chapter10/HeightMap.metal` + `HeightMapExplorer.swift`; Metal exercise (new in AGENTS.md rule 18, 2026-10-19): `chapter10/HeightExercise.metal` (learner writes `roundedRectSd` and `surfaceHeight`), `HeightExerciseKey.metal`, `ExerciseCheck.metal` (`markDifference`, reusable), `HeightExerciseView.swift`, on `Chapter10Screen`. Built 2026-10-19. Next: Lesson 10.2 — Slope — do not generate unless asked.

## Future conversation

Paste `NEW_CHAT_PROMPT.md`, then in the same message name generate or questions. When the checkpoint or frontier moves, refresh section 12 of that prompt after `CURRENT_STATE.md`.

Standing delivery: no ZIP archives; new `#Preview` stacks light then dark. Details in `USER_PREFERENCES.md`.

Course progress: 100 of 216 lessons completed.
