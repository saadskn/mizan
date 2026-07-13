---
name: verify
description: How to run and verify Mizan end-to-end on this machine
---

# Verifying Mizan

- Launch: `npm run dev` (background) → http://localhost:5173/ (dev serves at `/`,
  not `/mizan/` — the base path only applies to `DEPLOY_TARGET=gh-pages` builds).
- Drive the four views by hash: `#/`, `#/needs`, `#/spots`, `#/spots/<slug>`
  (slugs from `src/lib/slug.js`, e.g. `subway`, `mcdonalds-ksa`).
- Static-asset seam: `curl -I http://localhost:5173/logos/<slug>.png` — real files
  return `image/png`; missing ones return the SPA fallback (HTML), which still
  triggers the `SpotLogo` monogram via img decode error, so that's expected.
- Visual/GUI driving needs Claude-in-Chrome. 2026-07-13: no chrome.exe was found
  on this machine (Start-Process, App Paths, where.exe all empty) even though the
  extension worked in earlier sessions — check tabs_context_mcp first and fall
  back to HTTP checks + user eyeballing if it's disconnected.
- Full check: `npx vitest run` (roster locks, strings parity) and `npm run build`.
