# Liquid Glass on Android: Beginner-to-Expert Curriculum

**Version:** 2.2  
**Updated:** 2026-07-19  
**Current course position:** Lessons 1.1 through 1.6 are complete by learner confirmation. Lesson 1.7 is the next learner checkpoint. Files are generated through Lesson 2.2 for offline sequential study.  
**Primary platform:** Kotlin, Jetpack Compose, Android 13/API 33 or newer  
**Physical test device:** Pixel 8 Pro  
**Working Android project name:** `LiquidGlassLab`  
**Default lesson format:** one standalone interactive HTML file per lesson

---

## 1. What changed through version 1.6

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
- use a light theme;
- target desktop only;
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
5. **3.5 — Why transparent edges can look wrong.** Introduce premultiplied alpha only through a visible halo problem.
6. **3.6 — Brightness and luminance.** Estimate whether a background region is light or dark.
7. **3.7 — Foreground contrast.** Choose dark or light icons from measured background brightness.
8. **3.8 — Tint.** Add a controlled color influence without replacing the background.
9. **3.9 — Saturation.** Make colors richer or quieter behind the material.
10. **3.10 — Blend modes.** Compare normal, screen, multiply, and plus with small examples.
11. **3.11 — Compositing laboratory.** Stack several adjustable layers and predict the final result.

**Checkpoint:** Explain why two panels with the same alpha can look very different over different content.

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
8. **4.8 — Masks.** Use a grayscale value to decide where an effect is visible.
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


## 10A. Android source organization for the generated start of Chapter 2

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/
├── MainActivity.kt                         # switches to Chapter02Screen in Lesson 2.1
└── chapter02/
    ├── Chapter02Screen.kt                  # introduced in Lesson 2.1
    ├── EnlargedPixelGrid.kt                # introduced in Lesson 2.1, updated in 2.2
    └── XAxisExplorer.kt                   # introduced in Lesson 2.2
```

The generated Chapter 2 files do not override the learning order. Lesson 1.7 and Lesson 1.8 remain the next checkpoints.

---

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

## 13. Reusable continuation prompt

```text
We are continuing my “Liquid Glass on Android” beginner-to-expert course.

Read these two files first:
1. liquid_glass_android_curriculum.md
2. liquid_glass_android_handoff.md

Assume I am a senior web engineer and an absolute beginner in mathematics, graphics programming, shaders, GPU concepts, and Android rendering internals.

Use simple English. Define each new graphics or math term at first use. Use short sentences. Explain one actual value through input → operation → output.
At the end of every response, include a clearly labelled best-effort estimate of the remaining conversation context window in tokens. State that the number is approximate.

Course file rules:
- The master curriculum is a plan. Do not put full lessons into it.
- Deliver only incremental ZIPs containing files created or modified for the current lesson. Preserve paths beneath `liquid-glass-learning-docs/` and `LiquidGlassLab/`. Do not include cumulative copies unless explicitly requested.
- Every chapter hub is named `lesson-[chapter-name].html`; do not create generic chapter `index.html` files.
- Every sub-lesson has one standalone interactive HTML file named `lesson-[chapter-number]-[lesson-number]-[lesson-name].html`.
- HTML must work from file:// with inline CSS, JavaScript, SVG, Canvas, or WebGL2.
- Light theme only. Desktop only. Verify at 1920×1080 or larger.
- Use 5120×1440 for an intentionally ultrawide explanation.
- Use a manual stepper before any free-running sequence animation.
- Use interactive SVG for math-heavy geometry.
- Use Canvas or WebGL2 when per-pixel behavior needs a real visual model.
- Clearly label browser approximations. Android behavior must be tested on the Pixel 8 Pro.
- Kotlin and AGSL source lives in the separate Android project. Quote the relevant lines, state the target path, and provide the complete changed file or patch beside the lesson delivery.
- Include at least one small coding challenge before the final exercises. End each lesson with two to four exercises and hidden answers.
- Provide a copyable lesson record for the handoff.
- Do not use a third-party glass library for the main implementation.
- Do not claim to know Apple’s private implementation.

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

Generated and available lesson files:

- `liquid-glass-course.html`;
- `course/glossary.html`;
- `course/chapters/chapter-01/lesson-a-transparent-panel-is-not-yet-liquid-glass.html`;
- `course/chapters/chapter-01/lesson-01-01-visible-ingredients.html`;
- `course/chapters/chapter-01/lesson-01-02-observe-the-transition.html`;
- `course/chapters/chapter-01/lesson-01-03-create-the-android-project.html`;
- `course/chapters/chapter-01/lesson-01-04-build-a-study-background.html`;
- `course/chapters/chapter-01/lesson-01-05-translucent-rounded-panel.html`;
- `course/chapters/chapter-01/lesson-01-06-alpha-mixture.html`.

Lessons 1.1 through 1.5 are complete by explicit confirmation or learner progression. Exercise answers were not submitted for conversational grading.

Lesson 1.6 is generated and is the current checkpoint. It changes no Android source, so no Android ZIP is produced. The cumulative Android implementation remains the Lesson 1.5 result. The Lesson 1.5 Android changed-file ZIP contained only:

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter01/Chapter01Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter01/TranslucentRoundedPanel.kt
```

`StudyBackground.kt` remains cumulative source in the Android project. The Lesson 1.6 learning-docs ZIP contains only files created or modified for Lesson 1.6. Verification screenshots are not included in the archive.

---

## 15. Primary references

The course plan was checked against these public primary sources through 2026-07-19:

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
- Android, **Compose Color reference**: https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/Color
- Android, **Compose BlendMode reference**: https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/BlendMode
- Android, **Constraints and modifier order**: https://developer.android.com/develop/ui/compose/layouts/constraints-modifiers
- Android, **GraphicsLayer**: https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/layer/GraphicsLayer
- Android, **Create a project**: https://developer.android.com/studio/projects/create-project
- Android, **Jetpack Compose quick start**: https://developer.android.com/develop/ui/compose/setup
- Android, **Run apps on a hardware device**: https://developer.android.com/studio/run/device
- Android, **Configure on-device developer options**: https://developer.android.com/studio/debug/dev-options
- Android, **Android Debug Bridge**: https://developer.android.com/tools/adb
