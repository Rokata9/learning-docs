# Liquid Glass iOS course — current state

**Updated:** 2026-09-27  
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

**Active feedback — Q&A corrections (2026-09-22):** questions hidden below answers, repeated Input Q labels for different points, rounded component results, repeated Q11/Q15 answers, and a scale explanation that missed the tile-size question. Both pages now preserve A/Q/B through the full trace and expand Q′.y; the companion shows all 19 original questions at the top. Q12 uses the drawn horizontal/vertical changes without tangent or derivative terminology. Q15 explains corner-height differences; Q11 retains the intermediate-point curvature test. Q18 traces input bounds into output bounds: 0.25 / 0.90 = 0.277777… per side, an 11.111…% increase. Pink denotes the old reference boundary; cyan denotes the new boundary. Rules: `AGENTS.md` → Question visibility, distinct answers, and numeric identity; question visibility also saved in `USER_PREFERENCES.md`. Focused checks: `verification/lesson-09-10-sep22-checks.json` (13 revised states, precise values, question visibility, matching inline modules, no JS errors) and Q15/Q18 screenshots. No iOS source or learner completion changes.

**Guard clarification (2026-09-19):** Both pages compare the guarded and allowed branches at p `(0.000003, 0.000004)`, d `0.000005`: allowing it gives direction `(0.6, 0.8)`, displacement `(0.06, 0.08)`, and read `(0.440003, 0.420004)`. The latest correction separates necessity from an undocumented choice: skipping zero prevents undefined division; the inspected Metal source gives no reason for choosing 0.0001, and the lesson has not demonstrated a need for that wider cutoff. Earlier prose described the effect as though that answered why. Prevention: guard rule 6 now requires explicit evidence for the chosen cutoff or an explicit statement that the rationale is unknown. The latest change is wording only, with syntax checks only. No iOS source or completion change.

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

**9.11 Section 2 contract (why smoothstep):** the linear falloff `1 − lin(−band, band, sd)` shares 1 / 0.5 / 0 at sd = −0.10 / 0 / +0.10. On the ray y = 0.50 at step 0.02 its drop per step is 0.10 from the very first step inside the band (0 outside), so the squeeze (read spacing ÷ step) jumps ×1.00 → ×1.50 at both band rings, for any step size. smoothstep: drops 0.028 → 0.148, squeeze ×1.14 … ×1.74, tending to ×1.00 at the rings (×1.07 at step 0.01, ×1.01 at 1/560). Corner of the lime curve at P = (0.65, 0.1838), where x = 0.65 meets the outer band ring: linear 10.1° (dispLen 0.10), 18.1° (0.20); smoothstep 0°. Step split at P: ray part 0.9035, ring part 0.4286; corner = atan(s × 0.4743) − 25.4°. on/off: no pixel on y = 0.50 reads wallpaper 0.65–0.75. Honest limit: on the photo the corners are hard to see; they show on straight lines.

**Readability rewrite and guideline revamp (2026-09-22).** The learner reported minute-long pauses on dense prose and rejected the accumulated per-lesson gate catalogue as unworkable. Consequences: (1) `AGENTS.md` was fully replaced by a concise 25-rule rulebook (plain non-native English; one name per object; no vague back-references; every claim carries its reason; visuals labelled and matched to text; formulas always fully expanded with `ⓘ` provenance and refresher tooltips; short lessons with no cross-section repetition; non-negotiable ordered verification; a self-improving loop). (2) The course-specific sections of `USER_PREFERENCES.md` were replaced by a pointer to that file. (3) Lesson 9.11 HTML was rewritten in place under the new rules: metaphor names removed (seat/stick/landing → pixel/arrow/output position); hero rings named in the legend; new 5-picture idea stepper with numbered ring tags ①②③ and fully expanded smoothstep chains; the old curve stepper and x/y section merged away (no repeated content); exercise 4's unclear overlay sentence rewritten; every plotted point clickable with UV tooltips. No iOS source change. Browser QA at desktop size covered hero, all stepper states, lab presets and falloff toggle, proof figure and zoom legend, prediction, challenge, exercise 1 open, both popup types, record builder. Follow-up same day: the learner flagged that section 2's diagram was still tiny — the rewrite had inherited the old layout (`max-content` grid track squeezing the 760px diagram). Fixed by giving diagram-bearing walk-grids a real 790px track; failure → rule link: `AGENTS.md` rule 9 now requires stepper diagrams to render at full readable size (SVG labels ≥ 14 px on screen). 9.10 and 9.11 stay unconfirmed; completion stays 40 of 216.

