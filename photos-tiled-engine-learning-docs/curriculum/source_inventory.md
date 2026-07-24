# Source inventory used to design the curriculum

This inventory is limited to the deleted module and the Kotlin/C++ contracts that directly belong to it.

## Build and packaging

| File | Lines | Responsibility |
|---|---:|---|
| `tiled-engine/build.gradle.kts` | 72 | Android library configuration, SDK bounds, CMake connection, Java/Kotlin targets, dependencies, and tests. |
| `gradle/wrapper/gradle-wrapper.properties` | 6 | Gradle distribution selected by the root build; the attached project uses Gradle 9.3.1. |
| `tiled-engine/src/main/AndroidManifest.xml` | 3 | Component-free Android library manifest. |
| `tiled-engine/src/main/cpp/CMakeLists.txt` | 29 | C++17 shared library, source list, warnings, and Android/EGL/GLES/JNI/dynamic-loader libraries. |
| `consumer-rules.pro`, `proguard-rules.pro` | small | Preservation of JNI-called classes and methods. |

## Kotlin

| File | Lines | Responsibility groups |
|---|---:|---|
| `ImageFormat.kt` | 78 | Magic-byte container identification and explicit unknown format. |
| `TileEngineNative.kt` | 113 | Thin JNI declarations, native handle, surface/document/transform/pager/memory calls, and native callback sink. |
| `RegionDecodeShim.kt` | 366 | `BitmapRegionDecoder` pool, bitmap reuse, JNI-callable fallback, bounded 2048-pixel master image, and teardown. |
| `TiledImageView.kt` | 1,285 | Public API, focused ±1 document window, metadata preparation, EXIF/HDR data, surface lifecycle, transforms, gestures, pager, saved state, memory callbacks, and native event dispatch. |

## C++ headers

| File | Lines | Responsibility groups |
|---|---:|---|
| `log.h` | 25 | Android logging macros. |
| `trace.h` | 46 | Scope-owned trace slices. |
| `geometry.h` | 265 | RGBA constants, affine transforms, EXIF geometry, pyramid dimensions, level selection, rectangles, tile keys, and draw quads. |
| `gl_renderer.h` | 123 | EGL/OpenGL lifecycle and texture-management contract. |
| `region_decoder.h` | 160 | Logical-space region request, output ownership, padded destination, and polymorphic decoder factory. |
| `hardware_buffer.h` | 160 | Hardware-buffer allocation, EGLImage import, fences, and pool ownership. |
| `tile_engine.h` | 407 | Public engine API, document/tile/job state, queues, locks, surfaces, transforms, cache, threads, and zero-copy mode. |

## C++ implementations

| File | Lines | Responsibility groups |
|---|---:|---|
| `jni_bridge.cpp` | 155 | C ABI, `JNI_OnLoad`, handle conversion, JNI validation, native-window conversion, and descriptor-failure cleanup. |
| `gl_renderer.cpp` | 375 | EGL objects, shaders, fixed GL state, quad drawing, copy uploads, partial-tile apron, and texture pool. |
| `region_decoder.cpp` | 460 | Runtime `AImageDecoder`, memory mapping, NDK region decode, Java callback backend, EXIF gather, and factory probes. |
| `hardware_buffer.cpp` | 426 | Runtime hardware-buffer API, CPU locks, EGLImage, native fences, buffer pool, trim, and teardown. |
| `tile_engine.cpp` | 1,449 | Render/decode threads, state publication, document generations, scheduling, priority heap, uploads, draw-list construction, ancestor fallback, crossfade, cache eviction, paging, tracing, and memory trim. |

The source inventory contains 5,997 non-test lines in the module files above. Sample template tests are not treated as design source.

## Verification harness

`NativeTestingActivity` may launch the rebuilt view and provide deterministic image files. The curriculum does not study its routine activity code and does not assign baseline-observation work.
