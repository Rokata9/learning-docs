# Liquid Glass iOS course — implementation handoff

**Updated:** 2026-10-31

## Read order

`NEW_CHAT_PROMPT.md` (repository root of `liquid-glass-learning-docs`), section 3, lists what to read for each job. This handoff gives each lesson's short contract.

Use `CURRENT_STATE.md` for teaching contracts and current file references. Use the curriculum for lesson order. Lesson completion is reported only in chat when a new lesson is generated; neither file tracks it.

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

## Teaching contract — Lesson 9.14

```text
sd    = length(uv − center) − radius              (both answers start here)
bent  = the Lesson 9.13 color from three read points   (answer 2: where does the pixel read?)
mask  = 1 − smoothstep(−maskBand, maskBand, sd)   (new, answer 1: is the pixel glass? maskBand = 0.002)
plain = wall(uv, time)                            (new: the wallpaper at the pixel itself)
color = mix(plain, bent, mask)                    (new)
wall(x, y, time) = checker(x + speed × time, y)   (moving test pattern, speed = 0.10, moves left)
```

Answers the Chapter 9 checkpoint. C = `(0.40, 0.54)`. W = `(0.40, 0.24)` at time = 2 s: sd = 0.05 → mask 0; read points y = 0.2544 / 0.256 / 0.2576 → bent black; plain white → stores white. Falloff as the mask gives a 0.20-wide ghost ring; a hard if gives stair steps. iOS files: `LensCheckpointExplorer.swift` + `LensCheckpoint.metal` (`glassLens`, `movingChecker`), built 2026-10-12. Exercises (rebuilt 2026-10-19 → AGENTS.md rule 18): each opens with its picture, one question and choice buttons; answers: 1 no push → the checkerboard as with no glass, 2 capsule mask → neither T = (0.78, 0.54) nor M = (0.40, 0.33) differs from the wallpaper, 3 black strip → the read-point lines (clamps). Exercise 2 states what it checks and what to do (2026-10-19 → rules 17, 18). Learner-confirmed complete on 2026-10-19.

### Lesson 10.1 — Height-map idea (complete)

```text
inside = clamp(−sd, 0, bevel)
leg    = bevel − inside
h      = √(bevel² − leg²)        (the rim is a quarter circle: center K, bevel inside the outline, radius bevel)
gray   = h ÷ bevel
```

C = `(0.50, 0.50)`, radius 0.25, bevel 0.10. W = `(0.71, 0.50)`: sd = −0.04, inside 0.04, leg 0.06, h = 0.08, gray 0.80. The height uses only sd (any shape). iOS files: `chapter10/HeightMap.metal` + `HeightMapExplorer.swift`; Metal exercise: `HeightExercise.metal`, `HeightExerciseKey.metal`, `ExerciseCheck.metal`, and `HeightExerciseView.swift`. Learner-confirmed complete on 2026-10-27.

### Lesson 10.2 — Slope

```text
A      = W − (step, 0)
B      = W + (step, 0)
hLeft  = Lesson 10.1 height at A
hRight = Lesson 10.1 height at B
deltaH = hRight − hLeft
deltaX = 2 × step
slopeX = deltaH ÷ deltaX
```

One graphics idea: a signed x-slope number says whether the surface rises or falls as x grows. One math idea: height change ÷ horizontal distance. The straight join between the two surface points gives the average slope from A to B, used as an estimate at W, not an exact derivative. C = `(0.50, 0.50)`, radius 0.25, bevel 0.10, step 0.01. Teaching W = `(0.72, 0.50)`, A = `(0.71, 0.50)`, B = `(0.73, 0.50)`: hLeft 0.08, hRight 0.06, deltaH −0.02, deltaX 0.02, slopeX −1. Zero x slope means equal left and right heights; it does not measure y change. Display only: red = `clamp(0.15 + slopeX ÷ 4, 0.15, 1)`, blue = `clamp(0.15 − slopeX ÷ 4, 0.15, 1)`, green 0.15; zero is dark gray, and the range 4 is a chosen display dial. iOS: `chapter10/SlopeMap.metal` + `SlopeExplorer.swift`; exercise `SlopeExercise.metal` (`roundedRectHeightForSlope`, `roundedRectSlopeX`), `SlopeExerciseKey.metal`, and `SlopeExerciseView.swift`, wired into `Chapter10Screen`, with the live lesson before the completed 10.1 review. The final restored deliverable builds for the iPhone 16 Pro simulator. On screen: the slope map is gray in the middle, red on the left rim, and blue on the right; the untouched stubs show red on the rim, and a temporary answer-key solution gives no red pixels. The learner stubs and normal Chapter 1 startup were restored before the final build. Browser: 67 interaction checks, 3,240 finite-math states, 924 valid local links, and direct-file cold start pass at 1920×1080. Older trace cards in Chapters 4–6 needed behavior-preserving string splits so the current Swift compiler could type-check the full project. Next: Lesson 10.3 — Surface normal — do not generate unless asked.

