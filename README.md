# MacroMenu Riyadh 🥗

A reverse macro calculator for Riyadh. Type the protein, carbs, fats, and
calories you have **left** for the day — get real fast-food orders from 91
Riyadh chains that match them as closely as mathematically possible.

- 100% client-side. No server, no database, no accounts.
- English / العربية with full RTL. Light & dark themes.
- Nearly 600 menu items across 91 chains; macros from official nutrition data
  where published, careful estimates elsewhere (flagged `estimated` in the data).

## Run locally

```
npm install
npm run dev
```

## Tests

```
npm test
```

## Live site

**https://saadskn.github.io/macromenu-riyadh/** — deployed by GitHub Actions
(`.github/workflows/deploy.yml`). Every push to `main` re-deploys the site
automatically in about a minute.

## Deploy elsewhere (optional)

**Vercel:** vercel.com → Add New Project → Import `macromenu-riyadh` from
GitHub → framework auto-detects Vite → Deploy.

**Netlify:** app.netlify.com → Add new site → Import from GitHub →
Build command `npm run build`, publish directory `dist` → Deploy.

(The GitHub Pages base path only applies when `DEPLOY_TARGET=gh-pages` is
set, so root-hosted deploys keep working.)

## Disclaimer

Macros and prices are best-effort approximations and drift as menus change.
Not medical advice.
