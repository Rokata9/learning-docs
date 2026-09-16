# AGENTS.md — Liquid Glass Learning Documents

## Scope

This repository contains the interactive learning documents for the Liquid Glass on iOS course. This fork was translated from the Android course. The runnable Xcode project is separate. Do not create an `ios/` or `android/` directory here.

## File naming

- Course home: `liquid-glass-course.html`.
- Chapter hub: `lesson-[chapter-name].html`.
- Sub-lesson: `lesson-[chapter-number]-[lesson-number]-[lesson-name].html`.
- Do not create generic chapter `index.html` files.

## Lesson requirements

Every lesson must be a standalone HTML file that works from `file://`.

Use inline CSS and JavaScript. Use inline SVG, Canvas, or WebGL2 when they improve the explanation. Do not use external libraries or content delivery networks.

Every lesson must:

1. Introduce one main graphics idea and at most one main mathematical idea.
2. Define each new graphics, GPU, rendering, geometry, animation, and mathematical term at first use.
3. Use short declarative sentences and plain English.
4. Separate visible observations from implementation hypotheses.
5. Trace one value through input, operation, and output.
6. Include at least one small coding challenge before the final exercises.
7. End with two to four exercises. Keep answers hidden in `<details>` elements.
8. Include a copyable Markdown completion record.
9. State when the browser model differs from iOS.
10. State the exact Swift target path when iOS code changes, but keep Swift source outside this repository.

### Prerequisite and causal-operation gate

Before a lesson introduces an intermediate graphics value such as a `sample`, `filtered pixel`, `edge pixel`, `mask value`, or `buffer value`:

1. State the real operation that creates the value. Name the input object, the output object, and the event or rendering step that makes the operation run.
2. State where every input comes from. A label such as `P0`, `P1`, or `Q` may be added only after the complete objects have been named in plain English.
3. If the required operation has not been taught yet, split the material or defer the dependent topic. Do not use an unexplained symptom to smuggle in several missing prerequisites.
4. Do not introduce an image-resizing, antialiasing, texture-sampling, or filtering artifact before the corresponding operation has been taught from first principles.
5. A lesson about a data representation must first teach the representation on one concrete value. A later lesson may apply it to filtering or edge artifacts.

### Complex graphics concept gate

Before introducing mathematics for an unfamiliar visual defect or rendering representation:

1. Show the visible result first and annotate the exact pixels, band, edge, ring, or region being discussed. A term such as `halo`, `fringe`, or `soft band` must point to something clearly visible in the lesson.
2. Name every concrete data object before using shorthand. Distinguish stored input pixels, newly calculated samples, final output pixels, the geometric boundary, and the multi-pixel transition region.
3. Do not use an unlabeled gradient as the main explanation. Also show discrete enlarged samples or pixels and identify which values are inputs and which values are calculated outputs.
4. When a new operation appears to contradict an earlier lesson, stop and reconcile the two directions explicitly. For straight and premultiplied RGBA, show both conversions: straight to premultiplied multiplies RGB by alpha; premultiplied to straight divides weighted RGB by alpha when alpha is greater than zero.
5. For every complex calculation, use a manual stepper that traces one actual input through each intermediate value to the visible result before summarizing the general rule.
6. Reread the lesson before delivery. Every unfamiliar noun must survive the question: `Which exact object or value does this refer to?`

### Chapter 3 color and compositing terminology gate

Apply these rules to every Chapter 3 lesson and to later lessons that use color or compositing:

1. Use **straight RGBA** or **unassociated RGBA** for a tuple whose red, green, and blue fields are stored independently from alpha. Do not introduce or rely on the label `ordinary RGBA`.
2. Use **premultiplied RGBA** or **associated RGBA** for a tuple whose stored RGB fields already equal straight RGB multiplied by that tuple's alpha. Alpha itself remains unchanged.
3. A bare `RGB(r, g, b)` triplet does not identify whether the values are straight or premultiplied when alpha is relevant. Label it `straight RGB` or `premultiplied RGB`. When alpha is omitted because it is known to be `1`, state that explicitly.
4. Teach the general source-over case before an opaque-destination shortcut. For straight inputs, write the full destination term as `destination straight RGB × destination alpha × (1 − source alpha)`. Remove destination alpha only after stating that it equals `1`.
5. Use the precise Lesson 3.3 names `output premultiplied RGB` and `output straight RGB`. The old labels `weighted total` and `ordinary output` may appear only when explicitly mapping old wording to the corrected names.
6. When two representations describe the same color, show the two different stored tuples. State what each field means. State which formula consumes each tuple. Show why both paths produce the same represented output.
7. Explain the practical choice of representation through an API or buffer contract. SwiftUI `Color` and the taught straight-RGBA over formula use straight values. A premultiplied bitmap or custom premultiplied math path uses premultiplied values only when its contract says so. Convert once at the boundary. Do not switch the lesson to premultiplied UIKit blending as the taught contract.
8. Explain both conversion directions and their purpose. Straight to premultiplied multiplies RGB by alpha so the fields become color contributions. Premultiplied to straight divides RGB by alpha when alpha is greater than zero so the color components are stored independently again.
9. At alpha zero, state that many straight RGB tuples collapse to the same premultiplied `(0, 0, 0, 0)` tuple. The original straight RGB cannot be recovered by division.
10. Before delivery, compare terminology and values with the preceding lesson. Correct earlier ambiguous labels in changed files rather than asking the learner to remember a hidden reinterpretation.
11. Relative luminance consumes three color channels. Alpha is not a fourth luminance term. When alpha is below `1`, explain that alpha acts earlier by changing the source-over output RGB.
12. A translucent source or translucent intermediate result is not yet a final visible color. Composite through every lower layer until an opaque backing produces the final displayed RGB before calculating foreground/background luminance or contrast.
13. At every compositing-to-luminance boundary, name the representation explicitly: source straight sRGB, destination straight sRGB, output premultiplied RGB, output straight sRGB, decoded linear-light RGB, or relative luminance. The phrase `precomputed RGB` is too ambiguous.
14. When a lesson uses zero-valued channels to isolate one coefficient or branch, label the example as an isolation test. Explain why the other inputs are zero. Pair the isolation test with at least one reproducible mixed-value example in which all relevant inputs are non-zero. Prefer fixed non-round values over true randomness so the learner can verify the arithmetic.

### Beginner-first comprehension and formula-reveal gate

The following failure pattern is prohibited:

> **Expert-backfill failure:** start from a finished industry formula, API, or standard; place its stages into cards; then assume that labels such as `encoded`, `linear light`, `transfer function`, `luminance`, or `coefficient` explain the causal model.

This pattern produces technically correct arithmetic but an unusable beginner lesson. It caused the rejected first version of Lesson 3.6.

Before delivering any lesson for a total beginner in graphics, mathematics, color science, GPU work, or iOS rendering:

1. **Start from an object already learned.** The first learner-facing sentence must name a concrete object from a completed lesson, or define every new term in that same sentence. It must not begin with revision history, quality-process commentary, an unexplained “failure,” or an arrow pipeline containing undefined terms. Phrases such as `This revision starts...` and `Trace one exact...` are forbidden unless every named object and operation is already known.
2. **Build a prerequisite ledger before prose.** List every new noun, acronym, symbol, constant, representation, and operation that the lesson intends to use. For each item, record the earlier lesson that taught it or the exact earlier paragraph in the current lesson that defines it. If neither exists, teach or defer the item before writing the sentence that uses it.
3. **State the new question before the new vocabulary.** Explain the practical problem the learner is solving and why the previous lesson cannot answer it yet.
4. **Do not reveal a formula early.** Before a formula appears, identify:
   - the exact input object;
   - where each input number comes from;
   - the range, unit, or representation of each number;
   - the exact output object or number;
   - why the conversion is needed;
   - which later operation consumes the output.
5. **Define every mathematical operation.** If a formula uses a branch, threshold, exponent, coefficient, weighted sum, normalization, or matrix, define that operation in plain language before using it. State whether each constant is calculated from the current input or fixed by a standard.
6. **Trace one value before three values.** For a three-channel calculation, first follow one channel through every arithmetic step. Only then repeat the operation for all three channels.
7. **Separate representation from physical reality.** State whether a number is a stored code value, a modeled quantity, a normalized software measurement, or a physical measurement. Never let a learner infer that a software value such as relative luminance is the device brightness slider or a measured number of nits.
8. **Use explicit deferrals instead of compressed expertise.** When a standard constant comes from untaught color-space or matrix mathematics, say that the constant is standardized, explain its role, name the later prerequisite, and do not fake a derivation.
9. **Audit the first two sections as a cold read.** For every noun, acronym, number, formula symbol, and arrow, ask:
   - What exact object or value is this?
   - Where did it come from?
   - Why does it exist?
   - What consumes it next?
   If an essential answer appears only in a later section, rewrite the order.
10. **A polished artifact is not evidence of a good lesson.** Working controls, correct Swift, screenshots, and numerical correctness do not pass the lesson if the first-time learner cannot explain the causal chain.
11. **Beginner-comprehension verification is mandatory.** Before packaging, write a short internal audit of the first sentence, every term in the first two sections, and the first displayed formula. A lesson fails verification when any essential term requires unstated expert knowledge.
12. **VERY IMPORTANT — uncertainty means failure, not approval.** Perform the final audit while assuming no graphics or mathematics knowledge beyond the learner-confirmed completed lessons. When there is any hesitation about whether a sentence, diagram, formula, or intermediate value is understandable under that assumption, treat it as not understandable. Rewrite or split the material before packaging.

## Mandatory lesson-feedback review

Perform this review after every learner message about the course, before generating or revising lesson files. The review itself is mandatory. Adding a new rule is conditional.

1. When the learner asks a question, requests a clarification, reports a defect, or requests a complete regeneration, identify what wording, ordering, missing prerequisite, representation ambiguity, or verification failure allowed the issue.
2. Decide whether the finding is reusable beyond the current sentence or lesson. If it is reusable, record a concise prevention rule in this `AGENTS.md` and summarize it in the handoff. If it is not reusable, fix the current material without adding noisy one-off policy.
3. When the learner completes a lesson without questions and asks for the next lesson, analyze which explanation choices made the lesson clear. Record only reusable success patterns. Continue using those patterns in later lessons.
4. Do not skip the analysis merely because the learner asks to proceed immediately. Do not manufacture a lesson learned when the message provides no new evidence.
5. Keep a direct link from each recorded rule to the concrete failure or success it prevents. A policy list that is not consulted during verification is not useful.

### Successful formula-lesson sequence confirmed by Lesson 3.6

Lesson 3.6 became clear after it used this order. Reuse the order when a lesson introduces a standardized formula or a new numeric measurement:

1. Start from the exact output object produced by the completed previous lesson.
2. State one practical question that the new number will answer.
3. Define the formula's input object and output number before showing any symbols.
4. Trace one input completely before repeating the operation for multiple color channels or candidates.
5. Explain every fixed constant by separating its immediate operational role from any deeper derivation that belongs later.
6. Pair isolation examples with one fixed mixed-value example so the learner sees both the single-term behavior and the complete calculation.
7. Reconnect alpha and compositing explicitly: obtain the final opaque displayed color first, then calculate the measurement.
8. End by naming the next consumer of the result. A number without a later use is not yet a complete causal explanation.

This sequence prevents the expert-backfill failure that affected the first Lesson 3.6 draft. The learner's clean progression after the final clarification is evidence that the order generalizes.

### Qualitative-claim proof and derived-value dependency gate

This rule was added after the Lesson 3.8 clarification. The original lesson stated that channels “move toward” a tint and warned not to reuse old luminance, but it did not prove either claim with the exact changing values.

1. **Prove directional language.** A sentence such as `moves toward`, `increases`, `decreases`, `gets stronger`, `gets softer`, or `approaches` must be followed immediately by a live numerical demonstration or geometric construction. Show the before value, the operation, the signed change, and the after value.
2. **Expose the delta when it explains direction.** For interpolation-like operations, derive or display a relation such as `output − base = amount × (target − base)`. Define every term. Use actual lesson values. A qualitative claim alone is not evidence.
3. **Show that the output is bounded when relevant.** When an amount is restricted to `0..1`, demonstrate that the output remains between the start and target values. Include a counter-direction example when different channels can move in different directions.
4. **Name dependencies of derived values.** When a value is calculated from another value, state the dependency explicitly, for example `relative luminance = function of this exact RGB triplet` and `contrast = function of the resulting luminance values`.
5. **Explain stale derived data.** Do not write only `recalculate` or `do not reuse`. Show the old input → old result and new input → new result. Define a stale value as an older result whose original inputs no longer match the object being described.
6. **Show boundary cases.** If the old and new results happen to agree when the input did not change, such as tint amount `0`, state why. Do not imply that recomputation always changes the number.
7. **Verification question.** Before packaging, ask: can the learner prove every directional adjective and identify the exact input object for every derived number? If either answer is uncertain, the lesson fails the total-beginner audit.

### Color-transform versus color-measurement gate

This rule was added for Lesson 3.9 because its saturation transform uses three fixed RGB multipliers that look similar to the relative-luminance coefficients from Lesson 3.6. Similar-looking arithmetic must not be allowed to hide different input contracts and different outputs.

1. **Name the operation before the constants.** State whether the current operation transforms a color, measures a color, composites layers, or classifies a measurement. Do not present a row of multipliers before that purpose is clear.
2. **State the input representation.** For every RGB formula, say whether it consumes stored straight sRGB channel values, premultiplied RGB contributions, decoded linear-light channels, or another explicitly defined representation.
3. **State the output type.** A transform may output another RGB color. A measurement may output one scalar. A gray-reference channel value is neither automatically relative luminance nor a complete color until it is assigned to red, green, and blue.
4. **Compare look-alike formulas directly.** When coefficients resemble an earlier formula, show both complete paths side by side: preprocessing, coefficients, output type, and next consumer. Explain why one cannot replace the other.
5. **Define the exact saturation contract.** The word `saturation` can name different operations in different color models. A lesson must name the API or mathematical definition it teaches. Do not silently substitute HSL, HSV, a design-tool control, Core Image's default saturation, or the taught 4×5 saturation matrix for one another.
6. **Prove factor regions from distances.** For a saturation-like factor, show the gray or neutral reference, each channel's signed distance from it, the scaled distance, the raw output, and any clamp. This is required before using labels such as `gray`, `closer to gray`, `unchanged`, or `farther from gray`.
7. **Recalculate downstream measurements.** When the transform changes RGB, relative luminance and contrast must be calculated from the transformed output. State whether the transform promises to preserve any measurement; do not infer preservation from similar coefficients.
8. **Keep alpha in its own causal position.** When the transform leaves alpha unchanged, say so. An output with alpha below `1` still requires compositing over its actual destination before visible-output luminance or contrast can be known.


### Pending-question completion gate

This rule was added after the learner asked to generate Lesson 3.10 while explicitly reserving questions about Lesson 3.9.

1. A request to `continue`, `proceed`, or generate the next lesson is not completion confirmation when the learner explicitly says that questions, clarification, testing, or corrections remain for the preceding lesson.
2. Keep the unresolved lesson marked `completed_by_learner: false`. Do not increase the learner-confirmed completion count.
3. Advance the generated frontier separately. A later lesson may be generated ahead when its prerequisites are already complete, but the handoff, course home, chapter hub, and lesson chrome must preserve the unresolved checkpoint.
4. State the pending lesson and the generated-ahead lesson separately. Do not collapse `next unresolved checkpoint`, `currently generated lesson`, and `learner-confirmed completion` into one status field.
5. When the learner later resolves the questions, mark completion only after an explicit completion statement or an unambiguous request that contains no remaining issue.

### Formula-validity contract and stepper viewport-fit gate

This rule was added after the Lesson 3.10 clarification. The phrase `exact for the controlled case` hid the actual assumptions, and the manual-stepper diagram was large enough to push its controls and explanatory text outside a 1920×1080 viewport.

1. **List every simplifying condition.** Do not write `controlled case`, `simple case`, `short formula`, or `under these assumptions` without immediately listing the exact conditions: alpha values, coverage, draw order, coordinate/buffer position, representation, and allowed numeric range when relevant.
2. **Show one general-to-short reduction.** When a full formula simplifies, substitute the controlled values into the full formula and show which terms become zero or one. State that the short formula is exact under those conditions, not a general formula and not an approximation.
3. **Name what breaks the reduction.** State which changed input restores the omitted terms, such as alpha below `1`, partial edge coverage, a different representation, or a different draw order.
4. **Keep step controls and explanations visible together.** At the required `1920×1080` viewport, a manual stepper must not use a diagram whose height pushes the step numbers, current caption, formula, or Back/Next controls out of view. Prefer a compact diagram beside the text.
5. **Cap diagram growth on ultrawide displays.** A diagram may use the available width when it contains additional information, but it must not enlarge merely because the viewport is wider. Set an explicit readable maximum width or height.
6. **Wrap or split SVG text explicitly.** Never place a paragraph-length calculation into one SVG `<text>` line. Break the calculation into separate labelled lines and verify the longest step, not only the initial state.
7. **Required QA state.** For every stepper, render the longest-caption or longest-formula step at `1920×1080`. Confirm that no text is clipped and that the current step controls, diagram, caption, formula, and navigation can be inspected without scrolling back and forth inside the section.

