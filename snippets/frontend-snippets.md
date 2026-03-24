# Frontend Snippets

Reusable frontend snippets for personal projects and experiments.

---

## 1. Visually Hidden Utility

Use for accessible text that should be available to screen readers but not visible on screen.

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

---

## 2. Basic Button Reset

Use when styling a button from scratch.

    .button-reset {
      appearance: none;
      border: 0;
      background: none;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      cursor: pointer;
    }

---

## 3. Responsive Image

Basic responsive image pattern.

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }

---

## 4. Simple Container

A reusable content width wrapper.

    .container {
      width: min(100% - 2rem, 1200px);
      margin-inline: auto;
    }

---

## 5. Basic Focus Style

Use when ensuring keyboard focus is visible.

    :focus-visible {
      outline: 2px solid #000;
      outline-offset: 2px;
    }

---

## Purpose

This file grows into a practical library of small, reusable frontend utilities.
