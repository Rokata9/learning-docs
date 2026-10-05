# Liquid Glass iOS course — current state

**Updated:** 2026-10-05  
**Course version:** 9.14.0  
**Platform:** Swift / SwiftUI / Metal (`.metal` + `ShaderLibrary`)  
**Test device:** iPhone 16 Pro  
**Min OS:** iOS 17  
**Total curriculum size:** 216 lessons

## Authoritative progress

```text
platform: Swift / SwiftUI / Metal (.metal + ShaderLibrary)
test device: iPhone 16 Pro
min OS: iOS 17

learner-confirmed complete: 97 of 216
  (Chapters 1–8 and Lessons 9.1–9.11)

current unresolved checkpoint: Lesson 9.12 — Edge safety
  (generated, not complete)

generated frontier: Lesson 9.14 — Lens checkpoint (not complete)
  (Lesson 9.13 — Gentle chromatic separation is also generated and not complete)
next planned after the frontier: Lesson 10.1 — Height-map idea
```

Chapters 1–8 and Lessons 9.1–9.11 count as complete. The graphics and math are the same; only the API names differ between the earlier platform and iOS.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation.

Do not generate Lesson 10.1 unless asked. Lessons 9.12, 9.13 and 9.14 are generated and are not complete.

Reusable new-chat starter: `NEW_CHAT_PROMPT.md`. Paste it, then name generate or questions in the same message. Progress in this file wins. When the checkpoint or frontier moves, refresh section 12 of that prompt.

## Complete through Lesson 9.11

| Chapter / lessons | Count |
|-------------------|------:|
| Chapter 1 | 8 |
| Chapter 2 | 9 |
| Chapter 3 | 11 |
| Chapter 4 | 11 |
| Chapter 5 | 12 |
| Chapter 6 | 11 |
| Chapter 7 | 12 |
| Chapter 8 | 12 |
| Lessons 9.1–9.11 | 11 |
| **Total** | **97** |

Lessons 9.12, 9.13, and 9.14 are generated and are not part of the 97. The checkpoint is Lesson 9.12. Skim Lessons 5.2, 5.11, and 5.12 later only if an iOS clock API is needed. Chapter 7 frost constants stay frozen.

## Frozen frost stack (do not rebuild)

blur **18 pt**, tint **0.25**, saturation **0.40**, rim **3 pt**, inner band **12 pt** with band blur **6 pt**, shadow blur **12 pt** offset **4 pt**. Saturation matrix weights stay **0.213 / 0.715 / 0.072**.

## Current lesson files

Live checkpoint is Lesson 9.12. Frontier HTML is Lesson 9.14. Shader host is `LabOrange.metal` + `ShaderRect` (`colorEffect`). Lesson 9.10 explorer: `chapter09/DisplacementFieldExplorer.swift` + `chapter09/DisplacementField.metal`. Lesson 9.11 explorer: `chapter09/RefractionSamplingExplorer.swift` + `chapter09/RefractionSampling.metal`. Lesson 9.12 explorer: `chapter09/EdgeSafetyExplorer.swift` + `chapter09/EdgeSafety.metal`. Lesson 9.13 explorer (planned, not yet written): `chapter09/ChromaticSeparationExplorer.swift` + `chapter09/ChromaticSeparation.metal`. Lesson 9.14 explorer (planned, not yet written): `chapter09/LensCheckpointExplorer.swift` + `chapter09/LensCheckpoint.metal`.

```text
course/chapters/chapter-01/lesson-01-01-visible-ingredients.html
course/chapters/chapter-01/lesson-01-02-observe-the-transition.html
course/chapters/chapter-01/lesson-01-03-create-liquidglasslab.html
course/chapters/chapter-01/lesson-01-04-build-a-study-background.html
course/chapters/chapter-01/lesson-01-05-translucent-rounded-panel.html
course/chapters/chapter-01/lesson-01-06-alpha-mixture.html
course/chapters/chapter-01/lesson-01-07-iphone-16-pro-experiment.html
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
course/chapters/chapter-09/lesson-09-10-qa.html
course/chapters/chapter-09/lesson-09-11-refraction-as-displaced-sampling.html
course/chapters/chapter-09/lesson-09-11-qa.html
course/chapters/chapter-09/lesson-09-12-edge-safety.html
course/chapters/chapter-09/lesson-09-13-gentle-chromatic-separation.html
course/chapters/chapter-09/lesson-09-14-lens-checkpoint.html
course/chapters/chapter-09/lesson-distance-fields-image-sampling-and-refraction.html
```

