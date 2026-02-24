import type { Locale } from './config';

export interface LandingTranslations {
  // Navigation
  nav: {
    howItWorks: string;
    implementation: string;
    features: string;
    pricing: string;
    blog: string;
    about: string;
    login: string;
    loginFull: string;
    start: string;
    startFree: string;
  };
  // Hero section
  hero: {
    badge: string;
    badgeMobile: string;
    pagetitle: string;
    title1: string;
    title2: string;
    description: string;
    descriptionMobile: string;
    descriptionHighlight: string;
    cta: string;
    demo: string;
    techTrust: string;
  };
  // Contact Popup
  contactPopup: {
    title: string;
    available: string;
    call: string;
    email: string;
    chat: string;
    write: string;
    copyNumber: string;
    copyEmail: string;
    liveChat: string;
    liveChatDesc: string;
  };
  // Chat mockup
  chat: {
    messages: string;
    newCount: string;
    online: string;
    language: string;
    placeholder: string;
    send: string;
    aiTranslateHint: string;
    suggestion: string;
  };
  // Conversations data
  conversations: {
    customer1: {
      name: string;
      lastMessage: string;
      msg1: string;
      msg1Translation: string;
      msg2: string;
      msg2Translation: string;
    };
    customer2: {
      name: string;
      lastMessage: string;
      msg1: string;
      msg1Translation: string;
      msg2: string;
      msg2Translation: string;
      msg3: string;
      msg3Translation: string;
    };
    customer3: {
      name: string;
      lastMessage: string;
      msg1: string;
      msg1Translation: string;
    };
  };
  // Countries
  countries: {
    germany: { name: string; sub: string };
    france: { name: string; sub: string };
    italy: { name: string; sub: string };
    spain: { name: string; sub: string };
    uk: { name: string; sub: string };
    poland: { name: string; sub: string };
    homeMarket: string;
  };
  // How it works section
  howItWorks: {
    title: string;
    subtitle: string;
    step1: {
      label: string;
      title: string;
      description: string;
      statusReady: string;
      statusActive: string;
    };
    step2: {
      label: string;
      title: string;
      description: string;
      availability: string;
      global: string;
    };
    step3: {
      label: string;
      title: string;
      description: string;
      exampleMessage: string;
      exampleTranslation: string;
    };
    step4: {
      label: string;
      title: string;
      description: string;
      conversionGrowth: string;
      trendUp: string;
    };
  };
  // Implementation section
  implementation: {
    title: string;
    subtitle: string;
    timeHighlight: string;
    step1: { title: string; description: string };
    step2: { title: string; description: string };
    step3: { title: string; description: string };
    step4: { title: string; description: string };
    codeComment: string;
    codeMetaComment: string;
  };
  // Features section
  features: {
    title: string;
    subtitle: string;
    translation: {
      title: string;
      description: string;
      checking: string;
    };
    marketUnlock: {
      title: string;
      description: string;
      totalPotential: string;
      availableCustomers: string;
    };
    omnichannel: {
      title: string;
      description: string;
      widget: string;
      email: string;
      whatsapp: string;
      messenger: string;
      andMore: string;
    };
    marketing: {
      title: string;
      description1: string;
      description2: string;
    };
  };
  // Pricing section
  pricing: {
    title: string;
    subtitle: string;
    starter: {
      title: string;
      price: string;
      period: string;
      desc: string;
      features: {
        realtime: string;
        ai: string;
        languages: string;
        omnichannel: string;
        marketing: string;
        limit: string;
      };
      cta: string;
    };
    plus: {
      badge: string;
      title: string;
      price: string;
      period: string;
      desc: string;
      features: {
        allStarter: string;
        priority: string;
        analytics: string;
        onboarding: string;
        limit: string;
      };
      cta: string;
    };
    unlimited: {
      title: string;
      price: string;
      desc: string;
      features: {
        allFeatures: string;
        unlimitedMsgs: string;
        guardian: string;
        customImpl: string;
        sla: string;
      };
      cta: string;
    };
  };
  // Footer
  footer: {
    tagline: string;
    contact: string;
    legal: string;
    privacy: string;
    terms: string;
    rights: string;
    uptime: string;
    location: string;
  };
}

