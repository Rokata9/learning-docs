# Photos: Transition-to-Tiled-Engine Reconstruction Curriculum

**Status:** master plan only. This document intentionally contains no project implementation code.  
**Course plan version:** **2.0 — 100% learner-authored implementation**.  
**Course size:** **216 lessons** arranged as **24 chapters × 9 lessons**.  
**Starting progress:** **0 of 216 lessons completed**. Completion changes only after explicit learner confirmation.  
**Primary target:** the attached `Photos-master` Android project on a physical Pixel 8 Pro.  
**Working rule:** the original `tiled-engine` module is absent from the rebuild branch; a read-only baseline remains outside that branch for evidence and final comparison. Every new Kotlin, C++, CMake, Gradle, test, and Android-project helper-script line is authored and typed by the learner.

---

## 1. What this course actually covers

The visible grid-to-detail experience is not one transition. It is three cooperating systems:

1. **Animated view handoff.** `transition-framework` clones the tapped grid `ImageView`, moves the clone in a full-window overlay, changes its bounds and image matrix, and fades a black scrim.
2. **Temporary transition bitmap.** `LoadBitmapWithTimeout.kt` races a screen-sized request against a smaller fallback. This bitmap keeps the photo visible while the native viewer starts.
3. **Native tiled viewer.** `TiledImageView`, JNI, C++, region decoders, EGL, and OpenGL ES eventually render zoom-appropriate image regions inside one `SurfaceView`.

In this plan, **JNI** means Java Native Interface, the bridge between Kotlin/Java and C++. **EGL** is the platform connection that gives OpenGL ES a context and Android window surface. **OpenGL ES** is the mobile graphics API used to draw textured quads. A **GPU** is the graphics processing unit that executes that drawing work. A **SurfaceView** is an Android view whose pixels come from a separate compositor layer rather than the normal view canvas.

The course teaches all three because the handoff cannot be understood by studying C++ alone. Roughly three quarters of the implementation work remains focused on the native image engine.

The course targets Google Photos-like public behavior and performance discipline. It does **not** claim access to Google's private implementation. A similarity to Google Photos is a design hypothesis until behavior, traces, or public documentation support it.

---

## 2. Source-grounded corrections and decisions

These points are explicit because the current source and the informal description are not perfectly aligned.

| Topic | What the attached source shows | Course decision |
|---|---|---|
| Meaning of **HQ** | The active detail path requests a drawable at the detail view's target width and height. It is not the byte-for-byte original image. | Call it the **screen-resolution transition image** after the introductory lessons. Reserve **full-resolution source** for the original file and **zoom-appropriate tile** for native output. |
| Timeout | `ChainedBitmapRequestOptions` defaults to **75 ms**. `DEBUG_DELAY_HQ = true` delays successful HQ delivery by **2,000 ms**, so the current build deliberately exercises LQ. | Teach the race with the debug delay, then disable that delay for production measurements. |
| LQ size | The fallback targets one quarter of the target width and height, then rounds to dimensions that preserve the source aspect ratio exactly. | Keep aspect-ratio preservation as a separate lesson; do not describe LQ as an arbitrary thumbnail. |
| 'Highest quality' | The tiled engine does not need to decode the whole original image at once. It selects a pyramid level and visible regions appropriate to the current zoom. | Define quality relative to screen coverage. Level zero is used only when zoom requires source-resolution detail. |
| `transitionName` argument | `PhotosListFragment` passes an empty string, `PhotoDetailFragment` stores the argument, but the active key is the entry file name. The argument is otherwise unused. | Treat this as a real API inconsistency to remove or make meaningful during final hardening. |
| Navigation description | `tfNavigateToDestination` is documented as add/hide navigation, but the current implementation performs `add` without an explicit `hide`. | Teach the actual overlaying behavior first, then correct either the documentation or implementation after testing. |
| Overlay creation | Overlay setup exists in both `TransitionExtensions.kt` and `TransitionExecutor.kt`, using different attachment calls. | Make this a transition-framework audit item rather than silently assuming both paths are equivalent. |
| Return after paging | The current app animates back only from the entry photo. A different focused photo uses `tfReset`, restores the old thumbnail, and pops plainly. | Preserve current correctness first. Design source-cell lookup and grid scrolling as a separately scoped fidelity improvement. |
| Native evidence | `TILED_ENGINE_STATE.md` marks the core as device-validated, but zero-copy and several recent fixes still require device A/B or retest evidence. | Every lesson and parity check carries an evidence label: **reasoned**, **compile-verified**, **device-validated**, or **measured**. |

The unused `ImageView.loadTransitionImage` extension also asks for a one-millisecond timeout, but the active `PhotoDetailFragment` path does not call that extension. The course follows the active path and later removes or tests dead alternatives.

---

## 3. End state

At the end of Lesson 24.9, the learner should be able to:

- explain the tap-to-clone, clone-to-placeholder, and placeholder-to-surface sequence using exact objects, bounds, threads, and callbacks;
- read and write the C++ used by this engine without becoming a general-purpose C++ language expert first;
- explain raster images, channel storage, row stride, region decoding, orientation, texture sampling, pyramid levels, and visible tile selection;
- rebuild the JNI bridge, native engine lifecycle, render/decode threads, EGL/OpenGL renderer, scheduler, tile cache, gesture pipeline, and multi-photo filmstrip;
- distinguish correctness claims from compile results, device observations, and measured performance;
- defend why each production mechanism exists and identify the simpler temporary teaching mechanism that it replaced.

---

## 4. Rebuild protocol

### 4.1 Baseline and deletion

1. Preserve the attached ZIP unchanged.
2. Record the current app behavior and verification commands before deletion.
3. Create an immutable Git tag or external archive for the original source.
4. Create a rebuild branch.
5. Delete the complete `tiled-engine/` directory from that branch.
6. Keep `app/` and `transition-framework/`. They define the app-facing and transition-facing contracts the new module must eventually satisfy.
7. Leave the Android project's existing learning chapters physically untouched, but do not read, link, import, or rely on them during this course. This separate learning repository is the canonical teaching path.
8. Recreate the native module only through the numbered lessons.

The immutable baseline does not violate the deletion requirement. It is not compiled into the rebuild, copied from, or used as a source of code to transcribe. It exists so lesson contracts can be checked against the original behavior and so the final engine can be compared against evidence instead of memory.

### 4.2 Original-code quarantine

- The learner may inspect the existing `app/` and `transition-framework/` code because those modules remain part of the working application and define real call sites.
- The erased `tiled-engine` source remains sealed in the immutable baseline until the final discrepancy review in Lesson 24.9.
- Before that final review, lessons may provide required API names, signatures imposed by existing call sites, invariants, input/output examples, diagrams, and natural-language algorithm steps. They do not provide original native function bodies or near-transcribable replacements.
- The instructor may inspect the sealed baseline to verify completeness, derive behavioral tests, and distinguish source-proven facts from hypotheses. The learner does not use that access as an implementation shortcut.
- The Android project's old learning chapters are non-canonical for this course. No lesson depends on them, and no navigation in this repository links to them.

### 4.3 Functional milestones

The course intentionally uses temporary scaffolding. Every temporary path is named, tested, and later deleted. The production solution is not simplified merely because the explanation starts small.

---

## 5. 100% learner-authored implementation rule

