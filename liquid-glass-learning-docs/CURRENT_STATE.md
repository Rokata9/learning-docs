# Liquid Glass iOS course — current state

**Updated:** 2026-09-18  
**Course version:** 9.11.0  
**Platform:** Swift / SwiftUI / Metal (`.metal` + `ShaderLibrary`)  
**Test device:** iPhone 16 Pro  
**Min OS:** iOS 17  
**Total curriculum size:** 216 lessons

## Authoritative progress

```text
platform: Swift / SwiftUI / Metal (.metal + ShaderLibrary)
test device: iPhone 16 Pro
min OS: iOS 17

learner-confirmed complete: 40 of 216
completed through: Lesson 9.6 — Combine shapes
  (Chapters 3, 4, 5, and Lessons 9.1–9.6 only)

must re-read before the frontier (platform chapters, in order):
  Chapter 1, Chapter 2, Chapter 6, Chapter 7, Chapter 8, Lessons 9.7–9.9

current unresolved checkpoint: Lesson 1.3 — Create LiquidGlassLab
  (first lesson of the iOS on-ramp)

on-ramp then returns the checkpoint to: Lesson 9.10 — Build a displacement field
generated frontier: Lesson 9.11 — Refraction as displaced sampling
next planned after the frontier: Lesson 9.12 — Edge safety
```

**Why 40, not 95:** 40 counts only math/graphics confirmed on this iOS fork (Chapters 3, 4, 5, Lessons 9.1–9.6). The other 55 of the old 95 are platform chapters: project, coordinates APIs, SwiftUI drawing, frost lab path, Metal host, and 9.7–9.9 sampling API. Those formulas stay known. The re-read is the new lab path, not a math restart. Generating a later lesson does not add those 55 back.

Do not restore **95 of 216**. That count was the prior lab. It is not the iOS state.

Do not mark Lesson 1.3 complete just because the prior 1.3 was complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation.

Do not generate Lesson 9.12 unless asked. Lesson 9.10 is generated and is not complete. Lesson 9.11 is generated ahead and is not complete.

Reusable new-chat starter: `NEW_CHAT_PROMPT.md`. Paste it, then name generate or questions in the same message. Progress in this file wins. When the checkpoint or frontier moves, refresh section 12 of that prompt.

## Stay complete — graphics and math

These lessons stay learner-confirmed complete. HTML will still be updated so excerpts are Swift, but the learner does not need to sit through them again before the on-ramp.

| Chapter / lessons | Count | Why they stay complete |
|-------------------|------:|------------------------|
| Chapter 3 | 11 | Color, alpha, over, luminance, tint, saturation as math |
| Chapter 4 | 11 | Shapes, corners, paths, masks as geometry |
| Chapter 5 | 12 | Time, progress, lerp, easing, springs as math. Skim 5.2 / 5.11 / 5.12 later only if an iOS clock API is needed. |
| Lessons 9.1–9.6 | 6 | Distance, SDF, min/max. Pixel arithmetic is unchanged. |

**iOS-confirmed complete: 40 of 216** (11+11+12+6).

Also still known, but not counted as extra complete lessons: 1.1 / 1.2 / 1.6 / 1.8 vocabulary, Chapter 7 frost *formulas* (18 pt / 0.25 / 0.40), Chapter 8 mix/smoothstep *math*. Those live inside chapters that must be re-read for the iOS project and APIs.

## Must re-read before Lesson 9.10 — platform chapters

Read each of these, in order, on the translated HTML + new lab, before treating 9.10 as the live checkpoint.

| Order | What to read | Why it is iOS, not math |
|-------|----------------|-------------------------|
| 1 | **Chapter 1 entire** (1.1–1.8) | Creates the SwiftUI project, study background, translucent panel, iPhone 16 Pro experiment. 1.3 and 1.7 are the load-bearing ones; the rest of the chapter is the iOS baseline around them. |
| 2 | **Chapter 2 entire** (2.1–2.9) | Points vs pixels vs `displayScale`, SwiftUI local/parent/screen coordinates. 2.5 is the unit rewrite; the inspector in 2.9 is the iOS API. |
| 3 | **Chapter 6 entire** (6.1–6.11) | **How SwiftUI draws the scene.** Owned `.blur()` vs captured backdrop. This chapter is new on iOS. |
| 4 | **Chapter 7 entire** (7.1–7.12) | Frost *recipes* are known; the **lab path** is new (owned blur, snapshot crop, saturation matrix on a SwiftUI layer). Re-run the explorers. Do not rebuild the frozen constants. |
| 5 | **Chapter 8 entire** (8.1–8.12) | **Your first Metal shader.** `.metal` + `ShaderLibrary`, `position`, uniforms as Shader arguments, Xcode compile errors. 8.3–8.8 / 8.11 math is familiar; the host is new. Re-read the chapter as iOS. |
| 6 | **Lessons 9.7–9.9** | Input color is a Metal function call, not a texture sample. 9.1–9.6 stay complete; these three are the sampling API. |

