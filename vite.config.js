import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages serves the site from /macromenu-riyadh/; local dev and other
  // hosts (Vercel/Netlify) serve from the root.
  base: process.env.DEPLOY_TARGET === 'gh-pages' ? '/macromenu-riyadh/' : '/',
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'node',
  },
});
