# iOS fork of the Liquid Glass course

A language/platform translation of the existing Android course. Graphics teaching stays. Kotlin/Compose/AGSL/Pixel 8 Pro become Swift/SwiftUI/Metal/iPhone.

Docs are edited **in place** on a git branch you create. The Android lab is left untouched. The iOS lab is a **new** Xcode project.

## Goal

| Role | What happens |
|------|----------------|
| Docs | **In-place** in `/Users/rosen/Code/learning-docs/liquid-glass-learning-docs` on your new branch. No second docs folder. |
| Android lab | Unchanged at `/Users/rosen/Code/LiquidGlassLab` (read-only 1:1 source). |
| iOS lab | **New project** at `/Users/rosen/Code/LiquidGlassLab-iOS`. |

When the translation is done:

- Every generated lesson’s **code excerpts** are Swift + the lab Metal dialect defined below.
- Every **prose** reference to Android, Kotlin, Jetpack Compose, AGSL, Gradle, ADB, `MainActivity`, Pixel 8 Pro, `dp` (as the layout unit), Android Studio Preview, etc. is the iOS equivalent.
- `LiquidGlassLab-iOS` is a SwiftUI iOS app whose explorers are **1:1** with the Android explorers: same files, same numbers, same controls, same teaching marks, same visual result.
- Curriculum chapters 10–16 (outline only) use iOS nouns so later generation is iOS-first.
- **Progress is rewritten to the iOS-equivalent state**, not left at “95 through 9.9.” Platform chapters must be re-read; pure-math chapters stay complete. See **Equivalent progress** below.

## Non-goals

- Do not rewrite graphics pedagogy, diagrams, orange/navy, teaching pixels, formulas, exercises, or HTML/JS labs.
- Do not copy the docs repo to a parallel `liquid-glass-learning-docs-ios` folder.
- Do not use iOS 26 `glassEffect` / system Liquid Glass as the implementation. The course still **builds** the effect.
- Do not use `.ultraThinMaterial` / `UIVisualEffectView` as the Chapter 6–7 glass path. Those sample the real backdrop and would erase the “owned effect vs captured backdrop” lesson.
- Do not edit `/Users/rosen/Code/LiquidGlassLab` (the Android project).
- Do not generate Lessons 9.11–16.17 HTML. Only retarget the outline.
- Do not invent missing Android labs (no cubic-Bézier explorer exists; 5.9 is a redirect; 5.8 merged overshoot). Port what exists.
- Do not commit unless asked. You own the branch.

---

## Why this has to be many small sessions

Approximate on-disk size of **generated** material:

| Tree | Size | ~tokens (chars/4) |
|------|------|-------------------|
| Course HTML (108 files) | 5.7 MB | ~1.4M |
| `AGENTS.md` | 152 KB | ~38k |
| Glossary | 100 KB | ~25k |
| Kotlin lab (102 files) | 1.7 MB | ~430k |
| Chapter 3 HTML alone | 868 KB | ~217k |
| Chapter 3 Kotlin alone | 331 KB | ~83k |

One chapter in one chat will cross 400k context. The batches below cap **listed source reads at ~80k tokens** (~320 KB) so that mapping notes, tool output, and written Swift/HTML still fit.

---

## How to resume (one line per chat)

This work is ~70 chats. Do not try to finish it in one conversation.

**First chat only** (control files do not exist yet). Paste:

```text
Read liquid-glass-learning-docs/IOS_TRANSLATION_PROMPT.md if it exists, otherwise read this plan and execute step A1.
```

If you are still in the planning session when you approve, the first execution chat should be given this plan file plus:

```text
Read the iOS translation plan and execute the next step of the plan.
```

**Every later chat.** Paste only:

```text
Read liquid-glass-learning-docs/IOS_TRANSLATION_PROMPT.md and execute the next step of the plan.
```

Do not name a step id. `TRANSLATION_PROGRESS.md` holds `next_step`. The prompt file tells the agent to read the plan, take that one step, update progress, and stop.

---

## Context protocol (every session)

Hard rules for whoever executes a step:

1. **New chat per step.** User message is the one-liner above. The agent reads `IOS_TRANSLATION_PROMPT.md` → `TRANSLATION_PROGRESS.md` → the listed files for `next_step` only.
2. **Read only the files listed for that step.** Do not open other chapters, `verification/*.png`, or the full `AGENTS.md` after bootstrap.
3. **Always read** `liquid-glass-learning-docs/PLATFORM_MAP.md` (kept short, <400 lines). After A1 it exists; A1 itself uses this plan’s Key Decisions instead.
4. Android Kotlin is read from `/Users/rosen/Code/LiquidGlassLab/...` as the 1:1 source. Write Swift only under `LiquidGlassLab-iOS`.
5. HTML, glossary, curriculum, and agent files are edited **in place** under `liquid-glass-learning-docs`.
6. After edits, grep **just this step’s files** for leftover `Android`, `Kotlin`, `Compose`, `AGSL`, `RuntimeShader`, `Pixel 8`, `Jetpack`, `Gradle`, `MainActivity`, `minSdk`, `Android Studio`, `dp` as a layout unit, `setFloatUniform` (in prose; the Swift helper may keep the method name — see map).
7. Do not load `AGENTS.md` unless the step is `B1`–`B3` (that file’s own translation).
8. If a listed HTML file is >90 KB, that lesson is already a solo step. Do not add a second lesson.
9. When the step’s acceptance box is green, set `TRANSLATION_PROGRESS.md` `next_step` to the following id in the session order. **Stop. Do not start that next step in the same chat.**

