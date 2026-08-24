# Liquid Glass Android course — current state

**Updated:** 2026-08-23  
**Course version:** 7.12.1  
**Platform:** Kotlin + Jetpack Compose  
**Test device:** Pixel 8 Pro  
**Total curriculum size:** 216 lessons

## Authoritative progress

- Learner-confirmed complete: **70 of 216 lessons**.
- Completed through: **Lesson 7.8 — Inner highlight**.
- Completed chapters: **1, 2, 3, 4, 5, and 6**.
- Chapter 7: in progress; **8 of 12 lessons complete**.
- Current unresolved checkpoint: **Lesson 7.9 — Outer shadow**.
- Generated frontier: **Lesson 7.12 — Compare backgrounds**.
- Next planned lesson after the generated frontier: **Lesson 8.1 — What a shader does**.
- Lesson 7.9 is generated and is not learner-confirmed complete. Open questions remain.
- Lessons 7.10 through 7.12 are generated ahead and are not learner-confirmed complete.

Do not increase the completion count merely because a lesson was generated, revised, or reviewed. Wait for explicit learner confirmation.

## Current lesson files

```text
course/chapters/chapter-07/lesson-07-09-outer-shadow.html
course/chapters/chapter-07/lesson-07-10-fine-noise.html
course/chapters/chapter-07/lesson-07-10-companion-why-7-gives-unique-remainders.html
course/chapters/chapter-07/lesson-07-11-compose-the-layers.html
course/chapters/chapter-07/lesson-07-12-compare-backgrounds.html
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/OuterShadowExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/FineNoiseExplorer.kt
LiquidGlassLab/app/src/main/java/com/example/liquidglasslab/chapter07/Chapter07Screen.kt
```

## Last session compact record (2026-08-23)

Follow-up on **7.10** after the 2026-08-20 store/luma/chroma answers. The companion still used ramp, stripe, and rounding bin without pointing at pixels. The main-lesson first sentence claimed 7.6 interiors change slowly from pixel to pixel. That is the wrong region: the navy and orange fields are flat; only the blurred seam mixes.

**7.10 pictures now in the lesson + companion (still not complete until learner confirms):**
- 7.6 interiors are flat. The slow change is the navy/orange seam after blur.
- The 7.10 card is a teaching ramp (navy-family `0.32..0.36` across 640 columns), not the 7.6 glass redrawn.
- Ramp = the true slope. Stripe = one stored 8-bit integer occupying many columns. Both labelled on one picture.
- A rounding bin is the bucket of true values that all round to one integer. It is why columns 182–244 all store red `85`. It is not the remainder recipe.
- The remainder formula is a frozen 16-by-16 tile, not a random roll and not the stripe generator. `× 7` and `× 13` scramble neighbors so the grain tile does not look like vertical bars.
- A step of 7 wrapping at 16 visits all 16 remainder slots: if `k × 7` were a multiple of 16 for `k` in 1..15, `k` would need the four factors of 2, hence be a multiple of 16. A step of 8 collides at `k = 2`. These slots are not the 8-bit rounding bins.
- Slot-walk gray encodes `signed` from dark to light. It is not stored red. At amount `0.02`, one true red that stores 85 can land on about 80..90 (`0.02 × 255 ≈ 5.1` steps). The 83/84/85 picture holds only for a tiny amount near `0.5/255 ≈ 0.002`.
- `unit = slot/15` is never negative. `signed = 2×unit−1` for slot 2 is `−0.733`. Gray encodes that as a darker 0..255 byte; the add still uses the minus. Slot chips now show signed with its sign.
- Remainder uniqueness companion: `lesson-07-10-companion-why-7-gives-unique-remainders.html` (light and dark). The learner-authored walk-and-gap proof is the canonical explanation for why +7 wrapping at 16 visits every leftover once.

**7.9 answers from 2026-08-20 remain in that lesson (not complete until learner confirms):**
- Corner squares = **corner pockets** of the rounded path’s sharp bounding box.
- `y = stagePad + offsetY` with height = glass height is a **translation**, not a shorter rect.

## Unresolved checkpoint — Lesson 7.9

Do not mark 7.9 or 7.10 complete until the learner confirms these revisions.

Course progress: 70 of 216 lessons completed.