## Completed contracts — Lessons 9.1–9.6

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

## Completed contracts — Lessons 9.10–9.11

Learner-confirmed complete on 2026-09-30.

**9.10 completed contract:**

```text
dir = p / length(p)
→ disp = dir × dispLen
→ readUv = uv − disp
→ sampled = checkerBackground(readUv × resolution, resolution)
```

Navy input cell x `[0.50, 0.75)`, y `[0.25, 0.50)`. W `(0.65, 0.20)` reads about `(0.60528, 0.28944)` at `dispLen = 0.10` and stores navy. `dispLen` is the UV read distance, not a percentage enlargement. The shader skips the division at `d <= 0.0001`; the Metal source gives no reason for that exact cutoff. Q&A companion: `lesson-09-10-qa.html`.

**9.11 completed contract:**

```text
sd = length(p) − radius
→ falloff = 1.0 − smoothstep(−band, band, sd)
→ dir = p / length(p)
→ disp = dir × dispLen × falloff
→ readUv = uv − disp
→ sampled = checkerBackground(readUv × resolution, resolution)
```

Default radius 0.25, band 0.10, dispLen 0.10. Teaching W = `(0.65, 0.30)`: `p = (0.15, −0.20)`, `d = 0.25`, `sd = 0`, falloff 0.50, `dir = (0.60, −0.80)`, `disp = (0.03, −0.04)`, `readUv = (0.62, 0.34)`, stores navy. Falloff is a length scale, not a color mix. The line x = 0.90 never moves. Section 2 defends smoothstep against a straight line (corners on the band rings). Q&A companion: `lesson-09-11-qa.html` (round 1, 10 cards).

**Rollback (2026-09-30).** At the learner's request, `lesson-09-11-qa.html` and `lesson-09-11-refraction-as-displaced-sampling.html` were restored to their state in commit `d6ca607` (2026-09-27). This removed the card 9 rebuild (2026-09-28), Q&A round 2 with cards 11–25 and the summary card (2026-09-29), and the lesson's `#upd-derive` box. The learner's reason: those rounds tried to prove every side fact of the math, which is not the goal. The rules added on 2026-09-29 (rules 12, 14, 19) stay. Only the 9.11 footer link to Lesson 9.12 was edited afterwards.

## Generated — Lesson 9.12

Not complete.

**9.12 teaching contract:**

```text
p = uv − center                         (the glass center is a parameter; Lesson 9.6 move)
→ the Lesson 9.11 chain
→ readUv = uv − disp
→ readUv = clamp(readUv, 0.0, 1.0)      (new: the one line of the lesson)
→ sampled = checkerWithEdge(readUv)     (transparent outside 0 … 1)
```

