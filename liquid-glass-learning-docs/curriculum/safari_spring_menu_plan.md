# The Safari spring glass menu — plan for the rest of the course

- **Written:** 2026-11-19
- **Status:** a proposal. It changes no other file. `curriculum/liquid_glass_ios_curriculum.md` still gives the order that “generate the next lesson” follows (5.1, item 1).
- **Starts after:** Lesson 10.44, the boundary named in the request for this plan.
- **Goal:** understand, and rebuild in SwiftUI + Metal, the menu that springs out of the “⋯” button of Safari on iOS 26. That means: name every visual layer, explain its maths with numbers, say why it is there and how to tune it, and run it smoothly on the iPhone 16 Pro.
- **Size:** 22 lessons from 10.45 to the end: Lesson 10.45, whose page exists, and 21 new ones. The curriculum lists 179 from 10.45 on.

Sections:

1. The effect, broken down
2. Coverage
3. What to cut
4. The new plan
5. Open questions

**Words used in this file.** The lab's code names are in brackets; a lesson uses them only in code.

- **sd:** the signed distance from a pixel to the outline, in pt: minus inside, 0 on the outline, plus outside.
- **rim:** the curved edge of the glass: seen from the side, a quarter circle. **Rim width** (`bevel`): how far the rim reaches in from the outline.
- **push:** how far from itself a pixel reads the picture. **Push at the outline** (`edgePush`): the largest push.
- **glass picture:** the flat picture the glass reads: the blurred page, the tint over it, the menu's rows on top.
- **slow spring** (`travel`), **quick spring** (`lead`), **in-flight amount** (`unsettled`): Chapter 13 of this plan.
- **side lesson:** `course/shortcut/lesson-shortcut-safari-menu.html`, “Shortcut — Safari's ‘…’ button becomes the menu”, which is not counted.

---

## 1. The effect, broken down

### 1.1 What this breakdown rests on

