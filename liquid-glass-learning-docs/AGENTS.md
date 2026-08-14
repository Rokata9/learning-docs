# AGENTS.md — Liquid Glass Learning Documents

## Scope

This repository contains the interactive learning documents for the Liquid Glass on Android course. The runnable Android Studio project is separate. Do not create an `android/` directory here.

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
9. State when the browser model differs from Android.
10. State the exact Android target path when Android code changes, but keep Android source outside this repository.

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
7. Explain the practical choice of representation through an API or buffer contract. Compose `Color` and `Color.compositeOver` use straight values. A premultiplied bitmap or custom premultiplied math path uses premultiplied values only when its contract says so. Convert once at the boundary.
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

Before delivering any lesson for a total beginner in graphics, mathematics, color science, GPU work, or Android rendering:

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
10. **A polished artifact is not evidence of a good lesson.** Working controls, correct Kotlin, screenshots, ZIP integrity, and numerical correctness do not pass the lesson if the first-time learner cannot explain the causal chain.
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
5. **Define the exact saturation contract.** The word `saturation` can name different operations in different color models. A lesson must name the API or mathematical definition it teaches. Do not silently substitute HSL, HSV, a design-tool control, or an Android `ColorMatrix` transform for one another.
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

1. **Teach one actual mask path first.** The required path is: content object → complete mask image → masked content group → later source-over background. Do not require `SrcIn`, luminance masks, premultiplied storage, per-draw shortcuts, or performance internals before this path is understood. Put those connections in an explicitly optional section or defer them.
2. **Use exact scene-object names before blend roles.** Name the content being masked, the complete mask image, and the background. Assign `source` and `destination` only at one exact blend call. For the current `DstIn` path: destination = completed content image; source = complete mask image.
3. **Define binary with values.** A binary mask permits exactly two values: `0` and `1`. State `0 outside` and `1 inside` for clearly inspected positions. A mask containing `0.60` is partial and therefore not binary. Keep rendered edge coverage deferred to the antialiasing lesson.
4. **Point to the exact layer-creation call.** Every offscreen explanation must quote the exact `graphicsLayer` or `saveLayer` line that creates the boundary. Name its bounds, the target that receives subsequent draws, every object drawn into it, and the Paint or operation applied when it is restored. Do not call an ordinary RGBA target an `alpha-only layer` merely because the blend mode consumes alpha.
5. **Show the active drawing target at every step.** A layer stepper must identify parent target, pattern target, and mask target. It must show what each target contains before and after every draw and restore. The words `grouped drawing` or `isolated destination` are forbidden unless the exact draw calls included in that object are named.
6. **Construct the complete mask domain explicitly.** The mask target covers the complete content-group bounds. Write alpha `0` across those bounds or establish an equivalently explicit transparent target, then write the intended alpha inside the mask geometry. Show one inside position and one outside position before generalizing.
7. **Separate two consecutive operations.** Stage A applies the mask: `masked content alpha = original content alpha × mask alpha`. Stage B draws that masked result over the background with source-over. Never present these formulas as alternatives. Do not introduce `effective source alpha`; call the value `masked content alpha` until Stage B actually uses it as source alpha.
8. **Explain multiplication as sequential restriction.** Trace `1 → content alpha → mask keeps a fraction of the remainder`. Show why addition would let two restrictions increase visibility or exceed `1`.
9. **Choose one visible pattern-isolation boundary.** Use either `CompositingStrategy.Offscreen` or an explicit pattern-target `Canvas.saveLayer` when one is required. Do not stack both without a separate need. Prefer the implementation whose containment is visible in the lesson code. Do not speculate about hidden framework layers to explain why removing a boundary happened to look correct.
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
10. **Compare isolation arrangements with pictures.** For `graphicsLayer`, `saveLayer`, or another offscreen boundary, show at least: one safe arrangement using the current implementation, one safe alternative, one unsafe arrangement with no pattern isolation, and the result after the blend. State which exact pixels belong to the blend destination in each arrangement.
11. **Explain cost with visible target counts.** Show the number and bounds of explicit temporary targets, one concrete memory estimate, and the additional restore/compositing passes. Label the estimate as a model rather than a guaranteed GPU allocation.
12. **Feedback-analysis record is mandatory and visible in state files.** After every learner correction, update the current state and handoff with the concrete failure, the reusable prevention rule, and the verification that will catch it next time. Do not merely claim that the feedback was analyzed in the chat response.
13. **Required QA states.** Test every sequence step, every representation case, inside and outside positions, alpha `0`, one partial alpha, alpha `1`, every isolation scenario, every provenance popup, color-chip presence, 3D rotation/reset when present, and horizontal overflow with a popup open.


### Gold-standard positive exemplar — Lesson 4.8 visual layer movie rewrite

