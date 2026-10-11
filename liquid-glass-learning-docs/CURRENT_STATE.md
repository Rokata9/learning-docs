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

One graphics idea: three read points per pixel, one per channel, give thin color strips (the fringe) on edges the glass bends. One math idea: build a color from one member of each of three colors (`.r .g .b` = Lesson 8.7 members). Wallpaper: the Lesson 9.7 checker in black and white, so every channel is the same picture and any color comes from the read points. Glass C = `(0.40, 0.54)` (edge y = 0.50 runs close to C), radius 0.25, band 0.10, dispLen 0.10, spread 0.10 (chosen constant). Teaching W = `(0.40, 0.405)`: `p = (0, −0.135)`, `d = 0.135`, `sd = −0.115`, falloff 1, push 0.10, `dir = (0, −1)`, `disp = (0, −0.10)`; readRed `(0.40, 0.495)` white, readGreen `(0.40, 0.505)` black, readBlue `(0.40, 0.515)` black → W stores `(1, 0, 0)`, pure red. On the line x = 0.40: yellow strip 0.39–0.40, red strip 0.40–0.41, each 0.01 = spread × push; the read points cross the edge in order, blue first (stepper step 5: P₁ (0.40, 0.395) yellow, W red, P₂ (0.40, 0.415) black, chosen one at a time, with channel arrows). Black-into-white edges give blue (next to black) and cyan (step 6: Q₁…Q₄ = (0.40, 0.585 … 0.615) just below C; push 0.10 passes C; white / cyan / blue / black). No fringe without an edge between the read points (Exercise 1: W₁ = (0.27, 0.54)). No fringe outside the ring 0.35 from C (push 0); strips thin toward it. Blue gets the longest push because real glass bends blue most (prism, dispersion, chromatic aberration). Gentle: widest strip 0.01 UV = 5.2 px on the 520-px picture, 4.02 pt on a 402-pt-wide view; at 0.40 one edge shows up as three edges. Section 2 ends after “How strong: gentle” (the “Three copies of one edge” and “Which color a strip gets” figures were removed on 2026-10-03 at the learner's request; the record keeps their facts). Section 4 “Track a word through the glass” (screen, spread 0): pick a word (buttons or click either picture), drag C; each letter tinted yellow → blue on the wallpaper and in every output pixel that reads it; both pictures 0.80 wide centered on M (the word's middle); M's ring (cyan) on the wallpaper, P's ring (lime, the pixels that read it) and Q's ring (mirror copy, only when M is closer than 0.10 to C) in the output; rings leave a gap across the word. Stretch along the ring = P's distance ÷ M's distance. Shape cards with C straight above M: unchanged 0.38 (P is M), flattened 0.12 (0.2029 ÷ 0.12 = 1.691, flattened across), stretched + mirror copy 0.03 (0.13 ÷ 0.03 = 4.333, copy 2 at 0.07: 0.07 ÷ 0.03 = 2.333, flipped across the line of the pink arrows), smeared 0 (C on M: the ring 0.10 from C shows M's color). Default: “Haptics”, stretched + mirror copy. ****Since 2026-10-11 (5), flattened step 7 and mirror step 5 are “Why no output pixel is missing”** (the kind-1 description below is superseded; the area step is unchanged): one letter (Letter buttons; default the letter at M), enlarged at pixel size 0.002: the wallpaper on top (the letter box ± 2 pixels, cyan box) with the read point of every output pixel as a dot (black: reads a dark pixel; white: a light one), the output below (the moved letter box ± 3 pixels, lime outline). Caption: (1) every output pixel gets a color: the shader runs once per output pixel and copies the wallpaper color under its read point, never moving wallpaper pixels; (2) no light dots inside a stroke: a pixel's read point sits in the middle between its neighbours' read points, so when they read a dark stroke it does too. Click any output pixel (or a wallpaper pixel, or arrow keys): it gets a white outline, its 4 neighbours lime; on the wallpaper their read points with white lines left–right and above–below crossing at the chosen one. Picture toggle “the other way: push wallpaper pixels forward”: each wallpaper pixel of the letter lands on a dot in the output; ✕ = an output pixel of the letter where nothing lands (“p” of “Haptics”: 109 of 270; neighbouring landing spots up to 1.875 pixels apart). Numbers: the chosen pixel and its neighbours (read point with the chain ⓘ), the two middles (sum, ÷ 2, distance to the chosen read point in pixels), the largest step between neighbouring read points (1.662 pixels for “p”). Copy 1 / 2 on the mirror card. No side chart. Checked over every letter of the 5 words, both cards, both copies and both pictures (210 states, 3797 lines calculator-exact): on the flattened card a read point is at most 0.02 pixel from the middle of its neighbours'; on the mirror card's copy 2 right next to C the rule breaks (up to 20.4 pixels) and a “Where this rule breaks” note says so. A light output pixel with four dark neighbours does occur (a one-pixel light gap in the wallpaper letter itself), so sentence 2 says “an output pixel is light only where the wallpaper itself is light”.

