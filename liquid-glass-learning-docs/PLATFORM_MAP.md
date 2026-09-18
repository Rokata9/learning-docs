# iOS platform map (Liquid Glass course)

Canonical Android → iOS mapping. Executors do not invent synonyms.

Test device: **iPhone 16 Pro**. Do not substitute iPhone 17 Pro or another model in prose, checklists, or `xcodebuild` destinations.

## Paths

| Role | Path |
|------|------|
| Docs | `/Users/rosen/Code/learning-docs/liquid-glass-learning-docs` (edit in place on the user’s branch) |
| Android lab | `/Users/rosen/Code/LiquidGlassLab` (read-only 1:1 source) |
| iOS lab | `/Users/rosen/Code/LiquidGlassLab-iOS` (create/write only here) |

Do not copy the docs tree. Do not edit the Android project. Do not create `ios/` or `android/` directories in this repo.

## Context protocol

1. One step per chat. Honor `TRANSLATION_PROGRESS.md` `next_step`. Do not skip. Do not run a later id.
2. Read only the files listed for that step. Do not open other chapters, `verification/*.png`, or the full `AGENTS.md` after bootstrap.
3. Always read this file (after A1).
4. Android Kotlin is read from `LiquidGlassLab`. Write Swift only under `LiquidGlassLab-iOS`.
5. HTML, glossary, curriculum, and agent files are edited **in place** under `liquid-glass-learning-docs`.
6. After edits, grep **just this step’s files** for leftover `Android`, `Kotlin`, `Compose`, `AGSL`, `RuntimeShader`, `Pixel 8`, `Jetpack`, `Gradle`, `MainActivity`, `minSdk`, `Android Studio`, `dp` as a layout unit, `setFloatUniform` (in prose; the Swift helper may keep the method name).
7. Do not load `AGENTS.md` unless the step is `B1`–`B3`.
8. If a listed HTML file is >90 KB, that lesson is already a solo step. Do not add a second lesson.
9. When the step’s acceptance box is green, append the id to `completed`, set `next_step` to the following id in `session_order`, write a two-line note, and **stop**.

## Non-goals that still bind every step

- Do not rewrite graphics pedagogy, diagrams, orange/navy, teaching pixels, formulas, exercises, or HTML/JS labs.
- Do not use iOS 26 `glassEffect` / system Liquid Glass as the implementation. The course still **builds** the effect.
- Do not use `.ultraThinMaterial` / `UIVisualEffectView` as the Chapter 6–7 glass path. Those sample the real backdrop and would erase the “owned effect vs captured backdrop” lesson.
- Do not generate Lessons 9.11–16.17 HTML. Only retarget the outline.
- Do not invent missing Android labs (no cubic-Bézier explorer; 5.9 is a redirect; 5.8 merged overshoot). Port what exists.
- Do not commit unless asked.

---

## D1. Docs in place on a branch; lab from scratch

Executors edit `liquid-glass-learning-docs` in place. They do not copy the docs tree.

`LiquidGlassLab-iOS` is created from scratch (Gradle is not portable). The Android lab stays where it is and is never written.

## D2. Named device and floor

| Android | iOS |
|---------|-----|
| Pixel 8 Pro | **iPhone 16 Pro** |
| Android 13 / API 33 | **iOS 17** |
| compileSdk 36 | Xcode 16 / iOS 18 SDK is fine; **deployment target 17.0** |
| Preview `412.dp × 915.dp` | `#Preview` at **412 × 915 points** (keep the teaching canvas) |

Physical device is the source of truth for Lessons 1.3 and 1.7, matching the old Pixel rule. Simulator is extra, not the proof.

## D3. Units

| Android | iOS | Keep 1:1 how |
|---------|-----|----------------|
| `dp` layout | **points** (`pt`) | `18.dp` → `18` points. Frost constants stay 18 / 0.25 / 0.40. |
| Canvas `px` | **pixels** | SwiftUI `colorEffect` `position` is **points**, origin top-left, **y down**. UV is the same in points or pixels. When a lesson uses pixel `fragCoord` (8.4’s `80.0`), pass `displayScale` and use `position * scale` (usually 3 on iPhone 16 Pro). |
| `LocalDensity.density` | `displayScale` | Lesson 2.5 teaches `px = pt × scale`. |

Lesson 8.4’s `80.0` remains **80 pixels**, not 80 points. On @3x that is a smaller slice of the view than 80 dp was on a density-2.625 Pixel — call that out once in 2.5 and 8.4. Do not rescale the teaching number; the Android code used pixels.

