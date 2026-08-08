# Liquid Glass on Android: Beginner-to-Expert Curriculum

**Version:** 5.1.0  
**Updated:** 2026-08-08  
**Current course position:** Lessons 1.1 through 4.11 are complete by learner confirmation. **39 of 216 lessons are complete.** Chapters 1 through 4 are complete. Lesson 5.1 is the next unresolved checkpoint and the generated frontier.
**Primary platform:** Kotlin, Jetpack Compose, Android 13/API 33 or newer  
**Physical test device:** Pixel 8 Pro  
**Working Android project name:** `LiquidGlassLab`  
**Default lesson format:** one standalone interactive HTML file per lesson

---

## 1. What changed through version 5.1.0


Version 5.1.0 records completion of Lesson 4.11 and Chapter 4, then generates Lesson 5.1:

- Lesson 4.11 is learner-confirmed complete. Chapter 4 is complete. Learner-confirmed completion is now **39 of 216 lessons**.
- Lesson 5.1 starts Chapter 5 with one new idea: define complete endpoint state snapshots before introducing time or interpolation.
- The controlled endpoints are `RestingButton` and `ExpandedMenu`. Each snapshot contains width, height, corner radius, three-dot alpha, menu-content alpha, and one fixed material color.
- The endpoint selector switches instantly. The lesson explicitly contains no time, progress, interpolation, easing, velocity, spring, or automatic playback.
- A deliberate mixed-state diagnostic shows why unrelated endpoint properties should not be selected independently.
- Android changes: `MainActivity.kt`, new `chapter05/Chapter05Screen.kt`, and new `chapter05/StateBeforeAnimationExplorer.kt`.



Version 4.11.0 records learner completion of Lesson 4.10 and generates Lesson 4.11:

- Lesson 4.10 is learner-confirmed complete. Learner-confirmed completion is now **38 of 216 lessons**.
- Lesson 4.11 is the final Chapter 4 checkpoint. It combines fixed rounded rectangles, capsules, and concentric nested corners through one explicit shape-contract model.
- The outer contract runs first: fixed mode consumes a selected radius bounded by half the shorter side; capsule mode derives radius as half the current height.
- Uniform padding then derives the inner rectangle and the concentric inner radius `outer radius - padding`.
- The laboratory compares the correct rule with a copied-radius defect, proves shared corner centers, and stress-tests several sizes.
- The implementation contract explicitly says `Path = none`, `clip = none`, and `mask = none`; direct rounded-rectangle drawing is sufficient.
- Optional inspection rotation reuses transform origin without changing the geometry values.
- Android changes: `Chapter04Screen.kt` and new `ShapeLaboratory.kt`, with both preview levels in light and dark modes.
- Lesson 4.11 remains incomplete. Chapter 4 remains in progress.


Version 4.10.0 records learner completion of Lesson 4.9 and generates Lesson 4.10:

- The completed Lesson 4.9 fourteen-step walkthrough is the canonical detail target for explanations that depend on concepts the learner has not met. The reusable standard is one visible object or operation per step, not a mandatory fixed count.
- Lesson 4.9 adds diagram-local previous/next buttons synchronized with the drawer's step state.
- Lesson 4.10 introduces transform origin as the local stationary pivot for rotation and scaling.
- The browser lesson converts normalized origin fractions into local pivot coordinates and traces one point through pivot-relative scale and rotation.
- The Android explorer uses `TransformOrigin` and `graphicsLayer`, measures runtime px size, and demonstrates that draw transforms do not remeasure layout.
- Learner-confirmed completion is now 37 of 216. Lesson 4.10 remains incomplete.

Version 4.9.8 replaces the misleading `H` projection in Lesson 4.9. The lesson now defines `Q` and `P normal coordinate` before any component multiplication, explains why `Delta = P - C` is required when the new axis uses C as zero, derives horizontal and vertical projection rates with one-unit diagrams, accumulates both signed changes on one coordinate ruler, and only then names the result a dot product. The Android explorer mirrors that order and adds a normal-coordinate accumulator Canvas.

Version 4.9.5 rejects and replaces the incomplete first visual signed-distance rewrite:

- The rejected rewrite constructed the objects in a better order but still treated the vector arithmetic as self-explanatory. It wrote `(cos 38°, sin 38°)`, multiplied by `deltaX` and `deltaY`, and added the products without deriving why these operations measure one coordinate across the boundary.
- The new version derives the normal components from a drawn unit right triangle: the normal has length `1`, so its horizontal leg is `cos 38° = 0.7880` and its downward vertical leg is `sin 38° = 0.6157`.
- `C → P` is visibly decomposed into the horizontal move `C → H` and vertical move `H → P`. The lesson proves that a one-unit horizontal move changes the normal ruler by `normalX`, and a one-unit vertical move changes it by `normalY`. Scaling each one-unit effect by the actual movement produces the two contributions.
- The contributions add because they are consecutive changes on the same one-dimensional normal ruler. Only after this proof does the lesson introduce the names scalar projection and dot product.
- The value `0.1200` is now the labelled learner-controlled distance `C → B` along the unit normal. The pink boundary passes through `B = C + 0.1200 × n`. It no longer appears first as an unexplained subtraction constant.
- The helper probe controls now say `closest to the boundary on this side`; the metric is smallest absolute signed distance to the boundary, not smallest distance to `C`.
- The main selected-pixel view and all focused proof panels reuse the exact same named points and colors. Tiny distances are shown at their honest full-scale location and in a separately labelled magnified ruler.
- The signed-distance walkthrough now has ten one-operation states, and the Kotlin comments follow the same causal order.
- `AGENTS.md` adds the **Vector components, scalar projection, and anchored-offset gate**.
- Lesson 4.9 remains learner-incomplete. Progress remains **36 of 216 lessons**.

Version 4.9.4 rejects and replaces the first signed-distance explanation:

- The rejected Version 4.9.3 began with a normal vector, two unexplained angles, `C`, `P`, `Delta`, projection, and a sign before constructing those objects visually.
- It also showed a 9 × 6 grid and a 12 × 12 grid without first stating that 9 × 6 is the complete toy output image while 12 × 12 exists inside one selected output pixel.
- The replacement starts from the complete 9 × 6 output grid, selects pixel `(4, 3)`, derives its bounds and center `C = (4.5, 3.5)`, then zooms that one pixel into `12 × 12 = 144` equal-area teaching subcells.
- `P` is introduced only after one exact subcell-center probe is visible. `Delta = P − C` is introduced only after the arrow from `C` to `P` is drawn.
- The visible pink boundary tilt `52°` is the controlled input. The perpendicular blue normal angle is derived as `90° − 52° = 38°`.
- Projection is taught as removing movement parallel to the boundary and retaining one coordinate on a one-dimensional normal ruler before showing `normalX × deltaX + normalY × deltaY`.
- Signed distance is shown as `probe coordinate on normal ruler − boundary coordinate on normal ruler`. Negative, zero, and positive positions are displayed on a magnified ruler.
- The final count explicitly shows that `94` is produced by running the same side test for all 144 probes in one output pixel. The 144 total comes from `12 × 12`, not from the 9 × 6 grid.
- The HTML adds an eight-step visual-first walkthrough and matching Kotlin excerpt. The Android source adopts the same visible-boundary angle, names, comments, and causal sequence.
- Lesson 4.9 remains incomplete. Learner-confirmed progress remains 36 of 216.

Version 4.9.3 is retained only as rejected history. Its arithmetic was correct, but its expert-first teaching order is not a valid learner checkpoint.

Version 4.9.2 clarifies center-sample estimation and adds one direct-geometric mitigation:

- Renames the ambiguous `Thin feature` preset to **Thin band · two edges**.
- Draws the top and bottom band boundaries separately. The dashed center guide is no longer presented as the shape boundary.
- Draws equal-area subcells and an exact center pin for every sample. The visible marker ring is labelled as decoration only.
- States that center samples are probes. They cast one vote for a subcell; they do not split the pixel at the real geometric boundary.
- Keeps the complete-miss case: a 5% band can cross subcells while a 4 × 4 center pattern records zero hits.
- Adds a detected-but-inexact case: a straight edge covers 40% of a pixel while a 2 × 2 center pattern reports 50%.
- Defines **analytic coverage** as calculating the edge-to-pixel intersection and enclosed area directly instead of adding more center samples.
- Limits implementation detail to the course need: Compose supplies the geometry; Android's renderer owns rasterization.
- No Android source changes. Lesson 4.9 remains incomplete and progress remains 36 of 216.



Version 4.8.6 records the final Lesson 4.8 visual-first state as the course's canonical positive exemplar:

- On 2026-08-03, the learner explicitly described the final edit as **“world-class explanation level.”**
- The positive signal confirms that the visual-first intermediate-state approach is not only a repair rule; it is a demonstrated successful teaching pattern.
- The canonical artifacts are `lesson-04-08-masks.html` and `MasksExplorer.kt` from the `visual-layer-movie-rewrite` incremental packages.
- The exemplar begins with rendered scene objects, shows every target and complete intermediate image after every operation, attaches the exact Kotlin line to each state, and uses prose only after the visual evidence exists.
- It combines a rotatable 3D target stack with exact 2D front views, a same-coordinate pixel microscope, parallel straight and premultiplied cases, RGB/RGBA color chips, value-provenance controls, isolation architecture comparisons, and a visible cost model.
- Future lessons about invisible graphics state must use this artifact as the quality baseline. They should preserve its causal and evidence standard without mechanically copying every widget.
- This is a documentation-only status update. The lesson HTML and Kotlin remain unchanged from the praised visual-first rewrite.
- The learner has not explicitly completed Lesson 4.8 and still needs to apply/test the files locally. Learner-confirmed completion therefore remains **36 of 216 lessons**.

Version 4.8.5 is the visual-first layer-movie rewrite that earned this evaluation. It replaced prose-led layer teaching with rendered intermediate images, a seven-step target movie, a per-position microscope, parallel representation cases, value annotations, isolation diagrams, and an explicit target-cost model.


Version 4.8.3 rebuilds the Lesson 4.8 explanation around stable scene objects, alpha-mask semantics, two consecutive operations, and explicit Canvas layer ownership:

- The lesson now names the content being masked, mask data, and navy background before assigning temporary source and destination roles.
- `DstIn` is defined as preserving destination color and using source alpha. `SrcIn` preserves source color and uses destination alpha. Both may show the same hard overlap only when draw order and operand preparation are reversed accordingly.
- The Android path is identified as an alpha mask. Opaque black means alpha `1.00` and keeps content under `DstIn`; black RGB itself has no masking meaning.
- The grayscale row is labelled only as a visible preview of numeric values. Opaque gray RGB `0.60` is not automatically mask alpha `0.60`. A luminance mask would need a separate RGB-to-alpha conversion.
- Mask application and source-over are taught as two consecutive stages. The first produces `masked content alpha = original content alpha × mask alpha`. The same number becomes source alpha only when the completed masked group is later drawn over navy.
- The spatial Compose demo now exposes capsule mask alpha `1.00` and `0.60`, so partial masking is visible in the same multi-draw pattern used for the shape-cut example.
- The direct-alpha four-zone microscope is retained only under its exact contract: one solid draw per non-overlapping zone. A two-shape overlap counterexample shows `0.84` from separate 60% draws versus `0.60` from masking the completed group once.
- The Compose implementation keeps `graphicsLayer(Offscreen)` as the documented composable-level destination boundary, then uses one full-bounds `Canvas.saveLayer` to construct the separate source mask restored with `DstIn`. The two operations have different jobs. A correct-looking run without `Offscreen` is recorded as runtime evidence, not a general containment contract.
- `AGENTS.md` adds the **Mask operands, representation, two-stage compositing, and isolation-boundary gate**.
- Lesson 4.8 remains incomplete. Learner-confirmed completion remains **36 of 216 lessons**.

Version 4.8.2 corrects the Lesson 4.8 Compose mask implementation after the learner observed that the multi-color candidate remained visible outside the capsule:

- The previous correction correctly isolated the candidate Canvas with `CompositingStrategy.Offscreen`, but then drew only an opaque capsule directly with `BlendMode.DstIn`.
- That shape draw supplied source coverage only inside the capsule. Outside the capsule, no source draw occurred, so the already drawn candidate remained unchanged.
- Offscreen isolation controls which destination group the blend may affect. It does not create source alpha `0` outside a geometric draw.
- The corrected implementation keeps the outer offscreen candidate group, then creates a second transparent mask layer covering the complete Canvas bounds with `Canvas.saveLayer`.
- The capsule is drawn normally into that full-bounds mask layer. The layer therefore contains alpha `1` inside the capsule and alpha `0` outside it.
- Restoring the complete mask layer with `BlendMode.DstIn` keeps the candidate inside the capsule and makes the candidate group transparent outside. The parent navy `Surface` then shows through.
- The lesson now traces one outside position through both the defective and corrected paths.
- A hard capsule with no partial values should still use `clipPath` in ordinary production code. The full `DstIn` path remains in this lesson to demonstrate a complete independent mask field for grouped content.
- Android changes only `MasksExplorer.kt`. `Chapter04Screen.kt` already contains the required complete-screen and direct-child light/dark previews and remains unchanged.
- `AGENTS.md` adds the **Mask-field domain and source-coverage gate**.
- Lesson 4.8 remains incomplete. Learner-confirmed completion remains **36 of 216 lessons**.

Version 4.8.1 corrects the Lesson 4.8 teaching order after the learner identified the missing spatial model:

- The original lesson correctly calculated effective source alpha, but it led with four numeric mask zones. This made the mask appear to be only a channel-multiplication operation.
- The corrected lesson defines a mask first as a spatial visibility map and shows content, mask, and output as separate objects.
- A new compact interaction demonstrates: cutting oversized content to a capsule, moving content behind a fixed capsule mask, and moving the capsule mask over fixed content.
- The interaction uses a manual position slider. Time-driven animation remains deferred to Chapter 5.
- The representation boundary is now explicit: a pure opacity mask preserves straight RGB and multiplies alpha; premultiplied RGB contributions and alpha both scale by the mask value.
- The Android spatial demonstration uses `CompositingStrategy.Offscreen` to isolate multi-draw candidate content, then applies a capsule through `BlendMode.DstIn`.
- The parent navy background remains outside the isolated Canvas so the mask cannot remove it.
- The existing four-zone `alpha = maskValue` path remains only as a controlled arithmetic microscope for one solid candidate and non-overlapping zones.
- A hard 0-or-1 shape mask is compared with clipping without treating the two data models as identical. The lesson states that clipping remains the simpler production tool for a hard geometric boundary when a general mask adds no capability.
- `AGENTS.md` adds the **Spatial-first mask and visibility-field gate**.
- Lesson 4.8 remains incomplete. Learner-confirmed completion remains **36 of 216 lessons**.

Version 4.8.0 records completion of Lesson 4.7 and generates Lesson 4.8:

- The learner requested the next lesson without a remaining Lesson 4.7 issue, so Lesson 4.7 is learner-confirmed complete.
- Learner-confirmed course completion is now **36 of 216 lessons**.
- Lesson 4.8 defines a mask as separate per-position visibility data rather than a gray color layer.
- The controlled candidate is opaque straight sRGB RGBA `(0.84, 0.36, 0.18, 1.00)`. The opaque background is straight sRGB RGBA `(0.10, 0.18, 0.30, 1.00)`.
- The reset mask field uses four enlarged zones with values `0.00`, `0.25`, `0.60`, and `1.00`.
- The grayscale mask preview maps mask value `m` to preview RGB `(m, m, m)`, but that preview RGB is not a tint input.
- The lesson defines effective source alpha before its first formula and calculates it as `candidate alpha × mask value`.
- Reset zone C uses effective alpha `1.00 × 0.60 = 0.60` and produces final straight sRGB RGBA approximately `(0.5440, 0.2880, 0.2280, 1.0000)` over the opaque background.
- A separate boundary example proves that candidate alpha `0.50` and mask value `0.60` produce effective alpha `0.30`; the two restrictions do not add.
- The clipping comparison is limited to Lesson 4.7's clearly inside and clearly outside positions. Renderer-created edge coverage remains deferred to Lesson 4.9.
- The browser diagram and manual stepper remain capped at `820 × 430` CSS pixels, with full values in external readouts.
- Android changes: `Chapter04Screen.kt` and new `MasksExplorer.kt`, with complete-screen and direct-child previews in both OS themes.
- The Android explorer uses one controlled solid candidate and four non-overlapping mask zones. It explicitly states that arbitrary multi-draw or captured content normally needs grouping or a shader-based mask.
- No new `AGENTS.md` policy is added. The clean Lesson 4.7 progression reinforces the existing beginner-first, causal-operation, compact-geometry, and stepper-fit rules.

Version 4.7.0 records completion of Lesson 4.6 and generates Lesson 4.7:

- The learner requested the next lesson without a remaining Lesson 4.6 issue, so Lesson 4.6 is learner-confirmed complete.
- Learner-confirmed course completion is now **34 of 216 lessons**.
- Lesson 4.7 reuses the completed closed badge `Path` from Lesson 4.5 as a temporary clipping region.
- The oversized four-band content uses the same draw commands with clipping off and clipping on. Only the allowed output region changes.
- The lesson defines clip region, candidate drawing, discarded draw, and scope before introducing `clipPath`.
- Browser point I `(300, 230)` lies inside the badge's rectangular core and receives the opaque amber candidate. Point O `(720, 230)` lies beyond the badge's rightmost X `650`; its clipped candidate is rejected and the earlier background remains.
- The lesson explicitly states that clipping does not erase the destination and does not replace rejected positions with transparent black.
- A pink ring Q is drawn after the clip block and remains visible outside the badge, proving that the temporary clip scope has ended.
- The browser interaction and manual stepper are capped at `820 × 430` CSS pixels and keep full values in external readouts.
- Android changes: `Chapter04Screen.kt` and new `ClippingExplorer.kt`, with complete-screen and direct-child previews in both OS themes.
- Masks, gradual visibility, boundary antialiasing, nested clips, and subtractive clips remain explicitly deferred.
- No new `AGENTS.md` policy is added. The clean completion reinforces the existing endpoint/control-point, value-trace, stepper, and compact-geometry rules.

Version 4.6.0 records completion of Lesson 4.5 and generates Lesson 4.6:

- The learner requested the next lesson without a remaining Lesson 4.5 issue, so Lesson 4.5 is learner-confirmed complete.
- Learner-confirmed course completion is now **33 of 216 lessons**.
- Lesson 4.6 keeps the completed `Path` and current-point model, then replaces one straight `lineTo` segment with one `cubicTo` segment.
- The lesson defines one start endpoint, two control points, one end endpoint, and endpoint-to-control guide lines before introducing the API call.
- The start and end are guaranteed positions on the curve. The two control points guide the shape and usually do not lie on the visible curve.
- The general cubic equation is deferred until Chapter 5 teaches progress and linear interpolation. Lesson 4.6 calculates the exact halfway point with repeated midpoint arithmetic already available from Chapter 2.
- Browser reset values produce first-round points `(200, 200)`, `(410, 100)`, `(620, 200)`, second-round points `(305, 150)`, `(515, 150)`, and final curve midpoint `(410, 150)`.
- The primary interactive SVG is capped at `820 × 430` CSS pixels. It uses distinct marker shapes plus external synchronized coordinates instead of full labels inside the geometry.
- Android changes: `Chapter04Screen.kt` and new `CubicBezierExplorer.kt`, with complete-screen and direct-child previews in both OS themes.
- Clipping, masks, antialiasing, renderer subdivision, and the general curve-position equation remain explicitly deferred.
- No new `AGENTS.md` policy is added. The clean completion reinforces existing current-point, stepper, and compact-geometry rules.

Version 4.5.0 records completion of Lesson 4.4 and generates Lesson 4.5:

- The learner proceeded without a remaining Lesson 4.4 issue, so Lesson 4.4 is learner-confirmed complete.
- Learner-confirmed course completion is now **32 of 216 lessons**.
- Lesson 4.5 introduces a Compose `Path` as an ordered command list.
- The controlled command sequence is `moveTo(A)`, four connected `lineTo` calls, and `close()`.
- The lesson distinguishes explicit closure stored by `close()` from fill-style drawing, which can treat an open connected run as closed while filling without changing the stored command list.
- The lesson traces the current point and one exact `lineTo(C)` operation before showing the complete sequence.
- The interactive SVG is capped at `820 × 430` CSS pixels. It uses short A-through-E labels and synchronized external readouts.
- Point C is adjustable so the learner can see that one shared endpoint changes two adjacent segments.
- Android changes: `Chapter04Screen.kt` and new `PathsExplorer.kt`, with complete-screen and direct-child previews in both OS themes.
- Curved segments, clipping, masks, general fill rules, and antialiasing remain explicitly deferred.
- No new `AGENTS.md` policy is added. The clean completion reinforces existing beginner-first and compact-geometry rules.

Version 4.4.0 records completion of Lesson 4.3 and generates Lesson 4.4:

- The learner proceeded without a remaining Lesson 4.3 issue, so Lesson 4.3 is learner-confirmed complete.
- Learner-confirmed course completion is now **31 of 216 lessons**.
- Lesson 4.4 defines concentric corner curves as circular corner curves that share one center.
- One outer rounded rectangle is inset by equal left, top, right, and bottom padding.
- The inner radius is derived only after the outer center and inner edges are known: `inner radius = outer radius - uniform padding`.
- The reset browser geometry uses outer radius `90`, padding `30`, and inner radius `60`, preserving center `(200, 125)`.
- Copying radius `90` after the inner edges move creates center `(230, 155)`, exposing the defect numerically and visually.
- The interaction is capped at `820 × 430` CSS pixels and keeps complete bounds, radii, centers, and center shift in synchronized readouts.
- The radius-zero boundary is explicit. Padding larger than the outer radius cannot produce a circular concentric inner curve with a non-negative radius.
- Android changes: `Chapter04Screen.kt` and new `ConcentricCornersExplorer.kt`, with complete-screen and direct-child previews in both OS themes.
- No new `AGENTS.md` policy is added; the clean Lesson 4.3 progression reinforces existing gates.

Version 1.0 placed the complete Chapter 1 teaching text and its large Compose example inside this master Markdown file. That was a bundled-document structure.

Version 1.1 changed the course to a file-based learning system.

Version 1.2 adds these decisions:

