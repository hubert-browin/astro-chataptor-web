import type { Locale } from './config';

export interface TermsTranslations {
  // UI elements
  title: string;
  description: string;
  backLink: string;
  tocTitle: string;
  lastUpdate: string;
  introTitle: string;
  introText: string;
  needHelp: string;
  privacyLink: string;
  termsOfUse: string;

  // TOC sections titles
  toc: {
    definitions: string;
    generalProvisions: string;
    registrationAccount: string;
    scopeOfServices: string;
    feesPayments: string;
    userObligations: string;
    liability: string;
    intellectualProperty: string;
    dataProtection: string;
    termination: string;
    complaints: string;
    disputeResolution: string;
    finalProvisions: string;
    contact: string;
  };

  // Section 1: Definitions
  section1: {
    title: string;
    intro: string;
    serviceProvider: { term: string; definition: string };
    platform: { term: string; definition: string };
    user: { term: string; definition: string };
    account: { term: string; definition: string };
    services: { term: string; definition: string };
    widget: { term: string; definition: string };
  };

  // Section 2: General Provisions
  section2: {
    title: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
  };

  // Section 3: Registration and Account
  section3: {
    title: string;
    item1: string;
    item2intro: string;
    item2email: string;
    item2password: string;
    item2org: string;
    item3: string;
    item4intro: string;
    item4truthful: string;
    item4confidential: string;
    item4unauthorized: string;
    item5: string;
  };

  // Section 4: Scope of Services
  section4: {
    title: string;
    intro: string;
    liveChat: { title: string; description: string };
    aiTranslation: { title: string; description: string };
    agentPanel: { title: string; description: string };
    integrations: { title: string; description: string };
    item1: string;
    item2: string;
    item3: string;
  };

  // Section 5: Fees and Payments
  section5: {
    title: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
    item6: string;
  };

  // Section 6: User Obligations
  section6: {
    title: string;
    intro: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5intro: string;
    item5illegal: string;
    item5rights: string;
    item5spam: string;
    item5offensive: string;
  };

  // Section 7: Liability
  section7: {
    title: string;
    item1intro: string;
    item1content: string;
    item1interruptions: string;
    item1dataLoss: string;
    item1damages: string;
    item2: string;
    item3: string;
  };

  // Section 8: Intellectual Property
  section8: {
    title: string;
    item1: string;
    item2: string;
    item3intro: string;
    item3copying: string;
    item3reverse: string;
    item3trademarks: string;
    item4: string;
  };

  // Section 9: Data Protection
  section9: {
    title: string;
    item1: string;
    item2intro: string;
    item2legal: string;
    item2inform: string;
    item2gdpr: string;
    item3: string;
  };

  // Section 10: Termination
  section10: {
    title: string;
    item1: string;
    item2: string;
    item3intro: string;
    item3violation: string;
    item3harm: string;
    item3falseData: string;
    item4: string;
  };

  // Section 11: Complaints
  section11: {
    title: string;
    item1: string;
    item2intro: string;
    item2contact: string;
    item2problem: string;
    item2resolution: string;
    item3: string;
    item4: string;
  };

  // Section 12: Dispute Resolution
  section12: {
    title: string;
    intro: string;
    odrPlatform: { title: string };
    tradeInspection: { title: string; description: string };
    consumerCourts: { title: string; description: string };
  };

  // Section 13: Final Provisions
  section13: {
    title: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
  };

  // Section 14: Contact
  section14: {
    title: string;
    intro: string;
    email: string;
    phone: string;
    customerService: string;
  };

  // Footer
  footer: {
    tagline: string;
    contact: string;
    legal: string;
    privacy: string;
    terms: string;
    copyright: string;
    uptime: string;
    location: string;
  };
}

