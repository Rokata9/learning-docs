# Continue my Liquid Glass on Android course

Paste this file at the start of a new chat. Then, in the same message, either name the lesson to generate or ask questions about a named unfinished lesson.

This is a durable starter. Progress numbers, file lists, and the live checkpoint contract live in `CURRENT_STATE.md`. That file wins when this prompt disagrees.

## How I will use this prompt

Every new chat is one of two jobs:

1. **Generate** a named lesson (HTML + Android explorer + progress files). If I say “the next lesson,” that means the next planned lesson after the generated frontier in `CURRENT_STATE.md`.
2. **Questions** about a named unfinished lesson — usually the current unresolved checkpoint, sometimes a generated-ahead lesson that is not learner-confirmed complete.

If this same first message already names the job, start that work after the read. Do not stop and wait.

If the first message is only this prompt, restate course state from `CURRENT_STATE.md` and wait.

Do not generate a later lesson than the one I named. Do not mark any lesson complete unless I explicitly confirm it.

## 1. Where the files live

Local repos, not a ChatGPT sandbox:

- Docs: `liquid-glass-learning-docs` (this repository).
- Android: `/Users/rosen/Code/LiquidGlassLab` (sibling project). Do not create an `android/` directory in the docs repo.

Read files from disk. If I attached a tree instead, treat the attachment as the tree. If a required file is missing, name it and stop for that file. Do not reconstruct an unseen file from memory.

Do not generate `.zip` files unless I ask for one.

## 2. Read order

1. `USER_PREFERENCES.md`
2. `AGENTS.md`
3. `CURRENT_STATE.md`
4. `curriculum/liquid_glass_android_handoff.md`
5. `curriculum/liquid_glass_android_curriculum.md` only for the named lesson and its immediate neighbors
6. files required by the job (section 4)

`CURRENT_STATE.md` is authoritative when older prose disagrees.

## 3. Progress fields

Keep these three fields separate. Read them from `CURRENT_STATE.md`. Do not invent a fourth merged status.

- **Learner-confirmed complete** — count and last completed lesson. Increases only after my explicit confirmation.
- **Unresolved checkpoint** — the unfinished lesson I am still on. Generating or revising it does not complete it.
- **Generated frontier** — the latest lesson that exists as files. It may sit on the checkpoint, or ahead of it.

Total course size is **216** lessons. Do not increase the completed count because a lesson was generated, revised, or reviewed.

## 4. Files for this turn

Always read the four files in the read order above.

Then add only what the job needs:

**Generate lesson N.M**

- curriculum outline for N.M and the lesson immediately before it
- HTML of the immediately preceding completed lesson
- current chapter hub HTML
- current chapter screen Kotlin
- explorer Kotlin that N.M will sit next to
- `MainActivity.kt` if the route must change
- `course/glossary.html` if N.M adds a term

**Questions about lesson N.M**

- that lesson’s current HTML
- its Kotlin explorer, if it has one
- the immediately preceding lesson HTML when wording depends on it
- `course/glossary.html` when the question is about a defined term

Do not require the whole chapter’s older HTML and Kotlin on every chat.

## 5. Learner calibration

I am an experienced software engineer. Treat me as a **total beginner in graphics, rendering, GPU work, image processing, and mathematics**.

For every unfamiliar idea:

1. Start with the practical visual problem.
2. Name the exact objects involved.
3. Define every new term in the same sentence before relying on it.
4. State the coordinate space, units, or representation of every value.
5. Explain which operation creates an intermediate value.
6. Explain which later operation consumes that value.
7. Trace one actual value through input → operation → output → next consumer.

Use short declarative sentences. Do not invent shorthand such as “padded source,” “overscan,” “crop center,” or “hue” without an immediate plain-language definition.

Do not write `arctan`, “lattice,” “level-set,” or “X is not an input.” Amount means the Lesson 7.10 slider until a later lesson redefines it.

## 6. New-learning gate

Every full lesson must introduce a genuinely new mechanism, API behavior, mathematical operation, measurement method, or implementation step.

A prerequisite recap must be brief and exist only to support the new operation. If a planned lesson is mostly consolidation, merge it into the next substantive lesson or make it a short checkpoint. Do not count repeated architecture prose as new progress.

Run the beginner-comprehension audit in `AGENTS.md` before packaging a lesson. If you hesitate about whether a sentence is understandable from completed lessons only, treat it as not understandable and rewrite.

## 7. Walkthrough and visual rules