### Interactive geometry footprint and label-separation gate

This rule was added after the Lesson 4.2 interactive diagram placed several full coordinate labels in the same left margin and allowed the SVG to grow until it occupied most of a 1920×1080 viewport.

1. **Cap a diagram that gains no new information from growth.** At the required `1920×1080` viewport, keep the section heading, primary geometry, controls, and live readouts inspectable together when practical. On an ultrawide display, do not enlarge the geometry merely because more width exists.
2. **Choose breakpoints from the actual desktop target.** Do not stack a diagram above its controls at 1920 pixels when a readable side-by-side layout fits and stacking would make the section unnecessarily tall.
3. **Reserve separate label lanes.** Fixed-dimension labels, point labels, and changing-span labels must not compete for the same margin or cross one another. When the complete text would crowd the shape, place a short symbol such as `C`, `T`, or `L` on the geometry and put the exact name and coordinates in an adjacent live readout.
4. **Keep exact values visible outside the shape.** Moving text out of the SVG must not hide the mathematics. The external readout must update from the same state and formulas as the geometry.
5. **Test dense and boundary states.** Verify at least the minimum, reset, and maximum control values, plus the state with every optional construction layer enabled. Inspect screenshots and SVG text bounding boxes for overlap and clipping in both required theme modes.
6. **Treat excessive footprint as a defect.** A diagram can be numerically correct and still fail if the learner must scroll away from its controls or if the shape becomes harder to scan because it is unnecessarily large.

### Mask lesson scope, full-domain field, and explicit-layer gate

This rule supersedes the three earlier Lesson 4.8 mask-rule sections. Those sections accumulated correct facts but turned one beginner lesson into a catalogue of special cases. The learner could not identify the exact layer-creation line, the current drawing target, the meaning of a binary mask, or the reason two alpha restrictions multiply. The failure was one of scope and causal ordering, not merely missing terminology.

1. **Teach one actual mask path first.** The required path is: content object → complete mask image → masked content group → later source-over background. Do not require `.sourceIn`, luminance masks, premultiplied storage, per-draw shortcuts, or performance internals before this path is understood. Put those connections in an explicitly optional section or defer them.
2. **Use exact scene-object names before blend roles.** Name the content being masked, the complete mask image, and the background. Assign `source` and `destination` only at one exact blend call. For the current `.destinationIn` path: destination = completed content image; source = complete mask image.
3. **Define binary with values.** A binary mask permits exactly two values: `0` and `1`. State `0 outside` and `1 inside` for clearly inspected positions. A mask containing `0.60` is partial and therefore not binary. Keep rendered edge coverage deferred to the antialiasing lesson.
4. **Point to the exact layer-creation call.** Every offscreen explanation must quote the exact `drawingGroup()` or `GraphicsContext` transparency-layer line that creates the boundary. Name its bounds, the target that receives subsequent draws, every object drawn into it, and the blend or operation applied when the transparency layer is composited. Do not call an ordinary RGBA target an `alpha-only layer` merely because the blend mode consumes alpha.
5. **Show the active drawing target at every step.** A layer stepper must identify parent target, pattern target, and mask target. It must show what each target contains before and after every draw and restore. The words `grouped drawing` or `isolated destination` are forbidden unless the exact draw calls included in that object are named.
6. **Construct the complete mask domain explicitly.** The mask target covers the complete content-group bounds. Write alpha `0` across those bounds or establish an equivalently explicit transparent target, then write the intended alpha inside the mask geometry. Show one inside position and one outside position before generalizing.
7. **Separate two consecutive operations.** Stage A applies the mask: `masked content alpha = original content alpha × mask alpha`. Stage B draws that masked result over the background with source-over. Never present these formulas as alternatives. Do not introduce `effective source alpha`; call the value `masked content alpha` until Stage B actually uses it as source alpha.
8. **Explain multiplication as sequential restriction.** Trace `1 → content alpha → mask keeps a fraction of the remainder`. Show why addition would let two restrictions increase visibility or exceed `1`.
9. **Choose one visible pattern-isolation boundary.** Use either `drawingGroup()` or an explicit pattern-target `GraphicsContext` transparency layer when one is required. Do not stack both without a separate need. Prefer the implementation whose containment is visible in the lesson code. Do not speculate about hidden framework layers to explain why removing a boundary happened to look correct.
10. **Keep the production decision simple.** A hard `0/1` geometry should use clipping when no independent or partial mask data is required. Explain general alpha-mask layers only when they add a capability the clip cannot express.
11. **Required QA states.** Verify mask alpha `0`, `0.60`, and `1`; one inside and one outside position; fixed mask with moving content; fixed content with moving mask; every layer-stepper state; the longest formula; and the physical-device result outside and inside the capsule.


### Visual-first intermediate-state and value-annotation gate

This rule was added after the Lesson 4.8 layer rewrite still relied on long prose, vague `outer` and `inner` target wording, representation explanations without parallel worked cases, and inconsistent value provenance controls. The learner explicitly requested graphics-first explanations and an intermediate result after every operation.

1. **Show the images before the prose.** A lesson about layers, buffers, masks, compositing, or rendering order must first display the concrete input images, the operation, and the resulting image. Text may explain the visual evidence afterward. A text-only pipeline is not accepted when the intermediate images can be drawn.
2. **Every step exposes every affected object.** A sequence step must show the current parent target, every temporary target that exists, the active target receiving the next draw, and the complete intermediate result after the step. Do not show only the active layer while leaving the other targets implicit.
3. **Use 2D evidence even when a 3D stack is added.** A rotatable 3D layer stack is encouraged when it clarifies ordering and separation. It is supplementary. Keep exact front-view thumbnails beside or below it so perspective cannot hide the pixel contents.
4. **Carry the intermediate-result pattern through the complete lesson.** Spatial demonstrations, per-position traces, representation conversions, blend-mode comparisons, isolation alternatives, and cost diagrams must all show input → operation → intermediate output → next consumer. Do not reserve intermediate outputs for one central stepper and omit them elsewhere.
5. **Pair straight and premultiplied cases numerically.** When both representations are relevant, state which representation the public API receives and which representation makes the blend arithmetic direct. Provide at least one complete worked case for each representation. When a translucent input matters, include a second case whose input alpha is below `1` rather than explaining the boundary only in prose.
6. **Place a color chip beside every RGB or RGBA tuple.** The chip is a small rounded rectangle that shows the represented color. For a premultiplied tuple, the chip must be labelled as the represented color and must not interpret premultiplied channel numbers as straight values.
7. **Attach provenance controls to inherited and derived values.** A value copied from an earlier lesson, fixed by an API, selected by a control, measured at runtime, or derived in the current section receives a small click-controlled information mark beside the value. Position the mark like a superscript at the value's upper-right. If mathematical superscript notation already occupies that position, place the information mark immediately after the superscript. The popup explains origin, representation, and next consumer only; essential mathematics remains visible without opening it.
8. **Maintain tooltip coverage after revisions.** Once a lesson family establishes value-origin controls, later rewrites must not silently drop them. Verification includes a sweep for repeated values that cross sections without provenance.
9. **Explain the per-position algorithm explicitly.** A mask or blend lesson must let the learner choose one exact coordinate and see the content pixel, mask pixel, blend output pixel, and final composited pixel. State whether alpha-zero pixels are valid inputs or absent data. Separate API semantics from possible GPU optimizations: an implementation may skip physical work only if it preserves the same required per-position output.
10. **Compare isolation arrangements with pictures.** For `drawingGroup()`, a `GraphicsContext` transparency layer, or another offscreen boundary, show at least: one safe arrangement using the current implementation, one safe alternative, one unsafe arrangement with no pattern isolation, and the result after the blend. State which exact pixels belong to the blend destination in each arrangement.
11. **Explain cost with visible target counts.** Show the number and bounds of explicit temporary targets, one concrete memory estimate, and the additional restore/compositing passes. Label the estimate as a model rather than a guaranteed GPU allocation.
12. **Feedback-analysis record is mandatory and visible in state files.** After every learner correction, update the current state and handoff with the concrete failure, the reusable prevention rule, and the verification that will catch it next time. Do not merely claim that the feedback was analyzed in the chat response.
13. **Required QA states.** Test every sequence step, every representation case, inside and outside positions, alpha `0`, one partial alpha, alpha `1`, every isolation scenario, every provenance popup, color-chip presence, 3D rotation/reset when present, and horizontal overflow with a popup open.


### Gold-standard positive exemplar — Lesson 4.8 visual layer movie rewrite

This section records a successful reference artifact, not another rule created only from a failure. On 2026-08-03, the learner explicitly described the final Lesson 4.8 visual-first edit as **“world-class explanation level.”** Treat that exact state as the canonical quality baseline for future lessons about invisible rendering state, layers, buffers, masks, blend operations, or multi-stage image pipelines.

**Canonical exemplar files:**

```text
course/chapters/chapter-04/lesson-04-08-masks.html
MasksExplorer.swift (iOS lab under /Users/rosen/Code/LiquidGlassLab-iOS)
```

The HTML visual-layer movie is the canonical teaching structure. The Swift explorer is the 1:1 lab counterpart once Chapter 4 is translated.

The exemplar succeeded because it combines all of these choices in one coherent order:

1. **It begins with visible objects.** The learner first sees the complete pattern image, complete mask image, masked-pattern intermediate image, and final image over navy. The explanation does not begin with an API, formula, or abstract layer name.
2. **It gives every temporary target a stable concrete name and a visible image.** The parent target, pattern target, and mask target are shown after every operation. The active target is highlighted. The exact Swift line is attached to the corresponding visual state.
3. **It makes intermediate results the main teaching medium.** The seven-step layer movie shows the complete result after every transparency-layer draw and composite. The learner never has to imagine what an invisible buffer currently contains.
4. **It combines 3D orientation with exact 2D evidence.** The rotatable stack explains ordering and separation. Front-view thumbnails remain the authoritative view of pixel contents.
5. **It proves the algorithm at one selected coordinate.** The microscope shows the content pixel, mask pixel at the same coordinate, `.destinationIn` output, and final source-over result. Alpha-zero mask pixels are shown as valid inputs rather than described as missing work.
6. **It calculates both representations instead of merely naming them.** Straight and premultiplied RGBA receive parallel worked cases for opaque and translucent content. Each RGB or RGBA tuple has an adjacent rounded color chip showing the represented color.
7. **It preserves value provenance.** Inherited, controlled, fixed, and derived values carry click-controlled superscript-style information marks. The popup states origin, representation, and next consumer.
8. **It compares architecture choices visually.** Safe explicit `GraphicsContext` transparency layer, safe `drawingGroup()`, unsafe no-isolation, and redundant double-isolation arrangements are drawn with their intermediate destinations and results.
9. **It makes performance cost concrete.** Target count, target bounds, restore/compositing passes, and one labelled memory estimate are visible. The estimate is not presented as a guaranteed GPU allocation.
10. **It keeps the production boundary honest.** The lesson still says that a hard binary capsule should normally use clipping. The more general mask path is retained because it teaches capabilities that clipping cannot represent.

**How to reuse this exemplar:** preserve the causal and visual structure, but do not copy its exact widgets mechanically. A later lesson may not need a 3D stack, two representations, or four architecture alternatives. It does need the same standard of evidence: visible inputs, visible intermediate state, exact operation, exact output, and a clear next consumer. Before delivering a comparably complex lesson, review it beside this exemplar and explain internally why any omitted element is genuinely unnecessary for that topic.

**Positive-pattern status:** this learner evaluation confirms that the visual-first intermediate-state gate is not merely defensive policy. It is a demonstrated successful teaching pattern and should be preferred proactively for future graphics lessons with invisible state.

### Viewport-safe click-popup and nested-code styling gate

This rule was added after Lesson 6.6 exposed two browser-only visual defects: a value-provenance popup was anchored toward the left edge and left the monitor, while a dark route code block inherited the pale global inline-code background.

1. **Click popups must choose a safe horizontal direction.** Provenance tooltips, callouts, and other click-controlled overlays default to flowing right when space is available. Near the right edge, switch them left. Constrain their width to the viewport and verify the final popup rectangle stays within both horizontal edges.
2. **Test popups at both edges, not only in the center.** Open representative first, middle, and last controls at the required desktop viewport. A popup that is logically correct but clipped by the monitor is a failed state.
3. **Do not rely on one fixed `left` or `right` anchor.** Measure the trigger position at click time or use an equivalent responsive layout. Keep essential information outside the popup so a closed popup never hides required mathematics.
4. **Reset nested inline-code styling inside dark code containers.** When a `<pre>`, `.code`, or `.code-block` contains semantic `<code>`, explicitly set the nested element to transparent background, inherited text color, zero extra padding, and the intended display mode. The global inline-code rule must not create pale rectangles or low-contrast text inside a dark code block.
5. **Verify computed styles in both themes.** For every changed dark code container, inspect the nested `<code>` computed background and text color in light and dark OS modes, then compare it with a known-correct challenge/editor block.

## Visual target

- Desktop only.
- Lessons 1.1 through 2.9 are legacy light-only files. Do not revise them only to add dark mode.
- Starting with Lesson 3.1, every new lesson and every revision of Lesson 3.1 or later must follow the operating-system light or dark preference automatically with `prefers-color-scheme`.
- Do not add a manual theme switch unless a lesson specifically teaches theme switching.
- Starting with Lesson 3.1, iOS lesson screens must also follow the OS theme through `LabTheme` and SwiftUI's color scheme. Do not hardcode light-only page, panel, border, or ordinary text colors.
- Theme-dependent interface chrome includes page backgrounds, panels, borders, ordinary text, controls, code containers, and diagram scaffolding.
- Instructional color data must remain numerically exact. Do not recolor RGB swatches, sampled pixels, tint samples, masks, shader outputs, or other data merely to fit the theme. Adapt labels and surrounding chrome instead.
- Verify each changed Lesson 3.1-or-later HTML file in both OS theme modes at `1920×1080` or larger.
- Use up to `5120×1440` for deliberately ultrawide explanations. Verify both OS theme modes there when the lesson uses that width.
- Keep prose in readable columns.
- Use manual steppers before automatic animation when a sequence must be understood.
- Do not hide essential information behind hover.

## Verification

Before delivery:

- open every changed HTML file from `file://`;
- check all enabled relative links;
- capture the initial state at `1920×1080` or larger;
- for Lesson 3.1 and later, capture the initial state in both OS light and dark preferences;
- capture at least one changed interactive state;
- confirm that theme chrome changes while instructional color data remains numerically unchanged;
- inspect for clipped labels, overlapping controls, unreadable text, insufficient contrast, and JavaScript errors.
## Response progress and context footer

At the end of every response:

1. State the learner-confirmed course completion count in the exact form `Course progress: X of 216 lessons completed.`
2. Count only lessons that the learner has explicitly completed. A generated but unfinished lesson does not increase X.
3. Then add a clearly labelled best-effort estimate of the remaining conversation context window in tokens, for example: `Estimated remaining context: ~120,000 tokens`; treat the number as approximate, not exact.

Update the handoff whenever the learner completes a lesson so the count remains reliable across conversations.


## Incremental delivery — no ZIP archives

Recorded 2026-08-20. The learner works from the repositories directly.

- Do not generate `.zip` files after a lesson, revision, or iOS patch.
- Leave changed learning-docs files in `liquid-glass-learning-docs/` and changed iOS files in `LiquidGlassLab-iOS/`.
- Do not create incremental learning-docs archives, iOS code archives, empty ZIP placeholders, or verification-screenshot archives.
- Package a ZIP only when the learner explicitly asks for one.
- When a lesson changes no iOS source, say so. Still do not create an archive.

## SwiftUI layout containers and preview coverage

Apply these rules to every iOS lesson patch:

1. Use SwiftUI layout containers in lesson views. Do not mix UIKit Auto Layout into a SwiftUI `View` body.

   Use `HStack` and `VStack` for row and column layout. Give a child flexible space with `Spacer()` or `.frame(maxWidth: .infinity)` / `.frame(maxHeight: .infinity)` inside that stack. Use `ZStack` when children overlay. To fill the parent in a `ZStack`, use `.frame(maxWidth: .infinity, maxHeight: .infinity)` or an overlay aligned to the parent. Those fill modifiers belong on a child of the stack that should expand; they are not a substitute for the stack itself.

2. Every lesson that changes the active iOS child view must provide both preview levels, but keep each preview beside the code it primarily verifies:

   - keep complete chapter-screen previews in `ChapterXXScreen.swift`;
   - keep direct previews of the active custom child view in that child view's own Swift file.

   Do not place the direct child preview in `ChapterXXScreen.swift`. This keeps the preview next to the custom view it is meant to inspect.

