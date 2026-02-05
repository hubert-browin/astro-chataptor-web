# Chataptor Website

Static marketing website for Chataptor built with Astro.

## Tech Stack

- **Framework:** Astro 5.x
- **Styling:** Tailwind CSS 4.x
- **Language:** TypeScript
- **Translations:** OpenAI GPT-4

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Translations

Content is written in source language (PL or EN) and automatically translated to other languages.

```bash
# Preview what would be translated
npm run translate:dry

# Run translations
npm run translate

# Full build with translations
npm run build:full
```

### Translation Rules

1. Add `translateTo: all` in frontmatter to enable auto-translation
2. Set `reviewed: true` to protect manual edits from being overwritten
3. Source content hash is tracked - unchanged content is not re-translated

### Supported Languages

- Polish (pl)
- English (en)
- German (de)
- French (fr)
- Spanish (es)
- Italian (it)
- Czech (cs)
- Slovak (sk)

## Project Structure

```
src/
├── components/     # Reusable Astro components
│   ├── SEOHead.astro
│   ├── Header.astro
│   ├── Footer.astro
│   └── LanguageSwitcher.astro
├── content/        # Markdown content (pages, blog, products)
│   ├── pages/
│   ├── blog/
│   └── products/
├── i18n/           # i18n configuration
├── layouts/        # Page layouts
│   └── BaseLayout.astro
├── pages/          # Route pages
│   ├── index.astro (redirect)
│   └── [lang]/
│       ├── index.astro (landing)
│       ├── privacy.astro
│       └── 404.astro
├── styles/         # Global CSS
│   └── global.css
└── utils/          # Helper functions
    └── i18n.ts

scripts/
└── translate.js    # Auto-translation script
```

## Environment Variables

```bash
OPENAI_API_KEY=sk-...   # Required for translations
DEEPL_API_KEY=...       # Optional fallback
```

Copy `.env.example` to `.env` and fill in your API keys.

## Adding New Content

### Pages

1. Create `src/content/pages/[slug].[lang].md` with frontmatter:
   ```yaml
   ---
   title: "Page Title"
   description: "Page description"
   lang: pl
   translateTo: all
   ---
   ```

2. Create corresponding page in `src/pages/[lang]/[slug].astro`

### Blog Posts

1. Create `src/content/blog/[slug].[lang].md`:
   ```yaml
   ---
   title: "Post Title"
   description: "Post description"
   lang: pl
   publishedAt: 2026-02-05
   author: "Author Name"
   tags: ["tag1", "tag2"]
   translateTo: all
   ---
   ```

## Deployment

This site is deployed as part of the Chataptor Docker stack.

### Manual Build

```bash
npm run build
# Output in dist/
```

### Docker Build (in QuantumChat)

```bash
docker compose -f docker-compose.full.yml --profile build run --rm astro-builder
```

### Production

The `astro-static` container serves the built site via Nginx. Main Nginx routes language paths (`/pl/`, `/en/`, etc.) to this container.

## Code Style

```bash
# Check formatting
npm run lint

# Fix formatting
npm run format
```

## License

Proprietary - BROWIN Sp. z o.o. Sp.k.
