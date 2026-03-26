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

## 7. Responsive Card Grid Pattern

Use for:
- Content cards
- Promo blocks
- Feature grids
- Editorial or product teaser layouts

Structure:
- A parent section with a heading
- A grid wrapper
- Repeated card items inside the grid
- Each card can use `article` if it represents a self-contained piece of content

Recommended layout:
- 1 column on mobile
- 2 columns on tablet
- 4 columns on desktop

Example HTML structure:

    <section>
      <h2>Items</h2>
      <div class="card-grid">
        <article class="card">
          <h3>Card title</h3>
          <p>Summary or body text.</p>
          <p><a href="#">Optional link</a></p>
        </article>
      </div>
    </section>

Pattern notes:
- Use CSS Grid on the wrapper
- Keep cards simple and self-contained
- Use a max-width container so layouts do not stretch too wide
- Use consistent spacing variables
- Add subtle hover styles only if appropriate
- Ensure focus states remain visible for keyboard users

Related example:
- `examples/responsive-card-grid/`

---

---

## 8. Weekly Planner Grid Pattern

Use for:
- Weekly planning layouts
- Dashboard-style personal tools
- Structured card-based planning UIs
- Multi-column content blocks with repeated sections

Structure:
- One main page heading
- Intro/supporting paragraph
- A planner section with a heading
- A reusable `.planner-grid` wrapper
- Repeated day cards using `article`
- Nested sections for priorities and notes

Recommended layout:
- 1 column on mobile
- 2 columns on tablet
- 4 columns on desktop

Pattern notes:
- Use a named grid class instead of styling by DOM structure
- Keep cards visually consistent and self-contained
- Separate internal content areas clearly
- Use spacing tokens for rhythm and consistency
- Review in browser before treating as complete

Related example:
- `examples/weekly-planner/`

## Purpose

This file grows over time as new layout patterns are discovered and refined.
