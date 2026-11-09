# Liquid Glass on iOS — Beginner-to-Expert Curriculum

**Updated:** 2026-11-08
**Primary platform:** Swift + SwiftUI  
**Minimum learning target:** iOS 17  
**Physical test device:** iPhone 16 Pro  
**Total lessons:** 322

This file is the ordered 322-lesson plan plus frozen locks needed to generate later lessons. Teaching contracts and current file references live in `CURRENT_STATE.md`. Lesson HTML and Swift keep the full teaching prose. Do not add per-lesson implementation diaries here. Lesson completion is reported only in chat when a new lesson is generated; this file does not track it.

## 1. How this file relates to the rule sources

Permanent teaching and delivery rules live in `AGENTS.md` and `USER_PREFERENCES.md`. Do not copy them here.

This plan assumes a total beginner in graphics and mathematics. From Lesson 10.4 on, every lesson has a type:
- `C` concept: one new idea, taught in pictures with one traced value, in at most 5 stepper steps; no Metal exercise, explorer, challenge or record.
- `B` build: no new idea; one Metal or Swift exercise that joins the concept lessons before it, with an explorer and a record.
- `E` engineering: SwiftUI, architecture, testing or performance; code first and short.
An idea is a fact or method with its own reason that no earlier lesson taught. Every old lesson from 10.4 on was split into its ideas, one `C` lesson per idea; the heavy math may grow by any ratio (learner, 2026-11-02). Repeating an earlier mechanism in a new place is fine.

## 2. Full 322-lesson plan

### Chapter 1 — A transparent panel is not yet Liquid Glass

**Purpose:** Build a deliberately incomplete first result. Learn to separate translucency from blur, refraction, lighting, and motion.

1. **1.1 — Name the visible ingredients.** Learn the words translucency, blur, diffusion, refraction, tint, highlight, shadow, and morph.
2. **1.2 — Observe before coding.** Study a control at rest, during press, during expansion, and after settling.
3. **1.3 — Create `LiquidGlassLab`.** Make a small SwiftUI iOS app that runs on the iPhone 16 Pro.
4. **1.4 — Build a study background.** Use large color areas, circles, text, and sharp lines so future distortion is easy to see.
5. **1.5 — Draw a translucent rounded panel.** Change only the white fill opacity.
6. **1.6 — Learn the first formula.** Understand the simple alpha mixture between foreground and background.
7. **1.7 — Run a controlled device experiment.** Compare 0%, 25%, 50%, 75%, and 100% opacity.
8. **1.8 — Explain what is still missing.** Finish with a written diagnosis instead of trying to “fix everything.”

---

### Chapter 2 — The screen is a grid

**Purpose:** Learn the minimum coordinate math needed for iOS graphics.

1. **2.1 — What a pixel is.** Treat a screen image as a rectangular collection of tiny samples.
2. **2.2 — The X axis.** Move right by increasing X.
3. **2.3 — The Y axis.** Move down by increasing Y in iOS screen coordinates.
4. **2.4 — Width, height, edges, and center.** Calculate a center using half the width and half the height.
5. **2.5 — Pixels, points, and scale.** Understand why layout dimensions and shader coordinates use different units.
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
6. **3.6 — From a visible color to relative luminance.** Start from one opaque SwiftUI `Color`, decode one sRGB channel before all three, then combine the three linear-light channels into one relative-luminance number.
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
10. **5.10 — Press deformation.** Convert one local pointer-down position into a transform pivot; distinguish pressed Boolean, q target, and current q; derive non-uniform scale and radius; prove point movement around the pivot; keep layout bounds separate from draw bounds; finish release/cancellation and the reusable `ButtonStyle` / `isPressed` boundary.
11. **5.11 — Reversal and interruption.** Change the target during in-flight motion while preserving current value and velocity; compare smooth reversal with velocity reset and value snap defects; connect the contract to SwiftUI animation cancellation and continuity.
12. **5.12 — Slow-motion controller.** Separate real frame time from local simulation play time; add a speed multiplier, pause, deterministic 16 ms debug step, reverse direction, and manual `TimelineView` play-time control.

**Checkpoint:** Build a reversible capsule-to-panel animation whose values can be inspected at any progress.

---

### Chapter 6 — How SwiftUI draws the scene

**Purpose:** Understand why a normal blur modifier is not enough for real backdrop glass.

1. **6.1 — View update, layout, and rendering.** Learn what each SwiftUI phase is responsible for.
2. **6.2 — Draw order and ownership.** Identify which content belongs to which view.
3. **6.3 — Graphics layers.** Separate drawing commands from later transformations and effects.
4. **6.4 — `.blur()` on owned content.** Blur a view and observe that its own contents are blurred.
5. **6.5 — The backdrop problem.** Demonstrate why a foreground panel cannot automatically sample arbitrary siblings behind it.
6. **6.6 — Record the background.** Snapshot a dedicated background `View` with `ImageRenderer` or an offscreen Metal texture, then replay it deliberately into one or more targets.
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
11. **7.11 — Combine the layers.** Put the effects in a deliberate order.
12. **7.12 — Compare backgrounds.** Test photos, text, gradients, dark content, and light content.

**Checkpoint:** Produce a polished frosted card and list exactly why it is still not a complete Liquid Glass material.

---

### Chapter 8 — Your first Metal shader

**Purpose:** Learn shaders as small per-pixel functions, not as magic GPU code.

