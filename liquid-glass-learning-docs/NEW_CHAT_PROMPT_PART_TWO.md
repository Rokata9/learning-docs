# Liquid Glass on iOS course, part two — new chat starter

Part two is the rest of the course after Lesson 10.45. Its only goal: the menu that springs out of Safari's “⋯” button on iOS 26 as Liquid Glass. Its plan is `curriculum/safari_spring_menu_plan.md`; its lessons live in `course/part-two/chapter-NN/`.

Start a new chat with one message:

```text
Read liquid-glass-learning-docs/NEW_CHAT_PROMPT_PART_TWO.md from Rokata9/learning-docs (branch master) and follow it.
Job: Generate lesson 10.47
```

The job is one of:

- **Generate lesson N.M**, or “generate the next lesson”;
- **Questions about lesson N.M**, followed by the questions.

If the job is named, start it in your first reply. If it is not, say you are ready and wait.

## 1. What carries over from `NEW_CHAT_PROMPT.md`

Read `NEW_CHAT_PROMPT.md` too, and follow it, except where this file says otherwise. These parts apply unchanged:

- §1 where the files are, §2 your first reply (list every file opened with its line count, every file not opened, every contradiction between files);
- §4 who I am, and the way to explain to me;
- §5 the questions job (the lesson to read is under `course/part-two/`);
- §7 delivery, §8 context budget, §9 fixed facts.

## 2. What changes in part two

- **The plan is the curriculum.** Take the lesson's entry from `curriculum/safari_spring_menu_plan.md`: its type, its text, the layer it serves. Do not use `curriculum/liquid_glass_ios_curriculum.md` for lessons after 10.45: it still describes the old plan, and its 10.46 is a different lesson.
- **“The next lesson”** is the first lesson of the plan's section 4 (10.46, 10.47, … in plan order) whose HTML file does not exist under `course/part-two/`. List the folder. Do not trust a copied list.
- **Where the files go:** `course/part-two/chapter-NN/lesson-NN-MM-<short-name>.html`. Links to the course home, the chapter hub, the glossary and “How numbers are written” go up from there (copy the header links of the newest part-two lesson). Do not edit the old lessons, the curriculum, the Chapter 10 hub or the course home unless I say so.
- **The plan's rules for its lessons** (section 4.0 and 4.6): a lesson stays only if, without it, I could not explain or build one layer of the menu; it teaches on the menu's real glass shape, in 3D wherever a surface is involved; it states each fact it needs where it uses it and never justifies a fact by pointing to an old lesson; a formula is run on two cases; teaching numbers are not 0 or 1; every fitted number is called chosen; a stepper only when several facts lead to one result; exercises only when two or three lessons give something to build.
- **Units:** pt on the 402 × 874 pt screen, from its top-left corner, x to the right, y toward the bottom. The glass numbers are in `CURRENT_STATE.md`, “Part two”.
- **The newest part-two lesson is the template.** Read its page and its section in `CURRENT_STATE.md` and its entry in the handoff: its code helpers (`Trace`, `measure`, `sdChain`, `zoomScene`, `menuMap`, `R12`), its page shape and its theme block are reused, not rewritten.
- **Themes (learner, 2026-11-19):** part-two pages have a light and a dark theme. The default is the system's; the header has a System | Light | Dark switch. Dark text is off-white, never pure white, on a dark blue-gray, never pure black. This overrides “light theme only” in `AGENTS.md`, `USER_PREFERENCES.md` and `NEW_CHAT_PROMPT.md` §9, for part two only. Copy the theme block of the newest part-two lesson: its CSS variables, its head script, the dark-color table for the pictures. Run the browser check in both themes.
- **Types:** `C` → an HTML page only. `B` and `E` need the iOS lab and Xcode on my Mac: without them, say so before you start.

## 3. Generate job: what to read

Always: `USER_PREFERENCES.md` (all of it except the three sections that belong to other projects, as in `NEW_CHAT_PROMPT.md` §3), `AGENTS.md` (all of it), `CURRENT_STATE.md` (the header, “Frozen frost stack”, “Pending iOS changes”, “Part two”, and the section of the newest part-two lesson), and the newest 10 entries of `FEEDBACK_LOG.md`.

Then:

- the whole of `curriculum/safari_spring_menu_plan.md` sections 4.0, 4.6 and the entry of lesson N.M and its neighbors; section 1 (the effect) for the layer N.M serves; section 5 (open questions) for anything about N.M;
- the HTML of the newest part-two lesson, and the lesson before N.M in plan order (for 10.47: Lesson 10.46 and Lesson 10.45);
- `curriculum/liquid_glass_ios_handoff.md`: the part-two block and the “Next in part two” note;
- iOS, for `B` and `E` lessons only: the chapter screen and the explorer N.M sits next to.

Then follow `NEW_CHAT_PROMPT.md` §6 and `AGENTS.md` (rules 20, 21, 22, 24, 25). Generate only the named lesson.

## 4. Before the patch

- Run `git fetch`. Make the patch on the latest pushed commit of `master` and name that commit. If an earlier part-two patch of mine is not pushed yet, say so, and say which patch must be applied first.
- Record the lesson in `CURRENT_STATE.md` (a section like the newest lesson's) and in the handoff (its entry and the next lesson's note). Add the glossary or number-forms entries it needs. No completion counts anywhere.
- End with the list of changed files, then `Course progress: X of 323 lessons completed.` (X is the count I give in the job; if I give none, ask) and a labelled context estimate.
