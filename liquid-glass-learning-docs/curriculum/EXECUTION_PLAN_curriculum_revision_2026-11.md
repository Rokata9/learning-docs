# Execution plan — curriculum revision (2026-11), version 3

**For:** Claude Code (Desktop app) on the learner's Mac, with this repository and the iOS lab `/Users/rosen/Code/LiquidGlassLab-iOS`.

**Why:** `curriculum/curriculum_review_2026-11-02.md` (read it first, it is short).

**Status:** approved in direction by the learner on 2026-11-02:
- more and smaller lessons; repetition is fine;
- exercises only where something can be built;
- a fresh reviewer before every delivery;
- one idea per concept lesson: “the heavy math is perfectly fine to grow by whatever ratio you like”.

Versions 1 (168 lessons) and 2 (242 lessons) are withdrawn. Version 2 split lessons by title, not by idea. A second pass on version 3 (2026-11-02) split seven more lessons, merged three that had no idea of their own, added one build and fixed the content of several others; `curriculum/curriculum_review_2026-11-02.md` §5 lists them.

## 0. How to run this plan

- Read this whole file, then:
  - `AGENTS.md`;
  - `NEW_CHAT_PROMPT.md`;
  - the header of `CURRENT_STATE.md`.
- Run the phases in order. Each phase ends with its checks. After each phase, tell the learner:
  - what changed;
  - which files;
  - the check results.
- **Run once, in one session:** Phases 1–6, in order (the one-time prompt in `curriculum/curriculum_review_2026-11-02.md` §6). Phase 7 runs only with the learner's explicit yes.
- **Lessons are not made here.** After this plan, every lesson, 10.4 included, is the ordinary job of `NEW_CHAT_PROMPT.md`: “Generate lesson N.M”, one per chat. Lesson 10.4's handoff entry (Appendix D) carries its one-time steps.
- Phase 6 needs Xcode and the iOS lab. Without them, run Phases 1–5, report, and leave Phase 6 for later.
- Use exact replacements. “Replace A with B” means:
  - A must be found exactly once;
  - if it is not found, stop and report, do not improvise.
- Do not commit or push unless the learner asks (`NEW_CHAT_PROMPT.md` §7).
- Temp and QA files go to a folder outside both repositories and are deleted afterwards (`AGENTS.md` rule 21).

## Decisions already made (do not reopen)

1. **Three lesson types.**
   - **C · concept:** one new idea, at most 5 stepper steps; no Metal exercise, no explorer, no challenge, no record.
   - **B · build:** no new idea; one Metal or Swift exercise that joins the concept lessons before it, with an explorer and a record.
   - **E · engineering:** code first and short.
2. **One new idea per C lesson.**
   - An idea is a fact or method with its own reason that no earlier lesson taught.
   - Every old lesson from 10.4 on was broken into its ideas. Appendix A gives each new lesson its one sentence and its `(was …)` source.
   - A build lesson follows each group of concept lessons. That is where the exercises go.
3. **The plan grows from 216 to 301 lessons.**
   - Lessons 1.1–10.3 do not change (103 lessons).
   - From 10.4 on: 113 old lessons become 198 (C 93, B 73, E 32).
   - The heavy math grows most: Chapter 10 from 10.4 goes from 10 to 46 lessons, Chapter 11 from 14 to 30, Chapter 12 from 16 to 43.
   - Every old lesson stays as at least one lesson. Repeats stay.
4. **Only two lessons move:** old 16.10 and 16.11, measuring, move before the capstone (to 14.20 and 14.21), because 15.27 uses them.
5. **Only one lesson is re-scoped:** old 16.14, “iOS 16 fallbacks”, now 16.12, because the course's minimum is iOS 17.
6. **Today's Lesson 10.4 page holds fourteen ideas.** It becomes the C lessons 10.4–10.17 and the build 10.18, which takes over its Metal exercise and iOS files. The page is kept as the source until 10.18 ships (Phase 5.1).
7. **The six “your questions” cards of today's 10.4 page are folded into the new lessons,** in the step where each question arises (Appendix D says where). The rule that a learner's question goes into a “your questions” card without touching existing steps still holds for revisions of existing lessons. These are new pages.
8. **A second idea found while generating:** stop, tell the learner and propose the split. The curriculum is renumbered only with the learner's yes.
9. **A fresh reviewer runs before every delivery:** `tools/beginner-review/REVIEWER_PROMPT.md`, `tools/beginner-review/extract_lesson.py`. Both exist and were tested on Lessons 10.3 and 10.4. The reviewer also counts the new ideas.

---

## Phase 1 — `curriculum/liquid_glass_ios_curriculum.md`

1.1 **Header.**
- Replace `**Updated:** 2026-10-28` with today's date.
- Replace `**Total lessons:** 216` with `**Total lessons:** 301`.

1.2 **Intro.**
- Replace `This file is the ordered 216-lesson plan plus` with `This file is the ordered 301-lesson plan plus`.
- Replace `This plan assumes a total beginner in graphics and mathematics and one new mechanism per full lesson.` with:

```text
This plan assumes a total beginner in graphics and mathematics. From Lesson 10.4 on, every lesson has a type:
- `C` concept: one new idea, taught in pictures with one traced value, in at most 5 stepper steps; no Metal exercise, explorer, challenge or record.
- `B` build: no new idea; one Metal or Swift exercise that joins the concept lessons before it, with an explorer and a record.
- `E` engineering: SwiftUI, architecture, testing or performance; code first and short.
An idea is a fact or method with its own reason that no earlier lesson taught. Every old lesson from 10.4 on was split into its ideas, one `C` lesson per idea; the heavy math may grow by any ratio (learner, 2026-11-02). Repeating an earlier mechanism in a new place is fine.
```

- Replace `## 3. Full 216-lesson plan` with `## 2. Full 301-lesson plan`.
- Replace `## 4. Frozen locks (do not rebuild)` with `## 3. Frozen locks (do not rebuild)`.

1.3 **Completion markers.**
- The policy says project files never store which lessons are complete.
- In Chapter 9, delete the eleven ` **Complete.**` endings, on 9.1–9.6 and 9.10–9.14.

1.4 **The new plan.**
- Replace from the `### Chapter 10` heading up to, not including, `## 3. Frozen locks` with **Appendix A**, verbatim.
- Appendix A runs from its `### Chapter 10` line through the `---` line just before `## Appendix B`, followed by one blank line. That `---` replaces the one before the frozen locks.
- Appendix A repeats Chapter 10's Purpose line and lessons 10.1–10.3 unchanged.

**Checks**
- Count the lesson lines per chapter with:
  ```bash
  python3 - <<'EOF'
  import re,collections
  s=open('curriculum/liquid_glass_ios_curriculum.md').read()
  c=collections.Counter(m.group(1) for m in re.finditer(r'^\d+\. \*\*(\d+)\.\d+ — ',s,re.M))
  print(dict(c),sum(c.values()))
  EOF
  ```
  Expected: `{'1': 8, '2': 9, '3': 11, '4': 11, '5': 12, '6': 11, '7': 12, '8': 12, '9': 14, '10': 49, '11': 30, '12': 43, '13': 14, '14': 21, '15': 29, '16': 15} 301`.
- Every lesson from 10.4 on has exactly one of `` `C` ``, `` `B` ``, `` `E` ``.
- Every old number from 10.4 to 16.17 appears in some `(was …)` tag (Appendix B lists them).
- `grep -n "Complete\.\|216" curriculum/liquid_glass_ios_curriculum.md` returns nothing.

---

## Phase 2 — `AGENTS.md`

2.1 **“Scope and files”, the iOS bullet.** Replace:
```text
A lesson whose excerpt shows Metal or Swift ships those files, wired into the chapter screen and built, in the same session; without the lab or Xcode, tell the learner before generating instead of shipping an uncompiled excerpt.
```
with:
```text
Only B and E lessons ship Swift or Metal files, wired into the chapter screen and built, in the same session; a C lesson ships its HTML page only. Without the lab or Xcode, tell the learner before generating a B or E lesson instead of shipping an uncompiled excerpt.
```

2.2 **Rule 16.** Replace:
```text
16. One main graphics idea and at most one main mathematical idea per lesson.
```
with:
```text
16. One new idea per C lesson, none in a B lesson, one practice per E lesson (the curriculum marks each lesson's type). An idea is a fact or method with its own reason that no earlier lesson taught. A step that needs a second new idea becomes its own C lesson before it: when generating shows one, stop, tell the learner and propose the split; the curriculum is renumbered only with the learner's yes. When in doubt, split: more, smaller lessons are preferred, the heavy math may grow by any ratio, and repeating an earlier mechanism in a new place is fine (learner, 2026-11-02).
```

2.3 **Rule 17.** Replace `That is why the course has 216 lessons.` with `That is why the course has 301 lessons.`

2.4 **Rule 18.** Replace the whole rule, from `18. Required scaffold, in order:` up to and including `label estimates as estimates.`, with:
```text
18. Required scaffold by lesson type (the curriculum marks each lesson C, B or E).
- **C · concept** (one new idea): visual hero, whose lead says in one sentence what the idea does in the end and which later lesson uses it → the idea in pictures, one stepper of at most 5 steps (an idea that needs more is two ideas: rule 16) → one fully traced value (pick the teaching pixel so the lesson's new line changes its stored value and no two parts print the same number, unless that is the lesson's point: rawNormal (1, 0, 1) at a slope of −1 hid which 1 came from the slope and which was chosen; put it on an axis through C when possible, so only one coordinate moves), with one interactive picture where the learner drags a point and reads its numbers → 1–2 exercises with hidden answers. No coding challenge, no Metal exercise, no iOS explorer, no record. Code appears only when the idea is itself a code line: at most 3 lines, with the line table.
- **B · build** (no new idea; it joins the concept lessons before it, named in its curriculum entry): visual hero naming the joined lessons → one recall line per joined idea, each with its `ⓘ` → short code excerpt → Metal exercise, or a Swift exercise for SwiftUI work (the learner writes at least one meaningful function — more than a few lines, joining the joined lessons — in a lab file whose stubs compile; the calling code is prepared: a stitchable caller in that file, an answer-key shader with `static` helpers, and a check view on the chapter screen that draws yours over the key with `.blendMode(.difference)` and `markDifference` paints red where they differ; the page shows the goal picture, the signatures with doc comments, test pixels with target values, the prepared code, and a hidden answer with every number) → the iOS explorer → 1–2 exercises with hidden answers → copyable Markdown record of the joined lessons. If the build needs a new idea, a C lesson comes first.
- **E · engineering** (SwiftUI, architecture, testing, performance): the problem in one short paragraph and one picture → the code with a line table → a check (a test, a preview, or a measurement with its numbers) → 1–2 exercises with hidden answers → copyable Markdown record. Code first and short: the learner is a senior engineer; no math steppers.
- **Exercises, every type.** Each exercise tests the lesson's own idea, not a side fact; opens with its picture, every named point drawn and labelled; says which code line changed and what that line does, only if one did; says why the question matters without giving the answer, and what the learner does to answer (which facts to read off the picture, which line combines them); and asks one question, the same as its title, a plain full sentence in words the lesson has already used, with 2–4 clickable choices. No “label: question” form. No measure coined for an exercise: “goes right 1 for 1 up” and “right 0.949 for up 0.316” failed; an arrow is described by its named parts. A hint or hidden answer gives the reason in plain words and does not rerun the derivation in its vocabulary: “its quarter turn is (1, 1)” and “seen from the front” failed; any relation an answer states (“more x part, less height part”) is taught in the lesson first and explained where the answer uses it. Each hidden answer draws the reason.
- State when the browser model differs from iOS. Separate what we see from what the framework does internally; label estimates as estimates.
```