### Lesson 10.3 — Surface normal

```text
D = W − (0, step); E = W + (0, step)
slopeY = (hE − hD) ÷ (2 × step)
rawNormal = (−slopeX, −slopeY, 1)        (front and side views: quarter turn of the walks (1, slopeX), (1, slopeY))
normalLength = √(x part² + y part² + height part²)   (Lesson 9.1 twice)
N = rawNormal ÷ normalLength
RGB = N × 0.5 + 0.5                      (display only)
```

Regenerated from scratch on 2026-10-28 (the earlier version was replaced, not copied); the old Sections 1–2 merged into one 3D stepper on 2026-10-31; the tables and legends under the stepper, the light preview and the lab section removed the same day; learner-confirmed complete on 2026-10-31. One graphics idea: the normal stands at a square corner to the surface. Section 1 has one test surface, the tilted board (board units from P; slopes −0.45, −0.60), after the 3D on-ramp (from above, then a tilt with Q): the goal arrow, named rawNormal; the x walk and y walk; one walk in three flat views; in the front view a quarter turn of the x walk gives rawNormal's x part and height part, (0.45, 1), with a turn slider in the flat picture and the sign change explained (a height −0.45 becomes an x +0.45; rawNormal leans downhill); in the side view the y walk gives (0.60, 1); so rawNormal = (0.45, 0.60, 1). No other arrow is named. The view angle is fixed from Step 2 on. One math idea: a 3D length by Pythagoras twice: shadow 0.75, length 1.25, N = (0.36, 0.48, 0.80). Steps 12–14 return to the glass in UV (the slice, near H a small board, every pixel). The lead says what N does in the end; Lessons 10.4–10.31 build the brightness. Teaching W = (0.71, 0.50), Lesson 10.1's pixel (Lesson 10.2 keeps (0.72, 0.50)), chain at 5 decimals: slopeX −0.7595, hD = hE = 0.07982, slopeY 0, rawNormal (0.7595, 0, 1), length 1.256, N = (0.605, 0, 0.796), stores (0.8025, 0.50, 0.898). Then Section 2 traced value (five cards) and color guide (colored map with points 1–10 and a draggable W; a click on a point opens a short tooltip that says why each channel is above, at or below neutral 0.50; the number lines of × 0.5 + 0.5 are in a ⓘ), 3 code, 4 challenge, 5 exercises (the flat top, the top rim, equal unit lengths, which of three arrows from H is N), 6 Metal, 7 record, 8 your questions (added 2026-11-01: point against arrow parts, why the turn, why the minus, an example with slopeX −0.349; 2026-11-02: the turn cards moved to the glass at K and M, and a card says that a slope is a ratio and not a size on the glass; the rest of the page does not need it). A point has x, y, height; an arrow has parts, and each part names its arrow. iOS (rewritten): `chapter10/NormalMap.metal` + `NormalExplorer.swift`; Metal exercise `NormalExercise.metal` (`unitNormalFromSlopes`, `buttonNormal`; `buttonHeightForNormal` prepared), `NormalExerciseKey.metal`, `NormalExerciseView.swift`. Builds for the iPhone 16 Pro simulator; the stubs show a red rim, the answer shows none. Feedback → rules: `FEEDBACK_LOG.md`; QA: `CURRENT_STATE.md`.

### Lessons 10.4–10.24 — the dot product, split by idea (2026-11-02; 10.4 split in three 2026-11-03; 10.5 and 10.7 added 2026-11-03)