One graphics idea: a read point outside the wallpaper has no color, so the pixel is see-through (the seam). One math idea: clamp a point = clamp x and y separately (Lesson 8.11 / 9.5 clamp). Glass center C = `(0.50, 1.10)`, 0.10 below the screen. Teaching W = `(0.59, 0.98)`: `p = (0.09, −0.12)`, `d = 0.15`, `sd = −0.10`, falloff 1, push 0.10, `dir = (0.60, −0.80)`, `disp = (0.06, −0.08)`, R = `(0.53, 1.06)` is outside, R′ = `(0.53, 1.00)`, stores navy (the edge y = 1.00 belongs to the last row). The seam is an arch along the bottom edge, up to y ≈ 0.91, thinner than one pixel near x ≈ 0.2 and x ≈ 0.8; about a quarter of the moved pixels. Clamp is invisible on the checkerboard and shows vertical streaks on the drawn settings-list screen (last row cut by the edge). R′ is not where the push arrow crosses the edge (E = `(0.575, 1.00)`). Pad (Lesson 7.3) needs real pixels past the edge. With the glass in the middle, clamp changes no pixel. SwiftUI's `Layer.sample` already clamps (`SwiftUI_Metal.h`: `p = metal::clamp(p, info[3], info[4]);`; what `info[3]`/`info[4]` hold is an estimate). The browser wallpaper is a function that returns transparent outside 0 … 1 on purpose. iOS: `chapter09/EdgeSafety.metal` (`edgeSafeRefract`, `checkerWithEdge`), `chapter09/EdgeSafetyExplorer.swift`, wired in `Chapter09Screen`; the iPhone 16 Pro simulator build succeeded. The photo of Lesson 9.11 is not used: its bottom row is flat water and did not show the clamp streaks. Section 4 also has the figure “What the middle shows at dispLen = 0.20” (C = `(0.50, 0.50)`, screen wallpaper): pixels 1–6 are closer than 0.15 to C, get push 0.20 and read past C: “Haptics” and “tions” turned around, and four gray loops through C (the gray lines below Bluetooth, Mobile Data, Notifications, Sounds & Haptics cross the circle 0.20 from C). Pixel 7 is 0.221 from C, gets push 0.142 and shows “Haptics” not turned around, bent along the glass edge. Worked example: pixel 2 = `(0.56, 0.50)` reads `(0.36, 0.50)`, the “n” of “Notifications”.

## Generated — Lesson 9.13

Not complete.

**9.13 teaching contract:**

```text
the Lesson 9.11 chain → disp = dir × push          (push = dispLen × falloff)
→ readRed   = clamp(uv − disp × (1 − spread), 0, 1)     (new: shorter push)
→ readGreen = clamp(uv − disp, 0, 1)                    (the Lesson 9.12 read point)
→ readBlue  = clamp(uv − disp × (1 + spread), 0, 1)     (new: longer push)
→ color = half4(colRed.r, colGreen.g, colBlue.b, 1.0)   (new: one channel from each)
```