3. For Lesson 3.1 and later, provide light and dark variants for both preview levels. Wrap each preview in `LabTheme`. Wrap a direct child preview in a theme-aware container when the child normally receives its page background or content color from the parent screen.

4. When stacking both theme `#Preview` blocks, put light first, then dark, immediately above the view. This is source order only. It does not change the app's runtime default theme. Preview canvas is **412 × 915 points**. Test device is **iPhone 16 Pro**. Do not substitute another model. Apply to newly written or newly revised preview wrappers. Do not bulk-reorder completed historical lessons unless asked.

5. Preview wrappers must take no parameters. Supply representative values inside the wrapper when the child view requires arguments.

6. **All lesson content must be inspectable by scrolling inside Xcode `#Preview`.** For every newly generated lesson:

   - the complete chapter-screen preview must expose the whole lesson through vertical scrolling;
   - the direct custom-view preview must also be vertically scrollable, either because the custom view already owns a scroll container or because the preview wrapper supplies one;
   - do not rely on a physical device to reach content below the preview height;
   - avoid accidental nested scrolling when the child is already scrollable;
   - verify the longest generated content in Xcode `#Preview` or an equivalent finite-height preview container before delivery.

   This rule applies prospectively. Do not rewrite earlier lessons solely to retrofit preview scrolling unless the learner explicitly requests it.


### Value provenance, pre-clamp terminology, and matrix-contract gate

This rule was added after the Lesson 3.9 clarification questions.

1. **Label value origin.** When a value appears across several sections, add a small click-controlled `ⓘ` origin control. State whether the value is inherited from a prior lesson, set by a current control, fixed by an API or standard, measured at runtime, or derived in the current section. Tooltips carry provenance only; essential mathematics remains visible without opening them.
2. **Avoid unexplained `raw`.** Do not write `raw RGB`, `raw channel`, or `raw output` without defining the exact stage. Prefer `matrix result before clamping`, `pre-clamp channel result`, or another operation-specific name. State that this meaning is unrelated to camera RAW, file bytes, or premultiplication.
3. **Show both sides of clamping.** Display the pre-clamp number, the allowed range, and the final clamped number. Use `clamped`, not an unexplained `clipped`, for a numeric range restriction.
4. **Explain all five matrix columns.** For a 4×5 color matrix, define the four input multipliers and the fifth constant offset before showing rows. State which coefficients change with the current control and which remain fixed for the selected API operation.
5. **Explain identity rows causally.** For `[0, 0, 0, 1, 0]`, show `A′ = 0R + 0G + 0B + 1A + 0 = A`. State that this row is fixed by the taught saturation matrix, not by every possible 4×5 color matrix.
6. **Separate transform from compositing.** For translucent input, trace `source RGBA → transformed source RGBA → source-over destination → final visible RGB → luminance → contrast`. If the destination is translucent, continue compositing until an opaque backing is reached.
7. **Do not imply a transform repairs contrast.** Recalculate contrast from the final visible RGB. If the selected foreground fails, test allowed foreground candidates, then change a relevant material or foreground input and measure again. For Liquid Glass, name stabilizing options such as stronger tint, dimming, or a more opaque local backing; do not rely on saturation or blur alone.

### Complete-source-section preference

1. Do not embed complete Swift source files or source-tab viewers in lesson HTML. The learner views complete files in Xcode.
2. Keep only short code excerpts required for a causal explanation, the manual value path, or a coding challenge.
3. Continue writing changed Swift files into `/Users/rosen/Code/LiquidGlassLab-iOS`. Do not package them as a ZIP unless the learner asks.
4. Remove the complete-source section from a lesson whenever that lesson is otherwise revised. Do not bulk-edit already completed historical lessons solely for this preference unless the learner asks.

## Construction-time versus restore-time blend operations

Lesson 4.8 exposed a reusable ambiguity: one blend mode can construct a temporary target while a different blend mode is attached to that target's later restore. Future layer lessons must separate these moments visually and in code comments.

1. Name the current drawing target before every draw.
2. State whether a blend mode applies to the current draw command or to the later composite of a transparency layer.
3. For the Lesson 4.8 mask, `BlendMode.copy` constructs the mask image by replacing every full-bounds position with transparent RGBA. `BlendMode.destinationIn` runs later when the transparency layer is composited and performs the per-position multiplication `pattern premultiplied RGBA × mask alpha`.
4. Treat the later source-over of the masked pattern over navy as a separate per-position operation. Do not describe its arithmetic as part of `.destinationIn`.
5. Label checkerboards as teaching visualizations of transparency. A checkerboard is not stored pixel content unless the program explicitly draws one.


### Boundary-to-pixel coverage gate — Lesson 4.9

1. Separate the mathematical boundary, pixel grid, and rendered transition pixels before using the word antialiasing.
2. Show one selected pixel-sized area and the exact geometry evidence that produces its coverage value.
3. State that coverage is a visibility restriction. Trace `shape alpha × coverage` before source-over.
4. Do not describe antialiasing as copying or blurring neighboring colors. Blur is a different image operation.
5. When a teaching sample grid estimates coverage, label it as an explanatory model and do not claim the renderer uses the same sample count or algorithm.
6. Show opaque and translucent shape cases, plus straight and premultiplied representations, using the same selected position.
7. Reuse the Lesson 4.8 gold-standard sequence: actual objects first, complete intermediate images, value provenance, then prose interpretation.


### Finite sampling and arbitrary-boundary clarification — Lesson 4.9

The learner correctly asked whether partial alpha alone makes an edge appealing and whether a fixed sample grid can cover arbitrary curves or waves. Future rasterization lessons must preserve these distinctions:

1. Do not imply that arbitrary lower alpha is visually beneficial. State that the alpha is useful only when it encodes the estimated geometric coverage of that exact output position.
2. Show the causal reason for visual smoothness: intermediate coverage values encode where a continuous boundary passes between discrete pixel centers.
3. State that the same local coverage contract applies to lines, circles, Bézier curves, waves, text glyphs, and arbitrary paths.
4. Separate the conceptual coverage contract from the renderer implementation. A teaching sub-sample grid is one estimator, not proof of the iOS renderer's internal algorithm or sample count.
5. Show a finite-sampling failure case. A thin feature can pass between every selected sample position and receive an estimated coverage of zero even when true geometric coverage is non-zero.
6. Explain the tradeoff: more samples usually improve the estimate but cost more work. Name possible alternatives such as analytic coverage, multisample antialiasing, distance-based methods, or renderer-specific hybrids without claiming which one the iOS renderer used unless verified.
7. Keep antialiasing separate from blur. Coverage uses geometry at the current output position; blur reads neighboring image positions.

### Point-sample visualization and thin-band gate — Lesson 4.9

This rule was added after the learner could see sample markers touching the orange thin feature while some markers still appeared to count as outside.

1. **Separate the marker drawing from the sampled coordinate.** A visible circle used to make a sample easy to see is not the sample's geometric area. Draw or label the exact center pin that the algorithm tests.
2. **Show the represented area.** When one center sample stands for an equal-area subcell, draw the subcell boundary. State that the center casts one inside-or-outside vote for that complete subcell.
3. **Do not say that points split the pixel exactly.** Center samples are probes. They estimate area by votes; they do not cut the shape at its true boundaries.
4. **Distinguish one-boundary and two-boundary shapes.** A line, curve, or wave may divide the pixel into two sides. A thin band has two boundaries. Only the strip between them is inside; positions on both outer sides are outside.
5. **Show two different finite-sampling failures.** Include both a complete miss, where a narrow feature crosses subcells but misses every center, and a detected-but-inexact case, where some center samples are inside yet the hit fraction differs from the true covered area.
6. **Show one mitigation that does not merely add samples.** For a straight edge, visualize direct edge-to-pixel intersection and covered-area calculation. Define this as analytic coverage: geometry is measured directly instead of estimated from point votes.
7. **Keep implementation depth proportional to the course goal.** State that the iOS renderer owns rasterization. Teach only the result contract needed for Liquid Glass unless later custom shader work requires more detail.



### Visual-first signed-distance and nested-grid gate — Lesson 4.9

The first `signedDistanceFromBoundary` revision is rejected. It began with a “normal,” `38°`, `52°`, `C`, `P`, `Δ`, a projection, and a sign before constructing those objects. It also placed a 9 × 6 output grid beside a 12 × 12 probe grid without stating that they described different spatial levels. Correct arithmetic did not compensate for the missing mental model.

Future geometric-predicate explanations must use this order:

1. **Separate every spatial level first.** Draw and name the complete output grid, one selected output pixel, and any temporary subcell/probe grid inside that one pixel. State the count and scope of each level. For the Lesson 4.9 model: `9 × 6 = 54` output pixels; `12 × 12 = 144` teaching probes inside one output pixel; `54 × 144 = 7,776` tests only if the estimator runs for every output pixel.
2. **Do not introduce symbols before their objects.** Show the selected pixel bounds before naming its center `C`. Show one exact subcell-center probe before naming it `P`. Show the arrow from `C` to `P` before naming it `Δ = P − C`.
3. **Start from the visible geometry.** Let the learner control or observe the visible boundary angle. Mark it as controlled. Derive the perpendicular normal angle afterward and mark it as derived. For the course state: pink boundary tilt `52°`; blue normal angle `90° − 52° = 38°`.
4. **Define the normal by its job before its formula.** The normal is the direction that crosses the boundary at a right angle. Movement parallel to the boundary does not change sides. Only after this visual fact is clear may `cos` and `sin` split the one-unit normal arrow into X and Y parts.
5. **Teach projection visually before the dot product.** Draw the 2D movement `Δ`, the one-dimensional normal ruler, and the perpendicular drop from `Δ` to that ruler. Define projection as the coordinate retained on the crossing ruler. Only then show `normalX × Δx + normalY × Δy` and trace both products.
6. **Explain signed distance on one ruler.** Put the probe projection and boundary offset on the same normal-axis graphic. Then calculate `signed distance = probe normal coordinate − boundary normal coordinate`. Show the magnified difference when the values are close.
7. **Make the sign causal.** State the normal arrow direction. With the Lesson 4.9 arrow pointing from orange toward blue: negative means the probe is before the boundary on the orange side; zero means it lies on the boundary; positive means it lies beyond the boundary on the blue side. Reversing the normal would reverse all signs, so the convention is not a universal color law.
8. **Count only after one vote is understood.** Repeat the same signed test for every probe in the selected output pixel. State exactly how `insideProbeCount` is obtained, where `totalProbeCount = 12 × 12 = 144` comes from, and why equal-area subcells give equal-weight votes.
9. **Distinguish classification from area.** The signed-distance calculation classifies one point. The later vote fraction estimates area. Neither point classification nor vote counting splits a subcell at the true boundary.
10. **Use one-new-object-per-step visuals.** The required stepper order is: complete output grid → selected output pixel and center → 144 subcells/probes → one probe → visible boundary angle and perpendicular normal → `Δ` → projection → signed ruler and sign → all-probe count.
11. **Make code comments follow the identical order.** Swift names and comments must say which counts apply to one output pixel, where the anchor comes from, which angle is controlled, which is derived, why the dot product exists, and what each sign means.
12. **Cold-read requirement.** A beginner must be able to answer “what exact object is this?” for every symbol, angle, coordinate, multiplication, and count by looking at the current or preceding visual state. Hesitation fails the lesson.

### Vector components, scalar projection, and anchored-offset gate — Lesson 4.9

The first visual signed-distance replacement was also rejected. It named a unit normal as `(cos 38°, sin 38°)`, multiplied `deltaX` and `deltaY` by those components, and added the products without deriving why those operations measure movement on one common ruler. It also introduced `0.1200` first as an offset, used `nearest probe` without naming the distance metric, and showed focus graphics whose relationship to the main geometry was not sufficiently explicit.

Future vector-based beginner explanations must satisfy all of these rules:

1. **Derive unit-vector components from one visible right triangle.** Draw the direction arrow with length `1`. Draw its horizontal and vertical legs. State `cos θ = horizontal leg ÷ hypotenuse` and `sin θ = vertical leg ÷ hypotenuse`. Only after substituting hypotenuse `1` may the lesson write `normalX = cos θ` and `normalY = sin θ`.
2. **Explain component multiplication as a change of scale, not as a memorized vector formula.** Show that a one-unit horizontal move changes the chosen directional ruler by `normalX`. Therefore a `deltaX`-unit move changes it by `deltaX × normalX`. Repeat independently for the vertical move.
3. **Explain addition before naming the dot product.** Decompose `C → P` into a horizontal move followed by a vertical move. Both moves change the same one-dimensional ruler. Consecutive changes on the same ruler add. Only then introduce `normalX × deltaX + normalY × deltaY` as the scalar projection or dot product.
4. **Turn every offset into a visible segment between named points.** The Lesson 4.9 value `0.1200` is the learner-controlled distance `C → B` along the unit normal. Point `B = C + 0.1200 × n` lies on the pink boundary. The value must be visible in the controls and diagram before it appears in subtraction.
5. **Name the metric whenever using `nearest`, `closest`, or `smallest`.** `Closest orange-side probe` means the orange-side probe with the smallest absolute signed distance to the boundary. It does not mean the probe closest to `C`. Show a counterexample when those differ.
6. **Keep main and focus graphics synchronized.** Every magnified or one-dimensional proof panel must reuse the exact same points, colors, and current values as the main geometry. State which 2D operation produces each point on the focus ruler. A focus panel must never look like an unrelated second example.
7. **Magnify tiny distances honestly.** If `P → F` is too short to see at the main scale, mark its real location, state its true numeric length, and provide a separately labelled magnified view. Never enlarge the distance silently.
8. **Use chosen-versus-derived ledgers.** Before the walkthrough, list controlled inputs separately from calculated values. No formula may introduce a number whose source is not already visible.
9. **Apply the Lesson 4.8 gold-standard audit.** For invisible vector state, each step must show the current objects, one operation, the complete intermediate result, and matching code. Correct formulas and a polished layout do not pass when the causal reason for multiplication or addition remains implicit.



### Auxiliary normal-coordinate and point-geometry gate — Lesson 4.9

This rule was added after the learner understood the `C → H → P` decomposition but the lesson still failed to define `P normal coordinate` and violated its own point legend.

1. **Define an auxiliary coordinate as a coordinate-system output.** `P normal coordinate` means the signed coordinate of point `Q` on the one-dimensional normal axis through `C`, with `C = 0`. Do not present a projection result as an unexplained scalar.
2. **Show the spatial point that represents the scalar.** If a formula produces `0.1180`, draw `Q = C + 0.1180 × n` and state that `C → Q` is the corresponding signed normal-axis displacement because `n` has length `1`.
3. **Prove the link between the original point and its axis representative.** Draw `P → Q`. State that it has zero normal component, so it is perpendicular to the normal and therefore parallel to the boundary. This proves that P and Q share one normal coordinate.
4. **Compare coordinates only on one named axis.** Put `C`, `Q`, and boundary point `B` on the same normal axis before calculating `Q coordinate − B coordinate`. Explain why the sign classifies P, not merely Q.
5. **Show the equivalent geometric gap.** Construct closest boundary point `F` and show `|P → F| = |Q → B|`. Magnify tiny gaps honestly and link the inset to the exact main-diagram points.
6. **Make every step change the evidence.** A step that introduces a new intermediate must add the corresponding point, segment, or ruler position to the main diagram. Arithmetic-only step changes fail.
7. **Honor the legend exactly.** If H is a square, Q a diamond, and F an open circle, render those shapes in every view. Never advertise absent points or claim a focus panel contains points it does not draw.
8. **Define selection metrics.** `Nearest orange-side probe` means smallest absolute signed distance to the boundary among orange-side probes, not nearest to C.


### Goal-before-projection and one-coordinate accumulator gate — Lesson 4.9

This rule was added after the learner correctly rejected a walkthrough that projected the waypoint `H` onto the normal axis before defining the quantity being calculated. The arithmetic changed while the diagram did not explain the purpose of that change.

1. **Define the desired scalar before calculating it.** Before a projection formula appears, draw the target axis, its origin, and the point that will carry the result. For Lesson 4.9, define `Q` geometrically and define `P normal coordinate` as Q's signed coordinate on the normal axis through `C`, with `C = 0`.
2. **Do not project pedagogical waypoints.** A waypoint such as `H` may expose `deltaX` and `deltaY`, but it must not gain a second projected copy unless that projected point is itself required by the final model. State explicitly when the waypoint is visual-only.
3. **Explain why coordinates are subtracted.** If a new axis uses `C` as its origin, explain that absolute `P.x` and `P.y` cannot be consumed directly. First calculate `Delta = P - C` because only movement from the new origin affects the new coordinate.
4. **Show one-unit conversion rates before multiplication.** Demonstrate that one unit right has signed shadow `cos(angle)` on the target axis and one unit down has the matching signed shadow. Then scale those rates by the actual signed movements.
5. **Use a running-coordinate diagram before addition.** Start at coordinate zero. Apply the first signed change. Apply the second signed change from the first result. Only afterward write the sum and name it a dot product.
6. **Verify the calculated point against its geometric definition.** After calculating `t`, construct `Q = C + t*n` and show that `(P - Q) dot n = 0`. Explain that zero normal component makes `P-Q` parallel to the boundary.
7. **Make every step change visible evidence.** A formula-only update does not pass. The main geometry or a dedicated companion diagram must visibly show the quantity introduced by that step.


