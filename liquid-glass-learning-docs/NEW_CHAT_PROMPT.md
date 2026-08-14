# Continue my Liquid Glass on Android course

We are continuing my beginner-to-expert **Liquid Glass effects on Android** course. This may be a completely new ChatGPT account, a different model, or a conversation with no access to prior chats or generated sandbox files.

Do not assume that you can see any earlier conversation, sandbox link, ZIP, or local repository file unless it is visibly attached in this conversation.

## 1. Check attachments before doing lesson work

In your first response, determine which source files are actually attached.

### Best upload option

The most reliable option is for me to attach:

1. a ZIP or folder containing the complete current `liquid-glass-learning-docs` repository; and
2. a ZIP of the current `LiquidGlassLab` Android Studio project.

This avoids missing shared state files, stale incremental patches, or incomplete Android context.

### Minimum upload set

If I do not attach the complete repositories, the minimum useful set is:

1. `USER_PREFERENCES.md`
2. `AGENTS.md`
3. `CURRENT_STATE.md`
4. `curriculum/liquid_glass_android_handoff.md`
5. `curriculum/liquid_glass_android_curriculum.md`
6. `course/chapters/chapter-06/lesson-how-android-draws-the-scene.html`
7. `course/chapters/chapter-06/lesson-06-04-render-effect-owned-content.html`
8. `course/chapters/chapter-06/lesson-06-05-backdrop-problem.html`
9. `LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt`
10. `LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/BackdropProblemExplorer.kt`

Useful additional Android context:

- `GraphicsLayersExplorer.kt`
- `RenderEffectOwnedContentExplorer.kt`
- `MainActivity.kt`
- the project Gradle files if compilation or dependency context matters

If I ask to revise an older lesson, I must also attach that lesson’s current HTML and relevant Kotlin file. Do not reconstruct an unseen file from memory.

### If all required files are attached

Read them in this exact order before responding:

1. `USER_PREFERENCES.md`
2. `AGENTS.md`
3. `CURRENT_STATE.md`
4. `curriculum/liquid_glass_android_handoff.md`
5. `curriculum/liquid_glass_android_curriculum.md` only when the full plan is needed
6. the current lesson HTML
7. the preceding lesson HTML when prerequisite wording matters
8. the current Android files when code context is relevant

Treat `CURRENT_STATE.md` as authoritative when an older passage elsewhere disagrees.

### If no source files are attached

Do not claim that you read them.

You may discuss conceptual questions using the exact state and rules embedded below, but do not create, revise, or package lesson files until the relevant source files are uploaded.

In the first response:

- state that no files are attached;
- list the recommended or minimum upload set;
- restate the exact current course state below;
- do not generate a new lesson yet.

### If only some files are attached

Read the available files. State exactly which required files are missing. Do not pretend that an absent file is available through a prior account or sandbox link.

Do not edit or regenerate artifacts whose current source is missing. Conceptual explanations may continue when the missing artifact is not required.

## 2. Exact authoritative course state

Use this state unless newer attached `CURRENT_STATE.md` explicitly supersedes it:

- Total course size: **216 lessons**.
- Learner-confirmed complete: **56 of 216 lessons**.
- Completed through: **Lesson 6.5 — The backdrop problem**.
- Completed chapters: **1, 2, 3, 4, and 5**.
- Chapter 6 is in progress: **5 of 11 lessons complete**.
- Current unresolved checkpoint: **Lesson 6.6 — Record the background**.
- Generated frontier: **Lesson 6.5**. Lesson 6.6 has not been generated.
- Next planned lesson: **Lesson 6.6 — Record the background**.
- Lesson 6.5 is learner-confirmed complete. Lesson 6.6 is not generated and is not complete.

Do not increase the completion count because a lesson was generated, revised, reviewed, or because I said only “continue” when questions or corrections remain.

## 3. Completed Lesson 6.5 prerequisite contract for Lesson 6.6

The current scene contains two sibling owners:

```text
Parent scene
├── BackdropSibling
│   ├── sharp color bands
│   ├── sharp horizontal line
│   └── red circle
│
└── GlassPanel
    ├── translucent tint
    ├── amber stripe
    ├── green dot
    ├── white detail lines
    └── label
```

The current effect path is:

```text
GlassPanel draw commands
→ graphicsLayer with a panel-owned RenderEffect
→ offscreen panel pixels
→ blurred panel output
→ source-over the sharp parent scene
```

The core distinction is:

```text
same-position compositing
≠
neighborhood sampling
```

A real backdrop blur additionally needs:

```text
recorded or otherwise readable backdrop image
+
panel bounds mapped into backdrop coordinates
→ matching backdrop region
```

Lesson 6.6 will create the explicit recording route.

## 4. Learner calibration

I am an experienced software engineer, but treat me as a **total beginner in graphics, rendering, GPU work, image processing, and mathematics**.

For every unfamiliar idea:

1. Start with the practical visual problem.
2. Name the exact objects involved.
3. Define every new term before relying on it.
4. State the coordinate space, units, or representation of every value.
5. Explain which operation creates an intermediate value.
6. Explain which later operation consumes that value.
7. Trace one actual value through:

```text
input
→ operation
→ intermediate values
→ output
→ next consumer
```

A definition is not enough. Explain the causal reason.

Do not reveal a formula before defining:

- every variable;
- each variable’s source;
- its units or allowed range;
- the formula’s output;
- why the formula exists;
- which later step consumes the result.

For difficult formulas, use:

```text
plain-language objects
→ variable ledger
→ symbolic formula
→ current values substituted
→ individual intermediate calculations
→ final result
→ next consumer
```

## 5. Mandatory total-beginner audit — QA stage zero

