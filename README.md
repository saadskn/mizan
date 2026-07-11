# MacroMenu Riyadh 🥗

A reverse macro calculator for Riyadh. Type the protein, carbs, fats, and
calories you have **left** for the day — get real fast-food orders from 81
Riyadh chains that match them as closely as mathematically possible.

- 100% client-side. No server, no database, no accounts.
- English / العربية with full RTL. Light & dark themes.
- 540+ menu items across 81 chains; macros from official nutrition data
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

## Deploy (free)

**Vercel:** vercel.com → Add New Project → Import `macromenu-riyadh` from
GitHub → framework auto-detects Vite → Deploy. Done.

**Netlify:** app.netlify.com → Add new site → Import from GitHub →
Build command `npm run build`, publish directory `dist` → Deploy.

Every push to `main` re-deploys automatically on both platforms.

## Disclaimer

Macros and prices are best-effort approximations and drift as menus change.
Not medical advice.
