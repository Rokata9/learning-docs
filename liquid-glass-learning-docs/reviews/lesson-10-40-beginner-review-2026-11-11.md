# Lesson 10.40 — Build: the dot product in Metal · fresh beginner reviews, 2026-11-11

Type B (joins 10.4–10.39). Two fresh reviews, each by an agent that did not write the page, given a text dump (page with every answer open, the record, every tooltip) and the page's screenshots at 1920 px (Playwright, needed by `tools/beginner-review/extract_lesson.py`, is not installed).

- Review 1: **no new idea** (fits B).
- Review 2: **one new idea**, a side sentence in Exercise 2's answer (“a few dark specks lie just outside the outline: there the neighbors 0.01 away are still on the button, so N still leans”). It was cut, not split (rule 20: a side fact is fixed by cutting); it also contradicted “At T5, outside the button, N = (0, 0, 1)”. After the cut the page has no new idea.

## Review 1 (fresh agent, 2026-11-11)

About 150 claims checked, 28 listed. New ideas: none (`static`, `.float3` and Metal's `dot()` are code constructs explained in the line table); fits type B, no split. 0 blocks, 7 slows, 21 minor.

| # | Where | Item | Severity | Done |
|---|---|---|---|---|
| 1 | Lead | “these two functions” named before Section 3; 10.47 said to be built on later highlight lessons | slows | fixed: “The brightness of each pixel (10.41–10.43), the lit glass of Lesson 10.47 and the highlight (10.48–10.52) start from dot(N, L).” |
| 2 | Hero map | pale yellow outside vs the iPhone's gray; outline and dashed circle without legend | minor | fixed: caption says the iPhone paints the flat screen gray; legend line for the outline and the flat-top edge |
| 3 | 10.6–10.10 | “turn” and “spin” for one motion; “it” in 10.9 | minor | fixed: “spin” throughout, T named |
| 4 | 10.26 | “X, 1 along x, and the tip of L” read as three things | slows | fixed: “X (1 along x) and the tip of L …” |
| 5 | ⓘ 10.10 | a and b undefined | minor | fixed: “(a, b): T's two numbers on the wall seen straight on, counted from the middle” |
| 6 | ⓘ 10.23 | conclusion missing | minor | fixed: “so |SF|, a shorter side, is at most 1” |
| 7 | ⓘ 10.26 | equal corners need not be 90° | minor | fixed: “equal; together they make a straight line, 180°, so each is 90°” |
| 8 | ⓘ 10.38 | “hero” | minor | fixed: “The left picture at the top of the page …” |
| 9 | ⓘ S (engine popup) | “leg” of the rim triangle vs the walk's legs | minor | left: the shared engine's popup, used by every page since 10.4 |
| 10 | ⓘ K | “The pixel of this lesson” | minor | fixed: “The pixel of Lessons 10.4–10.38” |
| 11 | Also used | 3.1, 8.3–8.6, 9.1 missing | minor | fixed |
| 12 | Swift call | `.float2(pixelSize, pixelSize)` | minor | fixed: comment “resolution: the view is square” |
| 13 | iOS note | Apple sentence is padding | minor | fixed: cut |
| 14 | Goal 3D legend | T5 named, not drawn | minor | fixed: “(T5, on the flat screen, is not drawn)” |
| 15 | Test table | “N as at W / K” on two different shapes | slows | fixed: “(Lesson 10.3's T1 … T5)”, T6 “(new here)” |
| 16 | Under the test table | “fourth decimal at most” without reason; tolerance seemed to compare with the table | slows | fixed: “N to 3 decimals (Lesson 10.3 printed 6). The iPhone keeps all of N's digits, so its numbers differ slightly from these. The check compares your picture with the key's, not with this table.” |
| 17 | Test-pixel popups | chains printed twice | minor | fixed: popups give N, dot(N, L) and gray only |
| 18 | Section 4 | “comes first” vs the page order | minor | fixed: “In the app, Lesson 10.40's explorer comes first, its Metal exercise under it.” |
| 19 | Section 4 sliders | both at 0.90: no L 1 long | minor | fixed: “When the two parts get too long, the app shrinks both, so the height part stays at least 0.243.” |
| 20 | Section 4 trace bullet | “so it prints 6 decimals”; a second N value | minor | fixed: “W's trace card: 0.799985 with all of N's digits; with N to 3 decimals, the lessons get 0.79984.” |
| 21 | Exercises | question said in title, bold line and picture label | minor | left: the course's exercise format (rule 18: the question is the same as its title) |
| 22 | Exercise 1 | T1 and T5 also match | slows | fixed: “which of T2, T3 and T4 still matches the key?” |
| 23 | Exercise 1 answer | T2 chain repeats Section 3's column | minor | fixed: T2 gives the changed y line and points to Section 3's T2 column |
| 24 | Exercise 2 question | no swatch for gray 0.5 | minor | fixed: a gray-0.5 swatch in the picture's legend |
| 25 | Exercise 2 answer | red = “dot 0” in 3D, red = “differs” in the check | slows | fixed: the 3D line is dark (white halo), “dark line: where dot(N, L) is 0, gray 0.5” |
| 26 | Exercise 2 answer | why only a thin line | slows | fixed: “from the flat top (0.64) out to the outline (below 0, as at T6, −0.35616) the number falls steadily, so it passes 0 once” |
| 27 | Check pictures | dashed lines without legend | minor | fixed: outline drawn as white dashes; legend “white dashes: the outline · violet dashes: where the flat top ends” |
| 28 | Record | “does the same” after `static` | minor | fixed: “Metal's dot(N, L) does the three multiplications and two additions in one call.” |

## Review 2 (fresh agent, 2026-11-11) — the final list

About 120 claims checked, 28 listed. 0 blocks, 15 slows, 13 minor. All slows fixed; minor items fixed or left as named.

| # | Where | Item | Severity | Done |
|---|---|---|---|---|
| 1 | Hero map legend | “N leans the way L leans” with no L drawn | slows | fixed: “lighter: larger dot(N, L) · pale yellow: no glass” |
| 2 | Hero caption | “meeting point” not labelled | minor | fixed: “the meeting point (F₁, F₂, F₃) on L's line; F₃ reads dot(N, L)” |
| 3 | ⓘ 10.8 | “its point on the x line” | minor | fixed: “around the end of the x leg” |
| 4 | 10.9 | T undefined, clashes with T1–T6 | slows | fixed: 10.9–10.10 speak of “a line's far end”; T is not used |
| 5 | ⓘ 10.12 | why exactly 90° | slows | fixed: wider angle longer, narrower shorter; at 90° the third side is 1 (Lesson 9.1) |
| 6 | ⓘ 10.13 | the door turned around the x line | slows | fixed: “Two of the points fix a line. A door … turns around that line” |
| 7 | ⓘ 10.14 | “chart” | slows | fixed: Lesson 10.12's rule written out |
| 8 | ⓘ 10.15 | which triangle, which square corner | slows | fixed: the triangle S, end of the x leg, far end; 90° before the spin (10.12); kept (10.8, 10.14) |
| 9 | 10.21, ⓘ 10.22 | no subject; the converse unproved | minor | fixed: “N and L in the same direction: 1”; “a reading of 0 puts F at S, so N meets L's line at 90°” |
| 10 | 10.26 | why the same three sides | slows | fixed: “M, halfway between X (1 along x) and the tip of L, is the foot of both on line SM”; the ⓘ gives |MX| = |M to the tip of L| and S 1 from both |
| 11 | 10.31 | “points whose meeting points” | minor | fixed: “All points with the same meeting point form a flat wall” |
| 12 | ⓘ 10.32 | explained arrows, not walls | slows | fixed: each point and its meeting point move d together, the square corner stays, so every meeting point is d further along |
| 13 | 10.33 | “its copy from S”, “both readings” | slows | fixed: “its copy starting at S (as long, the same direction)”; “the readings at both of its ends” |
| 14 | 10.35–10.37 | “it” | minor | fixed: “the meeting point” |
| 15 | Goal 3D | T5 not drawn | minor | fixed: T5 drawn on the floor's edge |
| 16 | Goal caption vs Exercise 2 | two values of N just outside | slows | fixed: the specks bullet cut; caption “At T5, outside the button, …” |
| 17 | Test table T6 | source of T6's N | minor | fixed: “(new here; N by Lesson 10.3's method, from buttonNormalForDot)” |
| 18 | T2, T4 | same N as W and K | minor | left: the Where column now cites Lesson 10.3's T2 and T4 |
| 19 | Section 3 | “step” not explained | minor | fixed: “step 0.01 (the neighbors' distance, Lesson 10.3)” |
| 20 | Section 4 | “first trace card” | minor | fixed: “step 1 of W's trace card” |
| 21 | Section 4 | “too long”, 0.243 | slows | fixed: “The app keeps x part² + y part² under 1, so that L can still be 1 long.” |
| 22 | Section 4 | trace bullet repeats the card | minor | fixed: “W's trace card: the whole chain at W, with 6 decimals.” |
| 23 | Exercise 1, T2 | “the other lines” | minor | fixed: “The x and height moves are unchanged (Section 3's T2 column)” |
| 24 | Exercise 1, T3/T4 | full chains repeat Section 3's x and height moves | minor | left: a hidden answer writes its whole calculation (rule 12) |
| 25 | Exercise 1, last line | why N's y part is 0 on the straight sides | minor | fixed: “(Lesson 10.3)”, “the screen away from the button” |
| 26 | Exercise 2 answer | “falls steadily” unsupported | slows | fixed: Lesson 10.39, Step 4's reason recalled (opposite signs on the left and bottom; the height part shrinks near the outline; T6: −0.35616) |
| 27 | Exercise 2 answer | square-corner sentence unused; specks bullet | slows | fixed: both cut |
| 28 | Record | “6 decimals: … 0.8999925” | minor | fixed: “(0.799985 with all of N's digits)” |

Left from review 1: #9 (the shared engine's popup of S calls a side of Lesson 10.1's rim triangle a leg) and #21 (an exercise's title is its question, by rule 18). No third review (rule 20).