2.5 **Rule 20.** Append at the end of the rule:
```text
Then the fresh review: extract the page with `tools/beginner-review/extract_lesson.py` and give it to a fresh agent with `tools/beginner-review/REVIEWER_PROMPT.md` (an agent that did not write the lesson; never a fork of the writing session). It also lists the lesson's new ideas; more than the type allows (rule 16) goes to the learner as a proposed split. Fix every `blocks` and `slows` item, run a new fresh agent once more, and save its final list as `reviews/lesson-NN-MM-beginner-review-YYYY-MM-DD.md`. This applies to new lessons and to every revision.
```

2.6 **Rule 22.** Replace `` `Course progress: X of 216 lessons completed.` `` with `` `Course progress: X of 301 lessons completed.` ``

2.7 **Rule 25.** Replace `25. Before packaging, re-read rules 1–22 and confirm each one passes.` with `25. Before packaging, re-read rules 1–22 and confirm each one passes, and that the fresh review's final list has no blocks or slows item.`

**Checks**
- `grep -n "216" AGENTS.md` returns nothing.
- Rule 18 contains `C · concept`, `B · build`, `E · engineering` and `at most 5 steps`.

---

## Phase 3 — `NEW_CHAT_PROMPT.md`

3.1 **§3, “Generate lesson N.M, also:”.** Replace:
```text
- `curriculum/liquid_glass_ios_curriculum.md`: the entries of N.M and its neighbors.
- `curriculum/liquid_glass_ios_handoff.md`.
```
with:
```text
- `curriculum/liquid_glass_ios_curriculum.md`: the entries of N.M and its neighbors, and N.M's type (`C`, `B` or `E`); for a `B` lesson, the lessons it joins.
- `curriculum/liquid_glass_ios_handoff.md`: N.M's entry, which may name a source page, review items to fix and question cards to fold in.
```
Then replace:
```text
- iOS: the chapter screen (`ChapterNNScreen.swift`) and the explorer that N.M sits next to.
```
with:
```text
- iOS, for `B` and `E` lessons only: the chapter screen (`ChapterNNScreen.swift`) and the explorer that N.M sits next to.
```

3.2 **§5, item 3.** After the bullet that starts `   - re-check the changed parts:`, insert:
```text
   - run the fresh review on the revised lesson (`AGENTS.md` rule 20, `tools/beginner-review/REVIEWER_PROMPT.md`) and fix every blocks and slows item;
```

3.3 **§6.** Replace:
```text
- Generate only the named lesson: HTML, iOS explorer, and the lesson's Metal exercise with its prepared calling code (`AGENTS.md` “Scope and files”).
- Without the iOS lab or Xcode, say so before generating.
- Before delivering, run `AGENTS.md` rules 20, 21 and 25.
```
with:
```text
- Generate only the named lesson, by its type (`AGENTS.md` rule 18 and “Scope and files”): `C` → the HTML page only; `B` → HTML, the iOS explorer, and the Metal (or Swift) exercise with its prepared calling code; `E` → HTML and its Swift files.
- Without the iOS lab or Xcode, say so before generating a `B` or `E` lesson.
- Before delivering, run `AGENTS.md` rules 20 (with the fresh review), 21 and 25.
```

3.4 **§8.** Replace `- The plan has 216 lessons.` with `- The plan has 301 lessons.`

**Check:** `grep -n "216" NEW_CHAT_PROMPT.md` returns nothing.

---

## Phase 4 — the other places that state the size, store completion, or name a renumbered lesson

4.1 **The course size.**
- `CURRENT_STATE.md`:
  - Replace `**Total curriculum size:** 216 lessons` with `**Total curriculum size:** 301 lessons`.
  - Replace `This side lesson sits outside the 216-lesson plan.` with `This side lesson sits outside the 301-lesson plan.`
- `README.md`: Replace `the 216-lesson plan and frozen locks` with `the 301-lesson plan and frozen locks`.
- `USER_PREFERENCES.md`: Replace `the course is long (216 lessons)` with `the course is long (216 lessons when this was recorded, 301 from 2026-11)`.
- `curriculum/liquid_glass_ios_handoff.md`: Replace `The Safari side lesson remains outside the 216-lesson plan.` with `The Safari side lesson remains outside the 301-lesson plan.`
- `liquid-glass-course.html`:
  - Replace `<p>The curriculum contains 216 ordered lessons. Each lesson uses pictures, one traced value, an interactive lab, and a Metal exercise.</p>` with `<p>The curriculum contains 301 ordered lessons of three kinds. Concept lessons teach one idea in pictures with one traced value. Build lessons join the lessons before them in one Metal or Swift exercise. Engineering lessons put the code first.</p>`
  - Replace `Side lesson — outside the 216-lesson plan` with `Side lesson — outside the 301-lesson plan`.
- `course/shortcut/lesson-shortcut-safari-menu.html`:
  - Replace `Side lesson · not one of the 216</span>` with `Side lesson · not one of the 301</span>`.
  - Replace `it does not count toward the 216 lessons.` with `it does not count toward the 301 lessons.`
  - Replace `(side lesson, not one of the 216)` with `(side lesson, not one of the 301)`.
- `course/chapters/chapter-05/lesson-05-09-overshoot-and-settle.html`: Replace `the rest of the 216-lesson numbering do not shift` with `the rest of the lesson numbering do not shift`.

4.2 **The Chapter 10 hub** (`course/chapters/chapter-10/lesson-light-surface-direction-and-material-thickness.html`).
- Its lesson array has statuses `complete`, `generated`, `available`, `planned`. The first two store completion, which the policy forbids. Replace the block from `const lessons=[` up to and including the first `];` after it with **Appendix E**, verbatim. It uses only `available` (a page exists) and `planned`, and each summary is the lesson's Appendix A sentence. Lesson 10.4 links to today's page until the new Lesson 10.4 is made.
- Replace `<p>Lesson 10.13 builds material shader version 1. The checkpoint question:` with `<p>Lessons 10.47–10.49 build material shader version 1. The checkpoint question:`.
- Replace `Lesson 10.13 is the planned capstone.` with `Lesson 10.49 is the planned capstone.`
- Replace `→ the dot product (10.4) → diffuse light and a highlight (10.5, 10.6) → edge effects (10.7–10.9) → one thickness value that drives several properties (10.10–10.12) → material shader version 1 (10.13).` with `→ the dot product (10.4–10.18) → diffuse light (10.19–10.25) → a highlight (10.26–10.32) → the rim (10.33–10.37) → edge contrast (10.38–10.41) → one thickness value that drives several properties (10.42–10.46) → material shader version 1 (10.47–10.49).`
- Section 4 (“iOS files”): Phase 6. The footer link: when the new Lesson 10.4 is made (its handoff entry).

4.3 **Forward references to renumbered lessons.** Only the lesson number changes (`USER_PREFERENCES.md`: an existing step changes only where a name or a number is wrong).
- `course/chapters/chapter-10/lesson-10-01-height-map-idea.html`:
  - Replace:
    ```text
    light reacts to the tilt
    (Lesson 10.5).
    ```
    with:
    ```text
    light reacts to the tilt
    (Lessons 10.19–10.25).
    ```
  - Replace `Lesson 10.5 lights the surface.` with `Lessons 10.19–10.25 light the surface.`
- `course/chapters/chapter-10/lesson-10-03-surface-normal.html`:
  - Replace `Lesson 10.4 will compare two directions, and Lesson 10.5 will make the glass brighter where this arrow points toward a light.` with `Lessons 10.4–10.18 will compare two directions, and Lessons 10.19–10.25 will make the glass brighter where this arrow points toward a light.`
  - Replace `<b>What's next:</b> Lesson 10.4 measures how much two directions agree, using N and the direction of a light.` with `<b>What's next:</b> Lesson 10.4 starts the dot product (Lessons 10.4–10.18), which measures how much N and the direction of a light agree.`
  - Replace `Why length 1? Lesson 10.4 compares two directions.` with `Why length 1? Lessons 10.4–10.18 compare two directions.`
  - Replace `Lessons 10.4 and 10.5 use N.` with `Lessons 10.4–10.25 use N.`
  - Replace `(Lessons 10.4 and 10.5 build the brightness)` with `(Lessons 10.4–10.25 build the brightness)`.
  - Replace `- Next: Lesson 10.4 — Dot product: how much two directions agree.` with `- Next: Lesson 10.4 — An arrow's part is a foot on an axis (the dot product, Lessons 10.4–10.18).`
  - The footer link: when the new Lesson 10.4 is made (its handoff entry).
- `course/glossary.html`: Replace `In Lesson 10.4, <code>dot(N, L)</code>` with `In Lessons 10.4–10.16, <code>dot(N, L)</code>`.
- `CURRENT_STATE.md`: Replace `(Lesson 10.4 compares two directions, Lesson 10.5 makes the glass brighter where N points toward a light)` with `(Lessons 10.4–10.18 compare two directions, Lessons 10.19–10.25 make the glass brighter where N points toward a light)`.
- `curriculum/liquid_glass_ios_handoff.md`: Replace `Lessons 10.4 and 10.5 build the brightness` with `Lessons 10.4–10.25 build the brightness`.

**Checks**
- This lists every file that still states the old size:
  ```bash
  python3 - <<'EOF'
  import re,pathlib
  for p in pathlib.Path('.').rglob('*'):
      if p.suffix in ('.md','.html','.swift'):
          for m in re.finditer(r'216[- ]lesson|216 lessons|216 ordered|of the 216|toward the 216|outside the 216',p.read_text(errors='ignore')):
              print(p)
  EOF
  ```
  It may list only `FEEDBACK_LOG.md`, `USER_PREFERENCES.md` (the history line of 4.1), `curriculum/curriculum_review_2026-11-02.md`, `reviews/`, and this file.
