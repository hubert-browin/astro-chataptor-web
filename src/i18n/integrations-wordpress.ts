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

const pl: WordPressIntegrationTranslations = {
  meta: {
    title: 'Chataptor dla WordPress — Wielojęzyczna wtyczka czatu na żywo',
    description: 'Dodaj wielojęzyczny widget czatu na żywo do swojego sklepu WordPress. Automatyczne tłumaczenie rozmów w czasie rzeczywistym. Darmowa wtyczka z obsługą WooCommerce.',
  },
  hero: {
    badge: 'Darmowa wtyczka',
    platformBadge: 'WordPress',
    title: 'Wielojęzyczny czat na żywo dla',
    titleAccent: 'WordPress',
    subtitle: 'Dodaj widget czatu do swojego sklepu WordPress. Klienci piszą w swoim języku, Ty odpowiadasz w swoim — Chataptor tłumaczy wszystko automatycznie.',
    primaryCTA: 'Zainstaluj z WordPress.org',
    secondaryCTA: 'Zobacz demo',
  },
  features: {
    label: 'Kluczowe funkcje',
    title: 'Wszystko, czego potrzebujesz do globalnego czatu',
    subtitle: 'Jedna wtyczka, zero barier językowych. Rozmawiaj z każdym klientem w jego ojczystym języku.',
    items: [
      {
        icon: '🌐',
        title: 'Automatyczne tłumaczenie',
        description: 'Wiadomości są tłumaczone w czasie rzeczywistym między Twoim językiem a językiem klienta. Technologia DeepL i OpenAI.',
        colorClass: 'bg-emerald-50',
      },
      {
        icon: '💬',
        title: 'Skrzynka omnichannel',
        description: 'Zarządzaj rozmowami z witryny, WhatsAppa, Messengera i e-maila — wszystko w jednym panelu.',
        colorClass: 'bg-blue-50',
      },
      {
        icon: '🤖',
        title: 'Chatboty AI',
        description: 'Skonfiguruj automatyczne odpowiedzi oparte na AI. Obsługuj typowe pytania 24/7 w dowolnym języku.',
        colorClass: 'bg-violet-50',
      },
      {
        icon: '⚡',
        title: 'Instalacja jednym kliknięciem',
        description: 'Zainstaluj z WordPress.org, wklej klucz API i gotowe. Bez kodowania. Działa z każdym motywem.',
        colorClass: 'bg-orange-50',
      },
    ],
  },
  howItWorks: {
    label: 'Konfiguracja w 3 minuty',
    title: 'Jak to działa',
    subtitle: 'Od instalacji do pierwszej rozmowy w mniej niż 3 minuty.',
    steps: [
      {
        title: 'Zainstaluj wtyczkę',
        description: 'Wyszukaj „Chataptor" w Wtyczkach WordPress i kliknij Zainstaluj. Aktywuj jednym kliknięciem.',
      },
      {
        title: 'Połącz konto',
        description: 'Wpisz klucz API Chataptor w ustawieniach. Darmowe konto obejmuje wszystkie funkcje.',
      },
      {
        title: 'Zacznij rozmawiać',
        description: 'Widget pojawia się na Twojej stronie. Chatuj z odwiedzającymi z poziomu panelu Chataptor.',
      },
    ],
  },
  woocommerce: {
    badge: 'Rozszerzona integracja WooCommerce',
    title: 'Stworzony dla e-commerce',
    subtitle: 'Głęboka integracja z WooCommerce daje Ci pełen kontekst klienta bezpośrednio w czacie.',
    items: [
      {
        icon: '📦',
        title: 'Kontekst zamówień',
        description: 'Widzisz ostatnie zamówienia klienta, zawartość koszyka i historię zakupów obok rozmowy.',
      },
      {
        icon: '🌐',
        title: 'Gotowy na HPOS',
        description: 'W pełni kompatybilny z WooCommerce High-Performance Order Storage dla maksymalnej szybkości.',
      },
      {
        icon: '👤',
        title: 'Identyfikacja klienta',
        description: 'Automatycznie rozpoznaje zalogowanych klientów WooCommerce po imieniu i adresie e-mail.',
      },
    ],
  },
  widgetPreview: {
    label: 'Podgląd na żywo',
    title: 'Zobacz w akcji',
    subtitle: 'Widget czatu płynnie integruje się z każdym motywem WordPress.',
    browserUrl: 'yourstore.com/shop',
    userMsg: 'Haben Sie dieses Kleid in Größe 38?',
    userTranslation: 'Czy mają Państwo tę sukienkę w rozmiarze 38?',
    agentMsg: 'Yes! Size 38 is in stock. Want me to add it to your cart?',
    agentTranslation: 'Automatycznie przetłumaczone z angielskiego',
  },
  techRequirements: {
    label: 'Kompatybilność',
    title: 'Wymagania techniczne',
    subtitle: 'Działa praktycznie z każdą konfiguracją WordPress.',
    items: [
      { value: '6.0+', label: 'WordPress' },
      { value: '7.4+', label: 'PHP' },
      { value: '8.0+', label: 'WooCommerce' },
      { value: 'Dowolny', label: 'Motyw' },
    ],
  },
  faq: {
    label: 'FAQ',
    title: 'Często zadawane pytania',
    items: [
      {
        question: 'Czy wtyczka jest naprawdę darmowa?',
        answer: 'Tak, wtyczka WordPress jest w 100% bezpłatna. Chataptor oferuje darmowy plan z podstawowymi funkcjami. Plany premium odblokowują zaawansowane opcje, takie jak chatboty AI i nieograniczona liczba agentów.',
      },
      {
        question: 'Ile języków jest obsługiwanych?',
        answer: 'Chataptor obsługuje ponad 30 języków z automatycznym tłumaczeniem w czasie rzeczywistym. Klienci piszą w swoim ojczystym języku, a Ty widzisz wszystko przetłumaczone na swój.',
      },
      {
        question: 'Czy działa z page builderami jak Elementor?',
        answer: 'Tak. Widget ładuje się jako mały tag skryptu i działa niezależnie od motywu lub page buildera. Elementor, Divi, Beaver Builder — wszystkie są obsługiwane.',
      },
      {
        question: 'Czy spełnia wymogi RODO/GDPR?',
        answer: 'Tak. Chataptor jest w pełni zgodny z RODO/GDPR. Dane są przetwarzane w UE, a wtyczka zawiera konfigurowalne powiadomienie o prywatności dla odwiedzających.',
      },
    ],
  },
  cta: {
    title: 'Gotowy rozmawiać z całym światem?',
    subtitle: 'Zainstaluj Chataptor na swojej stronie WordPress w mniej niż 3 minuty. Bezpłatnie na zawsze.',
    primaryCTA: 'Zainstaluj z WordPress.org',
    secondaryCTA: 'Utwórz darmowe konto',
  },
};

