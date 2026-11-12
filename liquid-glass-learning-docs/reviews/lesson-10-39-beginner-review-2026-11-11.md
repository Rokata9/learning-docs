# Lesson 10.39 — One light direction for every pixel: the dot map · fresh beginner reviews, 2026-11-11

Two fresh reviews; both counted **one new idea** (type C fits): a very far light is seen in the same direction from every pixel, so one L serves the whole glass; dot(N, L) then changes only with N and can be shown at every pixel as a gray (× 0.5 + 0.5, Lesson 10.3): the dot map. Step 4's reading of the map applies earlier lessons.

## Review 1 (20 items: 9 slows, 11 minor) — all fixed

- slows · the far-light reason was only asserted → sizes given (and, after review 2, a check without angles).
- slows · “level part” undefined, used two ways → “L's x and y parts”.
- slows · “the point's number” against “the number” (dot) → “each label: the point, then dot(N, L)”.
- slows · red and green labels with no meaning → plain labels.
- slows · two red rings and a dark/white band outside the outline → the map covers the glass only (just outside the outline Lesson 10.3's slopes still lean, because their neighbours 0.01 away are on the glass); “Between it and the outline, darker than 0.5”.
- slows · the emerald bar hidden in Section 2's 3D view → drawn over L's arrow; legend names violet.
- slows · the below-0 case hid N in Section 2 → labels by `freeLab` (camera fixed in review 2).
- slows · the exercise ⓘ pointed at K, which the page does not use → “as for W in Section 2”.
- slows · the exercise answer's reason did not follow (two minus products need not make a minus sum; point 5 is a counter-example) → cut; the three chains are the reason. Pixel a moved to (0.67, 0.33) so no number of N equals one of L₂'s.
- minor · repeats; gray lines in tooltips before Step 3 (tooltips stop at dot(N, L) until the map is gray); “a number”, “for seeing only”; “On the side of the rim away from where L leans” → “Lower left of the rim … two products are minus”; “middle gray” before its definition; F₁, F₂ tooltip; Uses names 10.19 and 10.24; “Pixel a” everywhere; the exercise camera turned so a's N is seen side-on; 0.640 printed for L₂'s 0.64.

## Review 2 (16 items: 6 slows, 10 minor)

Fixed:
- slows · N pointed at the viewer at point 10 (Steps 2–4) and at W = (0.33, 0.67) (Section 2) → both 3D views now look across L's lean (yaw 50°), so N on the lower-left rim is drawn from the side; one camera per picture, never turned by the page.
- slows · the “millionth of a degree” could not be checked → “Two lines from two pixels 5 cm apart meet there: over those 150 million km they come together by only 5 cm, so they point the same way.”
- slows · Step 1's gold L arrows hidden under the labels → the labels keep off the arrows.
- slows · two numbers for point 2 with no legend → the legend keeps “each label: the point, then dot(N, L)” in Steps 3–4.
- slows · pixel a's circle on b's label in the exercise → 3D point labels placed by `freeLab`.
- minor · the hero caption says “as light as its gray value (Step 3)”; “We take the light very far away”; Step 1's legend bullet cut; “(the gray is only for the picture)” cut; the traced dots and the band are blue, not the known-number green; outside the glass pale yellow; the upper-right reason (“all three products are plus”); “smaller than on the flat top”; “gray 0.5” instead of “middle gray”; “The dot map of Section 1”; the lead's second sentence shortened; “Flat top: gray 0.82” cut from Step 4.

Left open:
- The page is above 300 words (about 430 with the required hero, Uses and “Where this is used” lines).

QA: no script errors; label sweep of 97 states (4 steps, 91 positions of W, the exercise, the hero): 0 overlapping or cut labels, 0 points under a label, the corner box or a legend; Decimal audit of 753 steps: 0 problems.