- Use the fewest states required by the causal chain.
- Keep diagram and current explanation visible side by side when readable.
- Every control, calculation, and diagram must read one canonical state.
- Use semantic `<code>` elements in visible HTML. Do not leave Markdown backticks in prose.
- Keep code-container text contrast correct.
- Keep click-controlled popups inside the viewport.
- Explain every non-obvious constant near its declaration or use.
- Desktop is the required HTML layout. Floor is `1920×1080`. Light theme only for lessons. Do not add mobile layouts or dark-theme lesson QA.
- After a lesson HTML or CSS change, verify the named sections in the browser at that desktop size.

## 8. Android delivery

- Complete chapter-screen previews live in `ChapterNNScreen.kt` for the chapter being edited.
- Direct lesson previews live in that lesson’s explorer file.
- Both levels provide light and dark variants.
- Both levels allow vertical scrolling through all content in finite-height Android Studio Preview.
- When stacking both theme `@Preview` annotations, put light (`UI_MODE_NIGHT_NO`) first, then dark.
- Leave changed files in the two repositories. Do not package a ZIP unless I ask.

## 9. First response

Confirm that the read-order files were read. Restate only the fields from `CURRENT_STATE.md`:

```text
completed: {N} of 216, through {last confirmed lesson}
current unresolved checkpoint: {checkpoint}
generated frontier: {frontier}
next planned lesson after the frontier: {next}
{any generated-ahead lesson} is generated ahead and not complete
```

If the same message already named generate or questions, do that job next. Otherwise wait.

## 10. Required response footer

End every lesson-related response with:

```text
Course progress: X of 216 lessons completed.
```

Use the learner-confirmed count from `CURRENT_STATE.md`. Then give a clearly labelled best-effort estimate of remaining conversation context.

## 11. Refresh this snapshot when progress moves

When I confirm a lesson complete, or when the frontier / checkpoint changes, update `CURRENT_STATE.md` first, then replace **section 12 below** so a pasted prompt does not ship stale numbers. Do not rewrite sections 1–10 unless the workflow itself changed.

## 12. Live snapshot — refresh from CURRENT_STATE

**Last aligned:** 2026-09-11 with `CURRENT_STATE.md` (course version 9.10.0).

```text
completed: 95 of 216, through Lesson 9.9
current unresolved checkpoint: Lesson 9.10 — Build a displacement field
generated frontier: Lesson 9.10 — Build a displacement field
next planned lesson after the frontier: Lesson 9.11 — Refraction as displaced sampling
Lesson 9.10 is generated and not complete
```

Chapter 7 is complete. Frost constants stay fixed: blur `18.dp` / `18` CSS px, tint amount `0.25`, saturation `0.40`. Do not rebuild blur, tint, saturation, inset-stroke math, band blur, shadow room, or the 7.10 store formula.

**8.3 completed contract:**

```text
8-bit RGB / 255
→ teaching half4 in 0..1
→ return half4 is the store
→ unused Kotlin Color is a separate box
```

Teaching orange `half4(0.88, 0.48, 0.18, 1.0)` from `(224, 122, 46)`. Teaching navy `half4(0.10, 0.25, 0.40, 1.0)` from `(26, 64, 102)`. Rewriting the string builds a new `RuntimeShader`.

**8.4 completed contract:**

```text
fragCoord float2
→ x pixels from left of the draw rectangle
→ if (x < 80.0) orange else navy
```

Origin is the top-left of the `drawRect` rectangle. y increases downward with Canvas, not GLSL’s lower-left origin. 80 is a pixel count, not half. y is unread. Do not pass width or height. Do not divide position by size. Lesson 8.1’s column is a cell index, not this pixel count.

**8.5 completed contract:**

```text
DrawScope.size
→ setFloatUniform("resolution", width, height)
→ splitX = resolution.x / 2.0
→ if (fragCoord.x < splitX) orange else navy
```

`fragCoord` is this pixel. Resolution is the whole rectangle’s size. Kotlin writes the slot once per draw. UV is Lesson 8.6.

**8.6 completed contract:**

```text
uv = fragCoord / resolution
→ u = x / width, v = y / height
→ red ramp stores u; four regions read v
```

Matching members. `uv.x < 0.5` matches 8.5’s half and is not the proof. Last pixel is not exactly 1.

**8.7 completed contract:**

```text
scalar = one number
→ vector = packed group
→ member = named slot
→ half 16-bit, float 32-bit
```

y-split paints orange on the top half. No GPU timing claim.

**8.8 completed contract:**

