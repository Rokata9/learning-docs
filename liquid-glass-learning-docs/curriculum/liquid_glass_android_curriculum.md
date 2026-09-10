# Liquid Glass on Android — Beginner-to-Expert Curriculum

**Version:** 9.10.0  
**Updated:** 2026-09-10  
**Primary platform:** Kotlin + Jetpack Compose  
**Minimum learning target:** Android 13 / API 33  
**Physical test device:** Pixel 8 Pro  
**Total lessons:** 216

Live progress, current files, and the checkpoint/frontier contracts live in `CURRENT_STATE.md`. This file is the 216-lesson plan plus frozen locks needed to generate later lessons. Lesson HTML and Kotlin keep the full teaching prose. Do not add per-lesson implementation diaries here.

## 1. Authoritative course position

- Learner-confirmed complete: **93 of 216**, through **Lesson 9.7**.
- Completed chapters: **1–8**. Chapter 9: **7 of 14**.
- Unresolved checkpoint: **Lesson 9.8 — Translate sample coordinates**.
- Generated frontier: **Lesson 9.10 — Build a displacement field** (generated ahead, not complete).
- Next planned after the frontier: **Lesson 9.11 — Refraction as displaced sampling**.
- Lessons 9.9 and 9.10 are generated ahead of checkpoint 9.8 and are not complete.

## 2. How this file relates to the rule sources

Permanent teaching and delivery rules live in `AGENTS.md` and `USER_PREFERENCES.md`. Do not copy them here.

This plan assumes a total beginner in graphics and mathematics, one new mechanism per full lesson, and explicit learner confirmation before a completed-count increase.

## 3. Full 216-lesson plan

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
5. **3.5 — Straight and premultiplied RGBA.** Continue the complete Lesson 3.3 source-over example. Name the straight and premultiplied forms of source, destination, and output. Relate output premultiplied RGB to output straight RGB. Explain which API or buffer contract expects each representation.
6. **3.6 — From a visible color to relative luminance.** Start from one opaque Compose `Color`, decode one sRGB channel before all three, then combine the three linear-light channels into one relative-luminance number.
7. **3.7 — Foreground contrast.** Start from one final opaque background. Calculate black and white contrast ratios separately. Choose the larger ratio, then check accessibility targets as a separate policy step.
8. **3.8 — Tint.** Add a controlled color influence without replacing the background.
9. **3.9 — Saturation.** Reduce or enlarge each RGB channel’s distance from the transform’s gray reference.
10. **3.10 — Blend modes.** Compare normal, screen, multiply, and plus with small examples.
11. **3.11 — Compositing laboratory.** Stack several adjustable layers and predict the final result.

**Checkpoint:** Explain why two panels with the same alpha can look very different over different content.

**Image-boundary artifact deferral:** The rejected case study requires a concrete image boundary and an operation that calculates new image values. The course will return to it after image sampling is taught in Chapter 9.

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
8. **4.8 — Masks.** Use a separate per-position alpha value to decide how much grouped content remains visible. Distinguish the actual alpha mask from any grayscale preview used to visualize its values.
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
8. **5.8 — Spring motion, overshoot, and settle.** Merge spring intuition with overshoot/settle so the full causal chain stays visible in one lesson.
9. **5.9 — Archive / backward-compatible redirect.** Keep the lesson number stable while pointing learners back to the consolidated Lesson 5.8 teaching page.
10. **5.10 — Press deformation.** Convert one local pointer-down position into a transform pivot; distinguish pressed Boolean, q target, and current q; derive non-uniform scale and radius; prove point movement around the pivot; keep layout bounds separate from draw bounds; finish release/cancellation and the reusable Indication boundary.
11. **5.11 — Reversal and interruption.** Change the target during in-flight motion while preserving current value and velocity; compare smooth reversal with velocity reset and value snap defects; connect the contract to `Animatable.animateTo` cancellation and continuity.
12. **5.12 — Slow-motion controller.** Separate real frame time from local simulation play time; add a speed multiplier, pause, deterministic 16 ms debug step, reverse direction, and manual `TargetBasedAnimation` play-time control.

**Checkpoint:** Build a reversible capsule-to-panel animation whose values can be inspected at any progress.

---

### Chapter 6 — How Android draws the scene

**Purpose:** Understand why a normal blur modifier is not enough for real backdrop glass.

1. **6.1 — Composition, layout, and drawing.** Learn what each Compose phase is responsible for.
2. **6.2 — Draw order and ownership.** Identify which content belongs to which composable.
3. **6.3 — Graphics layers.** Separate drawing commands from later transformations and effects.
4. **6.4 — `RenderEffect` on owned content.** Blur a layer and observe that its own contents are blurred.
5. **6.5 — The backdrop problem.** Demonstrate why a foreground panel cannot automatically sample arbitrary siblings behind it.
6. **6.6 — Record the background.** Use a controlled `GraphicsLayer` to record background drawing and replay it deliberately into one or more targets.
7. **6.7 — Crop the correct region.** Map glass bounds into background coordinates.
8. **6.8 — Keep the sample current.** Update the captured scene as content scrolls or animates.
9. **6.9 — Avoid feedback loops.** Prevent the glass from capturing itself.
10. **6.10 — Offscreen cost.** Estimate how target extent scales pixel work and color storage, then separate that estimate from measured GPU cost.
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
8. **8.8 — Vector arithmetic.** Number the same pixels from the middle. Subtract is required. × 2 puts the edges near ±1.
9. **8.9 — Uniforms.** Change shader behavior from Kotlin without rewriting the program.
10. **8.10 — Time uniform.** Write elapsed time into a uniform and travel Lesson 8.6’s red ramp with `fract`.
11. **8.11 — `clamp`, `mix`, and `smoothstep`.** Use three essential functions with graph previews.
12. **8.12 — Shader error workflow.** Read compiler errors and reduce a failing shader to its smallest form. **Complete.**

