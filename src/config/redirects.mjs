// Central redirect map for SEO migrations.
// Add old URLs here when blog posts, landing pages, or integration pages change slugs.
// Current public routes are intentionally not mirrored here: in a static Astro
// build, a redirect for "/pl" is emitted as /pl/index.html and would overwrite
// the real "/pl/" page. Keep trailing-slash normalization at the hosting layer.

const oldBlogRedirects = {
  // tawk.to article: original localized slugs and the temporary shared slug.
  "/pl/blog/tawk-to-opinie-ceny-alternatywy/":
    "/pl/blog/tawkto-alternatywy-porownanie-funkcji/",
  "/pl/blog/tawkto-best-alternatives/":
    "/pl/blog/tawkto-alternatywy-porownanie-funkcji/",
  "/en/blog/tawk-to-review-pricing-alternatives/":
    "/en/blog/tawkto-best-alternatives-feature-comparison/",
  "/en/blog/tawkto-best-alternatives/":
    "/en/blog/tawkto-best-alternatives-feature-comparison/",
  "/de/blog/tawk-to-erfahrungen-preise-alternativen/":
    "/de/blog/tawkto-alternativen-funktionsvergleich/",
  "/de/blog/tawkto-best-alternatives/":
    "/de/blog/tawkto-alternativen-funktionsvergleich/",
  "/fr/blog/tawk-to-avis-prix-alternatives/":
    "/fr/blog/tawkto-alternatives-comparatif-fonctionnalites/",
  "/fr/blog/tawkto-best-alternatives/":
    "/fr/blog/tawkto-alternatives-comparatif-fonctionnalites/",
  "/es/blog/tawk-to-opiniones-precios-alternativas/":
    "/es/blog/tawkto-alternativas-comparativa-funciones/",
  "/es/blog/tawkto-best-alternatives/":
    "/es/blog/tawkto-alternativas-comparativa-funciones/",
  "/it/blog/tawk-to-recensione-prezzi-alternative/":
    "/it/blog/tawkto-alternative-confronto-funzionalita/",
  "/it/blog/tawkto-best-alternatives/":
    "/it/blog/tawkto-alternative-confronto-funzionalita/",
  "/cs/blog/tawk-to-recenze-ceny-alternativy/":
    "/cs/blog/tawkto-alternativy-porovnani-funkci/",
  "/cs/blog/tawkto-best-alternatives/":
    "/cs/blog/tawkto-alternativy-porovnani-funkci/",
  "/sk/blog/tawk-to-recenzia-ceny-alternativy/":
    "/sk/blog/tawkto-alternativy-porovnanie-funkcii/",
  "/sk/blog/tawkto-best-alternatives/":
    "/sk/blog/tawkto-alternativy-porovnanie-funkcii/",

  // First translation article slug used before localized SEO slugs were introduced.
  "/pl/blog/live-chat-translation-real-time/":
    "/pl/blog/automatyczne-tlumaczenie-w-obsludze-klienta/",
  "/en/blog/live-chat-translation-real-time/":
    "/en/blog/automatic-translation-in-customer-support/",
  "/de/blog/live-chat-translation-real-time/":
    "/de/blog/automatische-uebersetzung-im-kundensupport/",
  "/fr/blog/live-chat-translation-real-time/":
    "/fr/blog/traduction-automatique-service-client/",
  "/es/blog/live-chat-translation-real-time/":
    "/es/blog/traduccion-automatica-atencion-cliente/",
  "/it/blog/live-chat-translation-real-time/":
    "/it/blog/traduzione-automatica-assistenza-clienti/",
  "/cs/blog/live-chat-translation-real-time/":
    "/cs/blog/automaticky-preklad-zakaznicky-servis/",
  "/sk/blog/live-chat-translation-real-time/":
    "/sk/blog/automaticky-preklad-zakaznicky-servis/",
};

function withTrailingSlash(path) {
  return path.endsWith("/") ? path : `${path}/`;
}

function withoutTrailingSlash(path) {
  if (path === "/") return path;
  return path.replace(/\/+$/, "");
}

function expandOldRedirects(entries) {
  return Object.fromEntries(
    Object.entries(entries).map(([from, to]) => [
      withoutTrailingSlash(from),
      withTrailingSlash(to),
    ]),
  );
}

export const redirects = {
  ...expandOldRedirects(oldBlogRedirects),
};
