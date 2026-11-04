# Lesson 10.8 — fresh beginner reviews (2026-11-04)

Fresh agents that did not write the page reviewed it in turn (`AGENTS.md` rule 20, `tools/beginner-review/REVIEWER_PROMPT.md`; at most two rounds since 2026-11-04). Extraction with headless Chrome and an injected driver (no Playwright on this Mac).

| Review | Blocks | Slows | Minor | New ideas counted |
|---|---|---|---|---|
| 1 | 1 | 5 | 3 | 1: seen straight on, the spin turns the teal line as one straight piece around Gx (Step 3); Step 4 is its consequence |
| 2 (the final list) | 1 | 6 | 3 | 1 (plus a side fact, “the straight-on drawing draws the angle as it is”, which it asked to drop; dropped) |

## Review 1 — fixed

- Block #7: “turns by the same angle, so it stays on one line” did not rule out a line that stretches while it turns. Step 3 now says that the spin is the same kind of turn as Lesson 10.3's turn slider (the whole walk turned around its start), and Step 4 applies Lesson 10.3's fact that such a turn keeps lengths.
- Slows: #3 Lesson 10.6 had shown the 90° case (a quarter turn): Step 1 now says so with a ⓘ, and asks about every spin; #4 the flat T tooltip no longer prints 0.953 × 142 before Step 4; #5 and #6 see Review 2; #9 the traced value: the start is worked out (0.953 × 142 px, Lesson 10.7), the spin's value is measured on the drawing.
- Minor: #1 the hero caption says why its pixel numbers are smaller; #2 “Why ask?” names the path and the corner between the x line and the teal line at Gx.
- Left: #8 (at spin 40° the angled view draws T near the x line): a view effect of that angle, named here only.

## Review 2 (the final list) — fixed, and what is left

- Block #4: the same angle for every point rested on the wheel picture. Step 3 now states it as the spin's definition (Lesson 10.6's slider turns the teal line by its angle: every point by that angle), and the spin ⓘ says the same; “solid” is gone.
- Slows, fixed: #2 T's path arc no longer shows in Step 2's flat drawing; #3 “drawn 0.953 to the right of Gx” → “drawn 0.953 → from Gx”; #5 “goes round Gx” → “turns about Gx”, and the pale paths say Lesson 10.9 looks at their shape; #6 the sentence that the drawing draws angles as they are was removed (the argument does not need it), also from the ⓘ; #9 the Section 2 heading no longer names a fixed spin (“after any spin”); #10 Exercise 2's answer adds the x part 0 and 67.663 ÷ 142 = 0.4765.
- Minor, fixed: #7 Step 4 says what is measured (the distance between the drawn dots Gx and T); #8 the flat drawing's title says what minus means on the → ruler.
- Left: #1 (two sentences run together in two tooltips) is an extraction artifact: on the page each `<pre>` block ends its line.
- Not re-reviewed after these fixes (rule 20: two fresh reviews at most).