**Manual means authored, not merely typed.** Copying or transcribing a generated implementation would not satisfy this rule.

The learner writes every new line added to the Android project during the course, including:

- Kotlin and C++ production code;
- CMake and Gradle configuration;
- JNI declarations and registration code;
- unit, integration, instrumentation, and native tests;
- benchmark, tracing, and project helper scripts;
- comments that explain project behavior.

The instructor supplies the learning material, diagrams, behavior contracts, exact test cases, expected outputs, API documentation pointers, code review, and progressively narrower hints. The instructor does **not** supply copy-paste-ready project files, complete replacement functions, complete test bodies, or implementation patches.

Required signatures that are already imposed by existing Kotlin call sites, Android framework interfaces, JNI naming rules, or library APIs may be shown. Short isolated syntax examples may also be shown when they teach one C++ or Android language feature. Those examples must not solve the current project task by substitution.

When the learner is blocked, help follows this order:

1. restate the invariant and trace one concrete value;
2. identify the failing layer, file, or API boundary;
3. give a conceptual hint;
4. diagnose the learner's submitted code line by line;
5. give the smallest syntax-only example needed to remove the block.

The learner still writes the corrected project code. The sealed original implementation is opened only after the independent capstone, for comparison rather than copying.

Every lesson carries a **learner-authored** marker. For a coding lesson, this means the learner authors all code. For an observation, trace, or design lesson, this means the learner creates the required evidence or document.

---

## 6. Required format for every lesson

Each lesson follows the Liquid Glass structure, adapted to a real codebase and the learner-authorship rule:

1. **Where this lesson fits.** Name the previous established fact and the single new idea.
2. **What will visibly or measurably change.** State the expected app, test, build, log, or trace result before terminology.
3. **Terms.** Define every new C++, image, operating-system, Android, GPU, and mathematical term.
4. **Interactive explanation.** Use a stepper, pixel inspector, buffer view, coordinate widget, queue timeline, or small control-flow diagram.
5. **Trace one real value.** Show exact input, operation, intermediate state, output, and later consumer.
6. **Current-project evidence.** Quote only the small relevant excerpt from the surviving `app/` or `transition-framework/` code, or state a black-box contract derived from the sealed baseline. State what the evidence proves and what still needs device or trace evidence.
7. **Predict.** The learner states the expected result before changing or running anything.
8. **Learner task and help boundary.** Name exact files, required behavior, allowed APIs, invariants, forbidden shortcuts, and what the learner must author.
9. **Build and run.** Give exact build, unit-test, device, log, or trace actions.
10. **Explain the result.** Trace the cause rather than merely naming an API.
11. **Coding challenge.** Require one small learner-authored change using only introduced ideas. The lesson does not include its project-ready answer.
12. **Exercises and hidden answers.** Include two to four questions, with at least one misconception-targeting diagnostic.
13. **Completion record.** Update progress, evidence status, changed files, learner commit, assistance level, and the next lesson.
14. **Navigation.** Link the chapter hub and adjacent lessons.

Sequence-heavy mechanisms use a Back/Next stepper with exactly one state change per step. Image and graphics lessons expose intermediate buffers, valid bounds, coordinate origins, row stride, texture storage, and transparency instead of showing only the final composite.

---

## 7. Learning-repository structure

The learning artifacts live in a separate repository named `photos-tiled-engine-learning-docs/`. The Android Studio project remains separate.

- `photos-tiled-engine-course.html` — course home and current frontier.
- `curriculum/photos_transition_tiled_engine_curriculum.md` — this master plan.
- `curriculum/photos_transition_tiled_engine_handoff.md` — stable decisions, progress truth, and the next lesson.
- `LEARNER_AUTHORSHIP.md` — the exact boundary between instruction and learner-written project code.
- `course/glossary.html` — one canonical definition per recurring term.
- `course/chapters/chapter-NN/` — one chapter hub and one standalone HTML file per prepared lesson.
- `course/templates/` — reusable lesson, chapter-hub, and completion-record templates.
- `learner-work/implementation-log.md` — learner commits, changed Android files, evidence, and help level.
- `learner-work/` subdirectories — exercises, observations, screenshots, traces, measurements, and exports.
- `tools/` — learning-document verification helpers only. These tools do not modify the Android project.

The separate repository contains no copy of `tiled-engine` and no Android implementation patch. Existing learning chapters inside the Android project are ignored. This repository is the sole canonical course sequence.

Every HTML lesson is standalone, light-theme only, desktop-first, and verified at the intended wide desktop size. After this initial repository package, lesson archives contain only files created or changed for that lesson. There is no generated Android-code archive because all Android-project changes are written manually by the learner.

---

## 8. Milestone map

| End of chapter | Concrete state |
|---|---|
| 1 | Original module erased; app builds with an inert API-compatible placeholder. |
| 2 | Full transition and temporary-image handoff can be narrated precisely. |
| 5 | C++ syntax, data models, lifetime, and resource ownership are understood. |
| 6 | Kotlin creates and destroys a real native engine through JNI. |
| 10 | Native render thread presents a controlled OpenGL frame in `SurfaceView`. |
| 11 | One static decoded photo is rendered by the native GPU path. |
| 13 | Tile-pyramid geometry is pure and fully tested. |
| 16 | Large photos render through region-decoded tiles with deep zoom. |
| 18 | Memory is bounded and tile refinement is visually seamless. |
| 20 | Gestures and motion-aware scheduling work and are traceable. |
| 21 | Focused photo plus neighbors page inside one surface. |
| 22 | Formats, lifecycle, and failure fallbacks are hardened. |
| 23 | Zero-copy is implemented behind strict runtime gates and measured by controlled comparison. |
| 24 | End-to-end transition fidelity, parity, performance, and independent understanding are demonstrated. |

---

## 9. Full 216-lesson curriculum map

**Authorship key:** every numbered lesson carries the learner-authored marker shown in its title. The learner creates the required artifact and authors every Android-project code or configuration change. The instructor supplies teaching material, contracts, review, and hints—not project-ready implementations.

### Chapter 1 — Preserve, erase, and establish the rebuild baseline

**Purpose:** Create a trustworthy before-state, remove the native module from the working branch, and restore only an inert compile-time shell.

1. **1.1 [Learner] — Record the current user journey.** Capture the grid tap, forward transition, first live tiled frame, zoom, paging, rotation, and both back-navigation outcomes before changing the project.
2. **1.2 [Learner] — Draw the three-module boundary.** Separate responsibilities owned by `app`, `transition-framework`, and `tiled-engine`, including the exact calls that cross each boundary.
3. **1.3 [Learner] — Create an evidence matrix.** Classify every current feature as device-validated, compile-verified only, or deliberately deferred so the rebuild never turns an assumption into a fact.
4. **1.4 [Learner] — Freeze an immutable baseline.** Keep the attached ZIP and create a Git tag or external archive that can be compared later without leaving the original module in the working tree.
5. **1.5 [Learner] — Seal the original native implementation.** Record that the learner will not inspect or transcribe the erased module until the final discrepancy review, while the instructor may use the baseline only to derive contracts, tests, and evidence limits.
6. **1.6 [Learner] — Delete `tiled-engine` and observe the failure.** Remove the entire module, run the normal build, and record the first configuration error rather than guessing what broke.
7. **1.7 [Learner] — Inventory every broken reference.** List the Gradle include, app dependency, XML class name, Kotlin imports, and runtime expectations that pointed at the erased module.
8. **1.8 [Learner] — Recreate a blank Android library module.** Restore only the module identity, manifest, and build configuration; do not restore the image engine or copy source from the reference.
9. **1.9 [Learner] — Restore an inert API-compatible view.** Make the application compile with a placeholder `TiledImageView` whose methods do nothing, proving that the app/native contract has been identified.