---

## Key decisions

### D1. Docs in place on a branch; lab from scratch

You create a git branch in `learning-docs`. Executors edit `liquid-glass-learning-docs` in place on that branch. They do not copy the docs tree.

`LiquidGlassLab-iOS` is created from scratch (Gradle is not portable). The Android lab stays where it is and is never written.

### D2. Named device and floor

| Android | iOS |
|---------|-----|
| Pixel 8 Pro | **iPhone 16 Pro** |
| Android 13 / API 33 | **iOS 17** |
| compileSdk 36 | Xcode 16 / iOS 18 SDK is fine; **deployment target 17.0** |
| Preview `412.dp × 915.dp` | `#Preview` at **412 × 915 points** (keep the teaching canvas) |

The named test device is **iPhone 16 Pro**. Physical device is the source of truth for Lessons 1.3 and 1.7, matching the old Pixel rule. Simulator is extra, not the proof. Do not substitute iPhone 17 Pro or another model in prose, checklists, or `xcodebuild` destinations.

### D3. Units

| Android | iOS | Keep 1:1 how |
|---------|-----|----------------|
| `dp` layout | **points** (`pt`) | `18.dp` → `18` points. Frost constants stay 18 / 0.25 / 0.40. |
| Canvas `px` | **pixels** | Shader `fragCoord` and `resolution` stay **pixels**, origin top-left, **y down**. SwiftUI layout is points; multiply by `displayScale` when writing shader resolution (usually 3 on iPhone 16 Pro). |
| `LocalDensity.density` | `displayScale` | Lesson 2.5 teaches `px = pt × scale`. |

Lesson 8.4’s `80.0` remains **80 pixels**, not 80 points. On @3x that is a smaller slice of the view than 80 dp was on a density-2.625 Pixel — call that out once in 2.5 and 8.4. Do not rescale the teaching number; the Android code used pixels.

### D4. Shader language: lab Metal dialect, 1:1 with AGSL bodies

AGSL pixel functions, `half4`, `float2`, `mix`, `smoothstep`, `fract`, `length`, `uniform float2 resolution`, and `background.eval(coord)` **keep that source text**. Those tokens exist in Metal. What Android’s `RuntimeShader` provided as a host, the lab provides as `RuntimeMetalShader`.

Learner-facing name: **Metal Shading Language (MSL)**. The lab compiles a pixel-function string that looks like the Android AGSL string so Chapters 8–9 math, walkthroughs, and numbers stay identical.

```metal
uniform float2 resolution;

half4 main(float2 fragCoord) {
    float2 uv = fragCoord / resolution;
    return half4(uv.x, 0.0, 0.0, 1.0);
}
```

`RuntimeMetalShader`:

1. Parses `uniform` declarations into a constant buffer (unread named slots stay **0**, preserving Lesson 8.9).
2. Implements `uniform shader name` + `name.eval(coord)` as a **Metal function call** into the input shader’s `main`, **not** a clamped texture sample. This preserves Lesson 9.8: eval does not wrap a negative x.
3. Wraps the body in a real Metal library compiled with `MTLDevice.makeLibrary(source:)`.
4. Exposes `setFloatUniform(_:_:)`, `setInputShader(_:_:)`, and compile errors as `Error` with the Metal log (Lesson 8.12).
5. Draws through `ShaderRect`, a SwiftUI view that fills a rectangle (the `ShaderBrush` + `drawRect` pair).

Teaching failure in 8.12 stays `gl_FragCoord` in an otherwise legal 8.11 program.

Do **not** switch the course to compile-time `.metal` + `ShaderLibrary` as the primary path. That would replace “compile a string at runtime” (8.2, 8.12).

### D5. Chapter 6 is a platform-equivalent rewrite of the **API**, not of the **idea**

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

### D6. HTML filenames stay until a final sweep

Renaming `lesson-01-03-create-the-android-project.html` mid-fork breaks hubs. Content and `<title>` become iOS in the lesson’s own step. Step `Z2` optionally renames files and rewrites hrefs in one dedicated session.

### D7. Lab routing

Android `MainActivity` only launches Chapters 8–9 at runtime; 1–7 exist for Previews. The iOS app **hosts Chapters 1–9** in a chapter picker so every translated explorer is runnable. Previews remain required (light, then dark, 412×915, vertically scrollable).

### D8. What “1:1 equivalent code” means

- Same explorer file set and lesson numbers.
- Same constants (18 pt blur, tint 0.25, saturation 0.40, teaching orange `half4(0.88, 0.48, 0.18, 1.0)`, navy, `dispLen = 0.10`, …).
- Same control flow and overlay marks.
- SwiftUI structure mirrors the composable tree (`VStack`/`ZStack`/`Canvas` for `Column`/`Box`/`Canvas`).
- Shader **bodies** copied, then only AGSL-host names that the helper already understands stay; do not rewrite the math.
- Where iOS **behavior** has no twin (8.9 mismatch-is-zero is preserved by the helper; 8.12 exception type becomes Metal `Error`; 16.14 API 31 fallbacks become iOS 16 fallbacks), teach the iOS fact in that pedagogical slot. Do not fake Android diagnostics.

