# WordPress Integration Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a multilingual landing page at `/{lang}/integrations/wordpress` promoting the Chataptor WordPress plugin, with reusable section components.

**Architecture:** Astro SSG page composed of 8 reusable section components in `src/components/integrations/`. Translations in `src/i18n/integrations-wordpress.ts` following existing pattern (object per locale, getter function). Page uses `BaseLayout` with `Header`/`Footer`.

**Tech Stack:** Astro 5, Tailwind CSS, TypeScript, Inter font

**Spec:** `docs/superpowers/specs/2026-03-12-wordpress-integration-landing-page-design.md`

**Project root:** `/Volumes/dysk/Dev/ChataptorWebsite`

---

## File Structure

| File | Responsibility |
|------|---------------|
| `src/i18n/integrations-wordpress.ts` | Interface + translations for all 8 locales + getter |
| `src/components/integrations/IntegrationHero.astro` | Hero section with badges, title, CTA buttons |
| `src/components/integrations/FeaturesGrid.astro` | 2x2 grid of feature cards |
| `src/components/integrations/HowItWorks.astro` | 3-step installation flow |
| `src/components/integrations/PlatformSection.astro` | Platform-specific section (WooCommerce) |
| `src/components/integrations/WidgetPreview.astro` | Browser mockup with chat widget |
| `src/components/integrations/TechRequirements.astro` | Compatibility grid |
| `src/components/integrations/IntegrationFAQ.astro` | FAQ accordion |
| `src/components/integrations/IntegrationCTA.astro` | Final dark CTA section |
| `src/pages/[lang]/integrations/wordpress.astro` | Page composing all components |

---

## Chunk 1: Translations & First Components

### Task 1: Translations file

**Files:**
- Create: `src/i18n/integrations-wordpress.ts`

**Context:** Follow the exact pattern from `src/i18n/landing.ts`: TypeScript interface, then `Record<Locale, Interface>` object with all 8 locales, then getter function. Start with full EN translations. For the other 7 locales, copy EN as placeholder (auto-translate will replace them later via `npm run translate`).

- [ ] **Step 1: Create the translations file with interface and EN content**

