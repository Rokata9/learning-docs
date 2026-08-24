# Liquid Glass on Android — Beginner-to-Expert Curriculum

**Version:** 7.12.1
**Updated:** 2026-08-20
**Primary platform:** Kotlin + Jetpack Compose  
**Minimum learning target:** Android 13 / API 33  
**Physical test device:** Pixel 8 Pro  
**Total lessons:** 216  

## 1. Authoritative course position

- Learner-confirmed complete: **71 of 216**.
- Completed through: **Lesson 7.9 — Outer shadow**.
- Completed chapters: **1–6**.
- Chapter 7 is in progress: **9 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.10 — Fine noise**.
- Generated frontier: **Lesson 7.12 — Compare backgrounds**. Lessons 7.10 through 7.12 are generated and are not learner-confirmed complete.
- Next planned lesson after the generated frontier: **Lesson 8.1 — What a shader does**.

## 2. Course construction principles

- Assume a total beginner in graphics and mathematics.
- Introduce one principal graphics idea and at most one principal mathematical idea per lesson.
- A full lesson must introduce a genuinely new mechanism, API behavior, mathematical operation, measurement method, or implementation step. Convert mostly repetitive consolidation into a checkpoint or merge it into the next substantive lesson.
- Define every new term before relying on it.
- State the practical problem before vocabulary and formulas.
- For hard formulas: variable ledger → symbolic formula → substituted values → intermediate results → final output → next consumer.
- Label every coordinate tuple by coordinate space and keep each walkthrough formula self-contained with its current inputs and substituted values.
- Use visual intermediate states before summaries.
- Time-trace matrices must repeat compact substituted formulas in their cells and visually separate target crossings from velocity-reversal bounces.
- When a lesson uses multiple formulas, keep one prominent all-formulas panel near the top.
- Let walkthrough length follow the actual dependency chain. Fourteen is not a template.
- Use side-by-side diagram and stepper by default when both fit readably. Use a full-width diagram with hidden controls only when spatial evidence requires it.
- Complete beginner-comprehension QA before technical QA.
- For every future Android lesson, both complete-screen and direct-child previews must let the learner scroll through all generated content inside Android Studio Preview; do not retrofit earlier lessons unless requested.
- In standalone HTML prose, render code identifiers with semantic `<code>` elements; never rely on Markdown backticks.
- Keep click-controlled popups inside the viewport and reset nested `<code>` styling inside dark code containers.
- Deliver only incremental changed files in the repositories. Do not generate `.zip` archives unless explicitly requested.
- Count only explicit learner completion.
- Put one clean production route before diagnostic defects. Add executable failure modes only when they are necessary to understand or verify the principal idea.
- Prefer compact diagrams or predictions over duplicate layers, mode enums, and branches created solely to show broken output.
- Name non-obvious layout, geometry, sampling, and visual constants and explain why each value exists near its declaration or use.
- Before diagnosing motion trail as a performance limit, verify that placement and sampling geometry are derived from the same current state; keep estimates distinct from measured device cost.
- Distinguish retained drawing commands from an allocated raster target. A `GraphicsLayer` count is not automatically a buffer count.
- State whether explicit `CompositingStrategy.Offscreen` is required for correctness, redundant because another property already forces rasterization, or deliberately forced only for a controlled teaching experiment.
- When a panel-sized destination replays a full-backdrop source, state both sides of the cost boundary: destination pixel area can be small while full-source recording, normal drawing, and replay work still remain.
- Keep labels and icons outside the sample/effect layer when they must remain sharp after the material receives blur.

Permanent detailed rules live in `AGENTS.md` and `USER_PREFERENCES.md`; they are not duplicated here.

## 3. Full 216-lesson plan

### Chapter 1 — A transparent panel is not yet Liquid Glass

**Purpose:** Build a deliberately incomplete first result. Learn to separate translucency from blur, refraction, lighting, and motion.

1. **1.1 — Name the visible ingredients.** Learn the words translucency, blur, diffusion, refraction, tint, highlight, shadow, and morph.
2. **1.2 — Observe before coding.** Study a control at rest, during press, during expansion, and after settling.
3. **1.3 — Create `LiquidGlassLab`.** Make a small Compose project that runs on the Pixel 8 Pro.
4. **1.4 — Build a study background.** Use large color areas, circles, text, and sharp lines so future distortion is easy to see.
5. **1.5 — Draw a translucent rounded panel.** Change only the white fill opacity.
6. **1.6 — Learn the first formula.** Understand the simple alpha mixture between foreground and background.
7. **1.7 — Run a controlled device experiment.** Compare 0%, 25%, 50%, 75%, and 100% opacity.
8. **1.8 — Explain what is still missing.** Finish with a written diagnosis instead of trying to “fix everything.”


---

### Chapter 2 — The screen is a grid

**Purpose:** Learn the minimum coordinate math needed for Android graphics.

1. **2.1 — What a pixel is.** Treat a screen image as a rectangular collection of tiny samples.
2. **2.2 — The X axis.** Move right by increasing X.
3. **2.3 — The Y axis.** Move down by increasing Y in Android screen coordinates.
4. **2.4 — Width, height, edges, and center.** Calculate a center using half the width and half the height.
5. **2.5 — Pixels, dp, and density.** Understand why layout dimensions and shader coordinates use different units.
6. **2.6 — Local coordinates.** See how a child starts its own coordinate system.
7. **2.7 — Parent and screen coordinates.** Locate a control relative to a larger scene.
8. **2.8 — Normalized coordinates.** Convert a value into the range `0..1` so an effect works at many sizes.
9. **2.9 — Build a coordinate inspector.** Show a grid, origin, pointer position, center, and bounds on screen.

**Checkpoint:** Tap anywhere and correctly explain the displayed X and Y values.

---

### Chapter 3 — Color, opacity, and compositing

**Purpose:** Understand how several colored layers become one final pixel.

1. **3.1 — Red, green, and blue channels.** Treat each channel as a number.
2. **3.2 — Alpha.** Treat opacity as a number from 0 to 1.
3. **3.3 — The “over” operation.** Combine one translucent color over another.
4. **3.4 — Draw order matters.** Reverse two layers and observe a different result.
5. **3.5 — Straight and premultiplied RGBA.** Continue the complete Lesson 3.3 source-over example. Name the straight and premultiplied forms of source, destination, and output. Relate output premultiplied RGB to output straight RGB. Explain which API or buffer contract expects each representation.
6. **3.6 — From a visible color to relative luminance.** Start from one opaque Compose `Color`, decode one sRGB channel before all three, then combine the three linear-light channels into one relative-luminance number.
7. **3.7 — Foreground contrast.** Start from one final opaque background. Calculate black and white contrast ratios separately. Choose the larger ratio, then check accessibility targets as a separate policy step.
8. **3.8 — Tint.** Add a controlled color influence without replacing the background.
9. **3.9 — Saturation.** Reduce or enlarge each RGB channel’s distance from the transform’s gray reference.
10. **3.10 — Blend modes.** Compare normal, screen, multiply, and plus with small examples.
11. **3.11 — Compositing laboratory.** Stack several adjustable layers and predict the final result.

