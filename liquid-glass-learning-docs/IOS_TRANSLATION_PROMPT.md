You are executing the Liquid Glass Android → iOS translation.

Docs (edit in place, on the user’s git branch):
  /Users/rosen/Code/learning-docs/liquid-glass-learning-docs
iOS lab (create/write only here):
  /Users/rosen/Code/LiquidGlassLab-iOS
Android lab (read-only 1:1 source):
  /Users/rosen/Code/LiquidGlassLab

Read, in this order, and then do exactly one step:

1. This file.
2. TRANSLATION_PROGRESS.md — honor `next_step`. Do not skip. Do not run a later id.
3. IOS_TRANSLATION_PLAN.md — only the section for that step id, plus Key Decisions / type map if PLATFORM_MAP.md is missing.
4. PLATFORM_MAP.md (required after A1).
5. CURRENT_STATE.md — honor iOS-equivalent learner progress (40/216 after A2). Never restore 95/216.
6. Only the files that step lists as reads.

Execute `next_step`. Follow that step’s writes and acceptance box.

Rules:
- One step per chat. Stop when that step is accepted.
- Do not copy this docs folder. Edit in place.
- Do not change graphics pedagogy, formulas, teaching pixels, or HTML/JS labs.
- Swap platform nouns and APIs using PLATFORM_MAP.md only.
- Shader pixel strings stay 1:1 (lab MSL). Host glue is Swift.
- Teaching SwiftUI colors are `Color(#colorLiteral(...))` **at each draw/use site**, duplicated on purpose, not `Color(hex:)` and not a named `private let` that call sites pass. See USER_PREFERENCES.md and PLATFORM_MAP.md.
- Test device is iPhone 16 Pro. Do not substitute another model.
- Never use ultraThinMaterial / glassEffect as the glass implementation.
- Do not open AGENTS.md unless the step is B1, B2, or B3.
- Do not open other chapters or verification PNGs.
- After edits, grep just this step’s files for Android/Kotlin/Compose/AGSL/Pixel 8.
- Then update TRANSLATION_PROGRESS.md: append the finished id to `completed`, set `next_step` to the following id in the plan’s session order, write a two-line note of what changed.
- Reply with: step id finished, next_step now, and the user one-liner to paste in a new chat.

If TRANSLATION_PROGRESS.md says next_step is DONE, do not edit. Say the translation is complete.
