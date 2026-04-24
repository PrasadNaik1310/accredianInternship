# Accredian Internship

This project is a Next.js landing page for Accredian Internship. It uses the App Router, Tailwind CSS, and shadcn-style UI components.

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```text
http://localhost:8080
```

4. Run a production build when needed:

```bash
npm run build
```

5. Preview the production build:

```bash
npm run start
```

6. Run linting and tests:

```bash
npm run lint
npm run test
```

## Approach Taken

- Migrated the project from the original React + Vite structure to Next.js App Router.
- Kept the landing page modular by preserving the existing section-based component structure.
- Moved shared app concerns into a root layout and client providers wrapper for theme, query, tooltip, and toast support.
- Preserved the visual design system with Tailwind CSS variables and reusable UI primitives.
- Added a dedicated homepage flow and 404 page using native Next.js routing.

## AI Usage Explanation

- AI was used to speed up the migration from React + Vite to Next.js and to draft the initial project scaffolding as it was wasier to acheive under less time . 
- AI also helped identify the smallest set of files that needed conversion, such as the app layout, page entry, and client-only components. This helped in reducing time required for debugging. 
- The generated changes were reviewed, redesigned and coded  to match the project goals, including the white page background, CTA styling, and banner sections.
- Final implementation decisions and content wording were kept under my review to stay aligned with the requested design and branding.

## Improvements With More Time

- Add a real backend endpoint for the lead form instead of the current client-side submission flow.
- Tighten accessibility with stronger heading hierarchy checks, focus states, and screen reader labels for decorative assets.
- Improve performance by optimizing images, using `next/font`, and reviewing bundle size for client-only components.
- Add automated tests for the main landing sections and form submission flow.
- Refine the page copy and branding so the metadata, title, and on-page messaging are fully consistent.
