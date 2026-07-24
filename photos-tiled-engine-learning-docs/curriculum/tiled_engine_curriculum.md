# Photos Tiled Engine — manual reconstruction curriculum

**Version:** 4.0  
**Current size:** **539 lessons** in **60 chapters** and **9 phases**.  
**Completed:** 0.  
**Implementation ownership:** every Android-project line is manually authored by the learner.

## Why this count exists

The completed source and prerequisite audit produced 539 lesson-sized concepts. The number was not selected in advance and is not tied to the Liquid Glass count.

Familiar programming ideas are grouped. C++, image memory, resizing, coordinates, GPU work, JNI ownership, and low-level concurrency are split more finely because those are beginner domains. A future lesson may still be divided when its finished explanation would rely on an undefined term or combine independently testable mechanisms.

## Course boundary

The curriculum reconstructs only `tiled-engine` and the Kotlin code that directly drives or supports it. It excludes the grid, navigation transitions, unrelated app architecture, project tours, observation lessons, journals, scratchpads, and recording catalogues.

## Phase map

| Phase | Chapters | Lessons | Milestone |
|---:|---:|---:|---|
| 1 — Build shell, C++ ownership, and JNI on Java-originated threads | 1–5 | 43 | The deleted module builds again. Kotlin creates one native object, receives test callbacks on the calling Java thread, and destroys the object without leaking either side of JNI. |
| 2 — Image-processing foundations before any decoder or GPU API | 6–11 | 54 | Pixels, RGBA bytes, stride, rectangles, resampling, encoded files, and container signatures are understood and tested as independent data transformations. |
| 3 — Native threads, the Android surface, EGL, OpenGL ES, and one generated frame | 12–17 | 57 | A render-on-demand native thread owns EGL and OpenGL ES, copy-uploads known RGBA bytes, presents them in the real `TiledImageView`, and reports readiness from the render thread. |
| 4 — Image coordinate systems, EXIF, fit, pyramids, tiles, and render geometry | 18–26 | 82 | Pure functions transform real viewport bounds into logical-image bounds, pyramid levels, tile addresses, decoder requests, and GPU quads without mixing coordinate spaces. |
| 5 — Kotlin file preparation and two interchangeable decoder backends | 27–32 | 55 | Kotlin prepares one file safely. C++ selects an NDK or Java backend and produces a logically oriented, stride-correct rectangular RGBA result. |
| 6 — Single-document tiled rendering, scheduling, refinement, and bounded memory | 33–42 | 86 | One document gains complete first coverage, visible fine tiles, ancestor fallback, crossfade, pooled textures, bounded cache, stale-work rejection, and deterministic idle/shutdown behavior. |
| 7 — Direct Kotlin transforms, gestures, paging, lifecycle, and errors | 43–51 | 79 | The Kotlin controller drives pan, fling, pinch, quick scale, double tap, a three-document filmstrip, pager settling, saved state, surface recreation, memory pressure, and explicit errors. |
| 8 — Prediction, measurement, optional zero-copy, and format boundaries | 52–59 | 68 | Optimization is measured after correctness. The copy path remains canonical; hardware-buffer import is capability-gated and retained only when end-to-end traces justify it. |
| 9 — Independent integration and reference comparison | 60–60 | 15 | The learner-authored engine passes correctness, lifecycle, stress, and performance gates before the sealed reference implementation is opened for comparison. |

## Full lesson map

# Phase 1 — Build shell, C++ ownership, and JNI on Java-originated threads

**Milestone:** The deleted module builds again. Kotlin creates one native object, receives test callbacks on the calling Java thread, and destroys the object without leaking either side of JNI.

## Chapter 1 — Recreate the Android library and native build shell

**Purpose:** Restore the Android library shell first. The native target is introduced only after the first C++ toolchain lesson.

**Source anchors:** `settings.gradle.kts`, `app/build.gradle.kts`, `tiled-engine/build.gradle.kts`, `AndroidManifest.xml`

1.1. **1.1 — Create and register the empty `:tiled-engine` Android library module after the reference module has been deleted**
1.2. **1.2 — Configure the Android library plugin, namespace, compile SDK, and minimum SDK**
1.3. **1.3 — Add the component-free manifest and the app-to-module dependency**
1.4. **1.4 — Build the empty Kotlin-only Android library before adding native code**

**Chapter checkpoint:** all 4 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 2 — Create the first C++ shared library and learn the engine value model

**Purpose:** Introduce the C++ toolchain and C++-specific value rules through the first real native library, without re-teaching ordinary programming.

**Source anchors:** `tiled-engine/src/main/cpp/CMakeLists.txt`, the first learner-authored `.cpp`/`.h` files, constructs used across the native engine

2.1. **2.1 — Create one C++ translation unit and connect it to a CMake shared-library target**
2.2. **2.2 — Separate preprocessing, compilation, and linking in one failing-and-fixed native build**
2.3. **2.3 — Follow one declaration from a header into its definition in a `.cpp` translation unit**
2.4. **2.4 — Write a namespaced function and trace one argument into its return value**
2.5. **2.5 — Choose the engine's signed, unsigned, fixed-width, size, boolean, and floating-point scalar types**
2.6. **2.6 — Use `const` and `constexpr` to express runtime immutability and compile-time constants**
2.7. **2.7 — Trace integer division, floating-point division, and power-of-two shifts with engine-sized values**
2.8. **2.8 — Reject a pixel-buffer multiplication before the byte count can overflow**
2.9. **2.9 — Read compiler warnings and errors as file, line, token, and violated rule**
2.10. **2.10 — Wrap Android native logging behind one project macro and verify one message in Logcat**
2.11. **2.11 — Build the native target and locate `libtiledengine.so` for one device application binary interface**

**Chapter checkpoint:** all 11 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 3 — Build C++ objects with explicit lifetime and ownership

**Purpose:** Establish the C++ object and ownership vocabulary needed by JNI and later engine resources.

**Source anchors:** `TileEngine`, `GlRenderer`, decoder, document, tile, and buffer type patterns

3.1. **3.1 — Represent related engine values with a `struct` and a scoped `enum class`**
3.2. **3.2 — Define a class interface in a header and member-function bodies in a `.cpp` file**
3.3. **3.3 — Use a constructor to establish valid state and a destructor to release one resource**
3.4. **3.4 — Distinguish an object, a pointer to the object, and a reference to the same object**
3.5. **3.5 — Use `nullptr` and a nullable pointer without dereferencing absence**
3.6. **3.6 — Compare stack lifetime with dynamically allocated object lifetime**
3.7. **3.7 — Apply resource acquisition is initialization so scope performs cleanup**
3.8. **3.8 — Own one object with `std::unique_ptr` and transfer that ownership with `std::move`**
3.9. **3.9 — Delete copying when copying would duplicate ownership of a native resource**
3.10. **3.10 — Distinguish an owning pointer from a temporary non-owning pointer**

**Chapter checkpoint:** all 10 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 4 — Create the JNI library entry points and native engine handle

**Purpose:** Create a minimal Kotlin-to-C++ round trip and make the lifetime of the native object explicit.

**Source anchors:** `TileEngineNative.kt`, `jni_bridge.cpp`, `JNI_OnLoad`, native create/destroy calls

4.1. **4.1 — Match `System.loadLibrary("tiledengine")` to the generated shared-library filename**
4.2. **4.2 — Export one JNI function with a stable C-compatible symbol**
4.3. **4.3 — Store the process `JavaVM*` from `JNI_OnLoad`**
4.4. **4.4 — Map Kotlin scalar arguments to their JNI scalar types**
4.5. **4.5 — Use the call-scoped `JNIEnv*` without retaining it after the call returns**
4.6. **4.6 — Convert a native pointer into an opaque integer handle without claiming Kotlin owns the object**
4.7. **4.7 — Create one native engine object and return its handle to Kotlin**
4.8. **4.8 — Validate and recover the native pointer before delegating a second JNI call**
4.9. **4.9 — Destroy the engine exactly once and make repeated public shutdown requests harmless**

**Chapter checkpoint:** all 9 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 5 — Build the minimal Kotlin/JNI owner and callback contract

**Purpose:** Complete a small Kotlin-to-C++ round trip on a Java-originated thread. Native-created threads and `TiledImageView` are deliberately deferred.

**Source anchors:** `TileEngineNative.kt`, `jni_bridge.cpp`, callback sink declarations, consumer shrinker rules

5.1. **5.1 — Distinguish a JNI local reference from a JNI global reference**
5.2. **5.2 — Retain one Kotlin callback object with `NewGlobalRef` and release it during native shutdown**
5.3. **5.3 — Read the JNI descriptors for a no-argument callback and a callback that receives a `String`**
5.4. **5.4 — Resolve and cache the two callback method identifiers on the Java-originated creation thread**
5.5. **5.5 — Invoke the readiness callback on the same Java thread that entered the native test call**
5.6. **5.6 — Create one Java string and invoke the error callback on that same thread**
5.7. **5.7 — Detect, describe for diagnostics, and clear a pending JNI exception before returning**
5.8. **5.8 — Preserve JNI-called Kotlin methods with `@Keep` and consumer shrinker rules**
5.9. **5.9 — Own the native handle in a thin Kotlin object and verify create, callback, and idempotent close**

