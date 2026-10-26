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
