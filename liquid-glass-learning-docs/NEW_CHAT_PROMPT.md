# Continue my Liquid Glass on iOS course

Paste this file at the start of a new chat. Then, in the same message, either name the lesson to generate or ask questions about a named unfinished lesson.

This is a durable starter. Progress numbers, file lists, and the live checkpoint contract live in `CURRENT_STATE.md`. That file wins when this prompt disagrees.

## How I will use this prompt

Every new chat is one of two jobs:

1. **Generate** a named lesson (HTML + iOS explorer + progress files). If I say “the next lesson,” that means the next planned lesson after the generated frontier in `CURRENT_STATE.md`.
2. **Questions** about a named unfinished lesson — usually the current unresolved checkpoint, sometimes a generated-ahead lesson that is not learner-confirmed complete.

If this same first message already names the job, start that work after the read. Do not stop and wait.

If the first message is only this prompt, restate course state from `CURRENT_STATE.md` and wait.

Do not generate a later lesson than the one I named. Do not mark any lesson complete unless I explicitly confirm it. Do not generate Lesson 9.12 unless asked.

## 1. Where the files live

Local repos, not a ChatGPT sandbox:

- Docs: `liquid-glass-learning-docs` (this repository). Edit in place. Do not copy this folder.
- iOS lab: `/Users/rosen/Code/LiquidGlassLab-iOS` (sibling project). Create and write only there.
- Do not create an `ios/` or `android/` directory in the docs repo.

Read files from disk. If I attached a tree instead, treat the attachment as the tree. If a required file is missing, name it and stop for that file. Do not reconstruct an unseen file from memory.

Do not generate `.zip` files unless I ask for one.

## 2. Read order

1. `USER_PREFERENCES.md`
2. `AGENTS.md`
3. `CURRENT_STATE.md`
4. `curriculum/liquid_glass_ios_handoff.md`
5. `curriculum/liquid_glass_ios_curriculum.md` only for the named lesson and its immediate neighbors
6. files required by the job (section 4)

`CURRENT_STATE.md` is authoritative when older prose disagrees.

## 3. Progress fields

Keep these three fields separate. Read them from `CURRENT_STATE.md`. Do not invent a fourth merged status.

- **Learner-confirmed complete** — count and last completed lesson. Increases only after my explicit confirmation. iOS-confirmed complete is **40 of 216** (Chapters 3, 4, 5, and Lessons 9.1–9.6) until a must-re-read chapter is confirmed on iOS. Those 40 are the math. The other 55 of the old 95 are platform-API lessons, not new graphics formulas.
- **Unresolved checkpoint** — the unfinished lesson I am still on. Generating or revising it does not complete it. Live checkpoint is the iOS on-ramp starting at **Lesson 1.3**, not 9.10, until the must-re-read list is done.
- **Generated frontier** — the latest lesson that exists as files. It may sit on the checkpoint, or ahead of it.

Total course size is **216** lessons. Do not increase the completed count because a lesson was generated, revised, or reviewed. Never restore **95 of 216** from the prior lab.

## 4. Files for this turn

Always read the four files in the read order above.

Then add only what the job needs:

**Generate lesson N.M**

- curriculum outline for N.M and the lesson immediately before it
- HTML of the immediately preceding completed lesson
- current chapter hub HTML
- current chapter screen Swift
- explorer Swift that N.M will sit next to
- `@main App` / `LabHost` if the route must change
- `course/glossary.html` if N.M adds a term

**Questions about lesson N.M**

- that lesson’s current HTML
- its Swift explorer, if it has one
- the immediately preceding lesson HTML when wording depends on it
- `course/glossary.html` when the question is about a defined term

Do not require the whole chapter’s older HTML and Swift on every chat.

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

**Imagination-first (standing, 2026-09-14).** Geometric and distortion proofs must be pictures the learner can replay in their head. Visuals dominate; numbers confirm, they do not replace, the construction. No blind trust in formulas. Introductions stay gentle and do not talk as if the topic is already understood. Do not bloat openings with later machinery. Do not add restatement-only cards, numeric-only threshold tables, or slices that repeat a 2D picture. After a local cell is shown, show how the same lines continue through neighboring cells and whether the effect ends at the picture frame or continues outside. Name what each of `x` and `y` does on screen. Hidden exercise answers include diagrams of the question and of the reason. Distorted checkers must draw the true curve, not a straight stand-in. Full rule list: `USER_PREFERENCES.md` → “Imagination-first geometric proofs” and `AGENTS.md` → the matching 9.10 gate.

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

## 8. iOS delivery

