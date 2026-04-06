# Feature Card Pattern

## Purpose

This pattern defines a simple reusable feature card component for marketing or editorial pages.

It is designed to:
- present a small piece of content clearly
- support reuse across multiple pages
- remain flexible when optional content is absent

---

## Use Cases

- marketing feature blocks
- editorial highlights
- service or benefits cards
- landing page supporting content

---

## Core Structure

A feature card contains:

1. icon
2. heading
3. description
4. optional CTA

---

## Responsibilities

The card is responsible for:
- presenting content clearly
- handling optional CTA gracefully
- maintaining a predictable internal structure

The parent layout is responsible for:
- grid or row placement
- spacing between multiple cards
- responsive layout context

---

## Recommended Structure

BEM structure:

- `.feature-card`
- `.feature-card__icon`
- `.feature-card__heading`
- `.feature-card__description`
- `.feature-card__cta` (optional)

---

## Design Rules

- keep the component simple
- do not make the card responsible for page layout
- ensure the CTA can be omitted without breaking spacing
- use semantic HTML
- keep heading level adaptable to page context

---

## Accessibility

- use meaningful heading structure
- ensure CTA text is descriptive
- do not rely on icon alone to communicate meaning
- preserve readable spacing and contrast

---

## Reusability

This pattern should:
- work standalone
- work inside a parent grid
- support different icon/content combinations
- remain useful without JavaScript

---

## Key Principle

The card should be self-contained, but layout-agnostic.

It should manage its own content, not the surrounding layout.