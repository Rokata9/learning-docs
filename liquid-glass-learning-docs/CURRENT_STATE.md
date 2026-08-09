# Liquid Glass Android course — current state

**Authoritative learner-confirmed progress:** 45 of 216 lessons completed.

## Completed

- Chapters 1, 2, 3, and 4 are complete.
- Lessons 5.1 through 5.6 are complete.
- The latest completed lesson is **5.6 — Read an easing graph**.

## Not completed

- **Lesson 5.7 — Velocity** is generated and remains the current learner checkpoint.
- **Lesson 5.8 — Spring intuition** is generated ahead and is not learner-complete.
- **Lesson 5.9 — Overshoot and settle** is generated ahead and is not learner-complete.
- Chapter 5 is in progress.

## Course pointers

- **Next unresolved learner checkpoint:** Lesson 5.7.
- **Generated frontier:** Lesson 5.9 — Overshoot and settle.
- **Generated-ahead lessons:** Lessons 5.8 and 5.9.

## Latest authoritative Lesson 4.8 rewrite — visual layer movie and per-position algorithm

The learner rejected the preceding Lesson 4.8 rewrite without reading its long response because the explanation still depended too heavily on prose. The terms `outer target` and `inner target` did not create a usable mental picture. The lesson also failed to maintain value-origin tooltips consistently, described straight and premultiplied RGBA instead of calculating both in parallel, and did not show every intermediate image after every operation.

This delivery supersedes all earlier Lesson 4.8 correction packages.

### Visual-first structure

The lesson begins with four rendered images:

```text
complete pattern image
→ complete full-size mask image
→ masked-pattern intermediate image
→ final image over navy
```

The central layer explanation is now a seven-step movie. Every step shows:

```text
parent target image
pattern target image
mask target image
complete intermediate result after the step
active drawing target
exact input → operation → output
exact Kotlin line
```

A rotatable CSS 3D stack shows the layer order. Exact 2D front-view thumbnails remain visible below it so perspective is never the only evidence.

### Exact Android target creation

The implementation uses two explicit `Canvas.saveLayer` calls and no `graphicsLayer` modifier:

```kotlin
canvas.saveLayer(fullBounds, contentGroupPaint)
canvas.saveLayer(fullBounds, dstInMaskPaint)
```

The first call creates the pattern-only target. The second creates the full-size mask target. The mask target is explicitly initialized with alpha `0` across its complete bounds before the capsule writes the selected inside alpha.

### Per-position algorithm

The lesson includes an inside/outside microscope. One selected Canvas coordinate displays:

```text
pattern pixel at (x, y)
mask pixel at the same (x, y)
DstIn intermediate output pixel
final source-over-navy pixel
```

A transparent mask pixel is now described as a valid RGBA input with alpha `0`, not as missing data. The API-level result is calculated at matching positions. A GPU may optimize physical work only while preserving that required result.

### Straight and premultiplied cases

The lesson states the representation boundary at the beginning:

```text
Compose Color input boundary
→ straight sRGB RGBA

DstIn contribution arithmetic
→ premultiplied sRGB RGBA
```

Two complete cases are shown in parallel:

```text
Case A: content alpha 1.00, mask alpha 0.60
Case B: content alpha 0.50, mask alpha 0.60
```

Each RGB or RGBA tuple has a small rounded color chip. Premultiplied tuples use a chip that displays the represented color rather than interpreting premultiplied numbers as straight channels.

### Value provenance controls

Values inherited from earlier sections, selected by controls, fixed by an API, or derived in the current section have small click-controlled information marks placed beside the value like a superscript. The popup states origin, representation, and next consumer. Essential mathematics remains visible without opening it.

### `graphicsLayer` versus explicit `saveLayer`

The new isolation diagram compares four rendered arrangements:

```text
current safe design
→ explicit pattern-target Canvas.saveLayer + full-size mask-target saveLayer

safe alternative
→ graphicsLayer(Offscreen) + full-size mask saveLayer

unsafe design
→ no pattern-isolation method

redundant design
→ graphicsLayer + explicit pattern-target saveLayer + mask-target saveLayer
```

