# Layout Patterns

Reusable layout systems and patterns for frontend development.

---

## 1. Basic Page Layout

- Header
- Main content
- Footer

Use semantic HTML:
- `<header>`
- `<main>`
- `<footer>`

---

## 2. Flexbox Layout

Use for:
- Horizontal alignment
- Simple component layouts

Example:

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

---

## 3. CSS Grid Layout

Use for:
- Page structure
- Complex layouts

Example:

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

---

## 4. Responsive Layout Strategy

- Mobile-first approach
- Use media queries:

    @media (min-width: 768px) {
      /* tablet */
    }

    @media (min-width: 1024px) {
      /* desktop */
    }

---

## 5. Accessibility Considerations

- Maintain logical DOM order
- Avoid layout-only divs where possible
- Ensure keyboard navigation works

---

## 6. CSS Animations

- Use modern techniques
- Smooth UI, object and background elements
- Ensure performance not impacted

---

## Purpose

This file grows over time as new layout patterns are discovered and refined.