```text
L = (0.48, −0.60, 0.64)          1 long, the direction toward a light, chosen, the same at every pixel; arrow units: 1 = the length of L
K = (0.62, 0.66) UV              on the rim, where none of N's parts is 0; S = the glass above K (height 0.0866)
N at K = (0.302, 0.402, 0.864)
dot(N, L) = how far N goes along L: a line from the tip of N meets L's line at a square corner, at F; L's ruler reads F (plus on the side L points to, minus on the other)
dot(N, L) = N's x part × L's x part + N's y part × L's y part + N's height part × L's height part
at K: 0.302 × 0.48 = 0.14496; 0.402 × (−0.60) = −0.2412; 0.864 × 0.64 = 0.55296; 0.14496 + (−0.2412) = −0.09624; −0.09624 + 0.55296 = 0.45672
W = (0.71, 0.50) UV, N at W = (0.605, 0, 0.796): 0.605 × 0.48 = 0.2904; 0 × (−0.60) = 0; 0.796 × 0.64 = 0.509; 0.2904 + 0 = 0.2904; 0.2904 + 0.509 = 0.7994; gray 0.8997
                                 (W's lines are rounded to 3 decimals, as the page prints them; with every digit of N, the GPU gets 0.799986)
gray = dot(N, L) × 0.5 + 0.5     display only: the dot map
```