- **Seen by me: 10 frames of the opening.**
  - They are stored inside the side lesson's page: your recording, dark mode, a dark start page, iPhone 16 Pro.
  - Scale: 643 × 394 px for 402 × 246 pt (the screen from y = 624 pt to y = 870 pt), so 1.6 px per pt, JPEG.
  - The frames are 0.039 s apart; the last one comes 0.078 s after the one before it.
  - A length that I measure on them is good to about ±4 pt. A brightness is good to about ±3 of 255.
  - Time t: seconds after the finger touches the button (the recording's time − 1.04 s).
  - The middles of the glass are the ones measured for the side lesson and stored in its page (`SAFARI_CENTERS`).
- **Not seen by me: the closing.** I have only the notes in `CURRENT_STATE.md` on your recording `1cbadc43…`.
- **Not in the repository at all:**
  - light mode;
  - a bright or busy page behind the glass;
  - the shadow;
  - a tap in mid-flight;
  - a finger held down.
- **Apple's public material:** WWDC 2025 sessions 219 and 323, the Human Interface Guidelines page “Materials”, and the SwiftUI documentation. Links are at the end. Apple's code is private.
- **Two marks:**
  - **[seen]**: visible in those frames, or measured on them;
  - **[guess]**: a look that I could not check, or a way it may be built.

### 1.2 The opening, moment by moment [seen]

Coordinates: pt on the 402 × 874 pt screen, from its top-left corner, x to the right, y toward the bottom.

| t (s) | What the frame shows | Glass, width × height (pt) | Middle of the glass (pt) |
|---|---|---|---|
| 0.017 | finger down; the button is lit gray | circle, radius 26 | (342.3, 809.6) |
| 0.056 | bigger and brighter, with a bright line on its outline | circle, radius 29 | (342.3, 809.6) |
| 0.096 | a plain white disc; the three dots are gone | circle, radius 25 | (342.3, 809.6) |
| 0.135 | the glass has left the button and bulges toward it; a white patch where the button was | 76 × 77 | (317.1, 780.6) |
| 0.174 | blurred rows inside; the page under the glass is hidden | 138 × 124 | (290.3, 743.2) |
| 0.213 | nearly round; “New Tab” folded over the top edge | 209 × 162 | (260.2, 720.0) |
| 0.252 | rows almost sharp; text bent all along the outline | 225 × 167 | (252.9, 718.9) |
| 0.291 | a rounded rectangle; only “+” and “B”, at the outline, are still bent | 255 × 180 | (241.8, 727.2) |
| 0.331 | sharp rows, a thin line on the outline | 264 × 189 | (237.9, 737.6) |
| 0.409 | at rest, but for 2 pt | 261 × 188 | (239.0, 740.4) |
| rest | the menu | 261 × 188, corner radius 36 | (238.8, 742.6) |

- The glass leaves the button 0.10 s after the finger touches it.
- At 120 Hz:
  - the press lasts 12 frames (0.10 s);
  - the flight lasts about 37 frames (from 0.10 s to 0.41 s);
  - bent text is visible from 0.174 s to 0.291 s: at least 14 frames;
  - [guess] the bulge toward the button lasts about 8 frames: in the lab's model the circle on the button is gone at 0.165 s.

### 1.3 The layers

Each layer lists what is seen, what is a guess, what Apple says in public (where it says something), and which pass draws it (1.4).

**1 · Shape**
- [seen] The button is a circle: radius 25 pt, middle (342.3, 809.6).
- [seen] The menu is a rounded rectangle: 261 × 188 pt, corner radius about 36 pt. Its right and bottom edges lie about 2 pt outside the button's box, so the open menu covers the button.
- [guess] The corners are arcs of a circle. Apple may use a rounder corner curve; 1.6 px per pt cannot show the difference.
- Drawn by: the glass pass. It computes sd at every pixel and makes the edge 1 px soft.

**2 · Morph**
- [seen] No picture is stretched: “New Private Tab” is 121 pt wide at 0.213 s, where it is blurred, and 126 pt at rest.
- [seen] At 0.135 s the outline is neither a circle nor a rounded rectangle: it bulges toward the button. At 0.174 s its lower right still points toward the button.
- [seen, weak] At 0.213 s the glass is 209 × 162 pt. A straight mix of the button's size and the menu's size gives 154 pt of height at that width. So the glass is rounder in flight, by about 8 pt (my measuring error is ±4 pt).
- [guess] One rounded rectangle whose middle, half size and corner radius move between the button's and the menu's. A circle that stays on the button for about 0.06 s is joined to it softly.
- Apple: the documentation of `GlassEffectContainer` says that the glass shapes of one container are drawn together, and that the outlines of two shapes blend when they come near each other.
- Drawn by: the glass pass (two sd values, joined).

**3 · Spring motion**
- [seen] The middle passes its final height early: y = 743.2 at 0.174 s, against 742.6 at rest.
- [seen] Then it rises above it: y = 718.9 at 0.252 s, which is 23.7 pt above its place at rest (the side lesson's measurement; my own measurement on that frame gives 20 pt). It is back within 2.2 pt at 0.409 s.
- [seen] The bottom edge is at y = 802 at 0.213 s: 35 pt above where it ends (836.6). The glass is not pinned to the button.
- [seen] Sideways there is no overshoot of more than 1 pt. The size grows without a visible overshoot (3 pt at most, inside my measuring error).
- [not seen by me] Closing: the notes say that the top of the glass first rises about 22 pt, then the glass shrinks onto the button.
- [guess] Which springs Apple uses. The lab's model has two springs (slow: stiffness 441, damping 35.7; quick: 600, 34.3). It lifts the glass by 36 pt × the in-flight amount. Its middles are within 8 pt of the seven measured ones.
- Drawn by: no pass. The springs run on the CPU: 8 steps of 1/960 s per frame at 120 Hz.

**4 · Refraction**
- [seen] Rows and icons near the outline are bent while the glass flies.
- [seen] At 0.213 s the top edge shows the bottom of “New Tab” upside down (the T has no crossbar).
- [seen] At 0.291 s only a band of 10 to 15 pt at the outline still bends (“+” and “B”). At rest the rows are not bent.
- [guess] The rim's side view is a quarter circle. Its numbers are fitted to the recording: rim width 14 pt and push at the outline 6 pt at rest; 28 pt and 24 pt in flight.
- [guess] Whether the page behind is bent the same way: the dark page shows nothing. Whether colors split at the rim: not visible.
- Apple (session 219): glass does not fade in or out; the amount of bending is turned up and down instead. A glass that has grown into a menu is drawn as thicker glass with a stronger lens.
- Drawn by: the glass pass. Per pixel: 4 more sd values for the outward direction, and 1 read of the glass picture.

**5 · Blur**
- [seen] Under the resting menu the “Edit” pill is a soft bump: brightness 30 of 255 on a page of 25. It has no sharp edge and no readable letters. Without the glass the pill is 39 and its letters 255.
- [seen] The rows are blurred at 0.174 s and 0.213 s, and sharp from about 0.29 s.
- [guess] The blur radius. The course's 18 pt is a start value.
- Apple (the guidelines page “Materials”): the regular kind of Liquid Glass blurs what is behind it and changes its luminosity, so that text stays readable.
- Drawn by: the page under the glass is recorded and blurred once per opening, at 1 px per pt. The rows have their own small layer, whose blur changes for about 0.2 s.

**6 · Tint**
- [seen] At rest the inside of the glass is as dark as the page: 25 of 255.
- [seen] In flight the inside starts lighter and darkens: 41, 33, 28, 27, 25 at 0.135, 0.174, 0.213, 0.252, 0.291 s.
- [seen] The page keeps about a third of its contrast under the glass: (30 − 25) ÷ (39 − 25) = 0.36.
- [guess] The tint color and its amount; every value in light mode.
- Apple (session 219): large elements such as menus keep their light or dark look whatever is behind them. Only small elements switch.
- Drawn by: one fill in the glass picture.

**7 · Highlight and edges**
- [seen] A line about 1 pt wide lies on the outline, at rest and in flight.
- [seen, weak] The line is brighter at two opposite corners. Its peak, of 255: top-left 57, bottom-right 51, top-right 43, bottom-left 39. The page is 25. This is one JPEG frame.
- [seen] No highlight spot is visible, and the body is not shaded: the inside is one even 25.
- [guess] The direction of the light (toward the top left), and why the far corner is bright too.
- Apple (session 219): a highlights layer. Lights in a virtual scene make highlights that depend on the shape.
- Drawn by: the glass pass, with no extra read.

**8 · Shadow**
- [seen] Nothing: a dark menu on a dark page.
- Apple (session 219): larger glass casts a deeper shadow. The shadow is made more opaque over text and less opaque over a plain light background.
- [guess] Every value. Start values: the course's 12 pt blur and 4 pt offset.
- Drawn by: the glass pass, from sd. The pass rectangle grows by a 24 pt margin for it.

**9 · Content reveal**
- [seen] The rows have their final size from the first frame that shows them. They ride with the glass, the outline cuts them off, and the rim bends them.
- [seen] The three dots are gone at 0.096 s, under the press light.
- [seen] The toolbar's other controls fade. The back arrow has 0.80, 0.52, 0.25, 0.18, 0.10, 0.07, 0 of its brightness at 0.135, 0.174, 0.213, 0.252, 0.291, 0.331, 0.409 s.
- [guess] The exact curves.
- Apple (session 219): when a menu is shown, “the bubble simply pops open” and reveals the content inside it.
- Drawn by: the rows are drawn once into a layer of 783 × 564 px, which is part of the glass picture.

**10 · Press response**
- [seen] Radius 26, 29, 25 pt at 0.017, 0.056, 0.096 s.
- [seen] Fill brightness 81, 137, 250 of 255 at the same moments. At 0.056 s the line on the outline (155) is brighter than the fill (131).
- [guess] The spring's numbers. Whether the light starts under the finger or at the middle: the fill looks even in all three frames.
- Apple (session 219): a touch makes the glass flex and light up, and the glow starts under the fingertip. Session 323: interactive glass answers a touch with a change of scale, a bounce and a shimmer.
- Drawn by: the glass pass, on a box of about 60 × 60 pt.

**11 · A tap while the animation runs**
- [seen] Nothing: no recording.
- [guess] Each spring keeps its value and its velocity and gets a new target, so the glass carries on from where it is.

### 1.4 How it is drawn: the passes, their sizes, one frame at 120 Hz

**Sizes.**
- The screen: 402 × 874 pt at 3 px per pt = 1206 × 2622 px = 3,162,132 px.
- The resting menu: 261 × 188 pt = 783 × 564 px = 441,612 px.
- The flight box: the box that holds the glass in every frame of the opening and the closing, with a 24 pt margin for the shadow.
  - It is about 312 × 266 pt = 936 × 798 px = 746,928 px.
  - That is 24% of the screen: 746,928 ÷ 3,162,132 = 0.236.
- One frame at 120 Hz: 1000 ms ÷ 120 = 8.33 ms.

**How Apple may do it [guess].**
- Liquid Glass is drawn by the system, outside the app. I cannot see how.
- Public hints (session 323, documentation):
  - the glass takes its picture from an area larger than itself;
  - “glass can not sample other glass”;
  - a container lets its shapes share one sampled region;
  - a container draws its shapes together, which the documentation calls faster.
- These hints fit this picture: one record of what is behind a whole group of glass, one blur at a reduced size, and one pass that computes every shape of the group from distances.

**How the course's build does it.** An app cannot read the screen behind its own view (Lesson 6.5). So the app owns the page and draws it a second time, into the glass picture.

| Pass | Runs | Target size | Work |
|---|---|---|---|
| Springs | every frame, CPU | none | 3 springs × 8 steps of 1/960 s |
| Shader arguments | every frame, CPU | none | about 25 numbers |
| Page under the flight box, blurred | once per opening | 312 × 266 px at 1 px per pt = 82,992 px | one record of the page, one blur |
| Rows of the menu | once; their blur changes for about 0.2 s | 783 × 564 px = 441,612 px | text and icons |
| Glass pass | every frame while something moves | at most 746,928 px; 441,612 px for the menu alone | per pixel: 5 sd values, 1 read of the glass picture, the light, the rim line, the shadow |

- **The blur at 1 px per pt (Lesson 7.4's reason).** It touches 1/9 of the pixels, and each pixel's neighbourhood is 1/3 as wide. That is about 9 × 3 = 27 times less work per pass. This is an estimate.
- **The glass pass.** 746,928 px × 120 frames = 89.6 million pixels per second, with one picture read each. This is an estimate; Lesson 14.6 measures it.
- **What would break the 8.33 ms:**
  - blurring the page at full size in every frame;
  - laying out and drawing the whole page again in every frame;
  - compiling the shader on the first tap. `Shader.compile(as:)` compiles it earlier, on iOS 18 and later; the course's minimum is iOS 17;
  - redrawing the whole screen when only the shader's arguments change.
- **120 Hz on iPhone.** An app's own frame-by-frame animation runs above 60 Hz only if its Info.plist holds the key `CADisableMinimumFrameDurationOnPhone`.
- **At rest nothing runs.** When the springs have settled, the frame clock stops, and the system can lower the screen's refresh rate.
- **A limit of `layerEffect`.** A view backed by UIKit may not draw into the layer that the shader reads. So the page inside the glass picture must be a SwiftUI view.

---

## 2. Coverage

| Layer | Taught in Lessons 1.1–10.44 | Also in the side lesson | Still missing → where in this plan |
|---|---|---|---|
| Shape | 4.1–4.3, 4.9, 9.2–9.4; points and screen coordinates 2.5–2.7; shader inputs 8.4–8.9 | Section 2 | No new idea. First use in pt on the real menu → build 10.48 |
| Morph | mix 5.4; width, height and radius from one number 5.11–5.12; union with min 9.6 | Section 5, steps 5–7 | Joining two shapes softly → 12.1; build 12.2 |
| Spring motion | 5.1–5.7; the spring, in ticks, 5.8; the frame clock 5.12 | Section 5, steps 1–4 and 9 | The spring in seconds → 13.1; what its two numbers do → 13.2; the in-flight amount → 13.3; build 13.5 |
| Refraction | reading a color elsewhere 9.7–9.9; displacement and refraction on a circle, over a computed test pattern 9.10–9.12; rim height 10.1; slope 10.2; normal 10.3 | Sections 2–4, 8 | The shader reads the app's real picture → 11.1; the outward direction on any outline → 10.46; the push from the rim's height → 11.2; the upside-down band → 11.3; build 11.4 |
| Blur | 6.4–6.11, 7.1–7.4 | Section 1 | No new maths. The blurred page must reach the shader → 11.1; what is blurred once and what in every frame → 14.1 |
| Tint | 3.3, 3.8, 3.9, 7.5, 7.6 | — | No new idea. The menu's own values → 14.4 |
| Highlight and edges | static rim 7.7; inner band 7.8; N 10.3; the dot product 10.19–10.38; brightness = dot(N, L), max, N 1 long 10.39–10.44; adding colors 3.10 | Section 8 (a line of one even brightness) | Ambient light → 10.45 (its page exists); the rim line lit from both sides → 10.47; build 10.48 |
| Shadow | 7.9; soft mask 9.3; shifted read 9.8 | — | No new idea → build 10.48. Its values need a light-mode recording |
| Content reveal | alpha 3.2; mix and smoothstep 8.11; blur radius 7.2; material and foreground apart 6.11 | Section 6 | No new maths. The rows belong to the glass picture → 11.1, 14.4 |
| Press response | press and pivot 5.10; spring 5.8; distance 9.1 | Section 5 (the press) | No new idea → build 14.2, which needs 13.1 |
| A tap while the animation runs | target changes, value and velocity stay 5.11 | Section 5, step 9 | A dial with two values must follow, not jump → 13.4; build 14.5 |
| Runs smoothly (your fourth requirement) | offscreen cost and the 8.33 ms 6.10; smaller blur 7.4 | — | The menu's passes, 120 Hz on iPhone, compiling early → 14.1; a measurement on the phone → 14.6 |

Two gaps in Lessons 1.1–10.44 explain most of the new lessons:
- **No numbered lesson reads a real picture in a shader.** Lessons 9.7–9.14 call a Metal function that computes stripes or a checkerboard; Lesson 9.7 says that this call is not a texture sample. Only the side lesson uses `layerEffect`.
- **The spring of Lesson 5.8 has no seconds.** It moves once per “teaching tick”. The menu's springs have a stiffness and a damping per second.

---

## 3. What to cut

The test: a lesson stays only if, without it, one layer of the menu could not be explained or built.

### 3.1 Chapter 10 after 10.44

| Planned | Verdict | Why |
|---|---|---|
| 10.45 Ambient light | **stays** as written | The rim line is never black on the side away from the light. 10.47 uses this lesson's formula, and 10.45 gives the formula's reason. By the strictest test it could go too: 10.47 would then state the formula as a fact. |
| 10.46 Light color and strength | cut | One multiplication. 10.47 states it where the rim's strength is set. |
| 10.47 Build: lit glass, version 0 | cut | The menu's body is not shaded: its inside is one even 25 of 255. The new build 10.48 replaces it. |
| 10.48–10.54 Specular highlight (mirror direction, halfway arrow, N = H, dot(N, H), power, adding, build) | cut | No highlight spot is visible on the menu. The only light seen is a line on the outline. “Adding light on top” is one stated line in 10.47. |
| 10.55–10.59 Rim (edge measure, glancing light, Fresnel-like curve, base amount, build) | cut | The same thin line comes from the distance to the outline, which Lessons 7.7 and 9.3 teach. The curve would be a second way to draw one line. |
| 10.60–10.63 Edge bands (band, darkening, thin bright line, build) | the thin bright line **stays**, as the new 10.47; the rest is cut | No dark band is visible in the frames. To be looked at again in light mode. |
| 10.64–10.68 Thickness (one dial, refraction, diffusion, shadow, build) | cut as lessons | “One dial that mixes each property between two values” is mix (Lesson 5.4). The menu's dial is the in-flight amount of 13.3; the builds 14.3–14.4 use it. |
| 10.69–10.71 Builds: material shader v1 | cut | Replaced by the menu's own builds: 10.48, 11.4, 14.2–14.5. |

### 3.2 Chapters 11–16

- **Chapter 11, all 30 (adaptive engine).**
  - 11.1–11.8 (brightness behind a point, averages, fewer samples, reading the background, busyness): the menu does not measure what is behind it. Apple says that large elements such as menus do not switch between light and dark with the content.
  - 11.9–11.12 (regular and clear material, dimming layer): the menu is one material. Its values are dials, set in 14.4. The dimming layer belongs to the clear kind.
  - 11.13–11.18 (light or dark glyph, thresholds, one decision): a menu does not flip. Only 11.16, “change over a short time”, survives, inside 13.4.
  - 11.19–11.25 (adaptive tint, tint slider, busyness changes shadow and blur): not part of this effect.
  - 11.26–11.30 (accessibility versions, `GlassStyle`, debug controls): out by your scope. One switch per layer survives in 14.7.
- **Chapter 12, 43 lessons, becomes 2.**
  - 12.1–12.3 (interpolate a rectangle and its corner radius): no new idea; Lessons 5.11–5.12 did it with one number. It is the recalled part of the new build 12.2.
  - 12.4–12.6 (scaling a finished picture, redrawing every frame): the shader computes the outline from numbers at every pixel, so nothing is ever scaled. One line in the new 12.2.
  - 12.7–12.9 (mixing two distance fields): a second way to morph. The frames do not call for it.
  - 12.10–12.17 (union, weight, hump, bridge, width, build): **kept, as 1 lesson** (the new 12.1) and its build. One formula does it.
  - 12.18–12.19 (scaling a distance-field shape, press squish): the press changes the circle's radius number, 25 → 29 pt.
  - 12.20–12.23 (velocity, parts along and across, stretch): the joined circle of 12.1 gives the bulge at 0.135 s. To be opened again if a slow-motion recording shows a stretch along the motion.
  - 12.24–12.28 (angles, cos, sin, turning): nothing in the menu turns.
  - 12.29–12.36 (picture plane, perspective, 3D tilt, parallax, thickness from progress): no tilt and no perspective is visible.
  - 12.37–12.41 (moving light, glow shared by several controls): the light does not move. The press light is a smoothstep of the distance to the button's middle, built in 14.2. The neighbours do not glow; they fade.
  - 12.42–12.43 (anchor point): Safari's glass leaves the button and rises. It is not pinned.
- **Chapter 13, all 14 (controls and navigation):** other components.
- **Chapter 14, 21 lessons (menus, sheets, search):** other components.
  - 14.4 (overflow menu) is replaced by the new Chapter 14.
  - 14.5 (placement): this menu has one fixed place.
  - 14.20–14.21 (measuring, frame budgets) survive as the new 14.1 and 14.6.
- **Chapter 15, 29 lessons (the old capstone), becomes the new Chapter 14 with 7.**
  - 15.1–15.4 (record, inspect, storyboard, facts and guesses): Section 1 of this file, and the new 14.7.
  - 15.5–15.8 → 11.1, 12.2, 14.2.
  - 15.9 (keep one point attached to the source): cut; the frames show the opposite.
  - 15.10–15.11 → 12.2, 14.3.
  - 15.12 (keep labels out of the refraction): cut; the frames show bent labels (5.1, item 2).
  - 15.13–15.18, 15.20 → 14.3, 14.4.
  - 15.19 (3D tilt), 15.21 (travelling light), 15.22 (neighbours respond): not visible in the frames.
  - 15.23–15.25 → 13.4, 14.5.
  - 15.26 (reduced-motion and reduced-transparency versions): out by your scope.
  - 15.27–15.29 → 14.6, 14.7.
- **Chapter 16, all 15 (API design, caching, tests, fallbacks, gallery, independent capstone):** out by your scope. Two facts move into 14.1: compile the shader before the first tap, and blur the page once per opening.

---

## 4. The new plan

### 4.0 How every lesson of this plan is written

- `AGENTS.md` applies in full: Rule 0 (a few sentences, a picture, plain words), standard math words, concrete numbers, a stepper only when several facts lead to one result.
- **The real glass.** A lesson that involves the surface is taught on the menu's own glass, at a named pixel, in pt on the 402 × 874 pt screen, in a 3D view (10.47, 11.2, 11.3).
- **Facts in place.** A new lesson states each fact it needs where it uses it. It never points back to an old lesson for it. 4.6 lists these facts.
- **Two cases.** A formula is run on two cases, so that no number looks arranged: the resting rim (14 pt, 6 pt) and the in-flight rim (28 pt, 24 pt).
- **Fitted numbers.** Every motion and rim number below is a dial fitted to your recording for the side lesson. None is Apple's own value. Each lesson calls them chosen.
- **Types.**
  - `C`: one new idea, an HTML page only. 9 lessons.
  - `B`: no new idea, one Metal or Swift exercise in the lab. 8 lessons.
  - `E`: code first. 4 lessons.
  - The 12 `B` and `E` lessons need the iOS lab and Xcode on your Mac.
- **Builds only where two or three lessons give something to build** (your rule; see 5.3, item 2). One build, 12.2, follows a single new lesson: the motion of Chapter 13 needs the outline between button and menu first.

What went wrong before, and what this plan does about it:

| What went wrong | What this plan does |
|---|---|
| One formula proved over 35 lessons (10.4–10.38). On 2026-11-11 you chose to go without full proofs. | No proof chains. A standard fact is stated with numbers and its plainest picture. No fact of this plan takes more than one lesson. |
| Coined words: “reading”, “meeting point”, “walk of 1” (10.33–10.35, 10.44). | The lesson lines below use a math teacher's words. The lab's code names stay in code. |
| Facts justified by lesson numbers from 40 lessons back (10.41). | Each new lesson states its facts in place (4.6). |
| A test board in place of the glass; flat drawings of a 3D surface (10.3, 10.33, 10.41). | The menu's own glass, at a named pixel, in 3D, in every lesson that involves the surface. |
| A lesson with no stated purpose (10.33). | Each lesson names the layer it serves and what the next lesson can do with it. |
| Numbers that happen to be 1, “conveniently” (10.44, the cheatsheet card). | Teaching numbers are never 0 or 1. Each formula is run on two cases. |
| A simplification claimed, not shown (10.41). | Where a lesson simplifies (a step of 0.5 pt for the slope; steps of 1/960 s), a control runs it over its whole range. |
| One number worked out twice, with two results (10.44). | One chain per number. A rounded number says that it is rounded. |
| 14 ideas on one page (the old 10.4); then “meaningless splits … over-granular” (your words, 2026-11-11). | One idea per `C` lesson, and no split of one formula: joining two shapes softly is 1 lesson, not the 7 of the old 12.10–12.16. |
| The side lesson's Section 4: 15 steps and the ratio 24 ÷ 28 for the fold. | 11.3 follows three pixels in one picture. The fold's place is stated once, with its numbers. |

### Chapter 10 — Light, surface direction, and material thickness (the rest of it)

**Purpose:** End the light chapter with the only light the menu shows: a thin line on its outline.

45. **10.45 — Ambient light.** `C` Light from all around gives every pixel the same chosen 0.15, and the lamp the rest: total light = 0.15 + 0.85 × brightness. *Layer: highlight and edges. The same formula keeps the rim line visible on the side away from the light.* *(kept as written; its page is in `course/chapters/chapter-10/`)*
46. **10.46 — Which way is out: the outward direction at a pixel.** `C` P = (126.06, 660.28) pt is 5.6 pt inside the resting menu's top-left corner. Between its neighbours 0.5 pt to each side, sd falls by 0.6 for each 1 pt to the right and by 0.8 for each 1 pt toward the bottom. The arrow (−0.6, −0.8) points straight out of the glass, to the left and toward the top. It is 1 long here; where two shapes are joined softly (12.1) it is shorter, so the shader divides it by its length. It needs only sd, so it works for any outline. *Layers: highlight and edges; refraction.* *(new; also the side lesson's Section 2)*
47. **10.47 — The rim line: a thin band on the outline, lit from both sides.** `C` The band: 1 on the outline, 0 from 1.2 pt inside (smoothstep of sd). On the outline the rim's surface stands straight up, so N lies flat: N = (outward's two parts, 0). With L = (−0.48, −0.60, 0.64), toward the top left: where outward = (−0.6, −0.8), dot(N, L) = 0.288 + 0.48 + 0 = 0.768; at the opposite corner, −0.768; where outward = (0.6, −0.8), 0.192. Safari's line is bright at both opposite corners, so the line uses the size of dot(N, L) without its sign: light = 0.40 + 0.60 × 0.768 = 0.8608 at those two corners, against 0.40 + 0.60 × 0.192 = 0.5152 at the top-right corner. Line color = white × strength × band × light, added to the pixel's color. *Layer: highlight and edges.* *(new; replaces 10.46, 10.53, 10.60, 10.62)*
48. **10.48 — Build: the resting menu's outline, rim line and shadow.** `B` One Metal function in pt: the menu's rounded rectangle (middle (238.8, 742.6), half size 130.5 × 94, corner radius 36), its edge 1 px soft, a flat tint, the rim line, and a shadow: the outline's soft mask, 12 pt wide, read 4 pt lower. Joins 10.45–10.47. *Layers: shape, highlight and edges, shadow.* *(new; replaces the builds 10.47, 10.54, 10.59, 10.63)*

**Checkpoint:** Point at any place on the menu's outline and say how bright the line is there, with its two products.

---

### Chapter 11 — The lens of the menu's glass

**Purpose:** Bend the picture under the glass the way the menu's rim bends it, at rest and in flight.

1. **11.1 — The glass picture, and the shader that reads it.** `E` The page under the menu, blurred, the tint over it and the menu's rows on top are one layer: the glass picture. `layerEffect` gives that layer to the Metal function, which may read it up to `maxSampleOffset` away from its pixel: 24 pt, the largest push. Check: a function that reads 10 pt to the right shows the whole picture 10 pt to the left. *Layers: blur, tint, refraction, content reveal.* *(new; replaces 11.4 and 15.5; also the side lesson's Section 8)*
2. **11.2 — The push: largest on the outline, 0 on the flat top.** `C` The rim is a quarter circle 14 pt wide. At P, 5.6 pt inside: leg = 14 − 5.6 = 8.4, height h = √(14² − 8.4²) = 11.2 pt. push = 6 × (1 − 11.2 ÷ 14) = 6 × 0.2 = 1.2 pt. The rule and its 6 are chosen to match the recording; they are not the physics of glass. The pixel shows the picture 1.2 pt further in: read point = P − outward × 1.2 = (126.78, 661.24). In flight the rim is 28 pt wide and the push on the outline 24 pt: 5.6 pt inside, the push is 24 × (1 − 16.8 ÷ 28) = 9.6 pt. *Layer: refraction.* *(new; replaces 10.65; also the side lesson's Sections 3–4)*
3. **11.3 — Near the outline the picture is shown upside down.** `C` The in-flight rim (28 pt wide, push 24 pt on the outline), under the menu's straight top edge: the pixels 0, 5.6 and 11.2 pt inside show the picture 24, 15.2 and 16 pt inside. From the outline to 6.74 pt inside, a pixel further in shows a point further out, so this band shows the picture upside down. What lies 15.12 to 24 pt inside is shown twice. This is “New Tab” folded over the top edge at 0.213 s. At rest (14 pt, 6 pt) the band is 1.13 pt wide, and the rows lie further in than the rim reaches. *Layer: refraction.* *(new; also the side lesson's Section 4)*
4. **11.4 — Build: the lens on the menu.** `B` The Metal functions for the rim's height, the push and the read through `layer.sample`, on the resting menu, over its own glass picture and over numbered stripes; a switch between the resting rim (14, 6) and the in-flight rim (28, 24). Joins 10.46 and 11.1–11.3. *Layer: refraction.* *(new; replaces 10.69 and 15.20)*