- Generic `index.html` names are not used for the course home or chapter hubs.
- The course home is `liquid-glass-course.html`.
- A chapter hub is named `lesson-[chapter-name].html`. Chapter 1 therefore uses `lesson-a-transparent-panel-is-not-yet-liquid-glass.html`.
- A sub-lesson keeps a numbered descriptive name such as `lesson-01-01-visible-ingredients.html`.
- Every lesson includes at least one small coding challenge before the final exercise section. The coding challenge must use only ideas already introduced in that lesson or earlier lessons.
- The learning-document repository and the Android project are separate. The document package does not contain an `android/` directory.
- This Markdown file remains the master plan. It does not contain the full prose and code for every lesson.
- Every lesson has its own standalone interactive `.html` file.
- Kotlin and AGSL source code lives in the separate Android project. A lesson quotes the exact lines it teaches and states the complete target file path.
- Static SVG, PNG, Mermaid, or Markdown files are used only when they explain the topic better than an interactive page.
- The conversation handoff remains a separate Markdown file because it records course state for the next conversation.

Version 1.3 adds the first Android project lesson:

- Lesson 1.2 is marked complete because the learner confirmed the reported defect was fixed and explicitly requested Lesson 1.3.
- Lesson 1.3 creates the separate `LiquidGlassLab` project with the exact course package `com.example.liquidglasslab`.
- The lesson first runs the untouched Empty Activity template. This establishes a known-good build and device baseline before course code is copied.
- The Android companion package contains only `MainActivity.kt` and `chapter01/Chapter01Screen.kt`. It deliberately leaves the template-generated Gradle and theme files in place.
- `MainActivity` calls `Chapter01Screen` directly. A route abstraction is not added while the app has one destination.
- The lesson introduces a manual source-to-pixels pipeline, a project-configuration laboratory, USB and Wi-Fi ADB paths, an editor-driven coding challenge, exercises, and a completion record.

Version 1.4 adds the first controlled Android graphics scene:

- Lesson 1.3 is marked complete by learner progression because the learner explicitly requested Lesson 1.4 without reporting a remaining issue.
- Lesson 1.4 introduces a study background made from a diagonal gradient, four opaque color regions, four circle silhouettes, eleven sharp lines, and two text scales.
- `Chapter01Screen.kt` is replaced with a small delegation to `StudyBackground`.
- `StudyBackground.kt` is added as a separate cumulative Android source file.
- The browser lesson compares a flat background and the study background under the same blur, shift, and tint teaching operations.
- The lesson uses a manual layer-building stepper, a code-and-button synchronized coding challenge, four diagnostic exercises, and a Pixel 8 Pro checkpoint.
- Delivery changes from cumulative archives to incremental archives. Each ZIP contains only files created or modified for the current lesson while preserving repository-relative paths.

Version 1.5 adds the first translucent Android foreground:

- Lesson 1.4 is marked complete because the learner reported that it was finished, clear, and tested.
- Lesson 1.5 keeps `StudyBackground.kt` unchanged.
- `Chapter01Screen.kt` now uses one parent `Box`, draws the study background first, and places the panel second at the center.
- `TranslucentRoundedPanel.kt` is added. It owns `PanelFillAlpha = 0.25f`, `RoundedCornerShape(32.dp)`, and the white `Modifier.background` fill.
- The Android panel requests fixed bounds of `328.dp × 190.dp` for this controlled experiment.
- The lesson adds no blur, refraction, border, shadow, highlight, foreground content, or animation.
- The browser lesson exposes the background layer, panel layer, and final composite separately. It also includes a sharp-edge diagnostic, a manual construction stepper, and a synchronized alpha coding challenge.
- The alpha-mixture arithmetic remains deliberately deferred to Lesson 1.6.

Version 1.6 explains the first compositing formula without changing Android source:

- Lesson 1.5 is marked complete because the learner reported that the pace and explanations were clear, the lesson had no remaining questions, and the Android result was tested.
- Lesson 1.6 follows one fully covered panel position and one normalized color channel.
- The teaching formula is `R = F × A + B × (1 − A)` for a translucent source over an opaque destination.
- The course example uses `F = 1.00`, `B = 0.20`, and `A = 0.25`, producing foreground contribution `0.25`, background contribution `0.15`, and result `0.40`.
- The lesson distinguishes same-position alpha compositing from blur, which reads neighboring positions, and refraction, which can read shifted positions.
- The browser model names its evidence limits. Exact device values can also depend on color space, rounding, screenshot conversion, and shape-edge coverage. Those details do not change the same-position sampling conclusion.
- No Android source file changes. The renderer already performs the per-position source-over operation for the Lesson 1.5 panel.
- The coding challenge repairs `backgroundShare = 1f - alpha` in an isolated teaching helper. The helper is not added to `LiquidGlassLab`.


Version 1.7 answers the remaining Lesson 1.6 channel-value question and adds the controlled device experiment:

- A value such as `0.40` is identified as one normalized red, green, or blue channel value, not a complete color.
- Normalized RGBA and integer RGBA are two numeric scales for the same four-component structure. The example `(0.40, 0.65, 0.90, 1.00)` is approximately `(102, 166, 230, 255)`.
- Lesson 1.6 is marked complete after this clarification because the learner reported that the rest of the lesson was clear and requested progression.
- Lesson 1.7 adds exact 0%, 25%, 50%, 75%, and 100% alpha states, a controlled screenshot protocol, and a live Android control panel.
- Android changes: `Chapter01Screen.kt`, `TranslucentRoundedPanel.kt`, and new `OpacityExperimentControls.kt`.

Version 1.8 generates the Chapter 1 diagnosis and checkpoint lesson in advance:

- Lesson 1.8 distinguishes an observation, a claim, evidence, and a diagnosis.
- The learner must support every present-or-absent material claim with a specific visual clue or source trace.
- No Android source changes. The Lesson 1.7 app is the Chapter 1 final Android state.
- Lesson 1.8 is generated but is not marked complete before the learner finishes it.

Version 2.1 starts Chapter 2 and generates the pixel lesson in advance:

- Lesson 2.1 treats a raster image as a rectangular grid of addressable positions and stored samples.
- The Android preview uses enlarged teaching cells. It explicitly does not claim that one large square equals one physical Pixel 8 Pro display pixel.
- `MainActivity.kt` switches from `Chapter01Screen` to `Chapter02Screen`.
- New Android files: `chapter02/Chapter02Screen.kt` and `chapter02/EnlargedPixelGrid.kt`.
- Lesson 2.1 remains pending until Lessons 1.7 and 1.8 are completed first.

Version 2.2 generates the X-axis lesson in advance:

- Lesson 2.2 keeps the selected row fixed and changes only the selected grid column.
- It separates the grid-column coordinate from the SVG-local teaching position and from physical screen pixels.
- Android changes: `Chapter02Screen.kt`, `EnlargedPixelGrid.kt`, and new `XAxisExplorer.kt`.
- Valid X values for the 8-column teaching grid are 0 through 7.

Version 2.3 records completion through Lesson 2.2 and adds the Y-axis lesson:

- The learner explicitly reported Lessons 1.7, 1.8, 2.1, and 2.2 complete.
- Lesson 2.3 keeps the selected column fixed at X = 4 and changes only the selected row.
- In the Android-style coordinate system used by the lesson, Y = 0 is the top row and larger Y values move downward.
- The lesson traces Y = 5 through the real 34.dp Android cell size: row top 170.dp and row center 187.dp.
- It keeps browser SVG-local pixels, Android dp, grid coordinates, and physical display pixels separate.
- Android changes: `Chapter02Screen.kt`, `EnlargedPixelGrid.kt`, and new `YAxisExplorer.kt`.


Version 2.4 records completion of Lesson 2.3 and adds bounds and center:

- The learner explicitly reported Lesson 2.3 complete.
- Learner-confirmed course completion is now **11 of 216 lessons**.
- Lesson 2.4 introduces bounds, four edges, width, height, and center.
- The rectangle-local model keeps left = 0 and top = 0, then varies width from 2 through 8 and height from 2 through 6.
- The lesson calculates `centerX = width / 2` and `centerY = height / 2`, including half-unit results for odd dimensions.
- It distinguishes a right edge at X = 8 from the last cell index 7.
- Android changes: `Chapter02Screen.kt` and new `BoundsCenterExplorer.kt`.
- `AGENTS.md` now requires every response to report `Course progress: X of 216 lessons completed` using learner-confirmed completion only.

Version 2.5 records completion of Lesson 2.4 and adds dp, px, and density:

- The learner explicitly reported Lesson 2.4 complete.
- Learner-confirmed course completion is now **12 of 216 lessons**.
- Lesson 2.5 defines dp as an Android layout unit, px as the unit used by Compose Canvas drawing coordinates, and density as the runtime px-per-dp conversion scale.
- The central formulas are `px = dp × density` and `dp = px ÷ density`.
- The browser laboratory uses adjustable teaching densities. The Android implementation reads `LocalDensity.current` on the Pixel 8 Pro instead of assuming a device value.
- The lesson distinguishes `Dp.toPx()` returning a `Float` distance from `Dp.roundToPx()` returning an integer pixel count.
- It traces a `96.dp` request through runtime conversion, `Modifier.size`, `onSizeChanged`, and Canvas-local `size.width`.
- It converts a `16.dp` Canvas inset with `16.dp.toPx()` and compares a one-pixel stroke with a one-dp stroke.
- Android changes: `Chapter02Screen.kt` and new `DensityExplorer.kt`.


Version 2.6 records completion of Lesson 2.5 and adds local coordinates:

- The learner explicitly reported Lesson 2.5 complete.
- Learner-confirmed course completion is now **13 of 216 lessons**.
- Lesson 2.6 defines a local coordinate system as the coordinate system owned by one specific element.
- The child element's top-left corner is child-local `(0, 0)` in this lesson.
- The central conversions are `pointInParent = childOriginInParent + pointInChild` and `pointInChild = pointInParent - childOriginInParent`.
- The browser laboratory uses SVG-local teaching units. It moves the child while preserving the same child-local point. The point's parent-local position changes because the child origin changes.
- The Android implementation uses `absoluteOffset` for the controlled placement, attaches `pointerInput` to the child `Box`, stores the tap callback's `Offset` directly, and consumes it in a `Canvas` that fills the same child bounds.
- Parent, window, and physical-screen coordinates are explicitly deferred to Lesson 2.7.
- Android changes: `Chapter02Screen.kt` and new `LocalCoordinatesExplorer.kt`.

Version 2.7 records completion of Lesson 2.6 and adds parent, window, and screen coordinates:

- The learner explicitly requested the next lesson after completing Lesson 2.6.
- Learner-confirmed course completion is now **14 of 216 lessons**.
- Lesson 2.7 follows one concrete object: the measured control's top-left corner.
- `positionInParent()` measures that corner from the parent content origin.
- `positionInWindow()` measures that corner from the application-window origin.
- `positionOnScreen()` measures that corner from the device-screen origin when the conversion is available.
- The lesson derives `controlInWindow = parentInWindow + controlInParent` and `controlOnScreen = windowOriginOnScreen + controlInWindow` in a controlled layout without rotation or scaling.
- The Android implementation obtains final `LayoutCoordinates` with `onGloballyPositioned` and compares calculated positions with measured positions.
- `Offset.Unspecified` is treated as unavailable data. It is not silently replaced by `(0, 0)`.
- Android changes: `Chapter02Screen.kt` and new `ParentScreenCoordinatesExplorer.kt`.

Version 2.8 records completion of Lesson 2.7 and adds normalized coordinates:

- The learner asked to continue after Lesson 2.7, so Lesson 2.7 is marked complete.
- Learner-confirmed course completion is now **15 of 216 lessons**.
- Lesson 2.8 keeps one local origin and converts between local pixel coordinates and normalized values from 0 through 1.
- The central formulas are `normalizedX = localX / width`, `normalizedY = localY / height`, `localX = normalizedX * width`, and `localY = normalizedY * height`.
- The lesson distinguishes normalization from clamping. Division changes the numeric scale. `coerceIn(0f, 1f)` only enforces the inside-rectangle range.
- A boundary diagnostic reinforces that normalized X = 1 maps to the right edge at local X = width, not to the last pixel index.
- Android changes: `Chapter02Screen.kt` and new `NormalizedCoordinatesExplorer.kt`.

Version 2.9 records completion of Lesson 2.8 and adds the Chapter 2 coordinate inspector:

- The learner asked to continue after Lesson 2.8, so Lesson 2.8 is marked complete.
- Learner-confirmed course completion is now **16 of 216 lessons**.
- Lesson 2.9 combines the earlier Chapter 2 concepts in one diagnostic surface instead of introducing another independent coordinate system.
- A pointer is defined as a physical input object that can point at a coordinate. A pointer event is defined as one low-level data record produced when a pointer goes down, moves, or goes up.
- The inspector draws its local grid, origin, rectangular bounds, center guides, pointer crosshair, and point marker.
- The inspector reports the same point as local px, local dp, normalized coordinates, parent-relative px, window-relative px, and screen-relative px.
- The Android implementation copies immutable values from `LayoutCoordinates` during `onGloballyPositioned`. It does not keep a long-lived `LayoutCoordinates` reference in state.
- The pointer handler uses `awaitEachGesture` and `awaitFirstDown`, clamps positions to the inspector bounds, stores normalized state, and consumes active changes so dragging the teaching surface does not become parent scrolling.
- Simple origin addition is explicitly limited to this lesson's unrotated and unscaled inspector. Later transformed elements require a coordinate-conversion API.
- The coding challenge rejects adding a unitless normalized pair directly to a pixel origin.
- Android changes: `Chapter02Screen.kt` and new `CoordinateInspector.kt`.

Version 3.1 records completion of Chapter 2 and starts the color chapter:

- The learner asked for the next lesson after Lesson 2.9, so Lesson 2.9 and Chapter 2 are marked complete.
- Learner-confirmed course completion is now **17 of 216 lessons**.
- Lesson 3.1 defines a color channel as one named numeric component inside a color.
- The lesson keeps alpha fixed at `1.00` and changes red, green, and blue independently.
- The default example is `RGB(0.80, 0.25, 0.60)`, approximately `RGB(204, 64, 153)` or `#CC4099` on an 8-bit scale.
- The browser laboratory exposes isolated red, green, and blue contributions and the final combined swatch.
- The lesson explicitly states that normalized channel values describe a numeric scale. They do not by themselves measure physical light output or perceived brightness.
- The coding challenge repairs a green-blue channel swap by mapping each input to the matching named `Color` argument.
- `MainActivity.kt` switches to `Chapter03Screen`.
- New Android files: `chapter03/Chapter03Screen.kt` and `chapter03/RgbChannelsExplorer.kt`.

Version 3.1.1 revises Lesson 3.1 and establishes the forward theme rule:

- Lesson 3.1 now follows the operating-system light or dark preference in both its standalone HTML and Android UI.
- The HTML uses `prefers-color-scheme`. It has no manual theme switch.
- `MainActivity` passes `isSystemInDarkTheme()` to `LiquidGlassLabTheme`.
- Ordinary Android interface chrome uses `MaterialTheme.colorScheme` instead of hardcoded light colors.
- Exact RGB teaching swatches remain unchanged across themes. They are numeric color data, not theme chrome.
- Starting with Lesson 3.1, every new lesson must support both OS theme modes automatically.
- Lessons 1.1 through 2.9 remain unchanged. They are not retrofitted only for dark mode.
- Changed Lesson 3.1-or-later HTML files must be verified in both light and dark OS preferences.

Version 3.2 records completion of Lesson 3.1 and isolates alpha:

- The learner reported readiness after completing and testing the OS-theme revision of Lesson 3.1. Lesson 3.1 is therefore marked complete.
- Learner-confirmed course completion is now **18 of 216 lessons**.
- Lesson 3.2 keeps the source RGB fixed at `RGB(0.80, 0.25, 0.60)` and changes only alpha from `0.00` through `1.00`.
- Alpha is defined as the source-opacity channel for this lesson. The transparent background opening is shown as `1 - alpha`.
- The lesson explicitly rejects the claim that lower alpha always makes a result brighter or darker. Lower alpha reveals more of the named background.
- The same RGBA source is compared over a fixed checkerboard, dark navy `#0F172A`, and pale yellow `#FDE68A`.
- The lesson explains that straight RGBA can retain non-zero RGB values when alpha is zero. Premultiplied storage remains deferred to Lesson 3.5.
- The full source-over output arithmetic remains deferred to Lesson 3.3 so Lesson 3.2 can isolate the meaning and data path of alpha.
- Android changes: `Chapter03Screen.kt` now opens Lesson 3.2, and new `chapter03/AlphaExplorer.kt` implements the controlled experiment.
- `MainActivity.kt` and `RgbChannelsExplorer.kt` remain unchanged and are not included in the Lesson 3.2 Android incremental archive.
- All changed shared HTML navigation pages and Lesson 3.2 follow the OS theme. Exact instructional colors remain unchanged across themes.

Version 3.3 records completion of Lesson 3.2 and formalizes source-over compositing:

- The learner explicitly asked to proceed after Lesson 3.2, so Lesson 3.2 is marked complete.
- Learner-confirmed course completion is now **19 of 216 lessons**.
- Lesson 3.3 names the source as the RGBA value drawn now, the destination as the RGBA value already present at the same drawing-target position, and the output as the replacement RGBA value.
- The course reuses source `RGBA(0.90, 0.10, 0.80, 0.50)` and destination `RGBA(0.10, 0.90, 0.40, 0.60)` from the earlier clarification.
- Output alpha is calculated as `As + Ad × (1 − As)`, producing `0.80` for the course values.
- Red, green, and blue are calculated separately. The output premultiplied RGB is `(0.48, 0.32, 0.52)`. Dividing it by output alpha produces output straight RGB `(0.60, 0.40, 0.65)`.
- The Android explorer compares two draw calls using `BlendMode.SrcOver` with one flattened RGBA color calculated by the same operation.
- The implementation guards output alpha zero and returns transparent black as a deterministic teaching fallback instead of dividing by zero.
- Draw-order reversal remains deferred to Lesson 3.4. Straight and premultiplied RGBA representations remain deferred to Lesson 3.5. Image-boundary artifacts remain deferred until image sampling is taught in Chapter 9.
- Android changes: `Chapter03Screen.kt` and new `chapter03/OverOperationExplorer.kt`.
- `MainActivity.kt`, `RgbChannelsExplorer.kt`, and `AlphaExplorer.kt` remain unchanged and are not included in the Lesson 3.3 Android archive.

Version 3.4 records completion of Lesson 3.3 and isolates draw order:

- The learner explicitly asked to proceed with Lesson 3.4, so Lesson 3.3 is marked complete.
- Learner-confirmed course completion is now **20 of 216 lessons**.
- Lesson 3.4 keeps both translucent RGBA values, shape sizes, shape positions, and lower checkerboard fixed. Only the order of the two colored draw calls changes.
- Magenta over green produces `RGBA(0.60, 0.40, 0.65, 0.80)`.
- Green over magenta produces `RGBA(0.30, 0.70, 0.50, 0.80)`.
- Both orders produce output alpha `0.80`. Output alpha alone therefore does not identify draw order.
- The lesson defines a commutative operation as one whose result remains unchanged when the inputs exchange places. Source-over compositing is not commutative.
- The lesson treats draw order per image position. A position covered by only one colored shape is unchanged by reversing the two colored calls. An overlap position receives both calls and can change.
- Android changes: `Chapter03Screen.kt` now opens Lesson 3.4, and new `chapter03/DrawOrderExplorer.kt` implements the order toggle, overlap drawing, output comparison, and exact arithmetic.
- `MainActivity.kt`, `RgbChannelsExplorer.kt`, `AlphaExplorer.kt`, and `OverOperationExplorer.kt` remain unchanged and are not included in the Lesson 3.4 Android archive.

Version 3.5 records completion of Lesson 3.4. The first Lesson 3.5 attempted to explain a transparent-edge halo by introducing interpolation, endpoint pixels, and premultiplied RGBA together.

Version 3.5.1 attempted a larger rewrite, but it still began with a circle and P0/P1/Q without first teaching the image operation that would create those values. The learner correctly rejected both versions.

Version 3.5.2 corrects the prerequisite order instead of adding more explanation around the same mistake:

- Lesson 3.5 is renamed **Straight and premultiplied RGBA**.
- The lesson uses one translucent source color and one opaque background color. No image, circle, edge, interpolation, resizing, antialiasing, texture sampling, gradient, shadow, or halo is involved.
- Straight RGBA stores RGB components independently from alpha. Premultiplied RGBA stores RGB contributions that already equal straight RGB multiplied by alpha, plus the same alpha.
- The fixed source is `Straight RGBA(0.80, 0.25, 0.60, 0.50)`. Its premultiplied representation is `Premultiplied RGBA(0.40, 0.125, 0.30, 0.50)`.
- Both representations are composited over opaque `RGB(0.10, 0.20, 0.30)`. Their correct equations both produce `RGB(0.45, 0.225, 0.45)`.
- The lesson shows two separate representation mistakes: treating straight RGB as already weighted makes the source too strong; multiplying already weighted RGB by alpha again makes the source too weak.
- The multiplication-versus-division question is resolved by direction: straight to premultiplied multiplies; premultiplied to straight divides when alpha is greater than zero. Lesson 3.3 used the reverse direction.
- Alpha zero is explained without an edge example. Different straight RGB tuples at alpha zero all convert to premultiplied `(0, 0, 0, 0)`, so the original straight RGB cannot be recovered by division.
- The transparent-edge halo case study is deferred until the course has taught an image boundary and the sampling or filtering operation that creates new pixels.
- Android changes: `Chapter03Screen.kt` opens new `PremultipliedRgbaExplorer.kt`. The old `TransparentEdgeExplorer.kt` becomes a small compatibility wrapper so extracting the patch does not leave the rejected implementation in the project.
- `AGENTS.md` gains a prerequisite and causal-operation gate. A lesson must name the real operation that creates every intermediate value; if that operation has not been taught, the dependent topic must be split or deferred.
- Lesson 3.5 remains incomplete. Learner-confirmed course completion remains **21 of 216 lessons**.

Version 3.5.3 corrects the remaining representation and compositing gaps identified by the learner:

