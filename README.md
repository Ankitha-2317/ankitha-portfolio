# Ankitha R — Portfolio

A production-ready personal portfolio built with React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build

```bash
npm run build      # type-checks then builds to /dist
npm run preview    # preview the production build locally
```

## Lint

```bash
npm run lint
```

## Before deploying — content you still need to add

1. **`public/resume.pdf`** — the Resume buttons in the Navbar, Hero, and Contact
   section link to `/resume.pdf`. Drop your actual resume file into `public/`
   with that exact filename.
2. **`public/og-image.png`** — a 1200×630 social-share preview image referenced
   in `index.html`'s Open Graph tags. Optional but recommended for LinkedIn/social
   link previews.
3. **Project screenshots** — `src/constants/projects.ts` currently renders a
   gradient placeholder for each project card. To use real screenshots, add
   images to `src/assets/images/` and set the `image` field on the relevant
   `Project` entry.
4. **TrustUPI / AI Attendance repo links** — currently marked private (no
   `githubUrl`/`liveUrl`) in `src/constants/projects.ts`. Add the URLs there
   once you're ready to make them public.

## Deploy to Vercel

This repo is Vercel-ready out of the box (`vercel.json` handles SPA routing
for React Router). Push to GitHub, then import the repo in Vercel — no config
needed. Framework preset: **Vite**.

## Project Structure

```
src/
  components/
    ui/        → Button, GlassCard, Badge, SectionHeading, GradientText, CursorGlow
    layout/    → Navbar, Footer, AnimatedBackground
    three/     → HeroCanvas, FloatingObject, ParticleField
    cards/     → SkillCard, ProjectCard, CertificationCard, TimelineItem
  sections/    → Hero, About, Skills, Projects, Experience, Certifications, Contact
  pages/       → Home (composes all sections)
  hooks/       → useActiveSection, useMousePosition, useScrollDirection, useInView
  constants/   → all editable content (nav, social, skills, projects, experience, education, certifications)
  types/       → shared TypeScript interfaces
  utils/       → cn() class merger, scrollToSection()
```

To edit any content on the site (projects, skills, experience, etc.), edit the
relevant file in `src/constants/` — no component code needs to change.
