// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://chataptor.com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          pl: 'pl-PL',
          de: 'de-DE',
          fr: 'fr-FR',
          es: 'es-ES',
          it: 'it-IT',
          cs: 'cs-CZ',
          sk: 'sk-SK',
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