**Checkpoint:** Explain why two panels with the same alpha can look very different over different content.

**Image-boundary artifact deferral:** The rejected case study requires a concrete image boundary and an operation that calculates new image values. The course will return to it after image sampling is taught in Chapter 9.

---

### Chapter 4 — Shapes, corners, paths, and masks

**Purpose:** Build the geometry vocabulary used by glass controls.

1. **4.1 — Rectangles and circles.** Understand bounds and radius.
2. **4.2 — Rounded rectangles.** See how corner radius changes the silhouette.
3. **4.3 — Capsules.** Learn why the radius is half the height.
4. **4.4 — Concentric corners.** Calculate an inner corner radius by subtracting padding from the outer radius.
5. **4.5 — Paths.** Build a shape from connected segments.
6. **4.6 — Cubic Bézier curves.** Learn endpoints and control points using draggable handles.
7. **4.7 — Clipping.** Keep drawing inside a shape.
8. **4.8 — Masks.** Use a separate per-position alpha value to decide how much grouped content remains visible. Distinguish the actual alpha mask from any grayscale preview used to visualize its values.
9. **4.9 — Soft edges and antialiasing.** Understand why a mathematical boundary should not become a jagged pixel stair.
10. **4.10 — Transform origin.** Rotate and scale around a chosen point.
11. **4.11 — Shape laboratory.** Compare a fixed rounded rectangle, capsule, and concentric nested shapes.

**Checkpoint:** Build a nested control whose inner and outer corners look balanced at several sizes.

---

### Chapter 5 — Motion without mystery

**Purpose:** Learn the small amount of time-based math needed for convincing interaction.

1. **5.1 — State before animation.** Define the start and end values clearly.
2. **5.2 — Time.** Measure how long an animation has been running.
3. **5.3 — Progress from 0 to 1.** Convert elapsed time into a reusable animation value.
4. **5.4 — Linear interpolation.** Use `start + (end - start) × progress`.
5. **5.5 — Easing.** Change how progress moves without changing the start or end.
6. **5.6 — Read an easing graph.** Treat the horizontal direction as time and the vertical direction as progress.
7. **5.7 — Velocity.** Understand movement per unit of time.
8. **5.8 — Spring motion, overshoot, and settle.** Merge spring intuition with overshoot/settle so the full causal chain stays visible in one lesson.
9. **5.9 — Archive / backward-compatible redirect.** Keep the lesson number stable while pointing learners back to the consolidated Lesson 5.8 teaching page.
10. **5.10 — Press deformation.** Convert one local pointer-down position into a transform pivot; distinguish pressed Boolean, q target, and current q; derive non-uniform scale and radius; prove point movement around the pivot; keep layout bounds separate from draw bounds; finish release/cancellation and the reusable Indication boundary.
11. **5.11 — Reversal and interruption.** Change the target during in-flight motion while preserving current value and velocity; compare smooth reversal with velocity reset and value snap defects; connect the contract to `Animatable.animateTo` cancellation and continuity.
12. **5.12 — Slow-motion controller.** Separate real frame time from local simulation play time; add a speed multiplier, pause, deterministic 16 ms debug step, reverse direction, and manual `TargetBasedAnimation` play-time control.

**Checkpoint:** Build a reversible capsule-to-panel animation whose values can be inspected at any progress.

---

## 4. Generated-ahead implementation record — Lesson 5.11

- Twenty-two-state side-by-side walkthrough.
- Prominent interruption formulas and variable ledger.
- Interactive one- and two-interruption traces.
- Smooth / reset-velocity / snap-value comparison.
- Exact post-reversal calculations showing brief old-direction motion.
- Android `Animatable` explorer with rapid target toggles and current value/velocity readouts.
- Lesson 5.10 remains unresolved.

## 5. Current implementation record — Lesson 5.10

- Prominent all-formulas panel and variable ledger.
- Twenty-state two-column walkthrough with synchronized diagram and stepper navigation.
- Live local pointer position, q snapshot, scale, radius, pivot, draw bounds, and tracked-point proofs.
- Dependency table, prediction, coding challenge, four exercises, ten-item checkpoint, and evidence boundary.
- Android explorer uses actual Compose pointer, animation, graphics-layer, and Canvas APIs.


### Chapter 6 — How Android draws the scene

**Completed implementation record — Lesson 6.11**

- Learner-confirmed complete; the completed total advances to 62 of 216.
- Introduces one principal architecture: two controlled `GraphicsLayer` objects plus one ordinary foreground role.
- The owner tree is `ParentScene` → sibling `BackdropHost` and `GlassPanel`; inside the panel, `GlassMaterial` is declared before `ForegroundContent`.
- `backgroundLayer` retains the complete backdrop command source. `panelSampleLayer` retains the panel-sized translated crop commands. `ForegroundContent` is not a third layer.
- The one-way route is `BackdropArtwork` → `backgroundLayer` → `panelSampleLayer` → tint and border → `ForegroundContent` → `ParentScene`.
- Source and consumer remain siblings, preventing the panel from entering its own backdrop recording.
- The sharp label and dot are ordinary later Compose children outside both `record` calls, so a future effect on `panelSampleLayer` will not own them.
- One `panelLeftDp` value controls both panel placement and negative crop translation in the controlled shared-origin scene.
- Neither controlled layer explicitly forces `Offscreen`, and no `RenderEffect` is present yet. Two `GraphicsLayer` objects therefore do not imply two guaranteed pixel textures.
- The browser lesson contains one production route, an eleven-state walkthrough, one coordinate/ownership trace, a styled three-choice prediction, a three-blank coding challenge, four explain-back checks, and a ten-item Chapter 6 checkpoint.
- Android uses named and commented dimensions, positions, slider detents, landmark coordinates, and visual alpha values. It contains no diagnostic mode enum, duplicate failure branch, or callback-written crop state.
- Complete previews live in `Chapter06Screen.kt`; direct scrollable previews live in `TwoLayerSceneArchitectureExplorer.kt`.

**Completed implementation record — Lesson 6.10**

- Learner-confirmed complete.
- Separates three different facts: a full-backdrop command recording, a panel-sized destination pixel target, and measured device cost.
- Uses one production route: `backgroundLayer` full command source → matching crop replay → panel-sized `panelSampleLayer` → panel material → final scene.
- Explicit `CompositingStrategy.Offscreen` is deliberately forced only to make one concrete target available for target-extent arithmetic. It does not improve the sharp result and is not presented as a general optimization.
- The panel-sized estimate describes only the explicitly forced `panelSampleLayer` color target. The full backdrop command recording, normal full-backdrop rendering, and second source replay still remain.
- A small destination bounds destination pixel storage and output area; it does not prove that all upstream command traversal, culling, bandwidth, or frame-time cost becomes panel-sized.
- The hypothetical full-scene target remains arithmetic and diagram evidence only; the Android production route does not allocate it.
- The variable ledger precedes dp-to-px conversion, pixel count, the deliberately limited four-byte teaching assumption, MiB conversion, and display interval.
- At teaching density 3.0 px/dp, the 196 × 116 dp panel estimates to 588 × 348 px, 204,624 pixels, and about 0.781 MiB under that assumption.
- Android uses actual `LocalDensity`, one `backgroundLayer`, one `panelSampleLayer`, one position source, and named constants with nearby reasons.
- The corrected movement route derives both panel placement and crop translation from the same current position rather than a callback-written duplicate rectangle.
- The lesson does not claim exact GPU allocation, bandwidth, frame time, command-culling behavior, or dropped-frame counts. Those require release-like device measurement.
- Complete previews originally lived in `Chapter06Screen.kt`; direct scrollable previews remain in `OffscreenCostExplorer.kt`.

