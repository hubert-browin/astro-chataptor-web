// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://chataptor.com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pl',
        locales: {
          en: 'en',
          pl: 'pl',
          de: 'de',
          fr: 'fr',
          es: 'es',
          it: 'it',
          cs: 'cs',
          sk: 'sk',
        },
      },
    }),
  ],
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