**Checkpoint:** Pick a pixel in the rim and say which point of the picture it shows, and whether that part is upside down.

---

### Chapter 12 — From the button's circle to the menu's sheet

**Purpose:** Compute the outline of the glass at any moment between the button and the menu.

1. **12.1 — Joining two shapes softly.** `C` a is the sd of the moving glass, b the sd of a circle left on the button. min(a, b) joins them with a sharp crease. Where a and b differ by less than k = 12 pt, the smaller one is lowered by (k − |a − b|)² ÷ (4 × k). At a pixel with a = 1.5 and b = 2.5, outside both shapes: (12 − 1)² ÷ 48 = 2.5208, and 1.5 − 2.5208 = −1.0208: inside the joined glass. Where a = b the smaller one drops by k ÷ 4 = 3. This is the bulge toward the button at 0.135 s. *Layer: morph.* *(new; replaces 12.10–12.16; also the side lesson's Section 5, step 7)*
2. **12.2 — Build: the outline between button and menu.** `B` One number f from 0 to 1 moves the glass from the button (middle (342.3, 809.6), half size 25 × 25) to the menu (middle (238.8, 742.6), half size 130.5 × 94): mix for the middle and for the half size. The corner radius is the shorter half side near the button and eases to the menu's 36 pt; it is never more than the shorter half side. A circle left on the button is joined softly and has shrunk to nothing at f = 0.22. The function computes the outline from these numbers at every pixel, so no finished picture is ever stretched. Joins 12.1. *Layers: shape, morph.* *(new; replaces 12.1–12.6, 12.17, 15.10–15.11)*

**Checkpoint:** Drag f from 0 to 1 and give, at any f, the middle, the half size and the corner radius.

---

### Chapter 13 — The spring motion

**Purpose:** Move f, and everything that depends on being in motion, the way the recording moves.

1. **13.1 — A spring in seconds.** `C` Every 1/960 s: pull = stiffness × (target − value); brake = damping × velocity; velocity grows by (pull − brake) × 1/960; value grows by velocity × 1/960. With stiffness 441 and damping 35.7 the value goes from 0 toward 1 and is 0.756 after 0.113 s, on any screen: a frame at 120 Hz takes 8 steps, a frame at 60 Hz takes 16. With one step per frame, the value after 0.1 s is 0.721 or 0.753 in place of 0.688, and the stiff closing spring (2304, 144) breaks at 1/60 s. *Layer: spring motion.* *(new)*
2. **13.2 — Stiffness and damping: how fast, how much overshoot.** `C` Two numbers tell what the pair (441, 35.7) does. The time scale: 1 ÷ √441 = 0.048 s; the value stays within 2% of its target from 0.20 s on. The ratio: 35.7 ÷ (2 × √441) = 0.85. At 1 or more the value never passes its target; at 0.85 it passes it by 0.6%, at 0.70 by 4.6%, at 0.50 by 16%. Shown with a slider and stated with numbers; no proof. *Layer: spring motion (how to tune it).* *(new)*
3. **13.3 — A quick spring ahead of a slow one.** `C` A second spring with the same start and target, but stiffer (600, 34.3), runs ahead of the first (441, 35.7). gap = |quick − slow| is 0 at rest and largest in mid-flight: 0.175, 0.101 s after the start. amount = min(1, gap ÷ 0.18). The glass rises 36 pt × amount above the straight line from button to menu: 34.3 pt, 0.113 s after the start. Safari's glass is 20 to 24 pt above its final height at 0.252 s. The same amount makes the glass rounder and its rim stronger (14.3). *Layers: spring motion, morph, refraction.* *(new; replaces 10.64 and 12.35; also the side lesson's Section 5)*
4. **13.4 — A tap in mid-flight: nothing jumps.** `C` The tap changes each spring's target (1 → 0) and its two numbers (opening 441 and 35.7; closing 144 and 16.8). Value and velocity stay, so the glass carries on from where it is. A dial with one value for opening and another for closing (the 0.18 of 13.3 becomes 0.40) is not set: every 1/960 s it moves 1/14.4 of the distance that is left. *Layer: a tap while the animation runs.* *(new; replaces 11.16 and 15.24–15.25)*
5. **13.5 — Build: the menu's motion.** `B` A Swift type that gives, for any moment, the middle of the glass, its half size, its corner radius and the in-flight amount: opening from a press, closing, and a tap in mid-flight. Check against Safari: 0.213 s after the finger touches, the middle is (264.0, 724.6); the recording has (260.2, 720.0). Joins 13.1–13.4. *Layers: spring motion, morph, a tap while the animation runs.* *(new)*