Pixel explorer (2026-10-06 (2); since 2026-10-09 the whole word in one step: flattened steps 7 (pixels) and 8 (area), mirror steps 5 and 6; no Letter row and no letter-by-letter step; read points are orange dots, no grid lines; a white path joins the read points of the row being placed and a read-step box gives Δx, Δy for one output pixel to the right; a “Why the stretched word has no holes” box contrasts reading backwards with moving forwards (6 → 10 pixels)), shared by “flattened” steps 7–9 and “stretched + mirror copy” steps 5–7 (old numbering):** one canvas, the output pixels on top and the wallpaper pixels below it (stacked since 2026-10-08 (2); each picture 1060 × 430, one scale; area part 3: each picture 520 wide with its magnifier to the right), zoomed to a whole letter or the whole word; each output pixel copies the wallpaper pixel that holds its read point (nearest pixel, ⓘ says a GPU blends 4). Controls: letter or whole word, pixel size 0.008 / 0.004 / 0.002 (default) / 0.001, copy 1 / 2 / both (mirror), Play, Place next, Start over and a slider; Advance by 1 / 2 / 5 / 10 pixels or 1 row (one letter: pixels in row order; the word: letter by letter), grid of read points (called “net” before 2026-10-08), ×n counts (lime = copied 2+, pink ✕ = never read), Hide drawings. The grid of read points: one lime dot per placed output pixel at its read point, joined to the dots of its right and lower neighbours in the output (every m-th line when denser than 6 screen pixels, with a note), labelled in the picture. The last press's pixels: white outline, white arrow to the read point, white outline on the copied wallpaper pixel, “copied ×n”; earlier pixels that copy the same wallpaper pixel get a thin lime arrow. White outlines: the letter's left and right edge column on the wallpaper and every output pixel that copies them (copy 2 swaps the sides: the mirror). Click any pixel (either side, arrow keys move it): outlines + one arrow per linked pixel + popup with the full 5-decimal chain and the column/row rule. Side chart: per letter, wallpaper pixels read 0/1/2/3+ times and output ÷ wallpaper, with a sentence under it saying what the bars show; a bar click keeps its popup open and picks the letter (step 7) or outlines it in both pictures (step 8). Area part 3 is zoomed out so C, ρ, e, p_x, p_y are drawn whole, with a magnifier strip under each picture (the same factor, ×9 for “p”) showing box (a, b), m₁ and m₂ (middles of its left and right side) on the violet lines and the violet bar: 0.00802 → 0.0131 (1.6334 ≈ e ÷ ρ = 1.6368; not equal because c is not straight below C); the side chart is an example wedge with distance ruler and gap arrows (0.30 ÷ 0.10 = 3, 0.12 ÷ 0.04 = 3). Part 4 is zoomed in on the box: ρ₋, ρ₊, e₋, e₊ printed at their ticks, Δρ and Δe bars, “toward C” at the edge. Parts 1, 2, 5, 6, 7 print A, ΔA, a/b numbers, ΔA_out, J × ΔA per output box and the totals. Step 1 kind = one letter, kind 2 = word build letter by letter (white outline on the newest letter), kind 3 = area: the letter (or word) cut into boxes 0.008 … 0.001 (checkerboard) and the same boxes through the glass; factor per box = (e ÷ ρ) × |Δe ÷ Δρ| with Δρ = 0.001 (copy 2: Δe ÷ Δρ = −1, the minus is the mirror); total = Σ box area × factor (running total in the table), chart: box totals and pixel counts (read point in the box × (s ÷ 0.001)²) converging on the limit (boxes 0.00025 / 0.0005, unrounded); caption names the integral ∫∫ (e ÷ ρ)(de ÷ dρ) dx dy. Haptics flattened “p”: limit ≈ 1098 small squares on a 1039 box; mirror copy 1 “p” ≈ 4562, copy 2 ≈ 2497. The “flattened” card (C 0.12 above M) opens a 9-step explanation, steps 1–6 as below, 7–9 the explorer (rebuilt 2026-10-04 (3): 5 the shape — slide arrows from the word-box edges, TL/T/TR/BL/B/BR table; 6 letter widths from slid edges, 5 decimals; 7 a row of 21 pixels with a per-pixel table (read point → wallpaper column/row) and a per-square grouping; 8 a column of 13 pixels with push/read table, box rows never read; 9 letter-box area: wallpaper width × height against output small squares (0.001) whose read point lands in the box, big squares shaded in the zoom, a letter chooser, ratio bars). Before that it was an 8-step explanation (steps 6–8 added 2026-10-04: big pixels 0.004 wide around P₃/W₃ — a row of 21 pixels reads points 0.591 px apart, 6 wallpaper pixels read twice, letter “c” 5.50 px → 10 px, stretch e ÷ ρ = 1.691 along the ring; a column of 13 pixels reads 1.625 px apart, 5 word-box pixels never read, 0.615 across, T/B 0.63; step 8 area 1.691 × 0.615 = 1.04 near M, per-letter pixel counts, whole word 0.95; the distance chart gives each ruler its own scale and puts names in one row with leader lines). Before that it was a 6-step explanation (closer view, 0.44 wide): W₁ … W₅ on the word's middle line (gap = width ÷ 4), their distances ρ from C, the rule e − push(e) = ρ solved on a two-ruler distance chart, P = C + e × dir with the moved word-box outline, gaps (neighbours stay neighbours), and T/B (top/bottom of the word box: flattened). Click the word to add a point X; “Hide drawings” shows the word alone. “Notifications”: ρ 0.168 / 0.1335 / 0.12, e 0.2316 / 0.2111 / 0.2029, bend 0.0379, gaps 0.0585 → 0.073 / 0.0929, T 0.101 → moves 0.0893, B 0.144 → 0.0734, thickness 0.043 → 0.0271 (0.63). The “stretched + mirror copy” card (C 0.03 above M) opens a 6-step explanation (2026-10-06, short captions, all tables closed): 1 one point, two pixels — P 0.13 from C (push 0.10 stops 0.03 before C, on M) and Q 0.07 from C (push passes C, lands on M), a push-vs-distance chart and the white “0.10 ring”; 2 copy 1 stretched — W₁ … W₅ 0.015 apart around M, P on the line from C one push farther out, x-ruler chart (0.06 → 0.202 wide); 3 copy 2 mirrored — Q = C − (0.10 − ρ) × dir, all arrows cross at C, x-ruler chart shows the crossing (points kept within 0.03 of M, where copy 2's x order is a clean reverse); 4 the whole word — lime outlines of both copies, numbered letter circles, the mirror line, letter tiles ordered along each copy by direction from C (copy 2 bends around C, so x order would mislead): Haptics 1 → 7 and 7 → 1, Notifications copy 2 is 12 → 2 (letters 1 and 13 outside the 0.10 ring; circles with no room near C are left out and the caption says so); 5–7: the pixel explorer (below). Other cards keep the one-caption view. Apple does not document whether its Liquid Glass separates colors. Cost: three wallpaper asks per pixel. Swapping red and blue gives cyan and blue strips (Exercise 2); a fixed side step instead of `disp × spread` puts fringes on the whole screen (Exercise 3).

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