Then the unresolved checkpoint is again **Lesson 9.10 — Build a displacement field**.

As the learner finishes a must-re-read chapter, increase the count by that chapter’s lesson total and move the checkpoint forward along the on-ramp table. After 9.9 is confirmed on iOS, count is 40+8+9+11+12+12+3 = **95** again, checkpoint **9.10**. That is the equivalent of the old 95, earned on iOS.

## Frozen frost stack (do not rebuild)

blur **18 pt**, tint **0.25**, saturation **0.40**, rim **3 pt**, inner band **12 pt** with band blur **6 pt**, shadow blur **12 pt** offset **4 pt**. Saturation matrix weights stay **0.213 / 0.715 / 0.072**.

## Current lesson files

Live checkpoint is Lesson 1.3. Frontier HTML is Lesson 9.11. Shader host is `LabOrange.metal` + `ShaderRect` (`colorEffect`). Lesson 9.10 explorer: `chapter09/DisplacementFieldExplorer.swift` + `chapter09/DisplacementField.metal`. Lesson 9.11 explorer: `chapter09/RefractionSamplingExplorer.swift` + `chapter09/RefractionSampling.metal`.

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

Filenames stay until a dedicated sweep. Content and titles become iOS in each lesson’s own translation step.

## Stay-complete contracts — Lessons 9.1–9.6

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

## Destination after the on-ramp — Lesson 9.10

Not complete. Not the live checkpoint until Chapters 1, 2, 6, 7, 8, and Lessons 9.7–9.9 are re-read on iOS.

**9.10 checkpoint contract:**

```text
dir = p / length(p)
→ disp = dir × dispLen
→ readUv = uv − disp
→ sampled = background.eval(readUv × resolution)
```

On iOS, `background.eval` is the Metal function `checkerBackground` in the same `.metal` file. Follow the navy input cell x `[0.50, 0.75)`, y `[0.25, 0.50)`. W `(0.65, 0.20)` reads approximately `(0.60528, 0.28944)` at `dispLen = 0.10` and stores navy. `dispLen` is the UV read distance, not a percentage enlargement. Keep the six-operation read walkthrough, W→R arrows, and spoke construction. Every outward walk has the same total length; the nearest input on y = 0.25 gains the largest upward part. The extra walk’s components are `(p.x / d) × dispLen` and `(p.y / d) × dispLen`, not bare `p.x` and `p.y`. Straight corner joins are only approximations. The shader skips division at `d <= 0.0001`. The iOS source remains separate. Lesson 9.10 is not complete.

**Active feedback — visual Q&A (2026-09-18):** the learner could not imagine the geometry from the text-heavy answers. Both HTML files now put the construction before long arithmetic, with a five-step same-output-x straight-segment test and coordinate tooltips on plotted points. Permanent preference: every plotted point is clickable; inspection must not also reposition it. Rule: `AGENTS.md` → Picture-before-arithmetic and inspectable-point gate. Verification: `verification/lesson-09-10-visual-audit.md` and `verification/lesson-09-10-visual-checks.json` cover every step/point, coordinate space, overlap, cutoff equality, and desktop viewport. Completion remains 40 of 216; 9.10 remains unresolved.

## Generated ahead — Lesson 9.11

Not complete. Not the live checkpoint. Lesson 9.10 stays unresolved.

**9.11 teaching contract:**

```text
sd = length(p) − radius
→ falloff = 1.0 − smoothstep(−band, band, sd)
→ dir = p / length(p)
→ disp = dir × dispLen × falloff
→ readUv = uv − disp
→ sampled = checkerBackground(readUv × resolution, resolution)
```

Default radius 0.25, band 0.10, dispLen 0.10. Teaching W = `(0.65, 0.30)` sits on wallpaper line x = 0.65 and on the circle: `p = (0.15, −0.20)`, `d = 0.25`, `sd = 0`, falloff = 0.50, `dir = (0.60, −0.80)`, `disp = (0.03, −0.04)`, `readUv = (0.62, 0.34)`, store navy. Falloff is a length scale, not a 9.3 color mix and not a 4.8 hole. The miss line x = 0.90 has min `sd = 0.15` and never moves. Deleting `× falloff` restores Lesson 9.10. Apparent line of x = 0.65 peels only near the circle; landings are not a straight join and not a tent. Edge safety is Lesson 9.12.

## Unresolved checkpoint — Lesson 1.3

Do not mark 1.3 complete until the learner confirms on iOS.

Course progress: 40 of 216 lessons completed.
