# Lesson delivery contract

## Purpose

A lesson teaches one small concept and adds one independently verifiable step toward the complete engine.

## Every lesson contains

1. **Position in the chain.** Only completed prerequisites are assumed.
2. **One outcome.** One sentence states what the learner will understand and implement.
3. **Definitions.** Every new term and acronym is explained in plain language.
4. **Source basis.** The source file or surviving public contract that requires the concept is named.
5. **Value trace.** Memory, math, coordinate, ownership, and thread lessons show exact input → operation → output → consumer.
6. **Manual work.** Exact Android-project files are named. The learner authors every line.
7. **Verification.** A build, focused test, device check, log, or trace directly tests code written in the lesson.
8. **Exercises.** Two to four questions have hidden answers. At least one targets the likely misconception.
9. **Completion gate.** Objective conditions plus explicit learner confirmation.

## Excluded lesson work

A lesson never asks the learner to record an already familiar baseline, maintain an observation journal or scratchpad, catalogue screenshots or videos, explain the transition framework, tour unrelated project code, or accept an unexplained diagram as evidence.

## Sealed-source rule

Before Lesson 60.13, a lesson may expose public or framework-fixed signatures, surviving app call sites, source-derived behavior contracts, tests, invariants, and small declarations needed to identify a type. It may not expose an original implementation body.

## Hints

Hints narrow progressively: restate the invariant; name the input and output; point to the prerequisite; identify the API or formula; identify the missing operation without writing the final implementation.

## Verification is not journaling

A verification step answers a concrete question about code just implemented. The learner reports failures when they occur. There is no standing requirement to preserve observations that are already understood.