One graphics idea: three read points per pixel, one per channel, give thin color strips (the fringe) on edges the glass bends. One math idea: build a color from one member of each of three colors (`.r .g .b` = Lesson 8.7 members). Wallpaper: the Lesson 9.7 checker in black and white, so every channel is the same picture and any color comes from the read points. Glass C = `(0.40, 0.54)` (edge y = 0.50 runs close to C), radius 0.25, band 0.10, dispLen 0.10, spread 0.10 (chosen constant). Teaching W = `(0.40, 0.405)`: `p = (0, −0.135)`, `d = 0.135`, `sd = −0.115`, falloff 1, push 0.10, `dir = (0, −1)`, `disp = (0, −0.10)`; readRed `(0.40, 0.495)` white, readGreen `(0.40, 0.505)` black, readBlue `(0.40, 0.515)` black → W stores `(1, 0, 0)`, pure red. On the line x = 0.40: yellow strip 0.39–0.40, red strip 0.40–0.41, each 0.01 = spread × push; the read points cross the edge in order, blue first (stepper step 5: P₁ (0.40, 0.395) yellow, W red, P₂ (0.40, 0.415) black, chosen one at a time, with channel arrows). Black-into-white edges give blue (next to black) and cyan (step 6: Q₁…Q₄ = (0.40, 0.585 … 0.615) just below C; push 0.10 passes C; white / cyan / blue / black). No fringe without an edge between the read points (Exercise 1: W₁ = (0.27, 0.54)). No fringe outside the ring 0.35 from C (push 0); strips thin toward it. Blue gets the longest push because real glass bends blue most (prism, dispersion, chromatic aberration). Gentle: widest strip 0.01 UV = 5.2 px on the 520-px picture, 4.02 pt on a 402-pt-wide view; at 0.40 one edge shows up as three edges. Section 2 ends after “How strong: gentle” (the “Three copies of one edge” and “Which color a strip gets” figures were removed on 2026-10-03 at the learner's request; the record keeps their facts). Section 4 “Track a word through the glass” (screen, spread 0): pick a word (buttons or click either picture), drag C; each letter tinted yellow → blue on the wallpaper and in every output pixel that reads it; both pictures 0.80 wide centered on M (the word's middle); M's ring (cyan) on the wallpaper, P's ring (lime, the pixels that read it) and Q's ring (mirror copy, only when M is closer than 0.10 to C) in the output; rings leave a gap across the word. Stretch along the ring = P's distance ÷ M's distance. Shape cards with C straight above M: unchanged 0.38 (P is M), flattened 0.12 (0.2029 ÷ 0.12 = 1.691, flattened across), stretched + mirror copy 0.03 (0.13 ÷ 0.03 = 4.333, copy 2 at 0.07: 0.07 ÷ 0.03 = 2.333, flipped across the line of the pink arrows), smeared 0 (C on M: the ring 0.10 from C shows M's color). Default: “Haptics”, stretched + mirror copy. The “flattened” card (C 0.12 above M) opens a 9-step explanation (rebuilt 2026-10-04 (3): 5 the shape — slide arrows from the word-box edges, TL/T/TR/BL/B/BR table; 6 letter widths from slid edges, 5 decimals; 7 a row of 21 pixels with a per-pixel table (read point → wallpaper column/row) and a per-square grouping; 8 a column of 13 pixels with push/read table, box rows never read; 9 letter-box area: wallpaper width × height against output small squares (0.001) whose read point lands in the box, big squares shaded in the zoom, a letter chooser, ratio bars). Before that it was an 8-step explanation (steps 6–8 added 2026-10-04: big pixels 0.004 wide around P₃/W₃ — a row of 21 pixels reads points 0.591 px apart, 6 wallpaper pixels read twice, letter “c” 5.50 px → 10 px, stretch e ÷ ρ = 1.691 along the ring; a column of 13 pixels reads 1.625 px apart, 5 word-box pixels never read, 0.615 across, T/B 0.63; step 8 area 1.691 × 0.615 = 1.04 near M, per-letter pixel counts, whole word 0.95; the distance chart gives each ruler its own scale and puts names in one row with leader lines). Before that it was a 6-step explanation (closer view, 0.44 wide): W₁ … W₅ on the word's middle line (gap = width ÷ 4), their distances ρ from C, the rule e − push(e) = ρ solved on a two-ruler distance chart, P = C + e × dir with the moved word-box outline, gaps (neighbours stay neighbours), and T/B (top/bottom of the word box: flattened). Click the word to add a point X; “Hide drawings” shows the word alone. “Notifications”: ρ 0.168 / 0.1335 / 0.12, e 0.2316 / 0.2111 / 0.2029, bend 0.0379, gaps 0.0585 → 0.073 / 0.0929, T 0.101 → moves 0.0893, B 0.144 → 0.0734, thickness 0.043 → 0.0271 (0.63). Other cards keep the one-caption view. Apple does not document whether its Liquid Glass separates colors. Cost: three wallpaper asks per pixel. Swapping red and blue gives cyan and blue strips (Exercise 2); a fixed side step instead of `disp × spread` puts fringes on the whole screen (Exercise 3).

**iOS files not yet written.** The lesson's Metal excerpt (`chromaticRefract`, `blackWhiteChecker`) is not compiled. On 2026-09-30 the lesson was generated on a machine without the iOS lab (`/Users/rosen/Code/LiquidGlassLab-iOS` absent) and without Xcode. Next session with the lab: create `chapter09/ChromaticSeparation.metal` + `chapter09/ChromaticSeparationExplorer.swift`, wire them in `Chapter09Screen`, build for iPhone 16 Pro, and remove this note.

## Generated frontier — Lesson 9.14

Not complete. The last lesson of Chapter 9; it answers the chapter checkpoint.

**9.14 teaching contract:**

```text
p = uv − center, d = length(p), sd = d − radius        (both answers start here; sd moved out of the push if)
answer 2, where does the pixel read?  the Lesson 9.13 chain → bent = half4(colRed.r, colGreen.g, colBlue.b, 1)
answer 1, is the pixel glass?         mask  = 1 − smoothstep(−maskBand, maskBand, sd)   (new, maskBand = 0.002)
plain = wall(uv, time)                                   (new: the wallpaper at the pixel itself)
color = mix(plain, bent, mask)                           (new: the one line that combines the answers)
wall(x, y, time) = checker(x + speed × time, y)          (moving test pattern, speed = 0.10 UV/s, moves left)
```

