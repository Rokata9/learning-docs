# Scope reset — native tiled-image engine only

This repository revision replaces the earlier course draft that began with the grid-to-detail transition.

The canonical subject is now the native tiled-image viewer:

- the first image-content frame drawn into the `SurfaceView`;
- coarse-to-sharp refinement;
- image metadata, orientation, pixels, buffers, pyramid levels, and region decoding;
- JNI, C++, threads, queues, EGL, OpenGL ES, textures, drawing, and frame presentation;
- pan, pinch, double tap, fling, paging, lifecycle recovery, memory pressure, formats, caching, and measured performance.

`NativeTestingActivity` is the canonical test harness. It drives `TiledImageView` directly with synthetic large images.

## Replace rather than overlay

This package renames canonical curriculum and Lesson 1.1 files. Replace the current learning-repository contents with this package, or remove these obsolete paths before copying:

```text
curriculum/photos_transition_tiled_engine_curriculum.md
curriculum/photos_transition_tiled_engine_handoff.md
course/chapters/chapter-01/lesson-01-01-record-current-user-journey.html
learner-work/observations/lesson-01-01-current-user-journey.md
```

No Android implementation is included. All Android-project code remains 100% learner-authored.