**2026-10-11 (7) — Lesson 9.13 Section 4, step 7, learner questions.** Asked to show “the pair one above the other”, to say which direction a step is (“only vertical? signify so”), whether reading every 1.66 pixels means skips and a smaller letter, and whether the left–right 0.6 is linked to step 6's P(L)–P(R) ratio. Failed: the largest step was printed without its direction or a mark in the picture; the two directions were not separated. Rule 8 (a motion names its direction; every printed distance names its two points, drawn) already covers this (no new rule). Fix: the picture marks the largest step in orange (its two output pixels, the bar between their read points, “1.66 pixels, up–down: one output pixel below the other”), and the side label gives the chosen pixel's two steps by direction (left–right 0.62, stretched; up–down 1.59, squeezed). The numbers compute both steps (Lesson 9.1) and 1 ÷ step = output pixels per wallpaper pixel, with ⓘ links: step 6's width of the letter (“p”: 1.68; 1 ÷ 0.62 = 1.613) and step 5's thickness at M (0.63; 1 ÷ 1.59 = 0.629), each saying why it is close but not equal. 57 states swept, 2679 lines calculator-exact. No iOS code changed.

**2026-10-11 (6) — Lesson 9.13 Section 4, step 7, learner question.** “in pixels: 0.00332 ÷ 0.002 = 1.66 — does that mean we have 1.66 more reads?” Failed: the line gave a number with no words for what it measures. Rule 12 already covers this (no new rule). Fix: under it, “→ one output pixel further, the read point moves 1.66 wallpaper pixels (without the glass: exactly 1). More than 1: the glass squeezes here … a dark stroke at least 2 pixels thick still gets a read point”; the same kind of line under the 1.875 of “the other way”. No iOS code changed.

