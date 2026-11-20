# Liquid Glass course — new chat starter

Start a new chat with one message:

```text
Read liquid-glass-learning-docs/NEW_CHAT_PROMPT.md from Rokata9/learning-docs (branch master) and follow it.
Job: Generate the next lesson
```

The job is one of:

- **Generate lesson N.M**, or “generate the next lesson”;
- **Questions about lesson N.M**, followed by the questions.

If the job is named, start it in your first reply. If it is not, say you are ready and wait.

## 1. Where the files are

- Docs: the folder `liquid-glass-learning-docs` in the GitHub repository `Rokata9/learning-docs`, branch `master`. On the learner's Mac it is a local checkout.
- iOS lab: `/Users/rosen/Code/LiquidGlassLab-iOS`, on the Mac only.
- Read files with your tools. Never rebuild a file from memory. If you cannot open a file, name it: for questions, answer from what you could read; for generate, stop and ask.

## 2. What to read

Always, all of it: `AGENTS.md` (the rules) and `CURRENT_STATE.md` (the state).

Generate lesson N.M, also:

- `curriculum/safari_spring_menu_plan.md`: sections 4.0 and 4.6, the entry of N.M and its neighbors (its type `C`, `B` or `E`, its text, its layer), section 1 for that layer, section 5 for anything about N.M;
- the HTML of the newest part-two lesson (the template) and of the lesson before N.M;
- for `B` and `E` only: the chapter screen and the explorer N.M sits next to, in the lab.

“The next lesson” is the first lesson of the plan's section 4 whose HTML file does not exist under `course/part-two/`. List the folder; do not trust a copied list.

Questions about lesson N.M, also: the lesson's HTML, the section the question is about, and the script that draws its picture when the question is about a picture.

## 3. Your first reply

1. List each file you opened, with its line count, and each file you could not open.
2. If two files contradict each other, say so. Do not pick one silently.
3. Then do the job.

## 4. Generate job

- Generate only the named lesson, by its type (`AGENTS.md` section 6): `C` → the HTML page; `B` → the HTML, the iOS explorer and the exercise with its prepared code; `E` → the HTML and its Swift files. Without the lab or Xcode, say so before a `B` or `E` lesson.
- Write the hero's idea first (`AGENTS.md` 2.1). Then build. Then run `AGENTS.md` section 9 and the checklist.
- Record the lesson in `CURRENT_STATE.md`: a short section like the newest lesson's, and a new “Next” note. Add the glossary and number-forms entries it needs.

## 5. Questions job

1. Answer in the chat first (`AGENTS.md` section 10).
2. If the question shows a defect in the lesson (unclear, wrong, a missing picture, inconsistent names), fix it in the same chat, then run `AGENTS.md` section 9. Update the lesson's section in `CURRENT_STATE.md` if its steps or numbers changed.
3. If the lesson is right, only answer. Do not change files.
4. Do not generate another lesson.

## 6. Delivery

- With the local checkout: edit the files in place. Do not commit or push unless asked.
- From a cloud session: run `git fetch`, make one `.patch` on the latest pushed commit of `master` (name that commit) with only this answer's changes, and give the command `git apply <file>.patch` from the repository root. Say if an earlier patch must be applied first.
- No ZIP files unless asked.
- End with the list of changed files; after a generated lesson, `Course progress: X of 323 lessons completed.` (X is the count the learner gave; if none, `Course progress: unknown — tell me your current count.`); then a labelled estimate of the context left.

## 7. Context budget

- Keep working while the rest of the job fits.
- At roughly 20% of the context left with work still open: write the state into `CURRENT_STATE.md`, start a new session yourself with a complete brief (the job, the files, the open items, what done looks like), and end your turn with one line that links it. This is approved in advance: do not ask.
- Never start a new session for any other reason unless asked.