SwiftUI `Canvas` is in points; Android Compose `Canvas.size` is pixels. Shader resolution must use pixels or 8.4–9.10 numbers drift.

## D4. Shader language: `.metal` files + SwiftUI `ShaderLibrary`

Pixel **math** stays 1:1 (`half4`, `mix`, `smoothstep`, `fract`, `length`, orange/navy numbers). The **host** is a `.metal` file Xcode compiles at build time, drawn with `.colorEffect`.

Do **not** rebuild a runtime string compiler (`RuntimeMetalShader`, `MTLDevice.makeLibrary(source:)`). That was tried in C2 and replaced.

```metal
#include <metal_stdlib>
using namespace metal;

[[ stitchable ]] half4 labOrange(float2 position, half4 color) {
    return half4(0.88, 0.48, 0.18, 1.0);
}
```

```swift
ShaderRect(shader: ShaderLibrary.labOrange())
    .frame(height: 140)
```

### Contract

1. One `.metal` file per explorer (or one chapter file). Functions are `[[ stitchable ]]`. SwiftUI requires `float2 position, half4 color` first. Old uniforms become extra parameters, passed from Swift as `.float` / `.float2`.
2. `ShaderRect` is `Rectangle().fill(.white).colorEffect(shader)`. Do not add `MTKView` for Chapters 8–9.
3. `position` is view **points**, origin top-left, y down. UV (`position / size`) is the same in points or pixels. Lesson 8.4’s `80.0` stays **80 pixels**: pass `displayScale` and use `position * scale`.
4. A missing Shader argument is a Swift compile error, not a silent 0. To teach a zero slot, pass `0` on purpose.
5. `background.eval(coord)` becomes a Metal **function call** in the same `.metal` file, not `layer.sample`. Lesson 9.8: negative x is not clamped.
6. Lesson 8.2 is “add a `.metal` file; Xcode compiles it.” Lesson 8.12 is an **Xcode** Metal compile error (`gl_FragCoord` in an otherwise legal 8.11 program). There is no runtime `try` constructor.

### Files (do not re-derive a runtime compiler)

| File | Role |
|------|------|
| `/Users/rosen/Code/LiquidGlassLab-iOS/LiquidGlassLab/shader/LabOrange.metal` | 8.3 orange stitchable |
| `/Users/rosen/Code/LiquidGlassLab-iOS/LiquidGlassLab/shader/ShaderRect.swift` | `colorEffect` fill |
| `/Users/rosen/Code/LiquidGlassLab-iOS/LiquidGlassLab/shader/ShaderSmokeView.swift` | Chapter 8 placeholder, 140 pt orange |

## D5. Chapter 6 is a platform-equivalent rewrite of the API, not of the idea

Keep the 11-lesson sequence. Swap nouns:

| Pedagogical slot | Android | iOS 1:1 |
|------------------|---------|---------|
| Three phases | Compose composition / layout / draw | SwiftUI view update / layout / render |
| Owned blur | `graphicsLayer { renderEffect = BlurEffect }` | `.blur()` / `drawingGroup` + blur on **that view’s** pixels |
| Backdrop problem | sibling is not in the effect input | same: `.blur()` does not sample views behind; **do not** “fix” it with `ultraThinMaterial` |
| Record background | `GraphicsLayer.record` / `drawLayer` | dedicated background `View` snapshotted with `ImageRenderer` or an offscreen Metal texture, then drawn into the panel |
| Crop | `clipRect` + `LayoutCoordinates` | `GeometryReader` frames + clip + offset |
| Offscreen cost | `CompositingStrategy.Offscreen` | `drawingGroup()` / extra render targets; measure extent the same way |
| Two-layer scene | backdrop layer / material / sharp labels | same three roles |

Share one `BackdropRecorder` helper after 6.6 so 6.7–6.11 do not each invent a different capture API.

`.blur()` vs `BlurEffect` kernels are not the same. Chapter 7 already refuses to claim GPU weights. Keep that honesty. TileMode `Decal/Mirror/Repeated` is the weakest 1:1 in 7.3; implement the closest Metal/CI sampler wrap and say so in one sentence.

## D6. HTML filenames stay until a final sweep

Renaming `lesson-01-03-create-the-android-project.html` mid-fork breaks hubs. Content and `<title>` become iOS in the lesson’s own step. Step `Z2`/`F2` optionally renames files and rewrites hrefs in one dedicated session.

## D7. Lab routing

Android `MainActivity` only launches Chapters 8–9 at runtime; 1–7 exist for Previews. The iOS app **hosts Chapters 1–9** in a chapter picker so every translated explorer is runnable. Previews remain required (light, then dark, 412×915, vertically scrollable).