**Chapter checkpoint:** all 9 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

# Phase 2 — Image-processing foundations before any decoder or GPU API

**Milestone:** Pixels, RGBA bytes, stride, rectangles, resampling, encoded files, and container signatures are understood and tested as independent data transformations.

## Chapter 6 — Model a raster image and one RGBA pixel

**Purpose:** Begin image processing from stored samples rather than from files, tiles, or GPU APIs.

**Source anchors:** `geometry.h` RGBA constants, generated images, decoder output contracts, OpenGL RGBA uploads

6.1. **6.1 — Define a raster image as a rectangular grid of stored color samples**
6.2. **6.2 — Name width, height, row, column, and the top-left image origin**
6.3. **6.3 — Separate a stored image pixel from a physical display pixel**
6.4. **6.4 — Represent red, green, blue, and alpha as four 8-bit channels**
6.5. **6.5 — Trace one RGBA8888 pixel from four channel values into four consecutive bytes**
6.6. **6.6 — Calculate the pixel count and tightly packed RGBA byte count of a real image size**
6.7. **6.7 — Generate a tiny CPU-side RGBA pattern whose individual pixel values are known**

**Chapter checkpoint:** all 7 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 7 — Address decoded pixels in a strided byte buffer

**Purpose:** Make every later decoder and upload calculation rest on an explicit byte layout.

**Source anchors:** `DecodedRegion`, `DecodeDest`, Android bitmap rows, and ordinary texture-upload buffers

7.1. **7.1 — Lay out tightly packed pixels in row-major order**
7.2. **7.2 — Define row stride as the byte distance between consecutive row starts**
7.3. **7.3 — Trace `(x, y)` into `y × stride + x × 4` and identify the addressed RGBA pixel**
7.4. **7.4 — Distinguish valid pixel bytes from padding bytes at the end of a row**
7.5. **7.5 — Calculate the minimum destination capacity from height, stride, width, and bytes per pixel**
7.6. **7.6 — Copy a rectangular row range without assuming source and destination strides match**
7.7. **7.7 — Assign ownership and cleanup responsibility to one decoded pixel buffer**

**Chapter checkpoint:** all 7 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 8 — Use half-open image rectangles safely

**Purpose:** Define the rectangle convention once so later tile and decoder arithmetic cannot mix edges with indices.

**Source anchors:** `IRect`, `DRect`, Kotlin `Rect`, decoder crop bounds, visible-image bounds

8.1. **8.1 — Represent an image rectangle with left, top, right, and bottom edges**
8.2. **8.2 — Use half-open edges so width is `right - left` and height is `bottom - top`**
8.3. **8.3 — Distinguish a rectangle edge from the final included pixel index**
8.4. **8.4 — Intersect two rectangles and recognize an empty result**
8.5. **8.5 — Clamp a requested rectangle to valid image bounds**
8.6. **8.6 — Convert a valid rectangle into the rows and columns that must be copied**
8.7. **8.7 — Test zero-size, one-pixel, partially outside, and fully outside rectangles**

**Chapter checkpoint:** all 7 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 9 — Resize a raster image through sampling and filtering

**Purpose:** Teach resizing from the pixel grid outward before any decoder or texture API hides the calculation.

**Source anchors:** decoder reduction semantics, `Bitmap` scaling fallback, OpenGL texture filtering

9.1. **9.1 — Define an input raster, an output raster, and a sample position inside the input raster**
9.2. **9.2 — Map the center of one output pixel to its corresponding input-image position**
9.3. **9.3 — Distinguish downsampling from upsampling by comparing input and output grid dimensions**
9.4. **9.4 — Choose the nearest input pixel for one mapped sample position**
9.5. **9.5 — Linearly interpolate one channel value between two neighboring samples**
9.6. **9.6 — Perform bilinear interpolation as two horizontal interpolations followed by one vertical interpolation**
9.7. **9.7 — Handle a sample position at an image edge without reading outside the input buffer**
9.8. **9.8 — Separate source-image dimensions, decoded dimensions, and displayed dimensions**
9.9. **9.9 — Explain why enlarging a small decoded raster cannot recreate detail that was never decoded**
9.10. **9.10 — Implement and test one tiny CPU resizer before relying on platform or GPU filtering**

**Chapter checkpoint:** all 10 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 10 — Separate encoded image files from decoded pixel buffers

**Purpose:** Establish what a decoder consumes and produces before introducing any specific backend.

**Source anchors:** file descriptors, `BitmapFactory`, `AImageDecoder`, `BitmapRegionDecoder`, decoder request/result types

10.1. **10.1 — Distinguish encoded file bytes from decoded RGBA pixel bytes**
10.2. **10.2 — Define an image container as the file structure and a codec as the compression rules for pixel data**
10.3. **10.3 — Separate container metadata from the compressed pixel payload**
10.4. **10.4 — Define a full-image decode as producing pixels for the complete image**
10.5. **10.5 — Define a region decode as producing pixels for one requested rectangle**
10.6. **10.6 — Define a reduced decode as producing fewer output pixels than the requested source region contains**
10.7. **10.7 — Trace a power-of-two reduction into the expected output width and height with ceiling division**
10.8. **10.8 — Treat codec-internal block expansion as hidden backend work while keeping the public output rectangle exact**

**Chapter checkpoint:** all 8 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 11 — Identify supported image containers from bounded file headers

**Purpose:** Rebuild format sniffing as bounded byte inspection, not as filename-extension guessing.

**Source anchors:** `ImageFormat.kt` and its explicit unknown-format result

11.1. **11.1 — Define a magic-byte signature and read only the bounded header bytes needed for identification**
11.2. **11.2 — Convert Kotlin signed `Byte` values into unsigned `0..255` values before comparison**
11.3. **11.3 — Read fixed ASCII tags without decoding the complete file**
11.4. **11.4 — Recognize the JPEG start-of-image bytes and require the following marker prefix**
11.5. **11.5 — Recognize the PNG signature bytes without relying on a `.png` filename**
11.6. **11.6 — Recognize WebP by requiring both the RIFF container tag and the WEBP form tag**
11.7. **11.7 — Recognize the two GIF version signatures used by still and animated GIF files**
11.8. **11.8 — Recognize the BMP `BM` signature**
11.9. **11.9 — Recognize little-endian and big-endian TIFF signatures and state why DNG shares this container family**
11.10. **11.10 — Define the ISO Base Media File Format `ftyp` box fields used by HEIF and AVIF detection**
11.11. **11.11 — Classify the source-defined HEIF major brands without treating every `ftyp` file as HEIF**
11.12. **11.12 — Classify the AVIF and AVIS major brands separately from HEIF**
11.13. **11.13 — Return an explicit unknown format when no supported signature matches**
11.14. **11.14 — Handle short reads, file errors, malformed headers, and ambiguous signatures without reading beyond the bytes obtained**
11.15. **11.15 — Test every source-defined format signature plus unknown, short, malformed, and misleading-extension files**

**Chapter checkpoint:** all 15 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

# Phase 3 — Native threads, the Android surface, EGL, OpenGL ES, and one generated frame

**Milestone:** A render-on-demand native thread owns EGL and OpenGL ES, copy-uploads known RGBA bytes, presents them in the real `TiledImageView`, and reports readiness from the render thread.

## Chapter 12 — Share state safely between native threads

**Purpose:** Introduce low-level concurrency before any surface or GPU object can be touched from the wrong thread.

**Source anchors:** `TileEngine` mutex, condition variables, render thread, decode workers, shared queues

12.1. **12.1 — Define a thread, shared mutable state, and a data race**
12.2. **12.2 — Protect one state update with `std::mutex` and scoped locking**
12.3. **12.3 — Keep a critical section short by moving slow work outside the lock**
12.4. **12.4 — Put a thread to sleep with `std::condition_variable` and a predicate**
12.5. **12.5 — Publish state as lock, write, unlock, and notify**
12.6. **12.6 — Request shutdown, wake sleepers, and join every thread before destroying shared state**
12.7. **12.7 — Move one work item through a producer-to-consumer queue**
12.8. **12.8 — State which thread owns each resource instead of relying on timing**

**Chapter checkpoint:** all 8 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 13 — Build a render-on-demand thread before adding graphics

**Purpose:** Create the engine's sleeping control loop without a game-style permanent busy loop.

**Source anchors:** `TileEngine::start`, `stop`, state publication, render wake-up rules

13.1. **13.1 — Contrast a busy render loop with a thread that sleeps until work changes**
13.2. **13.2 — Represent pending work with explicit state and a wake predicate**
13.3. **13.3 — Start one render thread only after all state it reads is valid**
13.4. **13.4 — Wake the render thread for viewport, surface, document, transform, or shutdown changes**
13.5. **13.5 — Use a monotonic clock for elapsed time that cannot jump with wall-clock changes**
13.6. **13.6 — Coalesce several state writes into the latest frame state**
13.7. **13.7 — Stop the thread deterministically and prove no callback or resource access continues afterward**

