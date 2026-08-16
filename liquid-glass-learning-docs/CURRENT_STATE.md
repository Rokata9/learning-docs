# Liquid Glass Android course — current state

**Updated:** 2026-08-15  
**Course version:** 6.7.0  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro

## Authoritative progress

- Learner-confirmed complete: **57 of 216 lessons**.
- Completed through: **Lesson 6.6 — Record the background**.
- Completed chapters: **1, 2, 3, 4, and 5**.
- Chapter 6: in progress; **6 of 11 lessons complete**.
- Current unresolved checkpoint: **Lesson 6.7 — Crop the correct region**.
- Generated frontier: **Lesson 6.7 — Crop the correct region**.
- Next planned lesson after the unresolved checkpoint: **Lesson 6.8 — Keep the sample current**.
- Lesson 6.7 is generated and is not learner-confirmed complete.

## Current lesson files

```text
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
course/chapters/chapter-06/lesson-06-06-record-the-background.html
course/chapters/chapter-06/lesson-06-07-crop-the-correct-region.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/CropCorrectRegionExplorer.kt
```

## Completed Lesson 6.6 prerequisite contract

The controlled recording route is now established:

```text
BackdropArtwork draw commands
→ backgroundLayer.record {
      this@drawWithContent.drawContent()
  }
→ recorded backgroundLayer
→ drawLayer(backgroundLayer)
→ current draw target
```

`GlassPanel` remains a later sibling outside the backdrop recording owner. One recorded layer can be replayed into more than one target, but the full-layer replay alone does not identify the panel-sized source region.

## Generated Lesson 6.7 contract

The scene uses three named coordinate spaces:

```text
ParentScene-local coordinates
→ place BackdropHost and GlassPanel

BackdropHost-local coordinates
→ address pixels inside backgroundLayer

GlassPanel-local coordinates
→ draw into the fixed panel-sized target beginning at (0, 0)
```

The current layout route is:

```text
BackdropHost LayoutCoordinates
+
GlassPanel LayoutCoordinates
→ backgroundCoordinates.localBoundingBoxOf(
      sourceCoordinates = panelCoordinates,
      clipBounds = false,
  )
→ panel bounds expressed in background-local pixels
```

The selected-region replay is:

```text
panel-local clip rectangle
→ translate full backgroundLayer by negative crop top-left
→ drawLayer(backgroundLayer)
→ matching sharp panel-sized region
→ later panel tint, border, and details
```

At the default controlled position:

```text
BackdropHost parent origin = (12, 10) dp
GlassPanel parent origin = (64, 70) dp
crop origin in backdrop space = (52, 60) dp
crop max = (262, 190) dp
replay translation = (-52, -60) dp
```

The lesson compares the correct mapping with two deliberate defects:

- using panel parent coordinates directly as layer-local source coordinates;
- replaying without any translation.

## Explicit Lesson 6.7 boundaries

Lesson 6.7 does not yet:

- blur the selected region;
- keep the recorded pixels and measured bounds fresh during scrolling or animation;
- prevent the glass from capturing itself;
- convert the layer to a CPU-readable bitmap;
- draw a production performance conclusion.

Lesson 6.8 introduces freshness while the scene changes.

## Android preview rules

- Complete chapter-screen previews live in `ChapterXXScreen.kt`.
- Direct custom-composable previews live in the custom composable's own Kotlin file.
- Both preview levels must allow vertical scrolling through the complete generated content in Android Studio Preview.

Course progress: 57 of 216 lessons completed.