**Chapter checkpoint:** The project builds again, but the detail screen intentionally has no native image rendering. The original module remains absent from the working tree.

### Chapter 2 — Trace the grid-to-detail transition before native rendering

**Purpose:** Understand the complete visible handoff that surrounds the C++ engine, without treating the animated clone, transition bitmap, and tiled surface as the same object.

1. **2.1 [Learner] — Follow the thumbnail click.** Trace `onPhotoThumbImageClicked` from the tapped grid `ImageView` through element registration, scrim creation, transition specification, and fragment navigation.
2. **2.2 [Learner] — Distinguish the three image views.** Identify the grid original, the overlay clone that animates, and the destination `transitionImage`; state which drawable and bounds each one owns at each moment.
3. **2.3 [Learner] — Understand the overlay and scrim.** Explain where the full-window overlay lives, why the clone is moved there, and how the black scrim replaces the source screen during the forward motion.
4. **2.4 [Learner] — Read the transition state holder.** Follow `Idle`, `Preparing`, and `Running`, the activity-scoped holder, weak references, saved alpha values, and configuration-change cleanup.
5. **2.5 [Learner] — See how start and end states become animation.** Trace the clone's start-state mutation, `beginDelayedTransition`, end-state mutation, and AndroidX Transition's measurement of the difference.
6. **2.6 [Learner] — Trace one pixel through center-crop to fit-center.** Use the real thumbnail and detail bounds to show how one source point is cropped in the grid and then centered without cropping in the detail view.
7. **2.7 [Learner] — Model the HQ/LQ request race.** Separate the active 75 ms timeout, the quarter-target low-quality request, exact aspect-ratio preservation, and the current two-second debug delay that forces the fallback path.
8. **2.8 [Learner] — Explain the placeholder-to-surface handoff.** Trace transition end: copy clone drawable and matrix, show the destination `ImageView`, reveal the `SurfaceView` behind it, start the engine, then hide the placeholder on `onReady`.
9. **2.9 [Learner] — Build the return-policy state table.** Explain why return animation is allowed only on the entry photo without recreation, why paging or rotation uses a plain pop, and what source-cell lookup is still missing for full Photos-style fidelity.

**Chapter checkpoint:** The learner can narrate the complete tap-to-placeholder and placeholder-to-surface sequence without mentioning C++ as a black box that 'loads the image.'

### Chapter 3 — C++ first contact: compilation, values, and control flow

**Purpose:** Learn only the C++ syntax needed to express small deterministic calculations before touching JNI, threads, or graphics APIs.

1. **3.1 [Learner] — From source file to shared library.** Distinguish source text, compilation, object files, linking, and the final native `.so` library loaded by Android.
2. **3.2 [Learner] — Write and call one function.** Understand a function name, parameters, body, return type, call site, input value, and returned output.
3. **3.3 [Learner] — Meet the scalar types.** Use integers, floating-point numbers, booleans, and fixed-width integer types; explain what kind of value each stores.
4. **3.4 [Learner] — Separate integer and floating-point division.** Trace image dimensions through both forms and see why truncation can change tile counts or aspect-ratio calculations.
5. **3.5 [Learner] — Read expressions in evaluation order.** Follow arithmetic, comparisons, parentheses, and assignment as explicit input-to-output operations.
6. **3.6 [Learner] — Choose with `if` and `else`.** Turn one boolean condition into two named scenarios and trace which branch changes the result.
7. **3.7 [Learner] — Repeat with loops.** Use a counted loop to visit image rows or tile columns and identify the changing loop variable on every iteration.
8. **3.8 [Learner] — Understand local scope.** See when a local value begins to exist, where it may be used, and when its lifetime ends.
9. **3.9 [Learner] — Complete the first pure numeric checkpoint.** Manually implement and test a tiny image-dimension calculation using only the language ideas introduced in this chapter.

**Chapter checkpoint:** The learner can read and write a small pure C++ function and explain every stored value and branch.

### Chapter 4 — C++ data models: headers, structures, and indirection

**Purpose:** Build the vocabulary used by `geometry.h`, tile records, decode requests, and renderer inputs.

1. **4.1 [Learner] — Use a namespace.** Explain how a namespace groups engine names and prevents unrelated libraries from defining the same identifier.
2. **4.2 [Learner] — Group related values in a `struct`.** Model one rectangle or image size as named fields instead of unrelated positional numbers.
3. **4.3 [Learner] — Separate headers from implementation files.** State what a `.h` file promises and what a `.cpp` file implements, including why multiple files include the same declarations.
4. **4.4 [Learner] — Distinguish declaration from definition.** Identify the promise that a function exists and the one location that supplies its executable body.
5. **4.5 [Learner] — Represent states with `enum class`.** Replace unlabelled integers with named tile states such as empty, queued, decoded, uploaded, and failed.
6. **4.6 [Learner] — Use `const` as a guarantee.** Mark values and methods that must not mutate their input or object state, then identify what the compiler can reject.
7. **4.7 [Learner] — Pass an object by reference.** Explain that a reference is another name for an existing object and trace whether a function may modify that object.
8. **4.8 [Learner] — Use a pointer and handle null.** Explain that a pointer stores an address, show what null means, and identify the check required before dereferencing.
9. **4.9 [Learner] — Store a variable-size collection in `std::vector`.** Follow vector size, element access, growth, and ownership for a list of tiles or draw quads.

**Chapter checkpoint:** The learner can read a small header containing structs, an enum, references, pointers, and a vector without treating punctuation as magic.

### Chapter 5 — C++ lifetime and resource ownership

**Purpose:** Understand who releases native resources and why the engine avoids unmanaged ownership across threads and API boundaries.

1. **5.1 [Learner] — Separate automatic and dynamic lifetime.** Compare an object destroyed at scope exit with an object whose lifetime extends beyond the current function.
2. **5.2 [Learner] — Follow constructors and destructors.** Trace object creation, field initialization, and the cleanup that runs when the object dies.
3. **5.3 [Learner] — Learn RAII.** Define Resource Acquisition Is Initialization as tying a resource's lifetime to an owning C++ object so cleanup follows scope exit.
4. **5.4 [Learner] — Own one object with `std::unique_ptr`.** Model exclusive ownership and transfer that ownership without copying the resource.
5. **5.5 [Learner] — Share lifetime with `std::shared_ptr`.** Explain why a decoded image or tile may remain alive while queued work and the render thread both hold references.
6. **5.6 [Learner] — Observe without owning using `std::weak_ptr`.** Prevent an observer from extending an object's lifetime and check whether the object still exists before use.
7. **5.7 [Learner] — Move instead of copying.** Trace a buffer or resource wrapper as ownership is transferred into a queue without duplicating its contents.
8. **5.8 [Learner] — Return failure without hidden exceptions.** Compare nullable pointers, booleans, and optional values as explicit failure contracts across the engine and JNI boundary.
9. **5.9 [Learner] — Build the native ownership ledger.** Assign one owner and one release point to file descriptors, memory mappings, Android native windows, decoders, pixel buffers, textures, and Java global references.