```typescript
import type { Locale } from './config';

export interface WordPressIntegrationTranslations {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    platformBadge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA: string;
  };
  features: {
    label: string;
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
      colorClass: string;
    }>;
  };
  howItWorks: {
    label: string;
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  woocommerce: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  widgetPreview: {
    label: string;
    title: string;
    subtitle: string;
    browserUrl: string;
    userMsg: string;
    userTranslation: string;
    agentMsg: string;
    agentTranslation: string;
  };
  techRequirements: {
    label: string;
    title: string;
    subtitle: string;
    items: Array<{
      value: string;
      label: string;
    }>;
  };
  faq: {
    label: string;
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  cta: {
    title: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA: string;
  };
}

const en: WordPressIntegrationTranslations = {
  meta: {
    title: 'Chataptor for WordPress — Multilingual Live Chat Plugin',
    description: 'Add a multilingual live chat widget to your WordPress site. Auto-translate conversations in real-time. Free plugin with WooCommerce support.',
  },
  hero: {
    badge: 'Free Plugin',
    platformBadge: 'WordPress',
    title: 'Multilingual Live Chat for',
    titleAccent: 'WordPress',
    subtitle: 'Add a real-time chat widget to your WordPress site. Your customers write in their language, you reply in yours — Chataptor translates everything automatically.',
    primaryCTA: 'Install from WordPress.org',
    secondaryCTA: 'View Demo',
  },
  features: {
    label: 'Key Features',
    title: 'Everything you need to chat globally',
    subtitle: 'One plugin, zero language barriers. Connect with every customer in their native language.',
    items: [
      {
        icon: '🌐',
        title: 'Auto-Translation',
        description: 'Messages are translated in real-time between your language and your customer\'s. Powered by DeepL & OpenAI.',
        colorClass: 'bg-emerald-50',
      },
      {
        icon: '💬',
        title: 'Omnichannel Inbox',
        description: 'Manage conversations from your website, WhatsApp, Messenger, and email — all in one dashboard.',
        colorClass: 'bg-blue-50',
      },
      {
        icon: '🤖',
        title: 'AI Chatbots',
        description: 'Set up automated responses powered by AI. Handle common questions 24/7 in any language.',
        colorClass: 'bg-violet-50',
      },
      {
        icon: '⚡',
        title: '1-Click Install',
        description: 'Install from WordPress.org, paste your API key, done. No coding required. Works with any theme.',
        colorClass: 'bg-orange-50',
      },
    ],
  },
  howItWorks: {
    label: 'Setup in 3 Minutes',
    title: 'How it works',
    subtitle: 'From install to first conversation in under 3 minutes.',
    steps: [
      {
        title: 'Install Plugin',
        description: 'Search "Chataptor" in WordPress Plugins and click Install. Activate with one click.',
      },
      {
        title: 'Connect Account',
        description: 'Enter your Chataptor API key in Settings. Free account includes all features.',
      },
      {
        title: 'Start Chatting',
        description: 'The widget appears on your site. Chat with visitors from your Chataptor dashboard.',
      },
    ],
  },
  woocommerce: {
    badge: 'WooCommerce Enhanced',
    title: 'Built for e-commerce',
    subtitle: 'Deep WooCommerce integration gives you customer context right in the chat.',
    items: [
      {
        icon: '📦',
        title: 'Order Context',
        description: 'See customer\'s recent orders, cart contents, and purchase history alongside the conversation.',
      },
      {
        icon: '🌐',
        title: 'HPOS Ready',
        description: 'Fully compatible with WooCommerce High-Performance Order Storage for maximum speed.',
      },
      {
        icon: '👤',
        title: 'Customer ID',
        description: 'Automatically identifies logged-in WooCommerce customers by name and email.',
      },
    ],
  },
  widgetPreview: {
    label: 'Live Preview',
    title: 'See it in action',
    subtitle: 'The chat widget integrates seamlessly into any WordPress theme.',
    browserUrl: 'yourstore.com/shop',
    userMsg: 'Haben Sie dieses Kleid in Größe 38?',
    userTranslation: 'Do you have this dress in size 38?',
    agentMsg: 'Yes! Size 38 is in stock. Want me to add it to your cart?',
    agentTranslation: 'Auto-translated from English',
  },
  techRequirements: {
    label: 'Compatibility',
    title: 'Technical requirements',
    subtitle: 'Works with virtually any WordPress setup.',
    items: [
      { value: '6.0+', label: 'WordPress' },
      { value: '7.4+', label: 'PHP' },
      { value: '8.0+', label: 'WooCommerce' },
      { value: 'Any', label: 'Theme' },
    ],
  },
  faq: {
    label: 'FAQ',
    title: 'Frequently asked questions',
    items: [
      {
        question: 'Is the plugin really free?',
        answer: 'Yes, the WordPress plugin is 100% free. Chataptor offers a free tier with core features. Premium plans unlock advanced features like AI chatbots and unlimited agents.',
      },
      {
        question: 'How many languages are supported?',
        answer: 'Chataptor supports 30+ languages with automatic real-time translation. Your customers write in their native language, and you see everything translated to yours.',
      },
      {
        question: 'Does it work with page builders like Elementor?',
        answer: 'Yes. The widget loads as a small script tag and works independently of your theme or page builder. Elementor, Divi, Beaver Builder — all supported.',
      },
      {
        question: 'Is it GDPR compliant?',
        answer: 'Yes. Chataptor is fully GDPR/RODO compliant. Data is processed in the EU, and the plugin includes a configurable privacy notice for visitors.',
      },
    ],
  },
  cta: {
    title: 'Ready to chat with the world?',
    subtitle: 'Install Chataptor on your WordPress site in under 3 minutes. Free forever.',
    primaryCTA: 'Install from WordPress.org',
    secondaryCTA: 'Create Free Account',
  },
};

const translations: Record<Locale, WordPressIntegrationTranslations> = {
  en,
  // Placeholder copies — will be replaced by `npm run translate`
  pl: { ...en },
  de: { ...en },
  fr: { ...en },
  es: { ...en },
  it: { ...en },
  cs: { ...en },
  sk: { ...en },
};

export function getWordPressIntegration(lang: Locale): WordPressIntegrationTranslations {
  return translations[lang] || translations.en;
}
```

- [ ] **Step 2: Verify the file compiles**

Run: `cd /Volumes/dysk/Dev/ChataptorWebsite && npx astro check 2>&1 | head -20`
Expected: No errors related to `integrations-wordpress.ts`

- [ ] **Step 3: Commit**

```bash
cd /Volumes/dysk/Dev/ChataptorWebsite
git add src/i18n/integrations-wordpress.ts
git commit -m "feat: add i18n translations for WordPress integration landing page"
```

---

### Task 2: IntegrationHero component

**Files:**
- Create: `src/components/integrations/IntegrationHero.astro`

**Context:** This is a generic hero section for integration pages. It receives all content through props — no WordPress-specific content hardcoded. Follow the Tailwind styling from the main landing page hero (see `src/pages/[lang]/index.astro` lines 198-300 for reference patterns like `bg-zinc-900 text-white rounded-full` buttons, emerald accents).

