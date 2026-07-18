# Verification helper

From the repository root:

```bash
node tools/verify-lesson.mjs \
  course/chapters/chapter-01/lesson-01-01-visible-ingredients.html \
  verification/lesson-01-01-1920x1080.png
```

The script checks enabled local links. When Chromium is available, it also captures the initial state at `1920×1080`.

Interactive states still need a manual browser check or a purpose-built driver because a plain screenshot does not move sliders or press buttons.
