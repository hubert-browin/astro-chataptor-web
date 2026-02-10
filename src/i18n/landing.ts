import type { Locale } from './config';

export interface LandingTranslations {
  // Navigation
  nav: {
    howItWorks: string;
    implementation: string;
    features: string;
    pricing: string; // Dodane
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
    // Removed payPerSatisfaction
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
  pl: {
    nav: {
      howItWorks: 'Jak to działa',
      implementation: 'Wdrożenie',
      features: 'Funkcje',
      pricing: 'Cennik',
      login: 'Zaloguj',
      loginFull: 'Zaloguj się',
      start: 'Rozpocznij',
      startFree: 'Rozpocznij za darmo',
    },
    hero: {
      badge: 'Nowość: Tłumaczenia bez limitu!',
      badgeMobile: 'Nowość: Tłumaczenia bez limitu!',
      pagetitle: 'Czat, który zna każdy język.'
      title1: 'Rozmawiaj z klientami',
      title2: 'w każdym języku świata.',
      description: 'Przełam barierę językową i docieraj do każdego, wszędzie.',
      descriptionMobile: 'Przełam barierę językową i docieraj do każdego, wszędzie.',
      descriptionHighlight: 'Automatycznie tłumacz rozmowy z klientami na 100+ języków..',
      cta: 'Rozpocznij teraz',
      demo: 'Skontaktuj się z nami',
      techTrust: 'Technologia, której ufasz',
    },
    contactPopup: {
      title: 'Forma kontaktu',
      available: 'Dostępni 24/7',
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
    },
  },

};

export function getLanding(lang: Locale): LandingTranslations {
  return landing[lang] || landing.en;
}