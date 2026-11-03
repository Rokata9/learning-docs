# Lesson 10.4 — The rest of the walk stays on a wall — fresh beginner review (2026-11-03)

Page: `course/chapters/chapter-10/lesson-10-04-walk-stays-on-a-wall.html` (type `C`). Three fresh agents reviewed it in turn (`AGENTS.md` rule 20, `tools/beginner-review/REVIEWER_PROMPT.md`). None of them wrote the page. Each later one read the page after the earlier list was fixed. The draft this lesson was split from has its own review: `reviews/lesson-10-04-draft-beginner-review-2026-11-02.md`.

## Summary

| Review | Blocks | Slows | Minor | New ideas counted |
|---|---|---|---|---|
| 1 | 0 | 6 | 13 | 1, plus “why the wall is flat” as borderline |
| 2 | 0 | 5 | 9 | 2 (“why flat” counted), plus the gray posts as borderline |
| 3 (final list, below) | 0 | 5 | 11 | 1 (fits `C`), the gray posts as borderline |

- **After review 2:** the proof that the wall is flat (posts on a level line) left the page. Step 5 now says in one line that the wall is flat and stands straight up, and that Lesson 10.5 shows why. The handoff gives that proof to Lesson 10.5.
- **Fixed after review 3, all 16 items:**
  - #1: the lead and Step 1 name the x line (Step 2) and say what Lesson 10.7's meeting place gives (how far N goes that way).
  - #2: Step 1 says the violet curves run along two floor lines, where x = 0.62 or y = 0.66.
  - #3 and #16: the tooltips on S and S₂ give their own height chains (Lesson 10.1), so 0.0866 is computed, not quoted.
  - #4: the arrow-unit ⓘ says this is Lesson 10.3's “UV, drawn shrunk by the arrow ruler”, and that N's 0.302 is not 0.302 UV.
  - #5: the “leg” ⓘ gives the reason: x, y and height are at square corners to each other.
  - #6: the question says “how far to the right of S (how much x has grown)”.
  - #7 and #8: the x line is “the straight line through S along which only x changes”, above “the thin violet floor line y = 0.66”. Its height never changes, so it is level.
  - #9: Step 3 says the y leg slants on the screen only because the floor is drawn turned.
  - #10: the front view's “only a point at Gx” label sits next to Gx.
  - #11: Step 5 says that reversing a move puts a minus on each part, and −0 = 0.
  - #13: “(press Back)” points to the gray lines of Steps 3 and 4.
  - #14: Step 5 says the x leg is in front of the wall, with only its end, Gx, on it. The picture labels “Gx: on the wall”.
  - #15: the wall ⓘ says “above the floor points with x = 0.6653, such as (0.6653, 0.66)”.
- **Left, with the reason:**
  - #12, the one line “The wall is flat and stands straight up; Lesson 10.5 shows why (this lesson does not need it)”. `AGENTS.md` rule 17 allows a side fact as one sentence with a pointer to the lesson that needs it. Review 2 counted the proof itself as a second idea.
  - The gray posts of Step 2 stay. They show the learner's own question (“level” means parallel to the floor) on the real glass. They are one picture with one caption line. Review 3 lists them only as borderline and says the page fits `C` when they stay a check. “Before you start” now lists them under Lesson 10.1.
- **After review 3:** caption lines were shortened for `AGENTS.md` rule 1, with no claim changed. Step 1 keeps the reason for the question in one line, and the lead names Lesson 10.7's use. So item #6 now reads “(in x)”, and item #13's “(press Back)” moved into the line “Steps 3 and 4 (press Back) showed this wall edge-on, as a gray line”.
- **Checks after the last fix:**
  - 54 browser interaction checks pass, with no JavaScript error and no horizontal overflow at 1920×1080.
  - The Decimal audit covers 1,267 calculation lines and finds 0 problems.

## Final list (review 3), the reviewer's text unchanged