- The hub's array parses and has 49 entries:
  ```bash
  node -e "const s=require('fs').readFileSync('course/chapters/chapter-10/lesson-light-surface-direction-and-material-thickness.html','utf8');const a=eval(s.match(/const lessons=(\[[\s\S]*?\n\]);/)[1]);console.log(a.length,a.filter(x=>x[2]!=='available'&&x[2]!=='planned').length)"
  ```
  Expected: `49 0`.
- Open the hub in the browser at 1920×1080: click 10.4, 10.18 and 10.49; each shows its sentence.

---

## Phase 5 — prepare the split of Lesson 10.4

5.1 **Keep today's page as the source.** Copy `course/chapters/chapter-10/lesson-10-04-dot-product.html` to `course/archive/lesson-10-04-dot-product-2026-11-02.html`. No page links to the copy.
- It is the source of Lessons 10.4–10.18. Delete it only when 10.18 has shipped and the learner says yes.
- Do not delete or change the original here: generating the new Lesson 10.4 does that (its handoff entry, “When this page is made”).

5.2 **The handoff.** In `curriculum/liquid_glass_ios_handoff.md`, replace from `### Lesson 10.4 — Dot product` up to, not including, `## Side lesson — Safari shortcut` with **Appendix D**, verbatim, followed by one blank line. Appendix D runs from its `### Lessons 10.4–10.18` line through its last bullet, without the `---` line that ends it.

5.3 **`CURRENT_STATE.md`.** Under the heading `## Lesson 10.4 — Dot product`, insert this paragraph before `Generated 2026-10-31.`:
```text
**Being split (curriculum v3, 2026-11-02).** This page becomes Lessons 10.4–10.18; the source map is in `curriculum/liquid_glass_ios_handoff.md` (“Lessons 10.4–10.18”), the source copy in `course/archive/`. This section is replaced when the new Lesson 10.4 is made.
```

**Checks**
- The copy in `course/archive/` opens in the browser with no console errors.
- The handoff has `### Lessons 10.4–10.18` once, `#### Lesson 10.4` to `#### Lesson 10.18`, and still has `## Side lesson — Safari shortcut`.

---

## Phase 6 — the iOS lab (Xcode, iPhone 16 Pro)

6.1 The existing 10.4 files stay:
- `chapter10/DotExplorer.swift` and `DotMap.metal`;
- `DotExercise.metal`, `DotExerciseKey.metal`, `DotExerciseView.swift`.

They become the build lesson 10.18, “Build: the dot product in Metal”. No new Swift is written in this phase.

6.2 In `chapter10/Chapter10Screen.swift`, relabel the 10.4 entries:
- the explorer as “10.18 · Build: the dot product in Metal — the dot map”;
- the exercise as “10.18 · Metal exercise: `dotOfArrows`”.

Keep the order.

6.3 **The hub's section 4** (“iOS files”):
- Replace `<h2>Chapter 10 lives in the lab through Lesson 10.4</h2>` with `<h2>Chapter 10 in the lab: Lessons 10.1–10.3 and the build 10.18</h2>`.
- Replace `<h3>DotMap.metal</h3><p>Lesson 10.4.` with `<h3>DotMap.metal</h3><p>Lesson 10.18 (the dot map of Lesson 10.17).`
- Replace `<h3>DotExercise.metal</h3><p>The Lesson 10.4 Metal exercise:` with `<h3>DotExercise.metal</h3><p>The Lesson 10.18 Metal exercise:`.

**Check:** the project builds for the iPhone 16 Pro simulator; check the light and dark previews. Its only warnings are the ones listed in `CURRENT_STATE.md` before this phase.

---

## Phase 7 — optional, only with the learner's explicit yes: shorten `AGENTS.md`

- **Goal:** about one page of principles. The history stays in `FEEDBACK_LOG.md`.
- **Start from these principles:**
  - every claim has its reason on the same screen;
  - one name per object;
  - every number says what it measures, and its unit and sign;
  - pictures first, labelled;
  - one idea per concept lesson (rule 16) and the lesson types (rule 18);
  - the fresh review (rule 20);
  - QA (rule 21).
- **Show the learner a draft before replacing the file.**

---

## Appendix A — the new plan from Chapter 10 (paste verbatim, Phase 1.4)

### Chapter 10 — Light, surface direction, and material thickness

**Purpose:** Make the edge respond like a shaped surface rather than a flat white border.