**Chapter checkpoint:** Every native resource in the planned engine has a named owner, transfer rule, and cleanup event.

### Chapter 6 — Android native build and JNI boundary

**Purpose:** Reconnect Kotlin and C++ through the smallest auditable native engine shell.

1. **6.1 [Learner] — Connect Gradle to CMake.** Explain how the Android library module asks the Android Gradle Plugin to invoke CMake for native sources.
2. **6.2 [Learner] — Define one CMake target.** Identify the shared-library target, its source list, include paths, linked Android libraries, language standard, and warning policy.
3. **6.3 [Learner] — Understand an ABI.** Define an Application Binary Interface as the machine-level calling and data-layout contract, then distinguish the project's four Android CPU targets.
4. **6.4 [Learner] — Load the native library.** Trace class initialization through `System.loadLibrary` to Android's dynamic loader and the resulting native symbols.
5. **6.5 [Learner] — Meet JNI, `JNIEnv`, and `JavaVM`.** Define the Java Native Interface and separate the thread-local environment pointer from the process-wide virtual-machine handle.
6. **6.6 [Learner] — Cross the boundary with primitive values.** Trace an integer, boolean, and double from Kotlin native declarations into a C++ entry function and back.
7. **6.7 [Learner] — Use an opaque engine handle.** Store a native engine address in a Kotlin `Long` without exposing C++ object layout, then validate it before each call.
8. **6.8 [Learner] — Call Kotlin from a native thread.** Create and release a Java global reference, cache callback method identifiers, attach a native thread, invoke the callback, and detach safely.
9. **6.9 [Learner] — Run the create-start-destroy checkpoint.** Build all configured Application Binary Interfaces (ABIs) with zero native warnings and prove that one engine object starts and shuts down without rendering.

**Chapter checkpoint:** The app owns a real C++ engine object through a thin JNI pipe, but the engine still produces no pixels.

### Chapter 7 — Image basics: pixels, channels, rectangles, and memory

**Purpose:** Build the minimum image-processing model needed to decode and upload pixel regions correctly.

1. **7.1 [Learner] — Treat a raster image as a grid.** Define raster as a rectangular grid of addressable sample locations and distinguish width, height, row, and column.
2. **7.2 [Learner] — Separate pixel, sample, and channel.** Define the exact stored object each word refers to and avoid using 'pixel value' when four channel values are actually present.
3. **7.3 [Learner] — Read 8-bit RGBA.** Trace red, green, blue, and alpha values from 0 through 255 and calculate the four-byte storage cost of one pixel.
4. **7.4 [Learner] — Calculate a pixel byte offset.** Follow one `(x, y)` location into a linear byte array using row position, column position, and four channels.
5. **7.5 [Learner] — Understand row stride.** Define stride as the number of bytes between the starts of adjacent rows and show why it may exceed visible width times four.
6. **7.6 [Learner] — Use half-open rectangle bounds.** Represent a region with an included left/top edge and excluded right/bottom edge so width and iteration counts stay unambiguous.
7. **7.7 [Learner] — Allocate and release a pixel buffer.** Calculate required bytes, handle allocation failure, initialize the memory, and bind cleanup to ownership.
8. **7.8 [Learner] — Generate a native test pattern.** Fill a small RGBA buffer with controlled color blocks so later upload and orientation errors are visible immediately.
9. **7.9 [Learner] — Define the decoded-region contract.** Specify logical bounds, output width and height, row stride, pixel format, ownership, and success or failure for one decoded tile.

**Chapter checkpoint:** The learner can locate and explain any channel byte in a small image buffer and can state the exact bounds represented by a decoded region.

### Chapter 8 — SurfaceView and Android frame ownership

**Purpose:** Understand the Android objects that let a native render thread produce frames independently of the UI view hierarchy.

1. **8.1 [Learner] — Separate the view hierarchy from the compositor.** Define the compositor as the system component that combines independently produced layers into the final display image.
2. **8.2 [Learner] — Understand why `SurfaceView` is a separate layer.** Explain the surface hole in the normal view hierarchy and why the native renderer does not draw into the `View`'s ordinary canvas.
3. **8.3 [Learner] — Prove the XML z-order requirement.** Trace why `transitionImage` must be declared after `TiledImageView` so its opaque bitmap covers the warming surface.
4. **8.4 [Learner] — Follow `SurfaceHolder` callbacks.** Name what `surfaceCreated`, `surfaceChanged`, and `surfaceDestroyed` guarantee and which thread invokes them.
5. **8.5 [Learner] — Convert a Java `Surface` to `ANativeWindow`.** Define the native window as the producer-side target and track reference acquisition and release explicitly.
6. **8.6 [Learner] — Meet BufferQueue.** Define the producer, queued buffers, system consumer, and the difference between drawing a frame and that frame becoming visible.
7. **8.7 [Learner] — Create the dedicated render thread.** Give rendering one thread with a name, priority, startup state, and deterministic shutdown path.
8. **8.8 [Learner] — Sleep until rendering is needed.** Use a condition variable as a sleep-and-wake mechanism instead of continuously polling when no surface or state change requires a frame.
9. **8.9 [Learner] — Write the first-frame visibility contract.** State exactly when the engine may fire `onReady` and why firing before a complete displayable frame would expose black or incomplete content.

**Chapter checkpoint:** The engine owns a render thread and surface lifecycle state, and the learner can explain why a `SurfaceView` behaves differently from an `ImageView`.

### Chapter 9 — EGL: connect the Android surface to OpenGL ES

**Purpose:** Build the platform bridge that makes an Android native window usable by the graphics API.

1. **9.1 [Learner] — Define EGL's job.** Treat EGL as the platform connection that creates an OpenGL ES context and binds it to an Android window surface.
2. **9.2 [Learner] — Acquire an EGL display.** Distinguish the EGL display connection from the physical phone display and trace initialization success or failure.
3. **9.3 [Learner] — Choose an EGL configuration.** Select color-buffer and OpenGL ES requirements and explain why an incompatible configuration prevents surface creation.
4. **9.4 [Learner] — Create an OpenGL ES 2 context.** Define a context as the container for graphics state and resources owned by the render thread.
5. **9.5 [Learner] — Create the EGL window surface.** Bind the current `ANativeWindow` to an EGL surface while keeping window and surface lifetimes distinct.
6. **9.6 [Learner] — Make context and surface current.** Explain that OpenGL calls affect the context and draw/read surfaces currently bound to the calling thread.
7. **9.7 [Learner] — Request swap interval one.** Define swap interval as the requested presentation cadence and separate the request from a guarantee about exact device timing.
8. **9.8 [Learner] — Present with `eglSwapBuffers`.** Trace the completed back buffer into BufferQueue and handle a lost or invalid surface without corrupting engine state.
9. **9.9 [Learner] — Complete the EGL lifecycle state machine.** Exercise create, resize, destroy, recreate, error, and shutdown paths without leaking a window, surface, context, or display connection.

**Chapter checkpoint:** A valid EGL context can attach to and detach from the `SurfaceView` repeatedly, ready for actual drawing.

### Chapter 10 — OpenGL ES 2: produce the first native frame