**Regenerated from scratch (2026-09-23).** The learner asked for a full regeneration of the lesson HTML, ELI5 register, no borrowing from the old page. The old file was deleted first; the rewrite keeps the teaching contract above unchanged (same chain, W = (0.65, 0.30), A = (0.76, 0.50) flip, miss line, peel proof) but new structure: hero input/output pair → §1 problem (9.10 shift vs falloff) + real falloff ramp → §2 six-step stepper + full trace table + color-flip pixel A → §3 lab (draggable probe with live chain readout, miss note that flips when radius reaches the far line) → §4 peel proof with the true computed curve, P1/P2/P3, join gap 0.009322, tent gap 0.019601 → §5 real `refractSample` excerpt → §6 challenge (dispLen = 0.05/0.84375 = 0.059259) → §7 four exercises with drawn answers → §8 Markdown record. **Revised after learner feedback (2026-09-24).** Three reports: (1) the trace table's nowrap cells caused horizontal page overflow — cells now split with `<br>`, and `AGENTS.md` rule 21 gained "no horizontal page overflow" (failure → rule link). (2) Section 4 re-proved "the peel is a curve, not a tent" — already proved in Lesson 9.10, a rule 17 repetition; §4 is repurposed to the new content the learner asked for and points to 9.10 in one sentence. (3) The learner wanted push-arrow lengths emphasized and asked whether the arrow at the curve's peak is 0.10. New content: §2 step 5 and the trace table carry `|disp| = sqrt(0.03² + 0.04²) = 0.05`; the lab probe arrow shows a live `|disp|` label and the readout has a length line; a peaks line compares apparent peaks of x = 0.65 (0.7211, push 0.0711), checker edge x = 0.75 (0.7789, push 0.0289), x = 0.90 (0.9000, push 0) live; §4 measures the arrows along the curve (P1 0.071083, P2 0.064279, P3 0.038201, 0 at the bend ends) and answers: no, 0.071083 at the peak (falloff 0.710831 there) — the full 0.10 lives inside the inner ring, shown by the amber arrow (0.65, 0.50) → (0.55, 0.50). The learner also asked why the lime curve seems to match the checker-border curve to its right: not a coincidence, not an exact match — every vertical input line gets an apparent curve from the same read map, and the edge x = 0.75 bends less because its pixels have bigger sd; the edge x = 0.75 curve is now drawn in violet in the lab with an explanation paragraph. Added a photo wallpaper toggle in the lab (procedural sky/sun/ridges/water drawn by the page, no image file) so the effect is visible on a realistic scene; caption states the iOS wallpaper is `checkerBackground`, not a photo. Same day, on the learner's follow-up that the drawn scene made the effect hard to see, the drawn scene was replaced by a real photo embedded base64 (~280 KB): "Glencoe Lochan reflections 3 20211022" by Daniel Kraft, CC BY-SA 3.0, via Wikimedia Commons, attribution in the caption. The trees and the lake reflections bulge and swirl through the lens. QA round 2 in `verification/lesson-09-11-checks.json`. No iOS source change. Completion stays 40 of 216.