**Chapter checkpoint:** all 7 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 14 — Create the direct `TiledImageView` surface host and transfer its window to C++

**Purpose:** Create only the view and surface boundary required by the engine. No photo loading, gestures, paging, or transition code is introduced.

**Source anchors:** `TiledImageView.kt` surface callbacks, `TileEngineNative.nativeSetSurface`, `jni_bridge.cpp`, `ANativeWindow` ownership

14.1. **14.1 — Create `TiledImageView` as a `SurfaceView` and register it as a `SurfaceHolder.Callback`**
14.2. **14.2 — Distinguish the Kotlin view, its `SurfaceHolder`, the Java `Surface`, and the native `ANativeWindow`**
14.3. **14.3 — Keep `surfaceCreated` and `surfaceChanged` free of EGL and OpenGL work on the Android main thread**
14.4. **14.4 — Forward a non-null Java `Surface` through the thin JNI boundary**
14.5. **14.5 — Acquire an `ANativeWindow*` from the Java `Surface` and state who owns the acquired reference**
14.6. **14.6 — Transfer the acquired native-window reference from the JNI bridge to the engine**
14.7. **14.7 — Publish the real viewport width and height separately from the native-window pointer**
14.8. **14.8 — Represent surface attachment and detachment as render-thread commands**
14.9. **14.9 — Wait for the render thread to acknowledge detachment before `surfaceDestroyed` returns**
14.10. **14.10 — Release every acquired native-window reference exactly once across replacement, failure, and shutdown**

**Chapter checkpoint:** all 10 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 15 — Create and own the EGL objects

**Purpose:** Establish the Android bridge between the native window and an OpenGL ES context.

**Source anchors:** `GlRenderer::initDisplay`, `attachWindow`, `detachWindow`, `swap`, `teardown`

15.1. **15.1 — Define EGL as the API that connects OpenGL ES to an Android native window**
15.2. **15.2 — Create an EGL display and initialize its connection**
15.3. **15.3 — Choose a configuration with the required color channels and window-surface support**
15.4. **15.4 — Bind the OpenGL ES API and create an ES 2 context**
15.5. **15.5 — Create an EGL window surface from the current `ANativeWindow`**
15.6. **15.6 — Make the context and window surface current on the render thread**
15.7. **15.7 — Set swap interval and present one buffer with `eglSwapBuffers`**
15.8. **15.8 — Detach a destroyed window while keeping a reusable context when valid**
15.9. **15.9 — Tear down surface, context, and display in dependency order on every failure path**

**Chapter checkpoint:** all 9 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 16 — Build the minimal two-dimensional OpenGL ES pipeline

**Purpose:** Draw a known rectangle only after every coordinate space used by the GPU conversion has been named.

**Source anchors:** `gl_renderer.h/.cpp` shader program, fixed state, viewport, vertex data, and blending

16.1. **16.1 — State why every OpenGL call must run while the owning EGL context is current on the render thread**
16.2. **16.2 — Define view-local coordinates as pixel positions inside the real `TiledImageView` viewport**
16.3. **16.3 — Define normalized device coordinates as the GPU positions from `-1` to `+1` on each axis**
16.4. **16.4 — Map the measured viewport corners and center from view-local pixels into normalized device coordinates**
16.5. **16.5 — Represent one rectangle as two triangles with a defined vertex order**
16.6. **16.6 — Write a vertex shader that receives and forwards position data**
16.7. **16.7 — Write a fragment shader that returns one fixed color**
16.8. **16.8 — Declare fragment-shader floating-point precision and explain how texture-coordinate precision can affect deep zoom**
16.9. **16.9 — Compile both shaders, link one program, and surface compiler and linker logs**
16.10. **16.10 — Connect vertex attributes and uniform values to the linked program**
16.11. **16.11 — Set the real viewport, clear the frame, and disable depth and face culling for this two-dimensional renderer**
16.12. **16.12 — Trace the source-alpha blending equation used later for tile crossfades**

**Chapter checkpoint:** all 12 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 17 — Upload and present the first generated RGBA image

**Purpose:** Prove the complete ordinary copy path with known CPU pixels before files, decoders, pyramids, tiles, or hardware buffers exist.

**Source anchors:** `gl_renderer.h/.cpp` texture object, copy upload, texture coordinates, swap, `TileEngine` readiness callback

17.1. **17.1 — Create a two-dimensional texture object and allocate RGBA storage for the known CPU pattern**
17.2. **17.2 — Upload the known RGBA bytes with the ordinary texture-copy path**
17.3. **17.3 — Define texture coordinates as positions inside the uploaded texture from `0` to `1`**
17.4. **17.4 — Map the complete uploaded texture onto one quad without cropping it**
17.5. **17.5 — Configure linear filtering and texture-edge clamping and state exactly what each setting changes**
17.6. **17.6 — Draw the generated pattern across the full real viewport as a temporary pipeline checkpoint**
17.7. **17.7 — State explicitly that aspect-correct fit framing is deferred and that this checkpoint may stretch the pattern**
17.8. **17.8 — Swap the frame that contains the generated image instead of only a clear color**
17.9. **17.9 — Attach the render thread to the Java virtual machine before it invokes the Kotlin sink**
17.10. **17.10 — Post the engine callback effect to the Android main thread and detach the render thread when it exits**
17.11. **17.11 — Fire readiness only after the image-content swap succeeds, then sleep until new work arrives**

**Chapter checkpoint:** all 11 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

# Phase 4 — Image coordinate systems, EXIF, fit, pyramids, tiles, and render geometry

**Milestone:** Pure functions transform real viewport bounds into logical-image bounds, pyramid levels, tile addresses, decoder requests, and GPU quads without mixing coordinate spaces.

## Chapter 18 — Define stored-image and logical-image coordinate spaces

**Purpose:** Introduce only the image spaces required for orientation and fit. Pyramid-level and tile-local spaces remain deferred until their objects exist.

**Source anchors:** `geometry.h` physical/stored and logical image model; Kotlin metadata and transform contracts

18.1. **18.1 — Define stored-image space as coordinates in the pixel order encoded by the file**
18.2. **18.2 — Define logical-image space as coordinates after the display orientation has been applied**
18.3. **18.3 — Distinguish pixel centers from the rectangle edges that bound a pixel grid**
18.4. **18.4 — Keep view-local coordinates separate from Android screen coordinates outside the view**
18.5. **18.5 — Label every point, rectangle, distance, and dimension with its coordinate space and unit**
18.6. **18.6 — Define scale as view pixels per logical-image pixel**
18.7. **18.7 — Reject a formula in a pure test when it combines values from incompatible spaces**

**Chapter checkpoint:** all 7 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 19 — Implement two-dimensional affine transforms

**Purpose:** Build the reusable transform machinery needed by EXIF, view framing, and decoder geometry.

**Source anchors:** `Affine`, point mapping, composition, inverse, axis-aligned rectangle mapping

19.1. **19.1 — Distinguish a point from a displacement vector**
19.2. **19.2 — Map a point with scale plus translation**
19.3. **19.3 — Represent a two-dimensional affine transform with linear terms and translation terms**
19.4. **19.4 — Compose two transforms and prove that order changes the result**
19.5. **19.5 — Represent right-angle rotation and mirroring as affine transforms**
19.6. **19.6 — Invert a non-singular affine transform**
19.7. **19.7 — Map all four rectangle corners and build the enclosing axis-aligned rectangle**
19.8. **19.8 — Test identity, translation, scale, rotation, mirror, composition, and inverse round trips**

**Chapter checkpoint:** all 8 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 20 — Normalize all eight EXIF orientations

**Purpose:** Build each orientation from the affine prerequisites instead of presenting an unexplained table of matrices.

**Source anchors:** `geometry.h` EXIF helpers; Kotlin EXIF metadata; Java fallback orientation gather

20.1. **20.1 — Define EXIF orientation as metadata that says how stored pixels must appear to the user**
20.2. **20.2 — Separate right-angle rotation from horizontal or vertical mirroring**
20.3. **20.3 — Identify the four orientations that swap the logical width and height**
20.4. **20.4 — Build and test orientation 1: stored pixels already match logical display order**
20.5. **20.5 — Build and test orientation 2: horizontal mirror**
20.6. **20.6 — Build and test orientation 3: rotation by 180 degrees**
20.7. **20.7 — Build and test orientation 4: vertical mirror**
20.8. **20.8 — Build and test orientation 5: transpose across the top-left to bottom-right diagonal**
20.9. **20.9 — Build and test orientation 6: rotation by 90 degrees clockwise**
20.10. **20.10 — Build and test orientation 7: transverse reflection across the opposite diagonal**
20.11. **20.11 — Build and test orientation 8: rotation by 270 degrees clockwise**
20.12. **20.12 — Map all four stored-rectangle corners and rebuild ordered logical bounds**
20.13. **20.13 — Verify every orientation with asymmetric dimensions and four differently labelled corners**

