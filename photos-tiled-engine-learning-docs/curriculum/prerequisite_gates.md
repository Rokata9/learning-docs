# Prerequisite gates

These are hard ordering rules. A later lesson may not bypass one by adding unexplained arithmetic or terminology.

## 1. Familiar programming is not re-taught as if the learner were new to programming

Branches, loops, parameters, collections, and state are introduced through their C++ form and engine-specific consequences. They do not each receive isolated beginner-programming lessons.

## 2. C++ object lifetime exists before JNI handles

Functions, classes, pointers, destructors, resource acquisition is initialization, unique ownership, and pointer/integer handle conversion exist before Kotlin retains a native address.

## 3. Java-thread JNI callbacks exist before native-thread JNI callbacks

Local/global references, descriptors, method identifiers, and exception state are first exercised on the Java-originated call thread. Native thread creation and synchronization are taught before `AttachCurrentThread` appears.

## 4. Raster memory exists before a decoder or texture upload

The learner can calculate RGBA bytes, stride-aware offsets, destination capacity, and half-open rectangle dimensions before an API relies on them.

## 5. Resampling exists before reduced or fallback decoding

Output-to-input mapping, nearest filtering, linear interpolation, bilinear interpolation, and edge handling exist before platform filters or a bounded master image hide those operations.

## 6. Encoded files are separated from decoded pixels before decoder backends

Container, codec, metadata, compressed payload, full decode, region decode, and reduced decode are defined before NDK or Java decoder APIs appear.

## 7. Thread synchronization exists before surface and GPU ownership

Mutex, lock scope, condition variable, wake predicate, shutdown, and joining are implemented before the render thread owns EGL or OpenGL resources.

## 8. Android surface ownership exists before EGL

`TiledImageView`, `SurfaceHolder`, Java `Surface`, `ANativeWindow*`, reference ownership, and blocking detach are defined before an EGL window surface is created.

## 9. A coordinate space is defined before the first conversion from it

View-local and normalized-device spaces are defined before OpenGL conversion. Stored and logical image spaces are defined before EXIF. Pyramid-level space appears only after a complete level exists. Tile-local space appears only after a tile exists.

## 10. EGL context exists before OpenGL calls

The render thread, current context, and current window surface are known before any OpenGL call is considered legal.

## 11. A generated ordinary copy-upload frame exists before file decoding

Known CPU RGBA bytes travel through texture copy, draw, swap, native-thread callback, and readiness before a decoder, pyramid, tile, or hardware buffer is added.

## 12. Affine transforms exist before EXIF

Point mapping, composition order, mirroring, rotation, rectangle-corner mapping, and inversion exist before the eight orientation cases.

## 13. Whole-image levels exist before tiles

A pyramid level is one complete reduced image. Only afterward is a tile defined as one rectangle cut from that level. “Level pixel” and “tile pixel” cannot appear earlier.

## 14. Real view transforms exist before visible tile selection

Fit, translation, inverse mapping, and the visible logical rectangle use actual `TiledImageView` dimensions. Invented diagram viewports are prohibited as engine evidence.

## 15. Geometry exists before decoder requests

Pyramid dimensions, tile rectangles, level/logical mapping, target-level selection, visible ranges, and expected outputs exist before `RegionRequest` carries them.

## 16. The decoder contract exists before backend details

Logical coordinates, reduction, destination ownership, stride, capacity, and failure semantics are fixed before NDK or Java implementations.

## 17. One complete single-document frame exists before refinement

The top complete level is decoded, uploaded, drawn, swapped, and used for readiness before exact tiles, ancestor replacement, or crossfade.

## 18. Exact replacement exists before crossfade

A finer tile must replace the correct logical region at the same view position before opacity animation is added.

## 19. The copy path exists before zero-copy

Texture upload, partial-edge apron, pooling, cache eviction, and cleanup remain independently correct before AHardwareBuffer, EGLImage, or fences.

## 20. One document exists before the filmstrip

Focused rendering, scheduling, caching, lifecycle, and failure handling work before neighbor preparation and paging.

## 21. Correctness exists before optimization

Stale-work rejection, bounded memory, deterministic teardown, surface recreation, and explicit failures exist before prediction, thread tuning, or zero-copy A/B work.

## Number rule

Use source constants when the source defines them. Use runtime dimensions when Android supplies them. Toy values may appear only as explicitly labelled bridges and must map to a real source or runtime value in the same lesson before supporting a design conclusion.