One graphics idea: a lens needs two separate answers per pixel, and the mask gives the glass its own outline (Lessons 9.11–9.13 had no outline; the bend leaked outside the circle up to the orange ring 0.35 from C). No new math: the mask is Lesson 9.3's soft mask with a thin band, the mix is Lessons 8.11 / 9.3, the moving pattern is Lesson 9.8's shift growing with time (Lessons 5.2 / 8.10). Black-and-white checker, glass C = `(0.40, 0.54)` as in 9.13, radius 0.25, band 0.10, dispLen 0.10, spread 0.10. maskBand 0.002 is a chosen constant: about one pixel of a 520-px picture (520 × 0.002 = 1.04); the soft band is 0.004 wide = 2.08 px. Teaching W = `(0.40, 0.24)` at time = 2 s: `p = (0, −0.30)`, `d = 0.30`, `sd = 0.05`, mask = 0 (t = 13 → 1), falloff 0.1565 (t³ shown as 0.422, 3-decimal rounding; Lesson 9.3 kept 0.15625), push 0.016, `dir = (0, −1)`, read points y = 0.2544 / 0.256 / 0.2576 (past the edge y = 0.25), shift 0.20, x + shift = 0.60 → col 2, bent = black, plain = white → W stores white; Lesson 9.13 would store black. At time 0 the colors swap (bent white, plain black, W black). Section 2 defends the thin mask: mixing by falloff gives a 0.20-wide ghost ring (104 px), a hard if gives one-pixel stair steps (4× pixel magnifier on the bottom-left arc, crop 130 × 65 px at (65, 354)). The stepper has 7 steps: pattern, glass + W, read points, the 9.13 output, the mask map, the mix, time = 2 s. Checkpoint box (end of Section 2): different questions (how much glass vs where to read), different widths from one sd (0.004 vs 0.20), neither uses the other, the wallpaper, or the time. Exercises: dispLen = 0 → the glass is invisible (bent = plain; I = (0.40, 0.44)); capsule mask with the circle's read points → outline only in the middle (T = (0.02, 0.54) glass but push 0; M = (0.40, 0.33) push 0.078 but mask 0), a capsule lens needs both answers changed (push direction for any shape: Lesson 10.3); glass at the bottom edge without clamps → a black strip (not see-through, because the 9.13 line sets alpha 1.0); the clamp fixes it, the mask cannot (W₃ = (0.59, 0.98) mask 1, stores navy with clamp). Cost: four wallpaper asks per pixel; bent is unused where mask = 0 (a production shader returns plain early, or runs only on the glass rectangle). iOS plan: maskBand = 1 / resolution.x, time from `TimelineView(.animation)` passed modulo 5 s (0.50 ÷ speed).

**iOS files not yet written.** The lesson's Metal excerpt (`glassLens`, `movingChecker`) is not compiled. On 2026-09-30 the lesson was generated on the same machine without the iOS lab and without Xcode. Next session with the lab: create `chapter09/LensCheckpoint.metal` (with `movingChecker` declared before `glassLens`) + `chapter09/LensCheckpointExplorer.swift`, wire them in `Chapter09Screen`, build for iPhone 16 Pro, confirm `mix(half4, half4, half)` compiles, and remove this note.

## Learner feedback log (latest first)

**2026-10-05 — Lesson 9.13 Section 4, “flattened” steps 7–9, learner report.** “I stopped at step 7 — the text is too long and I can't imagine all the maths in my head … use visuals, maybe arrows pointing from output to original … that table with all the points won't help.” Failed: steps 7–9 explained the pixel mechanism in long captions and a 21-row table; the arrows from output pixels to read points were never drawn. → rule 6 (draw one arrow per output pixel to its read point, mark ×2 / ✕; captions at most four short sentences; tables in a closed box). Fix: steps 7 and 8 show one wide picture — the output pixels (a row above, a column on the left) and the wallpaper squares, one lime arrow per pixel to its read point; ×2 on squares read twice (step 7), ✕ on word rows never read (step 8), brackets for the letter's width (9 pixels against about 6 squares) and the word's height (7 pixels against 11 rows). Step 9 draws the read points of all green squares as dots in the letter's box and four arrows from the corner squares across to their read points. Captions are 3–4 sentences; all tables are in “All numbers of this step, for checking”. No iOS code changed.

