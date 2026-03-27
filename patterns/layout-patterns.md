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

## 8. Weekly Planner Grid Pattern

Use for:
- Weekly planning layouts
- Dashboard-style personal tools
- Structured card-based planning UIs
- Multi-column content blocks with repeated sections
- Any repeated-card layout needing consistent rhythm

Structure:
- One main page heading (`h1`)
- Intro or supporting paragraph
- A labelled planner section (`h2` or `h3`)
- A `.planner-grid` wrapper (named class, not DOM-dependent)
- Repeated day cards using `article`
- Nested sections inside each card for priorities, notes, or custom slots
- Optional: a footer or summary row beneath the grid

Recommended layout:
- 1 column on mobile
- 2 columns on tablet
- 4 columns on desktop (7 for a full week if space allows)

Spacing and tokens:
- Use spacing tokens for gap, padding, and margin — avoid hardcoded values
- Maintain consistent internal card padding across all breakpoints
- Use a shared card height only if alignment across rows is required

Card structure (per day):
- Card heading (day name or label)
- Primary content slot (e.g. priorities list)
- Secondary content slot (e.g. notes or free text)
- Optional: status indicator, tag, or completion marker

Naming conventions (replace planner/class prefix where appropriate dependent on project context):
- `.planner-grid` — outer grid wrapper
- `.planner-card` — individual day or unit card
- `.planner-card__heading` — card title
- `.planner-card__priorities` — primary content area
- `.planner-card__notes` — secondary content area
- Extend with modifiers: `.planner-card--today`, `.planner-card--empty`

Reusability notes:
- The grid wrapper is not week-specific — it can hold any repeated card unit
- Cards should be fully self-contained with no layout dependency on siblings
- Slot names (priorities, notes) can be renamed or extended per use case
- Pattern works in CMS-driven or template-based environments without JS

Accessibility:
- Use `article` for each card (self-contained, meaningful unit)
- Ensure heading hierarchy is logical within each card
- Avoid relying on colour alone for status or state

Pattern notes:
- Use a named grid class instead of styling by DOM structure
- Keep cards visually consistent and self-contained
- Separate internal content areas clearly
- Use spacing tokens for rhythm and consistency
- Review in browser before treating as complete
- Do not couple this pattern to weekly planning specifically — name slots generically if reusing across contexts

Related example:
- `examples/weekly-planner/`

## Purpose

This file grows over time as new layout patterns are discovered and refined.
