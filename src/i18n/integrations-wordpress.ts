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