**2026-10-04 (4) — Lesson 9.13 Section 4, “flattened” step 6, learner report (strongly worded).** (1) “Right at M the stretch is e ÷ ρ = 0.2029 ÷ 0.12 = 1.691 … two lines from C are 1.691 times as far apart …” — not understandable, and no M was drawn in step 6. (2) The letter buttons did nothing in step 6: `.ctl{display:flex}` overrode the hidden attribute, so the step-9 buttons showed on every step. (3) “1.691 … 1.678 … from where, which two points?” — widths were printed without naming the points they run between. (4) Steps 6–9 must say from which point to which every number runs, with the points visible. Failed: an abstract ratio sentence about an undrawn point; numbers printed without their two endpoints; a 5-decimal √ that rounded Δy² to 0 (0.04037 instead of 0.04042). → rule 8 (every distance, width or difference names its two points where it is printed, and both are labelled). Fix: step 6 works on a chosen letter (buttons and bars work): L and R (its edges at mid-height), P(L) and P(R), the two lines from C, distances from C before/after, and the full width calculation in the side panel; steps 7–9 name every from/to point (read point 11 → 12, left edge → read point 4, read point 7 → 8, T → B, P(T) → P(B), the four box edges) and label them in the zooms; 1.691 is no longer used in steps 6–9. No iOS code changed.

**2026-10-04 (3) — Lesson 9.13 Section 4, “flattened” steps 6–8, learner report (strongly worded).** “The 21 reads fall into only 15 wallpaper pixels: 6 read twice” — no derivation; “stretched 1.691” — is the text scaled by it?; “9 pixels of the row read inside p” — unexplained; bars showing “H” as 1836 px; ratios in the bars with no words; the curved shape of “Haptics” not explained; how the output area was computed. Failed: counts stated without the list they came from; a ratio printed without saying what it divides; “pixels” of a 5× zoomed picture counted over the whole letter box with no size or rule given; 3-decimal letter edges moved a count by one (“pixels 4 to 13” while the table put 13 in “t”). → rule 12 (a count lists its items and rule; a ratio says what it divides; pixels have a stated size; round only where it cannot change a count). Fix: steps 5–9 rebuilt (see the 9.13 contract). No iOS code changed.

**2026-10-04 (2) — Lesson 9.13 Section 4, “flattened” steps, learner report.** (1) The distance chart broke for a short word with an extra point: pink lines on top of each other and overlapping green names. Failed picture: both rulers shared one scale, so five points 0.006 apart drew as one line, and the names were staggered into only two rows. → rule 21 (QA the most crowded data a control allows). Fix: each ruler zooms to its own points (at most 6 ticks), names in one row with leader lines. (2) “stretched 1.691 times” was not explained — is it the area? — and nothing said how a letter gets bigger (“more reads hit the same pixel or something else?”). Failed sentence: “Right at M the stretch is 0.2029 ÷ 0.12 = 1.691”, with no unit (length or area) and no pixel-level picture. → rule 15 (a stretch factor says whether it is a length or an area, and is shown pixel by pixel). Fix: steps 6 (row of pixels, reads 0.591 px apart, wallpaper pixels read twice), 7 (column, reads 1.625 px apart, pixels never read, T/B), 8 (area = 1.691 × 0.615, per-letter pixel counts). No iOS code changed.

**2026-10-04 — Lesson 9.13 Section 4, “flattened” card, learner report.** “The explanation is really scarce … I just take for granted that it's stretched 1.691 times”; wanted more points on the word, a formula for why “Notifications” bends and why the letters stay together, broken into easy steps, and more interaction; “P's ring is not visible”. Failed: the flattened caption gave one number (1.691) and “compare the heights”, with a single point M and no derivation of the bend or the thinning; P's ring (0.2029 from C) ran beside the violet glass edge (0.25) and its gap removed the part under the word, so no ring was visible at the word. → rule 15 (a distortion is explained by following several labelled points through the whole formula; each shape word is derived from their numbers; a value with no short formula gets its equation, a chart, and a table check). Fix: the 6-step “flattened” explanation (see the 9.13 contract). Only the flattened card was reworked, at the learner's request. No iOS code changed.

