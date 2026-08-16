# Liquid Glass Android course — current state

**Updated:** 2026-08-16  
**Course version:** 6.8.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro

## Authoritative progress

- Learner-confirmed complete: **58 of 216 lessons**.
- Completed through: **Lesson 6.7 — Crop the correct region**.
- Completed chapters: **1, 2, 3, 4, and 5**.
- Chapter 6: in progress; **7 of 11 lessons complete**.
- Current unresolved checkpoint: **Lesson 6.8 — Keep the sample current**.
- Generated frontier: **Lesson 6.8 — Keep the sample current**.
- Next planned lesson after the unresolved checkpoint: **Lesson 6.9 — Avoid feedback loops**.
- Lesson 6.8 is generated and is not learner-confirmed complete.

## Current lesson files

```text
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
course/chapters/chapter-06/lesson-06-07-crop-the-correct-region.html
course/chapters/chapter-06/lesson-06-08-keep-the-sample-current.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/KeepSampleCurrentExplorer.kt
```

## Completed Lesson 6.7 prerequisite contract

The recorded backdrop and panel now share an explicit coordinate route:

```text
BackdropHost LayoutCoordinates
+
GlassPanel LayoutCoordinates
→ panel bounds expressed in BackdropHost-local pixels
→ panel-local clip
→ translate backgroundLayer by negative crop top-left
→ drawLayer(backgroundLayer)
→ matching sharp panel-sized region
```

At the default controlled position, the crop origin is `(52, 60) dp` in backdrop-local space and the replay translation is `(-52, -60) dp`. Lesson 6.7 proved the current settled-state mapping, but deliberately did not prove freshness while either producer changes.

## Generated Lesson 6.8 contract

A current sharp sample is treated as a pair of independently produced values:

```text
current layer recording, replayed as backdrop pixels
+
current panel bounds in backdrop-local coordinates
→ current sharp panel sample
```

The two update routes are:

```text
backdrop drawing input changes
→ backdrop draws again
→ currentBackgroundLayer.record { drawContent() }
→ current layer recording
```

```text
panel geometry changes
→ layout and placement run
→ current LayoutCoordinates
→ localBoundingBoxOf(..., clipBounds = false)
→ current crop bounds
```

The lesson compares four selectable routes:

1. current layer recording + current bounds;
2. captured layer recording + current bounds;
3. current layer recording + captured bounds;
4. captured layer recording + captured bounds.

The captured layer and captured rectangle are deliberately frozen diagnostic evidence. They are not presented as a production architecture.

The controlled trace uses:

```text
R_b(s) = (250 - 14s, 62 + 6s) dp · backdrop-local marker
P_p(m) = (48 + 8m, 58 + 4m) dp · parent-local panel origin
C_b(m) = P_p(m) - (12, 10) dp · backdrop-local crop origin
R_panel = R_b(selected layer step) - C_b(selected bounds step)
```

At current steps `s = 6` and `m = 6`, the desired marker is `(82, 26) dp` in panel-local space. Freezing the selected layer alone produces error `(56, -24) dp`; freezing bounds alone produces `(32, 16) dp`; freezing both produces `(88, -8) dp`.

## Explicit Lesson 6.8 boundaries

Lesson 6.8 does not yet:

- blur the selected region;
- allow `GlassPanel` to enter the backdrop recording;
- prove atomic same-frame synchronization for an arbitrary production architecture;
- perform CPU pixel readback;
- measure render-target memory or GPU cost.

Lesson 6.9 introduces feedback-loop prevention.

## Android preview rules

- Complete chapter-screen previews live in `ChapterXXScreen.kt`.
- Direct custom-composable previews live in the custom composable's own Kotlin file.
- Both preview levels must allow vertical scrolling through the complete generated content in Android Studio Preview.

Course progress: 58 of 216 lessons completed.
