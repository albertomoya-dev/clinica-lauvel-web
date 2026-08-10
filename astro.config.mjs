// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Dominio configurable vía env; por defecto apunta a Vercel hasta que se confirme dominio propio (spec §15)
const siteUrl = process.env.PUBLIC_SITE_URL || 'https://clinica-lauvel.vercel.app';

export default defineConfig({
  site: siteUrl,
  base: '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