**Chapter checkpoint:** all 13 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 21 — Calculate fit framing and the visible logical-image rectangle

**Purpose:** Use only real `TiledImageView` dimensions and explicitly invert the view transform.

**Source anchors:** `fitTransform`, Kotlin fit/clamp helpers, scheduler inverse mapping

21.1. **21.1 — Read the actual viewport width and height supplied by `surfaceChanged`**
21.2. **21.2 — Calculate horizontal and vertical fit ratios from logical-image and viewport dimensions**
21.3. **21.3 — Choose the smaller ratio so the complete image fits**
21.4. **21.4 — Center the remaining horizontal or vertical letterbox space**
21.5. **21.5 — Store the view transform as `view = scale × logical + translation`**
21.6. **21.6 — Invert the transform to map each viewport edge into logical-image space**
21.7. **21.7 — Intersect that mapped rectangle with the logical image bounds**
21.8. **21.8 — Handle a viewport that lies partly or completely outside the image**
21.9. **21.9 — Verify forward and inverse mapping with one real runtime viewport measurement**

**Chapter checkpoint:** all 9 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 22 — Create whole-image pyramid levels

**Purpose:** Introduce the complete reduced images first. Tiles do not exist yet.

**Source anchors:** `levelDim`, reduction shifts, complete-image levels

22.1. **22.1 — Define an image pyramid as complete versions of one logical image at decreasing dimensions**
22.2. **22.2 — Call the full logical image level 0**
22.3. **22.3 — Define level `n` as a power-of-two reduction by `2^n`**
22.4. **22.4 — Calculate a reduced dimension with ceiling division so edge pixels are not lost**
22.5. **22.5 — Define pyramid-level space as coordinates inside one complete reduced image**
22.6. **22.6 — Map a logical-image distance into a level distance and back**
22.7. **22.7 — Calculate the real level sequence for the project's `3008 × 2008` generated image without introducing tiles**

**Chapter checkpoint:** all 7 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 23 — Divide one pyramid level into tiles

**Purpose:** Only now define a tile as one piece cut from a previously defined whole-image level.

**Source anchors:** `kTileSize`, `TileKey`, level dimensions, tile rectangles

23.1. **23.1 — Define a tile as one rectangular piece of one pyramid level**
23.2. **23.2 — Define tile-local space from a tile's top-left corner**
23.3. **23.3 — Set the maximum tile allocation to `512 × 512` level pixels**
23.4. **23.4 — Calculate tile columns and rows with ceiling division**
23.5. **23.5 — Address one tile by level, column, and row**
23.6. **23.6 — Calculate its rectangle in pyramid-level space**
23.7. **23.7 — Clamp the rightmost and bottommost tiles to partial level edges**
23.8. **23.8 — Continue the pyramid until the complete level fits inside one tile**
23.9. **23.9 — Test full, right-edge, bottom-edge, corner, and out-of-range tile addresses**

**Chapter checkpoint:** all 9 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 24 — Choose the target level and visible tile range

**Purpose:** Connect view scale to decoded resolution, then convert the visible image rectangle into exact tile indices.

**Source anchors:** `levelForScale`, visible logical rectangle, `CellRange`

24.1. **24.1 — Calculate how many logical-image pixels one pixel of level `n` represents**
24.2. **24.2 — Calculate how large one level pixel appears in view pixels at the current transform scale**
24.3. **24.3 — Choose a level that avoids decoding detail much finer than the current view can display**
24.4. **24.4 — Clamp the chosen level to the available pyramid range**
24.5. **24.5 — Map the visible logical-image rectangle into the chosen level**
24.6. **24.6 — Define image rectangles with half-open pixel edges and `CellRange` with inclusive tile indices**
24.7. **24.7 — Calculate first and last visible tile columns without including a tile touched only by the exclusive right edge**
24.8. **24.8 — Calculate and clamp the visible tile rows the same way**
24.9. **24.9 — Test exact boundaries, partial tiles, letterboxing, and visibility beyond the image edge**

**Chapter checkpoint:** all 9 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 25 — Build one decoder request from one tile

**Purpose:** Package geometry already understood into a decoder contract without adding decoder backend behavior yet.

**Source anchors:** `RegionRequest`, logical request coordinates, reduction shift, expected output, destination constraints

25.1. **25.1 — Start from validated logical-image dimensions and one tile key**
25.2. **25.2 — Map the tile rectangle from pyramid-level space into logical-image space**
25.3. **25.3 — Use the tile level as the power-of-two reduction request**
25.4. **25.4 — Calculate expected decoded width and height for full and partial tiles**
25.5. **25.5 — Specify destination pointer, row stride, and byte capacity independently**
25.6. **25.6 — Reject a request whose dimensions, reduction, or destination capacity are invalid**
25.7. **25.7 — Keep the expected width, height, reduction, and tile key available for validating decoder output**
25.8. **25.8 — Test the real right-edge and bottom-edge request sizes**
25.9. **25.9 — Keep decoder orientation semantics in logical-image space**

**Chapter checkpoint:** all 9 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 26 — Build one OpenGL draw quad from a decoded tile

**Purpose:** Convert a tile result into exactly positioned geometry while preserving the distinction between image, view, texture, and GPU coordinates.

**Source anchors:** `DrawQuad`, `DRect`, texture coordinates, `GlRenderer::drawQuads`

26.1. **26.1 — Place one decoded tile rectangle in logical-image space**
26.2. **26.2 — Apply the current logical-to-view transform to the tile rectangle**
26.3. **26.3 — Reject or clip a transformed rectangle that cannot touch the real viewport**
26.4. **26.4 — Map the view-local corners into normalized device coordinates**
26.5. **26.5 — Perform the large image-coordinate subtraction in CPU `double` precision before storing the resulting small normalized coordinates as floats**
26.6. **26.6 — Assign texture coordinates for a complete tile**
26.7. **26.7 — Limit maximum texture coordinates for a partial right or bottom edge tile**
26.8. **26.8 — Choose one consistent triangle and vertex order for every tile quad**
26.9. **26.9 — Submit the small per-quad interleaved vertex array and state when a vertex-buffer object would become worthwhile**
26.10. **26.10 — Carry per-quad opacity without modifying stored texture pixels**
26.11. **26.11 — Test a complete tile, each partial edge, a partial corner, and a tile outside the viewport**

**Chapter checkpoint:** all 11 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

# Phase 5 — Kotlin file preparation and two interchangeable decoder backends

**Milestone:** Kotlin prepares one file safely. C++ selects an NDK or Java backend and produces a logically oriented, stride-correct rectangular RGBA result.

## Chapter 27 — Prepare one image file on the Kotlin side

**Purpose:** Prepare the exact data and owned resources that the native decoder factory needs.

**Source anchors:** `TiledImageView.prepareImage`, `PreparedImage`, `ParcelFileDescriptor`, metadata probes

27.1. **27.1 — Move blocking file and metadata work to `Dispatchers.IO` without blocking the Android main thread**
27.2. **27.2 — Open a read-only `ParcelFileDescriptor` and assign close responsibility on every path**
27.3. **27.3 — Read encoded image dimensions without allocating the complete decoded pixel image**
27.4. **27.4 — Sniff the container format from bounded file-header bytes**
27.5. **27.5 — Read the EXIF orientation and normalize absent or invalid metadata to orientation 1**
27.6. **27.6 — Read file length and reject missing files, non-positive dimensions, and invalid lengths**
27.7. **27.7 — Calculate logical dimensions from stored dimensions and orientation**
27.8. **27.8 — Create the Java fallback shim without forcing it to allocate a region decoder or master bitmap yet**
27.9. **27.9 — Detach the integer file descriptor only at the point where ownership transfers to native code**
27.10. **27.10 — Close the descriptor and shim exactly once across success, failure, cancellation, and rejected native insertion**

**Chapter checkpoint:** all 10 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 28 — Define one interchangeable region-decoder contract

**Purpose:** Use C++ polymorphism only after the geometry and pixel-memory contract are fixed.

**Source anchors:** `RegionDecoder`, `RegionRequest`, `DecodedRegion`, `DecodeDest`, decoder factory

28.1. **28.1 — Define an abstract C++ interface and a virtual destructor**
28.2. **28.2 — Keep request geometry in logical-image space regardless of backend**
28.3. **28.3 — Return decoded dimensions, stride, pixel ownership, and failure explicitly**
28.4. **28.4 — Allow either decoder-owned memory or a caller-supplied destination**
28.5. **28.5 — Own a decoder-allocated byte array with `std::unique_ptr<uint8_t[]>` and handle `std::nothrow` allocation failure**
28.6. **28.6 — State whether one decoder instance may be called concurrently**
28.7. **28.7 — Create a factory that tries backends in a documented order**
28.8. **28.8 — Transfer file-descriptor ownership only after a backend is successfully constructed**

