# Draft Lesson 10.4 (“An arrow's part is a foot on an axis”) — fresh beginner review (2026-11-02)

Reviewed page: the one-page draft of 2026-11-02, now `course/archive/lesson-10-04-arrow-part-draft-2026-11-03.html`. The reviewer counted five new ideas, so the learner approved splitting it into Lessons 10.4, 10.5 and 10.6 (2026-11-03). Which lesson fixes which item: `curriculum/liquid_glass_ios_handoff.md`, “Lessons 10.4–10.20”. The report below is the reviewer's text, unchanged. Its lesson numbers are from before the split: its “Lesson 10.5” is now 10.7, and “Lessons 10.10–10.15” are now 10.12–10.17.

---

Roughly 140 claims checked (captions, tooltips, picture labels, table, exercises). 29 problems listed.

The page has no "your questions", code, Metal or record sections, so there was nothing to check there. The wrong-answer feedback on the exercise buttons is not in the text file. I read it in the page source only to avoid a false report: it gives reasons, so those buttons are not listed.

## New ideas

1. **The wall (Step 3).** All points at one distance along a line form a flat surface at a square corner to that line, and the rest of the walk stays on it. It has its own "Why?". No earlier lesson has it.
2. **Pole on a floor (Step 4).** A line at a square corner to a flat surface makes a square corner with every line on that surface through its end. It has its own "Why every line?" and the spin argument. No earlier lesson argues it (grep for "pole" and "every line").
3. **The foot gives the part (Step 5).** N's part is the distance from S to the foot of the tip on that line. This is the page's declared one idea.
4. **One plane holds a line and an arrow that starts on it (Step 5).** It has its own "Why one plane?" and the sheet argument. In 10.3, "plane" appears only as "plane y = 0.50" and "level plane through P".
5. **Mirror rule (Exercise 2 caption).** Mirroring a pixel over y = 0.50 keeps the x part and height part and flips the y part. Lesson 10.3 only has "mirror images have equal heights, so slope 0" on the line itself, and it computes pixel M by hand.

**Not counted:**
- "Legs in any order": 10.3 Step 8 says "Any order ends at the same tip", so this is a recall with a new reason.
- "Two directions give the whole surface": 10.3 Step 8 states this, so it is a recall.
- "One foot" and "0 on the line is the square corner": these are named without a reason, so they are in the problem list.

**Fit:** 5 ideas against "C: exactly one". It does not fit. The panel's "This is the lesson's one idea" understates the page.

**Proposed splits:**
- **Idea 1:** own lesson, Steps 1–3. Stop after "Below: the wall seen straight on."
- **Idea 2:** own lesson, Step 4. Stop at "So the gray line meets the x line at a square corner, at Gx."
- **Idea 3:** this is what stays as the foot lesson: Step 5, Section 2 and the exercises.
- **Idea 4:** stop Step 5 before "Below: the plane". The plane picture and "Why one plane?" become their own lesson, placed before 10.5, which needs them.
- **Idea 5:** stop the Exercise 2 caption before "K₂ is K mirrored". Give N at K₂ through its own calculation tooltip, or make the mirror rule its own lesson.

## Problems, in reading order

**1.**
- **Where:** hero, left and right pictures; 010_figure1.png
- **Text:** "The tip of N at K. N = (0.302, 0.402, 0.864), drawn 0.06 UV long." / "The same pink arrow, zoomed in at K." / Step 1 tooltip: "N is 1 arrow unit long and is drawn 0.15 UV long"
- **Why can't a beginner answer it:** The same arrow is printed with two drawn lengths. Nothing says why they differ. The left picture has no arrow ruler label, and its row in the coordinates table does not mention one.
- **Severity:** slows
- **Smallest fix:** Add "arrow ruler: 1 = 0.06 UV" to the left picture and its table row.

**2.**
- **Where:** page title; Section 2 heading; labels "Gx: 0.302"
- **Text:** "An arrow's part is a foot on an axis" / "N at K has three feet: 0.302, 0.402 and 0.864"
- **Why can't a beginner answer it:** Step 5 defines the foot as a place and the part as a distance to it. The title and heading call the number itself a foot.
- **Severity:** minor
- **Smallest fix:** Write "three feet, at 0.302, 0.402 and 0.864 from S".

