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
course/chapters/chapter-07/lesson-07-06-saturation-and-contrast.html
course/chapters/chapter-07/lesson-07-07-static-rim.html
course/chapters/chapter-07/lesson-07-08-inner-highlight.html
course/chapters/chapter-07/lesson-07-09-outer-shadow.html
course/chapters/chapter-07/lesson-07-10-fine-noise.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/SaturationContrastExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/StaticRimExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/InnerHighlightExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/OuterShadowExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/FineNoiseExplorer.kt
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
- Learner-confirmed complete: **68 of 216 lessons**.
- Completed through: **Lesson 7.6 — Saturation and contrast**.
- Completed chapters: **1 through 6**.
- Chapter 7 is in progress: **6 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.7 — Static rim**.
- Generated frontier: **Lesson 7.10 — Fine noise or dither**.
- Next planned lesson after the generated frontier: **Lesson 7.11 — Compose the layers**.
- Lesson 7.7 is generated and is not learner-confirmed complete.
- Lessons 7.8, 7.9, and 7.10 are generated ahead and are not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation.

## 3. Completed Lesson 7.6 prerequisite contract

Lesson 7.6 established:

```text
blurred + tinted glass group
→ ColorFilter.colorMatrix(setToSaturation(factor))
→ measure label contrast from the new RGB
→ keep the label outside the filter
```

Lessons 7.7–7.9 keep blur `18.dp`, tint amount `0.25`, and saturation `0.40` fixed. Do not repeat those derivations. Lesson 7.10 does not rebuild them either.

Lesson 4.5 already taught `Stroke`. Lesson 4.7 already taught clipping. Lesson 4.4 already taught concentric inner radius. Lesson 7.7 must not rebuild those derivations.

## 4. Unresolved 7.7 and generated-ahead 7.8 / 7.9 contracts

### Lesson 7.7 — unresolved checkpoint

```text
quieted frosted fill, clipped to the panel path
→ a Canvas Stroke is centered on its path
→ clipping to that same path discards the outer half
→ production insets the path by width ÷ 2
→ inner corner radius = panel corner radius − inset
```

The stroke uses one color on every side. It is not a lighting model.

### Lesson 7.8 — generated ahead

```text
wide inset Stroke on its own layer
→ small BlurEffect on that layer only
→ parent clip discards the outward fade
→ inward fade remains
→ thin unblurred 7.7 rim is a later sibling
```

Band blur is not the glass fill’s `18.dp` blur. The band is not a lighting model.

### Lesson 7.9 — generated ahead

```text
dark copy of the panel rounded rectangle
→ empty room ≥ shadow blur radius
→ BlurEffect on that larger layer
→ draw behind the clipped glass
```

A same-size layer cannot put a halo on the surround. Downward offset is a convention, not a simulated lamp.

### Lesson 7.10 — generated frontier

```text
slow true ramp
→ signed = 2 × unitNoise(column, row) − 1
→ offset = signed × amount
→ add the same offset to R, G, and B
→ store8 = round(clamp(sum) × 255)
```

Chroma noise uses a different offset per channel and looks dirty. The remainder recipe is a teaching table, not a GPU program.

### Android route

`Chapter07Screen.kt` stacks `StaticRimExplorer`, `InnerHighlightExplorer`, `OuterShadowExplorer`, and `FineNoiseExplorer`. Direct previews live in each explorer file.

### Evidence boundary

None of these strokes, bands, shadows, or noise fields is a specular highlight, a signed-distance glow, a custom shader, or Apple’s private edge treatment. Lesson 7.11 will treat full stack order as its own topic.

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
- Direct Lesson 7.7 previews live in `StaticRimExplorer.kt`.
- Direct Lesson 7.8 previews live in `InnerHighlightExplorer.kt`.
- Direct Lesson 7.9 previews live in `OuterShadowExplorer.kt`.
- Direct Lesson 7.10 previews live in `FineNoiseExplorer.kt`.
- Both levels provide light and dark variants.
- Both levels allow vertical scrolling through all content in finite-height Android Studio Preview.
- When stacking both theme `@Preview` annotations, put dark (`UI_MODE_NIGHT_YES`) first, then light.
- Do not generate `.zip` files. Leave changed files in the `liquid-glass-learning-docs` and `LiquidGlassLab` repositories.
- Package a ZIP only if I explicitly ask for one.

## 9. First response in a future chat

When all required files are attached, confirm that they were read, then restate only:

```text
completed: 68 of 216, through Lesson 7.6
current unresolved checkpoint: Lesson 7.7 — Static rim
generated frontier: Lesson 7.10
next planned lesson after the frontier: Lesson 7.11
Lesson 7.7 is generated and not complete
Lessons 7.8, 7.9, and 7.10 are generated ahead and not complete
```

Then wait for my next message.

## 10. Required response footer

End every lesson-related response with:

```text
Course progress: X of 216 lessons completed.
```

Then provide a clearly labelled best-effort estimate of remaining conversation context. Treat that estimate as approximate.
