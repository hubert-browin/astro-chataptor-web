# WordPress Integration Landing Page — Design Spec

## Cel

Stworzyć landing page `/integrations/wordpress` na stronie chataptor.com (projekt Astro) promujący plugin WordPress/WooCommerce. Strona ma przekonać użytkowników WordPress do instalacji pluginu i rejestracji w Chataptor.

## Kontekst

- **Projekt:** ChataptorWebsite (Astro SSG) — `/Volumes/dysk/Dev/ChataptorWebsite`
- **Plugin:** Chataptor WordPress plugin (przygotowany do WordPress.org)
- **Istniejące strony:** Landing page (`/[lang]/`), Privacy, Terms, 404
- **Wielojęzyczność:** 8 lokalizacji (en, pl, de, fr, es, it, cs, sk)
- **Design system:** Tailwind CSS, Inter font, emerald accent, zinc CTA, design-tokens.js

## Decyzje projektowe

1. **Implementacja w Astro** — spójne z istniejącą architekturą strony
2. **Komponenty reużywalne** — każda sekcja jako osobny komponent w `src/components/integrations/`, gotowe do reużycia przy kolejnych integracjach (Shopify, Magento)
3. **Oba segmenty docelowe** — WordPress ogólny + dedykowana sekcja WooCommerce
4. **Pełne tłumaczenia na 8 języków** — treści pisane po angielsku, auto-translate generuje resztę
5. **Treści bazują na istniejących** — USP z readme.txt i speca dystrybucji, dopasowane do formatu landing page

## Architektura plików

```
src/
├── pages/[lang]/integrations/
│   └── wordpress.astro              # Strona składająca komponenty
├── components/integrations/
│   ├── IntegrationHero.astro        # Hero z badge, tytułem, CTA
│   ├── FeaturesGrid.astro           # Siatka kart z cechami
│   ├── HowItWorks.astro             # Kroki instalacji
│   ├── PlatformSection.astro        # Sekcja platformowa (WooCommerce)
│   ├── WidgetPreview.astro          # Mockup widgetu w przeglądarce
│   ├── TechRequirements.astro       # Wymagania techniczne
│   ├── IntegrationFAQ.astro         # FAQ accordion
│   └── IntegrationCTA.astro         # Końcowe CTA
└── i18n/
    └── integrations-wordpress.ts    # Tłumaczenia (8 języków)
```

## Routing

- URL pattern: `/{lang}/integrations/wordpress`
- Przykłady: `/en/integrations/wordpress`, `/pl/integrations/wordpress`
- **Slug:** `"integrations/wordpress"` — pierwszy zagnieżdżony route w projekcie. Istniejące helpery `getCanonicalUrl(lang, slug)` i `getAlternateUrls(slug)` w `src/utils/i18n.ts` łączą `baseUrl/lang/slug` przez konkatenację stringów — slug ze slashem działa poprawnie.
- `getStaticPaths()` generuje 8 wariantów językowych (jak inne strony)
- Strona używa `BaseLayout` z `Header` i `Footer` (jak `index.astro`, NIE jak `privacy.astro` która ma własny layout)

## Sekcje strony

### 1. Hero (IntegrationHero)

**Props:**
- `badge` — tekst badge (np. "Free Plugin")
- `platformBadge` — badge platformy z ikoną (np. WordPress icon + "WordPress")
- `title` — nagłówek z akcentem (emerald) na nazwie platformy
- `subtitle` — opis wartości (1-2 zdania)
- `primaryCTA` — {text, href, icon} — główny przycisk (Install from WordPress.org)
- `secondaryCTA` — {text, href} — drugi przycisk (View Demo)

**Treść EN:**
- Badge: "Free Plugin"
- Tytuł: "Multilingual Live Chat for WordPress"
- Opis: "Add a real-time chat widget to your WordPress site. Your customers write in their language, you reply in yours — Chataptor translates everything automatically."
- CTA: "Install from WordPress.org" + "View Demo"

### 2. Key Features (FeaturesGrid)

**Props:**
- `label` — nagłówek sekcji (uppercase)
- `title` — tytuł
- `subtitle` — opis
- `features[]` — tablica {icon, title, description, colorClass}

**Cechy (siatka 2x2):**
1. **Auto-Translation** — tłumaczenie w czasie rzeczywistym (DeepL & OpenAI)
2. **Omnichannel Inbox** — website + WhatsApp + Messenger + email w jednym dashboardzie
3. **AI Chatbots** — automatyczne odpowiedzi 24/7 w dowolnym języku
4. **1-Click Install** — instalacja z WordPress.org, wklej API key, gotowe

### 3. How It Works (HowItWorks)

**Props:**
- `label`, `title`, `subtitle`
- `steps[]` — tablica {number, title, description}

**3 kroki:**
1. Install Plugin — szukaj "Chataptor" w WordPress Plugins
2. Connect Account — wpisz API key w ustawieniach
3. Start Chatting — widget pojawia się na stronie

### 4. WooCommerce Section (PlatformSection)

**Props:**
- `badge` — {text, icon, colorClass}
- `title`, `subtitle`
- `features[]` — tablica {icon, title, description}
- `backgroundClass` — klasa tła (gradient fioletowo-niebieski)

**3 karty:**
1. **Order Context** — historia zamówień, zawartość koszyka obok konwersacji
2. **HPOS Ready** — pełna kompatybilność z High-Performance Order Storage
3. **Customer Identification** — automatyczna identyfikacja zalogowanych klientów WooCommerce

