# Swastik Srivastava — Portfolio

Modern, fast, and accessible personal website built with React + Vite + TypeScript, Tailwind CSS, and Framer Motion. Ready to deploy on Vercel.

## Features

- Responsive, mobile-first, dark mode with persistence
- Sticky navbar with active section highlight (scroll spy)
- Sections: Hero, About, Skills (filterable), Projects (modal), Testimonials, Contact
- Blog route (`/blog`) and Thanks route (`/thanks`)
- Accessible forms with Zod + react-hook-form validation
- Default Formspree submission + optional Vercel serverless function with nodemailer
- SEO metas, OpenGraph/Twitter, JSON-LD, sitemap and robots
- Analytics hook for Google Analytics or Plausible

## Getting Started

1. Install dependencies
   ```bash
   npm i
   ```
2. Run dev server
   ```bash
   npm run dev
   ```
3. Build for production
   ```bash
   npm run build && npm run preview
   ```

## Environment Variables

Copy `.env.example` to `.env` and fill in as needed.

- `VITE_GTAG_ID` — Google Analytics ID (e.g., G-XXXXXXX)
- `VITE_PLAUSIBLE_DOMAIN` — Plausible domain (e.g., your-domain.com)
- `SMTP_*`, `CONTACT_TO`, `CONTACT_FROM` — for `/api/contact` serverless email

## Contact Form Options

Default is Formspree. Update `formspreeEndpoint` in `src/data/site.config.ts` to your form ID.

Alternative: Use Vercel serverless function:

1. Set env vars (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO`, `CONTACT_FROM`).
2. In `src/components/ContactForm.tsx`, switch to the commented axios POST to `/api/contact`.
3. Deploy on Vercel (function in `api/contact.ts`).

## Replace Content & Branding

- Update `src/data/site.config.ts` with your name, links, and copy.
- Replace placeholder images in `public/assets/`:
  - `profile-placeholder.svg` with your photo (use `img` in `About.tsx`).
  - Project cover images (`project*.svg`).
  - `resume.pdf` placeholder.

## Accessibility & SEO

- WCAG AA friendly colors and focus styles
- Skip link, ARIA labels
- Proper metas in `index.html` and runtime `SEO` helper
- JSON-LD schema for Person

## Deployment (Vercel)

1. Push repo to GitHub.
2. Import to Vercel as a Vite project.
3. Set any required env vars.
4. Build output directory is `dist`.

## Scripts

- `npm run dev` — Start dev server
- `npm run build` — Type-check and build
- `npm run preview` — Preview production build locally
- `npm run lint` — ESLint check
- `npm run format` — Prettier format

## License

This project is provided as-is for personal use. Replace placeholders with your content.

