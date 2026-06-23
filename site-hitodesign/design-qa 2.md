# Design QA — HITO Design

- Source visual truth path: `reference/design-target.png`
- Implementation screenshot paths: `qa/desktop-top.png`, `qa/desktop-missions.png`, `qa/desktop-projects.png`, `qa/mobile-top.png`, `qa/mobile-menu.png`, `qa/desktop-project-modal.png`, `qa/desktop-contact-success.png`
- Viewports: desktop 1440 × 1024; mobile 390 × 844 requested, 375 × 844 captured by the in-app browser
- State: public homepage, menu closed/open, project modal open, contact form success
- Full-view comparison evidence: `qa/comparison-top.png`
- Focused region comparison evidence: `qa/comparison-missions.png`

## Findings

No actionable P0, P1 or P2 findings remain.

- [P3] The missions section is slightly more spacious than the selected visual target.
  - Location: `#missions`.
  - Evidence: the approved mock places the four pillars immediately after the hero; the implementation adds a concise section heading before them.
  - Impact: minor vertical-rhythm difference only; the added heading reinforces the user's request not to understate the design missions.
  - Follow-up: reduce the heading or top padding if a denser page is preferred after content review.

- [P3] Project imagery differs from the generated mock.
  - Location: `#projets`.
  - Evidence: the mock contains generated interiors; the implementation uses real HITO Design images retrieved from the current site.
  - Impact: intentional fidelity trade-off in favor of truthful portfolio content.
  - Follow-up: replace with higher-resolution originals if Chris Reati supplies them.

## Required Fidelity Surfaces

- Fonts and typography: Cormorant Garamond and Manrope are bundled locally; hierarchy, line height and wrapping match the selected editorial direction.
- Spacing and layout rhythm: split hero, four-column missions grid, three-project grid and four-step method match the source structure; desktop and mobile layouts do not overlap or clip.
- Colors and visual tokens: warm ivory, charcoal and HITO orange are applied consistently; focus states and mobile-menu contrast are visible.
- Image quality and asset fidelity: all visible images are real local HITO Design assets; no hotlinks, placeholders, CSS art or handmade SVG assets are used.
- Copy and content: invented ImageGen names and projects were removed; Chris Reati, the four missions, qualification, phone number and Girondins reference use source-grounded content.
- Icons: Phosphor line icons provide one consistent open-source family.
- Interactions: sticky navigation, smooth anchors, mobile drawer, expandable mission details, project modal, Escape-to-close, telephone link, form validation and success state were exercised.
- Accessibility: semantic heading order, descriptive image alternatives, form labels, keyboard focus, reduced-motion support and practical mobile targets are present.

## Patches Made During QA

- Corrected the dark mobile-menu overlay and restored readable black-on-orange contrast.
- Made the compact mobile header CTA display its arrow correctly.
- Added anchor scroll margins beneath the sticky header.
- Reduced desktop hero-heading scale to match the approved split layout more closely.
- Reduced mission-heading scale while retaining explicit emphasis on Design global.
- Rebuilt and re-captured desktop and mobile states after fixes.

## Implementation Checklist

- [x] Production build passes.
- [x] Desktop first view compared with the approved design.
- [x] Missions section compared with the approved design.
- [x] Mobile first view and mobile menu checked.
- [x] Project modal checked.
- [x] Contact form validation and local success state checked.
- [ ] Connect the contact form to the final recipient before production launch.
- [ ] Replace selected images with original high-resolution files when available.

final result: passed