This section records a successful reference artifact, not another rule created only from a failure. On 2026-08-03, the learner explicitly described the final Lesson 4.8 visual-first edit as **“world-class explanation level.”** Treat that exact state as the canonical quality baseline for future lessons about invisible rendering state, layers, buffers, masks, blend operations, or multi-stage image pipelines.

**Canonical exemplar files:**

```text
course/chapters/chapter-04/lesson-04-08-masks.html
app/src/main/java/com/example/liquidglasslab/chapter04/MasksExplorer.kt
```

Use the versions delivered in:

```text
liquid-glass-lesson-04-08-visual-layer-movie-rewrite-learning-docs.zip
liquid-glass-lesson-04-08-visual-layer-movie-rewrite-android.zip
```

The exemplar succeeded because it combines all of these choices in one coherent order:

1. **It begins with visible objects.** The learner first sees the complete pattern image, complete mask image, masked-pattern intermediate image, and final image over navy. The explanation does not begin with an API, formula, or abstract layer name.
2. **It gives every temporary target a stable concrete name and a visible image.** The parent target, pattern target, and mask target are shown after every operation. The active target is highlighted. The exact Kotlin line is attached to the corresponding visual state.
3. **It makes intermediate results the main teaching medium.** The seven-step layer movie shows the complete result after every `saveLayer`, draw, and restore. The learner never has to imagine what an invisible buffer currently contains.
4. **It combines 3D orientation with exact 2D evidence.** The rotatable stack explains ordering and separation. Front-view thumbnails remain the authoritative view of pixel contents.
5. **It proves the algorithm at one selected coordinate.** The microscope shows the content pixel, mask pixel at the same coordinate, `DstIn` output, and final source-over result. Alpha-zero mask pixels are shown as valid inputs rather than described as missing work.
6. **It calculates both representations instead of merely naming them.** Straight and premultiplied RGBA receive parallel worked cases for opaque and translucent content. Each RGB or RGBA tuple has an adjacent rounded color chip showing the represented color.
7. **It preserves value provenance.** Inherited, controlled, fixed, and derived values carry click-controlled superscript-style information marks. The popup states origin, representation, and next consumer.
8. **It compares architecture choices visually.** Safe explicit `saveLayer`, safe `graphicsLayer(Offscreen)`, unsafe no-isolation, and redundant double-isolation arrangements are drawn with their intermediate destinations and results.
9. **It makes performance cost concrete.** Target count, target bounds, restore/compositing passes, and one labelled memory estimate are visible. The estimate is not presented as a guaranteed GPU allocation.
10. **It keeps the production boundary honest.** The lesson still says that a hard binary capsule should normally use clipping. The more general mask path is retained because it teaches capabilities that clipping cannot represent.

**How to reuse this exemplar:** preserve the causal and visual structure, but do not copy its exact widgets mechanically. A later lesson may not need a 3D stack, two representations, or four architecture alternatives. It does need the same standard of evidence: visible inputs, visible intermediate state, exact operation, exact output, and a clear next consumer. Before delivering a comparably complex lesson, review it beside this exemplar and explain internally why any omitted element is genuinely unnecessary for that topic.

**Positive-pattern status:** this learner evaluation confirms that the visual-first intermediate-state gate is not merely defensive policy. It is a demonstrated successful teaching pattern and should be preferred proactively for future graphics lessons with invisible state.

## Visual target

- Desktop only.
- Lessons 1.1 through 2.9 are legacy light-only files. Do not revise them only to add dark mode.
- Starting with Lesson 3.1, every new lesson and every revision of Lesson 3.1 or later must follow the operating-system light or dark preference automatically with `prefers-color-scheme`.
- Do not add a manual theme switch unless a lesson specifically teaches theme switching.
- Starting with Lesson 3.1, Android lesson screens must also follow the OS theme through the project theme root and `MaterialTheme.colorScheme`. Do not hardcode light-only page, panel, border, or ordinary text colors.
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


## Incremental delivery packages

After the initial repository package, deliver only incremental ZIP archives for each new lesson.

- The learning-docs ZIP contains only files created or modified for that lesson. Preserve their paths beneath `liquid-glass-learning-docs/`.
- The Android code ZIP contains only Android project files created or modified for that lesson. Preserve their paths beneath `LiquidGlassLab/`.
- Do not include unchanged files, cumulative course copies, duplicate standalone downloads, verification screenshots, or a complete Android project unless the user explicitly requests them.
- When a lesson changes no Android source, state that fact and do not create an empty Android ZIP.

## Compose scope-extension imports and preview coverage

Apply these rules to every Android lesson patch:

1. Do not add these explicit imports:

   ```kotlin
   import androidx.compose.foundation.layout.weight
   import androidx.compose.foundation.layout.matchParentSize
   ```

   `weight` is a member extension supplied by `RowScope` or `ColumnScope`. Use `Modifier.weight(...)` only inside the corresponding row or column content block. `matchParentSize` is a member extension supplied by `BoxScope`. Use `Modifier.matchParentSize()` only inside a `Box` content block. The scope receiver makes the function available; the package imports above are invalid for the course's Compose version.

2. Every lesson that changes the active Android child composable must provide both preview levels, but keep each preview beside the code it primarily verifies:

   - keep complete chapter-screen previews in the chapter screen file;
   - keep direct previews of the active custom child composable in that child composable's own file.

   Do not place the direct child preview in `ChapterXXScreen.kt`. This keeps the preview next to the custom composable it is meant to inspect.

3. For Lesson 3.1 and later, provide light and dark variants for both preview levels. Wrap each preview in `LiquidGlassLabTheme`. Wrap a direct child preview in a theme-aware `Surface` when the child normally receives its page background or content color from the parent screen.

4. Preview wrapper functions must take no parameters. Supply representative values inside the wrapper when the child composable requires arguments.

5. **All lesson content must be inspectable by scrolling inside Android Studio Preview.** For every newly generated lesson:

   - the complete chapter-screen preview must expose the whole lesson through vertical scrolling;
   - the direct custom-composable preview must also be vertically scrollable, either because the custom composable already owns a scroll container or because the preview wrapper supplies one;
   - do not rely on a physical device to reach content below the preview height;
   - avoid accidental nested scrolling when the child is already scrollable;
   - verify the longest generated content in Android Studio Preview or an equivalent finite-height preview container before delivery.

   This rule applies prospectively. Do not rewrite earlier lessons solely to retrofit preview scrolling unless the learner explicitly requests it.


### Value provenance, pre-clamp terminology, and matrix-contract gate

This rule was added after the Lesson 3.9 clarification questions.

1. **Label value origin.** When a value appears across several sections, add a small click-controlled `ⓘ` origin control. State whether the value is inherited from a prior lesson, set by a current control, fixed by an API or standard, measured at runtime, or derived in the current section. Tooltips carry provenance only; essential mathematics remains visible without opening them.
2. **Avoid unexplained `raw`.** Do not write `raw RGB`, `raw channel`, or `raw output` without defining the exact stage. Prefer `matrix result before clamping`, `pre-clamp channel result`, or another operation-specific name. State that this meaning is unrelated to camera RAW, file bytes, or premultiplication.
3. **Show both sides of clamping.** Display the pre-clamp number, the allowed range, and the final clamped number. Use `clamped`, not an unexplained `clipped`, for a numeric range restriction.
4. **Explain all five matrix columns.** For a 4×5 color matrix, define the four input multipliers and the fifth constant offset before showing rows. State which coefficients change with the current control and which remain fixed for the selected API operation.
5. **Explain identity rows causally.** For `[0, 0, 0, 1, 0]`, show `A′ = 0R + 0G + 0B + 1A + 0 = A`. State that this row is fixed by `setToSaturation`, not by every possible ColorMatrix.
6. **Separate transform from compositing.** For translucent input, trace `source RGBA → transformed source RGBA → source-over destination → final visible RGB → luminance → contrast`. If the destination is translucent, continue compositing until an opaque backing is reached.
7. **Do not imply a transform repairs contrast.** Recalculate contrast from the final visible RGB. If the selected foreground fails, test allowed foreground candidates, then change a relevant material or foreground input and measure again. For Liquid Glass, name stabilizing options such as stronger tint, dimming, or a more opaque local backing; do not rely on saturation or blur alone.

### Complete-source-section preference

1. Do not embed complete Android source files or source-tab viewers in lesson HTML. The learner views complete files in Android Studio.
2. Keep only short code excerpts required for a causal explanation, the manual value path, or a coding challenge.
3. Continue delivering changed Android files in the separate incremental Android ZIP.
4. Remove the complete-source section from a lesson whenever that lesson is otherwise revised. Do not bulk-edit already completed historical lessons solely for this preference unless the learner asks.

## Construction-time versus restore-time blend operations

Lesson 4.8 exposed a reusable ambiguity: one blend mode can construct a temporary target while a different blend mode is attached to that target's later restore. Future layer lessons must separate these moments visually and in code comments.