---

## Equivalent progress (must land in `CURRENT_STATE.md` during A2)

Android state was: **95 of 216** complete through **Lesson 9.9**, unresolved **9.10**, frontier **9.10**.

That count assumed the learner already ran the **Android** labs. It is not the iOS state. After the translation, math they already understand stays complete. Chapters whose *subject* is the platform (project, units, scene graph, shader host, frost APIs, sampling APIs) are **not** complete on iOS until they re-read those lessons and run the Swift explorers.

### Stay complete — do not re-read before continuing

These are graphics/math. The iOS HTML will still be updated so excerpts are Swift, but the learner does not need to sit through them again.

| Chapter / lessons | Why they stay complete |
|-------------------|------------------------|
| **Chapter 3** (11 lessons) | Color, alpha, over, luminance, tint, saturation as math |
| **Chapter 4** (11 lessons) | Shapes, corners, paths, masks as geometry |
| **Chapter 5** (12 lessons) | Time, progress, lerp, easing, springs as math. Skim 5.2 / 5.11 / 5.12 later only if an iOS clock API is needed. |
| **Lessons 9.1–9.6** (6 lessons) | Distance, SDF, min/max. Pixel arithmetic is unchanged. |

**iOS-confirmed complete: 40 of 216** (11+11+12+6).

Also still known, but not counted as extra complete lessons: 1.1 / 1.2 / 1.6 / 1.8 vocabulary, Chapter 7 frost *formulas* (18 pt / 0.25 / 0.40), Chapter 8 mix/smoothstep *math*. Those live inside chapters that must be re-read for the iOS project and APIs.

### Must re-read before Lesson 9.10 — platform chapters

These chapters are not “the same lesson with new keywords.” They teach the iOS project, units, scene graph, or GPU host. **Read each of these, in order, on the translated HTML + new lab, before treating 9.10 as the live checkpoint.**

| Order | What to read | Why it is iOS, not math |
|-------|----------------|-------------------------|
| 1 | **Chapter 1 entire** (1.1–1.8) | Creates the SwiftUI project, study background, translucent panel, iPhone 16 Pro experiment. 1.3 and 1.7 are the load-bearing ones; the rest of the chapter is the iOS baseline around them. |
| 2 | **Chapter 2 entire** (2.1–2.9) | Points vs pixels vs `displayScale`, SwiftUI local/parent/screen coordinates. 2.5 is the unit rewrite; the inspector in 2.9 is the iOS API. |
| 3 | **Chapter 6 entire** (6.1–6.11) | **How SwiftUI draws the scene.** Owned `.blur()` vs captured backdrop. No Android Compose phases, no `GraphicsLayer.record`. This chapter is new. |
| 4 | **Chapter 7 entire** (7.1–7.12) | Frost *recipes* are known; the **lab path** is new (owned blur, snapshot crop, saturation matrix on a SwiftUI layer). Re-run the explorers. Do not rebuild the frozen constants. |
| 5 | **Chapter 8 entire** (8.1–8.12) | **Your first Metal shader.** `RuntimeMetalShader`, pixel `fragCoord`, uniforms, compile errors. 8.3–8.8 / 8.11 math is familiar; the host is new. Re-read the chapter as iOS. |
| 6 | **Lessons 9.7–9.9** | `uniform shader` / `eval` / `setInputShader` on Metal. 9.1–9.6 stay complete; these three are the sampling API. |

Then the unresolved checkpoint is again **Lesson 9.10 — Build a displacement field**.

### iOS `CURRENT_STATE.md` fields after A2

Write these exactly (update file lists as explorers appear):

```text
platform: Swift / SwiftUI / Metal (lab pixel-function strings)
test device: iPhone 16 Pro
min OS: iOS 17

learner-confirmed complete: 40 of 216
completed through: Lesson 9.6 — Combine shapes
  (Chapters 3, 4, 5, and Lessons 9.1–9.6 only)

must re-read before the frontier (platform chapters, in order):
  Chapter 1, Chapter 2, Chapter 6, Chapter 7, Chapter 8, Lessons 9.7–9.9

current unresolved checkpoint: Lesson 1.3 — Create LiquidGlassLab
  (first lesson of the iOS on-ramp)

on-ramp then returns the checkpoint to: Lesson 9.10 — Build a displacement field
generated frontier: Lesson 9.10 — Build a displacement field
next planned after the frontier: Lesson 9.11 — Refraction as displaced sampling
```

Do **not** keep “95 of 216 through 9.9.” Do **not** mark 1.3 complete just because the Android 1.3 was complete.

As the learner finishes a must-re-read chapter, increase the count by that chapter’s lesson total and move the checkpoint forward along the on-ramp table. After 9.9 is confirmed on iOS, count is 40+8+9+11+12+12+3 = **95** again, checkpoint **9.10**. That is the equivalent of the old 95, earned on iOS.

---

## Canonical type map

Keep this table in `PLATFORM_MAP.md`. Executors do not invent synonyms.

