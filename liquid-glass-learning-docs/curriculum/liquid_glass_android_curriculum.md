# Liquid Glass on Android: Beginner-to-Expert Curriculum

**Version:** 3.3  
**Updated:** 2026-07-25  
**Current course position:** Lessons 1.1 through 3.2 are complete by learner confirmation. **19 of 216 lessons are complete.** Lesson 3.3 is the next learner checkpoint and the generated frontier.  
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
- Red, green, and blue are calculated separately. The weighted totals are `(0.48, 0.32, 0.52)`. Dividing by output alpha produces straight RGB `(0.60, 0.40, 0.65)`.
- The Android explorer compares two draw calls using `BlendMode.SrcOver` with one flattened RGBA color calculated by the same operation.
- The implementation guards output alpha zero and returns transparent black as a deterministic teaching fallback instead of dividing by zero.
- Draw-order reversal remains deferred to Lesson 3.4. Premultiplied buffer storage and edge halos remain deferred to Lesson 3.5.
- Android changes: `Chapter03Screen.kt` and new `chapter03/OverOperationExplorer.kt`.
- `MainActivity.kt`, `RgbChannelsExplorer.kt`, and `AlphaExplorer.kt` remain unchanged and are not included in the Lesson 3.3 Android archive.

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
5. **3.5 — Why transparent edges can look wrong.** Apply alpha-weighted color values to a visible halo problem and explain the storage representation precisely.
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
├── MainActivity.kt                         # switches to Chapter03Screen in Lesson 3.1; unchanged in Lesson 3.3
└── chapter03/
    ├── Chapter03Screen.kt                  # introduced in Lesson 3.1; switches to OverOperationExplorer in Lesson 3.3
    ├── RgbChannelsExplorer.kt              # introduced in Lesson 3.1; unchanged in Lesson 3.3
    ├── AlphaExplorer.kt                    # introduced in Lesson 3.2; unchanged in Lesson 3.3
    └── OverOperationExplorer.kt            # introduced in Lesson 3.3
```

Lessons 3.1 and 3.2 are complete. Lesson 3.3 is generated and is the current learner checkpoint. It calculates source-over output RGBA and compares a renderer stack with a flattened output color.

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

The weighted RGB totals are:

```text
red   = 0.90 × 0.50 + 0.10 × 0.60 × 0.50 = 0.48
green = 0.10 × 0.50 + 0.90 × 0.60 × 0.50 = 0.32
blue  = 0.80 × 0.50 + 0.40 × 0.60 × 0.50 = 0.52
```

Dividing each weighted total by output alpha produces:

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
remaining opening, surviving destination alpha, output alpha, weighted RGB
    ↓
straight output RGBA
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


## 13. Reusable continuation prompt

```text
We are continuing my “Liquid Glass on Android” beginner-to-expert course.

Read these two files first:
1. liquid_glass_android_curriculum.md
2. liquid_glass_android_handoff.md

Assume I am a senior web engineer and an absolute beginner in mathematics, graphics programming, shaders, GPU concepts, and Android rendering internals.

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

Learner completion is confirmed through Lesson 3.2. Chapters 1 and 2 are complete. Lesson 3.3 is generated and pending. The learner-confirmed total is 19 of 216 lessons.

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
- `course/chapters/chapter-03/lesson-03-03-the-over-operation.html`.

Current generated Chapter 3 Android source:

```text
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/
├── MainActivity.kt
└── chapter03/
    ├── Chapter03Screen.kt
    ├── RgbChannelsExplorer.kt
    ├── AlphaExplorer.kt
    └── OverOperationExplorer.kt
```

The Lesson 3.3 Android ZIP contains only the changed `Chapter03Screen.kt` and the new `OverOperationExplorer.kt`. The learning-docs ZIP contains only files added or modified for Lesson 3.3.

---

## 15. Primary references

The course plan was checked against these public primary sources through 2026-07-25:

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
- Android, **Compose OnGloballyPositionedModifier reference**: https://developer.android.com/reference/kotlin/androidx/compose/ui/layout/OnGloballyPositionedModifier
- Android, **Compose DrawScope reference**: https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/drawscope/DrawScope
- Android, **Compose Color reference**: https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/Color
- Android, **Compose Slider**: https://developer.android.com/develop/ui/compose/components/slider
- Android, **Material Design 3 in Compose**: https://developer.android.com/develop/ui/compose/designsystems/material3
- Android, **Compose onSizeChanged reference**: https://developer.android.com/reference/kotlin/androidx/compose/ui/layout/onSizeChanged.modifier
- Android, **Compose gestures reference**: https://developer.android.com/reference/kotlin/androidx/compose/foundation/gestures/package-summary
- Android, **Understand gestures and raw pointer events**: https://developer.android.com/develop/ui/compose/touch-input/pointer-input/understand-gestures
- Android, **Compose Color reference**: https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/Color
- Android, **Compose BlendMode reference**: https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/BlendMode
- AndroidX source, **Color.compositeOver implementation**: https://github.com/androidx/androidx/blob/androidx-main/compose/ui/ui-graphics/src/commonMain/kotlin/androidx/compose/ui/graphics/Color.kt
- Android, **Constraints and modifier order**: https://developer.android.com/develop/ui/compose/layouts/constraints-modifiers
- Android, **GraphicsLayer**: https://developer.android.com/reference/kotlin/androidx/compose/ui/graphics/layer/GraphicsLayer
- Android, **Create a project**: https://developer.android.com/studio/projects/create-project
- Android, **Jetpack Compose quick start**: https://developer.android.com/develop/ui/compose/setup
- Android, **Run apps on a hardware device**: https://developer.android.com/studio/run/device
- Android, **Configure on-device developer options**: https://developer.android.com/studio/debug/dev-options
- Android, **Android Debug Bridge**: https://developer.android.com/tools/adb
