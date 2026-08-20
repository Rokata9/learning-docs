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
course/chapters/chapter-07/lesson-07-05-tint-layer.html
course/chapters/chapter-07/lesson-07-06-saturation-and-contrast.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/TintLayerExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/SaturationContrastExplorer.kt
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
- Learner-confirmed complete: **67 of 216 lessons**.
- Completed through: **Lesson 7.5 — Tint layer**.
- Completed chapters: **1 through 6**.
- Chapter 7 is in progress: **5 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.6 — Saturation and contrast**.
- Generated frontier: **Lesson 7.6 — Saturation and contrast**.
- Next planned lesson after confirmation: **Lesson 7.7 — Static rim**.
- Lesson 7.6 is generated and is not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation.

## 3. Completed Lesson 7.5 prerequisite contract

Lesson 7.5 established:

```text
already-blurred destination
→ draw a translucent tint rectangle
→ keep a sharp label on top
```

Lesson 7.6 keeps that tint amount fixed at `0.25`. Do not repeat the 3.8 mix or downsample arithmetic.

Lesson 3.9 already taught `setToSaturation`. Lesson 3.7 already taught contrast ratio. Lesson 7.6 must not rebuild those derivations.

## 4. Current Lesson 7.6 contract

### Principal new operation

```text
blurred + tinted glass group
→ ColorFilter.colorMatrix(setToSaturation(factor))
→ measure label contrast from the new RGB
→ keep the label outside the filter
```

Navy after tint `(0.3250, 0.4375, 0.5500)` and orange after tint `(0.9250, 0.7000, 0.4000)` are the destinations of the saturation transform. Factor `0` makes each a gray from its own gray reference.

### Android route

`SaturationContrastExplorer.kt` wraps blur and tint in a `graphicsLayer` with `colorFilter = ColorFilter.colorMatrix(...)`. The sharp label is a sibling.

### Evidence boundary

Saturation does not guarantee a 4.5 : 1 pass. The gray reference is not relative luminance.

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
- Direct Lesson 7.6 previews live in `SaturationContrastExplorer.kt`.
- Both levels provide light and dark variants.
- Both levels allow vertical scrolling through all content in finite-height Android Studio Preview.
- Deliver only changed files in separate learning-docs and Android ZIPs.
- Verify exact ZIP manifests and archive integrity.

## 9. First response in a future chat

When all required files are attached, confirm that they were read, then restate only:

```text
completed: 67 of 216, through Lesson 7.5
current unresolved checkpoint: Lesson 7.6 — Saturation and contrast
generated frontier: Lesson 7.6
next planned lesson after confirmation: Lesson 7.7
Lesson 7.6 is generated and not complete
```

Then wait for my next message.

## 10. Required response footer

End every lesson-related response with:

```text
Course progress: X of 216 lessons completed.
```

Then provide a clearly labelled best-effort estimate of remaining conversation context. Treat that estimate as approximate.