**Completed implementation record — Lesson 6.9**

- Learner-confirmed complete.
- Prevents feedback by keeping the recorded `BackdropHost` producer and `GlassPanel` consumer in separate sibling ownership subtrees.
- The browser uses one production route and one compact forbidden-cycle diagram; no alternate executable failure architecture is required.
- The cumulative Lesson 6.10 correction removes the separately stored crop rectangle from the controlled Android scene.
- One `panelLeftDp` value and the fixed panel-top value now drive both panel placement and negative crop translation because `BackdropHost` and `ParentScene` share origin `(0, 0)` in that controlled scene.
- This removes a post-layout crop-state round trip that could make sampled content trail the newest panel position for one update.
- Android retains one `backgroundLayer`, one recorded `BackdropHost`, one later `GlassPanel` sibling, and no diagnostic rendering branches.
- Scene dimensions, slider intervals, landmark coordinates, tint alpha, border alpha, and coordinate conversions remain named and commented.
- Complete previews originally lived in `Chapter06Screen.kt`; direct scrollable previews remain in `AvoidFeedbackLoopsExplorer.kt`.

**Completed implementation record — Lesson 6.8**

- Learner-confirmed complete.
- Proves that a dynamic sharp backdrop sample is current only when its selected layer recording and selected crop bounds both correspond to their latest producers.
- Separates backdrop-content changes from panel-geometry changes before introducing the two update routes.
- The controlled trace defines `R_b(s)`, `P_p(m)`, and `C_b(m)` with explicit coordinate spaces and isolates stale-layer, stale-bounds, and both-stale errors.
- Android records current layer content and recomputes current bounds; retained captured objects are explicitly diagnostic evidence rather than production guidance.
- The lesson's prediction choices now have dedicated visible styling and selected-state behavior.
- The lesson defers blur, feedback prevention, atomic production synchronization, CPU readback, and offscreen cost.
- Complete previews live in `Chapter06Screen.kt`; direct scrollable previews live in `KeepSampleCurrentExplorer.kt`.

**Completed implementation record — Lesson 6.7**

- Learner-confirmed complete.
- Converts `GlassPanel` bounds into the recorded backdrop owner's local coordinate space before selecting the panel-sized source region.
- Android uses `backgroundCoordinates.localBoundingBoxOf(panelCoordinates, clipBounds = false)` and translates the full layer by the negative crop origin inside a panel-local clip.
- The controlled default derives crop origin `(52, 60) dp`, crop max `(262, 190) dp`, and replay translation `(-52, -60) dp`.
- Two deliberate defects expose use of parent coordinates directly and replay without translation.
- A seventeen-state walkthrough, tracked point, prediction, coding challenge, explanation exercises, and checkpoint establish the prerequisite for freshness.
- Complete previews live in `Chapter06Screen.kt`; direct scrollable previews live in `CropCorrectRegionExplorer.kt`.

**Completed implementation record — Lesson 6.6**

- Learner-confirmed complete.
- Records only `BackdropArtwork` into a controlled `GraphicsLayer` and replays the full layer deliberately into one or more targets.
- Four route states compare direct draw, record without replay, visible-scene replay, and a second inspector replay.
- The record-only state proves that `record` does not automatically display its result.
- `GlassPanel` remains a later sibling outside the recorded owner.
- A thirteen-state walkthrough and real line-command trace establish the prerequisite route for Lesson 6.7.
- The Lesson 6.6 provenance popups now choose a viewport-safe horizontal direction, and the Android-route dark code block resets nested inline-code styling.
- Complete previews live in `Chapter06Screen.kt`; direct scrollable previews live in `RecordBackgroundExplorer.kt`.

**Completed implementation record — Lesson 6.5**

- Learner-confirmed complete.

- Proves that same-position source-over does not provide a readable image of unrelated sibling pixels.
- Separates panel-owned `RenderEffect` input from the backdrop region required by neighborhood blur.
- Uses a three-sample one-channel average only as an explicitly labelled teaching bridge.
- Moves the panel and backdrop pattern independently to show that the required parent-coordinate crop changes while panel artwork can remain unchanged.
- Android executes the real panel-owned effect and draws a separately labelled reference crop by reusing the teaching backdrop function; it does not claim sibling capture.
- Sixteen-state side-by-side walkthrough ends at the explicit record → map → select → replay/read route introduced in Lesson 6.6.
- Complete and direct Android Studio previews are vertically scrollable.


**Lesson 6.3 implementation clarification:** Step 10 explicitly separates owner-local coordinates, layout-slot-relative output, and parent coordinates. It compares the point before and after the transform only in parent coordinates and repeats every current input inside the walkthrough state.


**Current implementation record — Lesson 6.1**

- One controlled card is traced through composition, layout, and drawing.
- Composition outputs the current UI tree.
- Layout outputs measured sizes and placed coordinates.
- Drawing outputs the rendered frame.
- The browser separates badge existence, content inset, and card fill as phase-focused inputs.
- The Android explorer reads those state values inside composition, layout, and drawing scopes respectively.
- Nine walkthrough states are used because this dependency chain does not require fourteen or more.
- Complete previews live in `Chapter06Screen.kt`; direct explorer previews live in `CompositionLayoutDrawingExplorer.kt`.


**Current implementation record — Lesson 6.2**

- One Box contains BackdropScene, GlassPanel, and ForegroundLabel as siblings.
- Ownership stays fixed while source order and zIndex change.
- The browser compares correct order, background-last defect, panel-last defect, and a label zIndex rescue.
- A selected-position trace lists only owners whose geometry covers the coordinate.
- Sibling order is separated from one node's internal drawBehind → drawContent → overlay order.
- Twelve walkthrough states are used; the diagram and stepper remain visible together.
- Complete previews live in Chapter06Screen.kt; direct previews live in DrawOrderOwnershipExplorer.kt.


**Current implementation record — Lesson 6.3**

- One `LayerArtwork` owner contains a base, stripe, status dot, and label.
- `Modifier.graphicsLayer` groups those owner-local drawing instructions into one draw layer.
- Translation, rotation, scale, alpha, and transform origin apply to the complete group.
- The measured 360 × 200 slot remains fixed while transformed drawing can extend outside it.
- One tracked point reuses the completed transform-origin path to prove the common layer transform.
- The lesson distinguishes a draw layer from offscreen rasterized pixels. Under the default Auto strategy, alpha below 1 causes offscreen compositing.
- The lesson explicitly states that graphicsLayer does not supply a readable image of backdrop siblings.
- Thirteen walkthrough states use the normal two-column diagram/stepper layout.
- Complete previews live in `Chapter06Screen.kt`; direct scrollable previews live in `GraphicsLayersExplorer.kt`.