### Lesson 4.9 repair — interaction validation and overlay-drawer rule

The failed Step 8 revision shipped with a JavaScript syntax error. That single error prevented both SVG diagrams from rendering and disabled the walkthrough buttons. It also left Geometry controls in a side column even though the requested layout required full-width diagrams and an overlay drawer.

Reusable rule: after any scripted HTML edit, run JavaScript syntax validation before visual QA. Then execute the actual Back/Next controls in Chromium. A screenshot of the initial page is insufficient. For wide proof diagrams, place geometry controls and walkthrough text in one right-side overlay drawer with explicit tabs; do not reserve horizontal diagram width for controls. The drawer may cover the diagram while open.

For projection explanations, separate: (1) choosing the measurement axis, (2) defining the target coordinate, (3) learning one-unit horizontal and vertical conversion rates, and (4) applying those rates to the actual signed Delta values. “One unit right” is a reference calibration, not a claim that the actual movement goes right.


### Compact overview and click-only overlay-control rule — Lesson 4.9

- Size an overview diagram by the information it contains. A small 9 × 6 orientation grid must remain compact even when the later proof diagram benefits from full viewport width.
- Preserve the learner-facing order: compact overview, scale explanation, chosen/derived value panels, then the detailed walkthrough.
- An overlay control drawer must open only after an explicit click. Do not use edge-hover or pointer-proximity activation.
- Use a normal compact icon button as the launcher. Provide an explicit close button, outside-click dismissal, and Escape dismissal. The drawer may overlay the diagram but must never reserve or change diagram width.


### Canonical detailed-stepper success pattern — Lesson 4.9

The learner explicitly confirmed that the completed Lesson 4.9 fourteen-step walkthrough reached the required explanation depth. Treat that state as the positive target when later lessons rely on concepts the learner has not met.

1. **Do not optimize for a small step count.** Use as many steps as needed to keep one new object, operation, or inference per state. Fourteen was correct for Lesson 4.9 because the concept chain required fourteen learner-visible transitions. Another lesson may need fewer or more.
2. **Define the result before calculating it.** The learner must know the exact object or number the upcoming operations are trying to produce.
3. **Explain untaught helper concepts in their own steps.** Terms such as normal, projection, coordinate on a rotated axis, conversion rate, signed distance, or transform origin cannot be embedded as parenthetical definitions inside a later formula.
4. **Make every step alter visible evidence.** The main diagram, value path, or code excerpt must visibly change when the explanation introduces another intermediate.
5. **Keep controls synchronized.** When a walkthrough has controls both in an overlay drawer and on the diagram, every control surface must read and write one shared step state. Disabling, current-step labels, formulas, and diagrams must update together.
6. **Provide diagram-local navigation.** A long proof diagram must expose previous/next controls without requiring the explanation drawer to remain open.
7. **Use the Lesson 4.9 completed 14-step state as the QA reference.** A later difficult lesson fails the total-beginner audit when it compresses a concept that Lesson 4.9 would have given its own visual step.
8. **Transform-origin explanations must isolate one transform at a time.** Name the layer being transformed, its pre-transform bounds, the destination bounds, and the coordinate space. Convert origin fractions into the actual pivot coordinate. Then trace at least the top-left and bottom-right points through `pivot + (point - pivot) × scale`, draw the transformed bounds, and show clipping or uncovered destination pixels. State explicitly whether the chosen origin is required or merely avoids a compensating translation.


### Flexible walkthrough length, formula expansion, and first-QA gate

This rule was added after Lessons 5.8 and 5.9 were mechanically generated with fourteen walkthrough states even though fourteen was only the successful count for Lesson 4.9.

1. **Fourteen is an exemplar, not a template.** Derive the walkthrough length from the actual dependency graph. Simple lessons may use fewer than fourteen states. Difficult lessons may use more than fourteen states.
2. **Never pad or compress to hit a count.** A step exists only when it introduces one new object, term, operation, intermediate result, inference, or implementation boundary that needs its own learner-visible state.
3. **Use a ten-step navigation threshold.** At ten or fewer states, one direct button per state is allowed. Above ten, replace the button wall with `Previous · Step X of N · Next`. Optional phase labels or a compact jump control may supplement navigation, but do not render one button for every state.
4. **Expand hard formulas in four layers.** Before numeric substitution, show: (a) a variable ledger with plain-language meanings, symbols, units/ranges, and origins; (b) the symbolic formula; (c) the same formula with current values substituted; and (d) every intermediate and final output with its next consumer.
5. **Name hidden time assumptions.** A discrete teaching update must state whether its time step is fixed, what value it uses, and whether that factor has been absorbed into coefficients. Do not present position and velocity updates as physical equations without the time boundary.
6. **Prefer signed causal terms.** When direction matters, preserve signs through intermediate values and explain them. For the spring teaching model, `D = -c × v` is clearer than an unsigned “resistance” followed by unexplained subtraction.
7. **The beginner audit is QA stage zero.** Before JavaScript syntax, screenshots, links, Xcode/Swift static checks, or archive integrity, cold-read the first sentence, first two sections, first formula, all new terms, and the longest state using only learner-confirmed prerequisites. Any unexplained dependency fails the artifact and triggers regeneration or splitting.
8. **Technical correctness cannot rescue incomprehension.** A page with valid code, working controls, and clean screenshots is still rejected when a total math and graphics beginner cannot state what every variable is, why each operation runs, and what consumes its result.
9. **Harder future chapters may be deliberately verbose.** Shader, sampling, physics, rendering, geometry, and capstone lessons should err toward complete causal explanation rather than compressed expert prose.


## Spring sign-cycle and graph-scale gate — Lesson 5.9 clarification

When teaching an underdamped spring, a position-only graph is insufficient if its scale hides later oscillations. Future spring explanations must distinguish:

- target crossings, where `d = T - x` and `S = k * d` change sign;
- peaks and troughs, where velocity reaches zero and changes sign;
- speed magnitude, which grows and shrinks within each half-cycle;
- damping, which reduces each later excursion;
- a lesson-specific settle threshold versus mathematically exact zero motion.

If a full-range graph hides residual motion, provide a near-target zoom or stop the trace at the declared settle point. Post-settle simulated values must be visually distinguished from the portion counted by the lesson diagnostic.


## Adaptive diagram and stepper layout

- A full-width diagram with a hidden or overlay stepper is a specialized layout, not the default. It was appropriate for dense mask/layer explanations where the complete visual evidence could not remain readable beside a step panel.
- Default to **two simultaneously visible columns** when the diagram and the current explanation both remain readable at `1920×1080`: diagram on the left, stepper on the right.
- Use a full-width diagram plus click-only overlay stepper only when a real space audit shows that the side-by-side layout would clip labels, shrink the geometry below a readable size, hide essential intermediate images, or force constant scrolling between evidence and explanation.
- Decide per lesson from the content. Do not inherit the previous lesson’s layout mechanically.
- Verify the initial state and the longest state at `1920×1080`. The learner must be able to inspect the current diagram and explanation together unless the full-width exception is explicitly justified.
- When an overlay is justified, keep diagram-local Previous/Next controls synchronized with the hidden stepper, and support explicit close, outside-click dismissal, and Escape dismissal.

## Markdown state hygiene

- `CURRENT_STATE.md` contains only the authoritative current state and current checkpoint. It is not a chronological revision log.
- The handoff keeps active rules, canonical exemplars, current files, and recent decisions. Compress superseded revision narratives into short lessons learned.
- The curriculum keeps the full 216-lesson plan plus frozen locks needed to generate later lessons. Do not add per-lesson implementation diaries, patch history, or complete lesson prose there.
- `AGENTS.md` and `USER_PREFERENCES.md` remain the canonical permanent-rule sources. Avoid copying their full contents into the state, handoff, or curriculum.
- Preserve facts needed for continuation. Remove repeated package manifests, repeated QA reports, superseded status blocks, and prose already present in the lesson HTML or Swift source.

### Consolidation, formulas-panel, and layout-choice gate

1. When two consecutive lessons form one tightly coupled causal chain, consider merging them into one primary lesson rather than forcing an artificial split. Preserve numbering stability with a short archive or redirect page if downstream lesson numbers would otherwise shift.
2. When a lesson uses several related formulas, place one prominent all-formulas panel near the top so the learner can cross-check symbols while reading graphs and stepper states.
3. The default desktop layout is two simultaneously visible columns: diagram on the left and current explanation/stepper on the right. Use a full-width diagram with a hidden or overlay stepper only when side-by-side presentation would make key visual evidence unreadable.
4. For time-trace lessons, provide at least one selected-sample table that lists the main variable values, whether each value increased or decreased from the previous sample, and which later formula consumes each value.

### Visual-quality preservation with compact memory files

1. Compaction must remove repeated historical logs, not the rules that produce good lessons. Keep a compact rule index, current-state summary, and canonical exemplars for 4.8, 4.9, and later successful lessons.
2. When consolidating lessons, preserve the visual hierarchy and interaction richness of neighboring lessons unless the learner asks for a simpler reference page.
3. For traces with many samples, provide a paged table whose columns are moments in time and whose cells show increase, decrease, or unchanged state from the previous sample.

### Multi-series trace alignment, moment-matrix, and functional-control QA gate

This rule was added after the first consolidated Lesson 5.8 repair drew curve segments with local slice indexes while the selected marker used the complete trace index. The marker therefore left the curve, and a JavaScript exception disabled the moment pager and explanation stepper.

1. **Use one tick-to-X mapping for an entire trace.** A solid pre-settle segment, dashed post-settle segment, selected marker, crossing marker, and turning-point marker must all derive X from the same global tick index and complete trace length. Never stretch each sliced path independently across the chart width.
2. **Use one value-to-Y mapping per compared graph.** When several series share one graph, calculate one combined numeric extent and draw every series and selected marker with that exact scale. Do not draw a second series using a separately computed Y range.
3. **Make selected markers provably coincide with their series.** The marker must read the same data record and the same coordinate functions as the curve. Browser QA must test beginning, middle, crossing/turning, post-settle, and final ticks.
4. **For a moment matrix, rows are variables and columns are ticks.** Show as many tick columns as the current viewport can hold. When all ticks do not fit, Previous/Next advances the horizontal tick window while preserving the same row order. A tick heading can select that tick in every graph.
5. **Color means comparison with the preceding tick.** Use distinct indicators for increasing, decreasing, and unchanged values. Event rows such as crossing, velocity reversal, and settle qualification use a separate event treatment.
6. **Functional QA clicks every navigation system.** Exercise the explanation Previous/Next controls through the complete state range and the tick pager through every page. A visible button is not evidence that its handler works.
7. **Any JavaScript exception fails the lesson.** A runtime error that stops later render functions invalidates diagrams, tables, and controls even when earlier controls still appear to work.
8. **Consolidation preserves the complete lesson scaffold.** Keep the causal stepper, prediction, coding challenge, hidden-answer exercises, checkpoint/review record, and evidence boundary unless the learner explicitly asks to remove them.

### Spring trace matrix and bounce-event gate

This rule was added after the consolidated Lesson 5.8 moment matrix lacked prominent spring parameters, repeated-formula context, and easily spotted bounce moments.

1. A time-trace matrix must keep variables as rows and moments/ticks as columns.
2. Each numeric cell must show the current value, a compact substituted formula or origin statement, and the increase/decrease/unchanged comparison with the preceding sample.
3. Parameters that control an entire trace, especially stiffness `k`, damping `c`, mass `m`, and target `T`, must remain prominent near the matrix rather than appearing only in a distant formulas panel.
4. A derived variable central to the current explanation, such as displacement `d = T − x`, must receive a prominent live readout for the selected tick.
5. Distinguish target crossings from bounces. A target crossing changes the signs of displacement and spring pull. A bounce/turning point is the later peak or trough where velocity reverses sign.
6. Make bounce moments easy to locate: highlight their complete tick columns, label peak and trough distinctly, and provide direct jump controls.
7. State that a discrete bounce marker identifies the first recorded tick after the velocity-sign reversal; the exact continuous turning instant may lie between two recorded ticks.

### Dependency-chain table gate

When several variables form a causal chain, include a compact dependency table near the primary values or matrix. Each row must state which other inputs are held fixed, identify the immediate formula dependency, name the next affected value, and state the visible result. Do not present a combined result such as `N = S + D` as monotonic in one input unless the other input is explicitly held fixed. For selected samples, show one live substituted chain from current inputs through the next visible output.

### Press-deformation painter-order and proof gate — Lesson 5.10

1. Draw the base control or material first. Paint pointer guides, dimensions, pivot markers, tracked points, labels, and proof overlays afterward so the fill cannot occlude the explanation.
2. A pivoted transform lesson must prove at least two points: one that changes on a single axis and one that changes on both axes. Show symbolic formula, numeric substitution, and visible point movement.
3. Keep measured layout bounds and transformed draw bounds visible simultaneously. Do not imply that `.scaleEffect`, `.offset`, or `.rotationEffect` remeasures the view.
4. Distinguish local pointer pixels, normalized pivot fractions, Boolean pressed state, q target, and current q before deriving scale or radius.
5. After a repeated structural defect, regenerate the lesson coherently rather than stacking another visual patch. QA every walkthrough state for occlusion, empty SVG output, and synchronized navigation.

### Single interactive-state source and step-preset gate

1. A live control and a walkthrough diagram must read the same canonical state. Do not keep a hidden render-only preset that overrides the selected button while labels and metrics display another value.
2. When a walkthrough state needs a particular scenario, set the canonical control state explicitly when entering that state. Keep the controls live afterward so the learner can compare alternatives.
3. Step captions must say when a scenario is merely the step default. If the learner changes it, formulas, labels, metrics, and SVG output must all update from the same new value.
4. Before packaging, traverse the walkthrough, change every live preset at early, middle, and late states, and verify the diagram, selected button, source-order metric, effective-order metric, and per-position trace remain synchronized.
5. Avoid compressed future-boundary phrases such as `no automatic sample path` or `explicit capture path deferred`. Name the missing object and data route: no recorded image or texture is passed to the effect; later code will record the source, map/crop the relevant region, and make those pixels readable.


### Coordinate-space and self-contained-step formula gate

1. Label every coordinate tuple at the point where it appears: owner-local, child-local, layout-slot-relative, parent-local, window, or screen. Do not leave a bare pair such as `(366.74, 107.83)` when more than one coordinate origin exists in the lesson.
2. Never compare coordinates from different spaces. Before describing visible movement, convert both the original and transformed point into the same coordinate system and subtract those matching-space values.
3. A walkthrough state must be self-contained. Repeat the current variable names, values, units, and coordinate spaces immediately beside the formula that consumes them. Do not require scrolling to an earlier input ledger to decode a long substituted calculation.
4. Every coordinate conversion must visibly name the origin being added or subtracted. Show `parent point = parent layout origin + slot-relative point`, with both substituted tuples.
5. When a final coordinate looks unexpectedly large, separate the contribution of the parent placement from the actual transform-induced movement. State which portion came from scale, rotation, translation, and origin conversion.

### Whole-group property and evidence-overlay gate

1. When a lesson isolates a whole-layer property such as alpha, keep the controlled child primitives opaque unless a child-specific alpha is itself the concept being taught. Apply the lesson property once at the owner boundary.
2. A faded ghost or comparison copy is evidence, not production content. Apply its evidence alpha outside the reused content view and label it separately. Do not introduce an `overallAlpha` parameter that makes every child duplicate the whole-layer property.
3. Every diagnostic overlay must be anchored to a named object and labelled with its meaning. Remove detached arrows or lines that can be mistaken for scene content.
4. The default transformed state must fit inside the finite Xcode `#Preview` canvas (412 × 915 points) without clipping. Choose scene bounds, artwork size, transform defaults, and slider ranges together; verify the complete transformed outline, not only the measured slot.


### Whole-owner property and inspection-overlay gate