**Purpose:** Draw a controlled solid quad and understand every stage that turns CPU values into framebuffer pixels.

1. **10.1 [Learner] — Separate CPU and GPU work.** Identify which thread prepares commands, which processor executes shaders, and why a draw call can return before pixels are presented.
2. **10.2 [Learner] — Set the viewport and clear the frame.** Map the EGL surface dimensions to the render target and fill every output pixel with a known background color.
3. **10.3 [Learner] — Meet normalized device coordinates.** Define the graphics coordinate range from minus one to plus one and locate the four viewport corners.
4. **10.4 [Learner] — Build triangles and a triangle strip.** Show how four ordered vertices create two triangles that cover one rectangular quad.
5. **10.5 [Learner] — Distinguish attributes, varyings, and uniforms.** Define per-vertex input, interpolated vertex-to-fragment data, and one draw-wide value.
6. **10.6 [Learner] — Read the vertex shader.** Trace one position and one texture coordinate through the shader that passes them to later pipeline stages.
7. **10.7 [Learner] — Read the fragment shader.** Trace one covered screen sample to its output color before textures are introduced.
8. **10.8 [Learner] — Compile, link, bind, and draw.** Follow shader compilation, program linking, attribute lookup, vertex-array description, and the draw command with explicit failure checks.
9. **10.9 [Learner] — Show the first solid native quad.** Render, swap, and fire a temporary readiness event only after the controlled quad is known to have been submitted successfully.

**Chapter checkpoint:** The erased engine has become a real SurfaceView plus EGL plus OpenGL ES renderer that produces a stable native frame.

### Chapter 11 — Textures and the first static photo

**Purpose:** Replace the solid color with a bounded full-image teaching path before adding region decoding and tiles.

1. **11.1 [Learner] — Distinguish a texture from a texel.** Define a texture as GPU image storage and a texel as one addressable stored sample inside that texture.
2. **11.2 [Learner] — Create and bind texture storage.** Track a texture name, active binding, dimensions, internal format, and lifetime inside the render context.
3. **11.3 [Learner] — Upload RGBA pixels.** Trace CPU buffer bytes into GPU texture storage and identify the copy cost that later zero-copy work tries to remove.
4. **11.4 [Learner] — Use UV texture coordinates.** Map each quad corner to a normalized horizontal and vertical texture address from zero through one.
5. **11.5 [Learner] — Compare nearest and linear filtering.** Show which neighboring texels contribute to one sample and why linear filtering reduces blockiness while introducing edge-tap concerns.
6. **11.6 [Learner] — Clamp sampling at texture edges.** Explain how clamp-to-edge handles addresses outside zero through one and what boundary it does not know about inside a pooled texture.
7. **11.7 [Learner] — Fit a photo into the viewport.** Calculate one uniform scale and centered translation so the whole image is visible without changing its aspect ratio.
8. **11.8 [Learner] — Add a temporary bounded master-image path.** Use a deliberately temporary screen-sized or otherwise bounded decoded image to teach texture rendering without pretending it is the final large-image architecture.
9. **11.9 [Learner] — Complete the static-photo milestone.** Render one photo at fit scale, preserve the transition placeholder until the first frame, and document which temporary path will be deleted later.

**Chapter checkpoint:** The detail screen shows a real native-rendered static photo, but it still decodes one bounded whole image and has no deep-zoom tiles.

### Chapter 12 — Coordinate systems and image transforms

**Purpose:** Keep stored pixels, display-oriented image coordinates, screen coordinates, texture coordinates, and GPU coordinates separate.

1. **12.1 [Learner] — Separate stored and logical image space.** Define stored space as file pixel order and logical space as the orientation-correct image the user expects to see.
2. **12.2 [Learner] — Map logical image points to screen pixels.** Trace scale and translation from one logical photo point to its exact position inside the `TiledImageView`.
3. **12.3 [Learner] — Map screen pixels to normalized device coordinates.** Convert viewport-local X and Y to the GPU's minus-one-to-plus-one range, including the vertical-axis flip.
4. **12.4 [Learner] — Keep UV addresses separate from image coordinates.** Explain why a UV value names a location inside one texture while an image coordinate names a location inside the whole logical photo.
5. **12.5 [Learner] — Use a two-dimensional affine transform.** Define the engine's scale-plus-translation transform and identify the units of every input and output value.
6. **12.6 [Learner] — Invert the transform.** Recover the logical image point under a screen location and state the condition that makes inversion valid.
7. **12.7 [Learner] — Calculate the visible logical rectangle.** Inverse-map the viewport edges so the scheduler knows which part of the photo can contribute to the current frame.
8. **12.8 [Learner] — Derive the fit transform.** Compute the initial scale and centered translation identically in Kotlin and C++ so gesture state and native rendering begin on the same frame.
9. **12.9 [Learner] — Keep precision until the final vertex cast.** Explain why geometry remains double precision on the CPU and identify the one boundary where values become GPU floats.

**Chapter checkpoint:** The learner can trace one real point through logical image space, screen space, normalized device coordinates, and the final viewport pixel.

### Chapter 13 — Tile-pyramid geometry

**Purpose:** Represent an arbitrarily large image as fixed-size regions at several downsampled resolutions using pure, testable math.

1. **13.1 [Learner] — Quantify the whole-image memory problem.** Calculate the decoded bytes of a large camera photo and compare them with a bounded tile working set.
2. **13.2 [Learner] — Define a 512-pixel tile cell.** Separate the logical cell covered by a tile from the fixed 512 by 512 texture storage used by the current design.
3. **13.3 [Learner] — Build pyramid levels by powers of two.** Define level zero as full resolution and each higher level as half the width and half the height of the previous level.
4. **13.4 [Learner] — Calculate level dimensions with ceiling division.** Keep the last partial row or column instead of silently dropping image pixels when dimensions are odd.
5. **13.5 [Learner] — Count tiles and edge content.** Derive tile-column and tile-row counts, then calculate the valid content width and height of the final edge tile.
6. **13.6 [Learner] — Choose the top pyramid level.** Find the first coarsest level whose complete image fits inside one 512-pixel tile.
7. **13.7 [Learner] — Choose a target level from zoom scale.** Select a level whose source pixels map to an appropriate screen size instead of always decoding full resolution.
8. **13.8 [Learner] — Convert the visible rectangle to tile cells.** Clamp and floor the visible logical bounds into an inclusive set of tile indices.
9. **13.9 [Learner] — Complete the geometry test suite.** Test normal, odd-sized, tiny, panoramic, edge, empty, and extreme-dimension cases without Android or OpenGL.

**Chapter checkpoint:** All pyramid and visible-cell calculations are pure C++, fully tested, and independent of decoding or rendering.

### Chapter 14 — Region decoding and EXIF orientation

**Purpose:** Decode only the requested logical image region while normalizing file orientation before tiles reach the renderer.

