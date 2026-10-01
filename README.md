# Ben Wilson Construction website

Next.js 15 · TypeScript · Tailwind CSS 4. Deploys to Vercel as-is.

    npm install
    npm run dev      # local
    npm run build    # production build
    npm run lint

## Adding real photography (do this first)
No photos were supplied, so image slots show a neutral placeholder. Drop files in and they appear automatically (`.jpg`, `.jpeg`, `.webp` or `.png`):

- `public/images/hero/hero.jpg` – hero (landscape, ~2400px wide)
- `public/images/about/about.jpg` – About page (portrait 4:5)
- `public/images/projects/project-01.jpg` … `project-08.jpg` – gallery

Edit `src/content/projects.ts` to add specific `alt` text, titles, captions, or more entries. Only add before/after pairs from real jobs.

## Facts live in one place
`src/content/site.ts` holds phone, address, services, review excerpts and the Google review count. Add confirmed services there and they show on `/services`. Set `facebookUrl` to show a Facebook link in the footer.

## Environment variables
- `NEXT_PUBLIC_SITE_URL` – the real domain (canonical URLs, sitemap, structured data). Currently falls back to a placeholder `*.vercel.app` address.
- `INQUIRY_WEBHOOK_URL` – where the estimate form posts JSON (Formspree, Zapier, Make, etc.). Without it the form tells visitors to call instead. No email address is hard-coded.
