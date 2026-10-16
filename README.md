# AP Digitech Solutions

AP Digitech Solutions is a marketing and portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. The project presents the company brand, service positioning, portfolio work, long-form case study content, and editorial/blog content in a polished single-application frontend.

## Overview

This repository contains the public-facing website for AP Digitech Solutions. The application is structured around the Next.js App Router and combines reusable UI primitives with section-based page composition.

Primary goals of the project:

- Present the AP Digitech Solutions brand and value proposition.
- Showcase services and featured work.
- Publish thought-leadership content through a blog experience.
- Highlight a detailed portfolio case study for the MAA Recipe App project.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Icons
- Sonner
- shadcn/ui configuration with Aceternity-style UI components

## Key Routes

- `/` - Home page with hero, about, trusted-by, services, testimonials, blogs, contact, and footer sections
- `/Blog` - Blog listing page powered by shared blog data
- `/Portfolio` - Portfolio overview page with carousel-based project presentation
- `/Portfolio/MAA-Recipe-App` - Detailed portfolio case study page

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  Blog/page.tsx
  Portfolio/page.tsx
  Portfolio/MAA-Recipe-App/page.tsx
components/
  navbar.tsx
  ui/
  *-demo.tsx
sections/
  hero.tsx
  about-us.tsx
  trusted-by.tsx
  services.tsx
  testimonials.tsx
  blogs.tsx
  contact.tsx
  footer.tsx
public/
  blogs/
  clients/
  portfolio/
lib/
  utils.ts
hooks/
  use-outside-click.tsx
```

## Application Architecture

The codebase follows a simple frontend-focused structure:

- `app/` contains route entry points and layout configuration.
- `sections/` contains homepage-specific content blocks.
- `components/` contains reusable UI components, navigation, and animated building blocks.
- `components/ui/` contains lower-level interaction and presentation primitives.
- `public/` stores static assets for blogs, clients, and portfolio content.
- `lib/` stores shared utility logic.
- `hooks/` stores reusable React hooks.

## Content Model

The application currently uses local, code-defined content rather than an external CMS or API.

- Blog content is defined in `sections/blogs.tsx`.
- Portfolio overview content is defined in `app/Portfolio/page.tsx`.
- The MAA Recipe App case study is authored directly in `app/Portfolio/MAA-Recipe-App/page.tsx`.
- Homepage sections are assembled in `app/page.tsx`.

This makes the site easy to deploy and maintain for small-to-medium content updates, but content changes currently require code edits and redeployment.

## Design and UI Notes

- The site uses a section-driven landing-page layout for the homepage.
- Motion and interaction effects are implemented with Framer Motion and custom UI components.
- Tailwind CSS is used for layout, spacing, color, and typography.
- The project includes shadcn configuration in `components.json`.
- Remote images are currently allowed from `images.unsplash.com` through `next.config.mjs`.

## Local Development

### Prerequisites

- Node.js 18 or later recommended
- npm
- Copy `.env.example` to `.env.local` if the project introduces environment-specific settings later; `.env*` files are gitignored and `.env.example` remains safe to commit.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Start the local development server
- `npm run build` - Create a production build
- `npm run start` - Run the production build locally
- `npm run lint` - Run ESLint

## Deployment

This project is suitable for deployment on platforms that support Next.js applications, including Vercel. Before deploying, confirm:

- Environment and Node.js versions are aligned with the target platform.
- External image domains remain correctly configured in `next.config.mjs`.
- All static assets under `public/` are committed and available.

## Maintenance Guidelines

- Keep route naming consistent when adding new pages.
- Prefer storing reusable UI patterns in `components/` instead of duplicating them in route files.
- Keep homepage content inside `sections/` for maintainability.
- If the volume of blog or portfolio content grows, consider moving content into a CMS, MDX, or structured data files.
- Review image optimization settings whenever new external asset sources are introduced.

## Known Characteristics

- The application is currently frontend-only and does not include a backend service layer.
- Content is mostly static and maintained directly in the codebase.
- Some routes use capitalized folder names such as `Blog` and `Portfolio`, so links and deployment behavior should be kept consistent with the current structure.

## Ownership

This repository represents the AP Digitech Solutions website codebase and should be maintained with attention to visual consistency, responsive behavior, and content accuracy across homepage, portfolio, and blog experiences.