1. **14.1 [Learner] — Contrast region decode with full decode.** Explain which source rectangle is requested, which output resolution is produced, and why memory no longer grows with the whole photo.
2. **14.2 [Learner] — Own file descriptors and file length.** Define a file descriptor as an operating-system handle to an open file and trace exactly when ownership transfers and when it closes.
3. **14.3 [Learner] — Specify region request and result objects.** Name logical bounds, sample level, destination capacity, output dimensions, stride, and failure information.
4. **14.4 [Learner] — Map pyramid level to decoder sampling.** Connect a power-of-two pyramid level to the backend's requested downsampling factor.
5. **14.5 [Learner] — Build the Java region-decoder backend.** Use a pooled `BitmapRegionDecoder` path through a Kotlin shim while keeping decoding off the UI thread.
6. **14.6 [Learner] — Build the Android Native Development Kit decoder backend.** Use the Android Native Development Kit (NDK) `AImageDecoder` API only after dynamically probing availability and the actual file bytes before selecting the native path on supported Android versions.
7. **14.7 [Learner] — Learn all eight EXIF orientations.** Define Exchangeable Image File Format orientation metadata and map every rotation or mirror case between stored and logical dimensions.
8. **14.8 [Learner] — Map logical requests back to stored pixels.** Transform the region rectangle, gather decoded source pixels, and rotate or mirror them into an orientation-normalized output tile.
9. **14.9 [Learner] — Choose a decoder by capability, not extension.** Probe the preferred backend, fall back safely, surface failure, and validate representative orientations on device.

**Chapter checkpoint:** A requested tile arrives as tightly specified orientation-correct RGBA data regardless of which supported decode backend produced it.

### Chapter 15 — Engine threads, shared state, and queues

**Purpose:** Move file decoding and graphics work away from the UI thread without introducing data races or lifetime bugs.

1. **15.1 [Learner] — Assign work to UI, render, and decode threads.** State which thread may touch gestures, shared engine state, EGL/OpenGL, and blocking decode operations.
2. **15.2 [Learner] — Recognize a data race.** Define a data race as unsynchronized concurrent access where at least one access writes, then identify concrete engine examples.
3. **15.3 [Learner] — Protect shared state with a mutex.** Define the critical section, keep it short, and separate state mutation from expensive decode or graphics calls.
4. **15.4 [Learner] — Sleep and wake with condition variables.** Pair a predicate with a mutex so render and decode workers wait without spinning and handle spurious wakeups correctly.
5. **15.5 [Learner] — Represent decode work as jobs.** Create a job containing document identity, generation, level, tile coordinates, and scheduling priority.
6. **15.6 [Learner] — Enforce the tile state machine.** Allow only valid transitions among empty, queued, decoding, decoded, uploaded, and failed states.
7. **15.7 [Learner] — Publish decoded work through an upload queue.** Transfer completed pixel ownership back to the render thread because only that thread owns OpenGL.
8. **15.8 [Learner] — Cancel stale work with generations.** Stamp documents and requests so replaced photos or superseded loads cannot publish into the current scene.
9. **15.9 [Learner] — Shut down every thread cleanly.** Set the quit state, wake sleepers, join threads, release queued resources, detach JNI threads, and prove repeated creation does not leak.

**Chapter checkpoint:** The engine has deterministic thread ownership, explicit job and upload queues, and tested stale-work rejection.

### Chapter 16 — Schedule and render the first tiled image

**Purpose:** Connect the pure pyramid, decoder workers, render thread, and texture renderer into the first functional deep-zoom pipeline.

1. **16.1 [Learner] — Create one document and its pyramid.** Build per-level tile records from orientation-correct logical dimensions and assign a unique document generation.
2. **16.2 [Learner] — Queue the one-tile base image first.** Request the top-level tile immediately so the renderer can cover the whole photo before sharp tiles arrive.
3. **16.3 [Learner] — Run one decode job end to end.** Pop a queued tile, mark it decoding, unlock shared state, decode, relock, validate generation, and publish success or failure.
4. **16.4 [Learner] — Upload one decoded tile.** Create or reuse a texture, copy decoded pixels, record texture ownership, and change the tile state to uploaded.
5. **16.5 [Learner] — Schedule the visible target-level range.** Use the current visible logical rectangle and selected pyramid level to enqueue only missing tiles that matter now.
6. **16.6 [Learner] — Build the frame's draw list.** Turn visible tile records into ordered textured quads without issuing graphics calls while holding the engine mutex.
7. **16.7 [Learner] — Fall back to the nearest uploaded ancestor.** Map a missing sharp cell to the correct sub-rectangle of a coarser resident tile so the photo stays continuously covered.
8. **16.8 [Learner] — Limit uploads to six per frame.** Bound upload work so a burst of decoded tiles cannot consume the entire frame budget before drawing and presenting.
9. **16.9 [Learner] — Fire readiness after a complete base frame.** Define and test the first condition under which the placeholder can be hidden and deep zoom becomes functionally usable.

**Chapter checkpoint:** The rebuilt module renders a large photo through region-decoded pyramid tiles with ancestor fallback and working deep zoom.

### Chapter 17 — GPU memory, least-recently-used eviction, and texture pooling

**Purpose:** Bound memory while avoiding an allocation and deletion storm as the viewport moves.

1. **17.1 [Learner] — Separate CPU and GPU tile memory.** Identify decoded pixel buffers, uploaded texture storage, duplicate residence periods, and the owner of each copy.
2. **17.2 [Learner] — Calculate one tile's texture cost.** Derive why a 512 by 512 RGBA texture consumes one mebibyte (MiB, 1,048,576 bytes) before driver overhead.
3. **17.3 [Learner] — Derive the viewport-based memory budget.** Calculate four viewport equivalents and clamp the result between the design's 64 and 192 MiB limits.
4. **17.4 [Learner] — Stamp least-recently-used access.** Define LRU as evicting the resident item used least recently and update access only when a tile contributes to a frame.
5. **17.5 [Learner] — Choose safe eviction candidates.** Exclude the pinned top-level base and currently referenced draw/upload resources, then select the oldest eligible tile.
6. **17.6 [Learner] — Reuse texture objects through a pool.** Return a fixed 512-pixel texture to a reusable pool instead of repeatedly deleting and reallocating GPU storage.
7. **17.7 [Learner] — Respond to Android memory trim.** Map memory-pressure levels to dropping idle decoded buffers, pooled textures, nonfocused documents, or all reconstructible resources.
8. **17.8 [Learner] — Release evicted and orphaned resources.** Handle resources detached from current documents while a frame or worker still holds a safe lifetime reference.
9. **17.9 [Learner] — Run the long-session memory checkpoint.** Page and zoom repeatedly while observing bounded resident tiles, stable allocations, clean trim recovery, and no use-after-free.

**Chapter checkpoint:** Memory remains bounded across long zoom and paging sessions, and every evicted resource can be recreated from the source file.

### Chapter 18 — Sampling quality and seamless refinement

**Purpose:** Remove seams, stale edge texels, black flashes, and abrupt resolution changes while keeping the pipeline measurable.

1. **18.1 [Learner] — Inspect one bilinear texture sample.** Calculate the four neighboring texel taps and their weights for one non-integer UV location.
2. **18.2 [Learner] — Map ancestor sub-rectangles exactly.** Derive UV bounds for a child cell inside a coarser ancestor tile without crossing into an adjacent cell.
3. **18.3 [Learner] — Reproduce the partial-edge stale-texel defect.** Show why linear filtering can read recycled texture contents just beyond a partial tile's valid width or height.
4. **18.4 [Learner] — Stamp a one-texel replicated apron.** Copy the valid edge column, row, and corner outward so linear taps see the photo edge rather than a previous texture tenant.
5. **18.5 [Learner] — Draw a coarse ancestor under a sharp tile.** Keep the older complete image contribution beneath the incoming target tile during refinement.
6. **18.6 [Learner] — Add the 150-millisecond crossfade.** Calculate tile age, alpha, and frame re-arming so a fresh sharp tile replaces its underlay smoothly.
7. **18.7 [Learner] — Define the no-fade cases.** Draw opaque immediately when no underlay exists or when a prefetched tile was already resident before it became visible.
8. **18.8 [Learner] — Control blending and draw order.** Enable source-over blending only for translucent refinement quads and prevent unnecessary state changes between opaque tiles.
9. **18.9 [Learner] — Run edge, seam, and handoff tests.** Inspect deep zoom at right and bottom edges, tile boundaries, rapid level changes, and the placeholder swap on real device content.