const de: WordPressIntegrationTranslations = {
  meta: {
    title: 'Chataptor für WordPress — Mehrsprachiges Live-Chat-Plugin',
    description: 'Fügen Sie Ihrer WordPress-Website ein mehrsprachiges Live-Chat-Widget hinzu. Automatische Echtzeitübersetzung von Gesprächen. Kostenloses Plugin mit WooCommerce-Unterstützung.',
  },
  hero: {
    badge: 'Kostenloses Plugin',
    platformBadge: 'WordPress',
    title: 'Mehrsprachiger Live-Chat für',
    titleAccent: 'WordPress',
    subtitle: 'Fügen Sie Ihrer WordPress-Website ein Echtzeit-Chat-Widget hinzu. Ihre Kunden schreiben in ihrer Sprache, Sie antworten in Ihrer — Chataptor übersetzt alles automatisch.',
    primaryCTA: 'Von WordPress.org installieren',
    secondaryCTA: 'Demo ansehen',
  },
  features: {
    label: 'Hauptfunktionen',
    title: 'Alles, was Sie für globalen Chat benötigen',
    subtitle: 'Ein Plugin, keine Sprachbarrieren. Kommunizieren Sie mit jedem Kunden in seiner Muttersprache.',
    items: [
      {
        icon: '🌐',
        title: 'Automatische Übersetzung',
        description: 'Nachrichten werden in Echtzeit zwischen Ihrer Sprache und der Sprache Ihres Kunden übersetzt. Unterstützt von DeepL & OpenAI.',
        colorClass: 'bg-emerald-50',
      },
      {
        icon: '💬',
        title: 'Omnichannel-Posteingang',
        description: 'Verwalten Sie Gespräche von Ihrer Website, WhatsApp, Messenger und E-Mail — alles in einem Dashboard.',
        colorClass: 'bg-blue-50',
      },
      {
        icon: '🤖',
        title: 'KI-Chatbots',
        description: 'Richten Sie KI-gestützte automatische Antworten ein. Beantworten Sie häufige Fragen rund um die Uhr in jeder Sprache.',
        colorClass: 'bg-violet-50',
      },
      {
        icon: '⚡',
        title: '1-Klick-Installation',
        description: 'Von WordPress.org installieren, API-Schlüssel einfügen, fertig. Kein Programmieren erforderlich. Funktioniert mit jedem Theme.',
        colorClass: 'bg-orange-50',
      },
    ],
  },
  howItWorks: {
    label: 'Einrichtung in 3 Minuten',
    title: 'So funktioniert es',
    subtitle: 'Von der Installation bis zum ersten Gespräch in unter 3 Minuten.',
    steps: [
      {
        title: 'Plugin installieren',
        description: 'Suchen Sie nach „Chataptor" in WordPress-Plugins und klicken Sie auf Installieren. Mit einem Klick aktivieren.',
      },
      {
        title: 'Konto verbinden',
        description: 'Geben Sie Ihren Chataptor-API-Schlüssel in den Einstellungen ein. Das kostenlose Konto umfasst alle Funktionen.',
      },
      {
        title: 'Chatten beginnen',
        description: 'Das Widget erscheint auf Ihrer Website. Chatten Sie mit Besuchern über Ihr Chataptor-Dashboard.',
      },
    ],
  },
  woocommerce: {
    badge: 'WooCommerce-Integration',
    title: 'Für E-Commerce entwickelt',
    subtitle: 'Die tiefe WooCommerce-Integration liefert Ihnen den Kundenkontext direkt im Chat.',
    items: [
      {
        icon: '📦',
        title: 'Bestellkontext',
        description: 'Sehen Sie die letzten Bestellungen, den Warenkorbinhalt und die Kaufhistorie des Kunden neben dem Gespräch.',
      },
      {
        icon: '🌐',
        title: 'HPOS-kompatibel',
        description: 'Vollständig kompatibel mit WooCommerce High-Performance Order Storage für maximale Geschwindigkeit.',
      },
      {
        icon: '👤',
        title: 'Kundenerkennung',
        description: 'Identifiziert eingeloggte WooCommerce-Kunden automatisch anhand von Name und E-Mail-Adresse.',
      },
    ],
  },
  widgetPreview: {
    label: 'Live-Vorschau',
    title: 'Sehen Sie es in Aktion',
    subtitle: 'Das Chat-Widget fügt sich nahtlos in jedes WordPress-Theme ein.',
    browserUrl: 'yourstore.com/shop',
    userMsg: 'Haben Sie dieses Kleid in Größe 38?',
    userTranslation: 'Do you have this dress in size 38?',
    agentMsg: 'Yes! Size 38 is in stock. Want me to add it to your cart?',
    agentTranslation: 'Automatisch aus dem Englischen übersetzt',
  },
  techRequirements: {
    label: 'Kompatibilität',
    title: 'Technische Anforderungen',
    subtitle: 'Funktioniert mit praktisch jeder WordPress-Konfiguration.',
    items: [
      { value: '6.0+', label: 'WordPress' },
      { value: '7.4+', label: 'PHP' },
      { value: '8.0+', label: 'WooCommerce' },
      { value: 'Beliebig', label: 'Theme' },
    ],
  },
  faq: {
    label: 'FAQ',
    title: 'Häufig gestellte Fragen',
    items: [
      {
        question: 'Ist das Plugin wirklich kostenlos?',
        answer: 'Ja, das WordPress-Plugin ist zu 100 % kostenlos. Chataptor bietet einen kostenlosen Tarif mit Kernfunktionen an. Premium-Pläne schalten erweiterte Funktionen wie KI-Chatbots und unbegrenzte Agenten frei.',
      },
      {
        question: 'Wie viele Sprachen werden unterstützt?',
        answer: 'Chataptor unterstützt über 30 Sprachen mit automatischer Echtzeitübersetzung. Ihre Kunden schreiben in ihrer Muttersprache, und Sie sehen alles in Ihre Sprache übersetzt.',
      },
      {
        question: 'Funktioniert es mit Page-Buildern wie Elementor?',
        answer: 'Ja. Das Widget lädt als kleines Script-Tag und arbeitet unabhängig von Ihrem Theme oder Page-Builder. Elementor, Divi, Beaver Builder — alle werden unterstützt.',
      },
      {
        question: 'Ist es DSGVO-konform?',
        answer: 'Ja. Chataptor ist vollständig DSGVO/GDPR-konform. Daten werden in der EU verarbeitet, und das Plugin enthält einen konfigurierbaren Datenschutzhinweis für Besucher.',
      },
    ],
  },
  cta: {
    title: 'Bereit, mit der Welt zu chatten?',
    subtitle: 'Installieren Sie Chataptor auf Ihrer WordPress-Website in unter 3 Minuten. Dauerhaft kostenlos.',
    primaryCTA: 'Von WordPress.org installieren',
    secondaryCTA: 'Kostenloses Konto erstellen',
  },
};

