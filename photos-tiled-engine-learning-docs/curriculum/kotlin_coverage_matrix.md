# Kotlin responsibility coverage matrix

This table maps every behavior-bearing Kotlin path in the module to the chapter that rebuilds it. Routine property accessors are covered with the state they expose.

| Kotlin path | Course coverage | Rebuild responsibility |
|---|---|---|
| `ImageFormat.kt`: `SniffedFormat`, `sniffImageFormat` | Ch. 11, 27, 59 | Container signatures, short reads, unknown input, use during file preparation, capability truth. |
| `TileEngineNative`: library load and create/destroy | Ch. 4–5 | Shared-library name, opaque handle, ownership, idempotent close. |
| `TileEngineNative.EngineEventSink` | Ch. 5, 17, 51 | Global reference, method IDs, Java-thread test callback, render/decode-thread callback, main-thread delivery, stale/destroyed sink rules. |
| `TileEngineNative`: surface and viewport calls | Ch. 14, 35, 50 | Surface transfer, measured viewport, detach acknowledgement, recreation. |
| `TileEngineNative`: document calls | Ch. 27, 33, 35, 47, 51 | Descriptor ownership, insert/replace/release, focused document, failure cleanup. |
| `TileEngineNative`: transform call | Ch. 35, 43–46 | Coherent scale/translation publication from gestures and animations. |
| `TileEngineNative`: pager calls | Ch. 47–49 | Page gap, pager offset, focus switch. |
| `TileEngineNative`: trim call | Ch. 35, 50 | Normal/aggressive pressure publication. |
| `RegionDecodeShim`: JNI-callable decode and bitmap release | Ch. 31 | Worker attachment, request call, temporary bitmap, pixel locking, reuse return, exceptions. |
| `RegionDecodeShim`: decoder pool | Ch. 32 | Synchronized borrow/return, lazy creation, unavailable-backend cache, close. |
| `RegionDecodeShim`: reusable bitmap pool | Ch. 32 | Exact compatible reuse, retry without `inBitmap`, bounded pool, recycling. |
| `RegionDecodeShim`: bounded master fallback | Ch. 32 | Power-of-two bound, display-to-stored normalization, actual reduction, crop/resample, close. |
| `TiledImageView`: class construction and engine sink | Ch. 14, 17 | Surface host, native owner, render-thread callback trampoline. |
| `TiledImageView`: public listener and image metadata state | Ch. 27, 43, 47, 51, 59 | Dimensions, readiness, errors, format/HDR info, focused index, photo-change callback. |
| `setImage`, `setPhotos` | Ch. 47 | Input validation, generation, gallery reset, restored/start index, first window. |
| `updateWindow` | Ch. 47 | Focused ±1 calculation, asynchronous preparation, stale result rejection, release outside window. |
| `switchFocusTo` | Ch. 47, 49 | Atomic native focus, metadata/transform adoption, window slide, callback. |
| `PreparedImage`, `prepareImage`, `applyDocument` | Ch. 27, 47, 51, 59 | Bounds, format, EXIF, descriptors, shim, native transfer, error and HDR extensions. |
| `maybeInitTransform`, `centerOn`, `imagePointAtViewportCenter` | Ch. 21, 43 | Fit, logical center, pending restore framing. |
| `clampTranslation`, `clampAxis`, `pushTransform` | Ch. 21, 43–46 | Axis bounds and one coherent native update. |
| Surface callbacks | Ch. 14, 50 | Created/changed/destroyed, viewport update, blocking detach. |
| Attach/detach and `ComponentCallbacks2` | Ch. 50 | Registration lifetime, memory pressure, permanent teardown. |
| Saved state | Ch. 50 | Focused index, relative scale, logical center, delayed restore. |
| `onTouchEvent` and animation cancellation | Ch. 44–46 | Detector routing, gesture ownership, interruption. |
| `ScaleListener` | Ch. 45 | Focal anchor, two-finger movement, raw versus damped scale, quick scale. |
| `GestureListener` scroll/fling/double tap | Ch. 44, 46 | Pan, blocked delta, fling, double-tap target and animation. |
| `dragPager`, `settlePager`, pager animator | Ch. 49 | Resistance, velocity/distance target, settle, focus handoff. |
| `settleIfOutOfBounds`, `animateTransformTo`, runner | Ch. 46 | Rubber-band recovery, logarithmic scale interpolation, frame publication, interruption. |

## Boundary rule

A Kotlin path belongs in this course only when it changes native input, image metadata, visible framing, gestures, paging, lifecycle, memory pressure, decoder fallback, or native callbacks. Grid, navigation, and transition code remain excluded.