- The main model again uses the Lesson 3.3 translucent source and translucent destination. It no longer hides destination alpha behind an opaque-background example.
- The term `ordinary RGBA` is removed. The lesson uses `straight RGBA` or `unassociated RGBA`.
- Every RGB tuple is labelled `straight RGB` or `premultiplied RGB` when alpha matters. A bare RGB tuple is explicitly described as insufficient to identify the representation.
- Lesson 3.3's `weighted total` is renamed `output premultiplied RGB`. Lesson 3.3's `ordinary output` is renamed `output straight RGB`. The changed Lesson 3.3 HTML and Android source show those corrected labels.
- The general straight-input source-over formula includes destination alpha: `destination straight RGB × destination alpha × (1 − source alpha)`.
- The opaque-destination formula is derived only after setting destination alpha to `1`.
- The lesson explains the practical boundary: Compose `Color` and `Color.compositeOver` use straight values, while premultiplied buffers or math paths use premultiplied values only when their contract says so.
- `AGENTS.md`, the glossary, curriculum, and handoff record a Chapter 3 terminology gate so later lessons cannot silently reintroduce the same ambiguity.
- Android changes now include `OverOperationExplorer.kt` because its visible Lesson 3.3 labels are corrected.
- Lesson 3.5 remains incomplete. Learner-confirmed course completion remains **21 of 216 lessons**.


Version 3.6 records completion of Lesson 3.5 and introduces relative luminance:

- The learner reported Lesson 3.5 ready after the complete straight-versus-premultiplied model became clear.
- Learner-confirmed course completion is now **22 of 216 lessons**.
- Lesson 3.6 measures one uniform opaque sRGB background color. It does not claim to sample a photograph, texture, or arbitrary screen region.
- The lesson separates visual brightness, which is a human perception, from relative luminance, which is a deterministic software calculation from color data.
- A simple average of encoded red, green, and blue is rejected. Pure red, green, and blue all have encoded average `0.3333`, but their relative-luminance values are `0.2126`, `0.7152`, and `0.0722`.
- Each stored sRGB channel is decoded into a linear-light channel before the weights are applied. The course color `sRGB(0.80, 0.25, 0.60)` decodes to approximately `(0.6038, 0.0509, 0.3185)`.
- The weighted contributions are approximately `(0.1284, 0.0364, 0.0230)`. Their sum is relative luminance `0.1878`.
- The lesson explicitly separates the luminance measurement from a chosen light/dark threshold. The threshold is application policy, not part of the luminance definition.
- `Color.luminance()` does not use alpha. For a translucent source, the visible source-over output must be calculated first, and luminance must then be measured from that output color.
- Android changes: `Chapter03Screen.kt` and new `BrightnessLuminanceExplorer.kt`.
- The Lesson 3.6 Android patch also removes every remaining invalid explicit `androidx.compose.foundation.layout.weight` or `androidx.compose.foundation.layout.matchParentSize` import from sixteen existing Android source files across Chapters 1 through 3. The learning-docs patch corrects the matching embedded Kotlin in the sixteen earlier lesson HTML files.
- `AGENTS.md` now forbids explicit imports of the `RowScope`/`ColumnScope` `weight` member extension and the `BoxScope` `matchParentSize` member extension.
- `Chapter03Screen.kt` now contains both the full chapter-screen preview and a direct child-composable preview. Light and dark variants are provided for both.

Version 3.6.1 rejects and replaces the first Lesson 3.6 draft:

- The rejected draft used an **expert-backfill** pattern. It started from the final standard formula and added labels afterward. This produced correct arithmetic without a beginner causal model.
- `AGENTS.md` now contains a mandatory beginner-first comprehension and formula-reveal gate.
- The first sentence of a lesson must start from an object already taught or define every new essential term immediately.
- A formula cannot appear until the exact input object, input meaning, output meaning, purpose, and next consumer are clear.
- Three-channel calculations must first trace one channel through every arithmetic step.
- The replacement Lesson 3.6 starts from the familiar opaque Compose `Color`, defines sRGB channel code value and linear-light value before showing the formula, explains every fixed sRGB constant, then introduces the relative-luminance coefficients.
- The replacement explicitly distinguishes a normalized software measurement from the Pixel brightness setting and physical display luminance.
- The main example remains opaque. A separate section reconnects alpha to Lesson 3.3 and shows why a translucent source must be composited over its actual destination first.
- Android behavior remains in `Chapter03Screen.kt` and `BrightnessLuminanceExplorer.kt`, but the child now follows the same prerequisite-first order as the HTML.

Version 3.6.2 clarifies the alpha-to-luminance boundary and records the mandatory feedback review:

- Relative luminance always consumes three color channels. Alpha is not a fourth luminance term.
- When source alpha is below `1`, alpha first changes the source-over output RGB. If the output alpha remains below `1`, compositing continues through lower layers until an opaque displayed color is known.
- The lesson now names every representation at the boundary: source straight sRGB RGBA, destination straight sRGB RGBA, output premultiplied RGB, output straight sRGB RGB, decoded linear-light RGB, and relative luminance.
- The Android and browser examples now show output alpha `1.0000` for the two opaque destinations and state that `Color.luminance()` receives the output RGB rather than source alpha.
- Pure-primary tuples containing zeros are labelled isolation tests. A new fixed `Mixed check` preset, sRGB `(0.37, 0.58, 0.21)`, gives a second reproducible all-non-zero calculation.
- `AGENTS.md` now requires a lesson-feedback review after every learner message. Questions and regeneration requests are inspected for reusable prevention rules. Clean lesson completions are inspected for reusable successful teaching patterns.
- The final total-beginner audit is marked **VERY IMPORTANT**. Any uncertainty about understandability must be treated as a failed audit and repaired before packaging.
- `BrightnessLuminanceExplorer.kt` changes only to expose these clarifications and the mixed-value preset. `Chapter03Screen.kt` remains unchanged.

Version 3.7 records completion of Lesson 3.6 and introduces foreground contrast:

- The learner proceeded without a remaining question after the clarified Lesson 3.6.
- Learner-confirmed course completion became **23 of 216 lessons**.
- Lesson 3.7 starts from one final opaque background color and compares opaque black and white foreground candidates.
- The lesson defines the contrast inputs and output before revealing the standardized ratio formula.
- Candidate selection and accessibility target checking remain separate.
- Android changes: `Chapter03Screen.kt` and new `ForegroundContrastExplorer.kt`.


Version 4.1 records completion of Lesson 3.11, closes Chapter 3, and starts the geometry chapter:

- The learner requested the next lesson without reporting a remaining Lesson 3.11 question, correction, or test problem. Lesson 3.11 is therefore marked complete.
- Learner-confirmed course completion is now **28 of 216 lessons**.
- Chapters 1, 2, and 3 are complete.
- Lesson 4.1 introduces two explicit shape contracts. A rectangle has four boundary coordinates; the lesson supplies left, top, width, and height and derives right and bottom. A circle is supplied as a center point and a radius.
- The lesson derives rectangle right and bottom from left, top, width, and height. It derives circle diameter and four extreme positions from center and radius.
- The circle's enclosing square is shown separately as construction geometry. The square contains the circle but is not the circle.
- The browser radius handle is constrained to horizontal movement so the lesson does not silently require the untaught point-to-point distance formula.
- Android changes: `MainActivity.kt`, new `chapter04/Chapter04Screen.kt`, and new `chapter04/RectanglesCirclesExplorer.kt`.
- `Chapter04Screen.kt` includes complete-screen and direct-child previews in light and dark modes.
- No new `AGENTS.md` rule was added. The clean Lesson 3.11 progression did not expose a new reusable gap.

Version 4.2 records completion of Lesson 4.1 and introduces rounded rectangles:

- The learner explicitly requested that the prior pending work be marked complete and asked to continue. Lesson 4.1 is therefore learner-confirmed complete.
- Learner-confirmed course completion is now **29 of 216 lessons**.
- Chapter 4 remains in progress. Completing Lesson 4.1 does not complete the chapter.
- Lesson 4.2 keeps one rectangle's left, top, right, bottom, width, and height fixed. It adds one uniform corner-radius input.
- Each corner uses one quarter-circle arc. The top-left curve center is one radius right of the left edge and one radius below the top edge.
- The lesson defines a join point as the exact position where a straight edge ends and a corner arc begins.
- The browser reset bounds are left `120`, top `80`, width `520`, and height `260`. At radius `50`, the top-left curve center is `(170, 130)`, the top join is `(170, 80)`, and the left join is `(120, 130)`.
- The remaining top straight span is `520 - 2 × 50 = 420`. The remaining side straight span is `260 - 2 × 50 = 160`.
- The controlled maximum radius is half the shorter side. At browser radius `130`, the vertical straight spans become zero. Lesson 4.3 names and formalizes that special boundary shape.
- Android changes: `Chapter04Screen.kt` and new `chapter04/RoundedRectanglesExplorer.kt`. `MainActivity.kt` remains unchanged because it already opens Chapter 4.
- `Chapter04Screen.kt` includes complete-screen and direct-child previews in light and dark modes.
- No new `AGENTS.md` rule was added. The explicit completion statement resolves the checkpoint but does not expose a new reusable explanation or verification gap.

Version 4.2.1 corrects the Lesson 4.2 interactive geometry footprint and label collisions:

- The learner reported overlapping text and an oversized interactive explanation.
- At `1920×1080`, the original responsive breakpoint stacked the SVG above its controls and expanded the SVG to approximately `1750 × 839` CSS pixels.
- The fixed-height label, side-straight label, and left-join coordinate label competed for the same left margin.
- The corrected interaction keeps the geometry and controls side by side at 1920 pixels, caps the SVG at `820 × 430`, and retains that cap on a `5120×1440` ultrawide viewport.
- The geometry now uses short `C`, `T`, and `L` point markers. Complete live coordinates and straight-span values appear in synchronized readout cards outside the SVG.
- The remaining top and side straight boundary is highlighted directly in pink. Fixed width and height use independent top and left label lanes.
- Minimum, near-minimum, reset, large, and maximum radii were checked in both required themes. No SVG text overlap, clipping, horizontal overflow, or JavaScript error remained.
- `AGENTS.md` adds an interactive-geometry footprint and label-separation gate so free-play diagrams receive the same viewport and longest-state discipline as manual steppers.
- Lesson 4.2 remains incomplete. Learner-confirmed course progress remains **29 of 216 lessons**.

Version 4.3 records completion of Lesson 4.2 and introduces capsules:

- The learner explicitly confirmed the corrected Lesson 4.2 complete and requested the next lesson. Learner-confirmed course completion is now **30 of 216 lessons**.
- Chapter 4 remains in progress. Lesson 4.3 is the new unresolved checkpoint and generated frontier.
- Lesson 4.3 starts from Lesson 4.2's maximum controlled radius. It defines a horizontal capsule as a rounded-rectangle boundary whose two short ends are semicircles.
- The controlled browser height is `260`, so radius is derived as `260 / 2 = 130`. Radius is not exposed as an independent control.
- The vertical straight side is `height - 2 × radius = 0`. The top and bottom straight span is `width - 2 × radius`, which simplifies to `width - height`.
- The browser varies width from `260` through `600`. At width `260`, width equals height, the two end centers meet, and the boundary reaches the circle limit.
- The corrected compact-geometry style is reused: the SVG is capped at `820 × 430`, short labels remain inside the shape, and complete coordinates and calculations appear in synchronized external readouts.
- Android changes: `Chapter04Screen.kt` and new `chapter04/CapsulesExplorer.kt`. The Android model keeps height at `120.dp`, derives radius as `60.dp`, and varies width from `120.dp` through `280.dp`.
- `Chapter04Screen.kt` includes complete-screen and direct-child previews in light and dark modes.
- The clean completion of the corrected Lesson 4.2 reinforces the existing interactive-geometry footprint and label-separation gate. No new `AGENTS.md` rule is added.

Version 3.11 records completion of Lessons 3.9 and 3.10 and generates the Chapter 3 compositing laboratory:

- The learner explicitly confirmed Lessons 3.9 and 3.10 complete.
- Learner-confirmed course completion is now **27 of 216 lessons**.
- Lesson 3.11 introduces one integration idea: the running composite is the current straight RGBA result after every completed stage, and the next draw consumes that result as its destination.
- The default stack uses one opaque base, two adjustable translucent source-over layers, one optional AndroidX saturation transform, and one optional opaque top layer using Normal, Multiply, Screen, or Plus.
- The default final output is approximately straight sRGB RGBA `(0.389126, 0.159208, 0.109664, 1.000000)`.
- The laboratory exposes stage bypass, middle-layer order, two source alpha controls, saturation factor, top blend mode, three base presets, final luminance, final contrast, and one red-channel manual stepper.
- The coding challenge repairs a loop that incorrectly composites every source over the original base instead of the current running composite.
- Android changes: `Chapter03Screen.kt` and new `CompositingLaboratory.kt`, with complete-screen and direct-child previews in light and dark modes.
- The clean completion of Lessons 3.9 and 3.10 reinforces the existing value-provenance and formula-validity gates. No duplicate `AGENTS.md` rule is added.

Version 3.10.1 clarifies the blend-mode formula boundary and repairs the manual stepper:

- Replaces the vague phrase `exact for that controlled case` with the complete validity contract: full source coverage, source alpha `1.00`, destination alpha `1.00`, and destination-first/source-second draw order.
- Substitutes the opaque alpha values into Android's general Multiply equation and shows exactly which terms become zero.
- States that alpha below `1` or partial shape-edge coverage restores the omitted terms.
- Keeps the manual-stepper diagram and explanation side by side at `1920×1080`, caps diagram growth on ultrawide displays, and splits the Screen red-channel calculation into multiple SVG lines.
- Adds permanent formula-validity and stepper viewport-fit QA rules to `AGENTS.md`.

Version 3.10 generates the blend-mode lesson without closing the pending saturation lesson:

- The learner explicitly asked to continue while reserving questions about Lesson 3.9. Lesson 3.9 therefore remains incomplete and the learner-confirmed total remains **25 of 216 lessons**.
- The generated frontier advances to Lesson 3.10. The course now records the unresolved checkpoint and generated frontier as separate states.
- Lesson 3.10 keeps one opaque straight-sRGB source, one opaque straight-sRGB destination, the shape, and the draw order fixed. Only the RGB blend rule changes.
- The lesson compares Normal/SrcOver, Multiply, Screen, and Plus. It traces one channel completely before repeating red, green, and blue.
- Screen is introduced through the distance remaining before white: `1 − (1 − source) × (1 − destination)`. The equivalent short form is then shown.
- Plus displays the pre-clamp sum and the final clamped normalized output. It explicitly separates saturating addition from the Lesson 3.9 saturation transform.
- The short formulas are labelled as opaque-input formulas. Translucent blend-mode compositing is deferred rather than inferred from the opaque shortcuts.
- Android changes: `Chapter03Screen.kt` and new `BlendModesExplorer.kt`, with complete-screen and direct-child previews in both OS themes.
- `AGENTS.md` adds a pending-question completion gate: progression language does not count as completion when the learner explicitly says questions remain.

Version 3.9 records completion of Lesson 3.8 and introduces the exact AndroidX saturation transform:

- The learner requested the next lesson without a remaining question, so Lesson 3.8 is marked complete.
- Learner-confirmed course completion is now **25 of 216 lessons**.
- Lesson 3.9 starts from Lesson 3.8's final opaque straight sRGB RGBA `(0.65, 0.35, 0.70, 1.00)`.
- The lesson defines saturation as the factor accepted by AndroidX `ColorMatrix.setToSaturation`. It does not silently substitute HSL, HSV, or another design-tool saturation model.
- The AndroidX transform calculates a gray reference directly from stored sRGB channel values with fixed multipliers `0.213`, `0.715`, and `0.072`.
- Every output channel is explained as `gray reference + factor × (input channel − gray reference)`. The lesson exposes signed distance, scaled distance, pre-clamp matrix result, and final clamped output.
- The saturation gray reference is explicitly separated from Lesson 3.6 relative luminance. The first is an intermediate value in a color transform. The second is a measurement calculated after sRGB decoding.
- Android changes: `Chapter03Screen.kt` and new `SaturationExplorer.kt`, with complete-screen and direct-child previews in both OS themes.
- `AGENTS.md` adds a color-transform-versus-color-measurement gate so similar-looking coefficients cannot hide different input representations, output types, or consumers.

Version 3.8.1 clarifies two Lesson 3.8 claims and records their prevention rules:

- `moves toward` is now demonstrated with `output = base + amount × (tint − base)`, a signed channel gap, a selected change, and live before/output/target markers for red, green, and blue;
- luminance is identified as a derived value belonging to one exact RGB input; the lesson shows why the base luminance becomes stale for a changed tinted output and compares stale versus recomputed contrast values;
- `AGENTS.md` now requires numerical or geometric proof for qualitative directional claims and explicit old-input/old-result versus new-input/new-result traces for derived values.

Version 3.8 records completion of Lesson 3.7 and introduces one explicit tint model:

- The learner requested the next lesson without a remaining question, so Lesson 3.7 is marked complete.
- Learner-confirmed course completion is now **24 of 216 lessons**.
- Lesson 3.8 starts from the same final opaque straight sRGB background used by Lessons 3.6 and 3.7.
- The lesson defines tint as one chosen straight sRGB source drawn over the opaque destination with source-over. It does not claim that every API using the word `tint` has this contract.
- The default tint source is straight sRGB RGBA `(0.20, 0.65, 1.00, 0.25)`. The output is straight sRGB RGBA `(0.65, 0.35, 0.70, 1.00)`.
- One red channel is traced through output premultiplied red, output alpha, and output straight red before green and blue are repeated.
- Tint amount is explicitly separated from final output opacity. The opaque destination makes output alpha remain `1.00`.
- Luminance and foreground contrast are recalculated from the tinted output color.
- Android changes: `Chapter03Screen.kt` and new `TintExplorer.kt`, with full-screen and direct-child previews in both OS themes.

The numbered curriculum map below contains **216 lessons**. An earlier conversational summary said 226. The actual chapter lists add up to 216, so 216 is the corrected count.

---

## 2. Course goal

The goal is not to make one blurred card and call it glass. The goal is to understand, build, test, and combine the separate operations that make a modern Liquid Glass effect convincing.

By the end of the course, you should be able to explain and implement:

1. Translucency, tint, blur, diffusion, refraction, magnification, edge lighting, shadow, and compositing.
2. Coordinate systems, masks, distance fields, image sampling, surface direction, and basic animation math.
3. Android backdrop capture, `GraphicsLayer`, `RenderEffect`, `RuntimeShader`, and AGSL.
4. Flexible shapes that press, stretch, merge, separate, tilt, and morph.
5. Small controls, toolbar groups, tab bars, search fields, sliders, switches, menus, sheets, popovers, banners, and system-like glass surfaces.
6. A Safari-style three-dot control that expands into a rounded menu while preserving convincing middle frames.
7. Production concerns such as interruption, accessibility, frame time, GPU memory, fallbacks, testing, and measurement.

The course does not claim to know Apple’s private rendering implementation. It studies public visual behavior and builds a pressure-tested Android interpretation. Every important unknown must be named. The lesson must also say what evidence would be needed to reduce that uncertainty.

---

## 3. Learner level and explanation rules

The learner is a senior web engineer and an absolute beginner in mathematics and computer graphics.

This means:

- Do not explain ordinary programming as though the learner has never written code.
- Do explain every graphics, rendering, GPU, shader, geometry, animation-physics, and mathematical term at first use.
- Use short declarative sentences.
- Introduce one main graphics idea and at most one main mathematical idea in a lesson.
- Show one real value moving through input, operation, and output.
- For an unfamiliar visual defect, show and annotate the visible defect before introducing its terminology or mathematics.
- Distinguish stored input pixels, calculated samples, final output pixels, the geometric boundary, and the multi-pixel transition band.
- When a new conversion appears to contradict an earlier lesson, show both conversion directions and reconcile the earlier operation explicitly.
- Use toy arithmetic only as a clearly labelled bridge. Then map the toy numbers back to the Android code.
- Keep coordinate spaces separate. Name whether a value is in drawable-local, composable-local, parent, screen, pixel, or density-independent coordinates.
- Separate visible observations from implementation hypotheses.
- Simplify the explanation. Do not simplify the engineering solution.

---

## 4. Technical path

### 4.1 Android path

- Kotlin
- Jetpack Compose
- Material 3 for ordinary text and controls
- Android `RenderEffect`
- Android `RuntimeShader`
- Android Graphics Shading Language, abbreviated AGSL
- Compose graphics layers
- A physical Pixel 8 Pro
- `minSdk = 33` during the main learning path
- Latest stable compile SDK and target SDK installed in Android Studio
- No third-party glass-effect library during the main course

Toolchain snapshot for Lesson 1.3, checked on 2026-07-19:

- Android Studio Quail 2 | 2026.1.2 is the stable Android Studio release used as the documentation reference.
- `compileSdk = 37` and `targetSdk = 37` are the course values for the current Android 17 platform.
- `minSdk = 33` remains the learning floor.
- The generated Android Studio template owns the Android Gradle Plugin, Gradle, Compose, and dependency versions.
- Android Gradle Plugin 9 and newer include built-in Kotlin support. Do not add an older `org.jetbrains.kotlin.android` plugin line to a current template unless the generated project explicitly requires it.
- These compile and target values are a dated snapshot. A later lesson delivery may move both to a newer stable API while keeping the learning floor at 33.

`RuntimeShader` is available from API 33. Basic `RenderEffect` blur starts at API 31. The course uses API 33 so the early lessons do not need fallback branches while the graphics concepts are still new. Older-device behavior is handled in the production chapter.

### 4.2 Browser teaching path

The browser page is a teaching model. It is not automatically the Android implementation.

Use the browser technology that best exposes the current idea:

- Inline SVG for coordinates, geometry, masks, curves, normals, vectors, and draggable points.
- Canvas 2D for pixels, sampling, image buffers, neighborhood operations, and simple blur experiments.
- WebGL2 for live per-pixel distortion or shader-like demonstrations when Canvas 2D would be too slow.
- CSS transforms for simple layer motion, perspective, and controlled 3D comparisons.
- A stepper for any sequence that must be understood one state at a time.
- A static SVG or PNG only when interaction would not improve understanding.
- Mermaid only for a small system or control-flow overview. It is not the primary tool for math-heavy lessons.

A browser lesson must clearly label any mismatch. For example, CSS `backdrop-filter` can demonstrate visible blur, but it does not prove how Compose `GraphicsLayer`, Android `RenderEffect`, or AGSL receives its pixels. The Android code and Pixel 8 Pro result are the source of truth for Android behavior.

