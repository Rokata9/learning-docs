# Curriculum review — from Lesson 10.4 to the end (2026-11-02, version 3, second pass)

**Version 3** follows the learner's direction:
- more and smaller lessons; repetition is fine;
- “the heavy math is perfectly fine to grow by whatever ratio you like”.

**Withdrawn:**
- Version 1 merged lessons down to about 168.
- Version 2 grew the plan to 242, but it split lessons by title, not by idea. The learner's question showed why that was not enough: “Lessons like 10.3 were 100–250x (at least) the effort needed for a lesson like X-axis.”

**How it is carried out:** `EXECUTION_PLAN_curriculum_revision_2026-11.md` in this folder, in Claude Code. It holds:
- the full new lesson list (Appendix A);
- every file change;
- the source map for the new Lessons 10.4–10.18 (Appendix D).

## 1. What went wrong with the 216-lesson plan

### 1.1 The page sizes show it

| Chapter | Lessons | Average page size |
|---|---|---|
| 1 · transparent panel | 8 | 68 KB |
| 2 · the screen is a grid | 9 | 59 KB |
| 3 · color and compositing | 11 | 86 KB |
| 4 · shapes and masks | 11 | 52 KB |
| 5 · motion | 12 | 39 KB |
| 6 · how SwiftUI draws | 11 | 51 KB |
| 7 · frosted glass | 14 | 52 KB |
| 8 · first Metal shader | 12 | 47 KB |
| 9 · distance fields, sampling, refraction | 14 | 135 KB |
| 10 · light (10.1–10.4 so far) | 4 | 134 KB |

- From Chapter 9 on, a page is about 2.5 times larger than before.
- The biggest pages are the hard ones, and each needed several Q&A rounds:
  - 9.11: 467 KB;
  - 9.13: 346 KB;
  - 10.3: 225 KB.

### 1.2 One lesson line held many ideas

- **Early chapters split simple ideas thin.** “The X axis” (2.2) and “the Y axis” (2.3) are two lessons, each one idea.
- **Later lines hold many.** Counted on today's Lesson 10.4 page, “Dot product” held fourteen ideas, each needing its own reason:
  1. an arrow's part is the foot of a square-corner line on an axis;
  2. the same drawing onto any line, read off that line's ruler;
  3. the ruler's minus side;
  4. same direction 1, opposite −1;
  5. a square corner gives 0, and 0 means a square corner;
  6. why the number never passes 1;
  7. each leg of a walk moves the meeting point;
  8. where a leg starts does not matter;
  9. a flip keeps lengths and square corners;
  10. so a walk of 1 along x lands at L's x part;
  11. growing scales every side;
  12. the minus case;
  13. the formula;
  14. one light direction for every pixel: the dot map.
- Every idea is a place where the learner can ask “why?”. Version 2 still packed ideas 1–6 and 7–14 into two lessons.

### 1.3 Every lesson pays the same heavy setup

`AGENTS.md` rule 18 makes every lesson ship the same blocks:
- hero;
- “Before you start”;
- the idea in pictures;
- a traced value;
- a code excerpt;
- a coding challenge;
- 2–4 exercises;
- a Metal exercise with compiling stubs, a key and a check view;
- an iOS explorer;
- a record.

For one math fact, half the page is setup around a few lines of code. More blocks also means more claims, and more gaps for the learner to find.

### 1.4 Contradictions found in the plan files

1. **15.27 profiles before profiling is taught.** It measures on the iPhone 16 Pro, but measuring CPU, GPU and memory is only taught in 16.10–16.11.
2. **16.14 is below the course's minimum.** It is “iOS 16 fallbacks”, but the minimum is iOS 17.
3. **The curriculum stores completion.** Its Chapter 9 lines end in “**Complete.**”, but its own policy says project files never store which lessons are complete.
4. **The Chapter 10 hub stores completion too.** It marks lessons `complete` and `generated`, against the same policy.

## 2. The proposal

### 2.1 Three lesson types

**C · Concept.** One new idea.
- Hero → the idea in pictures (at most 5 steps) → one traced value → 1–2 exercises with hidden answers.
- None of these: coding challenge, Metal exercise, iOS explorer, record.

**B · Build.** No new idea.
- One Metal or Swift exercise that joins the concept lessons before it, with an explorer, 1–2 exercises and a record.
- If a build needs a new idea, a C lesson comes first.

**E · Engineering.** SwiftUI, architecture, testing, performance.
- Code first and short.

### 2.2 One idea per concept lesson

- **What an idea is:** a fact or method with its own reason that no earlier lesson taught.
- **How the plan was made:**
  - every old lesson from 10.4 on was broken into its ideas;
  - each idea became one C lesson, with one sentence in Appendix A;
  - a B lesson follows each group of C lessons; that is where the exercises go.