**Chapter checkpoint:** all 8 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 29 — Load the optional NDK decoder API at runtime

**Purpose:** Resolve platform functions without making the module fail to load on unsupported devices.

**Source anchors:** `NdkDecoderApi`, `dlopen`, `dlsym`, `mmap`, opaque `AImageDecoder`

29.1. **29.1 — Represent an unavailable platform type as an opaque declaration**
29.2. **29.2 — Open the decoder library with `dlopen` and resolve required functions with `dlsym`**
29.3. **29.3 — Preserve exact function-pointer types with `decltype` and explicit low-level casts**
29.4. **29.4 — Resolve the API once and return unavailable when any required symbol is missing**
29.5. **29.5 — Map the encoded file descriptor into read-only memory**
29.6. **29.6 — Validate offsets and lengths before exposing the mapped byte range**
29.7. **29.7 — Unmap memory and close owned descriptors on construction failure and destruction**

**Chapter checkpoint:** all 7 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 30 — Decode one region with the NDK backend

**Purpose:** Turn the backend-independent request into one concrete NDK decode while preserving logical geometry and memory constraints.

**Source anchors:** `NdkRegionDecoder` and dynamically loaded `AImageDecoder` calls

30.1. **30.1 — Create an NDK decoder from the mapped encoded bytes**
30.2. **30.2 — Read encoded dimensions and format information from its header**
30.3. **30.3 — Convert the requested reduction shift into target output dimensions**
30.4. **30.4 — Convert the logical request rectangle into the backend crop rectangle**
30.5. **30.5 — Configure RGBA output and the caller-provided row stride**
30.6. **30.6 — Decode into the validated destination buffer**
30.7. **30.7 — Validate returned dimensions and report backend failure without partial publication**
30.8. **30.8 — Destroy decoder state while keeping mapped-file ownership correct**

**Chapter checkpoint:** all 8 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 31 — Bridge the Java region decoder into native workers

**Purpose:** Teach the legacy backend as an explicit JNI, coordinate, stride, and ownership pipeline rather than a single opaque callback.

**Source anchors:** `JavaRegionDecoder` in `region_decoder.cpp`; `RegionDecodeShim.kt`; Android bitmap pixel access

31.1. **31.1 — Retain one `RegionDecodeShim` as a JNI global reference owned by the native decoder**
31.2. **31.2 — Resolve shim method identifiers on the Java-originated construction thread**
31.3. **31.3 — Attach a decode worker to the Java virtual machine and obtain that thread's `JNIEnv*`**
31.4. **31.4 — Map the logical request rectangle back into stored-image space with the inverse EXIF transform**
31.5. **31.5 — Call `decodeRegion` with stored bounds and the requested power-of-two reduction**
31.6. **31.6 — Treat the returned Android `Bitmap` as a temporary Java-owned result**
31.7. **31.7 — Read bitmap dimensions, pixel format, and real row stride before accessing its bytes**
31.8. **31.8 — Copy identity-oriented rows while allowing both source and destination padding**
31.9. **31.9 — Gather non-identity orientations into logical output pixels with an explicit stored-coordinate formula**
31.10. **31.10 — Write into either decoder-owned tight memory or a validated caller-provided strided destination**
31.11. **31.11 — Unlock pixels, return the bitmap for reuse, delete local references, and clear pending exceptions on every path**
31.12. **31.12 — Delete the global shim reference and detach each worker only after no further Java call is possible**

**Chapter checkpoint:** all 12 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 32 — Pool Java decoders and build the bounded-master fallback

**Purpose:** Bound Java-side allocations and provide a fallback for formats or devices that cannot region-decode directly.

**Source anchors:** `RegionDecodeShim` decoder pool, bitmap pool, `ensureMaster`, `decodeFromMaster`, orientation normalization

32.1. **32.1 — Limit concurrent `BitmapRegionDecoder` instances to the source-defined pool size**
32.2. **32.2 — Borrow and return decoders under synchronization without reusing a closed entry**
32.3. **32.3 — Create a new decoder outside the pool lock because header parsing performs file input**
32.4. **32.4 — Reuse only a mutable bitmap whose allocation matches the requested output**
32.5. **32.5 — Retry once without bitmap reuse when the platform rejects an `inBitmap` candidate**
32.6. **32.6 — Limit the reusable bitmap pool to its source-defined capacity**
32.7. **32.7 — Choose a power-of-two sample that bounds the master image long edge to at most `2048` pixels**
32.8. **32.8 — Normalize an `ImageDecoder` master from display orientation back into the stored orientation expected by the shim**
32.9. **32.9 — Derive the actual master reduction from returned dimensions instead of assuming the decoder honored the requested sample exactly**
32.10. **32.10 — Crop and resample one request from the shared master and release every decoder, bitmap, descriptor, and master during close**

**Chapter checkpoint:** all 10 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

# Phase 6 — Single-document tiled rendering, scheduling, refinement, and bounded memory

**Milestone:** One document gains complete first coverage, visible fine tiles, ancestor fallback, crossfade, pooled textures, bounded cache, stale-work rejection, and deterministic idle/shutdown behavior.

## Chapter 33 — Create the document, level, tile, and ownership model

**Purpose:** Represent one image and all of its progressive rendering state with explicit C++ ownership.

**Source anchors:** `TileEngine::Image`, `PyramidLevel`, `Tile`, document map, decoder ownership

33.1. **33.1 — Store documents by integer identifier in `std::map` without accidental insertion during lookup**
33.2. **33.2 — Represent one document with physical dimensions, logical dimensions, orientation, and decoder ownership**
33.3. **33.3 — Store complete pyramid-level records in a `std::vector`**
33.4. **33.4 — Store each level's tile records with keys, rectangles, and render state**
33.5. **33.5 — Share document lifetime across queued work with `std::shared_ptr`**
33.6. **33.6 — Keep the decoder as one unique owner inside the document**
33.7. **33.7 — Assign a globally unique generation to every document replacement**
33.8. **33.8 — Move GL-owned resources from a non-GL destructor into render-thread orphan queues**

**Chapter checkpoint:** all 8 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 34 — Define tile states and the decode/upload handoff

**Purpose:** Make every tile transition and thread handoff explicit before implementing the scheduler.

**Source anchors:** Tile state enum, `DecodeJob`, priority heap, upload deque, decode workers

34.1. **34.1 — Define empty, queued, decoding, decoded-for-upload, GPU-resident, failed, and stale-reset states**
34.2. **34.2 — Allow only valid state transitions and reject duplicate queueing**
34.3. **34.3 — Represent a decode job with document id, generation, tile key, and priority**
34.4. **34.4 — Use a vector-backed heap with an explicit comparator for the decode queue**
34.5. **34.5 — Let a worker claim one job under the lock and decode it outside the lock**
34.6. **34.6 — Move the decoded pixel result into a first-in/first-out upload deque**
34.7. **34.7 — Wake the render thread when upload work arrives**
34.8. **34.8 — Validate document generation again before publishing worker results**
34.9. **34.9 — Return stale queued work to a reusable state without corrupting newer document state**

**Chapter checkpoint:** all 9 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 35 — Publish single-document UI state without doing slow work under the engine lock

**Purpose:** Define the state-publication boundary used before paging exists. Focus changes and pager state are introduced only in the multi-document phase.

**Source anchors:** `setSurface`, `setViewport`, `setDocument`, `releaseDocument`, `setTransform`, and memory-trim publication

35.1. **35.1 — Publish viewport dimensions as one coherent state update**
35.2. **35.2 — Publish the single document's scale and view-space translation as one transform update**
35.3. **35.3 — Publish a surface attach or detach command without calling EGL on the Android main thread**
35.4. **35.4 — Insert or replace one prepared document and queue its complete-image fallback work**
35.5. **35.5 — Release a document while in-flight workers may still retain its shared lifetime**
35.6. **35.6 — Publish normal or aggressive memory-trim intent without performing GL deletion on the caller thread**
35.7. **35.7 — Snapshot the latest state for one frame and release the lock before scheduling, decoding, uploads, or drawing**

**Chapter checkpoint:** all 7 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 36 — Compute and prioritize the wanted tile set

**Purpose:** Convert current visible geometry into bounded work that favors the content the user can use first.

**Source anchors:** `scheduleFrameLocked`, `DocWants`, `CellRange`, decode queue reconciliation

36.1. **36.1 — Compute the current document's visible logical-image rectangle from the latest transform**
36.2. **36.2 — Choose the target pyramid level and visible tile range**
36.3. **36.3 — Expand the range by the current offscreen margin while clamping it to the level grid**
36.4. **36.4 — Represent wanted tile keys without duplicates**
36.5. **36.5 — Reconcile queued jobs against the newly wanted set and remove work that has become irrelevant**
36.6. **36.6 — Separate complete-fallback, currently visible, and offscreen-margin priority classes**
36.7. **36.7 — Calculate each tile center and its distance from the visible logical-image center**
36.8. **36.8 — Order equal-class work from the center outward**
36.9. **36.9 — Queue only tiles whose current state permits a new decode**
36.10. **36.10 — Let workers finish already-running decodes and cache valid late results instead of attempting unsafe mid-codec cancellation**