| Android / Kotlin / Compose / AGSL | iOS |
|-----------------------------------|-----|
| Kotlin | Swift |
| Jetpack Compose | SwiftUI |
| `@Composable fun Foo` | `struct Foo: View` |
| `Modifier` | view modifiers |
| `remember` / `rememberSaveable` | `@State` / `@SceneStorage` |
| `MaterialTheme` / `Surface` / `Text` / `Slider` | small `LabTheme` + `SwiftUI` equivalents |
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
| `RuntimeShader(string)` | `RuntimeMetalShader(string) throws` |
| `ShaderBrush` + `drawRect` | `ShaderRect(shader:)` |
| `setFloatUniform` | `shader.setFloatUniform` (same names) |
| `setInputShader` + `eval` | `setInputShader` + `background.eval` in the lab dialect |
| `IllegalArgumentException` shader log | thrown `Error` whose message is the Metal compiler log |
| `MainActivity` / `setContent` | `@main App` + `WindowGroup` + `LabHost` |
| Android Studio Preview | Xcode `#Preview` |
| Gradle / APK / ADB | Xcode / `.app` / `devicectl` or Run |
| `minSdk` | iOS deployment target |
| `dp` | points |
| Pixel 8 Pro | iPhone 16 Pro |
| AGSL | Metal Shading Language (lab pixel-function string) |
| `safeDrawingPadding` | `.safeAreaPadding()` / `safeAreaInset` |
| API 31 fallbacks (16.14) | iOS 16: frost without runtime Metal shaders |
| Reduced transparency / motion / contrast | `UIAccessibility.isReduceTransparencyEnabled` and siblings (Chapter 11 outline) |

Frozen frost stack (do not rebuild): blur **18 pt**, tint **0.25**, saturation **0.40**, rim **3 pt**, inner band **12 pt** with band blur **6 pt**, shadow blur **12 pt** offset **4 pt**.

---

## What stays vs what changes in an HTML lesson

**Stay:** inline CSS/JS/SVG/Canvas labs, steppers, hidden answers, copyable completion record, orange/navy, teaching coordinates, `file://` standalone rule, light desktop layout.

**Change:**

- Titles, crumbs, “Android connection” / “ANDROID ROUTE” / “Android files” sections.
- Kotlin excerpts → Swift excerpts that match the new explorer.
- AGSL excerpts → the same pixel string (lab MSL). Host glue becomes Swift.
- “Browser versus Android” → “Browser versus iOS”.
- Pixel 8 Pro checklists → iPhone 16 Pro.
- Glossary links whose term names change (`#agsl` can remain as an id until `G1`, then become `#msl` with a redirect heading if needed).

Interactive JS that **displays** Kotlin/AGSL must display Swift/MSL. JS that **simulates** the pixel math stays JS.

---

## Phase A — Bootstrap in place (no docs copy)

Work on the branch you created. All writes in this phase are in `liquid-glass-learning-docs`.

### A1. Confirm branch and add control files

**Reads:** this plan’s Key Decisions + Equivalent progress + type map only (not `AGENTS.md`, not lessons).

**Writes** (all in `liquid-glass-learning-docs/`):

- `IOS_TRANSLATION_PLAN.md` — this plan, copied into the repo so later chats do not depend on a session path.
- `IOS_TRANSLATION_PROMPT.md` — the durable agent prompt (full text in the template section below).
- `TRANSLATION_PROGRESS.md` — ordered step list, `completed: []`, `next_step: A2` after A1 finishes (`A1` if writing these files is all A1 did).
- `PLATFORM_MAP.md` — D1–D8, type map, frost constants, `RuntimeMetalShader` contract, Chapter 6 snapshot rule, context protocol, must-re-read chapter list, test device iPhone 16 Pro.
- `.gitignore` entry if needed so `LiquidGlassLab-iOS` is not invented inside this repo.

**Accept:** those five files exist; `TRANSLATION_PROGRESS.md` points at `A2`; `git status` is on your branch; no second docs folder exists. The user can now open a new chat and paste only `Read liquid-glass-learning-docs/IOS_TRANSLATION_PROMPT.md and execute the next step of the plan.`

**Budget:** tiny.

### A2. Rewrite live progress and entry docs

**Reads:** current `CURRENT_STATE.md`, `NEW_CHAT_PROMPT.md`, `README.md` (small).

**Writes in place:**

- `README.md` — Liquid Glass on iOS; docs stay here; lab is `/Users/rosen/Code/LiquidGlassLab-iOS`; do not create an `ios/` or `android/` directory in this repo. Point at `IOS_TRANSLATION_PROMPT.md` for the resume one-liner.
- `CURRENT_STATE.md` — the **Equivalent progress** block (40 of 216, on-ramp checkpoint 1.3, must-re-read list, frontier 9.10). Platform SwiftUI + MSL. Test device iPhone 16 Pro. File list will grow as Swift explorers appear.
- `NEW_CHAT_PROMPT.md` — “Continue my Liquid Glass on iOS course”; read order uses this repo + `LiquidGlassLab-iOS`; Android delivery section becomes Xcode Preview rules; section 12 matches the new `CURRENT_STATE.md`.

**Accept:** learner progress is 40/216, not 95/216. `TRANSLATION_PROGRESS.md` `next_step` is `A3`.

### A3. Curriculum + handoff nouns

**Reads:** `curriculum/liquid_glass_android_curriculum.md` (44 KB), `liquid_glass_android_handoff.md` (193 lines). Rename **in place** to `liquid_glass_ios_curriculum.md` and `liquid_glass_ios_handoff.md`. Update inbound mentions in README / NEW_CHAT_PROMPT / AGENTS (when those files are edited).

Replace platform nouns and API names. Keep every lesson title’s **graphics** clause. Required retargets:

- 1.3 Create `LiquidGlassLab` as a SwiftUI iOS app on iPhone 16 Pro.
- 2.5 points and scale, not dp.
- Chapter 6 title: **How SwiftUI draws the scene**.
- Chapter 8 title: **Your first Metal shader**; 8.2 compiles a Metal pixel-function string with `RuntimeMetalShader`.
- 15.27 profile on iPhone 16 Pro.
- 16.5 points vs pixels vs UV vs time.
- 16.14 iOS 16 fallbacks.
- Final standard: justify an **iOS** implementation.

**Accept:** grep of `curriculum/` has no `Android`, `Kotlin`, `AGSL`, `Pixel 8`.

Also retarget the progress stanza at the top of the curriculum to the Equivalent progress block (40/216, on-ramp 1.3, must-re-read chapters).

### A4. `USER_PREFERENCES.md` platform bits

**Reads:** `USER_PREFERENCES.md` only.

Swap Android Preview / Kotlin / Pixel sentences for Xcode Preview / Swift / iPhone. Leave explanation-calibration and visualization-target rules.

**Budget:** ~20k tokens. Fine.

---

## Phase B — Translate `AGENTS.md` without eating the window

`AGENTS.md` is ~152 KB (~38k tokens). Do it in **three** slices **in place**. Do not open lesson HTML.

| Step | Slice | What to change |
|------|-------|----------------|
| **B1** | Scope, file naming, lesson requirements, gates through Chapter 3 terminology | Android → iOS; “state when the browser differs from iOS”; Swift target path outside this repo |
| **B2** | Beginner gates, formula gates, remaining teaching rules that mention Kotlin/Android | `Kotlin` → `Swift`; Android Studio Preview → Xcode Preview (light then dark, scrollable, 412×915) |
| **B3** | Delivery / verification / reusable rules that name explorers or AGSL | `RuntimeShader` → `RuntimeMetalShader`; AGSL → MSL; Pixel → iPhone; keep 9.x teaching rules (exact-cell readback, two rulers, named-formula-before-substitution) |

**Accept after B3:** grep `AGENTS.md` for `Android`, `Kotlin`, `AGSL`, `Pixel 8`, `Android Studio` is empty (except a one-line “this fork was translated from the Android course” if useful). Teaching rules otherwise intact.

---

## Phase C — Create `LiquidGlassLab-iOS`

### C1. Xcode iOS 17 SwiftUI app

**Writes:** `/Users/rosen/Code/LiquidGlassLab-iOS`

- iOS App, SwiftUI lifecycle, deployment 17.0, bundle id `com.example.liquidglasslab`.
- Use an Xcode 16 **synchronized root group** so later steps only add `.swift` files on disk.
- `LabApp.swift`, `LabHost.swift` (chapter picker 1–9), `ui/theme/{Color,Theme,Type}.swift` ported from the Android theme.
- `#Preview` convention: light, then dark; 412×915; scrollable.

**Do not** generate explorers yet. Prove the untouched template on Simulator, then replace root content with a three-line baseline (Lesson 1.3’s first proof, even if 1.3 HTML is later).

### C2. `RuntimeMetalShader` + `ShaderRect`

**Reads:** Android `RuntimeShaderExplorer.kt` (pattern only). **Writes:**

- `RuntimeMetalShader.swift` — compile string, named uniforms default 0, `setInputShader` as function-eval, pixel coords y-down.
- `ShaderRect.swift` — SwiftUI representable drawing a full-rect quad.
- A tiny `ShaderSmokeView` that compiles the 8.3 orange program and fills a 140 pt tall rectangle.

**Accept:** orange `half4(0.88, 0.48, 0.18, 1.0)` on device/simulator; a deliberately broken string (`gl_FragCoord`) throws a message containing a line number. This unblocks every Chapter 8–9 step.

**Budget:** small sources. Include Metal snippets in `PLATFORM_MAP.md` after this step so later chats do not re-derive the helper.

---

## Phase D — Glossary and course home

### D1. `course/glossary.html` (~100 KB, ~25k tokens)

One session. Retarget Android/Compose/AGSL terms to iOS/SwiftUI/MSL. Keep portable graphics terms. Add `RuntimeMetalShader`, points, scale, `ShaderRect`. Keep ids stable where possible (`#fragcoord`, `#mix`) so existing lesson hrefs work.

### D2. `liquid-glass-course.html` + tools README

Platform nouns, lab path, chapter 6/8 titles. `tools/verify-lesson.mjs` stays; it is browser-only.

---

## Phase E — Translate generated lessons (the long road)

Each step: read `PLATFORM_MAP.md` + listed HTML in this repo + listed Android Kotlin (+ current iOS chapter screen if it exists). Edit that HTML in place. Write the Swift explorer under `LiquidGlassLab-iOS`. Wire it into `ChapterNNScreen.swift`. Grep the step files.

Hub HTML for a chapter is the **last** step of that chapter.

Must-re-read chapters (1, 2, 6, 7, 8, plus 9.7–9.9) are translated the same way as math chapters. The difference is only **learner progress**: after translation they are unread on iOS. Math chapters 3, 4, 5, 9.1–9.6 stay complete.

### Chapter 1 — ~145k HTML tokens total → 6 steps

Must re-read on iOS. 1.3 and 1.7 are the load-bearing platform lessons.