I checked about 95 claims and list 16 problems. I recomputed every printed number (all the N chains, the post heights, the ruler readings, the wall at 0.6653 and S's height 0.0866), and they all match.

NEW IDEAS
1. The one idea (Steps 3–5): the y leg and the height leg have x part 0. A reversed move also has x part 0. So everything after Gx stays on the wall of points 0.302 to the right of S.
- These are names or definitions, not ideas: leg (Step 1), arrow unit (a name for Lesson 10.3's drawing unit, Step 1 ⓘ), the x line and its ruler and Gx (Step 2), the wall (Step 5).
- Borderline extra (Step 2, the gray posts): "the x line is not the glass." The page proves it with two new Lesson 10.1 height chains and a UV-to-ruler conversion (÷ 0.15). This is a side fact with its own proof. It already follows from earlier lessons: slopeX at K is −0.349, not 0 (Lessons 10.2/10.3), so the glass is not level there. It also makes "Before you start" wrong: that panel says Lesson 10.1's height is "used only inside ⓘ", but 0.0957 and 0.0418 are printed in the Step 2 caption and in the picture.
- Not taught here: "the wall is flat and stands straight up" is deferred to Lesson 10.5.

Fit: one idea, so it fits type C if the posts stay a check. If they count as a second idea, Step 2 can stop at "The x line is level: parallel to the floor, at S's height, 0.0866 in UV." The posts and their chains then go, or are replaced by a one-line recall of slopeX = −0.349.

PROBLEMS, IN READING ORDER

1.
- Where: Intro paragraph, repeated in Step 1's "Why ask?" (001_stepper1_step1.png).
- Text: "a line from the tip of N, at a square corner to the x line, meets it where the x leg ends; Lesson 10.7 draws such a line toward any direction, where the meeting place gives a new number."
- Why can't a beginner answer it: "The x line" is first defined in Step 2, and Step 1's picture does not draw it. "Such a line toward any direction" and "a new number" do not say which line or which number, so the reason for the whole lesson stays vague.
- Severity: slows.
- Smallest fix: In Step 1, say "the x line: the level line through S along x (Step 2)", and name the number 10.7 gets (how far N reaches along that direction).

2.
- Where: Step 1 picture labels (001_stepper1_step1.png).
- Text: "the glass along the floor line x = 0.62", "floor line y = 0.66"
- Why can't a beginner answer it: "Floor line" is used here, but its meaning ("keeps x at 0.62") only comes in Step 2. No earlier lesson uses the term.
- Severity: minor.
- Smallest fix: Add one clause to Step 1: a floor line is a line on the floor where x (or y) stays fixed.

3.
- Where: Step 1, the tooltip on S.
- Text: "Its height comes from Lesson 10.1's formula (Lesson 10.3, Section 8)."
- Why can't a beginner answer it: Why 0.0866? The page chains six other heights but not S's, and S's height is the height of the x line. Lesson 10.3 only states "The height of S is 0.0866", with no chain.
- Severity: minor.
- Smallest fix: Add S's chain: p = (0.12, 0.16), d = 0.2, … h = √0.0075 = 0.0866.

4.
- Where: Step 1, the "in arrow units" tooltip.
- Text: "Lesson 10.3 counted an arrow's parts in the unit of its drawing … Here that unit has a name, the arrow unit" / "places in the zoomed drawing, not sizes on the glass."
- Why can't a beginner answer it: Lesson 10.3's coordinate table said arrow parts on the glass are "UV, drawn shrunk by the arrow ruler". Here they are "not sizes on the glass". So is N's 0.302 in UV or not? The reader gets two units for one number.
- Severity: slows.
- Smallest fix: One sentence: Lesson 10.3's "UV, drawn shrunk" for arrows is what this lesson calls the arrow unit, and N's parts are not UV sizes.

5.
- Where: Step 1, the "leg" tooltip.
- Text: "Neighboring pieces of this walk also meet at a square corner, so the same word fits."
- Why can't a beginner answer it: Why a square corner? The missing premise is that x, y and height are at square corners to each other. The page does not state it, and Lesson 10.3 only used it without saying it.
- Severity: minor.
- Smallest fix: Add "because x, y and height are at square corners to each other (Lesson 10.3's flat and standing triangles)."

6.
- Where: Step 1 caption.
- Text: "The question: after each leg, how far to the right of S is the end of the walk so far?"
- Why can't a beginner answer it: After the y leg, the end of the walk is off the x line. The page never says that "to the right of S" counts only how much x has changed, and that y and height do not count.
- Severity: minor.
- Smallest fix: Add one line: "How far to the right of S: how much x has grown since S; moves in y or height do not count."

7.
- Where: Step 2 caption (002_stepper1_step2.png).
- Text: "The x line is level: parallel to the floor, at S's height"
- Why can't a beginner answer it: The x line was defined only as "goes to the right and to the left". In Lesson 10.3 the x walk went "1 to the right" and also 0.45 down, so "to the right" did not mean level there. Why is this line level?
- Severity: minor.
- Smallest fix: Define it as "the line through S along which only x changes (y and height stay S's)."

8.
- Where: Step 2 caption.
- Text: "It is straight above the floor line y = 0.66 (violet)"
- Why can't a beginner answer it: Step 1 said "The violet curves: the glass", so "violet" now points at two different things. On screen the floor line is a thin, light line on the floor.
- Severity: minor.
- Smallest fix: Say "the thin violet line on the floor".

9.
- Where: Step 3, the 3D picture (003_stepper1_step3.png).
- Text: "x part 0: the y leg does not go to the right at all."
- Why can't a beginner answer it: In the 3D picture the orange y leg slants right on the screen. It ends under the ruler's 0.5–0.7 marks, so it looks as if it went right. The caption does not say the slant comes only from the turned view. Only the flat view below resolves it, and the caption does not connect the two.
- Severity: slows.
- Smallest fix: Add: "In the 3D picture it slants right on your screen only because the floor is drawn turned; the view from above shows it without the slant."

10.
- Where: Step 4, the front view (004_stepper1_step4.png).
- Text: Label "the y leg: only a point at Gx in this view"
- Why can't a beginner answer it: The label sits near ruler 1–2.3, far from Gx at 0.302, with no leader line. It seems to point at the wrong place.
- Severity: minor.
- Smallest fix: Put the label next to Gx, or add a leader line.

11.
- Where: Step 5 caption.
- Text: "Toward the top is toward the bottom reversed, and down is up reversed: x part 0 too."
- Why can't a beginner answer it: Why does reversing keep the x part 0? The page never says that reversing an arrow puts a minus on every part, and that −0 = 0. "Reversed" is not used in Lesson 10.3.
- Severity: slows.
- Smallest fix: Add: "Reversing puts a minus on each part, and −0 is still 0."

12.
- Where: Step 5 caption.
- Text: "The wall is flat and stands straight up; Lesson 10.5 shows why (this lesson does not need it)."
- Why can't a beginner answer it: This is a claim with no reason. Yet the picture draws the wall flat and upright, and the next sentence ("the gray lines of Steps 3 and 4 were this wall") leans on it.
- Severity: minor.
- Smallest fix: Drop the sentence, or give the one-line reason: seen from above and from the front, it is the single line at ruler 0.302.

13.
- Where: Step 5 caption (005_stepper1_step5.png).
- Text: "The gray lines of Steps 3 and 4 were this wall: each view hid one of its two directions."
- Why can't a beginner answer it: Those gray lines are not on this screen. Step 5's flat drawing is the wall view.
- Severity: minor.
- Smallest fix: Add "(press Back to compare)", or show the two small views again.

14.
- Where: Step 5, the 3D picture (005_stepper1_step5.png); same in Section 2 (007_figure2.png).
- Text: "So after the x leg, the rest of the walk stays on the wall."
- Why can't a beginner answer it: On screen, the x leg from S to Gx is drawn over the gray wall, and S sits at the wall's lower-left corner. So the picture seems to put the x leg on the wall too. Only the far-right label "the x line goes on through the wall" hints otherwise.
- Severity: slows.
- Smallest fix: Start this state turned so the wall is seen edge-on, as in the exercise answers. Or mark where the x line pierces the wall at Gx and dash the part behind it.

15.
- Where: Step 5, the wall tooltip.
- Text: "so the wall is drawn above the floor line x = 0.6653"
- Why can't a beginner answer it: No floor line x = 0.6653 is drawn. The floor shows only x = 0.62 and y = 0.66.
- Severity: minor.
- Smallest fix: Draw a short floor mark at x = 0.6653, or say "above the floor point (0.6653, 0.66)".

16.
- Where: Exercise 1, the tooltip on S₂ (008_exercise1.png).
- Text: "K₂ is as far from C as K, so the glass above it is as high (Lesson 10.1)."
- Why can't a beginner answer it: Why is it as far? The distance is not shown. The chain only covers K₂'s neighbors.
- Severity: minor.
- Smallest fix: Add: "p = (0.12, −0.16): the same squares as K's (0.12, 0.16), so d = 0.2."

MOST SERIOUS
1. #9, Step 3: the 3D picture shows the y leg sliding right on the screen while the caption says it goes 0 to the right. The picture contradicts the one idea when it first appears.
2. #14, Step 5 and Section 2: the x leg is drawn over the gray wall, so the key picture does not show "after the x leg".
3. #11, Step 5: "reversed: x part 0 too" has no reason (the minus on every part, and −0 = 0).
4. #4, Step 1 arrow units: this contradicts Lesson 10.3's "UV, drawn shrunk" for arrow parts, so the unit of N's 0.302 is unclear.
5. #1, Intro and Step 1: "the x line" is used before it is defined and not drawn, and the reason for the lesson ("a new number") is vague.

## Earlier lists

### Review 2 (fixed; its count of two ideas led to moving the flatness proof to Lesson 10.5)

I checked about 140 claims, labels and tooltips. I list 14 problems: 5 slow the reader down, 9 are minor, and none blocks.

NEW IDEAS
I searched Lessons 9.1 and 10.1–10.3 with grep. None of them has "arrow unit", "post", "flat sheet" or the x line's ruler. Lesson 10.3 did have S's height 0.0866, "level", the view from above, the front view and the arrow ruler.

1. Steps 3–4: a leg that changes only y or only height has x part 0, so it adds 0 to how far right the walk is. So the tip of N ends up N's x part (0.302) to the right of S. This is the page's declared idea.
2. Step 5, "Why flat?": all points the same distance to the right of S form one flat sheet that stands straight up. The reason given is posts standing on a level line.
3. Borderline, Step 2, "Why the gray posts?": the level x line through S is not the glass, shown with two computed glass heights. It is a side fact with its own reason, and nothing later uses it.
(New words, not ideas: leg, x line, Gx, wall, arrow units.)

Fit: a C lesson needs exactly one idea. This page has two, plus one borderline side fact. It does not fit.

Proposed splits:
- For idea 2: stop Step 5 after "so you stay 0.302 to the right" and "The y leg, the height leg and the tip of N are all on the wall." Keep "wall" only as the name for "all points 0.302 to the right of S." Move "Why flat? …" and "The gray lines of Steps 3 and 4 were this wall …" to their own lesson, or to the first lesson that needs the wall to be flat (10.5?). The intro's "one flat wall" would then lose "flat".
- For the borderline item 3: stop Step 2 before "Why the gray posts?". The x line only needs to be level and to pass through S. Drop the posts or move them into a tooltip.

PROBLEMS (in reading order)

1.
- Where: Intro paragraph. The same text is in Step 1, "Why ask?" (001_stepper1_step1.png).
- Text: "Lessons 10.5 and 10.6 use this wall to find N's x part again, with one line drawn from the tip of N; Lesson 10.7 draws that kind of line toward any direction, where the number is not known yet."
- Why can't a beginner answer it: Which line, going which way, and landing where? Why "find 0.302 again" when it is printed? Which "number"? Nothing on the page draws or names it.
- Severity: slows
- Smallest fix: Name the line (start, direction, where it lands) and the number it gives, or draw it faded in Step 5.

2.
- Where: The coordinate systems table (UV row), Step 3's caption (003_stepper1_step3.png), and Step 5's flat view (005_stepper1_step5.png).
- Text: The UV row's "the hero's left picture … (0, 0) = the picture's top-left corner … 1 = the picture's width". Step 3's "showing to the right and toward the bottom of the picture" next to "the y leg is drawn from top to bottom of the flat picture". Step 5's label "toward the bottom of the picture →".
- Why can't a beginner answer it: "Picture" means the screen (UV) in one phrase and the lesson's drawing in the next, sometimes in the same line. In Step 5's wall view, "toward the bottom of the picture" points to the right of the drawing. The reader has to stop and work out which picture is meant.
- Severity: slows
- Smallest fix: Use another word for the lesson's drawings ("drawing" or "view"), and keep "picture" only for the screen.

3.
- Where: The coordinate systems table, row "UV, zoomed in at K".
- Text: "the 3D pictures of Sections 1 and 2 and of the exercises"
- Why can't a beginner answer it: Exercise 1's picture is zoomed in at K₂ (its corner label says so), and its floor is y 0.28–0.40. The table does not match the picture.
- Severity: minor
- Smallest fix: Write "zoomed in at K (Exercise 1: at K₂)".

4.
- Where: Step 1, the ⓘ next to "in arrow units" (001).
- Text: "An arrow part is not a size on the glass. N is 1 arrow unit long and is drawn 0.15 UV long (the arrow ruler, as in Lesson 10.3)."
- Why can't a beginner answer it: Lesson 10.3's table said an arrow's parts are in "the unit of that picture; on the glass UV, drawn shrunk by the arrow ruler". So is N = (0.302, …) in UV or in a new unit? "Arrow unit" is a new name, and the page does not say how it relates to Lesson 10.3's reading.
- Severity: slows
- Smallest fix: Add one line saying how "arrow units" relate to Lesson 10.3, which read arrow parts in UV.

5.
- Where: Step 1, the ⓘ "how N is calculated" (the same text is in Exercise 1's ⓘ).
- Text: "The numbers keep up to 5 decimals; N is then rounded to 3."
- Why can't a beginner answer it: The same chain prints leg² = 0.0019501056 and h² = 0.0080498944, which have 10 decimals. Which rule holds?
- Severity: minor
- Smallest fix: Say that square roots and divisions are rounded to 5 decimals, and products are kept exact.

6.
- Where: Step 1, the S tooltip, and Section 2's "S's height: 0.0866 in UV". Also Exercise 1, the S₂ tooltip.
- Text: "S: the glass above K, (0.62, 0.66, 0.0866) in UV." and "S₂: the glass above K₂, (0.62, 0.34, 0.0866) in UV."
- Why can't a beginner answer it: The page gives height chains for A, B, D, E and both posts, but not for S, the traced point, and it does not name the lesson where 0.0866 came from. Why is S₂ exactly as high as S? That is not said either.
- Severity: minor
- Smallest fix: Add "(Lesson 10.3, Section 8)" to S, and to S₂ add "K₂ is as far from C as K, so it has the same height".

7.
- Where: Step 2 caption (002_stepper1_step2.png).
- Text: "Careful: along the floor line x = 0.62, x stays 0.62; that line runs across the x line, toward the bottom of the picture."
- Why can't a beginner answer it: The floor line lies on the floor, and the x line is 0.0866 above it, so they never meet. "Runs across" is only true seen from above, and this picture is 3D.
- Severity: minor
- Smallest fix: Write "runs under the x line, crosswise to it".

8.
- Where: Step 2, the post tooltips (002). Also Step 5's wall ⓘ (005) and Exercise 2's caption.
- Text: "from S in UV = 0.58 − 0.62 = −0.04 / ruler = −0.04 ÷ 0.15 = −0.267" and "So the wall stands above the floor line x = 0.6653 (UV)."
- Why can't a beginner answer it: Step 1 said an arrow part is "not a size on the glass". Yet the ruler turns a UV distance into arrow units, and the wall gets a real UV place. With the hero's ruler (1 arrow unit = 0.06 UV), the same wall would stand above x = 0.638. Is the wall a place on the screen, or only in this drawing? Step 1's "S is a point, so its numbers are in UV" also clashes with Exercise 2's points, which are given in arrow units.
- Severity: slows
- Smallest fix: Say once that ruler positions and the wall's x = 0.6653 are places in the zoomed drawing, set by the arrow ruler, not places on the glass.

9.
- Where: Step 3, the view from above (003_stepper1_step3.png).
- Text: The caption "The y leg stays on the gray line of all points 0.302 to the right of S." and the label "every point on this gray line: 0.302 to the right of S".
- Why can't a beginner answer it: The gray line seems to start at Gx and run only toward the bottom. Step 5 says the wall also goes toward the top, so the drawn line is not "all points".
- Severity: minor
- Smallest fix: Draw the gray line on both sides of the x line.

10.
- Where: Step 5 heading (005).
- Text: "Step 5 · All of it on one wall."
- Why can't a beginner answer it: What does "it" mean? The x leg is not on the wall; only its end, Gx, is.
- Severity: minor
- Smallest fix: Write "The y leg, the height leg and the tip of N on one wall."

11.
- Where: Step 5 caption.
- Text: "Toward the top and down are the same two directions, the other way: x part 0 too."
- Why can't a beginner answer it: The same two directions as what? And why does going the other way keep the x part at 0? Neither is said.
- Severity: minor
- Smallest fix: Write "Toward the top is toward the bottom reversed, down is up reversed, and a reversed move still goes 0 to the right."

12.
- Where: Step 5 caption, "Why flat?" (005).
- Text: "Stand a straight post at every point of the level line through Gx (thin lines). All the posts point up, the same way, so together they fill a flat sheet that stands straight up."
- Why can't a beginner answer it: Two premises are missing, and one part does not match.
  - The x line is also a level line through Gx. Only the picture label says which line is meant.
  - Posts that all point up fill a flat sheet only if they stand on a straight line. On a curved line they would fill a curved sheet. The caption never says the base line is straight, or why (it changes only y).
  - The posts point only up, but the line before says the wall also goes down.
- Severity: slows
- Smallest fix: Write "Stand a post, up and down, at every point of the straight level line through Gx that goes toward the bottom of the picture (it changes only y)."

13.
- Where: Step 5 caption.
- Text: "The gray lines of Steps 3 and 4 were this wall, seen from above and from the front."
- Why can't a beginner answer it: Why does a wall look like a line in both views? The reason is not on this screen. It is that each view drops one of the wall's two directions while x stays fixed.
- Severity: minor
- Smallest fix: Add "Each view drops one of the wall's two directions, so it shows only the fixed 0.302: a line."

14.
- Where: Exercise 2 answer (013_exercise_picture4.png). The same problem is in Exercise 1's answer (011_exercise_picture2.png).
- Text: "P₂'s x leg goes 0.45 to the right, past the wall. P₃'s goes 0.15, short of it. … So P₂ and P₃ stay off the wall."
- Why can't a beginner answer it: In the starting view, P₁, P₂, P₃, the 0.15 and 0.45 marks and S are all drawn over the gray wall. The picture does not show P₂ beyond the wall or P₃ before it, and the answer picture does not say "drag to turn". In Exercise 1's answer, S₂ and K₂ are also drawn over the wall.
- Severity: slows
- Smallest fix: Start the answer pictures looking down from above, where the wall is a line and the points fall clearly on one side of it or on it.

MOST SERIOUS
1. Problem 12 (Step 5, "Why flat?"): the argument is missing a premise (the base line must be straight) and does not say which level line is meant. It is also the extra idea that breaks the one-idea rule.
2. Problem 8 (arrow units used as UV places): "not a size on the glass" against "ruler = UV ÷ 0.15" and "the wall stands above x = 0.6653 (UV)", which would be 0.638 with the hero's ruler.
3. Problem 4 (arrow units against Lesson 10.3): Lesson 10.3 read arrow parts in UV, and this page renames the unit without saying so.
4. Problem 2 ("picture" with two meanings): worst in Step 3 and in Step 5's wall view, where "toward the bottom of the picture" points to the right.
5. Problem 14 (Exercise 2's answer picture): every point is drawn over the wall, so the picture does not show the answer.

### Review 1 (fixed)

Checked about 120 claims, labels and tooltips. Listing 19 problems: 0 blocks, 6 slows, 13 minor.

NEW IDEAS
1. Steps 3–4: after the x leg, the y leg and the height leg add 0 to "how far to the right". So the tip of N is as far right of S as N's x part, 0.302. This is new: Lesson 10.3 has no legs, no x line and no wall.
2. Step 5 (borderline): all points 0.302 to the right of S form one flat sheet that stands straight up. The page gives this its own reason ("Why flat? …"). No earlier lesson taught an upright flat sheet where x stays fixed. Lesson 10.3 only has "the level plane through P".

Not new:
- Step 2's "the x line is level and is not the glass". Lesson 10.3 already said "The x direction is always level, parallel to the floor. The board is not." The posts only show this again on the glass.
- Leg, x line, ruler and Gx are names, not ideas.

Fit with type C: it fits if the wall's flatness counts as part of the one idea, as the curriculum entry for 10.4 reads. Strictly, it is a second fact with its own reason. If the learner counts it separately, the page can stop after Step 4 ("So the tip of N is 0.302 to the right of S"). Lesson 10.5 would then open with "all such points form a flat upright wall". Lesson 10.5 is the lesson that needs the wall to be flat.

PROBLEMS, IN READING ORDER

1.
- Where: the lede paragraph under the title, and Stepper 1, Step 1, last line.
- Text: "Lessons 10.5 and 10.6 use this wall to find N's x part with one line drawn from the tip of N." / "Why ask? Lessons 10.5 and 10.6 use the answer to find 0.302 with one line from the tip of N."
- Why can't a beginner answer it: 0.302 is already printed. So why find it again, and which line is meant? The real payoff is missing: the same kind of line later gives a number we do not know yet (how far N goes along another direction, Lesson 10.7).
- Severity: slows.
- Smallest fix: Add one clause saying that the same line, drawn to another direction later, gives a number that is not printed yet.

2.
- Where: the hero, right picture (006_figure1.png).
- Text: the labels "Gx" and "the x line".
- Why can't a beginner answer it: These names are drawn before Step 2 defines them. The hero's Gx tooltip says "On the ruler of the x line", and the x line is still undefined at that point.
- Severity: minor.
- Smallest fix: Leave Gx and the x line unlabelled in the hero, or add "(Step 2)" to their tooltips.

3.
- Where: the "Before you start" panel.
- Text: "Lesson 10.1: the height of the glass above a pixel. Used only in two ⓘ." and, under "New here": "level: parallel to the floor."
- Why can't a beginner answer it: The N tooltips use slopeX and slopeY from Lesson 10.2, which the panel does not list. Lesson 10.1 is used in more than two ⓘ (N at K, the posts, N at K₂). "Level" is listed as new, but Lesson 10.3 defined it.
- Severity: minor.
- Smallest fix: Add Lesson 10.2 (slope), correct the ⓘ count, and move "level" to the recalled items.

4.
- Where: Stepper 1, Step 1. Also the Section 2 table heading.
- Text: "The question: after each leg, how far to the right of S is the walk?" / "How far to the right of S the walk is after this leg"
- Why can't a beginner answer it: In Lesson 10.3 a walk is a change from start to end, not a place. "How far right is the walk" treats it as a place. The reader must guess that it means "the end of the walk so far".
- Severity: minor.
- Smallest fix: Write "how far to the right of S is the end of the walk so far?"

5.
- Where: Stepper 1, Step 1.
- Text: "the x leg: 0.302 to the right;"
- Why can't a beginner answer it: Lesson 10.3's "x walk" (1, 0, −0.45) was tilted and went down. A reader may expect the x leg to tilt too. Nothing on the page separates the two names.
- Severity: minor.
- Smallest fix: Add one tooltip line: "Not Lesson 10.3's x walk: the x leg is level, height part 0."

6.
- Where: Stepper 1, Step 1, the ⓘ on N (also in Section 2).
- Text: "The numbers keep up to 5 decimals, so N comes out right to 3 decimals."
- Why can't a beginner answer it: The "so" has no reason. The reader cannot see why keeping 5 decimals makes the first 3 correct.
- Severity: minor.
- Smallest fix: Say the rounding error of each line stays below 0.00001, far below the 0.0005 that would change the third decimal.

7.
- Where: Stepper 1, Step 2.
- Text: "Careful: the floor line x = 0.62 goes the other way, toward the bottom of the picture."
- Why can't a beginner answer it: Two naming habits clash. "The x line" is named after the direction it goes (x changes). "The floor line x = 0.62" is named after the number that stays fixed. "The other way" can also be read as "the opposite way", which would mean to the left.
- Severity: minor.
- Smallest fix: Write "the floor line x = 0.62, where x stays 0.62, runs across the x line, toward the bottom of the picture."

8.
- Where: Stepper 1, Step 2 picture (002_stepper1_step2.png).
- Text: "post at x = 0.58: glass 0.0957 high", "post at x = 0.68: glass 0.0418 high", next to ruler ticks "−0.5", "0", "0.5", "1".
- Why can't a beginner answer it: One line carries two scales. The posts are in UV x, and the ticks are in arrow units. A reader who looks for 0.58 on the ruler finds nothing (the post sits near −0.267). Also, the "x leg: 0.302" tag covers the start of the label "the glass along the floor line y = 0.66".
- Severity: minor.
- Smallest fix: Add each post's ruler reading to its label (−0.267 and 0.4), and move the x leg tag.

9.
- Where: Stepper 1, Step 3 (Step 4 has the same pattern).
- Text: "The y leg as an arrow: x part 0, y part 0.402, height part 0." / "Its x part is 0: it does not go to the right at all."
- Why can't a beginner answer it: The second line only restates the first. Why is the y leg's x part 0? Two reasons are missing. Each leg changes only one of x, y and height; Step 1 says only "one per part". And moving toward the bottom of the picture keeps x the same, as along the floor line x = 0.62. The lesson's one idea rests on this line.
- Severity: slows.
- Smallest fix: In Step 1, say "each leg changes only one of x, y and height; its other two parts are 0".

10.
- Where: Stepper 1, Step 3, caption and the view from above (003_stepper1_step3.png). Also the hero tooltip on K.
- Text: "In it, the y leg is drawn straight down from Gx." / label "y leg: 0.402, drawn straight down" / tooltip "K = (0.62, 0.66) in UV, y down."
- Why can't a beginner answer it: Elsewhere "down" means height going down: Step 5 says "then up or down", and Lesson 10.3 says "down 0.45". Here "down" means toward the bottom of the page. Does the y leg go down in height?
- Severity: slows.
- Smallest fix: Write "drawn from top to bottom of this flat picture", and in the tooltip write "y toward the bottom of the picture".

11.
- Where: Stepper 1, Step 3 (003_stepper1_step3.png), Step 4 (004_stepper1_step4.png) and Step 5.
- Text: "It stays on the gray line of all points 0.302 to the right of S." / labels "every point on this gray line: 0.302 to the right of S" (Steps 3 and 4) / "New: the wall (gray): all points that are 0.302 to the right of S."
- Why can't a beginner answer it: The same description names one line in Step 3, another line in Step 4, and a wall in Step 5. So is the set of these points a line or a wall? Nowhere does the page say that each gray line is the wall seen edge-on: the view hides one direction, so the whole wall falls on one line. Also, "It" comes right after a line in which "it" meant the view.
- Severity: slows.
- Smallest fix: In Step 5, add "The gray lines of Steps 3 and 4 are this wall, seen from above and from the front."

12.
- Where: Stepper 1, Step 5, first line. Also the coordinates panel and Exercise 2.
- Text: "New: the wall (gray): all points that are 0.302 to the right of S." The panel says: "A point has x, y and height, in UV."
- Why can't a beginner answer it: No unit is given. Points are said to be in UV, and the floor grid is in UV. So a reader may look for the wall 0.302 UV right of S, at x = 0.922, which is off the floor. The wall is really 0.302 arrow units, which is 0.0453 UV, so it stands above x ≈ 0.665. The page never says this for the wall. Exercise 2 then gives points in arrow units, against the panel's rule.
- Severity: slows.
- Smallest fix: Say once: "0.302 in arrow units, drawn 0.0453 UV: the wall stands above x = 0.6653 on the floor."

13.
- Where: Stepper 1, Step 5.
- Text: "From Gx, go any amount toward the bottom or the top of the picture, then up or down." / "These moves have x part 0 (Steps 3 and 4), so you stay 0.302 to the right of S."
- Why can't a beginner answer it: Steps 3 and 4 each showed one move: 0.402 toward the bottom and 0.864 up. "Toward the top", "down" and "any amount" were never shown. "These moves" also points back across a line.
- Severity: minor.
- Smallest fix: Add "toward the top and down are the minus sides of the same two directions, so their x part is 0 too."

14.
- Where: Stepper 1, Step 5 (005_stepper1_step5.png).
- Text: "Why flat? Both of those directions are straight lines, so the points fill a flat sheet that stands straight up."
- Why can't a beginner answer it: Straight lines alone do not make a flat sheet. The side of a can is curved, yet it is full of straight up-lines. Two facts are missing. The two directions are the same from every point (Lesson 10.3's fixed directions), so the moves stack straight posts on one straight level line. And "stands straight up" needs "one of the two directions is up". "Those directions" is also a vague pointer.
- Severity: slows.
- Smallest fix: Draw a few up-posts along the level line through Gx (toward the bottom of the picture), and say "straight posts on one straight level line fill a flat upright sheet."

15.
- Where: Stepper 1, Step 5, the flat wall view (005_stepper1_step5.png).
- Text: "Below: the wall, seen straight on." / label "coordinates: the wall, seen straight on · arrow units, from Gx · toward the bottom of the picture →, up ↑"
- Why can't a beginner answer it: The page does not say which side the wall is seen from (it is from S's side, looking to the right). In this picture "toward the bottom of the picture" points right, which fights the words. The reader must trust the arrow.
- Severity: minor.
- Smallest fix: Add "seen from S's side, looking to the right".

16.
- Where: Section 2, heading and table (007_figure2.png).
- Text: "At K the walk ends 0.302 to the right of S" / "0 + 0.302 = 0.302"
- Why can't a beginner answer it: The heading is fixed text. After the learner drags K, it prints a different value from the table for the same quantity. Also, the first "0" is not said to mean "the walk starts at S, 0 to the right of S".
- Severity: minor.
- Smallest fix: Update the heading with K (or drop its number), and mark the first 0 as "start: at S".

17.
- Where: Exercise 1, caption under the picture (008_exercise1.png).
- Text: "N at K₂ = (0.62, 0.34) in UV: (0.302, −0.402, 0.864)"
- Why can't a beginner answer it: The "=" sits between "N at K₂" and K₂'s point. So the line can be read as "N = (0.62, 0.34)".
- Severity: minor.
- Smallest fix: Write "K₂ = (0.62, 0.34) in UV. N at K₂ = (0.302, −0.402, 0.864)."

18.
- Where: Exercise 1, the ⓘ on N at K₂.
- Text: "The table rounds N to 3 decimals: N = (0.302, −0.402, 0.864)."
- Why can't a beginner answer it: Exercise 1 has no table, so "the table" points at nothing on that screen.
- Severity: minor.
- Smallest fix: Write "Rounded to 3 decimals", as the tooltip at K does.

19.
- Where: Exercise 2, question and answer pictures (012_exercise_picture3.png, 013_exercise_picture4.png).
- Text: "P₂'s x leg goes 0.45 to the right, past the wall. P₃'s goes 0.15, short of it."
- Why can't a beginner answer it: The x legs of P₁, P₂ and P₃ lie on top of the x line, and their ends (0.302, 0.45, 0.15) are not marked. From the default angle P₂ is drawn over the gray wall. So "past the wall" and "short of it" cannot be seen in the picture.
- Severity: minor.
- Smallest fix: In the answer picture, mark each x leg's end on the x line with its ruler reading.

MOST SERIOUS
1. #14, Step 5, "Why flat?": the reason is missing a premise. Straight directions alone do not give a flat sheet, and the wall's flatness is the lesson's title and what Lesson 10.5 builds on.
2. #9, Step 3: "x part 0" is only restated. Why each leg changes only one of x, y and height is never said, and the one idea rests on it.
3. #11, Steps 3–5: "all points 0.302 to the right of S" is a line, another line, then a wall. The page never says the gray lines are the wall seen edge-on.
4. #12, Step 5: the wall's "0.302 to the right" has no unit. It clashes with "a point is in UV" and with the UV floor grid.
5. #10, Step 3: "drawn straight down" uses "down" for the bottom of the page, while the rest of the lesson and Lesson 10.3 use "down" for height.