### 5. Widget Preview (WidgetPreview)

**Props:**
- `label`, `title`, `subtitle`
- `browserUrl` — URL w pasku przeglądarki
- `messages[]` — wiadomości demo {sender, text, translation, langFlag}

**Mockup:**
- Ramka przeglądarki z URL "yourstore.com/shop"
- Placeholder linie symulujące treść strony
- Widget czatu w prawym dolnym rogu z przykładową konwersacją DE→EN

### 6. Tech Requirements (TechRequirements)

**Props:**
- `label`, `title`, `subtitle`
- `requirements[]` — tablica {value, label}

**4 kolumny:**
- WordPress 6.0+
- PHP 7.4+
- WooCommerce 8.0+ (opcjonalny)
- Any Theme

### 7. FAQ (IntegrationFAQ)

**Props:**
- `label`, `title`
- `items[]` — tablica {question, answer}

**4 pytania:**
1. Is the plugin really free? — Tak, 100% darmowy. Chataptor ma free tier.
2. How many languages are supported? — 30+ języków z automatycznym tłumaczeniem.
3. Does it work with page builders? — Tak, Elementor, Divi, Beaver Builder — wszystkie.
4. Is it GDPR compliant? — Tak, dane w EU, konfigurowalny privacy notice.

### 8. Final CTA (IntegrationCTA)

**Props:**
- `title`, `subtitle`
- `primaryCTA`, `secondaryCTA`

**Treść:**
- Tytuł: "Ready to chat with the world?"
- Opis: "Install Chataptor on your WordPress site in under 3 minutes. Free forever."
- CTA: "Install from WordPress.org" + "Create Free Account"
- Tło: ciemne (zinc-900)

## Konwencje komponentów

- Każdy komponent przyjmuje `lang: Locale` + dane z tłumaczeń jako props
- Komponenty są generyczne — nie hardcodują "WordPress" wewnątrz, przyjmują dane przez props
- Stylowanie: Tailwind classes inline (jak reszta projektu)
- Responsywność: mobile-first, siatki zmieniają się na mniejszych ekranach

## SEO

- `SEOHead` z hreflang alternates dla 8 języków
- Canonical URL per język
- Meta title: "Chataptor for WordPress — Multilingual Live Chat Plugin"
- Meta description z USP (auto-translation, free, WooCommerce)
- **JSON-LD:** Osobny inline blok `<script type="application/ld+json">` w `wordpress.astro` (nie rozszerzamy `SEOHead`, bo to jednorazowe użycie):
  ```json
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Chataptor for WordPress",
    "applicationCategory": "CommunicationApplication",
    "operatingSystem": "WordPress 6.0+",
    "description": "Multilingual live chat plugin with auto-translation for WordPress and WooCommerce",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": null
  }
  ```

### Docelowe URL-e CTA

- **Install from WordPress.org:** `https://wordpress.org/plugins/chataptor/` (placeholder do aktualizacji po publikacji)
- **View Demo:** `https://chataptor.com/{lang}/` (główna strona z widgetem demo)
- **Create Free Account:** `https://chataptor.com/register`

## Tłumaczenia

- Plik: `src/i18n/integrations-wordpress.ts`
- **Getter:** `getWordPressIntegration(lang: Locale): WordPressIntegrationTranslations`
- **Interface `WordPressIntegrationTranslations`** — klucze per sekcja:
  ```typescript
  interface WordPressIntegrationTranslations {
    meta: { title: string; description: string };
    hero: { badge: string; platformBadge: string; title: string; titleAccent: string; subtitle: string; primaryCTA: string; secondaryCTA: string };
    features: { label: string; title: string; subtitle: string; items: Array<{ icon: string; title: string; description: string; colorClass: string }> };
    howItWorks: { label: string; title: string; subtitle: string; steps: Array<{ title: string; description: string }> };
    woocommerce: { badge: string; title: string; subtitle: string; items: Array<{ icon: string; title: string; description: string }> };
    widgetPreview: { label: string; title: string; subtitle: string; browserUrl: string; userMsg: string; userTranslation: string; agentMsg: string; agentTranslation: string };
    techRequirements: { label: string; title: string; subtitle: string; items: Array<{ value: string; label: string }> };
    faq: { label: string; title: string; items: Array<{ question: string; answer: string }> };
    cta: { title: string; subtitle: string; primaryCTA: string; secondaryCTA: string };
  }
  ```
- Bazowy język: EN (pełne tłumaczenie w pliku)
- Auto-translate na pozostałe 7 języków przez `npm run translate` — skrypt automatycznie wykrywa nowe pliki i18n w `src/i18n/`
- Polskie tłumaczenie do ręcznego dopracowania

## Styl wizualny

Spójny z istniejącym landing page:
- **Tło:** Białe z naprzemiennymi sekcjami `#fafafa`
- **Typografia:** Inter, nagłówki 32-48px bold, body 14-17px
- **Karty:** `rounded-2xl ring-1 ring-zinc-200`, hover shadow
- **Przyciski:** Primary: `bg-zinc-900 text-white rounded-full`, Secondary: `bg-white ring-1`
- **Akcent:** Emerald (#10b981) na nagłówkach i badge
- **WooCommerce sekcja:** Gradient fioletowo-niebieski jako wyróżnik
- **CTA końcowe:** Ciemne tło (zinc-900), białe przyciski

## Wireframe

Mockup HTML dostępny w `.superpowers/brainstorm/53310-1773335756/wordpress-landing-mockup.html` — zatwierdzony przez użytkownika.