## D8. What “1:1 equivalent code” means

- Same explorer file set and lesson numbers.
- Same constants (18 pt blur, tint 0.25, saturation 0.40, teaching orange `half4(0.88, 0.48, 0.18, 1.0)`, navy, `dispLen = 0.10`, …).
- Same control flow and overlay marks.
- SwiftUI structure mirrors the composable tree (`VStack`/`ZStack`/`Canvas` for `Column`/`Box`/`Canvas`).
- Pixel **math** copied into `[[ stitchable ]]` functions. Add SwiftUI’s required `position` and `color` parameters. Uniforms become extra arguments. Do not rewrite the arithmetic.
- Where iOS **behavior** has no twin (8.9 missing argument is a Swift compile error, not silent 0; 8.12 is an Xcode Metal log, not a runtime `Error`; 16.14 API 31 fallbacks become iOS 16 fallbacks), teach the iOS fact in that pedagogical slot. Do not fake Android diagnostics.

---

## Canonical type map

| Android / Kotlin / Compose / AGSL | iOS |
|-----------------------------------|-----|
| Kotlin | Swift |
| Jetpack Compose | SwiftUI |
| `@Composable fun Foo` | `struct Foo: View` |
| `Modifier` | view modifiers |
| `remember` / `rememberSaveable` | `@State` / `@SceneStorage` |
| `MaterialTheme` / `Surface` / `Text` / `Slider` | small `LabTheme` + `SwiftUI` equivalents |
| `Color(0xAARRGGBB)` / `Color(0xFFRRGGBB)` teaching colors | `Color(#colorLiteral(red:green:blue:alpha:))` **at each Canvas/draw use site**, even if RGB repeats. Wrap the UIKit literal. Do not factor into named `private let` colors and do not add `Color.init(hex:)`. `LabColor` / system `UIColor` chrome stay named. Component floats stay `Float`. Metal/HTML keep numeric hex. |
| `Canvas` / `DrawScope` | `Canvas` / `GraphicsContext` |
| `Path.moveTo/lineTo/close` | `Path` |
| `graphicsLayer { translation/rotation/scale/alpha }` | `.offset` / `.rotationEffect` / `.scaleEffect` / `.opacity` |
| `BlurEffect` on owned layer | `.blur(radius:)` on **owned** view, or CI/Metal blur of a snapshot — never material glass |
| `ColorFilter` + `ColorMatrix.setToSaturation(0.40)` | the **same 4×5 matrix** (weights 0.213 / 0.715 / 0.072), applied in Swift/Metal/CI. Do not use Core Image’s default saturation. |
| `Color.compositeOver` | same straight-RGBA over formula; do not switch the lesson to premultiplied UIKit blending as the taught contract |
| `Color.luminance()` | copy Android/Compose Rec.709 path already taught in 3.6 |
| `BlendMode.SrcOver/Multiply/Screen/Plus` | `BlendMode.normal/multiply/screen/plusLighter` |
| `saveLayer` + `DstIn` (4.8) | `GraphicsContext` transparency layer + `.destinationIn` (keep the seven-step movie) |
| `rememberGraphicsLayer().record` | snapshot of a dedicated background view (`ImageRenderer` / Metal texture) |
| `withFrameNanos` | `TimelineView(.animation)` or `CADisplayLink` |
| `Animatable` + `spring()` | custom clock first (5.8 coefficients stay teaching-only); later `spring` retuned, not copied blindly |
| `Indication` | `ButtonStyle` / `configuration.isPressed` |
| `RuntimeShader(string)` | `.metal` file + `ShaderLibrary` |
| `ShaderBrush` + `drawRect` | `ShaderRect` = `colorEffect` |
| `setFloatUniform` | `Shader` arguments (`.float`, `.float2`) |
| `setInputShader` + `eval` | Metal function call in the same `.metal` file |
| `IllegalArgumentException` shader log | Xcode Metal compile error |
| `MainActivity` / `setContent` | `@main App` + `WindowGroup` + `LabHost` |
| Android Studio Preview | Xcode `#Preview` |
| Gradle / APK / ADB | Xcode / `.app` / `devicectl` or Run |
| `minSdk` | iOS deployment target |
| `dp` | points |
| Pixel 8 Pro | iPhone 16 Pro |
| AGSL | Metal Shading Language (`.metal` `[[ stitchable ]]` function) |
| `safeDrawingPadding` | `.safeAreaPadding()` / `safeAreaInset` |
| API 31 fallbacks (16.14) | iOS 16: frost without runtime Metal shaders |
| Reduced transparency / motion / contrast | `UIAccessibility.isReduceTransparencyEnabled` and siblings (Chapter 11 outline) |