### 4.3 Important Android rendering fact

Applying blur or a runtime effect to a Compose layer normally affects content owned by that layer. A foreground panel does not automatically receive arbitrary sibling pixels that happen to appear behind the panel.

Real backdrop glass therefore needs an explicit scene design:

1. Draw or record the background into a known graphics layer.
2. Determine the glass bounds in the background layer’s coordinate system.
3. Provide the correct background pixels to the effect.
4. Prevent the glass from sampling itself.
5. Keep the captured content current while the scene moves.

Chapter 6 teaches this architecture before the course attempts realistic Android refraction.

---

## 5. Course file structure

The learning documents and Android implementation live in separate repositories or project roots.

### 5.1 Learning-document repository

```text
liquid-glass-learning-docs/
├── AGENTS.md
├── README.md
├── liquid-glass-course.html
├── curriculum/
│   ├── liquid_glass_android_curriculum.md
│   └── liquid_glass_android_handoff.md
├── course/
│   ├── glossary.html
│   └── chapters/
│       ├── chapter-01/
│       │   ├── lesson-a-transparent-panel-is-not-yet-liquid-glass.html
│       │   ├── lesson-01-01-visible-ingredients.html
│       │   ├── lesson-01-02-observe-the-transition.html
│       │   ├── lesson-01-03-create-the-android-project.html
│       │   ├── lesson-01-04-build-a-study-background.html
│       │   ├── lesson-01-05-translucent-rounded-panel.html
│       │   ├── lesson-01-06-alpha-mixture.html
│       │   ├── lesson-01-07-pixel-8-pro-experiment.html
│       │   └── lesson-01-08-diagnosis-and-checkpoint.html
│       ├── chapter-02/
│       │   ├── lesson-the-screen-is-a-grid.html
│       │   └── lesson-02-*.html
│       ├── chapter-03/
│       │   ├── lesson-color-opacity-and-compositing.html
│       │   └── lesson-03-*.html
│       └── ...
├── learner-work/
│   ├── observations/
│   ├── screenshots/
│   └── exports/
└── tools/
    └── optional verification scripts
```

`liquid-glass-course.html` is the course home. It links to every available chapter hub.

A chapter hub uses `lesson-[chapter-name].html`. This follows the requested descriptive naming and avoids many unrelated files named `index.html`.

A sub-lesson uses `lesson-[chapter-number]-[lesson-number]-[lesson-name].html`. The number preserves the sequence. The name keeps the file recognizable outside its folder.

### 5.2 Separate Android project

The runnable Android project is not inside the learning-document repository:

```text
LiquidGlassLab/
└── app/src/main/java/<package>/
    ├── chapter01/
    ├── chapter02/
    ├── components/
    ├── glass/
    ├── shaders/
    └── debug/
```

A lesson that changes Android code must include:

- the exact Android file path;
- the relevant code excerpt;
- a plain explanation of each new line;
- the input, operation, and output;
- the expected visible result;
- a complete-file version or patch supplied beside the lesson delivery;
- a suggested Git commit or tag.

The HTML lesson must not assume a fixed filesystem relationship between the document repository and the Android project. It states paths as text unless the learner later chooses and records a stable relative layout.

### 5.3 Incremental lesson archives

After the initial repository package, every lesson delivery uses incremental archives:

- The learning-docs ZIP contains only learning-document files created or modified for that lesson. Paths start beneath `liquid-glass-learning-docs/`.
- The Android ZIP contains only Android project files created or modified for that lesson. Paths start beneath `LiquidGlassLab/`.
- Unchanged files, cumulative course copies, duplicate standalone downloads, verification screenshots, and complete Android projects are excluded unless the learner explicitly requests them.
- A lesson that changes no Android source does not receive an empty Android ZIP.

---

## 6. Rules for every interactive lesson file

### 6.1 Standalone behavior

Every lesson HTML file must:

- work directly from `file://`;
- use inline CSS and JavaScript;
- use inline SVG or Canvas when needed;
- use no content delivery network and no external JavaScript library;
- render a meaningful initial state before the learner touches anything;
- target desktop only;
- for Lessons 1.1 through 2.9, preserve the existing light-only files unless a separate defect requires a revision;
- starting with Lesson 3.1, follow the operating-system light or dark preference automatically with `prefers-color-scheme`;
- adapt interface chrome, ordinary text, controls, borders, and diagram scaffolding;
- keep instructional color data numerically exact instead of recoloring it for the theme;
- work at `1920×1080` or larger;
- use the full width of a `5120×1440` ultrawide display when the diagram benefits from it;
- keep normal prose at a readable width rather than stretching paragraphs across the whole monitor.

A lesson can link to Android source files and screenshots. The lesson’s explanation and interactive diagram must still work when those companion files are absent.

### 6.2 Required lesson sections

Every lesson contains these sections in this order:

1. **Where this lesson fits.** Name the previous idea and the one new idea.
2. **What you will see.** Describe the visible result before using technical terms.
3. **Terms.** Define every new word in plain English.
4. **Interactive explanation.** Use the smallest suitable widget.
5. **Trace one value.** Show exact input, operation, intermediate value, and output.
6. **Android connection.** Show the exact Kotlin or AGSL file and lines that produce the result. State clearly when the lesson does not yet require an Android change.
7. **Predict.** Ask the learner to state what will happen before changing a value.
8. **Run on the Pixel 8 Pro.** Give exact actions and exact things to inspect when the lesson has an Android checkpoint.
9. **Explain the result.** State the cause, not only the API description.
10. **Coding challenge.** Include at least one small code change or code-reading task before the final exercises. It must not require untaught graphics or math.
11. **Exercises.** Include two to four questions. At least one must target a likely misconception.
12. **Hidden answers.** Put answers inside HTML `<details>` elements.
13. **Completion record.** Provide a copyable Markdown block for the handoff.
14. **Navigation.** Link to the chapter hub and adjacent lessons.

### 6.3 Preferred interaction patterns

Use only the interactions that teach the current idea:

- Draggable handles for points, vectors, curve controls, light positions, and sample coordinates.
- Sliders with live values and units.
- Preset buttons for meaningful states.
- Layer toggles that reveal one buffer or operation at a time.
- A Back/Next stepper for a sequence.
- A frame-progress scrubber after the stepper has explained the sequence.
- A pixel magnifier for compositing, blur, masks, and sampling.
- Live formula readouts with the current numbers substituted.
- Before/after comparison when one operation changes an image.
- A slow-motion control for motion, but no fast auto-playing animation as the primary explanation.
- A “Copy lesson record” button that produces Markdown for the next conversation.

Course-wide progress must not depend on browser storage. Browser behavior for separate `file://` pages is not reliable enough for a shared progress database. The handoff Markdown file is the authoritative progress record. A lesson may use `localStorage` only as a convenience for that lesson.

### 6.4 Coding challenge rules

Every lesson includes at least one coding challenge before the final exercises.

A coding challenge must:

- be smaller than the lesson checkpoint;
- exercise the one new idea from the lesson;
- show the starting code and the requested change;
- provide a **Check** action when reliable automatic checking is practical;
- provide a hidden reference answer;
- explain why the answer works;
- avoid requiring a large project setup before the lesson that creates the Android project;
- label browser-only code as a teaching model;
- label a Kotlin fragment that is not yet a complete Android file.

A lesson can include more than one coding challenge when each challenge changes one small thing. The final exercise section remains separate and tests understanding rather than merely repeating the challenge.

### 6.5 Visual and accessibility rules

- SVG labels must be at least 14 pixels.
- Prose must be at least 15 pixels.
- Sliders and buttons need visible labels and keyboard support.
- Do not encode meaning with color alone.
- Motion-heavy pages need pause, reset, and reduced-motion controls.
- Construction geometry uses lower opacity and dashed lines.
- Interactive geometry uses visible handles with a grab cursor.
- Formula output uses a monospace font.
- A transparent image region uses a checkerboard.
- Invisible intermediate buffers must be shown separately before the final composite.

### 6.6 Verification before delivery

Each HTML lesson must be opened with a headless Chromium-based browser and captured at its intended desktop size.

Minimum checks:

1. Initial state at `1920×1080` or larger.
2. Full ultrawide view at `5120×1440` when the lesson uses a horizontal-first diagram.
3. At least one changed interactive state.
4. No clipped labels.
5. No overlapping controls.
6. No unreadable text.
7. No broken relative links.
8. No essential explanation hidden behind hover.

The Android result must also be tested on the Pixel 8 Pro at the lesson checkpoint. The browser screenshot verifies the teaching page. It does not verify Android rendering correctness.

---

## 7. Full curriculum map

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
8. **5.8 — Spring intuition.** Learn mass, stiffness, and damping with physical examples and no differential equations.
9. **5.9 — Overshoot and settle.** Distinguish deliberate elasticity from uncontrolled wobble.
10. **5.10 — Press deformation.** Connect pointer position and pressure state to scale and shape.
11. **5.11 — Reversal and interruption.** Make an animation respond correctly to a second tap before it finishes.
12. **5.12 — Slow-motion controller.** Add a debug speed slider and frame-step mode.

**Checkpoint:** Build a reversible capsule-to-panel animation whose values can be inspected at any progress.

---

### Chapter 6 — How Android draws the scene

**Purpose:** Understand why a normal blur modifier is not enough for real backdrop glass.

1. **6.1 — Composition, layout, and drawing.** Learn what each Compose phase is responsible for.
2. **6.2 — Draw order and ownership.** Identify which content belongs to which composable.
3. **6.3 — Graphics layers.** Separate drawing commands from later transformations and effects.
4. **6.4 — `RenderEffect` on owned content.** Blur a layer and observe that its own contents are blurred.
5. **6.5 — The backdrop problem.** Demonstrate why a foreground panel cannot automatically sample arbitrary siblings behind it.
6. **6.6 — Record the background.** Use a controlled `GraphicsLayer` to capture or replay background drawing.
7. **6.7 — Crop the correct region.** Map glass bounds into background coordinates.
8. **6.8 — Keep the sample current.** Update the captured scene as content scrolls or animates.
9. **6.9 — Avoid feedback loops.** Prevent the glass from capturing itself.
10. **6.10 — Offscreen cost.** Learn why extra render targets consume memory and GPU time.
11. **6.11 — Build a two-layer scene architecture.** Separate content, glass material, and foreground labels.

**Checkpoint:** Move a glass panel over a dynamic background and sample the correct region without recursive capture.

---

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

## 8. Chapter hub file rules

Every chapter uses `course/chapters/chapter-NN/lesson-[chapter-name].html` as its main hub file.

The chapter hub contains:

- the chapter purpose;
- prerequisites;
- a simple visual map of the lesson order;
- one card and link for each lesson;
- the chapter’s new vocabulary;
- the Android files that the chapter will touch;
- the chapter checkpoint;
- a section that states what is deliberately postponed;
- a copyable handoff block;
- a link to the previous and next chapter.

The chapter hub does not repeat every lesson. It is a navigation and orientation page.

For a strictly sequential chapter, the visual map should be a stepper. For a chapter with several related component families, the visual map can be an interactive concept map. A static list is acceptable only when interaction would add no teaching value.

---

## 9. Chapter 1 delivery manifest

Chapter 1 contains one descriptively named chapter hub and eight lesson files. The files below are the required first chapter output. The detailed prose, widgets, and Android code should be generated in those files rather than inserted back into this Markdown plan.

### `lesson-a-transparent-panel-is-not-yet-liquid-glass.html`

This page links all eight lessons. It shows a simple pipeline:

```text
observe the effect
→ name its ingredients
→ build a detailed background
→ add only translucency
→ calculate the alpha mixture
→ test on Pixel 8 Pro
→ diagnose what is still missing
```

The page also states that Chapter 1 intentionally does not contain blur or refraction.

### `lesson-01-01-visible-ingredients.html`

**New graphics idea:** A glass appearance is made from several separate operations.  
**New math idea:** None.

Interactive scene:

- One rounded panel over detailed content.
- Toggles for translucency, blur, refraction, tint, highlight, shadow, and shape motion.
- Only one toggle starts enabled.
- Selecting an ingredient highlights the exact visible region it changes.
- A side panel gives a plain definition and one counterexample.

Coding challenge:

- Edit a tiny Kotlin fragment so `selectedIngredient` changes from `GlassIngredient.TRANSLUCENCY` to `GlassIngredient.REFRACTION` while the enum declaration remains unchanged.
- The page checks the fragment and updates a browser preview of the selected visible clue.
- The fragment is explicitly labelled as syntax practice, not a complete Android file.

Exercises should distinguish translucency from blur and refraction.

### `lesson-01-02-observe-the-transition.html`

**New graphics idea:** An animation can be studied as a sequence of visible states.  
**New math idea:** None.

Interactive scene:

- A manual eight-step timeline: rest, contact, press response, early expansion, middle expansion, content reveal, settled sheet, closing.
- A source-side guide and an optional dashed overlay of the previous sampled boundary.
- Separate observation passes for boundary, background detail, menu content, light and shadow, and event order.
- An optional slow stage playback appears only after the manual stepper.
- An optional local video loader provides a time scrubber and approximate 1/60-second nudging. The selected file stays local to the browser.
- A worksheet records visible facts against a selected stage and time.

Coding challenge:

- Edit an isolated Kotlin data model so an `ObservationFrame` represents `MenuStage.MIDDLE_EXPANSION` with `menuRowsVisible = false`.
- The page parses the two assigned values and updates a browser preview. It clearly states that the parser does not compile Kotlin.

Exercises distinguish a frame from a stage, test the misconception that named stages imply pauses, and separate visible distortion from a claim about AGSL.

The page must not present a guessed Apple implementation as fact.

### `lesson-01-03-create-the-android-project.html`

**New graphics idea:** The physical Android screen is the final rendering target.  
**New math idea:** None.

Interactive explanation:

- A live project-configuration laboratory for project name, package, Empty Activity, Kotlin, and `minSdk = 33`.
- A manual eight-step source-to-pixels pipeline: saved source, Gradle sync, compilation and resource processing, debug APK packaging, ADB installation and launch, Activity and Compose startup, and the displayed frame.
- Exact input, operation, and output text for every pipeline step.
- USB and Wi-Fi device-connection paths for the Pixel 8 Pro.
- A failure-boundary guide that separates build, connection, installation, and runtime problems.
- A clickable project tree and two complete Kotlin files.
- An editable Gradle Kotlin DSL fragment in which direct edits, four presets, and six plus-or-minus controls share one SDK state.
- Four exercises with hidden answers and a copyable lesson record.

Android companion delivery:

```text
app/src/main/java/com/example/liquidglasslab/MainActivity.kt
app/src/main/java/com/example/liquidglasslab/chapter01/Chapter01Screen.kt
```

The learner must run the untouched generated template before applying these files. The Android package contains no Gradle files. This avoids pinning the course to a stale Android Gradle Plugin, Kotlin, or Compose template version.

Suggested commits:

```text
course: create Compose project baseline
course: add chapter 1 Android baseline screen
```


### `lesson-01-04-build-a-study-background.html`

**New graphics idea:** A controlled background needs known visual clues so later effects can be inspected reliably.  
**New math idea:** None.

Interactive explanation:

- A side-by-side Canvas comparison applies the same no-op, soft blur, small horizontal shift, or pale-blue tint to a flat color and to the study background.
- A clue isolator explains the separate jobs and limitations of the gradient, solid color regions, circles, sharp lines, and text.
- A real-value trace follows `SharpLineCount = 11` through `repeat(SharpLineCount)` to eleven line composables with indexes `0` through `10`.
- A seven-step manual build sequence reveals the gradient, safe drawing area, color regions, circles, lines, and text one layer at a time.
- Complete source tabs show the two Android files changed by the lesson.
- A coding challenge lets direct editor changes and clickable call buttons share one preview state. The learner restores `SharpLineClues()` and `TextClues()` while preserving the existing calls.
- Four exercises test whether the learner understands why a flat color hides blur and displacement, how a circle reveals uneven distortion, how `repeat(11)` behaves, and why safe-drawing padding applies only to important content.
- A copyable completion record captures build, clue, line-count, screenshot, and commit status.

Android code delivery:

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter01/Chapter01Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter01/StudyBackground.kt
```

`Chapter01Screen.kt` delegates the full available size to `StudyBackground`. `StudyBackground.kt` uses standard `Box`, `Column`, and `Row` layout composables rather than custom `Canvas` drawing because Chapter 2 has not yet introduced coordinate math. The scene is static and small. No measured performance problem currently justifies a lower-level drawing implementation.

No alpha values, blur, refraction, shadow, highlight, or animation are added to the Android project in this lesson.

Suggested commit:

```text
course: add chapter 1 study background
```


### `lesson-01-05-translucent-rounded-panel.html`

**New graphics idea:** A translucent foreground fill changes visible colors without moving or softening the background geometry.  
**New math idea:** No compositing formula yet. The lesson only maps `0.25f` to 25% opacity.

Interactive explanation:

- A live browser Canvas changes only the white panel alpha while preserving panel size, shape, layer order, and background content.
- A three-view layer inspector shows the unchanged study background, the transparent panel layer on a checkerboard teaching surface, and the final composite.
- A sharp-edge diagnostic distinguishes lower contrast from actual spatial blur. Its optional blur mode is clearly labelled as a counterexample rather than Android lesson code.
- A value trace follows `PanelFillAlpha = 0.25f` into `Color.White.copy(alpha = PanelFillAlpha)` and then into `Modifier.background(color, shape)`.
- A seven-step manual build sequence starts with the existing background and adds the parent `Box`, exact preview bounds, rounded shape, white alpha value, final fill, and diagnosis.
- Complete source tabs show the two Android files changed by the lesson.
- The coding challenge accepts direct editor changes and clickable opacity presets. Both paths update the same preview geometry and alpha state.
- Four exercises test the distinction between lower contrast and blur, child order in the parent `Box`, the visible meanings of alpha 0 and 1, and the material operations still missing.
- A copyable completion record captures the Pixel build, visible panel, sharp background, screenshot, and commit status.

Android code delivery:

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter01/Chapter01Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter01/TranslucentRoundedPanel.kt
```

`StudyBackground.kt` is unchanged and is deliberately excluded from the incremental Android ZIP.

Suggested commit:

```text
course: add translucent chapter 1 panel
```


### `lesson-01-06-alpha-mixture.html`

**New graphics idea:** Ordinary translucency combines the source and destination values at the same output position.  
**New math idea:** A weighted mixture whose two weights add to 1.

Interactive explanation:

- A three-slider one-channel laboratory controls foreground channel `F`, background channel `B`, and alpha `A`.
- Live bars and substituted equations show `R = F × A + B × (1 − A)`.
- The default course values calculate `1.00 × 0.25 + 0.20 × 0.75 = 0.40`.
- A seven-step manual derivation selects one teaching position, reads the foreground and destination at that same position, calculates both weights, calculates both contributions, and adds them.
- A six-position strip shows why one shared alpha does not produce one uniform final color over a varying background.
- A sampling comparison shows the exact image positions read by translucency, a future blur model, and a future refraction model.
- The Android mapping traces `PanelFillAlpha`, `Color.White.copy`, the existing draw order, and the default source-over operation.
- A production boundary explains why calculating one opaque Kotlin color would destroy the varying study background instead of implementing translucency.
- The coding challenge repairs the background share in an isolated `mixChannel` helper. Direct editor changes and clickable expression buttons share one preview state.
- Four exercises test the course calculation, alpha endpoints, two different background inputs, and the misconception that alpha alone can bend or soften a line.
- A copyable completion record explicitly records that Android source remains unchanged.

Android code delivery:

```text
No Android files changed. No Android ZIP is produced.
```

Suggested learning-docs commit:

```text
course: add chapter 1 alpha mixture lesson
```


### `lesson-01-07-pixel-8-pro-experiment.html`

**New graphics idea:** A controlled graphics experiment changes one input and keeps the other relevant inputs fixed.  
**New math idea:** Convert between percentages and normalized alpha with `percentage ÷ 100`.

Android code delivery:

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter01/Chapter01Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter01/TranslucentRoundedPanel.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter01/OpacityExperimentControls.kt
```

The five exact states are 0%, 25%, 50%, 75%, and 100%. No blur or refraction is added.

### `lesson-01-08-diagnosis-and-checkpoint.html`

**New graphics idea:** Diagnose an implementation by connecting each claim to visible or source-level evidence.  
**New math idea:** None.

Android code delivery:

```text
No Android files changed. No Android ZIP is produced.
```

---

## 10. Android source organization for Chapter 1

The Chapter 1 HTML files refer to one cumulative Android implementation in the separate `LiquidGlassLab` project:

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/
├── MainActivity.kt
└── chapter01/
    ├── Chapter01Screen.kt
    ├── StudyBackground.kt          # introduced in Lesson 1.4
    ├── TranslucentRoundedPanel.kt  # introduced in Lesson 1.5
    └── OpacityExperimentControls.kt # introduced in Lesson 1.7
```

Lesson 1.3 does not create `Chapter01Route.kt`. There is only one destination, so `MainActivity` calls `Chapter01Screen` directly. A route or navigation abstraction will be added only when a real second destination creates a routing problem.

The source is cumulative:

- Lesson 1.3 creates the project and stable screen entry point.
- Lesson 1.4 adds the study background.
- Lesson 1.5 adds the fixed 25% translucent rounded panel.
- Lesson 1.6 explains the math already visible in Lesson 1.5 and changes no Android source.
- Lesson 1.7 runs the controlled device experiment.
- Lesson 1.8 records the checkpoint.

A lesson must not duplicate the entire Android project inside the HTML file. It should quote the relevant lines and state the complete target path and include the complete file or patch in that lesson delivery.


## 10A. Android source organization for Chapter 2

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/
├── MainActivity.kt                         # switches to Chapter02Screen in Lesson 2.1
└── chapter02/
    ├── Chapter02Screen.kt                  # introduced in Lesson 2.1; selects the current Chapter 2 explorer
    ├── EnlargedPixelGrid.kt                # introduced in Lesson 2.1, updated in 2.2 and 2.3
    ├── XAxisExplorer.kt                    # introduced in Lesson 2.2
    ├── YAxisExplorer.kt                    # introduced in Lesson 2.3
    ├── BoundsCenterExplorer.kt             # introduced in Lesson 2.4
    ├── DensityExplorer.kt                  # introduced in Lesson 2.5
    ├── LocalCoordinatesExplorer.kt         # introduced in Lesson 2.6
    ├── ParentScreenCoordinatesExplorer.kt  # introduced in Lesson 2.7
    ├── NormalizedCoordinatesExplorer.kt    # introduced in Lesson 2.8
    └── CoordinateInspector.kt              # introduced in Lesson 2.9
