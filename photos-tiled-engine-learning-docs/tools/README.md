# Learning-document verification helpers

From the repository root:

```text
node tools/verify-repository.mjs
```

This checks the required repository structure, all 24 chapter directories, exactly 216 `[Learner]` curriculum markers, removal of the old 50/50 markers, absence of Android/native source files and a `tiled-engine` directory, and enabled local HTML links.

Check one HTML artifact:

```text
node tools/verify-lesson.mjs photos-tiled-engine-course.html --links-only
```

Capture its initial state when Chromium is installed:

```text
node tools/verify-lesson.mjs \
  photos-tiled-engine-course.html \
  verification/course-home-1920x1080.png
```

For an intentionally ultrawide artifact:

```text
node tools/verify-lesson.mjs \
  course/chapters/chapter-NN/lesson-NN-NN-name.html \
  verification/lesson-NN-NN-5120x1440.png \
  --width=5120 \
  --height=1440
```

The helpers verify learning artifacts only. They never read or modify the Android project.
