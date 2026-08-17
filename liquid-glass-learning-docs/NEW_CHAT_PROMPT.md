# Continue my Liquid Glass on Android course

We are continuing my beginner-to-expert **Liquid Glass effects on Android** course. This may be a new ChatGPT account, a different model, or a conversation with no access to prior chats or generated sandbox files.

Do not assume that you can see an earlier conversation, sandbox link, ZIP, or local repository file unless it is visibly attached in the current conversation.

## 1. Check attachments before lesson work

### Best upload option

Attach:

1. the complete current `liquid-glass-learning-docs` repository; and
2. the complete current `LiquidGlassLab` Android Studio project.

### Minimum upload set

```text
USER_PREFERENCES.md
AGENTS.md
CURRENT_STATE.md
curriculum/liquid_glass_android_handoff.md
curriculum/liquid_glass_android_curriculum.md
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
course/chapters/chapter-07/lesson-07-03-edge-treatment.html
course/chapters/chapter-07/lesson-07-04-downsampled-blur.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/BlurEdgeTreatmentExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/DownsampledBlurExplorer.kt
```

If I ask to revise an older lesson, I must also attach that lesson's current HTML and relevant Kotlin file. Do not reconstruct an unseen file from memory.

### Read order

1. `USER_PREFERENCES.md`
2. `AGENTS.md`
3. `CURRENT_STATE.md`
4. `curriculum/liquid_glass_android_handoff.md`
5. `curriculum/liquid_glass_android_curriculum.md` only when the full plan is needed
6. the current lesson HTML
7. the preceding lesson HTML when prerequisite wording matters
8. the current Android files

Treat `CURRENT_STATE.md` as authoritative when older prose disagrees.

If no source files are attached, conceptual discussion may continue from this prompt, but do not create or edit repository artifacts. If only some required files are attached, state what is missing and do not reconstruct those files from memory.

## 2. Exact authoritative course state

- Total course size: **216 lessons**.
- Learner-confirmed complete: **65 of 216 lessons**.
- Completed through: **Lesson 7.3 — Edge treatment**.
- Completed chapters: **1 through 6**.
- Chapter 7 is in progress: **3 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.4 — Downsampled blur**.
- Generated frontier: **Lesson 7.4 — Downsampled blur**.
- Next planned lesson after confirmation: **Lesson 7.5 — Tint layer**.
- Lesson 7.4 is generated and is not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation.

## 3. Completed Lesson 7.3 prerequisite contract

Lesson 7.3 established:

```text
blur requests a source coordinate outside the input
→ edgeTreatment supplies the missing value
```

It distinguished:

1. an internal color boundary, where valid source pixels exist on both sides; and
2. the outer source boundary, where a requested source coordinate does not exist.

It defined transparent black as `RGBA(0, 0, 0, 0)`. Alpha zero contributes no visible black. In the controlled uniform-orange Decal trace, straight RGB remains orange while output alpha falls.

Do not repeat the complete edge-mode arithmetic in Lesson 7.4 or later unless a new operation requires one brief prerequisite reminder.

## 4. Current Lesson 7.4 contract

### Principal new operation

```text
full-size source
→ create a smaller working image
→ blur the smaller image
→ enlarge the blurred result
```

**Downsample** means create a smaller image by combining groups of source pixels.

**Upsample** means enlarge the smaller image to the required output dimensions.

### Size calculation

For full width `W`, full height `H`, and scale `s` applied to both axes:

```text
working width  = W × s
working height = H × s
working pixels = (W × s) × (H × s)
```

Controlled example:

```text
320 × 160 at s = 1.00 → 51,200 pixels
320 × 160 at s = 0.50 → 12,800 pixels
320 × 160 at s = 0.25 →  3,200 pixels
```

Half width and half height produce one quarter of the pixel positions. Do not call this a proven four-times speedup. Frame time must be measured.

### One downsample trace

A separate `2 × 2` block contains:

```text
P1 = RGB(20, 40, 80)
P2 = RGB(60, 80, 120)
P3 = RGB(100, 120, 160)
P4 = RGB(140, 160, 200)
```

Averaging each channel produces one working pixel:

```text
RGB(80, 100, 140)
```

