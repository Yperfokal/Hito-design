# Design QA — HITO Design · enrichissement éditorial

- Source visual truth path: `reference/design-target.png`
- Previous implementation screenshot paths: `qa/desktop-top.png`, `qa/desktop-projects.png`, `qa/mobile-top.png`
- Current implementation screenshot path: unavailable in this run
- Intended viewports: desktop 1440 × 1024; mobile 390 × 844
- State: homepage, project filters, project modal, client-reference expansion, Carnets links, mobile menu
- Previous full-view comparison evidence: `qa/comparison-top.png`
- Previous focused comparison evidence: `qa/comparison-missions.png`

## Findings

- [P1] The enriched implementation could not be visually rendered in the current local environment.
  - Location: full homepage, especially `#approche`, `#projets`, `#references`, `#carnets` and `#a-propos`.
  - Evidence: no current rendered screenshot could be captured because the environment refused local preview hosting and the browser security policy blocked direct local-file navigation.
  - Impact: typography, logo scaling, image crops, responsive wrapping and final vertical rhythm cannot yet be signed off visually.
  - Fix: open the ready `dist/` folder through Vercel or another static preview, capture desktop and mobile states, then complete the visual comparison pass.

## Static Checks Completed

- `dist/enhancements.js` passes JavaScript syntax validation.
- All twenty-eight converted client logos exist in both `public/assets/clients/` and `dist/assets/clients/`.
- The production HTML includes the CSS and JavaScript enhancement files.
- Eight project entries, four filters, six documented mission typologies, client references, Carnets links and the enriched biography are present.

## Required Fidelity Surfaces

- Fonts and typography: existing bundled Cormorant Garamond and Manrope files remain intact; the new hierarchy requires visual confirmation.
- Spacing and layout rhythm: desktop and mobile rules are present; rendered confirmation remains blocked.
- Colors and visual tokens: all new surfaces reuse the existing HITO ivory, charcoal and orange tokens.
- Image quality and asset fidelity: all client logos are based on supplied files; no invented client marks were added.
- Copy and content: grounded in the supplied VAE memoir, the book `Transmettre mon métier AI Designer`, the Google site and recommendation material.
- Interactions: filter, modal and client-expansion logic pass static syntax checks; live browser exercise remains blocked.

## Patches Made Since the Previous QA Pass

- Added Balaïtous Hospitality as a documented strategic/AMO project.
- Added six project typologies from the memoir without exposing unapproved private project names.
- Added twenty-eight supplied client references and a B.lux proof quote.
- Repositioned the Google site as “Les Carnets HITO” with dedicated editorial links.
- Rewrote the manifesto and biography around the author’s own convictions and career documents.

## Implementation Checklist

- [x] Editorial content grounded in the Google site, VAE memoir and book on transmission.
- [x] Source code updated.
- [x] Ready-to-host `dist/` output updated.
- [x] JavaScript and asset-reference checks pass.
- [ ] Capture the enriched desktop and mobile implementation.
- [ ] Exercise filters, modal, client expansion, Carnets links, mobile menu and contact state in a live browser.
- [ ] Connect the contact form before public launch.

final result: blocked