**Chapter checkpoint:** all 10 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 37 — Present complete first coverage with the top pyramid level

**Purpose:** Guarantee a complete image before any fine-tile replacement mechanism exists.

**Source anchors:** document setup, top-level tile, first upload, fit draw, readiness contract

37.1. **37.1 — Create every pyramid and tile record when a document is accepted**
37.2. **37.2 — Identify the highest pyramid level that fits in one tile**
37.3. **37.3 — Queue that complete-image tile immediately**
37.4. **37.4 — Decode the complete top level through the common decoder contract**
37.5. **37.5 — Upload its valid pixels on the render thread**
37.6. **37.6 — Draw it with the document's fit transform**
37.7. **37.7 — Swap the frame that first contains complete photo coverage**
37.8. **37.8 — Fire readiness once for that presented document content**
37.9. **37.9 — Pin the complete-image fallback so later cache eviction cannot create a blank page**

**Chapter checkpoint:** all 9 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 38 — Replace fallback regions with exact and ancestor tiles

**Purpose:** Refine visible cells without moving content or exposing black holes.

**Source anchors:** `buildDocDrawListLocked`, target cells, coarser ancestors, UV sub-rectangles

38.1. **38.1 — Look up the exact target-level tile for one visible cell**
38.2. **38.2 — Walk toward coarser ancestors when the exact tile is unavailable**
38.3. **38.3 — Map the target cell into the ancestor tile's logical-image sub-rectangle**
38.4. **38.4 — Convert that sub-rectangle into texture-coordinate bounds**
38.5. **38.5 — Draw one ancestor-backed quad that covers exactly the target cell**
38.6. **38.6 — Repeat the process so every visible target cell has the best available content**
38.7. **38.7 — Replace only the cell whose exact tile becomes GPU-resident**
38.8. **38.8 — Preserve the cell's view-space position during replacement**
38.9. **38.9 — Test complete coverage, correct ancestor selection, and seam-free neighboring cell boundaries**

**Chapter checkpoint:** all 9 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 39 — Crossfade newly resident tiles over their underlay

**Purpose:** Add the refinement transition only after exact replacement geometry is already correct.

**Source anchors:** `uploadedAt`, `kCrossfadeSeconds`, per-quad opacity, redraw wakeups

39.1. **39.1 — Timestamp a tile when upload makes it GPU-resident**
39.2. **39.2 — Calculate tile age with the monotonic clock**
39.3. **39.3 — Convert age into a clamped `0..1` progress over the source-defined `0.15` seconds**
39.4. **39.4 — Draw the existing underlay first and the new tile second**
39.5. **39.5 — Apply progress as quad opacity rather than modifying texture bytes**
39.6. **39.6 — Skip the fade when a prefetched tile was already ready before becoming visible**
39.7. **39.7 — Keep waking the render thread only until active crossfades have finished**

**Chapter checkpoint:** all 7 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 40 — Pool textures and handle partial edge tiles

**Purpose:** Reuse fixed GPU allocations while preventing filtering from reading uninitialized edge bytes.

**Source anchors:** `GlRenderer` tile texture pool, upload path, edge apron, valid UV range

40.1. **40.1 — Allocate pooled tile textures at the source-defined `512 × 512` size**
40.2. **40.2 — Acquire a reusable texture or create one when the pool is empty**
40.3. **40.3 — Upload only the valid width and height of a partial tile**
40.4. **40.4 — Define the edge apron as duplicated boundary pixels outside the valid partial-tile rectangle**
40.5. **40.5 — Stamp right, bottom, and corner apron pixels in the CPU buffer**
40.6. **40.6 — Limit texture coordinates to the valid partial-tile extent**
40.7. **40.7 — Return evicted textures to the pool up to its source-defined limit**
40.8. **40.8 — Delete or trim pooled textures only on the GL-owning render thread**

**Chapter checkpoint:** all 8 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 41 — Enforce a bounded GPU texture cache and clean up orphan textures

**Purpose:** Bound recreatable GPU texture memory for the single-document renderer and preserve render-thread-only texture destruction.

**Source anchors:** texture budget, per-frame use stamp, least-recently-used eviction, pinned fallback, orphan texture list, and memory trim

41.1. **41.1 — Calculate RGBA bytes represented by one complete pooled tile texture**
41.2. **41.2 — Calculate the variable cache budget as four viewport-sized RGBA allocations**
41.3. **41.3 — Clamp the total cache target to the source-defined `64–192 MiB` range**
41.4. **41.4 — Stamp every drawn tile with the current frame identifier**
41.5. **41.5 — Choose the least-recently-used unpinned GPU-resident tile**
41.6. **41.6 — Exclude the current image's complete-image fallback from ordinary eviction**
41.7. **41.7 — Move textures released by non-GL owners into a render-thread orphan queue**
41.8. **41.8 — Delete orphan textures when the render thread next owns a current context**
41.9. **41.9 — Drop pooled and non-visible textures under normal memory pressure**
41.10. **41.10 — Drop all recreatable GPU textures on aggressive trim or context loss**

**Chapter checkpoint:** all 10 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 42 — Integrate the render and decode loops for one document

**Purpose:** Assemble the single-image engine only after every participating mechanism has an independent contract and test.

**Source anchors:** `renderThreadMain`, `decodeThreadMain`, surface commands, scheduling, upload cap, draw and swap

42.1. **42.1 — Start the source-defined bounded number of decode workers**
42.2. **42.2 — Apply pending surface attach and detach commands before drawing**
42.3. **42.3 — Schedule the latest wanted set for the current frame state**
42.4. **42.4 — Upload at most the source-defined number of completed tiles per frame**
42.5. **42.5 — Build the draw list from GPU-resident exact tiles and fallbacks**
42.6. **42.6 — Draw and swap only when a valid surface and document can produce content**
42.7. **42.7 — Keep decoding out of the render thread and GL calls out of decode workers**
42.8. **42.8 — Coalesce rapid transform updates while preserving the latest state**
42.9. **42.9 — Sleep with zero CPU/GPU work when no state, upload, crossfade, or shutdown event requires another frame**

**Chapter checkpoint:** all 9 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

# Phase 7 — Direct Kotlin transforms, gestures, paging, lifecycle, and errors

**Milestone:** The Kotlin controller drives pan, fling, pinch, quick scale, double tap, a three-document filmstrip, pager settling, saved state, surface recreation, memory pressure, and explicit errors.

## Chapter 43 — Own the current image transform in Kotlin

**Purpose:** Rebuild the view-side transform state for one current image before gestures and multiple-image focus exist.

**Source anchors:** `TiledImageView` fit scale, current transform, clamping, `pushTransform`, and viewport resize

43.1. **43.1 — Store scale and view-space translation as the current image transform**
43.2. **43.2 — Use Kotlin `Double` values so the transform matches JNI and C++ precision through deep-zoom translations**
43.3. **43.3 — Calculate fit scale from logical dimensions and the real viewport**
43.4. **43.4 — Define effective minimum and maximum scales**
43.5. **43.5 — Center an image axis when displayed content is smaller than the viewport**
43.6. **43.6 — Clamp translation when displayed content is larger than the viewport**
43.7. **43.7 — Calculate the logical-image point at the viewport center**
43.8. **43.8 — Publish one coherent scale-and-translation update to native code**
43.9. **43.9 — Preserve logical center and scale relative to fit across an in-place viewport resize**

**Chapter checkpoint:** all 9 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 44 — Implement one-finger pan and fling

**Purpose:** Turn Android gesture deltas into bounded view transforms without hiding sign conventions.

**Source anchors:** `onTouchEvent`, `GestureDetector`, translation updates, clamping, and `OverScroller`

44.1. **44.1 — Route one `MotionEvent` stream through the scale and gesture detectors**
44.2. **44.2 — Cancel the current image fling and any running transform animation when a new gesture begins**
44.3. **44.3 — Trace Android scroll deltas into the new view-space translation**
44.4. **44.4 — Clamp the translated image and identify any horizontal delta blocked by the image edge**
44.5. **44.5 — Publish each accepted pan transform once**
44.6. **44.6 — Compute fling bounds from displayed image size and viewport size**
44.7. **44.7 — Advance `OverScroller` on animation frames and publish each new translation**
44.8. **44.8 — Stop the fling cleanly when it finishes, is interrupted, or can no longer move**

**Chapter checkpoint:** all 8 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 45 — Implement focal-point anchored pinch and quick scale

**Purpose:** Keep the same logical-image point beneath the user's focal point while scale changes.

**Source anchors:** `ScaleGestureDetector`, focus coordinates, scale factor, quick-scale mode

