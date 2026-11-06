# Ranktel Studio

The Ranktel Studio website is a responsive React, TypeScript, and Vite site introducing the studio, its apps, upcoming projects, and vampAI.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local URL when the development server starts.

## Build and preview

```bash
npm run build
npm run preview
```

The production build is written to `dist/`.

## Deploy to Vercel

The root `vercel.json` rewrites requests to the app entry point so React Router routes such as `/about`, `/team`, and `/vampai` continue to work when opened directly or refreshed.

## Pages

- `/` — Studio homepage and app portfolio
- `/about` — Studio overview and the upcoming, untitled cricket story project
- `/team` — Founder profile
- `/careers` — Current hiring status
- `/contact` — General, careers, and partnership contact links
- `/opportunities` — Business collaboration information
- `/vampai` — vampAI product concept, features, and development roadmap

## Updating content and images

- App names, descriptions, store links, icons, and artwork paths: `src/content.ts`
- Homepage: `src/pages/HomePage.tsx`
- Studio pages: `src/pages/StudioPages.tsx`
- vampAI page: `src/pages/VampAIPage.tsx`
- Styling and responsive layouts: `src/styles.css`
- Static images and illustrations: `public/images/`

Place new images in `public/images/` and reference them from the site with a root-relative path such as `/images/your-image.png`.

## Notes

- The vampAI page is a product concept; planned capabilities are identified as in development or on the roadmap.
- The Level Born card currently uses its supplied Google Play testing URL. Update its URL in `src/content.ts` if its public store listing changes.