- **Repeats stay.** A later lesson that uses an earlier mechanism in a new place says where the mechanism was taught.
- **When a page shows a second idea anyway,** the writer stops and proposes the split to the learner (`AGENTS.md` rule 16, new). The fresh reviewer counts the ideas too.

### 2.3 The fresh reviewer, before every delivery

- After a lesson or revision is written, an agent that did not write it reads only what the learner sees: every state's text, labels and tooltips, and screenshots.
- It asks “why?” at every claim and lists what the page does not answer, marked as one of:
  - blocks;
  - slows;
  - minor.
- It also lists the page's new ideas and says whether the count fits the type.
- Every blocks and slows item is fixed, then a new reviewer runs once more.
- **Tools (ready, tested on Lessons 10.3 and 10.4):**
  - `tools/beginner-review/extract_lesson.py`;
  - `tools/beginner-review/REVIEWER_PROMPT.md`.
- **The first run:** `reviews/lesson-10-04-beginner-review-2026-11-02.md` found 30 items in Lesson 10.4:
  - 2 blocks;
  - 13 slows;
  - 15 minor.

## 3. What happens to the count

| Chapter | Old lessons from 10.4 on | New | C | B | E | Growth |
|---|---|---|---|---|---|---|
| 10 (from 10.4) | 10 | 46 | 37 | 9 | 0 | 4.6× |
| 11 | 14 | 30 | 18 | 6 | 6 | 2.1× |
| 12 | 16 | 43 | 33 | 10 | 0 | 2.7× |
| 13 | 12 | 14 | 2 | 12 | 0 | 1.2× |
| 14 | 15 | 21 | 3 | 15 | 3 | 1.4× |
| 15 | 29 | 29 | 0 | 21 | 8 | 1.0× |
| 16 | 17 | 15 | 0 | 0 | 15 | two lessons moved to 14.20–14.21 |
| **Total** | **113** | **198** | **93** | **73** | **32** | **1.8×** |

- **The course grows from 216 to 301.**
  - 1.1–10.3: 103 lessons, unchanged.
  - From 10.4 on: 198 lessons.
- **Where it grows:** the math. Chapter 10 is light; Chapter 11 is brightness, busyness and the adaptive material; Chapter 12 is morphing, merging, perspective and rotation.
- **Where it barely grows:** Chapters 13–16 are SwiftUI components, the capstone and engineering. Most of their lessons join earlier ideas into a working control (B) or are engineering practice (E), where the learner, a senior engineer, is not a beginner. Their few new ideas got their own C lesson: the nearest slot, value from position, adaptive placement, the edge fade and the edge blur.
- **Nothing is removed.**
  - Two lessons move earlier.
  - One lesson's title is corrected.
  - Every old lesson number from 10.4 on is mapped in the plan's Appendix B.
- **More lessons should still take less time.**
  - A C page is one idea in at most 5 steps, with no challenge, Metal section, explorer or record.
  - This is an expectation, not a measurement. The new 10.4 and 10.5 will show it.

## 4. Today's Lesson 10.4 becomes fifteen lessons

| New | Type | Idea | From today's page |
|---|---|---|---|
| 10.4 | C | An arrow's part is a foot on an axis | Steps 1–2, cards 1–3 |
| 10.5 | C | How far an arrow goes along any line | Step 3 |
| 10.6 | C | The minus side of L's ruler | Step 3, card 5 |
| 10.7 | C | Same direction 1, opposite −1 | Step 4, card 4 |
| 10.8 | C | A square corner gives 0 | Step 4 |
| 10.9 | C | Never past 1 | Step 4's `ⓘ` |
| 10.10 | C | A walk's legs each move F | Step 5 |
| 10.11 | C | A leg's start does not matter | Step 8 (first half) |
| 10.12 | C | A flip keeps lengths and square corners | Step 6 (the flip) |
| 10.13 | C | A walk of 1 along x lands at L's x part | Step 6 (the triangles), card 6 |
| 10.14 | C | Growing scales every side | Step 7 |
| 10.15 | C | A part that points away: the minus case | Step 8 (the y part) |
| 10.16 | C | The dot product formula | Steps 9–10, the code line, Exercise 3 |
| 10.17 | C | One light direction for every pixel: the dot map | Section 2, Exercises 1–2 |
| 10.18 | B | Build: the dot product in Metal | Sections 3, 4, 6, 7, the iOS files |

