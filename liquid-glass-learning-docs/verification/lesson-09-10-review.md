# Lesson 9.10 revision audit — 2026-09-14

## Feedback diagnosis before authoring

The learner could follow W → R and liked chapters 1–2 plus the introduction: they start from named objects and do not talk as if the topic is already understood. The remaining hole was **why the checkerboard bows**.

Low-value restatements did not create that imagination:

- Chapter 5 (size as percentage) and chapter 6 (center crossing)
- “Exactly when does this pixel become navy?” number table
- The vertical slice at output x = 0.65
- Cards “Why the diagonal change is about 0.07071” and “Which sides stay straight?”

The Astra checker rasters already showed a true curve. The missing object was a spoke picture on a **whole grid line**, not only the navy cell’s short top.

Reusable rules recorded in:

- `USER_PREFERENCES.md` → Imagination-first geometric proofs
- `AGENTS.md` → Imagination-first curve proof; cut leftover restatements
- `NEW_CHAT_PROMPT.md` section 5 (read at every new chat)

## What this rewrite adds

1. **Spoke construction, six states.** C as a hub; spokes through the whole line y = 0.25; the nearest extra walk going all the way up; the same length on tilted spokes; landings off a straight join; p.x / p.y as the two legs of one stick.
2. **Live x/y split.** Drag a point along y = 0.25. Cyan sideways leg from p.x, violet up/down leg from p.y, long side = dispLen. The pink arch is every landing of that line.
3. **Neighboring cells.** They sit on the same grid line, so they share the same curve. The two lines through C stay straight.
4. **Outside the frame.** Painting stops at [0, 1] × [0, 1]. The curve continues. Far from C the extra walk is almost along the line, so the bow flattens back toward the original straight line. Dedicated plots for y = 0.25 (left/right) and x = 0.75 (up/down).
5. **Exercise answers are diagrams** of the question and of the reason. Exercise 4 is continuation, not center-crossing.

Android `DisplaceAgsl` excerpt is unchanged.

## Beginner cold-read

- First sentence still starts from the Lesson 9.9 checker. Opening names W, R, C, and the chosen y = 0.20.
- Chapters 1–2 still name UV, the navy cell, dispLen, and one read before any curve theory.
- The curve section asks the learner to imagine spokes and a fence-push before quoting decimals.
- p.x and p.y are each given a visible job on the extra walk.

## Verification completed

- Default W = (0.65, 0.20), dispLen = 0.10 reads (0.6052786404500042, 0.2894427190999916).
- y = 0.15 at that x stays orange (read y ≈ 0.24191). y = 0.16 becomes navy (read y ≈ 0.25149).
- Nearest landing of y = 0.25 is (0.50, 0.15). Far along the same line the landing y returns toward 0.25.
- Local links in the lesson body resolve. Template `href="${raster(...)}"` strings live only in JS.
- Light-mode screenshots: `lesson-09-10-1920x1080.png`, `lesson-09-10-ultrawide-opening.png`, `lesson-09-10-revised-edges.png`, `lesson-09-10-revised-grid.png`, `lesson-09-10-revised-outside.png`, `lesson-09-10-revised-practice.png`.
- Hash/query file:// screenshots of lower sections were blank in this Chrome; those sections were inspected from a 1920×16000 viewport capture of the same file, then cropped.
- No JS error overlay. Nested shader `<code>` stays light-on-dark.
- Lesson 9.10 remains unresolved. Count stays 40 of 216 on iOS (HTML chrome still shows the prior-lab 95, unchanged).

Android source was not edited. iOS explorer does not exist yet.