**Purpose:** Understand why a normal blur modifier is not enough for real backdrop glass.

1. **6.1 — Composition, layout, and drawing.** Learn what each Compose phase is responsible for.
2. **6.2 — Draw order and ownership.** Identify which content belongs to which composable.
3. **6.3 — Graphics layers.** Separate drawing commands from later transformations and effects.
4. **6.4 — `RenderEffect` on owned content.** Blur a layer and observe that its own contents are blurred.
5. **6.5 — The backdrop problem.** Demonstrate why a foreground panel cannot automatically sample arbitrary siblings behind it.
6. **6.6 — Record the background.** Use a controlled `GraphicsLayer` to record background drawing and replay it deliberately into one or more targets.
7. **6.7 — Crop the correct region.** Map glass bounds into background coordinates.
8. **6.8 — Keep the sample current.** Update the captured scene as content scrolls or animates.
9. **6.9 — Avoid feedback loops.** Prevent the glass from capturing itself.
10. **6.10 — Offscreen cost.** Estimate how target extent scales pixel work and color storage, then separate that estimate from measured GPU cost.
11. **6.11 — Build a two-layer scene architecture.** Separate content, glass material, and foreground labels.

**Checkpoint:** Move a glass panel over a dynamic background and sample the correct region without recursive capture.

---


**Current implementation record — Lesson 6.4**

- One parent scene contains a separately owned sharp backdrop sibling and one `OwnedCard` effect owner.
- The browser compares whole-owner, green-dot-only, and no-effect attachment.
- A four-image pipeline shows parent-before-owner, sharp effect input, effect output, and final composite.
- `RenderEffect` forces offscreen rasterization for the selected owner.
- The lesson proves that visible backdrop content does not automatically become part of the owner's effect input.
- The Android explorer converts dp radius to runtime px and applies `BlurEffect` through `graphicsLayer.renderEffect`.
- Complete previews live in `Chapter06Screen.kt`; direct scrollable previews live in `RenderEffectOwnedContentExplorer.kt`.

### Chapter 7 — Build convincing frosted glass without a custom lens

**Purpose:** Combine the classic material ingredients before adding refraction.

1. **7.1 — Blur as neighborhood averaging.** Understand the idea of each output pixel receiving nearby colors.
2. **7.2 — Blur radius.** Compare small and large neighborhoods.
3. **7.3 — Edge treatment.** See what happens when the blur needs pixels outside the source image.
4. **7.4 — Downsampled blur.** Trade detail for speed in a controlled way.
5. **7.5 — Tint layer.** Add a pale influence while preserving background identity.
6. **7.6 — Saturation and contrast.** Keep the background present but quiet enough for text.
7. **7.7 — Static rim.** Add a simple bright outline and state clearly that it is not yet physical lighting.
8. **7.8 — Inner highlight.** Add a soft edge band inside the shape.
9. **7.9 — Outer shadow.** Create separation from busy content.
10. **7.10 — Fine noise or dither.** Reduce visible color banding without making the panel dirty.
11. **7.11 — Compose the layers.** Put the effects in a deliberate order.
12. **7.12 — Compare backgrounds.** Test photos, text, gradients, dark content, and light content.

**Checkpoint:** Produce a polished frosted card and list exactly why it is still not a complete Liquid Glass material.

**Completed implementation record — Lesson 7.1**

- Learner-confirmed complete; the completed total advances to 63 of 216.
- Introduces one blur output receiving color contributions from nearby source positions.
- Uses a transparent 3 × 3 equal-weight model and traces the exact output `RGB(133, 109, 65)`.
- Keeps the teaching model separate from Android's undocumented renderer kernel.
- The Android explorer contains one readable `averageRgb8` function plus a sharp-versus-real-`BlurEffect` comparison with a fixed 12 dp radius.
- It does not rebuild Chapter 6 backdrop capture or add stale-state, feedback, alignment, or diagnostic branches.

**Completed implementation record — Lesson 7.2**

- Learner-confirmed complete; the completed total advances to 64 of 216.
- Introduces one new control: blur radius as spatial influence distance rather than opacity.
- Uses a transparent one-dimensional source strip with four blue cells, five amber cells, and selected output index 5.
- Compares teaching radii `0`, `1`, `2`, and `3` cells. The exact outputs are `RGB(225, 153, 45)`, `RGB(225, 153, 45)`, `RGB(184, 133, 54)`, and `RGB(166, 125, 58)`.
- Explicitly limits `N = 2r + 1` to the teaching box model. It does not claim Android uses that sample count or equal weights.
- Pairs the model levels with Android test radii `0`, `4`, `12`, and `24` dp without equating teaching cells to dp.
- The browser provides four radius presets, a controlled density slider, a synchronized ten-state walkthrough, one complete RGB and dp-to-px trace, a styled prediction, one focused Kotlin challenge, five explain-back exercises, and a ten-item checkpoint.
- `BlurRadiusExplorer.kt` provides presets plus a continuous `0..28` dp slider, converts dp to px, and feeds equal values to `radiusX` and `radiusY`.
- The Android source compares identical sharp and variable-radius artwork and uses named constants for every non-obvious dimension and landmark.
- `TileMode.Clamp` remains fixed so Lesson 7.3 can isolate edge treatment.
- It does not repeat Chapter 6 capture architecture or add diagnostic rendering branches.
- Complete previews live in `Chapter07Screen.kt`; direct scrollable previews live in `BlurRadiusExplorer.kt`.

**Completed implementation record — Lesson 7.4**

- Learner-confirmed complete; the completed total advances to 66 of 216.
- Introduces shrink → blur → enlarge on a smaller working image.
- Section 7 of the lesson HTML is a link to `lesson-07-04-scaling-cases-companion.html`.
- `DownsampledBlurExplorer.kt` records a smaller working layer, blurs it, and enlarges from `Offset.Zero` in production.

**Completed implementation record — Lesson 7.5**

- Learner-confirmed complete; the completed total advances to 67 of 216.
- Introduces a tint layer: a later `drawRect` of a translucent tint source over an already-blurred destination.
- Reuses the Lesson 3.8 short formula. Does not repeat downsample or edge-treatment arithmetic.
- `TintLayerExplorer.kt` keeps blur radius and `TileMode.Clamp` fixed. Amount presets are `0`, `0.25`, `0.50`, and `1.00`.
- Complete previews live in `Chapter07Screen.kt`; direct scrollable previews live in `TintLayerExplorer.kt`.

**Completed implementation record — Lesson 7.6**

- Learner-confirmed complete; the completed total advances to 68 of 216.
- Attaches `ColorFilter.colorMatrix(setToSaturation)` to the blurred-and-tinted glass group, then measures label contrast from the new RGB.
- Does not rebuild the 3.9 matrix derivation or the 3.7 contrast derivation.
- `SaturationContrastExplorer.kt` keeps tint amount at `0.25` and places the sharp label outside the filtered box.
- Complete previews live in `Chapter07Screen.kt`; direct scrollable previews live in `SaturationContrastExplorer.kt`.