**3.**
- **Where:** Step 1 caption
- **Text:** "So each part has a leg you can see, here and in Lessons 10.10–10.15."
- **Why can't a beginner answer it:** Those lessons are unseen, so the reader cannot check this or tell why it matters.
- **Severity:** minor
- **Smallest fix:** Stop at "here".

**4.**
- **Where:** Step 1 caption; intro paragraph
- **Text:** "Why? Lesson 10.5 asks “how far?” along a line that no leg lies on. There the walk does not help." / "…and that gives the dot product."
- **Why can't a beginner answer it:** How far does what go? Why does the walk stop helping? The goal of the whole lesson hangs on this reason, and neither the subject nor the failure is stated.
- **Severity:** slows
- **Smallest fix:** Say "how far N goes along that line; no leg lies on it, so no leg's length is the answer".

**5.**
- **Where:** Step 1 "how N is calculated" tooltip; Step 2 height tooltip; Step 5 tooltips
- **Text:** "leg = 0.10 − 0.05584" against "Each piece is a leg"
- **Why can't a beginner answer it:** "Leg" means a piece of the walk here, but in these height lines it is the side of Lesson 10.1's rim triangle. Going back to 10.1, "leg" is measured from "K, the center of the rim circle", which is a second K.
- **Severity:** minor
- **Smallest fix:** Note "leg here = Lesson 10.1's rim triangle, not a walk leg".

**6.**
- **Where:** Step 1 and every 3D picture; 001_stepper1_step1.png
- **Text:** "the y leg: 0.402 toward the bottom of the picture" / label "toward the top of the picture" / "In the 3D picture a square corner can look slanted." / "which comes straight through the picture at Gx"
- **Why can't a beginner answer it:** "The picture" means the flat image lying on the floor in one sentence and the drawing on the page in another. In 001 the label "toward the top" sits below the label "toward the bottom". The flat image is not on screen in Section 1.
- **Severity:** slows
- **Smallest fix:** State once that "top" and "bottom of the picture" are directions on the flat image lying on the floor.

**7.**
- **Where:** Step 2; 002_stepper1_step2.png
- **Text:** "New: the x line (lime). It is the straight line through S that goes right and left." beside the label "the glass along the line x = 0.62"
- **Why can't a beginner answer it:** "The line x = 0.62" runs toward the bottom of the picture, along the y line. "The x line" runs along y = 0.66. Nothing warns that the names look swapped.
- **Severity:** slows
- **Smallest fix:** Add "the x line is straight above the floor line y = 0.66, where only x changes".

**8.**
- **Where:** Step 2; 002_stepper1_step2.png
- **Text:** "It falls as x grows." / "So the glass is above the x line left of S, and below the x line right of S (the posts)." / labels "glass: 0.0978", "glass: 0.0418"
- **Why can't a beginner answer it:**
  - The labels say neither "height" nor at which x. That is only in tooltips.
  - "The posts" is unlabeled in the picture.
  - The fall holds only in this patch, not left of C.
  - The fact is never used again, so the reader asks why it is here.
- **Severity:** minor
- **Smallest fix:** Label "glass height at x = 0.56" and end with "so the x line is a helper, not on the glass".

**9.**
- **Where:** Step 2 picture; 002_stepper1_step2.png
- **Text:** "It ends at Gx, where the ruler reads 0.302."
- **Why can't a beginner answer it:** An unlabeled lime dot (the post at ruler 0.4) sits right beside Gx in the same color. Thin lines from Gx to below the tip are neither labeled nor mentioned. Only every fifth tick has a number, and the tick size is not stated.
- **Severity:** minor
- **Smallest fix:** Make the post dots a different size, and say "ticks every 0.1".

**10.**
- **Where:** Step 3 caption
- **Text:** "All points that are 0.302 to the right of S form a flat wall (gray)."
- **Why can't a beginner answer it:** Why flat? No reason is given for the shape; the gray rectangle only shows it.
- **Severity:** slows
- **Smallest fix:** Add "such a point can have any y and any height, and both directions are straight, so the points fill a flat sheet".

