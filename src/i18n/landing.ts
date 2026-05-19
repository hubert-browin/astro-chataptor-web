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
    tooltipCall: string;
    tooltipEmail: string;
    tooltipChat: string;
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
  // Product story section
  productStory: {
    eyebrow: string;
    title: string;
    subtitle: string;
    inbox: { title: string; description: string };
    translation: { title: string; description: string };
    liveChat: { title: string; description: string };
    mobile: { title: string; description: string };
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
    previewTitle: string;
    previewStatus: string;
    previewGreeting: string;
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
      instagram: string;
      facebook: string;
      whatsapp: string;
      messenger: string;
      oneInbox: string;
      allMessages: string;
      andMore: string;
      inboxPreview: string;
      translatedLabel: string;
      sourceLabel: string;
      languageLabel: string;
    };
    marketing: {
      title: string;
      description1: string;
      description2: string;
    };
  };
  // Mobile app section
  mobileApp: {
    eyebrow: string;
    title: string;
    description: string;
    notificationTitle: string;
    notificationBody: string;
    replyTitle: string;
    replyBody: string;
    instant: string;
    appStoreAlt: string;
    googlePlayAlt: string;
  };
  // Product demo section
  productDemo: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  // Pricing section
  pricing: {
    title: string;
    subtitle: string;
    betaBanner: {
      badge: string;
      title: string;
      desc: string;
      f1: string;
      f2: string;
      f3: string;
      f4: string;
      spotsLeft: string;
      spotsCount: string;
      cta: string;
      autoAccess: string;
    };
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
      recommendedBadge: string;
      discountBadge: string;
      freePrice: string;
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
      freeCta: string;
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
      badge: 'Nowość: Chataptor jest teraz darmowy!',
      badgeMobile: 'Nowość: Chataptor jest darmowy!',
      pagetitle: 'Czat, który zna każdy język.',
      title1: 'Obsługuj wiadomości',
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
      tooltipCall: 'Zadzwoń',
      tooltipEmail: 'Wyślij maila',
      tooltipChat: 'Otwórz czat',
    },
    chat: {
      messages: 'Wiadomości',
      newCount: '4 nowe',
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
      title: 'Od lokalnej firmy<br/>do globalnego gracza.',
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
    productStory: {
      eyebrow: 'Produkt w skrócie',
      title: 'Jedno miejsce do rozmów z klientami z każdego kanału.',
      subtitle: 'Klient pisze z live chatu, e-maila albo social mediów i w swoim języku. Ty widzisz wiadomość po polsku i odpowiadasz po swojemu.',
      inbox: { title: 'Jeden panel do wiadomości', description: 'Wszystkie rozmowy trafiają do jednej uporządkowanej skrzynki.' },
      translation: { title: 'Automatyczne tłumaczenia AI', description: 'Chataptor tłumaczy wiadomości klienta i Twoje odpowiedzi w czasie rzeczywistym.' },
      liveChat: { title: 'Live chat na Twojej stronie', description: 'Dodajesz widget do strony i tworzysz nowy kanał kontaktu bez przebudowy serwisu.' },
      mobile: { title: 'Aplikacja mobilna', description: 'Dostajesz powiadomienia i odpisujesz z telefonu w swoim języku.' },
    },
    implementation: {
      title: 'Dodaj live chat<br/>do swojej strony.',
      subtitle: 'Wklejasz jeden snippet, a nowy kanał rozmowy pojawia się na stronie w',
      timeHighlight: '3 minuty',
      step1: { title: 'Utwórz kanał Live Chat', description: 'Nadaj nazwę, ustaw język zespołu i skopiuj gotowy kod.' },
      step2: { title: 'Wklej snippet', description: 'Dodaj go do strony, CMS lub sklepu internetowego.' },
      step3: { title: 'Wiadomości trafiają do Chataptora', description: 'Każde pytanie z widgetu wpada do tego samego panelu co pozostałe kanały.' },
      step4: { title: 'Odpowiadasz z panelu lub aplikacji', description: 'Piszesz po polsku, a Chataptor tłumaczy odpowiedź klientowi.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'Twoje meta tagi',
      previewTitle: 'Widget live chat',
      previewStatus: 'Online',
      previewGreeting: 'Dzień dobry! Jak możemy pomóc?',
    },
    features: {
      title: 'Komunikacja z klientami, bez barier językowych.',
      subtitle: 'Jeden panel, wiele kanałów i automatyczne tłumaczenia AI. Chataptor porządkuje rozmowy, zanim Twój zespół w ogóle zacznie odpisywać.',
      translation: {
        title: 'Real-time Translation',
        description: 'Silnik oparty na OpenAI i DeepL. Klient pisze po niemiecku, Ty widzisz to od razu po polsku. Zero opóźnień, zero nieporozumień.',
        checking: 'Sprawdzam to...',
      },
      marketUnlock: {
        title: 'Market Unlock',
        description: 'Włącz nowy rynek jednym kliknięciem. Skaluj sprzedaż bez granic.',
        totalPotential: 'Skaluj swój biznes bez granic.',
        availableCustomers: 'Dostępni klienci',
      },
      omnichannel: {
        title: 'Wszystko w jednym miejscu',
        description: 'Podłącz e-mail, Instagram, Facebook i WhatsApp. Wszystkie wiadomości z każdego kanału wpadają do jednego panelu.',
        widget: 'Widget na stronie',
        email: 'Email',
        instagram: 'Instagram',
        facebook: 'Facebook',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        oneInbox: 'Jeden panel',
        allMessages: 'Wszystkie wiadomości trafiają tutaj',
        andMore: '...i wiele więcej',
        inboxPreview: 'Inbox Chataptor',
        translatedLabel: 'Przetłumaczone na Twój język',
        sourceLabel: 'Kanał',
        languageLabel: 'Język klienta',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Zamień odwiedzających w lojalnych klientów.',
        description2: 'Zbieraj leady inteligentnymi pop-upami i prowadź skuteczne kampanie e-mailowe z jednego panelu.',
      },
    },
    mobileApp: {
      eyebrow: 'Aplikacja mobilna',
      title: 'Odpowiadaj szybciej, gdziekolwiek jesteś.',
      description: 'Wiadomość z live chatu, WhatsAppa albo e-maila trafia na telefon od razu w Twoim języku. Odpisujesz po swojemu, a Chataptor tłumaczy odpowiedź klientowi.',
      notificationTitle: 'Nowa wiadomość',
      notificationBody: 'Klient napisał z WhatsAppa',
      replyTitle: 'Szybka odpowiedź',
      replyBody: 'Odpowiedz z telefonu w kilka sekund.',
      instant: 'Powiadomienia push w czasie rzeczywistym',
      appStoreAlt: 'Pobierz w App Store',
      googlePlayAlt: 'Pobierz z Google Play',
    },
    productDemo: {
      eyebrow: 'Panel agenta',
      title: 'Tak wygląda praca w jednym panelu.',
      subtitle: 'Widzisz kanał, język klienta i tłumaczenie w tym samym miejscu, bez przełączania narzędzi.',
    },
    pricing: {
      title: 'Wybierz plan dla siebie',
      subtitle: 'Elastyczne plany dopasowane do Twojego biznesu. Zmień w dowolnym momencie.',
      betaBanner: {
        badge: 'Program Early Adopters',
        title: 'Testuj i odbierz 6 miesięcy za darmo.',
        desc: 'Wdrażaj, testuj i buduj z nami produkt. W zamian za feedback otrzymasz darmowy dostęp, dedykowane wsparcie oraz gwarancję stałej ceny po zakończeniu testów.',
        f1: 'Gwarancja stałej ceny',
        f2: 'Bezpośrednie wsparcie',
        f3: 'Wpływ na rozwój platformy',
        f4: 'Dostęp do wszystkich funkcji',
        spotsLeft: 'Pozostało miejsc',
        spotsCount: '12 / 50',
        cta: 'Odbierz darmowy dostęp',
        autoAccess: 'Dostęp automatyczny po rejestracji.',
      },
      starter: {
        title: 'Starter',
        price: '129 zł',
        period: '/miesiąc',
        desc: 'Idealny na start dla małych firm.',
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
        recommendedBadge: 'Rekomendowany',
        discountBadge: '100% OFF',
        freePrice: '0',
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
        freeCta: 'Rozpocznij za darmo',
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
      tagline: 'Brama do rozmów z klientami na całym świecie. Przełamujemy bariery językowe, łącząc AI z ludzką empatią.',
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
      badge: 'New: Chataptor is now free!',
      badgeMobile: 'New: Chataptor is free!',
      pagetitle: 'Chat that knows every language.',
      title1: 'Handle messages',
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
      tooltipCall: 'Call',
      tooltipEmail: 'Send email',
      tooltipChat: 'Open chat',
    },
    chat: {
      messages: 'Messages',
      newCount: '4 new',
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
    productStory: {
      eyebrow: 'Product in brief',
      title: 'One place to talk to customers from every channel.',
      subtitle: 'A customer writes from live chat, email, or social media in their own language. You read it in English and reply naturally.',
      inbox: { title: 'One inbox for messages', description: 'All conversations land in one organized support workspace.' },
      translation: { title: 'Automatic AI translation', description: 'Chataptor translates customer messages and your replies in real time.' },
      liveChat: { title: 'Live chat on your website', description: 'Add a widget to your site and create a new contact channel without rebuilding anything.' },
      mobile: { title: 'Mobile app', description: 'Get notifications and reply from your phone in your own language.' },
    },
    implementation: {
      title: 'Add live chat<br/>to your website.',
      subtitle: 'Paste one snippet and a new customer conversation channel appears on your site in',
      timeHighlight: '3 minutes',
      step1: { title: 'Create a Live Chat channel', description: 'Name it, set your team language, and copy the ready code.' },
      step2: { title: 'Paste the snippet', description: 'Add it to your website, CMS, or online store.' },
      step3: { title: 'Messages land in Chataptor', description: 'Every question from the widget arrives in the same inbox as your other channels.' },
      step4: { title: 'Reply from web or mobile', description: 'Write in English and Chataptor translates the answer for the customer.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'Your meta tags',
      previewTitle: 'Live chat widget',
      previewStatus: 'Online',
      previewGreeting: 'Hello! How can we help?',
    },
    features: {
      title: 'Customer conversations without language barriers.',
      subtitle: 'One inbox, many channels, and automatic AI translations. Chataptor organizes the conversation before your team even starts replying.',
      translation: {
        title: 'Real-time Translation',
        description: 'Engine based on OpenAI and DeepL. Customer writes in German, you see it instantly in English. Zero delays, zero misunderstandings.',
        checking: 'Checking...',
      },
      marketUnlock: {
        title: 'Market Unlock',
        description: 'Unlock a new market with one click. Scale sales without borders.',
        totalPotential: 'Scale your business without borders.',
        availableCustomers: 'Available customers',
      },
      omnichannel: {
        title: 'Everything in one place',
        description: 'Connect email, Instagram, Facebook, and WhatsApp. Every message from every channel lands in one shared inbox.',
        widget: 'Website Widget',
        email: 'Email',
        instagram: 'Instagram',
        facebook: 'Facebook',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        oneInbox: 'One inbox',
        allMessages: 'Every message lands here',
        andMore: '...and much more',
        inboxPreview: 'Chataptor inbox',
        translatedLabel: 'Translated to your language',
        sourceLabel: 'Channel',
        languageLabel: 'Customer language',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Turn visitors into loyal customers.',
        description2: 'Collect leads with smart pop-ups and run effective email campaigns from one dashboard.',
      },
    },
    mobileApp: {
      eyebrow: 'Mobile app',
      title: 'Reply faster, wherever you are.',
      description: 'A message from live chat, WhatsApp, or email reaches your phone in your language. You reply naturally, and Chataptor translates it for the customer.',
      notificationTitle: 'New message',
      notificationBody: 'A customer wrote from WhatsApp',
      replyTitle: 'Quick reply',
      replyBody: 'Reply from your phone in seconds.',
      instant: 'Real-time push notifications',
      appStoreAlt: 'Download on the App Store',
      googlePlayAlt: 'Get it on Google Play',
    },
    productDemo: {
      eyebrow: 'Agent workspace',
      title: 'This is how one-inbox support feels.',
      subtitle: 'See the channel, customer language, and translation in one place, without switching tools.',
    },
    pricing: {
      title: 'Choose your plan',
      subtitle: 'Flexible plans tailored to your business. Change at any time.',
      betaBanner: {
        badge: 'Early Adopters Program',
        title: 'Test and get 6 months for free.',
        desc: 'Implement, test, and build the product with us. In exchange for feedback, you get free access, dedicated support, and a fixed price guarantee after the test ends.',
        f1: 'Fixed price guarantee',
        f2: 'Direct support',
        f3: 'Influence on platform development',
        f4: 'Access to all features',
        spotsLeft: 'Spots left',
        spotsCount: '12 / 50',
        cta: 'Claim free access',
        autoAccess: 'Automatic access after registration.',
      },
      starter: {
        title: 'Starter',
        price: '129 PLN',
        period: '/month',
        desc: 'Perfect for small businesses starting out.',
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
        recommendedBadge: 'Recommended',
        discountBadge: '100% OFF',
        freePrice: '0',
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
        freeCta: 'Start for free',
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
      tagline: 'A gateway to customer conversations around the world. We break language barriers, combining AI with human empathy.',
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
      badge: 'Neu: Chataptor ist jetzt kostenlos!',
      badgeMobile: 'Neu: Chataptor ist kostenlos!',
      pagetitle: 'Ein Chat, der jede Sprache spricht.',
      title1: 'Verarbeite Nachrichten',
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
      tooltipCall: 'Anrufen',
      tooltipEmail: 'E-Mail senden',
      tooltipChat: 'Chat öffnen',
    },
    chat: {
      messages: 'Nachrichten',
      newCount: '4 neue',
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
      title: 'Vom lokalen Unternehmen<br/>zum Global Player.',
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
    productStory: {
      eyebrow: 'Produktüberblick',
      title: 'Ein Ort für Kundengespräche aus jedem Kanal.',
      subtitle: 'Kunden schreiben per Live-Chat, E-Mail oder Social Media in ihrer Sprache. Sie lesen alles auf Deutsch und antworten natürlich.',
      inbox: { title: 'Ein Posteingang für Nachrichten', description: 'Alle Gespräche landen in einem klaren Support-Arbeitsbereich.' },
      translation: { title: 'Automatische KI-Übersetzung', description: 'Chataptor übersetzt Kundennachrichten und Ihre Antworten in Echtzeit.' },
      liveChat: { title: 'Live-Chat auf Ihrer Website', description: 'Fügen Sie ein Widget ein und schaffen Sie einen neuen Kontaktkanal ohne Website-Umbau.' },
      mobile: { title: 'Mobile App', description: 'Erhalten Sie Benachrichtigungen und antworten Sie vom Telefon in Ihrer Sprache.' },
    },
    implementation: {
      title: 'Live-Chat auf<br/>Ihrer Website.',
      subtitle: 'Fügen Sie ein Snippet ein und ein neuer Gesprächskanal erscheint auf Ihrer Website in',
      timeHighlight: '3 Minuten',
      step1: { title: 'Live-Chat-Kanal erstellen', description: 'Benennen Sie ihn, wählen Sie die Teamsprache und kopieren Sie den Code.' },
      step2: { title: 'Snippet einfügen', description: 'Fügen Sie es in Website, CMS oder Shop ein.' },
      step3: { title: 'Nachrichten landen in Chataptor', description: 'Jede Frage aus dem Widget kommt in denselben Posteingang wie andere Kanäle.' },
      step4: { title: 'Antworten per Panel oder App', description: 'Sie schreiben auf Deutsch, Chataptor übersetzt die Antwort für den Kunden.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'Ihre Meta-Tags',
      previewTitle: 'Live-Chat-Widget',
      previewStatus: 'Online',
      previewGreeting: 'Hallo! Wie können wir helfen?',
    },
    features: {
      title: 'Kundengespräche ohne Sprachbarrieren.',
      subtitle: 'Ein Posteingang, viele Kanäle und automatische KI-Übersetzung. Chataptor ordnet Gespräche, bevor Ihr Team antwortet.',
      translation: {
        title: 'Echtzeit-Übersetzung',
        description: 'Engine basierend auf OpenAI und DeepL. Der Kunde schreibt auf Französisch, Sie sehen es sofort auf Deutsch. Keine Verzögerungen.',
        checking: 'Überprüfe...',
      },
      marketUnlock: {
        title: 'Markt-Freischaltung',
        description: 'Erschließen Sie neue Märkte mit einem Klick. Skalieren Sie grenzenlos.',
        totalPotential: 'Skalieren Sie Ihr Geschäft ohne Grenzen.',
        availableCustomers: 'Verfügbare Kunden',
      },
      omnichannel: {
        title: 'Alles an einem Ort',
        description: 'Verbinden Sie E-Mail, Instagram, Facebook und WhatsApp. Jede Nachricht aus jedem Kanal landet in einem gemeinsamen Posteingang.',
        widget: 'Website Widget',
        email: 'E-Mail',
        instagram: 'Instagram',
        facebook: 'Facebook',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        oneInbox: 'Ein Posteingang',
        allMessages: 'Alle Nachrichten landen hier',
        andMore: '...und vieles mehr',
        inboxPreview: 'Chataptor-Posteingang',
        translatedLabel: 'In Ihre Sprache übersetzt',
        sourceLabel: 'Kanal',
        languageLabel: 'Kundensprache',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Verwandeln Sie Besucher in treue Kunden.',
        description2: 'Sammeln Sie Leads mit intelligenten Pop-ups und führen Sie effektive E-Mail-Kampagnen durch.',
      },
    },
    mobileApp: {
      eyebrow: 'Mobile App',
      title: 'Antworten Sie schneller, wo immer Sie sind.',
      description: 'Nachrichten aus Live-Chat, WhatsApp oder E-Mail erreichen Ihr Telefon in Ihrer Sprache. Sie antworten natürlich, Chataptor übersetzt für den Kunden.',
      notificationTitle: 'Neue Nachricht',
      notificationBody: 'Ein Kunde schrieb über WhatsApp',
      replyTitle: 'Schnelle Antwort',
      replyBody: 'Antworten Sie in Sekunden vom Smartphone.',
      instant: 'Push-Benachrichtigungen in Echtzeit',
      appStoreAlt: 'Im App Store laden',
      googlePlayAlt: 'Bei Google Play herunterladen',
    },
    productDemo: {
      eyebrow: 'Agentenbereich',
      title: 'So arbeitet Support in einem Posteingang.',
      subtitle: 'Kanal, Kundensprache und Übersetzung stehen an einem Ort, ohne Tool-Wechsel.',
    },
    pricing: {
      title: 'Wählen Sie Ihren Plan',
      subtitle: 'Flexible Pläne, angepasst an Ihr Geschäft. Jederzeit änderbar.',
      betaBanner: {
        badge: 'Early Adopters Programm',
        title: 'Testen und 6 Monate kostenlos erhalten.',
        desc: 'Implementieren, testen und bauen Sie das Produkt mit uns auf. Als Gegenleistung für Feedback erhalten Sie kostenlosen Zugang, dedizierten Support und eine Festpreisgarantie nach Testende.',
        f1: 'Festpreisgarantie',
        f2: 'Direkter Support',
        f3: 'Einfluss auf Plattformentwicklung',
        f4: 'Zugang zu allen Funktionen',
        spotsLeft: 'Verbleibende Plätze',
        spotsCount: '12 / 50',
        cta: 'Kostenlosen Zugang sichern',
        autoAccess: 'Automatischer Zugang nach Registrierung.',
      },
      starter: {
        title: 'Starter',
        price: '129 PLN',
        period: '/Monat',
        desc: 'Ideal für kleine Unternehmen am Anfang.',
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
        recommendedBadge: 'Empfohlen',
        discountBadge: '100% OFF',
        freePrice: '0',
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
        freeCta: 'Kostenlos starten',
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
      tagline: 'Das Tor zu Kundengesprächen auf der ganzen Welt. Wir überwinden Sprachbarrieren und verbinden KI mit menschlicher Empathie.',
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
      badge: 'Nouveau : Chataptor est désormais gratuit !',
      badgeMobile: 'Nouveau : Chataptor est gratuit !',
      pagetitle: 'Le chat qui parle toutes les langues.',
      title1: 'Gérez les messages',
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
      tooltipCall: 'Appeler',
      tooltipEmail: 'Envoyer un e-mail',
      tooltipChat: 'Ouvrir le chat',
    },
    chat: {
      messages: 'Messages',
      newCount: '4 nouveaux',
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
      title: 'De l\'entreprise locale<br/>au marché mondial.',
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
    productStory: {
      eyebrow: 'Produit en bref',
      title: 'Un seul endroit pour parler aux clients de tous les canaux.',
      subtitle: 'Le client écrit depuis le live chat, l’e-mail ou les réseaux sociaux dans sa langue. Vous lisez en français et répondez naturellement.',
      inbox: { title: 'Une boîte de réception unique', description: 'Toutes les conversations arrivent dans un espace de support organisé.' },
      translation: { title: 'Traduction IA automatique', description: 'Chataptor traduit les messages clients et vos réponses en temps réel.' },
      liveChat: { title: 'Live chat sur votre site', description: 'Ajoutez un widget et créez un nouveau canal de contact sans refaire le site.' },
      mobile: { title: 'Application mobile', description: 'Recevez les notifications et répondez depuis votre téléphone dans votre langue.' },
    },
    implementation: {
      title: 'Ajoutez le live chat<br/>à votre site.',
      subtitle: 'Collez un snippet et un nouveau canal de conversation apparaît sur votre site en',
      timeHighlight: '3 minutes',
      step1: { title: 'Créer un canal Live Chat', description: 'Nommez-le, choisissez la langue de l’équipe et copiez le code.' },
      step2: { title: 'Coller le snippet', description: 'Ajoutez-le à votre site, CMS ou boutique en ligne.' },
      step3: { title: 'Les messages arrivent dans Chataptor', description: 'Chaque question du widget rejoint la même boîte que vos autres canaux.' },
      step4: { title: 'Répondre depuis le panel ou l’app', description: 'Vous écrivez en français, Chataptor traduit la réponse au client.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'Vos balises meta',
      previewTitle: 'Widget live chat',
      previewStatus: 'En ligne',
      previewGreeting: 'Bonjour ! Comment pouvons-nous aider ?',
    },
    features: {
      title: 'Des conversations client sans barrière de langue.',
      subtitle: 'Une boîte de réception, plusieurs canaux et la traduction IA automatique. Chataptor organise les conversations avant même que votre équipe réponde.',
      translation: {
        title: 'Traduction en temps réel',
        description: 'Moteur basé sur OpenAI et DeepL. Le client écrit en allemand, vous voyez le français. Zéro délai.',
        checking: 'Vérification...',
      },
      marketUnlock: {
        title: 'Déblocage de marché',
        description: 'Ouvrez un nouveau marché en un clic. Développez vos ventes sans frontières.',
        totalPotential: 'Développez votre activité sans frontières.',
        availableCustomers: 'Clients disponibles',
      },
      omnichannel: {
        title: 'Tout au même endroit',
        description: 'Connectez e-mail, Instagram, Facebook et WhatsApp. Tous les messages de chaque canal arrivent dans une seule boîte de réception.',
        widget: 'Widget Site Web',
        email: 'E-mail',
        instagram: 'Instagram',
        facebook: 'Facebook',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        oneInbox: 'Une boîte unique',
        allMessages: 'Tous les messages arrivent ici',
        andMore: '...et bien plus',
        inboxPreview: 'Boîte Chataptor',
        translatedLabel: 'Traduit dans votre langue',
        sourceLabel: 'Canal',
        languageLabel: 'Langue client',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Transformez les visiteurs en clients fidèles.',
        description2: 'Collectez des leads avec des pop-ups intelligents et gérez vos campagnes e-mail.',
      },
    },
    mobileApp: {
      eyebrow: 'Application mobile',
      title: 'Répondez plus vite, où que vous soyez.',
      description: 'Un message du live chat, de WhatsApp ou de l’e-mail arrive sur votre téléphone dans votre langue. Vous répondez naturellement, Chataptor traduit pour le client.',
      notificationTitle: 'Nouveau message',
      notificationBody: 'Un client a écrit via WhatsApp',
      replyTitle: 'Réponse rapide',
      replyBody: 'Répondez depuis votre téléphone en quelques secondes.',
      instant: 'Notifications push en temps réel',
      appStoreAlt: 'Télécharger dans l\'App Store',
      googlePlayAlt: 'Disponible sur Google Play',
    },
    productDemo: {
      eyebrow: 'Espace agent',
      title: 'Voici le travail dans une boîte unique.',
      subtitle: 'Canal, langue du client et traduction restent au même endroit, sans changer d’outil.',
    },
    pricing: {
      title: 'Choisissez votre plan',
      subtitle: 'Des plans flexibles adaptés à votre entreprise. Changez à tout moment.',
      betaBanner: {
        badge: 'Programme Early Adopters',
        title: 'Testez et obtenez 6 mois gratuits.',
        desc: 'Implémentez, testez et développez le produit avec nous. En échange de vos retours, obtenez un accès gratuit, un support dédié et une garantie de prix fixe après la fin des tests.',
        f1: 'Garantie de prix fixe',
        f2: 'Support direct',
        f3: 'Influence sur le développement',
        f4: 'Accès à toutes les fonctionnalités',
        spotsLeft: 'Places restantes',
        spotsCount: '12 / 50',
        cta: 'Obtenir l\'accès gratuit',
        autoAccess: 'Accès automatique après inscription.',
      },
      starter: {
        title: 'Starter',
        price: '129 PLN',
        period: '/mois',
        desc: 'Parfait pour les petites entreprises.',
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
        recommendedBadge: 'Recommandé',
        discountBadge: '100% OFF',
        freePrice: '0',
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
        freeCta: 'Commencer gratuitement',
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
      tagline: 'La porte vers les conversations client dans le monde entier. Nous brisons les barrières linguistiques en alliant IA et empathie humaine.',
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
      badge: 'Nuevo: Chataptor ahora es gratis!',
      badgeMobile: 'Nuevo: Chataptor es gratis!',
      pagetitle: 'El chat que habla todos los idiomas.',
      title1: 'Gestiona mensajes',
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
      tooltipCall: 'Llamar',
      tooltipEmail: 'Enviar correo',
      tooltipChat: 'Abrir chat',
    },
    chat: {
      messages: 'Mensajes',
      newCount: '4 nuevos',
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
      title: 'De empresa local<br/>a jugador global.',
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
    productStory: {
      eyebrow: 'Producto en breve',
      title: 'Un solo lugar para hablar con clientes de todos los canales.',
      subtitle: 'El cliente escribe desde live chat, email o redes sociales en su idioma. Tú lo lees en español y respondes con naturalidad.',
      inbox: { title: 'Una bandeja para mensajes', description: 'Todas las conversaciones llegan a un espacio de soporte ordenado.' },
      translation: { title: 'Traducción IA automática', description: 'Chataptor traduce los mensajes del cliente y tus respuestas en tiempo real.' },
      liveChat: { title: 'Live chat en tu web', description: 'Añade un widget y crea un nuevo canal de contacto sin rehacer tu sitio.' },
      mobile: { title: 'Aplicación móvil', description: 'Recibe notificaciones y responde desde el teléfono en tu idioma.' },
    },
    implementation: {
      title: 'Añade live chat<br/>a tu sitio web.',
      subtitle: 'Pegas un snippet y aparece un nuevo canal de conversación en tu sitio en',
      timeHighlight: '3 minutos',
      step1: { title: 'Crea un canal Live Chat', description: 'Ponle nombre, define el idioma del equipo y copia el código.' },
      step2: { title: 'Pega el snippet', description: 'Añádelo a tu web, CMS o tienda online.' },
      step3: { title: 'Los mensajes llegan a Chataptor', description: 'Cada pregunta del widget entra en la misma bandeja que los demás canales.' },
      step4: { title: 'Responde desde panel o app', description: 'Escribes en español y Chataptor traduce la respuesta para el cliente.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'Tus meta etiquetas',
      previewTitle: 'Widget live chat',
      previewStatus: 'Online',
      previewGreeting: '¡Hola! ¿Cómo podemos ayudar?',
    },
    features: {
      title: 'Conversaciones con clientes sin barreras de idioma.',
      subtitle: 'Una bandeja, muchos canales y traducción IA automática. Chataptor ordena cada conversación antes de que tu equipo responda.',
      translation: {
        title: 'Traducción en tiempo real',
        description: 'Motor basado en OpenAI y DeepL. El cliente escribe en alemán, tú lo ves en español. Cero retrasos.',
        checking: 'Comprobando...',
      },
      marketUnlock: {
        title: 'Desbloqueo de mercado',
        description: 'Abre un nuevo mercado con un clic. Escala ventas sin fronteras.',
        totalPotential: 'Escala tu negocio sin fronteras.',
        availableCustomers: 'Clientes disponibles',
      },
      omnichannel: {
        title: 'Todo en un lugar',
        description: 'Conecta email, Instagram, Facebook y WhatsApp. Todos los mensajes de cada canal llegan a una única bandeja compartida.',
        widget: 'Widget web',
        email: 'Email',
        instagram: 'Instagram',
        facebook: 'Facebook',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        oneInbox: 'Una bandeja',
        allMessages: 'Todos los mensajes llegan aquí',
        andMore: '...y mucho más',
        inboxPreview: 'Bandeja Chataptor',
        translatedLabel: 'Traducido a tu idioma',
        sourceLabel: 'Canal',
        languageLabel: 'Idioma del cliente',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Convierte visitantes en clientes leales.',
        description2: 'Capta leads con pop-ups inteligentes y gestiona campañas de email.',
      },
    },
    mobileApp: {
      eyebrow: 'App móvil',
      title: 'Responde más rápido, estés donde estés.',
      description: 'Un mensaje de live chat, WhatsApp o email llega al teléfono en tu idioma. Respondes con naturalidad y Chataptor lo traduce para el cliente.',
      notificationTitle: 'Nuevo mensaje',
      notificationBody: 'Un cliente escribió desde WhatsApp',
      replyTitle: 'Respuesta rápida',
      replyBody: 'Responde desde el teléfono en segundos.',
      instant: 'Notificaciones push en tiempo real',
      appStoreAlt: 'Descargar en App Store',
      googlePlayAlt: 'Disponible en Google Play',
    },
    productDemo: {
      eyebrow: 'Panel del agente',
      title: 'Así se trabaja desde una sola bandeja.',
      subtitle: 'Ves el canal, el idioma del cliente y la traducción en un solo lugar, sin cambiar de herramienta.',
    },
    pricing: {
      title: 'Elige tu plan',
      subtitle: 'Planes flexibles adaptados a tu negocio. Cambia en cualquier momento.',
      betaBanner: {
        badge: 'Programa Early Adopters',
        title: 'Prueba y obtén 6 meses gratis.',
        desc: 'Implementa, prueba y construye el producto con nosotros. A cambio de tus comentarios, obtienes acceso gratuito, soporte dedicado y garantía de precio fijo al finalizar la prueba.',
        f1: 'Garantía de precio fijo',
        f2: 'Soporte directo',
        f3: 'Influencia en el desarrollo',
        f4: 'Acceso a todas las funciones',
        spotsLeft: 'Plazas restantes',
        spotsCount: '12 / 50',
        cta: 'Obtener acceso gratis',
        autoAccess: 'Acceso automático al registrarse.',
      },
      starter: {
        title: 'Starter',
        price: '129 PLN',
        period: '/mes',
        desc: 'Ideal para pequeñas empresas.',
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
        recommendedBadge: 'Recomendado',
        discountBadge: '100% OFF',
        freePrice: '0',
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
        freeCta: 'Empezar gratis',
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
      tagline: 'La puerta a conversaciones con clientes en todo el mundo. Rompemos barreras lingüísticas uniendo IA con empatía humana.',
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
      badge: 'Novità: Chataptor ora è gratis!',
      badgeMobile: 'Novità: Chataptor è gratis!',
      pagetitle: 'La chat che conosce ogni lingua.',
      title1: 'Gestisci i messaggi',
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
      tooltipCall: 'Chiama',
      tooltipEmail: 'Invia email',
      tooltipChat: 'Apri la chat',
    },
    chat: {
      messages: 'Messaggi',
      newCount: '4 nuovi',
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
      title: 'Da azienda locale<br/>a player globale.',
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
    productStory: {
      eyebrow: 'Prodotto in breve',
      title: 'Un solo posto per parlare con clienti da ogni canale.',
      subtitle: 'Il cliente scrive da live chat, email o social nel suo idioma. Tu leggi in italiano e rispondi naturalmente.',
      inbox: { title: 'Una inbox per i messaggi', description: 'Tutte le conversazioni arrivano in uno spazio di supporto ordinato.' },
      translation: { title: 'Traduzione IA automatica', description: 'Chataptor traduce i messaggi dei clienti e le tue risposte in tempo reale.' },
      liveChat: { title: 'Live chat sul tuo sito', description: 'Aggiungi un widget e crei un nuovo canale di contatto senza rifare il sito.' },
      mobile: { title: 'App mobile', description: 'Ricevi notifiche e rispondi dal telefono nella tua lingua.' },
    },
    implementation: {
      title: 'Aggiungi live chat<br/>al tuo sito.',
      subtitle: 'Incolli uno snippet e un nuovo canale di conversazione appare sul sito in',
      timeHighlight: '3 minuti',
      step1: { title: 'Crea un canale Live Chat', description: 'Dagli un nome, imposta la lingua del team e copia il codice.' },
      step2: { title: 'Incolla lo snippet', description: 'Aggiungilo al sito, CMS o negozio online.' },
      step3: { title: 'I messaggi arrivano in Chataptor', description: 'Ogni domanda dal widget entra nella stessa inbox degli altri canali.' },
      step4: { title: 'Rispondi da pannello o app', description: 'Scrivi in italiano e Chataptor traduce la risposta al cliente.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'I tuoi meta tag',
      previewTitle: 'Widget live chat',
      previewStatus: 'Online',
      previewGreeting: 'Ciao! Come possiamo aiutarti?',
    },
    features: {
      title: 'Conversazioni con i clienti senza barriere linguistiche.',
      subtitle: 'Una inbox, tanti canali e traduzione IA automatica. Chataptor organizza le conversazioni prima che il team risponda.',
      translation: {
        title: 'Traduzione Real-time',
        description: 'Motore basato su OpenAI e DeepL. Il cliente scrive in tedesco, tu leggi in italiano. Zero ritardi.',
        checking: 'Controllo...',
      },
      marketUnlock: {
        title: 'Sblocco Mercati',
        description: 'Apri un nuovo mercato con un clic. Scala le vendite senza confini.',
        totalPotential: 'Scala il tuo business senza confini.',
        availableCustomers: 'Clienti disponibili',
      },
      omnichannel: {
        title: 'Tutto in un unico posto',
        description: 'Collega email, Instagram, Facebook e WhatsApp. Tutti i messaggi da ogni canale arrivano in un\'unica inbox.',
        widget: 'Widget Sito',
        email: 'Email',
        instagram: 'Instagram',
        facebook: 'Facebook',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        oneInbox: 'Un\'unica inbox',
        allMessages: 'Tutti i messaggi arrivano qui',
        andMore: '...e molto altro',
        inboxPreview: 'Inbox Chataptor',
        translatedLabel: 'Tradotto nella tua lingua',
        sourceLabel: 'Canale',
        languageLabel: 'Lingua cliente',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Trasforma i visitatori in clienti fedeli.',
        description2: 'Raccogli lead con pop-up intelligenti e gestisci campagne email efficaci.',
      },
    },
    mobileApp: {
      eyebrow: 'App mobile',
      title: 'Rispondi più velocemente, ovunque tu sia.',
      description: 'Un messaggio da live chat, WhatsApp o email arriva sul telefono nella tua lingua. Rispondi naturalmente e Chataptor traduce per il cliente.',
      notificationTitle: 'Nuovo messaggio',
      notificationBody: 'Un cliente ha scritto da WhatsApp',
      replyTitle: 'Risposta rapida',
      replyBody: 'Rispondi dal telefono in pochi secondi.',
      instant: 'Notifiche push in tempo reale',
      appStoreAlt: 'Scarica su App Store',
      googlePlayAlt: 'Disponibile su Google Play',
    },
    productDemo: {
      eyebrow: 'Pannello agente',
      title: 'Ecco come si lavora in una sola inbox.',
      subtitle: 'Canale, lingua del cliente e traduzione restano nello stesso posto, senza cambiare strumento.',
    },
    pricing: {
      title: 'Scegli il tuo piano',
      subtitle: 'Piani flessibili adatti al tuo business. Cambia quando vuoi.',
      betaBanner: {
        badge: 'Programma Early Adopters',
        title: 'Testa e ottieni 6 mesi gratis.',
        desc: 'Implementa, testa e costruisci il prodotto con noi. In cambio del tuo feedback avrai accesso gratuito, supporto dedicato e garanzia di prezzo bloccato dopo la fine del test.',
        f1: 'Garanzia di prezzo fisso',
        f2: 'Supporto diretto',
        f3: 'Influenza sullo sviluppo',
        f4: 'Accesso a tutte le funzioni',
        spotsLeft: 'Posti rimanenti',
        spotsCount: '12 / 50',
        cta: 'Ottieni accesso gratuito',
        autoAccess: 'Accesso automatico dopo la registrazione.',
      },
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
        recommendedBadge: 'Raccomandato',
        discountBadge: '100% OFF',
        freePrice: '0',
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
        freeCta: 'Inizia gratis',
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
      tagline: 'La porta verso conversazioni con clienti in tutto il mondo. Abbattiamo le barriere linguistiche unendo IA ed empatia umana.',
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
      badge: 'Novinka: Chataptor je nyní zdarma!',
      badgeMobile: 'Novinka: Chataptor je zdarma!',
      pagetitle: 'Chat, který zná každý jazyk.',
      title1: 'Zpracovávej zprávy',
      title2: 've všech jazycích světa.',
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
      tooltipCall: 'Zavolat',
      tooltipEmail: 'Poslat e-mail',
      tooltipChat: 'Otevřít chat',
    },
    chat: {
      messages: 'Zprávy',
      newCount: '4 nové',
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
      title: 'Z lokální firmy<br/>globálním hráčem.',
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
    productStory: {
      eyebrow: 'Produkt ve zkratce',
      title: 'Jedno místo pro komunikaci se zákazníky ze všech kanálů.',
      subtitle: 'Zákazník píše z live chatu, e-mailu nebo sociálních sítí ve svém jazyce. Vy čtete česky a odpovídáte přirozeně.',
      inbox: { title: 'Jedna schránka pro zprávy', description: 'Všechny konverzace přicházejí do jednoho přehledného pracovního prostoru.' },
      translation: { title: 'Automatický AI překlad', description: 'Chataptor překládá zprávy zákazníků i vaše odpovědi v reálném čase.' },
      liveChat: { title: 'Live chat na vašem webu', description: 'Přidáte widget a vytvoříte nový kontaktní kanál bez přestavby webu.' },
      mobile: { title: 'Mobilní aplikace', description: 'Dostáváte upozornění a odpovídáte z telefonu ve svém jazyce.' },
    },
    implementation: {
      title: 'Přidejte live chat<br/>na svůj web.',
      subtitle: 'Vložíte jeden snippet a nový komunikační kanál se na webu objeví za',
      timeHighlight: '3 minuty',
      step1: { title: 'Vytvořte kanál Live Chat', description: 'Pojmenujte ho, nastavte jazyk týmu a zkopírujte hotový kód.' },
      step2: { title: 'Vložte snippet', description: 'Přidejte ho na web, do CMS nebo e-shopu.' },
      step3: { title: 'Zprávy přicházejí do Chataptoru', description: 'Každý dotaz z widgetu přijde do stejné schránky jako ostatní kanály.' },
      step4: { title: 'Odpovídáte z panelu nebo aplikace', description: 'Píšete česky a Chataptor přeloží odpověď zákazníkovi.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'Vaše meta tagy',
      previewTitle: 'Widget live chat',
      previewStatus: 'Online',
      previewGreeting: 'Dobrý den! Jak můžeme pomoci?',
    },
    features: {
      title: 'Konverzace se zákazníky bez jazykových bariér.',
      subtitle: 'Jedna schránka, mnoho kanálů a automatický AI překlad. Chataptor uspořádá konverzace dřív, než tým odpoví.',
      translation: {
        title: 'Překlad v reálném čase',
        description: 'Engine založený na OpenAI a DeepL. Zákazník píše německy, vy vidíte česky. Žádné zpoždění.',
        checking: 'Ověřuji...',
      },
      marketUnlock: {
        title: 'Odemknutí trhu',
        description: 'Otevřete nový trh jedním kliknutím. Škálujte prodeje bez hranic.',
        totalPotential: 'Škálujte své podnikání bez hranic.',
        availableCustomers: 'Dostupní zákazníci',
      },
      omnichannel: {
        title: 'Vše na jednom místě',
        description: 'Propojte e-mail, Instagram, Facebook a WhatsApp. Všechny zprávy ze všech kanálů přicházejí do jedné sdílené schránky.',
        widget: 'Widget na web',
        email: 'E-mail',
        instagram: 'Instagram',
        facebook: 'Facebook',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        oneInbox: 'Jedna schránka',
        allMessages: 'Všechny zprávy přicházejí sem',
        andMore: '...a mnohem více',
        inboxPreview: 'Schránka Chataptor',
        translatedLabel: 'Přeloženo do vašeho jazyka',
        sourceLabel: 'Kanál',
        languageLabel: 'Jazyk zákazníka',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Proměňte návštěvníky ve věrné zákazníky.',
        description2: 'Sbírejte leady chytrými pop-upy a spravujte e-mailové kampaně.',
      },
    },
    mobileApp: {
      eyebrow: 'Mobilní aplikace',
      title: 'Odpovídejte rychleji, ať jste kdekoli.',
      description: 'Zpráva z live chatu, WhatsAppu nebo e-mailu dorazí do telefonu ve vašem jazyce. Odpovíte přirozeně a Chataptor ji přeloží zákazníkovi.',
      notificationTitle: 'Nová zpráva',
      notificationBody: 'Zákazník napsal z WhatsAppu',
      replyTitle: 'Rychlá odpověď',
      replyBody: 'Odpovězte z telefonu během několika sekund.',
      instant: 'Push notifikace v reálném čase',
      appStoreAlt: 'Stáhnout v App Store',
      googlePlayAlt: 'Získat na Google Play',
    },
    productDemo: {
      eyebrow: 'Panel agenta',
      title: 'Tak vypadá práce v jedné schránce.',
      subtitle: 'Kanál, jazyk zákazníka i překlad vidíte na jednom místě, bez přepínání nástrojů.',
    },
    pricing: {
      title: 'Vyberte si plán',
      subtitle: 'Flexibilní plány pro vaše podnikání. Kdykoli změňte.',
      betaBanner: {
        badge: 'Program Early Adopters',
        title: 'Testuj a získej 6 měsíců zdarma.',
        desc: 'Implementuj, testuj a buduj produkt s námi. Výměnou za zpětnou vazbu získáš přístup zdarma, dedikovanou podporu a garanci fixní ceny po ukončení testů.',
        f1: 'Garance fixní ceny',
        f2: 'Přímá podpora',
        f3: 'Vliv na vývoj platformy',
        f4: 'Přístup ke všem funkcím',
        spotsLeft: 'Zbývající místa',
        spotsCount: '12 / 50',
        cta: 'Získat přístup zdarma',
        autoAccess: 'Automatický přístup po registraci.',
      },
      starter: {
        title: 'Starter',
        price: '129 PLN',
        period: '/měsíc',
        desc: 'Ideální pro začínající firmy.',
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
        recommendedBadge: 'Doporučeno',
        discountBadge: '100% OFF',
        freePrice: '0',
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
        freeCta: 'Začít zdarma',
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
      tagline: 'Brána ke konverzacím se zákazníky po celém světě. Boříme jazykové bariéry spojením AI a lidské empatie.',
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
      badge: 'Novinka: Chataptor je teraz zadarmo!',
      badgeMobile: 'Novinka: Chataptor je zadarmo!',
      pagetitle: 'Chat, ktorý pozná každý jazyk.',
      title1: 'Spracúvaj správy',
      title2: 'vo všetkých jazykoch sveta.',
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
      tooltipCall: 'Zavolať',
      tooltipEmail: 'Poslať e-mail',
      tooltipChat: 'Otvoriť chat',
    },
    chat: {
      messages: 'Správy',
      newCount: '4 nové',
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
      title: 'Z lokálnej firmy<br/>na globálneho hráča.',
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
    productStory: {
      eyebrow: 'Produkt v skratke',
      title: 'Jedno miesto na komunikáciu so zákazníkmi zo všetkých kanálov.',
      subtitle: 'Zákazník píše z live chatu, e-mailu alebo sociálnych sietí vo svojom jazyku. Vy čítate po slovensky a odpovedáte prirodzene.',
      inbox: { title: 'Jedna schránka pre správy', description: 'Všetky konverzácie prichádzajú do jedného prehľadného pracovného priestoru.' },
      translation: { title: 'Automatický AI preklad', description: 'Chataptor prekladá správy zákazníkov aj vaše odpovede v reálnom čase.' },
      liveChat: { title: 'Live chat na vašej stránke', description: 'Pridáte widget a vytvoríte nový kontaktný kanál bez prestavby webu.' },
      mobile: { title: 'Mobilná aplikácia', description: 'Dostávate upozornenia a odpovedáte z telefónu vo svojom jazyku.' },
    },
    implementation: {
      title: 'Pridajte live chat<br/>na svoju stránku.',
      subtitle: 'Vložíte jeden snippet a nový komunikačný kanál sa na stránke objaví za',
      timeHighlight: '3 minúty',
      step1: { title: 'Vytvorte kanál Live Chat', description: 'Pomenujte ho, nastavte jazyk tímu a skopírujte hotový kód.' },
      step2: { title: 'Vložte snippet', description: 'Pridajte ho na web, do CMS alebo e-shopu.' },
      step3: { title: 'Správy prichádzajú do Chataptora', description: 'Každá otázka z widgetu príde do rovnakej schránky ako ostatné kanály.' },
      step4: { title: 'Odpovedáte z panelu alebo aplikácie', description: 'Píšete po slovensky a Chataptor preloží odpoveď zákazníkovi.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'Vaše meta tagy',
      previewTitle: 'Widget live chat',
      previewStatus: 'Online',
      previewGreeting: 'Dobrý deň! Ako môžeme pomôcť?',
    },
    features: {
      title: 'Konverzácie so zákazníkmi bez jazykových bariér.',
      subtitle: 'Jedna schránka, mnoho kanálov a automatický AI preklad. Chataptor usporiada konverzácie skôr, než tím odpovie.',
      translation: {
        title: 'Preklad v reálnom čase',
        description: 'Engine založený na OpenAI a DeepL. Zákazník píše po nemecky, vy vidíte po slovensky. Žiadne oneskorenie.',
        checking: 'Overujem...',
      },
      marketUnlock: {
        title: 'Odomknutie trhu',
        description: 'Otvorte nový trh jedným kliknutím. Škáľujte predaje bez hraníc.',
        totalPotential: 'Škálujte svoje podnikanie bez hraníc.',
        availableCustomers: 'Dostupní zákazníci',
      },
      omnichannel: {
        title: 'Všetko na jednom mieste',
        description: 'Prepojte e-mail, Instagram, Facebook a WhatsApp. Všetky správy zo všetkých kanálov prichádzajú do jednej spoločnej schránky.',
        widget: 'Widget na web',
        email: 'E-mail',
        instagram: 'Instagram',
        facebook: 'Facebook',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        oneInbox: 'Jedna schránka',
        allMessages: 'Všetky správy prichádzajú sem',
        andMore: '...a oveľa viac',
        inboxPreview: 'Schránka Chataptor',
        translatedLabel: 'Preložené do vášho jazyka',
        sourceLabel: 'Kanál',
        languageLabel: 'Jazyk zákazníka',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Premeňte návštevníkov na verných zákazníkov.',
        description2: 'Zbierajte leady inteligentnými pop-upmi a spravujte e-mailové kampane.',
      },
    },
    mobileApp: {
      eyebrow: 'Mobilná aplikácia',
      title: 'Odpovedajte rýchlejšie, nech ste kdekoľvek.',
      description: 'Správa z live chatu, WhatsAppu alebo e-mailu príde do telefónu vo vašom jazyku. Odpoviete prirodzene a Chataptor ju preloží zákazníkovi.',
      notificationTitle: 'Nová správa',
      notificationBody: 'Zákazník napísal z WhatsAppu',
      replyTitle: 'Rýchla odpoveď',
      replyBody: 'Odpovedzte z telefónu v priebehu niekoľkých sekúnd.',
      instant: 'Push notifikácie v reálnom čase',
      appStoreAlt: 'Stiahnuť v App Store',
      googlePlayAlt: 'Získať na Google Play',
    },
    productDemo: {
      eyebrow: 'Panel agenta',
      title: 'Takto vyzerá práca v jednej schránke.',
      subtitle: 'Kanál, jazyk zákazníka aj preklad vidíte na jednom mieste, bez prepínania nástrojov.',
    },
    pricing: {
      title: 'Vyberte si plán',
      subtitle: 'Flexibilné plány pre vaše podnikanie. Kedykoľvek zmeňte.',
      betaBanner: {
        badge: 'Program Early Adopters',
        title: 'Testuj a získaj 6 mesiacov zadarmo.',
        desc: 'Implementuj, testuj a buduj produkt s nami. Výmenou za spätnú väzbu získaš prístup zadarmo, dedikovanú podporu a garanciu fixnej ceny po ukončení testov.',
        f1: 'Garancia fixnej ceny',
        f2: 'Priama podpora',
        f3: 'Vplyv na vývoj platformy',
        f4: 'Prístup ku všetkým funkciám',
        spotsLeft: 'Zostávajúce miesta',
        spotsCount: '12 / 50',
        cta: 'Získať prístup zadarmo',
        autoAccess: 'Automatický prístup po registrácii.',
      },
      starter: {
        title: 'Starter',
        price: '129 PLN',
        period: '/mesiac',
        desc: 'Ideálne pre začínajúce firmy.',
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
        recommendedBadge: 'Odporúčané',
        discountBadge: '100% OFF',
        freePrice: '0',
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
        freeCta: 'Začať zadarmo',
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
      tagline: 'Brána ku konverzáciám so zákazníkmi po celom svete. Búrame jazykové bariéry spojením AI a ľudskej empatie.',
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