**Section 2 added (2026-09-25).** The learner asked whether smoothstep is common practice or whether a linear interpolation would look the same. Failed spot: old Section 1's "Where does falloff come from?" presented `falloff = 1 − smoothstep(−band, band, sd)` as given, never defending the curve against the obvious simpler choice. Fix: new dedicated Section 2, "Why smoothstep and not a straight line?" — sections renumbered, the lesson now runs §1 problem → §2 why the curve → §3 stepper + trace → §4 lab → §5 lengths → §6 Metal excerpt → §7 challenge → §8 exercises → §9 record. The section carries: a two-panel SVG (both falloff curves sharing the three anchors (−0.10, 1), (0, 0.5), (+0.10, 0) on top; their slopes below — linear slope jumps 0 → −5 at each band edge, smoothstep's is 0 at both edges and −7.5 mid-band, measured numerically between points 0.002 apart, no calculus vocabulary); the implication (a slope jump in falloff is a corner in the bend, sitting exactly on the band rings d = radius ± band = 0.15 / 0.35); the Chapter 5 easing analogy moved from time to space; real side-by-side renders of the chain with smoothstep vs a one-line `lin` swap at strong push 0.20; and a magnified pair at the upper bend endpoint (0.65, 0.1838) showing the tangential peel vs the ~19° corner (~10° at lesson push 0.10 — both angles computed from the real chain). `chain()` gained a `'linear'` falloff mode; `lstep()` added beside `sstep()`. New tooltips: `lin`, `slope`. Markdown record gained the why-smoothstep bullet. QA: `verification/lesson-09-11-why-checks.json`, `lesson-09-11-why-full.png` (1920×17000 full page), refreshed `lesson-09-11-1920x1080.png`; tooltips of the new dots clicked through in a real browser. Failure → rule link: `AGENTS.md` rule 5 now requires stating why the obvious simpler tool fails, with the comparison picture. No iOS source change. Completion stays 40 of 216.

**Section 2 rewritten after learner feedback (2026-09-25, same day).** The learner found the first Section 2 unclear ("a lot of text and little or no meaningful diagrams") and asked for a full rewrite with strongly interactive visuals. Failed spots, named: (1) the slope panel's −5 and −7.5 — a rate per 1.0 of sd, which nobody can picture inside a 0.20-wide band; (2) the linear slope drawn with vertical connectors, and red "jump" dots placed at −2.5 in the middle of those connectors — a value no point has; (3) "slope = Δfalloff / Δsd = −1 / 0.20" without the 0 − 1 that makes the minus sign; (4) "the arrows start shrinking at a new rate instantly, so the bent line changes direction in zero distance — a corner" — prose with no picture of why a squeeze turns a line; (5) the 420 px side-by-side pair, where the corner was invisible, and the word "linear" read as "straight in the picture"; (6) a zoom pair with no context. The new Section 2 is three figures: an in-place falloff switch (on/off | linear | smoothstep) on one real-chain output with grid/checker/photo wallpapers, a dispLen slider, a band-ring toggle, a draggable 8.3× magnifier, and a live corner readout at P; a 6-step ray stepper (drop per step → push arrows → read spacing → squeeze → half step); a step-split construction at P with a squeeze slider. Then common practice and the evidence limit (Apple's shader is not public). Other edits: `chain()` gained an 'onoff' mode; new tooltips lin / easing / atan / split / realpx; the 'slope' tooltip is gone; the 'apparent' tooltip's incorrect "the read moves slower than the pixel" argument is replaced by the plain definition; ring names are unified to inner band ring / outer band ring in Sections 1, 3, 4, 5 and the record. Failure → rule links in `AGENTS.md`: (1)(3) → rule 15 (draw a rate as the difference between neighbouring samples at a stated step, never a bare −5); (2) → rule 8 (plot only real values; no vertical connector at a jump, no mark on a connector); (5) → rule 5 (in-place toggle on revealing content, magnifier, a number for the size of the difference and where it shows) and rule 2 (say whether "linear / straight / smooth" describes the graph or the picture); overall → rule 6 (prefer interactive pictures). The general preference is also recorded in `USER_PREFERENCES.md`. QA: `verification/lesson-09-11-why-checks.json` and the `lesson-09-11-why-*.png` screenshots (JS syntax via JavaScriptCore because node is absent; 0 runtime errors in every driven state; in-app browser checks of tooltips, keyboard, drag clamp, presets; no horizontal overflow at 1920). No iOS source change. Completion stays 40 of 216.