| Step | HTML | Android Kotlin | Notes |
|------|------|----------------|-------|
| **1A** | 1.1, 1.2 | none required | observation; light noun swap |
| **1B** | **1.3 only** (94 KB) | `MainActivity.kt` (as the *idea* of app entry), `Chapter01Screen.kt` | Full Xcode walkthrough. Rename in title, not filename. |
| **1C** | 1.4, 1.5 | `StudyBackground.kt`, `TranslucentRoundedPanel.kt` | |
| **1D** | 1.6 | none new | alpha mixture math stays |
| **1E** | **1.7 only** | `OpacityExperimentControls.kt`, `Chapter01Screen.kt` | iPhone 16 Pro experiment |
| **1F** | 1.8 + hub | `Chapter01Screen.swift` polish | |

### Chapter 2 — ~138k HTML + 23k Kotlin → 6 steps

Must re-read on iOS. 2.5 (points / scale) and 2.9 (inspector APIs) are load-bearing.

| Step | Lessons | Notes |
|------|---------|-------|
| **2A** | 2.1, 2.2 | `EnlargedPixelGrid`, `XAxisExplorer` |
| **2B** | 2.3, 2.4 | Y-down still true on iOS; `YAxisExplorer`, `BoundsCenterExplorer` |
| **2C** | **2.5 only** | `DensityExplorer` — dp→pt, density→scale |
| **2D** | 2.6, 2.7 | local vs parent/window/screen; `GeometryReader` / convert |
| **2E** | 2.8, 2.9 | inspector |
| **2F** | hub + `Chapter02Screen` | |

### Chapter 3 — ~217k HTML + 83k Kotlin → 8 steps (heaviest HTML)

Pure math. Stays complete. Translate excerpts anyway.

| Step | Lessons | Why split |
|------|---------|-----------|
| **3A** | 3.1, 3.2 | `RgbChannelsExplorer`, `AlphaExplorer` |
| **3B** | 3.3 | 82 KB HTML + `OverOperationExplorer` |
| **3C** | 3.4 | 81 KB + `DrawOrderExplorer` |
| **3D** | **3.5 only** | 113 KB + `PremultipliedRgbaExplorer` (34 KB) |
| **3E** | **3.6 only** | 104 KB + `BrightnessLuminanceExplorer` |
| **3F** | 3.7, 3.8 | contrast + tint |
| **3G** | 3.9, 3.10 | saturation matrix **copied**; blend modes |
| **3H** | 3.11 + hub | `CompositingLaboratory` (48 KB kt) |

### Chapter 4 — ~151k HTML + 79k Kotlin → 7 steps

Pure geometry. Stays complete. Translate excerpts anyway.

| Step | Lessons |
|------|---------|
| **4A** | 4.1, 4.2 |
| **4B** | 4.3, 4.4 |
| **4C** | 4.5, 4.6 | 4.6 has **no** Kotlin cubic explorer — HTML only, do not invent one |
| **4D** | **4.7 + 4.8** careful: `MasksExplorer` is 69 KB kt. If over budget, split 4.8 solo |
| **4E** | **4.9 only** (100 KB HTML + 52 KB kt) |
| **4F** | 4.10, 4.11 |
| **4G** | hub + `Chapter04Screen` |

If 4D still feels large, run 4.8 as **4D2** alone. That is the intended escape hatch.

### Chapter 5 — ~120k HTML + 37k Kotlin → 6 steps

Pure motion math. Stays complete. Translate excerpts anyway.

| Step | Lessons |
|------|---------|
| **5A** | 5.1, 5.2, 5.3 |
| **5B** | 5.4, 5.5, 5.6 |
| **5C** | 5.7, 5.8 | 5.8 merged spring; port `SpringIntuitionExplorer` coefficients as teaching Euler |
| **5D** | 5.9 (redirect only) + 5.10 |
| **5E** | 5.11, 5.12 | `Animatable` continuity; `TargetBasedAnimation` → custom play-time clock |
| **5F** | hub |

`OvershootSettleExplorer` is a stub on Android — port the stub, do not resurrect a lab.

### Chapter 6 — ~142k HTML + 79k Kotlin → **11 lesson steps + hub** (hardest)

**Must re-read entire chapter on iOS.** This is the SwiftUI scene-graph chapter, not a noun swap. One numbered lesson per session. Snapshot architecture must match D5.

| Step | Lesson | Android file |
|------|--------|--------------|
| **6.1** | Composition, layout, drawing | `CompositionLayoutDrawingExplorer.kt` |
| **6.2** | Draw order and ownership | `DrawOrderOwnershipExplorer.kt` |
| **6.3** | Graphics layers | `GraphicsLayersExplorer.kt` |
| **6.4** | Owned blur | `RenderEffectOwnedContentExplorer.kt` |
| **6.5** | Backdrop problem | `BackdropProblemExplorer.kt` |
| **6.6** | Record the background | `RecordBackgroundExplorer.kt` |
| **6.7** | Crop the correct region | `CropCorrectRegionExplorer.kt` (41 KB) |
| **6.8** | Keep the sample current | `KeepSampleCurrentExplorer.kt` (**57 KB kt** — solo) |
| **6.9** | Avoid feedback loops | `AvoidFeedbackLoopsExplorer.kt` |
| **6.10** | Offscreen cost | `OffscreenCostExplorer.kt` |
| **6.11** | Two-layer scene | `TwoLayerSceneArchitectureExplorer.kt` |
| **6H** | hub `lesson-how-android-draws-the-scene.html` (title becomes SwiftUI) | `Chapter06Screen` |