- [ ] **Step 1: Create the IntegrationHero component**

```astro
---
interface Props {
  badge: string;
  platformBadge: string;
  platformIcon?: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA: { text: string; href: string };
}

const { badge, platformBadge, platformIcon, title, titleAccent, subtitle, primaryCTA, secondaryCTA } = Astro.props;
---

<section class="relative text-center py-24 md:py-32 px-6 bg-white overflow-hidden">
  <!-- Subtle radial gradient background -->
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.04),transparent_60%)]"></div>

  <div class="relative max-w-3xl mx-auto">
    <!-- Badges -->
    <div class="flex items-center justify-center gap-2 mb-6">
      <span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full ring-1 ring-emerald-200">
        ⚡ {badge}
      </span>
      <span class="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full ring-1 ring-blue-200">
        <slot name="platform-icon" />
        {platformBadge}
      </span>
    </div>

    <!-- Title -->
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4">
      {title}{' '}
      <span class="text-emerald-600">{titleAccent}</span>
    </h1>

    <!-- Subtitle -->
    <p class="text-base md:text-lg text-zinc-500 max-w-xl mx-auto mb-8 leading-relaxed">
      {subtitle}
    </p>

    <!-- CTA Buttons -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
      <a
        href={primaryCTA.href}
        class="inline-flex items-center gap-2 bg-zinc-900 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-zinc-900/10"
      >
        <slot name="primary-icon" />
        {primaryCTA.text}
      </a>
      <a
        href={secondaryCTA.href}
        class="inline-flex items-center gap-2 bg-white text-zinc-900 px-7 py-3.5 rounded-full font-semibold text-sm ring-1 ring-zinc-200 hover:ring-zinc-300 hover:shadow-md transition-all"
      >
        {secondaryCTA.text} →
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify no syntax errors**

Run: `cd /Volumes/dysk/Dev/ChataptorWebsite && npx astro check 2>&1 | head -20`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
cd /Volumes/dysk/Dev/ChataptorWebsite
git add src/components/integrations/IntegrationHero.astro
git commit -m "feat: add IntegrationHero reusable component"
```

---

### Task 3: FeaturesGrid component

**Files:**
- Create: `src/components/integrations/FeaturesGrid.astro`

**Context:** A 2x2 grid of feature cards. On mobile it becomes 1-column. Cards have icon, title, description with colored icon backgrounds. Follow card pattern: `rounded-2xl ring-1 ring-zinc-200` with hover shadow.

- [ ] **Step 1: Create the FeaturesGrid component**

```astro
---
interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
}

interface Props {
  label: string;
  title: string;
  subtitle: string;
  features: FeatureItem[];
}

const { label, title, subtitle, features } = Astro.props;
---

<section class="py-20 px-6 bg-zinc-50">
  <div class="max-w-4xl mx-auto">
    <p class="text-xs font-bold uppercase tracking-widest text-emerald-600 text-center mb-3">
      {label}
    </p>
    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-3">
      {title}
    </h2>
    <p class="text-base text-zinc-500 text-center max-w-lg mx-auto mb-12 leading-relaxed">
      {subtitle}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      {features.map((feature) => (
        <div class="bg-white rounded-2xl ring-1 ring-zinc-200 p-7 hover:shadow-lg hover:shadow-zinc-100 transition-all">
          <div class:list={['w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4', feature.colorClass]}>
            {feature.icon}
          </div>
          <h3 class="text-base font-bold mb-2">{feature.title}</h3>
          <p class="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
cd /Volumes/dysk/Dev/ChataptorWebsite
git add src/components/integrations/FeaturesGrid.astro
git commit -m "feat: add FeaturesGrid reusable component"
```

---

### Task 4: HowItWorks component

**Files:**
- Create: `src/components/integrations/HowItWorks.astro`

**Context:** 3 numbered steps displayed horizontally on desktop, vertically on mobile. Dark numbered circles, arrows between steps on desktop.

- [ ] **Step 1: Create the HowItWorks component**