**Checkpoint:** Change one spring number and say, before you run it, what the glass will do differently.

---

### Chapter 14 — The menu, layer by layer

**Purpose:** Put every layer on the real menu, one build at a time, and check the result against Safari.

1. **14.1 — One frame at 120 Hz.** `E` A frame has 8.33 ms. Once per opening: the page under the flight box (312 × 266 pt) is recorded at 1 px per pt and blurred: 82,992 px in place of 746,928. In every frame: 8 steps per spring, about 25 new shader arguments, and one pass of the glass function over at most 746,928 px. The key `CADisableMinimumFrameDurationOnPhone` allows 120 Hz, and the shader is compiled before the first tap. *Layer: all of them (the menu runs smoothly).* *(new; replaces 14.21 and 16.6–16.8)*
2. **14.2 — Build: the press.** `B` Finger down: the button's radius follows a spring from 25 pt toward 29 pt and back; a light at the button's middle whitens the fill within 0.10 s (81, 137, 250 of 255 at 0.017, 0.056, 0.096 s in Safari); the three dots fade. Joins 13.1 and the build 12.2. *Layer: press response.* *(new; replaces 12.39–12.41 and 15.7–15.8)*
3. **14.3 — Build: the opening.** `B` The motion of 13.5 drives the outline of 12.2: the rise, the rounder size, the corner radius. The rim has its in-flight numbers (28, 24) while the in-flight amount is 0.5 or more, from 0.145 s to 0.279 s, and eases back to (14, 6). The rim line and the shadow follow the outline. Joins 10.48, 11.4, 12.2, 13.5. *Layers: morph, spring motion, refraction, highlight and edges, shadow.* *(new; replaces 15.9–15.10, 15.14–15.18, 15.20)*
4. **14.4 — Build: the rows appear.** `B` The rows keep their final size and ride with the glass. They are part of the glass picture, so the rim bends them in flight. Their blur goes from 7 pt to 0 and their opacity from 0 to 1 as the slow spring passes chosen marks. The page shows through at about a third of its contrast. The toolbar's other controls fade (0.80, 0.52, 0.25 of their brightness at 0.135, 0.174, 0.213 s in Safari). Joins 11.1 and 14.3. *Layers: content reveal, blur, tint.* *(new; replaces 15.12–15.13 and 15.16)*
5. **14.5 — Build: closing, and a tap in mid-flight.** `B` A tap outside sends both springs back to 0 with the closing numbers (144 and 16.8; 2304 and 144): the glass first rises, then shrinks onto the button. The rows blur and fade first, and the rim stays weak until the glass is small. A tap at any moment gives the springs new targets (13.4). Joins 13.4 and 14.3–14.4. *Layers: every layer while closing; a tap while the animation runs.* *(new; replaces 15.23–15.25)*
6. **14.6 — Measure on the iPhone 16 Pro.** `E` Record an opening and a closing in Instruments at 120 Hz: every frame under 8.33 ms, and the GPU time of the glass pass. If a frame is late, cut first the size of the blurred picture, then the number of sd values per pixel. *Layer: all of them (the menu runs smoothly).* *(new; replaces 14.20 and 15.27)*
7. **14.7 — The menu against Safari, layer by layer.** `E` The lab build beside the recording at 1/10 speed, moment by moment; one switch per layer in the lab; and the one-page record: each layer's name, its formula with numbers, why it is there, and its dials. *Layer: every layer (the final explanation).* *(new; replaces 15.1–15.4, 15.28–15.29, 16.15)*

