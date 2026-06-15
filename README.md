# about_jaden

Bilingual CSR portfolio built with React, TypeScript, Vite, Tailwind CSS,
React Router, and react-i18next.

## Routes

- `/en`, `/ko`: concise landing page
- `/:locale/resume`: page-based resume with print/PDF support
- `/:locale/portfolio`: approved project index
- `/en/projects/:slug`, `/ko/projects/:slug`: approved case studies only
- `/en/review`, `/ko/review`: private content and UI review workspace
- `/:locale/review/projects/:slug`: candidate case-study review
- `/:locale/review/:variant`: five full-page visual directions

The selected MVP direction is **Editorial Grid**. It validates the information
architecture, bilingual content, responsive behavior, and project approval
flow. Final visual design, motion, imagery, and detailed polish require another
review round. The other four directions remain available as references.

## Approval gate

Projects live in `src/data/projects.ts`. A project with `status: 'candidate'`
is visible only in the review workspace. The public list and public detail
resolver read from `approvedProjects`, so publication requires an explicit
status change after review.

## Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run test
npm run build
```

## Security

Do not copy private source code, environment values, customer data, internal
URLs, infrastructure details, or original product screenshots into this
repository. Use anonymized text and newly created diagrams only after approval.