**Chapter checkpoint:** Resolution increases are visually continuous, partial edge tiles are clean, and no refinement path exposes black.

### Chapter 19 — Gestures and transform publication

**Purpose:** Rebuild the Kotlin interaction layer so every finger movement produces a mathematically defined native transform.

1. **19.1 [Learner] — Assign ownership of each touch sequence.** Coordinate scale detection, gesture detection, pager dragging, animation cancellation, and parent interception without two handlers mutating the same state.
2. **19.2 [Learner] — Implement one-finger pan.** Convert a screen-space finger delta into translation changes and trace one logical image point before and after the movement.
3. **19.3 [Learner] — Clamp translation to remove gutters.** Calculate image screen bounds and restrict translation when the scaled image is larger or smaller than the viewport.
4. **19.4 [Learner] — Anchor pinch zoom at the focal point.** Keep the logical point under the detector's focus at the same screen position while scale changes.
5. **19.5 [Learner] — Add explicit two-finger pan during pinch.** Trace the focal-point delta that must be applied before re-anchoring, reproducing and preventing the prior nearly-nailed-down pinch defect.
6. **19.6 [Learner] — Rubber-band the undamped gesture request.** Accumulate the raw requested scale and derive a damped displayed scale so repeated events do not re-damp an already damped value into a hard wall.
7. **19.7 [Learner] — Implement double-tap zoom.** Choose the next scale target, preserve the tapped logical point, and animate the transform rather than jumping.
8. **19.8 [Learner] — Implement fling and out-of-bounds settling.** Use velocity for inertial pan, stop at valid bounds, and animate rubber-banded scale back with an interruptible settle.
9. **19.9 [Learner] — Publish transforms through a coalescing write.** Send scale and translation as doubles through JNI, overwrite stale intermediate state, and let the render thread draw the newest coherent snapshot.

**Chapter checkpoint:** Pan, pinch, two-finger pan, rubber-band, double tap, fling, and settle all preserve the defined coordinate relationships on device.

### Chapter 20 — Motion-aware scheduling and performance measurement

**Purpose:** Use bounded prediction and tracing to keep sharp content arriving in the direction of motion without performing unbounded speculative work.

1. **20.1 [Learner] — Re-arm rendering only for real work.** Keep the render thread asleep unless state changed, uploads remain, a crossfade is active, or the surface lifecycle requires action.
2. **20.2 [Learner] — Measure viewport-center velocity.** Convert consecutive transform snapshots into logical-image motion of the viewport center.
3. **20.3 [Learner] — Smooth velocity with an exponential moving average.** Define the weighted running estimate and trace how the current sample and prior estimate combine.
4. **20.4 [Learner] — Predict 0.2 seconds ahead with a cap.** Project motion into a lookahead offset and clamp it to at most one and a half tiles per axis.
5. **20.5 [Learner] — Add a half-tile prefetch margin.** Expand the visible range just enough to cover near-future exposure without decoding a large off-screen ring.
6. **20.6 [Learner] — Prewarm the adjacent pyramid level.** Use the current level's progress value, the 0.75 and 0.60 thresholds, the dead band, and the central 60 percent region to prepare likely level changes.
7. **20.7 [Learner] — Cancel and reprioritize queued work.** Re-test old jobs against the newest wanted set, reset abandoned tiles, and rebuild priority from class plus center distance.
8. **20.8 [Learner] — Protect the frame budget.** Combine render/decode thread priorities, the six-upload cap, unlocked graphics work, and swap pacing without claiming a fixed frame rate from design alone.
9. **20.9 [Learner] — Measure with Perfetto slices.** Define trace slices for frame, schedule, decode, upload, draw, swap, and orphan handling, then use before/after captures to justify performance changes.

**Chapter checkpoint:** Fast movement produces bounded, cancelable prefetch, and every performance claim is tied to a trace or explicitly marked unmeasured.

### Chapter 21 — Multiple photos in one SurfaceView filmstrip

**Purpose:** Render the focused photo and its neighbors as pages inside one graphics surface instead of stacking several SurfaceViews in a pager.

1. **21.1 [Learner] — Explain why the pager stays inside one surface.** Compare one compositor layer containing several document quads with multiple SurfaceViews competing for independent layers and lifecycles.
2. **21.2 [Learner] — Store multiple document states.** Key pyramids, decoders, generations, metadata, and resident tiles by photo index while sharing the renderer and memory budget.
3. **21.3 [Learner] — Maintain the focused plus-or-minus-one window.** Prepare the focused document first, keep immediate neighbors warm, and release documents that leave the three-photo window.
4. **21.4 [Learner] — Calculate each neighbor's fit transform.** Place every page using its own logical dimensions while preserving consistent vertical centering and scale.
5. **21.5 [Learner] — Represent page gap and pager offset.** Define the horizontal distance between page origins and the one offset that moves the filmstrip as a whole.
6. **21.6 [Learner] — Build a multi-document draw list.** Combine focused and neighbor quads in deterministic order while applying shared viewport clipping and memory rules.
7. **21.7 [Learner] — Spill clamp-blocked pan into strip drag.** Route horizontal movement to the pager only when the focused image cannot consume more pan in that direction.
8. **21.8 [Learner] — Snap, commit focus, and save state.** Animate to the chosen page, atomically reset pager offset and focused transform, update the warm window, and preserve index across recreation.
9. **21.9 [Learner] — Audit back-navigation fidelity.** Keep the return transition for the entry photo, use plain pop after paging, and define the future grid-cell lookup and scroll required to morph the new photo back correctly.

**Chapter checkpoint:** One surface supports smooth neighboring-photo paging, bounded document residency, saved focus, and correct current return-policy behavior.

### Chapter 22 — Formats, fallback paths, failures, and lifecycle recovery

**Purpose:** Make the viewer survive real files and Android lifecycle events while preserving a visible fallback whenever deep zoom cannot start.

