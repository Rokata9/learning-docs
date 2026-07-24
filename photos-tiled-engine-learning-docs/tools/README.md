# Verification tools

Run from the repository root:

```bash
node tools/verify-course.mjs .
node tools/verify-lesson.mjs path/to/lesson.html
```

The course verifier checks structure and progress state. The lesson verifier enforces the minimum standalone HTML and static syntax-coloring contract.