export const landing: Record<Locale, LandingTranslations> = {
  // 🇵🇱 POLSKI (Polish)
  pl: {
    nav: {
      howItWorks: 'Jak to działa',
      implementation: 'Wdrożenie',
      features: 'Funkcje',
      pricing: 'Cennik',
      blog: 'Blog',
      about: 'O nas',
      login: 'Zaloguj',
      loginFull: 'Zaloguj się',
      start: 'Rozpocznij',
      startFree: 'Rozpocznij teraz',
    },
    hero: {
      badge: 'Nowość: Tłumaczenia bez limitu!',
      badgeMobile: 'Nowość: Tłumaczenia bez limitu!',
      pagetitle: 'Czat, który zna każdy język.',
      title1: 'Rozmawiaj z klientami',
      title2: 'w każdym języku świata.',
      description: 'Przełam barierę językową i docieraj do każdego, wszędzie.',
      descriptionMobile: 'Przełam barierę językową i docieraj do każdego, wszędzie.',
      descriptionHighlight: 'Automatycznie tłumacz rozmowy z klientami na 100+ języków.',
      cta: 'Rozpocznij teraz',
      demo: 'Skontaktuj się z nami',
      techTrust: 'Technologia, której ufasz',
    },
    contactPopup: {
      title: 'Forma kontaktu',
      call: 'Zadzwoń',
      email: 'E-mail',
      chat: 'Czatuj',
      write: 'Napisz',
      copyNumber: 'Kopiuj numer',
      copyEmail: 'Kopiuj email',
      liveChat: 'Live Chat',
      liveChatDesc: 'Zobacz demo na stronie',
    },
    chat: {
      messages: 'Wiadomości',
      newCount: '3 nowe',
      online: 'Online',
      language: 'Język',
      placeholder: 'Napisz po polsku...',
      send: 'Wyślij',
      aiTranslateHint: 'AI automatycznie przetłumaczy Twoją wiadomość na',
      suggestion: 'Sugestia: "Wyślemy nowy produkt jutro."',
    },
    conversations: {
      customer1: {
        name: 'Hans Müller',
        lastMessage: 'Wo ist meine Bestellung?',
        msg1: 'Hallo, wo ist meine Bestellung?',
        msg1Translation: 'Cześć, gdzie jest moje zamówienie?',
        msg2: 'Sprawdzam to dla Ciebie, daj mi chwilę.',
        msg2Translation: 'Ich überprüfe das für Sie, einen Moment bitte.',
      },
      customer2: {
        name: 'Pierre Dubois',
        lastMessage: 'Produit endommagé...',
        msg1: 'Bonjour, mon produit est arrivé endommagé.',
        msg1Translation: 'Dzień dobry, mój produkt dotarł uszkodzony.',
        msg2: 'Bardzo mi przykro. Czy możesz przesłać zdjęcie?',
        msg2Translation: 'Je suis désolé. Pouvez-vous envoyer une photo ?',
        msg3: 'Bien sûr, voici la photo.',
        msg3Translation: 'Oczywiście, oto zdjęcie. [Obraz]',
      },
      customer3: {
        name: 'Giovanni Rossi',
        lastMessage: 'Avete questo in rosso?',
        msg1: 'Ciao! Avete questo modello in rosso?',
        msg1Translation: 'Cześć! Macie ten model w kolorze czerwonym?',
      },
    },
    countries: {
      germany: { name: 'Niemcy', sub: '+83M klientów' },
      france: { name: 'Francja', sub: '+67M klientów' },
      italy: { name: 'Włochy', sub: '+59M klientów' },
      spain: { name: 'Hiszpania', sub: '+47M klientów' },
      uk: { name: 'Wlk. Brytania', sub: '+67M klientów' },
      poland: { name: 'Polska', sub: '' },
      homeMarket: 'Rynek domowy',
    },
    howItWorks: {
      title: 'Od lokalnego sklepu<br/>do globalnego gracza.',
      subtitle: 'Ścieżka, która poprowadzi Cię do międzynarodowego sukcesu. Prosta, logiczna, zautomatyzowana.',
      step1: {
        label: 'Krok 1',
        title: 'Szybka instalacja',
        description: 'Instalujesz widget i panel w kilka minut. Twój obecny zespół supportu jest gotowy do działania.',
        statusReady: 'System gotowy',
        statusActive: 'Aktywny',
      },
      step2: {
        label: 'Krok 2',
        title: 'Wybór rynków',
        description: 'W panelu zaznaczasz kraje, na które chcesz wejść. Tłumaczenie AI włącza się automatycznie.',
        availability: 'Dostępność',
        global: 'Globalna',
      },
      step3: {
        label: 'Krok 3',
        title: 'Obsługa bez barier',
        description: 'Klienci piszą w swoim języku, Ty odpisujesz po polsku. AI tłumaczy wszystko w locie.',
        exampleMessage: 'Wo ist mein Paket?',
        exampleTranslation: 'Gdzie jest moja paczka?',
      },
      step4: {
        label: 'Krok 4',
        title: 'Wzrost przychodów',
        description: 'Klienci kupują chętniej, gdy mogą porozmawiać w swoim języku. Ty oszczędzasz na zespole, a słupki sprzedaży rosną.',
        conversionGrowth: 'Wzrost konwersji',
        trendUp: 'Trend wzrostowy',
      },
    },
    implementation: {
      title: 'Wdrożenie szybsze niż<br/>parzenie kawy.',
      subtitle: 'Nie potrzebujesz armii programistów. Nasz widget zintegruje się z Twoim sklepem w',
      timeHighlight: '3 minuty',
      step1: { title: 'Skopiuj snippet', description: 'Dostępny w Twoim panelu administratora.' },
      step2: { title: 'Wklej w <head>', description: 'Działa z każdym CMS i customowym sklepem.' },
      step3: { title: 'Wybierz języki', description: 'Włącz niemiecki, francuski lub włoski jednym kliknięciem.' },
      step4: { title: 'Integracja (Opcjonalne)', description: 'Podłącz Messengera, WhatsAppa lub e-mail.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'Twoje meta tagi',
    },
    features: {
      title: 'Wszystko w jednym panelu.',
      subtitle: 'Zastąp Intercom, Mailchimp i zewnętrznych tłumaczy jednym narzędziem zaprojektowanym dla nowoczesnego e-commerce.',
      translation: {
        title: 'Real-time Translation',
        description: 'Silnik oparty na OpenAI i DeepL. Klient pisze po niemiecku, Ty widzisz to od razu po polsku. Zero opóźnień, zero nieporozumień.',
        checking: 'Sprawdzam to...',
      },
      marketUnlock: {
        title: 'Market Unlock',
        description: 'Włącz nowy rynek jednym kliknięciem. Skaluj sprzedaż bez granic.',
        totalPotential: 'Całkowity potencjał rynku',
        availableCustomers: 'Dostępni klienci',
      },
      omnichannel: {
        title: 'Omnichannel',
        description: 'Wszystkie kanały w jednym miejscu. Zarządzaj wiadomościami z wielu źródeł bez przełączania kart.',
        widget: 'Widget na stronie',
        email: 'Email',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        andMore: '...i wiele więcej',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Zamień odwiedzających w lojalnych klientów.',
        description2: 'Zbieraj leady inteligentnymi pop-upami i prowadź skuteczne kampanie e-mailowe z jednego panelu.',
      },
    },
    pricing: {
      title: 'Wybierz plan dla siebie',
      subtitle: 'Elastyczne plany dopasowane do Twojego biznesu. Zmień w dowolnym momencie.',
      starter: {
        title: 'Starter',
        price: '129 zł',
        period: '/miesiąc',
        desc: 'Idealny na start dla małych sklepów.',
        features: {
          realtime: 'Tłumaczenia real-time',
          ai: 'Funkcje AI',
          languages: 'Nielimitowana liczba języków',
          omnichannel: 'Omnichannel',
          marketing: 'Narzędzia marketingowe',
          limit: 'Do 100 wiadomości / mc',
        },
        cta: 'Wybierz Starter',
      },
      plus: {
        badge: 'Najczęściej wybierany',
        title: 'Plus',
        price: '399 zł',
        period: '/miesiąc',
        desc: 'Dla rozwijających się biznesów.',
        features: {
          allStarter: 'Wszystko co w Starter',
          priority: 'Priorytetowe wsparcie',
          analytics: 'Zaawansowana analityka',
          onboarding: 'Dedykowany onboarding',
          limit: 'Do 500 wiadomości / mc',
        },
        cta: 'Wybierz Plus',
      },
      unlimited: {
        title: 'Unlimited',
        price: 'Indywidualnie',
        desc: 'Dla dużej skali i specjalnych potrzeb.',
        features: {
          allFeatures: 'Wszystkie funkcje',
          unlimitedMsgs: 'Nielimitowane wiadomości',
          guardian: 'Dedykowany opiekun',
          customImpl: 'Indywidualne wdrożenie',
          sla: 'Umowa SLA',
        },
        cta: 'Skontaktuj się',
      },
    },
    footer: {
      tagline: 'Brama na świat dla Twojego e-commerce. Przełamujemy bariery językowe, łącząc AI z ludzką empatią.',
      contact: 'Kontakt',
      legal: 'Legal',
      privacy: 'Polityka prywatności',
      terms: 'Regulamin',
      rights: 'Wszystkie prawa zastrzeżone.',
      uptime: 'Uptime: 99.89%',
      location: 'Łódź, Polska',
    }
  },

  // 🇬🇧 ENGLISH
  en: {
    nav: {
      howItWorks: 'How it works',
      implementation: 'Implementation',
      features: 'Features',
      pricing: 'Pricing',
      blog: 'Blog',
      about: 'About us',
      login: 'Login',
      loginFull: 'Log in',
      start: 'Get started',
      startFree: 'Get started',
    },
    hero: {
      badge: 'New: Unlimited translations!',
      badgeMobile: 'New: Unlimited translations!',
      pagetitle: 'Chat that knows every language.',
      title1: 'Talk to customers',
      title2: 'in any language.',
      description: 'Break the language barrier and reach anyone, anywhere.',
      descriptionMobile: 'Break the language barrier and reach anyone, anywhere.',
      descriptionHighlight: 'Auto translate customer conversations into 100+ languages.',
      cta: 'Start Now',
      demo: 'Contact Sales',
      techTrust: 'Technology you trust',
    },
    contactPopup: {
      title: 'Contact us',
      available: 'Available 24/7',
      call: 'Call us',
      email: 'Email',
      chat: 'Chat',
      write: 'Write to us',
      copyNumber: 'Copy number',
      copyEmail: 'Copy email',
      liveChat: 'Live Chat',
      liveChatDesc: 'See demo on site',
    },
    chat: {
      messages: 'Messages',
      newCount: '3 new',
      online: 'Online',
      language: 'Language',
      placeholder: 'Type in English...',
      send: 'Send',
      aiTranslateHint: 'AI will automatically translate your message to',
      suggestion: 'Suggestion: "We will ship the new product tomorrow."',
    },
    conversations: {
      customer1: {
        name: 'Hans Müller',
        lastMessage: 'Wo ist meine Bestellung?',
        msg1: 'Hallo, wo ist meine Bestellung?',
        msg1Translation: 'Hi, where is my order?',
        msg2: 'I am checking that for you, give me a moment.',
        msg2Translation: 'Ich überprüfe das für Sie, einen Moment bitte.',
      },
      customer2: {
        name: 'Pierre Dubois',
        lastMessage: 'Produit endommagé...',
        msg1: 'Bonjour, mon produit est arrivé endommagé.',
        msg1Translation: 'Hello, my product arrived damaged.',
        msg2: 'I am very sorry. Can you send a photo?',
        msg2Translation: 'Je suis désolé. Pouvez-vous envoyer une photo ?',
        msg3: 'Bien sûr, voici la photo.',
        msg3Translation: 'Sure, here is the photo. [Image]',
      },
      customer3: {
        name: 'Giovanni Rossi',
        lastMessage: 'Avete questo in rosso?',
        msg1: 'Ciao! Avete questo modello in rosso?',
        msg1Translation: 'Hi! Do you have this model in red?',
      },
    },
    countries: {
      germany: { name: 'Germany', sub: '+83M customers' },
      france: { name: 'France', sub: '+67M customers' },
      italy: { name: 'Italy', sub: '+59M customers' },
      spain: { name: 'Spain', sub: '+47M customers' },
      uk: { name: 'UK', sub: '+67M customers' },
      poland: { name: 'Poland', sub: '' },
      homeMarket: 'Home market',
    },
    howItWorks: {
      title: 'From local shop<br/>to global player.',
      subtitle: 'The path to international success. Simple, logical, automated.',
      step1: {
        label: 'Step 1',
        title: 'Quick Installation',
        description: 'Install the widget and dashboard in minutes. Your current support team is ready to go.',
        statusReady: 'System Ready',
        statusActive: 'Active',
      },
      step2: {
        label: 'Step 2',
        title: 'Market Selection',
        description: 'Select target countries in the dashboard. AI translation activates automatically.',
        availability: 'Availability',
        global: 'Global',
      },
      step3: {
        label: 'Step 3',
        title: 'Barrier-free Support',
        description: 'Customers type in their language, you reply in English. AI translates everything on the fly.',
        exampleMessage: 'Wo ist mein Paket?',
        exampleTranslation: 'Where is my package?',
      },
      step4: {
        label: 'Step 4',
        title: 'Revenue Growth',
        description: 'Customers buy more when they can chat in their language. You save on hiring, and sales grow.',
        conversionGrowth: 'Conversion Growth',
        trendUp: 'Upward trend',
      },
    },
    implementation: {
      title: 'Implementation faster than<br/>brewing coffee.',
      subtitle: 'No army of developers needed. Our widget integrates with your store in',
      timeHighlight: '3 minutes',
      step1: { title: 'Copy snippet', description: 'Available in your admin panel.' },
      step2: { title: 'Paste in <head>', description: 'Works with any CMS or custom store.' },
      step3: { title: 'Select languages', description: 'Enable German, French or Italian with one click.' },
      step4: { title: 'Integration (Optional)', description: 'Connect Messenger, WhatsApp or Email.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'Your meta tags',
    },
    features: {
      title: 'Everything in one dashboard.',
      subtitle: 'Replace Intercom, Mailchimp and external translators with one tool designed for modern e-commerce.',
      translation: {
        title: 'Real-time Translation',
        description: 'Engine based on OpenAI and DeepL. Customer writes in German, you see it instantly in English. Zero delays, zero misunderstandings.',
        checking: 'Checking...',
      },
      marketUnlock: {
        title: 'Market Unlock',
        description: 'Unlock a new market with one click. Scale sales without borders.',
        totalPotential: 'Total market potential',
        availableCustomers: 'Available customers',
      },
      omnichannel: {
        title: 'Omnichannel',
        description: 'All channels in one place. Manage messages from multiple sources without switching tabs.',
        widget: 'Website Widget',
        email: 'Email',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        andMore: '...and much more',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Turn visitors into loyal customers.',
        description2: 'Collect leads with smart pop-ups and run effective email campaigns from one dashboard.',
      },
    },
    pricing: {
      title: 'Choose your plan',
      subtitle: 'Flexible plans tailored to your business. Change at any time.',
      starter: {
        title: 'Starter',
        price: '129 PLN',
        period: '/month',
        desc: 'Perfect for small stores starting out.',
        features: {
          realtime: 'Real-time translation',
          ai: 'AI Features',
          languages: 'Unlimited languages',
          omnichannel: 'Omnichannel',
          marketing: 'Marketing tools',
          limit: 'Up to 100 messages / mo',
        },
        cta: 'Choose Starter',
      },
      plus: {
        badge: 'Most Popular',
        title: 'Plus',
        price: '399 PLN',
        period: '/month',
        desc: 'For growing businesses.',
        features: {
          allStarter: 'Everything in Starter',
          priority: 'Priority support',
          analytics: 'Advanced analytics',
          onboarding: 'Dedicated onboarding',
          limit: 'Up to 500 messages / mo',
        },
        cta: 'Choose Plus',
      },
      unlimited: {
        title: 'Unlimited',
        price: 'Custom',
        desc: 'For large scale and special needs.',
        features: {
          allFeatures: 'All features',
          unlimitedMsgs: 'Unlimited messages',
          guardian: 'Dedicated account manager',
          customImpl: 'Custom implementation',
          sla: 'SLA Agreement',
        },
        cta: 'Contact Us',
      },
    },
    footer: {
      tagline: 'Gateway to the world for your e-commerce. We break language barriers, combining AI with human empathy.',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.',
      uptime: 'Uptime: 99.89%',
      location: 'Lodz, Poland',
    }
  },

  // 🇩🇪 DEUTSCH (German)
  de: {
    nav: {
      howItWorks: 'So funktioniert\'s',
      implementation: 'Implementierung',
      features: 'Funktionen',
      pricing: 'Preise',
      blog: 'Blog',
      about: 'Über uns',
      login: 'Login',
      loginFull: 'Anmelden',
      start: 'Starten',
      startFree: 'Kostenlos starten',
    },
    hero: {
      badge: 'Neu: Unbegrenzte Übersetzungen!',
      badgeMobile: 'Neu: Unbegrenzte Übersetzungen!',
      pagetitle: 'Ein Chat, der jede Sprache spricht.',
      title1: 'Sprechen Sie mit Kunden',
      title2: 'in jeder Sprache der Welt.',
      description: 'Überwinden Sie Sprachbarrieren und erreichen Sie jeden, überall.',
      descriptionMobile: 'Überwinden Sie Sprachbarrieren und erreichen Sie jeden, überall.',
      descriptionHighlight: 'Automatische Übersetzung von Kundengesprächen in 100+ Sprachen.',
      cta: 'Jetzt starten',
      demo: 'Kontakt aufnehmen',
      techTrust: 'Technologie, der Sie vertrauen',
    },
    contactPopup: {
      title: 'Kontakt',
      available: '24/7 erreichbar',
      call: 'Anrufen',
      email: 'E-Mail',
      chat: 'Chat',
      write: 'Schreiben',
      copyNumber: 'Nummer kopieren',
      copyEmail: 'E-Mail kopieren',
      liveChat: 'Live-Chat',
      liveChatDesc: 'Demo ansehen',
    },
    chat: {
      messages: 'Nachrichten',
      newCount: '3 neue',
      online: 'Online',
      language: 'Sprache',
      placeholder: 'Schreiben Sie auf Deutsch...',
      send: 'Senden',
      aiTranslateHint: 'KI übersetzt Ihre Nachricht automatisch ins',
      suggestion: 'Vorschlag: "Wir versenden das neue Produkt morgen."',
    },
    conversations: {
      customer1: {
        name: 'Hans Müller',
        lastMessage: 'Wo ist meine Bestellung?',
        msg1: 'Hallo, wo ist meine Bestellung?',
        msg1Translation: 'Hallo, wo ist meine Bestellung?', // Same language
        msg2: 'Ich überprüfe das für Sie, einen Moment bitte.',
        msg2Translation: 'Ich überprüfe das für Sie, einen Moment bitte.',
      },
      customer2: {
        name: 'Pierre Dubois',
        lastMessage: 'Produit endommagé...',
        msg1: 'Bonjour, mon produit est arrivé endommagé.',
        msg1Translation: 'Hallo, mein Produkt ist beschädigt angekommen.',
        msg2: 'Das tut mir leid. Können Sie ein Foto senden?',
        msg2Translation: 'Je suis désolé. Pouvez-vous envoyer une photo ?',
        msg3: 'Bien sûr, voici la photo.',
        msg3Translation: 'Sicher, hier ist das Foto. [Bild]',
      },
      customer3: {
        name: 'Giovanni Rossi',
        lastMessage: 'Avete questo in rosso?',
        msg1: 'Ciao! Avete questo modello in rosso?',
        msg1Translation: 'Hallo! Haben Sie dieses Modell in Rot?',
      },
    },
    countries: {
      germany: { name: 'Deutschland', sub: '+83M Kunden' },
      france: { name: 'Frankreich', sub: '+67M Kunden' },
      italy: { name: 'Italien', sub: '+59M Kunden' },
      spain: { name: 'Spanien', sub: '+47M Kunden' },
      uk: { name: 'Großbritannien', sub: '+67M Kunden' },
      poland: { name: 'Polen', sub: '' },
      homeMarket: 'Heimatmarkt',
    },
    howItWorks: {
      title: 'Vom lokalen Shop<br/>zum Global Player.',
      subtitle: 'Der Weg zum internationalen Erfolg. Einfach, logisch, automatisiert.',
      step1: {
        label: 'Schritt 1',
        title: 'Schnelle Installation',
        description: 'Installieren Sie Widget und Dashboard in Minuten. Ihr Support-Team ist sofort einsatzbereit.',
        statusReady: 'System bereit',
        statusActive: 'Aktiv',
      },
      step2: {
        label: 'Schritt 2',
        title: 'Marktauswahl',
        description: 'Wählen Sie im Dashboard Zielländer aus. Die KI-Übersetzung aktiviert sich automatisch.',
        availability: 'Verfügbarkeit',
        global: 'Global',
      },
      step3: {
        label: 'Schritt 3',
        title: 'Barrierefreier Support',
        description: 'Kunden schreiben in ihrer Sprache, Sie antworten auf Deutsch. Die KI übersetzt alles in Echtzeit.',
        exampleMessage: 'Wo ist mein Paket?',
        exampleTranslation: 'Wo ist mein Paket?',
      },
      step4: {
        label: 'Schritt 4',
        title: 'Umsatzwachstum',
        description: 'Kunden kaufen eher, wenn sie in ihrer Sprache chatten können. Sie sparen Personal, und der Umsatz steigt.',
        conversionGrowth: 'Konversionsrate',
        trendUp: 'Aufwärtstrend',
      },
    },
    implementation: {
      title: 'Implementierung schneller als<br/>Kaffee kochen.',
      subtitle: 'Keine Armee von Entwicklern nötig. Unser Widget integriert sich in Ihren Shop in',
      timeHighlight: '3 Minuten',
      step1: { title: 'Snippet kopieren', description: 'Verfügbar in Ihrem Admin-Panel.' },
      step2: { title: 'In <head> einfügen', description: 'Funktioniert mit jedem CMS oder Custom Shop.' },
      step3: { title: 'Sprachen wählen', description: 'Aktivieren Sie Englisch, Französisch oder Italienisch mit einem Klick.' },
      step4: { title: 'Integration (Optional)', description: 'Verbinden Sie Messenger, WhatsApp oder E-Mail.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'Ihre Meta-Tags',
    },
    features: {
      title: 'Alles in einem Dashboard.',
      subtitle: 'Ersetzen Sie Intercom, Mailchimp und externe Übersetzer durch ein Tool für modernen E-Commerce.',
      translation: {
        title: 'Echtzeit-Übersetzung',
        description: 'Engine basierend auf OpenAI und DeepL. Der Kunde schreibt auf Französisch, Sie sehen es sofort auf Deutsch. Keine Verzögerungen.',
        checking: 'Überprüfe...',
      },
      marketUnlock: {
        title: 'Markt-Freischaltung',
        description: 'Erschließen Sie neue Märkte mit einem Klick. Skalieren Sie grenzenlos.',
        totalPotential: 'Marktpotenzial',
        availableCustomers: 'Verfügbare Kunden',
      },
      omnichannel: {
        title: 'Omnichannel',
        description: 'Alle Kanäle an einem Ort. Verwalten Sie Nachrichten aus verschiedenen Quellen ohne Tab-Wechsel.',
        widget: 'Website Widget',
        email: 'E-Mail',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        andMore: '...und vieles mehr',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Verwandeln Sie Besucher in treue Kunden.',
        description2: 'Sammeln Sie Leads mit intelligenten Pop-ups und führen Sie effektive E-Mail-Kampagnen durch.',
      },
    },
    pricing: {
      title: 'Wählen Sie Ihren Plan',
      subtitle: 'Flexible Pläne, angepasst an Ihr Geschäft. Jederzeit änderbar.',
      starter: {
        title: 'Starter',
        price: '129 PLN',
        period: '/Monat',
        desc: 'Ideal für kleine Shops am Anfang.',
        features: {
          realtime: 'Echtzeit-Übersetzung',
          ai: 'KI-Funktionen',
          languages: 'Unbegrenzte Sprachen',
          omnichannel: 'Omnichannel',
          marketing: 'Marketing-Tools',
          limit: 'Bis zu 100 Nachrichten / Mt',
        },
        cta: 'Starter wählen',
      },
      plus: {
        badge: 'Meistgewählt',
        title: 'Plus',
        price: '399 PLN',
        period: '/Monat',
        desc: 'Für wachsende Unternehmen.',
        features: {
          allStarter: 'Alles aus Starter',
          priority: 'Priority Support',
          analytics: 'Erweiterte Analytik',
          onboarding: 'Dediziertes Onboarding',
          limit: 'Bis zu 500 Nachrichten / Mt',
        },
        cta: 'Plus wählen',
      },
      unlimited: {
        title: 'Unlimited',
        price: 'Individuell',
        desc: 'Für große Skalierung und spezielle Anforderungen.',
        features: {
          allFeatures: 'Alle Funktionen',
          unlimitedMsgs: 'Unbegrenzte Nachrichten',
          guardian: 'Dedizierter Betreuer',
          customImpl: 'Individuelle Implementierung',
          sla: 'SLA-Vertrag',
        },
        cta: 'Kontaktieren',
      },
    },
    footer: {
      tagline: 'Das Tor zur Welt für Ihren E-Commerce. Wir überwinden Sprachbarrieren und verbinden KI mit menschlicher Empathie.',
      contact: 'Kontakt',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'AGB',
      rights: 'Alle Rechte vorbehalten.',
      uptime: 'Uptime: 99.89%',
      location: 'Lodz, Polen',
    }
  },

  // 🇫🇷 FRANÇAIS (French)
  fr: {
    nav: {
      howItWorks: 'Comment ça marche',
      implementation: 'Implémentation',
      features: 'Fonctionnalités',
      pricing: 'Tarifs',
      blog: 'Blog',
      about: 'À propos',
      login: 'Connexion',
      loginFull: 'Se connecter',
      start: 'Démarrer',
      startFree: 'Commencer gratuitement',
    },
    hero: {
      badge: 'Nouveau : Traductions illimitées !',
      badgeMobile: 'Nouveau : Traductions illimitées !',
      pagetitle: 'Le chat qui parle toutes les langues.',
      title1: 'Parlez aux clients',
      title2: 'dans n\'importe quelle langue.',
      description: 'Brisez la barrière de la langue et touchez tout le monde, partout.',
      descriptionMobile: 'Brisez la barrière de la langue et touchez tout le monde, partout.',
      descriptionHighlight: 'Traduisez automatiquement les conversations clients dans +100 langues.',
      cta: 'Commencer maintenant',
      demo: 'Contactez-nous',
      techTrust: 'Technologie de confiance',
    },
    contactPopup: {
      title: 'Contact',
      available: 'Disponible 24/7',
      call: 'Appeler',
      email: 'E-mail',
      chat: 'Chat',
      write: 'Écrire',
      copyNumber: 'Copier le numéro',
      copyEmail: 'Copier l\'e-mail',
      liveChat: 'Live Chat',
      liveChatDesc: 'Voir la démo sur le site',
    },
    chat: {
      messages: 'Messages',
      newCount: '3 nouveaux',
      online: 'En ligne',
      language: 'Langue',
      placeholder: 'Écrivez en français...',
      send: 'Envoyer',
      aiTranslateHint: 'L\'IA traduira automatiquement votre message en',
      suggestion: 'Suggestion : "Nous expédierons le nouveau produit demain."',
    },
    conversations: {
      customer1: {
        name: 'Hans Müller',
        lastMessage: 'Wo ist meine Bestellung?',
        msg1: 'Hallo, wo ist meine Bestellung?',
        msg1Translation: 'Bonjour, où est ma commande ?',
        msg2: 'Je vérifie cela pour vous, un instant s\'il vous plaît.',
        msg2Translation: 'Ich überprüfe das für Sie, einen Moment bitte.',
      },
      customer2: {
        name: 'Pierre Dubois',
        lastMessage: 'Produit endommagé...',
        msg1: 'Bonjour, mon produit est arrivé endommagé.',
        msg1Translation: 'Bonjour, mon produit est arrivé endommagé.',
        msg2: 'Je suis désolé. Pouvez-vous envoyer une photo ?',
        msg2Translation: 'Je suis désolé. Pouvez-vous envoyer une photo ?',
        msg3: 'Bien sûr, voici la photo.',
        msg3Translation: 'Bien sûr, voici la photo. [Image]',
      },
      customer3: {
        name: 'Giovanni Rossi',
        lastMessage: 'Avete questo in rosso?',
        msg1: 'Ciao! Avete questo modello in rosso?',
        msg1Translation: 'Salut ! Avez-vous ce modèle en rouge ?',
      },
    },
    countries: {
      germany: { name: 'Allemagne', sub: '+83M clients' },
      france: { name: 'France', sub: '+67M clients' },
      italy: { name: 'Italie', sub: '+59M clients' },
      spain: { name: 'Espagne', sub: '+47M clients' },
      uk: { name: 'Royaume-Uni', sub: '+67M clients' },
      poland: { name: 'Pologne', sub: '' },
      homeMarket: 'Marché domestique',
    },
    howItWorks: {
      title: 'De la boutique locale<br/>au marché mondial.',
      subtitle: 'Le chemin vers le succès international. Simple, logique, automatisé.',
      step1: {
        label: 'Étape 1',
        title: 'Installation rapide',
        description: 'Installez le widget et le tableau de bord en quelques minutes. Votre équipe est prête.',
        statusReady: 'Système prêt',
        statusActive: 'Actif',
      },
      step2: {
        label: 'Étape 2',
        title: 'Choix des marchés',
        description: 'Sélectionnez les pays cibles. La traduction IA s\'active automatiquement.',
        availability: 'Disponibilité',
        global: 'Mondiale',
      },
      step3: {
        label: 'Étape 3',
        title: 'Support sans barrières',
        description: 'Les clients écrivent dans leur langue, vous répondez en français. L\'IA traduit tout à la volée.',
        exampleMessage: 'Wo ist mein Paket?',
        exampleTranslation: 'Où est mon colis ?',
      },
      step4: {
        label: 'Étape 4',
        title: 'Croissance des revenus',
        description: 'Les clients achètent plus quand ils peuvent discuter dans leur langue. Vos ventes augmentent.',
        conversionGrowth: 'Hausse de conversion',
        trendUp: 'Tendance haussière',
      },
    },
    implementation: {
      title: 'Implémentation plus rapide<br/>qu\'un café.',
      subtitle: 'Pas besoin d\'une armée de développeurs. Notre widget s\'intègre à votre boutique en',
      timeHighlight: '3 minutes',
      step1: { title: 'Copier le snippet', description: 'Disponible dans votre panneau d\'admin.' },
      step2: { title: 'Coller dans <head>', description: 'Fonctionne avec tout CMS ou site sur mesure.' },
      step3: { title: 'Choisir les langues', description: 'Activez l\'allemand ou l\'anglais en un clic.' },
      step4: { title: 'Intégration (Optionnel)', description: 'Connectez Messenger, WhatsApp ou E-mail.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'Vos balises meta',
    },
    features: {
      title: 'Tout en un seul endroit.',
      subtitle: 'Remplacez Intercom, Mailchimp et les traducteurs externes par un outil conçu pour l\'e-commerce moderne.',
      translation: {
        title: 'Traduction en temps réel',
        description: 'Moteur basé sur OpenAI et DeepL. Le client écrit en allemand, vous voyez le français. Zéro délai.',
        checking: 'Vérification...',
      },
      marketUnlock: {
        title: 'Déblocage de marché',
        description: 'Ouvrez un nouveau marché en un clic. Développez vos ventes sans frontières.',
        totalPotential: 'Potentiel du marché',
        availableCustomers: 'Clients disponibles',
      },
      omnichannel: {
        title: 'Omnicanal',
        description: 'Tous les canaux au même endroit. Gérez les messages de plusieurs sources sans changer d\'onglet.',
        widget: 'Widget Site Web',
        email: 'E-mail',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        andMore: '...et bien plus',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Transformez les visiteurs en clients fidèles.',
        description2: 'Collectez des leads avec des pop-ups intelligents et gérez vos campagnes e-mail.',
      },
    },
    pricing: {
      title: 'Choisissez votre plan',
      subtitle: 'Des plans flexibles adaptés à votre entreprise. Changez à tout moment.',
      starter: {
        title: 'Starter',
        price: '129 PLN',
        period: '/mois',
        desc: 'Parfait pour les petites boutiques.',
        features: {
          realtime: 'Traduction temps réel',
          ai: 'Fonctions IA',
          languages: 'Langues illimitées',
          omnichannel: 'Omnicanal',
          marketing: 'Outils marketing',
          limit: 'Jusqu\'à 100 messages / mois',
        },
        cta: 'Choisir Starter',
      },
      plus: {
        badge: 'Le plus populaire',
        title: 'Plus',
        price: '399 PLN',
        period: '/mois',
        desc: 'Pour les entreprises en croissance.',
        features: {
          allStarter: 'Tout ce qui est dans Starter',
          priority: 'Support prioritaire',
          analytics: 'Analyses avancées',
          onboarding: 'Onboarding dédié',
          limit: 'Jusqu\'à 500 messages / mois',
        },
        cta: 'Choisir Plus',
      },
      unlimited: {
        title: 'Unlimited',
        price: 'Sur devis',
        desc: 'Pour grande échelle et besoins spéciaux.',
        features: {
          allFeatures: 'Toutes les fonctionnalités',
          unlimitedMsgs: 'Messages illimités',
          guardian: 'Gestionnaire de compte',
          customImpl: 'Implémentation sur mesure',
          sla: 'Contrat SLA',
        },
        cta: 'Contactez-nous',
      },
    },
    footer: {
      tagline: 'La porte sur le monde pour votre e-commerce. Nous brisons les barrières linguistiques en alliant IA et empathie humaine.',
      contact: 'Contact',
      legal: 'Légal',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      rights: 'Tous droits réservés.',
      uptime: 'Disponibilité : 99.89%',
      location: 'Lodz, Pologne',
    }
  },

  // 🇪🇸 ESPAÑOL (Spanish)
  es: {
    nav: {
      howItWorks: 'Cómo funciona',
      implementation: 'Implementación',
      features: 'Funciones',
      pricing: 'Precios',
      blog: 'Blog',
      about: 'Sobre nosotros',
      login: 'Entrar',
      loginFull: 'Iniciar sesión',
      start: 'Empezar',
      startFree: 'Empieza gratis',
    },
    hero: {
      badge: 'Nuevo: ¡Traducciones ilimitadas!',
      badgeMobile: 'Nuevo: ¡Traducciones ilimitadas!',
      pagetitle: 'El chat que habla todos los idiomas.',
      title1: 'Habla con tus clientes',
      title2: 'en cualquier idioma.',
      description: 'Rompe la barrera del idioma y llega a todos, en todas partes.',
      descriptionMobile: 'Rompe la barrera del idioma y llega a todos, en todas partes.',
      descriptionHighlight: 'Traduce automáticamente conversaciones en más de 100 idiomas.',
      cta: 'Empezar ahora',
      demo: 'Contactar ventas',
      techTrust: 'Tecnología de confianza',
    },
    contactPopup: {
      title: 'Contacto',
      available: 'Disponible 24/7',
      call: 'Llamar',
      email: 'Correo',
      chat: 'Chat',
      write: 'Escribir',
      copyNumber: 'Copiar número',
      copyEmail: 'Copiar correo',
      liveChat: 'Chat en vivo',
      liveChatDesc: 'Ver demo en el sitio',
    },
    chat: {
      messages: 'Mensajes',
      newCount: '3 nuevos',
      online: 'En línea',
      language: 'Idioma',
      placeholder: 'Escribe en español...',
      send: 'Enviar',
      aiTranslateHint: 'La IA traducirá automáticamente tu mensaje al',
      suggestion: 'Sugerencia: "Enviaremos el nuevo producto mañana."',
    },
    conversations: {
      customer1: {
        name: 'Hans Müller',
        lastMessage: 'Wo ist meine Bestellung?',
        msg1: 'Hallo, wo ist meine Bestellung?',
        msg1Translation: 'Hola, ¿dónde está mi pedido?',
        msg2: 'Lo estoy comprobando, un momento por favor.',
        msg2Translation: 'Ich überprüfe das für Sie, einen Moment bitte.',
      },
      customer2: {
        name: 'Pierre Dubois',
        lastMessage: 'Produit endommagé...',
        msg1: 'Bonjour, mon produit est arrivé endommagé.',
        msg1Translation: 'Hola, mi producto llegó dañado.',
        msg2: 'Lo siento mucho. ¿Puede enviar una foto?',
        msg2Translation: 'Je suis désolé. Pouvez-vous envoyer une photo ?',
        msg3: 'Bien sûr, voici la photo.',
        msg3Translation: 'Claro, aquí está la foto. [Imagen]',
      },
      customer3: {
        name: 'Giovanni Rossi',
        lastMessage: 'Avete questo in rosso?',
        msg1: 'Ciao! Avete questo modello in rosso?',
        msg1Translation: '¡Hola! ¿Tienen este modelo en rojo?',
      },
    },
    countries: {
      germany: { name: 'Alemania', sub: '+83M clientes' },
      france: { name: 'Francia', sub: '+67M clientes' },
      italy: { name: 'Italia', sub: '+59M clientes' },
      spain: { name: 'España', sub: '+47M clientes' },
      uk: { name: 'Reino Unido', sub: '+67M clientes' },
      poland: { name: 'Polonia', sub: '' },
      homeMarket: 'Mercado local',
    },
    howItWorks: {
      title: 'De tienda local<br/>a jugador global.',
      subtitle: 'El camino hacia el éxito internacional. Simple, lógico, automatizado.',
      step1: {
        label: 'Paso 1',
        title: 'Instalación rápida',
        description: 'Instala el widget y el panel en minutos. Tu equipo de soporte está listo para empezar.',
        statusReady: 'Sistema listo',
        statusActive: 'Activo',
      },
      step2: {
        label: 'Paso 2',
        title: 'Selección de mercados',
        description: 'Elige países en el panel. La traducción por IA se activa automáticamente.',
        availability: 'Disponibilidad',
        global: 'Global',
      },
      step3: {
        label: 'Paso 3',
        title: 'Soporte sin barreras',
        description: 'Los clientes escriben en su idioma, tú respondes en español. La IA traduce todo al instante.',
        exampleMessage: 'Wo ist mein Paket?',
        exampleTranslation: '¿Dónde está mi paquete?',
      },
      step4: {
        label: 'Paso 4',
        title: 'Aumento de ingresos',
        description: 'Los clientes compran más cuando pueden chatear en su idioma. Ahorras en personal y las ventas crecen.',
        conversionGrowth: 'Crecimiento',
        trendUp: 'Tendencia al alza',
      },
    },
    implementation: {
      title: 'Implementación más rápida<br/>que hacer un café.',
      subtitle: 'No necesitas un ejército de programadores. Nuestro widget se integra en tu tienda en',
      timeHighlight: '3 minutos',
      step1: { title: 'Copiar código', description: 'Disponible en tu panel de administración.' },
      step2: { title: 'Pegar en <head>', description: 'Funciona con cualquier CMS o tienda a medida.' },
      step3: { title: 'Elegir idiomas', description: 'Activa alemán, inglés o francés con un clic.' },
      step4: { title: 'Integración (Opcional)', description: 'Conecta Messenger, WhatsApp o correo.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'Tus meta etiquetas',
    },
    features: {
      title: 'Todo en un solo panel.',
      subtitle: 'Reemplaza Intercom, Mailchimp y traductores externos con una herramienta para el e-commerce moderno.',
      translation: {
        title: 'Traducción en tiempo real',
        description: 'Motor basado en OpenAI y DeepL. El cliente escribe en alemán, tú lo ves en español. Cero retrasos.',
        checking: 'Comprobando...',
      },
      marketUnlock: {
        title: 'Desbloqueo de mercado',
        description: 'Abre un nuevo mercado con un clic. Escala ventas sin fronteras.',
        totalPotential: 'Potencial de mercado',
        availableCustomers: 'Clientes disponibles',
      },
      omnichannel: {
        title: 'Omnicanal',
        description: 'Todos los canales en un lugar. Gestiona mensajes de múltiples fuentes sin cambiar de pestaña.',
        widget: 'Widget web',
        email: 'Email',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        andMore: '...y mucho más',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Convierte visitantes en clientes leales.',
        description2: 'Capta leads con pop-ups inteligentes y gestiona campañas de email.',
      },
    },
    pricing: {
      title: 'Elige tu plan',
      subtitle: 'Planes flexibles adaptados a tu negocio. Cambia en cualquier momento.',
      starter: {
        title: 'Starter',
        price: '129 PLN',
        period: '/mes',
        desc: 'Ideal para tiendas pequeñas.',
        features: {
          realtime: 'Traducción tiempo real',
          ai: 'Funciones IA',
          languages: 'Idiomas ilimitados',
          omnichannel: 'Omnicanal',
          marketing: 'Herramientas marketing',
          limit: 'Hasta 100 mensajes / mes',
        },
        cta: 'Elegir Starter',
      },
      plus: {
        badge: 'Más popular',
        title: 'Plus',
        price: '399 PLN',
        period: '/mes',
        desc: 'Para negocios en crecimiento.',
        features: {
          allStarter: 'Todo lo de Starter',
          priority: 'Soporte prioritario',
          analytics: 'Analítica avanzada',
          onboarding: 'Onboarding dedicado',
          limit: 'Hasta 500 mensajes / mes',
        },
        cta: 'Elegir Plus',
      },
      unlimited: {
        title: 'Unlimited',
        price: 'A medida',
        desc: 'Para gran escala y necesidades especiales.',
        features: {
          allFeatures: 'Todas las funciones',
          unlimitedMsgs: 'Mensajes ilimitados',
          guardian: 'Gestor dedicado',
          customImpl: 'Implementación a medida',
          sla: 'Acuerdo SLA',
        },
        cta: 'Contactar',
      },
    },
    footer: {
      tagline: 'La puerta al mundo para tu e-commerce. Rompemos barreras lingüísticas uniendo IA con empatía humana.',
      contact: 'Contacto',
      legal: 'Legal',
      privacy: 'Privacidad',
      terms: 'Términos',
      rights: 'Todos los derechos reservados.',
      uptime: 'Uptime: 99.89%',
      location: 'Lodz, Polonia',
    }
  },

  // 🇮🇹 ITALIANO (Italian)
  it: {
    nav: {
      howItWorks: 'Come funziona',
      implementation: 'Implementazione',
      features: 'Funzionalità',
      pricing: 'Prezzi',
      blog: 'Blog',
      about: 'Chi siamo',
      login: 'Accedi',
      loginFull: 'Accedi',
      start: 'Inizia',
      startFree: 'Inizia gratis',
    },
    hero: {
      badge: 'Novità: Traduzioni illimitate!',
      badgeMobile: 'Novità: Traduzioni illimitate!',
      pagetitle: 'La chat che conosce ogni lingua.',
      title1: 'Parla con i clienti',
      title2: 'in qualsiasi lingua.',
      description: 'Abbatti la barriera linguistica e raggiungi chiunque, ovunque.',
      descriptionMobile: 'Abbatti la barriera linguistica e raggiungi chiunque, ovunque.',
      descriptionHighlight: 'Traduci automaticamente le conversazioni in oltre 100 lingue.',
      cta: 'Inizia ora',
      demo: 'Contattaci',
      techTrust: 'Tecnologia di fiducia',
    },
    contactPopup: {
      title: 'Contatti',
      available: 'Disponibili 24/7',
      call: 'Chiama',
      email: 'Email',
      chat: 'Chat',
      write: 'Scrivici',
      copyNumber: 'Copia numero',
      copyEmail: 'Copia email',
      liveChat: 'Live Chat',
      liveChatDesc: 'Vedi demo sul sito',
    },
    chat: {
      messages: 'Messaggi',
      newCount: '3 nuovi',
      online: 'Online',
      language: 'Lingua',
      placeholder: 'Scrivi in italiano...',
      send: 'Invia',
      aiTranslateHint: 'L\'IA tradurrà automaticamente il tuo messaggio in',
      suggestion: 'Suggerimento: "Spediremo il nuovo prodotto domani."',
    },
    conversations: {
      customer1: {
        name: 'Hans Müller',
        lastMessage: 'Wo ist meine Bestellung?',
        msg1: 'Hallo, wo ist meine Bestellung?',
        msg1Translation: 'Ciao, dov\'è il mio ordine?',
        msg2: 'Controllo subito per te, un attimo.',
        msg2Translation: 'Ich überprüfe das für Sie, einen Moment bitte.',
      },
      customer2: {
        name: 'Pierre Dubois',
        lastMessage: 'Produit endommagé...',
        msg1: 'Bonjour, mon produit est arrivé endommagé.',
        msg1Translation: 'Buongiorno, il mio prodotto è arrivato danneggiato.',
        msg2: 'Mi dispiace molto. Puoi inviare una foto?',
        msg2Translation: 'Je suis désolé. Pouvez-vous envoyer une photo ?',
        msg3: 'Bien sûr, voici la photo.',
        msg3Translation: 'Certo, ecco la foto. [Immagine]',
      },
      customer3: {
        name: 'Giovanni Rossi',
        lastMessage: 'Avete questo in rosso?',
        msg1: 'Ciao! Avete questo modello in rosso?',
        msg1Translation: 'Ciao! Avete questo modello in rosso?',
      },
    },
    countries: {
      germany: { name: 'Germania', sub: '+83M clienti' },
      france: { name: 'Francia', sub: '+67M clienti' },
      italy: { name: 'Italia', sub: '+59M clienti' },
      spain: { name: 'Spagna', sub: '+47M clienti' },
      uk: { name: 'Regno Unito', sub: '+67M clienti' },
      poland: { name: 'Polonia', sub: '' },
      homeMarket: 'Mercato domestico',
    },
    howItWorks: {
      title: 'Da negozio locale<br/>a player globale.',
      subtitle: 'Il percorso verso il successo internazionale. Semplice, logico, automatizzato.',
      step1: {
        label: 'Step 1',
        title: 'Installazione rapida',
        description: 'Installa widget e dashboard in pochi minuti. Il tuo team è pronto a partire.',
        statusReady: 'Sistema pronto',
        statusActive: 'Attivo',
      },
      step2: {
        label: 'Step 2',
        title: 'Scelta mercati',
        description: 'Seleziona i paesi target. La traduzione IA si attiva automaticamente.',
        availability: 'Disponibilità',
        global: 'Globale',
      },
      step3: {
        label: 'Step 3',
        title: 'Supporto senza barriere',
        description: 'I clienti scrivono nella loro lingua, tu rispondi in italiano. L\'IA traduce tutto al volo.',
        exampleMessage: 'Wo ist mein Paket?',
        exampleTranslation: 'Dov\'è il mio pacco?',
      },
      step4: {
        label: 'Step 4',
        title: 'Crescita ricavi',
        description: 'I clienti comprano di più quando possono chattare nella loro lingua. Risparmi sul personale e le vendite crescono.',
        conversionGrowth: 'Aumento conversioni',
        trendUp: 'Trend in crescita',
      },
    },
    implementation: {
      title: 'Implementazione più veloce<br/>di un caffè.',
      subtitle: 'Non serve un esercito di programmatori. Il nostro widget si integra nel tuo store in',
      timeHighlight: '3 minuti',
      step1: { title: 'Copia snippet', description: 'Disponibile nel tuo pannello admin.' },
      step2: { title: 'Incolla in <head>', description: 'Funziona con qualsiasi CMS o sito custom.' },
      step3: { title: 'Scegli lingue', description: 'Attiva tedesco, inglese o francese con un clic.' },
      step4: { title: 'Integrazione (Opzionale)', description: 'Collega Messenger, WhatsApp o Email.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'I tuoi meta tag',
    },
    features: {
      title: 'Tutto in un\'unica dashboard.',
      subtitle: 'Sostituisci Intercom, Mailchimp e traduttori esterni con uno strumento per l\'e-commerce moderno.',
      translation: {
        title: 'Traduzione Real-time',
        description: 'Motore basato su OpenAI e DeepL. Il cliente scrive in tedesco, tu leggi in italiano. Zero ritardi.',
        checking: 'Controllo...',
      },
      marketUnlock: {
        title: 'Sblocco Mercati',
        description: 'Apri un nuovo mercato con un clic. Scala le vendite senza confini.',
        totalPotential: 'Potenziale di mercato',
        availableCustomers: 'Clienti disponibili',
      },
      omnichannel: {
        title: 'Omnichannel',
        description: 'Tutti i canali in un posto solo. Gestisci messaggi da più fonti senza cambiare scheda.',
        widget: 'Widget Sito',
        email: 'Email',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        andMore: '...e molto altro',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Trasforma i visitatori in clienti fedeli.',
        description2: 'Raccogli lead con pop-up intelligenti e gestisci campagne email efficaci.',
      },
    },
    pricing: {
      title: 'Scegli il tuo piano',
      subtitle: 'Piani flessibili adatti al tuo business. Cambia quando vuoi.',
      starter: {
        title: 'Starter',
        price: '129 PLN',
        period: '/mese',
        desc: 'Ideale per piccoli negozi.',
        features: {
          realtime: 'Traduzioni real-time',
          ai: 'Funzioni IA',
          languages: 'Lingue illimitate',
          omnichannel: 'Omnichannel',
          marketing: 'Strumenti marketing',
          limit: 'Fino a 100 messaggi / mese',
        },
        cta: 'Scegli Starter',
      },
      plus: {
        badge: 'Più popolare',
        title: 'Plus',
        price: '399 PLN',
        period: '/mese',
        desc: 'Per business in crescita.',
        features: {
          allStarter: 'Tutto nel piano Starter',
          priority: 'Supporto prioritario',
          analytics: 'Analisi avanzate',
          onboarding: 'Onboarding dedicato',
          limit: 'Fino a 500 messaggi / mese',
        },
        cta: 'Scegli Plus',
      },
      unlimited: {
        title: 'Unlimited',
        price: 'Su misura',
        desc: 'Per grandi volumi ed esigenze speciali.',
        features: {
          allFeatures: 'Tutte le funzionalità',
          unlimitedMsgs: 'Messaggi illimitati',
          guardian: 'Account manager',
          customImpl: 'Implementazione su misura',
          sla: 'Contratto SLA',
        },
        cta: 'Contattaci',
      },
    },
    footer: {
      tagline: 'La porta sul mondo per il tuo e-commerce. Abbattiamo le barriere linguistiche unendo IA ed empatia umana.',
      contact: 'Contatti',
      legal: 'Legale',
      privacy: 'Privacy',
      terms: 'Termini',
      rights: 'Tutti i diritti riservati.',
      uptime: 'Uptime: 99.89%',
      location: 'Lodz, Polonia',
    }
  },

  // 🇨🇿 ČEŠTINA (Czech)
  cs: {
    nav: {
      howItWorks: 'Jak to funguje',
      implementation: 'Implementace',
      features: 'Funkce',
      pricing: 'Ceník',
      blog: 'Blog',
      about: 'O nás',
      login: 'Přihlásit',
      loginFull: 'Přihlásit se',
      start: 'Začít',
      startFree: 'Začít zdarma',
    },
    hero: {
      badge: 'Novinka: Neomezené překlady!',
      badgeMobile: 'Novinka: Neomezené překlady!',
      pagetitle: 'Chat, který zná každý jazyk.',
      title1: 'Mluvte se zákazníky',
      title2: 'v jakémkoli jazyce.',
      description: 'Prolomte jazykovou bariéru a oslovte kohokoli, kdekoli.',
      descriptionMobile: 'Prolomte jazykovou bariéru a oslovte kohokoli, kdekoli.',
      descriptionHighlight: 'Automaticky překládejte konverzace do 100+ jazyků.',
      cta: 'Začít nyní',
      demo: 'Kontaktujte nás',
      techTrust: 'Technologie, které věříte',
    },
    contactPopup: {
      title: 'Kontakt',
      available: 'K dispozici 24/7',
      call: 'Zavolat',
      email: 'E-mail',
      chat: 'Chatovat',
      write: 'Napsat',
      copyNumber: 'Kopírovat číslo',
      copyEmail: 'Kopírovat e-mail',
      liveChat: 'Live Chat',
      liveChatDesc: 'Zobrazit demo na webu',
    },
    chat: {
      messages: 'Zprávy',
      newCount: '3 nové',
      online: 'Online',
      language: 'Jazyk',
      placeholder: 'Pište česky...',
      send: 'Odeslat',
      aiTranslateHint: 'AI automaticky přeloží vaši zprávu do',
      suggestion: 'Návrh: "Nový produkt odešleme zítra."',
    },
    conversations: {
      customer1: {
        name: 'Hans Müller',
        lastMessage: 'Wo ist meine Bestellung?',
        msg1: 'Hallo, wo ist meine Bestellung?',
        msg1Translation: 'Ahoj, kde je moje objednávka?',
        msg2: 'Ověřuji to pro vás, moment prosím.',
        msg2Translation: 'Ich überprüfe das für Sie, einen Moment bitte.',
      },
      customer2: {
        name: 'Pierre Dubois',
        lastMessage: 'Produit endommagé...',
        msg1: 'Bonjour, mon produit est arrivé endommagé.',
        msg1Translation: 'Dobrý den, můj produkt dorazil poškozený.',
        msg2: 'To mě moc mrzí. Můžete poslat fotku?',
        msg2Translation: 'Je suis désolé. Pouvez-vous envoyer une photo ?',
        msg3: 'Bien sûr, voici la photo.',
        msg3Translation: 'Jistě, tady je fotka. [Obrázek]',
      },
      customer3: {
        name: 'Giovanni Rossi',
        lastMessage: 'Avete questo in rosso?',
        msg1: 'Ciao! Avete questo modello in rosso?',
        msg1Translation: 'Ahoj! Máte tento model v červené?',
      },
    },
    countries: {
      germany: { name: 'Německo', sub: '+83M zákazníků' },
      france: { name: 'Francie', sub: '+67M zákazníků' },
      italy: { name: 'Itálie', sub: '+59M zákazníků' },
      spain: { name: 'Španělsko', sub: '+47M zákazníků' },
      uk: { name: 'Velká Británie', sub: '+67M zákazníků' },
      poland: { name: 'Polsko', sub: '' },
      homeMarket: 'Domácí trh',
    },
    howItWorks: {
      title: 'Z lokálního e-shopu<br/>globálním hráčem.',
      subtitle: 'Cesta k mezinárodnímu úspěchu. Jednoduchá, logická, automatizovaná.',
      step1: {
        label: 'Krok 1',
        title: 'Rychlá instalace',
        description: 'Nainstalujte widget a panel během několika minut. Váš tým podpory je připraven.',
        statusReady: 'Systém připraven',
        statusActive: 'Aktivní',
      },
      step2: {
        label: 'Krok 2',
        title: 'Výběr trhů',
        description: 'V panelu vyberte cílové země. AI překlad se zapne automaticky.',
        availability: 'Dostupnost',
        global: 'Globální',
      },
      step3: {
        label: 'Krok 3',
        title: 'Podpora bez bariér',
        description: 'Zákazníci píší svým jazykem, vy odpovídáte česky. AI vše překládá za běhu.',
        exampleMessage: 'Wo ist mein Paket?',
        exampleTranslation: 'Kde je můj balíček?',
      },
      step4: {
        label: 'Krok 4',
        title: 'Růst příjmů',
        description: 'Zákazníci nakupují raději, když mohou chatovat ve svém jazyce. Vy šetříte na týmu a prodeje rostou.',
        conversionGrowth: 'Růst konverze',
        trendUp: 'Rostoucí trend',
      },
    },
    implementation: {
      title: 'Implementace rychlejší než<br/>příprava kávy.',
      subtitle: 'Nepotřebujete armádu programátorů. Náš widget se integruje do vašeho e-shopu za',
      timeHighlight: '3 minuty',
      step1: { title: 'Zkopírujte kód', description: 'Dostupný ve vašem administrátorském panelu.' },
      step2: { title: 'Vložte do <head>', description: 'Funguje s každým CMS i vlastním řešením.' },
      step3: { title: 'Vyberte jazyky', description: 'Zapněte němčinu, angličtinu nebo francouzštinu jedním kliknutím.' },
      step4: { title: 'Integrace (Volitelné)', description: 'Propojte Messenger, WhatsApp nebo e-mail.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'Vaše meta tagy',
    },
    features: {
      title: 'Vše v jednom panelu.',
      subtitle: 'Nahraďte Intercom, Mailchimp a externí překladatele jedním nástrojem pro moderní e-commerce.',
      translation: {
        title: 'Překlad v reálném čase',
        description: 'Engine založený na OpenAI a DeepL. Zákazník píše německy, vy vidíte česky. Žádné zpoždění.',
        checking: 'Ověřuji...',
      },
      marketUnlock: {
        title: 'Odemknutí trhu',
        description: 'Otevřete nový trh jedním kliknutím. Škálujte prodeje bez hranic.',
        totalPotential: 'Potenciál trhu',
        availableCustomers: 'Dostupní zákazníci',
      },
      omnichannel: {
        title: 'Omnichannel',
        description: 'Všechny kanály na jednom místě. Spravujte zprávy z více zdrojů bez přepínání oken.',
        widget: 'Widget na web',
        email: 'E-mail',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        andMore: '...a mnohem více',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Proměňte návštěvníky ve věrné zákazníky.',
        description2: 'Sbírejte leady chytrými pop-upy a spravujte e-mailové kampaně.',
      },
    },
    pricing: {
      title: 'Vyberte si plán',
      subtitle: 'Flexibilní plány pro vaše podnikání. Kdykoli změňte.',
      starter: {
        title: 'Starter',
        price: '129 PLN',
        period: '/měsíc',
        desc: 'Ideální pro začínající e-shopy.',
        features: {
          realtime: 'Překlady v reálném čase',
          ai: 'AI funkce',
          languages: 'Neomezený počet jazyků',
          omnichannel: 'Omnichannel',
          marketing: 'Marketingové nástroje',
          limit: 'Až 100 zpráv / měs',
        },
        cta: 'Vybrat Starter',
      },
      plus: {
        badge: 'Nejoblíbenější',
        title: 'Plus',
        price: '399 PLN',
        period: '/měsíc',
        desc: 'Pro rostoucí firmy.',
        features: {
          allStarter: 'Vše co ve Starter',
          priority: 'Prioritní podpora',
          analytics: 'Pokročilá analytika',
          onboarding: 'Dedikovaný onboarding',
          limit: 'Až 500 zpráv / měs',
        },
        cta: 'Vybrat Plus',
      },
      unlimited: {
        title: 'Unlimited',
        price: 'Individuálně',
        desc: 'Pro velká měřítka a speciální potřeby.',
        features: {
          allFeatures: 'Všechny funkce',
          unlimitedMsgs: 'Neomezené zprávy',
          guardian: 'Vlastní account manager',
          customImpl: 'Individuální implementace',
          sla: 'SLA smlouva',
        },
        cta: 'Kontaktujte nás',
      },
    },
    footer: {
      tagline: 'Brána do světa pro váš e-commerce. Boříme jazykové bariéry spojením AI a lidské empatie.',
      contact: 'Kontakt',
      legal: 'Právní',
      privacy: 'Ochrana soukromí',
      terms: 'Podmínky',
      rights: 'Všechna práva vyhrazena.',
      uptime: 'Dostupnost: 99.89%',
      location: 'Lodž, Polsko',
    }
  },

  // 🇸🇰 SLOVENČINA (Slovak)
  sk: {
    nav: {
      howItWorks: 'Ako to funguje',
      implementation: 'Implementácia',
      features: 'Funkcie',
      pricing: 'Cenník',
      blog: 'Blog',
      about: 'O nás',
      login: 'Prihlásiť',
      loginFull: 'Prihlásiť sa',
      start: 'Začať',
      startFree: 'Začať zadarmo',
    },
    hero: {
      badge: 'Novinka: Neobmedzené preklady!',
      badgeMobile: 'Novinka: Neobmedzené preklady!',
      pagetitle: 'Chat, ktorý pozná každý jazyk.',
      title1: 'Hovorte so zákazníkmi',
      title2: 'v akomkoľvek jazyku.',
      description: 'Prelomte jazykovú bariéru a oslovte kohokoľvek, kdekoľvek.',
      descriptionMobile: 'Prelomte jazykovú bariéru a oslovte kohokoľvek, kdekoľvek.',
      descriptionHighlight: 'Automaticky prekladajte konverzácie do 100+ jazykov.',
      cta: 'Začať teraz',
      demo: 'Kontaktujte nás',
      techTrust: 'Technológia, ktorej veríte',
    },
    contactPopup: {
      title: 'Kontakt',
      available: 'K dispozícii 24/7',
      call: 'Zavolať',
      email: 'E-mail',
      chat: 'Chatovať',
      write: 'Napísať',
      copyNumber: 'Kopírovať číslo',
      copyEmail: 'Kopírovať e-mail',
      liveChat: 'Live Chat',
      liveChatDesc: 'Pozrieť demo na webe',
    },
    chat: {
      messages: 'Správy',
      newCount: '3 nové',
      online: 'Online',
      language: 'Jazyk',
      placeholder: 'Píšte po slovensky...',
      send: 'Odoslať',
      aiTranslateHint: 'AI automaticky preloží vašu správu do',
      suggestion: 'Návrh: "Nový produkt odošleme zajtra."',
    },
    conversations: {
      customer1: {
        name: 'Hans Müller',
        lastMessage: 'Wo ist meine Bestellung?',
        msg1: 'Hallo, wo ist meine Bestellung?',
        msg1Translation: 'Ahoj, kde je moja objednávka?',
        msg2: 'Overujem to pre vás, moment prosím.',
        msg2Translation: 'Ich überprüfe das für Sie, einen Moment bitte.',
      },
      customer2: {
        name: 'Pierre Dubois',
        lastMessage: 'Produit endommagé...',
        msg1: 'Bonjour, mon produit est arrivé endommagé.',
        msg1Translation: 'Dobrý deň, môj produkt prišiel poškodený.',
        msg2: 'To ma veľmi mrzí. Môžete poslať fotku?',
        msg2Translation: 'Je suis désolé. Pouvez-vous envoyer une photo ?',
        msg3: 'Bien sûr, voici la photo.',
        msg3Translation: 'Iste, tu je fotka. [Obrázok]',
      },
      customer3: {
        name: 'Giovanni Rossi',
        lastMessage: 'Avete questo in rosso?',
        msg1: 'Ciao! Avete questo modello in rosso?',
        msg1Translation: 'Ahoj! Máte tento model v červenej?',
      },
    },
    countries: {
      germany: { name: 'Nemecko', sub: '+83M zákazníkov' },
      france: { name: 'Francúzsko', sub: '+67M zákazníkov' },
      italy: { name: 'Taliansko', sub: '+59M zákazníkov' },
      spain: { name: 'Španielsko', sub: '+47M zákazníkov' },
      uk: { name: 'Veľká Británia', sub: '+67M zákazníkov' },
      poland: { name: 'Poľsko', sub: '' },
      homeMarket: 'Domáci trh',
    },
    howItWorks: {
      title: 'Z lokálneho e-shopu<br/>na globálneho hráča.',
      subtitle: 'Cesta k medzinárodnému úspechu. Jednoduchá, logická, automatizovaná.',
      step1: {
        label: 'Krok 1',
        title: 'Rýchla inštalácia',
        description: 'Nainštalujte widget a panel v priebehu niekoľkých minút. Váš tím podpory je pripravený.',
        statusReady: 'Systém pripravený',
        statusActive: 'Aktívny',
      },
      step2: {
        label: 'Krok 2',
        title: 'Výber trhov',
        description: 'V paneli vyberte cieľové krajiny. AI preklad sa zapne automaticky.',
        availability: 'Dostupnosť',
        global: 'Globálna',
      },
      step3: {
        label: 'Krok 3',
        title: 'Podpora bez bariér',
        description: 'Zákazníci píšu svojím jazykom, vy odpovedáte po slovensky. AI všetko prekladá za behu.',
        exampleMessage: 'Wo ist mein Paket?',
        exampleTranslation: 'Kde je môj balíček?',
      },
      step4: {
        label: 'Krok 4',
        title: 'Rast príjmov',
        description: 'Zákazníci nakupujú radšej, keď môžu chatovať vo svojom jazyku. Vy šetríte na tíme a predaje rastú.',
        conversionGrowth: 'Rast konverzie',
        trendUp: 'Rastúci trend',
      },
    },
    implementation: {
      title: 'Implementácia rýchlejšia ako<br/>príprava kávy.',
      subtitle: 'Nepotrebujete armádu programátorov. Náš widget sa integruje do vášho e-shopu za',
      timeHighlight: '3 minúty',
      step1: { title: 'Skopírujte kód', description: 'Dostupný vo vašom administrátorskom paneli.' },
      step2: { title: 'Vložte do <head>', description: 'Funguje s každým CMS aj vlastným riešením.' },
      step3: { title: 'Vyberte jazyky', description: 'Zapnite nemčinu, angličtinu alebo francúzštinu jedným kliknutím.' },
      step4: { title: 'Integrácia (Voliteľné)', description: 'Prepojte Messenger, WhatsApp alebo e-mail.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'Vaše meta tagy',
    },
    features: {
      title: 'Všetko v jednom paneli.',
      subtitle: 'Nahraďte Intercom, Mailchimp a externých prekladateľov jedným nástrojom pre moderné e-commerce.',
      translation: {
        title: 'Preklad v reálnom čase',
        description: 'Engine založený na OpenAI a DeepL. Zákazník píše po nemecky, vy vidíte po slovensky. Žiadne oneskorenie.',
        checking: 'Overujem...',
      },
      marketUnlock: {
        title: 'Odomknutie trhu',
        description: 'Otvorte nový trh jedným kliknutím. Škáľujte predaje bez hraníc.',
        totalPotential: 'Potenciál trhu',
        availableCustomers: 'Dostupní zákazníci',
      },
      omnichannel: {
        title: 'Omnichannel',
        description: 'Všetky kanály na jednom mieste. Spravujte správy z viacerých zdrojov bez prepínania okien.',
        widget: 'Widget na web',
        email: 'E-mail',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        andMore: '...a oveľa viac',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Premeňte návštevníkov na verných zákazníkov.',
        description2: 'Zbierajte leady inteligentnými pop-upmi a spravujte e-mailové kampane.',
      },
    },
    pricing: {
      title: 'Vyberte si plán',
      subtitle: 'Flexibilné plány pre vaše podnikanie. Kedykoľvek zmeňte.',
      starter: {
        title: 'Starter',
        price: '129 PLN',
        period: '/mesiac',
        desc: 'Ideálne pre začínajúce e-shopy.',
        features: {
          realtime: 'Preklady v reálnom čase',
          ai: 'AI funkcie',
          languages: 'Neobmedzený počet jazykov',
          omnichannel: 'Omnichannel',
          marketing: 'Marketingové nástroje',
          limit: 'Až 100 správ / mes',
        },
        cta: 'Vybrať Starter',
      },
      plus: {
        badge: 'Najobľúbenejší',
        title: 'Plus',
        price: '399 PLN',
        period: '/mesiac',
        desc: 'Pre rastúce firmy.',
        features: {
          allStarter: 'Všetko čo v Starter',
          priority: 'Prioritná podpora',
          analytics: 'Pokročilá analytika',
          onboarding: 'Dedikovaný onboarding',
          limit: 'Až 500 správ / mes',
        },
        cta: 'Vybrať Plus',
      },
      unlimited: {
        title: 'Unlimited',
        price: 'Individuálne',
        desc: 'Pre veľké mierky a špeciálne potreby.',
        features: {
          allFeatures: 'Všetky funkcie',
          unlimitedMsgs: 'Neobmedzené správy',
          guardian: 'Vlastný account manager',
          customImpl: 'Individuálna implementácia',
          sla: 'SLA zmluva',
        },
        cta: 'Kontaktujte nás',
      },
    },
    footer: {
      tagline: 'Brána do sveta pre váš e-commerce. Búrame jazykové bariéry spojením AI a ľudskej empatie.',
      contact: 'Kontakt',
      legal: 'Právne',
      privacy: 'Ochrana súkromia',
      terms: 'Podmienky',
      rights: 'Všetky práva vyhradené.',
      uptime: 'Dostupnosť: 99.89%',
      location: 'Lodž, Poľsko',
    }
  }
};

export function getLanding(lang: Locale): LandingTranslations {
  return landing[lang] || landing.en;
}