```text
UV answers from the top-left
→ p = uv - 0.5 answers from the middle
→ × 2 is the convention that puts edges near ±1
→ 1 means one half-width
```

0.5 is the UV of the visual center, not random. Subtract is required. × 2 is not required to center. After × 2 the span of `p.x` is about 2, so the same `if` covers less of the rectangle. Chapter 9 circle / center-scale / sample offset consume `p`. Canvas stays put.

**8.9 completed contract:**

```text
uniform float splitU
→ uniform half4 leftColor
→ setFloatUniform writes them
→ mismatch leaves splitU at 0
```

Resolution is still written. RuntimeShader is not rebuilt. Time is Lesson 8.10. `setColorUniform` is unused.

**8.10 completed contract:**

```text
withFrameNanos elapsed seconds
→ trips = elapsedSeconds / 4.0
→ setFloatUniform("time", trips)
→ stripe = fract(uv.x - time)
→ return half4(stripe, 0, 0, 1)
```

A trip is one left-to-right crossing of the black edge (stored red = 0). `SecondsPerTrip = 4` is a teaching duration. `fract(x) = x - floor(x)`. Pause freezes the slot. mix / smoothstep / sine are unused. Preview freezes at 0.25 trips.

**8.11 completed contract:**

```text
clamp(x, lo, hi)
→ mix(a, b, t) = a + (b − a) × t
→ linearFraction = clamp((x − edge0) / (edge1 − edge0), 0, 1)
→ curvedFraction = t × t × (3 − 2t)
→ mix(navy, orange, smoothstep(edge0, edge1, uv.x))
```

Teaching pixel x=180, uv.x=0.45, edges 0.40 / 0.60. linearFraction 0.25. curvedFraction 0.15625. stored red 0.221875. mix is Lesson 5.4 under an AGSL name. t is a blend fraction, not 7.10 amount. Sine unused. Distance fields are Lesson 9.3.

**8.12 completed contract:**

```text
RuntimeShader(string) compiles
→ IllegalArgumentException carries error: line: message
→ reduce to smallest failing string
→ fix that line
→ restore the rest
```

Teaching failure is `gl_FragCoord` in an otherwise legal 8.11 program. HTML does not compile AGSL. A Lesson 8.9 name mismatch is not a compile error. Preview starts on the working string.

**9.1 completed contract:**

```text
right triangle first (square corner, two legs, long side)
→ countable 3-4-5, then teaching 0.30 / 0.40 / 0.50
→ 0.09 + 0.16 = 0.25
→ sqrt(0.25) = 0.50 because 0.50 × 0.50 = 0.25
→ length(p) stored as gray
```

Teaching `p = (0.30, −0.40)` on a square 400×400 rectangle. Walk-around 0.70 is not the long side. × 2 unused. Sign unused. Rectangle is square so UV x and UV y share one pixel length. Nested equal-value outlines: smaller length circles are darker; smaller walk-around diamonds are that analog. The diamond is a square standing on a vertex.

**9.2 completed contract:**

```text
sd = length(p) − radius
→ minus inside, zero boundary, plus outside
→ if (sd < 0.0) orange else navy
```

Default radius 0.25. Teaching pixel sd = +0.25 (outside, navy). Center sd = −0.25 (inside, orange). Boundary `p = (0.15, −0.20)` has sd = 0. `smoothstep` unused. Walk-around diamond is HTML-only.

**9.3 completed contract:**

```text
mask = 1.0 − smoothstep(−band, band, sd)
→ mix(navy, orange, mask)
→ teaching sd = +0.05 → mask = 0.15625 → stored red 0.221875
```

Default band 0.10. Teaching band pixel `p = (0.18, −0.24)`, `d = 0.30`. linearFraction 0.75. curvedFraction 0.84375. Far pixel `p = (0.30, −0.40)` clamps to mask 0. Center mask 1. Boundary mask 0.50. Requires `edge1 > edge0`. Not 4.8 binary, not 4.9 coverage, not blur.

**9.4 completed contract:**

```text
innerHalf = outerHalf − cornerRadius
→ q = abs(p) − innerHalf
→ piecewise sdBox, then sd = sdBox − cornerRadius
→ if (sd < 0.0) orange else navy
```

Default outer half `(0.30, 0.20)` means full size `0.60 × 0.40`. Corner radius 0.10. Teaching pixel `p = (0.26, −0.18)` is the inner-corner plus a 3-4-5 unit step of length 0.10, and has sd = 0. Visual center `C` is not a construction-circle center. `abs(p)` mirrors left onto right and top onto bottom. Capsule is Lesson 9.5.