**Final standard:** With the lab build paused at any moment, name every layer on the screen, give its numbers at one pixel, and change one dial after saying what it will do.

---

### 4.6 The facts each new lesson states in place

A lesson states these itself, with their numbers, where it uses them. It does not send the reader to an earlier lesson for them.

- **10.46:** sd is minus inside, 0 on the outline, plus outside. In a rounded corner, sd = the distance from the corner circle's middle − the corner radius. The length of an arrow: √(x part² + y part²).
- **10.47:** smoothstep goes from 0 to 1 between its two marks. dot(N, L) is the three products of the parts, added. N and L are 1 long. A color channel holds at most 1, so a sum above 1 shows as 1. Why a solid surface gets no light on the side away from it, and why glass differs.
- **10.48:** the soft edge is the pixel's share inside the outline, from sd over 1 px. The shadow is the same mask, wider and read at a shifted point.
- **11.1:** a view cannot read what is drawn behind it, so the app draws the page a second time. The shader's position is in pt. The color it returns is premultiplied. A UIKit view may not draw into this layer.
- **11.2:** the rim's height from the distance inside (the quarter circle and its right triangle). read point = pixel − direction × length.
- **11.3:** nothing beyond 11.2's formula. The fold's place is stated with its numbers: 28 − 28² ÷ √(28² + 24²) = 6.74 pt.
- **12.1:** min keeps the sd of the nearer shape.
- **12.2:** mix(a, b, f) = a + (b − a) × f. A corner circle cannot be wider than the shorter side.
- **13.1:** velocity is the change per second. A frame at 120 Hz lasts 1/120 s.
- **13.2:** “passes its target” is the overshoot. The square root of the stiffness sets the pace.
- **13.3:** min(a, b) is the smaller of two numbers. mix(a, b, f) = a + (b − a) × f.
- **13.4:** 13.1's four lines, written out again.
- **Every `B` lesson:** one recall line per joined idea, with its numbers.