**Completed implementation record — Lesson 7.7**

- Learner-confirmed complete; the completed total advances to 69 of 216.
- Introduces one new mechanism: a Canvas / Compose `Stroke` is centered on its path, so clipping to that path discards the outer half. Production insets the path by `width ÷ 2` and shrinks the corner radius by the same inset (Lesson 4.4).
- The stroke uses one color on every side. It is not a lighting model.
- Keeps blur `18.dp`, tint amount `0.25`, and saturation `0.40` fixed.
- HTML teaching width is `8` CSS px. Android default is `3.dp`. Those units are not interchangeable.
- `StaticRimExplorer.kt` stacks no-rim, clip-centered, and inset-path cards. The rim canvas is a sibling of the glass group, still inside `Modifier.clip`.
- Complete previews live in `Chapter07Screen.kt`; direct scrollable previews live in `StaticRimExplorer.kt`.

**Completed implementation record — Lesson 7.8**

- Learner-confirmed complete; the completed total advances to 70 of 216.
- Introduces one new mechanism: blur a wide inset stroke on its own layer, then clip the blurred pixels to the panel path. The clip discards the outward fade. The inner fade remains.
- The band blur (`6.dp` / `8` CSS px) is a separate `BlurEffect` from the glass fill’s `18.dp` blur.
- The thin Lesson 7.7 rim stays an unblurred later sibling.
- The band uses one color on every side. It is not a lighting model and not a signed-distance glow.
- `InnerHighlightExplorer.kt` compares no band, a stage-sized unclipped band blur, and a clipped band blur.
- Complete previews live in `Chapter07Screen.kt`; direct scrollable previews live in `InnerHighlightExplorer.kt`.

**Completed implementation record — Lesson 7.9**

- Learner-confirmed complete; the completed total advances to 71 of 216.
- Introduces one new mechanism: a darker copy of the panel shape is blurred on a layer with empty room ≥ the shadow blur radius, then drawn behind the clipped glass.
- A same-size layer has no surround pixels, so it cannot put a halo around the card.
- Downward offset is a named convention (`4.dp` / `8` CSS px), not a simulated lamp.
- `Modifier.shadow` is named and not reverse-engineered.
- Fill, rim, and inner band stay fixed inside the clip. Shadow blur is the only control.
- `OuterShadowExplorer.kt` compares no shadow, a glass-sized shadow layer, and a padded behind-layer.
- Complete previews live in `Chapter07Screen.kt`; direct scrollable previews live in `OuterShadowExplorer.kt`.

**Generated implementation record — Lesson 7.10**

- Generated ahead of complete Lesson 7.9; not learner-confirmed complete.
- Introduces one new mechanism: add one small signed offset, from a fixed column-and-row remainder recipe, to red, green, and blue, then store `round(clamp(sum) × 255)`.
- Reuses Lesson 3.1 8-bit rounding. Does not rebuild blur, tint, rim, band, or shadow.
- A navy-family teaching ramp stands in for the short mixed seam after blur so 8-bit stripes are countable. The 7.6 navy and orange interiors stay flat.
- Luminance noise uses one signed value for all three channels. Chroma noise uses a different salt per channel and is the dirty comparison.
- Default amount is `0.02`. Amount `0` shows banding. Amount `0.12` looks dirty even as luminance noise.
- `FineNoiseExplorer.kt` writes a card-sized bitmap with the exact store formula and `FilterQuality.None`.
- Companion `lesson-07-10-companion-why-7-gives-unique-remainders.html` is the canonical proof that +7 wrapping at 16 visits every leftover once. Light and dark themes.
- Complete previews live in `Chapter07Screen.kt`; direct scrollable previews live in `FineNoiseExplorer.kt`.

**Generated implementation record — Lesson 7.11**

- Generated ahead of unresolved Lesson 7.10; not learner-confirmed complete.
- Introduces one new mechanism: a slot is the triple (clip membership, effect owner, sibling order) for one already-taught ingredient.
- Wrong clip membership discards pixels (shadow inside the clip loses the surround halo). Wrong sibling order covers pixels (rim before fill loses the rim). Those faults are independent.
- Does not rebuild blur, tint, saturation, inset-stroke math, band blur, shadow room, or the 7.10 store formula.
- Production tree: unclipped stage → padded shadow → clipped fill, grain, band, unblurred rim, sharp label.
- The Android grain overlay occupies the noise slot with a low-alpha gray bitmap. The exact per-channel add remains Lesson 7.10.
- `ComposeLayersExplorer.kt` compares production, shadow-inside-clip, and rim-before-fill.
- Complete previews live in `Chapter07Screen.kt`; direct scrollable previews live in `ComposeLayersExplorer.kt`.

**Generated implementation record — Lesson 7.12**

- Generated ahead of unresolved Lesson 7.10; not learner-confirmed complete.
- Introduces one new measurement: destination-class verdict. Frozen 7.11 recipe → sample interior RGB → Lesson 3.7 white-label contrast → pass if ≥ `4.5:1`.
- Destination classes: photo-like patches, text glyphs, slow gradient, dark field, light field.
- Structure leftover is a second observation, not a second formula.
- Uniform dark/light samples use tint-then-saturation arithmetic and match the blurred GPU color. Photo, text, and gradient numbers are teaching samples, not GPU readbacks.
- Chapter 7 checkpoint: the frost is still not a lens, a lamp, a shader, or a morph, and the fill is an owned copy rather than live capture.
- `CompareBackgroundsExplorer.kt` switches the five classes on the frozen tree.
- Complete previews live in `Chapter07Screen.kt`; direct scrollable previews live in `CompareBackgroundsExplorer.kt`.

**Completed implementation record — Lesson 7.3**

- Learner-confirmed complete; the completed total advances to 65 of 216.
- Introduces one mechanism only: `edgeTreatment` supplies values for blur reads outside the original input bounds.
- Separates an internal color boundary from the outer source boundary in plain language.
- Uses a five-cell `A…E` source and a six-state walkthrough: bounds → target → requests → missing requests → replacements → output.
- Defines `T` as transparent black `RGBA(0, 0, 0, 0)` before using it.
- The uniform-orange example keeps straight RGB `(1.00, 0.40, 0.10)` while alpha falls to `0.60`.
- Defines the later panel selection directly instead of using unexplained “overscan,” “padded source,” or “crop center” shorthand.
- `BlurEdgeTreatmentExplorer.kt` keeps one fixed radius, capability-checks the selected mode, uses an explicit `Clamp` fallback, and defines transparent black directly in the UI.

**Current implementation record — Lesson 7.4**

