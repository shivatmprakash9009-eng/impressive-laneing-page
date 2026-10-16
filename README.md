# Anurag — Developer Portfolio

A responsive, animation-led developer portfolio built with Next.js App Router, React 19, TypeScript, Tailwind CSS v4, GSAP ScrollTrigger, and Framer Motion.

## Features

- Dark violet canvas with restrained cyan / magenta accents and glass navigation.
- Responsive hero with supplied portrait asset, glow field, orbit rings, and floating information cards.
- About section with animated nine-node skills constellation.
- Four alternating featured-work cards with editorial mock UI overlays and supplied image assets.
- Contact form with browser-side validation and a prefilled email-app handoff.
- Active-section navigation, mobile menu, magnetic CTAs, scroll reveals, cursor-reactive parallax, and reduced-motion support.
- Semantic landmarks, labelled form fields, accessible interactive names, and responsive layouts.

## Requirements

- Node.js 20.9 or newer (required by Next.js 15)
- npm

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm run start
```

## Project structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    portfolio.tsx
```

## Assets and profile data

The image URLs and displayed profile details are intentionally defined as portfolio demo content. Replace the portrait, project images, contact details, social links, and sample project claims before presenting the site as a real person's professional profile.

The contact form validates in the browser and opens the visitor's default email client using a `mailto:` URL. It does not deliver messages server-side. For production lead capture, connect a server action or API route to a transactional email provider, add server-side validation/rate limiting, and document the data-retention policy.

The project showcase entries are portfolio concepts and are not evidence that the named products are deployed or linked to real source repositories.

## Design notes

- Base background: `#070314 → #0d0626 → #05020c`
- Neon cyan: `#00f2fe`
- Electric magenta: `#e100ff`
- Deep indigo: `#7f00ff`
- Font pairing: Plus Jakarta Sans with DM Mono for small technical labels.

The supplied Figma file was not accessible to the connected Figma integration during implementation, so the user-provided screenshots and written design requirements were used as the visual reference.