```

Lessons through 2.9 are complete. Chapter 2 is complete.

## 10B. Android source organization for the current Chapter 3 state

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/
├── MainActivity.kt                         # switches to Chapter03Screen in Lesson 3.1
└── chapter03/
    ├── Chapter03Screen.kt                  # active child is CompositingLaboratory in Lesson 3.11
    ├── RgbChannelsExplorer.kt              # introduced in Lesson 3.1
    ├── AlphaExplorer.kt                    # introduced in Lesson 3.2
    ├── OverOperationExplorer.kt            # introduced in Lesson 3.3
    ├── DrawOrderExplorer.kt                # introduced in Lesson 3.4
    ├── PremultipliedRgbaExplorer.kt        # introduced in Lesson 3.5
    ├── BrightnessLuminanceExplorer.kt      # introduced in Lesson 3.6
    ├── ForegroundContrastExplorer.kt       # introduced in Lesson 3.7
    ├── TintExplorer.kt                     # introduced in Lesson 3.8
    ├── SaturationExplorer.kt               # introduced in Lesson 3.9
    ├── BlendModesExplorer.kt               # introduced in Lesson 3.10
    ├── CompositingLaboratory.kt             # introduced in Lesson 3.11
    └── TransparentEdgeExplorer.kt          # compatibility wrapper; rejected edge experiment removed
```

Lessons 3.1 through 3.11 are complete. Chapter 3 is complete. Lesson 3.11 combines the completed source-over, draw-order, saturation, opaque blend-mode, luminance, and contrast operations without introducing image sampling or translucent top-blend formulas.

## 10C. Android source organization for the current Chapter 4 state

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/
├── MainActivity.kt                         # switches to Chapter04Screen in Lesson 4.1
└── chapter04/
    ├── Chapter04Screen.kt                  # active child is CubicBezierExplorer
    ├── RectanglesCirclesExplorer.kt        # introduced in Lesson 4.1
    ├── RoundedRectanglesExplorer.kt        # introduced in Lesson 4.2
    ├── CapsulesExplorer.kt                 # introduced in Lesson 4.3
    ├── ConcentricCornersExplorer.kt        # introduced in Lesson 4.4
    ├── PathsExplorer.kt                    # introduced in Lesson 4.5
    └── CubicBezierExplorer.kt              # introduced in Lesson 4.6
```

Lessons 4.1 through 4.5 are complete. Lesson 4.6 is generated and is the current learner checkpoint. It keeps the Lesson 4.5 Path command model, introduces two control points, appends one `cubicTo` segment, and calculates one exact curve point at halfway through repeated midpoint construction.

---


### `lesson-02-04-width-height-edges-and-center.html`

**New graphics idea:** Bounds are the rectangular area enclosed by left, top, right, and bottom edges.  
**New math idea:** The center is halfway across width and halfway down height.

Interactive explanation:

- A resizable SVG rectangle exposes all four edge values.
- Width and height can be changed by sliders, exact presets, or a draggable bottom-right handle.
- Live formulas calculate `width = right - left`, `height = bottom - top`, `centerX = width / 2`, and `centerY = height / 2` for the origin-based model.
- An edge-versus-index strip shows why width 8 has boundary coordinates 0 through 8 but cell indexes 0 through 7.
- A seven-step derivation moves from bounds to the center of 8 × 6, then tests the odd-sized 7 × 5 rectangle.
- The Android trace maps 7 × 5 abstract units to a requested 210.dp × 150.dp drawing surface without prematurely converting dp to physical pixels.
- The coding challenge repairs an incorrect `centerY = width / 2f` expression. Editor changes and clickable controls share one preview state.
- Four hidden-answer exercises test center arithmetic, non-zero bounds, the edge-versus-index distinction, and half-unit centers.

Android code delivery:

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter02/BoundsCenterExplorer.kt
```

Suggested commits:

```text
course: add bounds and center lesson
course: add bounds and center explorer
```



### `lesson-02-05-pixels-dp-and-density.html`

**New graphics idea:** Android layout distances and Canvas drawing distances can use different units at the API boundary.  
**New math idea:** Convert with `px = dp × density` and `dp = px ÷ density`.

Interactive explanation:

- Adjustable dp and teaching-density controls show the conversion using substituted values.
- A comparison keeps dp fixed across densities and then keeps px fixed across densities.
- A seven-step derivation follows `96.dp` through `LocalDensity`, `toPx`, `roundToPx`, layout measurement, and Canvas-local drawing.
- The Android trace compares a one-pixel line with a one-dp line converted at runtime.
- The coding challenge replaces a raw `16f` Canvas inset with `16.dp.toPx()` inside a density scope.
- Four hidden-answer exercises test the units and conversions.

Android code delivery:

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter02/DensityExplorer.kt
```

### `lesson-02-06-local-coordinates.html`

**New graphics idea:** A child element owns a local coordinate system whose origin is the child's top-left corner.  
**New math idea:** Translate between a parent-local point and a child-local point by adding or subtracting the child's parent-local origin.

Interactive explanation:

- A parent scene contains one movable child rectangle. Browser positions use SVG-local teaching units, not measured device pixels.
- Four controls change the child's parent-local origin and one point's child-local coordinates independently.
- Dragging the green point changes the child-local X and Y values.
- Moving the child changes the point's parent-local position while preserving the child-local values.
- A same-number comparison shows why `(48, 36)` is incomplete unless its coordinate system is named.
- A seven-step derivation calculates child-local `(160, 120)` from parent-local point `(340, 220)` and child origin `(180, 100)`.
- The Android trace follows `localOffset` from `detectTapGestures` into state and then into a child-filling Canvas.
- The coding challenge removes an incorrect addition of `childOriginInParent` to a value that is already child-local.
- Four hidden-answer exercises test local origins, conversion direction, moving-child behavior, and the code-space mismatch.

Android code delivery:

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter02/LocalCoordinatesExplorer.kt
```

Suggested commits:

```text
course: add local coordinates lesson
course: add local coordinates explorer
```


### `lesson-02-07-parent-window-and-screen-coordinates.html`

**New graphics idea:** One visible control can be measured from several nested coordinate-system origins.  
**New math idea:** Moving from a smaller coordinate system to a larger one adds each intermediate origin offset once.

Interactive explanation:

- A nested SVG scene shows the device screen, application window, parent scene, and draggable control as separate rectangles with separate origins.
- The browser values are explicitly SVG-local teaching units, not measured Pixel 8 Pro pixels.
- Moving only the control, parent, or window reveals which coordinate readings should change and which should remain fixed.
- A manual derivation calculates control-in-window `(310, 210)` from parent-in-window `(180, 120)` plus control-in-parent `(130, 90)`, then adds window-on-screen `(40, 60)` to obtain control-on-screen `(350, 270)`.
- The Android trace follows `LayoutCoordinates` from `onGloballyPositioned` into `positionInParent()`, `positionInWindow()`, and `positionOnScreen()`.
- The Android screen calculates the same conversions independently and compares them with the measured API results.
- The lesson states that a full-screen window can start at screen `(0, 0)`. Equal numbers in that case do not make the window and screen coordinate systems identical.
- The lesson treats `Offset.Unspecified` as unavailable. It never changes unavailable screen data into the valid position `(0, 0)`.
- The coding challenge replaces `positionInParent()` with `positionOnScreen()` in a function whose name promises a screen-relative result.
- Four hidden-answer exercises test offset addition, equal-number versus equal-system reasoning, movement diagnosis, and unavailable screen coordinates.

Android code delivery:

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter02/ParentScreenCoordinatesExplorer.kt
```

Suggested commits:

```text
course: add parent window and screen coordinates lesson
course: add parent window and screen coordinates explorer
```


### `lesson-02-08-normalized-coordinates.html`

**New graphics idea:** A point can preserve its relative position when an element changes size.  
**New math idea:** Divide local coordinates by width and height to normalize; multiply by current width and height to convert back.

Interactive explanation:

- A resizable rectangle exposes local px and normalized values at the same time.
- A draggable marker and exact presets update one shared point state.
- The central formulas are `normalizedX = localX / width`, `normalizedY = localY / height`, `localX = normalizedX * width`, and `localY = normalizedY * height`.
- A boundary diagnostic distinguishes normalized 1 at local X = width from the final pixel index at width − 1.
- A seven-step derivation follows local `(160, 270)` inside `640 × 360` to normalized `(0.25, 0.75)`, then reconstructs a local point for a new size.
- The Android implementation reads the measured drawing size, normalizes a local tap, stores the normalized pair, and multiplies by the current Canvas dimensions for drawing.
- The coding challenge replaces multiplication with division inside `normalizePoint`.
- Four hidden-answer exercises test normalization, conversion back, resize behavior, and boundary-versus-index reasoning.

Android code delivery:

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter02/NormalizedCoordinatesExplorer.kt
```

Suggested commits:

```text
course: add normalized coordinates lesson
course: add normalized coordinates explorer
```


### `lesson-02-09-build-a-coordinate-inspector.html`

**New graphics idea:** A coordinate inspector makes invisible coordinate-system and unit differences visible in one diagnostic drawing.  
**New math idea:** Derive several descriptions of one point by division, density conversion, and origin addition without mixing units.

Interactive explanation:

- A nested SVG scene shows screen, window, parent, inspector, local grid, local bounds, center, crosshair, and pointer marker.
- The marker can be dragged. Exact point presets and placement experiments use the same state.
- Live readouts show local bounds, local center, local px, local dp, normalized values, parent-relative px, window-relative px, and screen-relative px.
- The default snapshot follows a `640 × 360 px` inspector, local point `(160, 270) px`, density `2.5 px/dp`, inspector-in-parent `(120, 80) px`, parent-in-window `(180, 100) px`, and window-on-screen `(40, 60) px`.
- An eight-step construction maps every output to an exact Kotlin excerpt and input → operation → output record.
- The Android implementation reads density with `LocalDensity`, copies measured geometry in `onGloballyPositioned`, receives one pointer through `awaitEachGesture`, stores normalized state, derives all readouts, and draws the visual evidence with Canvas.
- The coding challenge replaces `normalizedPoint` with `pointerLocalPx` when adding a displacement to a screen-relative pixel origin.
- Four hidden-answer exercises test bounds and center, px-to-dp conversion, nested origin addition, and unit compatibility.

Android code delivery:

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter02/Chapter02Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter02/CoordinateInspector.kt
```

Suggested commits:

```text
course: add coordinate inspector lesson
course: add coordinate inspector checkpoint
```


## 11. Exercises and grading

Every lesson contains at least one small coding challenge before the final exercise section. Every lesson then ends with two to four exercises.

At least one exercise must target the most likely misconception. For example, Chapter 1 asks whether lowering opacity can bend a straight line. This detects whether translucency, blur, and refraction are still being treated as one effect.

Answers stay hidden in `<details>` elements. The learner answers in chat before opening them.

Grading uses:

- `✓` for correct;
- `🟡` for partly correct;
- `❌` for incorrect.

The grading response must identify the exact reasoning step that diverged. When several errors share one cause, name that missing mental model and point to the exact lesson widget to repeat. Then provide a small retake with new questions.

---

## 12. Course progress record

The handoff Markdown file is the source of truth for progress.

A lesson exports a small Markdown block like this:

```markdown
lesson_id: 01-05
lesson_title: Translucent rounded panel
status: completed
android_commit: <commit-or-empty>
pixel_8_pro_tested: true
screenshots:
  - <filename>
observations:
  - <one sentence>
remaining_questions:
  - <question-or-none>
```

The next conversation updates `liquid_glass_android_handoff.md`. Browser-local state is only a convenience.

---


## 12C. Lesson 3.2 generated details

### Learning file

```text
course/chapters/chapter-03/lesson-03-02-alpha.html
```

### Main graphics idea

Alpha is the fourth RGBA channel. In Lesson 3.2 it stores source opacity as a normalized number from `0.00` through `1.00`.

The fixed source is:

```text
RGB = (0.80, 0.25, 0.60)
```

The changing tuple is:

```text
RGBA(0.80, 0.25, 0.60, alpha)
```

The lesson uses:

```text
source opacity = alpha
background opening = 1 - alpha
```

This is not yet the complete source-over color formula. Lesson 3.3 calculates the final output channels.

### Key diagnostic

Lower alpha does not directly mean darker or lighter.

```text
alpha decreases
    ↓
less source influence
    ↓
more of the named background remains visible
```

The same source and alpha can therefore look different over dark navy and pale yellow.

### Android value path

```text
preset or Slider
    ↓
alpha state
    ↓
Color(
    red = 0.80f,
    green = 0.25f,
    blue = 0.60f,
    alpha = alpha,
)
    ↓
Canvas.drawRect(color = sourceColor)
    ↓
source-over drawing over the existing checkerboard or fixed background
```

### Android files changed

```text
app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter03/AlphaExplorer.kt
```

`MainActivity.kt` and `RgbChannelsExplorer.kt` are unchanged.

### Lesson checkpoint

Lesson 3.2 is complete only when:

- [ ] The incremental learning-docs and Android archives were applied after Lesson 3.1.
- [ ] The app builds and opens Lesson 3.2 on the Pixel 8 Pro.
- [ ] The 0%, 25%, 50%, 75%, and 100% presets work.
- [ ] Changing alpha leaves the displayed RGB values unchanged.
- [ ] The same alpha visibly differs over dark navy and pale yellow.
- [ ] Alpha zero reveals the unchanged checkerboard while the straight-RGBA tuple still displays non-zero RGB.
- [ ] The learner can explain why alpha is not a brightness control.
- [ ] Browser and Android chrome follow OS light and dark modes while exact teaching colors remain fixed.
- [ ] The coding challenge and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 19 of 216.
Next lesson becomes 3.3 — The “over” operation.
```


## 12D. Lesson 3.3 generated details

### Learning file

```text
course/chapters/chapter-03/lesson-03-03-the-over-operation.html
```

### Main graphics idea

Source-over compositing combines one source RGBA value with one destination RGBA value at the same drawing-target position.

The course inputs are:

```text
source      = RGBA(0.90, 0.10, 0.80, 0.50)
destination = RGBA(0.10, 0.90, 0.40, 0.60)
```

The opening left by the source is:

```text
1 - 0.50 = 0.50
```

The surviving destination alpha is:

```text
0.60 × 0.50 = 0.30
```

The output alpha is:

```text
0.50 + 0.30 = 0.80
```

The output premultiplied RGB channels are:

```text
red   = 0.90 × 0.50 + 0.10 × 0.60 × 0.50 = 0.48
green = 0.10 × 0.50 + 0.90 × 0.60 × 0.50 = 0.32
blue  = 0.80 × 0.50 + 0.40 × 0.60 × 0.50 = 0.52
```

Dividing output premultiplied RGB by output alpha produces output straight RGBA:

```text
output = RGBA(0.60, 0.40, 0.65, 0.80)
```

### Android value path

```text
source-alpha and destination-alpha controls
    ↓
StraightRgba source and destination
    ↓
sourceOver(source, destination)
    ↓
remaining opening, surviving destination alpha, output alpha, output premultiplied RGB
    ↓
output straight RGBA
    ↓
compare:
  destination then source with BlendMode.SrcOver
  one calculated flattened output color
```

### Android files changed

```text
app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter03/OverOperationExplorer.kt
```

`MainActivity.kt`, `RgbChannelsExplorer.kt`, and `AlphaExplorer.kt` are unchanged.

### Lesson checkpoint

Lesson 3.3 is complete only when:

- [ ] The incremental learning-docs and Android archives were applied after Lesson 3.2.
- [ ] The app builds and opens Lesson 3.3 on the Pixel 8 Pro.
- [ ] The course inputs produce output `RGBA(0.60, 0.40, 0.65, 0.80)`.
- [ ] The renderer stack and calculated flattened color look the same over the checkerboard.
- [ ] The learner can calculate output alpha and all three RGB channels.
- [ ] The learner can explain why destination contribution uses both `Ad` and `1 - As`.
- [ ] Opaque-source and all-transparent boundary cases are tested.
- [ ] Browser and Android chrome follow OS light and dark modes while exact teaching colors remain fixed.
- [ ] The coding challenge and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 20 of 216.
Next lesson becomes 3.4 — Draw order matters.
```



## 12E. Lesson 3.4 generated details

### Learning file

```text
course/chapters/chapter-03/lesson-03-04-draw-order-matters.html
```

### Main graphics idea

Draw order is the sequence in which operations write into one drawing target. At an overlap position, the second colored draw call becomes the current source. The earlier colored result supplies the destination input for the two-color source-over calculation.

The fixed inputs are:

```text
magenta = RGBA(0.90, 0.10, 0.80, 0.50)
green   = RGBA(0.10, 0.90, 0.40, 0.60)
```

Magenta over green:

```text
source weight      = 0.50
destination weight = 0.60 × (1 - 0.50) = 0.30
output              = RGBA(0.60, 0.40, 0.65, 0.80)
```

Green over magenta:

```text
source weight      = 0.60
destination weight = 0.50 × (1 - 0.60) = 0.20
output              = RGBA(0.30, 0.70, 0.50, 0.80)
```

Both outputs have alpha `0.80`. Their RGB values differ.

### Per-position diagnostic

```text
magenta-only position:
one colored operation covers it after the magenta call
→ reversing the two colored calls does not change that position

overlap position:
both colored operations cover it
→ reversing the calls changes which color is source

green-only position:
one colored operation covers it after the green call
→ reversing the two colored calls does not change that position
```

### Android value path

```text
Magenta on top or Green on top button
    ↓
topLayer state
    ↓
when (topLayer)
    ↓
first colored Canvas draw call
    ↓
second colored Canvas draw call using BlendMode.SrcOver
    ↓
calculateOrderSourceOver(source, destination)
    ↓
compare both exact output RGBA tuples
```

### Android files changed

```text
app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter03/DrawOrderExplorer.kt
```

`MainActivity.kt`, `RgbChannelsExplorer.kt`, `AlphaExplorer.kt`, and `OverOperationExplorer.kt` are unchanged.

### Lesson checkpoint

Lesson 3.4 is complete only when:

- [ ] Both incremental ZIPs were applied after Lesson 3.3.
- [ ] The app builds and opens Lesson 3.4 on the Pixel 8 Pro.
- [ ] Magenta on top produces `RGBA(0.60, 0.40, 0.65, 0.80)`.
- [ ] Green on top produces `RGBA(0.30, 0.70, 0.50, 0.80)`.
- [ ] Both orders report output alpha `0.80`.
- [ ] The learner can explain why the overlap changes while single-color positions do not.
- [ ] The learner can name source and destination from the actual call order.
- [ ] Browser and Android chrome follow OS light and dark modes while exact teaching colors remain fixed.
- [ ] The coding challenge and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 21 of 216.
Next lesson becomes 3.5 — Straight and premultiplied RGBA.
```


## 12F. Lesson 3.5 generated details

### Learning file

```text
course/chapters/chapter-03/lesson-03-05-straight-and-premultiplied-rgba.html
```

The rejected edge-oriented filename remains as a redirect in repositories that already received it. The current lesson does not teach an edge artifact.

### Scope

Lesson 3.5 continues the exact Lesson 3.3 source-over example at one image position:

```text
source straight RGBA:
(0.90, 0.10, 0.80, 0.50)

destination straight RGBA:
(0.10, 0.90, 0.40, 0.60)

output straight RGBA:
(0.60, 0.40, 0.65, 0.80)
```

Both inputs are translucent. No opaque destination is assumed in the main calculation.

No bitmap boundary, circle, interpolation, resizing, antialiasing, texture sampling, filtering, shadow, gradient, or halo is part of this lesson.

### Straight RGBA

Straight RGBA, also called unassociated RGBA, stores RGB independently from alpha.

```text
source straight RGB = (0.90, 0.10, 0.80)
source alpha        = 0.50
```

The RGB tuple does not yet contain multiplication by source alpha.

### Premultiplied RGBA

Premultiplied RGBA, also called associated RGBA, stores alpha-weighted RGB contributions. Alpha is copied unchanged.

```text
source premultiplied RGB
= (0.90, 0.10, 0.80) × 0.50
= (0.45, 0.05, 0.40)

source premultiplied RGBA
= (0.45, 0.05, 0.40, 0.50)
```

For the destination:

```text
destination premultiplied RGB
= (0.10, 0.90, 0.40) × 0.60
= (0.06, 0.54, 0.24)
```

The straight and premultiplied tuples contain different stored numbers. They describe the same translucent color under different representation contracts.

### Exact bridge to Lesson 3.3

```text
Lesson 3.3 source contribution
→ source premultiplied RGB
→ (0.45, 0.05, 0.40)
```

```text
Lesson 3.3 destination contribution
→ destination premultiplied RGB after the source opening
→ (0.03, 0.27, 0.12)
```

```text
Lesson 3.3 weighted total
→ output premultiplied RGB
→ (0.48, 0.32, 0.52)
```

```text
Lesson 3.3 ordinary output
→ output straight RGB
→ (0.60, 0.40, 0.65)
```

The old labels remain only in this mapping. New lesson prose and code use the precise names.

### General source-over from straight inputs

```text
output premultiplied RGB
=
source straight RGB × source alpha
+
destination straight RGB × destination alpha × (1 − source alpha)
```

```text
output alpha
=
source alpha
+
destination alpha × (1 − source alpha)
```

For the course values:

```text
source opening
= 1 − 0.50
= 0.50
```

```text
source premultiplied RGB
= (0.90, 0.10, 0.80) × 0.50
= (0.45, 0.05, 0.40)
```

```text
destination after source coverage
= (0.10, 0.90, 0.40) × 0.60 × 0.50
= (0.03, 0.27, 0.12)
```

```text
output premultiplied RGB
= (0.45, 0.05, 0.40) + (0.03, 0.27, 0.12)
= (0.48, 0.32, 0.52)
```

```text
output alpha
= 0.50 + 0.60 × 0.50
= 0.80
```

```text
output straight RGB
= (0.48, 0.32, 0.52) ÷ 0.80
= (0.60, 0.40, 0.65)
```

### Equivalent source-over from premultiplied inputs

