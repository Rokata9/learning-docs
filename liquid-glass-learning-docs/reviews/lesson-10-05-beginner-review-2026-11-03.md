# Lesson 10.5 — A line through a wall meets every line on it at a square corner — fresh beginner review (2026-11-03)

Page: `course/chapters/chapter-10/lesson-10-05-a-line-through-a-wall.html` (type `C`). Two fresh agents reviewed it in turn (`AGENTS.md` rule 20, `tools/beginner-review/REVIEWER_PROMPT.md`). Neither wrote the page. The second read the page after the first list was fixed. The extraction was made with headless Chrome (Playwright is not installed on this Mac): the same text file and screenshots `extract_lesson.py` makes.

## Summary

| Review | Blocks | Slows | Minor | New ideas counted |
|---|---|---|---|---|
| 1 | 1 | 8 | 11 | 2: the spin (the page's idea) and “why the wall is flat” (Step 5) |
| 2 (final list, below) | 0 | 7 | 9 | 4: the spin around a line, three fixed sides fix a corner (the hinge), half a turn reaches every line, and the headline |

- **Fixed after review 1, all 20 items.** The blocks item: Step 3 now defines the spin as a turn that changes only y and height, instead of inferring it from a view that hides x. Others: Step 4's S-to-T tooltip names Lesson 10.3's three-part length; the hinge reason replaces “three sticks”; Step 5 says why half a turn reaches every line through Gx; Exercise 1 asks which line the teal line “lies along”, and “the gray line” means only the line from Gx to the tip of N; the title's scope is named under it; label overlaps fixed; the 60° label always shows; the polar-coordinates note is corrected. The two lines on why the wall is flat were removed (the second idea).
- **Fixed after review 2:** #1 (the sub line says why the x line works: it goes along x, the one direction in which all points of the wall agree), #2, #3 (Before you start says the argument is for the x line and this wall, whose directions y and height are at a square corner), #4 (Step 1 labels: “corner?”, Gx and the gray line no longer cover each other; the path-of-T label is hidden where this view draws the teal line on top of the x line), #5, #6, #7 (the turn tooltip says Lesson 10.3's turn went around a line along y, the spin around a line along x), #8, #10 (the chains say 0.953 is √0.9081 rounded), #11, #12, #13 (Step 5's two lines on Lesson 10.3, Step 8 were removed; Before you start keeps the pointer), #14, #15 (with N's x part 0, another point of the x line replaces S), #16.
- **Left, with the reason:**
  - #9 (draw the hinge) and the new-idea count. Review 2 counts the hinge rule, the spin around a line and the half-turn reach as ideas of their own. `AGENTS.md` rule 16 says: stop and propose the split to the learner. Drawing the hinge now would only make it more clearly a second idea, so it waits for the learner's choice.
  - Review 1's second idea, “why the wall is flat”, is off the page. Lesson 10.4, Step 5 still says “Lesson 10.5 shows why”; it changes with the learner's choice.
- **Checks after the last fix:** no JavaScript error; no horizontal overflow at 1920×1080; no visible backticks; anchors resolve; 27 interaction checks pass (stepper, slider and its button, 45 tooltips, Escape, K dragged on the map and in 3D, arrow keys, press without move, orbit drag, every exercise choice); the Decimal audit of every caption, label, tooltip and table at 13 positions of K finds 634 different calculation lines and 0 errors.

## Final list (review 2), the reviewer's text, items numbered as reported

NEW IDEAS
1. Step 3: the spin, a turn around a line in 3D, which changes only y and height, so it keeps x and lengths; seen along the x line it is a flat turn around Gx.
2. Step 4, tooltip “Why the corner cannot change”: a triangle whose three sides stay the same keeps its corner, by the hinge argument. No earlier lesson has it.
3. Step 5: each line through Gx points two opposite ways, so half a turn reaches every line on the wall through Gx.
4. Step 5: the headline. The x line meets every line on the wall through Gx at a square corner.
Fit: no; at least 2 (idea 2 is a separate geometry fact). Splits proposed: the hinge as its own lesson with a flat picture of two sticks; the spin (ideas 1 and 3) as its own lesson ending after Step 2's square corner; the headline joins them.

1. Title: “A line through a wall meets every line on it at a square corner” — false as a rule for a slanted line; the page never says what makes the x line special. slows. (fixed)
2. Intro: the gray line's direction and “N's x part is where …” (a number equated with a place). minor. (fixed)
3. Before you start, Lesson 10.3 Step 8: the argument works only because y and height are square to each other; 10.3's board walks are not. slows. (fixed)
4. Step 1 picture: “which corner?” covers “Gx”; “the gray line” sits on the pink N arrow; label overlaps at spins 170° and 45°. slows. (fixed)
5. Step 1 and the gray-line tooltip: which 0.302 is which; why the gray line's y and height parts are N's. minor. (fixed)
6. Step 2: “floor grid's lines” and “light grid's cells” against the label “light lines”. minor. (fixed: “pale lines”)
7. Step 3: why turning around the x line leaves x alone; the recalled turn is not tied to “around a line along y”. slows. (fixed)
8. Step 3: “plain turn” undefined. minor. (fixed)
9. Step 4: the hinge rule rests on an undrawn sentence. slows. (left: waits for the split decision)
10. Step 4 tooltips and Section 2: 0.953² = 0.908209, not 0.9081. minor. (fixed)
11. Step 5: the premise that a whole turn points the teal line every way. minor. (fixed)
12. Step 5: “The same holds …” is a vague pointer. minor. (fixed)
13. Step 5: the board of 10.3 is not identified with the wall; square to straight up not cited. slows. (fixed by removing the two lines)
14. Section 2 and Exercise 2: “the same triangle” is stronger than the hinge shows. minor. (fixed)
15. Section 2, N's x part 0: “The corner is still square” has no reason when there is no triangle. slows. (fixed)
16. Exercise 2's answer cites Step 2 for a triangle first drawn in Step 4. minor. (fixed)

MOST SERIOUS (reviewer): the idea count (the hinge rule); the title's scope; Step 1's labels; the 10.3 Step 8 claim; Step 3's reason and the x-part-0 note.

## Review 1 (fixed), in short

Ideas: the spin (fits) and “why the wall is flat” (Step 5, a second idea; proposed: move it out). Blocks: Step 3 inferred “the spin never changes x” from a view that hides x. Slows: the 10.3 Step 8 claim had no step; the S-to-T tooltip looked like Lesson 9.1 on the triangle being proved; “three sticks” gave no reason; Step 5 missed why every line through Gx is reached; Exercise 1's line a (0.743 long) could never be the teal line (0.953); “the gray line” named the wall's edge-on view too; the flatness lines. Minor: the title's scope, the intro's “meets the x line at Gx”, ruler labels hidden in Step 1, the invisible gray band, “comes straight through”, “ends swapped”, the 65° readout, the missing 60° label, Section 2's note on rows, K₂ label overlaps, the polar-coordinates note, the hero's tiny corner marks.

## Review 3 (2026-11-03, after the split): the spin page `lesson-10-05-spin-around-the-x-line.html` — open, not fixed yet

About 95 claims checked, 21 problems. New ideas counted: 3 (4 with Step 1): the spin keeps the teal line on the wall and its length (Step 3); T's path is a circle that passes the tip of N (Step 4); half a turn lays the teal line along every line through Gx (Step 5); borderline, a slanted line with x part 0 stays on the wall (Step 1). Proposed: stop after Step 3; Steps 4–5 go to the next lesson.

Slows: “the triangle” named but not drawn (coordinates note, arrow-unit ⓘ); the edge-on wall has three names, and 10.4 called it “a gray line”; Step 3's reason rests on Lesson 10.3's turn “around a line along y”, which 10.3 never said (state it directly: the spin is the wall view's flat turn, which moves only the two drawn directions); Step 4 needs the reverse (every wall point 0.953 from Gx is reached) and that the tip of N is up (the slider stops at 180°); Step 5 needs the wall to be flat; the page relies on the wall being flat but never shows why (10.4 points here); “line” means both a piece from Gx and a whole line through Gx; Section 2's table assumes T is at the tip of N and then concludes it; Exercise 1's line a is 0.743 long against the teal line's 0.953.

Minor: two purposes for Lesson 10.7; T counted from Gx but listed under origin S; hero label “the gray lin” cut off; why every point of the gray line is on the wall; the short half of the teal line; the button and 65° never introduced; the slider cannot show the lower half of the circle; “the wall as it is”; the “So” in Step 5 follows one example; “at both ends” in Section 2's intro; why T's y and height parts equal N's; Section 2 labels for the gray line, T and the arc.