**Source pages** (the folder `course/archive/` was removed on 2026-11-03 at the learner's request; read a page with `git show c42d7c0:liquid-glass-learning-docs/course/archive/<file>`):
- `course/archive/lesson-10-04-dot-product-2026-11-02.html`, Lesson 10.4 before the split (for Lessons 10.11–10.24);
- `course/archive/lesson-10-04-arrow-part-draft-2026-11-03.html`, the one-page draft of the foot lesson (for Lessons 10.6–10.10). Its fresh review found five new ideas, so the learner split it in three on 2026-11-03; its review is `reviews/lesson-10-04-draft-beginner-review-2026-11-02.md` (draft items #1–#29, named “draft #” below);
- `course/archive/lesson-10-05-spin-draft-2026-11-03.html`, the spin page before its Steps 4–5 moved out (for Lesson 10.7).

**What carries over:**
- the rendering engine;
- `ideaScene` (the glass at K), `drawNLPlane` (L's ruler, its numbers, its plus side and minus side), `patchScene`, `movesPic`, `cornerAtS`, the flip slider;
- from the draft: `sceneAt` (the glass zoomed in at a pixel), `lineOn` (a line through S with its ruler), `legs`, `dropTo`, `wallOf`, `drawWallFlat`, `drawPlaneFlat`, the spin slider, `threeFeet`;
- the numbers above.

**Every lesson here:**
- Made by the ordinary job, one per chat: “Generate lesson 10.N”. Each links back to the lesson before it and on to the hub; its hub entry becomes `available` with its file.
- `C` lessons: one idea, at most 5 stepper steps, the glass at K (no test board), the HTML page only.
- 10.24 is `B`: it needs Xcode and the iOS lab.
- Wherever a length along L's line is printed: “arrow units: 1 = the length of L” (review #21).
- Review items #1–#30: `reviews/lesson-10-04-beginner-review-2026-11-02.md`.
- Cards 1–6 are the source page's Section 8. Each card's answer goes into the step where its question arises, not into a “your questions” section.
- Arrow ruler at K: 1 = 0.15 UV (the draft and Lesson 10.3's card 2; the old page used 0.10).
- The straight line from Gx to the tip of N is drawn dark gray and named by its ends (“the line from Gx to the tip of N”), not “the gray line”: Lesson 10.4's flat drawings call the wall, seen edge-on, a gray line (Review 3 of the spin page). In flat drawings the edge-on wall is “the wall, seen edge-on”, drawn as a gray band.

#### Lesson 10.4 — The rest of the walk stays on a wall (`C`, made 2026-11-03, learner-confirmed complete 2026-11-03)
- **File:** `lesson-10-04-walk-stays-on-a-wall.html`. Contract, page shape and QA: `CURRENT_STATE.md`.
- **One idea:** after the x leg, the y leg and the height leg go 0 to the right, so the rest of the walk, and the tip of N, stay on the wall of all points 0.302 to the right of S. No proof that the wall is flat and no square corner with the x line here (10.5–10.9), no foot (10.10), no L.
- **Reviews:** `reviews/lesson-10-04-beginner-review-2026-11-03.md` (three fresh reviews; the last one's list).
- **Folded in:** card 1 (the real glass, not a board), card 2 (“level” = parallel to the floor), card 3 (each part drawn as a leg); draft #1, #3–#10 and #13's “the x line goes through the wall”.

#### Lesson 10.5 — The wall is flat and stands straight up (`C`, made 2026-11-03)
- **File:** `lesson-10-05-the-wall-is-flat.html`. Contract, page shape and QA: `CURRENT_STATE.md`.
- **Why it exists (learner: “Yes, flat wall first”, 2026-11-03):** Review 3 of the spin page found that the spin, the circle and the half turn rely on the wall being flat, which Lesson 10.4, Step 5 only states (“Lesson 10.5 shows why”). This lesson is that reason.
- **One idea:** the wall is flat. Between two points of the wall the arrow's x part is 0.302 − 0.302 = 0, so walking the straight line between them, like Lesson 10.4's y leg, does not go to the right at all: it stays on the wall. M, slid along the line with a share (Lesson 5.4's progress), is only a check with numbers. “Stands straight up” is Lesson 10.4, Step 5's fact (a move up keeps you on the wall), one line at the end of Step 4 (a Step 5 on it was counted as a second idea by two fresh reviews). What flat means (not curved, never “level”) is shown on the glass first: the straight line from H₁ (above (0.62, 0.61)) to H₂ (above (0.62, 0.71)) passes 0.01725 below S, inside the glass.
- **Traced value:** M on the straight line from Gx to the tip of N, at a share (slider), with draggable K. Lessons 10.6 and 10.10 use that line.
- **Reviews:** `reviews/lesson-10-05-flat-wall-beginner-review-2026-11-03.md` (the name `lesson-10-05-beginner-review-2026-11-03.md` holds the reviews of the earlier 10.5 pages).

#### Lesson 10.6 — A turn around the x line keeps a line on the wall (`C`, made 2026-11-03 as 10.5, trimmed the same day)
- **File:** `lesson-10-06-spin-around-the-x-line.html` (was `lesson-10-05-spin-around-the-x-line.html`). Contract, page shape and QA: `CURRENT_STATE.md`.
- **History:** split from the square-corner page (learner: “Yes, split in three”, 2026-11-03; that page is `course/archive/lesson-10-05-square-corner-draft-2026-11-03.html`, the source for 10.8 and 10.9, with its reviews in `reviews/lesson-10-05-beginner-review-2026-11-03.md`, “draft-5 #N” below). Its Review 3 (same file) counted 3–4 ideas; with the learner's “Yes, flat wall first” the page stops after its Step 3, and its Steps 4–5 moved to 10.7. The page before the trim is `course/archive/lesson-10-05-spin-draft-2026-11-03.html`.
- **One idea:** the spin is a turn around the x line: by its meaning every point keeps its x and goes round the x line (Gx does not move), so the spin changes only y and height, and the teal line (a straight line on the wall from Gx, 0.953 long: chosen, as far as the tip of N is from Gx, for 10.7) stays on the wall. Traced value: a spin of 90°, Lesson 10.3's quarter turn, takes T from (0, 0.953, 0) to (0, 0, 0.953) from Gx, still 0.302 to the right of S. Two fresh reviews in a row counted “the spin keeps the length” as a second idea, so it moved to 10.7, the lesson that needs it. No kept length, no circle, no half turn (10.7), no square corner (10.9), no hinge (10.8).
- **Reviews:** Review 3 in `reviews/lesson-10-05-beginner-review-2026-11-03.md`; the reviews after the trim in `reviews/lesson-10-06-beginner-review-2026-11-03.md`.

#### Lesson 10.7 — Half a turn reaches every line on the wall through Gx (`C`)
- **File:** `lesson-10-07-half-a-turn-reaches-every-line.html`.
- **From:** the spin page's Steps 4–5, its Section 2 (the spin that lays the teal line along the line from Gx to the tip of N, about 65°, found by a button) and its Exercise 1 (which of three lines the teal line lies along), in `course/archive/lesson-10-05-spin-draft-2026-11-03.html`.
- **The idea:** the spin keeps T on the wall (10.6); seen straight along the x line (the wall seen straight on) it is a turn around Gx, Gx to T has x part 0 so that drawing shows its length at full size, and a turn keeps lengths (Lesson 10.3): T stays 0.953 from Gx and goes round a circle around Gx on the wall, through the tip of N; each line through Gx points two opposite ways, so half a turn (0° to 180°) lays the teal line along every line on the wall through Gx. The lines through Gx are straight lines on the wall because the wall is flat (10.5).
- **Fix (Review 3 of the spin page, the items that moved with Steps 4–5):** the reverse (every point of the wall 0.953 from Gx is on T's path); why the slider may stop at 180° (each line points two ways; the tip of N is up); one meaning of “line” (a whole line through Gx, the teal line drawn on both sides of Gx); introduce the button and its 65°; the “So” of the last step needs every line, not one example; no “the wall as it is”; Section 2's table must not assume T at the tip of N before it shows it; Exercise 1's line a must be 0.953 long, or the question asks only which line it lies along; why the line from Gx to the tip of N has N's y and height parts; label the line, T and the arc in Section 2.
- **Moved here from 10.6 (2026-11-03):** the kept length, with the premise Review 6 of the spin page asked for (why the straight-on drawing shows Gx to T at its true length) and Exercise 1's point b (on the wall, but only 0.707 from Gx).
- **If its fresh review counts the kept length, the circle and the half turn as more than one idea,** stop and propose a split (rule 16).

#### Lesson 10.8 — Two fixed sides and the distance between their ends fix the corner (`C`)
- **File:** `lesson-10-08-hinge-fixes-the-corner.html`.
- **From:** the 10.5 draft's Step 4 tooltip “Why the corner cannot change”; draft-5 review 2 #9 (draw it).
- **The idea:** two sticks joined at a hinge, drawn flat: opening the corner moves the free ends apart, closing it brings them together. So with both sides and the distance between the ends fixed, the corner is fixed. On the glass at K: S to Gx 0.302 and Gx to T 0.953 with S to T 1.000.
- **Fix:** draw the corner opened and closed with S to T printed longer and shorter; “the same triangle” is stronger than the hinge shows (draft-5 review 2 #14): say only that the corner cannot change.

#### Lesson 10.9 — A line through a wall meets every line on it at a square corner (`C`)
- **File:** `lesson-10-09-a-line-through-a-wall.html`.
- **From:** the 10.5 draft's Steps 2, 4 and 5, its Section 2 table (the triangle at spin 0° against the triangle when T is at the tip of N) and Exercise 2 (spin 150°: the corner is still 90°).
- **The idea:** the teal line starts along y, square to the x line; the spin (10.6) keeps S to Gx 0.302, Gx to T 0.953 and S to T 1.000 (Lesson 10.3's three-part length: x part 0.302, y part² + height part² = 0.9081), so the corner at Gx stays square (10.8); every line on the wall through Gx is the teal line at some spin (10.7). Answers Lesson 10.3, Step 8 for the x line and this wall (y and height square to each other).
- **Fix:** the title's scope (the x line goes along x, the one direction in which the wall's points agree); with N's x part 0 another point of the x line replaces S; Step 1 labels.
- **Traced value:** the line from Gx to the tip of N, the last position of the spin.

#### Lesson 10.10 — An arrow's part is a foot on an axis (`C`)
- **File:** `lesson-10-10-arrow-part-on-an-axis.html`.
- **From:** the draft's Step 5 (the three lines), Section 2 (three feet, draggable K) and its exercises.
- **The idea:** the line from the tip of N to Gx lies on the wall (10.5, its traced value), so it meets the x line at a square corner (10.9). So N's x part is the reading at the foot. The same for y and height.
- **Fix:**
  - draft #17 (blocks): the method without walking: move a point along the x line until the line from the tip of N makes a square corner (a slider);
  - draft #18: one foot: the tip, Gx and another point form a right triangle with its one square corner at Gx;
  - draft #2, #16 (the ruler's reading, plus or minus by side), #22, #23 (a wall: all points at one reading on a line; label each wall), #24, #25 (“at a square corner” in each question), #26, #27, #29;
  - draft #28: N at K₂ gets its own ⓘ chain; no mirror rule;
  - no plane: the flat picture is the triangle S, Gx, tip of N, seen straight on (draft #21's 0.953 labelled as “away from the x line, not height”).
- **Traced value:** the three feet at 0.302, 0.402 and 0.864 from S, with draggable K.
- **Exercise, new:** where the line from the tip of N, at a square corner to the height line, meets it (0.864), at a pixel other than K (draft #27).

#### Lesson 10.11 — How far an arrow goes along any line (`C`)
- **File:** `lesson-10-11-how-far-along-any-line.html`.
- **From:** Step 3; `drawNLPlane` with its plus side only.
- **Fix:**
  - #7: name the question: 10.10's “how far N goes along x”, now along L's line;
  - #2 and draft #19–#21: one sentence why an arrow and a line from one point lie in one plane: lay a flat sheet along the line and turn it until it touches the tip of N; N's start is on the line, so all of N lies on the sheet. Draw the plane in the 3D picture. If the fresh review counts the plane as a second idea, it becomes its own lesson before this one (rule 16).
- **L appears here first.** Lessons 10.4–10.10 do not use it.
- **Traced value:** with L along x, along y and straight up, the reading is 0.302, 0.402 and 0.864, Lesson 10.10's three parts. With the lesson's L, about 0.46 off the ruler; 10.22 computes 0.45672.

#### Lesson 10.12 — The minus side of L's ruler (`C`)
- **File:** `lesson-10-12-the-minus-side.html`.
- **From:** Step 3's plus side and minus side; card 5.
- **Fix:** #29: minus means the tip of N is on the side of S that L does not point to.
- **Fold in:** card 5.
- **Traced value:** with L along minus x, the line from the tip still meets the x line at G, but L's ruler reads G as −0.302.

#### Lesson 10.13 — Same direction 1, opposite −1 (`C`)
- **File:** `lesson-10-13-same-direction-1-opposite-minus-1.html`.
- **From:** Step 4 with the buttons Same direction and Opposite.
- **Fix:** #8: as L turns toward N, the tip of N comes closer to L's line, so F slides toward the tip.
- **Fold in:** card 4: F is where the line from the tip meets L's line; when L's line runs through the tip, F is the tip.

#### Lesson 10.14 — A square corner gives 0 (`C`)
- **File:** `lesson-10-14-a-square-corner-gives-0.html`.
- **From:** Step 4 with the button A square corner with N.
- **Fix:**
  - #9: at a square corner, N itself is the line from its tip at a square corner to L's line, so F is at S. Draw the corner mark; keep the S and F labels apart;
  - #26: the other way round: 0 means F is at S, so N stands at a square corner to L's line.

#### Lesson 10.15 — Never past 1 (`C`)
- **File:** `lesson-10-15-never-past-1.html`.
- **From:** Step 4's caption `ⓘ`.
- **Fix:** #10: 1² = SF² + (F to tip)² (Lesson 9.1), so SF is at most 1. The cos name of Lesson 4.9 gets its own `ⓘ`, or goes.
- **Exercise:** “Can dot(N, L) be 1.2?” No: S to F is a shorter side of a right triangle whose long side is 1.

#### Lesson 10.16 — A walk's legs each move F (`C`)
- **File:** `lesson-10-16-each-leg-moves-f.html`.
- **From:** Step 5.
- **Fix:**
  - #11: we draw these lines only to find a rule; 10.18–10.22 turn each move into a multiplication the GPU can do;
  - #12: define once: a leg “moves F” when the meeting point goes from one F to the next, F₁ → F₂ → F₃.

#### Lesson 10.17 — A leg's start does not matter (`C`)
- **File:** `lesson-10-17-a-legs-start.html`.
- **From:** Step 8's copy of a leg from S.
- **Fix:** #16: flat walls at a square corner to L's line, one per ruler mark (Lesson 10.4's wall, now across L's line). The same leg crosses the same walls wherever it starts.
- **Picture:** both moves side by side, with their ruler readings. Use the height leg: F₂ at −0.09624 → F₃ at 0.45672, and its copy from S; both move 0.55296. It is a plus move; the y leg's minus move waits for 10.21.

#### Lesson 10.18 — A flip keeps lengths and square corners (`C`)
- **File:** `lesson-10-18-a-flip-keeps-lengths.html`.
- **From:** Step 6's gray halfway line and flip slider.
- **Fix:** #14, first half:
  - why the flip over the halfway line swaps the x line and L's line: the halfway line makes the same angle with both;
  - why it keeps S: S is on the flip line;
  - why it keeps lengths and square corners: fold the picture along the line; nothing stretches.
- **Fold in:** card 6's first bullets.

#### Lesson 10.19 — A walk of 1 along x lands at L's x part (`C`)
- **File:** `lesson-10-19-walk-of-1-along-x.html`.
- **From:** Step 6.
- **Fix:**
  - #13: name both triangles before “both”: the lime triangle S, X, J (square corner at J) and the yellow triangle S, tip of L, Q (square corner at Q);
  - #14, second half: the flip takes X (1 along x) onto the tip of L (1 along L), and Q's square corner onto J's.
- **Fold in:** card 6: three facts make the triangles match: the shared angle at S (the arc), a square corner, a long side of 1.
- **The result:** Q is at 0.48 along x (Lesson 10.10), so J is at 0.48 along L's line.

#### Lesson 10.20 — Growing scales every side (`C`)
- **File:** `lesson-10-20-growing-scales-every-side.html`.
- **From:** Step 7.
- **Fix:** #15 (blocks) and #30. The chain, each with its reason on the page:
  - growing from S by 1 ÷ 0.302 multiplies every distance from S by one number;
  - a point on a line through S stays on that line, so the angle at S stays;
  - the line from X to J moves to a line in the same direction, so the square corner stays;
  - so the small triangle lands on the big one, and every side is multiplied by that number, the move along L's line too: 0.302 × 0.48 = 0.14496.

#### Lesson 10.21 — A part that points away: the minus case (`C`)
- **File:** `lesson-10-21-the-minus-case.html`.
- **From:** Step 8's y part.
- **Fix:**
  - #17: its own gray halfway line and flip slider. The two triangles lie on opposite sides of S; Q at −0.60 lands on J at −0.60;
  - #4: mark “right” and “toward the top of the picture” on the flat picture.
- **The result:** 0.402 × (−0.60) = −0.2412.

#### Lesson 10.22 — The dot product formula (`C`)
- **File:** `lesson-10-22-dot-product-formula.html`.
- **From:** Steps 9–10; Section 3's code line; Exercise 3 (b at W).
- **Fix:**
  - #18: “no corner between the arrows (no angle)”;
  - #27: “Counted along the line of b from H”.
- **Code:** `dotNL = N.x * L.x + N.y * L.y + N.z * L.z`, with its line table.
- **Traced value:** the chain at K above. Lesson 10.11's “about 0.46” is now exact.
- **Exercise 3:** uses 10.14's “0 means a square corner”: b = (0.796, 0, −0.605) at W, 0.48158 + 0 + (−0.48158) = 0.

#### Lesson 10.23 — One light direction for every pixel: the dot map (`C`)
- **File:** `lesson-10-23-dot-map.html`.
- **From:** Section 2 (W's trace, the map with points 1–10); Exercises 1 and 2.
- **Fix:**
  - #1: W is the pixel this lesson traces;
  - #19: from very far away, the direction toward the light changes too little across the glass to matter;
  - #20: point 4 is just above 0 (0.0488, gray 0.5244); nearer the outline N leans further, its height part shrinks, and the number goes below 0;
  - #22: on the flat top, the height only says where H is; the number uses only the arrows' parts;
  - #23: “on the side of the rim away from where L leans”;
  - #24: c leans away from both of L's level parts, so two products are minus; a and b lean away from only one;
  - #25: one value for c's N.
- **Traced value:** W, with the chain above.

#### Lesson 10.24 — Build: the dot product in Metal (`B`)
- **File:** `lesson-10-24-build-dot-product-in-metal.html`.
- **Joins:** 10.4–10.23. One recall line per joined lesson, each with its `ⓘ`.
- **From:**
  - Section 3 (the code excerpt);
  - Section 4: the challenge “write the dotNL line” becomes the first function of the Metal exercise; no browser challenge;
  - Section 6 (the Metal exercise) and Section 7 (the record);
  - the iOS files `chapter10/DotExplorer.swift`, `DotMap.metal`, `DotExercise.metal`, `DotExerciseKey.metal`, `DotExerciseView.swift` (relabelled in Phase 6 of the curriculum revision).

#### Later in Chapter 10
- Exercise 4 (rawNormal against N at W and V) moves to 10.28, “Why N must be 1 long”, with #28: from W to V the x product gains 0.456 − 0.2904 = 0.1656, but the height product loses 0.509 − 0.202 = 0.307, so the number drops from 0.7994 to 0.658.

## Side lesson — Safari shortcut, Section 4 revised 2026-10-26

The learner found the push ratio, the constant 24 and the exact-fold modal hard to follow. Section 4 now uses one 15-step visual workspace with new wording and original SVG/canvas figures. The rendering formulas are unchanged:

```text
push = edgePush × (1 − h ÷ bevel)
read = inside + push
fold inside = bevel − bevel² ÷ √(bevel² + edgePush²)
optional check = read(inside + 0.001) − read(inside)
```

`bevel = 28` is the rim width, rim-circle radius and flat-top height. `edgePush = 24` is a recording-matched dial, not a material constant. Two matched 28-part rulers show why a 1 pt height increment removes `24 ÷ 28 = 0.857143` pt of push. The balance climb is computed from the original integers as `28 ÷ 24 = 1.166667`. After the learner preferred the exact form, Step 7 derives `fold inside = bevel − bevel² ÷ √(bevel² + edgePush²)` from `leg ÷ h = bevel ÷ edgePush` and `leg² + h² = bevel²`. The radius/tangent picture explains the ratio. Substitution gives `28 − 784 ÷ √1360 = 6.740815`, reading `15.121822`. The two direction checks at `6.740` and `6.741` confirm the answer rather than replacing the derivation. The second read of 24 is also exact: `2 × 28 × 24² ÷ 1360 = 23.717647`. After the Step 11 feedback, Section 4 uses original picture, upside-down copy, original-order copy, pixel row, top of the glass and output height instead of the previous shorthand. Step 11 now proves the bend with two consecutive moves: original-order down 1.653262 then 1.499593 gives `right ÷ down = 0.302432` then `0.333424`; upside-down up 0.500320 then 0.346653 gives `right ÷ up = 0.999360` then `1.442365`. The original line’s constant `0.5 ÷ 1 = 0.5` keeps it straight. Step 11 (rebuilt 2026-10-27) draws the output on top and the test A straight below it at one scale (10 px per pt), because a read moves only down (R’s row = P’s row + push); dragging or clicking any point R of the A, or any output pixel P, draws arrows straight down from every output pixel to the R it reads, and everything follows the pointer live. The two-move column is ordered like the pictures (upside-down copy, original-order copy, original A). A chooser shows R18–R20 or points evenly spaced along the whole A with all arrows; a ×6 strip keeps the crowded upside-down P's apart; the side box checks the selected point's chain at 9 decimals. The A is symmetric, its crossbar joins both legs. `AGENTS.md` rule 6 stacks read pictures the way the read really moves; rule 10 makes every point of a projection picture draggable and covers evenly spaced all-points views and the enlarged inset for crowded points. Other steps preserve unequal copy heights, letter rows, ramp comparison, other edgePush values, rounded corners and the recording.

Failure → prevention: `FEEDBACK_LOG.md`, 2026-10-26 → `AGENTS.md` rules 3 (visible-role names), 10 (crowded-point insets and persistent calculations), 12 (matched scales and calculator-exact inputs) and 15 (exact forms first; consecutive moves and ratios as bend proof). QA: 738 states, 4,110 calculations, 0 arithmetic problems; all controls and marked points checked at desktop sizes. No iOS files changed. The Safari side lesson remains outside the 307-lesson plan.

## Future conversation

Paste `NEW_CHAT_PROMPT.md`, then in the same message name generate or questions. Use the curriculum for lesson order and this file for teaching contracts. Report completion only in chat when generating a new lesson.

Standing delivery: no ZIP archives; new `#Preview` stacks light then dark. Details in `USER_PREFERENCES.md`.