When source and destination RGB already include their own alpha:

```text
output premultiplied RGB
=
source premultiplied RGB
+
destination premultiplied RGB × (1 − source alpha)
```

For the course values:

```text
(0.45, 0.05, 0.40)
+
(0.06, 0.54, 0.24) × 0.50
=
(0.48, 0.32, 0.52)
```

This path does not multiply either stored premultiplied RGB tuple by its own alpha again.

### Opaque-destination special case

The complete straight-input destination term is:

```text
destination straight RGB × destination alpha × (1 − source alpha)
```

Only when destination alpha is explicitly `1` may it simplify to:

```text
destination straight RGB × (1 − source alpha)
```

Output alpha then becomes `1`. Output premultiplied RGB and output straight RGB are numerically equal because division by `1` changes nothing.

### Why two representations exist in this course

- Compose `Color` and `Color.compositeOver` use straight, non-premultiplied component values at their public API boundary.
- A premultiplied buffer or premultiplied math function consumes premultiplied values only when its contract says so.
- Android requires an alpha-bearing `Bitmap` drawn by `Canvas` to be premultiplied.
- The course uses separate `StraightRgba` and `PremultipliedRgba` types and converts once at the boundary.
- A bare `RGB(r, g, b)` label is insufficient when alpha matters. Every tuple is labelled straight or premultiplied.

### Android value path

```text
source and destination alpha controls
    ↓
StraightRgba source and destination
    ↓
toPremultiplied() on each input
    ↓
source premultiplied RGB
destination premultiplied RGB
    ↓
source opening = 1 − source alpha
    ↓
output premultiplied RGB
= sourceP + destinationP × opening
    ↓
output alpha
= sourceA + destinationA × opening
    ↓
outputPremultiplied.toStraight()
    ↓
output straight RGBA for Compose Color
    ↓
verify against Color.compositeOver
```

### Android files changed

```text
app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter03/PremultipliedRgbaExplorer.kt
app/src/main/java/com/example/liquidglasslab/chapter03/OverOperationExplorer.kt
```

`OverOperationExplorer.kt` changes because visible Lesson 3.3 labels are corrected to `output premultiplied RGB` and `output straight RGB`.

### Lesson checkpoint

Lesson 3.5 is complete only when:

- [ ] The current replacement ZIPs were applied over the completed Lesson 3.4 state or over an earlier Lesson 3.5 attempt.
- [ ] The app builds and opens Lesson 3.5 on the Pixel 8 Pro.
- [ ] The learner can define straight RGBA.
- [ ] The learner can define premultiplied RGBA.
- [ ] The learner can explain why a bare RGB tuple does not identify the representation.
- [ ] The learner can map Lesson 3.3's `weighted total` to `output premultiplied RGB`.
- [ ] The learner can map Lesson 3.3's `ordinary output` to `output straight RGB`.
- [ ] The learner can write the general destination term with destination alpha.
- [ ] The learner can explain the opaque-destination shortcut as a special case.
- [ ] The learner can explain which representation Compose `Color.compositeOver` expects.
- [ ] The learner can explain when a premultiplied buffer expects premultiplied values.
- [ ] Browser and Android chrome follow OS light and dark modes while exact instructional values remain fixed.
- [ ] The coding challenge and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 22 of 216.
Next lesson becomes 3.6 — Brightness and luminance.
```

## 12C. Lesson 3.6 replacement implementation record

### `lesson-03-06-brightness-and-relative-luminance.html`

**Status:** the first 3.6 draft is rejected. This replacement is the only valid Lesson 3.6 learner checkpoint.

**New graphics idea:** One final opaque color can be converted into one relative-luminance number for later contrast calculations.

**New mathematical path:** Follow one sRGB channel through a piecewise decoding rule. Repeat for all three channels. Multiply the three linear-light values by fixed coefficients. Add the three contributions.

The lesson begins with the exact object already known from Lessons 3.1 through 3.5:

```kotlin
Color(
    red = 0.80f,
    green = 0.25f,
    blue = 0.60f,
    alpha = 1f,
)
```

Alpha equals `1`, so the source completely covers its destination. The RGB values already identify the final visible region.

The lesson defines these objects before formulas:

```text
sRGB channel code value:
the red, green, or blue number held by the Color object;
not proportional to modeled light.

linear-light channel value:
the output of sRGB decoding;
proportional to the modeled contribution of that channel.

relative luminance:
one unitless software number;
0 for sRGB reference black;
1 for sRGB reference white;
not a color, alpha, brightness setting, or physical measurement in nits.
```

One-channel trace for `0.50`:

```text
0.50 > 0.04045

((0.50 + 0.055) ÷ 1.055) ^ 2.4
≈ 0.214041
```

The lesson defines a piecewise formula, threshold, branch, exponent, and each fixed standard constant before using them. It also gives the near-black counterexample:

```text
0.02 ≤ 0.04045
0.02 ÷ 12.92 ≈ 0.001548
```

Course-color decoded channels:

```text
red   0.80 → 0.603827
green 0.25 → 0.050876
blue  0.60 → 0.318547
```

Relative-luminance calculation:

```text
red contribution   = 0.2126 × 0.603827 ≈ 0.128374
green contribution = 0.7152 × 0.050876 ≈ 0.036389
blue contribution  = 0.0722 × 0.318547 ≈ 0.022996

relative luminance
= 0.128374 + 0.036389 + 0.022996
≈ 0.187759
```

The coefficients are identified as standardized constants from the linear-sRGB-to-XYZ conversion. Their matrix derivation is explicitly deferred because that color-space mathematics has not yet been taught. Their immediate properties are explained: they are fixed, positive, unequal, and sum to `1`.

Alpha connection:

```text
translucent source
→ source-over with actual destination
→ final visible opaque straight sRGB color
→ sRGB decoding
→ relative luminance
```

At source alpha `0.50`:

```text
over white:
visible RGB = (0.9000, 0.6250, 0.8000)
luminance ≈ 0.460255

over navy:
visible RGB = (0.4250, 0.1700, 0.3800)
luminance ≈ 0.058262
```

Replacement Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter03/BrightnessLuminanceExplorer.kt
```

The chapter file contains both chapter-screen and direct-child previews in light and dark modes. The explorer follows the same order as the HTML: known object, one channel, exact branch arithmetic, three channels, coefficients, sum, alpha/destination bridge.

Lesson 3.6 is complete only when:

- [ ] The replacement files compile and run on the Pixel 8 Pro.
- [ ] Both preview levels render in light and dark modes.
- [ ] The learner can distinguish an sRGB code value from a linear-light value.
- [ ] The learner can explain every branch and constant in the decoding rule at the level taught here.
- [ ] The learner can trace one channel and then all three course-color channels.
- [ ] The learner can define relative luminance and correctly exclude color, alpha, brightness setting, and physical nits.
- [ ] The learner can explain the three coefficients and why they sum to one.
- [ ] The learner can reproduce the course result near `0.187759`.
- [ ] The learner can explain why a translucent source is composited over the actual destination first.
- [ ] The coding challenge and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 23 of 216.
Next lesson becomes 3.7 — Foreground contrast.
```

## 12D. Lesson 3.7 implementation record

### `lesson-03-07-foreground-contrast.html`

**New graphics idea:** A foreground icon can be selected by comparing its contrast ratio with the final opaque background color.

**New mathematical idea:** A ratio compares two adjusted relative-luminance values by division.

The lesson starts from the completed Lesson 3.6 output:

```text
background straight sRGB RGBA(0.80, 0.25, 0.60, 1.00)
background relative luminance ≈ 0.187759
```

It defines a foreground as the icon or text drawn above the background. It defines a foreground candidate as one option tested before selection. The two main candidates are opaque black and opaque white.

Before revealing the formula, the lesson identifies:

```text
Input 1: foreground relative luminance
Input 2: background relative luminance
Output: one unitless contrast ratio
```

It then defines lighter as the larger input and darker as the smaller input. The fixed standard offset `0.05` is explained before use. Its immediate mathematical role is to keep the denominator above zero when the darker color is black.

The contrast formula is:

```text
contrast ratio
= (lighter relative luminance + 0.05)
÷ (darker relative luminance + 0.05)
```

For opaque black over the course background:

```text
foreground L = 0
background L ≈ 0.187759
lighter = 0.187759
darker = 0
contrast ≈ 4.7552:1
```

For opaque white:

```text
foreground L = 1
background L ≈ 0.187759
lighter = 1
darker = 0.187759
contrast ≈ 4.4162:1
```

Black is selected because `4.7552` is larger than `4.4162`. The lesson explicitly rejects a simple background-luminance threshold of `0.50`; candidate ratios are compared directly.

Measurement and policy remain separate:

- choose the larger ratio to identify the stronger black-or-white candidate;
- compare the unrounded ratio with a selected target afterward;
- the lesson displays `3:1` for the meaningful non-text icon example and `4.5:1` for normal-size text context.

Alpha is connected in the correct order:

```text
translucent foreground source
+ final opaque background
→ source-over
→ final visible foreground-region color
→ relative luminance
→ contrast against the unchanged background
```

A 50% black source over the course background produces visible straight sRGB `(0.40, 0.125, 0.30)` and contrast near `2.5348:1`, rather than the opaque-black result `4.7552:1`.

The lesson states its evidence limit. One uniform background color is not a photograph, gradient, or moving Liquid Glass backdrop. Sampling and aggregating a varying region requires later backdrop and image-sampling lessons.

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter03/ForegroundContrastExplorer.kt
```

`Chapter03Screen.kt` contains complete-screen and direct-child previews in light and dark modes. The coding challenge repairs reversed `minOf` and `maxOf` assignments for darker and lighter luminance.

Lesson 3.7 is complete only when:

- [ ] The Android files compile and run on the Pixel 8 Pro.
- [ ] Both preview levels render in light and dark modes.
- [ ] The learner can define foreground, candidate, contrast, and contrast ratio.
- [ ] The learner can name both formula inputs and the output before writing the formula.
- [ ] The learner can explain lighter, darker, and the fixed `0.05` value.
- [ ] The learner can reproduce the black result near `4.7552:1`.
- [ ] The learner can reproduce the white result near `4.4162:1`.
- [ ] The learner can separate candidate selection from target checking.
- [ ] The learner can explain why a translucent foreground is composited first.
- [ ] The coding challenge and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 24 of 216.
Next lesson becomes 3.8 — Tint.
```


## 12E. Lesson 3.8 implementation record

### `lesson-03-08-tint.html`

**New graphics idea:** A tint can be modeled explicitly as one chosen translucent color source drawn over an existing opaque destination.

**Mathematical idea:** Reuse the general source-over equation and interpret the source alpha as tint amount. No new color formula is invented.

The lesson starts from:

```text
Destination straight sRGB RGBA:
(0.80, 0.25, 0.60, 1.00)

Tint source straight sRGB RGBA:
(0.20, 0.65, 1.00, 0.25)
```

For red, it first uses the general straight-input source-over path:

```text
output premultiplied red
= 0.20 × 0.25
+ 0.80 × 1.00 × (1 − 0.25)
= 0.05 + 0.60
= 0.65

output alpha
= 0.25 + 1.00 × (1 − 0.25)
= 1.00

output straight red
= 0.65 ÷ 1.00
= 0.65
```

The operation is then repeated for green and blue:

```text
green = 0.65 × 0.25 + 0.25 × 0.75 = 0.35
blue  = 1.00 × 0.25 + 0.60 × 0.75 = 0.70
```

The final output is:

```text
Straight sRGB RGBA(0.65, 0.35, 0.70, 1.00)
```

The lesson distinguishes:

- tint amount from final output alpha;
- tint from complete replacement;
- tint as a color-changing operation from luminance as a later measurement;
- this explicit source-over tint model from other APIs that may also use the word `tint`.

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter03/TintExplorer.kt
```

Lesson 3.8 is complete only when:

- [ ] The Android files compile and run on the Pixel 8 Pro.
- [ ] Both preview levels render in light and dark modes.
- [ ] The learner can identify destination, tint source, and output.
- [ ] The learner can explain why tint amount is source alpha.
- [ ] The learner can reproduce the default red, green, and blue output values.
- [ ] The learner can explain why output alpha remains `1.00`.
- [ ] The learner can distinguish tint from replacement, final opacity, luminance, and saturation.
- [ ] The learner can explain why luminance and contrast are recalculated after tint.
- [ ] The coding challenge and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 25 of 216.
Next lesson becomes 3.9 — Saturation.
```

## 12F. Lesson 3.9 implementation record

### `lesson-03-09-saturation.html`

**New graphics idea:** Saturation is taught as one exact AndroidX color transformation, not as a vague synonym for “more colorful.” No new layer is drawn.

**Mathematical idea:** Calculate one gray-reference channel value, then scale each channel's signed distance from that reference.

The lesson starts from the completed Lesson 3.8 output:

```text
Input straight sRGB RGBA:
(0.65, 0.35, 0.70, 1.00)
```

The AndroidX saturation gray reference is:

```text
gray
= 0.213 × 0.65
+ 0.715 × 0.35
+ 0.072 × 0.70

= 0.13845 + 0.25025 + 0.05040

= 0.43910
```

For each channel:

```text
signed distance = input channel − gray
scaled distance = saturation factor × signed distance
pre-clamp matrix result = gray + scaled distance
```

At factor `0.40`:

```text
red output   = 0.43910 + 0.40 × (0.65 − 0.43910) = 0.52346
green output = 0.43910 + 0.40 × (0.35 − 0.43910) = 0.40346
blue output  = 0.43910 + 0.40 × (0.70 − 0.43910) = 0.54346
```

The output remains opaque:

```text
Straight sRGB RGBA(0.52346, 0.40346, 0.54346, 1.00)
```

The lesson proves these factor regions:

- `0`: all three output channels equal the gray reference;
- `0 < factor < 1`: each absolute distance from gray becomes smaller;
- `1`: identity; output RGB equals input RGB;
- `factor > 1`: each distance grows in the same signed direction;
- sufficiently large factors can create pre-clamp values outside `0..1`, which are clamped before display.

The lesson explicitly separates two similar-looking calculations:

```text
Saturation gray reference:
stored straight sRGB → 0.213R + 0.715G + 0.072B → one transform value

Relative luminance:
stored straight sRGB → sRGB decoding → linear-light RGB → 0.2126R + 0.7152G + 0.0722B → one measurement
```

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter03/SaturationExplorer.kt
```

Lesson 3.9 is complete only when:

- [ ] The Android files compile and run on the Pixel 8 Pro.
- [ ] Both complete-screen and direct-child previews render in light and dark modes.
- [ ] The learner can define the saturation factor and gray reference without calling the reference relative luminance.
- [ ] The learner can reproduce the default gray reference `0.43910`.
- [ ] The learner can calculate red, green, and blue at factor `0.40`.
- [ ] The learner can prove what factors `0`, below `1`, equal to `1`, and above `1` do.
- [ ] The learner can explain the pre-clamp matrix result versus the final clamped display output.
- [ ] The learner can explain why alpha remains unchanged and why a future translucent result still requires compositing.
- [ ] The learner can recalculate relative luminance and contrast from the transformed output rather than reuse input measurements.
- [ ] The coding challenge and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 26 of 216.
Next lesson becomes 3.10 — Blend modes.
```

## 12G. Lesson 3.11 implementation record

### `lesson-03-11-compositing-laboratory.html`

**New graphics idea:** Several completed color operations can be treated as one ordered stack. The current output after each stage is the running composite. The next draw consumes that value as its destination.

**New mathematical idea:** None. The lesson repeats completed source-over, saturation, opaque blend-mode, luminance, and contrast calculations in a strict order.

The default inputs are:

```text
base = straight sRGB RGBA(0.22, 0.58, 0.76, 1.00)
Layer A = straight sRGB RGBA(0.90, 0.10, 0.80, 0.50)
Layer B = straight sRGB RGBA(0.20, 0.65, 1.00, 0.25)
saturation factor = 0.40
top source = straight sRGB RGBA(0.84, 0.36, 0.18, 1.00)
top blend mode = Multiply
```

The default stage outputs are:

```text
after Layer A = (0.560000, 0.340000, 0.780000, 1.000000)
after Layer B = (0.470000, 0.417500, 0.835000, 1.000000)
after saturation = (0.463246, 0.442245, 0.609246, 1.000000)
final after Multiply = (0.389126, 0.159208, 0.109664, 1.000000)
```

The interactive laboratory includes:

- three opaque base presets;
- enable and alpha controls for Layer A and Layer B;
- A-then-B and B-then-A order controls;
- saturation enable and factor controls;
- opaque top enable and mode controls;
- a five-stage swatch strip;
- a compact manual stepper that follows red;
- dynamic final luminance and contrast;
- a Multiply-versus-Screen prediction;
- provenance controls;
- a coding challenge that replaces `destination = base` with `destination = running`.

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter03/Chapter03Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter03/CompositingLaboratory.kt
```

The Android Canvas comparison executes the selected final `BlendMode` over a uniform calculated destination. The expected solid-interior output is calculated separately. No pixel readback is performed.

Lesson 3.11 is complete only when:

- [ ] The Android files compile and run on the Pixel 8 Pro.
- [ ] Both complete-screen and direct-child previews render in light and dark modes.
- [ ] The learner can define the running composite.
- [ ] The learner can reproduce Layer A red `0.56` and Layer B red `0.47`.
- [ ] The learner can explain why the second middle layer consumes the first middle output.
- [ ] The learner can explain why reversing Layer A and Layer B changes the result.
- [ ] The learner can identify the exact saturation-stage input.
- [ ] The learner can list the conditions that make the opaque top-blend formula complete.
- [ ] Final luminance and contrast are recalculated from the final RGB.
- [ ] The prediction, coding challenge, and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 28 of 216.
Chapter 3 becomes complete.
Next lesson becomes 4.1 — Rectangles and circles.
```

## 13. Reusable continuation prompt

```text
We are continuing my “Liquid Glass on Android” beginner-to-expert course.

Read these two files first:
1. liquid_glass_android_curriculum.md
2. liquid_glass_android_handoff.md

Assume I am a senior web engineer and an absolute beginner in mathematics, graphics programming, shaders, GPU concepts, and Android rendering internals.

Use the beginner-first formula-reveal gate. Start from a previously taught object and state the practical question before new vocabulary. Do not show a formula until every input, output, range, representation, purpose, and next consumer is clear. Trace one channel before three. Cold-read the first two sections and reject any first sentence that contains an undefined essential term.

Use simple English. Define each new graphics or math term at first use. Use short sentences. Explain one actual value through input → operation → output.
At the end of every response, state `Course progress: X of 216 lessons completed.` using learner-confirmed completion only. Then include a clearly labelled best-effort estimate of the remaining conversation context window in tokens. State that the number is approximate.

Course file rules:
- The master curriculum is a plan. Do not put full lessons into it.
- Deliver only incremental ZIPs containing files created or modified for the current lesson. Preserve paths beneath `liquid-glass-learning-docs/` and `LiquidGlassLab/`. Do not include cumulative copies unless explicitly requested.
- Every chapter hub is named `lesson-[chapter-name].html`; do not create generic chapter `index.html` files.
- Every sub-lesson has one standalone interactive HTML file named `lesson-[chapter-number]-[lesson-number]-[lesson-name].html`.
- HTML must work from file:// with inline CSS, JavaScript, SVG, Canvas, or WebGL2.
- Desktop only. Lessons 1.1–2.9 remain legacy light-only files. Starting with Lesson 3.1, follow the OS light/dark preference automatically and verify both modes at 1920×1080 or larger.
- Use 5120×1440 for an intentionally ultrawide explanation.
- Use a manual stepper before any free-running sequence animation.
- Use interactive SVG for math-heavy geometry.
- Use Canvas or WebGL2 when per-pixel behavior needs a real visual model.
- Clearly label browser approximations. Android behavior must be tested on the Pixel 8 Pro.
- Kotlin and AGSL source lives in the separate Android project. Quote the relevant lines, state the target path, and provide the complete changed file or patch beside the lesson delivery.
- Do not explicitly import `androidx.compose.foundation.layout.weight` or `androidx.compose.foundation.layout.matchParentSize`; use those member extensions only inside their `RowScope`/`ColumnScope` or `BoxScope`.
- Put both a complete chapter-screen preview and a direct active-child preview in the chapter screen file. For Lesson 3.1 and later, provide light and dark variants for both.
- Include at least one small coding challenge before the final exercises. End each lesson with two to four exercises and hidden answers.
- Provide a copyable lesson record for the handoff.
- Do not use a third-party glass library for the main implementation.
- Do not claim to know Apple’s private implementation.

Chapter 3 and later color-compositing rules:
- Use `straight RGBA` and `premultiplied RGBA` as the representation names. Do not rely on `ordinary RGBA`.
- Label every RGB tuple as straight or premultiplied when alpha matters.
- Teach the complete source-over formula with destination alpha before an opaque-destination shortcut.
- Use `output premultiplied RGB` and `output straight RGB` as the precise Lesson 3.3 terms.
- Explain which API or buffer contract expects each representation.
- Reconcile every new representation term with the preceding lesson and trace the same concrete values across the boundary.

For a color transformation, state the exact API or mathematical contract. Do not treat a saturation gray reference as relative luminance merely because the coefficients look similar. Name the input representation, output type, preprocessing, and next consumer. Prove factors from signed distances and recalculate downstream luminance and contrast from changed RGB.

Read the current progress in the handoff.

If the current lesson file is missing, generate that one lesson file and any Android source it needs.
If the lesson exists but the checkpoint is incomplete, review my result and teach the next smallest missing step.
If the checkpoint is complete, update the handoff and move to the next lesson.

Do not jump to the Safari menu capstone.