1. When a lesson claims that a property is applied once to a complete owner, the sample code must apply that teaching property at the owner boundary. Do not also thread the same teaching value through every child.
2. If a faded ghost or comparison copy is needed, make it a separately named evidence copy and apply its fade once at that copy's owner boundary. Do not let reference-only opacity obscure the production property path.
3. Internal child colors may have intentional intrinsic opacity only when that distinction is necessary and explicitly named. For a lesson whose purpose is whole-owner alpha, prefer opaque child content so the single owner alpha remains visually and structurally obvious.
4. A transformed-drawing inspector must reserve enough space for the required presets. Do not decorate the inspection stage with a clipping boundary that cuts the evidence the lesson is trying to show. Verify the default and named presets in the finite Xcode `#Preview` size (412 × 915 points).
5. Every explanatory overlay must have a visible label or legend and a stated purpose. Remove unlabeled arrows or vectors that can be mistaken for scene content.


### HTML inline-code rendering gate

1. Standalone lesson HTML must use semantic HTML for visible code references: `<code>drawingGroup()</code>`, `<code>.blur()</code>`, and similar.
2. Do not place Markdown backticks in ordinary HTML prose. Browsers do not interpret Markdown there; the backticks become visible punctuation.
3. JavaScript template-literal backticks inside `<script>` remain valid and must not be replaced.
4. Before packaging, scan the visible HTML portion before `<script>` for unmatched or literal Markdown backticks. Any visible code token surrounded by backticks is a failed formatting check.


### Two-channel freshness and diagnostic-snapshot gate — Lesson 6.8

1. When a sampled result depends on both image content and geometry, name them as separate producer channels before showing update code. A current image does not make stale bounds current, and current bounds do not make stale image content current.
2. Define “current” against explicit displayed inputs. Do not use visual plausibility as proof of freshness.
3. Give each channel a visible frozen comparison state and a numeric trace that isolates its error. When both are stale, show how their output errors combine in one common coordinate space.
4. A deliberately retained old layer, bitmap, rectangle, or measurement is diagnostic evidence. Label it as such and do not present duplicate retained resources as the recommended production architecture.
5. Distinguish update causes by rendering phase: content changes must reach a new draw/record operation; geometry changes must reach layout/placement and a new coordinate conversion. Replaying an old resource does not refresh it.
6. Do not claim atomic same-frame synchronization merely because independent draw and layout callbacks both exist. State that timing/ownership coordination is a separate architecture concern unless the lesson actually proves it.
7. Keep feedback prevention separate from freshness. A sample can be current and still be recursively contaminated if the glass owner enters its own source recording.

### Main-path-first and diagnostic-case budget — Lesson 6.9

1. For Liquid Glass lesson implementations, begin with one clean production route that directly expresses the principal graphics idea.
2. Add an executable failure case only when it is required to understand, distinguish, or verify that idea. A failure case is not automatically worth a second layer, duplicate state, mode enum, or large conditional branch.
3. Prefer a compact static diagram, prediction, or isolated explanation when it can teach the defect without bloating the Swift source.
4. The main code path must be understandable without reverse-engineering diagnostic machinery. Production ownership, inputs, intermediate values, and consumers should be readable from top to bottom.
5. Replace unexplained numeric literals with named constants when they affect layout, geometry, sampling, or visible output. Explain why each non-obvious value was chosen and whether it is a coordinate, dimension, interval, visual alpha, or derived result.
6. Do not use fractional placement math merely for convenience when fixed lesson-local point coordinates communicate the same controlled geometry more clearly.
7. Prediction controls require dedicated visible button styling in light and dark themes. Browser QA must click every choice and verify selected-state styling and result text.

### Synchronization-first and estimate-boundary gate — Lesson 6.10

1. A moving sampled image that trails its consumer is not automatically a GPU-performance defect. Audit whether placement, crop, transform, and recording freshness come from the same current state before discussing optimization.
2. When controlled scene geometry makes a coordinate conversion directly derivable, use one source of truth. Do not write a second geometry state from `GeometryReader` or another later layout callback merely to reproduce values already known from the motion input.
3. State why the direct derivation is valid and where it stops being valid. Never generalize a shared teaching-scene origin to arbitrary nested production layouts without a real mapping architecture.
4. Treat width × height × bytes-per-pixel arithmetic as a scale estimate only. Explicitly name the assumed format and list the major omitted implementation details before making any memory claim.
5. Frame intervals such as 16.67 ms at 60 Hz and 8.33 ms at 120 Hz are total display intervals, not exclusive GPU budgets for one effect.
6. Keep wasteful comparison targets out of the iOS production route when arithmetic and diagrams can teach the extent difference. Do not bloat the code with a full-scene mode solely to demonstrate that it is larger.
7. Any claim about actual frame time, allocation, bandwidth, or dropped frames must come from a release-like device measurement. Xcode `#Preview` debug behavior and teaching estimates are not sufficient evidence.

### Command-source, raster-target, and sharp-foreground gate — Lesson 6.11

1. Never equate `drawingGroup()` or an extra render target with a guaranteed same-sized offscreen texture. State whether the view currently retains replayable drawing commands, is explicitly rasterized, or is forced into pixels by another property such as `.blur()`.
2. Whenever `drawingGroup()` appears, state its exact role: required for correctness, redundant because another operation already forces rasterization, or deliberately forced only to make a controlled teaching target concrete.
3. When a small destination replays a large source recording, name both cost domains. The small destination limits destination pixel storage and output area, but full-source command recording, ordinary scene drawing, replay traversal, culling, and other upstream work may remain.
4. Layer count is not buffer count. Do not describe an architecture as consuming N pixel buffers merely because it owns N `drawingGroup()` calls or extra render targets.
5. Keep content that must remain sharp—labels, icons, controls, highlights, or status marks—outside the layer that will receive the blur or distortion effect. Show the owner tree and declaration/draw order that enforces this separation.
6. Build the architecture through one readable production route before adding effects. The learner should be able to identify the producer, sample layer, material additions, sharp foreground, and final destination directly from top-to-bottom code.
7. For controlled shared-origin scenes, one position value may drive both consumer placement and negative source translation. State the shared-origin prerequisite and do not silently generalize the shortcut to arbitrary nested layouts.

### New-learning and non-repetition gate — Lesson 7.1

1. Before generating a full lesson, name the genuinely new mechanism, API behavior, mathematical operation, measurement method, or implementation step in one sentence. If none exists, do not generate a full conceptual lesson.
2. Limit prerequisite recap to the minimum inputs required by the new operation. Do not spend another numbered lesson proving ownership, coordinate, freshness, feedback, or command-versus-buffer rules that are already prerequisites.
3. Convert mostly repetitive consolidation into a short chapter checkpoint or merge it into the next substantive lesson. Do not count repeated architecture prose as new graphics progress.
4. Make the lesson title's operation visible in all three places: the main diagram, one exact value trace, and the Swift implementation.
5. When a transparent model differs from framework internals, label the model before using it. State what the model proves, what the public API documents, what remains renderer-owned, and whether the unknown changes the current design conclusion.
6. For Lesson 7.1, the equal-weight 3 × 3 RGB average is the teaching model. iOS `.blur()` is the production API demonstration. Do not claim the renderer uses nine equal samples, displayed 8-bit RGB arithmetic, or the shown rounding.
7. Keep the iOS explorer centered on the new mechanism. Do not rebuild Chapter 6 backdrop capture merely to attach one fixed blur.

### Rounded-shape halo, leaked blur, and 8-bit store gates — Lessons 7.9 / 7.10

These rules were added after the learner’s 7.9 and 7.10 questions. The same-size shadow card showed a side halo with four uncovered corner squares, the offset `y` / height pair was unexplained, “store” and “luma / chroma” were used as labels, CSS scaling hid chroma specks, and a dark canvas backing looked like a shadow.

1. **Name the AABB corner pockets of a rounded rectangle.** The bounding box is a sharp rectangle. The four leftover squares between those box corners and the arcs sit outside the path. A shadow that copies the rounded path never fills those squares with dark paint. Show them on the diagram before claiming the halo “goes around the card.”
2. **A downward offset is a translation, not a shorter rectangle.** If `top` increases by `offsetY` and `height` stays the panel height, the bottom moves down by the same `offsetY`. Draw the stage number line: glass top, shadow top, glass bottom, shadow bottom, stage bottom. State that subtracting `offsetY` from height would keep the bottom aligned and would not put extra halo below the card.
3. **A same-size comparison must not leak blur into the parent.** If `.blur()` can paint outside its view, clip that teaching card to the panel path so a fake side halo cannot appear. Do not let leaked blur along the flat sides contradict “no surround pixels.”
4. **Define `store` as writing the 8-bit integer.** “Store” means `channel8 = round(clamp(normalized) × 255)` is written into the bitmap. The true `0..1` ramp is not what the screen keeps.
5. **Define lesson luminance noise and chroma noise with one pixel.** Luminance noise (this lesson): the same signed offset is added to red, green, and blue, so the speck only gets lighter or darker. Chroma noise (this lesson): a different signed offset is added to each channel, so the speck changes color family. Show the three stored integers and three color chips before using those names in a comparison.
6. **Show rounding bins if the lesson claims stripes.** Neighboring true values that all round to one integer are a stripe. That is ordinary 8-bit rounding of a slow ramp, not a special property of the remainder recipe. A bin diagram that does not say what the bin is *for* is incomplete: the bin is the bucket that makes those neighbors collide on one stored integer.
7. **Do not fill unused canvas corners with dark paint** that can be read as a shadow. If the ramp is clipped to a rounded path, the pixels outside that path must not be an unexplained black frame.
8. **Pixel-scale teaching rasters need nearest-neighbor display.** CSS `width: 100%` interpolation blends neighboring stored integers and can make chroma noise look like a slightly darker luminance field. Set `image-rendering: pixelated` (or an equivalent) on those canvases.

### Teaching-stand-in, labelled-region, and recipe-pattern gate — Lesson 7.10 follow-up

This rule was added after the learner asked why Lesson 7.6 interiors “change slowly from pixel to pixel” when the artwork is two large same-color fields, and after the companion used ramp, stripe, and rounding bin without pointing at those pixels or saying whether the remainder formula is a pattern or a random roll.

1. **Name the exact region.** If the previous lesson’s artwork has large uniform fields, do not say those interiors change from pixel to pixel. Name the region that actually changes after blur (the seam where different colors mix). State that deep interiors of a uniform field stay one stored color because their neighbors are the same color.
2. **Label a teaching stand-in as a stand-in.** If the lesson draws a slow ramp instead of the previous artwork, say so in the first learner-facing section. Show both pictures. The ramp exists so 8-bit stripes are countable. It is not a claim that the 7.6 navy field was itself a ramp.
3. **Label ramp and stripe on the same picture.** A ramp is the true slow change: each column has a slightly different normalized value. A stripe is a run of neighboring pixels that stored the same 8-bit integer. Draw both labels on one annotated image before using the words in later prose.
4. **A rounding bin is a bucket, and the lesson must say what it is for.** It is the interval of true values that all round to one integer. Show actual columns sitting in that interval. The bin exists to explain why a slow ramp produces regular stripes. It is not a second formula, not a mixing table, and not a property of the remainder recipe.
5. **Show whether a coordinate recipe is a frozen pattern or a random roll.** If the offset comes from remainder arithmetic on column and row, draw the slot map. State that the same (column, row) always returns the same slot, that the map tiles, and that this frozen pattern is not the 8-bit stripe generator. Amount 0 with no recipe still bands. If the multipliers exist to scramble neighbors so the grain tile does not look like vertical bars, draw that scrambled tile next to the unscrambled `column remainder 16` bars.
6. **If the lesson claims N consecutive pixels hit N remainder slots, prove it by listing one period.** Name the step and the wrap. Prove non-collision: if two columns distance `k` (with `1 ≤ k < N`) shared a leftover, then `k × step` would be a multiple of the wrap; show that the wrap’s prime factors cannot come from the step, so `k` would have to be a multiple of the wrap, which is impossible in that range. Show a counterexample step that collides early, such as +8 wrapping at 16, which collides at `k = 2`. These remainder slots are not the 8-bit rounding bins.
7. **Keep the minus on a signed offset.** Slot chips must show `signed` with its sign, not only `unit` in `0..1`. A gray encoding of signed (darker = negative, lighter = positive) is a display mapping onto `0..255`. It is not `abs(signed)`. Pair one positive-signed pixel with one negative-signed pixel and add the negative offset to the true channel so the stored integer can decrease.
8. **Remainder-slot gray is not stored red.** If a slot walk uses many gray shades, label that row as an encoding of `signed` in `−1..+1`, stretched toward black and white. Show a second row of the actual stored 8-bit RGB after `true + signed × amount`. At amount `0` that row is one rounding bin. At a tiny amount near `0.5/255` it spans two or three adjacent integers. At production amount `0.02` it spans several integers (about `±0.02 × 255 ≈ ±5`), not only `k−1, k, k+1`. Do not let the learner read 16 slot grays as 16 rounding bins.
9. **Do not drop labelled pictures when a companion is split.** The uniqueness walk-and-gap proof is the canonical +7 argument. The ramp-versus-stripe diagram and the 16×16 remainder tile are separate pictures. Keep them in that companion after the uniqueness stepper. Do not replace them with a second uniqueness proof.
10. **A linear leftover still has straight level-sets.** “Not vertical bars” is not “no stripes at all.” If leftover is `((column + 3) × 7 + (row + 5) × 13) remainder 16`, equal leftovers lie on straight lines. The shortest steep line is one column left and three rows down. Immediate neighbors still differ, because that step is not (0, 1). `+3` and `+5` only rotate which leftover sits at the origin; they do not create the tilt.
11. **Rounding-stripe vs leftover-line must be a pixel walk, not a jargon card.** Do not write “amount 0 still makes that band,” “the remainder recipe is not an input,” “lattice,” “level-set,” or `arctan`. Define amount as the Lesson 7.10 slider before using it. Show five pixels storing 85 with no leftover formula. Then compute the add for one pixel. Then show the neighbor on the right (different leftover) and the pixel three down and one left (same leftover), with every intermediate number on the picture. Draw gold cells on that walk before claiming a leaning stripe. Map Lesson 7.12’s flat navy to “no 85 band, only this walk.”
12. **Show leftover grain as stored destination RGB, not only as a full-range gray encoding.** If production amount moves 8-bit channels by a few integers, a black-to-white leftover map hides the pairing the learner sees on glass. Draw the actual stored RGB on the actual destination color, zoomed so one pixel is a large square. If consecutive columns add 7 leftovers wrapping at 16, list leftover, signed, add, and stored RGB for one row. Mark leftover 14 as the lighter leaning stripe and leftover 5 as the darker neighbor stripe. Also show leftovers 0 through 15 in leftover order so the 16 close navy shades are visible as a slow ramp. Amount is the Lesson 7.10 slider. Do not write lattice, level-set, or arctan.

**Positive-pattern status (Lesson 7.10 confirmation, 2026-08-25):** leftover-order versus column-order stored-navy rows, plus gold leftover 14 next to pink leftover 5 on the actual destination color, made the darker-then-lighter grain pairing understandable. Keep that pairing picture when a remainder step of about half the wrap looks like two shades.

### Contrast verdict versus leftover structure versus backing — Lesson 7.12 follow-up

This rule was added after the learner asked what “uniform fields leave a color family” meant, whether a short left-aligned text column and a sharp rim counted as leftover, what “both miss” required, and whether a local backing was the outer shadow.

1. **Leftover is an eye observation, not a 4.5 pass.** After the frozen recipe, ask whether the destination class is still nameable from the frosted fill. Contrast asks a different question: whether the label separates from the interior RGB.
2. **Define a uniform field with one color.** Every pixel starts as the same RGB. Dark is rgb(26, 64, 102). Light is rgb(224, 230, 237). Its leftover is the remaining color neighborhood, still dark navy or still light gray. Do not write “color family” without that meaning in the same sentence.
3. **Rim and inner band are not leftover.** They are later siblings on the path. They stay sharp because they are not in the fill blur. A blurry fill is the recipe working.
4. **Tile destination glyphs across the full field.** A short left-aligned text column hides leftover in the interior and makes the class look like a caption strip. Repeat the line across width and height.
5. **“Both miss” means white contrast below 4.5 and black contrast below 4.5.** Show the live pair for the current class. If none of the lesson’s classes do that, say so. Do not imply a repair that the live numbers do not need.
6. **A local backing is a more-opaque plate under the letters.** It is not the Lesson 7.9 outer shadow. Name stronger tint as the other material change. Do not offer blur radius as the contrast repair.

## Simple-mechanism clarity gate — Lesson 7.3 revision

- For a simple API behavior, state the exact question it answers in one plain sentence before introducing diagrams, formulas, or production integration.
- Never use a specialist term such as `hue`, `overscan`, `padded source`, or `crop the center` before defining the concrete pixels or rectangles it refers to. Prefer plain spatial wording when the term adds no value.
- Keep the mechanism walkthrough focused on that mechanism. A later production application belongs in a separate section and must not appear as an unexplained final step.
- When `crop` is used, define it spatially: select one rectangle from a larger image and ignore pixels outside the selected rectangle. State whether cropping happens before or after an effect.
- When transparent black appears in blur arithmetic, explain the apparent contradiction directly: alpha zero means it contributes no visible black; in premultiplied averaging it can lower output alpha.
- Use the fewest walkthrough states required by the causal chain. Edge treatment needs source bounds → requests → missing requests → replacements → output; it does not need a ten-state production detour.

