# Full-replacement migration

This package fully replaces every earlier Photos tiled-engine learning-repository version.

## Keep

Keep the existing repository's `.git/` directory.

## Replace

Replace every other repository file and directory with this package, then run:

```bash
git add -A
```

The `-A` records obsolete-file deletions as well as additions.

## Obsolete material that must disappear

- transition-framework lessons;
- observation-led native-viewer Lessons 1.1 and 1.2;
- fixed-count curriculum plans;
- `learner-work/`;
- observation worksheets;
- recording and screenshot folders;
- journals, scratchpads, evidence matrices, and implementation ledgers;
- prepared or pending status from superseded plans.

## Android project starting state

Before starting Lesson 1.1 on the rebuild branch, delete the original `tiled-engine/` directory and remove both stale root references: `include(":tiled-engine")` from `settings.gradle.kts` and `implementation(project(":tiled-engine"))` from `app/build.gradle.kts`. Keep the reference implementation sealed elsewhere.

## Resulting learning-repository state

- 0 lessons completed;
- Lesson 1.1 prepared;
- Lesson 1.1 awaiting learner implementation and confirmation;
- the original native implementation stays sealed until Lesson 60.13.
