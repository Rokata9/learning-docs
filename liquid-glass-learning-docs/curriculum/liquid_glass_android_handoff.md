# Liquid Glass on Android — concise conversation handoff

**Updated:** 2026-08-17  
**Course version:** 7.2.0

## Read order

1. `USER_PREFERENCES.md`
2. `AGENTS.md`
3. `CURRENT_STATE.md`
4. This handoff
5. `liquid_glass_android_curriculum.md` when the full plan is needed
6. Current lesson HTML and Android files

Treat `CURRENT_STATE.md` as authoritative.

## Authoritative status

```yaml
course_lessons_total: 216
learner_confirmed_completed: 63
completed_through: "Lesson 7.1 — Blur as neighborhood averaging"
completed_chapters: [1, 2, 3, 4, 5, 6]
chapter_07_status: "in progress; 1 of 12 complete"
next_unresolved_checkpoint: "Lesson 7.2 — Blur radius"
generated_frontier: "Lesson 7.2 — Blur radius"
next_planned_after_checkpoint: "Lesson 7.3 — Edge treatment"
lesson_07_01_complete: true
lesson_07_02_generated: true
lesson_07_02_complete: false
```

## Completed blur prerequisite

Lesson 7.1 established neighborhood dependence:

```text
one output position
← several nearby source colors
→ one combined output color
```

Its 3 × 3 equal-weight RGB arithmetic is a transparent teaching model. It does not reveal Android's private kernel.

Chapter 6 already provides the eventual production integration point:

```text
panelSampleLayer.renderEffect = blurEffect
```

Lesson 7.2 must not rebuild capture, crop, freshness, feedback prevention, or command-versus-buffer lessons.

## Generated Lesson 7.2 contract

### Principal idea

Blur radius controls spatial influence distance:

```text
larger radius
→ farther source positions can influence an output
→ broader transition bands
→ less distinct small detail
```

Radius is not opacity or tint strength.

### Exact teaching trace

The source strip is:

```text
index:  0    1    2    3    4    5    6    7    8
color: blue blue blue blue amber amber amber amber amber
```

```text
blue  = RGB(18, 54, 90)
amber = RGB(225, 153, 45)
selected output index i = 5
```

The teaching radius `r` is measured in whole source-cell offsets. The window includes `i - r` through `i + r`. Only this model uses `N = 2r + 1` equal-weight samples.

```text
r = 0 → RGB(225, 153, 45)
r = 1 → RGB(225, 153, 45)
r = 2 → RGB(184, 133, 54)
r = 3 → RGB(166, 125, 58)
```

Radius 1 leaves the selected output unchanged because every included source cell is amber. Radius 2 first reaches blue index 3.

The browser pairs those model radii with Android test radii `0`, `4`, `12`, and `24` dp. The pairing communicates relative size; one model cell does not equal four dp.

### Browser lesson

The standalone lesson contains:

- a sharp, small-radius, and large-radius practical visual;
- five precisely named objects;
- four synchronized radius presets;
- a controlled `1.00..4.00 px/dp` density slider;
- one synchronized ten-state walkthrough;
- exact first-index, last-index, sample-count, RGB, and dp-to-px traces;
- a visible distinction between model radius and Android radius;
- a short real-Android route;
- a styled three-choice prediction;
- one focused four-blank Kotlin challenge;
- five explain-back exercises;
- a ten-item Preview/device checkpoint;
- viewport-safe click tooltips;
- explicit boundaries for edge treatment and downsampling.

### Android implementation

`BlurRadiusExplorer.kt` contains:

- learner-facing presets at `0`, `4`, `12`, and `24` dp;
- a continuous `0..28` dp slider;
- runtime conversion from dp to raw pixels;
- one `BlurEffect` whose `radiusX` and `radiusY` receive the same pixel value;
- fixed `TileMode.Clamp` so Lesson 7.3 can isolate edge treatment;
- no effect at `0 dp`, giving an exact sharp reference;
- a sharp-versus-selected-radius comparison using identical source artwork;
- a hard color boundary, diagonal line, small dot, and narrow bars to reveal transition widening and detail loss;
- named and commented non-obvious constants;
- no repeated Chapter 6 architecture or diagnostic modes.

`Chapter07Screen.kt` now opens Lesson 7.2. `MainActivity.kt` already opens `Chapter07Screen` and is unchanged.

### Evidence boundary

The public Compose API documents `radiusX` as horizontal blur radius, `radiusY` as vertical blur radius, and `edgeTreatment` as the policy for pixels outside the input bounds. It does not document sample count, sample coordinates, weights, kernel shape, internal color representation, or optimization strategy.

Lesson 7.2 establishes radius behavior and data flow. It does not compare edge treatment, downsample, or measure performance.

## New-learning rule

Every full lesson must add a genuinely new mechanism, API behavior, mathematical operation, measurement method, or implementation step. Prerequisite recap is brief and exists only to supply the new operation.

If planned material is mostly consolidation, merge it into the next substantive lesson or make it a short checkpoint. Do not count repeated architecture prose as new graphics progress.

## Current files to attach in a future conversation

Recommended:

```text
complete liquid-glass-learning-docs repository
complete LiquidGlassLab repository
```

Minimum:

```text
USER_PREFERENCES.md
AGENTS.md
CURRENT_STATE.md
curriculum/liquid_glass_android_handoff.md
curriculum/liquid_glass_android_curriculum.md
course/chapters/chapter-07/lesson-build-convincing-frosted-glass-without-a-custom-lens.html
course/chapters/chapter-07/lesson-07-01-blur-as-neighborhood-averaging.html
course/chapters/chapter-07/lesson-07-02-blur-radius.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/MainActivity.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/BlurNeighborhoodAveragingExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/BlurRadiusExplorer.kt
```

## Completion rule

Do not mark Lesson 7.2 complete merely because it was generated or reviewed. Wait for explicit learner confirmation. Do not generate Lesson 7.3 before that confirmation unless the learner explicitly asks to generate ahead.

Course progress: 63 of 216 lessons completed.
