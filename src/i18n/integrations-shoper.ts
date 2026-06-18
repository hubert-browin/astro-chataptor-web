import type { Locale } from "./config";

/**
 * Tłumaczenia strony landingowej integracji Chataptor dla Shoper.
 * Struktura równolegle do integrations-wordpress.ts — użycie tych samych komponentów landingu.
 *
 * Uwaga: pełne tłumaczenia istnieją tylko dla PL oraz EN.
 * Dla pozostałych lokalizacji (de, fr, es, it, cs, sk) funkcja `getShoperIntegration`
 * zwraca wariant EN jako fallback (do dopracowania w osobnej iteracji tłumaczeń).
 */

export interface ShoperIntegrationTranslations {
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
  screenshots: {
    label: string;
    title: string;
    subtitle: string;
    items: Array<{
      src: string;
      alt: string;
      title: string;
      description: string;
    }>;
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

const pl: ShoperIntegrationTranslations = {
  meta: {
    title: "Chataptor dla Shoper — Profesjonalny live chat dla Twojego sklepu",
    description:
      "Dodaj nowoczesny widget live chat do swojego sklepu Shoper. Automatyczna identyfikacja klientów, panel agenta i tłumaczenia AI. Chataptor jest obecnie darmowy i bez limitu wiadomości.",
  },
  hero: {
    badge: "Shoper App Store",
    platformBadge: "Shoper",
    title: "Live chat stworzony dla",
    titleAccent: "Shoper",
    subtitle:
      "Profesjonalny widget czatu dopasowany do Twojego sklepu Shoper. Automatyczna identyfikacja zalogowanych klientów, historia rozmów i tłumaczenia AI — wszystko gotowe po instalacji.",
    primaryCTA: "Zainstaluj w Shoper App Store",
    secondaryCTA: "Utwórz konto Chataptor",
  },
  features: {
    label: "Kluczowe funkcje",
    title: "Wszystko, czego potrzebujesz do obsługi klienta",
    subtitle:
      "Jeden widget, kompletny zestaw narzędzi do rozmowy z klientami Twojego sklepu Shoper.",
    items: [
      {
        icon: "🎨",
        title: "Widget dopasowany do sklepu",
        description:
          "Elegancki, responsywny design z konfigurowalnymi kolorami i pozycją. Ładowany asynchronicznie — nie spowalnia Twojego sklepu.",
        colorClass: "bg-emerald-50",
      },
      {
        icon: "👤",
        title: "Identyfikacja zalogowanych klientów",
        description:
          "Automatyczne rozpoznawanie klientów Shoper — widzisz imię, nazwisko i email klienta w panelu agenta bez dodatkowych pytań.",
        colorClass: "bg-blue-50",
      },
      {
        icon: "💼",
        title: "Panel agenta",
        description:
          "Intuicyjny interfejs do obsługi wielu rozmów jednocześnie. Powiadomienia dźwiękowe i push, historia wszystkich konwersacji, dostęp z przeglądarki.",
        colorClass: "bg-violet-50",
      },
      {
        icon: "🌐",
        title: "Tłumaczenia AI",
        description:
          "Klienci piszą w swoim języku, Ty odpowiadasz w swoim. Chataptor tłumaczy wiadomości w czasie rzeczywistym dzięki DeepL i OpenAI.",
        colorClass: "bg-orange-50",
      },
      {
        icon: "🔔",
        title: "Powiadomienia w czasie rzeczywistym",
        description:
          "Nie przegap żadnej wiadomości — powiadomienia push, email i dźwiękowe informują Cię o nowych zapytaniach natychmiast.",
        colorClass: "bg-rose-50",
      },
      {
        icon: "⚡",
        title: "Konfiguracja bez kodu",
        description:
          "Zainstaluj aplikację w Shoper App Store, autoryzuj dostęp OAuth i gotowe. Widget pojawia się w sklepie bez edycji szablonów.",
        colorClass: "bg-amber-50",
      },
      {
        icon: "🛡️",
        title: "Bezpieczeństwo i RODO",
        description:
          "Szyfrowanie TLS 1.3, tokeny OAuth zabezpieczone AES-256-GCM, serwery w UE, pełna zgodność z RODO.",
        colorClass: "bg-emerald-50",
      },
      {
        icon: "📜",
        title: "Historia konwersacji",
        description:
          "Pełne archiwum rozmów powiązane z profilem klienta. Wróć do każdego kontekstu w kilka sekund.",
        colorClass: "bg-blue-50",
      },
    ],
  },
  howItWorks: {
    label: "Start w 2 minuty",
    title: "Jak to działa",
    subtitle:
      "Od instalacji w Shoper App Store do pierwszej rozmowy w dosłownie kilka kliknięć.",
    steps: [
      {
        title: "Zainstaluj z Shoper App Store",
        description:
          'Znajdź „Chataptor Live Chat" w Shoper App Store i kliknij Zainstaluj. Aplikacja pojawi się na liście aplikacji Twojego sklepu.',
      },
      {
        title: "Autoryzuj dostęp OAuth",
        description:
          "Potwierdź uprawnienia (shop_read, scripts_write). Konto Chataptor utworzy się automatycznie na podstawie danych z Shoper.",
      },
      {
        title: "Widget aktywny w sklepie",
        description:
          "Widget czatu pojawia się w stopce Twojego sklepu. Klienci mogą zacząć pisać od razu — bez dodatkowej konfiguracji.",
      },
      {
        title: "Rozmawiaj w panelu agenta",
        description:
          "Zaloguj się do panelu chataptor.com i odpowiadaj na wiadomości. Widzisz imię i email zalogowanych klientów Shoper.",
      },
    ],
  },
  woocommerce: {
    badge: "Natywna integracja",
    title: "Idealnie dopasowane do Shoper",
    subtitle:
      "Głęboka integracja z API Shoper — widget działa natywnie, bez konfliktów z szablonem sklepu.",
    items: [
      {
        icon: "🏪",
        title: "Integracja ze sklepem",
        description:
          "Widget wstrzykiwany automatycznie przez scripts API Shoper. Brak ręcznej edycji szablonów ani kodu PHP.",
      },
      {
        icon: "🔐",
        title: "OAuth 2.0",
        description:
          "Bezpieczna autoryzacja standardem OAuth 2.0. Tokeny szyfrowane i przechowywane w UE.",
      },
      {
        icon: "👥",
        title: "Dane klientów Shoper",
        description:
          "Zalogowany klient sklepu jest rozpoznawany automatycznie — imię, nazwisko i email trafiają wprost do panelu agenta.",
      },
    ],
  },
  widgetPreview: {
    label: "Podgląd na żywo",
    title: "Zobacz widget w akcji",
    subtitle:
      "Widget płynnie wpasowuje się w każdy szablon Shoper i wygląda profesjonalnie.",
    browserUrl: "twojsklep.shoparena.pl",
    userMsg: "Dzień dobry, czy ten produkt jest dostępny w magazynie?",
    userTranslation: "Klient zalogowany: Anna Kowalska",
    agentMsg: "Tak, mamy 12 sztuk w magazynie. Mam dodać do koszyka?",
    agentTranslation: "Odpowiedź z panelu agenta",
  },
  screenshots: {
    label: "Zobacz w akcji",
    title: "Nowoczesny panel agenta",
    subtitle:
      "Wszystkie konwersacje ze sklepu Shoper w jednym miejscu — z automatycznym tłumaczeniem i identyfikacją klientów.",
    items: [
      {
        src: "/images/shoper/Screenshot_1.png",
        alt: "Dashboard panelu agenta Chataptor",
        title: "Dashboard z przeglądem konwersacji",
        description:
          "Aktywne rozmowy, oczekujące odpowiedzi i statystyki dnia — na pierwszy rzut oka widzisz, co wymaga Twojej uwagi.",
      },
      {
        src: "/images/shoper/Screenshot_2.png",
        alt: "Aktywna rozmowa z klientem sklepu Shoper",
        title: "Pełny kontekst każdej rozmowy",
        description:
          "Historia wiadomości, dane klienta ze sklepu Shoper, informacja o statusie zamówienia — wszystko widoczne podczas obsługi.",
      },
      {
        src: "/images/shoper/Screenshot_3.png",
        alt: "Wielojęzyczne konwersacje w panelu agenta",
        title: "Rozmowy w różnych językach",
        description:
          "Klient pisze po polsku, niemiecku lub angielsku — agent widzi treść w swoim języku dzięki tłumaczeniom AI w czasie rzeczywistym.",
      },
      {
        src: "/images/shoper/Screenshot_4.png",
        alt: "Panel konfiguracji widgetu Chataptor",
        title: "Konfiguracja bez kodu",
        description:
          "Zmień kolory, pozycję i treści widgetu — wszystko z poziomu panelu, bez edycji szablonu sklepu.",
      },
    ],
  },
  techRequirements: {
    label: "Wymagania",
    title: "Wymagania techniczne",
    subtitle: "Chataptor działa z każdym aktywnym sklepem Shoper.",
    items: [
      { value: "5+", label: "Shoper" },
      { value: "Aktywna", label: "Subskrypcja" },
      { value: "Chrome/FF/Safari", label: "Przeglądarka" },
      { value: "SSL", label: "Certyfikat" },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Często zadawane pytania",
    items: [
      {
        question: "Ile kosztuje Chataptor dla Shoper?",
        answer:
          "Chataptor jest obecnie darmowy i nie nakłada limitu wiadomości. Możesz uruchomić live chat, obsługiwać wiadomości ze sklepu i testować automatyczne tłumaczenia bez osobnego budżetu na start.",
      },
      {
        question: "Jakie są wymagania, żeby zainstalować Chataptor?",
        answer:
          "Wystarczy sklep Shoper z aktywną subskrypcją oraz nowoczesna przeglądarka (Chrome, Firefox, Safari, Edge). Żadnej konfiguracji serwera ani edycji kodu — aplikacja instaluje się z Shoper App Store w dwóch kliknięciach.",
      },
      {
        question: "Czy moje dane i dane klientów są bezpieczne?",
        answer:
          "Tak. Używamy szyfrowania TLS 1.3 dla wszystkich połączeń, tokeny OAuth są zabezpieczone AES-256-GCM, a dane przechowujemy wyłącznie na serwerach w Unii Europejskiej. Jesteśmy w pełni zgodni z RODO, stosujemy uwierzytelnianie dwuskładnikowe dla panelu i regularne szyfrowane kopie zapasowe.",
      },
      {
        question: "Jakie dane klientów zbiera Chataptor?",
        answer:
          "Podczas rozmowy przez widget zbieramy: imię i nazwisko oraz email (tylko gdy klient jest zalogowany w Shoper lub poda je w formularzu), treść wiadomości, adres IP i dane przeglądarki. Nie mamy dostępu do listy produktów, zamówień, danych płatniczych ani haseł klientów Twojego sklepu.",
      },
      {
        question: "Jak odinstalować aplikację?",
        answer:
          "Wystarczy odinstalować aplikację Chataptor z poziomu panelu aplikacji Shoper — widget zostanie usunięty ze sklepu automatycznie. Dane przechowujemy jeszcze przez 30 dni (na wypadek reaktywacji), po tym czasie są trwale usuwane. Na żądanie możemy je usunąć wcześniej.",
      },
      {
        question: "Gdzie uzyskam wsparcie?",
        answer:
          "Zespół wsparcia odpowiada na support@chataptor.com w ciągu 24 godzin w dni robocze. Dostępna jest też dokumentacja online oraz strona status.chataptor.com informująca o dostępności usługi.",
      },
      {
        question: "Czy Chataptor obsługuje wiele języków?",
        answer:
          "Tak. Automatyczne tłumaczenia w czasie rzeczywistym są obecnie dostępne w Chataptorze bezpłatnie. Klient pisze w swoim języku, Ty odpowiadasz w swoim, a Chataptor tłumaczy rozmowę automatycznie.",
      },
    ],
  },
  cta: {
    title: "Gotowy, by zacząć rozmawiać z klientami?",
    subtitle:
      "Zainstaluj Chataptor w swoim sklepie Shoper w kilka minut. Obecnie korzystasz za darmo i bez limitu wiadomości.",
    primaryCTA: "Zainstaluj w Shoper App Store",
    secondaryCTA: "Utwórz konto Chataptor",
  },
};

const en: ShoperIntegrationTranslations = {
  meta: {
    title: "Chataptor for Shoper — Professional Live Chat for Your Store",
    description:
      "Add a modern live chat widget to your Shoper store. Customer identification, agent dashboard, and AI translations. Chataptor is currently free with no message limits.",
  },
  hero: {
    badge: "Shoper App Store",
    platformBadge: "Shoper",
    title: "Live chat built for",
    titleAccent: "Shoper",
    subtitle:
      "A professional chat widget tailored to your Shoper store. Automatic identification of logged-in customers, conversation history and AI translations — ready the moment you install it.",
    primaryCTA: "Install from Shoper App Store",
    secondaryCTA: "Create Chataptor account",
  },
  features: {
    label: "Key Features",
    title: "Everything you need for customer support",
    subtitle:
      "One widget, a complete toolkit to talk with visitors of your Shoper store.",
    items: [
      {
        icon: "🎨",
        title: "Widget matched to your store",
        description:
          "Elegant, responsive design with configurable colors and position. Loaded asynchronously — your store stays fast.",
        colorClass: "bg-emerald-50",
      },
      {
        icon: "👤",
        title: "Logged-in customer identification",
        description:
          "Automatic recognition of Shoper customers — you see the shopper's name and email in the agent dashboard without extra questions.",
        colorClass: "bg-blue-50",
      },
      {
        icon: "💼",
        title: "Agent dashboard",
        description:
          "Intuitive interface for handling multiple conversations at once. Sound and push notifications, full conversation history, browser-based access.",
        colorClass: "bg-violet-50",
      },
      {
        icon: "🌐",
        title: "AI translations",
        description:
          "Customers write in their language, you answer in yours. Chataptor translates messages in real time with DeepL and OpenAI.",
        colorClass: "bg-orange-50",
      },
      {
        icon: "🔔",
        title: "Real-time notifications",
        description:
          "Never miss a message — push, email and sound notifications keep you informed of new inquiries instantly.",
        colorClass: "bg-rose-50",
      },
      {
        icon: "⚡",
        title: "No-code setup",
        description:
          "Install from Shoper App Store, authorize OAuth access, done. The widget appears in your store without touching any template.",
        colorClass: "bg-amber-50",
      },
      {
        icon: "🛡️",
        title: "Security & GDPR",
        description:
          "TLS 1.3 encryption, OAuth tokens secured with AES-256-GCM, EU-based servers, full GDPR compliance.",
        colorClass: "bg-emerald-50",
      },
      {
        icon: "📜",
        title: "Conversation history",
        description:
          "Full archive of conversations tied to the customer profile. Jump back into context in seconds.",
        colorClass: "bg-blue-50",
      },
    ],
  },
  howItWorks: {
    label: "Start in 2 minutes",
    title: "How it works",
    subtitle:
      "From Shoper App Store install to first conversation in just a few clicks.",
    steps: [
      {
        title: "Install from Shoper App Store",
        description:
          'Find "Chataptor Live Chat" in Shoper App Store and click Install. The app appears in your store\'s application list.',
      },
      {
        title: "Authorize OAuth access",
        description:
          "Confirm permissions (shop_read, scripts_write). A Chataptor account is created automatically from your Shoper data.",
      },
      {
        title: "Widget active in your store",
        description:
          "The chat widget shows up in your store's footer. Customers can start chatting right away — no extra configuration.",
      },
      {
        title: "Reply in the agent dashboard",
        description:
          "Sign in to chataptor.com and answer messages. Logged-in Shoper customers arrive with their name and email.",
      },
    ],
  },
  woocommerce: {
    badge: "Native integration",
    title: "Perfectly matched to Shoper",
    subtitle:
      "Deep integration with the Shoper API — the widget runs natively, without conflicts with your store template.",
    items: [
      {
        icon: "🏪",
        title: "Store integration",
        description:
          "Widget injected automatically via the Shoper scripts API. No manual template edits or PHP code.",
      },
      {
        icon: "🔐",
        title: "OAuth 2.0",
        description:
          "Secure authorization using the OAuth 2.0 standard. Tokens are encrypted and stored in the EU.",
      },
      {
        icon: "👥",
        title: "Shoper customer data",
        description:
          "Logged-in Shoper customers are recognized automatically — name and email land directly in the agent dashboard.",
      },
    ],
  },
  widgetPreview: {
    label: "Live preview",
    title: "See the widget in action",
    subtitle:
      "The widget fits seamlessly into any Shoper theme and always looks professional.",
    browserUrl: "yourstore.shoparena.pl",
    userMsg: "Hello, is this product in stock?",
    userTranslation: "Logged-in customer: Anna Kowalska",
    agentMsg: "Yes, we have 12 in stock. Want me to add it to your cart?",
    agentTranslation: "Reply from the agent dashboard",
  },
  screenshots: {
    label: "See it in action",
    title: "A modern agent dashboard",
    subtitle:
      "All conversations from your Shoper store in one place — with automatic translation and customer identification.",
    items: [
      {
        src: "/images/shoper/Screenshot_1.png",
        alt: "Chataptor agent dashboard",
        title: "Dashboard with conversation overview",
        description:
          "Active chats, pending responses and today's stats — at a glance you see what needs your attention.",
      },
      {
        src: "/images/shoper/Screenshot_2.png",
        alt: "Active conversation with a store customer",
        title: "Full context for every chat",
        description:
          "Message history, customer data from Shoper, order status info — everything visible while you respond.",
      },
      {
        src: "/images/shoper/Screenshot_3.png",
        alt: "Multilingual conversations in the agent dashboard",
        title: "Conversations in multiple languages",
        description:
          "The customer writes in Polish, German or English — the agent reads it in their own language thanks to real-time AI translation.",
      },
      {
        src: "/images/shoper/Screenshot_4.png",
        alt: "Chataptor widget configuration panel",
        title: "No-code configuration",
        description:
          "Change colors, position and widget copy — all from the panel, no store template edits required.",
      },
    ],
  },
  techRequirements: {
    label: "Requirements",
    title: "Technical requirements",
    subtitle: "Chataptor works with every active Shoper store.",
    items: [
      { value: "5+", label: "Shoper" },
      { value: "Active", label: "Subscription" },
      { value: "Chrome/FF/Safari", label: "Browser" },
      { value: "SSL", label: "Certificate" },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        question: "How much does Chataptor for Shoper cost?",
        answer:
          "Chataptor is currently free and does not limit messages. You can launch live chat, handle store messages, and test automatic translations without a separate budget upfront.",
      },
      {
        question: "What do I need to install Chataptor?",
        answer:
          "You only need an active Shoper store and a modern browser (Chrome, Firefox, Safari, Edge). No server configuration or code edits — the app installs from the Shoper App Store in two clicks.",
      },
      {
        question: "Is my data and my customers' data secure?",
        answer:
          "Yes. We use TLS 1.3 encryption for all connections, OAuth tokens are secured with AES-256-GCM and all data is stored exclusively on servers in the European Union. We are fully GDPR compliant, use two-factor authentication for the dashboard and perform regular encrypted backups.",
      },
      {
        question: "What customer data does Chataptor collect?",
        answer:
          "During a chat session we collect: first and last name and email (only if the customer is logged in to Shoper or provides them in a form), message content, IP address and browser data. We do not have access to your product catalog, orders, payment data or customer passwords.",
      },
      {
        question: "How do I uninstall the app?",
        answer:
          "Just uninstall the Chataptor application from the Shoper application panel — the widget is automatically removed from your store. We keep data for 30 more days (in case of reactivation), after which it is permanently deleted. On request we can delete it earlier.",
      },
      {
        question: "Where can I get support?",
        answer:
          "The support team replies at support@chataptor.com within 24 hours on business days. Online documentation and the status.chataptor.com page with service availability are also available.",
      },
      {
        question: "Does Chataptor support multiple languages?",
        answer:
          "Yes. Real-time automatic translations are currently available in Chataptor for free. Customers write in their language, you reply in yours, and Chataptor translates the conversation automatically.",
      },
    ],
  },
  cta: {
    title: "Ready to start talking with your customers?",
    subtitle:
      "Install Chataptor on your Shoper store in a few minutes. It is currently free to use with no message limits.",
    primaryCTA: "Install from Shoper App Store",
    secondaryCTA: "Create Chataptor account",
  },
};

// Dla pozostałych lokalizacji używamy fallbacku do EN — tłumaczenia do dopracowania.
const translations: Record<Locale, ShoperIntegrationTranslations> = {
  pl,
  en,
  de: en,
  fr: en,
  es: en,
  it: en,
  cs: en,
  sk: en,
};

export function getShoperIntegration(
  lang: Locale,
): ShoperIntegrationTranslations {
  return translations[lang] || translations.en;
}