1. **22.1 [Learner] — Identify files by magic bytes.** Define magic bytes as format-identifying data at the beginning of a file and explain why a filename extension is insufficient evidence.
2. **22.2 [Learner] — Create the format and capability model.** Record sniffed format, decoder availability, orientation, logical dimensions, and special metadata without hard-coding one format-by-API table.
3. **22.3 [Learner] — Prepare metadata off the UI thread.** Read bounds, format, Ultra HDR information, orientation, file descriptor, and file length without blocking touch or layout.
4. **22.4 [Learner] — Add the bounded master-image fallback.** Decode at most a 2048-pixel long-edge normalized master for formats that lack a usable region decoder, then serve tile requests from that bounded image.
5. **22.5 [Learner] — Test HEIC, AVIF, WebP, TIFF, and DNG honestly.** Separate paths proven on the attached test bench from paths that require representative device files and record unsupported behavior explicitly.
6. **22.6 [Learner] — Separate Ultra HDR detection from HDR display.** Detect a gain map without claiming the current Standard Dynamic Range (SDR) EGL surface, textures, and shader pipeline can display true high dynamic range.
7. **22.7 [Learner] — Propagate errors without losing the photo.** Carry native failure to Kotlin once, retain the transition bitmap as the visible screen-resolution fallback, and disable only unavailable deep-zoom behavior.
8. **22.8 [Learner] — Recover after rotation or process recreation.** Invalidate dead transition clones, reload the focused document, restore zoom center and page index, and reject stale asynchronous preparation with a Kotlin request generation.
9. **22.9 [Learner] — Complete the lifecycle and failure matrix.** Exercise missing files, unsupported decode, surface loss, rapid replacement, rotation, trim, background/foreground, and engine destruction with exact expected user-visible outcomes.

**Chapter checkpoint:** Unsupported or failed deep zoom degrades to a visible photo instead of a crash or black screen, and lifecycle reconstruction has deterministic state rules.

### Chapter 23 — Zero-copy upload and explicit synchronization

**Purpose:** Rebuild the optional Android hardware-buffer path, then keep or disable it based on measured total cost rather than architectural fashion.

1. **23.1 [Learner] — Measure the ordinary copy path first.** Locate decode, CPU buffer, texture upload, and driver work in traces so the optimization has a quantified target.
2. **23.2 [Learner] — Meet `AHardwareBuffer` and gralloc.** Define Android hardware buffer as memory allocated by the graphics allocator that can be shared between CPU and GPU users.
3. **23.3 [Learner] — Decode into an external destination.** Pass address, capacity, dimensions, and padded stride to the decoder while preserving the ordinary allocated-buffer fallback.
4. **23.4 [Learner] — Import the buffer through `EGLImage`.** Define EGLImage as a shareable image object and bind the hardware buffer to an OpenGL texture without `glTexSubImage2D`.
5. **23.5 [Learner] — Synchronize CPU write before GPU sample.** Define a fence as a completion signal and prevent the GPU from sampling a buffer before the decoder has finished writing and unlocked it.
6. **23.6 [Learner] — Synchronize GPU sample before CPU rewrite.** Prevent the pool from handing a buffer back to a decoder while an earlier frame can still sample it.
7. **23.7 [Learner] — Pool buffers and stamp one release fence per frame.** Reuse adopted textures and exploit ordered GPU commands so one frame-level release signal can cover all buffers sampled in that frame.
8. **23.8 [Learner] — Gate the path with runtime probes and fallback.** Require the Android version, EGL extensions, OpenGL extension, allocation test, and adoption success; permanently fall back to copy after a path failure.
9. **23.9 [Learner] — Run the controlled copy-versus-zero-copy comparison.** Compare decode, upload, orphan, draw, and frame slices on the target device and retain automatic selection without claiming zero-copy is universally faster.

**Chapter checkpoint:** The zero-copy path is fully gated, synchronization-correct, and supported by a controlled device comparison; the copy path remains intact and testable.

### Chapter 24 — End-to-end handoff, parity proof, and independent reconstruction

**Purpose:** Reconnect every layer, pressure-test the transition framework, compare against the preserved baseline, and prove the learner owns the design rather than merely possessing source code.

1. **24.1 [Learner] — Restore the final `TiledImageView` contract.** Remove temporary teaching APIs and match the app-facing methods, callbacks, saved state, gestures, paging, and trim behavior required by `PhotoDetailFragment`.
2. **24.2 [Learner] — Match placeholder and native fit framing.** Compare the transition `ImageView` matrix with the engine's first fit transform using the same image dimensions and viewport bounds.
3. **24.3 [Learner] — Prove the no-black-flash handoff.** Inspect layer order, surface readiness, base coverage, callback timing, and placeholder visibility under cold start, surface recreation, and decode delay.
4. **24.4 [Learner] — Test the HQ/LQ race under controlled cache states.** Disable the forced two-second debug delay for production tests, then compare warm HQ, timed-out LQ, simultaneous completion, failure, and cancellation.
5. **24.5 [Learner] — Validate the entry-photo return transition.** Trace clone restoration, current grid-cell bounds, center-crop matrix, scrim fade, source thumbnail alpha, and back-stack pop.
6. **24.6 [Learner] — Validate rotation and paged-photo exits.** Confirm plain-pop behavior and thumbnail restoration today, then write the separately scoped design for scrolling to and morphing into a newly focused grid cell.
7. **24.7 [Learner] — Audit and harden the transition framework.** Resolve or deliberately document the duplicate overlay-creation paths, the add-versus-add/hide documentation mismatch, the unused transition-name argument, weak-reference failure paths, and rapid-tap behavior.
8. **24.8 [Learner] — Run the parity and performance review.** Compare baseline and rebuilt behavior, output quality, memory, traces, lifecycle matrix, all four Application Binary Interface (ABI) builds, native warnings, and Pixel 8 Pro interaction recordings.
9. **24.9 [Learner] — Defend the capstone from a blank page.** Recreate a selected subsystem without viewing the answer, explain every production file and cross-thread value flow, then open the sealed original only for a final discrepancy review after the learner-authored subsystem is complete.

**Chapter checkpoint:** The rebuilt viewer is functional and performance-audited, every evidence limit is recorded, and the learner can independently explain and reconstruct its major mechanisms.

---

## 10. Final completion gates

The course is not complete merely because the app compiles. Lesson 24.9 requires all of the following:

1. `:app:assembleDebug` succeeds for all configured Application Binary Interfaces (ABIs) with no native warnings and no unexplained Kotlin warnings in the rebuilt module.
2. Pure C++ geometry and scheduling tests cover normal, edge, stale-generation, and failure cases.
3. Pixel 8 Pro device checks cover cold and warm transition loads, forced LQ, failed native load, pan, pinch, two-finger pan, rubber-band, double tap, fling, deep edge zoom, paging, rotation, trim/reload, and both back paths.
4. Memory stays within the documented budget during a long zoom-and-page session.
5. Perfetto traces support performance claims for scheduling, decode, upload, draw, swap, and zero-copy controlled-comparison behavior.
6. The transition placeholder is never hidden before a complete native frame is ready, and a native failure leaves a visible photo.
7. Every optional capability has a runtime gate and a verified fallback that leaves the default SDR copy path intact.
8. `PARITY_MATRIX.md` distinguishes baseline parity, intentional improvements, known gaps, and unverified behavior.
9. The learner can select any major value—one touch coordinate, logical rectangle, decode request, pixel row, texture UV, tile state, cache entry, or frame—and trace it to its next consumer.
10. The learner completes an independent blank-page reconstruction of one subsystem before viewing the original implementation.
11. The implementation log confirms that every new Android-project code, build, test, and helper-script change was authored by the learner rather than copied or transcribed from a generated solution.

---

## 11. Starting point

The next deliverable is **Lesson 1.1 — Record the current user journey**. It creates only learning records and baseline evidence. It does not delete or modify production source yet. The actual deletion occurs in Lesson 1.6 after the baseline and reference quarantine are proven.

**Course progress: 0 of 216 lessons completed.**
