# Lesson 10.27 — fresh beginner review, 2026-11-09

Revision reviewed: the answer to the learner's question on Section 2 (“Relative to what do you say across and along? … how did you figure out it's −0.200 along??”): Section 2's labels “along …: from S to G”, “across …: from G to P / P′”, the line about P's chosen start, and the P case of card 4 in `course/reference-3d-geometry-qa.html` (`#q-along-p`). One fresh agent (not the writer), `tools/beginner-review/REVIEWER_PROMPT.md`; about 70 claims checked, 20 listed; no `blocks` item.

## New-idea count

- The reviewer counts **2**: (1) Steps 1–2, the along/across pair (the across ruler through each point's own foot, plus toward the tip of L, a choice); (2) Step 3, half a turn around the gray line keeps along and changes the sign of across.
- The first review (2026-11-08) counted 1 (the flip rule; the two rulers as its notation).
- Proposed split: stop after Step 2 (that lesson's Section 2 = today's draggable P with its two labelled numbers, card 4's P case); Step 3, the P′ row and labels, and Exercise 1 become the next lesson.
- **Declined by the learner (2026-11-09):** “Don't split the along/across concept should be clearly explained in this lesson, otherwise it's getting too granular now.” The pair is the wording the flip rule is stated in, so it stays (`AGENTS.md` rule 16). Before that decision: **not done in this job.** A questions job generates no lesson (`NEW_CHAT_PROMPT.md` §5), and another session (“Green known values and SL-style names in Ch. 10”) was editing the Chapter 10 files at the same time; a split renumbers every later lesson. Proposed to the learner as its own session.

## Fixed

| # | Severity | Item | Fix |
|---|---|---|---|
| 1 | slows | “two rulers” vs one across ruler per foot | lead: “along, on the gray line's ruler, and across, on a ruler at 90° to it through the point's foot”; card 4 X case: “the gray line's ruler and the across ruler through M” |
| 2 | minor | “the points of the sheet turn half a turn” | “the sheet turns half a turn” |
| 5 | slows | “foot” never said on the page | Uses, 10.25 line: “its foot G (where the line from P meets the line at 90°)” |
| 9 | slows | “chosen” by whom; Section 2's P is not Step 3's P | “The page starts P at a place it chose, not at Step 3's P; any point works the same.” |
| 10 | slows | teal names the flip and the thin segment XL | “thin teal: XL” in the legends of Step 3, Section 2 (3D in the legend line, flat on its own line under the header) and the exercise (question and answer) |
| 11 | minor | “across 0.350: from G to P” beside the arc | `partLabels` tries the side away from S at every height before the other side; the label now sits beside GP |
| 14 | minor | “Step 3's ⓘ” (two ⓘ); “R′ is on line RG” twice | “Step 3's first ⓘ”; the second cut |
| 15 | minor | Section 4 repeats “Questions about this page” | “Answered, with pictures, in the reference sheet …” |
| 16 | minor | card 4 P: “Both are read from the gray line” blurs “relative to what” | “Along is counted from S, on the gray line; across from the gray line, at P's foot G.” |
| 17 | minor | card 4 P: a reading before the placing | the placing bullet moved right after “chosen” |
| 18 | minor | card 4 P: tick “−0.2” beside “along −0.200” | the tick at G prints −0.200 |
| 19 | minor | card 4 X: “two side lengths” of what | “two side lengths of △SMX” |
| 4 | minor | Step 1's flat header says “across” before Step 2 defines it | fixed later the same day, on the learner's yes: Step 1's header reads “↑: at 90° to it, on the sheet, toward the tip of L” (`flipFrame` option `upText`, this page only) |
| 6 | minor | is “plus on M's side” a choice or a fact? | fixed the same way: an ⓘ on “plus on M's side” recalls why (10.25's dark arrow; 10.26, Step 5, reaches M 0.860 along it; a ruler counts plus the way its arrow points, 10.19). Not a choice |

## Left open, and why

- **3** “Lessons 10.28–10.30 use this rule.” (minor): naming the rule there repeats the title's conclusion (Rule 0).
- **7** “(how numbers are written)” link inside Step 2 (minor): rule 19 asks lessons to link the forms page.
- **8** “Line PG is P's across ruler” for P′ (minor): Step 3's first ⓘ already says G is P′'s foot.
- **12** Section 2 flat, P at along 0.600: the tip of L's dot covers “across: plus side ↑” (minor): the dot is a clickable DOM point over the canvas; it was so before this revision.
- **13** the exercise legend does not name the indigo sheet (minor): the 620-px canvas has no room on that line; it was so before this revision.
- **20** about 565 words before the exercises (minor): the split would halve it.
- The idea count (2 vs 1): see above.

## Checks

- No script errors on the lesson or the reference sheet (headless Chrome, `file://`).
- Label sweep: 270 positions of P (along −0.3 … 1.2, across −0.45 … 0.45), Step 3 at 0–180° every 30°, the hero and the exercises: 0 overlapping labels, 0 cut, 0 under the corner box.
- Only one fresh review ran; the second round was not started because the open question is the split, which a split session reviews anew (`AGENTS.md` rule 20: split instead of reshaping the page between rounds).
