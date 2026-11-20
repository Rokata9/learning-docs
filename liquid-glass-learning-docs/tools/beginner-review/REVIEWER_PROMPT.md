# Independent beginner review

Run this workflow when the learner explicitly requests a separate review. The author always runs the [ordinary delivery checks](../../AGENTS.md#before-delivery).

## Prepare the review

1. From the Liquid Glass project directory, extract the named lesson and all relevant states into a temporary directory outside the repository.

   ```bash
   python3 tools/beginner-review/extract_lesson.py \
     course/part-two/chapter-NN/lesson-NN-MM-name.html /tmp/review-NN-MM
   ```

   Use the actual lesson path, including `course/chapters/` for part one. For extra control states, pass `--extra /tmp/extra-NN-MM.json`. Each array entry has a zero-based `stepper`, a zero-based `step`, a `name`, and `js` that sets the state.
2. Give the prompt below to a reviewer who did not write the lesson. Fill in the lesson title and type, the extracted text and screenshots, and the relevant plan entry and follow-on lesson for checking the stated future use.
3. Save the findings under `reviews/lesson-NN-MM-beginner-review-YYYY-MM-DD.md`. If revision is part of the requested task, fix the issues that block or slow the reader and recheck the affected states.

## Prompt for the reviewer

Review **{LESSON}**, type **{TYPE}**, for an experienced programmer who is starting from zero in math, geometry, graphics, and shaders. Follow the [authoring rules](../../AGENTS.md). Return findings with evidence. Leave lesson files to the author.

**Materials**

- Extracted visible text and states: {TEXT}
- Screenshots: {SHOTS}
- Target and follow-on entries: {PLAN}

**Read in learner order.** Keep tooltips and former lessons out of the first pass. Read the hero, each step and its picture, the trace, and the exercises including the revealed answers. Read the tooltips afterward to see whether the main explanation relied on one.

- Can you say what the lesson will teach you to do? Does the opening name a later task, the result it will take, and what that changes on screen? Check the claim against the plan.
- At each step, can you identify the object in the diagram, explain why the action is taken, and tell what the result means? Flag the first sentence that needs a reread and identify the missing definition, fact, or connection.
- Can you explain the first diagram before reading the formula? Flag a proof that comes before a simple case, a symbol used before its meaning is visible, or a view that changes the point, scale, or displayed color without saying so.
- Follow each needed value back to its measurement, model choice, earlier result, or calculation. Can you reconstruct the main example from the visible inputs and intermediate values? Check units, scales, directions, and rounding across views, table, and answer.
- Check that the explanation identifies any estimate, what happens at the relevant boundary, and which claims come from the recording versus the shader model. Attempt the exercise using just the visible givens.
- Check the scope for the lesson type. A C lesson teaches one idea, a B lesson builds from earlier ideas, and an E lesson teaches one engineering practice. A reminder or a step in a worked example is part of the main idea. Point out any unrelated idea and where it distracts the learner.

**Report in reading order.** For each finding, give the section and state, quote the exact sentence or label, state the question a reader cannot answer, and suggest the smallest fix. Mark it **blocks** if the next step depends on it, **slows** if the reader must stop and reconstruct it, or **minor** if it leaves the explanation usable. Group repeated symptoms with the first affected location. List what you checked and any state you could not see.
