# Future-chat handoff prompt

Use this file when the current chat approaches its context limit.

## Attachments for the new chat

Attach these files:

1. **The latest full ZIP of this learning repository.** Do not attach only the most recent incremental lesson package. The new chat needs `COURSE_STATE.json`, the curriculum, earlier prepared lessons, and the repository rules together.
2. **The original untouched Photos Android project ZIP.** The new chat needs the exact Gradle versions, surviving app call sites, and sealed reference implementation to design accurate contracts and source coverage. The assistant may inspect the reference privately, but it must not expose original implementation bodies before Lesson 60.13.
3. **Your global `AGENTS.md`.** This preserves the complete explanation, visualization, terminology, grading, and QA preferences.

A ZIP of the current rebuild branch is optional for ordinary next-lesson generation. Attach it when asking the new chat to review, debug, or compare code you have already written. The old Liquid Glass repository is not required; this learning repository now contains its own course rules.

## Pasteable prompt

```text
We are continuing my Photos tiled-engine manual reconstruction course in a new chat.

I attached:
1. the latest full ZIP of the canonical learning repository;
2. the original untouched Photos Android project ZIP;
3. my global AGENTS.md;
4. optionally, my current rebuild-branch ZIP when code review is needed.

Treat the attached learning repository as the source of truth. Start by reading, in this order:
- global AGENTS.md;
- learning-repository/AGENTS.md;
- learning-repository/COURSE_STATE.json;
- learning-repository/curriculum/lesson_delivery_contract.md;
- the current chapter and the two lessons nearest the prepared frontier;
- only the curriculum, source-inventory, and coverage-matrix sections needed for the next lesson.

Use COURSE_STATE.json for progress. Do not revive any superseded 216-lesson or observation-led curriculum. The course may split lessons further whenever one lesson would require an undefined term, object, unit, coordinate space, ownership rule, thread, or independent algorithm.

Scope is only the tiled-engine C++ implementation and the Kotlin/build code that directly controls or supports it. Do not teach the transition framework, photo grid, unrelated app architecture, baseline observations, journals, scratchpads, or project tours. I am an experienced general programmer but a total beginner in C++, image processing, GPU graphics, JNI, native memory, and low-level concurrency. Define every unfamiliar term before using it.

I write 100% of the Android-project implementation manually. Do not provide complete project-ready implementation bodies, replacement files, patches, complete test bodies, or original sealed implementation bodies before Lesson 60.13. Provide definitions, contracts, exact value traces, framework-required declarations, verification steps, progressive hints, and exercises.

For the next lesson, inspect only the exact original-project files needed to verify its contract. Preserve source contradictions instead of smoothing them over. Prepare one standalone light-theme desktop HTML lesson, update all progress/navigation files consistently, validate the repository, and return an incremental ZIP rooted at photos-tiled-engine-learning-docs/. Mark a lesson complete only after I explicitly say I am ready with it.

End every visible assistant message with:
Estimated remaining context window: ~N tokens.
```

## State rule

The prompt intentionally does not hardcode the current lesson number. The new chat must read `COURSE_STATE.json`, because progress may have advanced after this file was created.
