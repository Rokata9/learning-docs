# Liquid Glass Android course — current state

**Updated:** 2026-08-13  
**Course version:** 6.2.1  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  

## Authoritative progress

- Learner-confirmed complete: **52 of 216 lessons**.
- Completed through: **Lesson 6.1 — Composition, layout, and drawing**.
- Completed chapters: **1, 2, 3, 4, and 5**.
- Chapter 6: in progress; **1 of 11 lessons complete**.
- Current unresolved checkpoint: **Lesson 6.2 — Draw order and ownership**.
- Generated frontier: **Lesson 6.2**.
- Next planned after explicit completion: **Lesson 6.3 — Graphics layers**.

## Current lesson files

```text
course/chapters/chapter-06/lesson-how-android-draws-the-scene.html
course/chapters/chapter-06/lesson-06-01-composition-layout-and-drawing.html
course/chapters/chapter-06/lesson-06-02-draw-order-and-ownership.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/Chapter06Screen.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter06/DrawOrderOwnershipExplorer.kt
```

## Lesson 6.2 scope

- Draw order means when a draw is applied relative to other draws.
- Draw ownership means which node's code issued the draw command.
- BackdropScene, GlassPanel, and ForegroundLabel are siblings of one Box parent.
- Equal-zIndex siblings use the controlled source order in this lesson.
- `Modifier.zIndex` can override that sibling order for children of the same parent.
- Sibling order is separate from one node's internal `drawBehind` → `drawContent()` → overlay order.
- A selected-position trace lists only owners whose geometry covers that coordinate.
- GlassPanel does not automatically own or sample BackdropScene's sibling draws.

## Android preview rule

- Complete Chapter 6 previews live in `Chapter06Screen.kt`.
- Direct `DrawOrderOwnershipExplorer` previews live in `DrawOrderOwnershipExplorer.kt`.
- Both preview levels have light and dark variants.

Course progress: 52 of 216 lessons completed.


## Lesson 6.2 clarification

- Step 12 now states the missing object directly: drawing later does not pass a readable backdrop image or texture into `GlassPanel`.
- Later Chapter 6 lessons will explicitly record the backdrop, map/crop the panel region, and replay or read the recorded pixels.
- The sibling-order buttons and walkthrough SVG now use one canonical preset state. Steps 9 and 10 load their teaching presets explicitly, but the buttons remain live for comparison.