**2026-10-11 (5) — Lesson 9.13 Section 4, step 7, learner report (angry).** “This is a joke, just going through a column … what does this prove? … useless visual to the right … You're just targeting quantity, not quality; my ask was simple — what's the proof, visualize it, state with a sentence or two why the picture is not missing pixels.” Failed: the (4) rebuild showed data (a column walked pixel by pixel, a strip chart of arrows) instead of the argument; the reason was never stated as a reason. → rule 15 rewritten (proof first in one or two sentences, one picture that shows exactly that proof, a toggle to the way that fails; data is not a proof). Fix: step 7 is “Why no output pixel is missing” (see the 9.13 contract). No iOS code changed.

**2026-10-11 (4) — Lesson 9.13 Section 4, “flattened” step 7, learner report (strongly worded).** “I didn't understand a thing … poor work.” Failed: (1) the box “Why the stretched word has no holes” (a block of text with a forwards/backwards diagram; “A stroke wider than the read step is never skipped whole …” unclear); (2) the read-step box (white box with orange and gray arrows): “completely useless”; (3) text separate from the build instead of explaining each placed pixel; (4) the read points of a whole-word row lie on a curve, which makes “no light dots” hard to check; (5) the output above the wallpaper, although the output is what reads and its pixels lie below their read points. What the learner wanted proven: an output pixel reads dark or light, and when the word is squeezed or stretched no light dots (“white wrinkles”) appear inside a letter. → rule 15 (a pixel-level claim is shown on one straight line through C, one pixel at a time, the caption about the pixel just placed; no extra mini-charts or text blocks) and rule 6 (wallpaper on top, output below, arrows up). Fix: step 7 rebuilt as “No light dots inside a letter” (see the 9.13 contract); mirror step 5 shares it. No iOS code changed.

