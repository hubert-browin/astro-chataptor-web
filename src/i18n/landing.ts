import type { Locale } from './config';

export interface LandingTranslations {
  // Navigation
  nav: {
    howItWorks: string;
    implementation: string;
    features: string;
    login: string;
    loginFull: string;
    start: string;
    startFree: string;
  };
  // Hero section
  hero: {
    badge: string;
    badgeMobile: string;
    title1: string;
    title2: string;
    description: string;
    descriptionMobile: string;
    descriptionHighlight: string;
    cta: string;
    demo: string;
    techTrust: string;
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
    payPerSatisfaction: {
      badge: string;
      title: string;
      description: string;
      threshold: string;
      rating05: string;
      rating610: string;
      zeroCost: string;
      successFee: string;
      qualityAnalysis: string;
      unhappy: string;
      paymentThreshold: string;
      delighted: string;
      success: string;
      chargeInfo: string;
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
      login: 'Zaloguj',
      loginFull: 'Zaloguj się',
      start: 'Rozpocznij',
      startFree: 'Rozpocznij za darmo',
    },
    hero: {
      badge: 'Nowość: Model "Pay-per-satisfaction"',
      badgeMobile: 'Nowość: Pay-per-satisfaction',
      title1: 'Rozmawiaj z klientami',
      title2: 'w każdym języku świata.',
      description: 'Przełam barierę językową. Jeden agent obsługuje 20 rynków.',
      descriptionMobile: 'Jeden agent. 20 rynków. Bariera językowa znika.',
      descriptionHighlight: 'Zero tłumaczy. Zero opóźnień. 100% AI.',
      cta: 'Rozpocznij teraz',
      demo: 'Skontaktuj się z Nami',
      techTrust: 'Technologia, której ufasz',
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
      payPerSatisfaction: {
        badge: 'Rewolucyjny Model',
        title: 'Pay-per-Satisfaction',
        description: 'Koniec z płaceniem za puste słowa. Nasz model opiera się na jakości. Płacisz tylko wtedy, gdy AI rozwiąże problem klienta, a ocena jakości wyniesie',
        threshold: '6/10',
        rating05: 'Ocena 0-5:',
        rating610: 'Ocena 6-10:',
        zeroCost: '0 PLN',
        successFee: 'Success Fee',
        qualityAnalysis: 'Analiza jakości (Live)',
        unhappy: 'Niezadowolony',
        paymentThreshold: 'Próg Płatności (6.0)',
        delighted: 'Zachwycony',
        success: 'Sukces!',
        chargeInfo: 'Naliczono opłatę za rozmowę.',
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
  en: {
    nav: {
      howItWorks: 'How it works',
      implementation: 'Implementation',
      features: 'Features',
      login: 'Login',
      loginFull: 'Log in',
      start: 'Get Started',
      startFree: 'Start for free',
    },
    hero: {
      badge: 'New: "Pay-per-satisfaction" model',
      badgeMobile: 'New: Pay-per-satisfaction',
      title1: 'Sell globally.',
      title2: 'Support locally.',
      description: 'Break the language barrier. One agent serves 20 markets.',
      descriptionMobile: 'One agent. 20 markets. Language barrier gone.',
      descriptionHighlight: 'Zero translators. Zero delays. 100% AI.',
      cta: 'Join the beta',
      demo: 'Watch demo',
      techTrust: 'Technology you trust',
    },
    chat: {
      messages: 'Messages',
      newCount: '3 new',
      online: 'Online',
      language: 'Language',
      placeholder: 'Write in English...',
      send: 'Send',
      aiTranslateHint: 'AI will automatically translate your message to',
      suggestion: 'Suggestion: "We\'ll ship the new product tomorrow."',
    },
    conversations: {
      customer1: {
        name: 'Hans Müller',
        lastMessage: 'Wo ist meine Bestellung?',
        msg1: 'Hallo, wo ist meine Bestellung?',
        msg1Translation: 'Hi, where is my order?',
        msg2: 'I\'m checking that for you, give me a moment.',
        msg2Translation: 'Ich überprüfe das für Sie, einen Moment bitte.',
      },
      customer2: {
        name: 'Pierre Dubois',
        lastMessage: 'Produit endommagé...',
        msg1: 'Bonjour, mon produit est arrivé endommagé.',
        msg1Translation: 'Hello, my product arrived damaged.',
        msg2: 'I\'m very sorry. Can you send a photo?',
        msg2Translation: 'Je suis désolé. Pouvez-vous envoyer une photo ?',
        msg3: 'Bien sûr, voici la photo.',
        msg3Translation: 'Of course, here\'s the photo. [Image]',
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
      uk: { name: 'United Kingdom', sub: '+67M customers' },
      poland: { name: 'Poland', sub: '' },
      homeMarket: 'Home market',
    },
    howItWorks: {
      title: 'From local shop<br/>to global player.',
      subtitle: 'The path that will lead you to international success. Simple, logical, automated.',
      step1: {
        label: 'Step 1',
        title: 'Quick installation',
        description: 'Install the widget and panel in minutes. Your current support team is ready to go.',
        statusReady: 'System ready',
        statusActive: 'Active',
      },
      step2: {
        label: 'Step 2',
        title: 'Choose markets',
        description: 'Select countries you want to enter in the panel. AI translation turns on automatically.',
        availability: 'Availability',
        global: 'Global',
      },
      step3: {
        label: 'Step 3',
        title: 'Support without barriers',
        description: 'Customers write in their language, you reply in English. AI translates everything on the fly.',
        exampleMessage: 'Wo ist mein Paket?',
        exampleTranslation: 'Where is my package?',
      },
      step4: {
        label: 'Step 4',
        title: 'Revenue growth',
        description: 'Customers buy more willingly when they can communicate in their language. You save on team costs while sales grow.',
        conversionGrowth: 'Conversion growth',
        trendUp: 'Upward trend',
      },
    },
    implementation: {
      title: 'Implementation faster than<br/>brewing coffee.',
      subtitle: 'You don\'t need an army of developers. Our widget integrates with your store in',
      timeHighlight: '3 minutes',
      step1: { title: 'Copy the snippet', description: 'Available in your admin panel.' },
      step2: { title: 'Paste in <head>', description: 'Works with any CMS and custom store.' },
      step3: { title: 'Select languages', description: 'Enable German, French, or Italian with one click.' },
      step4: { title: 'Integration (Optional)', description: 'Connect Messenger, WhatsApp, or email.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'Your meta tags',
    },
    features: {
      title: 'Everything in one panel.',
      subtitle: 'Replace Intercom, Mailchimp, and external translators with one tool designed for modern e-commerce.',
      translation: {
        title: 'Real-time Translation',
        description: 'Engine powered by OpenAI and DeepL. Customer writes in German, you see it in English instantly. Zero delays, zero misunderstandings.',
        checking: 'Checking this...',
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
        widget: 'Website widget',
        email: 'Email',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        andMore: '...and more',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Turn visitors into loyal customers.',
        description2: 'Collect leads with smart pop-ups and run effective email campaigns from one panel.',
      },
      payPerSatisfaction: {
        badge: 'Revolutionary Model',
        title: 'Pay-per-Satisfaction',
        description: 'Stop paying for empty words. Our model is based on quality. You only pay when AI solves the customer\'s problem and the quality score is',
        threshold: '6/10',
        rating05: 'Rating 0-5:',
        rating610: 'Rating 6-10:',
        zeroCost: '€0',
        successFee: 'Success Fee',
        qualityAnalysis: 'Quality Analysis (Live)',
        unhappy: 'Unhappy',
        paymentThreshold: 'Payment Threshold (6.0)',
        delighted: 'Delighted',
        success: 'Success!',
        chargeInfo: 'Conversation fee charged.',
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
      location: 'Łódź, Poland',
    },
  },
  de: {
    nav: {
      howItWorks: 'So funktioniert\'s',
      implementation: 'Implementierung',
      features: 'Funktionen',
      login: 'Anmelden',
      loginFull: 'Anmelden',
      start: 'Loslegen',
      startFree: 'Kostenlos starten',
    },
    hero: {
      badge: 'Neu: "Pay-per-satisfaction" Modell',
      badgeMobile: 'Neu: Pay-per-satisfaction',
      title1: 'Global verkaufen.',
      title2: 'Lokal unterstützen.',
      description: 'Überwinden Sie die Sprachbarriere. Ein Agent bedient 20 Märkte.',
      descriptionMobile: 'Ein Agent. 20 Märkte. Sprachbarriere weg.',
      descriptionHighlight: 'Keine Übersetzer. Keine Verzögerungen. 100% KI.',
      cta: 'Beta beitreten',
      demo: 'Demo ansehen',
      techTrust: 'Technologie, der Sie vertrauen',
    },
    chat: {
      messages: 'Nachrichten',
      newCount: '3 neue',
      online: 'Online',
      language: 'Sprache',
      placeholder: 'Schreiben Sie auf Deutsch...',
      send: 'Senden',
      aiTranslateHint: 'KI übersetzt Ihre Nachricht automatisch in',
      suggestion: 'Vorschlag: "Wir versenden das neue Produkt morgen."',
    },
    conversations: {
      customer1: {
        name: 'Hans Müller',
        lastMessage: 'Wo ist meine Bestellung?',
        msg1: 'Hallo, wo ist meine Bestellung?',
        msg1Translation: 'Hallo, wo ist meine Bestellung?',
        msg2: 'Ich überprüfe das für Sie, einen Moment bitte.',
        msg2Translation: 'Ich überprüfe das für Sie, einen Moment bitte.',
      },
      customer2: {
        name: 'Pierre Dubois',
        lastMessage: 'Produit endommagé...',
        msg1: 'Bonjour, mon produit est arrivé endommagé.',
        msg1Translation: 'Hallo, mein Produkt ist beschädigt angekommen.',
        msg2: 'Es tut mir sehr leid. Können Sie ein Foto senden?',
        msg2Translation: 'Je suis désolé. Pouvez-vous envoyer une photo ?',
        msg3: 'Bien sûr, voici la photo.',
        msg3Translation: 'Natürlich, hier ist das Foto. [Bild]',
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
      title: 'Vom lokalen Shop<br/>zum globalen Player.',
      subtitle: 'Der Weg zu Ihrem internationalen Erfolg. Einfach, logisch, automatisiert.',
      step1: {
        label: 'Schritt 1',
        title: 'Schnelle Installation',
        description: 'Installieren Sie Widget und Panel in wenigen Minuten. Ihr Support-Team ist einsatzbereit.',
        statusReady: 'System bereit',
        statusActive: 'Aktiv',
      },
      step2: {
        label: 'Schritt 2',
        title: 'Märkte wählen',
        description: 'Wählen Sie im Panel die Länder aus, in die Sie expandieren möchten. KI-Übersetzung aktiviert sich automatisch.',
        availability: 'Verfügbarkeit',
        global: 'Global',
      },
      step3: {
        label: 'Schritt 3',
        title: 'Support ohne Barrieren',
        description: 'Kunden schreiben in ihrer Sprache, Sie antworten auf Deutsch. KI übersetzt alles in Echtzeit.',
        exampleMessage: 'Wo ist mein Paket?',
        exampleTranslation: 'Wo ist mein Paket?',
      },
      step4: {
        label: 'Schritt 4',
        title: 'Umsatzwachstum',
        description: 'Kunden kaufen lieber, wenn sie in ihrer Sprache kommunizieren können. Sie sparen Teamkosten, während der Umsatz steigt.',
        conversionGrowth: 'Konversionswachstum',
        trendUp: 'Aufwärtstrend',
      },
    },
    implementation: {
      title: 'Implementierung schneller als<br/>Kaffee kochen.',
      subtitle: 'Sie brauchen keine Armee von Entwicklern. Unser Widget integriert sich in Ihren Shop in',
      timeHighlight: '3 Minuten',
      step1: { title: 'Snippet kopieren', description: 'Verfügbar in Ihrem Admin-Panel.' },
      step2: { title: 'In <head> einfügen', description: 'Funktioniert mit jedem CMS und Custom-Shop.' },
      step3: { title: 'Sprachen wählen', description: 'Aktivieren Sie Deutsch, Französisch oder Italienisch mit einem Klick.' },
      step4: { title: 'Integration (Optional)', description: 'Verbinden Sie Messenger, WhatsApp oder E-Mail.' },
      codeComment: 'Chataptor Integration',
      codeMetaComment: 'Ihre Meta-Tags',
    },
    features: {
      title: 'Alles in einem Panel.',
      subtitle: 'Ersetzen Sie Intercom, Mailchimp und externe Übersetzer durch ein Tool, das für modernen E-Commerce entwickelt wurde.',
      translation: {
        title: 'Echtzeit-Übersetzung',
        description: 'Engine basierend auf OpenAI und DeepL. Der Kunde schreibt auf Französisch, Sie sehen es sofort auf Deutsch. Keine Verzögerungen, keine Missverständnisse.',
        checking: 'Ich überprüfe das...',
      },
      marketUnlock: {
        title: 'Market Unlock',
        description: 'Erschließen Sie einen neuen Markt mit einem Klick. Skalieren Sie Ihren Umsatz ohne Grenzen.',
        totalPotential: 'Gesamtes Marktpotenzial',
        availableCustomers: 'Verfügbare Kunden',
      },
      omnichannel: {
        title: 'Omnichannel',
        description: 'Alle Kanäle an einem Ort. Verwalten Sie Nachrichten aus mehreren Quellen ohne Tab-Wechsel.',
        widget: 'Website-Widget',
        email: 'E-Mail',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        andMore: '...und mehr',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Verwandeln Sie Besucher in treue Kunden.',
        description2: 'Sammeln Sie Leads mit intelligenten Pop-ups und führen Sie effektive E-Mail-Kampagnen von einem Panel aus.',
      },
      payPerSatisfaction: {
        badge: 'Revolutionäres Modell',
        title: 'Pay-per-Satisfaction',
        description: 'Schluss mit dem Bezahlen für leere Worte. Unser Modell basiert auf Qualität. Sie zahlen nur, wenn KI das Problem des Kunden löst und die Qualitätsbewertung',
        threshold: '6/10',
        rating05: 'Bewertung 0-5:',
        rating610: 'Bewertung 6-10:',
        zeroCost: '0 €',
        successFee: 'Erfolgsgebühr',
        qualityAnalysis: 'Qualitätsanalyse (Live)',
        unhappy: 'Unzufrieden',
        paymentThreshold: 'Zahlungsschwelle (6.0)',
        delighted: 'Begeistert',
        success: 'Erfolg!',
        chargeInfo: 'Gesprächsgebühr berechnet.',
      },
    },
    footer: {
      tagline: 'Das Tor zur Welt für Ihren E-Commerce. Wir überwinden Sprachbarrieren und verbinden KI mit menschlicher Empathie.',
      contact: 'Kontakt',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'AGB',
      rights: 'Alle Rechte vorbehalten.',
      uptime: 'Uptime: 99,89%',
      location: 'Łódź, Polen',
    },
  },
  fr: {
    nav: {
      howItWorks: 'Comment ça marche',
      implementation: 'Implémentation',
      features: 'Fonctionnalités',
      login: 'Connexion',
      loginFull: 'Se connecter',
      start: 'Commencer',
      startFree: 'Commencer gratuitement',
    },
    hero: {
      badge: 'Nouveau : Modèle "Pay-per-satisfaction"',
      badgeMobile: 'Nouveau : Pay-per-satisfaction',
      title1: 'Vendez globalement.',
      title2: 'Servez localement.',
      description: 'Brisez la barrière de la langue. Un agent sert 20 marchés.',
      descriptionMobile: 'Un agent. 20 marchés. Barrière linguistique éliminée.',
      descriptionHighlight: 'Zéro traducteur. Zéro délai. 100% IA.',
      cta: 'Rejoindre la bêta',
      demo: 'Voir la démo',
      techTrust: 'Technologie de confiance',
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
        msg2: 'Je suis vraiment désolé. Pouvez-vous envoyer une photo ?',
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
      title: 'De la boutique locale<br/>au joueur mondial.',
      subtitle: 'Le chemin qui vous mènera au succès international. Simple, logique, automatisé.',
      step1: {
        label: 'Étape 1',
        title: 'Installation rapide',
        description: 'Installez le widget et le panneau en quelques minutes. Votre équipe support est prête.',
        statusReady: 'Système prêt',
        statusActive: 'Actif',
      },
      step2: {
        label: 'Étape 2',
        title: 'Choix des marchés',
        description: 'Sélectionnez les pays où vous souhaitez vous développer. La traduction IA s\'active automatiquement.',
        availability: 'Disponibilité',
        global: 'Mondiale',
      },
      step3: {
        label: 'Étape 3',
        title: 'Support sans barrières',
        description: 'Les clients écrivent dans leur langue, vous répondez en français. L\'IA traduit tout en temps réel.',
        exampleMessage: 'Wo ist mein Paket?',
        exampleTranslation: 'Où est mon colis ?',
      },
      step4: {
        label: 'Étape 4',
        title: 'Croissance des revenus',
        description: 'Les clients achètent plus volontiers quand ils peuvent communiquer dans leur langue. Vous économisez sur l\'équipe tandis que les ventes augmentent.',
        conversionGrowth: 'Croissance de conversion',
        trendUp: 'Tendance haussière',
      },
    },
    implementation: {
      title: 'Implémentation plus rapide<br/>qu\'un café.',
      subtitle: 'Pas besoin d\'une armée de développeurs. Notre widget s\'intègre à votre boutique en',
      timeHighlight: '3 minutes',
      step1: { title: 'Copiez le snippet', description: 'Disponible dans votre panneau d\'administration.' },
      step2: { title: 'Collez dans <head>', description: 'Fonctionne avec tout CMS et boutique personnalisée.' },
      step3: { title: 'Choisissez les langues', description: 'Activez l\'allemand, le français ou l\'italien en un clic.' },
      step4: { title: 'Intégration (Optionnel)', description: 'Connectez Messenger, WhatsApp ou e-mail.' },
      codeComment: 'Intégration Chataptor',
      codeMetaComment: 'Vos balises meta',
    },
    features: {
      title: 'Tout en un seul panneau.',
      subtitle: 'Remplacez Intercom, Mailchimp et les traducteurs externes par un outil conçu pour l\'e-commerce moderne.',
      translation: {
        title: 'Traduction en temps réel',
        description: 'Moteur basé sur OpenAI et DeepL. Le client écrit en allemand, vous le voyez instantanément en français. Zéro délai, zéro malentendu.',
        checking: 'Je vérifie...',
      },
      marketUnlock: {
        title: 'Market Unlock',
        description: 'Débloquez un nouveau marché en un clic. Développez vos ventes sans frontières.',
        totalPotential: 'Potentiel total du marché',
        availableCustomers: 'Clients disponibles',
      },
      omnichannel: {
        title: 'Omnicanal',
        description: 'Tous les canaux au même endroit. Gérez les messages de plusieurs sources sans changer d\'onglet.',
        widget: 'Widget sur le site',
        email: 'E-mail',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        andMore: '...et plus encore',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Transformez les visiteurs en clients fidèles.',
        description2: 'Collectez des leads avec des pop-ups intelligents et menez des campagnes e-mail efficaces depuis un seul panneau.',
      },
      payPerSatisfaction: {
        badge: 'Modèle Révolutionnaire',
        title: 'Pay-per-Satisfaction',
        description: 'Fini de payer pour du vide. Notre modèle est basé sur la qualité. Vous ne payez que lorsque l\'IA résout le problème du client et que la note de qualité est de',
        threshold: '6/10',
        rating05: 'Note 0-5 :',
        rating610: 'Note 6-10 :',
        zeroCost: '0 €',
        successFee: 'Frais de succès',
        qualityAnalysis: 'Analyse qualité (Live)',
        unhappy: 'Mécontent',
        paymentThreshold: 'Seuil de paiement (6.0)',
        delighted: 'Ravi',
        success: 'Succès !',
        chargeInfo: 'Frais de conversation facturés.',
      },
    },
    footer: {
      tagline: 'La porte vers le monde pour votre e-commerce. Nous brisons les barrières linguistiques en combinant l\'IA et l\'empathie humaine.',
      contact: 'Contact',
      legal: 'Mentions légales',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions générales',
      rights: 'Tous droits réservés.',
      uptime: 'Uptime : 99,89%',
      location: 'Łódź, Pologne',
    },
  },
  es: {
    nav: {
      howItWorks: 'Cómo funciona',
      implementation: 'Implementación',
      features: 'Funciones',
      login: 'Iniciar sesión',
      loginFull: 'Iniciar sesión',
      start: 'Empezar',
      startFree: 'Empezar gratis',
    },
    hero: {
      badge: 'Nuevo: Modelo "Pay-per-satisfaction"',
      badgeMobile: 'Nuevo: Pay-per-satisfaction',
      title1: 'Vende globalmente.',
      title2: 'Atiende localmente.',
      description: 'Rompe la barrera del idioma. Un agente atiende 20 mercados.',
      descriptionMobile: 'Un agente. 20 mercados. Barrera idiomática eliminada.',
      descriptionHighlight: 'Cero traductores. Cero retrasos. 100% IA.',
      cta: 'Unirse a la beta',
      demo: 'Ver demo',
      techTrust: 'Tecnología de confianza',
    },
    chat: {
      messages: 'Mensajes',
      newCount: '3 nuevos',
      online: 'En línea',
      language: 'Idioma',
      placeholder: 'Escribe en español...',
      send: 'Enviar',
      aiTranslateHint: 'La IA traducirá automáticamente tu mensaje a',
      suggestion: 'Sugerencia: "Enviaremos el nuevo producto mañana."',
    },
    conversations: {
      customer1: {
        name: 'Hans Müller',
        lastMessage: 'Wo ist meine Bestellung?',
        msg1: 'Hallo, wo ist meine Bestellung?',
        msg1Translation: 'Hola, ¿dónde está mi pedido?',
        msg2: 'Estoy verificándolo, dame un momento.',
        msg2Translation: 'Ich überprüfe das für Sie, einen Moment bitte.',
      },
      customer2: {
        name: 'Pierre Dubois',
        lastMessage: 'Produit endommagé...',
        msg1: 'Bonjour, mon produit est arrivé endommagé.',
        msg1Translation: 'Hola, mi producto llegó dañado.',
        msg2: 'Lo siento mucho. ¿Puedes enviar una foto?',
        msg2Translation: 'Je suis désolé. Pouvez-vous envoyer une photo ?',
        msg3: 'Bien sûr, voici la photo.',
        msg3Translation: 'Por supuesto, aquí está la foto. [Imagen]',
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
      subtitle: 'El camino hacia tu éxito internacional. Simple, lógico, automatizado.',
      step1: {
        label: 'Paso 1',
        title: 'Instalación rápida',
        description: 'Instala el widget y el panel en minutos. Tu equipo de soporte está listo para funcionar.',
        statusReady: 'Sistema listo',
        statusActive: 'Activo',
      },
      step2: {
        label: 'Paso 2',
        title: 'Elige mercados',
        description: 'Selecciona los países a los que quieres expandirte. La traducción IA se activa automáticamente.',
        availability: 'Disponibilidad',
        global: 'Global',
      },
      step3: {
        label: 'Paso 3',
        title: 'Soporte sin barreras',
        description: 'Los clientes escriben en su idioma, tú respondes en español. La IA traduce todo en tiempo real.',
        exampleMessage: 'Wo ist mein Paket?',
        exampleTranslation: '¿Dónde está mi paquete?',
      },
      step4: {
        label: 'Paso 4',
        title: 'Crecimiento de ingresos',
        description: 'Los clientes compran más cuando pueden comunicarse en su idioma. Ahorras en equipo mientras las ventas crecen.',
        conversionGrowth: 'Crecimiento de conversión',
        trendUp: 'Tendencia alcista',
      },
    },
    implementation: {
      title: 'Implementación más rápida<br/>que hacer café.',
      subtitle: 'No necesitas un ejército de desarrolladores. Nuestro widget se integra en tu tienda en',
      timeHighlight: '3 minutos',
      step1: { title: 'Copia el snippet', description: 'Disponible en tu panel de administración.' },
      step2: { title: 'Pega en <head>', description: 'Funciona con cualquier CMS y tienda personalizada.' },
      step3: { title: 'Selecciona idiomas', description: 'Activa alemán, francés o italiano con un clic.' },
      step4: { title: 'Integración (Opcional)', description: 'Conecta Messenger, WhatsApp o email.' },
      codeComment: 'Integración Chataptor',
      codeMetaComment: 'Tus meta tags',
    },
    features: {
      title: 'Todo en un panel.',
      subtitle: 'Reemplaza Intercom, Mailchimp y traductores externos con una herramienta diseñada para e-commerce moderno.',
      translation: {
        title: 'Traducción en tiempo real',
        description: 'Motor basado en OpenAI y DeepL. El cliente escribe en alemán, lo ves instantáneamente en español. Cero retrasos, cero malentendidos.',
        checking: 'Verificando...',
      },
      marketUnlock: {
        title: 'Market Unlock',
        description: 'Desbloquea un nuevo mercado con un clic. Escala tus ventas sin fronteras.',
        totalPotential: 'Potencial total del mercado',
        availableCustomers: 'Clientes disponibles',
      },
      omnichannel: {
        title: 'Omnicanal',
        description: 'Todos los canales en un solo lugar. Gestiona mensajes de múltiples fuentes sin cambiar de pestaña.',
        widget: 'Widget en la web',
        email: 'Email',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        andMore: '...y más',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Convierte visitantes en clientes fieles.',
        description2: 'Captura leads con pop-ups inteligentes y ejecuta campañas de email efectivas desde un solo panel.',
      },
      payPerSatisfaction: {
        badge: 'Modelo Revolucionario',
        title: 'Pay-per-Satisfaction',
        description: 'Deja de pagar por palabras vacías. Nuestro modelo se basa en calidad. Solo pagas cuando la IA resuelve el problema del cliente y la puntuación es de',
        threshold: '6/10',
        rating05: 'Puntuación 0-5:',
        rating610: 'Puntuación 6-10:',
        zeroCost: '0 €',
        successFee: 'Tarifa de éxito',
        qualityAnalysis: 'Análisis de calidad (Live)',
        unhappy: 'Insatisfecho',
        paymentThreshold: 'Umbral de pago (6.0)',
        delighted: 'Encantado',
        success: '¡Éxito!',
        chargeInfo: 'Tarifa de conversación cobrada.',
      },
    },
    footer: {
      tagline: 'La puerta al mundo para tu e-commerce. Rompemos barreras idiomáticas combinando IA con empatía humana.',
      contact: 'Contacto',
      legal: 'Legal',
      privacy: 'Política de privacidad',
      terms: 'Términos de servicio',
      rights: 'Todos los derechos reservados.',
      uptime: 'Uptime: 99,89%',
      location: 'Łódź, Polonia',
    },
  },
  it: {
    nav: {
      howItWorks: 'Come funziona',
      implementation: 'Implementazione',
      features: 'Funzionalità',
      login: 'Accedi',
      loginFull: 'Accedi',
      start: 'Inizia',
      startFree: 'Inizia gratis',
    },
    hero: {
      badge: 'Novità: Modello "Pay-per-satisfaction"',
      badgeMobile: 'Novità: Pay-per-satisfaction',
      title1: 'Vendi globalmente.',
      title2: 'Servi localmente.',
      description: 'Supera la barriera linguistica. Un agente serve 20 mercati.',
      descriptionMobile: 'Un agente. 20 mercati. Barriera linguistica eliminata.',
      descriptionHighlight: 'Zero traduttori. Zero ritardi. 100% IA.',
      cta: 'Unisciti alla beta',
      demo: 'Guarda la demo',
      techTrust: 'Tecnologia di cui ti fidi',
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
        msg2: 'Sto verificando per te, dammi un momento.',
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
      subtitle: 'Il percorso verso il tuo successo internazionale. Semplice, logico, automatizzato.',
      step1: {
        label: 'Passo 1',
        title: 'Installazione rapida',
        description: 'Installa widget e pannello in pochi minuti. Il tuo team di supporto è pronto.',
        statusReady: 'Sistema pronto',
        statusActive: 'Attivo',
      },
      step2: {
        label: 'Passo 2',
        title: 'Scegli i mercati',
        description: 'Seleziona i paesi in cui vuoi espanderti. La traduzione IA si attiva automaticamente.',
        availability: 'Disponibilità',
        global: 'Globale',
      },
      step3: {
        label: 'Passo 3',
        title: 'Supporto senza barriere',
        description: 'I clienti scrivono nella loro lingua, tu rispondi in italiano. L\'IA traduce tutto in tempo reale.',
        exampleMessage: 'Wo ist mein Paket?',
        exampleTranslation: 'Dov\'è il mio pacco?',
      },
      step4: {
        label: 'Passo 4',
        title: 'Crescita dei ricavi',
        description: 'I clienti comprano più volentieri quando possono comunicare nella loro lingua. Risparmi sul team mentre le vendite crescono.',
        conversionGrowth: 'Crescita conversioni',
        trendUp: 'Trend in crescita',
      },
    },
    implementation: {
      title: 'Implementazione più veloce<br/>di fare un caffè.',
      subtitle: 'Non hai bisogno di un esercito di sviluppatori. Il nostro widget si integra nel tuo negozio in',
      timeHighlight: '3 minuti',
      step1: { title: 'Copia lo snippet', description: 'Disponibile nel tuo pannello admin.' },
      step2: { title: 'Incolla in <head>', description: 'Funziona con qualsiasi CMS e negozio personalizzato.' },
      step3: { title: 'Seleziona le lingue', description: 'Attiva tedesco, francese o italiano con un clic.' },
      step4: { title: 'Integrazione (Opzionale)', description: 'Collega Messenger, WhatsApp o email.' },
      codeComment: 'Integrazione Chataptor',
      codeMetaComment: 'I tuoi meta tag',
    },
    features: {
      title: 'Tutto in un pannello.',
      subtitle: 'Sostituisci Intercom, Mailchimp e traduttori esterni con uno strumento progettato per l\'e-commerce moderno.',
      translation: {
        title: 'Traduzione in tempo reale',
        description: 'Motore basato su OpenAI e DeepL. Il cliente scrive in tedesco, lo vedi istantaneamente in italiano. Zero ritardi, zero malintesi.',
        checking: 'Sto verificando...',
      },
      marketUnlock: {
        title: 'Market Unlock',
        description: 'Sblocca un nuovo mercato con un clic. Scala le vendite senza confini.',
        totalPotential: 'Potenziale totale del mercato',
        availableCustomers: 'Clienti disponibili',
      },
      omnichannel: {
        title: 'Omnicanale',
        description: 'Tutti i canali in un unico posto. Gestisci messaggi da più fonti senza cambiare scheda.',
        widget: 'Widget sul sito',
        email: 'Email',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        andMore: '...e altro',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Trasforma i visitatori in clienti fedeli.',
        description2: 'Raccogli lead con pop-up intelligenti e conduci campagne email efficaci da un unico pannello.',
      },
      payPerSatisfaction: {
        badge: 'Modello Rivoluzionario',
        title: 'Pay-per-Satisfaction',
        description: 'Basta pagare per parole vuote. Il nostro modello si basa sulla qualità. Paghi solo quando l\'IA risolve il problema del cliente e il punteggio qualità è di',
        threshold: '6/10',
        rating05: 'Valutazione 0-5:',
        rating610: 'Valutazione 6-10:',
        zeroCost: '0 €',
        successFee: 'Tariffa di successo',
        qualityAnalysis: 'Analisi qualità (Live)',
        unhappy: 'Insoddisfatto',
        paymentThreshold: 'Soglia di pagamento (6.0)',
        delighted: 'Entusiasta',
        success: 'Successo!',
        chargeInfo: 'Tariffa conversazione addebitata.',
      },
    },
    footer: {
      tagline: 'La porta sul mondo per il tuo e-commerce. Abbattiamo le barriere linguistiche combinando IA ed empatia umana.',
      contact: 'Contatti',
      legal: 'Legale',
      privacy: 'Privacy Policy',
      terms: 'Termini di servizio',
      rights: 'Tutti i diritti riservati.',
      uptime: 'Uptime: 99,89%',
      location: 'Łódź, Polonia',
    },
  },
  cs: {
    nav: {
      howItWorks: 'Jak to funguje',
      implementation: 'Implementace',
      features: 'Funkce',
      login: 'Přihlásit',
      loginFull: 'Přihlásit se',
      start: 'Začít',
      startFree: 'Začít zdarma',
    },
    hero: {
      badge: 'Novinka: Model "Pay-per-satisfaction"',
      badgeMobile: 'Novinka: Pay-per-satisfaction',
      title1: 'Prodávejte globálně.',
      title2: 'Obsluhujte lokálně.',
      description: 'Prolomte jazykovou bariéru. Jeden agent obsluhuje 20 trhů.',
      descriptionMobile: 'Jeden agent. 20 trhů. Jazyková bariéra zmizela.',
      descriptionHighlight: 'Žádní překladatelé. Žádná zpoždění. 100% AI.',
      cta: 'Připojit se k betě',
      demo: 'Sledovat demo',
      techTrust: 'Technologie, které důvěřujete',
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
        msg2: 'Ověřuji to pro vás, moment.',
        msg2Translation: 'Ich überprüfe das für Sie, einen Moment bitte.',
      },
      customer2: {
        name: 'Pierre Dubois',
        lastMessage: 'Produit endommagé...',
        msg1: 'Bonjour, mon produit est arrivé endommagé.',
        msg1Translation: 'Dobrý den, můj produkt dorazil poškozený.',
        msg2: 'Moc se omlouvám. Můžete poslat fotku?',
        msg2Translation: 'Je suis désolé. Pouvez-vous envoyer une photo ?',
        msg3: 'Bien sûr, voici la photo.',
        msg3Translation: 'Samozřejmě, zde je fotka. [Obrázek]',
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
      title: 'Z místního obchodu<br/>na globálního hráče.',
      subtitle: 'Cesta k vašemu mezinárodnímu úspěchu. Jednoduchá, logická, automatizovaná.',
      step1: {
        label: 'Krok 1',
        title: 'Rychlá instalace',
        description: 'Nainstalujte widget a panel za pár minut. Váš tým podpory je připraven.',
        statusReady: 'Systém připraven',
        statusActive: 'Aktivní',
      },
      step2: {
        label: 'Krok 2',
        title: 'Výběr trhů',
        description: 'V panelu vyberte země, kam chcete expandovat. AI překlad se aktivuje automaticky.',
        availability: 'Dostupnost',
        global: 'Globální',
      },
      step3: {
        label: 'Krok 3',
        title: 'Podpora bez bariér',
        description: 'Zákazníci píší ve svém jazyce, vy odpovídáte česky. AI překládá vše v reálném čase.',
        exampleMessage: 'Wo ist mein Paket?',
        exampleTranslation: 'Kde je můj balík?',
      },
      step4: {
        label: 'Krok 4',
        title: 'Růst tržeb',
        description: 'Zákazníci nakupují raději, když mohou komunikovat ve svém jazyce. Šetříte na týmu, zatímco tržby rostou.',
        conversionGrowth: 'Růst konverzí',
        trendUp: 'Rostoucí trend',
      },
    },
    implementation: {
      title: 'Implementace rychlejší<br/>než uvařit kávu.',
      subtitle: 'Nepotřebujete armádu vývojářů. Náš widget se integruje do vašeho obchodu za',
      timeHighlight: '3 minuty',
      step1: { title: 'Zkopírujte snippet', description: 'Dostupný ve vašem admin panelu.' },
      step2: { title: 'Vložte do <head>', description: 'Funguje s jakýmkoli CMS a vlastním obchodem.' },
      step3: { title: 'Vyberte jazyky', description: 'Aktivujte němčinu, francouzštinu nebo italštinu jedním klikem.' },
      step4: { title: 'Integrace (Volitelné)', description: 'Připojte Messenger, WhatsApp nebo email.' },
      codeComment: 'Integrace Chataptor',
      codeMetaComment: 'Vaše meta tagy',
    },
    features: {
      title: 'Vše v jednom panelu.',
      subtitle: 'Nahraďte Intercom, Mailchimp a externí překladatele jedním nástrojem navrženým pro moderní e-commerce.',
      translation: {
        title: 'Překlad v reálném čase',
        description: 'Motor založený na OpenAI a DeepL. Zákazník píše německy, vy to vidíte okamžitě česky. Žádná zpoždění, žádná nedorozumění.',
        checking: 'Ověřuji...',
      },
      marketUnlock: {
        title: 'Market Unlock',
        description: 'Odemkněte nový trh jedním klikem. Škálujte prodej bez hranic.',
        totalPotential: 'Celkový potenciál trhu',
        availableCustomers: 'Dostupní zákazníci',
      },
      omnichannel: {
        title: 'Omnikanál',
        description: 'Všechny kanály na jednom místě. Spravujte zprávy z více zdrojů bez přepínání karet.',
        widget: 'Widget na webu',
        email: 'Email',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        andMore: '...a více',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Proměňte návštěvníky ve věrné zákazníky.',
        description2: 'Sbírejte leady pomocí chytrých pop-upů a provádějte efektivní e-mailové kampaně z jednoho panelu.',
      },
      payPerSatisfaction: {
        badge: 'Revoluční Model',
        title: 'Pay-per-Satisfaction',
        description: 'Přestaňte platit za prázdná slova. Náš model je založen na kvalitě. Platíte pouze tehdy, když AI vyřeší problém zákazníka a hodnocení kvality je',
        threshold: '6/10',
        rating05: 'Hodnocení 0-5:',
        rating610: 'Hodnocení 6-10:',
        zeroCost: '0 Kč',
        successFee: 'Poplatek za úspěch',
        qualityAnalysis: 'Analýza kvality (Live)',
        unhappy: 'Nespokojený',
        paymentThreshold: 'Práh platby (6.0)',
        delighted: 'Nadšený',
        success: 'Úspěch!',
        chargeInfo: 'Poplatek za konverzaci účtován.',
      },
    },
    footer: {
      tagline: 'Brána do světa pro váš e-commerce. Boříme jazykové bariéry kombinací AI a lidské empatie.',
      contact: 'Kontakt',
      legal: 'Právní',
      privacy: 'Ochrana soukromí',
      terms: 'Podmínky služby',
      rights: 'Všechna práva vyhrazena.',
      uptime: 'Uptime: 99,89%',
      location: 'Lodž, Polsko',
    },
  },
  sk: {
    nav: {
      howItWorks: 'Ako to funguje',
      implementation: 'Implementácia',
      features: 'Funkcie',
      login: 'Prihlásiť',
      loginFull: 'Prihlásiť sa',
      start: 'Začať',
      startFree: 'Začať zadarmo',
    },
    hero: {
      badge: 'Novinka: Model "Pay-per-satisfaction"',
      badgeMobile: 'Novinka: Pay-per-satisfaction',
      title1: 'Predávajte globálne.',
      title2: 'Obsluhujte lokálne.',
      description: 'Prelomte jazykovú bariéru. Jeden agent obsluhuje 20 trhov.',
      descriptionMobile: 'Jeden agent. 20 trhov. Jazyková bariéra zmizla.',
      descriptionHighlight: 'Žiadni prekladatelia. Žiadne meškania. 100% AI.',
      cta: 'Pripojiť sa k bete',
      demo: 'Pozrieť demo',
      techTrust: 'Technológia, ktorej dôverujete',
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
        msg2: 'Overujem to pre vás, moment.',
        msg2Translation: 'Ich überprüfe das für Sie, einen Moment bitte.',
      },
      customer2: {
        name: 'Pierre Dubois',
        lastMessage: 'Produit endommagé...',
        msg1: 'Bonjour, mon produit est arrivé endommagé.',
        msg1Translation: 'Dobrý deň, môj produkt dorazil poškodený.',
        msg2: 'Veľmi sa ospravedlňujem. Môžete poslať fotku?',
        msg2Translation: 'Je suis désolé. Pouvez-vous envoyer une photo ?',
        msg3: 'Bien sûr, voici la photo.',
        msg3Translation: 'Samozrejme, tu je fotka. [Obrázok]',
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
      title: 'Z miestneho obchodu<br/>na globálneho hráča.',
      subtitle: 'Cesta k vášmu medzinárodnému úspechu. Jednoduchá, logická, automatizovaná.',
      step1: {
        label: 'Krok 1',
        title: 'Rýchla inštalácia',
        description: 'Nainštalujte widget a panel za pár minút. Váš tím podpory je pripravený.',
        statusReady: 'Systém pripravený',
        statusActive: 'Aktívny',
      },
      step2: {
        label: 'Krok 2',
        title: 'Výber trhov',
        description: 'V paneli vyberte krajiny, kam chcete expandovať. AI preklad sa aktivuje automaticky.',
        availability: 'Dostupnosť',
        global: 'Globálna',
      },
      step3: {
        label: 'Krok 3',
        title: 'Podpora bez bariér',
        description: 'Zákazníci píšu vo svojom jazyku, vy odpovedáte po slovensky. AI prekladá všetko v reálnom čase.',
        exampleMessage: 'Wo ist mein Paket?',
        exampleTranslation: 'Kde je môj balík?',
      },
      step4: {
        label: 'Krok 4',
        title: 'Rast tržieb',
        description: 'Zákazníci nakupujú radšej, keď môžu komunikovať vo svojom jazyku. Šetríte na tíme, zatiaľ čo tržby rastú.',
        conversionGrowth: 'Rast konverzií',
        trendUp: 'Rastúci trend',
      },
    },
    implementation: {
      title: 'Implementácia rýchlejšia<br/>ako uvariť kávu.',
      subtitle: 'Nepotrebujete armádu vývojárov. Náš widget sa integruje do vášho obchodu za',
      timeHighlight: '3 minúty',
      step1: { title: 'Skopírujte snippet', description: 'Dostupný vo vašom admin paneli.' },
      step2: { title: 'Vložte do <head>', description: 'Funguje s akýmkoľvek CMS a vlastným obchodom.' },
      step3: { title: 'Vyberte jazyky', description: 'Aktivujte nemčinu, francúzštinu alebo taliančinu jedným klikom.' },
      step4: { title: 'Integrácia (Voliteľné)', description: 'Pripojte Messenger, WhatsApp alebo email.' },
      codeComment: 'Integrácia Chataptor',
      codeMetaComment: 'Vaše meta tagy',
    },
    features: {
      title: 'Všetko v jednom paneli.',
      subtitle: 'Nahraďte Intercom, Mailchimp a externých prekladateľov jedným nástrojom navrhnutým pre moderný e-commerce.',
      translation: {
        title: 'Preklad v reálnom čase',
        description: 'Motor založený na OpenAI a DeepL. Zákazník píše po nemecky, vy to vidíte okamžite po slovensky. Žiadne meškania, žiadne nedorozumenia.',
        checking: 'Overujem...',
      },
      marketUnlock: {
        title: 'Market Unlock',
        description: 'Odomknite nový trh jedným klikom. Škálujte predaj bez hraníc.',
        totalPotential: 'Celkový potenciál trhu',
        availableCustomers: 'Dostupní zákazníci',
      },
      omnichannel: {
        title: 'Omnikanál',
        description: 'Všetky kanály na jednom mieste. Spravujte správy z viacerých zdrojov bez prepínania kariet.',
        widget: 'Widget na webe',
        email: 'Email',
        whatsapp: 'WhatsApp',
        messenger: 'Messenger',
        andMore: '...a viac',
      },
      marketing: {
        title: 'Marketing',
        description1: 'Premeňte návštevníkov na verných zákazníkov.',
        description2: 'Zbierajte leady pomocou inteligentných pop-upov a vykonávajte efektívne e-mailové kampane z jedného panela.',
      },
      payPerSatisfaction: {
        badge: 'Revolučný Model',
        title: 'Pay-per-Satisfaction',
        description: 'Prestaňte platiť za prázdne slová. Náš model je založený na kvalite. Platíte iba vtedy, keď AI vyrieši problém zákazníka a hodnotenie kvality je',
        threshold: '6/10',
        rating05: 'Hodnotenie 0-5:',
        rating610: 'Hodnotenie 6-10:',
        zeroCost: '0 €',
        successFee: 'Poplatok za úspech',
        qualityAnalysis: 'Analýza kvality (Live)',
        unhappy: 'Nespokojný',
        paymentThreshold: 'Prah platby (6.0)',
        delighted: 'Nadšený',
        success: 'Úspech!',
        chargeInfo: 'Poplatok za konverzáciu účtovaný.',
      },
    },
    footer: {
      tagline: 'Brána do sveta pre váš e-commerce. Búrame jazykové bariéry kombináciou AI a ľudskej empatie.',
      contact: 'Kontakt',
      legal: 'Právne',
      privacy: 'Ochrana súkromia',
      terms: 'Podmienky služby',
      rights: 'Všetky práva vyhradené.',
      uptime: 'Uptime: 99,89%',
      location: 'Lodž, Poľsko',
    },
  },
};

export function getLanding(lang: Locale): LandingTranslations {
  return landing[lang] || landing.en;
}