**Section 2 rewritten in Bulgarian, with more pictures (2026-09-26).** The learner found the English text of the new Section 2 very hard to read ("I spend half an hour on a paragraph") and asked for the section in Bulgarian, with clearer writing and more visuals. Failed spots, named: (1) "Thin white line: where the input line x = 0.65 sits in the wallpaper" — "wallpaper" was defined only in the hero, far away; (2) the readout line "circle edge (0.65, 0.30) … no jump, no break" named a point that was not drawn; (3) "The corners show on straight lines: text lines, list rows, icon edges" listed examples without showing them; (4) "the lines break apart at the circle" used an effect word with no picture; (5) the "Linear describes the falloff graph" paragraph proved a shape with numbers only; (6) the 'apparent' tooltip packed a definition and an algorithm ("halving a search range 60 times (bisection)") into dense prose. The new Section 2 (inside `<div lang="bg" id="s2wrap">`, all captions, canvas labels, readouts, and tooltips in Bulgarian) has seven pictures: the three falloff curves with a draggable sd marker and a live, fully expanded readout; a glossary pair (wallpaper | output) with a colour legend and pixels ①②③ whose blue arrows land on the white line; the switchable real-chain output with the 8.3× magnifier, now with W = (0.65, 0.30) and C drawn and a new "екран" wallpaper (a settings-style list with icons, text, and separators) so "text lines, list rows, icon edges" can be seen; a "not straight" plot (curve vs the straight line from P to the peak, the gap at y = 0.40 drawn in red, d marked along the white line); a "break" pair (the red strip 0.15–0.25 from C that no pixel reads, and the output where the light-green curve stops at W and resumes at W′ = (0.65, 0.70)); the ray stepper; and the step-split corner construction. Names: тапет (wallpaper), изход, бялата линия, светлозелената крива, вътрешен / външен пръстен, лента, чупка (corner), разкъсване (break), свиване (squeeze), спад на стъпка, стрелка на изместването, лъч, червената ивица. Other sections stay in English; the English 'apparent' tooltip in Section 5 is simplified (definition only). Failure → rule links in `AGENTS.md`: (1) → rule 2 (each section re-anchors its objects in a legend); (2) → rule 8 (every point named in text or a readout is drawn); (3) → rule 6 (show examples, do not list them); (4)(5) → rule 15 (proof numbers are drawn; effect words are defined by pointing at a picture); (6) → rule 2 (no page-computation details unless needed); language → rule 1 and `USER_PREFERENCES.md`. QA: `verification/lesson-09-11-why-checks.json` and the `lesson-09-11-why-*.png` screenshots. No iOS source change. Completion stays 40 of 216.

**Whole Lesson 9.11 translated to Bulgarian (2026-09-26).** At the learner's request the whole lesson is now Bulgarian (`<html lang="bg">`): title, header, hero, all nine sections, every canvas and SVG label, stepper captions, readouts, tooltips, exercise answers, challenge messages, and the Markdown record. Code names stay in code form; the Metal excerpt keeps the real code with Bulgarian comments, and the text now says the comments were added and the parameter list is compressed (the real file has one parameter per line and no step comments). Consistency fixes made while translating: the input line x = 0.65 is white everywhere it marks the wallpaper position (hero and lab inputs were lime); W is orange in Sections 2 and 3; the lab's cell-edge curve x = 0.75 is pink (was violet, which Section 2 uses for the comparison curve; orange was rejected by rule 11); the full-push arrow is white in Sections 3 and 5 (was amber on the checker, a rule 11 problem); push arrows from a pixel to its read are blue; Section 5 now measures the same pixels ①, ②, ③ as Section 2 (y = 0.50, 0.40, 0.64; ③ push 0.056727, reads (0.65, 0.607048)) and computes its readouts live from the drawn numbers; the old Section 5 check of P2 had an arithmetic slip (2t³ = 0.065759 instead of 0.065753), now gone; the Section 3 step 1 caption said the read moves "away from" C — it moves toward C, fixed; the Section 5 paragraph "One more curve in the same picture" restated the Section 4 twins paragraph and was removed (rule 17). QA: `verification/lesson-09-11-bg-checks.json` and the `lesson-09-11-bg-*.png` screenshots. No iOS source change. Completion stays 40 of 216.

