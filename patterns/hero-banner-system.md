# Hero Banner System

## Purpose

This pattern defines how to structure a homepage hero banner in a CMS-driven environment where performance, accessibility, and editor flexibility must all be balanced.

It is designed for scenarios where the hero is likely to be:
- the largest visual element on the page
- the LCP candidate
- managed through CMS content
- reused across campaigns

---

## Use Cases

- Homepage hero
- Campaign landing page hero
- Editorial landing page hero
- Image-first or video-first promotional banner

---

## Core Problem

A hero banner in a CMS-driven environment must solve three things at once:

1. Performance
2. Accessibility
3. Content flexibility

If one of these is ignored:
- performance suffers
- accessibility breaks
- editors lose confidence or layouts become unstable

---

## Core Concerns

### 1. Performance
The hero media is often the LCP element.

Risks:
- oversized images
- wrong formats
- layout shift
- video blocking render
- lack of preload strategy

---

### 2. Accessibility
The hero often contains key messaging and CTA content.

Risks:
- missing or incorrect alt text
- poor contrast
- autoplay video without motion consideration
- weak CTA labelling
- inaccessible focus states

---

### 3. CMS Flexibility
Editors need to update hero content without breaking layout or performance.

Risks:
- unoptimised uploads
- inconsistent field usage
- missing required content
- too much freedom without guardrails

---

## Recommended Approach

Use a single flexible hero component with:

- a strict internal structure
- performance-safe defaults
- accessibility enforced by template and schema
- controlled editor flexibility

The system should make the correct implementation the default.

---

## Structural Model

Hero Banner
- Media Layer
- Content Layer
- Accessibility Layer
- CMS Guardrails

---

## Media Layer

### Responsibilities
- render image or video
- support responsive delivery
- protect LCP performance

### Rules
- image should be the default media type
- video should be optional, not required
- video must not block LCP
- responsive image delivery should be controlled by template logic
- image transforms should be handled through the DAM/CDN layer where possible

### Notes
- preload belongs at page/template level, not inside component markup
- above-the-fold media should not be lazy loaded
- dimensions or aspect ratio should be defined to reduce layout shift

---

## Content Layer

### Responsibilities
- display headline
- support optional supporting copy
- render CTA clearly

### Rules
- headline should be concise
- supporting copy should be optional
- CTA must have meaningful text
- content structure should remain predictable across variants

### Typical Structure
- headline
- subheadline (optional)
- CTA label
- CTA URL

---

## Accessibility Layer

### Responsibilities
- ensure media treatment is appropriate
- maintain keyboard and screen reader usability
- support readable content presentation

### Rules
- decorative media should use empty alt text where appropriate
- meaningful media should require alt text
- CTA must be keyboard reachable
- visible focus state must be preserved
- overlay text must meet contrast expectations
- autoplay video must be muted and respect reduced motion preferences
- pause or motion control should be considered where relevant

---

## CMS Guardrails

### Responsibilities
- reduce editor error
- enforce minimum content quality
- protect layout consistency

### Recommended Guardrails
- required CTA label
- required CTA URL
- required alt text when media is meaningful
- optional subheadline
- optional video field
- constrained headline length
- constrained asset expectations where possible

### Principle
Do not rely on editors to remember technical best practices.

Encode guardrails into schema and template structure.

---

## Key Decisions

### 1. Image vs Video
Use a shared component with a media type switch rather than separate hero systems where possible.

### 2. Responsive Strategy
Template controls responsive behaviour. Editors provide the core asset, not device-specific layout logic.

### 3. LCP Strategy
Hero media should be treated as a priority asset and handled accordingly at template/page level.

### 4. Accessibility Rules
Accessibility decisions should be enforced through schema and template logic, not left entirely to content entry.

---

## Implementation Principles

- keep the hero structure consistent
- avoid one-off campaign hero builds where possible
- separate media logic from content logic
- keep performance decisions out of editor hands where possible
- treat schema design as part of frontend quality

---

## Suggested Workflow

1. Define hero content model
2. Define required vs optional fields
3. Define image/video handling rules
4. Define LCP strategy
5. Implement template structure
6. test accessibility
7. test performance
8. refine guardrails

---

## Pattern Value

This pattern helps create hero banners that are:
- reusable
- performant
- accessible
- safer for CMS-driven publishing

---

## Key Principle

A hero banner is not just a visual component.

It is a system that must balance media performance, accessibility, and editorial flexibility.