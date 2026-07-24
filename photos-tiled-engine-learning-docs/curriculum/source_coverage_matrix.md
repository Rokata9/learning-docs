# Native/build source-coverage matrix

This table assigns each behavior-bearing native/build responsibility to a teaching and rebuild location. Chapter references do not reveal the sealed implementation body.

| Responsibility | Source anchors | Course coverage | What is rebuilt |
|---|---|---|---|
| Module packaging and native target | Gradle wrapper, root settings, `build.gradle.kts`, manifest, CMake, shrinker rules | Ch. 1–2, 5 | Subproject registration, library configuration, native target, app dependency, JNI preservation. |
| C++ language, logging, lifetime, and ownership | constructs used across all native files; `log.h` | Ch. 2–3; just-in-time additions in Ch. 12, 28–34, 54–58 | Source model, scalars, overflow, classes, RAII, smart ownership, containers, threads, polymorphism, casts, dynamic symbols. |
| JNI bridge and native object lifetime | `TileEngineNative.kt`, `jni_bridge.cpp` | Ch. 4–5, 14, 17, 27, 31, 51 | Load, create/destroy, handles, references, callbacks, native-thread attachment, surfaces, descriptors, exceptions. |
| Raster, stride, rectangles, and resizing | `geometry.h`, decoder results, bitmap and upload paths | Ch. 6–10 | RGBA pixels, row-major bytes, stride, capacity, half-open rectangles, nearest/linear/bilinear resampling, encoded/decoded boundary. |
| Format sniffing | `ImageFormat.kt` | Ch. 11, 59 | Magic bytes, known containers, short reads, malformed/unknown input, runtime decoder capability. |
| Thread synchronization and render-on-demand | `TileEngine` locks, condition variables, render/decode threads | Ch. 12–13, 34–42 | Publication, wake predicates, queues, workers, shutdown, frame orchestration. |
| Android surface handoff | `TiledImageView` callbacks, JNI native-window conversion, engine surface state | Ch. 14, 35, 50 | Surface host, ANativeWindow ownership, viewport, blocking detach, recreation. |
| EGL lifecycle | `GlRenderer` display/context/window-surface methods | Ch. 15, 50, 56–58 | Configuration, current binding, swap, detach, context loss, imported resources. |
| OpenGL renderer and ordinary copy upload | `gl_renderer.h/.cpp` | Ch. 16–17, 26, 40–42 | View/NDC conversion, shaders, blending, textures, UVs, copy uploads, quads, pooling, first frame. |
| Stored/logical coordinate and EXIF geometry | `geometry.h`, Kotlin transforms | Ch. 18–21, 43 | Named spaces, affine transforms, all eight orientations, fit, inverse visible rectangle, clamping. |
| Pyramid and tile geometry | `levelDim`, level selection, tile keys, ranges | Ch. 22–26, 33, 36–38 | Whole-image levels, tile grids, target level, visible range, requests, quads, ancestor mapping. |
| Kotlin file preparation | `TiledImageView.prepareImage`, `PreparedImage` | Ch. 27, 47, 51, 59 | Coroutines, descriptors, dimensions, orientation, format, logical metadata, HDR probe, cleanup. |
| Region-decoder contract and factory | `region_decoder.h`, `createRegionDecoder` | Ch. 28 | Logical request, destination, ownership, failure, backend selection. |
| NDK decoder backend | `region_decoder.cpp` NDK path | Ch. 29–30 | Dynamic symbols, mapping, probe, crop, target size, decode, cleanup. |
| Java decoder and bounded fallback | `JavaRegionDecoder`, `RegionDecodeShim.kt` | Ch. 31–32 | Worker JNI, inverse orientation, bitmap stride, gather, pools, reuse, bounded master, close. |
| Document and tile model | `TileEngine::Image`, levels, tiles, generations, orphan ownership | Ch. 33–35 | Containers, shared lifetime, state publication, replacement, surface and transform state. |
| Scheduling and queues | `scheduleFrameLocked`, `DecodeJob`, workers | Ch. 34–36, 52 | State transitions, heap, wanted set, cancellation, center priority, prediction. |
| Coverage, fallback, and refinement | top-level complete tile and `buildDocDrawListLocked` | Ch. 37–39 | First complete frame, readiness, ancestor mapping, exact replacement, crossfade. |
| Texture pool, cache, and integrated loop | `GlRenderer` pool, budget, eviction, render loop | Ch. 40–42, 53–54 | Partial edges, apron, budget, LRU, uploads, swap, traces. |
| Focused transforms and gestures | `TiledImageView` transform and gesture methods | Ch. 43–46 | Fit, clamp, pan, fling, pinch, quick scale, rubber band, double tap, animation. |
| Multi-document filmstrip and pager | focused ±1 preparation, engine draw offsets, pager gestures | Ch. 47–49 | Bounded window, neighbor warm-up, shared surface, thresholds, focus switch. |
| Lifecycle, memory, and failures | view/native lifecycle paths, trim, callbacks | Ch. 50–51 | Surface recreation, saved framing, cancellation, error isolation, cleanup. |
| Prediction, tuning, and tracing | velocity state, nice values, worker count, upload cap, `trace.h` | Ch. 52–54 | Lookahead, frame budget, priorities, pacing, Perfetto slices, controlled comparisons. |
| Hardware-buffer path | `hardware_buffer.h/.cpp`, zero-copy branches | Ch. 55–58 | AHardwareBuffer, EGLImage, fences, pool states, capability gate, copy fallback. |
| Format and HDR boundary | format probes, Ultra HDR metadata, SDR EGL/GL path | Ch. 59 | Actual support, still-image GIF contract, gain-map detection, honest SDR scope. |
| Independent completion | all module files and contracts | Ch. 60 | Build, pure tests, JNI, decoders, rendering, stress, gestures, lifecycle, traces, unseal, compare. |

## Final gate

Lesson 60.12 checks this matrix and the Kotlin matrix before Lesson 60.13 permits the sealed implementation to be opened. A missing responsibility blocks comparison.