const fr: WordPressIntegrationTranslations = {
  meta: {
    title: 'Chataptor pour WordPress — Plugin de chat en direct multilingue',
    description: 'Ajoutez un widget de chat en direct multilingue à votre site WordPress. Traduction automatique des conversations en temps réel. Plugin gratuit avec support WooCommerce.',
  },
  hero: {
    badge: 'Plugin gratuit',
    platformBadge: 'WordPress',
    title: 'Chat en direct multilingue pour',
    titleAccent: 'WordPress',
    subtitle: 'Ajoutez un widget de chat en temps réel à votre site WordPress. Vos clients écrivent dans leur langue, vous répondez dans la vôtre — Chataptor traduit tout automatiquement.',
    primaryCTA: 'Installer depuis WordPress.org',
    secondaryCTA: 'Voir la démo',
  },
  features: {
    label: 'Fonctionnalités clés',
    title: 'Tout ce qu\'il faut pour chatter à l\'échelle mondiale',
    subtitle: 'Un seul plugin, zéro barrière linguistique. Communiquez avec chaque client dans sa langue maternelle.',
    items: [
      {
        icon: '🌐',
        title: 'Traduction automatique',
        description: 'Les messages sont traduits en temps réel entre votre langue et celle de votre client. Propulsé par DeepL & OpenAI.',
        colorClass: 'bg-emerald-50',
      },
      {
        icon: '💬',
        title: 'Boîte de réception omnicanale',
        description: 'Gérez les conversations depuis votre site, WhatsApp, Messenger et e-mail — tout dans un seul tableau de bord.',
        colorClass: 'bg-blue-50',
      },
      {
        icon: '🤖',
        title: 'Chatbots IA',
        description: 'Configurez des réponses automatiques alimentées par l\'IA. Gérez les questions courantes 24h/24 dans n\'importe quelle langue.',
        colorClass: 'bg-violet-50',
      },
      {
        icon: '⚡',
        title: 'Installation en 1 clic',
        description: 'Installez depuis WordPress.org, collez votre clé API, c\'est fait. Aucun code requis. Fonctionne avec tous les thèmes.',
        colorClass: 'bg-orange-50',
      },
    ],
  },
  howItWorks: {
    label: 'Configuration en 3 minutes',
    title: 'Comment ça marche',
    subtitle: 'De l\'installation à la première conversation en moins de 3 minutes.',
    steps: [
      {
        title: 'Installer le plugin',
        description: 'Recherchez « Chataptor » dans les plugins WordPress et cliquez sur Installer. Activez en un clic.',
      },
      {
        title: 'Connecter votre compte',
        description: 'Entrez votre clé API Chataptor dans les paramètres. Le compte gratuit inclut toutes les fonctionnalités.',
      },
      {
        title: 'Commencer à chatter',
        description: 'Le widget apparaît sur votre site. Chattez avec les visiteurs depuis votre tableau de bord Chataptor.',
      },
    ],
  },
  woocommerce: {
    badge: 'Intégration WooCommerce avancée',
    title: 'Conçu pour le e-commerce',
    subtitle: 'L\'intégration profonde avec WooCommerce vous donne le contexte client directement dans le chat.',
    items: [
      {
        icon: '📦',
        title: 'Contexte des commandes',
        description: 'Consultez les commandes récentes, le contenu du panier et l\'historique d\'achats du client à côté de la conversation.',
      },
      {
        icon: '🌐',
        title: 'Compatible HPOS',
        description: 'Entièrement compatible avec WooCommerce High-Performance Order Storage pour une vitesse maximale.',
      },
      {
        icon: '👤',
        title: 'Identification client',
        description: 'Identifie automatiquement les clients WooCommerce connectés par nom et adresse e-mail.',
      },
    ],
  },
  widgetPreview: {
    label: 'Aperçu en direct',
    title: 'Voyez-le en action',
    subtitle: 'Le widget de chat s\'intègre parfaitement à tous les thèmes WordPress.',
    browserUrl: 'yourstore.com/shop',
    userMsg: 'Haben Sie dieses Kleid in Größe 38?',
    userTranslation: 'Avez-vous cette robe en taille 38 ?',
    agentMsg: 'Yes! Size 38 is in stock. Want me to add it to your cart?',
    agentTranslation: 'Traduit automatiquement depuis l\'anglais',
  },
  techRequirements: {
    label: 'Compatibilité',
    title: 'Exigences techniques',
    subtitle: 'Fonctionne avec pratiquement toute configuration WordPress.',
    items: [
      { value: '6.0+', label: 'WordPress' },
      { value: '7.4+', label: 'PHP' },
      { value: '8.0+', label: 'WooCommerce' },
      { value: 'Tous', label: 'Thème' },
    ],
  },
  faq: {
    label: 'FAQ',
    title: 'Questions fréquemment posées',
    items: [
      {
        question: 'Le plugin est-il vraiment gratuit ?',
        answer: 'Oui, le plugin WordPress est 100 % gratuit. Chataptor propose un niveau gratuit avec les fonctionnalités essentielles. Les plans premium débloquent des fonctionnalités avancées comme les chatbots IA et les agents illimités.',
      },
      {
        question: 'Combien de langues sont prises en charge ?',
        answer: 'Chataptor prend en charge plus de 30 langues avec une traduction automatique en temps réel. Vos clients écrivent dans leur langue maternelle, et vous voyez tout traduit dans la vôtre.',
      },
      {
        question: 'Fonctionne-t-il avec des page builders comme Elementor ?',
        answer: 'Oui. Le widget se charge comme une petite balise script et fonctionne indépendamment de votre thème ou page builder. Elementor, Divi, Beaver Builder — tous pris en charge.',
      },
      {
        question: 'Est-il conforme au RGPD ?',
        answer: 'Oui. Chataptor est entièrement conforme au RGPD/GDPR. Les données sont traitées dans l\'UE, et le plugin inclut un avis de confidentialité configurable pour les visiteurs.',
      },
    ],
  },
  cta: {
    title: 'Prêt à chatter avec le monde entier ?',
    subtitle: 'Installez Chataptor sur votre site WordPress en moins de 3 minutes. Gratuit pour toujours.',
    primaryCTA: 'Installer depuis WordPress.org',
    secondaryCTA: 'Créer un compte gratuit',
  },
};