### Code-synchronized transform-pipeline gate — Lesson 7.4 revision

1. When several transforms act at different stages, explain them in one execution-ordered stepper rather than separate origin steppers. Keep the responsible Swift lines visible beside the current image.
2. Distinguish target sizing from command transformation: a snapshot/`ImageRenderer` with a given size defines destination bounds; it does not automatically resize previously recorded source commands.
3. Distinguish a `GraphicsContext` pivot from a later `.scaleEffect` pivot. Name the owning object, local coordinate space, units, execution time, and downstream consumer for each.
4. Use the sample's real aspect ratio and layout-derived bounds. Do not replace a portrait `#Preview` with an invented landscape rectangle that reverses the observed right-versus-bottom error. Use bounds close to the real 412 × 915 point `#Preview`.
5. Compare transform combinations only when the new concept requires them, and calculate every combination from one canonical geometry model. The diagram, formulas, controls, and Swift readout must agree.
6. A screenshot proves only its visible screenshot-space bounds. Do not silently treat screenshot pixels as runtime device pixels. When the screenshot contradicts a simplified calculation, expose actual runtime output size, rounded working size, pivots, transformed bounds, and gaps instead of forcing an explanation.
7. Use the current public SwiftUI API being taught. For explicit layer scaling, use and explain the pivot on `.scaleEffect`; do not substitute a different origin API from another modifier.

### Source-to-smaller-layer selection gate — Lesson 7.4 follow-up

1. When source commands are replayed into a smaller target, never describe a sized snapshot/`ImageRenderer` as choosing a crop from the source. It creates a destination size and a `GraphicsContext` with that size.
2. Show the three operations separately: source-command transform, intersection with the finite raster target, and inverse mapping back to original-source coordinates.
3. For every pivot combination that materially changes the result, keep these four images visible together: full original source with selected original region, full transformed command bounds, stored working-buffer pixels, and final replayed output.
4. Explain same-container scaling before switching coordinate spaces. Explicitly say when a pivot belongs to the original source, the smaller recording `GraphicsContext`, or the later `.scaleEffect`.
5. Name the operation that actually enforces finite bounds. In the Lesson 7.4 route, `.blur()` or `drawingGroup()` can promote the layer to an offscreen buffer and clip content to the layer bounds; the size argument alone does not guarantee command clipping.

### Full-provenance and consecutive-transform gate — Lesson 7.4

1. Never show a derived transform bound, pivot, margin, retained region, gap, or coordinate as a result-only number. In the same visible state, define every descriptive value, state its coordinate space, show the rule in words, substitute named values, show intermediate arithmetic including rounding, state the result, and name its next consumer.
2. When a large source is replayed inside a smaller recording `GraphicsContext`, show the origin-alignment bridge explicitly: an original artwork point first receives the same numeric coordinate in the working drawing space when both local origins are `(0, 0)`. Only then apply the inner `GraphicsContext` scale.
3. Treat a sized snapshot/`ImageRenderer` as finite destination bounds, not as a resize or source selection. Show that drawing coordinates may extend beyond those bounds and that offscreen rasterization/clipping decides which transformed pixels are stored.
4. Keep two outcomes permanently separate: the original source retained while recording is determined by the recording transform plus working-buffer bounds; the original source still visible after final drawing is determined by the already-stored working image plus the later layer transform and final-output clipping.
5. A later `.scaleEffect` pivot never changes which original source pixels were retained earlier. It transforms already-stored working-layer points into output-local points and can only change their placement and final visibility.
6. For every pivot combination, keep the original retained region, mapped commands, stored working pixels, final visible output, active code, and complete calculations in the same state. Do not require the learner to remember values from an earlier step.


### Word-first transform traces and measured diagram geometry — Lesson 7.4 follow-up

1. Do not require the learner to memorize one-letter aliases such as `S`, `W`, `R`, `F`, or `O` in a graphics transform walkthrough. Use descriptive names in visible material: original artwork point, recording pivot, stored working-layer point, enlargement pivot, and final displayed point.
2. Keep successive transforms as successive rules. Do not substitute one transform formula into another or simplify them into a closed algebraic expression unless that closed form is required by a later implementation step.
3. State the transform rule in words before arithmetic: new position = fixed pivot position + distance from the pivot after applying the scale. Apply the rule independently to horizontal and vertical positions.
4. When a stored point passes through a later layer transform, explicitly state that the later pivot cannot change which original point was retained. It changes only the output position of the already-stored working-layer point.
5. In spatial diagrams, draw measurement lines or brackets wherever space permits. Mark the full rectangle width and height, the stored/displayed image width and height, and every non-zero empty margin, clipped overflow, or uncovered output strip with its current numeric amount.
6. Dimension graphics, formulas, controls, and explanatory prose must use the same canonical geometry. Never draw a margin whose direction or amount disagrees with the active calculation.


### Pair-origin remap is not a canvas transform — Lesson 8.8 clarification

This rule was added after the learner asked whether “moving origin / center” translates the canvas, then asked what a “fixed window” was, and rejected “distance from 0 means distance from the middle” because the center’s UV is still `(0.5, 0.5)`.

1. **Name the objects that stay put.** When a lesson remaps a coordinate pair, state in the same section that the draw rectangle, Canvas, `ShaderRect`, and `fragCoord` do not move. The new pair is extra numbers computed from UV. It is not a Canvas translation and not a `GraphicsContext` transform.
2. **Define origin of a pair as a pixel, not as a moving paper.** The origin of a pair is the pixel whose two numbers in that pair are both 0. Subtracting `(0.5, 0.5)` makes the visual-center pixel’s extra pair `(0, 0)`. It does not slide the rectangle. Do not reuse Lesson 7.4 thumbtack/paper-slide language for this remap. If a diagram draws a cross, say the cross is painted at the pixel whose extra pair is `(0, 0)`.
3. **Keep UV and the extra pair as two labelled tuples for one pixel.** The visual-center pixel still has `uv = (0.5, 0.5)`. That is the fraction from the top-left. After subtract, that same pixel has `p = (0, 0)`. Do not call `(0.5, 0.5)` a leftover distance. Do not add 0.5 back. Do not write “distance from 0 means distance from the middle.”
4. **The practical result must be visible in this lesson.** Show a stripe around the visual center, or another test that uses `p` now. Do not open with an undefined Chapter 9 lens as the first sentence.
5. **State why the lesson exists, as two questions.** UV answers “how far from the top-left?” The extra pair answers “which way from the middle?” 0.5 is the UV of the visual center, not a random number. Name the later consumers after that: Chapter 9 circle in the middle, scale around the center, background-sample offsets, and Chapter 8’s radial checkpoint. Do not leave the arithmetic as an unmotivated remap.
6. **Separate required subtract from optional × 2.** Subtract puts 0 at the middle. After subtract the left edge is about −0.5 and the span of `p.x` is still about 1. Multiply by 2 maps that edge to about −1, so 1 means one half-width. Confirm the learner’s span observation: after × 2 the numbering covers about 2, so a fixed numeric test covers less of the rectangle. That shrink is the 1D preview of Lesson 9.9. × 2 is not required to center.
7. **Name the two comparison numbers. Do not say “window.”** Both stripe programs contain `if (p.x > -0.25 && p.x < 0.25)`. Those two numbers stay written in the string. Multiply changes each pixel’s `p.x`. The rectangle size is unchanged. Show one pixel whose `p.x` was `-0.25` and becomes `-0.50`, so it leaves the stripe.

### Countable two-paper scale teaching gate — Lesson 7.4


The 28-state production-dimension walkthrough did not make the two scales understandable. The learner still could not see why a given original region is stored or why that region lands at a given output place. More substitution arithmetic was not the missing piece.

1. Teach one scale on one destination first. Use a thumbtack/pin metaphor. Trace two opposite corners and one landmark. Do not introduce the second scale until those three points are predictable.
2. Use an even toy grid such as `8 × 8 → 4 × 4` with no rounding before `483 × 528` production numbers. Rounding is a later footnote, not the first number the learner meets.
3. Name two physical papers: the small working paper and the large display paper. State that “center” is the center of the paper being drawn into right now.
4. After lining up the two top-left origins, show that the small paper’s center sits in the original photo’s top-left quadrant. This single aligned number line is what makes a center recording pivot discard the original right and bottom.
5. Show discarded original pixels as gone before discussing enlargement. State that the second scale cannot restore them.
6. Present the four pivot combinations as a 2 × 2 of pictures — small-paper contents plus final display — not as four more arithmetic-only states.
7. A 20-plus-state stepper of full substitution arithmetic is not a substitute for this sequence.

### Exact-root geometry values and square UV rectangle — Lesson 9.1

Recorded when Chapter 9 started. Lessons 8.11 and 8.12 completed without questions. Those lessons stayed clear because one teaching pixel had hand-checkable arithmetic, production was one MSL path, and comparisons lived in HTML. Reuse that, plus these geometry rules:

1. Draw a right triangle with labelled legs before any square-root formula. Do not open with the words Euclidean, hypotenuse, or Pythagorean theorem. Define square corner, legs, and long side first. Historical names may appear after the arithmetic.
2. Use teaching values whose squares add to an exact square (3-4-5, or 0.30 / 0.40 / 0.50). The learner must be able to check `sqrt` by multiplying, not by trusting a calculator.
3. When a UV-space length must match a pixel-space length, the teaching rectangle is square. State that a non-square UV stretch makes one UV step right a different pixel length than one UV step down.
4. Unsigned `length` is never negative. A minus on a difference is squared away. Signed distance is a later subtract of a radius, not a property of `length`.
5. Keep two zeros distinct when a later subtract moves the zero: 0 in `p` remains the visual center; 0 in `sd` is the shape boundary.

### Exercise-answer compared-silhouette gate — Lesson 9.5

Recorded 2026-09-02 after the learner could not parse two hidden 9.5 answers. One compared the capsule to `length(p) − radius` using a calculator length 0.2236 and no picture. The other named “Lesson 4.3’s circle limit” without showing the inner segment collapsing to a point.

Hidden exercise answers are still teaching. They follow the same exact-root and labelled-geometry rules as the lesson body.

1. **A comparison question names both formulas and the visible question.** Do not ask “what silhouette” and “what happens to the top flat” in one breath. Name the mistaken formula, the production formula, and whether the named pixel is on the boundary or outside.
2. **The hidden answer draws both boundaries and the named pixel on one picture.** Caption-only comparison of two shapes is a failed answer. Point at the pixel that both formulas agree on, and the pixel that splits them, when that split is the diagnostic.
3. **Lengths in the answer stay exact-root.** Do not introduce a calculator length such as `sqrt(0.10² + 0.20²) ≈ 0.2236`. Move the teaching pixel to a 3-4-5 pair (here `0.15 / 0.20 / 0.25`) so the learner can check by multiplying.
4. **A named limit is a picture, not a cross-reference.** If shrinking a slider makes a capsule become a circle, draw the inner segment becoming one point at `C`, then the grown circle. Do not leave “Lesson 4.3’s circle limit” as the only explanation.

**Verification before packaging an exercise that compares two formulas or two shapes:**

- Can the learner point at both boundaries and the named pixel on the answer figure?
- Can they check every length in that answer by multiplying, with no calculator root?
- Does the question state which formula is the mistake and which visible object changes?

### Comparison-mode and control-row gate — Lesson 9.1 lab

The lab put two gray-store rules and three pixel-mark buttons in one unlabeled row. Walk-around was named in the lab and explained only in a later section. The learner could not tell what Walk-around gray stored, why its dark region was a diamond, why Straight-line gray stayed dark outside the green circle, or why the last three buttons did not look selected.

1. Before a comparison mode is clickable, state the exact number it stores, at the teaching pixel, and the visible shape of equal-value pixels.
2. State the gray contract: stored channel = that number, 0 is black, 1 would be white. Name the largest number that actually appears in this rectangle so the learner does not expect white outside an equal-value outline.
3. Separate “which number is stored” from “which pixel is selected” into two control groups. Each group has its own selected styling. A pixel-mark button must not look like a third store rule.
4. An equal-value outline is the set of pixels that share the selected pixel’s number. It is not a cutoff after which the picture becomes white. If four lighter corners make a circular dark region look diamond-shaped, say so and point at the outline.

### Nested equal-value gray-field gate — Lesson 9.1

The learner could see that Straight-line gray looked circular and Walk-around gray looked diamond-shaped, but the lesson did not name the nested family of equal-value outlines that produces that spread. The analog of “a smaller-radius circle” for the diamond was unstated. “Diamond” was not reconciled with “a square rotated 45 degrees.”

1. When a lesson stores a scalar as gray across the rectangle, show at least two nested equal-value outlines of that scalar. A smaller stored number is darker. A larger stored number is lighter. The picture is stacked outlines, not one filled blob of a single gray.
2. Name the analog of radius for each store rule. For `length(p)` the analog is the straight-line length, and equal values form a circle. For `abs(p.x) + abs(p.y)` the analog is that same walk-around number, and equal values form a diamond.
3. Point at one inner outline in both pictures, using the same stored number when possible (for example 0.25), so the learner can match “smaller circle” to “smaller diamond.”
4. If a diamond is a square standing on a vertex, say so in the same paragraph: four straight sides join the axis points; on a square teaching rectangle those sides are equal and meet at square corners; the vertices point along the axes, not at the teaching square’s corners. Keep the course word diamond so the outline is not confused with the axis-aligned teaching square.
5. Confirm a correct learner reading in the same wording the learner used, then add only the missing precision. Do not replace a working picture (“smaller radius is darker”) with a denser synonym.

### Comparison-table leftover and path-naming gate — Lesson 9.1 section 6

Section 6 opened with Lesson 8.11’s “Green cells increased… Stored red is the gray channel.” Those sentences named a color-coding scheme and a red-channel leftover without saying what the table compared. “The straight run cuts the corner” was used instead of naming two paths. Walk-around was repeated across the lesson without stating the question it answers.

1. A comparison table must open by naming the object (one teaching pixel), the candidate operations, and the output in the same units as the store.
2. Do not write “stored red” when the store is a gray triple. Name the number written into red, green, and blue.
3. If row cells are colored by increase or decrease, define that coloring in the same paragraph, as a comparison to the row above, not as a quality judgment. Do not copy another lesson’s table legend.
4. Do not write “cuts the corner” or “straight run.” Name both paths: the two-leg path through the right-angle point, and the one segment that does not visit that point.
5. If a comparison quantity is named in several sections, one section must state the question it answers, the picture it would paint, and why production does not use it.

### Load-bearing section budget — Lesson 9.3 quality review

Recorded 2026-08-31 after the learner confirmed 9.2 and 9.3 were progressing well, then named reusable friction in the later sections. Overall quality stays high. Beginner-first traces stay. The failure was padding after the concept was already understood.

The first few sections carry the lesson. Later sections that restate the same causal chain waste time.

**Canonical 9.3 mapping (reuse the roles, not the exact titles):**

1. **Intro stays.** Practical question, leftover objects, new operation, one teaching value.
2. **Known-info visualization merges into the intro.** If a section mostly restates a completed lesson and the picture is the only new help, fold that picture into section 1. Do not keep a standalone recap section.
3. **Essence section is load-bearing.** This is the new operation, with objects, formula, one traced value, and (when it helps) the interactive lab. If the learner misses this section, later sections cannot repair it.
4. **Skip a multi-pixel comparison table** that only restates values the essence section or lab already computed, unless a new branch or region is otherwise invisible.
5. **Stepper is not automatic.** Keep a stepper only when the new operation is a sequence the lab cannot show in order (piecewise region, nearest-on-segment, multi-stage grow). If the essence section plus lab already traces the value, omit the stepper. When kept, every step must change the current operation. Do not spend steps recapping a prior lesson.
6. **iOS route stays.** Short production excerpt plus what each new line consumes and produces. Preview into the full explorer.
7. **Prediction, coding challenge, and exercises stay.**
8. **Device checkpoint stays**, but keep it short. Do not pad it. The learner often skips it.
9. **Evidence: keep Established. Replace Not claimed with What’s next.** Name the next lesson that consumes this object. Do not list topics this lesson did not teach.

**Wording cuts (apply to every later lesson):**