### Chapter 7 — ~187k HTML + 65k Kotlin → 8 steps

Must re-read on iOS (lab path is new). Do not rebuild frost math.

| Step | Lessons |
|------|---------|
| **7A** | 7.1, 7.2 |
| **7B** | 7.3, 7.4 + scaling companion HTML |
| **7C** | 7.5, 7.6 |
| **7D** | 7.7, 7.8 |
| **7E** | 7.9, 7.10 (explorer, not the companion) |
| **7F** | **7.10 companion HTML only** (155 KB) |
| **7G** | 7.11, 7.12 |
| **7H** | hub |

### Chapter 8 — ~143k HTML + 36k Kotlin → 7 steps

**Must re-read entire chapter on iOS.** Requires C2. Shader **bodies** copy-paste; the host is Metal.

| Step | Lessons | Android files |
|------|---------|---------------|
| **8A** | 8.1 | `ShaderIdeaExplorer` (CPU grid) |
| **8B** | 8.2, 8.3 | `RuntimeShaderExplorer`, `FixedColorShaderExplorer` |
| **8C** | 8.4, 8.5 | `FragCoordExplorer`, `ResolutionShaderExplorer` — 80 px; resolution in **pixels** |
| **8D** | 8.6, 8.7, 8.8 | UV, scalars, `p = uv - 0.5` |
| **8E** | 8.9, 8.10 | uniforms + time; unread slot stays 0 |
| **8F** | 8.11, 8.12 | mix/smoothstep numbers unchanged; `gl_FragCoord` error workflow |
| **8H** | hub `lesson-your-first-agsl-shader.html` | `Chapter08Screen` |

### Chapter 9 generated — ~152k HTML + 34k Kotlin → 7 steps

9.1–9.6 stay complete (SDF math). **9.7–9.9 must be re-read** (eval / input shader). 9.10 stays the post-on-ramp checkpoint. Do not edit SDF math. 9.2–9.4 Android files were “confirmed excellent” — port line-for-line.

| Step | Lessons |
|------|---------|
| **9A** | 9.1 |
| **9B** | 9.2, 9.3 |
| **9C** | 9.4, 9.5 |
| **9D** | 9.6 |
| **9E** | 9.7, 9.8 | `setInputShader` + `eval`; no wrap |
| **9F** | 9.9, 9.10 | displacement contract unchanged (W = (0.65, 0.20), dispLen 0.10, …) |
| **9H** | hub | `Chapter09Screen` |

Lesson 9.10 remains **not complete**. Do not restore 95/216. Do not mark 9.10 complete. The live checkpoint after A2 is **1.3** (iOS on-ramp), then the must-re-read list, then 9.10.

---

## Phase F — Close the fork

### F1. Leftover-noun audit

Repo-wide grep in **`liquid-glass-learning-docs` + `LiquidGlassLab-iOS` only**:

`Android`, `Kotlin`, `Compose`, `AGSL`, `RuntimeShader` (except the mapping sentence “Android RuntimeShader ↔ RuntimeMetalShader” in `PLATFORM_MAP.md`), `Pixel 8`, `Jetpack`, `Gradle`, `ADB`, `APK`, `minSdk`, `Android Studio`, `MainActivity`, `setContent`, `composable`.

Fix hits in one or two follow-up sessions grouped by folder if the first F1 chat gets large. Do not open PNG binaries.

### F2. Optional filename sweep

Rename platform-specific HTML (`create-the-android-project`, `pixel-8-pro-experiment`, `how-android-draws`, `your-first-agsl-shader`) and rewrite hrefs. Run `node tools/verify-lesson.mjs <file> --links-only` on every HTML file.

Skip F2 if you want zero link risk; titles already say iOS.

### F3. Link + screenshot check for translated HTML

For each chapter, after that chapter’s hub step (or in F3 as a batch of `--links-only` runs), verify local hrefs. Recapture 1920×1080 screenshots only for lessons whose visible diagrams changed. Do not treat old 9.10 PNGs as iOS-lab device proof.

### F4. Xcode build

`xcodebuild -scheme LiquidGlassLab -destination 'platform=iOS Simulator,name=iPhone 16 Pro' build`

Fix compile errors in a **new** chat that only opens the failing Swift files.

### F5. Align live snapshot

Confirm `CURRENT_STATE.md` and section 12 of `NEW_CHAT_PROMPT.md` still match Equivalent progress (40/216, on-ramp 1.3, must-re-read list, frontier 9.10) and that Swift paths have replaced Kotlin paths. Do not restore 95/216.

---

## Suggested session order

```
A1 A2 A3 A4
B1 B2 B3
C1 C2
D1 D2
1A 1B 1C 1D 1E 1F
2A … 2F
3A … 3H
4A … 4G
5A … 5F
6.1 … 6.11 6H
7A … 7H
8A … 8H
9A … 9H
F1 [F2] F3 F4 F5
```

That is about **70** independently executable chats. It is slower than “translate Chapter 3,” and it is the version that does not blow the 400k window.

Do not parallelize two steps that edit the same `ChapterNNScreen.swift` or `PLATFORM_MAP.md`. Different chapters may be parallelized only after C2 and that chapter’s previous step has merged.