**2026-10-11 (3) — Lesson 9.13 Section 4, “flattened” steps 6–7, learner requests.** (1) Step 6: mark the small triangle that √(Δx² + Δy²) measures, “just lines and the usual letter symbols, a hint” (a magnifier was tried and dropped at the learner's word: no zoom wanted). Now the output picture draws an orange Δx line from P(L) straight across, an orange Δy line up or down to P(R), and a white line P(L)–P(R); the labels Δx and Δy sit on their lines, the width label reads “width √(Δx² + Δy²) = …”, and the readout names the white line and the orange sides (Δx = P(R).x − P(L).x = …). The paragraph about the side chart is bold. (2) Step 7: “remove the expand-collapse section, I need the calculations always visible.” Failed: rule 6 put tables in a closed “for checking” box. → rule 6 (tables stay visible, never collapsed). Fix: the explorer's numbers (flattened step 7, mirror step 5) and mirror steps 1–4 now show “All numbers of this step” open. QA: step 6 on 6 letters across 4 words (labels clear), both steppers' table steps, no script errors. No iOS code changed.

**2026-10-11 (2) — Lesson 9.13 Section 4, “flattened” step 6, learner report.** The step's table again started far down: it sat under the whole grid, and step 6's gray panel (caption, width readout, bar chart) is about 1280 px tall against 550 px of pictures. → rule 19 (the numbers table sits beside a tall side panel). Fix: `#twOut` is now row 2 of the picture grid. After every redraw (and on size changes, through a ResizeObserver deferred by one frame) the page lays the table out both ways — under the two pictures with the panel spanning both rows, or at the full width under everything — and keeps the one whose bottom is higher. Result at 1920: beside the panel in flattened steps 3, 6, 7 and mirror step 5; full width elsewhere (in steps 4–5 the narrow table would end lower). QA: every step of both steppers and both plain cards, no script errors, no horizontal overflow; tables fit their column. No iOS code changed.

**2026-10-11 — Lesson 9.13 Section 4, “flattened”, learner report.** (1) The table of each step sat under the long legend, far from the pictures. → rule 19 (a stepper's numbers table sits under its pictures, above the legend). (2) Step 2 headings said point.x / point.y for the points W. (3) “ρ = √(Δx² + Δy²) … renders P”: `table.trace th{text-transform:uppercase}` turned every heading's ρ into Greek capital Ρ (looks like P) and e into E (read as epsilon); copied text showed the real ρ. (4) “From where does epsilon come?”: e, the distance from C to the pixel P, was named only in the step 3 caption and showed as E in the headings. → rule 3 (no case transform on text with names or symbols; headings use the picture's names, typeset formulas as math, say what each symbol is). (5) Step 5, “The edge sags in the middle; the far edge sags too, a little less (0.0734 against 0.0665)”: two numbers with no point names (B and BL) and a shape word drawn nowhere. Rules 8 and 15 already cover this (no new rule). Fix: `#twOut` moved above the legends; trace headings keep their case; the stepper headings (steps 1–6, and the area table of parts 6–7) are MathML from the page's LaTeX converter (a dot between names, W.x, is now a plain dot); step 2 uses W.x / W.y (a note for the row X); step 3 rows read W₁ → P₁ and its caption and headings say “e is the distance from C to P … no short formula, the chart reads it off”; the legend says the same. Step 5 draws the line P(TL)–P(TR) and P(BL)–P(BR) with a white drop to P(T) and P(B), labelled “bend …” (the number alone on short words), prints both bends under the table (Haptics: 0.6453 − 0.623 = 0.0223 and 0.6724 − 0.658 = 0.0144), and the Curved line names every point with its slide. QA: both steppers, every step, no script errors; step 5 swept over the 5 words (labels clear, bends calculator-exact); no horizontal overflow at 1920. No iOS code changed.

**2026-10-09 — Lesson 9.13 Section 4, pixel explorer, learner requests.** (1) “Remove the separation of letters … build a readable version of the whole word”: the letter step and the letter-by-letter step became one step, the whole word pixel by pixel (flattened 9 → 8 steps, mirror 7 → 6). (2) “See the direction in which pixels are read advancing … a small visual, top/bottom or left/right as we progress in the output from left to right”: a white path joins the read points of the row being placed (broken where the row leaves the word), a white arrow runs under the output row, and a read-step box draws the read point's move for one output pixel to the right against a gray 1-pixel arrow, with the Δx, Δy lines in the caption (copy 2 reads leftward: the mirror). (3) A short paragraph on why the stretched word has no holes: backwards reading fills every output pixel, forwards moving would leave holes (a 10-pixel / 6-pixel figure, one pixel size). (4) “The net is rather confusing, just drawing a point is enough, a color other than green”: read points are orange dots only. Requests, not corrections; rule 15 updated to the whole-object, dots-only, read-direction form. Sweep: 400 states × 5 words × copies × pixel sizes × steps, no errors; 840 read-step lines calculator-exact. No iOS code changed.

**2026-10-08 (2) — Lesson 9.13 Section 4, pixel explorer, learner request.** “Put on top what's the output (write) and below it the read (wallpaper); it'll be much cleaner to grasp.” Done for the explorer (flattened steps 7–9, mirror steps 5–7): output above, wallpaper below, arrows run down; area part 3 puts each magnifier beside its picture; part 6 prints J without the “J ” prefix (narrower boxes) under the label “J in each box”. Section 1 steps and the explanation steps 1–6 keep their side-by-side pictures. A layout preference for every output/wallpaper pair with arrows → rule 6. Sweep: 265 states incl. clicks in both pictures, no errors. No iOS code changed.

**2026-10-08 — Lesson 9.13 Section 4, “flattened” steps 7–9, learner report.** (1) Step 7: wanted to place the output → wallpaper arrows one by one (“Place next”) and to choose how many pixels the slider advances (2, 5, 10); asked what the “net” depicts. Failed: a metaphor name (“net”) that no in-picture label or caption explained. → rule 3 (“net” added to the banned names), rule 15 (a place-next button with a chosen step, one arrow per placed pixel). (2) A second LETTER row under Back/Next did nothing in steps 7–9: `.ctl{display:flex}` beat the hidden attribute again (same bug as 2026-10-04 (4), fixed locally then). → rule 21 (every visible control works; `[hidden]` beats display classes); the page now has `[hidden]{display:none!important}`. (3) Step 8: a bar click flashed its popup, because the same click redrew the chart; and nothing said what the bars mean. → rule 10 (a click that redraws reopens its popup), rule 7 (every chart says what one bar stands for). (4) Step 9: ρ and e were printed but C was off the zoomed pictures; “the box … gets e ÷ ρ times as long” named no box and no direction; the gap/distance chart jumped from “gap ÷ distance is the same” to “gap ÷ gap = e ÷ ρ” without the step and without pointers. → rule 8 (both points of a printed distance are drawn; zoom out, magnifier for the small part), rule 15 (a shape word is a bar between two named points before and after; same-factor arguments read “k times as far → k times as wide”). Fix: see the 9.13 contract (pixel explorer and area parts). Audit: all states of both steppers × 5 words × copies swept with no errors or NaN; 465 arithmetic lines and 12 roots of the area step, calculator-exact. No iOS code changed.

**2026-10-07 (2) — Lesson 9.13 Section 4, area step, learner report.** The four area cards failed a total integral beginner: card ③ inserted numbers with no origin (e “read off the chart” with no chart on screen; Δρ a picture choice never named), and jumps were compressed. Rule 19/12 already cover this (no new rule). Fix: the area step is now an 8-part walkthrough (Part buttons + Back/Next): 1 R = w × h; 2 cut into 3 × 6, ΔA; 3 along = e ÷ ρ for a clicked box, every line from the one above (ρ via Lesson 9.1, e looked for with a push-rule check in ⓘ); 4 across = Δe ÷ Δρ (Δρ = 0.002, e± 8 decimals; copy 2: −1, the mirror); 5 J; 6 Σ as nested loops with all 18 rows (total 1098.059); 7 finer grids with all digits (1098.048 → 1098.256, each change ¼ of the last), lim, dx/dy, ∫, ∬, R and the iterated form ∫∫ with edges as nested loops; 8 the formula symbol by symbol + what integrals are for. Every row has a badge (screen picture, our choice, the glass, looked for, part N, found here) and a “Formulas so far” panel under the chart. MathML from a small LaTeX converter (LaTeX kept in <annotation>). Finished 2026-10-08: audit of the 8 parts over 5 words × both cards × copies × first/middle/last letter × clicked boxes × all part-7 grids × every ⓘ: 39225 lines, calculator-exact. It caught a real bug: a value exact to 4 decimals was printed with 4 but carried on with 3 (ΔA = 72.4104 for “H”); the helper now carries the printed value. Part 7's claim “each change is about a quarter of the one before” failed for 29 of 105 letter/copy cases (rounding of tiny changes; sharp J near C on the mirror card; copy 2's boxes left out at the 0.10 ring), so part 7 now prints the last change (at most 0.18 small squares in all 105 cases) and, in copy 2, says the settled area is that of the part of R inside the 0.10 ring. Area-step labels avoid each other; both legends and the copyable record describe the 8 parts, and the record's LaTeX is escaped (inside a JS template string, \text and \rho had become a tab and a carriage return). No iOS code changed.

**2026-10-07 — Lesson 9.13 Section 4, area step, learner request.** The learner liked the pixel “player”; for the area formula they remembered only that integrals suit uneven shapes and asked for “just enough” explanation, in LaTeX. Done: four cards under the area pictures (flattened step 9, mirror step 7): ① an uneven shape covered by boxes 1 / 0.5 / 0.25 / 0.1 (count × box area settles on the true area: the integral as a settling sum); ② each box changes size by J, so the output area is a sum over the easy wallpaper rectangle R; ③ one box between two lines from C, before and after the glass, with a slider: along = e_mid ÷ ρ_mid, across = Δe ÷ Δρ (Δρ = 0.02 drawn), J = along × across, exact for that box, → (e/ρ)(de/dρ) as Δρ → 0; copy 2 shows the inside-out box and J < 0; ④ the whole formula and the checks (no glass: J = 1; copy 2: de/dρ = −1, the mirror). Math is typeset with native MathML (no library, works from file://); each formula keeps its LaTeX in an <annotation>, and the record carries the formula in LaTeX. Audit of the cards: 1866 lines, calculator-exact (a 5-decimal result no longer drops its trailing zero). A request, not a correction: no new rule. No iOS code changed.

**2026-10-06 (2) — Lesson 9.13 Section 4, last steps of both steppers, learner report.** “The last two steps for this case and the last three for flattened are not so useful with that big zoom”; wanted a more convincing, visual proof that stretching (fewer points read by more pixels) and shrinking (more points read by fewer pixels) keep whole letters — one letter, a few, all in a sequence building the final result — rich and clickable; and asked whether the area of the distorted shape has a formula (even with integrals). Failed pictures: flattened steps 7–9 and mirror steps 5–6 zoomed onto a strip of 11–21 pixels at 0.004, so no letter was ever visible whole and nothing showed why it stays whole. → rule 15 (pixel-by-pixel pictures show the whole object at a recognisable zoom, built up step by step, clickable). Fix: the pixel explorer (see the 9.13 contract) replaces flattened 7–9 and mirror 5–6, plus an area step (mirror step 7) with the formula (e ÷ ρ) × (Δe ÷ Δρ) summed over boxes and named as the integral. Audit: 16553 lines over both steppers, 5 words, popups clicked, all calculator-exact; `fz` and `f5` now print “−” for negatives (flattened step 6 had ASCII hyphens). No iOS code changed.

**2026-10-06 — Lesson 9.13 Section 4, “stretched + mirror copy” card, learner request.** “Create a stepper in a similar fashion to the flattened option, but for stretched + mirror copy — keep wording less and visuals more.” Done: a 6-step explanation (see the 9.13 contract) with captions of at most four sentences, side charts in every step, and every number in a closed “for checking” box; arithmetic audited mechanically (6084 lines, 5 words × 6 steps, all calculator-exact). A request, not a correction: no new rule. Self-caught: the reused `readChain` tooltip of the flattened steps does two operations in one line (`read.x = C.x + rr × ux`) and prints negative 5-decimal values with an ASCII hyphen; the new steps use their own one-operation chain, the flattened steps are unchanged. No iOS code changed.

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
