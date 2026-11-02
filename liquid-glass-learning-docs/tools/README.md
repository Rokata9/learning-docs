# Verification helper

This helper is **browser-only**. It checks HTML lesson files (local links, optional Chromium screenshot). It does not build, run, or inspect `/Users/rosen/Code/LiquidGlassLab-iOS`.

From the repository root:

```bash
node tools/verify-lesson.mjs \
  course/chapters/chapter-01/lesson-01-01-visible-ingredients.html \
  /tmp/lesson-01-01-1920x1080.png
```

The script checks enabled local links. When Chromium is available, it also captures the initial state at `1920×1080`.

Interactive states still need a manual browser check or a purpose-built driver because a plain screenshot does not move sliders or press buttons.

Screenshots go to a temp folder outside the repository and are deleted after QA (`AGENTS.md` rule 21). `tools/verify-lesson.mjs` stays as-is. Swift explorers are verified in Xcode (`#Preview`, then iPhone 16 Pro), not by this script.

## Fresh beginner review (`tools/beginner-review/`)

Before a new lesson or a revision is delivered, a separate agent that did not write it reads it as a total beginner and lists every claim the page does not answer (`AGENTS.md` rule 20).

- `extract_lesson.py` writes what the learner can read into a temp folder outside the repository:
  - every stepper state's caption, picture labels and tooltips;
  - the whole page with hidden answers open;
  - screenshots.

  It needs Python 3 and Playwright: `python3 -m pip install playwright && python3 -m playwright install chromium`.

  It reads steppers by their `.stepnav` Back/Next buttons and tooltips through the page's `tipStore`. That is the Chapter 10 template; older pages give only the page text.
- `REVIEWER_PROMPT.md` has the steps and the prompt for the fresh agent.
- The reviewer's final list is saved as `reviews/lesson-NN-MM-beginner-review-YYYY-MM-DD.md`.
