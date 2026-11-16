// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // URL pública (Vercel). Se usa para canonical, Open Graph y el sitemap.
  // Si se conecta un dominio propio, cambiarla aquí y en public/admin/config.yml.
  site: 'https://alcamunero.vercel.app',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