## Frozen frost stack (do not rebuild)

blur **18 pt**, tint **0.25**, saturation **0.40**, rim **3 pt**, inner band **12 pt** with band blur **6 pt**, shadow blur **12 pt** offset **4 pt**.

Saturation matrix weights stay **0.213 / 0.715 / 0.072**. Compose `Color.luminance` / saturation matrix must be copied, not replaced with UIKit/Core Image defaults.

## What stays vs what changes in an HTML lesson

**Stay:** inline CSS/JS/SVG/Canvas labs, steppers, hidden answers, copyable completion record, orange/navy, teaching coordinates, `file://` standalone rule, light desktop layout.

**Change:**

- Titles, crumbs, “Android connection” / “ANDROID ROUTE” / “Android files” sections.
- Kotlin excerpts → Swift excerpts that match the new explorer.
- AGSL excerpts → `[[ stitchable ]]` Metal (same math; `position`/`color` plus extra args). Host glue is `ShaderLibrary`.
- “Browser versus Android” → “Browser versus iOS”.
- Pixel 8 Pro checklists → iPhone 16 Pro.
- Glossary links whose term names change (`#agsl` can remain as an id until `G1`/`D1`, then become `#msl` with a redirect heading if needed).

Interactive JS that **displays** Kotlin/AGSL must display Swift/MSL. JS that **simulates** the pixel math stays JS.

---

## Equivalent progress (learner state after A2)

Android state was 95 of 216 through Lesson 9.9. That count assumed Android labs. It is not the iOS state.

**Stay complete** (graphics/math; HTML still updated so excerpts are Swift):

| Chapter / lessons | Why |
|-------------------|-----|
| Chapter 3 (11) | Color, alpha, over, luminance, tint, saturation as math |
| Chapter 4 (11) | Shapes, corners, paths, masks as geometry |
| Chapter 5 (12) | Time, progress, lerp, easing, springs as math |
| Lessons 9.1–9.6 (6) | Distance, SDF, min/max. Pixel arithmetic is unchanged |

**iOS-confirmed complete: 40 of 216.**

Also still known, but not extra complete lessons: 1.1 / 1.2 / 1.6 / 1.8 vocabulary, Chapter 7 frost *formulas* (18 pt / 0.25 / 0.40), Chapter 8 mix/smoothstep *math*. Those live inside chapters that must be re-read for the iOS project and APIs.

### Must re-read before Lesson 9.10 (in order)

| Order | What to read | Why it is iOS, not math |
|-------|----------------|-------------------------|
| 1 | **Chapter 1 entire** (1.1–1.8) | SwiftUI project, study background, translucent panel, iPhone 16 Pro experiment |
| 2 | **Chapter 2 entire** (2.1–2.9) | Points vs pixels vs `displayScale`, SwiftUI coordinates |
| 3 | **Chapter 6 entire** (6.1–6.11) | How SwiftUI draws the scene. Owned `.blur()` vs captured backdrop |
| 4 | **Chapter 7 entire** (7.1–7.12) | Frost recipes known; lab path is new |
| 5 | **Chapter 8 entire** (8.1–8.12) | First Metal shader. `.metal` + `ShaderLibrary` host is new |
| 6 | **Lessons 9.7–9.9** | Input color is a Metal function call, not a texture sample |

Then the unresolved checkpoint is again **Lesson 9.10 — Build a displacement field**.

Do **not** keep “95 of 216 through 9.9.” Do **not** mark 1.3 complete just because the Android 1.3 was complete. After 9.9 is confirmed on iOS, count is 40+8+9+11+12+12+3 = **95** again, checkpoint **9.10**.

Live snapshot fields after A2: platform Swift/SwiftUI/Metal; test device iPhone 16 Pro; min OS iOS 17; complete 40/216 through 9.6; checkpoint **1.3**; frontier **9.10**.

---

## `#Preview` convention

Light, then dark; 412×915 points; longest state vertically scrollable.

## Leftover-noun grep (this step’s files only)

`Android`, `Kotlin`, `Compose`, `AGSL`, `RuntimeShader` (except the mapping sentence “Android RuntimeShader ↔ ShaderLibrary / `.metal`” in this file), `Pixel 8`, `Jetpack`, `Gradle`, `ADB`, `APK`, `minSdk`, `Android Studio`, `MainActivity`, `setContent`, `composable`.

Do not leave `RuntimeMetalShader`, `setFloatUniform`, or `makeLibrary(source:)` in new lab code.