**2026-10-03 — Lesson 9.13 Sections 2 and 4, learner requests.** (1) Remove Section 2 from “Three copies of one edge” to the end of the section (“I already got my answers”): done; the two pointers to “the next picture” were removed too. (2) “Why the words under the glass stay words” was “poorly explained, very basic graphics and mostly text” for a math beginner. Failed picture: a 3×3 grid of pixels only 0.04 wide inside a 0.18 window, so the stretch it explained was too small to see; a 20-line readout and four long bullets (across/along the push, petal shapes, the push curve's origin) carried the explanation. The figure was added as a Q&A answer and never got the beginner cold read. (3) “You should be able to track a certain text excerpt and how it distorts as the glass moves.” → rule 6 (when an effect reshapes content, the learner picks a piece of it, the piece is tinted in the source and the same tint follows it in the output while the control moves; the effect is drawn large enough to see at a glance) and rule 20 (the cold read also covers every part a revision adds). Fix: the figure “Track a word through the glass” (see the 9.13 contract). No iOS code changed.

**2026-10-02 — Lesson 9.13 Sections 2 and 4, learner questions.** (1) Why do the read points still form the letters, why this distortion, and what sets how much a word is magnified? Failed picture: with **screen** the lab showed wider, thinner and mirrored words, and no picture named those shapes. Rule 7 already requires that picture, so no new rule. Fix: the figure “Why the words under the glass stay words” under the lab (9-pixel grid and its read grid, four places, push graph, measured widths). (2) “every edge shows three copies of itself” was unclear without a picture. Failed sentence: the “What gentle means” paragraph used an effect word that no picture pointed at. Rule 15 already covers this; “copies” was added to its examples. Fix: the figure “Three copies of one edge: one picture per channel”. (3) “every channel jumps by about 1” — “1 is what?” Failed: a number without its quantity or scale → rule 12 (every number says what it measures and on which scale). (4) The orange and navy sentence was prose only, and it was wrong: it gave only green 0.23 and blue 0.22 and called both strips soft, but strip 2 changes red by 0.78 and is a strong raspberry strip, visible in the lesson's own magnifier. → rule 15 (a claim that a color change is strong or weak draws channel bars and prints every channel's change). Fix: the figure “Which color a strip gets, and how strong it looks”; the record and the compare readout were updated. No iOS code changed.

**2026-10-01 — Lesson 9.13 Section 4 lab, learner request.** The learner asked to pick W by clicking any pixel and to see readRed, readGreen and readBlue inside the lab picture itself, not only in the zoom. Done: a click on the lab picture moves W (0.005 steps, kept inside the screen); the three read points are small red, green and blue dots on the pink arrow, each clickable, with names placed clear of the handles (lime lines join close dots to their names). Also fixed: dragging C or W stopped after one step, because each redraw replaced the handle and lost the pointer; the handles are now made once and moved. Note on rule 8: these dots sit on the output picture by the learner's explicit request; the legend says W reads the wallpaper there and points to the zoom. Rule 8 is unchanged.

**2026-10-01 — Lesson 9.13 Section 1, learner report.** Step 5 did not say which push the strips came from: with output steps of 0.01 it was unclear how far each read point reaches. Steps 5 and 6 needed arrows showing what reads what and where each color comes from; "things start to mix up badly". Failed pictures: step 5 switched both pictures to the output, so the read points vanished while the caption still said they "cross the edge"; step 6 labelled the cyan and blue strips without any pixel or read point. Failure → rule link: rule 8 (draw the whole chain for a pixel whose color is explained by its read points: output pixel, spot and push with its length on the wallpaper, read points, one arrow per channel back to the pixel; one pixel at a time with a chooser; print the push next to the 0.01 spacing). Fix: steps 5 and 6 now show the output (left) and the wallpaper of the same part (right) with y rulers, a minimap, a pixel chooser, the pink push arrow labelled 0.10, read-point labels such as "readRed 0.485 white → red 1", red/green/blue channel arrows drawn across both pictures into the pixel, a numbers readout, and the channel bars of the chosen pixel. Step 5 pixels P₁ (0.40, 0.395) yellow, W (0.40, 0.405) red, P₂ (0.40, 0.415) black. Step 6 moves to the pixels just below C, Q₁…Q₄ at y 0.585 / 0.595 / 0.605 / 0.615 (white / cyan / blue / black): their push 0.10 passes C and the read points cross the edge y = 0.50 from black into white. Step 7 (whole output, orange ring, taper magnifier) now names a far pixel F = (0.10, 0.30) with push 0. Also, per rule 10, the lab zoom now fits W and its three read points and prints its factor (for example 3.9×). No iOS code changed.

