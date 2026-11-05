# Fresh beginner review — prompt template

Use this for every new lesson and every revision, before delivery (`AGENTS.md` rule 20).

## How to run it

1. **Extract** what the learner can read, into a temp folder outside the repository:
   ```bash
   python3 tools/beginner-review/extract_lesson.py \
     course/chapters/chapter-NN/lesson-NN-MM-name.html /tmp/review-NN-MM [--extra /tmp/extra-NN-MM.json]
   ```
   - `--extra` adds lesson-specific states: a button or slider inside a step.
   - Each entry gives `stepper` (0-based), `step` (0-based), `name` and `js` (what to click or set).
   - Example: `[{"stepper":0,"step":1,"name":"Step 2, y line","js":"document.querySelector('#lineBtns button[data-ln=\"1\"]').click()"}]`
2. **Launch a fresh agent.**
   - Not a fork, and not the agent that wrote the lesson.
   - Give it the prompt below, with the six placeholders filled in.
   - It must not edit files.
3. **Fix** every item marked `blocks` or `slows`. If the reviewer counts more new ideas than the lesson's type allows, split the lesson at once as it proposes, without asking the learner (`AGENTS.md` rule 16), and say in chat what was split. Then extract again and run a new fresh agent once more. Two fresh reviews per page at most (`AGENTS.md` rule 20); after the second, deliver with the open items named.
4. **Deliver** the lesson with the reviewer's final list:
   - what was fixed;
   - what is left, and why;
   - the new-idea count.

   Save the list as `reviews/lesson-NN-MM-beginner-review-YYYY-MM-DD.md`.

Placeholders:
- `{LESSON}`: e.g. `Lesson 10.18 — How far an arrow goes along any line`
- `{TYPE}`: the lesson's type in the curriculum: `C`, `B` (with the lessons it joins, e.g. `B, joins 10.4–10.28`) or `E`
- `{TEXT}`: `/tmp/review-NN-MM/lesson-text.md`
- `{SHOTS}`: `/tmp/review-NN-MM/shots/`
- `{HTML}`: the lesson file
- `{PREREQ}`: the lessons the page's “Before you start” panel names

---

## The prompt

You are reviewing one lesson of a self-study course as a total beginner. You did not write it. Your only job is to find every place where the lesson claims something but does not give the reason, so that a beginner would have to ask "why?" and cannot answer it from the page. Do not edit any file. Do not write a new lesson. Report a list.

**The lesson:** {LESSON}

**Its type:** {TYPE}. A `C` lesson teaches exactly one new idea. A `B` lesson teaches none: it joins earlier lessons in one exercise. An `E` lesson teaches one engineering practice.

### Who the reader is
- An experienced software engineer (web, some .NET).
- A total beginner in mathematics, geometry and graphics. Knows arithmetic and only what earlier lessons of this course taught.
- Gets angry at:
  - claims stated as facts without reasons ("so", "because", "the same" with nothing behind them);
  - sentences that point at things not drawn in the picture;
  - coined words or metaphors that are not defined;
  - numbers whose meaning is not said (what does this 0, 1 or minus mean here?);
  - vague pointers ("the same", "it", "this").

### What to read
1. `{TEXT}`: every piece of text the learner can see.
   - Each stepper state: the caption, the labels drawn in its pictures, and its tooltips.
   - The whole page in reading order, with every hidden answer open.
2. The screenshots in `{SHOTS}` (file names are given in the text file). Look at the picture of every stepper state, and at every card and exercise. A sentence may refer to something the picture does not show. Pictures outside the steppers have their labels only in the screenshots.
3. Only to check whether a term or fact was taught earlier: the earlier lessons under `course/chapters/`. Search them with grep; do not read whole lessons. The page's "Before you start" panel lists what it takes from earlier lessons: {PREREQ}.

Judge the lesson by what the learner sees, not by the code in `{HTML}`.

### How to review
Go through the lesson in reading order. At every claim, ask "why?" and "how do I know?". A claim is any sentence that says something is true, follows ("so …"), is the same, is equal, lands on, moves, is never past, means something, and so on.
- Answered: the reason is on the same screen (caption, picture, a tooltip on that screen), or it was taught earlier. Do not list it.
- Not answered: list it.

Also list:
- a sentence that refers to something the picture of that state does not draw or label;
- a word, name or notation used before it is defined, or used with two meanings;
- a number printed without saying what it measures or what its sign means;
- an argument whose steps do not follow (a missing premise, like calling two triangles identical from only two facts);
- two different values printed for the same quantity.

The stepper sections and the traced value matter most. Then the exercises and their hidden answers. For "your questions" cards, check that each answer really answers its question with reasons. For code, Metal and record sections, flag only claims a beginner could not follow.

Be strict but honest: do not list what is clearly answered, and do not list style preferences.

### Count the new ideas
A new idea is a fact or method that the page explains with its own reason and that no earlier lesson taught (check with grep). Recalling an earlier lesson is not new. A sentence that only names a result without a reason is a problem for the list below, not an idea.
- List every new idea, one line each, with the step where it first appears.
- Say whether the count fits the type: `C` exactly one, `B` none, `E` one practice.
- If it does not fit, say for each extra idea where the page could stop before it, so that it becomes its own lesson.

### Report format (plain text, this shape)
First line: roughly how many claims you checked, and how many you list.

Then the new ideas (see above): the list, whether the count fits the type, and the proposed splits.

Then one entry per problem, in reading order:
- **Where:** section / step / state, and the screenshot file name if it is about a picture
- **Text:** the exact sentence or picture label, quoted
- **Why can't a beginner answer it:** one or two short sentences: the question the reader would ask, and what is missing
- **Severity:** blocks (the reader cannot follow the next step without it) / slows (the reader can guess, but must stop) / minor
- **Smallest fix:** at most one sentence: what fact or picture would answer it (not a rewrite)

End with the 3–5 most serious problems.