**Lesson 9.11 translated back to English (2026-09-27).** At the learner's request (2026-09-26) the whole lesson is English again (`<html lang="en">`). It was translated from the current Bulgarian file, not restored from git history, so the pictures and fixes of the Bulgarian round stay. Language only: every figure, control, stepper step, tooltip, exercise, number, formula, id, class, data attribute and all JS logic are unchanged; the Metal excerpt keeps its code lines, and only its comments are translated. One name per object: wallpaper, push, full push, push arrow, the vector disp, read point, the light-green curve, the turquoise line x = 0.90, the pink curve, the violet curve, inner ring, outer ring, the band, the red strip, corner, break, squeeze, drop per step, spacing, ray, magnifier, probe, the peak. English needed a few new names: the gray line (the straight line from P to the peak; the screen wallpaper's row lines are now separator lines), ray part and ring part, open dot. Beyond the language: push and read point are defined in the chain paragraph; vague pointers are replaced by the object or the value; three labels moved because the English text no longer fit (magnifier label rule 50 → 80 px, the ramp band label moved to sd = 0.03, the lab peaks readout now has one line per curve). Checks: 0 Cyrillic; HTML tags and attributes identical to the Bulgarian file; JS identical outside strings except the two label positions; 5 of 5 script blocks parse (JavaScriptCore); headless driver over 65 states with 0 errors and 0 Cyrillic in generated text; 56 screenshot states reviewed at 1920 wide; real browser: 40 ⓘ checks at the top and bottom viewport edges, 89 point tooltips, Escape, ✕, outside click, Enter, keyboard on the sd marker, magnifier and probe, no horizontal overflow, no console errors. Record: `verification/lesson-09-11-en-checks.json` and the `lesson-09-11-en-*.png` screenshots. Follow-up the same day, at the learner's request: the header links to the course home and the glossary pointed to missing files (a pre-existing bug); they now point to `../../../liquid-glass-course.html` and `../../glossary.html`, and all five links in the lesson resolve. `verification/lesson-09-11-1920x1080.png` was refreshed and now shows the English page. No iOS source change. Completion stays 40 of 216.

