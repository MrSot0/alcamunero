// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Temporal: mientras se construye la landing institucional, / lleva al periódico.
  redirects: {
    '/': '/periodico',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});