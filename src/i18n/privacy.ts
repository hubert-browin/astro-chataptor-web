import type { Locale } from './config';

/**
 * Privacy Policy translations for all supported languages.
 * GDPR-compliant legal terminology used throughout.
 */

export interface PrivacyTranslations {
  // Meta
  pageTitle: string;
  metaDescription: string;

  // Header
  backToHome: string;

  // Mobile TOC
  tableOfContents: string;

  // Quick Links Sidebar
  questionsAboutData: string;

  // Page Header
  dataProtectionBadge: string;
  privacyPolicyTitle: string;
  lastUpdated: string;

  // Intro Card
  introTitle: string;
  introDescription: string;

  // Section Titles (TOC)
  toc: {
    section1: string;
    section2: string;
    section3: string;
    section4: string;
    section5: string;
    section6: string;
    section7: string;
    section8: string;
    section9: string;
    section10: string;
    section11: string;
    section12: string;
  };

  // Section 1: Data Controller
  section1: {
    title: string;
    intro: string;
    companyName: string;
    address: string;
    city: string;
    nipLabel: string;
    regonLabel: string;
    krsLabel: string;
    bdoLabel: string;
  };

  // Section 2: Contact
  section2: {
    title: string;
    intro: string;
    emailLabel: string;
    phoneLabel: string;
    faxLabel: string;
    addressLabel: string;
  };

  // Section 3: Scope of Data
  section3: {
    title: string;
    intro: string;
    userProvidedTitle: string;
    userProvidedItems: string[];
    automaticDataTitle: string;
    automaticDataItems: string[];
  };

  // Section 4: Processing Purposes
  section4: {
    title: string;
    intro: string;
    purposes: {
      title: string;
      description: string;
      legalBasis: string;
    }[];
  };

  // Section 5: Data Recipients
  section5: {
    title: string;
    intro: string;
    recipients: {
      title: string;
      description: string;
    }[];
  };

  // Section 6: Transfer Outside EEA
  section6: {
    title: string;
    content: string;
    standardClauses: string;
  };

  // Section 7: Retention Period
  section7: {
    title: string;
    intro: string;
    tableHeaders: {
      dataType: string;
      retentionPeriod: string;
    };
    retentionData: {
      dataType: string;
      period: string;
    }[];
  };

  // Section 8: Your Rights
  section8: {
    title: string;
    intro: string;
    rights: {
      title: string;
      description: string;
    }[];
    exerciseRightsIntro: string;
    exerciseRightsContact: string;
    supervisoryAuthority: string;
    supervisoryAuthorityName: string;
  };

  // Section 9: Cookies
  section9: {
    title: string;
    intro: string;
    cookieTypesTitle: string;
    cookieTypes: {
      type: string;
      description: string;
    }[];
    manageCookiesTitle: string;
    manageCookiesDescription: string;
  };

  // Section 10: Security
  section10: {
    title: string;
    intro: string;
    measures: string[];
  };

  // Section 11: Policy Changes
  section11: {
    title: string;
    content: string;
    notificationEmail: string;
    notificationSite: string;
    recommendation: string;
  };

  // Section 12: Final Contact
  section12: {
    title: string;
    intro: string;
    companyNameShort: string;
    address: string;
    emailDpoLabel: string;
    emailGeneralLabel: string;
    phoneLabel: string;
  };

  // Footer
  footer: {
    tagline: string;
    contactTitle: string;
    legalTitle: string;
    privacyPolicy: string;
    terms: string;
    allRightsReserved: string;
  };
}