```astro
---
interface Step {
  title: string;
  description: string;
}

interface Props {
  label: string;
  title: string;
  subtitle: string;
  steps: Step[];
}

const { label, title, subtitle, steps } = Astro.props;
---

<section class="py-20 px-6 bg-white">
  <div class="max-w-4xl mx-auto">
    <p class="text-xs font-bold uppercase tracking-widest text-emerald-600 text-center mb-3">
      {label}
    </p>
    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-3">
      {title}
    </h2>
    <p class="text-base text-zinc-500 text-center max-w-lg mx-auto mb-12 leading-relaxed">
      {subtitle}
    </p>

    <div class="flex flex-col md:flex-row gap-8 md:gap-6 justify-center">
      {steps.map((step, i) => (
        <div class="flex-1 text-center relative">
          <div class="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
            {i + 1}
          </div>
          <h3 class="text-base font-bold mb-2">{step.title}</h3>
          <p class="text-sm text-zinc-500 leading-relaxed max-w-[220px] mx-auto">{step.description}</p>
          {i < steps.length - 1 && (
            <span class="hidden md:block absolute top-6 -right-3 text-zinc-300 text-xl">→</span>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
cd /Volumes/dysk/Dev/ChataptorWebsite
git add src/components/integrations/HowItWorks.astro
git commit -m "feat: add HowItWorks reusable component"
```

---

## Chunk 2: Remaining Components

### Task 5: PlatformSection component (WooCommerce)

**Files:**
- Create: `src/components/integrations/PlatformSection.astro`

**Context:** A visually distinct section with gradient background for platform-specific features (e.g. WooCommerce). 3 cards in a row on desktop, 1 column on mobile.

- [ ] **Step 1: Create the PlatformSection component**

```astro
---
interface PlatformFeature {
  icon: string;
  title: string;
  description: string;
}

interface Props {
  badge: string;
  title: string;
  subtitle: string;
  features: PlatformFeature[];
  backgroundClass?: string;
}

const { badge, title, subtitle, features, backgroundClass = 'bg-gradient-to-br from-violet-50 to-blue-50' } = Astro.props;
---

<section class:list={['py-20 px-6', backgroundClass]}>
  <div class="max-w-4xl mx-auto text-center">
    <span class="inline-flex items-center gap-1.5 bg-white text-violet-700 text-xs font-semibold px-3 py-1.5 rounded-full ring-1 ring-violet-200 mb-4">
      <slot name="badge-icon" />
      {badge}
    </span>
    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
      {title}
    </h2>
    <p class="text-base text-zinc-500 max-w-lg mx-auto mb-12 leading-relaxed">
      {subtitle}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      {features.map((feature) => (
        <div class="bg-white rounded-2xl p-6 ring-1 ring-violet-100 text-left">
          <div class="text-2xl mb-3">{feature.icon}</div>
          <h3 class="text-sm font-bold mb-2">{feature.title}</h3>
          <p class="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
cd /Volumes/dysk/Dev/ChataptorWebsite
git add src/components/integrations/PlatformSection.astro
git commit -m "feat: add PlatformSection reusable component"
```

---

### Task 6: WidgetPreview component

**Files:**
- Create: `src/components/integrations/WidgetPreview.astro`

**Context:** A browser mockup (window chrome with dots + URL bar) containing placeholder lines simulating page content, with a chat widget mockup in the bottom-right corner showing a sample translated conversation.

- [ ] **Step 1: Create the WidgetPreview component**

