# AGENTS.md — how to write the Liquid Glass lessons

The one rulebook. It is short on purpose: every rule here is checked before delivery (the checklist at the end). The state of the course (files, glass numbers, the newest lessons) is in `CURRENT_STATE.md`; how a chat starts is in `NEW_CHAT_PROMPT.md`.

When the learner corrects a lesson, fix the lesson. If the failure is general, change or add **one line** here, merged into the rule it belongs to. There is no log of past failures: git keeps the history.

## 1. The learner

- An experienced software engineer (web, some .NET). A **total beginner** in maths, geometry, graphics, GPUs and shaders. Not a native English speaker.
- Knows arithmetic and what the earlier lessons taught, nothing more. Does not go back to re-read passed lessons.
- Wants: the idea first, in plain words; a reason for every claim; pictures that carry the explanation; short text; real numbers.
- Gets angry at: claims without reasons; operations whose purpose is not said; words that point at nothing on the screen; coined terms; numbers whose meaning, sign, 0 or 1 is not said; the same thing said twice.

## 2. The idea and the reasons — the rules that keep failing

1. **The hero states the idea** in two or three plain sentences: what the lesson finds, how, and why that works. If you cannot write it plainly, the lesson is not ready. (10.46 never said why sd at four neighbors gives a direction.)
2. **Every step says what it does and why, before its numbers.** A step's title is a full claim in words (“Over 1 pt to the right, sd changes by −0.60”), not a topic.
3. **Every operation says why it is done**, in its own line or the line before: a division, a product, a subtraction, a check. A bare “18.24 ÷ 0.60 = 30.40” fails. A number reused from an earlier step says what it is and where it came from (“|KP| = 30.40 pt, Step 1”). A given or measured number is worked out in the caption where it first appears, never only in a tooltip (“the left edge: the line x = 238.80 − 130.50 = 108.30”).
4. **A step that swaps the goal for another question** (outward → the way in which sd grows the most) **says why the new question gives the goal and why the shader can answer it.** **The goal object is defined at its first use** (“outward: the arrow 1 pt long from P toward Q”). When a later object turns out to be it, say so (“so this arrow is outward”). Never leave two candidate objects for one name.
5. **A “why” line gives the real reason, with a concrete example and its number, built from what the learner already knows** (“brightness = dot(N, L), and an N 0.707 long gives a dot 0.707 times as large”). Never an object no lesson has taught yet (the lens), never “later lessons need it”.
6. **Never mention a case without its reason and numbers** (“at some pixels this arrow is shorter” fails: say which pixels, why, and how long). A case at another pixel is a step of its own, with its own pictures and the reason for each of its numbers, never one caption line.
7. **A claim is followed at once by its reason or by the picture that shows it.** A claim the figure shows at a glance gets one sentence, not a proof. A claim that two quantities are equal works each out from its own inputs. A claim that a choice does not change the result is shown with a control over the choice's whole range.
8. **A result never comes before its reason.** A check is not a derivation; call a check a check.
9. A step that computes with a wrong input says first why anyone would use it and that it is the reason for the right step; never present it as an allowed choice.
10. **Step 1 says what the code knows, what it does not use and why, and what it must find**; never “does not know” about what the code could work out, and every example of the why is drawn in that step's picture; each later step adds one fact that brings the unknown within reach of the known. A step that looks for a largest value says first what that value gives (“the move with the biggest growth of sd has outward's direction”).

## 3. Plain words

1. Short sentences, one idea each. A caption is a list of **at most 5 short lines**, each a **full sentence with a subject and a verb**. “For each 1 pt to the right: −0.60” has no subject; write “sd changes by −0.60 for each 1 pt to the right”. A line that announces items (“two things:”) has them as sub-points.
2. **A sign is explained once, where it is printed, in direction words**: “x part −0.60: minus means to the left, so the arrow goes 0.60 pt to the left”. Never say “the opposite way”, “the other way” or “the other way round”: name the direction.
3. Every printed 0, 1 and minus says what it means there (0: it does not go that way; minus: the other way; 1: which choice it comes from).
4. Standard math words and notation: points are capital letters; segment AB, its length |AB|, line AB, ∠ABC, △ABC, P′ for the image of P; “the foot of P on line L”, “scaled from S by k”. A teacher's words, never coined ones: no “reading”, “reads”, “meeting point”, “walk of”, no metaphor names (seat, landing, stick, net), no phrases built from course nouns. Banned: `arctan`, “lattice”, “level-set”.
5. **One object, one name**, from start to end. A colour name means one object. A view of an object is not a new object. Never rename mid-lesson.
6. Point, arrow and line are three words. A point is a place, counted from the origin. An arrow goes from a start to a point; its parts are counted from its start: x part (to the right), y part (toward the bottom), height part (up). A line is endless both ways. The dot product takes two arrows.
7. **No vague pointers**: “it”, “this”, “the same”, “that value”, “the arrow” when several are drawn. Repeat the name.
8. Define every term and notation in the sentence where it first appears. A word that could describe the graph or the picture (linear, straight) says which.
9. **No lesson numbers inside explanations**: say the fact. Lesson links appear only in the Uses box, the “Where this is used” line and the navigation.
10. Physics starts from an everyday sight, then the model. A choice made for the pictures gets one plain line. Every chosen or fitted number is called **chosen** where it is used, with what another value would do.
11. Never change the case of text that may hold a symbol (no `text-transform: uppercase`).