**11.**
- **Where:** Step 3 caption; 003_stepper1_step3.png
- **Text:** "The wall stands at a square corner to the x line. Why? The wall holds two directions: toward the bottom of the picture, and up. Both make a square corner with the x line at Gx (the marks)."
- **Why can't a beginner answer it:**
  - Why does each direction make a square corner? The marks only assert it.
  - Why are two directions enough for a whole wall? That rule is from 10.3 Step 8, but it is not cited and not in the panel.
  - The "up" direction at Gx is an unlabeled thin line.
- **Severity:** blocks (Step 4's "pole standing straight" rests on it)
- **Smallest fix:** Cite 10.3's rule, and say "up is at a square corner to anything level; the bottom direction is at a square corner to right on the floor grid".

**12.**
- **Where:** Step 4 caption; 004_stepper1_step4.png
- **Text:** "That direction makes a square corner with the x line (see the floor grid)."
- **Why can't a beginner answer it:** One line earlier "the wall is the floor", and the wall has no grid. The real floor's grid cells are drawn as slanted parallelograms, and the x line is in the air above them. So the pointer proves nothing as drawn.
- **Severity:** slows
- **Smallest fix:** Say "on the screen's grid, the line y = 0.66 under the x line crosses the bottom direction at a square corner".

**13.**
- **Where:** Step 4 caption and label "the wall (the floor)"; the same step has the label "floor: the screen…"
- **Text:** "Here the x line is the pole, and the wall is the floor." / "A pole standing straight on a floor makes a square corner with every line drawn on the floor through its end."
- **Why can't a beginner answer it:** "Floor" now means two things in one picture. The x line also has no end at Gx: the same step says it "comes straight through at Gx", and it continues on both sides.
- **Severity:** slows
- **Smallest fix:** Call the analogy's surface "the pole's ground", and add "the x line goes through, like a pole through a hole".

**14.**
- **Where:** Step 4 caption and tooltip
- **Text:** "A spin does not move the x line and does not change the corner, like a spoke of a wheel around its axle." / "The end of the turning line: it stays on the wall and always starts at Gx."
- **Why can't a beginner answer it:** This is the core proof, and it rests on a simile. Why does the spinning line stay on the wall? Nothing says that a spin around the x line changes only y and height, never how far right.
- **Severity:** blocks
- **Smallest fix:** Add "a spin around the x line changes only y and height, so every point stays 0.302 to the right, on the wall; the line and the axle turn as one rigid piece".

**15.**
- **Where:** Step 4 pictures at 0% and 50%; 004_stepper1_step4.png, 005_stepper1_step4_extra.png
- **Text:** label "a line on the wall, through Gx"
- **Why can't a beginner answer it:** At 0% the line's end is outside the gray wall in both views, and at 50% it is slightly outside. "No edges" is only said later, about a plane. The line's length and the pale arc are not explained.
- **Severity:** slows
- **Smallest fix:** Draw the wall larger than the line's reach, and label the arc "path of the line's end; the line is as long as the gray line".

**16.**
- **Where:** Step 5, x line and y line captions
- **Text:** "So N's x part is the distance from S to the foot: 0.302." / "N's y part is the distance from S to Gy: 0.402."
- **Why can't a beginner answer it:** A distance has no sign, yet Exercise 2 has a y part of −0.402 and dragging K reaches other signs. What does minus mean in this sentence?
- **Severity:** slows
- **Smallest fix:** Say "the ruler's reading at the foot: plus or minus by side".

**17.**
- **Where:** Step 5, x line caption
- **Text:** "You can now find 0.302 with one drawn line, without walking."
- **Why can't a beginner answer it:** Every step reached Gx by walking first. How do I know where to draw the line if I don't already know 0.302? No method is stated and none is shown.
- **Severity:** blocks (this is the goal from Step 1, and 10.5 needs it)
- **Smallest fix:** Add "move a point along the line until the line from the tip makes a square corner", ideally with a slider.

**18.**
- **Where:** Step 5, x line caption; 007_stepper1_step5.png
- **Text:** "A different point of the x line gives a slanted line, not a square corner. So there is one foot."
- **Why can't a beginner answer it:** One faint line to one other point is an example, not a reason. Why is every other point slanted?
- **Severity:** slows
- **Smallest fix:** Add "the tip, Gx and that point form a right triangle; it has one square corner (Lesson 9.1), at Gx, so none at that point".

**19.**
- **Where:** Step 5, x line; 007_stepper1_step5.png
- **Text:** "Below: the plane (a flat surface without edges) that holds N and the x line, seen straight on." / "The button Straight at the plane turns the 3D picture to that plane."
- **Why can't a beginner answer it:** The plane is not drawn in the 3D picture. The only surface there is the gray wall, now with no label, so a reader takes the wall for the plane. The wall does not hold N.
- **Severity:** slows
- **Smallest fix:** Keep the "the wall" label in Step 5, and draw the plane faintly in the 3D picture.

**20.**
- **Where:** Step 5, x line caption
- **Text:** "Why one plane? Lay a flat sheet along the line, then turn it around the line until it touches N."
- **Why can't a beginner answer it:** N starts at S, on the line, so the sheet touches N from the first moment. Nothing says why all of N lies on the sheet at the end.
- **Severity:** slows
- **Smallest fix:** Say "until it touches the tip of N; N's start is already on the line, so the whole straight N lies on the sheet".

**21.**
- **Where:** Step 5 flat pictures; 007, 008, 009 screenshots
- **Text:** label "coordinates: a plane, arrow units, from S · N and the x line, seen straight on, the x line drawn left to right"
- **Why can't a beginner answer it:** The upward direction in this drawing is not named, though the table says the axes are "named in its label". It looks like height, but the tip is drawn 0.953 up against a height part of 0.864. The 0.953 appears only in a tooltip.
- **Severity:** slows
- **Smallest fix:** Label the gray line "0.953 away from the x line (not height)".

**22.**
- **Where:** Step 5, x line caption
- **Text:** "Press y line and height line: the same drawing."
- **Why can't a beginner answer it:** The same what? The numbers, lines and planes all differ. Only the construction is the same.
- **Severity:** minor
- **Smallest fix:** Say "the same steps on another line, with its own wall and plane".

**23.**
- **Where:** Step 5, y line and height line captions; panel; 008_stepper1_step5_extra.png, 009_stepper1_step5_extra.png
- **Text:** "So both stay on the wall at Gy, and the tip of N is on it too." / "The y line stands on that wall like a pole on a floor." / "This wall lies level, parallel to the floor." / panel: "All its points are the same distance to the right of S."
- **Why can't a beginner answer it:**
  - The panel's and Step 3's definition of "wall" is false for these two surfaces.
  - They are unlabeled in the pictures.
  - A wall that lies level contradicts the word.
  - The reason why each new line stands square on its wall (which two directions) is not restated.
- **Severity:** slows
- **Smallest fix:** Define "a wall: all points at one reading on a line", label each one, and add "this wall holds right and up".

**24.**
- **Where:** Section 2 table; 011_figure2.png
- **Text:** column "From the foot to the tip of N, on this line" with "0.302 − 0.302 = 0" / "The last column is 0 in every row: the gray line does not go on that row's line at all. That is the square corner."
- **Why can't a beginner answer it:**
  - From the foot to the tip is 0.953 (Step 5 tooltip), so why does it print 0? "On this line" is never defined.
  - Why does 0 mean a square corner? That is a new claim with no reason.
  - The sum subtracts a number from itself, so it is 0 whatever the geometry and shows nothing about a corner.
- **Severity:** slows
- **Smallest fix:** Rename the column "how far right the gray line goes", and say that a line going 0 along another line is at a square corner to it, because Steps 3–4 show the gray line lies on the wall.

**25.**
- **Where:** Exercise 1 and Exercise 2, titles and questions; 014_exercise_picture1.png, 016_exercise_picture3.png
- **Text:** "Question: where does the line from the tip of N meet the height line?" / "where does the line from the tip of N at K₂ meet the x line?"
- **Why can't a beginner answer it:** Which line? No line from the tip is drawn in the question picture, and a line from the tip can meet the height line anywhere. "At a square corner" is missing.
- **Severity:** slows
- **Smallest fix:** Add "the line from the tip of N at a square corner to the height line".

**26.**
- **Where:** Exercise 1; 014_exercise_picture1.png
- **Text:** "Then read how long the first leg is." / "Read each picture, pick one answer"
- **Why can't a beginner answer it:** No leg is drawn. N's numbers are not printed in this exercise (Exercise 2 prints them). The ruler labels only 0.5 and 1.
- **Severity:** slows
- **Smallest fix:** Print N = (0.302, 0.402, 0.864) as Exercise 2 does.

**27.**
- **Where:** Exercise 1, "Why this question"
- **Text:** "The picture looks different, so it is worth checking that the drawing still reads a part of N."
- **Why can't a beginner answer it:** Step 5's height line and the Section 2 label "Gh: 0.864" already printed this exact answer just above, so the check tests only recall.
- **Severity:** minor
- **Smallest fix:** Use a different pixel in this exercise.

**28.**
- **Where:** Exercise 2 caption; 016_exercise_picture3.png
- **Text:** "K₂ is K mirrored over the line y = 0.50. The glass is the same on both sides of that line, so N at K₂ has the same x part and height part, and the y part −0.402."
- **Why can't a beginner answer it:**
  - Why the same on both sides? The glass being round around C, which lies on that line, is not said.
  - Why does only y flip? That step is missing.
  - The line y = 0.50 is not in the picture, whose floor patch is y 0.28–0.40.
- **Severity:** slows
- **Smallest fix:** Add "the glass is round around C, which is on that line; mirrored pixels have equal heights, so slopeX stays and slopeY flips sign".

**29.**
- **Where:** Exercise 2 hidden answer; 017_exercise_picture4.png
- **Text:** "So the tip of N is on the same wall, and the gray line meets the x line at Gx."
- **Why can't a beginner answer it:**
  - The same as what? This wall is 0.302 from S₂, not S.
  - The wall, the x leg and the gray line are unlabeled here.
  - The square-corner step is skipped.
  - Gx has no subscript although K₂ and S₂ do.
- **Severity:** slows
- **Smallest fix:** Say "on the wall 0.302 to the right of S₂ (labeled), so the x line stands on it like a pole and the corner at Gx is square".

**Also (minor, labels that hide other labels):**
- 004_stepper1_step4.png, Step 4 at 0%: "a line on the wall, through Gx" covers "toward the bottom of the picture".
- 005_stepper1_step4_extra.png, Step 4 at 50%: that label is covered by "every point here…".
- 007_stepper1_step5.png: "faint line…" covers "the x line".
- 009_stepper1_step5_extra.png: "the gray line…" covers the "0.5" tick.
- 010_figure1.png and 011_figure2.png: "Gy: 0.402" covers "the y line".
- 011_figure2.png: the "violet curves…" label covers "the height line".
- 011, 012, 013 screenshots: the "floor…" label covers "right".

## Most serious

1. **Step 5, "find 0.302 … without walking" (problems 17 and 18).** There is no method for placing the line without already knowing Gx, and the "one foot" claim has no reason. The lesson's stated goal is claimed, not shown.
2. **Step 4, the spin (problems 14 and 15).** The core proof rests on a simile. Nothing says why the line stays on the wall, and the picture shows its end off the wall.
3. **Section 2, last column (problem 24).** A printed 0 labeled "From the foot to the tip" conflicts with 0.953. The sum 0.302 − 0.302 cannot show a square corner.
4. **One word, several meanings (problems 6, 7, 12, 13, 23).** "Floor" is both the screen and the wall. "Wall" has a definition that fails in two of its three uses. "The picture" and "the x line" against "the line x = 0.62" also collide. Together they make the captions unreliable to read.
5. **Five new ideas on a C page, with missing premises around them (problems 11, 19, 25).** The wall and pole steps are lessons of their own. The two-direction rule is uncited, the plane is never drawn in 3D, and the exercise questions omit "at a square corner".