```astro
---
interface Props {
  label: string;
  title: string;
  subtitle: string;
  browserUrl: string;
  userMsg: string;
  userTranslation: string;
  agentMsg: string;
  agentTranslation: string;
}

const { label, title, subtitle, browserUrl, userMsg, userTranslation, agentMsg, agentTranslation } = Astro.props;
---

<section class="py-20 px-6 bg-white">
  <div class="max-w-4xl mx-auto">
    <p class="text-xs font-bold uppercase tracking-widest text-emerald-600 text-center mb-3">
      {label}
    </p>
    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-3">
      {title}
    </h2>
    <p class="text-base text-zinc-500 text-center max-w-lg mx-auto mb-12 leading-relaxed">
      {subtitle}
    </p>

    <!-- Browser mockup -->
    <div class="bg-zinc-100 rounded-2xl p-4 md:p-8">
      <div class="bg-white rounded-xl overflow-hidden shadow-xl shadow-zinc-200/50">
        <!-- Browser chrome -->
        <div class="flex items-center gap-2 px-4 py-3 bg-zinc-50 border-b border-zinc-200">
          <div class="flex gap-1.5">
            <div class="w-2.5 h-2.5 rounded-full bg-red-300"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-yellow-300"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-green-300"></div>
          </div>
          <div class="flex-1 bg-white rounded-md px-3 py-1.5 text-xs text-zinc-400 ring-1 ring-zinc-200">
            🔒 {browserUrl}
          </div>
        </div>

        <!-- Page content area -->
        <div class="relative p-8 md:p-12 min-h-[280px]">
          <!-- Placeholder lines -->
          <div class="space-y-3">
            <div class="h-3 bg-zinc-100 rounded w-3/5"></div>
            <div class="h-3 bg-zinc-100 rounded w-4/5"></div>
            <div class="h-3 bg-zinc-100 rounded w-2/5"></div>
            <div class="mt-6 h-3 bg-zinc-100 rounded w-7/12"></div>
            <div class="h-3 bg-zinc-100 rounded w-1/2"></div>
            <div class="h-3 bg-zinc-100 rounded w-2/3"></div>
          </div>

          <!-- Chat widget mockup -->
          <div class="absolute bottom-4 right-4 w-64 bg-white rounded-2xl shadow-2xl ring-1 ring-zinc-200 overflow-hidden">
            <div class="bg-zinc-900 text-white px-4 py-3 text-sm font-semibold">
              💬 Chat with us
            </div>
            <div class="p-3 space-y-2">
              <!-- User message -->
              <div class="max-w-[85%]">
                <div class="bg-zinc-100 text-zinc-700 rounded-xl px-3 py-2 text-xs leading-relaxed">
                  {userMsg}
                  <div class="text-[10px] text-zinc-400 mt-1 italic">🇩🇪 {userTranslation}</div>
                </div>
              </div>
              <!-- Agent message -->
              <div class="max-w-[85%] ml-auto">
                <div class="bg-zinc-900 text-white rounded-xl px-3 py-2 text-xs leading-relaxed">
                  {agentMsg}
                  <div class="text-[10px] text-zinc-400 mt-1 italic">🇬🇧 {agentTranslation}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
cd /Volumes/dysk/Dev/ChataptorWebsite
git add src/components/integrations/WidgetPreview.astro
git commit -m "feat: add WidgetPreview reusable component"
```

---

### Task 7: TechRequirements component

**Files:**
- Create: `src/components/integrations/TechRequirements.astro`

**Context:** A 4-column grid (2x2 on tablet, 1 col on mobile) showing version requirements. Each item is a card with large value and small label.

- [ ] **Step 1: Create the TechRequirements component**

```astro
---
interface Requirement {
  value: string;
  label: string;
}

interface Props {
  label: string;
  title: string;
  subtitle: string;
  items: Requirement[];
}

const { label, title, subtitle, items } = Astro.props;
---

<section class="py-20 px-6 bg-zinc-50">
  <div class="max-w-3xl mx-auto">
    <p class="text-xs font-bold uppercase tracking-widest text-emerald-600 text-center mb-3">
      {label}
    </p>
    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-3">
      {title}
    </h2>
    <p class="text-base text-zinc-500 text-center max-w-lg mx-auto mb-12 leading-relaxed">
      {subtitle}
    </p>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item) => (
        <div class="text-center p-5 bg-white rounded-xl ring-1 ring-zinc-200">
          <div class="text-2xl font-extrabold text-zinc-900">{item.value}</div>
          <div class="text-xs text-zinc-500 mt-1">{item.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
cd /Volumes/dysk/Dev/ChataptorWebsite
git add src/components/integrations/TechRequirements.astro
git commit -m "feat: add TechRequirements reusable component"
```

---

### Task 8: IntegrationFAQ component

**Files:**
- Create: `src/components/integrations/IntegrationFAQ.astro`

**Context:** FAQ section with expandable items. Uses `<details>/<summary>` for native accordion without JS. Styling matches project patterns.

- [ ] **Step 1: Create the IntegrationFAQ component**

```astro
---
interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  label: string;
  title: string;
  items: FAQItem[];
}

const { label, title, items } = Astro.props;
---

<section class="py-20 px-6 bg-white">
  <div class="max-w-2xl mx-auto">
    <p class="text-xs font-bold uppercase tracking-widest text-emerald-600 text-center mb-3">
      {label}
    </p>
    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-12">
      {title}
    </h2>

    <div class="divide-y divide-zinc-200">
      {items.map((item) => (
        <details class="group py-5">
          <summary class="flex items-center justify-between cursor-pointer list-none text-sm font-semibold text-zinc-900 hover:text-zinc-700 transition-colors">
            {item.question}
            <svg class="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-3 text-sm text-zinc-500 leading-relaxed pr-8">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
cd /Volumes/dysk/Dev/ChataptorWebsite
git add src/components/integrations/IntegrationFAQ.astro
git commit -m "feat: add IntegrationFAQ reusable component"
```

---

### Task 9: IntegrationCTA component

**Files:**
- Create: `src/components/integrations/IntegrationCTA.astro`

**Context:** Final call-to-action section with dark background (zinc-900), white title, gray subtitle, and two buttons (white primary + ghost secondary).