## 4. Numbers

1. A calculation shows, in order: the named formula with its inputs and what it finds → the substitution → each intermediate value → the result → what uses the result. **One operation per “=”.** Each product is named by the parts it multiplies.
2. All lines are rounded the same way (3 decimals by default) and are **calculator-exact from the displayed inputs**, at every slider position. More decimals where points are closer than 0.001.
3. Inputs known before a calculation (given or found earlier) are green (`.kn`, `Trace.K`); the page says so once. A hidden answer writes its whole calculation, green inputs included.
4. Every number says what it measures, on which scale and from where (pt from the screen's top-left corner, y toward the bottom; UV; a channel from 0 to 1), and whether it is chosen, measured or worked out. A distance names its two points; both are drawn.
5. A number appears in the step that uses it, never earlier, not even in a tooltip. A result is worked out once.
6. A division says what each of its numbers counts and what the result counts. A ratio between two scales draws both.
7. Teaching numbers are never 0 or 1, and no two different quantities print the same number unless that is the point. A rule that holds for any length is also run on an arrow that is not 1 long. A formula is run on two cases.
8. A scale factor is written as the ratio of matching sides, for each scaled triangle, with whether it grows or shrinks.
9. A length needs no sign: work it out from lengths, not as a signed “end − start” whose minus then needs explaining.

## 5. Pictures

1. **Cut the text, never the pictures.** The picture carries the explanation; the caption says what it shows now.
2. Every drawn element is labelled inside the picture. Every point the text, a table or a tooltip names is drawn and labelled in every picture of that state, the 3D view included. A legend only for marks too small to label, listing only what this state draws.
3. Every point is clickable (a short popup: name, role, coordinates in a named system; Enter, Escape, ✕, outside click; kept on screen). A point the learner places is draggable in every picture that shows it and goes exactly where the pointer puts it; its numbers and calculation follow live.
4. Every picture names its coordinate system inside it. A step that switches system says so.
5. A step draws only the objects its caption uses, and its picture changes visibly from the step before.
6. A moved point shows its way (a turn, a flip, a shift), not only its start and its end.
7. **3D:** once a surface is involved, show it in a turnable 3D view (drag, wheel, preset views) with a corner box (the axes as drawn, the units). The page never turns the view between steps; the scale stays put while the learner turns it; the floor patch and its direction words stay in view. A flat view goes beside the 3D view, never instead of it. A side view is a slice along a named line, first shown with a 3D picture of the cut.
8. No eye or viewpoint guidance (“your eye”, “stand at”). Views are named by the two directions they show.
9. Where an effect moves pixels (the lens), draw arrows from output pixels to their read points on the source picture, and let the learner drag a pixel to see its whole chain. Show an effect on content whose mirror image looks different.
10. A model that stands in for the real shape is drawn beside the real shape and zoomed until they meet, with the gap printed in screen lengths.
11. Strokes are solid, with a dark halo, in a hue not in the picture. Labels are at least 14 px on screen, on plates, never overlapping or cut, inside the picture.

## 6. Lesson shape

The type comes from the plan.

- **`C` — one new idea.** Hero (title, the idea in two or three sentences, “Where this is used”) → Uses box (one line per earlier fact, with links) → Section 1: the idea in pictures, one stepper of at most 6 steps (no stepper when the idea is one fact a picture shows) → Section 2: Section 1's own steps at a draggable point, one table row per step → 1–2 exercises. About 300 words of page text before the exercises (labels and tooltips not counted). Code only when the idea is a code line: at most 3 lines, with a line table.
- **`B` — no new idea; joins the lessons its plan entry names.** Hero → one recall line per joined idea, each with ⓘ → short code → a Metal (or Swift) exercise in the lab: stubs that compile, a prepared caller, an answer key and a check view on the chapter screen that marks differences in red → the iOS explorer → 1–2 exercises → a copyable Markdown record.
- **`E` — one engineering practice.** The problem in one paragraph and a picture → the code with a line table → a check (a test, a preview or a measurement) → 1–2 exercises → a record. Code first; no maths steppers.
- **Exercises.** One plain full-sentence question in the lesson's words, the same as its title, 2–4 clickable choices; the right one's place varies. It tests the lesson's idea on a new case, never a side fact or something a step's picture already shows. The question shows the lesson's own 3D view (or its picture) with a red marker; the hidden answer draws the reason and writes the whole calculation.
- **Tooltips (ⓘ)** recall one earlier fact in one to three lines. The page must be clear without them. A new computation is never only in a tooltip.
- **Say each fact once.** No recap, no “New here” essay, no questions section. A learner's question is answered where the confusion arose; a fact the steps skipped becomes a step of its own.
- No split for the idea count. A page that teaches two unrelated ideas is split only after asking the learner.

## 7. Part two — the Safari spring menu (lessons after 10.45)

- The plan is `curriculum/safari_spring_menu_plan.md`, section 4 (not the old curriculum). A lesson stays only if, without it, one layer of the menu could not be explained or built.
- Teach on the menu's real glass, at a named pixel, in pt on the 402 × 874 pt screen (from its top-left corner, x to the right, y toward the bottom), in 3D wherever a surface is involved. The glass numbers are in `CURRENT_STATE.md`.
- Each fact the lesson needs is stated where it is used (the plan's 4.6 lists them).
- **Themes:** light and dark, from the system setting only; no selector, no stored choice. Dark text is off-white, never pure white, on a dark blue-gray, never pure black. Copy the newest lesson's theme block (`CURRENT_STATE.md` describes it). Check both themes.
- The newest part-two lesson is the template: reuse its helpers, do not rewrite them.
- Open, the learner's call: the plan allows exercises “only when two or three lessons give something to build”; 10.46 and 10.47 have 1–2.

## 8. Files and scope

- Lessons: `course/chapters/chapter-NN/` (part one, done) and `course/part-two/chapter-NN/lesson-NN-MM-<short-name>.html`. One self-contained HTML file per lesson (inline CSS, JS and SVG; no CDN; works from `file://`), desktop at 1920 × 1080. Header links go to the course home, the chapter hub, the glossary and “How numbers are written”.
- **Never edit a lesson before the one the job names.** The plan, the course home, the hubs and the old curriculum change only when the learner says so.
- A lesson that adds a term adds it to `course/glossary.html`; one that adds a way of writing numbers adds a row to `course/reference-number-forms.html`.
- iOS lab: `/Users/rosen/Code/LiquidGlassLab-iOS` (the learner's Mac only; never an `ios/` folder here). Only `B` and `E` lessons ship Swift or Metal, wired into the chapter screen and built in the same session; without the lab or Xcode, say so before starting. SwiftUI layout containers; previews light then dark, 402 × 874 pt, scrollable; never `ultraThinMaterial` or `glassEffect` as the glass.
- Cheatsheet (`cheatsheet/`): one self-contained page per chapter, the same common style and script blocks in every page (`SECTIONS` identical everywhere). A card: the formula in LaTeX, a list naming every letter, a picture from the card's own example (a lesson step copied whole, drawn by the lesson's own code), known inputs green, links to the lab's Swift files.
- No ZIP files, no archive folders, no lesson-completion counts in any file. Old versions live in git.

## 9. Before delivery

1. **Cold read as the learner**, state by state: for every name, number and claim in the caption, table and tooltips, answer: where is it drawn? where was it defined? what is its reason? Any empty answer means rewrite, not a note.
2. **The checklist below**, on every caption, table, tooltip and exercise.
3. **Arithmetic:** audit every “a op b = c” on the page (text, tables, tooltips, labels), calculator-exact.
4. **Browser QA at 1920 × 1080**, light and dark for part two: every step, control, preset, drag and exercise; every tooltip opens on screen; no script errors; no horizontal overflow; no overlapping or cut labels; the text matches the pictures.
5. QA files live outside the repositories and are deleted afterwards.
6. No fresh-agent “beginner review” (learner, 2026-11-17: “don't run the useless beginner-friendly review”), unless the learner asks for one.

## 10. When the learner asks or corrects

- Answer in chat first: quote the exact sentence or picture; keep it short; every number shows where it comes from; no Markdown table holding a length such as |SP| (its bars break the table).
- Fix the lesson with the smallest change that removes the confusion, where it arose. Build a request as worded; an extra you think would help is named in chat, not built.
- If the failure is general, change one line in this file (section 2 holds the rules that keep failing).
- Grading exercises answered in chat: ✓ / partly / ✗ per item, quote where the reasoning went wrong, honestly.

## Checklist

- [ ] The hero states the idea plainly: what, how, and why it works.
- [ ] Every caption line is a full sentence with a subject; at most 5 lines per caption.
- [ ] Every operation says why it is done.
- [ ] Every number says what it measures, what its sign, 0 or 1 means, and whether it is chosen, measured or worked out.
- [ ] Every name in a caption is drawn and labelled in that state's picture, and was defined before.
- [ ] Every claim has its reason on the same screen.
- [ ] Every “why” line gives a concrete reason with a number; no case is mentioned without its reason.
- [ ] No coined words, no vague pointers, no lesson numbers inside explanations.
- [ ] Each fact is said once; about 300 words before the exercises.
- [ ] Arithmetic audited; browser QA done in both themes.