- Complete chapter-screen previews live in `ChapterNNScreen.swift` for the chapter being edited.
- Direct lesson previews live in that lesson’s explorer file.
- Both levels provide light and dark variants.
- Both levels allow vertical scrolling through all content in a finite-height Xcode `#Preview`.
- When stacking both theme `#Preview` blocks, put light first, then dark.
- Preview canvas is **412 × 915 points**.
- Test device is **iPhone 16 Pro**. Do not substitute another model.
- Leave changed files in the two repositories (docs here; lab at `/Users/rosen/Code/LiquidGlassLab-iOS`). Do not package a ZIP unless I ask.
- Never use `ultraThinMaterial` / `glassEffect` as the glass implementation.

## 9. First response

Confirm that the read-order files were read. Restate only the fields from `CURRENT_STATE.md`:

```text
completed: {N} of 216, through {last confirmed lesson}
current unresolved checkpoint: {checkpoint}
generated frontier: {frontier}
next planned lesson after the frontier: {next}
must re-read before the frontier: {on-ramp list}
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

**Last aligned:** 2026-09-30 with `CURRENT_STATE.md` (course version 9.12.0).

```text
platform: Swift / SwiftUI / Metal (lab pixel-function strings)
test device: iPhone 16 Pro
min OS: iOS 17

completed: 42 of 216
  (Chapters 3, 4, 5, Lessons 9.1–9.6, and Lessons 9.10–9.11)
  why 42 not 97: 42 is confirmed math. The other 55 are iOS project/API
  chapters, not a graphics restart.

must re-read (in order):
  Chapter 1, Chapter 2, Chapter 6, Chapter 7, Chapter 8, Lessons 9.7–9.9

current unresolved checkpoint: Lesson 1.3 — Create LiquidGlassLab
  (first lesson of the iOS on-ramp)

generated frontier: Lesson 9.12 — Edge safety (not complete)
next planned lesson after the frontier: Lesson 9.13 — Gentle chromatic separation
```

Do not restore 95 of 216. Do not mark 1.3 complete from the prior lab.

Chapter 7 frost *formulas* stay known; re-read the chapter for the iOS lab path. Constants stay fixed: blur `18` pt / `18` CSS px, tint amount `0.25`, saturation `0.40`. Do not rebuild blur, tint, saturation, inset-stroke math, band blur, shadow room, or the 7.10 store formula.

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

**9.10 checkpoint contract** (destination after the on-ramp; not the live checkpoint):

```text
dir = p / length(p)
→ disp = dir × dispLen
→ readUv = uv − disp
→ sampled = background.eval(readUv × resolution)
```

Follow the navy input cell x `[0.50, 0.75)`, y `[0.25, 0.50)`. W `(0.65, 0.20)` reads approximately `(0.60528, 0.28944)` at `dispLen = 0.10` and stores navy. `dispLen` is the UV read distance, not a percentage enlargement. Use the six-operation read walkthrough, the added-region mask, and the spoke construction of the curve: same extra length on different rays from C; neighboring cells share the curve because they share the grid line; the curve continues outside the painted square and flattens far from C. `p.x` is the sideways part of the extra walk; `p.y` is the up/down part. Straight corner joins are only approximations. The shader skips division within its `0.0001` guard. Lesson 9.10 is not complete.

**9.11 generated-ahead contract** (not complete; 9.10 stays unresolved):

```text
sd = length(p) − radius
→ falloff = 1.0 − smoothstep(−band, band, sd)
→ disp = dir × dispLen × falloff
→ readUv = uv − disp
```

Teaching W = `(0.65, 0.30)`, `p = (0.15, −0.20)`, `sd = 0`, falloff = 0.50, `disp = (0.03, −0.04)`, `readUv = (0.62, 0.34)`. Falloff is a length scale, not a color mix. Miss line x = 0.90 stays straight.

Current files:

```text
course/chapters/chapter-01/lesson-01-01-visible-ingredients.html
course/chapters/chapter-01/lesson-01-02-observe-the-transition.html
course/chapters/chapter-01/lesson-01-03-create-the-android-project.html
course/chapters/chapter-01/lesson-01-04-build-a-study-background.html
course/chapters/chapter-01/lesson-01-05-translucent-rounded-panel.html
course/chapters/chapter-01/lesson-01-06-alpha-mixture.html
course/chapters/chapter-01/lesson-01-07-pixel-8-pro-experiment.html
course/chapters/chapter-01/lesson-01-08-diagnosis-and-checkpoint.html
course/chapters/chapter-01/lesson-a-transparent-panel-is-not-yet-liquid-glass.html
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
course/chapters/chapter-09/lesson-09-11-refraction-as-displaced-sampling.html
course/chapters/chapter-09/lesson-distance-fields-image-sampling-and-refraction.html
```

iOS explorers under `/Users/rosen/Code/LiquidGlassLab-iOS/LiquidGlassLab/chapter09/`:

```text
DisplacementFieldExplorer.swift
DisplacementField.metal
RefractionSamplingExplorer.swift
RefractionSampling.metal
Chapter09Screen.swift
```