const es: WordPressIntegrationTranslations = {
  meta: {
    title: 'Chataptor para WordPress — Plugin de chat en vivo multilingüe',
    description: 'Añade un widget de chat en vivo multilingüe a tu sitio WordPress. Traducción automática de conversaciones en tiempo real. Plugin gratuito con soporte para WooCommerce.',
  },
  hero: {
    badge: 'Plugin gratuito',
    platformBadge: 'WordPress',
    title: 'Chat en vivo multilingüe para',
    titleAccent: 'WordPress',
    subtitle: 'Añade un widget de chat en tiempo real a tu sitio WordPress. Tus clientes escriben en su idioma, tú respondes en el tuyo — Chataptor lo traduce todo automáticamente.',
    primaryCTA: 'Instalar desde WordPress.org',
    secondaryCTA: 'Ver demo',
  },
  features: {
    label: 'Funciones clave',
    title: 'Todo lo que necesitas para chatear globalmente',
    subtitle: 'Un solo plugin, cero barreras lingüísticas. Conecta con cada cliente en su idioma nativo.',
    items: [
      {
        icon: '🌐',
        title: 'Traducción automática',
        description: 'Los mensajes se traducen en tiempo real entre tu idioma y el de tu cliente. Impulsado por DeepL y OpenAI.',
        colorClass: 'bg-emerald-50',
      },
      {
        icon: '💬',
        title: 'Bandeja omnicanal',
        description: 'Gestiona conversaciones desde tu sitio web, WhatsApp, Messenger y correo electrónico — todo en un solo panel.',
        colorClass: 'bg-blue-50',
      },
      {
        icon: '🤖',
        title: 'Chatbots con IA',
        description: 'Configura respuestas automáticas impulsadas por IA. Gestiona preguntas frecuentes 24/7 en cualquier idioma.',
        colorClass: 'bg-violet-50',
      },
      {
        icon: '⚡',
        title: 'Instalación en 1 clic',
        description: 'Instala desde WordPress.org, pega tu clave API y listo. Sin programación. Funciona con cualquier tema.',
        colorClass: 'bg-orange-50',
      },
    ],
  },
  howItWorks: {
    label: 'Configuración en 3 minutos',
    title: 'Cómo funciona',
    subtitle: 'Desde la instalación hasta la primera conversación en menos de 3 minutos.',
    steps: [
      {
        title: 'Instalar el plugin',
        description: 'Busca «Chataptor» en los plugins de WordPress y haz clic en Instalar. Actívalo con un solo clic.',
      },
      {
        title: 'Conectar tu cuenta',
        description: 'Introduce tu clave API de Chataptor en los ajustes. La cuenta gratuita incluye todas las funciones.',
      },
      {
        title: 'Empezar a chatear',
        description: 'El widget aparece en tu sitio. Chatea con los visitantes desde tu panel de Chataptor.',
      },
    ],
  },
  woocommerce: {
    badge: 'Integración avanzada con WooCommerce',
    title: 'Diseñado para el e-commerce',
    subtitle: 'La integración profunda con WooCommerce te da el contexto del cliente directamente en el chat.',
    items: [
      {
        icon: '📦',
        title: 'Contexto de pedidos',
        description: 'Ve los pedidos recientes, el contenido del carrito y el historial de compras del cliente junto a la conversación.',
      },
      {
        icon: '🌐',
        title: 'Compatible con HPOS',
        description: 'Totalmente compatible con WooCommerce High-Performance Order Storage para máxima velocidad.',
      },
      {
        icon: '👤',
        title: 'Identificación de clientes',
        description: 'Identifica automáticamente a los clientes de WooCommerce registrados por nombre y correo electrónico.',
      },
    ],
  },
  widgetPreview: {
    label: 'Vista previa en vivo',
    title: 'Véalo en acción',
    subtitle: 'El widget de chat se integra perfectamente en cualquier tema de WordPress.',
    browserUrl: 'yourstore.com/shop',
    userMsg: 'Haben Sie dieses Kleid in Größe 38?',
    userTranslation: '¿Tiene este vestido en talla 38?',
    agentMsg: 'Yes! Size 38 is in stock. Want me to add it to your cart?',
    agentTranslation: 'Traducido automáticamente del inglés',
  },
  techRequirements: {
    label: 'Compatibilidad',
    title: 'Requisitos técnicos',
    subtitle: 'Funciona con prácticamente cualquier configuración de WordPress.',
    items: [
      { value: '6.0+', label: 'WordPress' },
      { value: '7.4+', label: 'PHP' },
      { value: '8.0+', label: 'WooCommerce' },
      { value: 'Cualquiera', label: 'Tema' },
    ],
  },
  faq: {
    label: 'FAQ',
    title: 'Preguntas frecuentes',
    items: [
      {
        question: '¿El plugin es realmente gratuito?',
        answer: 'Sí, el plugin de WordPress es 100 % gratuito. Chataptor ofrece un nivel gratuito con las funciones principales. Los planes premium desbloquean funciones avanzadas como chatbots con IA y agentes ilimitados.',
      },
      {
        question: '¿Cuántos idiomas son compatibles?',
        answer: 'Chataptor admite más de 30 idiomas con traducción automática en tiempo real. Tus clientes escriben en su idioma nativo y tú ves todo traducido al tuyo.',
      },
      {
        question: '¿Funciona con page builders como Elementor?',
        answer: 'Sí. El widget se carga como una pequeña etiqueta de script y funciona independientemente de tu tema o page builder. Elementor, Divi, Beaver Builder — todos son compatibles.',
      },
      {
        question: '¿Cumple con el RGPD?',
        answer: 'Sí. Chataptor cumple plenamente con el RGPD/GDPR. Los datos se procesan en la UE y el plugin incluye un aviso de privacidad configurable para los visitantes.',
      },
    ],
  },
  cta: {
    title: '¿Listo para chatear con el mundo?',
    subtitle: 'Instala Chataptor en tu sitio WordPress en menos de 3 minutos. Gratis para siempre.',
    primaryCTA: 'Instalar desde WordPress.org',
    secondaryCTA: 'Crear cuenta gratuita',
  },
};