1. **8.1 — What a shader does.** Run the same small function for every output pixel.
2. **8.2 — Create a Metal shader.** Add a `.metal` file; Xcode compiles it; SwiftUI applies it with `ShaderLibrary` + `colorEffect`.
3. **8.3 — Return one fixed color.** Prove the shader is running.
4. **8.4 — `fragCoord`.** Receive the current pixel position.
5. **8.5 — Resolution.** Tell the shader the drawing width and height.
6. **8.6 — UV coordinates.** Divide position by resolution to obtain values near `0..1`.
7. **8.7 — Scalars and vectors.** Learn `float`, `float2`, `half`, and `half4` through visible examples.
8. **8.8 — Vector arithmetic.** Number the same pixels from the middle. Subtract is required. × 2 puts the edges near ±1.
9. **8.9 — Uniforms.** Change shader behavior from Swift without rewriting the program.
10. **8.10 — Time uniform.** Write elapsed time into a uniform and travel Lesson 8.6’s red ramp with `fract`.
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
4. **10.4 — The rest of the walk stays on a wall.** `C` Walk from S to the tip of N in three legs. After the x leg, the y leg and the height leg go 0 to the right, so the rest of the walk, and the tip of N, stay on the flat wall of all points that are as far to the right of S as N's x part. *(was 10.4, part 1; split in three on 2026-11-03)*
5. **10.5 — The wall is flat and stands straight up.** `C` Every point of the wall is 0.302 to the right of S, so the arrow between two of its points has x part 0 and the straight line between them stays on the wall (Lesson 10.4's legs): the wall has no bump and no fold. It stands straight up because a move up has x part 0 (Lesson 10.4). *(new, 2026-11-03: Lesson 10.4, Step 5 pointed here; learner: “Yes, flat wall first”)*
6. **10.6 — A turn around the x line keeps a line on the wall.** `C` Spin the teal line, a line on the wall through Gx, around the x line: the spin, by its definition, keeps every point's x and changes only y and height, so the line stays on the wall. *(was 10.4, part 1; split in three on 2026-11-03, then 10.5 split in three the same day; ends after its Step 3 since 2026-11-03)*
7. **10.7 — The wall seen straight on draws its lines at their whole length.** `C` The wall seen straight on draws each point at its y (→) and its height (↑), at one scale, and leaves out x. A line on the wall from Gx has x part 0: its y leg and its height leg are drawn at full size and at a square corner, as on the wall, so Lesson 9.1 gives the same long side: the drawing shows its whole length. N, which also has an x part, is drawn shorter. *(split from 10.7 on 2026-11-03: the premise of the kept length)*
8. **10.8 — The spin keeps the length.** `C` Seen straight on, the spin moves every point of the teal line round Gx by the same angle, so the teal line turns as one straight piece around Gx, like the walk of Lesson 10.3 around its start. A turn keeps lengths, and that drawing shows Gx to T at its whole length (10.7), so Gx to T stays 0.953 at every spin. *(split from 10.7 on 2026-11-03)*
9. **10.9 — T goes round a circle through the tip of N.** `C` T stays on the wall (10.6) and 0.953 from Gx (10.8), so its path is the circle of wall points 0.953 from Gx (Lesson 9.2); a full turn passes every point of it. The tip of N is on the wall and 0.953 from Gx, so one spin (about 65°) brings T there. *(split from 10.7 on 2026-11-03)*
10. **10.10 — Half a turn sends T to the opposite point.** `C` Two quarter turns put a minus on both of T's numbers: (a, b) → (−b, a) → (−a, −b). So T is on any line through Gx at two spins, 180° apart. Text rewritten 2026-11-05 (`AGENTS.md` Rule 0). *(was 10.5, Steps 4–5; moved out on 2026-11-03; split in two on 2026-11-04)*
11. **10.11 — Spins from 0° to 180° reach every line through Gx.** `C` A line through Gx crosses T's circle at two opposite points; one is up, or both are level. So spins from 0° to 180° reach every line on the wall through Gx. Text rewritten 2026-11-05 (`AGENTS.md` Rule 0). *(split from 10.10 on 2026-11-04)*
12. **10.12 — A wider angle at Gx puts T farther from S.** `C` With |SGx| and |GxT| fixed, a wider ∠SGxT gives a longer |ST|. So |ST| = 1.000 happens only at 90°. Text rewritten 2026-11-05 (`AGENTS.md` Rule 0). *(split from 10.5 on 2026-11-03)*
13. **10.13 — Any three points lie on one flat sheet.** `C` A door, a flat sheet that turns around the x line, always holds S and Gx and can turn until it holds T. So any three points lie on one flat sheet. Text rewritten 2026-11-05 (`AGENTS.md` Rule 0). *(split from 10.13 “Three fixed lengths fix the corner in any position” on 2026-11-04)*
14. **10.14 — Three fixed lengths fix the angle, tilted too.** `C` On the tilted triangle's own sheet, Lesson 10.12's chart still holds: sides 0.302, 0.953 and 1.000 give ∠SGxT = 90°. Text rewritten 2026-11-05 (`AGENTS.md` Rule 0). *(split from 10.13 on 2026-11-04)*
15. **10.15 — The x line is at 90° to every line on the wall through Gx.** `C` The spin keeps |SGx|, |GxT| and |ST|, so ∠SGxT stays 90°. So the x line is at 90° to every line on the wall through Gx. Text rewritten 2026-11-05 (`AGENTS.md` Rule 0). *(split from 10.5 on 2026-11-03)*
16. **10.16 — N's x part is the foot of the perpendicular on the x line.** `C` The perpendicular from the tip of N to the x line ends at Gx, so its foot reads 0.302 on the ruler: N's x part. Text rewritten 2026-11-05 (`AGENTS.md` Rule 0). *(was 10.4, part 1; split in three on 2026-11-03)*
17. **10.17 — Every order of the legs ends at the tip of N.** `C` Each leg of N's walk changes only its own number (Lesson 10.4), so in any order each number is changed once, by its own leg: all six orders end at the tip of N. *(split from 10.17 “The legs in any order: the feet on y and height” on 2026-11-06: its fresh review counted two ideas)*
18. **10.18 — The feet on the y line and the height line.** `C` Walked first (10.17), the y leg ends at Gy, 0.402 on the y line, and the rest of the walk stays on the wall 0.402 toward the bottom of the picture from S. The line from Gy to the tip of N lies on that wall; the triangle S, Gy, tip has sides 0.402, √0.8377 and 1, which fit only a 90° angle at Gy (Lessons 9.1, 10.12–10.14). So the foot on the y line reads N's y part; the same for height (0.864). *(split from 10.17 on 2026-11-06)*
19. **10.19 — How far an arrow goes along any line.** `C` The same drawing onto L's line gives the point F, and L's ruler reads how far F is from S. That reading is dot(N, L); with L along x, y or up, it is N's x, y or height part. *(was 10.4, part 2)*
20. **10.20 — The minus side of L's ruler.** `C` L's ruler is plus on the side L points to and minus on the other. When the tip of N is on the side of S that L does not point to, F lands on the minus side and the reading is below 0. *(was 10.4, part 3)*
21. **10.21 — Same direction 1, opposite −1.** `C` When L's line runs through the tip of N, the line from the tip is 0 long: F is at the tip of N, 1 from S on the plus side; when L points the opposite way, the tip is on the minus side, −1. As L turns toward N, F slides toward the tip. *(was 10.4, part 4)*
22. **10.22 — A square corner gives 0.** `C` At a square corner, N itself is the line from its tip at a square corner to L's line, so F is at S and the reading is 0. The other way round: a reading of 0 means a square corner. *(was 10.4, part 5)*
23. **10.23 — Never past 1.** `C` S, F and the tip of N form a right triangle whose long side is N, 1 long (Lesson 9.1), so the reading stays between −1 and 1. *(was 10.4, part 6)*
24. **10.24 — A walk's legs each move the meeting point.** `C` Walk to the tip of N along its x, y and height parts; each leg moves the meeting point along L's line, and the moves add up to the reading at F. *(was 10.4, part 7)*
25. **10.25 — Half a turn around any line.** `C` A turn around a line keeps each point's foot G on that line (Lesson 10.6, around the x line), so the point goes round a circle with middle G (10.9); half a turn takes it to the opposite point (10.10): G stays, and P′ is on line PG, on the other side of G, as far from G as P. Exercise: around the height line, (0.30, 0.40, 0.50) → (−0.30, −0.40, 0.50). *(split from “The flip swaps the x line and L's line” on 2026-11-08: its review counted two ideas)*
26. **10.26 — M, the middle of X and the tip of L, is the foot of both.** `C` The indigo sheet holds S, X and the tip of L (Lesson 10.13). M is halfway from X to the tip of L, (0.74, −0.30, 0.32), on Lesson 10.25's gray line. The triangles S, M, X and S, M, tip of L have the same three sides (10.14), and their two corners at M make a straight line, so each is 90°: M is the foot of both. |SM| = √0.74 = 0.860 (10.3), |MX| = √(1 − 0.74) = 0.510 (9.1). Section 2: Q, the middle of X and the tip of N, at a draggable K. Exercise: U's foot on the second gray line is M₂, 0.906 from S. *(split from “The flip swaps the x line and L's line” on 2026-11-08: its reviews counted three ideas)*
27. **10.27 — Half a turn around the gray line: along stays, across changes sign.** `C` Two rulers on the indigo sheet: along, the gray line's ruler from S; across, through each point's own foot, at 90° to the gray line, plus toward the tip of L. X is along 0.860, across −0.510; the tip of L along 0.860, across 0.510. The flip, half a turn around the gray line (10.25), keeps a point's foot, so its along number, and puts it on the other side of the gray line on the sheet (10.5), so its across number changes sign. *(split from “The flip swaps the x line and L's line” on 2026-11-08)*
28. **10.28 — The flip swaps the x line and L's line.** `C` X's foot on the gray line is M (10.26), so the flip moves X to the point on line XM, on the other side of M, as far from M as X (10.25): the tip of L. S stays and a line turns as one piece (10.8): the flip moves the x line onto L's line, and L's line onto the x line. *(split from “A flip keeps lengths and square corners” on 2026-11-08; reduced to the swap on 2026-11-08; was 10.4, part 9)*
29. **10.29 — The flip keeps lengths.** `C` For two points that both move, such as Gx and F₁, the part of GxF₁ along the gray line stays and its part across only changes sign, so |Gx′F₁′| = |GxF₁| (Lesson 9.1); every length stays, and the flip moves mark t to mark t. *(split from “A flip keeps lengths and square corners” on 2026-11-08: its review counted two ideas; was 10.4, part 9)*
30. **10.30 — The flip keeps square corners.** `C` The flip keeps the triangle S, Gx, F₁'s three sides (10.29), and three sides fix the angles (10.14): F₁′ has a square corner, so Gx′F₁′ meets the x line at 90°. *(split from “A flip keeps lengths and square corners” on 2026-11-08)*
31. **10.31 — Walls across L's line.** `C` The flip carries the x line's wall at mark t (Lessons 10.4–10.5: the points with x part t) onto a flat wall across L's line at mark t: every point of it has its meeting point at t; the other way round, a point whose meeting point reads t lies on that wall. *(split from 10.25 “A leg's start does not matter” on 2026-11-08, moved after the flip; the slid copies split off on 2026-11-08)*
32. **10.32 — The walls are copies of one wall slid along L's line.** `C` Slide a point of the wall at mark t by d along L's line: both ends of every arrow get the same numbers added, so arrows keep their parts and lengths (Lesson 9.1, 10.3); the triangle P, mark t, S slides onto Q, mark t + d, mark d with the same three sides, so its corner at the mark stays 90° (10.14): Q's meeting point reads t + d. The walls are copies of one wall slid along L's line. *(split from “Walls across L's line” on 2026-11-08: its review counted two ideas)*
33. **10.33 — A leg's start does not change its move.** `C` Every point lies on the wall at its meeting point (Lesson 10.31), and every wall is one wall slid along L's line (10.32). Slide a leg along its start's line to L's line (on a wall: both readings stay), then in L's direction to S (both readings grow by the same amount): a leg moves the meeting point as much as its copy from S. *(was 10.4, part 8)*
34. **10.34 — A walk of 1 along x moves the meeting point to L's x part.** `C` The foot Q of the tip of L on the x line reads 0.48, L's x part (Lesson 10.16). The flip takes the yellow triangle S, tip of L, Q onto S, X, J: the tip of L onto X, Q onto X's meeting point J, which reads 0.48 (10.28–10.30). Section 2: the same with the height line: a walk of 1 up moves the meeting point to L's height part, 0.64. *(was 10.4, part 10)*
35. **10.35 — Growing from S multiplies every side.** `C` Grow S, X, J from S by k: every point goes k times as far from S, every part of XJ is multiplied by k, so the corner at S and the square corner stay. At k = 0.302 it becomes S, Gx, F₁: the x leg moves the meeting point 0.302 × 0.48 = 0.14496. *(was 10.4, part 11)*
36. **10.36 — A part that points away: the minus case.** `C` L's y part is negative: the flip moves the point to the minus side, so N's y part moves F toward the minus side: 0.402 × (−0.60) = −0.2412. *(was 10.4, part 12)*
37. **10.37 — The dot product formula.** `C` Three products added: N's x part × L's x part + N's y part × L's y part + N's height part × L's height part = 0.45672 at K. *(was 10.4, part 13)*
38. **10.38 — One light direction for every pixel: the dot map.** `C` A very far light gives the same L at every pixel; dot(N, L) at every pixel, shown as gray, with one pixel traced. *(was 10.4, part 14)*
39. **10.39 — Build: the dot product in Metal.** `B` Write `dotOfArrows` and the dot map shader. Joins 10.4–10.38. Takes over the existing `DotExercise` files. *(was 10.4, its Metal exercise)*
40. **10.40 — Why a tilted surface gets less light.** `C` A beam of light 1 wide spreads over a longer piece of a tilted surface, so each point gets beam width ÷ lit length of the light. *(was 10.5, part 1)*
41. **10.41 — Brightness is dot(N, L).** `C` Turned a quarter turn (Lesson 10.3) and shrunk until its long side is 1 (10.35), the beam's triangle becomes the triangle S, F, tip of N, so beam width ÷ lit length = dot(N, L). *(was 10.5, part 2)*
42. **10.42 — Facing away: max(dot, 0).** `C` A number below 0 means the surface faces away from the light; it gets no light, so it becomes 0. *(was 10.5, part 3)*
43. **10.43 — Why N must be 1 long.** `C` A longer arrow would count as more light: rawNormal gives the wrong brightness order, N gives the right one. *(was 10.5, part 4)*
44. **10.44 — Ambient light.** `C` A small floor so the side facing away is not black. *(was 10.5, part 5)*
45. **10.45 — Light color and strength.** `C` Multiply the surface color by brightness, light color and strength, channel by channel. *(was 10.5, part 6)*
46. **10.46 — Build: lit glass, version 0.** `B` One Metal function: height → slope → N → dot(N, L) → diffuse with ambient. Joins 10.40–10.45. *(new build)*
47. **10.47 — The mirror direction and the viewer.** `C` Light bounces off a mirror at the same angle it arrives. We look straight at the screen, so the direction toward the viewer is V = (0, 0, 1) at every pixel, the same simplification as the far light (10.38). A highlight appears where the bounce goes toward V. *(was 10.6, part 1 · was 10.6, part 2)*
48. **10.48 — The halfway arrow.** `C` L and V added make the diagonal of a rhombus; the diagonal cuts it into two triangles with three equal sides, so they match and the diagonal points halfway between L and V. Made 1 long, it is H. *(was 10.6, part 3)*
49. **10.49 — Where N equals H.** `C` N equals H exactly where the mirror bounce of L reaches the viewer: that is where the highlight sits. *(was 10.6, part 4)*
50. **10.50 — How close N is to H.** `C` dot(N, H) is 1 where N equals H and smaller around it. *(was 10.6, part 5)*
51. **10.51 — Sharpening with a power.** `C` A number between 0 and 1 raised to a power shrinks, and the smaller it is, the faster: dot(N, H)ⁿ leaves only a small bright spot. The power n is a chosen dial: 8, 32 and 128 give a wide, a medium and a tight highlight. *(was 10.6, part 6 · was 10.6, part 7)*
52. **10.52 — Adding light on top.** `C` The highlight is added to the color, not mixed, and each channel is clamped at 1. *(was 10.6, part 8)*
53. **10.53 — Build: specular highlight.** `B` Joins 10.47–10.52, on the glass. *(was 10.6, build)*
54. **10.54 — An edge measure: 1 − dot(N, V).** `C` dot(N, V) is N's height part, because V = (0, 0, 1): 1 on the flat top, smaller toward the outline. 1 − dot(N, V) turns it around: 0 on the flat top, growing toward the outline. *(was 10.7, part 1 · was 10.7, part 2)*
55. **10.55 — Glancing light reflects more.** `C` What Fresnel means: a surface seen at a glancing angle reflects more of the light; a picture with numbers, no proof. *(was 10.7, part 3)*
56. **10.56 — A Fresnel-like curve.** `C` (1 − dot(N, V))⁵ stays small, then rises fast near the outline; an approximation (Schlick's), not physics. *(was 10.7, part 4)*
57. **10.57 — A base amount.** `C` F0 + (1 − F0) × curve: a chosen minimum reflection everywhere. *(was 10.7, part 5)*
58. **10.58 — Build: rim on the glass.** `B` The rim together with the specular highlight. Joins 10.54–10.57. *(was 10.7, build)*
59. **10.59 — An edge band inside the outline.** `C` From the distance field and smoothstep (Lessons 7.8 and 9.3 again): 1 at the outline, 0 a chosen width inside. *(was 10.8, part 1)*
60. **10.60 — Darkening the band.** `C` Multiply the color by 1 − strength × band: a darkened edge. *(was 10.8, part 2)*
61. **10.61 — A thin bright edge line.** `C` A narrower band with a higher power next to the dark band; dark beside bright reads as depth. *(was 10.9)*
62. **10.62 — Build: edge contrast.** `B` Joins 10.59–10.61. *(new build)*
63. **10.63 — One thickness dial.** `C` One value from 0 to 1; each property gets a range, and mix picks the value inside it. *(was 10.10)*
64. **10.64 — Thickness changes refraction.** `C` A thicker material pushes the read point further (Lesson 9.11's push length). *(was 10.11, part 1)*
65. **10.65 — Thickness changes diffusion.** `C` A thicker material blurs more. *(was 10.11, part 2)*
66. **10.66 — Thickness changes shadow.** `C` Radius, opacity and offset of the shadow grow with thickness. *(was 10.12)*
67. **10.67 — Build: thickness on the glass.** `B` One slider drives refraction, diffusion and shadow. Joins 10.63–10.66. *(new build)*
68. **10.68 — Build: material shader v1, part 1 — optics.** `B` Mask, refraction and tint in one shader. *(was 10.13, part 1)*
69. **10.69 — Build: material shader v1, part 2 — light.** `B` Add diffuse, specular, rim and edges. *(was 10.13, part 2)*
70. **10.70 — Build: material shader v1, part 3 — thickness.** `B` The thickness dial drives everything; the chapter checkpoint. *(was 10.13, part 3)*

**Checkpoint:** Move a virtual light and explain why the highlight travels around the silhouette.

---

### Chapter 11 — Build an adaptive Liquid Glass engine

**Purpose:** Make the material respond to its environment, size, user preference, and accessibility needs.

1. **11.1 — Brightness behind one point.** `C` The luminance of the captured background at one pixel (Lesson 3.6, now on the background picture). *(was 11.1, part 1)*
2. **11.2 — Average brightness of a region.** `C` Add many samples and divide by how many: the average is steadier than any one sample. *(was 11.1, part 2)*
3. **11.3 — Fewer samples.** `C` Shrink the region to a small picture (Lesson 7.4) and average that: less work, nearly the same number. *(was 11.1, part 3)*
4. **11.4 — Reading the background on iOS.** `E` A small snapshot of the region, averaged, at a limited rate; what it costs and what it misses. *(was 11.1, part 4)*
5. **11.5 — Build: brightness behind a moving control.** `B` Joins 11.1–11.4. *(new build)*
6. **11.6 — Spread.** `C` The average distance of the samples from their average brightness. It cannot tell text from a region that is half black and half white: both spread widely. *(new, busyness, needed by 11.23–11.24)*
7. **11.7 — Detail: how much neighbours differ.** `C` The average difference between neighbouring samples is large only where the brightness changes often, as in text: this is the busyness number. *(new, busyness)*
8. **11.8 — Build: busyness meter.** `B` Spread and detail side by side over text, photos and a half-black, half-white region. Joins 11.6–11.7. *(new build)*
9. **11.9 — Regular material.** `C` The versatile default: its values and why they protect legibility. *(was 11.2)*
10. **11.10 — Clear material.** `C` Less blur and tint: more of the background shows, and text needs help. *(was 11.3, part 1)*
11. **11.11 — The dimming layer.** `C` A dark layer under the content; how much to dim follows the region's brightness. *(was 11.3, part 2)*
12. **11.12 — Build: regular and clear material.** `B` Joins 11.9–11.11. *(new build)*
13. **11.13 — Light or dark glyph.** `C` Compare the contrast of a light and a dark glyph against the measured background (Lesson 3.7) and take the better one. *(was 11.4, part 1)*
14. **11.14 — One threshold.** `C` The two contrasts of Lesson 3.7 are equal at one brightness, about 0.179: below it the light glyph wins, above it the dark one. *(was 11.4, part 2)*
15. **11.15 — No flicker: two thresholds.** `C` Hysteresis: flip to dark above one value, back to light only below a lower one. *(was 11.4, part 3)*
16. **11.16 — Change over a short time.** `C` Move toward the new choice over a few frames instead of jumping. *(new, smoothing)*
17. **11.17 — One decision for a large surface.** `C` A large menu decides once from its whole region, so it does not flip in patches. *(was 11.5)*
18. **11.18 — Build: foreground switching.** `B` A small button and a large menu over moving content. Joins 11.13–11.17. *(new build)*
19. **11.19 — Average color of a region.** `C` Average each channel, not only the brightness. *(was 11.6, part 1)*
20. **11.20 — Adaptive tint.** `C` Mix a little of the average color into the tint, capped, so the control keeps its identity. *(was 11.6, part 2)*
21. **11.21 — User tint slider.** `C` One value from very clear to strongly tinted, mapped to the tint amounts. *(was 11.7)*
22. **11.22 — Build: adaptive tint with the slider.** `B` Joins 11.19–11.21. *(new build)*
23. **11.23 — Busyness changes the shadow.** `C` More separation over busy content such as text, less over calm areas. *(was 11.8)*
24. **11.24 — Busyness changes diffusion.** `C` More blur when the background is busy. *(was 11.9)*
25. **11.25 — Build: the material responds to its background.** `B` Joins 11.23–11.24, with the busyness meter. *(new build)*
26. **11.26 — Reduced transparency.** `E` Replace the effect with a more opaque, readable material. *(was 11.10)*
27. **11.27 — Increased contrast.** `E` Strengthen edges and foreground separation. *(was 11.11)*
28. **11.28 — Reduced motion.** `E` Replace morphing and overshoot with calmer transitions. *(was 11.12)*
29. **11.29 — `GlassStyle` and `GlassEnvironment`.** `E` Put the decisions behind a reusable model. *(was 11.13)*
30. **11.30 — Debug controls.** `E` Display all measured values and chosen adaptations. *(was 11.14)*

**Checkpoint:** Drag one control across several backgrounds and show that its legibility changes without abrupt visual noise.

---

### Chapter 12 — Liquid geometry, merging, and 3D depth

**Purpose:** Make the material behave like a flexible object during interaction and transitions.

1. **12.1 — Interpolate a rectangle.** `C` Lerp (Lesson 5.4) each of the four numbers of a rectangle with one progress. *(was 12.1)*
2. **12.2 — Interpolate the corner radius.** `C` From a circle (radius half the size) to a sheet; the radius never exceeds half the shorter side. *(was 12.2)*
3. **12.3 — Build: circle to sheet.** `B` Joins 12.1–12.2, on a glass control. *(new build)*
4. **12.4 — What scaling a finished picture does.** `C` A non-uniform scale stretches circles, text and highlights, with numbers. *(was 12.3)*
5. **12.5 — Redraw the shape every frame.** `C` Compute the current shape from the interpolated numbers, so edges stay sharp and round. *(was 12.4)*
6. **12.6 — Build: a morph without stretching.** `B` Joins 12.4–12.5. *(new build)*
7. **12.7 — Mixing two distance fields.** `C` mix(sdA, sdB, t): its 0 line moves from one outline to the other. *(was 12.5, part 1)*
8. **12.8 — Why the mix still works as a mask.** `C` The mix is not an exact distance, but its sign and its 0 line are right, which is all a soft mask needs. *(was 12.5, part 2)*
9. **12.9 — Build: a distance-field morph.** `B` Circle to rounded rectangle. Joins 12.7–12.8. *(new build)*
10. **12.10 — Union with min: a sharp crease.** `C` min of two distances joins two shapes with a sharp corner where they meet (Lesson 9.6 again). *(was 12.6, part 1)*
11. **12.11 — Which shape is nearer: b − a.** `C` With a and b the distances to shapes A and B, b − a is plus where A is nearer, minus where B is nearer, and 0 halfway between them. *(was 12.6, part 2)*
12. **12.12 — A weight from 0 to 1: h.** `C` Divide b − a by k, then × 0.5 + 0.5 (the dot map's mapping, 10.38) and clamp (Lesson 8.11): h is 1 where A is clearly nearer, 0 where B is, and in between only inside a band where the two distances differ by less than k. *(was 12.6, part 3)*
13. **12.13 — Mixing the two distances with h.** `C` Inside the band, mix takes a little of each shape. *(was 12.6, part 4)*
14. **12.14 — A hump: h × (1 − h).** `C` h × (1 − h) is 0 where one shape wins (h = 0 or 1) and largest, 0.25, where both are equally near (h = 0.5). *(was 12.6, part 5)*
15. **12.15 — Filling the gap: the bridge.** `C` Subtracting k × h × (1 − h) lowers the distance between the shapes, so the outline moves out into the gap: a bridge instead of a crease. *(was 12.6, part 6)*
16. **12.16 — The bridge width.** `C` k decides when the bridge appears and when it breaks. *(was 12.7)*
17. **12.17 — Build: two glass blobs merge and separate.** `B` Joins 12.10–12.16. *(was 12.7, build)*
18. **12.18 — Scaling a distance-field shape.** `C` To draw a shape twice as large, ask the original shape about the point halved, then double the distance it returns, so the distance stays in screen units (Lesson 9.4's local coordinates, scaled). *(new, scaling a distance field, needed by 12.19)*
19. **12.19 — Press squish on a distance field.** `C` Lesson 5.10's press deformation inside the distance function: a different scale across and along, around the press point. The distance is no longer exact, but the mask still works (12.8). *(was 12.8)*
20. **12.20 — Velocity as an arrow.** `C` Lesson 5.7's velocity in two directions: an arrow. *(was 12.9, part 1)*
21. **12.21 — A point's part along a direction and across it.** `C` The dot product with the direction made 1 long gives the part along it (10.19); what is left is the part across. *(was 12.9, part 2)*
22. **12.22 — Stretch along a direction.** `C` Scale only the part along the velocity, then add the part across back. *(was 12.9, part 3)*
23. **12.23 — Build: squish and stretch.** `B` Joins 12.18–12.22. *(was 12.9, build)*
24. **12.24 — Angles: degrees and radians.** `C` A turn as an angle; radians as the length of arc on a circle of radius 1. *(new, rotation, needed by 12.32)*
25. **12.25 — cos and sin.** `C` The x part and the y part of a 1-long arrow at an angle. *(new, rotation)*
26. **12.26 — Turning the two walks.** `C` A walk of 1 along x, turned by an angle, becomes (cos, sin); the walk along y is its quarter turn (Lesson 10.3), so it becomes (−sin, cos). *(new, rotation)*
27. **12.27 — Turning any point.** `C` A point is a walk along x plus a walk along y; turn both and add them. *(new, rotation)*
28. **12.28 — Build: turning a point in Metal.** `B` A function that turns a point around the glass's center, used to turn the background sample (Lesson 9.8). Joins 12.24–12.27. *(new build)*
29. **12.29 — The picture plane.** `C` A 3D point is drawn where the line from one viewpoint to it crosses the screen; the viewpoint is a point at distance d from the screen, drawn as a point and a plane. *(was 12.10, part 1)*
30. **12.30 — Perspective: divide by depth.** `C` The two triangles from the viewpoint have the same shape (10.35), so a point at depth z behind the screen is drawn at x × d ÷ (d + z): farther points look smaller. *(was 12.10, part 2)*
31. **12.31 — Camera distance.** `C` A small distance distorts strongly, a large one is nearly flat. *(was 12.11, part 1)*
32. **12.32 — Turning around an axis in 3D.** `C` A 3D turn is a turn in one plane that leaves the axis alone. *(was 12.11, part 2)*
33. **12.33 — Build: tilt a glass layer in 3D.** `B` SwiftUI's `rotation3DEffect` with perspective, checked against the math. Joins 12.29–12.32. *(was 12.11, build)*
34. **12.34 — Parallax.** `C` Layers at different depths move by different amounts for the same tilt. *(was 12.12)*
35. **12.35 — Thickness from progress and size.** `C` Drive the thickness dial (10.63) from the transition's progress and the current size. *(was 12.13)*
36. **12.36 — Build: a growing panel with parallax and thickening.** `B` Joins 12.34–12.35. *(new build)*
37. **12.37 — Moving the light.** `C` L turns around the shape over time (cos and sin from 12.25). *(was 12.14, part 1)*
38. **12.38 — The highlight follows the silhouette.** `C` Where N meets the moving L, the highlight moves along the outline. *(was 12.14, part 2)*
39. **12.39 — Glow falls off with distance.** `C` smoothstep of the distance to the touch point. *(was 12.15, part 1)*
40. **12.40 — Several controls share one glow.** `C` Each control reads its own distance to the touch. *(was 12.15, part 2)*
41. **12.41 — Build: touch light on a group of controls.** `B` Joins 12.37–12.40. *(new build)*
42. **12.42 — The anchor point.** `C` Keep one point of the growing shape fixed to the source control (Lesson 4.10's transform origin again). *(was 12.16, part 1)*
43. **12.43 — Build: source-anchored transition.** `B` Joins 12.42 with 12.3; used again in 14.4 and 15.9. *(was 12.16, build)*

**Checkpoint:** Morph a circular icon button into a rounded panel without stretching its text or icon.

---

### Chapter 13 — Component gallery A: controls and navigation

**Purpose:** Apply the engine to common interactive components.

1. **13.1 — Circular icon button.** `B` Rest, press, release, tint, and glyph contrast. *(was 13.1)*
2. **13.2 — Capsule text button.** `B` Concentric content placement and press deformation. *(was 13.2)*
3. **13.3 — Prominent tinted action.** `B` Selective color without tinting every control. *(was 13.3)*
4. **13.4 — Toolbar group.** `B` Related actions on one floating glass plane. *(was 13.4)*
5. **13.5 — Cluster merge and separation.** `B` Nearby controls connect during interaction (12.10–12.17). *(was 13.5)*
6. **13.6 — Floating tab bar.** `B` Navigation above scrolling content. *(was 13.6)*
7. **13.7 — The nearest slot.** `C` Which tab a finger position belongs to: divide by the slot width and round; on release the lens springs there (Lesson 5.8). *(was 13.7, part 1)*
8. **13.8 — Build: selection lens in the tab bar.** `B` A lens that magnifies around a center the finger moves (Lessons 9.9 and 9.11), stretches while it moves (12.22) and settles in the nearest slot. Joins 13.6–13.7. *(was 13.7, build)*
9. **13.9 — Segmented control.** `B` The selection lens in a compact control. *(was 13.8)*
10. **13.10 — Value from position.** `C` The reverse of lerp: which value a thumb position means. *(was 13.9, part 1)*
11. **13.11 — Slider.** `B` Track, glass thumb, value mapping and drag response. *(was 13.9, build)*
12. **13.12 — Switch.** `B` Mirrored capsule geometry and a moving glass thumb. *(was 13.10)*
13. **13.13 — Focus, disabled, and pressed states.** `B` Clear state feedback without clutter. *(was 13.11)*
14. **13.14 — Component gallery A.** `B` Every control over the same test content. *(was 13.12)*

**Checkpoint:** All components share the same material engine but preserve their own geometry and interaction rules.

---

### Chapter 14 — Component gallery B: menus, sheets, search, and system-like surfaces

**Purpose:** Cover the other major Liquid Glass families seen across iOS.

1. **14.1 — Search and address field.** `B` Leading icon, placeholder, clear action, and glass placement. *(was 14.1)*
2. **14.2 — Compact-to-expanded search.** `B` Animate from a toolbar control to a focused field. *(was 14.2)*
3. **14.3 — Anchored reveal.** `E` One reusable reveal for menus, popovers and action sheets: the anchor point of Lesson 12.42, converted into the destination's coordinates (Lesson 2.7), behind one API. *(was 14.3, part 1)*
4. **14.4 — Overflow menu.** `B` Reveal a menu from a small source control; Chapter 15 builds the full Safari version. *(was 14.3, build)*
5. **14.5 — Adaptive placement.** `C` Keep a menu or popover on screen: choose a side, then clamp. *(was 14.5, part 1)*
6. **14.6 — Context menu.** `B` Content anchored near the touch location and kept on screen (14.5). *(was 14.4)*
7. **14.7 — Popover.** `B` Source relationship, arrow or connection, and adaptive placement. *(was 14.5, build)*
8. **14.8 — Anchored action sheet.** `B` Grow from the action that caused it. *(was 14.6)*
9. **14.9 — Rounded presentation sheet.** `B` Dimming, concentric corners, and depth response. *(was 14.7)*
10. **14.10 — Sidebar.** `B` Content extends behind an inset glass navigation surface. *(was 14.8)*
11. **14.11 — A fade toward the edge.** `C` A mask that grows where moving content meets floating controls. *(was 14.9, part 1)*
12. **14.12 — A blur that changes with position.** `C` The blur radius follows the same ramp as the fade. *(was 14.9, part 2)*
13. **14.13 — Build: scroll-edge effect.** `B` On a toolbar over scrolling content. Joins 14.11–14.12. *(was 14.9, build)*
14. **14.14 — Media controls.** `B` Play, seek, and accessory controls on one glass plane. *(was 14.10)*
15. **14.15 — Control Center-style tile.** `B` A larger stateful toggle with a selected material. *(was 14.11)*
16. **14.16 — Notification or banner.** `B` Material, text legibility, and short presentation motion. *(was 14.12)*
17. **14.17 — Badge, toast, and compact status capsule.** `B` Small transient surfaces. *(was 14.13)*
18. **14.18 — Layered icon experiment.** `B` Parallax, refraction, tint, and specular response on icon layers. *(was 14.14)*
19. **14.19 — Integrated system-style gallery.** `B` All surfaces over text, photos, moving content, dark and light content. *(was 14.15)*
20. **14.20 — Measure CPU, GPU, and memory separately.** `E` Do not guess which part is slow. Moved before the capstone, which uses it in 15.27. *(was 16.10)*
21. **14.21 — Frame budgets at 60 Hz and 120 Hz.** `E` Benchmark against the budget of the display mode. *(was 16.11)*

**Checkpoint:** Recreate the major visual families without copying one fixed effect onto every element.

---

### Chapter 15 — Capstone: Safari-style three-dot menu expansion

**Purpose:** Rebuild the compelling source-anchored menu transition in small, understandable stages.

1. **15.1 — Choose and record the exact target.** `E` Save the OS version, app version, orientation, and a reference recording. *(was 15.1)*
2. **15.2 — Inspect at slow speed.** `E` Observe without guessing what happens between the first and last frame. *(was 15.2)*
3. **15.3 — Create a frame storyboard.** `E` Mark rest, contact, compression, early expansion, mid expansion, content reveal, settle, and close. *(was 15.3)*
4. **15.4 — Separate facts from hypotheses.** `E` Label what is visible and what is only an implementation guess. *(was 15.4)*
5. **15.5 — Design the scene graph.** `E` Separate background, glass material, source icon, menu content, dimming, and debug overlays. *(was 15.5)*
6. **15.6 — Measure source and destination bounds.** `B` Convert the three-dot button position into scene coordinates. *(was 15.6)*
7. **15.7 — Build the resting source bubble.** `B` Match size, radius, tint, edge, and shadow. *(was 15.7)*
8. **15.8 — Add press flex.** `B` Compress near the touch point and energize the material with a local glow. *(was 15.8)*
9. **15.9 — Start an anchored transform.** `B` Keep one visual point attached to the source while the shape begins to grow. *(was 15.9)*
10. **15.10 — Morph bubble to rounded sheet.** `B` Recompute bounds and corner geometry on every frame. *(was 15.10)*
11. **15.11 — Prevent stretched material artifacts.** `B` Do not scale a final glass bitmap non-uniformly. *(was 15.11)*
12. **15.12 — Keep menu content on a separate layer.** `B` Avoid refraction and geometric stretching of labels and icons. *(was 15.12)*
13. **15.13 — Reveal content progressively.** `B` Fade, clip, and slightly move menu entries only after enough room exists. *(was 15.13)*
14. **15.14 — Tune a thickness curve.** `B` Make the material appear more substantial as it becomes larger. *(was 15.14)*
15. **15.15 — Tune refraction over time.** `B` Increase lensing during the growth phase, then settle it deliberately. *(was 15.15)*
16. **15.16 — Tune diffusion and blur over time.** `B` Improve readability as more content appears. *(was 15.16)*
17. **15.17 — Add dark edge and bright specular highlight.** `B` Reinforce the refined material depth. *(was 15.17)*
18. **15.18 — Add dynamic shadow.** `B` Deepen, spread, and adapt it to the background. *(was 15.18)*
19. **15.19 — Add 3D tilt and perspective.** `B` Create depth without making the final menu look permanently rotated. *(was 15.19)*
20. **15.20 — Add boundary lens distortion.** `B` Bend background features near the moving silhouette. *(was 15.20)*
21. **15.21 — Add traveling interaction light.** `B` Let the initial touch energy move through the growing material. *(was 15.21)*
22. **15.22 — Add neighboring glass response if present.** `B` Make nearby controls react softly rather than independently flashing. *(was 15.22)*
23. **15.23 — Reverse the transition.** `B` Return content, optics, shape, and shadow to the source in the correct order. *(was 15.23)*
24. **15.24 — Handle rapid taps.** `B` Prevent jumps when open and close commands overlap. *(was 15.24)*
25. **15.25 — Handle interrupted and dragged states.** `B` Continue from the current visual state rather than restarting. *(was 15.25)*
26. **15.26 — Build reduced-motion and reduced-transparency versions.** `B` Preserve source relationship and readability. *(was 15.26)*
27. **15.27 — Profile on the iPhone 16 Pro.** `E` Inspect frame time, shader cost, render-target size, view updates, and allocations, with 14.20–14.21. *(was 15.27)*
28. **15.28 — Compare at normal and slow speed.** `E` Judge both the final appearance and the intermediate frames. *(was 15.28)*
29. **15.29 — Final capstone review.** `E` Explain every material and motion layer from first principles. *(was 15.29)*

**Checkpoint:** The menu must look convincing during the middle of the transition, not only at rest and at the final state.

---

### Chapter 16 — Expert engineering, testing, and independent work

**Purpose:** Turn experiments into a dependable graphics system.

1. **16.1 — Define a reusable API.** `E` Separate material, shape, interaction, environment, and transition parameters. *(was 16.1)*
2. **16.2 — `GlassContainer`.** `E` Own background capture and shared context. *(was 16.2)*
3. **16.3 — `GlassEffect`.** `E` Apply a material to a shape without owning app-specific content. *(was 16.3)*
4. **16.4 — `GlassTransition`.** `E` Describe source, destination, progress, interruption, and content timing. *(was 16.4)*
5. **16.5 — Use meaningful units.** `E` Distinguish points, pixels, UV, angles, and time. *(was 16.5)*
6. **16.6 — Cache shaders and offscreen snapshots.** `E` Avoid construction and allocation every frame. *(was 16.6)*
7. **16.7 — Update uniforms efficiently.** `E` Change visual values without rebuilding unrelated UI. *(was 16.7)*
8. **16.8 — Control render-target size.** `E` Crop, downsample, and reuse offscreen buffers. *(was 16.8)*
9. **16.9 — Adaptive quality.** `E` Reduce expensive details under load without abruptly changing the design. *(was 16.9)*
10. **16.10 — Screenshot and golden tests.** `E` Verify stable material states. *(was 16.12)*
11. **16.11 — Motion tests.** `E` Sample important progress values instead of checking only start and end. *(was 16.13)*
12. **16.12 — Fallbacks when the custom glass cannot run.** `E` Frosted, tinted, or opaque alternatives within the iOS 17 minimum (the old title said iOS 16, below the course's minimum). *(was 16.14)*
13. **16.13 — Build the gallery app and documentation.** `E` Make every parameter and tradeoff inspectable. *(was 16.15)*
14. **16.14 — Independent capstone.** `E` Choose an iOS Liquid Glass behavior not taught directly and reproduce it. *(was 16.16)*
15. **16.15 — Expert explanation.** `E` Teach the final system to another beginner using simple language. *(was 16.17)*

**Final standard:** You can observe an unfamiliar glass effect, divide it into geometry, sampling, light, compositing, motion, accessibility, and performance problems, then build and justify an iOS implementation.

---

## 3. Frozen locks (do not rebuild)

Do not reopen the earlier lessons' blur, tint, saturation, inset-stroke math, band blur, shadow room, or the 7.10 store formula unless a later lesson explicitly redefines them. Frost formulas stay frozen.

**Chapter 7 frost constants**

- Blur `18` pt / `18` CSS px.
- Tint amount `0.25`.
- Saturation `0.40`.
- 7.10 store: one signed remainder offset added to RGB, then `round(clamp(sum) × 255)`. Default amount `0.02`.

**Chapter 8 teaching chain (8.1–8.12)**

```text
8.1  colorAt(column, row) once per pixel; CPU loop is not a .metal file
8.2  .metal file → ShaderLibrary → ShaderRect (colorEffect)
8.3  8-bit / 255 → teaching half4 0..1 → return is the store
     orange half4(0.88, 0.48, 0.18, 1.0) from (224, 122, 46)
     navy   half4(0.10, 0.25, 0.40, 1.0) from (26, 64, 102)
8.4  fragCoord.x pixels from left; if (x < 80.0) orange else navy; y unread
8.5  pass resolution as a Shader argument; splitX = resolution.x / 2.0
8.6  uv = fragCoord / resolution; last pixel is not exactly 1; not a texture sample
8.7  scalar / vector / member; half 16-bit; float 32-bit; no GPU timing claim
8.8  p = uv - 0.5 from the middle; × 2 puts edges near ±1; 1 = one half-width
8.9  splitU and leftColor as Shader arguments; a missing argument still compiles and SwiftUI refuses the draw; pass 0 to show a zero slot
8.10 trips = elapsedSeconds / 4.0; fract(uv.x - time) as red; .metal file is not rebuilt
8.11 clamp → mix(a,b,t)=a+(b−a)×t → smoothstep bends linearFraction
     mix(navy, orange, smoothstep(0.40, 0.60, uv.x))
     teaching x=180, uv.x=0.45, stored red 0.221875
8.12 Xcode Metal compile error
     message is the Metal compiler log
     shrink to smallest failing program; teaching fault is gl_FragCoord
```

**Chapter 9 teaching chain (9.1–9.6)**

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
```

**Lessons 9.7–9.9 teaching contracts**

```text
9.7  uniform shader background; sampled = background.eval(fragCoord)
     left half stores sampled; teaching uv.x = 0.15 is navy
9.8  readCoord = fragCoord − (offsetU × width, 0); default offsetU = 0.10
     teaching write uv.x = 0.15 reads 0.05 and stores orange
     eval does not wrap a negative read x; stripe fract still returns a color
```

**9.9 teaching contract**

```text
9.9  no if; store is four big squares (inner 2×2 copied, not averaged)
     TL orange, TR navy, BL navy, BR orange
     many writes share one input cell; half of C→(1,1) is (0.75, 0.75)
```

**Lesson 9.10 — teaching contract**

```text
9.10 vertical side tilts: H (0.75, 0.50) walks to (0.85, 0.50); Q (0.75, 0.25) splits the same walk
     they no longer share an x; four corners → trapezoid; shader ask is the inverse
     default dispLen = 0.10
```

**Lesson 9.11 — teaching contract**

```text
9.11 sd = length(p) − radius; falloff = 1 − smoothstep(−band, band, sd)
     disp = dir × dispLen × falloff; readUv = uv − disp
     teaching W (0.65, 0.30): sd = 0, falloff = 0.50, disp = (0.03, −0.04), read (0.62, 0.34)
     falloff is a length scale, not a 9.3 color mix; miss line x = 0.90 stays straight
```

**Policy**

- Count only explicit learner confirmation, in chat. Project files do not store which lessons are complete.
- Current HTML/Swift paths live in `CURRENT_STATE.md`. Explorer names for older lessons live in those lesson files and the chapter screen in `LiquidGlassLab-iOS`.
- 5.8/5.9 stay consolidated: 5.8 is the teaching page; 5.9 is the archive redirect.