45.1. **45.1 — Begin scaling from a valid transform and cancel conflicting animations**
45.2. **45.2 — Map the detector's view-space focal point into logical-image space before changing scale**
45.3. **45.3 — Apply the detector scale factor to the current raw scale**
45.4. **45.4 — Recalculate translation so the same logical point remains under the focal point**
45.5. **45.5 — Include movement of the two-finger focal point instead of treating it as stationary**
45.6. **45.6 — Handle Android quick scale as the same anchored transform with a different gesture source**
45.7. **45.7 — Keep raw gesture scale separate from the bounded scale eventually sent to the engine**
45.8. **45.8 — Publish one anchored transform per accepted gesture update**

**Chapter checkpoint:** all 8 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 46 — Add rubber-band limits and double-tap transform animation

**Purpose:** Add controlled out-of-range feedback and reusable anchored animation after direct transforms are correct.

**Source anchors:** rubber-band scale, settling, double-tap target, logarithmic interpolation, anchor preservation

46.1. **46.1 — Compress scale movement below minimum and above maximum with a rubber-band function**
46.2. **46.2 — Settle an out-of-range scale back to the nearest valid bound**
46.3. **46.3 — Calculate the fill scale used by the double-tap zoom target**
46.4. **46.4 — Choose between fit and zoomed-in double-tap states**
46.5. **46.5 — Map the tapped view point into logical-image space as the animation anchor**
46.6. **46.6 — Interpolate scale in logarithmic space so equal ratios consume equal progress**
46.7. **46.7 — Interpolate anchor position and derive translation on every animation frame**
46.8. **46.8 — Clamp the final transform without breaking the chosen anchor unnecessarily**
46.9. **46.9 — Interrupt and restart the animation from its current transform rather than from a stale endpoint**

**Chapter checkpoint:** all 9 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 47 — Prepare only the focused document and its immediate neighbors

**Purpose:** Bound file preparation and native document state before the filmstrip renderer is introduced.

**Source anchors:** `setPhotos`, request generation, coroutine preparation, focused ±1 window, descriptor and shim ownership

47.1. **47.1 — Validate the file list and starting index passed to `setPhotos`**
47.2. **47.2 — Assign a request generation so stale coroutine results cannot apply to a newer gallery**
47.3. **47.3 — Compute the wanted preparation window as focused index minus one through plus one**
47.4. **47.4 — Prepare missing files on `Dispatchers.IO` without blocking the UI thread**
47.5. **47.5 — Discard and close a prepared result whose request generation is stale**
47.6. **47.6 — Apply a prepared document to native code and retain only the ownership still needed**
47.7. **47.7 — Release native documents and Java shims that leave the three-document window**
47.8. **47.8 — Switch focused metadata, logical dimensions, and initial transform coherently**
47.9. **47.9 — Close every descriptor and shim exactly once across success, failure, cancellation, and replacement**

**Chapter checkpoint:** all 9 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 48 — Render the three-document filmstrip in one surface

**Purpose:** Extend the correct single-document renderer without creating one SurfaceView or GPU context per page.

**Source anchors:** focused document, neighbor transforms, pager offset, page gap, shared renderer and cache

48.1. **48.1 — Define page width as viewport width plus the density-resolved page gap**
48.2. **48.2 — Draw the focused document with its user transform**
48.3. **48.3 — Draw each immediate neighbor with its own fit transform**
48.4. **48.4 — Offset pages horizontally by document order and current pager offset**
48.5. **48.5 — Clip naturally at the shared viewport while allowing the next page to appear during a drag**
48.6. **48.6 — Queue a neighbor's complete-image fallback before it becomes visible**
48.7. **48.7 — Warm neighbor fit-level tiles at lower priority until the page enters view**
48.8. **48.8 — Share one EGL context, texture budget, decoder pool, and render thread across all three documents**

**Chapter checkpoint:** all 8 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 49 — Route horizontal edge drag into pager movement

**Purpose:** Transfer motion from image panning to page paging only when the focused image cannot consume that horizontal movement.

**Source anchors:** blocked pan delta, `dragPager`, velocity, settle target, focus switch, interruption

49.1. **49.1 — Use the horizontal delta blocked by image clamping as pager input**
49.2. **49.2 — Define pager-offset sign and identify which neighbor each direction reveals**
49.3. **49.3 — Apply resistance when dragging beyond the first or final gallery item**
49.4. **49.4 — Track horizontal release velocity independently from image fling velocity**
49.5. **49.5 — Compare offset distance with the page-change threshold**
49.6. **49.6 — Use release velocity as a second target-selection signal**
49.7. **49.7 — Choose previous, current, or next page as the settle target**
49.8. **49.8 — Animate pager offset to the selected whole-page position**
49.9. **49.9 — Switch focus only after the outgoing page has moved off the viewport**
49.10. **49.10 — Reset pager offset and seed the new focused transform without a one-frame mismatch**

**Chapter checkpoint:** all 10 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 50 — Survive surface, size, attachment, and saved-state changes

**Purpose:** Make lifecycle reconstruction explicit instead of relying on a lucky callback order.

**Source anchors:** `surfaceCreated/Changed/Destroyed`, attach/detach, saved framing, coroutine cancellation, trim callbacks

50.1. **50.1 — Handle surface creation independently from document availability**
50.2. **50.2 — Handle viewport-size changes independently from surface creation**
50.3. **50.3 — Preserve logical center and scale relative to fit when the viewport changes**
50.4. **50.4 — Detach the native surface before `surfaceDestroyed` returns**
50.5. **50.5 — Separate temporary window detachment from permanent engine destruction**
50.6. **50.6 — Save focused index, logical center, and relative scale instead of raw view translation**
50.7. **50.7 — Restore framing only after both document and viewport dimensions are known**
50.8. **50.8 — Cancel preparation coroutines and animations when their owning view lifecycle ends**
50.9. **50.9 — Forward normal and aggressive memory pressure without destroying still-required CPU state**

**Chapter checkpoint:** all 9 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 51 — Make failures explicit without corrupting visible state

**Purpose:** Preserve the best valid frame and release ownership correctly when one stage fails.

**Source anchors:** Kotlin preparation failures, decoder factory failure, tile failure, JNI errors, callbacks and cleanup

51.1. **51.1 — Report file-preparation failure before native document insertion**
51.2. **51.2 — Reject a document when no decoder backend can be constructed**
51.3. **51.3 — Treat complete-image fallback failure as a document-level rendering error**
51.4. **51.4 — Treat a finer tile failure as local while keeping already visible fallback content**
51.5. **51.5 — Clear or propagate a pending JNI exception according to the bridge contract**
51.6. **51.6 — Ignore a callback that belongs to a destroyed view or superseded document generation**
51.7. **51.7 — Deliver public error callbacks on the Android main thread**
51.8. **51.8 — Make decoder, descriptor, surface, and engine cleanup idempotent**
51.9. **51.9 — Return a specific unsupported or malformed-format result instead of a generic black frame**

**Chapter checkpoint:** all 9 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

# Phase 8 — Prediction, measurement, optional zero-copy, and format boundaries

**Milestone:** Optimization is measured after correctness. The copy path remains canonical; hardware-buffer import is capability-gated and retained only when end-to-end traces justify it.

## Chapter 52 — Predict motion and prewarm useful detail

**Purpose:** Add source-specific prediction only after the non-predictive wanted-set scheduler is correct.

**Source anchors:** velocity state, lookahead, margin, adjacent-level prewarm and priority penalties

52.1. **52.1 — Calculate transform velocity from consecutive logical visible centers and monotonic elapsed time**
52.2. **52.2 — Smooth velocity with the source-defined exponential moving-average weight**
52.3. **52.3 — Project the visible rectangle by the source-defined lookahead duration**
52.4. **52.4 — Cap projected displacement to the source-defined number of tile widths**
52.5. **52.5 — Enable and disable lookahead with separate velocity thresholds to avoid rapid toggling**
52.6. **52.6 — Union current visibility, normal margin, and predicted visibility into one wanted range**
52.7. **52.7 — Prewarm one adjacent finer level only inside the source-defined central viewport fraction**
52.8. **52.8 — Assign prewarm work a lower priority than currently visible target tiles**
52.9. **52.9 — Promote a neighbor's work when pager motion makes that page visible**
52.10. **52.10 — Verify prediction improves useful hit rate without unbounded decode work**

**Chapter checkpoint:** all 10 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 53 — Protect and measure the frame budget

**Purpose:** Tune only the source-defined controls that can change frame latency, then verify them instead of assuming they help.

**Source anchors:** thread priorities, worker count, upload cap, swap pacing, lock boundaries

53.1. **53.1 — Calculate the frame-time budget at 60 Hz and 120 Hz**
53.2. **53.2 — Use swap pacing instead of rendering faster than the display can present**
53.3. **53.3 — Raise render-thread scheduling priority with the source-defined nice value**
53.4. **53.4 — Lower decode-worker scheduling priority with the source-defined nice value**
53.5. **53.5 — Choose the bounded source-defined decode-worker count from available CPUs**
53.6. **53.6 — Limit texture uploads per frame to the source-defined cap**
53.7. **53.7 — Keep decoding, texture upload, and EGL swap outside the engine state lock**
53.8. **53.8 — Measure whether each tuning choice changes missed frames, latency, or battery-relevant idle work**

