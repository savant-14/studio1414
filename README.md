# Sattva Energies — website

Premium rooftop-solar marketing site for Sattva Energies (Vadodara, Gujarat).
Homepage with a real WebGL (three.js) hero, plus Products, Solutions and Contact pages.

## Stack

- **Vite** — dev server + static build (multi-page).
- **React 18** + **Babel Standalone** — loaded from CDN; the `.jsx` files are
  transpiled in the browser at runtime. No build-time JSX compilation.
- **three.js** (+ postprocessing addons) — loaded from CDN via an `importmap`
  for the hero scene (`public/hero3d.js`).
- Design tokens in `public/tokens/*.css`, imported by `public/styles.css`.

Because React/Babel/three are CDN-loaded, there are **no runtime npm
dependencies** — only `vite` as a dev dependency.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # outputs static site to ./dist
npm run preview    # preview the production build
```

## Deploy to Vercel

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. Import the repo in Vercel. It auto-detects Vite:
   - **Build command:** `vite build`
   - **Output directory:** `dist`
   (`vercel.json` pins these too.)
3. Deploy. No environment variables needed.

Or from the Vercel CLI:

```bash
npm i -g vercel
vercel            # preview
vercel --prod     # production
```

## Structure

```
sattva-energies/
├─ index.html            # homepage (WebGL hero)
├─ products.html
├─ solutions.html
├─ contact.html
├─ vite.config.js
├─ vercel.json
├─ package.json
└─ public/               # served verbatim at site root
   ├─ styles.css         # imports tokens/*.css
   ├─ site.css
   ├─ images.js          # central image config (window.SE_IMG)
   ├─ hero3d.js          # three.js hero scene
   ├─ SiteChrome.jsx     # nav + footer + shared helpers
   ├─ Home1.jsx / Home2.jsx / BrochureSections.jsx
   ├─ Products.jsx / Solutions.jsx / Contact.jsx
   ├─ tokens/            # design-system CSS variables
   └─ assets/            # project photographs
```

## Notes

- Real project photos live in `public/assets/`. Other imagery is royalty-free
  Unsplash, configured centrally in `public/images.js` — swap URLs there.
- Requires WebGL for the animated hero; without it the hero area shows the light
  background.