const it: WordPressIntegrationTranslations = {
  meta: {
    title: 'Chataptor per WordPress — Plugin di live chat multilingue',
    description: 'Aggiungi un widget di live chat multilingue al tuo sito WordPress. Traduzione automatica delle conversazioni in tempo reale. Plugin gratuito con supporto WooCommerce.',
  },
  hero: {
    badge: 'Plugin gratuito',
    platformBadge: 'WordPress',
    title: 'Live chat multilingue per',
    titleAccent: 'WordPress',
    subtitle: 'Aggiungi un widget di chat in tempo reale al tuo sito WordPress. I tuoi clienti scrivono nella loro lingua, tu rispondi nella tua — Chataptor traduce tutto automaticamente.',
    primaryCTA: 'Installa da WordPress.org',
    secondaryCTA: 'Guarda la demo',
  },
  features: {
    label: 'Funzionalità principali',
    title: 'Tutto ciò che ti serve per chattare globalmente',
    subtitle: 'Un solo plugin, zero barriere linguistiche. Connettiti con ogni cliente nella sua lingua madre.',
    items: [
      {
        icon: '🌐',
        title: 'Traduzione automatica',
        description: 'I messaggi vengono tradotti in tempo reale tra la tua lingua e quella del cliente. Alimentato da DeepL e OpenAI.',
        colorClass: 'bg-emerald-50',
      },
      {
        icon: '💬',
        title: 'Posta in arrivo omnicanale',
        description: 'Gestisci le conversazioni dal tuo sito, WhatsApp, Messenger ed e-mail — tutto in un unico pannello.',
        colorClass: 'bg-blue-50',
      },
      {
        icon: '🤖',
        title: 'Chatbot AI',
        description: 'Configura risposte automatiche basate sull\'IA. Gestisci le domande frequenti 24/7 in qualsiasi lingua.',
        colorClass: 'bg-violet-50',
      },
      {
        icon: '⚡',
        title: 'Installazione con 1 clic',
        description: 'Installa da WordPress.org, incolla la tua chiave API, fatto. Nessuna programmazione richiesta. Funziona con qualsiasi tema.',
        colorClass: 'bg-orange-50',
      },
    ],
  },
  howItWorks: {
    label: 'Configurazione in 3 minuti',
    title: 'Come funziona',
    subtitle: 'Dall\'installazione alla prima conversazione in meno di 3 minuti.',
    steps: [
      {
        title: 'Installa il plugin',
        description: 'Cerca «Chataptor» nei plugin di WordPress e clicca su Installa. Attiva con un solo clic.',
      },
      {
        title: 'Collega il tuo account',
        description: 'Inserisci la tua chiave API di Chataptor nelle impostazioni. L\'account gratuito include tutte le funzionalità.',
      },
      {
        title: 'Inizia a chattare',
        description: 'Il widget appare sul tuo sito. Chatta con i visitatori dalla tua dashboard Chataptor.',
      },
    ],
  },
  woocommerce: {
    badge: 'Integrazione avanzata WooCommerce',
    title: 'Creato per l\'e-commerce',
    subtitle: 'La profonda integrazione con WooCommerce ti fornisce il contesto del cliente direttamente nella chat.',
    items: [
      {
        icon: '📦',
        title: 'Contesto degli ordini',
        description: 'Visualizza gli ordini recenti, il contenuto del carrello e la cronologia degli acquisti del cliente accanto alla conversazione.',
      },
      {
        icon: '🌐',
        title: 'Compatibile con HPOS',
        description: 'Completamente compatibile con WooCommerce High-Performance Order Storage per la massima velocità.',
      },
      {
        icon: '👤',
        title: 'Identificazione del cliente',
        description: 'Identifica automaticamente i clienti WooCommerce registrati tramite nome e indirizzo e-mail.',
      },
    ],
  },
  widgetPreview: {
    label: 'Anteprima dal vivo',
    title: 'Guardalo in azione',
    subtitle: 'Il widget di chat si integra perfettamente in qualsiasi tema WordPress.',
    browserUrl: 'yourstore.com/shop',
    userMsg: 'Haben Sie dieses Kleid in Größe 38?',
    userTranslation: 'Ha questo vestito nella taglia 38?',
    agentMsg: 'Yes! Size 38 is in stock. Want me to add it to your cart?',
    agentTranslation: 'Tradotto automaticamente dall\'inglese',
  },
  techRequirements: {
    label: 'Compatibilità',
    title: 'Requisiti tecnici',
    subtitle: 'Funziona con praticamente qualsiasi configurazione WordPress.',
    items: [
      { value: '6.0+', label: 'WordPress' },
      { value: '7.4+', label: 'PHP' },
      { value: '8.0+', label: 'WooCommerce' },
      { value: 'Qualsiasi', label: 'Tema' },
    ],
  },
  faq: {
    label: 'FAQ',
    title: 'Domande frequenti',
    items: [
      {
        question: 'Il plugin è davvero gratuito?',
        answer: 'Sì, il plugin WordPress è gratuito al 100%. Chataptor offre un piano gratuito con le funzionalità principali. I piani premium sbloccano funzionalità avanzate come chatbot AI e agenti illimitati.',
      },
      {
        question: 'Quante lingue sono supportate?',
        answer: 'Chataptor supporta oltre 30 lingue con traduzione automatica in tempo reale. I tuoi clienti scrivono nella loro lingua madre e tu vedi tutto tradotto nella tua.',
      },
      {
        question: 'Funziona con page builder come Elementor?',
        answer: 'Sì. Il widget si carica come un piccolo tag script e funziona indipendentemente dal tuo tema o page builder. Elementor, Divi, Beaver Builder — tutti supportati.',
      },
      {
        question: 'È conforme al GDPR?',
        answer: 'Sì. Chataptor è pienamente conforme al GDPR. I dati vengono elaborati nell\'UE e il plugin include un avviso sulla privacy configurabile per i visitatori.',
      },
    ],
  },
  cta: {
    title: 'Pronto a chattare con il mondo?',
    subtitle: 'Installa Chataptor sul tuo sito WordPress in meno di 3 minuti. Gratuito per sempre.',
    primaryCTA: 'Installa da WordPress.org',
    secondaryCTA: 'Crea account gratuito',
  },
};