- [ ] **Step 1: Create the IntegrationCTA component**

```astro
---
interface Props {
  title: string;
  subtitle: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA: { text: string; href: string };
}

const { title, subtitle, primaryCTA, secondaryCTA } = Astro.props;
---

<section class="py-20 md:py-24 px-6 bg-zinc-900 text-white">
  <div class="max-w-2xl mx-auto text-center">
    <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
      {title}
    </h2>
    <p class="text-base text-zinc-400 mb-8 leading-relaxed">
      {subtitle}
    </p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
      <a
        href={primaryCTA.href}
        class="inline-flex items-center gap-2 bg-white text-zinc-900 px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-zinc-100 transition-all hover:scale-105 active:scale-95"
      >
        <slot name="primary-icon" />
        {primaryCTA.text}
      </a>
      <a
        href={secondaryCTA.href}
        class="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-full font-semibold text-sm ring-1 ring-white/20 hover:ring-white/40 hover:bg-white/5 transition-all"
      >
        {secondaryCTA.text} →
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
cd /Volumes/dysk/Dev/ChataptorWebsite
git add src/components/integrations/IntegrationCTA.astro
git commit -m "feat: add IntegrationCTA reusable component"
```

---

## Chunk 3: Page Assembly & Verification

### Task 10: WordPress integration page

**Files:**
- Create: `src/pages/[lang]/integrations/wordpress.astro`

**Context:** This page composes all 8 components, passes translated data, adds JSON-LD structured data. Uses `BaseLayout` with `Header` and `Footer` (do NOT set `hideHeader`/`hideFooter`). Slug is `"integrations/wordpress"`.

Reference the routing pattern from `src/pages/[lang]/index.astro` (lines 1-16) for `getStaticPaths()` and lang extraction. The main landing page uses `hideHeader={true}` because it has its own custom nav — this page does NOT (it uses the standard Header from BaseLayout).

- [ ] **Step 1: Create the page file**