**Checkpoint:** Animate a size-independent radial effect and explain every line.

---

### Chapter 9 — Distance fields, image sampling, and refraction

**Purpose:** Build the mathematical tools that let a shader know where a glass boundary is and how to bend the background.

1. **9.1 — Distance between two points.** Use a right triangle visually before introducing the formula. **Complete.**
2. **9.2 — Circle signed distance field.** Make the sign tell whether a point is inside or outside. **Complete.**
3. **9.3 — Turn distance into a soft mask.** Use `smoothstep` around the boundary. **Complete.**
4. **9.4 — Rounded rectangle distance field.** Build it from local coordinates and corner radius. **Complete.**
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
12. **11.12 — Reduced motion.** Replace morphing and overshoot with calmer transitions.
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

## 4. Frozen locks (do not rebuild)

Chapters **1–7** are complete. Do not reopen blur, tint, saturation, inset-stroke math, band blur, shadow room, or the 7.10 store formula unless a later lesson explicitly redefines them.

**Chapter 7 frost constants**

- Blur `18.dp` / `18` CSS px.
- Tint amount `0.25`.
- Saturation `0.40`.
- 7.10 store: one signed remainder offset added to RGB, then `round(clamp(sum) × 255)`. Default amount `0.02`.

**Chapter 8 completed chain (8.1–8.10)**

```text
8.1  colorAt(column, row) once per pixel; CPU loop is not RuntimeShader
8.2  AGSL string → RuntimeShader → ShaderBrush → drawRect
8.3  8-bit / 255 → teaching half4 0..1 → return is the store
     orange half4(0.88, 0.48, 0.18, 1.0) from (224, 122, 46)
     navy   half4(0.10, 0.25, 0.40, 1.0) from (26, 64, 102)
8.4  fragCoord.x pixels from left; if (x < 80.0) orange else navy; y unread
8.5  setFloatUniform("resolution", width, height); splitX = resolution.x / 2.0
8.6  uv = fragCoord / resolution; last pixel is not exactly 1; not a texture sample
8.7  scalar / vector / member; half 16-bit; float 32-bit; no GPU timing claim
8.8  p = uv - 0.5 from the middle; × 2 puts edges near ±1; 1 = one half-width
8.9  uniform splitU and leftColor; setFloatUniform; mismatch leaves splitU at 0
8.10 trips = elapsedSeconds / 4.0; fract(uv.x - time) as red; RuntimeShader not rebuilt
8.11 clamp → mix(a,b,t)=a+(b−a)×t → smoothstep bends linearFraction
     mix(navy, orange, smoothstep(0.40, 0.60, uv.x))
     teaching x=180, uv.x=0.45, stored red 0.221875
8.12 RuntimeShader(string) throws IllegalArgumentException
     shrink to smallest failing program; teaching fault is gl_FragCoord
```

**Completed Chapter 9**

```text
9.1  right triangle first; 0.30 / 0.40 / 0.50; length(p) as gray
9.2  sd = length(p) − radius; minus inside; if (sd < 0) orange else navy
9.3  mask = 1 − smoothstep(−band, band, sd); mix(navy, orange, mask)
     teaching sd +0.05 → mask 0.15625 → stored red 0.221875
9.4  innerHalf = outerHalf − r; q = abs(p) − innerHalf; sd = sdBox − r
     outer half (0.30, 0.20); r = 0.10; corner-boundary p = (0.26, −0.18)
9.5  nearestX = clamp(p.x, ±innerHalfW); sd = length(p − (nearestX, 0)) − r
     outer half (0.40, 0.20); r = 0.20; cap-boundary p = (0.32, −0.16)
9.6  two circles; union min; intersection max; B minus A max(sdB, −sdA)
     teaching left-only p = (−0.10, 0); sdA = −0.15; sdB = +0.05
9.7  uniform shader background; sampled = background.eval(fragCoord)
     left half stores sampled; teaching uv.x = 0.15 is navy
```

**Unresolved checkpoint, generated, not complete**

```text
9.8  readCoord = fragCoord − (offsetU × width, 0); default offsetU = 0.10
     teaching write uv.x = 0.15 reads 0.05 and stores orange
```

**Generated ahead of checkpoint 9.8, not complete**

```text
9.9  p = uv − 0.5; readUv = p / scale + 0.5; default scale = 2.00
     teaching write uv = (0.80, 0.70) reads (0.65, 0.60) and stores orange
9.10 dir = p / length(p); disp = dir × dispLen; readUv = uv − disp
     default dispLen = 0.10; teaching p = (0.30, −0.40) reads (0.74, 0.18)
```

**Policy**

- Count only explicit learner confirmation. Generating 9.9 and 9.10 did not complete 9.8.
- Current HTML/Kotlin paths live in `CURRENT_STATE.md`. Explorer names for older lessons live in those lesson files and `ChapterNNScreen.kt`.
- 5.8/5.9 stay consolidated: 5.8 is the teaching page; 5.9 is the archive redirect.