1. **Do not negate-reference a prior lesson as the point of a sentence.** “This is NOT Lesson 4.8’s binary mask” is noise when the new formula is already named. A leftover is named only to identify the input this lesson consumes.
2. **Do not write meta-lab sentences.** Forbidden examples: “The displayed MSL string stays the smooth production route.” “Direct buttons are shown because there are ten states.” “Swift prints sd using the same arithmetic as the HTML table.” “Hard if and linear comparison live in the HTML lab.”
3. **Do not repeat the 8.9 slot-write recap.** The `.metal` file is compiled at build time, and a slider only passes a new Shader argument. Mention a uniform only when this lesson adds a new slot or a new consumer of that slot.
4. **Stepper captions name this lesson’s objects and numbers.** Do not open a step with “Lesson N.M already blended across a band. Its x was uv.x.” If a prior function is reused, say the function, the new input object, and the current teaching numbers in one breath.
5. **Cut sentences that only restate a comparison already visible.** “Linear mask uses 1 − linearFraction with no bend” is a vague comparison unless the two numbers sit side by side. Prefer one live pair: linearFraction = …, curvedFraction = ….
6. **Simplify wording slightly**, but never by deleting a beginner definition, a teaching-value trace, or a required unit/range. If a cut would make the causal chain uncertain, keep the sentence.

**Verification before packaging:**

- Can the learner explain the new operation after sections 1–3 (or 1–4 if a stepper is justified) without reading the table, the later stepper, or Not claimed?
- Does every remaining section add a new object, a new operation, or a new consumer?
- If a stepper exists, delete any step whose diagram and caption would still make sense in a prior completed lesson.

### First-section labelled geometry and teaching-pixel provenance — Lesson 9.4 quality review

Recorded 2026-08-31 after the learner stopped in the first sections of Lesson 9.4. The load-bearing section budget is about later padding. Applying it by shrinking the opening produced the opposite failure: leftover cards, undefined names, and a static stepper.

The first sections must still carry the lesson. They must do it with pictures and provenances, not with denser jargon.

1. **Do not “budget” the opening.** Cutting later recap must not remove first-section pictures, term definitions, or “why this number” traces. Merging known-info into the intro still requires a picture of each leftover object. Three leftover cards with no diagram are not a merge.
2. **Open with the new output and the practical question.** The first learner-facing picture is the new field or shape. Do not open with a formula pipeline of undefined names, leftover cards, or the phrase `zero contour`.
3. **Label every new geometric object before any formula.** For a rounded-rectangle distance field those objects are: visual center `C`, outer sharp box, outer flat, construction-circle center, inner box, join point, teaching pixel, and `q`. A name in a card is not a definition until the picture points at the object.
4. **`C` is not a construction-circle center.** The visual center is the origin of `p`. A construction-circle center is one corner radius in from both meeting outer edges. Draw both. In a corner, the signed-distance analog of Lesson 9.2’s `length(p)` is the straight-line length from the pixel to that construction-circle center, not the length from `C`.
5. **Draw half-size versus full size.** `outerHalf = (0.30, 0.20)` means center-to-right-edge 0.30 and center-to-top-edge 0.20. Full width is 0.60. Full height is 0.40. The corner radius is not extra height. Dimension-line this. Do not leave the learner to guess `0.60 × 0.30`.
6. **A teaching pixel needs provenance on one picture.** Show the starting point, the direction, why that direction has length 1, the scale by the radius, and the resulting coordinates. For `p = (0.26, −0.18)`, the pair `(0.6, 0.8)` is a 3-4-5 direction whose long side is 1 because `0.6² + 0.8² = 1`. It is not a pixel coordinate. `0.10 × (0.6, 0.8)` is the radius-long step from the inner corner.
7. **Define spatial nicknames in the same sentence.** Do not write `outer right flat x` until the lesson has said: the right straight edge of the rounded rectangle, which sits at `x = +0.30`. Do not write `zero contour`; write `pixels where sd = 0`, which is the shape boundary.
8. **A stepper’s left picture must change the drawn objects every step.** New points, new segments, new dimension lines, or a new highlighted region. Caption-only change over a static filled field is a failed stepper.
9. **`length(p)` does not become a rounded-rectangle formula.** `length(p)` remains the straight-line length from `C` to the pixel. For this shape, production uses inner-box distance minus the corner radius. In the corner region that inner-box distance is `length(q)`.

**Verification before packaging a geometry lesson:**

- Can the learner point at `C`, one construction-circle center, the inner box, one outer flat, and the teaching pixel on the first labelled figure?
- Can they say why the teaching pixel’s coordinates are exactly those numbers, and which drawn segment is `sd`?
- Does each stepper step draw a different set of objects?
- Is full size stated next to half-size, with the corner radius not added into the height?

### Named-formula-before-substitution gate — Lesson 9.6 clarification

The learner asked, repeatedly, that formulas be written in full with named operations. Lesson 9.6 had failed this: the live lab printed `sdA = −0.15`, the hero printed `sdA = 0.10 − 0.25 = −0.15`, and the stepper printed `min(−0.15, +0.05)`. Those are substitutions and results, not the formula.

**Required chain, everywhere a calculation is shown** (hero, all-formulas panel, stepper rule, live lab readout, prediction, exercises, checkpoint, review record):

```text
sdA = length(p) − radiusA = 0.10 − 0.25 = −0.15
```

or stacked:

```text
sdA = length(p) − radiusA
    = 0.10 − 0.25
    = −0.15
```

**Forbidden as the displayed formula:**

- `sdA = −0.15`
- `sdA = 0.10 − 0.25 = −0.15` (dropped `length(p)` and `radiusA`)
- `min(−0.15, +0.05) = −0.15` (dropped `min(sdA, sdB)`)
- a live readout that only prints the current number

**Rules:**

1. The symbolic formula with named operations and variables is always visible.
2. Numbers appear only as a substitution of that same formula.
3. The result is the last term, not a replacement for the formula.
4. Live readouts recompute this full chain on every click or slider move.
5. Do not re-expand a completed prior operation unless that operation is itself being corrected. In Lesson 9.6, keep `length(p)` as the named Lesson 9.1 leftover; do not rewrite it as `sqrt` on every line.
6. Production MSL may still use literals such as `0.25`. Teaching text next to that code still names `radiusA`, `radiusB`, and `B`.

**Verification before packaging:**

- Open the live formula box at the teaching pixel. Can the learner read `sdA = length(p) − radiusA = …` without reconstructing the operations from memory?
- Does every stepper rule, hidden exercise answer, and prediction verdict keep the named operations in the same sentence as the numbers?

### Eval does not wrap the read pair — Lesson 9.8 clarification

Recorded 2026-09-10 after the learner asked whether `readCoord.x = 20 − 0.10 × 400 = −20` wraps to 380 because the translate shader has no `fract`.

1. **`eval` passes the pair as written.** It does not `fract`, `mod`, clamp, or remap a pixel into the draw rectangle. A negative read x stays that negative number.
2. **Name which program still produces a color.** A color appears at an out-of-range pair only if the *input* program is defined there. For the stripe input that definition is `fract(uv.x × 5.0)` inside the bound shader, which is Lesson 8.10’s leftover wrap (`fract(−0.25) = 0.75`), not a pixel wrap of −20 to 380.
3. **State this in the same lesson, not only in What’s next.** The first lesson that asks `eval` at a transformed coordinate must show one left-edge write whose read x is negative, with the named input formula still visible.
4. **Do not let a periodic input hide a later tile mode.** A bitmap or Metal/CI sampled layer would not keep striping past the edge unless its sampler wrap was Repeat. That difference is Lesson 9.12. A same-color match between −20 and 380 is an accident of `fract(uv.x × 5)`, whose period is one orange–navy pair (0.20 of the width), not a property of `eval`.

**Verification before packaging a sample-offset lesson:**

- Can the learner say what pair `eval` receives at a write pixel with x below the offset in pixels?
- Can they name the input formula that still returns a color there, and say that this is not wrapping the pixel into the rectangle?

### Two rulers for a coordinate rename — Lesson 9.9 rewrite

Superseded for this learner by **Confirmed scale walk; UV convert is leftover** (2026-09-11). Keep the write-versus-read split. Do not reopen dual UV/`p` rulers after the learner has said they already convert points to UV.

Recorded 2026-09-10 after the learner stopped at Lesson 9.9’s four-step stepper. The page treated `p = uv − 0.5`, `p / scale`, and `+ 0.5` as a pile of numbers. It never drew that 0.80 and 0.30 are two names for the same pixel, or that +0.5 is the inverse rename so `eval` can speak UV. Lesson 8.8 had said “do not add 0.5 back” because that lesson’s `if` tested `p`. This lesson’s `eval` needs UV. The contradiction was not reconciled. The write pixel looked as if it remapped to a new position.

1. **Draw two rulers on the same pixels before the formula.** UV from the left: 0, 0.5 at `C`, 1 at the right. `p` from `C`: −0.5, 0, +0.5. The ticks occupy the same physical line. Subtract 0.5 is a rename of one pixel, not a slide.
2. **Name write versus read as two pixels.** The write location still stores. It does not move to the read coordinate. Lesson 9.8 already used that split. A scale or displacement lesson that drops it makes `/ scale` look like Canvas.scale.
3. **Show the inverse add as lining up one tick.** After `readP.x = 0.15`, a dashed line must connect that `p` tick to UV 0.65. That is why +0.5 exists. `eval` does not speak `p`. Passing 0.15 as UV would read a left-edge pixel. Draw that counterexample on the same rulers.
4. **Reconcile 8.8 in the same section.** 8.8’s stripe tested `p`, so it stayed in `p`-space. This lesson converts back because the next consumer is `eval`, which wants a top-left pixel pair (`readUv × resolution`).
5. **A stepper that dumps subtract, divide, and add into one caption is a failed stepper.** Each of those three operations is its own step with a new drawn object: the second ruler, the shortened arrow, then the alignment dashed line. Identity-then-field bookends do not replace those. If the three operations are already drawn as stacked labelled figures, omit the stepper.
6. **Do not open with a formula of unexplained numbers.** 0.80, 0.30, 0.15, 0.65 must appear first as ticks on the two rulers. Provenance: 0.80 is 0.30 right of `C`; half of that walk is 0.15; 0.15 + 0.5 is the UV of that neighbor.
7. **Divide is “walk a shorter segment,” not a magic `/ 2`.** Before `p / scale`, state the visible goal: which input region should fill the square. Prove it on the right-edge write: `p.x = +0.5`, scale 2, `readP.x = +0.25`, `readUv.x = 0.75`. That is the right edge of the inner half. scale 2 means twice as large, which is why the walk is half as long. The teaching pixel then uses the same shorten. Do not introduce 0.30 / 2.00 before that edge proof.

**Verification before packaging a center-scale or displacement-sample lesson:**

- Can the learner say which pixel still stores, which pixel is asked, and that those are different pixels?
- After the learner already converts UV, do not re-test UV versus `p` names or why +0.5 exists. Those questions are leftover.

### Confirmed scale walk; UV convert is leftover — Lesson 9.9 second rewrite

Recorded 2026-09-11 after the learner stated the causal picture of scale 2 and asked to delete converting points to UV. Dual rulers and `+ 0.5` sections were leftover-first: the easy convert taught again, the walk buried in numbers.

Learner picture (confirmed): scale 2 means this write pixel reaches a neighbor twice as close to `C` (half as far from `C`). That nearer color is stored here. Near-center content is dragged onto farther write pixels. That is magnification. Write does not move.

1. **The load-bearing object is the walk.** Write stays. Divide shortens the ask toward `C`. Store the nearer color. That is the lesson.
2. **Do not re-teach UV ↔ `p`.** `p = uv − 0.5` and `+ 0.5` stay in the MSL because `eval` wants UV. They get one leftover sentence, not a section, not two rulers, not a dashed alignment figure.
3. **Prove divide on distances from `C`.** Right edge is half a square from `C`. The inner-half’s right edge is a quarter from `C`. Half / 2 = quarter. The 2 is the enlargement we chose. Do not prove it by lining up UV ticks.
4. **Do not dump `0.80 / 0.30 / 0.15 / 0.65`.** Those are convert leftovers. Name a teaching pixel as “this far from `C`” and show the shortened walk on the same ray.
5. **The first 9.9 rewrite’s dual-ruler page is the same class of failure as 9.10 leftover-first:** easy convert taught at length, walk and magnification skimmed.

**Verification before packaging this scale lesson:**

- Can the learner say, without UV names, that scale 2 asks a point half as far from `C` and stores that nearer color at the write pixel?
- Can they say why that makes the middle look larger?
- If the first two sections could be understood without the walk, those sections are leftover.

### Inner rectangle is drawn sub-bounds; no if; both sides and the diagonal — Lesson 9.9

Recorded 2026-09-11 after the learner said the inner rectangle was not visible, asked why the formula has no inner-half check, asked for more distances proving navy-right always stores orange and orange-left always stores navy, asked what half the walk is at 45° on `(0,0) → (1,1)`, and asked what happens for points outside the inner half (off-picture / negative).

1. **Draw the inner rectangle as actual sub-bounds.** On a 4 × 4 checker each cell is 0.25, so the middle 2 × 2 is 0.25 from `C` on each axis. Stroke that rectangle on the input. Dim the outer ring as never asked. Do not only say “inner half.”
2. **There is no `if`.** The inner rectangle is the image of the square under “halve the walk from `C`.” Edge write 0.50 from `C` asks 0.25 from `C`. Corner write `(1,1)` asks `(0.75, 0.75)`. Every closer write asks closer than that, so still inside. The formula does not test membership.
3. **Several distances, both directions, prove “always.”** One teaching 0.30 is not a proof. Right outer navy is every write 0.25..0.50 from `C` on the right; half is 0.125..0.25, inner orange. Left outer orange halves into inner navy. Show 0, 0.10, 0.25, 0.30, 0.40, 0.50 and the left mirrors.
4. **Diagonal `(0,0) → (1,1)` is its own construction.** Midpoint is `C`. Half of `C → (1,1)` is `(0.75, 0.75)`, the inner-rect corner. On this checker `col = row` so the diagonal stays orange. That crossing is not orange/navy. The orange/navy border is the axis-aligned cell edge at 0.25 from `C`.
5. **Outside the inner rect is inverse off-picture.** In-square writes at scale 2 never ask outside the inner rect and never ask negative. An input point 0.40 from `C` would be painted at 0.80 from `C` (`uv` 1.30 or −0.30). That is why the outer ring vanishes.

**Verification before packaging:**

- Can the learner point at the inner 2 × 2 on the input and say it fills the store?
- Can they say why there is no inner-half `if`?
- Can they take one right navy and one left orange and say the nearer color without a formula dump?
- Can they say what half of `(0,0) → (1,1)` is, and that it is the inner-rect corner, not an orange/navy border on this diagonal?
- Can they say where an outer input point would be painted?

### Name the four store squares; do not code “navy-right → orange”

Recorded 2026-09-11 after the learner confirmed Lesson 9.9 complete, then could not parse “Always navy-right → orange,” “There is no navy-right write at scale 2 that stores navy,” and “Always orange-left → navy.” They were looking at the four big store squares: top-left orange, top-right navy, bottom-left navy, bottom-right orange. The page had named a write by the input color at that seat.

1. **Name which picture.** Input or store. A hyphenated color-side code does not say which.
2. **Name which of the four store squares.** Top-left, top-right, bottom-left, bottom-right. Those four are the inner 2 × 2, each cell now twice as wide and twice as tall.
3. **“Always X → Y” is a failed answer.** Write a sentence: this store square is this inner input cell, copied.
4. **Many writes can share one read.** Scale 2 still evals once per write pixel. Asks pack into the inner half, so a block of neighboring writes copy the same input cell. That is repeat, not an average of neighbors.
5. **Same cell is not “rounded to the same pixel.”** Write seats stay discrete. `eval` of a shader is a function of a float pair. Write `(1, 0)` asks 100.5 px; write `(0, 0)` asks 100.0 px. Both sit in the inner top-left cell `[100, 200)`. Lesson 2.8 already used a pixel center at 7.5; Lesson 8.6 used `399.5`. Do not snap the ask to an integer before the checker runs. Bitmap filtering is later.

### Displacement is a chosen walk toward C, not a 3D formula — Lesson 9.10 rewrite

Recorded 2026-09-10 after the learner opened Lesson 9.10 and saw the same failure as 9.9: a four-step stepper dumping `0.60`, `−0.80`, `0.06`, `−0.08`, `0.74`, `0.18`, with no picture of why the stored checker looks like a bump and no reason for the MSL divide, multiply, or subtract.