```astro
---
import { locales, type Locale } from '../../../i18n/config';
import { getWordPressIntegration } from '../../../i18n/integrations-wordpress';
import BaseLayout from '../../../layouts/BaseLayout.astro';
import IntegrationHero from '../../../components/integrations/IntegrationHero.astro';
import FeaturesGrid from '../../../components/integrations/FeaturesGrid.astro';
import HowItWorks from '../../../components/integrations/HowItWorks.astro';
import PlatformSection from '../../../components/integrations/PlatformSection.astro';
import WidgetPreview from '../../../components/integrations/WidgetPreview.astro';
import TechRequirements from '../../../components/integrations/TechRequirements.astro';
import IntegrationFAQ from '../../../components/integrations/IntegrationFAQ.astro';
import IntegrationCTA from '../../../components/integrations/IntegrationCTA.astro';

export function getStaticPaths() {
  return locales.map((lang) => ({
    params: { lang },
  }));
}

const { lang } = Astro.params as { lang: Locale };
const t = getWordPressIntegration(lang);

const wpOrgUrl = 'https://wordpress.org/plugins/chataptor/';
const demoUrl = `/${lang}/`;
const registerUrl = '/register';
---

<BaseLayout
  title={t.meta.title}
  description={t.meta.description}
  lang={lang}
  slug="integrations/wordpress"
>
  <IntegrationHero
    badge={t.hero.badge}
    platformBadge={t.hero.platformBadge}
    title={t.hero.title}
    titleAccent={t.hero.titleAccent}
    subtitle={t.hero.subtitle}
    primaryCTA={{ text: t.hero.primaryCTA, href: wpOrgUrl }}
    secondaryCTA={{ text: t.hero.secondaryCTA, href: demoUrl }}
  >
    <svg slot="platform-icon" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.009 12c0-1.298.283-2.529.784-3.643l4.32 11.838C5.223 18.702 3.01 15.617 3.01 12zm8.991 9c-.934 0-1.836-.135-2.691-.382l2.857-8.301 2.926 8.014c.02.048.042.094.067.137A8.946 8.946 0 0112 21zm1.233-13.209c.573-.03 1.088-.09 1.088-.09.514-.06.454-.812-.06-.783 0 0-1.545.12-2.542.12-.943 0-2.527-.12-2.527-.12-.513-.03-.573.753-.06.783 0 0 .488.06 1.003.09l1.49 4.08-2.09 6.271-3.48-10.35c.574-.03 1.088-.09 1.088-.09.513-.06.453-.812-.06-.783 0 0-1.545.12-2.542.12-.18 0-.39-.005-.61-.013A8.96 8.96 0 0112 3.009c2.349 0 4.494.9 6.1 2.374-.039-.003-.076-.009-.117-.009-1.314 0-2.245 1.143-2.245 2.37 0 .823.475 1.52.982 2.345.38.66.822 1.506.822 2.73 0 .846-.326 1.828-.756 3.195l-.99 3.306-3.553-10.53zm4.937 13.386l2.862-8.27c.535-1.337.713-2.406.713-3.358 0-.345-.023-.666-.065-.962A8.954 8.954 0 0120.991 12c0 3.326-1.796 6.229-4.47 7.807z"/>
    </svg>
    <svg slot="primary-icon" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.009 12c0-1.298.283-2.529.784-3.643l4.32 11.838C5.223 18.702 3.01 15.617 3.01 12zm8.991 9c-.934 0-1.836-.135-2.691-.382l2.857-8.301 2.926 8.014c.02.048.042.094.067.137A8.946 8.946 0 0112 21zm1.233-13.209c.573-.03 1.088-.09 1.088-.09.514-.06.454-.812-.06-.783 0 0-1.545.12-2.542.12-.943 0-2.527-.12-2.527-.12-.513-.03-.573.753-.06.783 0 0 .488.06 1.003.09l1.49 4.08-2.09 6.271-3.48-10.35c.574-.03 1.088-.09 1.088-.09.513-.06.453-.812-.06-.783 0 0-1.545.12-2.542.12-.18 0-.39-.005-.61-.013A8.96 8.96 0 0112 3.009c2.349 0 4.494.9 6.1 2.374-.039-.003-.076-.009-.117-.009-1.314 0-2.245 1.143-2.245 2.37 0 .823.475 1.52.982 2.345.38.66.822 1.506.822 2.73 0 .846-.326 1.828-.756 3.195l-.99 3.306-3.553-10.53zm4.937 13.386l2.862-8.27c.535-1.337.713-2.406.713-3.358 0-.345-.023-.666-.065-.962A8.954 8.954 0 0120.991 12c0 3.326-1.796 6.229-4.47 7.807z"/>
    </svg>
  </IntegrationHero>

  <FeaturesGrid
    label={t.features.label}
    title={t.features.title}
    subtitle={t.features.subtitle}
    features={t.features.items}
  />

  <HowItWorks
    label={t.howItWorks.label}
    title={t.howItWorks.title}
    subtitle={t.howItWorks.subtitle}
    steps={t.howItWorks.steps}
  />

  <PlatformSection
    badge={t.woocommerce.badge}
    title={t.woocommerce.title}
    subtitle={t.woocommerce.subtitle}
    features={t.woocommerce.items}
  />

  <WidgetPreview
    label={t.widgetPreview.label}
    title={t.widgetPreview.title}
    subtitle={t.widgetPreview.subtitle}
    browserUrl={t.widgetPreview.browserUrl}
    userMsg={t.widgetPreview.userMsg}
    userTranslation={t.widgetPreview.userTranslation}
    agentMsg={t.widgetPreview.agentMsg}
    agentTranslation={t.widgetPreview.agentTranslation}
  />

  <TechRequirements
    label={t.techRequirements.label}
    title={t.techRequirements.title}
    subtitle={t.techRequirements.subtitle}
    items={t.techRequirements.items}
  />

  <IntegrationFAQ
    label={t.faq.label}
    title={t.faq.title}
    items={t.faq.items}
  />

  <IntegrationCTA
    title={t.cta.title}
    subtitle={t.cta.subtitle}
    primaryCTA={{ text: t.cta.primaryCTA, href: wpOrgUrl }}
    secondaryCTA={{ text: t.cta.secondaryCTA, href: registerUrl }}
  >
    <svg slot="primary-icon" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.009 12c0-1.298.283-2.529.784-3.643l4.32 11.838C5.223 18.702 3.01 15.617 3.01 12zm8.991 9c-.934 0-1.836-.135-2.691-.382l2.857-8.301 2.926 8.014c.02.048.042.094.067.137A8.946 8.946 0 0112 21zm1.233-13.209c.573-.03 1.088-.09 1.088-.09.514-.06.454-.812-.06-.783 0 0-1.545.12-2.542.12-.943 0-2.527-.12-2.527-.12-.513-.03-.573.753-.06.783 0 0 .488.06 1.003.09l1.49 4.08-2.09 6.271-3.48-10.35c.574-.03 1.088-.09 1.088-.09.513-.06.453-.812-.06-.783 0 0-1.545.12-2.542.12-.18 0-.39-.005-.61-.013A8.96 8.96 0 0112 3.009c2.349 0 4.494.9 6.1 2.374-.039-.003-.076-.009-.117-.009-1.314 0-2.245 1.143-2.245 2.37 0 .823.475 1.52.982 2.345.38.66.822 1.506.822 2.73 0 .846-.326 1.828-.756 3.195l-.99 3.306-3.553-10.53zm4.937 13.386l2.862-8.27c.535-1.337.713-2.406.713-3.358 0-.345-.023-.666-.065-.962A8.954 8.954 0 0120.991 12c0 3.326-1.796 6.229-4.47 7.807z"/>
    </svg>
  </IntegrationCTA>

  <!-- JSON-LD: SoftwareApplication -->
  <script type="application/ld+json" set:html={JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Chataptor for WordPress",
    "applicationCategory": "CommunicationApplication",
    "operatingSystem": "WordPress 6.0+",
    "description": t.meta.description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  })} />
</BaseLayout>
```