**Q&A round 1 — Section 1 and Section 2 up to “What a break is” (2026-09-27).** The learner asked 10 questions: what the “on/off” option does; the shortened line “t = (+0.05 + 0.10) ÷ 0.20 = 0.75”; results-only formulas in the tooltips of “What is in the pictures”; what 0.249 / 0.251 and “both sides of W” mean; “on/off” looking broken (the middle stayed changed); “break” used before its definition; what “reads a point of the white line” means and why the line is a curve; the shortened gray-line formula; which formula the linear curve follows compared with a straight line; how x = 0.7048 at y = 0.40 is computed. New companion page `course/chapters/chapter-09/lesson-09-11-qa.html`: 10 cards, each question verbatim at the top, pictures computed from the lesson's chain, every point clickable, every calculation one operation per line with exact 6-decimal arithmetic that a calculator reproduces, a “Lesson problems found” list, and 4 proposed AGENTS.md rules. Lesson changes (each marked with a green “updated · Q&A n” link): the falloff rule “on/off” is renamed **hard if** (the name Lesson 9.3 used for the same test `sd < 0`), with a rule line under the buttons that says it is not an off switch; the Section 1 box and its ramp tooltips, the “Three choices” box, and the point tooltips of “What is in the pictures” write one operation per line (new exact engine `X6` in the Section 2 script); the magnifier box names the pixels I and O (0.01 inside and outside the circle edge on the ray through W), and “Magnifier: at W” draws them with their push arrows; “What a break is” now comes before “See the difference”; “What to watch” explains the flower in the middle (Z = (0.55, 0.50) reads (0.45, 0.50)); the “Linear does not mean a straight line” part draws K = (0.704841, 0.40), R_K = (0.65, 0.426772) and the push arrow, writes the gray line with 6 decimals (0.695585, gap 0.009256), explains how x = 0.704841 is found (the equation along the row and the trial values), lists the sideways moves 0.013432 / 0.0145 / 0.012919 / 0.008755 / 0.003071 against the gray line's 0.010541, and gives the exact linear-curve formula x = 0.60 + 0.0175 ÷ r with its derivation (in the band push = 0.175 − 0.5 × d and r = 1.5 × d − 0.175); the white-line labels are now r. Failed spots → **proposed** rules, waiting for learner approval and not yet in `AGENTS.md`: shortened formulas in generated readouts and tooltips → rule 12 (one operation per “=”, calculator-reproducible, everywhere a number appears); unnamed and undrawn points in a readout and a tooltip → rules 8 and 21 (QA opens every tooltip and generated readout); “break” defined after its first use → rule 2 (no forward definitions); the “on/off” label read as an off switch → rule 3 (a button label is a name; reuse the name an earlier lesson gave the same rule). Found but not changed (outside this round; problems 11–12 on the Q&A page): shortened formulas in the ray stepper, Section 3 (trace-table falloff row, pixel A box), Section 5 (check of ②), Section 7 (challenge box) and the ⓘ “×1.01 at the real pixels”; arithmetic that a calculator does not reproduce in the corner box (0.00857, 0.01205) and in Section 5 (√0.053234 = 0.230724; 0.488727 − 0.131507 = 0.357221). QA: `verification/lesson-09-11-qa-checks.json`, `lesson-09-11-qa-q*.png`, `lesson-09-11-sep27-*.png`. No iOS source change. Completion stays 40 of 216.

**Card 9 rebuilt after learner feedback (2026-09-28).** The learner: “From step 4 of Question 9 … it gets incredibly hard to track which formulas are substituted.” Failed spots: steps 4–6 of card 9 put formulas from earlier steps (the push formula, then d = (r + 0.175) ÷ 1.5) into later ones without showing them on the same screen, and single lines did several moves (put in, remove brackets, combine terms, solve). The lesson's box “Where x = 0.60 + 0.0175 ÷ r comes from” and card 10 step A had the same pattern. Fix: card 9 now has 9 steps (falloff with d; push with d; pick R; the ray rule r = d − push drawn as three brackets on the ray; put the push formula in → r = 1.5 × d − 0.175 with a small push graph; turn it around → d = (r + 0.175) ÷ 1.5 read off an r-against-d graph; the stretch rule with the two triangles; put the distance formula in → x = 0.60 + 0.0175 ÷ r; compare with the gray line). Every step shows the formulas that it uses as colored boxes, the inserted part of a substitution keeps its formula's color, every line is one move named in words, and a numbers column checks every line with R = (0.65, 0.367712) and S = (0.6875, 0.33464) (in step 8 every line gives 0.6875). One Python source generates the tables for card 9, card 10 step A and the lesson's box (now below the figure, full width, 8 steps); 107 table operations recomputed exactly, 0 mismatches. Proposed rule (pending approval, not in `AGENTS.md`): merge into rule 19 — “When a derivation puts one formula into another, show the inserted formula on the same screen, color the inserted part like its source, one move per line named in words, and a numbers column that checks every line.” QA: syntax 6 of 6 blocks; 9 steps with 0 runtime errors; real browser 64 point tooltips inside the window, tables inside their columns, 0 console errors; screenshots `verification/lesson-09-11-qa-sep28-*.png`, `lesson-09-11-sep28-derive-box.png`. No iOS source change. Completion stays 40 of 216.

## Unresolved checkpoint — Lesson 1.3

Do not mark 1.3 complete until the learner confirms on iOS.

Course progress: 40 of 216 lessons completed.
