# SUPREMACY COURSE Showcase Website

A premium, responsive landing page for **SUPREMACY COURSE**, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and lucide-react.

## Features

- Modern glassmorphism UI
- Light and dark mode toggle
- Fully responsive layout
- Animated hero, cards, timeline, CTA, and contact sections
- SEO metadata in `app/layout.tsx`
- Frontend-only contact actions with `tel:`, WhatsApp, and Google Maps search
- Supplied image assets copied to `public/assets/` and used throughout the page

## File Structure

```txt
app/
  globals.css
  layout.tsx
  page.tsx
components/
  Contact.tsx
  Courses.tsx
  Footer.tsx
  Hero.tsx
  Levels.tsx
  Navbar.tsx
  ThemeToggle.tsx
  WhyChooseUs.tsx
public/
  assets/
    logo.jpeg
    why-supremacy.png
    english-practice.png
    language-choice.png
    english-flag.png
    french-flag.png
next.config.ts
package.json
postcss.config.js
tailwind.config.ts
tsconfig.json
```

## Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Notes

- This project has no backend, database, authentication, or contact form.
- The website uses the supplied logo from `assets/logo.jpeg`, published as `public/assets/logo.jpeg`.
"# supremacy_course" 
