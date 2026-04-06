# Claude Workflow — Structure First

## Purpose

This workflow ensures problems are clearly structured before any solution or code is produced.

It is designed to:
- reduce unclear thinking
- avoid jumping into implementation too early
- create consistent, reusable approaches

---

## When to Use

Use this workflow when:
- a problem feels unclear or complex
- starting a new component or system
- defining architecture or structure
- reviewing an approach before building

Do not use for:
- quick answers
- simple fixes
- direct code generation

---

## Prompt Template

Break this down into a clear structure before solving.

Problem:
[insert problem]

Do not write code yet.

Output only:
1. Problem breakdown
2. Constraints
3. Recommended approach
4. Key decisions
5. Suggested structure

Keep the response practical, structured, and CMS-aware where relevant.

---

## Workflow Steps

1. Define the problem clearly
2. Run the prompt in Claude
3. Review the output structure
4. Identify key decisions
5. Move to implementation (Cursor)

---

## Output Expectations

A good response should:
- be clearly structured
- separate concerns (layout, data, performance, constraints)
- highlight trade-offs
- avoid jumping into code too early
- provide a reusable mental model

---

## Notes

This workflow is part of the broader system:

Think → Build → Store → Reuse

- Think → Claude (this workflow)
- Build → Cursor
- Store → patterns / examples
- Reuse → apply to future work

---

## Key Principle

Structure before solution.

Do not build until the problem is clear.