---

## 5. Open questions

### 5.1 Where the repository contradicts this goal

1. **Two plans.** The curriculum, `NEW_CHAT_PROMPT.md` (sections 3 and 9), `AGENTS.md` rule 22, `README.md`, the course home and the Chapter 10 hub describe the 323-lesson plan. “Generate the next lesson” would make the old 10.46, “Light color and strength”, which this plan cuts. If you adopt this plan, one more patch must replace the curriculum from 10.45 on, the size 323, the hub's list and the “next lesson” rule. I did not touch them.
2. **The old capstone contradicts the recording.**
   - 15.12 keeps labels out of the refraction. The frames from 0.213 s to 0.291 s show bent and folded labels.
   - 15.9 keeps one point attached to the source. In the frames the glass leaves the button, and its bottom edge is 35 pt above its end place at 0.213 s.
   - 15.19 (3D tilt), 15.21 (travelling light) and 15.22 (neighbours respond) describe things that the frames do not show.
3. **The side lesson's model against the frames.**
   - Its rim line has one even brightness. The resting frame is brighter at two opposite corners (57 and 51 against 43 and 39).
   - Its press scale is still 1.12 at 0.10 s. The frame at 0.096 s shows a radius of 25 ± 1 pt, which is a scale of 1.
4. **“The Chapter 7 frost constants are frozen”** (`NEW_CHAT_PROMPT.md` section 9: blur 18 pt, tint 0.25, rim 3 pt, shadow 12 pt and 4 pt). The menu needs its own values: a line of about 1 pt and a far stronger tint. I read “frozen” as “do not rebuild Chapter 7”, not as “the menu must use them”.
5. **Minimum iOS 17.** `Shader.compile(as:)` needs iOS 18. On iOS 17 the first use of the shader may delay one frame. 14.1 must say so.