1. **10.1 — Height-map idea.** Treat the glass as if its center and edge have different heights.
2. **10.2 — Slope.** Measure how that height changes from one pixel to the next.
3. **10.3 — Surface normal.** Convert slope into a direction that points away from the surface.
4. **10.4 — An arrow's part is a foot on an axis.** `C` From the tip of N, a line at a square corner to the x line lands where N's x part ends: the y leg and the height leg stay in the flat wall that stands at a square corner to the x line there, like a pole standing on a floor. The same for y and height. *(was 10.4, part 1)*
5. **10.5 — How far an arrow goes along any line.** `C` The same drawing onto L's line gives the point F, and L's ruler reads how far F is from S. That reading is dot(N, L); with L along x, y or up, it is N's x, y or height part. *(was 10.4, part 2)*
6. **10.6 — The minus side of L's ruler.** `C` L's ruler is plus on the side L points to and minus on the other. When the tip of N is on the side of S that L does not point to, F lands on the minus side and the reading is below 0. *(was 10.4, part 3)*
7. **10.7 — Same direction 1, opposite −1.** `C` When L's line runs through the tip of N, the line from the tip has nothing to cross: F is the tip itself, 1 from S on the plus side; when L points the opposite way, the tip is on the minus side, −1. As L turns toward N, F slides toward the tip. *(was 10.4, part 4)*
8. **10.8 — A square corner gives 0.** `C` At a square corner, N itself is the line from its tip at a square corner to L's line, so F is at S and the reading is 0. The other way round: a reading of 0 means a square corner. *(was 10.4, part 5)*
9. **10.9 — Never past 1.** `C` S, F and the tip of N form a right triangle whose long side is N, 1 long (Lesson 9.1), so the reading stays between −1 and 1. *(was 10.4, part 6)*
10. **10.10 — A walk's legs each move F.** `C` Walk to the tip of N along its x, y and height parts; each leg moves the meeting point along L's line, and the moves add up to F. *(was 10.4, part 7)*
11. **10.11 — A leg's start does not matter.** `C` Flat walls at a square corner to L's line: the same leg crosses the same walls wherever it starts. *(was 10.4, part 8)*
12. **10.12 — A flip keeps lengths and square corners.** `C` A flip over the line halfway between the x line and L's line swaps the two lines and keeps S, every length and every square corner. *(was 10.4, part 9)*
13. **10.13 — A walk of 1 along x lands at L's x part.** `C` Three facts make the two triangles match: they share the angle at S, each has a square corner, and each has a long side of 1. The flip takes one onto the other, so the walk lands 0.48 along L's line. *(was 10.4, part 10)*
14. **10.14 — Growing scales every side.** `C` Grow the triangle from S by one number: every angle stays and every side grows by that number, so a walk of 0.302 along x moves F 0.302 × 0.48 along L's line. *(was 10.4, part 11)*
15. **10.15 — A part that points away: the minus case.** `C` L's y part is negative: the flip lands on the minus side, so N's y part moves F toward the minus side: 0.402 × (−0.60) = −0.2412. *(was 10.4, part 12)*
16. **10.16 — The dot product formula.** `C` Three products added: N's x part × L's x part + N's y part × L's y part + N's height part × L's height part = 0.45672 at K. *(was 10.4, part 13)*
17. **10.17 — One light direction for every pixel: the dot map.** `C` A very far light gives the same L at every pixel; dot(N, L) at every pixel, shown as gray, with one pixel traced. *(was 10.4, part 14)*
18. **10.18 — Build: the dot product in Metal.** `B` Write `dotOfArrows` and the dot map shader. Joins 10.4–10.17. Takes over the existing `DotExercise` files. *(was 10.4, its Metal exercise)*
19. **10.19 — Why a tilted surface gets less light.** `C` A beam of light 1 wide spreads over a longer piece of a tilted surface, so each point gets beam width ÷ lit length of the light. *(was 10.5, part 1)*
20. **10.20 — Brightness is dot(N, L).** `C` Turned a quarter turn (Lesson 10.3) and shrunk until its long side is 1 (10.14), the beam's triangle lands on the triangle S, F, tip of N, so beam width ÷ lit length = dot(N, L). *(was 10.5, part 2)*
21. **10.21 — Facing away: max(dot, 0).** `C` A number below 0 means the surface faces away from the light; it gets no light, so it becomes 0. *(was 10.5, part 3)*
22. **10.22 — Why N must be 1 long.** `C` A longer arrow would count as more light: rawNormal gives the wrong brightness order, N gives the right one. *(was 10.5, part 4)*
23. **10.23 — Ambient light.** `C` A small floor so the side facing away is not black. *(was 10.5, part 5)*
24. **10.24 — Light color and strength.** `C` Multiply the surface color by brightness, light color and strength, channel by channel. *(was 10.5, part 6)*
25. **10.25 — Build: lit glass, version 0.** `B` One Metal function: height → slope → N → dot(N, L) → diffuse with ambient. Joins 10.19–10.24. *(new build)*
26. **10.26 — The mirror direction and the viewer.** `C` Light bounces off a mirror at the same angle it arrives. We look straight at the screen, so the direction toward the viewer is V = (0, 0, 1) at every pixel, the same simplification as the far light (10.17). A highlight appears where the bounce goes toward V. *(was 10.6, part 1 · was 10.6, part 2)*
27. **10.27 — The halfway arrow.** `C` L and V added make the diagonal of a rhombus; the diagonal cuts it into two triangles with three equal sides, so they match and the diagonal points halfway between L and V. Made 1 long, it is H. *(was 10.6, part 3)*
28. **10.28 — Where N equals H.** `C` N equals H exactly where the mirror bounce of L reaches the viewer: that is where the highlight sits. *(was 10.6, part 4)*
29. **10.29 — How close N is to H.** `C` dot(N, H) is 1 where N equals H and smaller around it. *(was 10.6, part 5)*
30. **10.30 — Sharpening with a power.** `C` A number between 0 and 1 raised to a power shrinks, and the smaller it is, the faster: dot(N, H)ⁿ leaves only a small bright spot. The power n is a chosen dial: 8, 32 and 128 give a wide, a medium and a tight highlight. *(was 10.6, part 6 · was 10.6, part 7)*
31. **10.31 — Adding light on top.** `C` The highlight is added to the color, not mixed, and each channel is clamped at 1. *(was 10.6, part 8)*
32. **10.32 — Build: specular highlight.** `B` Joins 10.26–10.31, on the glass. *(was 10.6, build)*
33. **10.33 — An edge measure: 1 − dot(N, V).** `C` dot(N, V) is N's height part, because V = (0, 0, 1): 1 on the flat top, smaller toward the outline. 1 − dot(N, V) turns it around: 0 on the flat top, growing toward the outline. *(was 10.7, part 1 · was 10.7, part 2)*
34. **10.34 — Glancing light reflects more.** `C` What Fresnel means: a surface seen at a glancing angle reflects more of the light; a picture with numbers, no proof. *(was 10.7, part 3)*
35. **10.35 — A Fresnel-like curve.** `C` (1 − dot(N, V))⁵ stays small, then rises fast near the outline; an approximation (Schlick's), not physics. *(was 10.7, part 4)*
36. **10.36 — A base amount.** `C` F0 + (1 − F0) × curve: a chosen minimum reflection everywhere. *(was 10.7, part 5)*
37. **10.37 — Build: rim on the glass.** `B` The rim together with the specular highlight. Joins 10.33–10.36. *(was 10.7, build)*
38. **10.38 — An edge band inside the outline.** `C` From the distance field and smoothstep (Lessons 7.8 and 9.3 again): 1 at the outline, 0 a chosen width inside. *(was 10.8, part 1)*
39. **10.39 — Darkening the band.** `C` Multiply the color by 1 − strength × band: a darkened edge. *(was 10.8, part 2)*
40. **10.40 — A thin bright edge line.** `C` A narrower band with a higher power next to the dark band; dark beside bright reads as depth. *(was 10.9)*
41. **10.41 — Build: edge contrast.** `B` Joins 10.38–10.40. *(new build)*
42. **10.42 — One thickness dial.** `C` One value from 0 to 1; each property gets a range, and mix picks the value inside it. *(was 10.10)*
43. **10.43 — Thickness changes refraction.** `C` A thicker material pushes the read point further (Lesson 9.11's push length). *(was 10.11, part 1)*
44. **10.44 — Thickness changes diffusion.** `C` A thicker material blurs more. *(was 10.11, part 2)*
45. **10.45 — Thickness changes shadow.** `C` Radius, opacity and offset of the shadow grow with thickness. *(was 10.12)*
46. **10.46 — Build: thickness on the glass.** `B` One slider drives refraction, diffusion and shadow. Joins 10.42–10.45. *(new build)*
47. **10.47 — Build: material shader v1, part 1 — optics.** `B` Mask, refraction and tint in one shader. *(was 10.13, part 1)*
48. **10.48 — Build: material shader v1, part 2 — light.** `B` Add diffuse, specular, rim and edges. *(was 10.13, part 2)*
49. **10.49 — Build: material shader v1, part 3 — thickness.** `B` The thickness dial drives everything; the chapter checkpoint. *(was 10.13, part 3)*

**Checkpoint:** Move a virtual light and explain why the highlight travels around the silhouette.

---

### Chapter 11 — Build an adaptive Liquid Glass engine

**Purpose:** Make the material respond to its environment, size, user preference, and accessibility needs.

1. **11.1 — Brightness behind one point.** `C` The luminance of the captured background at one pixel (Lesson 3.6, now on the background picture). *(was 11.1, part 1)*
2. **11.2 — Average brightness of a region.** `C` Add many samples and divide by how many: the average is steadier than any one sample. *(was 11.1, part 2)*
3. **11.3 — Fewer samples.** `C` Shrink the region to a small picture (Lesson 7.4) and average that: less work, nearly the same number. *(was 11.1, part 3)*
4. **11.4 — Reading the background on iOS.** `E` A small snapshot of the region, averaged, at a limited rate; what it costs and what it misses. *(was 11.1, part 4)*
5. **11.5 — Build: brightness behind a moving control.** `B` Joins 11.1–11.4. *(new build)*
6. **11.6 — Spread.** `C` The average distance of the samples from their average brightness. It cannot tell text from a region that is half black and half white: both spread widely. *(new, busyness, needed by 11.23–11.24)*
7. **11.7 — Detail: how much neighbours differ.** `C` The average difference between neighbouring samples is large only where the brightness changes often, as in text: this is the busyness number. *(new, busyness)*
8. **11.8 — Build: busyness meter.** `B` Spread and detail side by side over text, photos and a half-black, half-white region. Joins 11.6–11.7. *(new build)*
9. **11.9 — Regular material.** `C` The versatile default: its values and why they protect legibility. *(was 11.2)*
10. **11.10 — Clear material.** `C` Less blur and tint: more of the background shows, and text needs help. *(was 11.3, part 1)*
11. **11.11 — The dimming layer.** `C` A dark layer under the content; how much to dim follows the region's brightness. *(was 11.3, part 2)*
12. **11.12 — Build: regular and clear material.** `B` Joins 11.9–11.11. *(new build)*
13. **11.13 — Light or dark glyph.** `C` Compare the contrast of a light and a dark glyph against the measured background (Lesson 3.7) and take the better one. *(was 11.4, part 1)*
14. **11.14 — One threshold.** `C` The two contrasts of Lesson 3.7 are equal at one brightness, about 0.179: below it the light glyph wins, above it the dark one. *(was 11.4, part 2)*
15. **11.15 — No flicker: two thresholds.** `C` Hysteresis: flip to dark above one value, back to light only below a lower one. *(was 11.4, part 3)*
16. **11.16 — Change over a short time.** `C` Move toward the new choice over a few frames instead of jumping. *(new, smoothing)*
17. **11.17 — One decision for a large surface.** `C` A large menu decides once from its whole region, so it does not flip in patches. *(was 11.5)*
18. **11.18 — Build: foreground switching.** `B` A small button and a large menu over moving content. Joins 11.13–11.17. *(new build)*
19. **11.19 — Average color of a region.** `C` Average each channel, not only the brightness. *(was 11.6, part 1)*
20. **11.20 — Adaptive tint.** `C` Mix a little of the average color into the tint, capped, so the control keeps its identity. *(was 11.6, part 2)*
21. **11.21 — User tint slider.** `C` One value from very clear to strongly tinted, mapped to the tint amounts. *(was 11.7)*
22. **11.22 — Build: adaptive tint with the slider.** `B` Joins 11.19–11.21. *(new build)*
23. **11.23 — Busyness changes the shadow.** `C` More separation over busy content such as text, less over calm areas. *(was 11.8)*
24. **11.24 — Busyness changes diffusion.** `C` More blur when the background is busy. *(was 11.9)*
25. **11.25 — Build: the material responds to its background.** `B` Joins 11.23–11.24, with the busyness meter. *(new build)*
26. **11.26 — Reduced transparency.** `E` Replace the effect with a more opaque, readable material. *(was 11.10)*
27. **11.27 — Increased contrast.** `E` Strengthen edges and foreground separation. *(was 11.11)*
28. **11.28 — Reduced motion.** `E` Replace morphing and overshoot with calmer transitions. *(was 11.12)*
29. **11.29 — `GlassStyle` and `GlassEnvironment`.** `E` Put the decisions behind a reusable model. *(was 11.13)*
30. **11.30 — Debug controls.** `E` Display all measured values and chosen adaptations. *(was 11.14)*

**Checkpoint:** Drag one control across several backgrounds and show that its legibility changes without abrupt visual noise.

---

### Chapter 12 — Liquid geometry, merging, and 3D depth

**Purpose:** Make the material behave like a flexible object during interaction and transitions.

1. **12.1 — Interpolate a rectangle.** `C` Lerp (Lesson 5.4) each of the four numbers of a rectangle with one progress. *(was 12.1)*
2. **12.2 — Interpolate the corner radius.** `C` From a circle (radius half the size) to a sheet; the radius never exceeds half the shorter side. *(was 12.2)*
3. **12.3 — Build: circle to sheet.** `B` Joins 12.1–12.2, on a glass control. *(new build)*
4. **12.4 — What scaling a finished picture does.** `C` A non-uniform scale stretches circles, text and highlights, with numbers. *(was 12.3)*
5. **12.5 — Redraw the shape every frame.** `C` Compute the current shape from the interpolated numbers, so edges stay sharp and round. *(was 12.4)*
6. **12.6 — Build: a morph without stretching.** `B` Joins 12.4–12.5. *(new build)*
7. **12.7 — Mixing two distance fields.** `C` mix(sdA, sdB, t): its 0 line moves from one outline to the other. *(was 12.5, part 1)*
8. **12.8 — Why the mix still works as a mask.** `C` The mix is not an exact distance, but its sign and its 0 line are right, which is all a soft mask needs. *(was 12.5, part 2)*
9. **12.9 — Build: a distance-field morph.** `B` Circle to rounded rectangle. Joins 12.7–12.8. *(new build)*
10. **12.10 — Union with min: a sharp crease.** `C` min of two distances joins two shapes with a sharp corner where they meet (Lesson 9.6 again). *(was 12.6, part 1)*
11. **12.11 — Which shape is nearer: b − a.** `C` With a and b the distances to shapes A and B, b − a is plus where A is nearer, minus where B is nearer, and 0 halfway between them. *(was 12.6, part 2)*
12. **12.12 — A weight from 0 to 1: h.** `C` Divide b − a by k, then × 0.5 + 0.5 (the dot map's mapping, 10.17) and clamp (Lesson 8.11): h is 1 where A is clearly nearer, 0 where B is, and in between only inside a band where the two distances differ by less than k. *(was 12.6, part 3)*
13. **12.13 — Mixing the two distances with h.** `C` Inside the band, mix takes a little of each shape. *(was 12.6, part 4)*
14. **12.14 — A hump: h × (1 − h).** `C` h × (1 − h) is 0 where one shape wins (h = 0 or 1) and largest, 0.25, where both are equally near (h = 0.5). *(was 12.6, part 5)*
15. **12.15 — Filling the gap: the bridge.** `C` Subtracting k × h × (1 − h) lowers the distance between the shapes, so the outline moves out into the gap: a bridge instead of a crease. *(was 12.6, part 6)*
16. **12.16 — The bridge width.** `C` k decides when the bridge appears and when it breaks. *(was 12.7)*
17. **12.17 — Build: two glass blobs merge and separate.** `B` Joins 12.10–12.16. *(was 12.7, build)*
18. **12.18 — Scaling a distance-field shape.** `C` To draw a shape twice as large, ask the original shape about the point halved, then double the distance it returns, so the distance stays in screen units (Lesson 9.4's local coordinates, scaled). *(new, scaling a distance field, needed by 12.19)*
19. **12.19 — Press squish on a distance field.** `C` Lesson 5.10's press deformation inside the distance function: a different scale across and along, around the press point. The distance is no longer exact, but the mask still works (12.8). *(was 12.8)*
20. **12.20 — Velocity as an arrow.** `C` Lesson 5.7's velocity in two directions: an arrow. *(was 12.9, part 1)*
21. **12.21 — A point's part along a direction and across it.** `C` The dot product with the direction made 1 long gives the part along it (10.5); what is left is the part across. *(was 12.9, part 2)*
22. **12.22 — Stretch along a direction.** `C` Scale only the part along the velocity, then add the part across back. *(was 12.9, part 3)*
23. **12.23 — Build: squish and stretch.** `B` Joins 12.18–12.22. *(was 12.9, build)*
24. **12.24 — Angles: degrees and radians.** `C` A turn as an angle; radians as the length of arc on a circle of radius 1. *(new, rotation, needed by 12.32)*
25. **12.25 — cos and sin.** `C` The x part and the y part of a 1-long arrow at an angle. *(new, rotation)*
26. **12.26 — Turning the two walks.** `C` A walk of 1 along x, turned by an angle, becomes (cos, sin); the walk along y is its quarter turn (Lesson 10.3), so it becomes (−sin, cos). *(new, rotation)*
27. **12.27 — Turning any point.** `C` A point is a walk along x plus a walk along y; turn both and add them. *(new, rotation)*
28. **12.28 — Build: turning a point in Metal.** `B` A function that turns a point around the glass's center, used to turn the background sample (Lesson 9.8). Joins 12.24–12.27. *(new build)*
29. **12.29 — The picture plane.** `C` A 3D point is drawn where the line from one viewpoint to it crosses the screen; the viewpoint is a point at distance d from the screen, drawn as a point and a plane. *(was 12.10, part 1)*
30. **12.30 — Perspective: divide by depth.** `C` The two triangles from the viewpoint have the same shape (10.14), so a point at depth z behind the screen is drawn at x × d ÷ (d + z): farther points look smaller. *(was 12.10, part 2)*
31. **12.31 — Camera distance.** `C` A small distance distorts strongly, a large one is nearly flat. *(was 12.11, part 1)*
32. **12.32 — Turning around an axis in 3D.** `C` A 3D turn is a turn in one plane that leaves the axis alone. *(was 12.11, part 2)*
33. **12.33 — Build: tilt a glass layer in 3D.** `B` SwiftUI's `rotation3DEffect` with perspective, checked against the math. Joins 12.29–12.32. *(was 12.11, build)*
34. **12.34 — Parallax.** `C` Layers at different depths move by different amounts for the same tilt. *(was 12.12)*
35. **12.35 — Thickness from progress and size.** `C` Drive the thickness dial (10.42) from the transition's progress and the current size. *(was 12.13)*
36. **12.36 — Build: a growing panel with parallax and thickening.** `B` Joins 12.34–12.35. *(new build)*
37. **12.37 — Moving the light.** `C` L turns around the shape over time (cos and sin from 12.25). *(was 12.14, part 1)*
38. **12.38 — The highlight follows the silhouette.** `C` Where N meets the moving L, the highlight moves along the outline. *(was 12.14, part 2)*
39. **12.39 — Glow falls off with distance.** `C` smoothstep of the distance to the touch point. *(was 12.15, part 1)*
40. **12.40 — Several controls share one glow.** `C` Each control reads its own distance to the touch. *(was 12.15, part 2)*
41. **12.41 — Build: touch light on a group of controls.** `B` Joins 12.37–12.40. *(new build)*
42. **12.42 — The anchor point.** `C` Keep one point of the growing shape fixed to the source control (Lesson 4.10's transform origin again). *(was 12.16, part 1)*
43. **12.43 — Build: source-anchored transition.** `B` Joins 12.42 with 12.3; used again in 14.4 and 15.9. *(was 12.16, build)*

**Checkpoint:** Morph a circular icon button into a rounded panel without stretching its text or icon.

---

### Chapter 13 — Component gallery A: controls and navigation

**Purpose:** Apply the engine to common interactive components.

1. **13.1 — Circular icon button.** `B` Rest, press, release, tint, and glyph contrast. *(was 13.1)*
2. **13.2 — Capsule text button.** `B` Concentric content placement and press deformation. *(was 13.2)*
3. **13.3 — Prominent tinted action.** `B` Selective color without tinting every control. *(was 13.3)*
4. **13.4 — Toolbar group.** `B` Related actions on one floating glass plane. *(was 13.4)*
5. **13.5 — Cluster merge and separation.** `B` Nearby controls connect during interaction (12.10–12.17). *(was 13.5)*
6. **13.6 — Floating tab bar.** `B` Navigation above scrolling content. *(was 13.6)*
7. **13.7 — The nearest slot.** `C` Which tab a finger position belongs to: divide by the slot width and round; on release the lens springs there (Lesson 5.8). *(was 13.7, part 1)*
8. **13.8 — Build: selection lens in the tab bar.** `B` A lens that magnifies around a center the finger moves (Lessons 9.9 and 9.11), stretches while it moves (12.22) and settles in the nearest slot. Joins 13.6–13.7. *(was 13.7, build)*
9. **13.9 — Segmented control.** `B` The selection lens in a compact control. *(was 13.8)*
10. **13.10 — Value from position.** `C` The reverse of lerp: which value a thumb position means. *(was 13.9, part 1)*
11. **13.11 — Slider.** `B` Track, glass thumb, value mapping and drag response. *(was 13.9, build)*
12. **13.12 — Switch.** `B` Mirrored capsule geometry and a moving glass thumb. *(was 13.10)*
13. **13.13 — Focus, disabled, and pressed states.** `B` Clear state feedback without clutter. *(was 13.11)*
14. **13.14 — Component gallery A.** `B` Every control over the same test content. *(was 13.12)*

**Checkpoint:** All components share the same material engine but preserve their own geometry and interaction rules.

---

### Chapter 14 — Component gallery B: menus, sheets, search, and system-like surfaces

**Purpose:** Cover the other major Liquid Glass families seen across iOS.

1. **14.1 — Search and address field.** `B` Leading icon, placeholder, clear action, and glass placement. *(was 14.1)*
2. **14.2 — Compact-to-expanded search.** `B` Animate from a toolbar control to a focused field. *(was 14.2)*
3. **14.3 — Anchored reveal.** `E` One reusable reveal for menus, popovers and action sheets: the anchor point of Lesson 12.42, converted into the destination's coordinates (Lesson 2.7), behind one API. *(was 14.3, part 1)*
4. **14.4 — Overflow menu.** `B` Reveal a menu from a small source control; Chapter 15 builds the full Safari version. *(was 14.3, build)*
5. **14.5 — Adaptive placement.** `C` Keep a menu or popover on screen: choose a side, then clamp. *(was 14.5, part 1)*
6. **14.6 — Context menu.** `B` Content anchored near the touch location and kept on screen (14.5). *(was 14.4)*
7. **14.7 — Popover.** `B` Source relationship, arrow or connection, and adaptive placement. *(was 14.5, build)*
8. **14.8 — Anchored action sheet.** `B` Grow from the action that caused it. *(was 14.6)*
9. **14.9 — Rounded presentation sheet.** `B` Dimming, concentric corners, and depth response. *(was 14.7)*
10. **14.10 — Sidebar.** `B` Content extends behind an inset glass navigation surface. *(was 14.8)*
11. **14.11 — A fade toward the edge.** `C` A mask that grows where moving content meets floating controls. *(was 14.9, part 1)*
12. **14.12 — A blur that changes with position.** `C` The blur radius follows the same ramp as the fade. *(was 14.9, part 2)*
13. **14.13 — Build: scroll-edge effect.** `B` On a toolbar over scrolling content. Joins 14.11–14.12. *(was 14.9, build)*
14. **14.14 — Media controls.** `B` Play, seek, and accessory controls on one glass plane. *(was 14.10)*
15. **14.15 — Control Center-style tile.** `B` A larger stateful toggle with a selected material. *(was 14.11)*
16. **14.16 — Notification or banner.** `B` Material, text legibility, and short presentation motion. *(was 14.12)*
17. **14.17 — Badge, toast, and compact status capsule.** `B` Small transient surfaces. *(was 14.13)*
18. **14.18 — Layered icon experiment.** `B` Parallax, refraction, tint, and specular response on icon layers. *(was 14.14)*
19. **14.19 — Integrated system-style gallery.** `B` All surfaces over text, photos, moving content, dark and light content. *(was 14.15)*
20. **14.20 — Measure CPU, GPU, and memory separately.** `E` Do not guess which part is slow. Moved before the capstone, which uses it in 15.27. *(was 16.10)*
21. **14.21 — Frame budgets at 60 Hz and 120 Hz.** `E` Benchmark against the budget of the display mode. *(was 16.11)*

**Checkpoint:** Recreate the major visual families without copying one fixed effect onto every element.

---

### Chapter 15 — Capstone: Safari-style three-dot menu expansion

**Purpose:** Rebuild the compelling source-anchored menu transition in small, understandable stages.

1. **15.1 — Choose and record the exact target.** `E` Save the OS version, app version, orientation, and a reference recording. *(was 15.1)*
2. **15.2 — Inspect at slow speed.** `E` Observe without guessing what happens between the first and last frame. *(was 15.2)*
3. **15.3 — Create a frame storyboard.** `E` Mark rest, contact, compression, early expansion, mid expansion, content reveal, settle, and close. *(was 15.3)*
4. **15.4 — Separate facts from hypotheses.** `E` Label what is visible and what is only an implementation guess. *(was 15.4)*
5. **15.5 — Design the scene graph.** `E` Separate background, glass material, source icon, menu content, dimming, and debug overlays. *(was 15.5)*
6. **15.6 — Measure source and destination bounds.** `B` Convert the three-dot button position into scene coordinates. *(was 15.6)*
7. **15.7 — Build the resting source bubble.** `B` Match size, radius, tint, edge, and shadow. *(was 15.7)*
8. **15.8 — Add press flex.** `B` Compress near the touch point and energize the material with a local glow. *(was 15.8)*
9. **15.9 — Start an anchored transform.** `B` Keep one visual point attached to the source while the shape begins to grow. *(was 15.9)*
10. **15.10 — Morph bubble to rounded sheet.** `B` Recompute bounds and corner geometry on every frame. *(was 15.10)*
11. **15.11 — Prevent stretched material artifacts.** `B` Do not scale a final glass bitmap non-uniformly. *(was 15.11)*
12. **15.12 — Keep menu content on a separate layer.** `B` Avoid refraction and geometric stretching of labels and icons. *(was 15.12)*
13. **15.13 — Reveal content progressively.** `B` Fade, clip, and slightly move menu entries only after enough room exists. *(was 15.13)*
14. **15.14 — Tune a thickness curve.** `B` Make the material appear more substantial as it becomes larger. *(was 15.14)*
15. **15.15 — Tune refraction over time.** `B` Increase lensing during the growth phase, then settle it deliberately. *(was 15.15)*
16. **15.16 — Tune diffusion and blur over time.** `B` Improve readability as more content appears. *(was 15.16)*
17. **15.17 — Add dark edge and bright specular highlight.** `B` Reinforce the refined material depth. *(was 15.17)*
18. **15.18 — Add dynamic shadow.** `B` Deepen, spread, and adapt it to the background. *(was 15.18)*
19. **15.19 — Add 3D tilt and perspective.** `B` Create depth without making the final menu look permanently rotated. *(was 15.19)*
20. **15.20 — Add boundary lens distortion.** `B` Bend background features near the moving silhouette. *(was 15.20)*
21. **15.21 — Add traveling interaction light.** `B` Let the initial touch energy move through the growing material. *(was 15.21)*
22. **15.22 — Add neighboring glass response if present.** `B` Make nearby controls react softly rather than independently flashing. *(was 15.22)*
23. **15.23 — Reverse the transition.** `B` Return content, optics, shape, and shadow to the source in the correct order. *(was 15.23)*
24. **15.24 — Handle rapid taps.** `B` Prevent jumps when open and close commands overlap. *(was 15.24)*
25. **15.25 — Handle interrupted and dragged states.** `B` Continue from the current visual state rather than restarting. *(was 15.25)*
26. **15.26 — Build reduced-motion and reduced-transparency versions.** `B` Preserve source relationship and readability. *(was 15.26)*
27. **15.27 — Profile on the iPhone 16 Pro.** `E` Inspect frame time, shader cost, render-target size, view updates, and allocations, with 14.20–14.21. *(was 15.27)*
28. **15.28 — Compare at normal and slow speed.** `E` Judge both the final appearance and the intermediate frames. *(was 15.28)*
29. **15.29 — Final capstone review.** `E` Explain every material and motion layer from first principles. *(was 15.29)*

**Checkpoint:** The menu must look convincing during the middle of the transition, not only at rest and at the final state.

---

### Chapter 16 — Expert engineering, testing, and independent work

**Purpose:** Turn experiments into a dependable graphics system.

1. **16.1 — Define a reusable API.** `E` Separate material, shape, interaction, environment, and transition parameters. *(was 16.1)*
2. **16.2 — `GlassContainer`.** `E` Own background capture and shared context. *(was 16.2)*
3. **16.3 — `GlassEffect`.** `E` Apply a material to a shape without owning app-specific content. *(was 16.3)*
4. **16.4 — `GlassTransition`.** `E` Describe source, destination, progress, interruption, and content timing. *(was 16.4)*
5. **16.5 — Use meaningful units.** `E` Distinguish points, pixels, UV, angles, and time. *(was 16.5)*
6. **16.6 — Cache shaders and offscreen snapshots.** `E` Avoid construction and allocation every frame. *(was 16.6)*
7. **16.7 — Update uniforms efficiently.** `E` Change visual values without rebuilding unrelated UI. *(was 16.7)*
8. **16.8 — Control render-target size.** `E` Crop, downsample, and reuse offscreen buffers. *(was 16.8)*
9. **16.9 — Adaptive quality.** `E` Reduce expensive details under load without abruptly changing the design. *(was 16.9)*
10. **16.10 — Screenshot and golden tests.** `E` Verify stable material states. *(was 16.12)*
11. **16.11 — Motion tests.** `E` Sample important progress values instead of checking only start and end. *(was 16.13)*
12. **16.12 — Fallbacks when the custom glass cannot run.** `E` Frosted, tinted, or opaque alternatives within the iOS 17 minimum (the old title said iOS 16, below the course's minimum). *(was 16.14)*
13. **16.13 — Build the gallery app and documentation.** `E` Make every parameter and tradeoff inspectable. *(was 16.15)*
14. **16.14 — Independent capstone.** `E` Choose an iOS Liquid Glass behavior not taught directly and reproduce it. *(was 16.16)*
15. **16.15 — Expert explanation.** `E` Teach the final system to another beginner using simple language. *(was 16.17)*

**Final standard:** You can observe an unfamiliar glass effect, divide it into geometry, sampling, light, compositing, motion, accessibility, and performance problems, then build and justify an iOS implementation.

---

## Appendix B — where every old lesson from 10.4 on went

| Old | New |
|---|---|
| 10.4 | 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 10.10, 10.11, 10.12, 10.13, 10.14, 10.15, 10.16, 10.17, 10.18 |
| 10.5 | 10.19, 10.20, 10.21, 10.22, 10.23, 10.24 |
| 10.6 | 10.26, 10.26, 10.27, 10.28, 10.29, 10.30, 10.30, 10.31, 10.32 |
| 10.7 | 10.33, 10.33, 10.34, 10.35, 10.36, 10.37 |
| 10.8 | 10.38, 10.39 |
| 10.9 | 10.40 |
| 10.10 | 10.42 |
| 10.11 | 10.43, 10.44 |
| 10.12 | 10.45 |
| 10.13 | 10.47, 10.48, 10.49 |
| 11.1 | 11.1, 11.2, 11.3, 11.4 |
| 11.2 | 11.9 |
| 11.3 | 11.10, 11.11 |
| 11.4 | 11.13, 11.14, 11.15 |
| 11.5 | 11.17 |
| 11.6 | 11.19, 11.20 |
| 11.7 | 11.21 |
| 11.8 | 11.23 |
| 11.9 | 11.24 |
| 11.10 | 11.26 |
| 11.11 | 11.27 |
| 11.12 | 11.28 |
| 11.13 | 11.29 |
| 11.14 | 11.30 |
| 12.1 | 12.1 |
| 12.2 | 12.2 |
| 12.3 | 12.4 |
| 12.4 | 12.5 |
| 12.5 | 12.7, 12.8 |
| 12.6 | 12.10, 12.11, 12.12, 12.13, 12.14, 12.15 |
| 12.7 | 12.16, 12.17 |
| 12.8 | 12.19 |
| 12.9 | 12.20, 12.21, 12.22, 12.23 |
| 12.10 | 12.29, 12.30 |
| 12.11 | 12.31, 12.32, 12.33 |
| 12.12 | 12.34 |
| 12.13 | 12.35 |
| 12.14 | 12.37, 12.38 |
| 12.15 | 12.39, 12.40 |
| 12.16 | 12.42, 12.43 |
| 13.1 | 13.1 |
| 13.2 | 13.2 |
| 13.3 | 13.3 |
| 13.4 | 13.4 |
| 13.5 | 13.5 |
| 13.6 | 13.6 |
| 13.7 | 13.7, 13.8 |
| 13.8 | 13.9 |
| 13.9 | 13.10, 13.11 |
| 13.10 | 13.12 |
| 13.11 | 13.13 |
| 13.12 | 13.14 |
| 14.1 | 14.1 |
| 14.2 | 14.2 |
| 14.3 | 14.3, 14.4 |
| 14.4 | 14.6 |
| 14.5 | 14.5, 14.7 |
| 14.6 | 14.8 |
| 14.7 | 14.9 |
| 14.8 | 14.10 |
| 14.9 | 14.11, 14.12, 14.13 |
| 14.10 | 14.14 |
| 14.11 | 14.15 |
| 14.12 | 14.16 |
| 14.13 | 14.17 |
| 14.14 | 14.18 |
| 14.15 | 14.19 |
| 15.1 | 15.1 |
| 15.2 | 15.2 |
| 15.3 | 15.3 |
| 15.4 | 15.4 |
| 15.5 | 15.5 |
| 15.6 | 15.6 |
| 15.7 | 15.7 |
| 15.8 | 15.8 |
| 15.9 | 15.9 |
| 15.10 | 15.10 |
| 15.11 | 15.11 |
| 15.12 | 15.12 |
| 15.13 | 15.13 |
| 15.14 | 15.14 |
| 15.15 | 15.15 |
| 15.16 | 15.16 |
| 15.17 | 15.17 |
| 15.18 | 15.18 |
| 15.19 | 15.19 |
| 15.20 | 15.20 |
| 15.21 | 15.21 |
| 15.22 | 15.22 |
| 15.23 | 15.23 |
| 15.24 | 15.24 |
| 15.25 | 15.25 |
| 15.26 | 15.26 |
| 15.27 | 15.27 |
| 15.28 | 15.28 |
| 15.29 | 15.29 |
| 16.1 | 16.1 |
| 16.2 | 16.2 |
| 16.3 | 16.3 |
| 16.4 | 16.4 |
| 16.5 | 16.5 |
| 16.6 | 16.6 |
| 16.7 | 16.7 |
| 16.8 | 16.8 |
| 16.9 | 16.9 |
| 16.10 | 14.20 |
| 16.11 | 14.21 |
| 16.12 | 16.10 |
| 16.13 | 16.11 |
| 16.14 | 16.12 |
| 16.15 | 16.13 |
| 16.16 | 16.14 |
| 16.17 | 16.15 |

---

## Appendix C — `--extra` example (the archived Lesson 10.4 page)

For `course/archive/lesson-10-04-dot-product-2026-11-02.html`. Save as `/tmp/extra-10-04-old.json`. For the new pages, write the same kind of entries for their buttons and sliders.

```json
[{"stepper":0,"step":1,"name":"Step 2 with the button y line","js":"document.querySelector('#lineBtns button[data-ln=\"1\"]').click()"},
 {"stepper":0,"step":1,"name":"Step 2 with the button height line","js":"document.querySelector('#lineBtns button[data-ln=\"2\"]').click()"},
 {"stepper":0,"step":3,"name":"Step 4 after Opposite to N","js":"document.querySelector('#lBtns button[data-th=\"opp\"]').click()"},
 {"stepper":0,"step":5,"name":"Step 6 with the flip slider at 100%","js":"flip=100;$('flipRange').value=100;$('flipV').textContent='100%';drawIdeaFlat()"}]
```

## Appendix D — the handoff entry for Lessons 10.4–10.18 (paste verbatim, Phase 5.2)

### Lessons 10.4–10.18 — the dot product, split by idea (2026-11-02)

```text
L = (0.48, −0.60, 0.64)          1 long, the direction toward a light, chosen, the same at every pixel; arrow units: 1 = the length of L
K = (0.62, 0.66) UV              on the rim, where none of N's parts is 0; S = the glass above K (height 0.0866)
N at K = (0.302, 0.402, 0.864)
dot(N, L) = how far N goes along L: a line from the tip of N meets L's line at a square corner, at F; L's ruler reads F (plus on the side L points to, minus on the other)
dot(N, L) = N's x part × L's x part + N's y part × L's y part + N's height part × L's height part
at K: 0.302 × 0.48 = 0.14496; 0.402 × (−0.60) = −0.2412; 0.864 × 0.64 = 0.55296; 0.14496 + (−0.2412) = −0.09624; −0.09624 + 0.55296 = 0.45672
W = (0.71, 0.50) UV, N at W = (0.605, 0, 0.796): 0.605 × 0.48 = 0.2904; 0 × (−0.60) = 0; 0.796 × 0.64 = 0.509; 0.2904 + 0 = 0.2904; 0.2904 + 0.509 = 0.7994; gray 0.8997
                                 (W's lines are rounded to 3 decimals, as the page prints them; with every digit of N, the GPU gets 0.799986)
gray = dot(N, L) × 0.5 + 0.5     display only: the dot map
```

**Source page:** `course/archive/lesson-10-04-dot-product-2026-11-02.html`, today's Lesson 10.4 before the split.

**What carries over:**
- the rendering engine;
- `ideaScene` (the glass at K), `drawNLPlane` (L's ruler, its numbers, its plus side and minus side), `patchScene`, `movesPic`, `cornerAtS`, the flip slider;
- the numbers above.

**Every lesson here:**
- Made by the ordinary job, one per chat: “Generate lesson 10.N”. Each links back to the lesson before it and on to the hub; its hub entry becomes `available` with its file.
- `C` lessons: one idea, at most 5 stepper steps, the glass at K (no test board), the HTML page only.
- 10.18 is `B`: it needs Xcode and the iOS lab.
- Wherever a length along L's line is printed: “arrow units: 1 = the length of L” (review #21).
- Review items #1–#30: `reviews/lesson-10-04-beginner-review-2026-11-02.md`.
- Cards 1–6 are the source page's Section 8. Each card's answer goes into the step where its question arises, not into a “your questions” section.

#### Lesson 10.4 — An arrow's part is a foot on an axis (`C`)
- **File:** `lesson-10-04-arrow-part-on-an-axis.html`.
- **From:** the hero; Steps 1–2 with the buttons x line, y line, height line.
- **Fix:**
  - #1: the hero says which pixel, K;
  - #2: one sentence why an arrow and a line from one point lie in one plane: lay a flat sheet along the line and turn it until it touches the arrow;
  - #3: why K: none of N's parts is 0, so every part has a move you can see in 10.10–10.15;
  - #4: “right” and “toward the top of the picture” drawn on the floor;
  - #5: no “such”;
  - #6: draw the walk S → G → tip. The y leg and the height leg stay in the flat wall that stands at a square corner to the x line at G. Like a pole standing on a floor, the x line meets every line drawn on that wall through G at a square corner, so the line from the tip meets the x line where the x leg ends, at G. Lesson 10.11 uses the walls again.
- **Fold in:** card 1 (the real glass, not a board), card 2 (“level” = parallel to the floor), card 3 (each part drawn as a leg).
- **Traced value:** the three feet at 0.302, 0.402 and 0.864.
- **Exercise, new:** where the line from the tip of N meets the height line (0.864).
- **When this page is made** (one time, in the same job):
  - delete `course/chapters/chapter-10/lesson-10-04-dot-product.html` (its copy is in `course/archive/`);
  - `lesson-10-03-surface-normal.html`: replace `<a href="lesson-10-04-dot-product.html">Lesson 10.4 — Dot product →</a>` with `<a href="lesson-10-04-arrow-part-on-an-axis.html">Lesson 10.4 — An arrow's part is a foot on an axis →</a>`;
  - the Chapter 10 hub: replace `<a href="lesson-10-04-dot-product.html">Lesson 10.4</a></nav>` with `<a href="lesson-10-04-arrow-part-on-an-axis.html">Lesson 10.4</a></nav>`, and `,'lesson-10-04-dot-product.html']` with `,'lesson-10-04-arrow-part-on-an-axis.html']`;
  - `liquid-glass-course.html`: replace `<a href="course/chapters/chapter-10/lesson-10-04-dot-product.html">Lesson 10.4 — Dot product</a>: measure how much two arrows point the same way, as one number.` with `<a href="course/chapters/chapter-10/lesson-10-04-arrow-part-on-an-axis.html">Lesson 10.4 — An arrow's part is a foot on an axis</a>: the first of the dot product lessons (10.4–10.18).`;
  - `CURRENT_STATE.md`: replace the section `## Lesson 10.4 — Dot product` with the new 10.4's contract, page shape and QA; in “Current lesson files”, the `Dot…` iOS files belong to Lesson 10.18;
  - `FEEDBACK_LOG.md`, newest first: “Curriculum v3: Lesson 10.4 split into 10.4–10.18 by idea; the new 10.4 made; review items fixed: …”;
  - check: `grep -rn "lesson-10-04-dot-product" --include=*.html --include=*.md .` lists only the plan, `FEEDBACK_LOG.md`, and the archived page's name in the handoff and in `CURRENT_STATE.md`.

#### Lesson 10.5 — How far an arrow goes along any line (`C`)
- **File:** `lesson-10-05-how-far-along-any-line.html`.
- **From:** Step 3; `drawNLPlane` with its plus side only.
- **Fix:** #7: name the question: 10.4's “how far N goes along x”, now along L's line.
- **Traced value:** with L along x, along y and straight up, the reading is 0.302, 0.402 and 0.864, Lesson 10.4's three parts. With the lesson's L, about 0.46 off the ruler; 10.16 computes 0.45672.

#### Lesson 10.6 — The minus side of L's ruler (`C`)
- **File:** `lesson-10-06-the-minus-side.html`.
- **From:** Step 3's plus side and minus side; card 5.
- **Fix:** #29: minus means the tip of N is on the side of S that L does not point to.
- **Fold in:** card 5.
- **Traced value:** with L along minus x, the line from the tip still meets the x line at G, but L's ruler reads G as −0.302.

#### Lesson 10.7 — Same direction 1, opposite −1 (`C`)
- **File:** `lesson-10-07-same-direction-1-opposite-minus-1.html`.
- **From:** Step 4 with the buttons Same direction and Opposite.
- **Fix:** #8: as L turns toward N, the tip of N comes closer to L's line, so F slides toward the tip.
- **Fold in:** card 4: F is where the line from the tip meets L's line; when L's line runs through the tip, F is the tip.

#### Lesson 10.8 — A square corner gives 0 (`C`)
- **File:** `lesson-10-08-a-square-corner-gives-0.html`.
- **From:** Step 4 with the button A square corner with N.
- **Fix:**
  - #9: at a square corner, N itself is the line from its tip at a square corner to L's line, so F is at S. Draw the corner mark; keep the S and F labels apart;
  - #26: the other way round: 0 means F is at S, so N stands at a square corner to L's line.

#### Lesson 10.9 — Never past 1 (`C`)
- **File:** `lesson-10-09-never-past-1.html`.
- **From:** Step 4's caption `ⓘ`.
- **Fix:** #10: 1² = SF² + (F to tip)² (Lesson 9.1), so SF is at most 1. The cos name of Lesson 4.9 gets its own `ⓘ`, or goes.
- **Exercise:** “Can dot(N, L) be 1.2?” No: S to F is a shorter side of a right triangle whose long side is 1.

#### Lesson 10.10 — A walk's legs each move F (`C`)
- **File:** `lesson-10-10-each-leg-moves-f.html`.
- **From:** Step 5.
- **Fix:**
  - #11: we draw these lines only to find a rule; 10.12–10.16 turn each move into a multiplication the GPU can do;
  - #12: define once: a leg “moves F” when the meeting point goes from one F to the next, F₁ → F₂ → F₃.

#### Lesson 10.11 — A leg's start does not matter (`C`)
- **File:** `lesson-10-11-a-legs-start.html`.
- **From:** Step 8's copy of a leg from S.
- **Fix:** #16: flat walls at a square corner to L's line, one per ruler mark (Lesson 10.4's wall, now across L's line). The same leg crosses the same walls wherever it starts.
- **Picture:** both moves side by side, with their ruler readings. Use the height leg: F₂ at −0.09624 → F₃ at 0.45672, and its copy from S; both move 0.55296. It is a plus move; the y leg's minus move waits for 10.15.

#### Lesson 10.12 — A flip keeps lengths and square corners (`C`)
- **File:** `lesson-10-12-a-flip-keeps-lengths.html`.
- **From:** Step 6's gray halfway line and flip slider.
- **Fix:** #14, first half:
  - why the flip over the halfway line swaps the x line and L's line: the halfway line makes the same angle with both;
  - why it keeps S: S is on the flip line;
  - why it keeps lengths and square corners: fold the picture along the line; nothing stretches.
- **Fold in:** card 6's first bullets.

#### Lesson 10.13 — A walk of 1 along x lands at L's x part (`C`)
- **File:** `lesson-10-13-walk-of-1-along-x.html`.
- **From:** Step 6.
- **Fix:**
  - #13: name both triangles before “both”: the lime triangle S, X, J (square corner at J) and the yellow triangle S, tip of L, Q (square corner at Q);
  - #14, second half: the flip takes X (1 along x) onto the tip of L (1 along L), and Q's square corner onto J's.
- **Fold in:** card 6: three facts make the triangles match: the shared angle at S (the arc), a square corner, a long side of 1.
- **The result:** Q is at 0.48 along x (Lesson 10.4), so J is at 0.48 along L's line.

#### Lesson 10.14 — Growing scales every side (`C`)
- **File:** `lesson-10-14-growing-scales-every-side.html`.
- **From:** Step 7.
- **Fix:** #15 (blocks) and #30. The chain, each with its reason on the page:
  - growing from S by 1 ÷ 0.302 multiplies every distance from S by one number;
  - a point on a line through S stays on that line, so the angle at S stays;
  - the line from X to J moves to a line in the same direction, so the square corner stays;
  - so the small triangle lands on the big one, and every side is multiplied by that number, the move along L's line too: 0.302 × 0.48 = 0.14496.

#### Lesson 10.15 — A part that points away: the minus case (`C`)
- **File:** `lesson-10-15-the-minus-case.html`.
- **From:** Step 8's y part.
- **Fix:**
  - #17: its own gray halfway line and flip slider. The two triangles lie on opposite sides of S; Q at −0.60 lands on J at −0.60;
  - #4: mark “right” and “toward the top of the picture” on the flat picture.
- **The result:** 0.402 × (−0.60) = −0.2412.

#### Lesson 10.16 — The dot product formula (`C`)
- **File:** `lesson-10-16-dot-product-formula.html`.
- **From:** Steps 9–10; Section 3's code line; Exercise 3 (b at W).
- **Fix:**
  - #18: “no corner between the arrows (no angle)”;
  - #27: “Counted along the line of b from H”.
- **Code:** `dotNL = N.x * L.x + N.y * L.y + N.z * L.z`, with its line table.
- **Traced value:** the chain at K above. Lesson 10.5's “about 0.46” is now exact.
- **Exercise 3:** uses 10.8's “0 means a square corner”: b = (0.796, 0, −0.605) at W, 0.48158 + 0 + (−0.48158) = 0.

#### Lesson 10.17 — One light direction for every pixel: the dot map (`C`)
- **File:** `lesson-10-17-dot-map.html`.
- **From:** Section 2 (W's trace, the map with points 1–10); Exercises 1 and 2.
- **Fix:**
  - #1: W is the pixel this lesson traces;
  - #19: from very far away, the direction toward the light changes too little across the glass to matter;
  - #20: point 4 is just above 0 (0.0488, gray 0.5244); nearer the outline N leans further, its height part shrinks, and the number goes below 0;
  - #22: on the flat top, the height only says where H is; the number uses only the arrows' parts;
  - #23: “on the side of the rim away from where L leans”;
  - #24: c leans away from both of L's level parts, so two products are minus; a and b lean away from only one;
  - #25: one value for c's N.
- **Traced value:** W, with the chain above.

#### Lesson 10.18 — Build: the dot product in Metal (`B`)
- **File:** `lesson-10-18-build-dot-product-in-metal.html`.
- **Joins:** 10.4–10.17. One recall line per joined lesson, each with its `ⓘ`.
- **From:**
  - Section 3 (the code excerpt);
  - Section 4: the challenge “write the dotNL line” becomes the first function of the Metal exercise; no browser challenge;
  - Section 6 (the Metal exercise) and Section 7 (the record);
  - the iOS files `chapter10/DotExplorer.swift`, `DotMap.metal`, `DotExercise.metal`, `DotExerciseKey.metal`, `DotExerciseView.swift` (relabelled in Phase 6 of the curriculum revision).

#### Later in Chapter 10
- Exercise 4 (rawNormal against N at W and V) moves to 10.22, “Why N must be 1 long”, with #28: from W to V the x product gains 0.456 − 0.2904 = 0.1656, but the height product loses 0.509 − 0.202 = 0.307, so the number drops from 0.7994 to 0.658.

---

## Appendix E — the Chapter 10 hub's lesson array (paste verbatim, Phase 4.2)

```js
const lessons=[
['10.1','Height-map idea','available','Every pixel gets a surface height: inside = clamp(−sd, 0, bevel), leg = bevel − inside, h = √(bevel² − leg²). Teaching W = (0.71, 0.50) has h = 0.08 and stores gray 0.80.','lesson-10-01-height-map-idea.html'],
['10.2','Slope','available','Measure average x slope: slopeX = (hRight − hLeft) ÷ (2 × step). W = (0.72, 0.50) uses heights 0.08 and 0.06 from A and B, giving slopeX −1. Metal exercise: the x slope of a rounded-rectangle button.','lesson-10-02-slope.html'],
['10.3','Surface normal','available','A quarter turn of each slope triangle gives rawNormal = (−slopeX, −slopeY, 1); dividing by its length √(x² + y² + z²) gives N. Teaching W: N = (0.605, 0, 0.796).','lesson-10-03-surface-normal.html'],
['10.4','An arrow\'s part is a foot on an axis','available','From the tip of N, a line at a square corner to the x line lands where N\'s x part ends: the y leg and the height leg stay in the flat wall that stands at a square corner to the x line there, like a pole standing on a floor. The same for y and height.','lesson-10-04-dot-product.html'],
['10.5','How far an arrow goes along any line','planned','The same drawing onto L\'s line gives the point F, and L\'s ruler reads how far F is from S. That reading is dot(N, L); with L along x, y or up, it is N\'s x, y or height part.',null],
['10.6','The minus side of L\'s ruler','planned','L\'s ruler is plus on the side L points to and minus on the other. When the tip of N is on the side of S that L does not point to, F lands on the minus side and the reading is below 0.',null],
['10.7','Same direction 1, opposite −1','planned','When L\'s line runs through the tip of N, the line from the tip has nothing to cross: F is the tip itself, 1 from S on the plus side; when L points the opposite way, the tip is on the minus side, −1. As L turns toward N, F slides toward the tip.',null],
['10.8','A square corner gives 0','planned','At a square corner, N itself is the line from its tip at a square corner to L\'s line, so F is at S and the reading is 0. The other way round: a reading of 0 means a square corner.',null],
['10.9','Never past 1','planned','S, F and the tip of N form a right triangle whose long side is N, 1 long (Lesson 9.1), so the reading stays between −1 and 1.',null],
['10.10','A walk\'s legs each move F','planned','Walk to the tip of N along its x, y and height parts; each leg moves the meeting point along L\'s line, and the moves add up to F.',null],
['10.11','A leg\'s start does not matter','planned','Flat walls at a square corner to L\'s line: the same leg crosses the same walls wherever it starts.',null],
['10.12','A flip keeps lengths and square corners','planned','A flip over the line halfway between the x line and L\'s line swaps the two lines and keeps S, every length and every square corner.',null],
['10.13','A walk of 1 along x lands at L\'s x part','planned','Three facts make the two triangles match: they share the angle at S, each has a square corner, and each has a long side of 1. The flip takes one onto the other, so the walk lands 0.48 along L\'s line.',null],
['10.14','Growing scales every side','planned','Grow the triangle from S by one number: every angle stays and every side grows by that number, so a walk of 0.302 along x moves F 0.302 × 0.48 along L\'s line.',null],
['10.15','A part that points away: the minus case','planned','L\'s y part is negative: the flip lands on the minus side, so N\'s y part moves F toward the minus side: 0.402 × (−0.60) = −0.2412.',null],
['10.16','The dot product formula','planned','Three products added: N\'s x part × L\'s x part + N\'s y part × L\'s y part + N\'s height part × L\'s height part = 0.45672 at K.',null],
['10.17','One light direction for every pixel: the dot map','planned','A very far light gives the same L at every pixel; dot(N, L) at every pixel, shown as gray, with one pixel traced.',null],
['10.18','Build: the dot product in Metal','planned','Write <code>dotOfArrows</code> and the dot map shader. Joins 10.4–10.17. Takes over the existing <code>DotExercise</code> files.',null],
['10.19','Why a tilted surface gets less light','planned','A beam of light 1 wide spreads over a longer piece of a tilted surface, so each point gets beam width ÷ lit length of the light.',null],
['10.20','Brightness is dot(N, L)','planned','Turned a quarter turn (Lesson 10.3) and shrunk until its long side is 1 (10.14), the beam\'s triangle lands on the triangle S, F, tip of N, so beam width ÷ lit length = dot(N, L).',null],
['10.21','Facing away: max(dot, 0)','planned','A number below 0 means the surface faces away from the light; it gets no light, so it becomes 0.',null],
['10.22','Why N must be 1 long','planned','A longer arrow would count as more light: rawNormal gives the wrong brightness order, N gives the right one.',null],
['10.23','Ambient light','planned','A small floor so the side facing away is not black.',null],
['10.24','Light color and strength','planned','Multiply the surface color by brightness, light color and strength, channel by channel.',null],
['10.25','Build: lit glass, version 0','planned','One Metal function: height → slope → N → dot(N, L) → diffuse with ambient. Joins 10.19–10.24.',null],
['10.26','The mirror direction and the viewer','planned','Light bounces off a mirror at the same angle it arrives. We look straight at the screen, so the direction toward the viewer is V = (0, 0, 1) at every pixel, the same simplification as the far light (10.17). A highlight appears where the bounce goes toward V.',null],
['10.27','The halfway arrow','planned','L and V added make the diagonal of a rhombus; the diagonal cuts it into two triangles with three equal sides, so they match and the diagonal points halfway between L and V. Made 1 long, it is H.',null],
['10.28','Where N equals H','planned','N equals H exactly where the mirror bounce of L reaches the viewer: that is where the highlight sits.',null],
['10.29','How close N is to H','planned','dot(N, H) is 1 where N equals H and smaller around it.',null],
['10.30','Sharpening with a power','planned','A number between 0 and 1 raised to a power shrinks, and the smaller it is, the faster: dot(N, H)ⁿ leaves only a small bright spot. The power n is a chosen dial: 8, 32 and 128 give a wide, a medium and a tight highlight.',null],
['10.31','Adding light on top','planned','The highlight is added to the color, not mixed, and each channel is clamped at 1.',null],
['10.32','Build: specular highlight','planned','Joins 10.26–10.31, on the glass.',null],
['10.33','An edge measure: 1 − dot(N, V)','planned','dot(N, V) is N\'s height part, because V = (0, 0, 1): 1 on the flat top, smaller toward the outline. 1 − dot(N, V) turns it around: 0 on the flat top, growing toward the outline.',null],
['10.34','Glancing light reflects more','planned','What Fresnel means: a surface seen at a glancing angle reflects more of the light; a picture with numbers, no proof.',null],
['10.35','A Fresnel-like curve','planned','(1 − dot(N, V))⁵ stays small, then rises fast near the outline; an approximation (Schlick\'s), not physics.',null],
['10.36','A base amount','planned','F0 + (1 − F0) × curve: a chosen minimum reflection everywhere.',null],
['10.37','Build: rim on the glass','planned','The rim together with the specular highlight. Joins 10.33–10.36.',null],
['10.38','An edge band inside the outline','planned','From the distance field and smoothstep (Lessons 7.8 and 9.3 again): 1 at the outline, 0 a chosen width inside.',null],
['10.39','Darkening the band','planned','Multiply the color by 1 − strength × band: a darkened edge.',null],
['10.40','A thin bright edge line','planned','A narrower band with a higher power next to the dark band; dark beside bright reads as depth.',null],
['10.41','Build: edge contrast','planned','Joins 10.38–10.40.',null],
['10.42','One thickness dial','planned','One value from 0 to 1; each property gets a range, and mix picks the value inside it.',null],
['10.43','Thickness changes refraction','planned','A thicker material pushes the read point further (Lesson 9.11\'s push length).',null],
['10.44','Thickness changes diffusion','planned','A thicker material blurs more.',null],
['10.45','Thickness changes shadow','planned','Radius, opacity and offset of the shadow grow with thickness.',null],
['10.46','Build: thickness on the glass','planned','One slider drives refraction, diffusion and shadow. Joins 10.42–10.45.',null],
['10.47','Build: material shader v1, part 1 — optics','planned','Mask, refraction and tint in one shader.',null],
['10.48','Build: material shader v1, part 2 — light','planned','Add diffuse, specular, rim and edges.',null],
['10.49','Build: material shader v1, part 3 — thickness','planned','The thickness dial drives everything; the chapter checkpoint.',null]
];
```
