# AGENTS.md — Liquid Glass Learning Documents

The rulebook for the interactive learning documents. Keep this file short. Merge new rules into existing ones. Delete superseded rules. A rulebook too long to remember is worse than a short one.

## Scope and files

- Course home: `liquid-glass-course.html`. Chapter hub: `lesson-[chapter-name].html`. Sub-lesson: `lesson-[chapter-number]-[lesson-number]-[lesson-name].html`.
- Every lesson is one standalone HTML file that works from `file://`: inline CSS, JavaScript, SVG. No external libraries or CDNs.
- iOS source lives in the sibling repo `/Users/rosen/Code/LiquidGlassLab-iOS`. Never create `ios/` or `android/` here. When a revision changes iOS code, state the exact Swift target path; when it changes none, say so.
- No ZIP archives unless the learner asks. Edit the two repos in place.
- Desktop only: verify at `1920×1080` or larger. Light theme only for lessons.
- Lesson status changes only on explicit learner confirmation. `CURRENT_STATE.md` is the authoritative progress source.

## Language — the top rule set

1. Plain English for a non-native speaker. Short sentences. One idea per sentence. No idioms. A colour name used as an object name ("the light-green curve") must mean one object in the whole lesson.
2. Define every term at first use, in the same sentence. Add a small `ⓘ` tooltip for anything that may need a refresher: an older formula, an older lesson's object, a chosen constant. Tooltips carry reminders only; the page must be fully understandable without opening them. A word that could describe a graph or the picture (linear, straight, smooth) must say which one it describes. Each section re-anchors the objects it draws in a legend beside its first picture (colour swatch + one line); never rely on a definition from another section. Do not describe how the page computes a value (search, bisection) unless the learner needs it.
3. One object, one name. Never rename a thing mid-lesson. No metaphor names such as seat, stick, or landing: call the object by its plain name — pixel, arrow, output position.
4. Never point back vaguely. Forbidden patterns: "between the two", "the former", "that value", "those moves". Repeat the object's name instead.
5. Every purpose statement is followed by its reason in the same or the next sentence. "We multiply by falloff **because** …" Nothing is taken for granted. When a lesson picks a specific tool where an obvious simpler one exists (smoothstep over a straight line), state why the simple one fails and show the comparison picture: an in-place toggle on content that reveals the difference, with a magnifier when the difference is small. Say with a number how big the difference is and on which content it shows.

## Visuals first

6. A picture carries the explanation; prose captions the picture. If a paragraph describes something a picture could show, draw the picture. Prefer interactive pictures (toggle, drag, slider, stepper) over paragraphs. Show examples instead of listing them: if the text names real content (text rows, icons), a picture shows it.
7. Label every drawn element inside the picture: rings, arrows, points, regions. If a label does not fit, put a numbered tag on the object and name the tag in the adjacent text on the same screen. The reader must never guess which drawn object a number or sentence refers to.
8. Text must match the picture exactly. If the text says "three arrows", count the arrows in the picture before shipping. Plot only real values: draw a jump as two separate pieces, never as a vertical connector, and put no mark on a connector. Every point or object named in the text or a readout is drawn and labelled in the picture.
9. A sequence that builds up gets a stepper: one new object or operation per step, and the picture must visibly change at every step. A caption-only change is a failed step. The picture must also render at full readable size at `1920×1080` (SVG labels ≥ 14 px on screen); a layout that squeezes a wide diagram into a narrow column fails.
10. Every plotted point is clickable: a tooltip shows its name, role, and coordinates in their named coordinate space. Clicking a point must not move or select anything else. Support Enter/Space, close button, outside click, Escape. Keep the popup inside the viewport.
11. Construction strokes on the orange/navy checker need a dark halo plus a non-checker hue (cyan, lime, pink, violet, white). Solid strokes, not dashes.

## Formulas — always fully expanded