- [ ] **Step 2: Verify the build compiles**

Run: `cd /Volumes/dysk/Dev/ChataptorWebsite && npx astro check 2>&1 | head -30`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
cd /Volumes/dysk/Dev/ChataptorWebsite
git add src/pages/[lang]/integrations/wordpress.astro
git commit -m "feat: add WordPress integration landing page"
```

---

### Task 11: Build verification & dev server test

**Files:**
- No new files

**Context:** Verify the full build works and all 8 locale variants are generated. Then start dev server and visually check the page.

- [ ] **Step 1: Run full build**

Run: `cd /Volumes/dysk/Dev/ChataptorWebsite && npm run build 2>&1 | tail -20`
Expected: Build succeeds. Output should show pages generated for all 8 locales including `/en/integrations/wordpress/`, `/pl/integrations/wordpress/`, etc.

- [ ] **Step 2: Verify generated pages**

Run: `ls /Volumes/dysk/Dev/ChataptorWebsite/dist/*/integrations/wordpress/ 2>/dev/null || echo "Check dist structure:" && find /Volumes/dysk/Dev/ChataptorWebsite/dist -path "*/integrations/wordpress*" -type f`
Expected: 8 `index.html` files, one per locale

- [ ] **Step 3: Start dev server and verify visually**

Run: `cd /Volumes/dysk/Dev/ChataptorWebsite && npm run dev &`

Open: `http://localhost:4321/en/integrations/wordpress`

Verify:
- All 8 sections render correctly
- Header and Footer are present
- Language switcher works (click a language, URL changes to `/{lang}/integrations/wordpress`)
- Responsive layout: resize browser to mobile width, verify single-column layout
- FAQ accordion: click a question, verify answer expands
- CTA buttons have correct hrefs

Stop dev server after verification.

- [ ] **Step 4: Final commit with any fixes**

If any fixes were needed during visual verification:
```bash
cd /Volumes/dysk/Dev/ChataptorWebsite
git add -A
git commit -m "fix: adjust WordPress integration page after visual review"
```

---

### Task 12: Run auto-translate for all locales

**Files:**
- Modify: `src/i18n/integrations-wordpress.ts` (translations for 7 non-EN locales)

**Context:** The project has a `npm run translate` script that uses OpenAI to auto-translate i18n files. Run it to generate proper translations for pl, de, fr, es, it, cs, sk. Then manually review the Polish translation for quality.

- [ ] **Step 1: Run the translate script**

Run: `cd /Volumes/dysk/Dev/ChataptorWebsite && npm run translate 2>&1 | tail -20`
Expected: Script processes `integrations-wordpress.ts` and generates translations

**Note:** If the translate script doesn't pick up the new file automatically, check `scripts/translate.js` (or similar) to understand how it discovers i18n files and adjust accordingly.

- [ ] **Step 2: Verify translations are populated**

Run: `cd /Volumes/dysk/Dev/ChataptorWebsite && grep -c "Free Plugin" src/i18n/integrations-wordpress.ts`
Expected: Should show 1 (only EN). If it shows 8, translations weren't replaced.

- [ ] **Step 3: Manually review Polish translation**

Read: `src/i18n/integrations-wordpress.ts` — find the `pl:` section.

Check:
- Polish diacritics are correct (ą, ć, ę, ł, ń, ó, ś, ź, ż)
- Technical terms are appropriate (e.g. "wtyczka" not "plugin" where Polish term fits)
- CTA copy sounds natural in Polish

Fix any issues manually.

- [ ] **Step 4: Commit translations**

```bash
cd /Volumes/dysk/Dev/ChataptorWebsite
git add src/i18n/integrations-wordpress.ts
git commit -m "feat: add translations for WordPress integration page (8 locales)"
```