1. Name the current drawing target before every draw.
2. State whether a blend mode applies to the current draw command or to the later `restore()` of a saved layer.
3. For the Lesson 4.8 mask, `BlendMode.Src` constructs the mask image by replacing every full-bounds position with transparent RGBA. `BlendMode.DstIn` runs later at restore and performs the per-position multiplication `pattern premultiplied RGBA × mask alpha`.
4. Treat the later source-over of the masked pattern over navy as a separate per-position operation. Do not describe its arithmetic as part of `DstIn`.
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
4. Separate the conceptual coverage contract from the renderer implementation. A teaching sub-sample grid is one estimator, not proof of Android's internal algorithm or sample count.
5. Show a finite-sampling failure case. A thin feature can pass between every selected sample position and receive an estimated coverage of zero even when true geometric coverage is non-zero.
6. Explain the tradeoff: more samples usually improve the estimate but cost more work. Name possible alternatives such as analytic coverage, multisample antialiasing, distance-based methods, or renderer-specific hybrids without claiming which one Android used unless verified.
7. Keep antialiasing separate from blur. Coverage uses geometry at the current output position; blur reads neighboring image positions.

### Point-sample visualization and thin-band gate — Lesson 4.9

This rule was added after the learner could see sample markers touching the orange thin feature while some markers still appeared to count as outside.

1. **Separate the marker drawing from the sampled coordinate.** A visible circle used to make a sample easy to see is not the sample's geometric area. Draw or label the exact center pin that the algorithm tests.
2. **Show the represented area.** When one center sample stands for an equal-area subcell, draw the subcell boundary. State that the center casts one inside-or-outside vote for that complete subcell.
3. **Do not say that points split the pixel exactly.** Center samples are probes. They estimate area by votes; they do not cut the shape at its true boundaries.
4. **Distinguish one-boundary and two-boundary shapes.** A line, curve, or wave may divide the pixel into two sides. A thin band has two boundaries. Only the strip between them is inside; positions on both outer sides are outside.
5. **Show two different finite-sampling failures.** Include both a complete miss, where a narrow feature crosses subcells but misses every center, and a detected-but-inexact case, where some center samples are inside yet the hit fraction differs from the true covered area.
6. **Show one mitigation that does not merely add samples.** For a straight edge, visualize direct edge-to-pixel intersection and covered-area calculation. Define this as analytic coverage: geometry is measured directly instead of estimated from point votes.
7. **Keep implementation depth proportional to the course goal.** State that Android's renderer owns rasterization. Teach only the result contract needed for Liquid Glass unless later custom shader work requires more detail.



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
11. **Make code comments follow the identical order.** Kotlin names and comments must say which counts apply to one output pixel, where the anchor comes from, which angle is controlled, which is derived, why the dot product exists, and what each sign means.
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


### Flexible walkthrough length, formula expansion, and first-QA gate

This rule was added after Lessons 5.8 and 5.9 were mechanically generated with fourteen walkthrough states even though fourteen was only the successful count for Lesson 4.9.

1. **Fourteen is an exemplar, not a template.** Derive the walkthrough length from the actual dependency graph. Simple lessons may use fewer than fourteen states. Difficult lessons may use more than fourteen states.
2. **Never pad or compress to hit a count.** A step exists only when it introduces one new object, term, operation, intermediate result, inference, or implementation boundary that needs its own learner-visible state.
3. **Use a ten-step navigation threshold.** At ten or fewer states, one direct button per state is allowed. Above ten, replace the button wall with `Previous · Step X of N · Next`. Optional phase labels or a compact jump control may supplement navigation, but do not render one button for every state.
4. **Expand hard formulas in four layers.** Before numeric substitution, show: (a) a variable ledger with plain-language meanings, symbols, units/ranges, and origins; (b) the symbolic formula; (c) the same formula with current values substituted; and (d) every intermediate and final output with its next consumer.
5. **Name hidden time assumptions.** A discrete teaching update must state whether its time step is fixed, what value it uses, and whether that factor has been absorbed into coefficients. Do not present position and velocity updates as physical equations without the time boundary.
6. **Prefer signed causal terms.** When direction matters, preserve signs through intermediate values and explain them. For the spring teaching model, `D = -c × v` is clearer than an unsigned “resistance” followed by unexplained subtraction.
7. **The beginner audit is QA stage zero.** Before JavaScript syntax, screenshots, links, Android parsing, or archive integrity, cold-read the first sentence, first two sections, first formula, all new terms, and the longest state using only learner-confirmed prerequisites. Any unexplained dependency fails the artifact and triggers regeneration or splitting.
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
- The curriculum keeps the full course plan plus concise implementation status. Do not duplicate complete lesson prose or every patch history there.
- `AGENTS.md` and `USER_PREFERENCES.md` remain the canonical permanent-rule sources. Avoid copying their full contents into the state, handoff, or curriculum.
- Preserve facts needed for continuation. Remove repeated package manifests, repeated QA reports, superseded status blocks, and prose already present in the lesson HTML or Kotlin source.

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
3. Keep measured layout bounds and transformed draw bounds visible simultaneously. Do not imply that `graphicsLayer` remeasures the composable.
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