**9.5 completed contract:**

```text
nearestX = clamp(p.x, −innerHalfW, innerHalfW)
→ sd = length(p − (nearestX, 0)) − radius
→ if (sd < 0.0) orange else navy
```

Default outer half `(0.40, 0.20)`, radius `0.20` equal to half-height. Teaching cap-boundary `p = (0.32, −0.16)` has sd = 0. Inner segment x from −0.20 to +0.20.

**9.6 completed contract:**

```text
sdA = length(p) − radiusA
→ pB = p − B
→ sdB = length(pB) − radiusB
→ union sd = min(sdA, sdB)
→ intersection sd = max(sdA, sdB)
→ B minus A sd = max(sdB, −sdA)
→ if (sd < 0.0) orange else navy
```

Two Lesson 9.2 circles. Teaching left-only `p = (−0.10, 0)` has `sdA = length(p) − radiusA = 0.10 − 0.25 = −0.15` and `sdB = length(pB) − radiusB = 0.30 − 0.25 = +0.05`. Named formula stays visible before substitution.

**9.7 completed contract:**

```text
uniform shader background
→ sampled = background.eval(fragCoord)
→ if (fragCoord.x < resolution.x / 2.0) sampled else orange
```

Stripe input uses `fract(uv.x * 5.0)`. Teaching `uv.x = 0.15` is navy. Kotlin `setInputShader`. Offset is Lesson 9.8.

**9.8 completed contract:**

```text
readCoord = fragCoord − float2(offsetU * resolution.x, 0)
→ sampled = background.eval(readCoord)
→ return sampled
```

Default `offsetU = 0.10`. Teaching write `uv.x = 0.15` reads `0.05` and stores orange. Picture shifts opposite the read offset. `eval` does not wrap a negative read x. The stripe input’s `fract` still returns a color. Scale around the center is Lesson 9.9.

**9.9 completed contract:**

```text
p = uv − 0.5
→ readUv = p / scale + 0.5
→ sampled = background.eval(readUv × resolution)
```

No inner-half `if`. Store is four big squares: inner 2 × 2 copied onto many writes (repeat, not average). Top-left orange, top-right navy, bottom-left navy, bottom-right orange. Half of `C → (1,1)` is `(0.75, 0.75)`, still orange on that diagonal. Outer input would be painted off-picture.

**9.10 checkpoint contract:**

```text
dir = p / length(p)
→ disp = dir × dispLen
→ readUv = uv − disp
→ sampled = background.eval(readUv × resolution)
```

Follow the navy input cell x `[0.50, 0.75)`, y `[0.25, 0.50)`. W `(0.65, 0.20)` reads approximately `(0.60528, 0.28944)` at `dispLen = 0.10` and stores navy. The selected W first reaches navy at length approximately `0.055902`. At output x = 0.65 the default top boundary is near y = `0.15844`. `dispLen` is the UV read distance, not a percentage enlargement. Use the six-operation read walkthrough, actual added-region mask, and curved-edge construction; straight corner joins are only approximations. Reads inside the radius `dispLen` can cross C. The shader skips division within its `0.0001` guard. The Android shader is unchanged; its old teaching marks differ from this HTML's exact navy-cell example. Lesson 9.10 is not complete.

Current files:

```text
course/chapters/chapter-09/lesson-09-01-distance-between-two-points.html
course/chapters/chapter-09/lesson-09-02-circle-signed-distance-field.html
course/chapters/chapter-09/lesson-09-03-turn-distance-into-a-soft-mask.html
course/chapters/chapter-09/lesson-09-04-rounded-rectangle-distance-field.html
course/chapters/chapter-09/lesson-09-05-capsule-distance-field.html
course/chapters/chapter-09/lesson-09-06-combine-shapes.html
course/chapters/chapter-09/lesson-09-07-sample-an-input-shader.html
course/chapters/chapter-09/lesson-09-08-translate-sample-coordinates.html
course/chapters/chapter-09/lesson-09-09-scale-around-the-center.html
course/chapters/chapter-09/lesson-09-10-build-a-displacement-field.html
course/chapters/chapter-09/lesson-distance-fields-image-sampling-and-refraction.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/DistanceBetweenPointsExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/CircleSdfExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/SoftMaskExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/RoundedRectSdfExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/CapsuleSdfExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/CombineShapesExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/SampleInputShaderExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/TranslateSampleExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/ScaleAroundCenterExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/DisplacementFieldExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter09/Chapter09Screen.kt
```
