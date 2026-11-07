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

Regenerated from scratch on 2026-10-28 (the earlier version was replaced, not copied); the old Sections 1–2 merged into one 3D stepper on 2026-10-31; the tables and legends under the stepper, the light preview and the lab section removed the same day; learner-confirmed complete on 2026-10-31. One graphics idea: the normal stands at a square corner to the surface. Section 1 has one test surface, the tilted board (board units from P; slopes −0.45, −0.60), after the 3D on-ramp (from above, then a tilt with Q): the goal arrow, named rawNormal; the x walk and y walk; one walk in three flat views; in the front view a quarter turn of the x walk gives rawNormal's x part and height part, (0.45, 1), with a turn slider in the flat picture and the sign change explained (a height −0.45 becomes an x +0.45; rawNormal leans downhill); in the side view the y walk gives (0.60, 1); so rawNormal = (0.45, 0.60, 1). No other arrow is named. The view angle is fixed from Step 2 on. One math idea: a 3D length by Pythagoras twice: shadow 0.75, length 1.25, N = (0.36, 0.48, 0.80). Steps 12–14 return to the glass in UV (the slice, near H a small board, every pixel). The lead says what N does in the end; Lessons 10.4–10.36 build the brightness. Teaching W = (0.71, 0.50), Lesson 10.1's pixel (Lesson 10.2 keeps (0.72, 0.50)), chain at 5 decimals: slopeX −0.7595, hD = hE = 0.07982, slopeY 0, rawNormal (0.7595, 0, 1), length 1.256, N = (0.605, 0, 0.796), stores (0.8025, 0.50, 0.898). Then Section 2 traced value (five cards) and color guide (colored map with points 1–10 and a draggable W; a click on a point opens a short tooltip that says why each channel is above, at or below neutral 0.50; the number lines of × 0.5 + 0.5 are in a ⓘ), 3 code, 4 challenge, 5 exercises (the flat top, the top rim, equal unit lengths, which of three arrows from H is N), 6 Metal, 7 record, 8 your questions (added 2026-11-01: point against arrow parts, why the turn, why the minus, an example with slopeX −0.349; 2026-11-02: the turn cards moved to the glass at K and M, and a card says that a slope is a ratio and not a size on the glass; the rest of the page does not need it). A point has x, y, height; an arrow has parts, and each part names its arrow. iOS (rewritten): `chapter10/NormalMap.metal` + `NormalExplorer.swift`; Metal exercise `NormalExercise.metal` (`unitNormalFromSlopes`, `buttonNormal`; `buttonHeightForNormal` prepared), `NormalExerciseKey.metal`, `NormalExerciseView.swift`. Builds for the iPhone 16 Pro simulator; the stubs show a red rim, the answer shows none. Feedback → rules: `FEEDBACK_LOG.md`; QA: `CURRENT_STATE.md`.

**Exercises (redrawn 2026-11-07, `AGENTS.md` rule 18):** each question and answer shows Step 13's 3D view zoomed in at the exercise's pixel and Section 1's slice through it (the old pictures were 2D: the height map from above and slices). After the fresh review two remain (the flat top and “which N is longer” asked back Steps 14 and 11): 1 W₂ = (0.50, 0.29) → leans toward the top of the picture; 2 moved from W (Step 13 already draws N there) to W₄ = (0.66, 0.62): arrow b = N meets both glass curves at a square corner, arrow c (slopeX only) one, arrow a (straight up) none; flat drawing: the two slices through W₄. Since 2026-11-07 (3) the question shows only the 3D view, with a red marker on what to find; the answer keeps the flat drawing.

### Lessons 10.4–10.32 — the dot product, split by idea (2026-11-02; 10.4 split in three 2026-11-03; 10.5 and 10.7 added 2026-11-03; 10.7 split in two and then three 2026-11-03, plan 310)

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

