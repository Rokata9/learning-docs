# Start a Liquid Glass course chat

Copy this into a new chat and change the job line.

```text
Read liquid-glass-learning-docs/NEW_CHAT_PROMPT.md and follow it.
Job: Generate the next lesson.
```

Use the local checkout if available. In a cloud chat, use `Rokata9/learning-docs`, branch `master`. Begin with [AGENTS.md](AGENTS.md) for the authoring rules and [CURRENT_STATE.md](CURRENT_STATE.md) for lesson progress, input values, and lab paths. Read the actual files. If the job is missing, ask which job to do. For an explicit request such as revising the rules, follow that request directly.

## Generate a lesson

“Generate lesson N.M” means that lesson only. For “generate the next lesson,” list the HTML files under `course/part-two/` and take the first entry in [part two’s plan](curriculum/safari_spring_menu_plan.md#4-the-new-plan) without a page. Verify any entry marked as kept from part one in its existing location.

- Read the plan introduction to section 4, the target entry and nearby entries, its layer in section 1, the applicable facts in section 4.6, and any relevant open items in section 5. Check the lesson that will use the target’s result, even if it is further down the plan.
- Read the previous lesson and the newest part-two HTML for the page kit. For `B` and `E`, read the relevant lab files and chapter screen and check that the lab and Xcode are available. Report any missing prerequisite and do the work that can be verified with the available files. Identify anything blocked by the missing prerequisite.
- Check the prior lesson’s state notes for teaching gaps before reusing its explanation or numeric shorthand.
- Use the [authoring workflow](AGENTS.md#design-the-lesson-before-writing-html), then deliver the files for the [lesson type](AGENTS.md#lesson-types-and-scope). Run the [delivery checks](AGENTS.md#before-delivery). Record the new lesson’s file, example inputs, result, first later use, and next planned lesson in [CURRENT_STATE.md](CURRENT_STATE.md).

## Answer questions about a lesson

Read the named lesson, including the section in question and the script that draws it if relevant. [Answer in chat first](AGENTS.md#when-the-learner-asks-a-question). If a section is inaccessible, say which and answer from the evidence available. When the question reveals a defect, fix that lesson, rerun the affected checks, and update its state note if the result, inputs, or steps changed. Keep the task on the lesson the learner asked about.

## Deliver

- Edit the local checkout in place. Commit or push only when asked. In a cloud session without a shared checkout, fetch `master` and deliver one patch containing the task’s changes. Give the base commit and the `git apply <file>.patch` command from the repository root. If a required prior patch is missing, identify it.
- List the changed files, check results, and any unresolved conflict that affects the lesson. Keep the progress line after a generated lesson as specified in [CURRENT_STATE.md](CURRENT_STATE.md#the-course). Supply an archive only if requested.
- Continue in the current chat. If a handoff is needed, record finished work, open work, and relevant files so the lesson can be resumed.