The current code works without `graphicsLayer(Offscreen)` because the first explicit `saveLayer` replaced that pattern-isolation role. Removing both pattern-isolation methods would allow `DstIn` to modify whatever pixels are already in the parent destination, including navy.

### Visible cost model

The lesson shows explicit temporary-target counts and one adjustable RGBA8 memory estimate. It distinguishes the model from actual GPU allocation, which can differ because of format, alignment, tiling, reuse, and driver behavior.

### Android companion

Changed Android file:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/MasksExplorer.kt
```

`Chapter04Screen.kt` remains unchanged because it already contains complete-screen and direct-child previews in light and dark modes.

### Reusable rule recorded

`AGENTS.md` now contains **Visual-first intermediate-state and value-annotation gate**. It requires actual intermediate images, parallel straight/premultiplied cases, RGB/RGBA color chips, superscript-style provenance controls, per-position algorithm graphics, isolation comparisons, target-count cost diagrams, and verification of every interactive state.

## Learner evaluation — canonical gold-standard exemplar

On 2026-08-03, the learner explicitly described the final visual-first Lesson 4.8 edit as **“world-class explanation level.”** This is a strong positive teaching signal. The exact visual-first state is now the canonical exemplar for future lessons involving layers, buffers, masks, compositing, or other invisible intermediate graphics state.

The exemplar is the state delivered by:

```text
liquid-glass-lesson-04-08-visual-layer-movie-rewrite-learning-docs.zip
liquid-glass-lesson-04-08-visual-layer-movie-rewrite-android.zip
```

The exemplar’s defining qualities are:

```text
visible scene objects before terminology
→ every target and intermediate image after every operation
→ active target plus exact Kotlin line
→ optional 3D ordering view plus authoritative 2D front views
→ same-coordinate pixel microscope
→ parallel straight and premultiplied worked cases
→ color chips beside every RGB/RGBA tuple
→ superscript-style value-provenance controls
→ safe / alternative / unsafe / redundant isolation diagrams
→ explicit target-count, bounds, pass-count, and memory model
```

This positive review does **not** mark Lesson 4.8 complete. The learner indicated that the files still need to be replaced locally. Completion remains pending local application/testing and an explicit completion statement.

Only the Markdown state and policy files change in the present documentation update. The lesson HTML and `MasksExplorer.kt` remain exactly the previously praised visual-first versions.

## Delivery rules

- Learning-doc ZIPs contain only learning-document files changed by the current delivery.
- Android ZIPs contain only Android files changed by the current delivery.
- Do not create an empty Android ZIP when Android code did not change.
- Do not embed complete Android source files or source-tab viewers in lesson HTML. Use short attributed excerpts only when needed for explanation or a coding challenge.
- Include both complete-screen and direct-child Compose previews for each newly active child composable.
- Starting with Lesson 3.1, HTML and Android lesson chrome follows the operating-system light/dark preference. Exact instructional colors remain unchanged.

## Response footer

Every lesson-related response ends with:

`Course progress: X of 216 lessons completed.`

Then include a clearly labelled best-effort estimate of the remaining conversation context. Count only learner-confirmed completion.

## Lesson 4.8 targeted clarification — mask construction versus mask application

The praised visual-first Lesson 4.8 remains the canonical exemplar. A targeted clarification now separates three exact operations:

- `BlendMode.Src` runs while constructing the mask target and explicitly writes transparent RGBA across the complete bounds.
- `BlendMode.DstIn` runs when the mask target is restored into the pattern target. The pixel-level multiplication taught by the microscope belongs specifically to this operation.
- ordinary source-over runs later when the masked-pattern intermediate is restored over the navy parent.

Checkerboards in the lesson are labelled as transparency visualizations, not stored mask pixels. Lesson 4.8 was later learner-confirmed complete. Learner-confirmed progress is 36 of 216 while Lesson 4.9 remains unresolved.


## Lesson 4.9 generated — soft edges and antialiasing

Lesson 4.8 is learner-confirmed complete. The gold-standard visual-first state remains the canonical exemplar. Lesson 4.9 starts from the completed per-position mask-alpha model and introduces geometric coverage: the fraction of one pixel-sized area occupied by the shape in the controlled teaching model.

The lesson separates the mathematical boundary, pixel grid, and rendered transition band. It shows complete intermediate images, an interactive coverage grid, parallel opaque/translucent and straight/premultiplied cases, and the exact order `geometry → coverage → edge alpha → source-over destination`. The browser and Android explorer now use the same labelled 12×12 teaching-sample estimate for the main microscope; neither artifact claims Android uses that implementation internally.


## Lesson 4.9 clarification — why coverage works and finite sampling limits

Learner review confirmed the main lesson was clear and requested that the following useful clarification be retained in the lesson:

- lower alpha is not inherently attractive; the useful alpha encodes the geometric coverage of the exact boundary position;
- intermediate coverage values help the discrete pixel grid approximate a continuous line or curve;
- the same local coverage contract applies to lines, curves, waves, text, and arbitrary paths;
- the browser and Android main microscopes use the same 12 × 12 explanatory estimator; this is not a claim about Android's internal sample count;
- finite sampling can miss a thin feature between all selected sample locations;
- real renderers may use analytic, multisample, distance-based, or hybrid methods;
- antialiasing coverage remains distinct from neighboring-pixel blur.

Lesson 4.9 remains learner-incomplete pending review of this clarification. Learner-confirmed progress remains 36 of 216.

## Latest Lesson 4.9 clarification — sample centers, thin bands, and direct geometric coverage

The learner identified three ambiguities in the finite-sampling graphic:

- the orange `Thin feature` was not explained as a narrow band with two boundaries;
- the visible sample-marker circles looked as though they touched the orange band even when the tested center coordinate was outside;
- the lesson showed a complete sampling miss but did not show a partial result that was still numerically inaccurate or a mitigation that avoided adding samples.

Lesson 4.9 now:

- renames the object **Thin band · two edges**;
- draws its top and bottom boundaries separately and keeps its center guide visually secondary;
- draws equal-area subcells and a tiny center pin for each sample;
- states that the center pin, not the marker ring, supplies the inside-or-outside vote;
- shows a 5% narrow band crossing subcells while a 4 × 4 center pattern reports zero;
- shows a straight-edge pixel whose true geometric coverage is 40% while a 2 × 2 sample estimate reports 50%;
- shows **analytic coverage**, meaning direct edge-to-pixel intersection and area calculation, as one mitigation that uses no extra center samples;
- keeps the implementation boundary clear: Compose supplies the path and Android's renderer owns rasterization.

No Android source changed in this clarification. Lesson 4.9 remains incomplete pending learner review. Progress remains **36 of 216**.



## Lesson 4.9 clarification — signed distance and the coverage estimate

The learner asked for the exact logic behind `estimateCoverage`, especially the former `signedSide` expression. The lesson and Android source now expose the complete chain:

```text
subcell index
→ center-probe coordinate
→ movement from reference C = (4.5, 3.5)
→ projection along a unit normal arrow
→ subtract boundary offset
→ signed distance from the shifted boundary
→ inside/outside vote
→ inside votes ÷ 144 equal-area probes
→ coverage estimate
```

The angle control is now named **Boundary normal angle**. The normal is perpendicular to the visible boundary. The shallow and steep presets were corrected to match the visible boundary slope.

The vague code variable `signedSide` is replaced by `signedDistanceFromBoundary`. The HTML shows the reference point, unshifted and shifted boundaries, normal arrow, selected probe, closest boundary point, exact X/Y contributions, one inside result, one outside result, and the current `insideCount / 144` calculation. The main browser microscope now uses 12×12 probes, matching the Android explorer. Lesson 4.9 remains unresolved and progress remains 36 of 216.



## Lesson 4.9 replacement — visual-first signed distance and coverage path

The preceding signed-distance clarification is rejected as an expert-first explanation. It presented correct formulas but did not first establish the nested spatial scales or derive its symbols and angles.

The replacement now uses this exact sequence:

```text
9 × 6 complete toy output image
→ select output pixel (4, 3)
→ derive its bounds and center C = (4.5, 3.5)
→ divide that one pixel into 12 × 12 = 144 equal-area teaching subcells
→ choose one subcell-center probe P
→ start from the visible pink boundary tilt 52°
→ derive the perpendicular blue normal angle 38°
→ build Δ = P − C
→ project Δ onto the one-dimensional normal ruler
→ subtract the boundary shift
→ read negative / zero / positive on that ruler
→ repeat the same test for all 144 probes
→ coverage estimate = insideProbeCount ÷ 144
```

The lesson explicitly states that 9 × 6 and 12 × 12 are different levels. The former is the whole 54-pixel teaching image. The latter exists inside one output pixel. The course anchor `C` is no longer described as an arbitrary fixed reference; it is derived from the bounds of course pixel `(4, 3)`. The visible boundary angle is controlled, while the perpendicular normal angle is derived. Projection is shown graphically before the dot-product formula, and the sign is shown on a magnified normal-axis ruler.

`SoftEdgesAntialiasingExplorer.kt` now uses the same names and order. Its comments explain the scope of the 144 probes, the angle derivation, `C`, `P`, `Delta`, the two normal contributions, the projection, boundary subtraction, sign convention, and final vote count.

Lesson 4.9 remains learner-incomplete. Learner-confirmed progress remains **36 of 216**.

## Lesson 4.9 replacement — complete vector-component and signed-distance derivation

The preceding visual signed-distance replacement is also rejected as incomplete. It improved the object order but still left the essential vector arithmetic unexplained. In particular, it did not derive why the unit normal has components `cos 38°` and `sin 38°`, why horizontal and vertical movement are multiplied by those components, why the two results are added, where `0.1200` comes from, or what metric the phrase `nearest inside probe` used.

The current replacement uses ten linked visual states:

```text
1. Separate the 9 × 6 output image, one selected output pixel, and its 12 × 12 probe grid.
2. Choose one probe P and state exactly why that probe was selected.
3. Show the learner-controlled pink boundary tilt of 52°.
4. Derive the perpendicular 38° unit normal with a visible right triangle.
5. Show 0.1200 as the controlled C → B distance and calculate B = C + 0.1200 × n.
6. Decompose C → P into horizontal C → H and vertical H → P movement.
7. Convert the horizontal move into a change on the blue normal ruler.
8. Convert the vertical move, add the two ruler changes, and only then name projection / dot product.
9. Put probe coordinate Q and boundary coordinate B on the same ruler; subtract and interpret the sign.
10. Repeat the same vote for all 144 probes and calculate 94 ÷ 144 = 0.6528.
```

The unit normal now has an explicit geometric derivation:

```text
pink boundary tilt = 52°                  chosen input
normal tilt = 90° − 52° = 38°            derived
unit normal length = 1
normalX = cos 38° = 0.7880                horizontal leg of unit triangle
normalY = sin 38° = 0.6157                downward vertical leg
```

The projection formula is no longer presented as a definition. The lesson first proves that a one-unit horizontal move advances `normalX` units on the normal ruler, and a one-unit vertical move advances `normalY` units. A movement of `deltaX` and `deltaY` therefore changes that same ruler by `deltaX × normalX` and `deltaY × normalY`. The two changes add because `C → P` is those two consecutive moves measured on one ruler. The mathematical name is introduced afterward.

The boundary input is now visible before its formula:

```text
d = 0.1200 logical grid units             chosen by the C → boundary slider
B = C + d × n                              boundary point on the normal through C
probe ruler coordinate Q = 0.1180
boundary ruler coordinate B = 0.1200
signed distance = Q − B = −0.0020
```

The helper controls now say `closest to the boundary on the orange/blue side`. The metric is smallest absolute signed distance to the pink boundary, not distance to C. The main selected-pixel graphic and the focus panels reuse the same named points `C`, `P`, `B`, `H`, `Q`, and `F`. A tiny real `P → F` distance is marked at full scale and magnified separately rather than being enlarged silently.

`SoftEdgesAntialiasingExplorer.kt` follows the same causal order in its UI, diagrams, helper names, and comments. Lesson 4.9 remains learner-incomplete. Learner-confirmed progress remains **36 of 216**.



## Lesson 4.9 targeted correction — P normal coordinate and visible point geometry

The learner understood Step 6 but identified the missing bridge in Steps 7–9. The lesson calculated a value named `P normal coordinate` without defining it as a coordinate on a visible axis. The point legend also disagreed with the SVG: H and Q were circles instead of the advertised square and diamond, F was calculated but not rendered, and the focus panel claimed to contain points it did not show.

The corrected authoritative Lesson 4.9 state now defines `P normal coordinate` as the signed coordinate of Q on the blue normal axis through C, with C assigned coordinate zero. Step 7 visibly maps H parallel to the pink boundary onto that axis. Step 8 adds the vertical contribution, places Q as a green diamond, and proves that P→Q is parallel to the pink boundary because P−Q has zero normal component. Step 9 shows C, Q, and B on the same axis, renders F as an open red circle on the boundary, and connects the equal gaps `|P→F| = |Q→B|`.

The point-shape contract is now exact: C/P/B are filled circles, H is a square, Q is a diamond, and F is an open circle. Focus panels name only the points they actually render. `SoftEdgesAntialiasingExplorer.kt` uses the same definitions, shapes, lines, and comments. Lesson 4.9 remains learner-incomplete. Progress remains **36 of 216**.


## Lesson 4.9 targeted correction — define Q before projection and remove the H projection

The learner identified that the previous Steps 7–8 changed arithmetic without first explaining what quantity the projection was intended to produce. The dashed `H → normal axis` construction is rejected and removed. `H` remains only as a visual waypoint for `deltaX` and `deltaY`.

The authoritative walkthrough now uses this order:

```text
define Q geometrically
→ define P normal coordinate as signed C → Q coordinate
→ explain why the new axis requires Delta = P − C
→ show one-unit horizontal and vertical projection rates
→ scale them by deltaX and deltaY
→ accumulate both signed changes on one normal-coordinate ruler
→ name the sum the dot product
→ construct Q = C + t*n and verify (P − Q) dot n = 0
→ compare Q with boundary point B
```

A dedicated accumulator diagram now shows `0 → horizontal partial coordinate → Q coordinate`. The Android card and comments use the same order. Lesson 4.9 remains learner-incomplete. Progress remains **36 of 216**.


### Lesson 4.9 repair — interaction validation and overlay-drawer rule

The failed Step 8 revision shipped with a JavaScript syntax error. That single error prevented both SVG diagrams from rendering and disabled the walkthrough buttons. It also left Geometry controls in a side column even though the requested layout required full-width diagrams and an overlay drawer.

Reusable rule: after any scripted HTML edit, run JavaScript syntax validation before visual QA. Then execute the actual Back/Next controls in Chromium. A screenshot of the initial page is insufficient. For wide proof diagrams, place geometry controls and walkthrough text in one right-side overlay drawer with explicit tabs; do not reserve horizontal diagram width for controls. The drawer may cover the diagram while open.

For projection explanations, separate: (1) choosing the measurement axis, (2) defining the target coordinate, (3) learning one-unit horizontal and vertical conversion rates, and (4) applying those rates to the actual signed Delta values. “One unit right” is a reference calibration, not a claim that the actual movement goes right.


## Lesson 4.9 layout clarification

The 9 × 6 overview is now a compact live orientation diagram. The full signed-distance walkthrough remains below the scale cards and the chosen-versus-derived value panels. Geometry and walkthrough controls live in a click-only overlay drawer opened by a small icon. The drawer closes through ×, Escape, or an outside click. No Android source changed.


## Lesson 4.9 completion and canonical 14-step explanation standard

The learner completed Lesson 4.9 after the corrected 14-step walkthrough made every previously untaught concept explicit. This state is now a positive course exemplar for difficult geometry and rendering explanations.

The reusable target is not a mechanical requirement to always create exactly fourteen steps. The target is the same causal completeness:

```text
visible object before symbol
→ define the question before the formula
→ one new operation per step
→ exact input and intermediate result
→ the main diagram changes with the explanation
→ code and diagram use the same names and order
→ no untaught concept is compressed into one expert sentence
```

Lesson 4.9 also now has previous/next controls in the top-right of the walkthrough diagram. They update the same `coveragePathStep` state as the drawer, so diagram controls, numbered drawer steps, Back, Next, formulas, and SVG evidence remain synchronized.

Learner-confirmed progress is **37 of 216**.

## Lesson 4.10 generated — Transform origin

Lesson 4.10 keeps one measured rectangle and introduces one new geometry choice: the local pivot that remains fixed while rotation and scale transform the drawing. The browser and Android experiments trace origin fractions through measured width and height into pivot coordinates, then follow one top-right point through `subtract pivot → scale → rotate → add pivot`.

The Android implementation uses `TransformOrigin`, `Modifier.graphicsLayer`, `rotationZ`, `scaleX`, and `scaleY`. It also measures the card with `onSizeChanged` to show that the runtime layout size remains unchanged while the drawing transforms. Lesson 4.10 is generated but not learner-complete.


## Lesson 4.11 generated — Shape laboratory

Lesson 4.10 is learner-confirmed complete. Learner-confirmed progress is now **38 of 216**. Lesson 4.11 is the final Chapter 4 checkpoint.

The laboratory introduces one integration term: a **shape contract**, meaning the rule that converts the current outer bounds into the outer radius. It compares a fixed rounded-rectangle contract with a horizontal-capsule contract, then derives the inner bounds and inner radius from one uniform padding value.

The controlled browser values reuse the completed concentric-corner example:

```text
outer width = 600
outer height = 360
fixed radius = 90
padding = 30
inner width = 540
inner height = 300
inner radius = 60
```

Capsule mode proves `outer radius = 180` and `inner radius = 150 = inner height / 2`. The lesson compares the correct `outer radius - padding` rule with a copied-radius defect. It explicitly records that the controlled implementation uses direct rounded-rectangle drawing, no custom Path, no clip, and no mask. The optional inspection rotation names its transform origin without changing geometry arithmetic.

Changed Android files: `Chapter04Screen.kt` and new `ShapeLaboratory.kt`, with complete-screen and direct-child previews in light and dark modes.


## Lesson 4.11 completion and Chapter 5 start

The learner requested the next lesson without a remaining question, so Lesson 4.11 and Chapter 4 are learner-confirmed complete. Learner-confirmed progress is now **39 of 216**. Lesson 5.1 is generated as the first Chapter 5 checkpoint. It defines complete endpoint snapshots before any animation operation is introduced.


## Lesson 5.2 generated ahead

- Learner-confirmed completion remains **39 of 216**.
- Lesson 5.1 remains the unresolved checkpoint.
- Lesson 5.2 — Time is generated ahead and is not complete.
- Generated frontier: Lesson 5.2.
- Android active child: `TimeExplorer.kt`.


## Lesson 5.3 generated ahead

- Learner-confirmed completion remains **39 of 216**.
- Lesson 5.1 remains the unresolved checkpoint.
- Lesson 5.3 — Progress from 0 to 1 is generated ahead and is not complete.
- Generated frontier: Lesson 5.3.
- Android active child: `ProgressExplorer.kt`.


## Lesson 5.4 generated ahead

- Learner-confirmed completion remains **39 of 216**.
- Lesson 5.1 remains the unresolved checkpoint.
- Lesson 5.4 — Linear interpolation is generated ahead and is not complete.
- Generated frontier: Lesson 5.4.
- Android active child: `LinearInterpolationExplorer.kt`.


## Lesson 5.5 generated ahead

- Learner-confirmed completion remains **39 of 216**.
- Lesson 5.1 remains the unresolved checkpoint.
- Lesson 5.5 — Easing is generated ahead and is not complete.
- Generated frontier: Lesson 5.5.
- Android active child: `EasingExplorer.kt`.


## Latest authoritative state — Lessons 5.1 through 5.5 completed; Lesson 5.6 generated

The learner explicitly confirmed Lessons 5.1, 5.2, 5.3, 5.4, and 5.5 complete. Learner-confirmed progress is now **44 of 216**. Lesson 5.6 is the current unresolved checkpoint and generated frontier.

Lesson 5.6 teaches how to read an easing graph as an input-output map:

```text
horizontal X = raw progress
vertical Y   = eased progress
curve point  = (raw input, eased output)
```

The default trace reads ease-in square at raw progress `0.25`:

```text
X = 0.2500
Y = 0.25 × 0.25 = 0.0625
point = (0.2500, 0.0625)
width = 64 + 256 × 0.0625 = 80 dp
```

The lesson compares points below, on, and above the linear diagonal without introducing slope or velocity. Velocity remains Lesson 5.7.


## Lesson 5.7 generated — Velocity

Lesson 5.6 is learner-confirmed complete. Lesson 5.7 introduces signed average velocity for one UI property over one named interval. The controlled default compares width 80 dp at 175 ms with width 128 dp at 350 ms, producing +48 dp over 0.175 s and average velocity +274.2857 dp/s. The lesson compares equal 175 ms intervals under ease-in, distinguishes positive opening from negative closing velocity, and defers instantaneous velocity and renderer/gesture estimators. Learner-confirmed progress is 45 of 216.

## Lesson 5.8 generated ahead — Spring intuition

Learner-confirmed progress remains 45 of 216. Lesson 5.7 remains the next unresolved checkpoint. Lesson 5.8 introduces an explicitly labelled browser teaching model for target, displacement, stiffness, damping, mass, velocity update, and position update. The Android companion uses the public Compose spring contract with damping ratio and stiffness; browser coefficients are not copied into Compose.

## Lesson 5.9 generated ahead — Overshoot and settle

Learner-confirmed progress remains 45 of 216. Lesson 5.7 remains the next unresolved checkpoint. Lesson 5.9 measures target crossings, maximum overshoot, direction reversal, and a chosen two-condition settle rule. Browser metrics belong to the teaching model; Android uses Compose spring presets and exposes live Animatable value and velocity.


## Lesson 5.8 regeneration after flexible-step audit

- Lesson 5.8 remains generated ahead and learner-incomplete.
- The original fixed fourteen-state walkthrough failed the new audit because the spring recurrence was compressed before its variables, fixed teaching-tick assumption, signed damping term, and symbolic dependency chain were fully established.
- The regenerated walkthrough contains **24 states**, chosen from the actual spring-update dependency chain.
- It now defines `T`, `x`, `v`, `k`, `c`, and `m`; shows `d = T - x`, `S = k × d`, `D = -c × v`, `N = S + D`, `Δv = N / m`, `v_next = v + Δv`, and `x_next = x + v_next`; then substitutes Tick 1 and Tick 2 values.
- Because the walkthrough exceeds ten states, it uses Previous/Next navigation with `Step X of 24` rather than twenty-four numbered buttons.
- Learner-confirmed progress remains 45 of 216. Lesson 5.7 remains unresolved.


## Lesson 5.9 regeneration after flexible-step audit

- Lessons 5.8 and 5.9 remain generated ahead and learner-incomplete.
- Lesson 5.9 was regenerated with **23 states**, derived from the crossing, overshoot, peak, reversal, oscillation, tolerance, logical-AND, and consecutive-confirmation chain.
- The lesson now defines `T`, `x_i`, `v_i`, signed side value `s_i`, overshoot `o_i`, maximum overshoot `o_max`, position error `e_i`, speed magnitude `q_i`, tolerances `epsilonX` and `epsilonV`, and confirmation count `N` before substituting numbers.
- The walkthrough uses Previous/Next with `Step X of 23`, not one button per state.
- Learner-confirmed progress remains 45 of 216. Lesson 5.7 remains the next unresolved checkpoint. Generated frontier remains Lesson 5.9.


## Spring sign-cycle and graph-scale gate — Lesson 5.9 clarification

When teaching an underdamped spring, a position-only graph is insufficient if its scale hides later oscillations. Future spring explanations must distinguish:

- target crossings, where `d = T - x` and `S = k * d` change sign;
- peaks and troughs, where velocity reaches zero and changes sign;
- speed magnitude, which grows and shrinks within each half-cycle;
- damping, which reduces each later excursion;
- a lesson-specific settle threshold versus mathematically exact zero motion.

If a full-range graph hides residual motion, provide a near-target zoom or stop the trace at the declared settle point. Post-settle simulated values must be visually distinguished from the portion counted by the lesson diagnostic.