const cs: WordPressIntegrationTranslations = {
  meta: {
    title: 'Chataptor pro WordPress — Vícejazyčný plugin pro live chat',
    description: 'Přidejte vícejazyčný widget live chatu na svůj web WordPress. Automatický překlad konverzací v reálném čase. Bezplatný plugin s podporou WooCommerce.',
  },
  hero: {
    badge: 'Bezplatný plugin',
    platformBadge: 'WordPress',
    title: 'Vícejazyčný live chat pro',
    titleAccent: 'WordPress',
    subtitle: 'Přidejte widget chatu v reálném čase na svůj web WordPress. Zákazníci píší ve svém jazyce, vy odpovídáte ve svém — Chataptor vše automaticky přeloží.',
    primaryCTA: 'Instalovat z WordPress.org',
    secondaryCTA: 'Zobrazit demo',
  },
  features: {
    label: 'Klíčové funkce',
    title: 'Vše, co potřebujete pro globální chat',
    subtitle: 'Jeden plugin, žádné jazykové bariéry. Komunikujte s každým zákazníkem v jeho rodném jazyce.',
    items: [
      {
        icon: '🌐',
        title: 'Automatický překlad',
        description: 'Zprávy jsou přeloženy v reálném čase mezi vaším jazykem a jazykem zákazníka. Využívá DeepL a OpenAI.',
        colorClass: 'bg-emerald-50',
      },
      {
        icon: '💬',
        title: 'Omnichannel doručená pošta',
        description: 'Spravujte konverzace ze svého webu, WhatsAppu, Messengeru a e-mailu — vše v jednom přehledu.',
        colorClass: 'bg-blue-50',
      },
      {
        icon: '🤖',
        title: 'AI chatboti',
        description: 'Nastavte automatické odpovědi poháněné umělou inteligencí. Zvládejte běžné dotazy 24/7 v jakémkoli jazyce.',
        colorClass: 'bg-violet-50',
      },
      {
        icon: '⚡',
        title: 'Instalace 1 kliknutím',
        description: 'Nainstalujte z WordPress.org, vložte svůj API klíč a hotovo. Bez programování. Funguje s jakýmkoli motivem.',
        colorClass: 'bg-orange-50',
      },
    ],
  },
  howItWorks: {
    label: 'Nastavení za 3 minuty',
    title: 'Jak to funguje',
    subtitle: 'Od instalace po první konverzaci za méně než 3 minuty.',
    steps: [
      {
        title: 'Nainstalujte plugin',
        description: 'Vyhledejte „Chataptor" v pluginech WordPress a klikněte na Nainstalovat. Aktivujte jedním kliknutím.',
      },
      {
        title: 'Propojte účet',
        description: 'Zadejte svůj API klíč Chataptor v nastavení. Bezplatný účet zahrnuje všechny funkce.',
      },
      {
        title: 'Začněte chatovat',
        description: 'Widget se zobrazí na vašem webu. Chatujte s návštěvníky z přehledu Chataptor.',
      },
    ],
  },
  woocommerce: {
    badge: 'Rozšířená integrace WooCommerce',
    title: 'Vytvořeno pro e-commerce',
    subtitle: 'Hluboká integrace s WooCommerce vám poskytuje kontext zákazníka přímo v chatu.',
    items: [
      {
        icon: '📦',
        title: 'Kontext objednávek',
        description: 'Zobrazte si poslední objednávky zákazníka, obsah košíku a historii nákupů vedle konverzace.',
      },
      {
        icon: '🌐',
        title: 'Připraveno pro HPOS',
        description: 'Plně kompatibilní s WooCommerce High-Performance Order Storage pro maximální rychlost.',
      },
      {
        icon: '👤',
        title: 'Identifikace zákazníka',
        description: 'Automaticky identifikuje přihlášené zákazníky WooCommerce podle jména a e-mailu.',
      },
    ],
  },
  widgetPreview: {
    label: 'Živý náhled',
    title: 'Podívejte se na to v akci',
    subtitle: 'Widget chatu se bezproblémově integruje do jakéhokoli motivu WordPress.',
    browserUrl: 'yourstore.com/shop',
    userMsg: 'Haben Sie dieses Kleid in Größe 38?',
    userTranslation: 'Máte tyto šaty ve velikosti 38?',
    agentMsg: 'Yes! Size 38 is in stock. Want me to add it to your cart?',
    agentTranslation: 'Automaticky přeloženo z angličtiny',
  },
  techRequirements: {
    label: 'Kompatibilita',
    title: 'Technické požadavky',
    subtitle: 'Funguje prakticky s jakoukoli konfigurací WordPress.',
    items: [
      { value: '6.0+', label: 'WordPress' },
      { value: '7.4+', label: 'PHP' },
      { value: '8.0+', label: 'WooCommerce' },
      { value: 'Libovolný', label: 'Motiv' },
    ],
  },
  faq: {
    label: 'FAQ',
    title: 'Často kladené otázky',
    items: [
      {
        question: 'Je plugin opravdu zdarma?',
        answer: 'Ano, plugin pro WordPress je 100% zdarma. Chataptor nabízí bezplatný plán se základními funkcemi. Prémiové plány odemykají pokročilé funkce, jako jsou AI chatboti a neomezený počet agentů.',
      },
      {
        question: 'Kolik jazyků je podporováno?',
        answer: 'Chataptor podporuje více než 30 jazyků s automatickým překladem v reálném čase. Vaši zákazníci píší ve svém rodném jazyce a vy vidíte vše přeložené do svého.',
      },
      {
        question: 'Funguje s page buildery jako Elementor?',
        answer: 'Ano. Widget se načítá jako malý script tag a funguje nezávisle na vašem motivu nebo page builderu. Elementor, Divi, Beaver Builder — vše je podporováno.',
      },
      {
        question: 'Je plugin v souladu s GDPR?',
        answer: 'Ano. Chataptor je plně v souladu s GDPR. Data jsou zpracovávána v EU a plugin obsahuje konfigurovatelné oznámení o ochraně osobních údajů pro návštěvníky.',
      },
    ],
  },
  cta: {
    title: 'Připraveni chatovat s celým světem?',
    subtitle: 'Nainstalujte Chataptor na svůj web WordPress za méně než 3 minuty. Zdarma navždy.',
    primaryCTA: 'Instalovat z WordPress.org',
    secondaryCTA: 'Vytvořit bezplatný účet',
  },
};

