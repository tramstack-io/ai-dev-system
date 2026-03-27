# Claude vs Cursor

How I decide which AI tool to use in my frontend workflow.

---

## Use Claude for

- improving patterns
- refining system documentation
- architecture and structure thinking
- naming decisions
- reusable workflow design
- reasoning before implementation
- but will also attempt to write code here too

Claude is best when I need:
- better thinking
- better structure
- better system quality

---

## Use Cursor for

- writing HTML and CSS
- editing real files
- generating component scaffolds
- refining existing code
- applying patterns in practice
- working inside repo context

Cursor is best when I need:
- execution
- file-aware edits
- code generation in context

---

## Core Rule

Claude improves the system.  
Cursor executes inside the system.

---

## Practical Decision Guide

### If I need to:
- think through a reusable pattern → use Claude
- update a markdown system file → use Claude first
- build or refine a component → use Cursor
- edit HTML/CSS in a real file → use Cursor
- decide naming, structure, or reusability → use Claude first
- test a pattern through implementation → use Cursor

---

## Anti-Patterns

Do not use Claude for:
- direct repo-aware coding assumptions
- pretending it can see files it cannot access

Do not use Cursor for:
- vague ideation
- large strategic questions
- system design without constraints

---

## Working Loop

1. Think / refine in Claude
2. Store in GitHub
3. Build in Cursor
4. Review in browser
5. Extract reusable pattern
6. Store again