12. Every displayed calculation shows, in order: the named formula → the substitution with every input visible → every intermediate value → the result → what consumes the result. Never print only a result. Each “=” does exactly one operation, and every line is rounded the same way (3 decimals by default; squares that feed a √ are exact), so a calculator reproduces every line — everywhere a number appears: text, generated readouts, tooltips, canvas labels, table cells. The reader never does arithmetic in their head outside the exercises.
13. Attach a `ⓘ` provenance icon to any value that comes from elsewhere: an earlier lesson, a slider, a fixed constant, a previous step. One line inside: origin, representation, consumer.
14. When an older formula is reused (smoothstep, length, source-over), refresh its mechanics right where it is used: inline if short, in a `ⓘ` tooltip if long. State what goes in and what comes out. A pointer such as “card 8” or “Section 3” is not a refresher: the formula and the source of each of its numbers appear on the same screen.
15. A claim of change or shape ("grows", "stays straight", "bends", "smooth") is immediately followed by the numbers or the picture that prove it. Show a rate ("slope", "how fast") as the drawn difference between neighbouring samples at a stated step, never as a bare rate such as −5, and show what the rate changes in the picture. Numbers that prove a shape are drawn too (the gap on the picture); an effect word (break, corner) is defined by pointing at it in a picture.

## Lesson shape

16. One main graphics idea and at most one main mathematical idea per lesson.
17. Short lessons: one concept, then stop. That is why the course has 216 lessons. The idea must be complete after the first two sections. Do not prove side facts (why a curve has no corner, where a peak sits, an exact region shape): a side fact gets one sentence, one picture, or a pointer. Q&A answers stay short and never grow into proof rounds. No warm-up sections: one preview sentence in the hero, then the point. Each later section must add a new object, a new operation, or a new consumer — never restate earlier content. A requested rewrite redesigns the lesson from this rulebook: do not keep the old section skeleton, the old steppers, or proofs already taught in an earlier lesson (point to that lesson in one sentence). Only the rendering engine and the verified numbers may carry over.
18. Required scaffold, in order: visual hero → the idea in pictures → one fully traced value → interactive lab → short code excerpt → coding challenge → 2–4 exercises with hidden answers (each hidden answer draws the question and draws the reason) → copyable Markdown record. State when the browser model differs from iOS. Separate what we see from what the framework does internally; label estimates as estimates.
19. Keep each walkthrough state self-contained: repeat the current values beside the formula that consumes them, so the reader never scrolls back to decode a substitution. When a derivation puts one formula into another, show the inserted formula on the same screen, color the inserted part like its source, do one move per line named in words, and check every line in a numbers column.

## Verification — non-negotiable, in this order

20. Cold-read audit first, as a total math beginner who knows only arithmetic and the learner-confirmed lessons: the first sentence, the first two sections, the first formula, and the longest stepper state. Do this pass on every lesson and every revision. Any hesitation means rewrite before technical QA. Working controls and correct arithmetic do not rescue a lesson a beginner cannot follow.
21. QA screenshots, drivers, and scratch files live in a temp folder outside both repos and are deleted after QA; never commit them. Then: JavaScript syntax check, no Markdown backticks in visible HTML, browser QA at `1920×1080`: initial state, every stepper state, longest caption, sliders, toggles, prediction choices, challenge inputs, every exercise opened, popups at screen edges, no horizontal page overflow (tables, code blocks, wide figures), and the picture-text match (rule 8).
22. End every lesson-related response with `Course progress: X of 216 lessons completed.` (the learner-confirmed count from `CURRENT_STATE.md`), then a labelled estimate of remaining context.

## iOS patches, when a lesson ships Swift

23. SwiftUI layout containers only. Previews: light then dark, `412 × 915` pt, vertically scrollable, kept in the file they verify. `Color(#colorLiteral(...))` at each use site. Never `ultraThinMaterial`/`glassEffect` as the glass implementation. Test device: iPhone 16 Pro.

## Self-improving loop

24. After every learner correction or confusion report: (a) name the exact sentence or picture that failed; (b) if the failure is general, merge one short prevention rule into this file and note the failure → rule link in `CURRENT_STATE.md` and the handoff; (c) merge overlapping rules; (d) delete rules that stopped firing. Do not manufacture a rule from a message that contains no new evidence.
25. Before packaging, re-read rules 1–22 and confirm each one passes. "All guidelines pass" is non-negotiable; a failed rule means rewrite, not a note.