export const privacyTranslations: Record<Locale, PrivacyTranslations> = {
  // ============================================================================
  // POLISH (PL)
  // ============================================================================
  pl: {
    pageTitle: 'Polityka Prywatności | Chataptor',
    metaDescription: 'Polityka prywatności serwisu Chataptor - informacje o przetwarzaniu danych osobowych',
    backToHome: 'Strona główna',
    tableOfContents: 'Spis treści',
    questionsAboutData: 'Pytania o dane?',
    dataProtectionBadge: 'Ochrona danych',
    privacyPolicyTitle: 'Polityka Prywatności',
    lastUpdated: 'Ostatnia aktualizacja: 29 stycznia 2026',
    introTitle: 'Twoja prywatność jest dla nas priorytetem',
    introDescription: 'Niniejsza Polityka Prywatności wyjaśnia, jakie dane zbieramy, w jaki sposób je przetwarzamy oraz jakie prawa Ci przysługują.',

    toc: {
      section1: 'Administrator danych',
      section2: 'Kontakt',
      section3: 'Zakres danych',
      section4: 'Cele przetwarzania',
      section5: 'Odbiorcy danych',
      section6: 'Transfer poza EOG',
      section7: 'Okres przechowywania',
      section8: 'Twoje prawa',
      section9: 'Pliki cookies',
      section10: 'Bezpieczeństwo',
      section11: 'Zmiany polityki',
      section12: 'Kontakt końcowy',
    },

    section1: {
      title: 'Administrator danych',
      intro: 'Administratorem Twoich danych osobowych jest:',
      companyName: 'BROWIN Spółka z ograniczoną odpowiedzialnością Spółka komandytowa',
      address: 'ul. Pryncypalna 129/141',
      city: '93-373 Łódź, Polska',
      nipLabel: 'NIP',
      regonLabel: 'REGON',
      krsLabel: 'KRS',
      bdoLabel: 'BDO',
    },

    section2: {
      title: 'Kontakt w sprawach ochrony danych',
      intro: 'W sprawach związanych z ochroną danych osobowych możesz skontaktować się z nami:',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefon',
      faxLabel: 'Fax',
      addressLabel: 'Adres',
    },

    section3: {
      title: 'Zakres zbieranych danych',
      intro: 'W ramach korzystania z serwisu Chataptor możemy zbierać następujące kategorie danych:',
      userProvidedTitle: 'Dane podawane przez użytkownika',
      userProvidedItems: [
        'Imię i nazwisko',
        'Adres e-mail',
        'Numer telefonu',
        'Nazwa firmy i stanowisko',
        'Treść wiadomości w konwersacjach',
      ],
      automaticDataTitle: 'Dane zbierane automatycznie',
      automaticDataItems: [
        'Adres IP',
        'Typ i wersja przeglądarki',
        'System operacyjny',
        'Rozdzielczość ekranu',
        'Czas i data wizyty',
        'Przeglądane strony',
        'Źródło ruchu (referer)',
      ],
    },

    section4: {
      title: 'Cele przetwarzania danych',
      intro: 'Twoje dane osobowe przetwarzamy w następujących celach:',
      purposes: [
        { title: 'Świadczenie usług', description: 'Obsługa czatu, tłumaczenie wiadomości, realizacja funkcji platformy', legalBasis: 'art. 6 ust. 1 lit. b RODO' },
        { title: 'Komunikacja', description: 'Odpowiadanie na zapytania, wsparcie techniczne', legalBasis: 'art. 6 ust. 1 lit. b i f RODO' },
        { title: 'Analityka', description: 'Poprawa jakości usług, optymalizacja platformy', legalBasis: 'art. 6 ust. 1 lit. f RODO' },
        { title: 'Marketing', description: 'Przesyłanie informacji handlowych za Twoją zgodą', legalBasis: 'art. 6 ust. 1 lit. a RODO' },
        { title: 'Bezpieczeństwo', description: 'Wykrywanie nadużyć, ochrona przed atakami', legalBasis: 'art. 6 ust. 1 lit. f RODO' },
        { title: 'Obowiązki prawne', description: 'Wypełnianie obowiązków wynikających z przepisów prawa', legalBasis: 'art. 6 ust. 1 lit. c RODO' },
      ],
    },

    section5: {
      title: 'Odbiorcy danych',
      intro: 'Twoje dane mogą być przekazywane następującym kategoriom odbiorców:',
      recipients: [
        { title: 'Dostawcy usług IT', description: 'Hosting, przechowywanie danych w chmurze' },
        { title: 'Usługi tłumaczeniowe', description: 'API do tłumaczenia maszynowego (DeepL, OpenAI)' },
        { title: 'Narzędzia analityczne', description: 'Google Analytics (z anonimizacją IP)' },
        { title: 'Organy publiczne', description: 'Gdy wymagają tego przepisy prawa' },
      ],
    },

    section6: {
      title: 'Przekazywanie danych poza EOG',
      content: 'W niektórych przypadkach Twoje dane mogą być przekazywane poza Europejski Obszar Gospodarczy (EOG), np. do serwerów zlokalizowanych w USA. W takich przypadkach stosujemy odpowiednie zabezpieczenia, w tym',
      standardClauses: 'standardowe klauzule umowne',
    },

    section7: {
      title: 'Okres przechowywania danych',
      intro: 'Twoje dane przechowujemy przez okres niezbędny do realizacji celów przetwarzania:',
      tableHeaders: {
        dataType: 'Rodzaj danych',
        retentionPeriod: 'Okres przechowywania',
      },
      retentionData: [
        { dataType: 'Dane konta', period: 'Okres korzystania + 3 lata' },
        { dataType: 'Historia konwersacji', period: 'Okres korzystania + 1 rok' },
        { dataType: 'Dane analityczne', period: 'Maksymalnie 26 miesięcy' },
        { dataType: 'Dane rozliczeniowe', period: '5 lat (przepisy podatkowe)' },
      ],
    },

    section8: {
      title: 'Twoje prawa',
      intro: 'Zgodnie z RODO przysługują Ci następujące prawa:',
      rights: [
        { title: 'Prawo dostępu', description: 'Możesz uzyskać informację o przetwarzanych danych' },
        { title: 'Prawo do sprostowania', description: 'Możesz żądać poprawienia nieprawidłowych danych' },
        { title: 'Prawo do usunięcia', description: 'Możesz żądać usunięcia danych ("prawo do bycia zapomnianym")' },
        { title: 'Prawo do ograniczenia', description: 'Możesz żądać ograniczenia przetwarzania' },
        { title: 'Prawo do przenoszenia', description: 'Możesz otrzymać dane w formacie nadającym się do odczytu' },
        { title: 'Prawo do sprzeciwu', description: 'Możesz sprzeciwić się przetwarzaniu danych' },
      ],
      exerciseRightsIntro: 'Aby skorzystać z powyższych praw, skontaktuj się z nami pod adresem',
      exerciseRightsContact: 'iodo@browin.pl',
      supervisoryAuthority: 'Masz również prawo wniesienia skargi do organu nadzorczego -',
      supervisoryAuthorityName: 'Prezesa Urzędu Ochrony Danych Osobowych (PUODO)',
    },

    section9: {
      title: 'Pliki cookies',
      intro: 'Serwis Chataptor wykorzystuje pliki cookies (ciasteczka) w celu zapewnienia prawidłowego działania, analizy ruchu oraz personalizacji treści.',
      cookieTypesTitle: 'Rodzaje cookies',
      cookieTypes: [
        { type: 'Niezbędne', description: 'Wymagane do działania serwisu (sesja, autoryzacja)' },
        { type: 'Funkcjonalne', description: 'Zapamiętywanie preferencji użytkownika' },
        { type: 'Analityczne', description: 'Google Analytics (z anonimizacją IP)' },
        { type: 'Marketingowe', description: 'Google Ads (za zgodą użytkownika)' },
      ],
      manageCookiesTitle: 'Zarządzanie cookies',
      manageCookiesDescription: 'Możesz zarządzać cookies poprzez ustawienia swojej przeglądarki. Pamiętaj, że wyłączenie niektórych cookies może wpłynąć na funkcjonalność serwisu.',
    },

    section10: {
      title: 'Bezpieczeństwo danych',
      intro: 'Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony Twoich danych:',
      measures: [
        'Szyfrowanie połączeń (SSL/TLS)',
        'Szyfrowanie danych w spoczynku',
        'Regularne kopie zapasowe',
        'Kontrola dostępu oparta na rolach',
        'Monitorowanie i wykrywanie zagrożeń',
        'Regularne audyty bezpieczeństwa',
      ],
    },

    section11: {
      title: 'Zmiany polityki prywatności',
      content: 'Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. O istotnych zmianach poinformujemy Cię poprzez',
      notificationEmail: 'wiadomość e-mail',
      notificationSite: 'komunikat w serwisie',
      recommendation: 'Zalecamy regularne sprawdzanie tej strony.',
    },

    section12: {
      title: 'Kontakt',
      intro: 'W razie pytań dotyczących niniejszej Polityki Prywatności, prosimy o kontakt:',
      companyNameShort: 'BROWIN Sp. z o.o. Sp.k.',
      address: 'ul. Pryncypalna 129/141, 93-373 Łódź',
      emailDpoLabel: 'E-mail (IODO):',
      emailGeneralLabel: 'E-mail (ogólny):',
      phoneLabel: 'Telefon:',
    },

    footer: {
      tagline: 'Brama na świat dla Twojego e-commerce. Przełamujemy bariery językowe, łącząc AI z ludzką empatią.',
      contactTitle: 'Kontakt',
      legalTitle: 'Legal',
      privacyPolicy: 'Polityka prywatności',
      terms: 'Regulamin',
      allRightsReserved: 'Wszystkie prawa zastrzeżone.',
    },
  },

  // ============================================================================
  // ENGLISH (EN)
  // ============================================================================
  en: {
    pageTitle: 'Privacy Policy | Chataptor',
    metaDescription: 'Chataptor Privacy Policy - Information about personal data processing',
    backToHome: 'Home',
    tableOfContents: 'Table of Contents',
    questionsAboutData: 'Questions about your data?',
    dataProtectionBadge: 'Data Protection',
    privacyPolicyTitle: 'Privacy Policy',
    lastUpdated: 'Last updated: January 29, 2026',
    introTitle: 'Your privacy is our priority',
    introDescription: 'This Privacy Policy explains what data we collect, how we process it, and what rights you have.',

    toc: {
      section1: 'Data Controller',
      section2: 'Contact',
      section3: 'Scope of Data',
      section4: 'Processing Purposes',
      section5: 'Data Recipients',
      section6: 'Transfer Outside EEA',
      section7: 'Retention Period',
      section8: 'Your Rights',
      section9: 'Cookies',
      section10: 'Security',
      section11: 'Policy Changes',
      section12: 'Final Contact',
    },

    section1: {
      title: 'Data Controller',
      intro: 'The controller of your personal data is:',
      companyName: 'BROWIN Spółka z ograniczoną odpowiedzialnością Spółka komandytowa',
      address: 'ul. Pryncypalna 129/141',
      city: '93-373 Łódź, Poland',
      nipLabel: 'Tax ID (NIP)',
      regonLabel: 'REGON',
      krsLabel: 'KRS',
      bdoLabel: 'BDO',
    },

    section2: {
      title: 'Contact for Data Protection Matters',
      intro: 'For matters related to personal data protection, you can contact us:',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      faxLabel: 'Fax',
      addressLabel: 'Address',
    },

    section3: {
      title: 'Scope of Data Collected',
      intro: 'When using the Chataptor service, we may collect the following categories of data:',
      userProvidedTitle: 'Data provided by the user',
      userProvidedItems: [
        'Name and surname',
        'Email address',
        'Phone number',
        'Company name and position',
        'Message content in conversations',
      ],
      automaticDataTitle: 'Data collected automatically',
      automaticDataItems: [
        'IP address',
        'Browser type and version',
        'Operating system',
        'Screen resolution',
        'Time and date of visit',
        'Pages viewed',
        'Traffic source (referrer)',
      ],
    },

    section4: {
      title: 'Purposes of Data Processing',
      intro: 'We process your personal data for the following purposes:',
      purposes: [
        { title: 'Service Provision', description: 'Chat support, message translation, platform functionality', legalBasis: 'Art. 6(1)(b) GDPR' },
        { title: 'Communication', description: 'Responding to inquiries, technical support', legalBasis: 'Art. 6(1)(b) and (f) GDPR' },
        { title: 'Analytics', description: 'Improving service quality, platform optimization', legalBasis: 'Art. 6(1)(f) GDPR' },
        { title: 'Marketing', description: 'Sending commercial information with your consent', legalBasis: 'Art. 6(1)(a) GDPR' },
        { title: 'Security', description: 'Detecting abuse, protection against attacks', legalBasis: 'Art. 6(1)(f) GDPR' },
        { title: 'Legal Obligations', description: 'Fulfilling obligations under applicable law', legalBasis: 'Art. 6(1)(c) GDPR' },
      ],
    },

    section5: {
      title: 'Data Recipients',
      intro: 'Your data may be shared with the following categories of recipients:',
      recipients: [
        { title: 'IT Service Providers', description: 'Hosting, cloud data storage' },
        { title: 'Translation Services', description: 'Machine translation APIs (DeepL, OpenAI)' },
        { title: 'Analytics Tools', description: 'Google Analytics (with IP anonymization)' },
        { title: 'Public Authorities', description: 'When required by law' },
      ],
    },

    section6: {
      title: 'Data Transfer Outside EEA',
      content: 'In some cases, your data may be transferred outside the European Economic Area (EEA), e.g., to servers located in the USA. In such cases, we apply appropriate safeguards, including',
      standardClauses: 'standard contractual clauses',
    },

    section7: {
      title: 'Data Retention Period',
      intro: 'We retain your data for the period necessary to fulfill processing purposes:',
      tableHeaders: {
        dataType: 'Data Type',
        retentionPeriod: 'Retention Period',
      },
      retentionData: [
        { dataType: 'Account data', period: 'Duration of use + 3 years' },
        { dataType: 'Conversation history', period: 'Duration of use + 1 year' },
        { dataType: 'Analytics data', period: 'Maximum 26 months' },
        { dataType: 'Billing data', period: '5 years (tax regulations)' },
      ],
    },

    section8: {
      title: 'Your Rights',
      intro: 'Under GDPR, you have the following rights:',
      rights: [
        { title: 'Right of Access', description: 'You can obtain information about your processed data' },
        { title: 'Right to Rectification', description: 'You can request correction of inaccurate data' },
        { title: 'Right to Erasure', description: 'You can request deletion of data ("right to be forgotten")' },
        { title: 'Right to Restriction', description: 'You can request restriction of processing' },
        { title: 'Right to Data Portability', description: 'You can receive data in a machine-readable format' },
        { title: 'Right to Object', description: 'You can object to data processing' },
      ],
      exerciseRightsIntro: 'To exercise these rights, please contact us at',
      exerciseRightsContact: 'iodo@browin.pl',
      supervisoryAuthority: 'You also have the right to lodge a complaint with a supervisory authority -',
      supervisoryAuthorityName: 'the President of the Personal Data Protection Office (PUODO)',
    },

    section9: {
      title: 'Cookies',
      intro: 'Chataptor uses cookies to ensure proper operation, analyze traffic, and personalize content.',
      cookieTypesTitle: 'Types of Cookies',
      cookieTypes: [
        { type: 'Essential', description: 'Required for site operation (session, authorization)' },
        { type: 'Functional', description: 'Remembering user preferences' },
        { type: 'Analytical', description: 'Google Analytics (with IP anonymization)' },
        { type: 'Marketing', description: 'Google Ads (with user consent)' },
      ],
      manageCookiesTitle: 'Managing Cookies',
      manageCookiesDescription: 'You can manage cookies through your browser settings. Please note that disabling certain cookies may affect site functionality.',
    },

    section10: {
      title: 'Data Security',
      intro: 'We implement appropriate technical and organizational measures to protect your data:',
      measures: [
        'Connection encryption (SSL/TLS)',
        'Data encryption at rest',
        'Regular backups',
        'Role-based access control',
        'Threat monitoring and detection',
        'Regular security audits',
      ],
    },

    section11: {
      title: 'Privacy Policy Changes',
      content: 'We reserve the right to make changes to this Privacy Policy. We will notify you of significant changes via',
      notificationEmail: 'email',
      notificationSite: 'site notification',
      recommendation: 'We recommend regularly checking this page.',
    },

    section12: {
      title: 'Contact',
      intro: 'For questions regarding this Privacy Policy, please contact us:',
      companyNameShort: 'BROWIN Sp. z o.o. Sp.k.',
      address: 'ul. Pryncypalna 129/141, 93-373 Łódź',
      emailDpoLabel: 'Email (DPO):',
      emailGeneralLabel: 'Email (general):',
      phoneLabel: 'Phone:',
    },

    footer: {
      tagline: 'The gateway to the world for your e-commerce. Breaking language barriers by combining AI with human empathy.',
      contactTitle: 'Contact',
      legalTitle: 'Legal',
      privacyPolicy: 'Privacy Policy',
      terms: 'Terms of Service',
      allRightsReserved: 'All rights reserved.',
    },
  },

  // ============================================================================
  // GERMAN (DE)
  // ============================================================================
  de: {
    pageTitle: 'Datenschutzerklärung | Chataptor',
    metaDescription: 'Datenschutzerklärung von Chataptor - Informationen zur Verarbeitung personenbezogener Daten',
    backToHome: 'Startseite',
    tableOfContents: 'Inhaltsverzeichnis',
    questionsAboutData: 'Fragen zu Ihren Daten?',
    dataProtectionBadge: 'Datenschutz',
    privacyPolicyTitle: 'Datenschutzerklärung',
    lastUpdated: 'Letzte Aktualisierung: 29. Januar 2026',
    introTitle: 'Ihr Datenschutz hat für uns Priorität',
    introDescription: 'Diese Datenschutzerklärung erläutert, welche Daten wir erheben, wie wir sie verarbeiten und welche Rechte Ihnen zustehen.',

    toc: {
      section1: 'Verantwortlicher',
      section2: 'Kontakt',
      section3: 'Umfang der Daten',
      section4: 'Verarbeitungszwecke',
      section5: 'Datenempfänger',
      section6: 'Transfer außerhalb EWR',
      section7: 'Speicherdauer',
      section8: 'Ihre Rechte',
      section9: 'Cookies',
      section10: 'Sicherheit',
      section11: 'Änderungen',
      section12: 'Kontakt',
    },

    section1: {
      title: 'Verantwortlicher',
      intro: 'Verantwortlicher für die Verarbeitung Ihrer personenbezogenen Daten ist:',
      companyName: 'BROWIN Spółka z ograniczoną odpowiedzialnością Spółka komandytowa',
      address: 'ul. Pryncypalna 129/141',
      city: '93-373 Łódź, Polen',
      nipLabel: 'Steuer-ID (NIP)',
      regonLabel: 'REGON',
      krsLabel: 'KRS',
      bdoLabel: 'BDO',
    },

    section2: {
      title: 'Kontakt in Datenschutzangelegenheiten',
      intro: 'Bei Fragen zum Datenschutz können Sie uns wie folgt kontaktieren:',
      emailLabel: 'E-Mail',
      phoneLabel: 'Telefon',
      faxLabel: 'Fax',
      addressLabel: 'Adresse',
    },

    section3: {
      title: 'Umfang der erhobenen Daten',
      intro: 'Bei der Nutzung des Chataptor-Dienstes können wir folgende Datenkategorien erheben:',
      userProvidedTitle: 'Vom Benutzer bereitgestellte Daten',
      userProvidedItems: [
        'Vor- und Nachname',
        'E-Mail-Adresse',
        'Telefonnummer',
        'Firmenname und Position',
        'Nachrichteninhalte in Konversationen',
      ],
      automaticDataTitle: 'Automatisch erhobene Daten',
      automaticDataItems: [
        'IP-Adresse',
        'Browsertyp und -version',
        'Betriebssystem',
        'Bildschirmauflösung',
        'Uhrzeit und Datum des Besuchs',
        'Besuchte Seiten',
        'Verkehrsquelle (Referrer)',
      ],
    },

    section4: {
      title: 'Zwecke der Datenverarbeitung',
      intro: 'Wir verarbeiten Ihre personenbezogenen Daten zu folgenden Zwecken:',
      purposes: [
        { title: 'Diensterbringung', description: 'Chat-Support, Nachrichtenübersetzung, Plattformfunktionen', legalBasis: 'Art. 6 Abs. 1 lit. b DSGVO' },
        { title: 'Kommunikation', description: 'Beantwortung von Anfragen, technischer Support', legalBasis: 'Art. 6 Abs. 1 lit. b und f DSGVO' },
        { title: 'Analytik', description: 'Verbesserung der Servicequalität, Plattformoptimierung', legalBasis: 'Art. 6 Abs. 1 lit. f DSGVO' },
        { title: 'Marketing', description: 'Versand von Werbeinformationen mit Ihrer Einwilligung', legalBasis: 'Art. 6 Abs. 1 lit. a DSGVO' },
        { title: 'Sicherheit', description: 'Erkennung von Missbrauch, Schutz vor Angriffen', legalBasis: 'Art. 6 Abs. 1 lit. f DSGVO' },
        { title: 'Rechtliche Pflichten', description: 'Erfüllung gesetzlicher Verpflichtungen', legalBasis: 'Art. 6 Abs. 1 lit. c DSGVO' },
      ],
    },

    section5: {
      title: 'Datenempfänger',
      intro: 'Ihre Daten können an folgende Empfängerkategorien weitergegeben werden:',
      recipients: [
        { title: 'IT-Dienstleister', description: 'Hosting, Cloud-Datenspeicherung' },
        { title: 'Übersetzungsdienste', description: 'Maschinelle Übersetzungs-APIs (DeepL, OpenAI)' },
        { title: 'Analyse-Tools', description: 'Google Analytics (mit IP-Anonymisierung)' },
        { title: 'Behörden', description: 'Wenn gesetzlich vorgeschrieben' },
      ],
    },

    section6: {
      title: 'Datenübermittlung außerhalb des EWR',
      content: 'In einigen Fällen können Ihre Daten außerhalb des Europäischen Wirtschaftsraums (EWR) übermittelt werden, z. B. an Server in den USA. In solchen Fällen wenden wir geeignete Schutzmaßnahmen an, einschließlich',
      standardClauses: 'Standardvertragsklauseln',
    },

    section7: {
      title: 'Speicherdauer',
      intro: 'Wir speichern Ihre Daten für den Zeitraum, der zur Erfüllung der Verarbeitungszwecke erforderlich ist:',
      tableHeaders: {
        dataType: 'Datenart',
        retentionPeriod: 'Speicherdauer',
      },
      retentionData: [
        { dataType: 'Kontodaten', period: 'Nutzungsdauer + 3 Jahre' },
        { dataType: 'Konversationsverlauf', period: 'Nutzungsdauer + 1 Jahr' },
        { dataType: 'Analysedaten', period: 'Maximal 26 Monate' },
        { dataType: 'Abrechnungsdaten', period: '5 Jahre (Steuervorschriften)' },
      ],
    },

    section8: {
      title: 'Ihre Rechte',
      intro: 'Gemäß DSGVO stehen Ihnen folgende Rechte zu:',
      rights: [
        { title: 'Auskunftsrecht', description: 'Sie können Auskunft über Ihre verarbeiteten Daten erhalten' },
        { title: 'Recht auf Berichtigung', description: 'Sie können die Berichtigung unrichtiger Daten verlangen' },
        { title: 'Recht auf Löschung', description: 'Sie können die Löschung Ihrer Daten verlangen ("Recht auf Vergessenwerden")' },
        { title: 'Recht auf Einschränkung', description: 'Sie können die Einschränkung der Verarbeitung verlangen' },
        { title: 'Recht auf Datenübertragbarkeit', description: 'Sie können Ihre Daten in einem maschinenlesbaren Format erhalten' },
        { title: 'Widerspruchsrecht', description: 'Sie können der Datenverarbeitung widersprechen' },
      ],
      exerciseRightsIntro: 'Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter',
      exerciseRightsContact: 'iodo@browin.pl',
      supervisoryAuthority: 'Sie haben außerdem das Recht, Beschwerde bei einer Aufsichtsbehörde einzulegen -',
      supervisoryAuthorityName: 'dem Präsidenten des Amtes für den Schutz personenbezogener Daten (PUODO)',
    },

    section9: {
      title: 'Cookies',
      intro: 'Chataptor verwendet Cookies, um den ordnungsgemäßen Betrieb zu gewährleisten, den Verkehr zu analysieren und Inhalte zu personalisieren.',
      cookieTypesTitle: 'Cookie-Arten',
      cookieTypes: [
        { type: 'Notwendig', description: 'Erforderlich für den Seitenbetrieb (Sitzung, Autorisierung)' },
        { type: 'Funktional', description: 'Speichern von Benutzereinstellungen' },
        { type: 'Analytisch', description: 'Google Analytics (mit IP-Anonymisierung)' },
        { type: 'Marketing', description: 'Google Ads (mit Benutzereinwilligung)' },
      ],
      manageCookiesTitle: 'Cookie-Verwaltung',
      manageCookiesDescription: 'Sie können Cookies über Ihre Browsereinstellungen verwalten. Bitte beachten Sie, dass das Deaktivieren bestimmter Cookies die Funktionalität der Website beeinträchtigen kann.',
    },

    section10: {
      title: 'Datensicherheit',
      intro: 'Wir setzen geeignete technische und organisatorische Maßnahmen zum Schutz Ihrer Daten ein:',
      measures: [
        'Verbindungsverschlüsselung (SSL/TLS)',
        'Verschlüsselung ruhender Daten',
        'Regelmäßige Backups',
        'Rollenbasierte Zugriffskontrolle',
        'Bedrohungsüberwachung und -erkennung',
        'Regelmäßige Sicherheitsaudits',
      ],
    },

    section11: {
      title: 'Änderungen der Datenschutzerklärung',
      content: 'Wir behalten uns das Recht vor, diese Datenschutzerklärung zu ändern. Über wesentliche Änderungen informieren wir Sie per',
      notificationEmail: 'E-Mail',
      notificationSite: 'Benachrichtigung auf der Website',
      recommendation: 'Wir empfehlen, diese Seite regelmäßig zu überprüfen.',
    },

    section12: {
      title: 'Kontakt',
      intro: 'Bei Fragen zu dieser Datenschutzerklärung kontaktieren Sie uns bitte:',
      companyNameShort: 'BROWIN Sp. z o.o. Sp.k.',
      address: 'ul. Pryncypalna 129/141, 93-373 Łódź',
      emailDpoLabel: 'E-Mail (DSB):',
      emailGeneralLabel: 'E-Mail (allgemein):',
      phoneLabel: 'Telefon:',
    },

    footer: {
      tagline: 'Das Tor zur Welt für Ihren E-Commerce. Wir überwinden Sprachbarrieren durch die Verbindung von KI mit menschlicher Empathie.',
      contactTitle: 'Kontakt',
      legalTitle: 'Rechtliches',
      privacyPolicy: 'Datenschutzerklärung',
      terms: 'AGB',
      allRightsReserved: 'Alle Rechte vorbehalten.',
    },
  },

  // ============================================================================
  // FRENCH (FR)
  // ============================================================================
  fr: {
    pageTitle: 'Politique de Confidentialité | Chataptor',
    metaDescription: 'Politique de confidentialité de Chataptor - Informations sur le traitement des données personnelles',
    backToHome: 'Accueil',
    tableOfContents: 'Table des matières',
    questionsAboutData: 'Questions sur vos données ?',
    dataProtectionBadge: 'Protection des données',
    privacyPolicyTitle: 'Politique de Confidentialité',
    lastUpdated: 'Dernière mise à jour : 29 janvier 2026',
    introTitle: 'Votre vie privée est notre priorité',
    introDescription: 'Cette Politique de Confidentialité explique quelles données nous collectons, comment nous les traitons et quels droits vous avez.',

    toc: {
      section1: 'Responsable du traitement',
      section2: 'Contact',
      section3: 'Données collectées',
      section4: 'Finalités du traitement',
      section5: 'Destinataires des données',
      section6: 'Transfert hors EEE',
      section7: 'Durée de conservation',
      section8: 'Vos droits',
      section9: 'Cookies',
      section10: 'Sécurité',
      section11: 'Modifications',
      section12: 'Contact final',
    },

    section1: {
      title: 'Responsable du traitement',
      intro: 'Le responsable du traitement de vos données personnelles est :',
      companyName: 'BROWIN Spółka z ograniczoną odpowiedzialnością Spółka komandytowa',
      address: 'ul. Pryncypalna 129/141',
      city: '93-373 Łódź, Pologne',
      nipLabel: 'N° fiscal (NIP)',
      regonLabel: 'REGON',
      krsLabel: 'KRS',
      bdoLabel: 'BDO',
    },

    section2: {
      title: 'Contact pour les questions de protection des données',
      intro: 'Pour les questions relatives à la protection des données personnelles, vous pouvez nous contacter :',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      faxLabel: 'Fax',
      addressLabel: 'Adresse',
    },

    section3: {
      title: 'Données collectées',
      intro: 'Lors de l\'utilisation du service Chataptor, nous pouvons collecter les catégories de données suivantes :',
      userProvidedTitle: 'Données fournies par l\'utilisateur',
      userProvidedItems: [
        'Nom et prénom',
        'Adresse e-mail',
        'Numéro de téléphone',
        'Nom de l\'entreprise et fonction',
        'Contenu des messages dans les conversations',
      ],
      automaticDataTitle: 'Données collectées automatiquement',
      automaticDataItems: [
        'Adresse IP',
        'Type et version du navigateur',
        'Système d\'exploitation',
        'Résolution d\'écran',
        'Date et heure de visite',
        'Pages consultées',
        'Source du trafic (référent)',
      ],
    },

    section4: {
      title: 'Finalités du traitement',
      intro: 'Nous traitons vos données personnelles aux fins suivantes :',
      purposes: [
        { title: 'Fourniture de services', description: 'Support chat, traduction des messages, fonctionnalités de la plateforme', legalBasis: 'Art. 6(1)(b) RGPD' },
        { title: 'Communication', description: 'Réponse aux demandes, support technique', legalBasis: 'Art. 6(1)(b) et (f) RGPD' },
        { title: 'Analytique', description: 'Amélioration de la qualité du service, optimisation de la plateforme', legalBasis: 'Art. 6(1)(f) RGPD' },
        { title: 'Marketing', description: 'Envoi d\'informations commerciales avec votre consentement', legalBasis: 'Art. 6(1)(a) RGPD' },
        { title: 'Sécurité', description: 'Détection des abus, protection contre les attaques', legalBasis: 'Art. 6(1)(f) RGPD' },
        { title: 'Obligations légales', description: 'Respect des obligations légales applicables', legalBasis: 'Art. 6(1)(c) RGPD' },
      ],
    },

    section5: {
      title: 'Destinataires des données',
      intro: 'Vos données peuvent être partagées avec les catégories de destinataires suivantes :',
      recipients: [
        { title: 'Prestataires informatiques', description: 'Hébergement, stockage cloud des données' },
        { title: 'Services de traduction', description: 'API de traduction automatique (DeepL, OpenAI)' },
        { title: 'Outils d\'analyse', description: 'Google Analytics (avec anonymisation IP)' },
        { title: 'Autorités publiques', description: 'Lorsque la loi l\'exige' },
      ],
    },

    section6: {
      title: 'Transfert de données hors EEE',
      content: 'Dans certains cas, vos données peuvent être transférées en dehors de l\'Espace Économique Européen (EEE), par exemple vers des serveurs situés aux États-Unis. Dans ces cas, nous appliquons des garanties appropriées, notamment les',
      standardClauses: 'clauses contractuelles types',
    },

    section7: {
      title: 'Durée de conservation',
      intro: 'Nous conservons vos données pendant la durée nécessaire aux finalités du traitement :',
      tableHeaders: {
        dataType: 'Type de données',
        retentionPeriod: 'Durée de conservation',
      },
      retentionData: [
        { dataType: 'Données de compte', period: 'Durée d\'utilisation + 3 ans' },
        { dataType: 'Historique des conversations', period: 'Durée d\'utilisation + 1 an' },
        { dataType: 'Données analytiques', period: 'Maximum 26 mois' },
        { dataType: 'Données de facturation', period: '5 ans (réglementations fiscales)' },
      ],
    },

    section8: {
      title: 'Vos droits',
      intro: 'Conformément au RGPD, vous disposez des droits suivants :',
      rights: [
        { title: 'Droit d\'accès', description: 'Vous pouvez obtenir des informations sur vos données traitées' },
        { title: 'Droit de rectification', description: 'Vous pouvez demander la correction de données inexactes' },
        { title: 'Droit à l\'effacement', description: 'Vous pouvez demander la suppression de vos données ("droit à l\'oubli")' },
        { title: 'Droit à la limitation', description: 'Vous pouvez demander la limitation du traitement' },
        { title: 'Droit à la portabilité', description: 'Vous pouvez recevoir vos données dans un format lisible par machine' },
        { title: 'Droit d\'opposition', description: 'Vous pouvez vous opposer au traitement des données' },
      ],
      exerciseRightsIntro: 'Pour exercer ces droits, veuillez nous contacter à',
      exerciseRightsContact: 'iodo@browin.pl',
      supervisoryAuthority: 'Vous avez également le droit de déposer une plainte auprès d\'une autorité de contrôle -',
      supervisoryAuthorityName: 'le Président de l\'Office de Protection des Données Personnelles (PUODO)',
    },

    section9: {
      title: 'Cookies',
      intro: 'Chataptor utilise des cookies pour assurer le bon fonctionnement, analyser le trafic et personnaliser le contenu.',
      cookieTypesTitle: 'Types de cookies',
      cookieTypes: [
        { type: 'Essentiels', description: 'Nécessaires au fonctionnement du site (session, autorisation)' },
        { type: 'Fonctionnels', description: 'Mémorisation des préférences utilisateur' },
        { type: 'Analytiques', description: 'Google Analytics (avec anonymisation IP)' },
        { type: 'Marketing', description: 'Google Ads (avec consentement de l\'utilisateur)' },
      ],
      manageCookiesTitle: 'Gestion des cookies',
      manageCookiesDescription: 'Vous pouvez gérer les cookies via les paramètres de votre navigateur. Notez que la désactivation de certains cookies peut affecter la fonctionnalité du site.',
    },

    section10: {
      title: 'Sécurité des données',
      intro: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :',
      measures: [
        'Chiffrement des connexions (SSL/TLS)',
        'Chiffrement des données au repos',
        'Sauvegardes régulières',
        'Contrôle d\'accès basé sur les rôles',
        'Surveillance et détection des menaces',
        'Audits de sécurité réguliers',
      ],
    },

    section11: {
      title: 'Modifications de la politique de confidentialité',
      content: 'Nous nous réservons le droit de modifier cette Politique de Confidentialité. Nous vous informerons des modifications importantes par',
      notificationEmail: 'e-mail',
      notificationSite: 'notification sur le site',
      recommendation: 'Nous vous recommandons de consulter régulièrement cette page.',
    },

    section12: {
      title: 'Contact',
      intro: 'Pour toute question concernant cette Politique de Confidentialité, veuillez nous contacter :',
      companyNameShort: 'BROWIN Sp. z o.o. Sp.k.',
      address: 'ul. Pryncypalna 129/141, 93-373 Łódź',
      emailDpoLabel: 'E-mail (DPO) :',
      emailGeneralLabel: 'E-mail (général) :',
      phoneLabel: 'Téléphone :',
    },

    footer: {
      tagline: 'La porte vers le monde pour votre e-commerce. Nous brisons les barrières linguistiques en combinant l\'IA avec l\'empathie humaine.',
      contactTitle: 'Contact',
      legalTitle: 'Mentions légales',
      privacyPolicy: 'Politique de confidentialité',
      terms: 'Conditions générales',
      allRightsReserved: 'Tous droits réservés.',
    },
  },

  // ============================================================================
  // SPANISH (ES)
  // ============================================================================
  es: {
    pageTitle: 'Política de Privacidad | Chataptor',
    metaDescription: 'Política de privacidad de Chataptor - Información sobre el tratamiento de datos personales',
    backToHome: 'Inicio',
    tableOfContents: 'Índice',
    questionsAboutData: '¿Preguntas sobre sus datos?',
    dataProtectionBadge: 'Protección de datos',
    privacyPolicyTitle: 'Política de Privacidad',
    lastUpdated: 'Última actualización: 29 de enero de 2026',
    introTitle: 'Su privacidad es nuestra prioridad',
    introDescription: 'Esta Política de Privacidad explica qué datos recopilamos, cómo los procesamos y qué derechos tiene usted.',

    toc: {
      section1: 'Responsable del tratamiento',
      section2: 'Contacto',
      section3: 'Datos recopilados',
      section4: 'Finalidades del tratamiento',
      section5: 'Destinatarios de datos',
      section6: 'Transferencias fuera del EEE',
      section7: 'Período de conservación',
      section8: 'Sus derechos',
      section9: 'Cookies',
      section10: 'Seguridad',
      section11: 'Cambios en la política',
      section12: 'Contacto final',
    },

    section1: {
      title: 'Responsable del tratamiento',
      intro: 'El responsable del tratamiento de sus datos personales es:',
      companyName: 'BROWIN Spółka z ograniczoną odpowiedzialnością Spółka komandytowa',
      address: 'ul. Pryncypalna 129/141',
      city: '93-373 Łódź, Polonia',
      nipLabel: 'NIF (NIP)',
      regonLabel: 'REGON',
      krsLabel: 'KRS',
      bdoLabel: 'BDO',
    },

    section2: {
      title: 'Contacto para asuntos de protección de datos',
      intro: 'Para asuntos relacionados con la protección de datos personales, puede contactarnos:',
      emailLabel: 'Correo electrónico',
      phoneLabel: 'Teléfono',
      faxLabel: 'Fax',
      addressLabel: 'Dirección',
    },

    section3: {
      title: 'Datos recopilados',
      intro: 'Al utilizar el servicio Chataptor, podemos recopilar las siguientes categorías de datos:',
      userProvidedTitle: 'Datos proporcionados por el usuario',
      userProvidedItems: [
        'Nombre y apellidos',
        'Dirección de correo electrónico',
        'Número de teléfono',
        'Nombre de la empresa y cargo',
        'Contenido de mensajes en conversaciones',
      ],
      automaticDataTitle: 'Datos recopilados automáticamente',
      automaticDataItems: [
        'Dirección IP',
        'Tipo y versión del navegador',
        'Sistema operativo',
        'Resolución de pantalla',
        'Fecha y hora de visita',
        'Páginas visitadas',
        'Fuente de tráfico (referente)',
      ],
    },

    section4: {
      title: 'Finalidades del tratamiento',
      intro: 'Tratamos sus datos personales con las siguientes finalidades:',
      purposes: [
        { title: 'Prestación de servicios', description: 'Soporte de chat, traducción de mensajes, funcionalidad de la plataforma', legalBasis: 'Art. 6(1)(b) RGPD' },
        { title: 'Comunicación', description: 'Respuesta a consultas, soporte técnico', legalBasis: 'Art. 6(1)(b) y (f) RGPD' },
        { title: 'Analítica', description: 'Mejora de la calidad del servicio, optimización de la plataforma', legalBasis: 'Art. 6(1)(f) RGPD' },
        { title: 'Marketing', description: 'Envío de información comercial con su consentimiento', legalBasis: 'Art. 6(1)(a) RGPD' },
        { title: 'Seguridad', description: 'Detección de abusos, protección contra ataques', legalBasis: 'Art. 6(1)(f) RGPD' },
        { title: 'Obligaciones legales', description: 'Cumplimiento de obligaciones legales aplicables', legalBasis: 'Art. 6(1)(c) RGPD' },
      ],
    },

    section5: {
      title: 'Destinatarios de datos',
      intro: 'Sus datos pueden compartirse con las siguientes categorías de destinatarios:',
      recipients: [
        { title: 'Proveedores de servicios TI', description: 'Alojamiento, almacenamiento en la nube' },
        { title: 'Servicios de traducción', description: 'APIs de traducción automática (DeepL, OpenAI)' },
        { title: 'Herramientas analíticas', description: 'Google Analytics (con anonimización de IP)' },
        { title: 'Autoridades públicas', description: 'Cuando lo exija la ley' },
      ],
    },

    section6: {
      title: 'Transferencias de datos fuera del EEE',
      content: 'En algunos casos, sus datos pueden transferirse fuera del Espacio Económico Europeo (EEE), por ejemplo, a servidores ubicados en EE. UU. En tales casos, aplicamos las garantías adecuadas, incluidas las',
      standardClauses: 'cláusulas contractuales tipo',
    },

    section7: {
      title: 'Período de conservación',
      intro: 'Conservamos sus datos durante el período necesario para cumplir las finalidades del tratamiento:',
      tableHeaders: {
        dataType: 'Tipo de datos',
        retentionPeriod: 'Período de conservación',
      },
      retentionData: [
        { dataType: 'Datos de cuenta', period: 'Duración del uso + 3 años' },
        { dataType: 'Historial de conversaciones', period: 'Duración del uso + 1 año' },
        { dataType: 'Datos analíticos', period: 'Máximo 26 meses' },
        { dataType: 'Datos de facturación', period: '5 años (normativa fiscal)' },
      ],
    },

    section8: {
      title: 'Sus derechos',
      intro: 'Según el RGPD, usted tiene los siguientes derechos:',
      rights: [
        { title: 'Derecho de acceso', description: 'Puede obtener información sobre sus datos tratados' },
        { title: 'Derecho de rectificación', description: 'Puede solicitar la corrección de datos inexactos' },
        { title: 'Derecho de supresión', description: 'Puede solicitar la eliminación de sus datos ("derecho al olvido")' },
        { title: 'Derecho a la limitación', description: 'Puede solicitar la limitación del tratamiento' },
        { title: 'Derecho a la portabilidad', description: 'Puede recibir sus datos en un formato legible por máquina' },
        { title: 'Derecho de oposición', description: 'Puede oponerse al tratamiento de datos' },
      ],
      exerciseRightsIntro: 'Para ejercer estos derechos, contáctenos en',
      exerciseRightsContact: 'iodo@browin.pl',
      supervisoryAuthority: 'También tiene derecho a presentar una reclamación ante una autoridad de control -',
      supervisoryAuthorityName: 'el Presidente de la Oficina de Protección de Datos Personales (PUODO)',
    },

    section9: {
      title: 'Cookies',
      intro: 'Chataptor utiliza cookies para garantizar el funcionamiento correcto, analizar el tráfico y personalizar el contenido.',
      cookieTypesTitle: 'Tipos de cookies',
      cookieTypes: [
        { type: 'Esenciales', description: 'Necesarias para el funcionamiento del sitio (sesión, autorización)' },
        { type: 'Funcionales', description: 'Recordar preferencias del usuario' },
        { type: 'Analíticas', description: 'Google Analytics (con anonimización de IP)' },
        { type: 'Marketing', description: 'Google Ads (con consentimiento del usuario)' },
      ],
      manageCookiesTitle: 'Gestión de cookies',
      manageCookiesDescription: 'Puede gestionar las cookies a través de la configuración de su navegador. Tenga en cuenta que desactivar ciertas cookies puede afectar la funcionalidad del sitio.',
    },

    section10: {
      title: 'Seguridad de los datos',
      intro: 'Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos:',
      measures: [
        'Cifrado de conexiones (SSL/TLS)',
        'Cifrado de datos en reposo',
        'Copias de seguridad regulares',
        'Control de acceso basado en roles',
        'Monitorización y detección de amenazas',
        'Auditorías de seguridad regulares',
      ],
    },

    section11: {
      title: 'Cambios en la política de privacidad',
      content: 'Nos reservamos el derecho de realizar cambios en esta Política de Privacidad. Le notificaremos cambios significativos mediante',
      notificationEmail: 'correo electrónico',
      notificationSite: 'notificación en el sitio',
      recommendation: 'Recomendamos revisar esta página periódicamente.',
    },

    section12: {
      title: 'Contacto',
      intro: 'Para preguntas sobre esta Política de Privacidad, contáctenos:',
      companyNameShort: 'BROWIN Sp. z o.o. Sp.k.',
      address: 'ul. Pryncypalna 129/141, 93-373 Łódź',
      emailDpoLabel: 'Correo (DPD):',
      emailGeneralLabel: 'Correo (general):',
      phoneLabel: 'Teléfono:',
    },

    footer: {
      tagline: 'La puerta al mundo para su e-commerce. Rompemos las barreras lingüísticas combinando IA con empatía humana.',
      contactTitle: 'Contacto',
      legalTitle: 'Legal',
      privacyPolicy: 'Política de privacidad',
      terms: 'Términos de servicio',
      allRightsReserved: 'Todos los derechos reservados.',
    },
  },

  // ============================================================================
  // ITALIAN (IT)
  // ============================================================================
  it: {
    pageTitle: 'Informativa sulla Privacy | Chataptor',
    metaDescription: 'Informativa sulla privacy di Chataptor - Informazioni sul trattamento dei dati personali',
    backToHome: 'Home',
    tableOfContents: 'Indice',
    questionsAboutData: 'Domande sui tuoi dati?',
    dataProtectionBadge: 'Protezione dei dati',
    privacyPolicyTitle: 'Informativa sulla Privacy',
    lastUpdated: 'Ultimo aggiornamento: 29 gennaio 2026',
    introTitle: 'La tua privacy è la nostra priorità',
    introDescription: 'Questa Informativa sulla Privacy spiega quali dati raccogliamo, come li trattiamo e quali diritti hai.',

    toc: {
      section1: 'Titolare del trattamento',
      section2: 'Contatto',
      section3: 'Dati raccolti',
      section4: 'Finalità del trattamento',
      section5: 'Destinatari dei dati',
      section6: 'Trasferimento fuori SEE',
      section7: 'Periodo di conservazione',
      section8: 'I tuoi diritti',
      section9: 'Cookie',
      section10: 'Sicurezza',
      section11: 'Modifiche',
      section12: 'Contatto finale',
    },

    section1: {
      title: 'Titolare del trattamento',
      intro: 'Il titolare del trattamento dei tuoi dati personali è:',
      companyName: 'BROWIN Spółka z ograniczoną odpowiedzialnością Spółka komandytowa',
      address: 'ul. Pryncypalna 129/141',
      city: '93-373 Łódź, Polonia',
      nipLabel: 'P.IVA (NIP)',
      regonLabel: 'REGON',
      krsLabel: 'KRS',
      bdoLabel: 'BDO',
    },

    section2: {
      title: 'Contatto per questioni sulla protezione dei dati',
      intro: 'Per questioni relative alla protezione dei dati personali, puoi contattarci:',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefono',
      faxLabel: 'Fax',
      addressLabel: 'Indirizzo',
    },

    section3: {
      title: 'Dati raccolti',
      intro: 'Utilizzando il servizio Chataptor, possiamo raccogliere le seguenti categorie di dati:',
      userProvidedTitle: 'Dati forniti dall\'utente',
      userProvidedItems: [
        'Nome e cognome',
        'Indirizzo e-mail',
        'Numero di telefono',
        'Nome dell\'azienda e posizione',
        'Contenuto dei messaggi nelle conversazioni',
      ],
      automaticDataTitle: 'Dati raccolti automaticamente',
      automaticDataItems: [
        'Indirizzo IP',
        'Tipo e versione del browser',
        'Sistema operativo',
        'Risoluzione dello schermo',
        'Data e ora della visita',
        'Pagine visitate',
        'Fonte del traffico (referrer)',
      ],
    },

    section4: {
      title: 'Finalità del trattamento',
      intro: 'Trattiamo i tuoi dati personali per le seguenti finalità:',
      purposes: [
        { title: 'Erogazione dei servizi', description: 'Supporto chat, traduzione messaggi, funzionalità della piattaforma', legalBasis: 'Art. 6(1)(b) GDPR' },
        { title: 'Comunicazione', description: 'Risposta alle richieste, supporto tecnico', legalBasis: 'Art. 6(1)(b) e (f) GDPR' },
        { title: 'Analisi', description: 'Miglioramento della qualità del servizio, ottimizzazione della piattaforma', legalBasis: 'Art. 6(1)(f) GDPR' },
        { title: 'Marketing', description: 'Invio di informazioni commerciali con il tuo consenso', legalBasis: 'Art. 6(1)(a) GDPR' },
        { title: 'Sicurezza', description: 'Rilevamento abusi, protezione da attacchi', legalBasis: 'Art. 6(1)(f) GDPR' },
        { title: 'Obblighi legali', description: 'Adempimento degli obblighi di legge', legalBasis: 'Art. 6(1)(c) GDPR' },
      ],
    },

    section5: {
      title: 'Destinatari dei dati',
      intro: 'I tuoi dati possono essere condivisi con le seguenti categorie di destinatari:',
      recipients: [
        { title: 'Fornitori di servizi IT', description: 'Hosting, archiviazione cloud dei dati' },
        { title: 'Servizi di traduzione', description: 'API di traduzione automatica (DeepL, OpenAI)' },
        { title: 'Strumenti analitici', description: 'Google Analytics (con anonimizzazione IP)' },
        { title: 'Autorità pubbliche', description: 'Quando richiesto dalla legge' },
      ],
    },

    section6: {
      title: 'Trasferimento di dati al di fuori dello SEE',
      content: 'In alcuni casi, i tuoi dati possono essere trasferiti al di fuori dello Spazio Economico Europeo (SEE), ad esempio verso server situati negli USA. In tali casi, applichiamo le garanzie appropriate, comprese le',
      standardClauses: 'clausole contrattuali standard',
    },

    section7: {
      title: 'Periodo di conservazione',
      intro: 'Conserviamo i tuoi dati per il periodo necessario a soddisfare le finalità del trattamento:',
      tableHeaders: {
        dataType: 'Tipo di dati',
        retentionPeriod: 'Periodo di conservazione',
      },
      retentionData: [
        { dataType: 'Dati dell\'account', period: 'Durata dell\'utilizzo + 3 anni' },
        { dataType: 'Cronologia delle conversazioni', period: 'Durata dell\'utilizzo + 1 anno' },
        { dataType: 'Dati analitici', period: 'Massimo 26 mesi' },
        { dataType: 'Dati di fatturazione', period: '5 anni (normative fiscali)' },
      ],
    },

    section8: {
      title: 'I tuoi diritti',
      intro: 'Ai sensi del GDPR, hai i seguenti diritti:',
      rights: [
        { title: 'Diritto di accesso', description: 'Puoi ottenere informazioni sui dati trattati' },
        { title: 'Diritto di rettifica', description: 'Puoi richiedere la correzione di dati inesatti' },
        { title: 'Diritto alla cancellazione', description: 'Puoi richiedere la cancellazione dei dati ("diritto all\'oblio")' },
        { title: 'Diritto alla limitazione', description: 'Puoi richiedere la limitazione del trattamento' },
        { title: 'Diritto alla portabilità', description: 'Puoi ricevere i dati in un formato leggibile da macchina' },
        { title: 'Diritto di opposizione', description: 'Puoi opporti al trattamento dei dati' },
      ],
      exerciseRightsIntro: 'Per esercitare questi diritti, contattaci all\'indirizzo',
      exerciseRightsContact: 'iodo@browin.pl',
      supervisoryAuthority: 'Hai anche il diritto di presentare un reclamo a un\'autorità di controllo -',
      supervisoryAuthorityName: 'il Presidente dell\'Ufficio per la Protezione dei Dati Personali (PUODO)',
    },

    section9: {
      title: 'Cookie',
      intro: 'Chataptor utilizza i cookie per garantire il corretto funzionamento, analizzare il traffico e personalizzare i contenuti.',
      cookieTypesTitle: 'Tipi di cookie',
      cookieTypes: [
        { type: 'Essenziali', description: 'Necessari per il funzionamento del sito (sessione, autorizzazione)' },
        { type: 'Funzionali', description: 'Memorizzazione delle preferenze dell\'utente' },
        { type: 'Analitici', description: 'Google Analytics (con anonimizzazione IP)' },
        { type: 'Marketing', description: 'Google Ads (con consenso dell\'utente)' },
      ],
      manageCookiesTitle: 'Gestione dei cookie',
      manageCookiesDescription: 'Puoi gestire i cookie attraverso le impostazioni del tuo browser. Tieni presente che la disattivazione di alcuni cookie può influire sulla funzionalità del sito.',
    },

    section10: {
      title: 'Sicurezza dei dati',
      intro: 'Implementiamo misure tecniche e organizzative adeguate per proteggere i tuoi dati:',
      measures: [
        'Crittografia delle connessioni (SSL/TLS)',
        'Crittografia dei dati a riposo',
        'Backup regolari',
        'Controllo degli accessi basato sui ruoli',
        'Monitoraggio e rilevamento delle minacce',
        'Audit di sicurezza regolari',
      ],
    },

    section11: {
      title: 'Modifiche all\'informativa sulla privacy',
      content: 'Ci riserviamo il diritto di apportare modifiche a questa Informativa sulla Privacy. Ti informeremo di modifiche significative tramite',
      notificationEmail: 'e-mail',
      notificationSite: 'notifica sul sito',
      recommendation: 'Ti consigliamo di controllare regolarmente questa pagina.',
    },

    section12: {
      title: 'Contatto',
      intro: 'Per domande riguardanti questa Informativa sulla Privacy, contattaci:',
      companyNameShort: 'BROWIN Sp. z o.o. Sp.k.',
      address: 'ul. Pryncypalna 129/141, 93-373 Łódź',
      emailDpoLabel: 'E-mail (DPO):',
      emailGeneralLabel: 'E-mail (generale):',
      phoneLabel: 'Telefono:',
    },

    footer: {
      tagline: 'La porta sul mondo per il tuo e-commerce. Abbattiamo le barriere linguistiche combinando l\'IA con l\'empatia umana.',
      contactTitle: 'Contatti',
      legalTitle: 'Legale',
      privacyPolicy: 'Informativa sulla Privacy',
      terms: 'Termini di servizio',
      allRightsReserved: 'Tutti i diritti riservati.',
    },
  },

  // ============================================================================
  // CZECH (CS)
  // ============================================================================
  cs: {
    pageTitle: 'Zásady ochrany osobních údajů | Chataptor',
    metaDescription: 'Zásady ochrany osobních údajů Chataptor - Informace o zpracování osobních údajů',
    backToHome: 'Domů',
    tableOfContents: 'Obsah',
    questionsAboutData: 'Otázky ohledně vašich údajů?',
    dataProtectionBadge: 'Ochrana údajů',
    privacyPolicyTitle: 'Zásady ochrany osobních údajů',
    lastUpdated: 'Poslední aktualizace: 29. ledna 2026',
    introTitle: 'Vaše soukromí je naší prioritou',
    introDescription: 'Tyto Zásady ochrany osobních údajů vysvětlují, jaké údaje shromažďujeme, jak je zpracováváme a jaká práva máte.',

    toc: {
      section1: 'Správce údajů',
      section2: 'Kontakt',
      section3: 'Rozsah údajů',
      section4: 'Účely zpracování',
      section5: 'Příjemci údajů',
      section6: 'Přenos mimo EHP',
      section7: 'Doba uchovávání',
      section8: 'Vaše práva',
      section9: 'Cookies',
      section10: 'Bezpečnost',
      section11: 'Změny zásad',
      section12: 'Kontaktní údaje',
    },

    section1: {
      title: 'Správce údajů',
      intro: 'Správcem vašich osobních údajů je:',
      companyName: 'BROWIN Spółka z ograniczoną odpowiedzialnością Spółka komandytowa',
      address: 'ul. Pryncypalna 129/141',
      city: '93-373 Łódź, Polsko',
      nipLabel: 'DIČ (NIP)',
      regonLabel: 'REGON',
      krsLabel: 'KRS',
      bdoLabel: 'BDO',
    },

    section2: {
      title: 'Kontakt pro záležitosti ochrany údajů',
      intro: 'Pro záležitosti týkající se ochrany osobních údajů nás můžete kontaktovat:',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefon',
      faxLabel: 'Fax',
      addressLabel: 'Adresa',
    },

    section3: {
      title: 'Rozsah shromažďovaných údajů',
      intro: 'Při používání služby Chataptor můžeme shromažďovat následující kategorie údajů:',
      userProvidedTitle: 'Údaje poskytnuté uživatelem',
      userProvidedItems: [
        'Jméno a příjmení',
        'E-mailová adresa',
        'Telefonní číslo',
        'Název společnosti a pozice',
        'Obsah zpráv v konverzacích',
      ],
      automaticDataTitle: 'Automaticky shromažďované údaje',
      automaticDataItems: [
        'IP adresa',
        'Typ a verze prohlížeče',
        'Operační systém',
        'Rozlišení obrazovky',
        'Datum a čas návštěvy',
        'Zobrazené stránky',
        'Zdroj návštěvnosti (referrer)',
      ],
    },

    section4: {
      title: 'Účely zpracování údajů',
      intro: 'Vaše osobní údaje zpracováváme pro následující účely:',
      purposes: [
        { title: 'Poskytování služeb', description: 'Podpora chatu, překlad zpráv, funkčnost platformy', legalBasis: 'Čl. 6 odst. 1 písm. b) GDPR' },
        { title: 'Komunikace', description: 'Odpovědi na dotazy, technická podpora', legalBasis: 'Čl. 6 odst. 1 písm. b) a f) GDPR' },
        { title: 'Analytika', description: 'Zlepšování kvality služeb, optimalizace platformy', legalBasis: 'Čl. 6 odst. 1 písm. f) GDPR' },
        { title: 'Marketing', description: 'Zasílání obchodních sdělení s vaším souhlasem', legalBasis: 'Čl. 6 odst. 1 písm. a) GDPR' },
        { title: 'Bezpečnost', description: 'Detekce zneužití, ochrana před útoky', legalBasis: 'Čl. 6 odst. 1 písm. f) GDPR' },
        { title: 'Právní povinnosti', description: 'Plnění zákonných povinností', legalBasis: 'Čl. 6 odst. 1 písm. c) GDPR' },
      ],
    },

    section5: {
      title: 'Příjemci údajů',
      intro: 'Vaše údaje mohou být sdíleny s následujícími kategoriemi příjemců:',
      recipients: [
        { title: 'Poskytovatelé IT služeb', description: 'Hosting, cloudové úložiště dat' },
        { title: 'Překladatelské služby', description: 'API strojového překladu (DeepL, OpenAI)' },
        { title: 'Analytické nástroje', description: 'Google Analytics (s anonymizací IP)' },
        { title: 'Orgány veřejné moci', description: 'Když to vyžaduje zákon' },
      ],
    },

    section6: {
      title: 'Přenos údajů mimo EHP',
      content: 'V některých případech mohou být vaše údaje přeneseny mimo Evropský hospodářský prostor (EHP), např. na servery umístěné v USA. V takových případech uplatňujeme vhodná ochranná opatření, včetně',
      standardClauses: 'standardních smluvních doložek',
    },

    section7: {
      title: 'Doba uchovávání údajů',
      intro: 'Vaše údaje uchováváme po dobu nezbytnou pro splnění účelů zpracování:',
      tableHeaders: {
        dataType: 'Typ údajů',
        retentionPeriod: 'Doba uchovávání',
      },
      retentionData: [
        { dataType: 'Údaje o účtu', period: 'Doba užívání + 3 roky' },
        { dataType: 'Historie konverzací', period: 'Doba užívání + 1 rok' },
        { dataType: 'Analytické údaje', period: 'Maximálně 26 měsíců' },
        { dataType: 'Fakturační údaje', period: '5 let (daňové předpisy)' },
      ],
    },

    section8: {
      title: 'Vaše práva',
      intro: 'Podle GDPR máte následující práva:',
      rights: [
        { title: 'Právo na přístup', description: 'Můžete získat informace o zpracovávaných údajích' },
        { title: 'Právo na opravu', description: 'Můžete požádat o opravu nepřesných údajů' },
        { title: 'Právo na výmaz', description: 'Můžete požádat o vymazání údajů ("právo být zapomenut")' },
        { title: 'Právo na omezení', description: 'Můžete požádat o omezení zpracování' },
        { title: 'Právo na přenositelnost', description: 'Můžete obdržet údaje ve strojově čitelném formátu' },
        { title: 'Právo vznést námitku', description: 'Můžete vznést námitku proti zpracování údajů' },
      ],
      exerciseRightsIntro: 'Pro uplatnění těchto práv nás kontaktujte na adrese',
      exerciseRightsContact: 'iodo@browin.pl',
      supervisoryAuthority: 'Máte také právo podat stížnost u dozorového úřadu -',
      supervisoryAuthorityName: 'Předsedy Úřadu pro ochranu osobních údajů (PUODO)',
    },

    section9: {
      title: 'Cookies',
      intro: 'Chataptor používá cookies k zajištění správného fungování, analýze návštěvnosti a personalizaci obsahu.',
      cookieTypesTitle: 'Typy cookies',
      cookieTypes: [
        { type: 'Nezbytné', description: 'Vyžadované pro provoz webu (relace, autorizace)' },
        { type: 'Funkční', description: 'Zapamatování uživatelských preferencí' },
        { type: 'Analytické', description: 'Google Analytics (s anonymizací IP)' },
        { type: 'Marketingové', description: 'Google Ads (se souhlasem uživatele)' },
      ],
      manageCookiesTitle: 'Správa cookies',
      manageCookiesDescription: 'Cookies můžete spravovat prostřednictvím nastavení prohlížeče. Upozorňujeme, že zakázání některých cookies může ovlivnit funkčnost webu.',
    },

    section10: {
      title: 'Bezpečnost údajů',
      intro: 'Zavádíme vhodná technická a organizační opatření k ochraně vašich údajů:',
      measures: [
        'Šifrování připojení (SSL/TLS)',
        'Šifrování dat v klidu',
        'Pravidelné zálohy',
        'Řízení přístupu na základě rolí',
        'Monitorování a detekce hrozeb',
        'Pravidelné bezpečnostní audity',
      ],
    },

    section11: {
      title: 'Změny zásad ochrany osobních údajů',
      content: 'Vyhrazujeme si právo provádět změny těchto Zásad ochrany osobních údajů. O významných změnách vás budeme informovat prostřednictvím',
      notificationEmail: 'e-mailu',
      notificationSite: 'oznámení na webu',
      recommendation: 'Doporučujeme pravidelně kontrolovat tuto stránku.',
    },

    section12: {
      title: 'Kontakt',
      intro: 'Pro dotazy týkající se těchto Zásad ochrany osobních údajů nás kontaktujte:',
      companyNameShort: 'BROWIN Sp. z o.o. Sp.k.',
      address: 'ul. Pryncypalna 129/141, 93-373 Łódź',
      emailDpoLabel: 'E-mail (DPO):',
      emailGeneralLabel: 'E-mail (obecný):',
      phoneLabel: 'Telefon:',
    },

    footer: {
      tagline: 'Brána do světa pro váš e-commerce. Boříme jazykové bariéry kombinací AI s lidskou empatií.',
      contactTitle: 'Kontakt',
      legalTitle: 'Právní',
      privacyPolicy: 'Zásady ochrany osobních údajů',
      terms: 'Podmínky služby',
      allRightsReserved: 'Všechna práva vyhrazena.',
    },
  },

  // ============================================================================
  // SLOVAK (SK)
  // ============================================================================
  sk: {
    pageTitle: 'Zásady ochrany osobných údajov | Chataptor',
    metaDescription: 'Zásady ochrany osobných údajov Chataptor - Informácie o spracovaní osobných údajov',
    backToHome: 'Domov',
    tableOfContents: 'Obsah',
    questionsAboutData: 'Otázky ohľadom vašich údajov?',
    dataProtectionBadge: 'Ochrana údajov',
    privacyPolicyTitle: 'Zásady ochrany osobných údajov',
    lastUpdated: 'Posledná aktualizácia: 29. januára 2026',
    introTitle: 'Vaše súkromie je našou prioritou',
    introDescription: 'Tieto Zásady ochrany osobných údajov vysvetľujú, aké údaje zhromažďujeme, ako ich spracúvame a aké práva máte.',

    toc: {
      section1: 'Prevádzkovateľ',
      section2: 'Kontakt',
      section3: 'Rozsah údajov',
      section4: 'Účely spracovania',
      section5: 'Príjemcovia údajov',
      section6: 'Prenos mimo EHP',
      section7: 'Doba uchovávania',
      section8: 'Vaše práva',
      section9: 'Cookies',
      section10: 'Bezpečnosť',
      section11: 'Zmeny zásad',
      section12: 'Kontaktné údaje',
    },

    section1: {
      title: 'Prevádzkovateľ',
      intro: 'Prevádzkovateľom vašich osobných údajov je:',
      companyName: 'BROWIN Spółka z ograniczoną odpowiedzialnością Spółka komandytowa',
      address: 'ul. Pryncypalna 129/141',
      city: '93-373 Łódź, Poľsko',
      nipLabel: 'DIČ (NIP)',
      regonLabel: 'REGON',
      krsLabel: 'KRS',
      bdoLabel: 'BDO',
    },

    section2: {
      title: 'Kontakt pre záležitosti ochrany údajov',
      intro: 'Pre záležitosti týkajúce sa ochrany osobných údajov nás môžete kontaktovať:',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefón',
      faxLabel: 'Fax',
      addressLabel: 'Adresa',
    },

    section3: {
      title: 'Rozsah zhromažďovaných údajov',
      intro: 'Pri používaní služby Chataptor môžeme zhromažďovať nasledujúce kategórie údajov:',
      userProvidedTitle: 'Údaje poskytnuté používateľom',
      userProvidedItems: [
        'Meno a priezvisko',
        'E-mailová adresa',
        'Telefónne číslo',
        'Názov spoločnosti a pozícia',
        'Obsah správ v konverzáciách',
      ],
      automaticDataTitle: 'Automaticky zhromažďované údaje',
      automaticDataItems: [
        'IP adresa',
        'Typ a verzia prehliadača',
        'Operačný systém',
        'Rozlíšenie obrazovky',
        'Dátum a čas návštevy',
        'Zobrazené stránky',
        'Zdroj návštevnosti (referrer)',
      ],
    },

    section4: {
      title: 'Účely spracovania údajov',
      intro: 'Vaše osobné údaje spracúvame na nasledujúce účely:',
      purposes: [
        { title: 'Poskytovanie služieb', description: 'Podpora chatu, preklad správ, funkcionalita platformy', legalBasis: 'Čl. 6 ods. 1 písm. b) GDPR' },
        { title: 'Komunikácia', description: 'Odpovede na dotazy, technická podpora', legalBasis: 'Čl. 6 ods. 1 písm. b) a f) GDPR' },
        { title: 'Analytika', description: 'Zlepšovanie kvality služieb, optimalizácia platformy', legalBasis: 'Čl. 6 ods. 1 písm. f) GDPR' },
        { title: 'Marketing', description: 'Zasielanie obchodných informácií s vaším súhlasom', legalBasis: 'Čl. 6 ods. 1 písm. a) GDPR' },
        { title: 'Bezpečnosť', description: 'Detekcia zneužitia, ochrana pred útokmi', legalBasis: 'Čl. 6 ods. 1 písm. f) GDPR' },
        { title: 'Právne povinnosti', description: 'Plnenie zákonných povinností', legalBasis: 'Čl. 6 ods. 1 písm. c) GDPR' },
      ],
    },

    section5: {
      title: 'Príjemcovia údajov',
      intro: 'Vaše údaje môžu byť zdieľané s nasledujúcimi kategóriami príjemcov:',
      recipients: [
        { title: 'Poskytovatelia IT služieb', description: 'Hosting, cloudové úložisko údajov' },
        { title: 'Prekladateľské služby', description: 'API strojového prekladu (DeepL, OpenAI)' },
        { title: 'Analytické nástroje', description: 'Google Analytics (s anonymizáciou IP)' },
        { title: 'Orgány verejnej moci', description: 'Keď to vyžaduje zákon' },
      ],
    },

    section6: {
      title: 'Prenos údajov mimo EHP',
      content: 'V niektorých prípadoch môžu byť vaše údaje prenesené mimo Európsky hospodársky priestor (EHP), napr. na servery umiestnené v USA. V takých prípadoch uplatňujeme vhodné ochranné opatrenia, vrátane',
      standardClauses: 'štandardných zmluvných doložiek',
    },

    section7: {
      title: 'Doba uchovávania údajov',
      intro: 'Vaše údaje uchovávame po dobu nevyhnutnú na splnenie účelov spracovania:',
      tableHeaders: {
        dataType: 'Typ údajov',
        retentionPeriod: 'Doba uchovávania',
      },
      retentionData: [
        { dataType: 'Údaje o účte', period: 'Doba používania + 3 roky' },
        { dataType: 'História konverzácií', period: 'Doba používania + 1 rok' },
        { dataType: 'Analytické údaje', period: 'Maximálne 26 mesiacov' },
        { dataType: 'Fakturačné údaje', period: '5 rokov (daňové predpisy)' },
      ],
    },

    section8: {
      title: 'Vaše práva',
      intro: 'Podľa GDPR máte nasledujúce práva:',
      rights: [
        { title: 'Právo na prístup', description: 'Môžete získať informácie o spracúvaných údajoch' },
        { title: 'Právo na opravu', description: 'Môžete požiadať o opravu nepresných údajov' },
        { title: 'Právo na vymazanie', description: 'Môžete požiadať o vymazanie údajov ("právo byť zabudnutý")' },
        { title: 'Právo na obmedzenie', description: 'Môžete požiadať o obmedzenie spracovania' },
        { title: 'Právo na prenosnosť', description: 'Môžete obdržať údaje v strojovo čitateľnom formáte' },
        { title: 'Právo namietať', description: 'Môžete namietať proti spracovaniu údajov' },
      ],
      exerciseRightsIntro: 'Pre uplatnenie týchto práv nás kontaktujte na adrese',
      exerciseRightsContact: 'iodo@browin.pl',
      supervisoryAuthority: 'Máte tiež právo podať sťažnosť dozornému orgánu -',
      supervisoryAuthorityName: 'Predsedovi Úradu na ochranu osobných údajov (PUODO)',
    },

    section9: {
      title: 'Cookies',
      intro: 'Chataptor používa cookies na zabezpečenie správneho fungovania, analýzu návštevnosti a personalizáciu obsahu.',
      cookieTypesTitle: 'Typy cookies',
      cookieTypes: [
        { type: 'Nevyhnutné', description: 'Vyžadované pre prevádzku webu (relácia, autorizácia)' },
        { type: 'Funkčné', description: 'Zapamätanie používateľských preferencií' },
        { type: 'Analytické', description: 'Google Analytics (s anonymizáciou IP)' },
        { type: 'Marketingové', description: 'Google Ads (so súhlasom používateľa)' },
      ],
      manageCookiesTitle: 'Správa cookies',
      manageCookiesDescription: 'Cookies môžete spravovať prostredníctvom nastavení prehliadača. Upozorňujeme, že zakázanie niektorých cookies môže ovplyvniť funkčnosť webu.',
    },

    section10: {
      title: 'Bezpečnosť údajov',
      intro: 'Zavádzame vhodné technické a organizačné opatrenia na ochranu vašich údajov:',
      measures: [
        'Šifrovanie pripojenia (SSL/TLS)',
        'Šifrovanie údajov v pokoji',
        'Pravidelné zálohy',
        'Riadenie prístupu na základe rolí',
        'Monitorovanie a detekcia hrozieb',
        'Pravidelné bezpečnostné audity',
      ],
    },

    section11: {
      title: 'Zmeny zásad ochrany osobných údajov',
      content: 'Vyhradzujeme si právo vykonávať zmeny týchto Zásad ochrany osobných údajov. O významných zmenách vás budeme informovať prostredníctvom',
      notificationEmail: 'e-mailu',
      notificationSite: 'oznámenia na webe',
      recommendation: 'Odporúčame pravidelne kontrolovať túto stránku.',
    },

    section12: {
      title: 'Kontakt',
      intro: 'Pre otázky týkajúce sa týchto Zásad ochrany osobných údajov nás kontaktujte:',
      companyNameShort: 'BROWIN Sp. z o.o. Sp.k.',
      address: 'ul. Pryncypalna 129/141, 93-373 Łódź',
      emailDpoLabel: 'E-mail (DPO):',
      emailGeneralLabel: 'E-mail (všeobecný):',
      phoneLabel: 'Telefón:',
    },

    footer: {
      tagline: 'Brána do sveta pre váš e-commerce. Búrame jazykové bariéry kombináciou AI s ľudskou empatiou.',
      contactTitle: 'Kontakt',
      legalTitle: 'Právne',
      privacyPolicy: 'Zásady ochrany osobných údajov',
      terms: 'Podmienky služby',
      allRightsReserved: 'Všetky práva vyhradené.',
    },
  },
};

/**
 * Helper function to get privacy translations for a specific locale.
 */
export function getPrivacyTranslations(locale: Locale): PrivacyTranslations {
  return privacyTranslations[locale];
}