---

## Acceptance for a lesson step

A step is done when all of these hold:

1. iOS HTML teaches the same graphics causal chain as the Android HTML (same numbers, same teaching pixel).
2. Code blocks compile as the Swift/MSL the explorer uses (no leftover Kotlin raw strings in visible `<pre>` / challenge editors).
3. Explorer Swift is a structural port of the listed Kotlin file (same sliders, same defaults, same overlays).
4. `#Preview` light then dark, 412×915, longest state scrollable.
5. Grep of **this step’s files** is clean of Android platform nouns (except historical “translated from” notes, none required).
6. Chapter screen includes the new explorer.
7. Browser-vs-device note names **iOS**, not Android.

Device run of every explorer is **not** required in the HTML-only steps. C2, 1B, 1E, 8B, 9E, and F4 are the sessions that must actually build. Prefer a device/simulator check at the end of each **chapter** hub step if the environment has Xcode.

---

## `IOS_TRANSLATION_PROMPT.md` (write this in A1)

User one-liner for every later chat:

```text
Read liquid-glass-learning-docs/IOS_TRANSLATION_PROMPT.md and execute the next step of the plan.
```

File contents:

```text
You are executing the Liquid Glass Android → iOS translation.

Docs (edit in place, on the user’s git branch):
  /Users/rosen/Code/learning-docs/liquid-glass-learning-docs
iOS lab (create/write only here):
  /Users/rosen/Code/LiquidGlassLab-iOS
Android lab (read-only 1:1 source):
  /Users/rosen/Code/LiquidGlassLab

Read, in this order, and then do exactly one step:

1. This file.
2. TRANSLATION_PROGRESS.md — honor `next_step`. Do not skip. Do not run a later id.
3. IOS_TRANSLATION_PLAN.md — only the section for that step id, plus Key Decisions / type map if PLATFORM_MAP.md is missing.
4. PLATFORM_MAP.md (required after A1).
5. CURRENT_STATE.md — honor iOS-equivalent learner progress (40/216 after A2). Never restore 95/216.
6. Only the files that step lists as reads.

Execute `next_step`. Follow that step’s writes and acceptance box.

Rules:
- One step per chat. Stop when that step is accepted.
- Do not copy this docs folder. Edit in place.
- Do not change graphics pedagogy, formulas, teaching pixels, or HTML/JS labs.
- Swap platform nouns and APIs using PLATFORM_MAP.md only.
- Shader pixel strings stay 1:1 (lab MSL). Host glue is Swift.
- Test device is iPhone 16 Pro. Do not substitute another model.
- Never use ultraThinMaterial / glassEffect as the glass implementation.
- Do not open AGENTS.md unless the step is B1, B2, or B3.
- Do not open other chapters or verification PNGs.
- After edits, grep just this step’s files for Android/Kotlin/Compose/AGSL/Pixel 8.
- Then update TRANSLATION_PROGRESS.md: append the finished id to `completed`, set `next_step` to the following id in the plan’s session order, write a two-line note of what changed.
- Reply with: step id finished, next_step now, and the user one-liner to paste in a new chat.

If TRANSLATION_PROGRESS.md says next_step is DONE, do not edit. Say the translation is complete.
```

## `TRANSLATION_PROGRESS.md` shape (write this in A1)

```text
# iOS translation progress

next_step: A2

completed:
  - A1

session_order: A1 A2 A3 A4 B1 B2 B3 C1 C2 D1 D2 1A 1B 1C 1D 1E 1F 2A 2B 2C 2D 2E 2F 3A 3B 3C 3D 3E 3F 3G 3H 4A 4B 4C 4D 4E 4F 4G 5A 5B 5C 5D 5E 5F 6.1 6.2 6.3 6.4 6.5 6.6 6.7 6.8 6.9 6.10 6.11 6H 7A 7B 7C 7D 7E 7F 7G 7H 8A 8B 8C 8D 8E 8F 8H 9A 9B 9C 9D 9E 9F 9H F1 F2 F3 F4 F5

notes:
  - A1: wrote prompt, plan copy, progress, PLATFORM_MAP.md
```

After F5, set `next_step: DONE`.

---

## Risks worth not papering over

1. **SwiftUI `Canvas` is in points; Android Compose `Canvas.size` is pixels.** Shader resolution must use pixels or 8.4–9.10 numbers drift. The helper and every shader explorer must multiply by `displayScale`.
2. **`.blur()` vs `BlurEffect` kernels are not the same.** Chapter 7 already refuses to claim GPU weights. Keep that honesty. TileMode `Decal/Mirror/Repeated` will be the weakest 1:1 in 7.3; implement the closest Metal/CI sampler wrap and say so in one sentence.
3. **`eval` as a function call** is required for 9.8. Texture sampling with clamp would silently “fix” negative reads and break the lesson.
4. **Chapter 6 snapshotting** is the largest behavioral gap. Budget one lesson per session and share one `BackdropRecorder` helper after 6.6 so 6.7–6.11 do not each invent a different capture API.
5. **Compose `Color.luminance` / saturation matrix** must be copied, not replaced with UIKit/Core Image defaults, or 3.6–3.9 and 7.6 will disagree with the HTML arithmetic.

---

No remaining product fork: the test device is iPhone 16 Pro, and runtime lab Metal (D4) is what keeps Chapters 8–9 1:1 without rewriting the graphics content.