const sk: WordPressIntegrationTranslations = {
  meta: {
    title: 'Chataptor pre WordPress — Viacjazyčný plugin pre live chat',
    description: 'Pridajte viacjazyčný widget live chatu na svoju stránku WordPress. Automatický preklad konverzácií v reálnom čase. Bezplatný plugin s podporou WooCommerce.',
  },
  hero: {
    badge: 'Bezplatný plugin',
    platformBadge: 'WordPress',
    title: 'Viacjazyčný live chat pre',
    titleAccent: 'WordPress',
    subtitle: 'Pridajte widget chatu v reálnom čase na svoju stránku WordPress. Zákazníci píšu vo svojom jazyku, vy odpovedáte vo svojom — Chataptor všetko automaticky preloží.',
    primaryCTA: 'Inštalovať z WordPress.org',
    secondaryCTA: 'Zobraziť demo',
  },
  features: {
    label: 'Kľúčové funkcie',
    title: 'Všetko, čo potrebujete na globálny chat',
    subtitle: 'Jeden plugin, žiadne jazykové bariéry. Komunikujte s každým zákazníkom v jeho rodnom jazyku.',
    items: [
      {
        icon: '🌐',
        title: 'Automatický preklad',
        description: 'Správy sú prekladané v reálnom čase medzi vaším jazykom a jazykom zákazníka. Poháňané DeepL a OpenAI.',
        colorClass: 'bg-emerald-50',
      },
      {
        icon: '💬',
        title: 'Omnichannel schránka',
        description: 'Spravujte konverzácie z vašej webstránky, WhatsAppu, Messengeru a e-mailu — všetko na jednom mieste.',
        colorClass: 'bg-blue-50',
      },
      {
        icon: '🤖',
        title: 'AI chatboti',
        description: 'Nastavte automatické odpovede poháňané umelou inteligenciou. Zvládajte bežné otázky 24/7 v akomkoľvek jazyku.',
        colorClass: 'bg-violet-50',
      },
      {
        icon: '⚡',
        title: 'Inštalácia 1 kliknutím',
        description: 'Nainštalujte z WordPress.org, vložte API kľúč a hotovo. Bez programovania. Funguje s akýmkoľvek motívom.',
        colorClass: 'bg-orange-50',
      },
    ],
  },
  howItWorks: {
    label: 'Nastavenie za 3 minúty',
    title: 'Ako to funguje',
    subtitle: 'Od inštalácie po prvý rozhovor za menej ako 3 minúty.',
    steps: [
      {
        title: 'Nainštalujte plugin',
        description: 'Vyhľadajte „Chataptor" v pluginoch WordPress a kliknite na Inštalovať. Aktivujte jedným kliknutím.',
      },
      {
        title: 'Prepojte účet',
        description: 'Zadajte svoj API kľúč Chataptor v nastaveniach. Bezplatný účet zahŕňa všetky funkcie.',
      },
      {
        title: 'Začnite chatovať',
        description: 'Widget sa zobrazí na vašej stránke. Chatujte s návštevníkmi z prehľadu Chataptor.',
      },
    ],
  },
  woocommerce: {
    badge: 'Rozšírená integrácia WooCommerce',
    title: 'Vytvorené pre e-commerce',
    subtitle: 'Hlboká integrácia s WooCommerce vám poskytuje kontext zákazníka priamo v chate.',
    items: [
      {
        icon: '📦',
        title: 'Kontext objednávok',
        description: 'Zobrazte si posledné objednávky zákazníka, obsah košíka a históriu nákupov vedľa konverzácie.',
      },
      {
        icon: '🌐',
        title: 'Pripravené pre HPOS',
        description: 'Plne kompatibilné s WooCommerce High-Performance Order Storage pre maximálnu rýchlosť.',
      },
      {
        icon: '👤',
        title: 'Identifikácia zákazníka',
        description: 'Automaticky identifikuje prihlásených zákazníkov WooCommerce podľa mena a e-mailu.',
      },
    ],
  },
  widgetPreview: {
    label: 'Živý náhľad',
    title: 'Pozrite sa na to v akcii',
    subtitle: 'Widget chatu sa bezproblémovo integruje do akéhokoľvek motívu WordPress.',
    browserUrl: 'yourstore.com/shop',
    userMsg: 'Haben Sie dieses Kleid in Größe 38?',
    userTranslation: 'Máte tieto šaty vo veľkosti 38?',
    agentMsg: 'Yes! Size 38 is in stock. Want me to add it to your cart?',
    agentTranslation: 'Automaticky preložené z angličtiny',
  },
  techRequirements: {
    label: 'Kompatibilita',
    title: 'Technické požiadavky',
    subtitle: 'Funguje prakticky s akoukoľvek konfiguráciou WordPress.',
    items: [
      { value: '6.0+', label: 'WordPress' },
      { value: '7.4+', label: 'PHP' },
      { value: '8.0+', label: 'WooCommerce' },
      { value: 'Ľubovoľný', label: 'Motív' },
    ],
  },
  faq: {
    label: 'FAQ',
    title: 'Často kladené otázky',
    items: [
      {
        question: 'Je plugin naozaj zadarmo?',
        answer: 'Áno, plugin pre WordPress je 100% zadarmo. Chataptor ponúka bezplatný plán so základnými funkciami. Prémiové plány odomykajú pokročilé funkcie, ako sú AI chatboti a neobmedzený počet agentov.',
      },
      {
        question: 'Koľko jazykov je podporovaných?',
        answer: 'Chataptor podporuje viac ako 30 jazykov s automatickým prekladom v reálnom čase. Vaši zákazníci píšu vo svojom rodnom jazyku a vy vidíte všetko preložené do svojho.',
      },
      {
        question: 'Funguje s page buildermi ako Elementor?',
        answer: 'Áno. Widget sa načítava ako malý script tag a funguje nezávisle od vášho motívu alebo page buildera. Elementor, Divi, Beaver Builder — všetko je podporované.',
      },
      {
        question: 'Je plugin v súlade s GDPR?',
        answer: 'Áno. Chataptor je plne v súlade s GDPR. Dáta sú spracovávané v EÚ a plugin obsahuje konfigurovateľné oznámenie o ochrane osobných údajov pre návštevníkov.',
      },
    ],
  },
  cta: {
    title: 'Pripravení chatovať s celým svetom?',
    subtitle: 'Nainštalujte Chataptor na svoju stránku WordPress za menej ako 3 minúty. Zadarmo navždy.',
    primaryCTA: 'Inštalovať z WordPress.org',
    secondaryCTA: 'Vytvoriť bezplatný účet',
  },
};

const translations: Record<Locale, WordPressIntegrationTranslations> = {
  en,
  pl,
  de,
  fr,
  es,
  it,
  cs,
  sk,
};

export function getWordPressIntegration(lang: Locale): WordPressIntegrationTranslations {
  return translations[lang] || translations.en;
}
