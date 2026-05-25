// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://chataptor.com',
  integrations: [],
  i18n: {
    defaultLocale: 'en',
    locales: ['pl', 'en', 'de', 'fr', 'es', 'it', 'cs', 'sk'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