- Generated and awaiting learner confirmation; the completed total remains 65 of 216.
- Introduces one new operation: create a smaller working image, blur it, then enlarge the blurred result to the final output size.
- Defines downsampling and upsampling before using those terms.
- Uses scale presets `1.0`, `0.5`, and `0.25` on both width and height.
- Shows that pixel-position area scales by `s × s`: half width and half height keep `25%`; quarter width and quarter height keep `6.25%`.
- Uses one separate `2 × 2` RGB average to show how four source pixels become one working pixel; this is a teaching model, not a claim about Android's private resizing filter.
- Defines `working radius = desired final radius × scale` so radius remains expressed in the smaller image's pixel coordinates before enlargement.
- States that pixel-count reduction is not proof of proportional frame-time improvement.
- The browser provides three source/working/output canvases, an eight-state walkthrough, exact size and radius arithmetic, a styled prediction, one focused Kotlin challenge, four explain-back checks, and a ten-item checkpoint.
- `DownsampledBlurExplorer.kt` records a full-size source layer, records it into a smaller `IntSize`, applies `BlurEffect` with a scaled radius, and enlarges the working layer from top-left origin.
- The Android source contains one route and no error modes, stale geometry, or duplicate crop branches.
- Complete previews live in `Chapter07Screen.kt`; direct scrollable previews live in `DownsampledBlurExplorer.kt`.

---

### Chapter 8 — Your first AGSL shader

**Purpose:** Learn shaders as small per-pixel functions, not as magic GPU code.

1. **8.1 — What a shader does.** Run the same small function for every output pixel.
2. **8.2 — Create a `RuntimeShader`.** Connect an AGSL string to Android drawing.
3. **8.3 — Return one fixed color.** Prove the shader is running.
4. **8.4 — `fragCoord`.** Receive the current pixel position.
5. **8.5 — Resolution.** Tell the shader the drawing width and height.
6. **8.6 — UV coordinates.** Divide position by resolution to obtain values near `0..1`.
7. **8.7 — Scalars and vectors.** Learn `float`, `float2`, `half`, and `half4` through visible examples.
8. **8.8 — Vector arithmetic.** Move, scale, and center coordinates.
9. **8.9 — Uniforms.** Change shader behavior from Kotlin without rewriting the program.
10. **8.10 — Time uniform.** Animate a simple wave or gradient.
11. **8.11 — `clamp`, `mix`, and `smoothstep`.** Use three essential functions with graph previews.
12. **8.12 — Shader error workflow.** Read compiler errors and reduce a failing shader to its smallest form.

**Checkpoint:** Animate a size-independent radial effect and explain every line.

---

### Chapter 9 — Distance fields, image sampling, and refraction

**Purpose:** Build the mathematical tools that let a shader know where a glass boundary is and how to bend the background.

1. **9.1 — Distance between two points.** Use a right triangle visually before introducing the formula.
2. **9.2 — Circle signed distance field.** Make the sign tell whether a point is inside or outside.
3. **9.3 — Turn distance into a soft mask.** Use `smoothstep` around the boundary.
4. **9.4 — Rounded rectangle distance field.** Build it from local coordinates and corner radius.
5. **9.5 — Capsule distance field.** Build a common control shape.
6. **9.6 — Combine shapes.** Learn union, intersection, and subtraction through `min` and `max`.
7. **9.7 — Sample an input shader.** Ask for the background color at a coordinate.
8. **9.8 — Translate sample coordinates.** Shift where the background is read.
9. **9.9 — Scale around the center.** Create simple magnification and minification.
10. **9.10 — Build a displacement field.** Produce a vector that says where to sample instead.
11. **9.11 — Refraction as displaced sampling.** Bend straight background lines near the glass boundary.
12. **9.12 — Edge safety.** Clamp, pad, or extend samples to prevent transparent seams.
13. **9.13 — Gentle chromatic separation.** Sample red, green, and blue at slightly different positions.
14. **9.14 — Lens checkpoint.** Build a rounded lens over a moving test pattern.

**Checkpoint:** Explain why the geometry mask and the background sample coordinates are separate problems.

---

### Chapter 10 — Light, surface direction, and material thickness

**Purpose:** Make the edge respond like a shaped surface rather than a flat white border.

1. **10.1 — Height-map idea.** Treat the glass as if its center and edge have different heights.
2. **10.2 — Slope.** Measure how that height changes from one pixel to the next.
3. **10.3 — Surface normal.** Convert slope into a direction that points away from the surface.
4. **10.4 — Dot product.** Measure how similarly two directions point, using a simple geometric explanation.
5. **10.5 — Diffuse light.** Make a surface brighter when it faces a light.
6. **10.6 — Specular highlight.** Create a tighter bright reflection.
7. **10.7 — Rim and Fresnel-like response.** Increase edge energy at shallow viewing angles with an approximation.
8. **10.8 — Darkened edge.** Add depth and separation using the refined 2026 Liquid Glass direction.
9. **10.9 — Brighter specular edge.** Pair the darkened edge with a sharper highlight.
10. **10.10 — Thickness parameter.** Control several material properties with one meaningful value.
11. **10.11 — Thickness changes refraction and diffusion.** Make larger material appear more substantial.
12. **10.12 — Thickness changes shadow.** Deepen and soften the shadow as the material grows.
13. **10.13 — Material shader version 1.** Combine mask, background sample, refraction, tint, edge, and light.

**Checkpoint:** Move a virtual light and explain why the highlight travels around the silhouette.

---

### Chapter 11 — Build an adaptive Liquid Glass engine

**Purpose:** Make the material respond to its environment, size, user preference, and accessibility needs.

1. **11.1 — Sample background luminance.** Estimate whether the region behind the control is light, dark, or complex.
2. **11.2 — Regular material.** Build the versatile default that protects legibility.
3. **11.3 — Clear material.** Build a more transparent variant with an explicit dimming layer.
4. **11.4 — Small-control foreground switching.** Change a glyph between light and dark when needed.
5. **11.5 — Stable large-menu foreground.** Avoid distracting full light/dark flips across a large menu.
6. **11.6 — Adaptive tint.** Let background color influence the glass without losing control identity.
7. **11.7 — User tint slider.** Support a range from very clear to strongly tinted.
8. **11.8 — Content-aware shadow.** Increase separation over text and reduce it over calm solid areas.
9. **11.9 — Complex-content diffusion.** Increase diffusion when the background becomes visually busy.
10. **11.10 — Reduced transparency.** Replace the effect with a more opaque and readable material.
11. **11.11 — Increased contrast.** Strengthen edges and foreground separation.
12. **11.12 — Reduced motion.** replace morphing and overshoot with calmer transitions.
13. **11.13 — `GlassStyle` and `GlassEnvironment`.** Put the decisions behind a reusable model.
14. **11.14 — Debug controls.** Display all measured values and chosen adaptations.

**Checkpoint:** Drag one control across several backgrounds and show that its legibility changes without abrupt visual noise.

---

### Chapter 12 — Liquid geometry, merging, and 3D depth

**Purpose:** Make the material behave like a flexible object during interaction and transitions.

