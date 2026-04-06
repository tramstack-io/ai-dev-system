# Frontend System

## Purpose
This document defines how frontend should be built within this system.

It establishes consistent rules for:
- structure
- layout
- accessibility
- reusability

---

## Core Principles

### 1. Mobile First
All layouts should start from mobile and scale up.

---

### 2. Simplicity First
- Prefer simple solutions over complex ones
- Avoid overengineering
- Build only what is needed

---

### 3. Reusability
- Components and layouts should be reusable
- Avoid one-off implementations
- Extract patterns where possible

---

### 4. Consistency
- Use consistent spacing, structure, and naming
- Follow existing patterns before creating new ones

---

### 5. Accessibility
- Use semantic HTML
- Ensure logical heading structure
- Provide meaningful alt text
- Maintain readability and contrast

---

## Layout Approach

- Use CSS Grid or Flexbox
- Follow mobile → tablet → desktop progression
- Maintain consistent spacing system
- Avoid layout hacks

---

## Component Approach

- Components should be:
  - modular
  - predictable
  - easy to reuse

- Avoid tightly coupled components
- Keep structure clean and readable

---

## Pattern System

Patterns define how things are built.

Examples:
- layout patterns
- dashboard patterns
- grid systems

Before building:
→ check if a pattern already exists

After building:
→ extract reusable logic into a pattern

---

## Workflow

The standard workflow is:

Think → Build → Store → Reuse

- Think → define structure (AI)
- Build → implement (Cursor)
- Store → patterns/examples
- Reuse → apply to future work

---

## Key Rule

Do not build random solutions.

Build within the system.