**Source pages** (the folder `course/archive/` was removed on 2026-11-03 at the learner's request, and again on 2026-11-04 after its last page was used; read a page with `git show c42d7c0:liquid-glass-learning-docs/course/archive/<file>`, or `91a51c6:` for the 10.7 split draft):
- `course/archive/lesson-10-04-dot-product-2026-11-02.html`, Lesson 10.4 before the split (for Lessons 10.19–10.32);
- `course/archive/lesson-10-04-arrow-part-draft-2026-11-03.html`, the one-page draft of the foot lesson (for Lessons 10.6–10.16). Its fresh review found five new ideas, so the learner split it in three on 2026-11-03; its review is `reviews/lesson-10-04-draft-beginner-review-2026-11-02.md` (draft items #1–#29, named “draft #” below);
- `course/archive/lesson-10-05-spin-draft-2026-11-03.html`, the spin page before its Steps 4–5 moved out (for Lessons 10.8–10.11).

**What carries over:**
- the rendering engine;
- `ideaScene` (the glass at K), `drawNLPlane` (L's ruler, its numbers, its plus side and minus side), `patchScene`, `movesPic`, `cornerAtS`, the flip slider;
- from the draft: `sceneAt` (the glass zoomed in at a pixel), `lineOn` (a line through S with its ruler), `legs`, `dropTo`, `wallOf`, `drawWallFlat`, `drawPlaneFlat`, the spin slider, `threeFeet`;
- the numbers above.

**Every lesson here:**
- Made by the ordinary job, one per chat: “Generate lesson 10.N”. Each links back to the lesson before it and on to the hub; its hub entry becomes `available` with its file.
- `C` lessons: one idea, at most 5 stepper steps, the glass at K (no test board), the HTML page only.
- 10.32 is `B`: it needs Xcode and the iOS lab.
- Wherever a length along L's line is printed: “arrow units: 1 = the length of L” (review #21).
- Review items #1–#30: `reviews/lesson-10-04-beginner-review-2026-11-02.md`.
- No “coordinate systems in this lesson” panel (learner, 2026-11-04): name the system where each number is printed; a new kind of number gets a row in `course/reference-number-forms.html`.
- Cards 1–6 are the source page's Section 8. Each card's answer goes into the step where its question arises, not into a “your questions” section.
- Arrow ruler at K: 1 = 0.15 UV (the draft and Lesson 10.3's card 2; the old page used 0.10).
- The straight line from Gx to the tip of N is drawn dark gray and named by its ends (“the line from Gx to the tip of N”), not “the gray line”: Lesson 10.4's flat drawings call the wall, seen edge-on, a gray line (Review 3 of the spin page). In flat drawings the edge-on wall is “the wall, seen edge-on”, drawn as a gray band.

#### Lesson 10.4 — The rest of the walk stays on a wall (`C`, made 2026-11-03, learner-confirmed complete 2026-11-03)
- **File:** `lesson-10-04-walk-stays-on-a-wall.html`. Contract, page shape and QA: `CURRENT_STATE.md`.
- **One idea:** after the x leg, the y leg and the height leg go 0 to the right, so the rest of the walk, and the tip of N, stay on the wall of all points 0.302 to the right of S. No proof that the wall is flat and no square corner with the x line here (10.5–10.15), no foot (10.16), no L.
- **Reviews:** `reviews/lesson-10-04-beginner-review-2026-11-03.md` (three fresh reviews; the last one's list).
- **Folded in:** card 1 (the real glass, not a board), card 2 (“level” = parallel to the floor), card 3 (each part drawn as a leg); draft #1, #3–#10 and #13's “the x line goes through the wall”.
- **Exercises (2026-11-07, rule 18):** question and answer at Section 1's camera (Exercise 1's question had yaw 32°; the answers opened edge-on), the answer with a “Wall edge-on” button (pitch 6°) and Section 1's view from above; since 2026-11-07 (3) the question shows only the 3D view, with a red marker on what to find. New case for Exercise 1 the same day (the K₂ case asked back Section 2's draggable K): a second walk from the tip of N (0.2 to the left, 0.6 toward the top of the picture, 0.5 down) ends 0.102 to the right of S. Two fresh reviews; open minor items in `reviews/lesson-10-04-beginner-review-2026-11-07.md`.

#### Lesson 10.5 — The wall is flat and stands straight up (`C`, made 2026-11-03)
- **File:** `lesson-10-05-the-wall-is-flat.html`. Contract, page shape and QA: `CURRENT_STATE.md`.
- **Why it exists (learner: “Yes, flat wall first”, 2026-11-03):** Review 3 of the spin page found that the spin, the circle and the half turn rely on the wall being flat, which Lesson 10.4, Step 5 only states (“Lesson 10.5 shows why”). This lesson is that reason.
- **One idea:** the wall is flat. Between two points of the wall the arrow's x part is 0.302 − 0.302 = 0, so walking the straight line between them, like Lesson 10.4's y leg, does not go to the right at all: it stays on the wall. M, slid along the line with a share (Lesson 5.4's progress), is only a check with numbers. “Stands straight up” is Lesson 10.4, Step 5's fact (a move up keeps you on the wall), one line at the end of Step 4 (a Step 5 on it was counted as a second idea by two fresh reviews). What flat means (not curved, never “level”) is shown on the glass first: the straight line from H₁ (above (0.62, 0.61)) to H₂ (above (0.62, 0.71)) passes 0.01725 below S, inside the glass.
- **Traced value:** M on the straight line from Gx to the tip of N, at a share (slider), with draggable K. Lessons 10.6, 10.7 and 10.16 use that line.
- **Reviews:** `reviews/lesson-10-05-flat-wall-beginner-review-2026-11-03.md` (the name `lesson-10-05-beginner-review-2026-11-03.md` holds the reviews of the earlier 10.5 pages).
- **Exercises (2026-11-07, rule 18):** question and answer at Section 1's camera (the answers opened edge-on), the answer with a “Wall edge-on” button (pitch 6°) and Section 1's view from above; since 2026-11-07 (3) the question shows only the 3D view, with a red marker on what to find. New cases the same day (the middle of P₁P₂ asked back Step 3's share; lines a, b, c asked back Step 4): R, as far past P₂ as P₂ is from P₁, is 0.302 to the right of S; the line from P₃ on the wall to P₄ off it leaves the wall right after P₃. Two fresh reviews; open items in `reviews/lesson-10-05-beginner-review-2026-11-07.md`.

#### Lesson 10.6 — A turn around the x line keeps a line on the wall (`C`, made 2026-11-03 as 10.5, trimmed the same day)
- **File:** `lesson-10-06-spin-around-the-x-line.html` (was `lesson-10-05-spin-around-the-x-line.html`). Contract, page shape and QA: `CURRENT_STATE.md`.
- **History:** split from the square-corner page (learner: “Yes, split in three”, 2026-11-03; that page is `course/archive/lesson-10-05-square-corner-draft-2026-11-03.html`, the source for 10.12 and 10.15, with its reviews in `reviews/lesson-10-05-beginner-review-2026-11-03.md`, “draft-5 #N” below). Its Review 3 (same file) counted 3–4 ideas; with the learner's “Yes, flat wall first” the page stops after its Step 3, and its Steps 4–5 moved to 10.7. The page before the trim is `course/archive/lesson-10-05-spin-draft-2026-11-03.html`.
- **One idea:** the spin is a turn around the x line: by its meaning every point keeps its x and goes round the x line (Gx does not move), so the spin changes only y and height, and the teal line (a straight line on the wall from Gx, 0.953 long: chosen, as far as the tip of N is from Gx, for 10.9) stays on the wall. Traced value: a spin of 90°, Lesson 10.3's quarter turn, takes T from (0, 0.953, 0) to (0, 0, 0.953) from Gx, still 0.302 to the right of S. Two fresh reviews in a row counted “the spin keeps the length” as a second idea, so it moved to 10.7, the lesson that needs it. No kept length (10.8), no circle (10.9), no half turn (10.10), no square corner (10.15), no hinge (10.12).
- **Reviews:** Review 3 in `reviews/lesson-10-05-beginner-review-2026-11-03.md`; the reviews after the trim in `reviews/lesson-10-06-beginner-review-2026-11-03.md`.
- **Exercises (2026-11-07, rule 18):** question and answer at Section 1's camera (the answers opened edge-on), the answer with a “Wall edge-on” button (pitch 6°) and Section 1's view from above; since 2026-11-07 (3) the question shows only the 3D view, with a red marker on what to find. New cases the same day (both asked back Step 3's slider): R, 0.2 to the right of the wall, never reaches it at any spin; the straight line from P to Q, on the wall but not from Gx, is still on the wall after a spin of 90°. Step 3's definition now says “every point it turns” (review 2). Two fresh reviews; `reviews/lesson-10-06-beginner-review-2026-11-07.md`.

- **Fixed 2026-11-04 (learner):** Step 2 names the object its 0.953 ⓘ measures: the dark gray line from Gx to the tip of N, in the caption, the ⓘ and the 3D label.

#### Lesson 10.7 — The wall seen straight on draws its lines at their whole length (`C`, made 2026-11-03)
- **File:** `lesson-10-07-whole-length-seen-straight-on.html`. Contract, page shape and QA: `CURRENT_STATE.md`.
- **Why it exists (two splits the same day, rule 16, without asking):** “Generate lesson 10.7” found that the planned 10.7 (“Half a turn reaches every line on the wall through Gx”) held two ideas, so it became 10.7 “The spin keeps the length: T goes round a circle” and 10.8 the half turn (plan 308). The first fresh review of that page (Review 1 in `reviews/lesson-10-07-beginner-review-2026-11-03.md`) counted three ideas: the wall seen straight on draws a line on the wall at its whole length (the premise, never taught: Lessons 10.4 and 10.5 use that view without saying it keeps lengths), the kept length, and the circle. So it was split again: this premise is 10.7, the kept length 10.8, the circle 10.9, the half turn 10.10; plan 310. The page of the first split is `course/archive/lesson-10-07-spin-length-circle-draft-2026-11-03.html` (deleted 2026-11-04; read it with `git show 91a51c6:liquid-glass-learning-docs/course/archive/lesson-10-07-spin-length-circle-draft-2026-11-03.html`), the source for 10.8 and 10.9.
- **One idea:** the wall seen straight on draws each point at its y (→) and its height (↑), at one scale, and leaves out x (Lesson 10.3, Step 5's side view shows y and height). A line on the wall from Gx has x part 0; it is the long side of its y leg and its height leg (Lesson 10.4), which meet at a square corner (Lesson 10.3, Step 10). The drawing copies both legs at full size and at a square corner, so Lesson 9.1 gives the same long side: the drawn length is the real length. Contrast: N, from S, has an x part (0.302), which the drawing leaves out: N is drawn 0.953 long, not 1; the x leg is drawn as a point.
- **Fixed here from Review 1:** #2 (the angled view's shorter lines cite Lesson 10.6), #3 (label overlaps), #4 (“its end” → seen end-on, as one point), #5 (“full size” defined: one scale, the same number of pixels per arrow unit both ways), #6 (the slanted line needs both square corners and Lesson 9.1), #7 (which ruler).
- **Traced value:** at draggable K, the line from Gx to the tip of N: real length and drawn length, both √(y part² + height part²); N: real length 1, drawn the same √: shorter.
- **Exercises (redrawn 2026-11-07, rule 18):** each question and answer shows Section 1's 3D view and the wall seen straight on (Exercise 1's question had no flat drawing; its answer and Exercise 2's question had no 3D view). After the fresh review one exercise (lines a, b, c replayed Step 5): line d drawn 0.4 with x part 0.3 → 0.5. Since 2026-11-07 (3) the question shows only the 3D view, with a red marker on what to find; the answer keeps the flat drawing.

#### Lesson 10.8 — The spin keeps the length (`C`, made 2026-11-04)
- **File:** `lesson-10-08-the-spin-keeps-the-length.html`. Contract, page shape and QA: `CURRENT_STATE.md`. Reviews: `reviews/lesson-10-08-beginner-review-2026-11-04.md`.
- **From:** the archived page's Steps 1 and 3, Section 2's columns for spin 0° and 90°, and its Exercise 2 (spin 200°).
- **The idea:** Seen straight on, the spin moves every point of the teal line round Gx by the same angle, so the teal line turns as one straight piece around Gx, like the walk of Lesson 10.3 around its start. A turn keeps lengths, and that drawing shows Gx to T at its whole length (10.7), so Gx to T stays 0.953 at every spin.
- **Fix (Review 1 of the archived page):** #8 (say that every point turns by the same angle, so the teal line turns as one straight piece around its start Gx, like Lesson 10.3's walk around P; without it the argument assumes its result); #14 (Exercise 2: start the view where the 200° line looks clearly shorter, or say to drag); #1 (name the corner Lesson 10.15 needs: between the x line and the teal line at Gx, and why it needs the sides of S, Gx, T fixed).
- **Exercises (redrawn 2026-11-07, rule 18):** question and answer each show Section 1's 3D view (Exercise 1 had a view of its own, yaw −40°) and the wall seen straight on (the answers had only it). Replaced after the fresh review (both asked back Steps 3–4): after 140°, T is 0.730 toward the top of the picture from Gx → 0.613 above Gx (the kept 0.953 and Lesson 9.1). Since 2026-11-07 (3) the question shows only the 3D view, with a red marker on what to find; the answer keeps the flat drawing.

#### Lesson 10.9 — T goes round a circle through the tip of N (`C`, made 2026-11-04)
- **File:** `lesson-10-09-t-goes-round-a-circle.html`. Contract, page shape and QA: `CURRENT_STATE.md`. Reviews: `reviews/lesson-10-09-beginner-review-2026-11-04.md`.
- **From:** the archived page's Steps 4–5, Section 2's column at the tip of N, and its Exercise 1 (points a, b and c).
- **The idea:** T stays on the wall (10.6) and 0.953 from Gx (10.8), so its path is the circle of wall points 0.953 from Gx (Lesson 9.2); a full turn passes every point of it. The tip of N is on the wall and 0.953 from Gx, so one spin (about 65°) brings T there.
- **Fix (Review 1 of the archived page):** #9 (the screen's line in the straight-on drawing: Gx has S's height, 0.0866 UV, so at this arrow ruler the screen is 0.0866 ÷ 0.15 = 0.577 below Gx; label that distance and say the dip below the screen depends on the arrow ruler); #10 (65°, 25°, 115° are read off the slider, not computed: draw the angle arc with its value); #11 (why the teal line along Gx to the tip of N matters: Lesson 10.16's foot uses that line); #12 (name both 0.302s in the x-part row); #13 (say why points a and c lie on one line through Gx, and draw it).
- **Exercises (redrawn 2026-11-07, rule 18):** question and answer each show Section 1's 3D view and the wall seen straight on; Exercise 2's answer opens at Section 1's camera with a “Wall edge-on” button. Points a, b, c → b; point d (0.953 from Gx, off the wall) → no. Since 2026-11-07 (3) the question shows only the 3D view, with a red marker on what to find; the answer keeps the flat drawing.

#### Lesson 10.10 — Half a turn sends T to the opposite point (`C`, made 2026-11-04; text rewritten 2026-11-05, `AGENTS.md` Rule 0)
- **File:** `lesson-10-10-half-a-turn-to-the-opposite-point.html`. Contract, page shape and QA: `CURRENT_STATE.md`. Reviews: `reviews/lesson-10-10-beginner-review-2026-11-04.md`.
- **Why it exists (split at once, rule 16, 2026-11-04):** the first page “Half a turn reaches every line on the wall through Gx” held two ideas (its fresh review): half a turn takes T to the opposite point (two quarter turns), and one of the two spins is always in the first half turn. This lesson is the first; 10.11 the second; plan 310 → 311.
- **The idea:** a quarter turn takes (y part, height part) to (minus the height part, the y part) (Lesson 10.3, Steps 6–7); 90° more spin is a quarter turn wherever T is (Lesson 10.8). Twice: both parts get a minus. So half a turn takes T from the tip of N to the opposite point (0, −0.402, −0.864) from Gx, on line n (the whole line through Gx and the tip of N), 0.953 from Gx. So the teal line lies along line n at about 65° and about 245°, and along every line through Gx at two spins 180° apart.
- **Names:** line n (indigo), lies along (every point of the teal line on the line), the opposite point. Exercises (redrawn 2026-11-07, rule 18: Section 1's 3D view and the wall seen straight on, question and answer): line a at 40° → 220° (distractors 200°, 240°); T at (0, −0.5, 0.811) after half a turn → (0, 0.5, −0.811) (the tip-of-N case was Section 1, Step 2). Since 2026-11-07 (3) the question shows only the 3D view, with a red marker on what to find; the answer keeps the flat drawing.

#### Lesson 10.11 — Spins from 0° to 180° reach every line through Gx (`C`, made 2026-11-04; text rewritten 2026-11-05, `AGENTS.md` Rule 0)
- **File:** `lesson-10-11-half-a-turn-reaches-every-line.html`. Contract, page shape and QA: `CURRENT_STATE.md`. Reviews: `reviews/lesson-10-11-beginner-review-2026-11-04.md`.
- **The idea:** the first half turn (spins 0° to 180°) passes every point of T's circle up from Gx (height part plus) or level with it; a line's two opposite points have opposite height parts, so one is up, or both are level; so spins from 0° to 180° lay the teal line along every line on the wall through Gx. At every K the tip of N is up (N's height part = 1 ÷ normalLength, plus), so line n's spin is in the first half turn.
- **Names:** the first half turn (wide pale band), the level line through Gx (black), point P and line p (magenta, P draggable in both pictures). Exercises (redrawn 2026-11-07, rule 18: Section 1's 3D view and the wall seen straight on, question and answer): line a at 320° → 140° (distractors 160°, none); the level-line exercise was cut by the fresh review (Section 1 shows it). Since 2026-11-07 (3) the question shows only the 3D view, with a red marker on what to find; the answer keeps the flat drawing.

#### Lesson 10.12 — A wider angle at Gx puts T farther from S (`C`, made 2026-11-04; text rewritten 2026-11-05, `AGENTS.md` Rule 0)
- **File:** `lesson-10-12-hinge-fixes-the-corner.html`. Contract, page shape and QA: `CURRENT_STATE.md`. Reviews: `reviews/lesson-10-12-beginner-review-2026-11-04.md`.
- **From:** the 10.5 draft's Step 4 tooltip “Why the corner cannot change”; draft-5 review 2 #9 (draw it).
- **The idea:** two sticks joined at a hinge, drawn flat: opening the corner moves the free ends apart, closing it brings them together. So with both sides and the distance between the ends fixed, the corner is fixed. On the glass at K: S to Gx 0.302 and Gx to T 0.953 with S to T 1.000.
- **Fix:** draw the corner opened and closed with S to T printed longer and shorter; “the same triangle” is stronger than the hinge shows (draft-5 review 2 #14): say only that the corner cannot change.
- **Exercises (redrawn 2026-11-07, rule 18):** Section 1's 3D view and the view from above, question and answer. After the fresh review one exercise (the K case asked back Step 2; the spin case needed Lesson 10.14): at W = (0.71, 0.50), |ST| = 0.719 → ∠SGxT less than 90° (60°). Since 2026-11-07 (3) the question shows only the 3D view, with a red marker on what to find; the answer keeps the flat drawing.

#### Lesson 10.13 — Any three points lie on one flat sheet (`C`, made 2026-11-04; text rewritten 2026-11-05, `AGENTS.md` Rule 0)
- **File:** `lesson-10-13-any-three-points-one-sheet.html`. Contract, page shape and QA: `CURRENT_STATE.md`. Reviews: `reviews/lesson-10-13-beginner-review-2026-11-04.md`.
- **Why it exists (split at once, rule 16, 2026-11-04):** the planned 10.13 “Three fixed lengths fix the corner in any position” was made as one page; its first fresh review counted three ideas (any three points lie on one flat sheet; a tilted sheet seen straight on shows whole lengths; the hinge on that sheet). Split: this lesson is the first; the hinge on the sheet is 10.14, which uses the straight-on drawing only as a picture (10.7's view in a new place); plan 312 → 313. The pre-split page stayed untracked and was rewritten as 10.14 (no git copy).
- **The idea:** the door, a straight line on the wall through Gx slid along the x line (a flat sheet through the x line, without end), holds S and Gx at every turn; seen straight on the wall it is one line through Gx, and every point drawn on that line is on it; from 0° to 180° that line passes every direction (Lesson 10.11), so the door reaches every point off the x line. At 120° it holds T (door and spin both start level toward the bottom of the picture). So any three points lie on one flat sheet.
- **Traced value:** at draggable K, the door that holds S, Gx and the tip of N, turned about 65° (the tip's spin, read off).
- **Cut by the second review:** Exercise 2 (four points; only one door holds T) counted as a borderline second idea (uniqueness); removed, with “a fourth point need not” in the plan and the hub.
- **Exercise (redrawn 2026-11-07, rule 18):** Section 1's 3D view with Q and the walk from S to Q, plus the wall seen straight on; since the fresh reviews it asks which turn of the door holds S, Gx and Q (about 149°; distractors about 31° and none), draws the wall in the question and says why Q's 0.298 off the wall does not matter. Since 2026-11-07 (3) the question shows only the 3D view, with a red marker on what to find; the answer keeps the flat drawing.

#### Lesson 10.14 — Three fixed lengths fix the angle, tilted too (`C`, made 2026-11-04; text rewritten 2026-11-05, `AGENTS.md` Rule 0)
- **File:** `lesson-10-14-three-lengths-fix-the-corner.html`. Contract, page shape and QA: `CURRENT_STATE.md`. Reviews: `reviews/lesson-10-14-beginner-review-2026-11-04.md`.
- **The idea:** the test line (a copy of the teal line, end T′) turns on the tilted triangle's own sheet around Gx: Lesson 10.12's hinge there. S to T′ from T′'s measured parts (shadow first) is 1.000 only at 90° (chart; the dots equal Lesson 10.12's up to 0.001 at 60° and 75°); T lies on T′'s path and is 1.000 from S, so the corner at Gx is 90°.
- **Do not:** use the spin's own square corner (10.15's result). The sheet seen straight on was removed by the second review (it showed the square corner before the argument); “any position” rests on one everyday sentence (a tilted sheet of paper keeps its drawing), checked by the chart.
- **Exercise (replaced 2026-11-07, rule 18; the old one asked back Section 1's conclusion in a flattened 3D copy):** moved to W by the fresh review: |SGx| 0.605, teal line 0.796, the test line at 85°, drawn 100° wide in Section 1's 3D view, |ST′| = 0.957 → narrower than 90°; the drawn 100° comes from the slanted view. Since 2026-11-07 (3) the question shows only the 3D view, with “∠SGxT′: wider than 90°?” in red, and its text gives the faint amber segment ST, at 90°, as 1.000 long; the chart for W is in the answer only.

#### Lesson 10.15 — The x line is at 90° to every line on the wall through Gx (`C`, made 2026-11-04; text rewritten 2026-11-05, `AGENTS.md` Rule 0)
- **File:** `lesson-10-15-a-line-through-a-wall.html`. Contract, page shape and QA: `CURRENT_STATE.md`. Reviews: `reviews/lesson-10-15-beginner-review-2026-11-04.md`. Made from the plan below, in 4 steps (Steps 3 and 4 of the plan merged into Step 3), with Lesson 10.7, Step 5's rule for S to T at every spin.
- **From:** the 10.5 draft's Steps 2, 4 and 5, its Section 2 table (the triangle at spin 0° against the triangle when T is at the tip of N) and Exercise 2 (spin 150°: the corner is still 90°).
- **The idea:** the teal line starts along y, square to the x line; the spin (10.6) keeps S to Gx 0.302, Gx to T 0.953 and S to T 1.000 (Lesson 10.3's three-part length: x part 0.302, y part² + height part² = 0.9081), so the corner at Gx stays square (10.12); every line on the wall through Gx is the teal line at some spin from 0° to 180° (10.11). Answers Lesson 10.3, Step 8 for the x line and this wall (y and height square to each other).
- **Fix:** the title's scope (the x line goes along x, the one direction in which the wall's points agree); with N's x part 0 another point of the x line replaces S; Step 1 labels.
- **Traced value:** the line from Gx to the tip of N, the last position of the spin.
- **Exercise (redrawn 2026-11-07, rule 18):** lines a, b, c on the wall from Gx → all three at 90° to the x line. Since 2026-11-07 (3) the question shows only Section 1's 3D view, with a red marker on what to find; the answer keeps the wall seen straight on.
- **Plan drafted on 2026-11-04 (not shipped: the two splits of that day moved this lesson to 10.15):** Step 4 cites Lesson 10.12 (the hinge, on the level) and Lesson 10.13 (in any position); a ⓘ in Section 2 says why the tip of N is up at every K (N's height part = 1 ÷ normalLength, plus; moved out of 10.11 by its second review). 5 steps, spin slider 0°–180° (Lesson 10.11). 1 the x line through the wall at Gx, the dark gray line, “corner?” at Gx · 2 spin 0°: square corner (x along x, teal along y) and the triangle S, Gx, T, sides 0.302, 0.953, 1.000 (view from above, Lesson 10.12) · 3 the spin keeps all three sides: S and Gx are on the x line; Gx to T 0.953 (10.8); from S, T keeps x part 0.302 (on the wall) and the teal line's y part and height part, so S to T² = 0.091204 + 0.953 × 0.953 = 0.999413 at every spin (wall seen straight on beside it) · 4 so the corner stays square: Lesson 10.12's chart for these sides, 1.000 only at 90°; a slanted 3D view may draw the corner wider or narrower · 5 every line on the wall through Gx (10.11) is square to the x line; the button T to the tip of N; why the x line (it goes along x, the one direction in which the wall's points agree). Section 2: the triangle at spin 0° against T at the tip of N, where S to T is N itself (0.252808 + 0.746496 = 0.999304, against 0.999413 from the rounded 0.953: both 1.000), with 10.12's chart at this K; with N's x part 0, another point of the x line replaces S. Exercise (redrawn 2026-11-07, rule 18: Section 1's 3D view and the wall seen straight on, question and answer; one exercise after the fresh review, the spin cases asked back “90° at every spin”): lines a (0, −0.4, 0.2), b (0, 0.3, −0.5), c (0, 0, 0.8) from Gx, all on the wall, of different lengths → all three at 90° to the x line.

#### Lesson 10.16 — N's x part is the foot of the perpendicular on the x line (`C`, made 2026-11-04; text rewritten 2026-11-05, `AGENTS.md` Rule 0)
- **File:** `lesson-10-16-arrow-part-on-an-axis.html`. Contract, page shape and QA: `CURRENT_STATE.md`. Reviews: `reviews/lesson-10-16-beginner-review-2026-11-04.md`. The flat picture is the sheet that holds S, Gx and the tip of N (Lesson 10.13's traced value) seen straight on; it shows whole lengths because its two directions, along x and along the dark gray line, meet at a square corner (Lesson 10.15), as in Lesson 10.7.
- **From:** the draft's Step 5 (the three lines), Section 2 (three feet, draggable K) and its exercises.
- **The idea:** the line from the tip of N to Gx lies on the wall (10.5, its traced value), so it meets the x line at a square corner (10.15). So N's x part is the reading at the foot. Since its second review (2026-11-04) this page has the x line only: “the legs in any order” for y and height was counted as a second idea and split off as 10.17; on 2026-11-06 that page was split again: 10.17 any order, 10.18 the feet on y and height.
- **Fix:**
  - draft #17 (blocks): the method without walking: move a point along the x line until the line from the tip of N makes a square corner (a slider);
  - draft #18: one foot: the tip, Gx and another point form a right triangle with its one square corner at Gx;
  - draft #2, #16 (the ruler's reading, plus or minus by side), #22, #23 (a wall: all points at one reading on a line; label each wall), #24, #25 (“at a square corner” in each question), #26, #27, #29;
  - draft #28: N at K₂ gets its own ⓘ chain; no mirror rule;
  - no plane: the flat picture is the triangle S, Gx, tip of N, seen straight on (draft #21's 0.953 labelled as “away from the x line, not height”).
- **Traced value:** the foot on the x line at 0.302 from S (−0.302 at M), with draggable K.
- **Exercise, new:** where the line from the tip of N, at a square corner to the height line, meets it (0.864), at a pixel other than K (draft #27).
- **Exercise (redrawn 2026-11-07, rule 18):** at M = (0.38, 0.34) the foot on the x line → −0.302, drawn with Section 1's 3D view at M and the sheet seen straight on (the old one was a 2D view from above). Since 2026-11-07 (3) the question shows only the 3D view, with a red marker on what to find; the answer keeps the flat drawing.

#### Lesson 10.17 — Every order of the legs ends at the tip of N (`C`, made 2026-11-06)
- **File:** `lesson-10-17-every-order-ends-at-the-tip.html`. Contract, page shape and QA: `CURRENT_STATE.md`. Reviews: `reviews/lesson-10-17-beginner-review-2026-11-06.md`.
- **Why it exists (split at once, rule 16, 2026-11-06):** the planned 10.17 “The legs in any order: the feet on y and height” was made as one page; its first fresh review counted two ideas (any order; the feet on the y line and the height line). This page keeps the first; the feet are 10.18. The split's source page was never committed (it was built and split the same day), so there is no git copy.
- **The idea:** each leg changes only its own number (Lesson 10.4), so in any order each number is changed once, by its own leg: all six orders end at the tip of N.
- **Traced value:** the stops of the order picked in Section 1, at a draggable K.

#### Lesson 10.18 — The feet on the y line and the height line (`C`, made 2026-11-06)
- **File:** `lesson-10-18-feet-on-y-and-height.html`. Contract, page shape and QA: `CURRENT_STATE.md`. Reviews: `reviews/lesson-10-18-beginner-review-2026-11-06.md`.
- **The idea:** walked first (10.17), the y leg ends at Gy, 0.402 on the y line; the other legs leave y as it is, so the rest of the walk stays on the wall 0.402 toward the bottom of the picture from S (Lesson 10.5). The line from Gy to the tip lies on that wall. The triangle S, Gy, tip has sides 0.402, √0.8377 (the x leg and the height leg at 90°, Lesson 9.1) and 1; with 90° at Gy, Lesson 9.1 gives √(0.161604 + 0.8377) = √0.999304 = 1.000, and a wider or narrower angle gives a longer or shorter side (Lessons 10.12–10.14), so the angle is 90°: the foot reads 0.402. The same for height: the level sheet 0.864 up, sides 0.864, √0.252808 and 1.
- **Folded in:** the 10.16 review items #8 (the reused fact is named), #9 (the y-first walk, the y wall, the level sheet), #10 (plus sides of the y ruler and the height ruler), #13, #14 (Exercise 1's labels). The first review of the pre-split page asked for the 90° reason from the three lengths instead of “Lesson 10.15 with y in place of x”: done.
- **Traced value:** the three feet at a draggable K. **Exercise (redrawn 2026-11-07, rule 18; replaced after the fresh review, the height line at W repeated Section 1):** at W = (0.71, 0.50) N's y part is 0, so the foot on the y line is S, reading 0; Section 1's 3D view with the y line, and its sheet drawing. Since 2026-11-07 (3) the question shows only the 3D view, with a red marker on what to find; the answer keeps the flat drawing.

#### Lesson 10.19 — How far an arrow goes along any line (`C`, made 2026-11-06 as 10.18, renumbered by the split)
- **File:** `lesson-10-19-how-far-along-any-line.html`. Contract, page shape and QA: `CURRENT_STATE.md`. Reviews: `reviews/lesson-10-19-beginner-review-2026-11-06.md`, `reviews/lesson-10-19-beginner-review-2026-11-07.md` (the 2026-11-07 rewrite and the 10.20 exercise).
- **From:** the old page's Step 3; `drawNLPlane` with its plus side only (rebuilt: the gold sheet that holds L's line and the tip of N, drawn in 3D and seen straight on).
- **Folded in:** #7 (the question of Lesson 10.16, now along L's line); #2 and draft #19–#21 (the sheet: Lesson 10.13's three points S, the tip of L, the tip of N; L's line stays on it, Lesson 10.5); #21 (“arrow units: 1 = the length of L” where a reading is printed).
- **L appears here first.** L = (0.48, −0.60, 0.64), 1 long (its ⓘ: shadow first, and why 1 long: then L's ruler counts arrow units). Lessons 10.4–10.18 do not use it.
- **Traced value:** with L along x, along y and straight up, F reads 0.302, 0.402 and 0.864 (Lessons 10.16 and 10.18). With the lesson's L, the page finds F at 0.45672 and prints 0.457 (to 3 decimals); 10.30 computes it from the parts. **Exercise (since 2026-11-07):** L₂ meets N at 90° at S → F is at S, dot(N, L₂) = 0, drawn with Section 1's 3D view and, in the answer only since 2026-11-07 (3), the gold sheet drawing; the question marks “how far does N go along L₂?” in red (the old L₂ = (0, 0.6, 0.8), “about 0.93”, was a flat drawing of a case never shown in 3D, read between ruler ticks). **Rewrite 2026-11-07:** text line by line, F always drawn, Section 2's four rulers → the sheet drawing (`FEEDBACK_LOG.md`).

#### Lesson 10.20 — The minus side of L's ruler (`C`, made 2026-11-06 as 10.19, renumbered by the split)
- **File:** `lesson-10-20-the-minus-side.html`. Contract, page shape and QA: `CURRENT_STATE.md`. Reviews: `reviews/lesson-10-20-beginner-review-2026-11-06.md`.
- **From:** the old page's Step 3 plus side and minus side; card 5.
- **Folded in:** #29 (minus: F, and the tip of N with it, is on the side of S that L does not point to; the sheet picture shades the two halves); card 5 (L turned so that F is on the minus side: Lesson 10.19's L turned the other way reads −0.457).
- **Traced value:** with L along minus x, the line from the tip still meets the x line at Gx, but L's ruler reads Gx as −0.302 (Section 2: one line, two rulers). **Exercise:** at W, L straight down: “What is dot(N, L)?” → −0.796 (distractors 0.796 and −1); since 2026-11-07 drawn as Section 1 (3D view at W and the green/red sheet drawing), not as a front view. Since 2026-11-07 (3) the question shows only the 3D view, with a red marker on what to find; the answer keeps the flat drawing.

#### Lesson 10.21 — Same direction 1, opposite −1 (`C`)
- **File:** `lesson-10-21-same-direction-1-opposite-minus-1.html`.
- **From:** Step 4 with the buttons Same direction and Opposite.
- **Fix:** #8: as L turns toward N, the tip of N comes closer to L's line, so F slides toward the tip.
- **Fold in:** card 4: F is where the line from the tip meets L's line; when L's line runs through the tip, F is the tip.

#### Lesson 10.22 — A square corner gives 0 (`C`)
- **File:** `lesson-10-22-a-square-corner-gives-0.html`.
- **From:** Step 4 with the button A square corner with N.
- **Fix:**
  - #9: at a square corner, N itself is the line from its tip at a square corner to L's line, so F is at S. Draw the corner mark; keep the S and F labels apart;
  - #26: the other way round: 0 means F is at S, so N stands at a square corner to L's line.

#### Lesson 10.23 — Never past 1 (`C`)
- **File:** `lesson-10-23-never-past-1.html`.
- **From:** Step 4's caption `ⓘ`.
- **Fix:** #10: 1² = SF² + (F to tip)² (Lesson 9.1), so SF is at most 1. The cos name of Lesson 4.9 gets its own `ⓘ`, or goes.
- **Exercise:** “Can dot(N, L) be 1.2?” No: S to F is a shorter side of a right triangle whose long side is 1.

#### Lesson 10.24 — A walk's legs each move F (`C`)
- **File:** `lesson-10-24-each-leg-moves-f.html`.
- **From:** Step 5.
- **Fix:**
  - #11: we draw these lines only to find a rule; 10.26–10.30 turn each move into a multiplication the GPU can do;
  - #12: define once: a leg “moves F” when the meeting point goes from one F to the next, F₁ → F₂ → F₃.

#### Lesson 10.25 — A leg's start does not matter (`C`)
- **File:** `lesson-10-25-a-legs-start.html`.
- **From:** Step 8's copy of a leg from S.
- **Fix:** #16: flat walls at a square corner to L's line, one per ruler mark (Lesson 10.4's wall, now across L's line). The same leg crosses the same walls wherever it starts.
- **Picture:** both moves side by side, with their ruler readings. Use the height leg: F₂ at −0.09624 → F₃ at 0.45672, and its copy from S; both move 0.55296. It is a plus move; the y leg's minus move waits for 10.29.

#### Lesson 10.26 — A flip keeps lengths and square corners (`C`)
- **File:** `lesson-10-26-a-flip-keeps-lengths.html`.
- **From:** Step 6's gray halfway line and flip slider.
- **Fix:** #14, first half:
  - why the flip over the halfway line swaps the x line and L's line: the halfway line makes the same angle with both;
  - why it keeps S: S is on the flip line;
  - why it keeps lengths and square corners: fold the picture along the line; nothing stretches.
- **Fold in:** card 6's first bullets.

#### Lesson 10.27 — A walk of 1 along x lands at L's x part (`C`)
- **File:** `lesson-10-27-walk-of-1-along-x.html`.
- **From:** Step 6.
- **Fix:**
  - #13: name both triangles before “both”: the lime triangle S, X, J (square corner at J) and the yellow triangle S, tip of L, Q (square corner at Q);
  - #14, second half: the flip takes X (1 along x) onto the tip of L (1 along L), and Q's square corner onto J's.
- **Fold in:** card 6: three facts make the triangles match: the shared angle at S (the arc), a square corner, a long side of 1.
- **The result:** Q is at 0.48 along x (Lesson 10.16), so J is at 0.48 along L's line.

#### Lesson 10.28 — Growing scales every side (`C`)
- **File:** `lesson-10-28-growing-scales-every-side.html`.
- **From:** Step 7.
- **Fix:** #15 (blocks) and #30. The chain, each with its reason on the page:
  - growing from S by 1 ÷ 0.302 multiplies every distance from S by one number;
  - a point on a line through S stays on that line, so the angle at S stays;
  - the line from X to J moves to a line in the same direction, so the square corner stays;
  - so the small triangle lands on the big one, and every side is multiplied by that number, the move along L's line too: 0.302 × 0.48 = 0.14496.

#### Lesson 10.29 — A part that points away: the minus case (`C`)
- **File:** `lesson-10-29-the-minus-case.html`.
- **From:** Step 8's y part.
- **Fix:**
  - #17: its own gray halfway line and flip slider. The two triangles lie on opposite sides of S; Q at −0.60 lands on J at −0.60;
  - #4: mark “right” and “toward the top of the picture” on the flat picture.
- **The result:** 0.402 × (−0.60) = −0.2412.

#### Lesson 10.30 — The dot product formula (`C`)
- **File:** `lesson-10-30-dot-product-formula.html`.
- **From:** Steps 9–10; Section 3's code line; Exercise 3 (b at W).
- **Fix:**
  - #18: “no corner between the arrows (no angle)”;
  - #27: “Counted along the line of b from H”.
- **Code:** `dotNL = N.x * L.x + N.y * L.y + N.z * L.z`, with its line table.
- **Traced value:** the chain at K above. Lesson 10.19's “about 0.46” is now exact.
- **Exercise 3:** uses 10.22's “0 means a square corner”: b = (0.796, 0, −0.605) at W, 0.48158 + 0 + (−0.48158) = 0.

#### Lesson 10.31 — One light direction for every pixel: the dot map (`C`)
- **File:** `lesson-10-31-dot-map.html`.
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

#### Lesson 10.32 — Build: the dot product in Metal (`B`)
- **File:** `lesson-10-32-build-dot-product-in-metal.html`.
- **Joins:** 10.4–10.31. One recall line per joined lesson, each with its `ⓘ`.
- **From:**
  - Section 3 (the code excerpt);
  - Section 4: the challenge “write the dotNL line” becomes the first function of the Metal exercise; no browser challenge;
  - Section 6 (the Metal exercise) and Section 7 (the record);
  - the iOS files `chapter10/DotExplorer.swift`, `DotMap.metal`, `DotExercise.metal`, `DotExerciseKey.metal`, `DotExerciseView.swift` (relabelled in Phase 6 of the curriculum revision).

#### Later in Chapter 10
- Exercise 4 (rawNormal against N at W and V) moves to 10.36, “Why N must be 1 long”, with #28: from W to V the x product gains 0.456 − 0.2904 = 0.1656, but the height product loses 0.509 − 0.202 = 0.307, so the number drops from 0.7994 to 0.658.

## Side lesson — Safari shortcut, Section 4 revised 2026-10-26

The learner found the push ratio, the constant 24 and the exact-fold modal hard to follow. Section 4 now uses one 15-step visual workspace with new wording and original SVG/canvas figures. The rendering formulas are unchanged:

```text
push = edgePush × (1 − h ÷ bevel)
read = inside + push
fold inside = bevel − bevel² ÷ √(bevel² + edgePush²)
optional check = read(inside + 0.001) − read(inside)
```

`bevel = 28` is the rim width, rim-circle radius and flat-top height. `edgePush = 24` is a recording-matched dial, not a material constant. Two matched 28-part rulers show why a 1 pt height increment removes `24 ÷ 28 = 0.857143` pt of push. The balance climb is computed from the original integers as `28 ÷ 24 = 1.166667`. After the learner preferred the exact form, Step 7 derives `fold inside = bevel − bevel² ÷ √(bevel² + edgePush²)` from `leg ÷ h = bevel ÷ edgePush` and `leg² + h² = bevel²`. The radius/tangent picture explains the ratio. Substitution gives `28 − 784 ÷ √1360 = 6.740815`, reading `15.121822`. The two direction checks at `6.740` and `6.741` confirm the answer rather than replacing the derivation. The second read of 24 is also exact: `2 × 28 × 24² ÷ 1360 = 23.717647`. After the Step 11 feedback, Section 4 uses original picture, upside-down copy, original-order copy, pixel row, top of the glass and output height instead of the previous shorthand. Step 11 now proves the bend with two consecutive moves: original-order down 1.653262 then 1.499593 gives `right ÷ down = 0.302432` then `0.333424`; upside-down up 0.500320 then 0.346653 gives `right ÷ up = 0.999360` then `1.442365`. The original line’s constant `0.5 ÷ 1 = 0.5` keeps it straight. Step 11 (rebuilt 2026-10-27) draws the output on top and the test A straight below it at one scale (10 px per pt), because a read moves only down (R’s row = P’s row + push); dragging or clicking any point R of the A, or any output pixel P, draws arrows straight down from every output pixel to the R it reads, and everything follows the pointer live. The two-move column is ordered like the pictures (upside-down copy, original-order copy, original A). A chooser shows R18–R20 or points evenly spaced along the whole A with all arrows; a ×6 strip keeps the crowded upside-down P's apart; the side box checks the selected point's chain at 9 decimals. The A is symmetric, its crossbar joins both legs. `AGENTS.md` rule 6 stacks read pictures the way the read really moves; rule 10 makes every point of a projection picture draggable and covers evenly spaced all-points views and the enlarged inset for crowded points. Other steps preserve unequal copy heights, letter rows, ramp comparison, other edgePush values, rounded corners and the recording.

Failure → prevention: `FEEDBACK_LOG.md`, 2026-10-26 → `AGENTS.md` rules 3 (visible-role names), 10 (crowded-point insets and persistent calculations), 12 (matched scales and calculator-exact inputs) and 15 (exact forms first; consecutive moves and ratios as bend proof). QA: 738 states, 4,110 calculations, 0 arithmetic problems; all controls and marked points checked at desktop sizes. No iOS files changed. The Safari side lesson remains outside the 310-lesson plan.

## Future conversation

Paste `NEW_CHAT_PROMPT.md`, then in the same message name generate or questions. Use the curriculum for lesson order and this file for teaching contracts. Report completion only in chat when generating a new lesson.

Standing delivery: no ZIP archives; new `#Preview` stacks light then dark. Details in `USER_PREFERENCES.md`.