1. **Name the bump as a copy, not as geometry.** Identity versus store first. Inner colors now sit farther from `C`. The square is still flat. There is no height map in this shader. A brain reading radial expansion as a drop of water is an observation, not a 3D pipeline.
2. **Prove the bulge on one horizontal ray before any diagonal.** Write `H` due right of `C` at `uv.x = 0.80`. Toward `C` is left. `readUv.x = 0.80 − dispLen`. At `dispLen = 0.10` that is `0.70`. The orange that lived at 0.70 now sits at 0.80. Do not open with Lesson 9.1’s 3-4-5 pixel.
3. **Divide is “make a length-1 stick so the walk does not grow with distance from C.”** `p` is how far this pixel is, not the walk we want. Prove the doubling on the leftover 3-4-5: length `0.50` becomes length `1` when you double, and `p / 0.50` is that doubling. Then × `dispLen` puts the chosen walk on it. Using `p` itself as the arrow is Lesson 9.9’s growing offset.
4. **Subtract is Lesson 9.8 on a ray.** Outward leftover, inward ask. Picture appears pushed out. Draw add-instead as the pinch. `eval` still wants `readUv × resolution`.
5. **Rings expand by adding, scale multiplies.** An input ring at `0.25` is stored at `0.35` when `dispLen = 0.10`. Scale 2 would store it at `0.50`. Equal-length arrows versus growing arrows are the picture of that difference. Straight grid lines bow because each pixel’s ask has its own direction.
6. **A stepper that dumps unit pair, scale, and subtract into numbered captions is a failed stepper.** If those operations are already stacked labelled figures (ray, doubling, copy), omit the stepper.
7. **Do not open with a formula of unexplained numbers.** `0.60`, `−0.80`, `0.06`, `−0.08`, `0.74`, `0.18` appear only as substitutions after the ray proof and the doubling picture. Provenance: `dispLen = 0.10` is one tenth of the square, long enough that `H` leaves its navy cell.

**Verification before packaging a displacement-field lesson:**

- Can the learner say why the picture looks like a bump without reciting `dir × dispLen`?
- Can they say why we divide by length (chosen walk, independent of how far this pixel is)?
- Can they say why we subtract (ask toward `C`, picture appears pushed out)?
- Can they contrast this field with Lesson 9.8’s slide and Lesson 9.9’s zoom?

### Hard visible result gets the construction — Lesson 9.10 second rewrite

Recorded 2026-09-10 after the learner rejected the first 9.10 rewrite: leftovers and the unit-pair divide were explained at length, while the actual hard picture — axis-aligned checker squares looking tilted — was one sentence (“straight lines bow because each pixel’s ask has its own direction”). Easy leftovers were taught again. The hard result was skimmed.

1. **Name the hard visible result first.** Here: a vertical side of an input square looks slanted in the store. That result gets the load-bearing sections. Leftovers the learner already has (write vs read, `p = uv − 0.5`, `eval` wants pixels) get one card, not a hero-length recap.
2. **A qualitative phrase is a skimming failure.** “Lines bow,” “cells tilt,” “looks 3D” must be followed immediately by a construction with a new drawn object at each step. Required objects for this tilt: two ends of one vertical side; two rays from `C`; two equal-length walks; the new side that no longer shares an x.
3. **Prove tilt from a split walk, not from a formula.** Pick one end on the horizontal through `C` (the whole walk goes right) and one end on a 45° ray (the walk splits). Same walk length, different new x. That is why the side leans. Do not start with `dir = (0.60, −0.80)`.
4. **Then the rest of the bump, as extra objects.** Several boundary points → the actual curved edge. A straight four-corner join is only an approximation. Near `C` the same walk is a larger fraction → bigger middle. A side already on a ray through `C` does not tilt.
5. **Do not spend the page re-teaching the easy inverse.** After the outward paint is understood, one paragraph may say the shader asks inward. Divide-by-length is “so H and Q walk the same length,” not a second main lesson.

**Verification before packaging a lesson whose stored picture is the hard thing:**

- Can the learner take two ends of one vertical side and say why they no longer share an x, without reciting `dir × dispLen`?
- If the first two sections could be understood without looking at the hard picture, those sections are too long and the hard picture is too late.

### Diagonal walk is a little square, not “half”; not a rigid pole — Lesson 9.10

Recorded 2026-09-11 after the learner stopped at section 2 step 3: the page dumped `Q′ ≈ (0.82, 0.18)` and said “half goes right, half goes up.” A beginner cannot derive 0.82 from that. “Half” reads as 0.05 + 0.05, which is the wrong length (legs of a right triangle are shorter than the hypotenuse, not half of it). The learner also asked whether moving H right first tilts the side so that Q’s walk goes left — a rigid-bar picture.

1. **Do not dump Q′.** Every number is a named object: H′.x = 0.75 + the whole stick. Q′.x = 0.75 + the little square’s side. The canvas measures the side. `(0.82, 0.18)` is only the live substitution.
2. **Ban “half goes right.”** The 0.10 stick on a 45° ray is the **diagonal of a little square**. Each side of that square is how far right and how far up. A square’s diagonal is longer than a side, so the rightward part is less than 0.10. Draw the square. The horizontal side is the **floor shadow** of the stick. After that picture, the word is **projection**: how much of the walk shows up as a change in x.
3. **Two independent copies, not a pole.** H and Q do not take turns. The side HQ is not a rigid bar. Each end is copied along its own ray, same stick length, at once. Q’s ray from C is up-right, so Q still goes **right** (and up), just less far right than H. The new line slants because H gained more x, not because Q swung left. Draw the false pole (Q left of 0.75) and cross it out.
4. **Lesson 9.1 leftover is the hypotenuse.** The walk is the long side of a right triangle. For 45°, the two legs are equal. Do not ask the learner to compute `0.10 / √2` by hand. Measure the square’s side on the figure.
5. **Name the pink teaching cell before it is drawn.** It is one checker cell whose left side is HQ. It is not the little square at Q (that little square is a measuring tool for one stick). “Nobody rotated a square” is a skimming failure: show a rotated copy (still a square, equal sides, right angles) next to the four-ray walk (trapezoid, near-C side shorter). The teaching cell’s corners must be the points already named.

### Drawn quad sides must be true — Lesson 9.10

Recorded 2026-09-11 after the learner asked whether the green overlay was a diamond, and whether its top and bottom were parallel to the x-axis or only drawn that way. The SVG had faked a trapezoid with two horizontal sides.

1. **Use the actual walked corners.** Do not substitute a “nice” trapezoid with two horizontal sides. For the HQ teaching cell, H and the bottom-right corner both sit on C’s horizontal, so the bottom stays horizontal. Q and the top-right corner sit on two different rays, so the top tilts. A figure that draws both top and bottom horizontal is a lie.
2. **Name each side, with a number.** Bottom: `H′.y = BR′.y = 0.50`, on C’s floor, parallel to the x-axis. Top: `Q′.y ≠ TR′.y`, tilted. Left: the HQ tilt from section 2. Right: tilted. Draw a solid horizontal through `Q′` so `TR′` sitting off that line is a visible gap, not a 10-pixel accident.
3. **Ban false shape names.** It is not a diamond (equal sides, a square on a point). It is not a parallelogram (opposite sides would stay parallel; the bottom is horizontal and the top is not). Call it four walked corners. Prove with the four equalities, not with a slogan.

### Solid overlay strokes, not dashes, not checker hues — Lesson 9.10

Recorded 2026-09-11 after the learner asked for solid lines in colors other than checker orange and navy.

1. **Construction strokes are solid.** Dash is not a contrast strategy. A dashed yellow ray on orange disappears even with a halo.
2. **Overlay hues must not be checker orange `#e07a2e`, checker navy `#1a4066`, or amber `#d97706` (too close to orange).** Use cyan, hot pink, lime, white, violet. Dark halo (`#0f172a`) then the hue, so the stroke reads on both cells.
3. **H is not amber.** Amber on orange is the original contrast failure.

### Shader formula is those same sticks — Lesson 9.10

Recorded 2026-09-11 after the learner could not connect `p / d` to moving H and Q by 0.10. The MSL sat in a later card as if it were a new machine.

1. **Do not introduce MSL as a new machine.** `p` is the leftover from C to this pixel (`0.25` at H, about `0.35` at Q), not the 0.10 walk. `p / d` throws away how far and keeps which way (length 1). `(p / d) × dispLen` is H’s floor stick and Q’s little-square diagonal from section 2.
2. **Trace H and Q through every symbol** before showing the assembled shader. A gloss that says “length-1 direction” without those two sticks is a disconnect.
3. **Length 1 is the whole picture width.** Do not draw a length-1 stick on the checker at 1:1. Say so. Multiply by 0.10 immediately; that shorter stick is what section 2 already drew.
4. **Subtract is the inverse of the outward paint.** Sitting at H′, `uv − disp` is H. The picture added the stick. The shader subtracts it.

### Checker overlay contrast

Recorded 2026-09-10 after the learner could not see dashed construction lines on Lesson 9.10’s orange/navy checker. Indigo `#4338ca` on navy `#1a4066` and amber on orange vanish.

1. **A construction stroke on a two-color checker needs a dark halo.** Draw a dark understroke (`#0f172a`, thicker) then the hue. Marks get a dark ring, then the fill. White halo fails for a light stroke on orange.
2. **Do not use the cell hue for the overlay.** Indigo on navy, amber on orange, and dashed yellow on orange all fail.
3. **Verify both cell colors.** Screenshot the overlay where a ray, axis, or mark crosses a navy cell and an orange cell. If either crossing disappears, the stroke fails.
4. **Solid, not dashed.** See the solid-overlay rule above.

### Exact-cell readback and curved-region proof — Lesson 9.10

Recorded 2026-09-11 after the learner could not explain navy above the input cell at x `[0.50, 0.75)`, y `[0.25, 0.50)`, its growth at `dispLen = 0.10`, or the apparent added triangle. The earlier lesson followed the adjacent orange cell and overlaid straight corner joins on curved boundaries. This rule supersedes those earlier 9.10 constructions wherever they imply a complete quadrilateral or an unrestricted outward inverse.

1. **Follow the exact cell the learner identifies.** Name its input-image bounds and color. If a coordinate is incomplete, state the chosen missing coordinate. Show the original color at the output position, the actual read inside the named input cell, and the copied output color.
2. **Prove the added region by readback.** Highlight output positions outside the original cell whose calculated read is inside it. Include one nearby position that remains outside. A triangle-like patch is an observation; its boundary must come from the shader's per-position test.
3. **Separate distance from enlargement in one sentence, not a chapter.** `dispLen` is the read-segment length in square-image UV units, not a percentage increase in cell width or area. The lab slider already shows zero, default, and a longer walk. Do not add a size-versus-percentage chapter or a numeric first-entry-threshold table. Those restatements do not teach the curve.
4. **Transform the whole edge.** Construct endpoints and at least one intermediate point from the same formula as the image. Straight corner joins are only labelled approximations. Keep full coordinates and long calculations outside the picture. Distorted-checker diagrams must draw the true bow, not a straight stand-in.
5. **Do not make center-crossing a chapter.** A read closer than `dispLen` can pass C. A one-line caption on the opposite-side gain patch is enough. The `0.0001` guard belongs next to the shader that contains it. The inverse outward construction is for output positions farther from C than `dispLen`.
6. **Audit alternative formulas algebraically.** `disp = p * dispLen` gives uniform scaling of read distances; `disp = p` sends every read to C; `disp = p * d * dispLen` is neither of those. Do not call every distance-dependent offset a zoom.
7. **Required evidence.** Verify `(0.65, 0.20)` at 0.10 reads about `(0.60528, 0.28944)`, y = 0.15 remains orange and y = 0.16 becomes navy at that x, true curved boundaries, all length extrema, and unobstructed diagrams and controls at both desktop targets. Record the failure, rule, and actual verification in current state and handoff.

### Imagination-first curve proof; cut leftover restatements — Lesson 9.10 third rewrite

Recorded 2026-09-14 after the learner still could not imagine **why** the checker bows. Chapters 1–2 and the introduction were the right gentle on-ramp (objects named before they are used; not talked-about as if already understood). Chapters 5–6 (size-as-percentage, center crossing), the “exactly when does this pixel become navy” number table, the vertical slice at output x = 0.65, and the cards “Why the diagonal change is about 0.07071” / “Which sides stay straight?” did not help. Repeating a result the learner has not imagined does not create the imagination. The missing object was a spoke picture.

1. **The hard unsolved picture is the curve.** After W → R is understood, the load-bearing section is why a straight input edge becomes a bowed output edge. Size percentages and center-crossing must not delay that section.
2. **Imagination objects, in this order, each newly drawn:** C as a hub; several spokes through one straight input edge; the same extra length on every spoke; the landings; a straight join between the end landings; the middle landing sitting off that join. Cause: the nearest spoke’s extra walk points more straight out from the line; a corner spoke spends some of the same length going sideways, so it cannot rise as far.
3. **Ban number-only “proofs” of the bow.** A first-entry distance table, a 0.07071 diagonal card, a “which sides stay straight” recap, or a one-pixel vertical slice does not replace the spoke picture. If the learner cannot replay the cause with their eyes closed, the section has failed.
4. **Propagate the same lines.** Neighboring cells are not a second effect. They sit on the same horizontal or vertical grid line, so they inherit the same curve. Draw the whole checker grid. The two lines through C stay straight; every other grid line bows.
5. **The frame is not the end.** Show the curve crossing out of the square. The shader simply does not paint outside `[0, 1] × [0, 1]`. Far from C the curve lies almost back on the original straight line (the extra walk is then almost along the line, not away from it).
6. **`x` and `y` are two parts of one stick.** A live diagram must split the extra walk into a horizontal part (from `p.x`) and a vertical part (from `p.y`) while a point moves along the edge. The long side of that right triangle is `dispLen`. Do not draw two bars that look as if they add to `dispLen`.
7. **Exercise answers are diagrams.** The hidden answer must draw the question’s setup and the reason. Prose-only geometry answers are incomplete.
8. **Keep the gentle on-ramp.** Do not talk as if already understood. Do not bloat the intro with curve theory. Chapters 1–2 of this lesson (one pixel, then the slider) stay.

**Verification before packaging this displacement-field lesson:**

- Can the learner close their eyes and say why the middle of the top edge rises more than the corners, using spokes, without quoting 0.07071?
- Can they say why the orange cell to the right has a curved top (same line `y = 0.25`)?
- Can they say the curve continues outside the picture and flattens far away?
- Can they point at `p.x` and `p.y` and name the visual part of the extra walk each one controls?
- Do the hidden exercise answers contain pictures of both the question and the reason?

### State the proof; drawing the bow is not the proof — Lesson 9.10 fourth rewrite

Recorded 2026-09-14 after the learner read the spoke section and still did not have a mathematical reason that the edge is a curve, or a reason that navy continues into orange and back into navy along that same curve. Huge full-width grid windows, a rotated-square comparison, and “four bowed grid pieces” did not state either claim. Flattening plots that only stroke the pink path also do not state it.

1. **A picture of a bow is not the proof.** After the landings are drawn, write why they cannot be a straight line: on y = 0.25, `p.y` is the fixed `−0.25`, `d = sqrt((x − 0.50)² + 0.25²)` changes with x, and `landing y = 0.25 − (0.25 / d) × dispLen`. A straight line has the form `y = a + b × x`. This y depends on x only through `d`, and `d` is Lesson 9.1’s long side, not a linear function of x.
2. **A gap from the end-to-end join is not enough.** That gap only rules out one straight line through the two ends. Two straight halves that meet at the peak (a tent) would leave the same gap. To rule out the tent, take three landings that all lie on one side of C. If that half were straight, the in-between landing would sit on the join of the other two. It does not. Also: `d` changes a little with every slide of x, so the upward part changes a little every time — there is no sharp ridge. Recorded 2026-09-14 after the learner asked whether opposite-tilting straight halves would still produce the cyan gap (they would).
3. **Color flow is order on one line.** The navy top, the orange top to its right, and the next navy top are three segments of the same input line y = 0.25. Each point of that line maps to one landing. The map along the line does not reorder points (the extra walk on the right of C never jumps left over its neighbor). So the color sequence on the curve is the color sequence on the original line. There is no second effect at a cell boundary.
4. **Do not prove a curve by rotating a square.** Rotation is a different operation and keeps straight sides. Cut it.
5. **Do not enlarge a checker past ordinary picture size** (`max-width` ~420) unless the extra pixels carry a new measurement. A 640-tall “window −0.60 to 1.60” that only restates the bow is a failed figure.
6. **Shorten restatement.** After W → R is known, one reminder sentence is enough. Fence metaphors, repeated “same extra length” paragraphs, and dual captions that repeat the walk-panel do not replace the two proofs above.

### Size by overlay density, not leftover viewBox — Lesson 9.11

Recorded 2026-09-16. Sparse checkers sat in a 760×440 viewBox with a 330 plot, so empty SVG padding made a thin picture look huge. The tent / straight-join / curve proof used `.diagram.compact` and a 240 plot, so cyan, violet, pink, and the Q / eq labels collided.

1. **ViewBox matches drawn content.** If the explanation lives in an HTML column, the SVG is the plot plus axes (about a 400×415 picture). Do not leave a blank right half inside a 760-wide viewBox.
2. **Overlay density sets plot size.** One checker plus one line stays ordinary picture size (~420). A figure that must show a curve, a straight join, a tent, and named landings at once gets a larger plot and a zoom of the measured gap. `.compact` is forbidden on that proof figure.
3. **Empty padding is not a measurement.** Extra pixels have to show a gap, a zoom, or a second construction. Otherwise shrink.