This is a transparent teaching model, not a claim about Android's private resampling filter.

### Radius mapping

The blur radius is measured in pixels of the image being blurred:

```text
working radius = desired final radius × s
```

Example for desired final radius `24 px`:

```text
s = 1.00 → 24 px
s = 0.50 → 12 px
s = 0.25 →  6 px
```

At half size, one working pixel becomes two final pixels after enlargement. This explains the coordinate conversion. It does not describe Android's private kernel or sample count.

### Quality tradeoff

Small dots, thin lines, narrow text strokes, and tiny color changes may be combined before blur. Enlarging restores dimensions but cannot restore detail removed during shrinking.

### Browser lesson

The lesson contains:

- three working-size presets: `1.0`, `0.5`, and `0.25`;
- full-source, smaller-working-image, and enlarged-output canvases;
- one synchronized eight-state walkthrough;
- one exact `2 × 2` RGB trace;
- separate pixel-count and radius calculations;
- one short Android route;
- one styled prediction;
- one three-blank Kotlin challenge;
- four explain-back checks;
- a ten-item Preview/device checkpoint.

### Android route

`DownsampledBlurExplorer.kt` uses one clean path:

```text
sourceLayer recorded at full bounds
→ workingLayer recorded with smaller IntSize
→ source scaled into workingLayer
→ BlurEffect with working radius
→ workingLayer enlarged from TransformOrigin(0, 0)
→ current drawing target
```

It contains no diagnostic error enum, stale geometry, crop callbacks, or duplicate production branches.

### Evidence boundary

The public Compose API documents explicit `GraphicsLayer.record` size, `RenderEffect`, and layer transformations. It does not document the private blur kernel, resampling filter, allocation reuse, exact bandwidth, or expected speedup for this specific scene.

## 5. Learner calibration

I am an experienced software engineer, but treat me as a **total beginner in graphics, rendering, GPU work, image processing, and mathematics**.

For every unfamiliar idea:

1. Start with the practical visual problem.
2. Name the exact objects involved.
3. Define every new term before relying on it.
4. State the coordinate space, units, or representation of every value.
5. Explain which operation creates an intermediate value.
6. Explain which later operation consumes that value.
7. Trace one actual value through input → operation → output → next consumer.

Use short declarative sentences. Do not invent shorthand such as “padded source,” “overscan,” “crop center,” or “hue” without an immediate plain-language definition.

## 6. New-learning gate

Every full lesson must introduce a genuinely new mechanism, API behavior, mathematical operation, measurement method, or implementation step.

A prerequisite recap must be brief and exist only to support the new operation. If a planned lesson is mostly consolidation, merge it into the next substantive lesson or make it a short checkpoint. Do not count repeated architecture prose as new progress.

## 7. Walkthrough and visual rules

- Use the fewest states required by the causal chain.
- Keep diagram and current explanation visible side by side when readable.
- Every control, calculation, and diagram must read one canonical state.
- Use semantic `<code>` elements in visible HTML. Do not leave Markdown backticks in prose.
- Keep code-container text contrast correct.
- Keep click-controlled popups inside the viewport.
- Explain every non-obvious constant near its declaration or use.

## 8. Android delivery rules

- Complete chapter-screen previews live in `Chapter07Screen.kt`.
- Direct Lesson 7.4 previews live in `DownsampledBlurExplorer.kt`.
- Both levels provide light and dark variants.
- Both levels allow vertical scrolling through all content in finite-height Android Studio Preview.
- Deliver only changed files in separate learning-docs and Android ZIPs.
- Verify exact ZIP manifests and archive integrity.

## 9. First response in a future chat

When all required files are attached, confirm that they were read, then restate only:

```text
completed: 65 of 216, through Lesson 7.3
current unresolved checkpoint: Lesson 7.4 — Downsampled blur
generated frontier: Lesson 7.4
next planned lesson after confirmation: Lesson 7.5
Lesson 7.4 is generated and not complete
```

Then wait for my next message.

## 10. Required response footer

End every lesson-related response with:

```text
Course progress: X of 216 lessons completed.
```

Then provide a clearly labelled best-effort estimate of remaining conversation context. Treat that estimate as approximate.