CURRENT CODE, SCREENSHOT, OBSERVATION, OR ERROR:
[paste here]
```

---

## 14. Generated artifact status

The repository has been delivered cumulatively through Lesson 1.3. Starting with Lesson 1.4, only incremental changed-file archives are produced.

Learner completion is confirmed through Lesson 4.5. Chapters 1, 2, and 3 are complete. Chapter 4 is in progress. Lesson 4.6 is generated and pending. The learner-confirmed total is 33 of 216 lessons.

Current Chapter 2 lesson files:

- `course/chapters/chapter-02/lesson-the-screen-is-a-grid.html`;
- `course/chapters/chapter-02/lesson-02-01-what-a-pixel-is.html`;
- `course/chapters/chapter-02/lesson-02-02-the-x-axis.html`;
- `course/chapters/chapter-02/lesson-02-03-the-y-axis.html`;
- `course/chapters/chapter-02/lesson-02-04-width-height-edges-and-center.html`;
- `course/chapters/chapter-02/lesson-02-05-pixels-dp-and-density.html`;
- `course/chapters/chapter-02/lesson-02-06-local-coordinates.html`;
- `course/chapters/chapter-02/lesson-02-07-parent-window-and-screen-coordinates.html`;
- `course/chapters/chapter-02/lesson-02-08-normalized-coordinates.html`;
- `course/chapters/chapter-02/lesson-02-09-build-a-coordinate-inspector.html`.

Current cumulative Chapter 2 Android source:

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/
├── MainActivity.kt
└── chapter02/
    ├── Chapter02Screen.kt
    ├── EnlargedPixelGrid.kt
    ├── XAxisExplorer.kt
    ├── YAxisExplorer.kt
    ├── BoundsCenterExplorer.kt
    ├── DensityExplorer.kt
    ├── LocalCoordinatesExplorer.kt
    ├── ParentScreenCoordinatesExplorer.kt
    ├── NormalizedCoordinatesExplorer.kt
    └── CoordinateInspector.kt
```

The Lesson 2.9 Android ZIP contains only `Chapter02Screen.kt` and the new `CoordinateInspector.kt`. Earlier Chapter 2 files are unchanged and are not duplicated.

Current Chapter 3 lesson files:

- `course/chapters/chapter-03/lesson-color-opacity-and-compositing.html`;
- `course/chapters/chapter-03/lesson-03-01-red-green-and-blue-channels.html`;
- `course/chapters/chapter-03/lesson-03-02-alpha.html`;
- `course/chapters/chapter-03/lesson-03-03-the-over-operation.html`;
- `course/chapters/chapter-03/lesson-03-04-draw-order-matters.html`;
- `course/chapters/chapter-03/lesson-03-05-straight-and-premultiplied-rgba.html`;
- `course/chapters/chapter-03/lesson-03-05-why-transparent-edges-can-look-wrong.html` (redirect only);
- `course/chapters/chapter-03/lesson-03-06-brightness-and-relative-luminance.html`;
- `course/chapters/chapter-03/lesson-03-07-foreground-contrast.html`;
- `course/chapters/chapter-03/lesson-03-08-tint.html`;
- `course/chapters/chapter-03/lesson-03-09-saturation.html`;
- `course/chapters/chapter-03/lesson-03-10-blend-modes.html`;
- `course/chapters/chapter-03/lesson-03-11-compositing-laboratory.html`.

Current generated Chapter 3 Android source:

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/
├── MainActivity.kt
└── chapter03/
    ├── Chapter03Screen.kt
    ├── RgbChannelsExplorer.kt
    ├── AlphaExplorer.kt
    ├── OverOperationExplorer.kt
    ├── DrawOrderExplorer.kt
    ├── PremultipliedRgbaExplorer.kt
    ├── BrightnessLuminanceExplorer.kt
    ├── ForegroundContrastExplorer.kt
    ├── TintExplorer.kt
    ├── SaturationExplorer.kt
    ├── BlendModesExplorer.kt
    ├── CompositingLaboratory.kt
    └── TransparentEdgeExplorer.kt  # compatibility wrapper
```

The Lesson 3.11 Android ZIP contains only `Chapter03Screen.kt` and new `CompositingLaboratory.kt`. Earlier Chapter 3 explorers remain unchanged and are not duplicated.

Current Chapter 4 lesson files:

- `course/chapters/chapter-04/lesson-shapes-corners-paths-and-masks.html`;
- `course/chapters/chapter-04/lesson-04-01-rectangles-and-circles.html`;
- `course/chapters/chapter-04/lesson-04-02-rounded-rectangles.html`;
- `course/chapters/chapter-04/lesson-04-03-capsules.html`;
- `course/chapters/chapter-04/lesson-04-04-concentric-corners.html`;
- `course/chapters/chapter-04/lesson-04-05-paths.html`;
- `course/chapters/chapter-04/lesson-04-06-cubic-bezier-curves.html`.

Current generated Chapter 4 Android source:

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/
├── MainActivity.kt
└── chapter04/
    ├── Chapter04Screen.kt
    ├── RectanglesCirclesExplorer.kt
    ├── RoundedRectanglesExplorer.kt
    ├── CapsulesExplorer.kt
    ├── ConcentricCornersExplorer.kt
    ├── PathsExplorer.kt
    └── CubicBezierExplorer.kt
```

The Lesson 4.6 Android ZIP contains only `Chapter04Screen.kt` and new `CubicBezierExplorer.kt`. Earlier Chapter 4 explorers and `MainActivity.kt` are unchanged and are not duplicated.

---

## 15. Primary references

The course plan was checked against these public primary sources through 2026-07-30:

- Apple, **Meet Liquid Glass**, WWDC25: https://developer.apple.com/videos/play/wwdc2025/219/
- Apple, **Get to know the new design system**, WWDC25: https://developer.apple.com/videos/play/wwdc2025/356/
- Apple, **Platforms State of the Union**, WWDC26, Liquid Glass refinements: https://developer.apple.com/videos/play/wwdc2026/112/
- Apple Human Interface Guidelines, **Materials**: https://developer.apple.com/design/human-interface-guidelines/materials
- Apple Human Interface Guidelines, **Color**: https://developer.apple.com/design/human-interface-guidelines/color
- Android, **RuntimeShader**: https://developer.android.com/reference/android/graphics/RuntimeShader
- Android, **RenderEffect**: https://developer.android.com/reference/android/graphics/RenderEffect
- Android, **Brush: gradients and shaders**: https://developer.android.com/develop/ui/compose/graphics/draw/brush
- Android, **Compose layout basics**: https://developer.android.com/develop/ui/compose/layouts/basics
- Android, **Window insets in Compose**: https://developer.android.com/develop/ui/compose/system/insets
- Android, **Using AGSL in your Android app**: https://developer.android.com/develop/ui/views/graphics/agsl/using-agsl
- Android, **Graphics modifiers**: https://developer.android.com/develop/ui/compose/graphics/draw/modifiers
- Android, **Compose modifier list**: https://developer.android.com/develop/ui/compose/modifiers-list
- Android, **Compose LayoutCoordinates reference**: https://developer.android.com/reference/kotlin/androidx/compose/ui/layout/LayoutCoordinates
- AndroidX Compose, **Path reference**: https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/Path
- Android, **Compose graphics drawing overview**: https://developer.android.com/develop/ui/compose/graphics/draw/overview
- Android, **Compose OnGloballyPositionedModifier reference**: https://developer.android.com/reference/kotlin/androidx/compose/ui/layout/OnGloballyPositionedModifier
- Android, **Compose DrawScope reference**: https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/drawscope/DrawScope
- Android, **Graphics in Compose — basic shapes**: https://developer.android.com/develop/ui/compose/graphics/draw/overview
- Android, **Compose Rect reference**: https://developer.android.com/reference/kotlin/androidx/compose/ui/geometry/Rect
- Android, **Bitmap.isPremultiplied**: https://developer.android.com/reference/android/graphics/Bitmap#isPremultiplied()
- Android, **Bitmap.setPremultiplied**: https://developer.android.com/reference/android/graphics/Bitmap#setPremultiplied(boolean)
- Android, **Compose Color reference**: https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/Color
- AndroidX, **Compose ColorMatrix source**: https://raw.githubusercontent.com/androidx/androidx/androidx-main/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/ColorMatrix.kt
- Android, **Customize an image — ColorMatrix filter**: https://developer.android.com/develop/ui/compose/graphics/images/customize
- Android, **ColorMatrix reference**: https://developer.android.com/reference/kotlin/android/graphics/ColorMatrix
- Android, **Compose Slider**: https://developer.android.com/develop/ui/compose/components/slider
- Android, **Material Design 3 in Compose**: https://developer.android.com/develop/ui/compose/designsystems/material3
- Android, **Compose onSizeChanged reference**: https://developer.android.com/reference/kotlin/androidx/compose/ui/layout/onSizeChanged.modifier
- Android, **Compose gestures reference**: https://developer.android.com/reference/kotlin/androidx/compose/foundation/gestures/package-summary
- Android, **Understand gestures and raw pointer events**: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures
- Android, **Compose Color reference**: https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/Color
- AndroidX, **Compose ColorMatrix source**: https://raw.githubusercontent.com/androidx/androidx/androidx-main/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/ColorMatrix.kt
- Android, **Customize an image — ColorMatrix filter**: https://developer.android.com/develop/ui/compose/graphics/images/customize
- Android, **ColorMatrix reference**: https://developer.android.com/reference/kotlin/android/graphics/ColorMatrix
- Android, **Compose BlendMode reference**: https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/BlendMode
- Android, **Platform BlendMode reference**: https://developer.android.com/reference/android/graphics/BlendMode
- AndroidX source, **Color.compositeOver implementation**: https://github.com/androidx/androidx/blob/androidx-main/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
- Android, **Constraints and modifier order**: https://developer.android.com/develop/ui/compose/layouts/constraints-modifiers
- Android, **GraphicsLayer**: https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/layer/GraphicsLayer
- Android, **Create a project**: https://developer.android.com/studio/projects/create-project
- Android, **Jetpack Compose quick start**: https://developer.android.com/develop/ui/compose/setup
- Android, **Run apps on a hardware device**: https://developer.android.com/studio/run/device
- Android, **Configure on-device developer options**: https://developer.android.com/studio/debug/dev-options
- Android, **Android Debug Bridge**: https://developer.android.com/tools/adb


## 12H. Historical Lesson 3.9 clarification record — matrix stages, alpha, and provenance

This clarification was produced while Lesson 3.9 was unresolved. Lesson 3.9 is now learner-confirmed complete. The clarification revision adds:

- `matrix result before clamping` as the precise replacement for ambiguous `raw RGB` or `raw channel`;
- an explicit pre-clamp → clamp → final-channel trace;
- a complete 4×5 ColorMatrix contract, including all four input multipliers and the fifth offset;
- proof that the saturation alpha row `[0, 0, 0, 1, 0]` is an identity row selected by `setToSaturation`, not a universal ColorMatrix rule;
- a separate translucent-source experiment: saturation transform → source-over opaque destination → final visible RGB → luminance and contrast;
- a contrast-repair decision path relevant to later Liquid Glass material stabilization;
- click-controlled provenance icons for inherited, user-controlled, fixed, and derived values;
- removal of complete Android source viewers from Lesson 3.9 and generated-ahead Lesson 3.10. Complete source remains in Android Studio and the Android ZIP.

Future lesson HTML must not contain complete source-file tabs. Use only the exact code excerpt needed by an explanation or challenge.

## 12I. Lesson 4.1 implementation record

### `lesson-04-01-rectangles-and-circles.html`

**New graphics idea:** A rectangle and a circle use different geometry inputs. The lesson supplies rectangle top-left plus size and derives its four bounds. It supplies a circle as center plus radius.

**Mathematical idea:** Add or subtract the radius once to reach each circle extreme. Multiply the radius by two to obtain the diameter.

The browser reset values use SVG-local teaching units:

```text
Rectangle:
left = 80
top = 70
width = 240
height = 150
right = 80 + 240 = 320
bottom = 70 + 150 = 220

Circle:
center = (520, 145)
radius = 75
diameter = 2 × 75 = 150
leftmost = 520 − 75 = 445
rightmost = 520 + 75 = 595
topmost = 145 − 75 = 70
bottommost = 145 + 75 = 220
```

The orange enclosing square has the same width and height as the diameter. It is a separate rectangle used to expose the circle's extreme positions. Its four corner regions do not belong to the circle.

The Android explorer uses a fixed `320.dp × 220.dp` drawing surface. Compose converts the dp requests to Canvas-local px at runtime. The explorer draws:

```text
drawRect(topLeft, size)
drawCircle(center, radius)
optional drawRect(circle enclosing square)
```

`onSizeChanged` records the measured Canvas dimensions in px. The lesson does not claim that Canvas-local px always maps one-to-one to physical display pixels after every later transform.

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/MainActivity.kt
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/RectanglesCirclesExplorer.kt
```

Lesson 4.1 is complete only when:

- [ ] The Android patch builds and opens Chapter 4 on the Pixel 8 Pro.
- [ ] Full-screen and direct-child previews render in light and dark modes.
- [ ] The learner can name every rectangle input and derive right and bottom.
- [ ] The learner can define center, radius, diameter, and the four circle extremes.
- [ ] The learner can explain why the enclosing square is not the circle.
- [ ] The learner can keep SVG teaching units, dp, Canvas-local px, and physical display pixels separate.
- [ ] The prediction, coding challenge, and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 29 of 216.
Next lesson becomes 4.2 — Rounded rectangles.
```

## 12J. Lesson 4.2 implementation record

### `lesson-04-02-rounded-rectangles.html`

**New graphics idea:** A rounded rectangle keeps the original rectangle bounds and replaces each sharp corner with one curved boundary piece.

**Mathematical idea:** Add the radius once to locate each corner-curve center and join point. Subtract the radius at both ends to calculate each remaining straight span.

The browser reset geometry is:

```text
left = 120
top = 80
width = 520
height = 260
right = 640
bottom = 340
corner radius = 50
maximum controlled radius = 130
```

The top-left corner trace is:

```text
sharp corner = (120, 80)
curve center X = left + radius = 120 + 50 = 170
curve center Y = top + radius = 80 + 50 = 130
curve center = (170, 130)
top join = (170, 80)
left join = (120, 130)
```

The remaining straight spans are:

```text
top straight length
= width - radius - radius
= 520 - 50 - 50
= 420

side straight length
= height - radius - radius
= 260 - 50 - 50
= 160
```

The browser model includes one radius slider, five exact presets, a horizontally constrained radius handle, the original sharp rectangle, the top-left construction square and circle, all four curve centers, both top-left join points, synchronized external coordinate readouts, direct pink highlighting of the remaining top and side straight boundary, live span calculations, an eight-step derivation, a prediction, a coding challenge, four exercises, and a copyable completion record. The primary SVG is capped at `820 × 430` CSS pixels and remains beside its controls at the 1920-pixel desktop target.

The Android explorer uses:

```text
drawing surface = 320.dp × 240.dp
rectangle left = 24.dp
rectangle top = 36.dp
rectangle width = 272.dp
rectangle height = 168.dp
initial radius = 32.dp
maximum radius = 84.dp
```

The Android implementation compares:

```text
RoundedCornerShape(cornerRadiusDp.dp)
```

with:

```text
val radiusPx = cornerRadiusDp.dp.toPx()

drawRoundRect(
    topLeft = rectangleTopLeft,
    size = rectangleSize,
    cornerRadius = CornerRadius(radiusPx, radiusPx),
)
```

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/RoundedRectanglesExplorer.kt
```

Lesson 4.2 is complete only when:

- [ ] The Android patch builds and opens Lesson 4.2 on the Pixel 8 Pro.
- [ ] Full-screen and direct-child previews render in light and dark modes.
- [ ] The learner can explain why the outer bounds remain fixed.
- [ ] The learner can calculate one corner curve center.
- [ ] The learner can calculate the two join points for one corner.
- [ ] The learner can calculate the remaining top and side straight spans.
- [ ] The learner can explain why the controlled maximum is half the shorter side.
- [ ] The prediction, coding challenge, and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 30 of 216.
Next lesson becomes 4.3 — Capsules.
```

## 12K. Lesson 4.3 implementation record

### `lesson-04-03-capsules.html`

**New graphics idea:** A horizontal capsule is a rounded-rectangle boundary whose two short ends are semicircles.

**Mathematical idea:** Derive radius from height so the remaining vertical straight side becomes zero.

The browser reset geometry is:

```text
left = 120
center Y = 210
height = 260
width = 520
radius = height / 2 = 130
```

The capsule derivation is:

```text
vertical straight side
= height - radius - radius

0 = 260 - radius - radius
2 * radius = 260
radius = 130
```

The rounded-end centers are:

```text
left end center = (120 + 130, 210) = (250, 210)
right edge = 120 + 520 = 640
right end center = (640 - 130, 210) = (510, 210)
```

The remaining long straight span is:

```text
width - radius - radius
= 520 - 130 - 130
= 260
= width - height
```

The browser model keeps height fixed and varies width from `260` through `600`. It includes a width slider, four exact presets, a horizontal drag handle, optional construction circles and center line, external live geometry readouts, an eight-step derivation, three boundary comparisons, a prediction, a coding challenge, four hidden-answer exercises, and a copyable completion record. The primary SVG is capped at `820 × 430` CSS pixels.

At width `260`, width equals height. The two rounded-end centers meet, all straight spans reach zero, and the boundary becomes a circle. The lesson calls this the **circle limit**. The browser uses one `L = R` marker in that state rather than overlapping the two center labels.

The Android explorer uses:

```text
fixed height = 120.dp
adjustable width = 120.dp through 280.dp
reset width = 240.dp
derived radius = 60.dp
reset long straight span = 120.dp
```

At the Android circle limit, both end-guide circles describe the same geometry, so the Canvas overlay draws the visible guide circle and center once.

The Android implementation applies the same derived radius to both APIs:

```text
val capsuleRadiusDp = CapsuleHeightDp / 2f
val capsuleShape = RoundedCornerShape(capsuleRadiusDp.dp)
```

and:

```text
val heightPx = CapsuleHeightDp.dp.toPx()
val radiusPx = heightPx / 2f

drawRoundRect(
    topLeft = capsuleTopLeft,
    size = capsuleSize,
    cornerRadius = CornerRadius(radiusPx, radiusPx),
)
```

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/CapsulesExplorer.kt
```

Lesson 4.3 is complete only when:

- [ ] The Android patch builds and opens Lesson 4.3 on the Pixel 8 Pro.
- [ ] Full-screen and direct-child previews render in light and dark modes.
- [ ] The learner can define a capsule and a semicircle.
- [ ] The learner can derive radius from height.
- [ ] The learner can prove why the vertical straight side is zero.
- [ ] The learner can calculate the long straight span as width minus height.
- [ ] The learner can explain the circle limit.
- [ ] The prediction, coding challenge, and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 31 of 216.
Next lesson becomes 4.4 — Concentric corners.
```



## 12L. Lesson 4.4 implementation record

### `lesson-04-04-concentric-corners.html`

**New graphics idea:** Two circular corner curves are concentric when they share one center point.

**Mathematical idea:** When matching inner edges move inward by one uniform padding value, subtract that value from the outer radius to preserve the corner center.

Browser reset geometry:

```text
outer left = 110
outer top = 35
outer width = 600
outer height = 360
outer radius = 90
uniform padding = 30
```

The known outer top-left center is:

```text
outer center X = 110 + 90 = 200
outer center Y = 35 + 90 = 125
```

The inner bounds are:

```text
inner left = 110 + 30 = 140
inner top = 35 + 30 = 65
inner width = 600 - 30 - 30 = 540
inner height = 360 - 30 - 30 = 300
```

The shared-center requirement derives the radius:

```text
horizontal inner radius = 200 - 140 = 60
vertical inner radius = 125 - 65 = 60

inner radius = outer radius - uniform padding
             = 90 - 30
             = 60
```

The correct inner center is:

```text
(140 + 60, 65 + 60) = (200, 125)
```

Copying the outer radius creates:

```text
wrong inner center = (140 + 90, 65 + 90)
                   = (230, 155)
center shift = (+30, +30)
```

The browser model includes:

- a padding slider from `0` through `90`;
- exact padding presets;
- a concentric mode and a copied-radius defect mode;
- optional construction circles and radius lines;
- synchronized external bounds, radius, center, shift, and status readouts;
- a compact eight-step corner derivation;
- a padding-change prediction;
- a coding challenge that repairs a copied radius;
- four hidden-answer exercises;
- a copyable completion record.

The primary diagram is capped at `820 × 430` CSS pixels. Full coordinate text remains outside the geometry.

At padding equal to the outer radius, the inner radius becomes zero and the inner corner becomes sharp. Padding beyond the outer radius would require a negative circular radius, so the controlled concentric-curve contract ends there.

Android values:

```text
Canvas = 320.dp × 280.dp
outer left = 20.dp
outer top = 28.dp
outer width = 280.dp
outer height = 224.dp
outer radius = 56.dp
reset padding = 20.dp
reset inner radius = 36.dp
shared top-left center = (76.dp, 84.dp)
```

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/ConcentricCornersExplorer.kt
```

The Android explorer applies the same derived radius to `RoundedCornerShape` and `drawRoundRect`. It also includes a deliberate copied-radius mode so the center shift can be inspected directly.

Lesson 4.4 is complete only when:

- [ ] The Android files compile and run on the Pixel 8 Pro.
- [ ] Both preview levels render in light and dark modes.
- [ ] The learner can define concentric corner curves and uniform padding.
- [ ] The learner can calculate the inner bounds.
- [ ] The learner can derive the inner radius from the shared center.
- [ ] The learner can explain the copied-radius defect.
- [ ] The learner can explain the radius-zero boundary.
- [ ] The prediction, coding challenge, and exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 32 of 216.
Next lesson becomes 4.5 — Paths.
```

## 12M. Lesson 4.5 implementation record

### `lesson-04-05-paths.html`

**New graphics idea:** A path is an ordered list of geometric instructions that can describe a custom boundary.

**Mathematical idea:** The endpoint of one straight segment becomes the starting point of the next straight segment.

The browser reset points are:

```text
A = (120, 90)
B = (520, 90)
C = (650, 215)
D = (520, 340)
E = (120, 340)
```

The command sequence is:

```text
Path()
moveTo(A)
lineTo(B)
lineTo(C)
lineTo(D)
lineTo(E)
close()
```

The command meanings are:

```text
moveTo(A)
→ set current point to A
→ add no visible segment

lineTo(B)
→ append A → B
→ set current point to B

close()
→ append stored segment E → A
→ make the explicit boundary closed
```

The main value trace is:

```text
current point B = (520, 90)
target C = (650, 215)
operation = lineTo(C)
output segment = B → C
new current point = C
```

Point C is shared by B → C and C → D. Moving C changes those two segments and leaves A → B, D → E, and E → A fixed.

The browser model includes:

- seven exact sequence states from an empty path through `close()`;
- Back, Next, direct-step, and reset controls;
- an adjustable point-C X coordinate with exact presets;
- empty, open, and closed boundary states;
- an explicit missing E → A guide before closure;
- a teaching fill revealed after explicit closure;
- an explicit comparison between stored closure, stroke output, and fill-style implicit closure;
- short A-through-E labels inside the SVG;
- synchronized external current-point, segment-count, and boundary-status readouts;
- a prediction, coding challenge, four hidden-answer exercises, and completion record.

The primary SVG is capped at `820 × 430` CSS pixels.

Android reset values:

```text
Canvas = 320.dp × 220.dp
A = (28.dp, 32.dp)
B = (220.dp, 32.dp)
C = (280.dp, 110.dp)
D = (220.dp, 188.dp)
E = (28.dp, 188.dp)
```

The Android implementation converts the dp coordinates to Canvas-local px, builds or reuses one `Path` for the current command step, and draws it with `drawPath`:

```text
dp coordinates
→ LocalDensity conversion
→ moveTo / lineTo / close
→ Path object for the current step
→ teaching fill revealed after explicit closure
→ drawPath inspection stroke from stored segments
```

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/PathsExplorer.kt
```

Lesson 4.5 is complete only when:

- [ ] The Android files compile and run on the Pixel 8 Pro.
- [ ] Both preview levels render in light and dark modes.
- [ ] The learner can define path, current point, segment, and closed boundary.
- [ ] The learner can explain why `moveTo` adds no segment.
- [ ] The learner can trace one `lineTo` operation.
- [ ] The learner can identify the segment added by `close()`.
- [ ] The learner can explain why moving C changes two adjacent segments.
- [ ] The prediction, coding challenge, and exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 33 of 216.
Next lesson becomes 4.6 — Cubic Bézier curves.
```

## 12N. Lesson 4.6 implementation record

### `lesson-04-06-cubic-bezier-curves.html`

**New graphics idea:** A cubic Bézier curve is one curved Path segment defined by one start endpoint, two control points, and one end endpoint.

**Mathematical idea:** One exact point at halfway can be calculated by repeatedly taking midpoints. The general progress-based curve equation remains deferred until Chapter 5 teaches progress and linear interpolation.

Browser reset geometry:

```text
start     = (120, 300)
control 1 = (280, 100)
control 2 = (540, 100)
end       = (700, 300)
```

Path command trace:

```text
moveTo(start)
→ current point = start

cubicTo(control 1, control 2, end)
→ append one curved segment
→ new current point = end
```

The start and end are guaranteed points on the visible curve. The two control points guide its shape and usually remain outside the visible curve. The dashed endpoint-to-control lines are teaching overlays, not stored path segments.

Halfway construction:

```text
A = midpoint(start, control 1) = (200, 200)
B = midpoint(control 1, control 2) = (410, 100)
C = midpoint(control 2, end) = (620, 200)

D = midpoint(A, B) = (305, 150)
E = midpoint(B, C) = (515, 150)

M = midpoint(D, E) = (410, 150)
```

The straight start-to-end midpoint is `(410, 300)`. The curve midpoint is `(410, 150)`.

The browser model includes:

- draggable start, control 1, control 2, and end markers;
- keyboard arrow movement for each focused marker;
- exact arch, straight, S-shaped, and valley presets;
- optional control guides, straight-line comparison, and repeated-halfway construction;
- shape-plus-color markers and external synchronized coordinate readouts;
- a seven-step exact halfway derivation;
- a prediction, coding challenge, four hidden-answer exercises, and completion record.

The primary SVG is capped at `820 × 430` CSS pixels.

Android reset geometry:

```text
Canvas = 320.dp × 240.dp
start = (24.dp, 190.dp)
control 1 = (92.dp, 46.dp)
control 2 = (228.dp, 46.dp)
end = (296.dp, 190.dp)
halfway curve point = (160.dp, 82.dp)
```

Android value path:

```text
dp point inputs
→ runtime density conversion to Canvas-local px
→ Path.moveTo(start)
→ Path.cubicTo(control1, control2, end)
→ drawPath(curve Path)
```

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/CubicBezierExplorer.kt
```

Lesson 4.6 is complete only when:

- [ ] The Android files compile and run on the Pixel 8 Pro.
- [ ] Both preview levels render in light and dark modes.
- [ ] The learner can define start endpoint, control point, end endpoint, and cubic Bézier curve.
- [ ] The learner can explain why the start is not repeated inside `cubicTo`.
- [ ] The learner can identify which point becomes current after `cubicTo`.
- [ ] The learner can reproduce the repeated-midpoint result `(410, 150)`.
- [ ] The learner can explain why control guides are not stored path segments.
- [ ] The straight-boundary preset, prediction, coding challenge, and exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 34 of 216.
Next lesson becomes 4.7 — Clipping.
```

## 12O. Lesson 4.7 implementation record

### `lesson-04-07-clipping.html`

**New graphics idea:** Clipping temporarily restricts where selected draw commands may replace the destination.

**Mathematical idea:** A clearly inside or clearly outside drawing position follows one yes-or-no clip decision. Boundary coverage and gradual values remain deferred.

Browser badge Path:

```text
A = (120, 90)
B = (520, 90)
C = (650, 215)
D = (520, 340)
E = (120, 340)
close()
```

The same oversized opaque pattern is used with clipping off and on. The amber band supplies this candidate color at both fixed trace points:

```text
straight sRGB RGBA(0.8510, 0.4667, 0.0235, 1.0000)
```

The existing teaching background is:

```text
straight sRGB RGBA(0.9451, 0.9608, 0.9765, 1.0000)
```

Point trace:

```text
I = (300, 230)
I lies inside the rectangular core X 120..520, Y 90..340
→ clip allows the opaque amber candidate
→ final output at I = amber

O = (720, 230)
badge rightmost X = 650
720 > 650
→ O is outside
→ clip rejects the current candidate draw
→ final output at O = earlier background
```

The clip does not erase earlier content. A rejected draw simply does not replace the destination at that position.

The browser model includes:

- clipping-on and clipping-off modes using the same content commands;
- inside and outside trace-point presets;
- clip-outline, candidate-bounds, and post-clip evidence toggles;
- a decorative-content shift that leaves the Path fixed;
- a six-step draw-order sequence;
- a scope prediction;
- a coding challenge that moves `drawOversizedPattern()` inside `clipPath(badgePath) { ... }`;
- four hidden-answer exercises and a completion record.

Both primary SVGs are capped at `820 × 430` CSS pixels.

Android reset geometry:

```text
Canvas = 320.dp × 240.dp
A = (32.dp, 40.dp)
B = (210.dp, 40.dp)
C = (288.dp, 120.dp)
D = (210.dp, 200.dp)
E = (32.dp, 200.dp)
inside point I = (120.dp, 145.dp)
outside point O = (304.dp, 145.dp)
```

Android value path:

```text
dp point pairs
→ runtime density conversion to Canvas-local px
→ closed badge Path
→ clipPath(badgePath) {
      unchanged oversized pattern draw calls
  }
→ previous clip restored
→ path outline and outside Q ring draw normally
```

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/ClippingExplorer.kt
```

Lesson 4.7 is complete only when:

- [ ] The Android files compile and run on the Pixel 8 Pro.
- [ ] Both preview levels render in light and dark modes.
- [ ] The learner can define clip region, candidate drawing, discarded draw, and scope.
- [ ] The learner can explain why clipping off and on use the same oversized content coordinates.
- [ ] The learner can trace inside point I to the amber output.
- [ ] The learner can trace outside point O to the unchanged background.
- [ ] The learner can explain why the post-clip Q ring remains visible outside the badge.
- [ ] The learner can explain why clipping does not erase the previous destination.
- [ ] The learner can separate clipping from masks and antialiasing.
- [ ] The prediction, coding challenge, and exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 36 of 216.
Next lesson becomes 4.8 — Masks.
```


## 12P. Lesson 4.8 implementation record

### `lesson-04-08-masks.html`

**New graphics idea:** A mask is a spatial visibility map. It is separate from the content and controls how much content survives at each position.

**Mathematical idea:** Apply one normalized mask value to candidate alpha. Keep straight and premultiplied RGBA contracts separate before source-over compositing.

The corrected lesson begins with three canonical spatial uses:

```text
oversized content + fixed capsule mask
→ cut content to the capsule silhouette

moving content + fixed capsule mask
→ stationary boundary with moving content inside

fixed content + moving capsule mask
→ moving reveal over stationary content
```

The manual slider exposes one exact position. It does not use an automatic animation because time and progress belong to Chapter 5.

A hard shape mask uses:

```text
outside = 0
inside  = 1
```

A binary mask can match a hard clip away from the rendered boundary. The lesson keeps their contracts separate. A mask can also contain partial values, textures, images, or shader-calculated data.

The per-position arithmetic microscope retains these fixed inputs:

```text
candidate straight sRGB RGBA
= (0.84, 0.36, 0.18, 1.00)

background straight sRGB RGBA
= (0.10, 0.18, 0.30, 1.00)

reset mask field
= [0.00, 0.25, 0.60, 1.00]
```

At mask value `0.60`:

```text
effective source alpha
= 1.00 × 0.60
= 0.60
```

The corrected representation trace is:

```text
masked straight RGBA
= (0.8400, 0.3600, 0.1800, 0.6000)

masked premultiplied RGBA
= (0.5040, 0.2160, 0.1080, 0.6000)
```

The mask does not tint or replace straight RGB. Premultiplied RGB scales because those stored fields already contain alpha weighting.

Compositing over the opaque navy background produces:

```text
red   = 0.84 × 0.60 + 0.10 × 0.40 = 0.5440
green = 0.36 × 0.60 + 0.18 × 0.40 = 0.2880
blue  = 0.18 × 0.60 + 0.30 × 0.40 = 0.2280
alpha = 1.0000
```

Android spatial drawing model:

```text
parent navy Surface
→ Canvas isolated with CompositingStrategy.Offscreen
→ draw complete moving multi-color pattern
→ draw capsule with BlendMode.DstIn
→ capsule source alpha masks the pattern destination
→ masked Canvas result composites over parent Surface
```

The four-zone model still uses direct `alpha = maskValue` draws. That remains exact only for its controlled single solid candidate and non-overlapping zones.

Changed Android files:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/Chapter04Screen.kt
app/src/main/java/com/example/liquidglasslab/chapter04/MasksExplorer.kt
```

Lesson 4.8 is complete only when:

- [ ] The Android files compile and run on the Pixel 8 Pro.
- [ ] Complete-screen and direct-child previews render in light and dark modes.
- [ ] The learner can explain content, mask field, and masked output as separate objects.
- [ ] The hard capsule mask cuts the oversized pattern to its silhouette.
- [ ] Moving content behind the fixed mask changes the visible pattern without moving the capsule boundary.
- [ ] Moving the mask over fixed content reveals a changing content region.
- [ ] The reset zone field shows `0.00`, `0.25`, `0.60`, and `1.00`.
- [ ] The learner can distinguish masked straight RGBA from masked premultiplied RGBA.
- [ ] The learner can reproduce zone C final output `(0.5440, 0.2880, 0.2280, 1.0000)` over the opaque background.
- [ ] The learner can explain why the grayscale preview is not a tint.
- [ ] The learner can state when clipping is simpler than a general mask.
- [ ] The prediction, coding challenge, and four exercises are complete.
- [ ] The work is committed to Git.

After completion:

```text
Course progress becomes 36 of 216.
Next lesson becomes 4.9 — Soft edges and antialiasing.
```


## Version 4.8.4 — Mask lesson rewritten around one explicit implementation path

Lesson 4.8 remains generated and incomplete. Learner-confirmed progress remains **36 of 216**.

The previous clarification accumulated several correct but nonessential topics before the learner owned the core mask model. It is superseded.

The required lesson now teaches this order only:

```text
complete content pattern
→ full-bounds pattern-target Canvas.saveLayer
→ complete mask image in a full-bounds mask-target Canvas.saveLayer
→ restore the mask target with DstIn into the pattern target
→ restore the completed masked pattern over navy
```

The Android implementation removes `graphicsLayer(Offscreen)` and uses two explicit `Canvas.saveLayer` calls. The first creates the content-group target. The second creates the full-Canvas mask target whose Paint applies `BlendMode.DstIn` on restore. A transparent full-bounds `BlendMode.Src` draw establishes alpha `0` outside before the capsule writes the selected alpha inside.

The required arithmetic is:

```text
masked content alpha = original content alpha × mask alpha
```

For opaque orange content and mask alpha `0.60`, Stage A produces straight RGBA `(0.84, 0.36, 0.18, 0.60)`. Source-over opaque navy then produces final straight RGBA `(0.5440, 0.2880, 0.2280, 1.0000)`.

The lesson defines `binary` as exactly two allowed values, `0` and `1`, for clearly inspected positions away from the rendered edge. It keeps `SrcIn`, luminance masks, and premultiplied storage optional. It removes the direct-alpha four-zone shortcut and overlapping-draw counterexample from the required path.

A hard `0/1` capsule still uses `clipPath` in production. The explicit two-layer mask remains a teaching model for independent partial alpha data.

Changed files:

```text
AGENTS.md
CURRENT_STATE.md
curriculum/liquid_glass_android_curriculum.md
curriculum/liquid_glass_android_handoff.md
course/chapters/chapter-04/lesson-04-08-masks.html
app/src/main/java/com/example/liquidglasslab/chapter04/MasksExplorer.kt
```

## Version 4.8.5 — Visual-first mask rewrite recorded after layer-explanation feedback

Lesson 4.8 remains the current incomplete checkpoint. Learner-confirmed progress remains **36 of 216**.

The preceding mask rewrite correctly used two explicit `Canvas.saveLayer` calls, but the explanation still failed the beginner audit because its central layer model depended on long prose and vague `outer`/`inner` target names. The learner requested graphics-first teaching, every intermediate image after every step, parallel straight and premultiplied cases, restored value-origin tooltips, color chips beside RGB/RGBA tuples, a detailed per-position algorithm, and diagrams comparing `graphicsLayer` with explicit `saveLayer` isolation.

The replacement lesson now requires this order:

```text
rendered scene objects
→ rendered target state after every draw/save/restore
→ selected per-position inputs and output
→ straight and premultiplied numeric cases
→ DstIn/SrcIn operand comparison
→ safe/unsafe isolation diagrams
→ explicit target-count and memory model
```

New reusable curriculum rule:

- Every buffer or layer sequence displays the complete intermediate image after each operation.
- A 3D target stack may support spatial understanding, but exact 2D front views remain present.
- Every RGB or RGBA tuple has an adjacent rounded color chip.
- Repeated inherited, controlled, fixed, measured, or derived values have click-controlled superscript-style provenance marks.
- Straight and premultiplied representations receive parallel worked cases when both are relevant.
- Per-position graphics explain whether transparent values are valid input data and separate API semantics from possible GPU optimization.
- Offscreen explanations compare the current safe arrangement, a safe alternative, an unsafe no-isolation arrangement, and redundant nested isolation.
- Cost explanations show explicit target count, bounds, one memory estimate, and restore/compositing passes.

Changed Android file remains:

```text
app/src/main/java/com/example/liquidglasslab/chapter04/MasksExplorer.kt
```

Lesson 4.9 must not be generated until the learner explicitly completes Lesson 4.8.

## Version 4.8.6 — Gold-standard exemplar record

Lesson 4.8 remains the current incomplete checkpoint. Learner-confirmed progress remains **36 of 216**.

The learner explicitly rated the Version 4.8.5 visual-first rewrite as **“world-class explanation level.”** The course therefore records that exact state as a positive canonical exemplar for future complex graphics teaching.

The exemplar's reusable sequence is:

```text
show concrete scene images
→ show every target after every operation
→ identify the active target and exact code line
→ trace one coordinate through every participating image
→ calculate each relevant representation in parallel
→ annotate colors and value provenance
→ compare safe and unsafe architecture choices visually
→ expose target count, bounds, passes, and cost
```

This record is intentionally more than a list of prohibitions. It identifies a complete artifact that succeeded with the learner. Future layer, buffer, filter, capture, sampling, and multi-pass shader lessons must be reviewed against it before delivery.

The exact exemplar files remain:

```text
course/chapters/chapter-04/lesson-04-08-masks.html
app/src/main/java/com/example/liquidglasslab/chapter04/MasksExplorer.kt
```

No HTML or Kotlin file changes in Version 4.8.6. Only `AGENTS.md`, `CURRENT_STATE.md`, the curriculum, and the handoff change.

The positive evaluation does not itself close the checkpoint. Lesson 4.8 becomes complete only after the learner applies the files locally, performs the intended Android/browser checks, and explicitly confirms completion.

## Lesson 4.8 clarification — construction-time Src, restore-time DstIn, then SrcOver

The gold-standard visual rewrite received one targeted clarification. The lesson now shows that:

```text
construct mask target with Src
→ apply completed mask with DstIn
→ composite masked-pattern intermediate over navy with SrcOver
```

The per-position multiplication belongs specifically to `DstIn`: pattern premultiplied RGBA is multiplied by mask alpha at the same coordinate. The final navy mixture belongs to the later source-over operation. The lesson also labels every checkerboard as a visualization of transparency rather than stored pixel content. This clarification does not change the masking algorithm or learner-confirmed completion count.


## Lesson 4.9 — Soft edges and antialiasing

- Lesson 4.8 is learner-confirmed complete. Progress is 36 of 216.
- Lesson 4.9 is generated and is the current unresolved checkpoint.
- It starts from the completed mask-alpha model and introduces geometric coverage at one pixel-sized area.
- Teaching order: mathematical boundary → pixel grid → selected area → coverage estimate → edge alpha → straight/premultiplied representation → source-over navy.
- The browser and Android teaching grids use fixed sub-cell sample patterns only to expose the calculation. They do not claim the Android renderer uses the same internal method.
- Changed Android files: `Chapter04Screen.kt` and new `SoftEdgesAntialiasingExplorer.kt`, with complete-screen and direct-child previews in light and dark modes.
- Next after explicit completion: Lesson 4.10 — Transform origin.


## Lesson 4.9 clarification — coverage quality, arbitrary boundaries, and finite samples

The lesson now explicitly proves that partial alpha is useful because it carries sub-pixel geometric coverage, not because lower alpha is aesthetically preferable. It adds a visual hard-edge versus coverage-aware comparison, an interactive line/curve/wave/thin-feature estimator, a high-density reference comparison, and a deliberate finite-sampling miss. The same coverage contract applies to arbitrary vector boundaries, while the fixed teaching grid remains an explanatory estimator rather than a claim about Android, Skia, or GPU internals.



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


## Lesson 4.9 clarification — normal-axis coordinate and point geometry

The signed-distance walkthrough now exposes the missing spatial meaning of its projection result. `P normal coordinate` is not P's ordinary X or Y coordinate. It is Q's signed coordinate on the blue normal axis through C, with C equal to zero. Q is the axis representative of P: P→Q is parallel to the pink boundary and therefore does not change normal coordinate. Boundary point B has coordinate `0.1200` on the same axis, so `Q−B` is the signed perpendicular relation between P and the boundary. Closest boundary point F makes the same gap visible as `|P→F| = |Q→B|`.

Steps 7–9 now add visible intermediate geometry instead of changing only arithmetic. The legend and both HTML/Compose diagrams use filled circles for C/P/B, a square for H, a diamond for Q, and an open circle for F. Focus panels name only points actually shown. Lesson 4.9 remains the unresolved checkpoint, and progress remains 36 of 216.


## Lesson 4.9 version 4.9.8 — define the projected coordinate before deriving it

The authoritative signed-distance path no longer projects the pedagogical waypoint `H`. The lesson first constructs `Q` geometrically and defines the output:

```text
P normal coordinate
= Q's signed coordinate on the blue normal axis through C
= signed C → Q distance because the normal has length 1
```

It then explains that P and C arrive in ordinary X/Y coordinates while the normal axis starts at C, so `Delta = P - C` is required. One-unit horizontal and vertical movements are converted to signed normal-axis changes, those changes are applied sequentially to one visible accumulator, and the final sum is then named `Delta dot n`. `Q = C + t*n` and `(P - Q) dot n = 0` connect the arithmetic back to the geometric construction.

This revision records the reusable requirement that a projection lesson must define the target coordinate and its geometric carrier before deriving its formula. Lesson 4.9 remains incomplete.


### Lesson 4.9 repair — interaction validation and overlay-drawer rule

The failed Step 8 revision shipped with a JavaScript syntax error. That single error prevented both SVG diagrams from rendering and disabled the walkthrough buttons. It also left Geometry controls in a side column even though the requested layout required full-width diagrams and an overlay drawer.

Reusable rule: after any scripted HTML edit, run JavaScript syntax validation before visual QA. Then execute the actual Back/Next controls in Chromium. A screenshot of the initial page is insufficient. For wide proof diagrams, place geometry controls and walkthrough text in one right-side overlay drawer with explicit tabs; do not reserve horizontal diagram width for controls. The drawer may cover the diagram while open.

For projection explanations, separate: (1) choosing the measurement axis, (2) defining the target coordinate, (3) learning one-unit horizontal and vertical conversion rates, and (4) applying those rates to the actual signed Delta values. “One unit right” is a reference calibration, not a claim that the actual movement goes right.


### Version 4.9 layout clarification

Lesson 4.9 now treats the 9 × 6 output-pixel grid as a compact live overview rather than a full-width proof diagram. The detailed walkthrough begins only after the scale cards and chosen-versus-derived value panels. The overlay drawer is click-only, uses a compact icon launcher, and supports ×, outside-click, and Escape dismissal without changing diagram width. This revision changes learning documents only.


## Lesson 5.1 implementation record

### Scope

Lesson 5.1 starts from completed Chapter 4 geometry and introduces state as data describing the UI at one instant. It defines two complete endpoint snapshots and switches instantly between them.

```text
RestingButton
= 64 × 64 dp
= radius 32 dp
= dots alpha 1.00
= menu alpha 0.00

ExpandedMenu
= 320 × 232 dp
= radius 28 dp
= dots alpha 0.00
= menu alpha 1.00
```

The fixed material color is straight sRGB RGBA `(0.1176, 0.2510, 0.6863, 1.0000)`. The lesson uses one endpoint enum value as the small mutable UI state. A mapping returns one complete `MenuVisualState`, and the renderer consumes that snapshot.

The pair `64 dp → 320 dp` names two endpoints only. Time, progress, interpolation, easing, velocity, springs, and interruption remain absent and are introduced in later Chapter 5 lessons.