- **The review items:** each of #1–#30 is assigned to one lesson, with the fix, in the plan's Appendix D.
- **Exercise 4** (rawNormal against N) moves to 10.22, “Why N must be 1 long”.
- **The six question cards** are folded into the lessons where their questions arise. Your rule that a question gets a “your questions” card, without touching the existing steps, still holds for revisions of existing lessons. These are new pages.
- **Today's page is kept** in `course/archive/` as the source, until 10.18 ships and you say it can go.
- **No Metal build for 14 lessons.** It is on purpose: nothing meaningful can be coded before the formula (10.16). Each C lesson still has 1–2 exercises.

## 5. The second pass (2026-11-02)

The whole list was checked once more against what Lessons 1.1–10.3 teach. Each concept lesson was checked for a hidden second idea and for a missing earlier idea, and each build for an idea nobody taught. Numbers below are the new ones.

**Split, because one lesson held two ideas:**
- **Reading L's ruler, then its minus side (10.5, 10.6).** Signs caused the most confusion in 10.3 and 10.4.
- **1 and −1, then a square corner gives 0 (10.7, 10.8).** The square corner has its own argument, and three review items fell on this step.
- **Which shape is nearer, then the weight h (12.11, 12.12).** Four operations in one formula.
- **The hump h × (1 − h), then the bridge (12.14, 12.15).**
- **Scaling a distance-field shape, then the press squish (12.18, 12.19).** Ask about the point halved, double the distance.
- **A point's part along a direction and across it, then the stretch (12.21, 12.22).**
- **The picture plane, then dividing by depth (12.29, 12.30).** Drawn as a point and a plane, not an eye.

**Merged, because the lesson had no idea of its own:**
- “The viewer's direction” into “The mirror direction and the viewer” (10.26): V = (0, 0, 1) is the same simplification as the far light.
- “The shininess dial” into “Sharpening with a power” (10.30): the dial is the power.
- “1 − dot(N, V)” into “An edge measure” (10.33).

**Content fixed:**
- **Busyness (11.6–11.8):** spread, variance and standard deviation would call a half-black, half-white region busy. The busyness number is now the detail: how much neighbouring samples differ, which is large over text. Spread stays as the first measure, with that failure.
- **The bridge (12.15):** “pulls the outline inward” was wrong. Subtracting lowers the distance, so the outline moves out into the gap.
- **Rotation (12.24–12.28):** moved before perspective, with its own Metal build (turning a point). The 3D tilt build then joins exactly the picture plane, perspective, camera distance and the 3D turn.
- **Turning the two walks (12.26):** the walk along y becomes (−sin, cos), its quarter turn (Lesson 10.3). That was missing.
- **Selection lens (13.7):** its new idea is the nearest slot: divide by the slot width and round. The lens itself joins earlier lessons.
- **Anchored reveal (14.3):** reuses the anchor point from 12.42, so it is an engineering lesson.
- **Adaptive placement (14.5):** moved before the context menu (14.6), which needs it.
- **Reasons named in the lesson sentences:**
  - 10.4: the wall at a square corner to the x line;
  - 10.19–10.20: the beam's spread, and the quarter turn that makes it equal dot(N, L);
  - 10.27: why the rhombus diagonal points halfway;
  - 11.14: the brightness where both contrasts are equal, about 0.179.

## 6. How to carry it out: two prompts

In Claude Code on the Mac, in the `learning-docs` repository.

**Once** (it updates the plan files, the hub, the lesson numbers and the iOS labels; it makes no lesson):

```text
If liquid-glass-learning-docs/curriculum/EXECUTION_PLAN_curriculum_revision_2026-11.md does not exist, first apply ~/Downloads/learning-docs-session-2026-11-02.patch from the repository root with git apply; stop if it fails. Then read that plan and run it once: Phases 1–6 in order, with each phase's checks. Skip Phase 7. The iOS lab is /Users/rosen/Code/LiquidGlassLab-iOS. Do not commit or push.
```

**For every lesson after that**, in a new chat, changing only the number (10.4 first, then 10.5, 10.6, …):

```text
Read liquid-glass-learning-docs/NEW_CHAT_PROMPT.md and follow it. Job: Generate lesson 10.4.
```

Questions about a lesson keep the usual prompt: `Job: Questions about lesson N.M.`

Phase 7 (shortening `AGENTS.md` from 8,239 words to about one page) runs only if you ask for it.

**The plan was dry-run on a copy of the repository:**
- every exact replacement in Phases 1–6, and in Lesson 10.4's one-time steps, that touches this repository matches exactly once (Phase 6.2 is in the iOS lab, which was not available here);
- the new curriculum counts 301 lessons, with the per-chapter counts above;
- lessons 10.1–10.3 and Chapter 10's Purpose line are unchanged;
- every old lesson from 10.4 on appears in a `(was …)` tag, and every new lesson has exactly one type;
- the hub's new array parses, has 50 entries, and opens in the browser.