**2026-09-30 — Lesson 9.12 Section 4 lab, learner report.** At dispLen 0.20 with the glass in the middle and the screen wallpaper, the learner saw two gray circles and a bent “Haptics” and asked which words these are. It also reported that the zoom's W and R dots overflowed the zoom border. Failed pictures: (1) the lab produced turned-around words and gray loops that no picture named → rule 7 (a control that can produce unnamed shapes gets a picture that names them and draws their source); fix: the new figure “What the middle shows at dispLen = 0.20” under the lab (output and wallpaper side by side, pixels 1–7, pink push arrows crossing C, the orange circle 0.20 from C, a table naming each piece, and a “Set the lab to this” button). (2) the zoom kept 3× while the push arrow was longer than the zoom, and the lab window started at −0.15 while a read point can reach 0.01 − 0.20 = −0.19 → rule 10 (every point stays inside its picture; a following zoom lowers and prints its factor); fix: the zoom fits W and R (for example 2.3×), and the lab window starts at −0.22. (3) the label C was white with a dark halo on the light screen picture and read as “©”, which the learner took for another letter. No new rule: rule 11 already says labels take ink from the pixels under them. Fix: the C label in the lab, the zoom and the new figure picks its ink from the pixels under it. No iOS code changed.

**2026-09-30 — Lesson 9.14 generated (no learner feedback yet).** The learner asked for 9.14 "similar to 9.12 / 9.13" and said not to mark any lesson complete. The 9.12 / 9.13 shape is kept. Self-caught during generation and merged into `AGENTS.md`: the stepper's magnifier showed the output picture while its caption put the read points on the wallpaper, so the read-point step was split in two → rule 8 (read points are drawn on the wallpaper picture, never on an output that differs from it); canvas labels crossing black and white cells were hard to read → rule 11 (such labels sit on a light plate). Also caught: drawn read points used exact values while the table used rounded ones (fixed by rule 12, no new rule).

**2026-09-30 — Lesson 9.13 generated (no learner feedback yet).** The learner asked for 9.13 "in a similar way to 9.12" with no corrections to 9.12, so the 9.12 shape (one-line change, stepper, traced table, lab, challenge, three drawn exercises) is kept. Self-caught during generation and merged into `AGENTS.md`: a stepper caption said "move up" while its crossing order only holds moving down → rule 8 (motion names its direction); white labels with dark halos looked heavy on a black-and-white picture, and cyan/white became picture colors → rule 11 (hue not in the picture, labels take ink from the pixels under them); the teaching pixel was chosen on the axis through C so that the new line changes its stored color → rule 18.

**2026-09-30 — scope and comprehension.** The learner reported that Lessons 9.10 and 9.11 and their Q&A rounds got carried away: they tried to prove everything related to the math. The course is 216 lessons long so that each lesson introduces one concept. Failure → rule links: proving side facts in lessons and Q&A → `AGENTS.md` rule 17 (teach the one concept and stop; a side fact gets one sentence or a pointer; no proof rounds); beginner comprehension → rule 20 (cold-read as a total math beginner, every time); visuals → rule 6 (unchanged, confirmed important). Recorded in `USER_PREFERENCES.md` and the auto-memory. Also: QA screenshots and scripts no longer live in the repository → rule 21.

Earlier 9.10 / 9.11 feedback rounds (2026-09-19 to 2026-09-29) are in git history before this date; their lasting rules are already in `AGENTS.md`.

## Unresolved checkpoint — Lesson 9.12

Lesson 9.12 is generated and is not complete. Do not mark it complete until the learner confirms it.

Course progress: 97 of 216 lessons completed.