1. **12.1 — Interpolate bounds.** Move and resize from a source rectangle to a destination rectangle.
2. **12.2 — Interpolate corner radius.** Change a circle or capsule into a sheet.
3. **12.3 — The non-uniform scaling problem.** Observe why scaling a finished bitmap stretches highlights and text incorrectly.
4. **12.4 — Recompute geometry each frame.** Draw the current shape instead of stretching the final image.
5. **12.5 — Morph signed distance fields.** Blend two shape descriptions.
6. **12.6 — Metaball idea.** Make nearby round shapes appear to attract and join.
7. **12.7 — Merge and separate thresholds.** Control when a bridge appears between glass elements.
8. **12.8 — Press squish.** Flatten and widen a control under touch.
9. **12.9 — Velocity stretch.** Stretch slightly in the direction of motion.
10. **12.10 — Perspective.** Make farther points appear smaller.
11. **12.11 — Camera distance and 3D rotation.** Tilt a layer without extreme distortion.
12. **12.12 — Parallax.** Move highlight, foreground, and background by different amounts.
13. **12.13 — Material thickening while growing.** Drive optical properties from transition progress and current size.
14. **12.14 — Traveling highlight.** Move light energy around a changing silhouette.
15. **12.15 — Neighbor response.** Let a touch glow softly influence nearby glass controls.
16. **12.16 — Source-anchored transition.** Keep the relationship between tapped control and revealed content clear.

**Checkpoint:** Morph a circular icon button into a rounded panel without stretching its text or icon.

---

### Chapter 13 — Component gallery A: controls and navigation

**Purpose:** Apply the engine to common interactive components.

1. **13.1 — Circular icon button.** Rest, press, release, tint, and glyph contrast.
2. **13.2 — Capsule text button.** Concentric content placement and press deformation.
3. **13.3 — Prominent tinted action.** Add selective color without tinting every control.
4. **13.4 — Toolbar group.** Place related actions on one floating glass plane.
5. **13.5 — Cluster merge and separation.** Let nearby controls visually connect during interaction.
6. **13.6 — Floating tab bar.** Keep navigation above scrolling content.
7. **13.7 — Selection lens.** Move a transparent selection element between tab items.
8. **13.8 — Segmented control.** Reuse the selection lens in a compact control.
9. **13.9 — Slider.** Build track, transparent lens/thumb, value mapping, and drag response.
10. **13.10 — Switch.** Build mirrored capsule geometry and a moving glass thumb.
11. **13.11 — Focus, disabled, and pressed states.** Keep state feedback clear without visual clutter.
12. **13.12 — Component gallery screen.** Compare every control over the same test content.

**Checkpoint:** All components share the same material engine but preserve their own geometry and interaction rules.

---

### Chapter 14 — Component gallery B: menus, sheets, search, and system-like surfaces

**Purpose:** Cover the other major Liquid Glass families seen across iOS.

1. **14.1 — Search and address field.** Build leading icon, placeholder, clear action, and glass placement.
2. **14.2 — Compact-to-expanded search.** Animate from toolbar control to focused field.
3. **14.3 — Overflow menu.** Reveal a menu from a small source control.
4. **14.4 — Context menu.** Anchor content near the interaction location.
5. **14.5 — Popover.** Add source relationship, arrow or connection, and adaptive placement.
6. **14.6 — Anchored action sheet.** Grow from the action that caused it instead of appearing from an unrelated edge.
7. **14.7 — Rounded presentation sheet.** Add dimming, concentric corners, and depth response.
8. **14.8 — Sidebar.** Let content extend behind an inset glass navigation surface.
9. **14.9 — Scroll-edge effect.** Create a soft transition where moving content meets floating controls.
10. **14.10 — Media controls.** Build play, seek, and accessory controls on one glass plane.
11. **14.11 — Control Center-style tile.** Make a larger stateful toggle with a selected material.
12. **14.12 — Notification or banner.** Balance material, text legibility, and short presentation motion.
13. **14.13 — Badge, toast, and compact status capsule.** Build small transient surfaces.
14. **14.14 — Layered icon experiment.** Add parallax, refraction, tint, and specular response to icon layers.
15. **14.15 — Integrated system-style gallery.** Test all surfaces over text, photos, video-like motion, and dark/light content.

**Checkpoint:** Recreate the major visual families without copying one fixed effect onto every element.

---

### Chapter 15 — Capstone: Safari-style three-dot menu expansion

**Purpose:** Rebuild the compelling source-anchored menu transition in small, understandable stages.

1. **15.1 — Choose and record the exact target.** Save the OS version, app version, orientation, and a reference recording.
2. **15.2 — Inspect at slow speed.** Observe without guessing what happens between the first and last frame.
3. **15.3 — Create a frame storyboard.** Mark rest, contact, compression, early expansion, mid expansion, content reveal, settle, and close.
4. **15.4 — Separate facts from hypotheses.** Label what is visible and what is only an implementation guess.
5. **15.5 — Design the scene graph.** Separate background, glass material, source icon, menu content, dimming, and debug overlays.
6. **15.6 — Measure source and destination bounds.** Convert the three-dot button position into scene coordinates.
7. **15.7 — Build the resting source bubble.** Match size, radius, tint, edge, and shadow.
8. **15.8 — Add press flex.** Compress near the touch point and energize the material with a local glow.
9. **15.9 — Start an anchored transform.** Keep one visual point attached to the source while the shape begins to grow.
10. **15.10 — Morph bubble to rounded sheet.** Recompute bounds and corner geometry on every frame.
11. **15.11 — Prevent stretched material artifacts.** Do not scale a final glass bitmap non-uniformly.
12. **15.12 — Keep menu content on a separate layer.** Avoid refraction and geometric stretching of labels and icons.
13. **15.13 — Reveal content progressively.** Fade, clip, and slightly move menu rows only after enough room exists.
14. **15.14 — Tune a thickness curve.** Make the material appear more substantial as it becomes larger.
15. **15.15 — Tune refraction over time.** Increase lensing during the growth phase, then settle it deliberately.
16. **15.16 — Tune diffusion and blur over time.** Improve readability as more content appears.
17. **15.17 — Add dark edge and bright specular highlight.** Reinforce the refined material depth.
18. **15.18 — Add dynamic shadow.** Deepen, spread, and adapt it to the background.
19. **15.19 — Add 3D tilt and perspective.** Create depth without making the final menu look permanently rotated.
20. **15.20 — Add boundary lens distortion.** Bend background features near the moving silhouette.
21. **15.21 — Add traveling interaction light.** Let the initial touch energy move through the growing material.
22. **15.22 — Add neighboring glass response if present.** Make nearby controls react softly rather than independently flashing.
23. **15.23 — Reverse the transition.** Return content, optics, shape, and shadow to the source in the correct order.
24. **15.24 — Handle rapid taps.** Prevent jumps when open and close commands overlap.
25. **15.25 — Handle interrupted and dragged states.** Continue from the current visual state rather than restarting.
26. **15.26 — Build reduced-motion and reduced-transparency versions.** Preserve source relationship and readability.
27. **15.27 — Profile on the Pixel 8 Pro.** Inspect frame time, shader cost, render-target size, recomposition, and allocations.
28. **15.28 — Compare at normal and slow speed.** Judge both the final appearance and the quality of intermediate frames.
29. **15.29 — Final capstone review.** Explain every material and motion layer from first principles.

**Checkpoint:** The menu must look convincing during the middle of the transition, not only at rest and at the final state.

