# Design QA — HITO Design · enrichissement éditorial

- Source visual truth path: `reference/design-target.png`
- Previous implementation screenshot paths: `qa/desktop-top.png`, `qa/desktop-projects.png`, `qa/mobile-top.png`
- Current implementation screenshot path: unavailable in this run
- Intended viewports: desktop 1440 × 1024; mobile 390 × 844
- State: public homepage, project filters, project modal, mobile menu
- Previous full-view comparison evidence: `qa/comparison-top.png`
- Previous focused comparison evidence: `qa/comparison-missions.png`

## Findings

- [P1] The enriched implementation could not be visually rendered in the current local environment.
  - Location: full homepage, especially `#approche`, `.singularity-section`, `#projets` and `#a-propos`.
  - Evidence: the previous implementation and source visual are available, but no current rendered screenshot could be captured after the content expansion because local preview hosting and local-file navigation were unavailable in this run.
  - Impact: typography, image crops, responsive wrapping and the final vertical rhythm of the new sections cannot be signed off visually.
  - Fix: open the ready `dist/` folder through a normal local or hosted static server, capture desktop and mobile states, then complete the visual comparison pass.

## Static Checks Completed

- `dist/enhancements.js` passes JavaScript syntax validation.
- All seven referenced images exist in `dist/assets/`.
- The production HTML includes the new CSS and JavaScript enhancement files.
- Source and production CSS have balanced rule braces.
- Seven project entries, four filters, the identity manifesto, the HITO singularity section and the enriched biography are present.

## Required Fidelity Surfaces

- Fonts and typography: existing bundled Cormorant Garamond and Manrope files remain intact; new hierarchy requires visual confirmation.
- Spacing and layout rhythm: new desktop and mobile rules are present; rendered confirmation remains blocked.
- Colors and visual tokens: all new surfaces reuse the existing HITO ivory, charcoal and orange tokens.
- Image quality and asset fidelity: only real HITO assets already retrieved from the source site are referenced; no placeholders or generated approximations were added.
- Copy and content: the new manifesto, singularity, qualifications and project descriptions are grounded in the current Google site.
- Interactions: filter and modal logic pass static syntax checks; live browser exercise remains blocked.

## Patches Made Since the Previous QA Pass

- Added an identity manifesto around the human, method and real-world delivery.
- Added the explicit bridge between design methodology and interior architecture.
- Expanded the content from three cards to seven truthful realizations or fields of intervention.
- Added portfolio filters and richer project details.
- Enriched Chris Reati’s biography with qualifications, teaching and career milestones.
- Kept Design global visible as a core mission.
- Added a deployable static enhancement layer to the existing production folder.

## Implementation Checklist

- [x] Editorial content grounded in the Google site.
- [x] Source code updated.
- [x] Ready-to-host `dist/` output updated.
- [x] JavaScript and asset-reference checks pass.
- [ ] Capture the enriched desktop and mobile implementation.
- [ ] Exercise filters, modal, mobile menu and contact state in a live browser.
- [ ] Connect the contact form before public launch.

final result: blocked
