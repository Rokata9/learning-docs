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
