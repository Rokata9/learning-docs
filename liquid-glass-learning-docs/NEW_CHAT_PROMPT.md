# Liquid Glass on iOS course — new chat starter

Start a new chat with this file: either paste it, or tell the chat to read `liquid-glass-learning-docs/NEW_CHAT_PROMPT.md` from the repository and follow it. In the same message, name the job:

- **Questions about lesson N.M**, followed by the questions (the most common job), or
- **Generate lesson N.M**, or “generate the next lesson”.

If the job is named, start it in your first reply. If it is not named, say that you are ready and wait.

## 1. Where the files are

- **Docs:** the folder `liquid-glass-learning-docs` in the GitHub repository `Rokata9/learning-docs`, branch `master` (https://github.com/Rokata9/learning-docs). On my Mac it is a local checkout of that repository.
- **iOS lab:** `/Users/rosen/Code/LiquidGlassLab-iOS`. It exists only on my Mac. It is not on GitHub.
- Read files with your file tools. If you have no local checkout, open the GitHub repository. If you can open neither, ask me to attach the files you need.
- Never rebuild a file from memory.
- If you cannot open a file, name it and say what that changes:
  - questions: answer from what you could read;
  - generate: stop and ask.

## 2. Your first reply

1. List each file you opened, with its line count. List each file you could not open.
2. If two files contradict each other, say so. Do not pick one silently.
3. Then do the job in the same reply.

## 3. What to read

Always:

1. `USER_PREFERENCES.md`: all of it except three sections that belong to other projects: “Diagram preferences (Mermaid / mmdc)”, “Call-stack / control-flow visualization” and “Architecture diagrams”.
2. `AGENTS.md`: all of it. It is the lesson rulebook.
3. `CURRENT_STATE.md`: the header, “Frozen frost stack”, “Pending iOS changes”, “Current lesson files”, and the section of the named lesson (if it has one).

Questions about lesson N.M, also:

- the lesson HTML under `course/chapters/`: the section the question is about (search for its heading), and the script that draws its pictures when the question is about a picture. Read the whole file only when the question needs it.
- `curriculum/liquid_glass_ios_handoff.md`: the entry of lesson N.M.
- `FEEDBACK_LOG.md`: the newest entries about lesson N.M (search for “Lesson N.M”).
- only when the question depends on them: the lesson before N.M, and terms in `course/glossary.html` (search for the term; do not read the whole glossary).

Generate lesson N.M, also:

- `curriculum/liquid_glass_ios_curriculum.md`: the entries of N.M and its neighbors, and N.M's type (`C`, `B` or `E`); for a `B` lesson, the lessons it joins.
- `curriculum/liquid_glass_ios_handoff.md`: N.M's entry, which may name a source page, review items to fix and question cards to fold in.
- the HTML of the lesson before N.M in curriculum order, and the chapter hub HTML.
- iOS, for `B` and `E` lessons only: the chapter screen (`ChapterNNScreen.swift`) and the explorer that N.M sits next to. The `@main` App / `LabHost` only if the route changes.
- `course/glossary.html` (search) if N.M adds a term.
- `FEEDBACK_LOG.md`: the newest 10 entries. They are the most recent mistakes to avoid.

“The next lesson” is the first lesson in curriculum order whose HTML file does not exist under `course/chapters/`. Check the folder. Do not trust a copied list.

When files disagree:

- lesson-writing rules: `AGENTS.md` wins;
- teaching contracts, file names and teaching values: `CURRENT_STATE.md` wins over the handoff, the curriculum and older lesson prose.

## 4. Who I am

I am an experienced software engineer. I am a total beginner in graphics, rendering, GPU work, image processing and mathematics. The rules for explaining to me are in `USER_PREFERENCES.md` and `AGENTS.md`. The ones that matter in every reply:

- short text, full pictures: captions of at most 5 short lines, a one-line Uses box, about 300 words of page text before the exercises; the pictures stay as rich as they are (`AGENTS.md` Rule 0, 2026-11-05);
- plain words and standard math notation (segment AB, |AB|, ∠ABC, P′); never a phrase built from course nouns;
- short sentences in bullet lists; a line that announces items (“two things:”) has them as indented sub-points;
- concrete numbers and pictures before formulas;
- every coordinate names its coordinate system (UV, board units, …), and a switch between systems is said out loud;
- the lesson's own names for things, the same names from start to end.

## 5. Questions job

1. Answer in the chat first. Quote the exact sentence or picture the question is about. Keep the answer short (`AGENTS.md` rule 17: no proof rounds).
2. Decide whether the question shows a defect in the lesson: unclear, wrong, inconsistent names, or a missing picture.
3. If it does, fix it in the same chat:
   - change the lesson as little as needed to remove the confusion; all `AGENTS.md` rules apply to the change;
   - put the clarification in the lesson's last section, “your questions” (`AGENTS.md` rule 17), not in the existing steps: one card per question, my question word for word, its short answer and its picture; in the existing steps only correct a wrong name or number, and add no lines;
   - run `AGENTS.md` rule 24: name what failed; merge a prevention rule into `AGENTS.md` if the failure is general; add a `FEEDBACK_LOG.md` entry (newest first) with the failure → rule link;
   - update the lesson's section in `CURRENT_STATE.md` and its handoff entry if its contract or page shape changed;
   - re-check the changed parts: `AGENTS.md` rule 20 (cold read) and rule 21 (syntax and browser checks at 1920×1080); recompute every changed number.
   - run the fresh review on the revised lesson (`AGENTS.md` rule 20, `tools/beginner-review/REVIEWER_PROMPT.md`) and fix every blocks and slows item;
4. If the lesson is fine, only answer. Do not change files.
5. Do not generate another lesson.

## 6. Generate job

- A lesson that turns out to hold more than one concept is split at once, without asking me (`AGENTS.md` rule 16): renumber, generate the first of the new lessons, and say in chat what was split and why.
- Generate only the named lesson, by its type (`AGENTS.md` rule 18 and “Scope and files”): `C` → the HTML page only; `B` → HTML, the iOS explorer, and the Metal (or Swift) exercise with its prepared calling code; `E` → HTML and its Swift files.
- Without the iOS lab or Xcode, say so before generating a `B` or `E` lesson.
- Before delivering, run `AGENTS.md` rules 20 (with the fresh review), 21 and 25.
- End with the progress line of `AGENTS.md` rule 22.

## 7. Delivery

- With write access to my checkout and the lab: edit the files in place.
- Without it (a cloud session or a chat): send every changed file as a download and give its repository path.
- No ZIP files unless I ask. Do not commit or push unless I ask.
- End with the list of changed files and their repository paths.

## 8. Context budget: a new session only when needed

Standing preference (2026-11-04), for every job:

- Keep working in this chat while the rest of the job fits in the remaining context.
- When you estimate that it will not fit (roughly 20% of the context left with work still open), do not wait to be told:
  1. stop at a clean point, and write the state into `CURRENT_STATE.md` and the handoff: what is done, what is open, the decisions I made;
  2. start a new session yourself with a fresh context and a complete brief: the job, the files, the open items, what done looks like;
  3. end your turn here with one line that names and links the new session.
- I approve starting that session in advance. Start it directly; never offer it as a choice or a “New session / Do it here” card, and do not ask me first.
- Your context figure is an estimate. The 20% leaves room for the write-up and the brief.
- Never start a new session for any other reason unless I ask.

## 9. Fixed facts

- Platform: Swift, SwiftUI, Metal (`.metal` + `ShaderLibrary`). Minimum iOS 17.
- Test device: iPhone 16 Pro. Preview canvas: 402 × 874 pt, the iPhone 16 Pro screen. Previews: light first, then dark, vertically scrollable.
- HTML lessons: one self-contained file each (inline CSS and JS, works from `file://`), desktop at 1920×1080, light theme only.
- The Chapter 7 frost constants are frozen (`CURRENT_STATE.md`, “Frozen frost stack”).
- Never use `ultraThinMaterial` or `glassEffect` as the glass implementation.
- The plan has 320 lessons. Project files never store which lessons are complete.