---

### Chapter 16 — Expert engineering, testing, and independent work

**Purpose:** Turn experiments into a dependable graphics system.

1. **16.1 — Define a reusable API.** Separate material, shape, interaction, environment, and transition parameters.
2. **16.2 — `GlassContainer`.** Own background capture and shared context.
3. **16.3 — `GlassEffect`.** Apply a material to a shape without owning app-specific content.
4. **16.4 — `GlassTransition`.** Describe source, destination, progress, interruption, and content timing.
5. **16.5 — Use meaningful units.** Distinguish dp, pixels, normalized values, angles, and time.
6. **16.6 — Cache shaders and graphics layers.** Avoid construction and allocation every frame.
7. **16.7 — Update uniforms efficiently.** Change visual values without rebuilding unrelated UI.
8. **16.8 — Control render-target size.** Crop, downsample, and reuse offscreen buffers.
9. **16.9 — Adaptive quality.** Reduce expensive details under load without abruptly changing the design.
10. **16.10 — Measure CPU, GPU, and memory separately.** Do not guess which part is slow.
11. **16.11 — Benchmark 60 Hz and 120 Hz behavior.** Use frame budgets appropriate to the display mode.
12. **16.12 — Screenshot and golden tests.** Verify stable material states.
13. **16.13 — Motion tests.** Sample important progress values instead of checking only start and end.
14. **16.14 — API 31 and older fallbacks.** Provide frosted, tinted, or opaque alternatives.
15. **16.15 — Build the gallery app and documentation.** Make every parameter and tradeoff inspectable.
16. **16.16 — Independent capstone.** Choose an iOS Liquid Glass behavior not taught directly and reproduce it.
17. **16.17 — Expert explanation.** Teach the final system to another beginner using simple language.

**Final standard:** You can observe an unfamiliar glass effect, divide it into geometry, sampling, light, compositing, motion, accessibility, and performance problems, then build and justify an Android implementation.

---


## 4. Completed implementation summary

| Chapter | Status | Completed lessons |
|---|---|---:|
| 1 · Transparent panel foundations | Complete | 8 |
| 2 · Screen grid and coordinates | Complete | 9 |
| 3 · Color, opacity, compositing | Complete | 11 |
| 4 · Shapes, paths, masks | Complete | 11 |
| 5 · Motion without mystery | Complete | 12 |
| 6 · How Android draws the scene | In progress | 7 of 11 |

Total learner-confirmed completion: **58**.

## 5. Historical implementation record — Lesson 5.10

### New graphics idea

A press deformation uses the local pointer-down position as the transform pivot, so the contact point remains stationary while the drawing squashes and spreads.

### New motion idea

Pressed Boolean state selects target press amount 1; release or cancellation selects 0. A spring supplies a current amount between those targets.

### Variables

```text
W, H      measured control size
pₓ, pᵧ    local pointer-down position
fₓ, fᵧ    normalized pivot fractions
b         pressed Boolean
q         current press amount, 0..1
sₓ, sᵧ    current scale
r         current corner radius
```

### Controlled formulas

```text
fₓ = clamp(pₓ / W, 0, 1)
fᵧ = clamp(pᵧ / H, 0, 1)

q_target = b ? 1 : 0

sₓ = 1 + (1.04 - 1) × q
sᵧ = 1 + (0.90 - 1) × q
r  = 32 + (24 - 32) × q
```

### Browser lesson

- Two-column layout keeps diagram and stepper visible together.
- Sixteen states are used because the lesson introduces input lifecycle, local coordinates, normalization, pivot, Boolean target, current spring amount, three derived visual values, pivot proof, and release/cancellation.
- Pointer interaction and presets update one shared state.
- The browser exposes `q` manually; it does not claim to reproduce Compose’s spring solver.

### Android files

```text
app/src/main/java/com/example/liquidglasslab/chapter05/Chapter05Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter05/PressDeformationExplorer.kt
```

### Android APIs

- `onSizeChanged` for measured local bounds;
- `detectTapGestures(onPress)` for local pointer-down position and press lifetime;
- `animateFloatAsState` with `spring` for current press amount;
- `TransformOrigin` and `graphicsLayer` for pivoted scale;
- `Canvas.drawRoundRect` for the animated radius.

### Explicit deferrals

- physical pressure/force;
- multi-touch deformation;
- drag-following pivot updates;
- interruption policy beyond normal press release;
- full Liquid Glass refraction or backdrop sampling.

## 6. Current file manifest

```text
Learning:
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
course/chapters/chapter-06/lesson-06-08-keep-the-sample-current.html
course/chapters/chapter-06/lesson-06-09-avoid-feedback-loops.html

Android:
app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter06/AvoidFeedbackLoopsExplorer.kt
```

## 7. State and history policy

The curriculum preserves the full plan and concise active implementation records. Patch-by-patch history was compacted in version 5.10.0. Lesson HTML, Kotlin source, prior packages, and version control preserve detailed history without forcing every new conversation to read it.


## 2026-08-10 visual-quality repair for consolidated 5.8/5.9

- The first consolidation flattened lesson design too much. The repaired consolidated Lesson 5.8 restores the advanced course visual language: hero/status area, prominent all-formulas panel, rich trace graphs, side-by-side stepper, and a paged moment-by-moment variable matrix.
- Memory files should remain compact but structured as rule indexes, not as deleted guidance. Preserve canonical exemplar summaries and current state; avoid patch-by-patch logs.

## Consolidated Lesson 5.8 trace and matrix contract

- One global tick coordinate maps every curve segment, event marker, and selected marker.
- Displacement and spring pull use one shared value scale when drawn together.
- The moment matrix uses variable rows and tick columns, with adaptive horizontal paging when needed.
- The consolidated lesson retains its 24-state walkthrough, prediction, coding challenge, exercises, review checkpoint, and evidence boundary.

- Consolidated Lesson 5.8 includes a conditional dependency table (`x → d → S`, `v → D`, `S + D → N → Δv → v_next → x_next`) and a live selected-tick chain. Each arrow states which other inputs are held fixed.


## 5.12 implementation record

- Prominent variable ledger and all-formulas panel define real frame delta, scaled simulation delta, direction, play time, progress, and fixed debug step.
- Eighteen-state walkthrough follows timestamps → real delta → speed scaling → signed accumulation → progress → geometry → pause → frame step → Android boundary.
- Browser model supports live speed, pause, one-step, reverse direction, and a controlled five-frame trace.
- Android uses `withFrameNanos` as a timestamp source and `TargetBasedAnimation.getValueFromNanos` as a stateless calculation engine.
- Complete chapter previews remain in `Chapter05Screen.kt`; direct child light/dark previews live in `SlowMotionController.kt`.


### Lesson 6.2 clarification record

- Draw order changes final stacking but does not automatically provide a readable sibling-backdrop image to foreground code.
- The missing future data route is stated explicitly: record the backdrop, map/crop the panel region, then replay or read the recorded pixels.
- All order controls, metrics, traces, and walkthrough SVG states now consume one canonical preset value; step-specific demonstrations set that value explicitly instead of silently overriding rendering.
