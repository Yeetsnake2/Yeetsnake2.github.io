# Tayyeb Bukhari — 3D Portfolio

A one-page portfolio built with Vite + React, Tailwind CSS, Three.js (via React Three Fiber),
and GSAP. The hero has a wireframe particle icosahedron that assembles on load and speeds up
as you scroll — the rest of the page is a code-comment/HUD styled layout pulled straight from
your resume.

## 1. Install Node.js (skip if you already have it)

Download the LTS version from https://nodejs.org (v18 or newer). This gives you `node` and `npm`.

## 2. Put the project on your machine

Unzip this folder anywhere, e.g. `~/projects/tayyeb-portfolio`. Open a terminal in that folder.

## 3. Install dependencies

```bash
npm install
```

This reads `package.json` and pulls in React, Tailwind, Three.js, @react-three/fiber,
@react-three/drei, and GSAP — no manual downloads needed for any of these, they all come
from npm.

## 4. Run it locally

```bash
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## 5. Build for deployment

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Netlify, GitHub Pages, or any static host.
Vercel is the easiest: `npm i -g vercel` then `vercel` in this folder.

---

## Where things live

```
portfolio/
├── index.html              ← page title, meta tags, Google Fonts links
├── src/
│   ├── main.jsx             ← React entry point
│   ├── App.jsx              ← page layout + scroll-progress tracking
│   ├── index.css            ← Tailwind + global styles
│   ├── data/resumeData.js   ← ALL your resume content lives here
│   ├── hooks/                ← scroll-reveal + scroll-progress helpers
│   └── components/
│       ├── HeroScene.jsx     ← the 3D Three.js scene (the signature element)
│       ├── Hero.jsx          ← headline text overlaid on the 3D scene
│       ├── Navbar.jsx, Loader.jsx, SectionLabel.jsx
│       └── About.jsx, Experience.jsx, Projects.jsx, Skills.jsx, Awards.jsx, Contact.jsx
└── public/                  ← static files served as-is (see below)
```

## To edit your content

Everything text-based (jobs, projects, awards, skills, contact info) is in
**`src/data/resumeData.js`**. Edit that one file to update copy anywhere on the site —
you don't need to touch the component files unless you want to change layout/design.

## Assets you need to add yourself

The design was built to need **zero external image assets** — the 3D scene replaces a
profile-photo hero — but there are two things worth adding:

1. **Your real resume PDF**
   Drop a file named exactly `resume.pdf` into the `public/` folder (replacing the
   placeholder `.txt` file there). The "Resume" button in the navbar links to `/resume.pdf`.

2. **(Optional) A profile/avatar photo**, if you'd like to add one to the About section later.
   Just save an image (e.g. `avatar.jpg`) into `public/` and reference it in
   `src/components/About.jsx` as `<img src="/avatar.jpg" ... />`.

Everything else — fonts and icons — loads from a CDN automatically, nothing to download:

- **Fonts** (Space Grotesk, Inter, JetBrains Mono) are already linked via Google Fonts in
  `index.html` — https://fonts.google.com/specimen/Space+Grotesk,
  https://fonts.google.com/specimen/Inter, https://fonts.google.com/specimen/JetBrains+Mono
- **Favicon** is a hand-made SVG already included at `public/favicon.svg` (matches the
  accent color). If you'd rather generate a custom one from a logo/photo, use
  https://realfavicongenerator.net.

## Design notes (so future edits stay consistent)

- **Colors** are defined once in `tailwind.config.js`: `base` (background), `surface` /
  `surface2` (cards), `accent` (cyan — used for interactive/data elements), `gold`
  (reserved only for the Honors & Awards section).
- **Type scale**: `font-display` (Space Grotesk) for headings, `font-body` (Inter) for
  paragraphs, `font-mono` (JetBrains Mono) for dates, labels, and anything "data-like."
- **Motion**: page-load sequence in the hero (GSAP), scroll-triggered reveals on every
  section (`useScrollReveal` hook), and the 3D model's spin speed is tied to scroll
  position via `src/hooks/scrollState.js`. Reduced-motion users get instant, static content
  (see the `prefers-reduced-motion` block in `index.css`).

## Common tweaks

- **Change the accent color**: edit `accent` in `tailwind.config.js` — updates everywhere.
- **Slow down / speed up the 3D model**: `src/components/HeroScene.jsx`, look for
  `rotation.y +=` inside `useFrame`.
- **Add a new section**: create a component in `src/components/`, add its data to
  `resumeData.js`, then import + place it in `src/App.jsx` and add a nav link in
  `Navbar.jsx`.
