// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // URL pública (Vercel). Se usa para canonical, Open Graph y el sitemap.
  // Si se conecta un dominio propio, cambiarla aquí y en public/admin/config.yml.
  site: 'https://alcamunero.vercel.app',
  // El sitio institucional está oculto al público: solo existe como vista previa interna en
  // /colegio-preview/ (sin enlaces desde el periódico, noindex y fuera del sitemap).
  // /periodico se conserva como alias de la portada para enlaces ya compartidos.
  redirects: {
    '/periodico': '/',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/colegio-preview'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