**Chapter checkpoint:** all 8 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 54 — Trace engine work with Perfetto slices

**Purpose:** Make thread overlap and frame cost visible without turning ordinary verification into an observation journal.

**Source anchors:** `trace.h` scoped traces and `TE_*` frame, schedule, upload, draw, swap, decode, and orphan slices

54.1. **54.1 — Define a Perfetto trace slice as a named time interval on one thread**
54.2. **54.2 — Use a small RAII object to end a trace slice on every scope exit**
54.3. **54.3 — Trace frame, scheduling, upload, draw, and swap as separate render-thread intervals**
54.4. **54.4 — Trace decode work on each worker and orphan cleanup on the render thread**
54.5. **54.5 — Capture one controlled fit, zoom, pan, and page workload in Perfetto**
54.6. **54.6 — Distinguish CPU duration, thread overlap, waiting, and display pacing in the trace**
54.7. **54.7 — Compare changes with the same input workload before accepting an optimization**

**Chapter checkpoint:** all 7 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 55 — Allocate optional shared pixel storage with `AHardwareBuffer`

**Purpose:** Introduce the optional shared allocation as a separate ownership model, not as an assumed zero-cost replacement.

**Source anchors:** `TileBuffer`, `TileBufferPool`, runtime AHardwareBuffer API, CPU mapping and stride

55.1. **55.1 — Define `AHardwareBuffer` as an Android allocation that CPU and GPU APIs may share**
55.2. **55.2 — Resolve required hardware-buffer functions at runtime and expose an explicit capability result**
55.3. **55.3 — Describe width, height, format, usage flags, layers, and implementation-chosen stride**
55.4. **55.4 — Allocate one RGBA tile buffer with CPU-write and GPU-sample usage**
55.5. **55.5 — Lock the buffer for CPU writing and calculate row addresses from the returned stride**
55.6. **55.6 — Define the CPU-write completion fence returned by unlock and retain its file descriptor**
55.7. **55.7 — Represent free, CPU-writing, ready-for-import, GPU-using, and recyclable ownership states**
55.8. **55.8 — Pool, trim, and destroy buffers without recycling one still referenced by CPU or GPU work**

**Chapter checkpoint:** all 8 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 56 — Import a hardware buffer into OpenGL with `EGLImage`

**Purpose:** Connect the shared Android allocation to a texture only when the current EGL context supports every required extension.

**Source anchors:** EGL extension discovery, `eglGetNativeClientBufferANDROID`, `eglCreateImageKHR`, `glEGLImageTargetTexture2DOES`

56.1. **56.1 — Read the EGL extension string and match complete extension names**
56.2. **56.2 — Resolve the EGLImage and external-image function pointers**
56.3. **56.3 — Convert the hardware buffer into an EGL client buffer**
56.4. **56.4 — Create one EGLImage owned by the current EGL display**
56.5. **56.5 — Bind the EGLImage storage to an OpenGL texture name**
56.6. **56.6 — Keep import and destruction on the thread that owns the current context**
56.7. **56.7 — Destroy EGLImage and texture objects safely during pool trim and context loss**

**Chapter checkpoint:** all 7 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 57 — Synchronize CPU writes and GPU reads with native fences

**Purpose:** Prevent asynchronous CPU and GPU access from racing on the same shared allocation.

**Source anchors:** hardware-buffer write fences, GPU release fences, file-descriptor ownership

57.1. **57.1 — Distinguish the CPU-write completion fence from the GPU-release fence used before buffer reuse**
57.2. **57.2 — Receive the write-completion fence produced when CPU access is unlocked**
57.3. **57.3 — Wait or import that fence before the GPU samples the buffer**
57.4. **57.4 — Create one GPU release fence after the last draw that uses the buffer in a frame**
57.5. **57.5 — Delay pool recycling until the release fence signals**
57.6. **57.6 — Transfer and close each fence file descriptor exactly once**
57.7. **57.7 — Fall back safely when required native-fence support is unavailable**

**Chapter checkpoint:** all 7 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 58 — Integrate and gate the zero-copy upload path

**Purpose:** Keep the proven copy path available and activate shared-buffer import only through capability and performance gates.

**Source anchors:** upload-mode property, `DecodeDest`, hardware-buffer adoption, copy fallback, cache and pool state

58.1. **58.1 — Read copy, zero-copy, or automatic upload mode once at engine startup**
58.2. **58.2 — Enable zero-copy only when hardware-buffer, EGLImage, and native-fence capabilities all pass**
58.3. **58.3 — Provide a writable hardware-buffer destination to a decode worker**
58.4. **58.4 — Stamp partial-tile apron pixels while the buffer is CPU-mapped**
58.5. **58.5 — Publish the completed buffer and its write fence to the upload queue**
58.6. **58.6 — Adopt the buffer as a texture on the render thread**
58.7. **58.7 — Fall back to the ordinary copy upload when allocation, decoding, synchronization, or import fails**
58.8. **58.8 — Move buffers correctly through tile cache, eviction, orphan, and pool ownership**
58.9. **58.9 — Recreate imported resources after EGL context loss without losing the copy fallback**
58.10. **58.10 — Keep zero-copy enabled only when controlled Perfetto A/B traces show a useful end-to-end improvement**

**Chapter checkpoint:** all 10 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

## Chapter 59 — Harden format support and keep HDR claims honest

**Purpose:** State exactly which files can be decoded and exactly what the current output pipeline preserves.

**Source anchors:** format probes, decoder capabilities, Ultra HDR metadata, SDR EGL/shader path

59.1. **59.1 — Probe real decoder capability instead of trusting a static format table**
59.2. **59.2 — Exercise JPEG through every backend actually available on the device**
59.3. **59.3 — Exercise PNG and WebP through every backend actually available on the device**
59.4. **59.4 — Gate HEIF and AVIF on runtime support and use the bounded fallback only within its contract**
59.5. **59.5 — Treat GIF as a still image only when the public viewer contract says so**
59.6. **59.6 — Probe BMP support instead of assuming that successful signature detection guarantees decoding**
59.7. **59.7 — Treat TIFF and DNG as a shared container family while reporting actual platform decode support honestly**
59.8. **59.8 — Distinguish malformed input from a well-formed but unsupported format**
59.9. **59.9 — Report Ultra HDR gain-map presence separately from decoded base-image pixels**
59.10. **59.10 — Keep the current RGBA/EGL/shader path explicitly standard-dynamic-range**
59.11. **59.11 — State that full HDR output requires gain-map processing, HDR color values, a compatible EGL surface, and different shader math**

**Chapter checkpoint:** all 11 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

# Phase 9 — Independent integration and reference comparison

**Milestone:** The learner-authored engine passes correctness, lifecycle, stress, and performance gates before the sealed reference implementation is opened for comparison.

## Chapter 60 — Integrate, test, and compare the complete engine independently

**Purpose:** Prove the learner-authored design before using the sealed source as a comparison target.

**Source anchors:** all module Kotlin, C++, JNI, CMake, Gradle, manifest, shrinker, and verification contracts

60.1. **60.1 — Rebuild every planned source file from the curriculum contracts and the learner's own design**
60.2. **60.2 — Build all configured ABIs with warnings enabled and no hidden reference source on the classpath**
60.3. **60.3 — Run pure tests for rectangles, affine transforms, EXIF, fit, pyramids, tiles, level choice, decode requests, and quads**
60.4. **60.4 — Run JNI tests for creation, destruction, global references, Java-thread and native-thread callbacks, exceptions, and file-descriptor ownership**
60.5. **60.5 — Run decoder tests for NDK, Java, bounded-master, malformed, unsupported, orientation, and partial-edge requests**
60.6. **60.6 — Run first-coverage, ancestor-fallback, refinement, crossfade, apron, and seam tests**
60.7. **60.7 — Run stale-generation, duplicate-queue, priority, cache-budget, and orphan-cleanup stress tests**
60.8. **60.8 — Run pan, fling, pinch, quick-scale, rubber-band, double-tap, pager, and restore tests**
60.9. **60.9 — Run surface recreation, EGL context loss, memory trim, hidden-app, and permanent teardown tests**
60.10. **60.10 — Capture copy-path Perfetto traces for fit, zoom, pan, and page workloads**
60.11. **60.11 — Capture zero-copy A/B traces only on a device that passes every capability probe**
60.12. **60.12 — Check every source responsibility against the native and Kotlin coverage matrices**
60.13. **60.13 — Unseal the original implementation only after the independent engine passes its gates**
60.14. **60.14 — Compare behavior, resource ownership, scheduling, errors, and measured performance rather than comparing text line by line**
60.15. **60.15 — Document deliberate differences and keep the design better supported by tests, traces, and Android contracts**

**Chapter checkpoint:** all 15 lessons are manually implemented and verified before this chapter is used as a completed prerequisite.

