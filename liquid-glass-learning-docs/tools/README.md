# Verification helper

This helper is **browser-only**. It checks HTML lesson files (local links, optional Chromium screenshot). It does not build, run, or inspect `/Users/rosen/Code/LiquidGlassLab-iOS`.

From the Liquid Glass project directory:

```bash
node tools/verify-lesson.mjs \
  course/chapters/chapter-01/lesson-01-01-visible-ingredients.html \
  /tmp/lesson-01-01-1920x1080.png
```

The script checks enabled local links. When Chromium is available, it also captures the initial state at `1920×1080`.

Interactive states still need a manual browser check or a purpose-built driver because a plain screenshot does not move sliders or press buttons.

Keep screenshots in a temp folder outside the repository and delete them after QA. Run the other [delivery checks](../AGENTS.md#before-delivery) too. Verify Swift explorers in Xcode with the previews and the iPhone 16 Pro target.

## Optional independent beginner review

When the learner explicitly asks for a separate review, use the [reviewer prompt](beginner-review/REVIEWER_PROMPT.md). It checks the lesson’s first read, number sources, and later use.

- `extract_lesson.py` writes what the learner can read into a temp folder outside the repository:
  - every stepper state's caption, picture labels and tooltips;
  - the whole page with hidden answers open;
  - screenshots.

  It needs Python 3 and Playwright: `python3 -m pip install playwright && python3 -m playwright install chromium`.

  It reads steppers by their `.stepnav` Back/Next buttons and tooltips through the page's `tipStore`. That is the Chapter 10 template; older pages give only the page text.
