# Frontend Workflows

Reusable step-by-step workflows for frontend development using AI-assisted tools.

---

## 1. Build Workflow

Use when:
- Starting a new component
- Creating a new layout
- Turning an idea into code

Steps:
1. Define the goal clearly
2. Ask Claude to reason through structure, accessibility, and approach
3. Build in Cursor
4. Review and refine
5. Store reusable learnings in GitHub

---

## 2. Debug Workflow

Use when:
- A layout breaks
- Behaviour is inconsistent
- A component is not working as expected

Steps:
1. Describe the symptom clearly
2. Ask Claude to help identify likely root causes
3. Use Cursor to inspect and fix the actual file
4. Test the fix
5. Save the pattern or lesson if reusable

---

## 3. Performance Workflow

Use when:
- A page feels slow
- Rendering is inefficient
- Assets or layout shifts need investigation

Steps:
1. Identify the performance issue
2. Ask Claude for diagnosis framing and likely priorities
3. Use dev tools or Lighthouse to validate
4. Apply changes in code
5. Document any useful optimisation pattern

---

## 4. Accessibility Workflow

Use when:
- Building new UI
- Reviewing a component
- Improving keyboard or screen reader support

Steps:
1. Check semantic structure first
2. Ask Claude to review the pattern and interaction model
3. Implement improvements in Cursor
4. Test keyboard flow and labels
5. Save the final pattern if reusable

---

## 5. Example Workflow: Weekly Planner

1. Define the layout goal clearly
2. Use Cursor to draft HTML structure
3. Review semantics before accepting
4. Generate CSS with clear responsive requirements
5. Refine selectors for reusability
6. Review visually in browser
7. Extract reusable pattern into `patterns/`
8. Commit once the build + pattern are complete

---

## 6. Example Workflow: Feature Grid Variation

1. Create folder and files manually
2. Generate HTML in Cursor
3. Refine structure if AI returns only card units
4. Generate CSS in Cursor
5. Review in browser
6. Use multi-file prompting to evolve the component safely
7. Store the reusable pattern in `patterns/`
8. Commit when the example and pattern are both complete

## Purpose

This file grows into a library of repeatable frontend workflows that connect reasoning, execution, and memory.
