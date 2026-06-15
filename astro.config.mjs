// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://chataptor.com',
  integrations: [],
  redirects: {
    '/pl/blog/tawk-to-opinie-ceny-alternatywy/': '/pl/blog/tawkto-alternatywy-porownanie-funkcji/',
    '/pl/blog/tawkto-best-alternatives/': '/pl/blog/tawkto-alternatywy-porownanie-funkcji/',
    '/en/blog/tawk-to-review-pricing-alternatives/': '/en/blog/tawkto-best-alternatives-feature-comparison/',
    '/en/blog/tawkto-best-alternatives/': '/en/blog/tawkto-best-alternatives-feature-comparison/',
    '/de/blog/tawk-to-erfahrungen-preise-alternativen/': '/de/blog/tawkto-alternativen-funktionsvergleich/',
    '/de/blog/tawkto-best-alternatives/': '/de/blog/tawkto-alternativen-funktionsvergleich/',
    '/fr/blog/tawk-to-avis-prix-alternatives/': '/fr/blog/tawkto-alternatives-comparatif-fonctionnalites/',
    '/fr/blog/tawkto-best-alternatives/': '/fr/blog/tawkto-alternatives-comparatif-fonctionnalites/',
    '/es/blog/tawk-to-opiniones-precios-alternativas/': '/es/blog/tawkto-alternativas-comparativa-funciones/',
    '/es/blog/tawkto-best-alternatives/': '/es/blog/tawkto-alternativas-comparativa-funciones/',
    '/it/blog/tawk-to-recensione-prezzi-alternative/': '/it/blog/tawkto-alternative-confronto-funzionalita/',
    '/it/blog/tawkto-best-alternatives/': '/it/blog/tawkto-alternative-confronto-funzionalita/',
    '/cs/blog/tawk-to-recenze-ceny-alternativy/': '/cs/blog/tawkto-alternativy-porovnani-funkci/',
    '/cs/blog/tawkto-best-alternatives/': '/cs/blog/tawkto-alternativy-porovnani-funkci/',
    '/sk/blog/tawk-to-recenzia-ceny-alternativy/': '/sk/blog/tawkto-alternativy-porovnanie-funkcii/',
    '/sk/blog/tawkto-best-alternatives/': '/sk/blog/tawkto-alternativy-porovnanie-funkcii/',
  },
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