const translations: Record<Locale, TermsTranslations> = {
  pl: {
    title: 'Regulamin Serwisu',
    description: 'Regulamin korzystania z platformy Chataptor',
    backLink: 'Strona główna',
    tocTitle: 'Spis treści',
    lastUpdate: 'Ostatnia aktualizacja: 18 maja 2026',
    introTitle: 'Zasady korzystania z platformy Chataptor',
    introText:
      'Niniejszy Regulamin określa zasady korzystania z platformy Chataptor. Korzystając z naszych usług, akceptujesz poniższe warunki.',
    needHelp: 'Potrzebujesz pomocy?',
    privacyLink: 'Polityka Prywatności',
    termsOfUse: 'Warunki korzystania',

    toc: {
      definitions: 'Definicje',
      generalProvisions: 'Postanowienia ogólne',
      registrationAccount: 'Rejestracja i Konto',
      scopeOfServices: 'Zakres Usług',
      feesPayments: 'Bezpłatne korzystanie i przyszłe opłaty',
      userObligations: 'Obowiązki Użytkownika',
      liability: 'Odpowiedzialność',
      intellectualProperty: 'Własność intelektualna',
      dataProtection: 'Ochrona danych',
      termination: 'Rozwiązanie umowy',
      complaints: 'Reklamacje',
      disputeResolution: 'Rozwiązywanie sporów',
      finalProvisions: 'Postanowienia końcowe',
      contact: 'Kontakt',
    },

    section1: {
      title: 'Definicje',
      intro: 'W niniejszym Regulaminie stosuje się następujące definicje:',
      serviceProvider: {
        term: 'Usługodawca',
        definition:
          'BROWIN Spółka z ograniczoną odpowiedzialnością Spółka komandytowa z siedzibą w Łodzi (93-373), ul. Pryncypalna 129/141, NIP: 729-268-73-25, REGON: 101003641, KRS: 0000459418',
      },
      platform: {
        term: 'Serwis / Platforma',
        definition: 'Platforma Chataptor dostępna pod adresem chataptor.com',
      },
      user: {
        term: 'Użytkownik',
        definition:
          'Osoba fizyczna, osoba prawna lub jednostka organizacyjna korzystająca z Serwisu',
      },
      account: {
        term: 'Konto',
        definition: 'Indywidualne konto Użytkownika w Serwisie',
      },
      services: {
        term: 'Usługi',
        definition:
          'Funkcjonalności udostępniane przez Serwis, w tym obsługa czatu, tłumaczenie wiadomości, integracje',
      },
      widget: {
        term: 'Widget',
        definition: 'Komponent czatu do osadzenia na stronie internetowej Użytkownika',
      },
    },

    section2: {
      title: 'Postanowienia ogólne',
      item1: 'Regulamin określa zasady świadczenia usług drogą elektroniczną przez Usługodawcę.',
      item2:
        'Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu oraz Polityki Prywatności.',
      item3:
        'Usługodawca świadczy usługi zgodnie z obowiązującymi przepisami prawa polskiego i unijnego.',
      item4: 'Serwis jest przeznaczony dla przedsiębiorców (B2B) oraz konsumentów.',
    },

    section3: {
      title: 'Rejestracja i Konto',
      item1: 'Korzystanie z pełnej funkcjonalności Serwisu wymaga założenia Konta.',
      item2intro: 'Rejestracja jest bezpłatna i wymaga podania:',
      item2email: 'Adresu e-mail',
      item2password: 'Hasła',
      item2org: 'Nazwy organizacji (opcjonalnie)',
      item3: 'Użytkownik może również zarejestrować się za pomocą konta Google (OAuth).',
      item4intro: 'Użytkownik zobowiązuje się do:',
      item4truthful: 'Podania prawdziwych danych',
      item4confidential: 'Zachowania poufności danych logowania',
      item4unauthorized: 'Niezwłocznego informowania o nieautoryzowanym dostępie do Konta',
      item5:
        'Usługodawca może odmówić rejestracji lub zablokować Konto w przypadku naruszenia Regulaminu.',
    },

    section4: {
      title: 'Zakres Usług',
      intro: 'Platforma Chataptor oferuje następujące funkcjonalności:',
      liveChat: {
        title: 'Live Chat',
        description: 'Komunikacja w czasie rzeczywistym z klientami poprzez widget na stronie',
      },
      aiTranslation: {
        title: 'Tłumaczenie AI',
        description: 'Automatyczne tłumaczenie wiadomości między wieloma językami',
      },
      agentPanel: {
        title: 'Panel Agenta',
        description: 'Centralny interfejs do zarządzania wszystkimi konwersacjami',
      },
      integrations: {
        title: 'Integracje',
        description: 'Połączenie z e-mailem, Messengerem, WhatsApp i innymi kanałami',
      },
      item1:
        'Aktualnie Serwis jest udostępniany bez opłat; dostępność poszczególnych funkcjonalności może zależeć od ograniczeń technicznych, bezpieczeństwa, stabilności lub zasad uczciwego korzystania.',
      item2:
        'Usługodawca zastrzega sobie prawo do modyfikacji zakresu Usług z zachowaniem 30-dniowego okresu wypowiedzenia.',
      item3:
        'Usługodawca dokłada starań, aby Serwis działał nieprzerwanie, jednak nie gwarantuje 100% dostępności.',
    },

    section5: {
      title: 'Bezpłatne korzystanie i przyszłe opłaty',
      item1:
        'Na dzień obowiązywania niniejszego Regulaminu korzystanie z Serwisu jest bezpłatne. Usługodawca nie pobiera opłat za rejestrację, konto ani korzystanie z podstawowych funkcjonalności Serwisu.',
      item2:
        'Usługodawca może w przyszłości wprowadzić odpłatne plany, limity lub funkcje premium, wyłącznie po wcześniejszym poinformowaniu Użytkowników z odpowiednim wyprzedzeniem, nie krótszym niż 30 dni.',
      item3:
        'Wprowadzenie opłat wobec danego Użytkownika wymaga jego wyraźnej akceptacji nowych warunków lub odrębnego zamówienia płatnej usługi; brak akceptacji oznacza brak obowiązku zapłaty.',
      item4:
        'Usługodawca nie pobierze żadnych opłat automatycznie i bez zgody Użytkownika, w szczególności bez wcześniejszego przedstawienia ceny, zakresu płatnej usługi oraz zasad rozliczeń.',
      item5:
        'Jeżeli Użytkownik nie zaakceptuje przyszłych płatnych warunków, może nadal korzystać z bezpłatnego zakresu Usług, o ile będzie on dostępny, albo zrezygnować z korzystania z Serwisu przed wejściem zmian w życie.',
      item6:
        'Po ewentualnym wprowadzeniu płatnych usług zasady płatności, fakturowania, zwrotów i reklamacji płatności zostaną określone w zaktualizowanym Regulaminie lub osobnych warunkach zaakceptowanych przez Użytkownika.',
    },

    section6: {
      title: 'Obowiązki Użytkownika',
      intro: 'Użytkownik zobowiązuje się do:',
      item1: 'Korzystania z Serwisu zgodnie z jego przeznaczeniem i przepisami prawa.',
      item2: 'Niepodejmowania działań mogących zakłócić działanie Serwisu.',
      item3: 'Nieudostępniania danych logowania osobom trzecim.',
      item4: 'Przestrzegania praw własności intelektualnej.',
      item5intro: 'Nierozsyłania za pomocą Serwisu treści:',
      item5illegal: 'Niezgodnych z prawem',
      item5rights: 'Naruszających prawa osób trzecich',
      item5spam: 'Zawierających spam lub złośliwe oprogramowanie',
      item5offensive: 'O charakterze obraźliwym lub dyskryminującym',
    },

    section7: {
      title: 'Odpowiedzialność',
      item1intro: 'Usługodawca nie ponosi odpowiedzialności za:',
      item1content: 'Treści publikowane przez Użytkowników',
      item1interruptions:
        'Przerwy w działaniu Serwisu wynikające z przyczyn niezależnych od Usługodawcy',
      item1dataLoss: 'Utratę danych wynikającą z działań Użytkownika',
      item1damages: 'Szkody wynikające z nieprawidłowego korzystania z Serwisu',
      item2:
        'W zakresie dopuszczalnym przez prawo, gdy Serwis jest udostępniany bezpłatnie, odpowiedzialność Usługodawcy wobec Użytkowników biznesowych jest ograniczona w najszerszym dopuszczalnym zakresie; po ewentualnym wprowadzeniu odpłatnych usług może zostać ograniczona do wartości opłat uiszczonych przez danego Użytkownika za Serwis w okresie ostatnich 12 miesięcy.',
      item3:
        'Ograniczenia odpowiedzialności nie dotyczą szkód wyrządzonych umyślnie lub wskutek rażącego niedbalstwa.',
    },

    section8: {
      title: 'Własność intelektualna',
      item1:
        'Serwis, jego elementy graficzne, kod źródłowy, bazy danych i dokumentacja stanowią własność Usługodawcy i są chronione prawem autorskim.',
      item2:
        'Użytkownik otrzymuje niewyłączną, nieprzenoszalną licencję na korzystanie z Serwisu zgodnie z Regulaminem.',
      item3intro: 'Zabrania się:',
      item3copying: 'Kopiowania lub modyfikowania kodu Serwisu',
      item3reverse: 'Reverse engineeringu',
      item3trademarks: 'Używania znaków towarowych Usługodawcy bez zgody',
      item4:
        'Użytkownik zachowuje prawa do treści wprowadzanych do Serwisu, udzielając Usługodawcy licencji na ich przetwarzanie w celu świadczenia Usług.',
    },

    section9: {
      title: 'Ochrona danych osobowych',
      item1: 'Zasady przetwarzania danych osobowych określa Polityka Prywatności.',
      item2intro:
        'Użytkownik będący administratorem danych osobowych swoich klientów zobowiązuje się do:',
      item2legal: 'Posiadania podstawy prawnej do przetwarzania danych',
      item2inform: 'Informowania klientów o korzystaniu z Chataptor',
      item2gdpr: 'Przestrzegania przepisów RODO',
      item3:
        'Na życzenie Użytkownika Usługodawca zawrze umowę powierzenia przetwarzania danych osobowych (DPA).',
    },

    section10: {
      title: 'Rozwiązanie umowy',
      item1:
        'Użytkownik może w każdej chwili usunąć Konto poprzez ustawienia w panelu lub kontakt z obsługą.',
      item2: 'Usługodawca może wypowiedzieć umowę z zachowaniem 30-dniowego okresu wypowiedzenia.',
      item3intro: 'Usługodawca może rozwiązać umowę ze skutkiem natychmiastowym w przypadku:',
      item3violation: 'Rażącego naruszenia Regulaminu',
      item3harm: 'Działań na szkodę Usługodawcy lub innych Użytkowników',
      item3falseData: 'Podania fałszywych danych rejestracyjnych',
      item4: 'Po rozwiązaniu umowy dane Użytkownika są usuwane zgodnie z Polityką Prywatności.',
    },

    section11: {
      title: 'Reklamacje',
      item1: 'Reklamacje należy zgłaszać na adres: support@browin.pl',
      item2intro: 'Reklamacja powinna zawierać:',
      item2contact: 'Dane kontaktowe Użytkownika',
      item2problem: 'Opis problemu',
      item2resolution: 'Oczekiwany sposób rozwiązania',
      item3: 'Usługodawca rozpatruje reklamacje w terminie 14 dni od ich otrzymania.',
      item4: 'O wyniku rozpatrzenia reklamacji Użytkownik zostanie poinformowany drogą elektroniczną.',
    },

    section12: {
      title: 'Pozasądowe rozwiązywanie sporów',
      intro:
        'Użytkownik będący konsumentem ma możliwość skorzystania z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń:',
      odrPlatform: {
        title: 'Platforma ODR',
      },
      tradeInspection: {
        title: 'Wojewódzkie Inspektoraty Inspekcji Handlowej',
        description: 'Pomoc w rozwiązywaniu sporów konsumenckich',
      },
      consumerCourts: {
        title: 'Stałe Polubowne Sądy Konsumenckie',
        description: 'Działające przy Wojewódzkich Inspektoratach',
      },
    },

    section13: {
      title: 'Postanowienia końcowe',
      item1: 'Regulamin obowiązuje od dnia 18 maja 2026 roku.',
      item2:
        'Usługodawca zastrzega sobie prawo do zmiany Regulaminu. O zmianach Użytkownicy zostaną poinformowani z co najmniej 30-dniowym wyprzedzeniem, a wprowadzenie odpłatnych usług wobec danego Użytkownika wymaga jego wyraźnej akceptacji.',
      item3:
        'W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego.',
      item4:
        'Spory wynikające z niniejszego Regulaminu będą rozstrzygane przez sąd właściwy dla siedziby Usługodawcy (dla sporów z przedsiębiorcami) lub sąd właściwy dla miejsca zamieszkania konsumenta.',
      item5:
        'Jeśli którekolwiek postanowienie Regulaminu zostanie uznane za nieważne, pozostałe postanowienia pozostają w mocy.',
    },

    section14: {
      title: 'Kontakt',
      intro: 'W razie pytań dotyczących Regulaminu, prosimy o kontakt:',
      email: 'E-mail:',
      phone: 'Telefon:',
      customerService: 'Biuro Obsługi Klienta:',
    },

    footer: {
      tagline:
        'Brama do rozmów z klientami na całym świecie. Przełamujemy bariery językowe, łącząc AI z ludzką empatią.',
      contact: 'Kontakt',
      legal: 'Legal',
      privacy: 'Polityka prywatności',
      terms: 'Regulamin',
      copyright: 'Wszystkie prawa zastrzeżone.',
      uptime: 'Uptime: 99.89%',
      location: 'Łódź, Polska',
    },
  },

  en: {
    title: 'Terms of Service',
    description: 'Terms of use for the Chataptor platform',
    backLink: 'Home',
    tocTitle: 'Table of Contents',
    lastUpdate: 'Last updated: May 18, 2026',
    introTitle: 'Rules for using the Chataptor platform',
    introText: 'These Terms of Service govern your use of the Chataptor platform. By using our services, you accept these terms.',
    needHelp: 'Need help?',
    privacyLink: 'Privacy Policy',
    termsOfUse: 'Terms of Use',

    toc: {
      definitions: 'Definitions',
      generalProvisions: 'General Provisions',
      registrationAccount: 'Registration and Account',
      scopeOfServices: 'Scope of Services',
      feesPayments: 'Free Use and Future Fees',
      userObligations: 'User Obligations',
      liability: 'Liability',
      intellectualProperty: 'Intellectual Property',
      dataProtection: 'Data Protection',
      termination: 'Termination',
      complaints: 'Complaints',
      disputeResolution: 'Dispute Resolution',
      finalProvisions: 'Final Provisions',
      contact: 'Contact',
    },

    section1: {
      title: 'Definitions',
      intro: 'The following definitions apply in these Terms of Service:',
      serviceProvider: { term: 'Service Provider', definition: 'BROWIN Limited Liability Company Partnership, registered in Łódź (93-373), ul. Pryncypalna 129/141, Tax ID: 729-268-73-25, REGON: 101003641, KRS: 0000459418' },
      platform: { term: 'Service / Platform', definition: 'The Chataptor platform available at chataptor.com' },
      user: { term: 'User', definition: 'A natural person, legal entity, or organizational unit using the Service' },
      account: { term: 'Account', definition: 'The User\'s individual account in the Service' },
      services: { term: 'Services', definition: 'Functionalities provided by the Service, including chat support, message translation, and integrations' },
      widget: { term: 'Widget', definition: 'A chat component to be embedded on the User\'s website' },
    },

    section2: {
      title: 'General Provisions',
      item1: 'These Terms govern the provision of electronic services by the Service Provider.',
      item2: 'Using the Service constitutes acceptance of these Terms and the Privacy Policy.',
      item3: 'The Service Provider provides services in accordance with applicable Polish and EU law.',
      item4: 'The Service is intended for businesses (B2B) and consumers.',
    },

    section3: {
      title: 'Registration and Account',
      item1: 'Using the full functionality of the Service requires creating an Account.',
      item2intro: 'Registration is free and requires providing:',
      item2email: 'Email address',
      item2password: 'Password',
      item2org: 'Organization name (optional)',
      item3: 'Users may also register using a Google account (OAuth).',
      item4intro: 'The User agrees to:',
      item4truthful: 'Provide truthful information',
      item4confidential: 'Keep login credentials confidential',
      item4unauthorized: 'Promptly report any unauthorized access to the Account',
      item5: 'The Service Provider may refuse registration or block an Account in case of Terms violation.',
    },

    section4: {
      title: 'Scope of Services',
      intro: 'The Chataptor platform offers the following features:',
      liveChat: { title: 'Live Chat', description: 'Real-time communication with customers via website widget' },
      aiTranslation: { title: 'AI Translation', description: 'Automatic message translation between multiple languages' },
      agentPanel: { title: 'Agent Panel', description: 'Central interface for managing all conversations' },
      integrations: { title: 'Integrations', description: 'Connection with email, Messenger, WhatsApp, and other channels' },
      item1:
        'The Service is currently provided free of charge; availability of specific features may depend on technical, security, stability, or fair-use limits.',
      item2: 'The Service Provider reserves the right to modify the scope of Services with a 30-day notice period.',
      item3: 'The Service Provider strives to ensure uninterrupted Service operation but does not guarantee 100% availability.',
    },

    section5: {
      title: 'Free Use and Future Fees',
      item1:
        'As of the effective date of these Terms, the Service is provided free of charge. The Service Provider does not charge for registration, an Account, or use of the core Service features.',
      item2:
        'The Service Provider may introduce paid plans, limits, or premium features in the future only after giving Users prior notice of at least 30 days.',
      item3:
        'Applying fees to a specific User requires that User\'s explicit acceptance of the new terms or a separate order for a paid service; lack of acceptance means no payment obligation.',
      item4:
        'The Service Provider will not charge any fees automatically or without the User\'s consent, in particular without first presenting the price, scope of the paid service, and billing rules.',
      item5:
        'If a User does not accept future paid terms, they may continue to use the free scope of Services if available, or stop using the Service before the changes take effect.',
      item6:
        'If paid services are introduced, payment, invoicing, refund, and payment complaint rules will be set out in updated Terms or separate terms accepted by the User.',
    },

    section6: {
      title: 'User Obligations',
      intro: 'The User agrees to:',
      item1: 'Use the Service in accordance with its intended purpose and applicable law.',
      item2: 'Refrain from actions that may disrupt Service operation.',
      item3: 'Not share login credentials with third parties.',
      item4: 'Respect intellectual property rights.',
      item5intro: 'Not distribute content via the Service that is:',
      item5illegal: 'Illegal',
      item5rights: 'Infringing on third-party rights',
      item5spam: 'Containing spam or malicious software',
      item5offensive: 'Offensive or discriminatory in nature',
    },

    section7: {
      title: 'Liability',
      item1intro: 'The Service Provider is not liable for:',
      item1content: 'Content published by Users',
      item1interruptions: 'Service interruptions due to causes beyond the Service Provider\'s control',
      item1dataLoss: 'Data loss resulting from User actions',
      item1damages: 'Damages resulting from improper use of the Service',
      item2:
        'To the extent permitted by law, while the Service is provided free of charge, the Service Provider\'s liability to business Users is limited to the fullest extent permitted; if paid services are introduced, it may be limited to the fees paid by that User for the Service in the last 12 months.',
      item3: 'Liability limitations do not apply to damages caused intentionally or through gross negligence.',
    },

    section8: {
      title: 'Intellectual Property',
      item1: 'The Service, its graphic elements, source code, databases, and documentation are the property of the Service Provider and are protected by copyright.',
      item2: 'The User receives a non-exclusive, non-transferable license to use the Service in accordance with the Terms.',
      item3intro: 'It is prohibited to:',
      item3copying: 'Copy or modify Service code',
      item3reverse: 'Reverse engineer',
      item3trademarks: 'Use Service Provider trademarks without permission',
      item4: 'The User retains rights to content entered into the Service, granting the Service Provider a license to process it for service provision purposes.',
    },

    section9: {
      title: 'Personal Data Protection',
      item1: 'Personal data processing rules are defined in the Privacy Policy.',
      item2intro: 'Users who are data controllers of their customers\' personal data agree to:',
      item2legal: 'Have a legal basis for data processing',
      item2inform: 'Inform customers about using Chataptor',
      item2gdpr: 'Comply with GDPR regulations',
      item3: 'Upon User request, the Service Provider will enter into a Data Processing Agreement (DPA).',
    },

    section10: {
      title: 'Termination',
      item1: 'The User may delete their Account at any time through panel settings or by contacting support.',
      item2: 'The Service Provider may terminate the agreement with a 30-day notice period.',
      item3intro: 'The Service Provider may terminate the agreement with immediate effect in case of:',
      item3violation: 'Serious Terms violation',
      item3harm: 'Actions harmful to the Service Provider or other Users',
      item3falseData: 'Providing false registration data',
      item4: 'After termination, User data is deleted in accordance with the Privacy Policy.',
    },

    section11: {
      title: 'Complaints',
      item1: 'Complaints should be submitted to: support@browin.pl',
      item2intro: 'A complaint should include:',
      item2contact: 'User contact details',
      item2problem: 'Problem description',
      item2resolution: 'Expected resolution',
      item3: 'The Service Provider processes complaints within 14 days of receipt.',
      item4: 'The User will be informed of the complaint resolution via email.',
    },

    section12: {
      title: 'Out-of-Court Dispute Resolution',
      intro: 'Consumer Users may use out-of-court complaint handling and claim resolution methods:',
      odrPlatform: { title: 'ODR Platform' },
      tradeInspection: { title: 'Provincial Trade Inspection Offices', description: 'Assistance in resolving consumer disputes' },
      consumerCourts: { title: 'Permanent Consumer Arbitration Courts', description: 'Operating at Provincial Inspection Offices' },
    },

    section13: {
      title: 'Final Provisions',
      item1: 'These Terms are effective from May 18, 2026.',
      item2:
        'The Service Provider reserves the right to amend the Terms. Users will be notified of changes at least 30 days in advance, and applying paid services to a specific User requires that User\'s explicit acceptance.',
      item3: 'Matters not regulated by these Terms are governed by Polish law.',
      item4: 'Disputes arising from these Terms shall be resolved by the court having jurisdiction over the Service Provider\'s registered office (for business disputes) or the court having jurisdiction over the consumer\'s place of residence.',
      item5: 'If any provision of these Terms is found to be invalid, the remaining provisions remain in effect.',
    },

    section14: {
      title: 'Contact',
      intro: 'For questions regarding these Terms, please contact:',
      email: 'Email:',
      phone: 'Phone:',
      customerService: 'Customer Service:',
    },

    footer: {
      tagline:
        'A gateway to customer conversations around the world. Breaking language barriers by combining AI with human empathy.',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: 'All rights reserved.',
      uptime: 'Uptime: 99.89%',
      location: 'Łódź, Poland',
    },
  },
  de: {
    title: 'Nutzungsbedingungen',
    description: 'Nutzungsbedingungen der Chataptor-Plattform',
    backLink: 'Startseite',
    tocTitle: 'Inhaltsverzeichnis',
    lastUpdate: 'Letzte Aktualisierung: 18. Mai 2026',
    introTitle: 'Regeln für die Nutzung der Chataptor-Plattform',
    introText: 'Diese Nutzungsbedingungen regeln die Nutzung der Chataptor-Plattform. Durch die Nutzung unserer Dienste akzeptieren Sie diese Bedingungen.',
    needHelp: 'Benötigen Sie Hilfe?',
    privacyLink: 'Datenschutzrichtlinie',
    termsOfUse: 'Nutzungsbedingungen',

    toc: {
      definitions: 'Definitionen',
      generalProvisions: 'Allgemeine Bestimmungen',
      registrationAccount: 'Registrierung und Konto',
      scopeOfServices: 'Umfang der Dienstleistungen',
      feesPayments: 'Kostenlose Nutzung und künftige Gebühren',
      userObligations: 'Pflichten des Nutzers',
      liability: 'Haftung',
      intellectualProperty: 'Geistiges Eigentum',
      dataProtection: 'Datenschutz',
      termination: 'Beendigung des Vertrags',
      complaints: 'Beschwerden',
      disputeResolution: 'Außergerichtliche Streitbeilegung',
      finalProvisions: 'Schlussbestimmungen',
      contact: 'Kontakt',
    },

    section1: {
      title: 'Definitionen',
      intro: 'In diesen Nutzungsbedingungen gelten die folgenden Definitionen:',
      serviceProvider: { term: 'Dienstleister', definition: 'BROWIN Spółka z ograniczoną odpowiedzialnością Spółka komandytowa mit Sitz in Łódź (93-373), ul. Pryncypalna 129/141, NIP: 729-268-73-25, REGON: 101003641, KRS: 0000459418' },
      platform: { term: 'Dienst / Plattform', definition: 'Die Chataptor-Plattform erreichbar unter chataptor.com' },
      user: { term: 'Nutzer', definition: 'Eine natürliche Person, juristische Person oder Organisationseinheit, die den Dienst nutzt' },
      account: { term: 'Konto', definition: 'Das individuelle Nutzerkonto des Nutzers im Dienst' },
      services: { term: 'Dienstleistungen', definition: 'Die vom Dienst bereitgestellten Funktionalitäten, einschließlich Chat-Verwaltung, Nachrichtenübersetzung und Integrationen' },
      widget: { term: 'Widget', definition: 'Eine Chat-Komponente zur Einbindung auf der Website des Nutzers' },
    },

    section2: {
      title: 'Allgemeine Bestimmungen',
      item1: 'Diese Nutzungsbedingungen regeln die Bedingungen für die Erbringung elektronischer Dienstleistungen durch den Dienstleister.',
      item2: 'Die Nutzung des Dienstes bedeutet die Akzeptanz dieser Nutzungsbedingungen sowie der Datenschutzrichtlinie.',
      item3: 'Der Dienstleister erbringt Dienstleistungen in Übereinstimmung mit den geltenden Gesetzen Deutschlands und der Europäischen Union.',
      item4: 'Der Dienst ist für Unternehmer (B2B) und Verbraucher bestimmt.',
    },

    section3: {
      title: 'Registrierung und Konto',
      item1: 'Die Nutzung der vollständigen Funktionalität des Dienstes erfordert die Erstellung eines Kontos.',
      item2intro: 'Die Registrierung ist kostenlos und erfordert die Angabe von:',
      item2email: 'E-Mail-Adresse',
      item2password: 'Passwort',
      item2org: 'Organisationsname (optional)',
      item3: 'Der Nutzer kann sich auch über ein Google-Konto (OAuth) registrieren.',
      item4intro: 'Der Nutzer erklärt sich verpflichtet zu:',
      item4truthful: 'Angabe wahrheitsgetreuer Daten',
      item4confidential: 'Geheimhaltung der Anmeldedaten',
      item4unauthorized: 'Unverzügliche Benachrichtigung bei unbefugtem Kontozugriff',
      item5: 'Der Dienstleister kann die Registrierung ablehnen oder das Konto sperren, falls diese Nutzungsbedingungen verletzt werden.',
    },

    section4: {
      title: 'Umfang der Dienstleistungen',
      intro: 'Die Chataptor-Plattform bietet die folgenden Funktionalitäten:',
      liveChat: { title: 'Live Chat', description: 'Echtzeitkommunikation mit Kunden über ein Widget auf der Website' },
      aiTranslation: { title: 'KI-gestützte Übersetzung', description: 'Automatische Nachrichtenübersetzung zwischen mehreren Sprachen' },
      agentPanel: { title: 'Agent Dashboard', description: 'Zentrale Schnittstelle zur Verwaltung aller Konversationen' },
      integrations: { title: 'Integrationen', description: 'Verbindung mit E-Mail, Messenger, WhatsApp und anderen Kanälen' },
      item1:
        'Der Dienst wird derzeit kostenlos bereitgestellt; die Verfügbarkeit einzelner Funktionen kann von technischen, sicherheitsbezogenen, stabilitätsbezogenen oder Fair-Use-Beschränkungen abhängen.',
      item2: 'Der Dienstleister behält sich das Recht vor, den Umfang der Dienstleistungen mit einer Kündigungsfrist von 30 Tagen zu ändern.',
      item3: 'Der Dienstleister bemüht sich, den Dienst ununterbrochen verfügbar zu machen, garantiert aber keine 100%ige Verfügbarkeit.',
    },

    section5: {
      title: 'Kostenlose Nutzung und künftige Gebühren',
      item1:
        'Zum Zeitpunkt des Inkrafttretens dieser Nutzungsbedingungen wird der Dienst kostenlos bereitgestellt. Der Dienstleister erhebt keine Gebühren für Registrierung, Konto oder Nutzung der grundlegenden Funktionen des Dienstes.',
      item2:
        'Der Dienstleister kann künftig kostenpflichtige Pläne, Limits oder Premium-Funktionen einführen, jedoch nur nach vorheriger Benachrichtigung der Nutzer mit einer Frist von mindestens 30 Tagen.',
      item3:
        'Die Anwendung von Gebühren gegenüber einem bestimmten Nutzer erfordert dessen ausdrückliche Zustimmung zu den neuen Bedingungen oder eine gesonderte Bestellung einer kostenpflichtigen Dienstleistung; ohne Zustimmung entsteht keine Zahlungspflicht.',
      item4:
        'Der Dienstleister erhebt keine Gebühren automatisch oder ohne Zustimmung des Nutzers, insbesondere nicht ohne vorherige Darstellung des Preises, des Umfangs der kostenpflichtigen Dienstleistung und der Abrechnungsregeln.',
      item5:
        'Akzeptiert ein Nutzer künftige kostenpflichtige Bedingungen nicht, kann er den kostenlosen Umfang der Dienstleistungen weiter nutzen, sofern dieser verfügbar bleibt, oder die Nutzung des Dienstes vor Inkrafttreten der Änderungen beenden.',
      item6:
        'Wenn kostenpflichtige Dienstleistungen eingeführt werden, werden Zahlungs-, Rechnungs-, Erstattungs- und Zahlungsreklamationsregeln in aktualisierten Nutzungsbedingungen oder separaten vom Nutzer akzeptierten Bedingungen festgelegt.',
    },

    section6: {
      title: 'Pflichten des Nutzers',
      intro: 'Der Nutzer erklärt sich verpflichtet zu:',
      item1: 'Der Nutzung des Dienstes gemäß seinem Zweck und in Übereinstimmung mit den Gesetzen.',
      item2: 'Der Unterlassung von Handlungen, die den Betrieb des Dienstes stören könnten.',
      item3: 'Der Nichtoffenlegung von Anmeldedaten an Dritte.',
      item4: 'Der Einhaltung von Rechten am geistigen Eigentum.',
      item5intro: 'Der Nichtverbreitung von Inhalten über den Dienst, die:',
      item5illegal: 'Rechtswidrig sind',
      item5rights: 'Rechte Dritter verletzen',
      item5spam: 'Spam oder Malware enthalten',
      item5offensive: 'Beleidigend oder diskriminierend sind',
    },

    section7: {
      title: 'Haftung',
      item1intro: 'Der Dienstleister haftet nicht für:',
      item1content: 'Von Nutzern veröffentlichte Inhalte',
      item1interruptions: 'Dienstunterbrechungen aufgrund von Ursachen außerhalb der Kontrolle des Dienstleisters',
      item1dataLoss: 'Datenverluste aufgrund von Nutzerhandlungen',
      item1damages: 'Schäden, die sich aus unsachgemäßer Nutzung des Dienstes ergeben',
      item2:
        'Soweit gesetzlich zulässig, ist die Haftung des Dienstleisters gegenüber geschäftlichen Nutzern während der kostenlosen Bereitstellung des Dienstes im größtmöglichen zulässigen Umfang beschränkt; nach einer etwaigen Einführung kostenpflichtiger Dienstleistungen kann sie auf die vom jeweiligen Nutzer in den letzten 12 Monaten für den Dienst gezahlten Gebühren beschränkt werden.',
      item3: 'Haftungsbeschränkungen gelten nicht für Schäden, die vorsätzlich oder durch grobe Fahrlässigkeit verursacht wurden.',
    },

    section8: {
      title: 'Geistiges Eigentum',
      item1: 'Der Dienst, seine grafischen Elemente, Quellcode, Datenbanken und Dokumentation sind Eigentum des Dienstleisters und durch Urheberrecht geschützt.',
      item2: 'Der Nutzer erhält eine nicht ausschließliche, nicht übertragbare Lizenz zur Nutzung des Dienstes gemäß dieser Nutzungsbedingungen.',
      item3intro: 'Untersagt ist:',
      item3copying: 'Das Kopieren oder Ändern des Quellcodes des Dienstes',
      item3reverse: 'Reverse Engineering',
      item3trademarks: 'Die Nutzung von Markenzeichen des Dienstleisters ohne Genehmigung',
      item4: 'Der Nutzer behält die Rechte an Inhalten, die in den Dienst eingegeben werden, und gewährt dem Dienstleister eine Lizenz zu deren Verarbeitung bei der Erbringung von Dienstleistungen.',
    },

    section9: {
      title: 'Datenschutz',
      item1: 'Die Grundsätze der Verarbeitung personenbezogener Daten sind in der Datenschutzrichtlinie festgelegt.',
      item2intro: 'Der Nutzer, der Verwalter personenbezogener Daten seiner Kunden ist, erklärt sich verpflichtet zu:',
      item2legal: 'Der Verfügung über eine rechtliche Grundlage für die Verarbeitung von Daten',
      item2inform: 'Der Benachrichtigung von Kunden über die Nutzung von Chataptor',
      item2gdpr: 'Der Einhaltung der Datenschutz-Grundverordnung (DSGVO)',
      item3: 'Auf Anforderung des Nutzers schließt der Dienstleister einen Vertrag zur Datenverarbeitung (DPA) ab.',
    },

    section10: {
      title: 'Beendigung des Vertrags',
      item1: 'Der Nutzer kann sein Konto jederzeit über die Einstellungen im Dashboard oder durch Kontakt mit dem Support löschen.',
      item2: 'Der Dienstleister kann den Vertrag mit einer Kündigungsfrist von 30 Tagen beenden.',
      item3intro: 'Der Dienstleister kann den Vertrag mit sofortiger Wirkung in folgenden Fällen beenden:',
      item3violation: 'Grobe Verletzung dieser Nutzungsbedingungen',
      item3harm: 'Handlungen zum Schaden des Dienstleisters oder anderer Nutzer',
      item3falseData: 'Angabe falscher Registrierungsdaten',
      item4: 'Nach Vertragsbeendigung werden die Nutzerdaten gemäß der Datenschutzrichtlinie gelöscht.',
    },

    section11: {
      title: 'Beschwerden',
      item1: 'Beschwerden sollten unter support@browin.pl eingereicht werden.',
      item2intro: 'Eine Beschwerde sollte enthalten:',
      item2contact: 'Kontaktdaten des Nutzers',
      item2problem: 'Beschreibung des Problems',
      item2resolution: 'Erwartete Lösungsweise',
      item3: 'Der Dienstleister bearbeitet Beschwerden innerhalb von 14 Tagen nach ihrem Eingang.',
      item4: 'Der Nutzer wird per E-Mail über das Ergebnis der Beschwerdeverarbeitung benachrichtigt.',
    },

    section12: {
      title: 'Außergerichtliche Streitbeilegung',
      intro: 'Verbraucher haben die Möglichkeit, außergerichtliche Verfahren zur Behandlung von Beschwerden und zur Verfolgung von Ansprüchen zu nutzen:',
      odrPlatform: { title: 'ODR-Plattform' },
      tradeInspection: { title: 'Verbraucherschutzbehörden', description: 'Unterstützung bei der Beilegung von Verbraucherstreitigkeiten' },
      consumerCourts: { title: 'Schiedsgerichte für Verbraucher', description: 'Verfahren bei den zuständigen Behörden' },
    },

    section13: {
      title: 'Schlussbestimmungen',
      item1: 'Diese Nutzungsbedingungen gelten ab 18. Mai 2026.',
      item2:
        'Der Dienstleister behält sich das Recht vor, die Nutzungsbedingungen zu ändern. Nutzer werden mindestens 30 Tage vor einer Änderung benachrichtigt; die Anwendung kostenpflichtiger Dienstleistungen gegenüber einem bestimmten Nutzer erfordert dessen ausdrückliche Zustimmung.',
      item3: 'In Angelegenheiten, die in diesen Nutzungsbedingungen nicht geregelt sind, gelten die Gesetze Deutschlands.',
      item4: 'Alle Streitigkeiten, die sich aus diesen Nutzungsbedingungen ergeben, unterliegen der ausschließlichen Gerichtsbarkeit des Gerichts am Sitz des Dienstleisters (für Geschäftsstreitigkeiten) oder des für den Wohnort des Verbrauchers zuständigen Gerichts.',
      item5: 'Sollte eine Bestimmung dieser Nutzungsbedingungen für ungültig befunden werden, bleiben die übrigen Bestimmungen gültig.',
    },

    section14: {
      title: 'Kontakt',
      intro: 'Bei Fragen zu diesen Nutzungsbedingungen kontaktieren Sie uns bitte unter:',
      email: 'E-Mail:',
      phone: 'Telefon:',
      customerService: 'Kundenservice:',
    },

    footer: {
      tagline:
        'Das Tor zu Kundengesprächen auf der ganzen Welt. Wir überwinden Sprachbarrieren durch die Verbindung von KI mit menschlicher Empathie.',
      contact: 'Kontakt',
      legal: 'Rechtliches',
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen',
      copyright: 'Alle Rechte vorbehalten.',
      uptime: 'Verfügbarkeit: 99,89%',
      location: 'Łódź, Polen',
    },
  },
  fr: {
    title: 'Conditions d\'utilisation',
    description: 'Conditions d\'utilisation de la plateforme Chataptor',
    backLink: 'Accueil',
    tocTitle: 'Table des matières',
    lastUpdate: 'Dernière mise à jour : 18 mai 2026',
    introTitle: 'Règles d\'utilisation de la plateforme Chataptor',
    introText: 'Les présentes Conditions d\'utilisation régissent l\'utilisation de la plateforme Chataptor. En utilisant nos services, vous acceptez ces conditions.',
    needHelp: 'Besoin d\'aide ?',
    privacyLink: 'Politique de confidentialité',
    termsOfUse: 'Conditions d\'utilisation',

    toc: {
      definitions: 'Définitions',
      generalProvisions: 'Dispositions générales',
      registrationAccount: 'Inscription et Compte',
      scopeOfServices: 'Étendue des Services',
      feesPayments: 'Utilisation gratuite et frais futurs',
      userObligations: 'Obligations de l\'Utilisateur',
      liability: 'Responsabilité',
      intellectualProperty: 'Propriété intellectuelle',
      dataProtection: 'Protection des données',
      termination: 'Résiliation du Contrat',
      complaints: 'Réclamations',
      disputeResolution: 'Résolution extrajudiciaire',
      finalProvisions: 'Dispositions finales',
      contact: 'Contact',
    },

    section1: {
      title: 'Définitions',
      intro: 'Dans les présentes Conditions d\'utilisation, les termes suivants ont les significations ci-après :',
      serviceProvider: { term: 'Prestataire de services', definition: 'BROWIN Spółka z ograniczoną odpowiedzialnością Spółka komandytowa, basée à Łódź (93-373), ul. Pryncypalna 129/141, NIP: 729-268-73-25, REGON: 101003641, KRS: 0000459418' },
      platform: { term: 'Service / Plateforme', definition: 'La plateforme Chataptor accessible à l\'adresse chataptor.com' },
      user: { term: 'Utilisateur', definition: 'Une personne physique, morale ou toute autre entité juridique utilisant le Service' },
      account: { term: 'Compte', definition: 'Le compte personnel de l\'Utilisateur sur le Service' },
      services: { term: 'Services', definition: 'Les fonctionnalités mises à disposition par le Service, notamment la gestion du chat, la traduction des messages, les intégrations' },
      widget: { term: 'Widget', definition: 'Composant de chat à intégrer sur le site web de l\'Utilisateur' },
    },

    section2: {
      title: 'Dispositions générales',
      item1: 'Les présentes Conditions d\'utilisation régissent les modalités de fourniture des services électroniques par le Prestataire de services.',
      item2: 'L\'utilisation du Service implique l\'acceptation des présentes Conditions d\'utilisation ainsi que de la Politique de confidentialité.',
      item3: 'Le Prestataire de services fournit ses services conformément aux lois applicables en France et dans l\'Union européenne.',
      item4: 'Le Service est destiné aux entreprises (B2B) ainsi qu\'aux consommateurs.',
    },

    section3: {
      title: 'Inscription et Compte',
      item1: 'L\'accès à la fonctionnalité complète du Service nécessite la création d\'un Compte.',
      item2intro: 'L\'inscription est gratuite et nécessite la fourniture des informations suivantes :',
      item2email: 'Adresse e-mail',
      item2password: 'Mot de passe',
      item2org: 'Nom de l\'organisation (optionnel)',
      item3: 'L\'Utilisateur peut également s\'inscrire en utilisant un compte Google (OAuth).',
      item4intro: 'L\'Utilisateur s\'engage à :',
      item4truthful: 'Fournir des données exactes et véridiques',
      item4confidential: 'Maintenir la confidentialité de ses identifiants de connexion',
      item4unauthorized: 'Informer immédiatement le Prestataire de tout accès non autorisé à son Compte',
      item5: 'Le Prestataire de services peut refuser l\'inscription ou bloquer un Compte en cas de violation des présentes Conditions d\'utilisation.',
    },

    section4: {
      title: 'Étendue des Services',
      intro: 'La plateforme Chataptor propose les fonctionnalités suivantes :',
      liveChat: { title: 'Live Chat', description: 'Communication en temps réel avec les clients via le widget intégré sur votre site' },
      aiTranslation: { title: 'Traduction IA', description: 'Traduction automatique des messages entre plusieurs langues' },
      agentPanel: { title: 'Tableau de bord Agent', description: 'Interface centralisée pour gérer l\'ensemble de vos conversations' },
      integrations: { title: 'Intégrations', description: 'Connexion avec e-mail, Messenger, WhatsApp et d\'autres canaux' },
      item1:
        'Le Service est actuellement fourni gratuitement ; la disponibilité de certaines fonctionnalités peut dépendre de limites techniques, de sécurité, de stabilité ou d\'utilisation équitable.',
      item2: 'Le Prestataire de services se réserve le droit de modifier l\'étendue des Services avec un préavis de 30 jours.',
      item3: 'Le Prestataire de services s\'efforce de maintenir le Service en continu, mais ne garantit pas une disponibilité de 100 %.',
    },

    section5: {
      title: 'Utilisation gratuite et frais futurs',
      item1:
        'À la date d\'entrée en vigueur des présentes Conditions d\'utilisation, le Service est fourni gratuitement. Le Prestataire de services ne facture pas l\'inscription, le Compte ni l\'utilisation des fonctionnalités principales du Service.',
      item2:
        'Le Prestataire de services peut introduire à l\'avenir des formules payantes, des limites ou des fonctionnalités premium uniquement après avoir informé les Utilisateurs au moins 30 jours à l\'avance.',
      item3:
        'L\'application de frais à un Utilisateur donné nécessite son acceptation expresse des nouvelles conditions ou une commande séparée d\'un service payant ; l\'absence d\'acceptation signifie qu\'aucune obligation de paiement ne naît.',
      item4:
        'Le Prestataire de services ne prélèvera aucun frais automatiquement ni sans le consentement de l\'Utilisateur, notamment sans présenter au préalable le prix, l\'étendue du service payant et les règles de facturation.',
      item5:
        'Si un Utilisateur n\'accepte pas de futures conditions payantes, il peut continuer à utiliser le périmètre gratuit des Services s\'il reste disponible, ou cesser d\'utiliser le Service avant l\'entrée en vigueur des modifications.',
      item6:
        'Si des services payants sont introduits, les règles de paiement, de facturation, de remboursement et de réclamation liées aux paiements seront précisées dans des Conditions d\'utilisation mises à jour ou dans des conditions séparées acceptées par l\'Utilisateur.',
    },

    section6: {
      title: 'Obligations de l\'Utilisateur',
      intro: 'L\'Utilisateur s\'engage à :',
      item1: 'Utiliser le Service conformément à sa destination et aux dispositions légales en vigueur.',
      item2: 'Ne pas entreprendre d\'actions susceptibles de perturber le fonctionnement du Service.',
      item3: 'Ne pas divulguer ses identifiants de connexion à des tiers.',
      item4: 'Respecter les droits de propriété intellectuelle.',
      item5intro: 'Ne pas diffuser via le Service de contenus :',
      item5illegal: 'Contraires à la loi',
      item5rights: 'Violant les droits de tiers',
      item5spam: 'Contenant du spam ou des logiciels malveillants',
      item5offensive: 'De nature offensante ou discriminatoire',
    },

    section7: {
      title: 'Responsabilité',
      item1intro: 'Le Prestataire de services n\'assume pas la responsabilité pour :',
      item1content: 'Les contenus publiés par les Utilisateurs',
      item1interruptions: 'Les interruptions du Service résultant de causes indépendantes du Prestataire',
      item1dataLoss: 'La perte de données résultant des actions de l\'Utilisateur',
      item1damages: 'Les préjudices résultant d\'une utilisation incorrecte du Service',
      item2:
        'Dans la mesure permise par la loi, lorsque le Service est fourni gratuitement, la responsabilité du Prestataire envers les Utilisateurs professionnels est limitée dans toute la mesure autorisée ; si des services payants sont introduits, elle peut être limitée aux frais payés par cet Utilisateur pour le Service au cours des 12 derniers mois.',
      item3: 'Les limitations de responsabilité ne s\'appliquent pas aux préjudices causés intentionnellement ou par négligence grave.',
    },

    section8: {
      title: 'Propriété intellectuelle',
      item1: 'Le Service, ses éléments graphiques, le code source, les bases de données et la documentation sont la propriété du Prestataire de services et sont protégés par le droit d\'auteur.',
      item2: 'L\'Utilisateur dispose d\'une licence non exclusive et incessible pour utiliser le Service conformément aux présentes Conditions d\'utilisation.',
      item3intro: 'Il est interdit de :',
      item3copying: 'Copier ou modifier le code du Service',
      item3reverse: 'Procéder à de l\'ingénierie inverse',
      item3trademarks: 'Utiliser les marques commerciales du Prestataire de services sans autorisation',
      item4: 'L\'Utilisateur conserve les droits sur les contenus qu\'il introduit dans le Service, en accordant au Prestataire de services une licence pour leur traitement afin de fournir les Services.',
    },

    section9: {
      title: 'Protection des données personnelles',
      item1: 'Les modalités de traitement des données personnelles sont définies dans la Politique de confidentialité.',
      item2intro: 'L\'Utilisateur qui est responsable de traitement des données personnelles de ses clients s\'engage à :',
      item2legal: 'Disposer d\'une base légale pour le traitement des données',
      item2inform: 'Informer ses clients de l\'utilisation de Chataptor',
      item2gdpr: 'Respecter les dispositions du RGPD',
      item3: 'À la demande de l\'Utilisateur, le Prestataire de services conclura un contrat de traitement des données personnelles (DPA).',
    },

    section10: {
      title: 'Résiliation du Contrat',
      item1: 'L\'Utilisateur peut à tout moment supprimer son Compte via les paramètres de son tableau de bord ou en contactant l\'assistance.',
      item2: 'Le Prestataire de services peut résilier le contrat avec un préavis de 30 jours.',
      item3intro: 'Le Prestataire de services peut résilier le contrat avec effet immédiat en cas de :',
      item3violation: 'Violation grave des présentes Conditions d\'utilisation',
      item3harm: 'Actions préjudiciables au Prestataire de services ou aux autres Utilisateurs',
      item3falseData: 'Fourniture de fausses données lors de l\'inscription',
      item4: 'Après résiliation du contrat, les données de l\'Utilisateur sont supprimées conformément à la Politique de confidentialité.',
    },

    section11: {
      title: 'Réclamations',
      item1: 'Les réclamations doivent être adressées à : support@browin.pl',
      item2intro: 'La réclamation doit contenir :',
      item2contact: 'Les coordonnées de l\'Utilisateur',
      item2problem: 'Une description du problème',
      item2resolution: 'La solution souhaitée',
      item3: 'Le Prestataire de services examinera les réclamations dans un délai de 14 jours à compter de leur réception.',
      item4: 'L\'Utilisateur sera informé du résultat de l\'examen par voie électronique.',
    },

    section12: {
      title: 'Résolution extrajudiciaire des litiges',
      intro: 'L\'Utilisateur qui est consommateur a la possibilité d\'utiliser des mécanismes extrajudiciaires de résolution des réclamations :',
      odrPlatform: { title: 'Plateforme ODR' },
      tradeInspection: { title: 'Inspectorats régionaux du Commerce', description: 'Assistance dans la résolution des litiges de consommation' },
      consumerCourts: { title: 'Tribunaux d\'arbitrage permanents pour les consommateurs', description: 'Fonctionnant auprès des Inspectorats régionaux' },
    },

    section13: {
      title: 'Dispositions finales',
      item1: 'Les présentes Conditions d\'utilisation entrent en vigueur à compter du 18 mai 2026.',
      item2:
        'Le Prestataire de services se réserve le droit de modifier les Conditions d\'utilisation. Les Utilisateurs seront informés des modifications au moins 30 jours à l\'avance, et l\'application de services payants à un Utilisateur donné nécessite son acceptation expresse.',
      item3: 'Pour les matières non réglementées par les présentes Conditions d\'utilisation, les dispositions du droit français s\'appliquent.',
      item4: 'Les litiges découlant des présentes Conditions d\'utilisation seront résolus par le tribunal compétent du siège du Prestataire de services (pour les litiges avec des entreprises) ou par le tribunal compétent du lieu de résidence du consommateur.',
      item5: 'Si une disposition quelconque des présentes Conditions d\'utilisation est jugée invalide, les dispositions restantes demeurent en vigueur.',
    },

    section14: {
      title: 'Contact',
      intro: 'Pour toute question concernant les Conditions d\'utilisation, veuillez nous contacter :',
      email: 'E-mail :',
      phone: 'Téléphone :',
      customerService: 'Service clientèle :',
    },

    footer: {
      tagline:
        'La porte vers les conversations client dans le monde entier. Nous brisons les barrières linguistiques en combinant l\'IA avec l\'empathie humaine.',
      contact: 'Contact',
      legal: 'Légal',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
      copyright: 'Tous droits réservés.',
      uptime: 'Disponibilité : 99,89%',
      location: 'Łódź, Pologne',
    },
  },
  es: {
    title: 'Términos de servicio',
    description: 'Términos de uso de la plataforma Chataptor',
    backLink: 'Inicio',
    tocTitle: 'Índice',
    lastUpdate: 'Última actualización: 18 de mayo de 2026',
    introTitle: 'Términos de servicio de la plataforma Chataptor',
    introText: 'Los presentes Términos de servicio regulan el uso de la plataforma Chataptor. Al utilizar nuestros servicios, usted acepta estos términos y condiciones.',
    needHelp: '¿Necesita ayuda?',
    privacyLink: 'Política de privacidad',
    termsOfUse: 'Términos de servicio',

    toc: {
      definitions: 'Definiciones',
      generalProvisions: 'Disposiciones generales',
      registrationAccount: 'Registro y Cuenta',
      scopeOfServices: 'Alcance de los Servicios',
      feesPayments: 'Uso gratuito y posibles tarifas futuras',
      userObligations: 'Obligaciones del Usuario',
      liability: 'Responsabilidad',
      intellectualProperty: 'Propiedad intelectual',
      dataProtection: 'Protección de datos',
      termination: 'Terminación del contrato',
      complaints: 'Reclamaciones',
      disputeResolution: 'Resolución de controversias',
      finalProvisions: 'Disposiciones finales',
      contact: 'Contacto',
    },

    section1: {
      title: 'Definiciones',
      intro: 'En los presentes Términos de servicio se utilizan las siguientes definiciones:',
      serviceProvider: { term: 'Proveedor del servicio', definition: 'BROWIN Spółka z ograniczoną odpowiedzialnością Spółka komandytowa, domiciliada en Łódź (93-373), calle Pryncypalna 129/141, NIF: 729-268-73-25, REGON: 101003641, CRS: 0000459418' },
      platform: { term: 'Servicio / Plataforma', definition: 'La plataforma Chataptor disponible en el sitio web chataptor.com' },
      user: { term: 'Usuario', definition: 'Persona física, persona jurídica o entidad que utiliza el Servicio' },
      account: { term: 'Cuenta', definition: 'La cuenta individual del Usuario en el Servicio' },
      services: { term: 'Servicios', definition: 'Las funcionalidades proporcionadas por el Servicio, incluyendo la gestión de chat, la traducción de mensajes e integraciones' },
      widget: { term: 'Widget', definition: 'El componente de chat que debe incrustarse en el sitio web del Usuario' },
    },

    section2: {
      title: 'Disposiciones generales',
      item1: 'Los presentes Términos de servicio regulan las condiciones de prestación de servicios electrónicos por parte del Proveedor del servicio.',
      item2: 'El uso del Servicio implica la aceptación de los presentes Términos de servicio y la Política de privacidad.',
      item3: 'El Proveedor del servicio presta sus servicios de conformidad con la legislación vigente en España y la Unión Europea.',
      item4: 'El Servicio está destinado a empresas (B2B) y consumidores.',
    },

    section3: {
      title: 'Registro y Cuenta',
      item1: 'El uso de la funcionalidad completa del Servicio requiere la creación de una Cuenta.',
      item2intro: 'El registro es gratuito y requiere proporcionar:',
      item2email: 'Dirección de correo electrónico',
      item2password: 'Contraseña',
      item2org: 'Nombre de la organización (opcional)',
      item3: 'El Usuario puede registrarse también utilizando su cuenta de Google (OAuth).',
      item4intro: 'El Usuario se compromete a:',
      item4truthful: 'Proporcionar datos verdaderos y precisos',
      item4confidential: 'Mantener la confidencialidad de sus datos de acceso',
      item4unauthorized: 'Informar inmediatamente al Proveedor del servicio sobre cualquier acceso no autorizado a su Cuenta',
      item5: 'El Proveedor del servicio puede rechazar el registro o bloquear la Cuenta en caso de incumplimiento de los presentes Términos de servicio.',
    },

    section4: {
      title: 'Alcance de los Servicios',
      intro: 'La plataforma Chataptor ofrece las siguientes funcionalidades:',
      liveChat: { title: 'Chat en vivo', description: 'Comunicación en tiempo real con los clientes a través del widget en su sitio web' },
      aiTranslation: { title: 'Traducción IA', description: 'Traducción automática de mensajes entre múltiples idiomas' },
      agentPanel: { title: 'Panel de agente', description: 'Interfaz centralizada para gestionar todas las conversaciones' },
      integrations: { title: 'Integraciones', description: 'Conexión con correo electrónico, Messenger, WhatsApp y otros canales' },
      item1:
        'El Servicio se proporciona actualmente de forma gratuita; la disponibilidad de funcionalidades específicas puede depender de límites técnicos, de seguridad, de estabilidad o de uso razonable.',
      item2: 'El Proveedor del servicio se reserva el derecho de modificar el alcance de los Servicios con un período de notificación de 30 días.',
      item3: 'El Proveedor del servicio hace esfuerzos para que el Servicio funcione ininterrumpidamente, pero no garantiza una disponibilidad del 100%.',
    },

    section5: {
      title: 'Uso gratuito y posibles tarifas futuras',
      item1:
        'A la fecha de entrada en vigor de estos Términos, el Servicio se proporciona de forma gratuita. El Proveedor del servicio no cobra por el registro, la Cuenta ni el uso de las funcionalidades principales del Servicio.',
      item2:
        'El Proveedor del servicio podrá introducir en el futuro planes de pago, límites o funcionalidades premium únicamente tras informar previamente a los Usuarios con una antelación mínima de 30 días.',
      item3:
        'La aplicación de tarifas a un Usuario concreto requiere su aceptación expresa de las nuevas condiciones o un pedido separado de un servicio de pago; la falta de aceptación significa que no nace obligación de pago.',
      item4:
        'El Proveedor del servicio no cobrará ninguna tarifa de forma automática ni sin el consentimiento del Usuario, en particular sin presentar previamente el precio, el alcance del servicio de pago y las reglas de facturación.',
      item5:
        'Si un Usuario no acepta futuras condiciones de pago, podrá seguir utilizando el alcance gratuito de los Servicios si está disponible, o dejar de usar el Servicio antes de que los cambios entren en vigor.',
      item6:
        'Si se introducen servicios de pago, las reglas de pago, facturación, reembolsos y reclamaciones de pago se establecerán en Términos actualizados o en condiciones separadas aceptadas por el Usuario.',
    },

    section6: {
      title: 'Obligaciones del Usuario',
      intro: 'El Usuario se compromete a:',
      item1: 'Utilizar el Servicio de conformidad con su propósito y con la legislación vigente.',
      item2: 'No llevar a cabo acciones que puedan interferir con el funcionamiento del Servicio.',
      item3: 'No compartir datos de acceso con terceros.',
      item4: 'Respetar los derechos de propiedad intelectual.',
      item5intro: 'No distribuir a través del Servicio contenido:',
      item5illegal: 'Que sea ilegal o contrario a la ley',
      item5rights: 'Que viole los derechos de terceros',
      item5spam: 'Que contenga spam o software malicioso',
      item5offensive: 'De carácter ofensivo o discriminatorio',
    },

    section7: {
      title: 'Responsabilidad',
      item1intro: 'El Proveedor del servicio no es responsable de:',
      item1content: 'El contenido publicado por los Usuarios',
      item1interruptions: 'Las interrupciones en el funcionamiento del Servicio por causas ajenas al Proveedor del servicio',
      item1dataLoss: 'La pérdida de datos derivada de las acciones del Usuario',
      item1damages: 'Los daños resultantes del uso indebido del Servicio',
      item2:
        'En la medida permitida por la ley, mientras el Servicio se proporcione de forma gratuita, la responsabilidad del Proveedor del servicio ante los Usuarios comerciales se limita en la máxima medida permitida; si se introducen servicios de pago, podrá limitarse a las tarifas pagadas por ese Usuario por el Servicio en los últimos 12 meses.',
      item3: 'Las limitaciones de responsabilidad no se aplican a los daños causados intencionalmente o por negligencia grave.',
    },

    section8: {
      title: 'Propiedad intelectual',
      item1: 'El Servicio, sus elementos gráficos, código fuente, bases de datos y documentación son propiedad del Proveedor del servicio y están protegidos por derechos de autor.',
      item2: 'El Usuario recibe una licencia no exclusiva e intransferible para utilizar el Servicio de conformidad con los presentes Términos de servicio.',
      item3intro: 'Se prohíbe:',
      item3copying: 'Copiar o modificar el código del Servicio',
      item3reverse: 'Ingeniería inversa',
      item3trademarks: 'Usar marcas comerciales del Proveedor del servicio sin consentimiento',
      item4: 'El Usuario retiene los derechos sobre el contenido que introduce en el Servicio, otorgando al Proveedor del servicio una licencia para procesarlo con el fin de prestar los Servicios.',
    },

    section9: {
      title: 'Protección de datos personales',
      item1: 'Las reglas de procesamiento de datos personales se especifican en la Política de privacidad.',
      item2intro: 'El Usuario que es responsable del tratamiento de datos personales de sus clientes se compromete a:',
      item2legal: 'Tener una base legal para el procesamiento de datos',
      item2inform: 'Informar a sus clientes sobre el uso de Chataptor',
      item2gdpr: 'Cumplir con el Reglamento General de Protección de Datos (RGPD)',
      item3: 'A solicitud del Usuario, el Proveedor del servicio celebrará un acuerdo de encargo del tratamiento de datos personales (DPA).',
    },

    section10: {
      title: 'Terminación del contrato',
      item1: 'El Usuario puede eliminar su Cuenta en cualquier momento a través de la configuración del panel o contactando con el servicio de atención al cliente.',
      item2: 'El Proveedor del servicio puede rescindir el contrato con un período de notificación de 30 días.',
      item3intro: 'El Proveedor del servicio puede rescindir el contrato con efecto inmediato en caso de:',
      item3violation: 'Incumplimiento grave de los presentes Términos de servicio',
      item3harm: 'Acciones que causen daño al Proveedor del servicio u otros Usuarios',
      item3falseData: 'Proporcionar datos falsos en el registro',
      item4: 'Después de la terminación del contrato, los datos del Usuario se eliminan de conformidad con la Política de privacidad.',
    },

    section11: {
      title: 'Reclamaciones',
      item1: 'Las reclamaciones deben presentarse a: support@browin.pl',
      item2intro: 'La reclamación debe contener:',
      item2contact: 'Datos de contacto del Usuario',
      item2problem: 'Descripción del problema',
      item2resolution: 'Forma esperada de resolución',
      item3: 'El Proveedor del servicio examina las reclamaciones en un plazo de 14 días desde su recepción.',
      item4: 'El Usuario será informado del resultado del examen de la reclamación por vía electrónica.',
    },

    section12: {
      title: 'Resolución extrajudicial de controversias',
      intro: 'El Usuario que es consumidor tiene la posibilidad de utilizar métodos extrajudiciales para el examen de reclamaciones y la resolución de controversias:',
      odrPlatform: { title: 'Plataforma RLL' },
      tradeInspection: { title: 'Inspectorados Provinciales de Comercio', description: 'Ayuda en la resolución de controversias de consumo' },
      consumerCourts: { title: 'Tribunales Arbitrales de Consumo', description: 'Actuando en los Inspectorados Provinciales de Comercio' },
    },

    section13: {
      title: 'Disposiciones finales',
      item1: 'Estos Términos entran en vigor el 18 de mayo de 2026.',
      item2:
        'El Proveedor del servicio se reserva el derecho de modificar los Términos. Los Usuarios serán informados de los cambios con al menos 30 días de antelación, y la aplicación de servicios de pago a un Usuario concreto requiere su aceptación expresa.',
      item3: 'En los asuntos no regulados por los presentes Términos de servicio se aplicará la legislación española.',
      item4: 'Las controversias derivadas de los presentes Términos de servicio serán resueltas por el tribunal competente de la sede del Proveedor del servicio (para controversias con empresas) o por el tribunal competente del lugar de domicilio del consumidor.',
      item5: 'Si una disposición de los presentes Términos de servicio se considera inválida, las demás disposiciones permanecen en vigor.',
    },

    section14: {
      title: 'Contacto',
      intro: 'Para cualquier pregunta sobre los presentes Términos de servicio, le rogamos que se comunique con nosotros:',
      email: 'Correo electrónico:',
      phone: 'Teléfono:',
      customerService: 'Atención al cliente:',
    },

    footer: {
      tagline:
        'La puerta a conversaciones con clientes en todo el mundo. Rompemos las barreras lingüísticas combinando IA con empatía humana.',
      contact: 'Contacto',
      legal: 'Legal',
      privacy: 'Política de privacidad',
      terms: 'Términos de servicio',
      copyright: 'Todos los derechos reservados.',
      uptime: 'Disponibilidad: 99.89%',
      location: 'Łódź, Polonia',
    },
  },
  it: {
    title: 'Termini di servizio',
    description: 'Termini di utilizzo della piattaforma Chataptor',
    backLink: 'Home',
    tocTitle: 'Indice dei contenuti',
    lastUpdate: 'Ultimo aggiornamento: 18 maggio 2026',
    introTitle: 'Norme d\'utilizzo della piattaforma Chataptor',
    introText: 'I presenti Termini di servizio disciplinano l\'utilizzo della piattaforma Chataptor. Utilizzando i nostri servizi, l\'utente accetta integralmente le presenti condizioni.',
    needHelp: 'Hai bisogno di aiuto?',
    privacyLink: 'Informativa sulla privacy',
    termsOfUse: 'Termini di servizio',

    toc: {
      definitions: 'Definizioni',
      generalProvisions: 'Disposizioni generali',
      registrationAccount: 'Registrazione e Account',
      scopeOfServices: 'Portata dei servizi',
      feesPayments: 'Uso gratuito e possibili tariffe future',
      userObligations: 'Obblighi dell\'utente',
      liability: 'Responsabilità',
      intellectualProperty: 'Proprietà intellettuale',
      dataProtection: 'Protezione dei dati',
      termination: 'Risoluzione del contratto',
      complaints: 'Reclami',
      disputeResolution: 'Risoluzione delle controversie',
      finalProvisions: 'Disposizioni finali',
      contact: 'Contatti',
    },

    section1: {
      title: 'Definizioni',
      intro: 'Nel presente Regolamento si applicano le seguenti definizioni:',
      serviceProvider: { term: 'Fornitore del servizio', definition: 'BROWIN Società a responsabilità limitata in accomandita semplice, con sede a Łódź (93-373), via Pryncypalna 129/141, Partita IVA: 729-268-73-25, Codice REGON: 101003641, Numero di iscrizione REA: 0000459418' },
      platform: { term: 'Servizio / Piattaforma', definition: 'La piattaforma Chataptor accessibile all\'indirizzo chataptor.com' },
      user: { term: 'Utente', definition: 'Una persona fisica, una persona giuridica o un\'organizzazione che utilizza il Servizio' },
      account: { term: 'Account', definition: 'L\'account individuale dell\'utente nel Servizio' },
      services: { term: 'Servizi', definition: 'Le funzionalità fornite dal Servizio, inclusa la gestione della chat, la traduzione dei messaggi e le integrazioni' },
      widget: { term: 'Widget', definition: 'Il componente di chat da incorporare nel sito Web dell\'utente' },
    },

    section2: {
      title: 'Disposizioni generali',
      item1: 'Il presente Regolamento disciplina le modalità di erogazione dei servizi telematici da parte del Fornitore.',
      item2: 'L\'utilizzo del Servizio implica l\'accettazione integrale del presente Regolamento e dell\'Informativa sulla privacy.',
      item3: 'Il Fornitore eroga i servizi in conformità alle normative vigenti della legge italiana e dell\'Unione europea.',
      item4: 'Il Servizio è destinato sia a imprenditori (B2B) che a consumatori.',
    },

    section3: {
      title: 'Registrazione e Account',
      item1: 'L\'utilizzo completo delle funzionalità del Servizio richiede la creazione di un Account.',
      item2intro: 'La registrazione è gratuita e richiede di fornire:',
      item2email: 'Indirizzo di posta elettronica',
      item2password: 'Password',
      item2org: 'Nome dell\'organizzazione (facoltativo)',
      item3: 'L\'utente può inoltre registrarsi utilizzando il suo account Google (OAuth).',
      item4intro: 'L\'utente si impegna a:',
      item4truthful: 'Fornire dati veritieri e corretti',
      item4confidential: 'Mantenere la riservatezza dei dati di accesso',
      item4unauthorized: 'Notificare immediatamente il Fornitore in caso di accesso non autorizzato all\'Account',
      item5: 'Il Fornitore può rifiutare la registrazione o bloccare l\'Account in caso di violazione del presente Regolamento.',
    },

    section4: {
      title: 'Portata dei servizi',
      intro: 'La piattaforma Chataptor offre le seguenti funzionalità:',
      liveChat: { title: 'Live Chat', description: 'Comunicazione in tempo reale con i clienti tramite widget sul sito Web' },
      aiTranslation: { title: 'Traduzione AI', description: 'Traduzione automatica dei messaggi tra più lingue' },
      agentPanel: { title: 'Pannello dell\'agente', description: 'Interfaccia centralizzata per la gestione di tutte le conversazioni' },
      integrations: { title: 'Integrazioni', description: 'Collegamento con e-mail, Messenger, WhatsApp e altri canali' },
      item1:
        'Il Servizio è attualmente fornito gratuitamente; la disponibilità di singole funzionalità può dipendere da limiti tecnici, di sicurezza, di stabilità o di uso corretto.',
      item2: 'Il Fornitore si riserva il diritto di modificare la portata dei Servizi con un periodo di preavviso di 30 giorni.',
      item3: 'Il Fornitore si impegna affinché il Servizio funzioni ininterrottamente, ma non garantisce una disponibilità del 100%.',
    },

    section5: {
      title: 'Uso gratuito e possibili tariffe future',
      item1:
        'Alla data di entrata in vigore dei presenti Termini, il Servizio è fornito gratuitamente. Il Fornitore non addebita costi per la registrazione, l\'Account o l\'utilizzo delle funzionalità principali del Servizio.',
      item2:
        'Il Fornitore potrà introdurre in futuro piani a pagamento, limiti o funzionalità premium solo dopo aver informato preventivamente gli utenti con almeno 30 giorni di anticipo.',
      item3:
        'L\'applicazione di tariffe a un determinato utente richiede la sua accettazione espressa delle nuove condizioni o un ordine separato di un servizio a pagamento; la mancata accettazione non comporta alcun obbligo di pagamento.',
      item4:
        'Il Fornitore non addebiterà alcuna tariffa automaticamente o senza il consenso dell\'utente, in particolare senza aver prima presentato il prezzo, l\'ambito del servizio a pagamento e le regole di fatturazione.',
      item5:
        'Se un utente non accetta future condizioni a pagamento, può continuare a utilizzare l\'ambito gratuito dei Servizi, se disponibile, oppure interrompere l\'uso del Servizio prima dell\'entrata in vigore delle modifiche.',
      item6:
        'Se saranno introdotti servizi a pagamento, le regole relative a pagamenti, fatturazione, rimborsi e reclami sui pagamenti saranno definite in Termini aggiornati o in condizioni separate accettate dall\'utente.',
    },

    section6: {
      title: 'Obblighi dell\'utente',
      intro: 'L\'utente si impegna a:',
      item1: 'Utilizzare il Servizio in conformità al suo scopo e alle normative vigenti.',
      item2: 'Non intraprendere azioni che potrebbero disturbare il funzionamento del Servizio.',
      item3: 'Non condividere i dati di accesso con terze parti.',
      item4: 'Rispettare i diritti di proprietà intellettuale.',
      item5intro: 'Non diffondere attraverso il Servizio contenuti:',
      item5illegal: 'Non conformi alla legge',
      item5rights: 'Che violano i diritti di terzi',
      item5spam: 'Contenenti spam o malware',
      item5offensive: 'Offensivi o discriminatori',
    },

    section7: {
      title: 'Responsabilità',
      item1intro: 'Il Fornitore non è responsabile per:',
      item1content: 'Contenuti pubblicati dagli utenti',
      item1interruptions: 'Interruzioni del Servizio dovute a cause indipendenti dal Fornitore',
      item1dataLoss: 'Perdita di dati derivante da azioni dell\'utente',
      item1damages: 'Danni derivanti dall\'uso improprio del Servizio',
      item2:
        'Nei limiti consentiti dalla legge, mentre il Servizio è fornito gratuitamente, la responsabilità del Fornitore nei confronti degli utenti commerciali è limitata nella massima misura consentita; se saranno introdotti servizi a pagamento, potrà essere limitata alle tariffe pagate da tale utente per il Servizio negli ultimi 12 mesi.',
      item3: 'I limiti di responsabilità non si applicano ai danni causati intenzionalmente o per negligenza grave.',
    },

    section8: {
      title: 'Proprietà intellettuale',
      item1: 'Il Servizio, i suoi elementi grafici, il codice sorgente, i database e la documentazione sono proprietà del Fornitore e protetti dal diritto d\'autore.',
      item2: 'L\'utente riceve una licenza non esclusiva e non trasferibile per utilizzare il Servizio in conformità al presente Regolamento.',
      item3intro: 'È vietato:',
      item3copying: 'Copiare o modificare il codice del Servizio',
      item3reverse: 'Effettuare l\'ingegneria inversa',
      item3trademarks: 'Utilizzare i marchi commerciali del Fornitore senza autorizzazione',
      item4: 'L\'utente conserva i diritti al contenuto inserito nel Servizio, concedendo al Fornitore una licenza per elaborarlo al fine di erogare i Servizi.',
    },

    section9: {
      title: 'Protezione dei dati personali',
      item1: 'Le modalità di trattamento dei dati personali sono disciplinate dall\'Informativa sulla privacy.',
      item2intro: 'L\'utente che è amministratore dei dati personali dei suoi clienti si impegna a:',
      item2legal: 'Disporre di una base legale per il trattamento dei dati',
      item2inform: 'Informare i clienti sull\'utilizzo di Chataptor',
      item2gdpr: 'Rispettare le normative RGPD',
      item3: 'Su richiesta dell\'utente, il Fornitore stipulerà un contratto di trattamento dei dati personali (DPA).',
    },

    section10: {
      title: 'Risoluzione del contratto',
      item1: 'L\'utente può eliminare l\'Account in qualsiasi momento tramite le impostazioni del pannello o contattando l\'assistenza.',
      item2: 'Il Fornitore può risolvere il contratto con un periodo di preavviso di 30 giorni.',
      item3intro: 'Il Fornitore può risolvere il contratto con effetto immediato in caso di:',
      item3violation: 'Violazione grave del presente Regolamento',
      item3harm: 'Azioni dannose al Fornitore o ad altri utenti',
      item3falseData: 'Fornitura di dati di registrazione falsi',
      item4: 'Dopo la risoluzione del contratto, i dati dell\'utente vengono eliminati in conformità all\'Informativa sulla privacy.',
    },

    section11: {
      title: 'Reclami',
      item1: 'I reclami devono essere presentati all\'indirizzo: support@browin.pl',
      item2intro: 'Il reclamo deve contenere:',
      item2contact: 'Dati di contatto dell\'utente',
      item2problem: 'Descrizione del problema',
      item2resolution: 'Modalità risolutiva desiderata',
      item3: 'Il Fornitore esamina i reclami entro 14 giorni dalla ricezione.',
      item4: 'L\'utente verrà informato dell\'esito dell\'esame del reclamo via posta elettronica.',
    },

    section12: {
      title: 'Risoluzione stragiudiziale delle controversie',
      intro: 'L\'utente che è consumatore ha la possibilità di ricorrere a modalità stragiudiziali di esame dei reclami e di esercizio dei diritti:',
      odrPlatform: { title: 'Piattaforma ODR' },
      tradeInspection: { title: 'Ispettorati regionali del commercio', description: 'Assistenza nella risoluzione delle controversie dei consumatori' },
      consumerCourts: { title: 'Collegi permanenti di arbitrato dei consumatori', description: 'Operanti presso gli Ispettorati regionali' },
    },

    section13: {
      title: 'Disposizioni finali',
      item1: 'I presenti Termini sono in vigore dal 18 maggio 2026.',
      item2:
        'Il Fornitore si riserva il diritto di modificare i Termini. Gli utenti saranno informati delle modifiche con almeno 30 giorni di anticipo, e l\'applicazione di servizi a pagamento a un determinato utente richiede la sua accettazione espressa.',
      item3: 'Per le questioni non disciplinate dal presente Regolamento si applica la legge italiana.',
      item4: 'Le controversie derivanti dal presente Regolamento saranno risolte dal tribunale competente per la sede del Fornitore (per le controversie con imprenditori) o dal tribunale competente per il domicilio del consumatore.',
      item5: 'Se una qualsiasi disposizione del presente Regolamento è ritenuta invalida, le altre disposizioni rimangono in vigore.',
    },

    section14: {
      title: 'Contatti',
      intro: 'Per domande relative al presente Regolamento, contattare:',
      email: 'Posta elettronica:',
      phone: 'Telefono:',
      customerService: 'Servizio clienti:',
    },

    footer: {
      tagline:
        'La porta verso conversazioni con clienti in tutto il mondo. Abbattiamo le barriere linguistiche combinando l\'intelligenza artificiale con l\'empatia umana.',
      contact: 'Contatti',
      legal: 'Legale',
      privacy: 'Informativa sulla privacy',
      terms: 'Termini di servizio',
      copyright: 'Tutti i diritti riservati.',
      uptime: 'Disponibilità: 99,89%',
      location: 'Łódź, Polonia',
    },
  },
  cs: {
    title: 'Obchodní podmínky',
    description: 'Podmínky používání platformy Chataptor',
    backLink: 'Domů',
    tocTitle: 'Obsah',
    lastUpdate: 'Poslední aktualizace: 18. května 2026',
    introTitle: 'Pravidla používání platformy Chataptor',
    introText: 'Tyto obchodní podmínky upravují používání platformy Chataptor. Používáním našich služeb přijímáte tyto podmínky.',
    needHelp: 'Potřebujete pomoc?',
    privacyLink: 'Zásady ochrany osobních údajů',
    termsOfUse: 'Podmínky použití',

    toc: {
      definitions: 'Definice',
      generalProvisions: 'Obecná ustanovení',
      registrationAccount: 'Registrace a účet',
      scopeOfServices: 'Rozsah služeb',
      feesPayments: 'Bezplatné používání a možné budoucí poplatky',
      userObligations: 'Povinnosti uživatele',
      liability: 'Odpovědnost',
      intellectualProperty: 'Duševní vlastnictví',
      dataProtection: 'Ochrana osobních údajů',
      termination: 'Ukončení smlouvy',
      complaints: 'Stížnosti',
      disputeResolution: 'Mimosoudní řešení sporů',
      finalProvisions: 'Závěrečná ustanovení',
      contact: 'Kontakt',
    },

    section1: {
      title: 'Definice',
      intro: 'V těchto obchodních podmínkách se používají následující definice:',
      serviceProvider: { term: 'Poskytovatel služeb', definition: 'BROWIN Spółka z ograniczoną odpowiedzialnością Spółka komandytowa se sídlem v Łódzi (93-373), ul. Pryncypalna 129/141, IČO: 729-268-73-25, DIČ: 101003641, KRS: 0000459418' },
      platform: { term: 'Služba / Platforma', definition: 'Platforma Chataptor dostupná na adrese chataptor.com' },
      user: { term: 'Uživatel', definition: 'Fyzická osoba, právnická osoba nebo organizační jednotka využívající Službu' },
      account: { term: 'Účet', definition: 'Individuální účet uživatele v Službě' },
      services: { term: 'Služby', definition: 'Funkcionality poskytované Službou, včetně zpracování chatu, překladu zpráv a integrací' },
      widget: { term: 'Widget', definition: 'Komponenta chatu pro vložení na webové stránky uživatele' },
    },

    section2: {
      title: 'Obecná ustanovení',
      item1: 'Tyto obchodní podmínky upravují pravidla poskytování služeb elektronickým způsobem Poskytovatelem služeb.',
      item2: 'Používání Služby znamená přijetí těchto obchodních podmínek a Zásad ochrany osobních údajů.',
      item3: 'Poskytovatel služeb poskytuje služby v souladu s platnými právními předpisy České republiky a Evropské unie.',
      item4: 'Služba je určena pro podnikatele (B2B) i spotřebitele.',
    },

    section3: {
      title: 'Registrace a účet',
      item1: 'Používání plné funkcionality Služby vyžaduje vytvoření účtu.',
      item2intro: 'Registrace je bezplatná a vyžaduje uvedení:',
      item2email: 'E-mailové adresy',
      item2password: 'Hesla',
      item2org: 'Názvu organizace (volitelně)',
      item3: 'Uživatel se může také zaregistrovat pomocí účtu Google (OAuth).',
      item4intro: 'Uživatel se zavazuje:',
      item4truthful: 'Poskytnout pravdivé údaje',
      item4confidential: 'Udržovat důvěrnost přihlašovacích údajů',
      item4unauthorized: 'Neprodleně informovat o neoprávněném přístupu k účtu',
      item5: 'Poskytovatel služeb může odmítnout registraci nebo zablokovat účet v případě porušení obchodních podmínek.',
    },

    section4: {
      title: 'Rozsah služeb',
      intro: 'Platforma Chataptor nabízí následující funkcionality:',
      liveChat: { title: 'Live Chat', description: 'Komunikace v reálném čase se zákazníky prostřednictvím widgetu na webových stránkách' },
      aiTranslation: { title: 'Překlad AI', description: 'Automatický překlad zpráv mezi více jazyky' },
      agentPanel: { title: 'Agentský panel', description: 'Centrální rozhraní pro správu všech konverzací' },
      integrations: { title: 'Integrace', description: 'Propojení s e-mailem, Messengerem, WhatsAppem a dalšími kanály' },
      item1:
        'Služba je aktuálně poskytována zdarma; dostupnost jednotlivých funkcí může záviset na technických, bezpečnostních, stabilitních nebo fair-use omezeních.',
      item2: 'Poskytovatel služeb si vyhrazuje právo upravit rozsah Služeb se zachováním 30denní doby výpovědi.',
      item3: 'Poskytovatel služeb se snaží, aby Služba fungovala nepřetržitě, ale nezaručuje 100% dostupnost.',
    },

    section5: {
      title: 'Bezplatné používání a možné budoucí poplatky',
      item1:
        'Ke dni účinnosti těchto podmínek je Služba poskytována zdarma. Poskytovatel služeb neúčtuje poplatky za registraci, účet ani používání základních funkcí Služby.',
      item2:
        'Poskytovatel služeb může v budoucnu zavést placené plány, limity nebo prémiové funkce pouze po předchozím informování Uživatelů nejméně 30 dní předem.',
      item3:
        'Uplatnění poplatků vůči konkrétnímu Uživateli vyžaduje jeho výslovný souhlas s novými podmínkami nebo samostatnou objednávku placené služby; bez souhlasu nevzniká povinnost platby.',
      item4:
        'Poskytovatel služeb nebude účtovat žádné poplatky automaticky ani bez souhlasu Uživatele, zejména bez předchozího uvedení ceny, rozsahu placené služby a pravidel účtování.',
      item5:
        'Pokud Uživatel nepřijme budoucí placené podmínky, může nadále využívat bezplatný rozsah Služeb, pokud bude dostupný, nebo ukončit používání Služby před účinností změn.',
      item6:
        'Pokud budou zavedeny placené služby, pravidla plateb, fakturace, vracení plateb a reklamací plateb budou stanovena v aktualizovaných podmínkách nebo samostatných podmínkách přijatých Uživatelem.',
    },

    section6: {
      title: 'Povinnosti uživatele',
      intro: 'Uživatel se zavazuje:',
      item1: 'Používat Službu v souladu s jejím určením a s právními předpisy.',
      item2: 'Nepodnikat kroky, které by mohly narušit fungování Služby.',
      item3: 'Nesdělovat přihlašovací údaje třetím stranám.',
      item4: 'Respektovat práva duševního vlastnictví.',
      item5intro: 'Nerozesílat prostřednictvím Služby obsah:',
      item5illegal: 'Protiprávní',
      item5rights: 'Porušující práva třetích stran',
      item5spam: 'Obsahující spam nebo škodlivý software',
      item5offensive: 'Obsahující urážlivý nebo diskriminační obsah',
    },

    section7: {
      title: 'Odpovědnost',
      item1intro: 'Poskytovatel služeb nenese odpovědnost za:',
      item1content: 'Obsah publikovaný uživateli',
      item1interruptions: 'Výpadky Služby vyplývající z příčin nezávislých na Poskytovali služeb',
      item1dataLoss: 'Ztrátu dat vyplývající z činnosti uživatele',
      item1damages: 'Škody vyplývající z nesprávného používání Služby',
      item2:
        'V rozsahu povoleném právem je při bezplatném poskytování Služby odpovědnost Poskytovatele služeb vůči obchodním Uživatelům omezena v nejširším přípustném rozsahu; po případném zavedení placených služeb může být omezena na poplatky zaplacené daným Uživatelem za Službu za posledních 12 měsíců.',
      item3: 'Omezení odpovědnosti se nevztahuje na škody způsobené úmyslně nebo hrubou nedbalostí.',
    },

    section8: {
      title: 'Duševní vlastnictví',
      item1: 'Služba, její grafické prvky, zdrojový kód, databáze a dokumentace jsou vlastnictvím Poskytovatele služeb a jsou chráněny autorským právem.',
      item2: 'Uživatel obdrží neexkluzivní, nepřenosnou licenci na používání Služby v souladu s obchodními podmínkami.',
      item3intro: 'Je zakázáno:',
      item3copying: 'Kopírovat nebo upravovat kód Služby',
      item3reverse: 'Provádět reverzní inženýrství',
      item3trademarks: 'Používat ochranné známky Poskytovatele služeb bez svolení',
      item4: 'Uživatel si ponechává práva na obsah zavedený do Služby, přičemž uděluje Poskytovali služeb licenci na jejich zpracování za účelem poskytování Služeb.',
    },

    section9: {
      title: 'Ochrana osobních údajů',
      item1: 'Pravidla zpracování osobních údajů jsou uvedena v Zásadách ochrany osobních údajů.',
      item2intro: 'Uživatel, který je správcem osobních údajů svých zákazníků, se zavazuje:',
      item2legal: 'Mít právní základ pro zpracování údajů',
      item2inform: 'Informovat zákazníky o používání Chataptoru',
      item2gdpr: 'Dodržovat předpisy GDPR',
      item3: 'Na žádost uživatele Poskytovatel služeb uzavře dohodu o zpracování osobních údajů (DPA).',
    },

    section10: {
      title: 'Ukončení smlouvy',
      item1: 'Uživatel může kdykoli smazat svůj účet prostřednictvím nastavení v panelu nebo kontaktem na podporu.',
      item2: 'Poskytovatel služeb může smlouvu vypovědět se zachováním 30denní doby výpovědi.',
      item3intro: 'Poskytovatel služeb může smlouvu okamžitě vypovědět v případě:',
      item3violation: 'Hrubého porušení obchodních podmínek',
      item3harm: 'Činnosti na újmu Poskytovatele služeb nebo jiných uživatelů',
      item3falseData: 'Uvedení nepravdivých registračních údajů',
      item4: 'Po ukončení smlouvy jsou údaje uživatele smazány v souladu se Zásadami ochrany osobních údajů.',
    },

    section11: {
      title: 'Stížnosti',
      item1: 'Stížnosti by měly být podány na adresu: support@browin.pl',
      item2intro: 'Stížnost by měla obsahovat:',
      item2contact: 'Kontaktní údaje uživatele',
      item2problem: 'Popis problému',
      item2resolution: 'Očekávaný způsob řešení',
      item3: 'Poskytovatel služeb posuzuje stížnosti ve lhůtě 14 dní od jejich obdržení.',
      item4: 'O výsledku posouzení stížnosti bude uživatel informován elektronickou poštou.',
    },

    section12: {
      title: 'Mimosoudní řešení sporů',
      intro: 'Uživatel, který je spotřebitelem, má možnost využít mimosoudní způsoby řešení stížností a prosazování nároků:',
      odrPlatform: { title: 'Platforma ADR' },
      tradeInspection: { title: 'Krajské obchodní inspekce', description: 'Pomoc při řešení spotřebitelských sporů' },
      consumerCourts: { title: 'Stálé spotřebitelské arbitráže', description: 'Fungující při krajských obchodních inspekcích' },
    },

    section13: {
      title: 'Závěrečná ustanovení',
      item1: 'Tyto obchodní podmínky jsou účinné od 18. května 2026.',
      item2:
        'Poskytovatel služeb si vyhrazuje právo změnit obchodní podmínky. Uživatelé budou o změnách informováni nejméně 30 dní předem a uplatnění placených služeb vůči konkrétnímu Uživateli vyžaduje jeho výslovný souhlas.',
      item3: 'V záležitostech neupravených těmito obchodními podmínkami se použijí právní předpisy České republiky.',
      item4: 'Spory vyplývající z těchto obchodních podmínek budou řešeny soudem příslušným pro sídlo Poskytovatele služeb (pro spory s podnikateli) nebo soudem příslušným pro místo bydliště spotřebitele.',
      item5: 'Pokud bude kterékoli ustanovení obchodních podmínek považováno za neplatné, zbývající ustanovení zůstávají v platnosti.',
    },

    section14: {
      title: 'Kontakt',
      intro: 'V případě jakýchkoli otázek týkajících se obchodních podmínek nás prosím kontaktujte:',
      email: 'E-mail:',
      phone: 'Telefon:',
      customerService: 'Zákaznická podpora:',
    },

    footer: {
      tagline:
        'Brána ke konverzacím se zákazníky po celém světě. Překonáváme jazykové bariéry a kombinujeme AI s lidskou empatií.',
      contact: 'Kontakt',
      legal: 'Právní',
      privacy: 'Zásady ochrany osobních údajů',
      terms: 'Obchodní podmínky',
      copyright: 'Všechna práva vyhrazena.',
      uptime: 'Dostupnost: 99,89 %',
      location: 'Łódź, Polsko',
    },
  },
  sk: {
    title: 'Obchodné podmienky',
    description: 'Podmienky používania platformy Chataptor',
    backLink: 'Domov',
    tocTitle: 'Obsah',
    lastUpdate: 'Posledná aktualizácia: 18. mája 2026',
    introTitle: 'Pravidlá používania platformy Chataptor',
    introText: 'Tieto Obchodné podmienky upravujú používanie platformy Chataptor. Používaním našich služieb prijímate tieto podmienky.',
    needHelp: 'Potrebujete pomoc?',
    privacyLink: 'Zásady ochrany osobných údajov',
    termsOfUse: 'Obchodné podmienky',

    toc: {
      definitions: 'Definície',
      generalProvisions: 'Všeobecné ustanovenia',
      registrationAccount: 'Registrácia a účet',
      scopeOfServices: 'Rozsah služieb',
      feesPayments: 'Bezplatné používanie a možné budúce poplatky',
      userObligations: 'Povinnosti používateľa',
      liability: 'Zodpovednosť',
      intellectualProperty: 'Duševné vlastníctvo',
      dataProtection: 'Ochrana osobných údajov',
      termination: 'Ukončenie zmluvy',
      complaints: 'Reklamácie',
      disputeResolution: 'Riešenie sporov',
      finalProvisions: 'Záverečné ustanovenia',
      contact: 'Kontakt',
    },

    section1: {
      title: 'Definície',
      intro: 'V týchto Obchodných podmienkach sa používajú nasledujúce definície:',
      serviceProvider: { term: 'Poskytovateľ služieb', definition: 'BROWIN Spoločnosť s ručením obmedzeným Spoločnosť komanditná so sídlom v Łódzi (93-373), ul. Pryncypalna 129/141, DIČ: 729-268-73-25, IČO: 101003641, zapísaná v Obchodnom registri pod č. 0000459418' },
      platform: { term: 'Služba / Platforma', definition: 'Platforma Chataptor dostupná na adrese chataptor.com' },
      user: { term: 'Používateľ', definition: 'Fyzická osoba, právnická osoba alebo organizačná jednotka využívajúca Službu' },
      account: { term: 'Účet', definition: 'Individuálny účet Používateľa na Službe' },
      services: { term: 'Služby', definition: 'Funkčnosti poskytované Službou, vrátane obsluhy chatu, prekladu správ a integrácie' },
      widget: { term: 'Widget', definition: 'Komponent chatu určený na vloženie na webovú stránku Používateľa' },
    },

    section2: {
      title: 'Všeobecné ustanovenia',
      item1: 'Tieto Obchodné podmienky upravujú poskytovanie služieb elektronickou cestou Poskytovateľom.',
      item2: 'Používanie Služby znamená akceptáciu týchto Obchodných podmienok a Zásad ochrany osobných údajov.',
      item3: 'Poskytovateľ poskytuje služby v súlade s platnou legislatívou Slovenskej republiky a Európskej únie.',
      item4: 'Služba je určená pre podnikateľov (B2B) a aj pre spotrebiteľov.',
    },

    section3: {
      title: 'Registrácia a účet',
      item1: 'Používanie plnej funkčnosti Služby vyžaduje vytvorenie účtu.',
      item2intro: 'Registrácia je bezplatná a vyžaduje nasledujúce údaje:',
      item2email: 'Emailová adresa',
      item2password: 'Heslo',
      item2org: 'Názov organizácie (voliteľne)',
      item3: 'Používateľ sa tiež môže zaregistrovať pomocou účtu Google (OAuth).',
      item4intro: 'Používateľ sa zaväzuje:',
      item4truthful: 'Poskytnúť pravdivé údaje',
      item4confidential: 'Zachovávať dôvernosť prihlasovacích údajov',
      item4unauthorized: 'Bezodkladne informovať o neoprávnenom prístupe k účtu',
      item5: 'Poskytovateľ môže odmietnuť registráciu alebo zablokovať účet v prípade porušenia týchto Obchodných podmienok.',
    },

    section4: {
      title: 'Rozsah služieb',
      intro: 'Platforma Chataptor ponúka nasledujúce funkčnosti:',
      liveChat: { title: 'Live Chat', description: 'Komunikácia v reálnom čase so zákazníkmi prostredníctvom widgetu na webovej stránke' },
      aiTranslation: { title: 'AI preklad', description: 'Automatický preklad správ medzi viacerými jazykmi' },
      agentPanel: { title: 'Panel agenta', description: 'Centrálne rozhranie na správu všetkých konverzácií' },
      integrations: { title: 'Integrácie', description: 'Pripojenie k e-mailu, Messengerom, WhatsApp a ďalším kanálom' },
      item1:
        'Služba je aktuálne poskytovaná bezplatne; dostupnosť jednotlivých funkcií môže závisieť od technických, bezpečnostných, stabilitných alebo fair-use obmedzení.',
      item2: 'Poskytovateľ si vyhradzuje právo modifikovať rozsah Služieb so zachovaním 30-dňovej lehoty na výpoveď.',
      item3: 'Poskytovateľ sa snaží, aby Služba fungovala nepretržite, ale nezaručuje 100% dostupnosť.',
    },

    section5: {
      title: 'Bezplatné používanie a možné budúce poplatky',
      item1:
        'Ku dňu účinnosti týchto podmienok je Služba poskytovaná bezplatne. Poskytovateľ neúčtuje poplatky za registráciu, účet ani používanie základných funkcií Služby.',
      item2:
        'Poskytovateľ môže v budúcnosti zaviesť platené plány, limity alebo prémiové funkcie iba po predchádzajúcom informovaní Používateľov najmenej 30 dní vopred.',
      item3:
        'Uplatnenie poplatkov voči konkrétnemu Používateľovi vyžaduje jeho výslovný súhlas s novými podmienkami alebo samostatnú objednávku platenej služby; bez súhlasu nevzniká povinnosť platby.',
      item4:
        'Poskytovateľ nebude účtovať žiadne poplatky automaticky ani bez súhlasu Používateľa, najmä bez predchádzajúceho uvedenia ceny, rozsahu platenej služby a pravidiel účtovania.',
      item5:
        'Ak Používateľ neprijme budúce platené podmienky, môže naďalej využívať bezplatný rozsah Služieb, ak bude dostupný, alebo ukončiť používanie Služby pred účinnosťou zmien.',
      item6:
        'Ak budú zavedené platené služby, pravidlá platieb, fakturácie, vrátenia platieb a reklamácií platieb budú uvedené v aktualizovaných podmienkach alebo samostatných podmienkach prijatých Používateľom.',
    },

    section6: {
      title: 'Povinnosti používateľa',
      intro: 'Používateľ sa zaväzuje:',
      item1: 'Používať Službu v súlade s jej určením a platnou legislatívou.',
      item2: 'Nepodnikať kroky, ktoré by mohli narušiť funkčnosť Služby.',
      item3: 'Nezdieľať prihlasovacie údaje tretím stranám.',
      item4: 'Rešpektovať práva duševného vlastníctva.',
      item5intro: 'Nešíriť prostredníctvom Služby obsah:',
      item5illegal: 'Nezákonného charakteru',
      item5rights: 'Porušujúceho práva tretích strán',
      item5spam: 'Obsahujúceho spam alebo škodlivý software',
      item5offensive: 'Nešetrného alebo diskriminačného charakteru',
    },

    section7: {
      title: 'Zodpovednosť',
      item1intro: 'Poskytovateľ nenesie zodpovednosť za:',
      item1content: 'Obsah publikovaný Používateľmi',
      item1interruptions: 'Výpadky Služby vyplývajúce z príčin mimo kontroly Poskytovateľa',
      item1dataLoss: 'Stratu údajov vyplývajúcu z činnosti Používateľa',
      item1damages: 'Škody vyplývajúce z nesprávneho používania Služby',
      item2:
        'V rozsahu povolenom právom je pri bezplatnom poskytovaní Služby zodpovednosť Poskytovateľa voči obchodným Používateľom obmedzená v najširšom prípustnom rozsahu; po prípadnom zavedení platených služieb môže byť obmedzená na poplatky zaplatené daným Používateľom za Službu za posledných 12 mesiacov.',
      item3: 'Toto obmedzenie zodpovednosti sa nevzťahuje na škody spôsobené úmyselne alebo hrubou nedbanlivosťou.',
    },

    section8: {
      title: 'Duševné vlastníctvo',
      item1: 'Služba, jej grafické prvky, zdrojový kód, databázy a dokumentácia sú vlastnosťou Poskytovateľa a sú chránené autorským právom.',
      item2: 'Používateľ dostáva nevýhradnú, neprenosnú licenciu na používanie Služby v súlade s týmito Obchodnými podmienkami.',
      item3intro: 'Zakázané je:',
      item3copying: 'Kopírovanie alebo úprava kódu Služby',
      item3reverse: 'Reverzné inžinierstvo',
      item3trademarks: 'Používanie ochranných známok Poskytovateľa bez súhlasu',
      item4: 'Používateľ si zachováva práva k obsahu vloženému do Služby, poskytujúc Poskytovateľovi licenciu na ich spracovanie za účelom poskytovania Služieb.',
    },

    section9: {
      title: 'Ochrana osobných údajov',
      item1: 'Pravidlá spracovania osobných údajov sú určené v Zásadách ochrany osobných údajov.',
      item2intro: 'Používateľ, ktorý je správcom osobných údajov svojich klientov, sa zaväzuje:',
      item2legal: 'Mať právny základ na spracovanie údajov',
      item2inform: 'Informovať klientov o používaní Chataptor',
      item2gdpr: 'Rešpektovať pravidlá GDPR',
      item3: 'Na žiadosť Používateľa Poskytovateľ uzavrie zmluvu o spracovaní osobných údajov (DPA).',
    },

    section10: {
      title: 'Ukončenie zmluvy',
      item1: 'Používateľ môže kedykoľvek vymazať Účet prostredníctvom nastavení panelu alebo kontaktom so podporou.',
      item2: 'Poskytovateľ môže vypovedať zmluvu so zachovaním 30-dňovej lehoty na výpoveď.',
      item3intro: 'Poskytovateľ môže zmluvu ukončiť s okamžitou platnosťou v prípade:',
      item3violation: 'Hrubého porušenia týchto Obchodných podmienok',
      item3harm: 'Činnosti na škodu Poskytovateľa alebo ostatných Používateľov',
      item3falseData: 'Poskytnutia nepravdivých registračných údajov',
      item4: 'Po ukončení zmluvy sú údaje Používateľa vymazané v súlade so Zásadami ochrany osobných údajov.',
    },

    section11: {
      title: 'Reklamácie',
      item1: 'Reklamácie sa majú hlásať na adresu: support@browin.pl',
      item2intro: 'Reklamácia by mala obsahovať:',
      item2contact: 'Kontaktné údaje Používateľa',
      item2problem: 'Popis problému',
      item2resolution: 'Očakávaný spôsob riešenia',
      item3: 'Poskytovateľ posudzuje reklamácie v lehote 14 dní od ich doručenia.',
      item4: 'O výsledku posudzovania reklamácie bude Používateľ informovaný elektronickou cestou.',
    },

    section12: {
      title: 'Mimosúdne riešenie sporov',
      intro: 'Používateľ, ktorý je spotrebiteľom, má možnosť využiť mimosúdne spôsoby posudzovania reklamácií a uplatňovania nárokov:',
      odrPlatform: { title: 'Platforma ODR' },
      tradeInspection: { title: 'Okresné inšpektoráty obchodu', description: 'Pomoc pri riešení sporov spotrebiteľa' },
      consumerCourts: { title: 'Stále rozhodcovské súdy spotrebiteľa', description: 'Pôsobiace pri Okresných inšpektorátoch' },
    },

    section13: {
      title: 'Záverečné ustanovenia',
      item1: 'Tieto obchodné podmienky sú účinné od 18. mája 2026.',
      item2:
        'Poskytovateľ si vyhradzuje právo zmeniť obchodné podmienky. Používatelia budú o zmenách informovaní najmenej 30 dní vopred a uplatnenie platených služieb voči konkrétnemu Používateľovi vyžaduje jeho výslovný súhlas.',
      item3: 'V záležitostiach nezaradených v týchto Obchodných podmienkach sa uplatňujú pravidlá slovenskej legislatívy.',
      item4: 'Spory vyplývajúce z týchto Obchodných podmienok budú riešené súdom príslušným pre sídlo Poskytovateľa (v sporoch s podnikateľmi) alebo súdom príslušným pre miesto bydliska spotrebiteľa.',
      item5: 'Ak bude ktorékoľvek ustanovenie týchto Obchodných podmienok považované za neplatné, ostatné ustanovenia ostávajú v platnosti.',
    },

    section14: {
      title: 'Kontakt',
      intro: 'V prípade otázok týkajúcich sa týchto Obchodných podmienok, prosím kontaktujte:',
      email: 'Email:',
      phone: 'Telefón:',
      customerService: 'Zákaznícka podpora:',
    },

    footer: {
      tagline:
        'Brána ku konverzáciám so zákazníkmi po celom svete. Búrame jazykové bariéry kombináciou AI s ľudskou empatiou.',
      contact: 'Kontakt',
      legal: 'Právne',
      privacy: 'Zásady ochrany osobných údajov',
      terms: 'Obchodné podmienky',
      copyright: 'Všetky práva vyhradené.',
      uptime: 'Dostupnosť: 99,89%',
      location: 'Łódź, Poľsko',
    },
  },
};

export function getTerms(locale: Locale): TermsTranslations {
  return translations[locale] || translations.en;
}
