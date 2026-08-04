// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// URL provisional en GitHub Pages; sustituir site/base cuando el cliente confirme dominio propio (spec §15)
export default defineConfig({
  site: 'https://albertomoya-dev.github.io',
  base: '/clinica-lauvel-web',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