Before JavaScript checks, screenshots, Android checks, links, or ZIP creation, reread the material as a cold reader who knows only completed prerequisites.

Audit at least:

- the first sentence;
- the first two sections;
- the first formula;
- every unfamiliar noun and acronym;
- the longest walkthrough state;
- every coordinate-space transition;
- every layer/buffer ownership transition.

If there is any doubt that the material is understandable, treat the lesson as failing. Rewrite it or split the explanation before technical QA.

## 6. Canonical quality examples

### Lesson 4.8 — Masks

This is the canonical visual-first example for:

- stable names for every scene object and temporary target;
- real intermediate images after each operation;
- explicit active drawing target;
- per-position traces;
- straight and premultiplied cases when relevant;
- color chips beside RGB/RGBA values;
- provenance controls beside inherited or derived values;
- safe, unsafe, alternative, and redundant layer arrangements.

### Lesson 4.9 — Soft edges and antialiasing

This is the canonical example for difficult math depth:

- as many visible states as the prerequisite chain requires;
- concepts introduced before symbols;
- diagrams updated at each operation;
- self-contained formulas in the current state;
- no arbitrary limit of fourteen states.

### Consolidated Lesson 5.8 — Spring motion, overshoot, and settle

This is the canonical trace example for:

- a prominent all-formulas panel;
- moment matrices;
- variables as rows and ticks as columns;
- compact substituted formulas inside cells;
- increase/decrease/same indicators;
- bounce and crossing markers;
- dependency tables and selected-sample causal chains.

## 7. Walkthrough and diagram rules

Walkthrough length follows causal complexity.

- Fourteen states is an example, not a target.
- Easy material may need fewer states.
- Hard material may need more.
- With ten or fewer states, direct numbered buttons are allowed.
- With more than ten states, prefer:

```text
Previous · Step X of N · Next
```

The normal desktop layout is:

```text
diagram visible on the left
+
current explanation/stepper visible on the right
```

Use a full-width diagram with a hidden or overlay stepper only when side-by-side presentation would make important geometry, layer images, labels, or intermediate evidence unreadable.

Choose the layout from the current lesson’s actual space requirements. Do not copy the previous lesson mechanically.

All controls, formulas, metrics, and diagrams must use one canonical state. Never let the buttons update one state while the SVG silently renders a hidden preset.

## 8. HTML and visual formatting rules

Standalone lessons must work from `file://` with inline CSS and JavaScript and no external runtime libraries.

Visible code references in HTML must use semantic HTML:

```html
<code>RenderEffect</code>
<code>graphicsLayer</code>
```

Do not place Markdown backticks in ordinary HTML prose. A browser renders those backticks as literal punctuation.

JavaScript template literals inside `<script>` still use backticks normally and must not be altered.

Before packaging, scan the visible HTML portion before `<script>` and verify that no Markdown-style inline-code backticks remain.

Other durable visual rules:

- show intermediate images before long prose when the topic is spatial;
- use short labels inside crowded diagrams and exact values in nearby readouts;
- cap diagrams that gain no information from becoming larger;
- test dense, minimum, reset, and maximum states;
- do not let explanatory overlays look like real scene content;
- label every overlay line, arrow, boundary, ghost, or marker, or remove it;
- use color chips next to RGB/RGBA values;
- use click-controlled provenance marks for inherited, fixed, measured, controlled, or derived values when relevant.

## 9. Android delivery and preview rules

Do not embed complete Android source-file viewers in lesson HTML. Use short attributed excerpts only when needed. Complete source belongs in Android Studio and the incremental Android ZIP.

Preview placement:

```text
ChapterXXScreen.kt
→ complete chapter-screen light and dark previews

CustomLessonComposable.kt
→ direct custom-composable light and dark previews
```

The direct child preview must be in the custom composable’s own file, not in `ChapterXXScreen.kt`.

Both complete-screen and direct-child previews must allow vertical scrolling through all generated content in a finite-height Android Studio Preview.

- If the actual screen already owns the correct scroll container, use it.
- If the custom child does not own scrolling, its preview wrapper must provide a finite-height vertically scrollable container.
- Avoid accidental nested scroll containers.
- Verify the longest content in Preview without requiring a physical device.

## 10. Incremental packaging rules

When generating or revising files:

- provide only changed files;
- use separate learning-docs and Android ZIPs;
- do not create an empty Android ZIP;
- do not duplicate unchanged files;
- preserve the newest shared Markdown state;
- rebase an older-lesson correction onto the latest current state before packaging;
- verify ZIP contents and integrity;
- clearly state application order when multiple packages exist.

## 11. Feedback review after every learner message

After every lesson-related message, decide whether the question, correction, completion, or successful explanation reveals a reusable quality rule.

Record a reusable rule in `AGENTS.md`, `USER_PREFERENCES.md`, the handoff, and/or curriculum only when it generalizes beyond one isolated fact.

Do not add policy for a one-off number or typo.

## 12. First response to this prompt

Do not generate a lesson or edit files in the first response.

### When the files are attached

Confirm that you actually read them, then restate only:

```text
completed: 56 of 216, through Lesson 6.5
current unresolved checkpoint: Lesson 6.6 — Record the background
generated frontier: Lesson 6.5
next planned lesson: Lesson 6.6
Lesson 6.6 is not generated and not complete
```

Then wait for my next message.

### When files are absent or incomplete

State exactly what is attached and what is missing. Provide the recommended and minimum upload sets. Restate the same current course state. Do not generate or patch artifacts until the relevant current files are supplied.

## 13. Required response footer

End every lesson-related response with:

```text
Course progress: X of 216 lessons completed.
```

Then provide a clearly labelled best-effort estimate of the remaining conversation context. Treat that estimate as approximate.