### 5.2 Where the repository contradicts itself

1. **The size of the plan:** 323 (curriculum, `README.md`, `NEW_CHAT_PROMPT.md`, `AGENTS.md`, the course home); 313 (`CURRENT_STATE.md`, in the side lesson's section); 310 (the handoff, in the side lesson's section); 315 (the side lesson's own page).
2. **The count of lessons up to 10.44.** `course/chapters/` holds 144 numbered lesson pages up to 10.44. One of them, 5.9, is only a redirect to 5.8. That gives 143 teaching pages. Lesson 10.45 has a page as well.
3. **Splitting a lesson.** `AGENTS.md` rule 16 says: no split for the idea count, and only after asking. The end of rule 20 and step 3 of `tools/beginner-review/REVIEWER_PROMPT.md` still say: split at once, without asking.
4. **The fresh review.** `NEW_CHAT_PROMPT.md` section 5 asks for it on every revision. `AGENTS.md` rule 20 allows two per page. `FEEDBACK_LOG.md` (2026-11-17) records that you asked not to run it, and that the question “drop it for good?” is still open.
5. **Exercises.** `AGENTS.md` rule 18 gives every `C` lesson 1–2 exercises. `USER_PREFERENCES.md` (“Exercises & grading”) asks for 2–4 in every lesson. The request for this plan allows exercises only where two or three lessons give something to build.
6. **Dates.** The curriculum says “Updated 2026-11-08” and holds changes of 2026-11-11 and 2026-11-12. The handoff says “Updated 2026-10-31” and holds entries up to 2026-11-18.
7. **Lesson 9.7 in two forms.** The curriculum's frozen lock writes it as `background.eval(fragCoord)`. The lesson's page calls a Metal function `background(fragCoord, resolution)` and says that the call is not a texture sample.

### 5.3 What I assumed

1. **The side lesson is not counted as taught.** Its Sections 2–5 and 8 already teach five ideas of this plan: 10.46, 11.2, 11.3, 12.1, 13.3. I kept them as new, short lessons on the real glass, because a new lesson must state its facts in place. If those sections are solid for you, say so: the five become one recall line each in the builds, and the plan has 16 new lessons.
2. **“Exercises”** in your rules means the build exercises: a `B` lesson comes only after two or three `C` lessons. The short question exercises of `AGENTS.md` rule 18 stay on `C` pages. If you meant no exercises at all on `C` pages, rule 18 has to change.
3. **The frames are the target:** iOS 26, Safari with its one-row bar at the bottom (the layout that iOS 26 calls Compact, as far as I can tell), dark mode, iPhone 16 Pro.
4. **The light points to the top left:** L = (−0.48, −0.60, 0.64), which is the L of Lessons 10.4–10.45 mirrored left to right. This rests on one frame.
5. **The lab's `shortcut/` files** (named in `CURRENT_STATE.md`; I cannot open the lab) serve as the answer keys of the builds, as `DotExercise` did for Lesson 10.40.
6. **Lesson numbers.** The new lessons continue at 10.46 and reuse the chapter numbers 11–14. Forward pointers in earlier pages to old lesson numbers stay as they are.
7. **This file stores no progress.** `AGENTS.md` forbids completion status in project files. The count check is in the chat only.

### 5.4 What I need to see

Send each as the original file, not a re-encoded copy. Each one settles marked guesses.

1. **Light mode, over a page with text and a photo: opening and closing.** It settles the shadow, the tint, the blur, whether the page is bent at the rim, and whether colors split there. It gives 10.48 and 14.4 their values.
2. **Dark mode, over a bright photo: opening and closing.** It settles the rim line's brightness around the outline, and so 10.47's light direction.
3. **A tap on “⋯” while the menu opens, and a tap outside while it opens.** It settles 13.4 and 14.5.
4. **A finger held on “⋯” for one second.** It shows the press alone, and whether the menu opens on touch or on release (14.2).
5. **One screenshot of the open menu in each mode.** A PNG at 3 px per pt shows the rim line and the corner curve far better than a frame at 1.6 px per pt.
6. **If you can: a 240 frames-per-second video of the phone's screen, taken with a second phone.** The bulge toward the button lasts about 8 frames at 120 Hz. The frames that I have are 0.039 s apart, so they hold one or two of them.

If one of these shows a layer that is not in Section 1 (a dark band inside the outline, color fringes, a stretch along the motion), it gets one `C` lesson, added where its build needs it.

---

## Sources

- WWDC 2025, session 219, “Meet Liquid Glass”: https://developer.apple.com/videos/play/wwdc2025/219/
- WWDC 2025, session 323, “Build a SwiftUI app with the new design”: https://developer.apple.com/videos/play/wwdc2025/323/
- Human Interface Guidelines, “Materials”: https://developer.apple.com/design/human-interface-guidelines/materials
- SwiftUI, `GlassEffectContainer`: https://developer.apple.com/documentation/swiftui/glasseffectcontainer
- SwiftUI, `layerEffect(_:maxSampleOffset:isEnabled:)`: https://developer.apple.com/documentation/swiftui/view/layereffect(_:maxsampleoffset:isenabled:)
- SwiftUI, `Shader.compile(as:)`: https://developer.apple.com/documentation/swiftui/shader/compile(as:)
- 120 Hz on iPhone needs an Info.plist key. I read reports of Apple's article, not the article itself: https://www.macrumors.com/2021/09/24/apple-promotion-third-party-app-support/
- In this repository: `course/shortcut/lesson-shortcut-safari-menu.html` (the 10 frames, the measured middles, the model), `CURRENT_STATE.md` (the side lesson's section), `FEEDBACK_LOG.md`.
