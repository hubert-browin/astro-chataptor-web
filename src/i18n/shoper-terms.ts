import type { Locale } from './config';

/**
 * Tłumaczenia Regulaminu Usługi dla aplikacji Chataptor w Shoper App Store.
 *
 * Źródło treści: docs/legal/shoper-terms-of-service.md (repo główne Chataptor, wersja PL, 2026-05-18).
 *
 * Uwaga: aktualnie tylko wersja PL. Dla pozostałych locale (en/de/fr/es/it/cs/sk)
 * funkcja `getShoperTerms` zwraca wariant PL jako fallback — dokument prawny, lepiej pokazać
 * wiążącą wersję polską niż niekompletne tłumaczenie. Tłumaczenia do dopracowania w osobnej iteracji.
 */

export interface TermsTableRow {
  cells: string[];
}

export interface TermsSection {
  id: string;
  number: string;
  title: string;
  paragraphs?: string[];
  lists?: Array<{
    heading?: string;
    items: string[];
    /** numerowana czy punktowana */
    ordered?: boolean;
  }>;
  tables?: Array<{
    heading?: string;
    headers: string[];
    rows: TermsTableRow[];
    note?: string;
  }>;
  subsections?: Array<{
    number: string;
    title: string;
    paragraphs?: string[];
    lists?: Array<{ heading?: string; items: string[]; ordered?: boolean }>;
    tables?: Array<{ heading?: string; headers: string[]; rows: TermsTableRow[]; note?: string }>;
  }>;
}

export interface ShoperTermsTranslations {
  meta: {
    title: string;
    description: string;
  };
  header: {
    backToHome: string;
    badge: string;
    pageTitle: string;
    effectiveDate: string;
    lastUpdated: string;
    version: string;
  };
  intro: {
    title: string;
    description: string;
  };
  sections: TermsSection[];
}

const pl: ShoperTermsTranslations = {
  meta: {
    title: 'Regulamin Usługi — Chataptor dla Shoper',
    description:
      'Regulamin korzystania z aplikacji Chataptor zainstalowanej ze Shoper App Store. Opis usługi, bezpłatnego korzystania, zasad korzystania, odpowiedzialności i rozwiązania umowy.',
  },
  header: {
    backToHome: 'Powrót do strony głównej',
    badge: 'Regulamin usługi',
    pageTitle: 'Regulamin Usługi Chataptor dla Shoper',
    effectiveDate: 'Data wejścia w życie: 18 maja 2026',
    lastUpdated: 'Ostatnia aktualizacja: 18 maja 2026',
    version: 'Wersja 1.1',
  },
  intro: {
    title: 'Zasady korzystania z Chataptor',
    description:
      'Niniejszy regulamin określa warunki świadczenia usługi Chataptor Live Chat — aplikacji dostępnej w Shoper App Store. Instalując aplikację, akceptujesz postanowienia regulaminu oraz Polityki Prywatności.',
  },
  sections: [
    {
      id: 'section-1',
      number: '1',
      title: 'Postanowienia ogólne',
      subsections: [
        {
          number: '1.1',
          title: 'Definicje',
          tables: [
            {
              headers: ['Termin', 'Definicja'],
              rows: [
                { cells: ['<strong>Usługa</strong>', 'Aplikacja Chataptor Live Chat dostępna w Shoper App Store'] },
                {
                  cells: [
                    '<strong>Usługodawca</strong>',
                    'BROWIN Spółka z ograniczoną odpowiedzialnością Sp. k., ul. Pryncypalna 129/141, 93-373 Łódź, NIP: PL 729-268-73-25, KRS: 0000459418',
                  ],
                },
                { cells: ['<strong>Użytkownik</strong>', 'Właściciel sklepu Shoper korzystający z Usługi'] },
                { cells: ['<strong>Klient końcowy</strong>', 'Osoba korzystająca z widgetu czatu w sklepie Użytkownika'] },
                { cells: ['<strong>Panel</strong>', 'Panel administracyjny Chataptor dostępny pod adresem chataptor.com'] },
                { cells: ['<strong>Widget</strong>', 'Komponent czatu wyświetlany na stronach sklepu Użytkownika'] },
              ],
            },
          ],
        },
        {
          number: '1.2',
          title: 'Akceptacja regulaminu',
          paragraphs: [
            'Instalując aplikację Chataptor w sklepie Shoper, Użytkownik akceptuje niniejszy Regulamin oraz Politykę Prywatności.',
          ],
        },
      ],
    },
    {
      id: 'section-2',
      number: '2',
      title: 'Opis Usługi',
      subsections: [
        {
          number: '2.1',
          title: 'Zakres Usługi',
          paragraphs: ['Chataptor zapewnia:'],
          lists: [
            {
              ordered: true,
              items: [
                '<strong>Widget czatu</strong> — komponent umożliwiający klientom sklepu kontakt z obsługą',
                '<strong>Panel agenta</strong> — interfejs do obsługi konwersacji',
                '<strong>Powiadomienia</strong> — alerty o nowych wiadomościach',
                '<strong>Historia rozmów</strong> — archiwum konwersacji',
                '<strong>Identyfikacja klientów</strong> — rozpoznawanie zalogowanych użytkowników Shoper',
              ],
            },
          ],
        },
        {
          number: '2.2',
          title: 'Dostępność Usługi',
          lists: [
            {
              items: [
                '<strong>Cel dostępności:</strong> 99,9% w skali miesiąca',
                '<strong>Planowane przerwy:</strong> z wyprzedzeniem 48h (email)',
                '<strong>Awarie:</strong> informacja na <a href="https://status.chataptor.com" class="text-emerald-700 underline" rel="noopener" target="_blank">status.chataptor.com</a>',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'section-3',
      number: '3',
      title: 'Rejestracja i konto',
      subsections: [
        {
          number: '3.1',
          title: 'Tworzenie konta',
          paragraphs: ['Konto Chataptor tworzone jest automatycznie podczas instalacji aplikacji w Shoper:'],
          lists: [
            {
              items: [
                'Email: adres email właściciela sklepu z Shoper',
                'Hasło: ustawiane przez Użytkownika po otrzymaniu emaila aktywacyjnego',
              ],
            },
          ],
        },
        {
          number: '3.2',
          title: 'Odpowiedzialność za konto',
          paragraphs: ['Użytkownik:'],
          lists: [
            {
              items: [
                'Jest odpowiedzialny za bezpieczeństwo danych logowania',
                'Nie może udostępniać konta osobom nieupoważnionym',
                'Powinien niezwłocznie zgłosić nieautoryzowany dostęp',
              ],
            },
          ],
        },
        {
          number: '3.3',
          title: 'Dodatkowi agenci',
          paragraphs: [
            'Użytkownik może zapraszać dodatkowych agentów zgodnie z aktualnymi limitami technicznymi, bezpieczeństwa, stabilności lub zasadami uczciwego korzystania.',
          ],
        },
      ],
    },
    {
      id: 'section-4',
      number: '4',
      title: 'Bezpłatne korzystanie i przyszłe opłaty',
      subsections: [
        {
          number: '4.1',
          title: 'Aktualny model korzystania',
          paragraphs: [
            'Na dzień obowiązywania niniejszego Regulaminu korzystanie z aplikacji Chataptor dla Shoper jest bezpłatne. Usługodawca nie pobiera opłat za instalację aplikacji, utworzenie konta ani korzystanie z podstawowych funkcjonalności Usługi.',
          ],
        },
        {
          number: '4.2',
          title: 'Limity i uczciwe korzystanie',
          paragraphs: [
            'Dostępność poszczególnych funkcji, liczba agentów, liczba rozmów lub zakres integracji mogą podlegać limitom technicznym, bezpieczeństwa, stabilności lub zasadom uczciwego korzystania. Limity te nie stanowią opłaty.',
          ],
        },
        {
          number: '4.3',
          title: 'Możliwe opłaty w przyszłości',
          paragraphs: [
            'Usługodawca może w przyszłości wprowadzić odpłatne plany, limity lub funkcje premium, ale wyłącznie po wcześniejszym poinformowaniu Użytkowników z co najmniej 30-dniowym wyprzedzeniem.',
            'Wprowadzenie opłat wobec danego Użytkownika wymaga jego wyraźnej akceptacji nowych warunków lub odrębnego zamówienia płatnej usługi. Brak akceptacji oznacza brak obowiązku zapłaty.',
          ],
        },
        {
          number: '4.4',
          title: 'Brak automatycznych opłat',
          paragraphs: [
            'Usługodawca nie pobierze żadnych opłat automatycznie i bez zgody Użytkownika, w szczególności bez wcześniejszego przedstawienia ceny, zakresu płatnej usługi oraz zasad rozliczeń.',
          ],
        },
        {
          number: '4.5',
          title: 'Brak akceptacji płatnych warunków',
          paragraphs: [
            'Jeżeli Użytkownik nie zaakceptuje przyszłych płatnych warunków, może nadal korzystać z bezpłatnego zakresu Usługi, o ile będzie on dostępny, albo zrezygnować z korzystania z Usługi przed wejściem zmian w życie.',
            'Po ewentualnym wprowadzeniu płatnych usług zasady płatności, fakturowania, zwrotów i reklamacji płatności zostaną określone w zaktualizowanym Regulaminie lub osobnych warunkach zaakceptowanych przez Użytkownika.',
          ],
        },
      ],
    },
    {
      id: 'section-5',
      number: '5',
      title: 'Zasady korzystania',
      subsections: [
        {
          number: '5.1',
          title: 'Dozwolone użycie',
          paragraphs: ['Usługa przeznaczona jest do:'],
          lists: [
            {
              items: [
                'Komunikacji z klientami sklepu',
                'Obsługi zapytań przedsprzedażowych i posprzedażowych',
                'Wsparcia technicznego',
              ],
            },
          ],
        },
        {
          number: '5.2',
          title: 'Zakazane działania',
          paragraphs: ['Zabrania się:'],
          lists: [
            {
              items: [
                'Wysyłania spamu lub niechcianych wiadomości marketingowych',
                'Wykorzystywania Usługi do działań niezgodnych z prawem',
                'Prób obejścia limitów technicznych',
                'Udostępniania dostępu osobom nieupoważnionym',
                'Zbierania danych klientów w celach niezgodnych z deklarowanymi',
                'Integracji z systemami naruszającymi prawa osób trzecich',
              ],
            },
          ],
        },
        {
          number: '5.3',
          title: 'Treści niedozwolone',
          paragraphs: ['W komunikacji za pośrednictwem Chataptor zabronione są:'],
          lists: [
            {
              items: [
                'Treści obraźliwe, dyskryminujące',
                'Materiały pornograficzne',
                'Treści nawołujące do przemocy',
                'Oszustwa i phishing',
                'Naruszenia praw autorskich',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'section-6',
      number: '6',
      title: 'Prywatność i dane',
      subsections: [
        {
          number: '6.1',
          title: 'Przetwarzanie danych',
          paragraphs: [
            'Szczegóły przetwarzania danych osobowych określa <strong>Polityka Prywatności</strong>.',
          ],
        },
        {
          number: '6.2',
          title: 'Rola stron',
          tables: [
            {
              headers: ['Rola', 'Podmiot', 'Zakres'],
              rows: [
                { cells: ['Administrator', 'Użytkownik (właściciel sklepu)', 'Dane klientów końcowych'] },
                { cells: ['Podmiot przetwarzający', 'Usługodawca (Chataptor)', 'Przetwarzanie w imieniu Użytkownika'] },
              ],
            },
          ],
        },
        {
          number: '6.3',
          title: 'Umowa powierzenia',
          paragraphs: [
            'Na żądanie Użytkownika zawieramy odrębną Umowę Powierzenia Przetwarzania Danych (DPA).',
          ],
        },
        {
          number: '6.4',
          title: 'Usunięcie danych',
          paragraphs: ['Po rozwiązaniu umowy:'],
          lists: [
            {
              items: [
                'Dane przechowywane przez 30 dni (możliwość reaktywacji)',
                'Po 30 dniach — trwałe usunięcie',
                'Na żądanie — wcześniejsze usunięcie',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'section-7',
      number: '7',
      title: 'Własność intelektualna',
      subsections: [
        {
          number: '7.1',
          title: 'Prawa Usługodawcy',
          paragraphs: ['Usługodawca zachowuje wszelkie prawa do:'],
          lists: [
            {
              items: [
                'Kodu źródłowego aplikacji',
                'Interfejsu użytkownika',
                'Dokumentacji',
                'Znaków towarowych (Chataptor, logo)',
              ],
            },
          ],
        },
        {
          number: '7.2',
          title: 'Licencja użytkowania',
          paragraphs: [
            'Użytkownik otrzymuje niewyłączną, niezbywalną licencję na korzystanie z Usługi w zakresie wynikającym z Regulaminu, konfiguracji Usługi oraz obowiązujących limitów technicznych lub zasad uczciwego korzystania.',
          ],
        },
        {
          number: '7.3',
          title: 'Treści Użytkownika',
          paragraphs: [
            'Użytkownik zachowuje prawa do treści wprowadzanych do Usługi (konfiguracja, wiadomości).',
          ],
        },
      ],
    },
    {
      id: 'section-8',
      number: '8',
      title: 'Odpowiedzialność',
      subsections: [
        {
          number: '8.1',
          title: 'Ograniczenie odpowiedzialności',
          paragraphs: ['Usługodawca nie ponosi odpowiedzialności za:'],
          lists: [
            {
              items: [
                'Szkody wynikające z nieprawidłowego użycia Usługi',
                'Przerwy w działaniu wynikające z siły wyższej',
                'Działania osób trzecich (np. ataki hakerskie)',
                'Utratę zysków lub korzyści biznesowych',
                'Szkody przekraczające zakres odpowiedzialności dopuszczalny przez prawo; po ewentualnym wprowadzeniu usług płatnych — wartość opłat uiszczonych za Usługę w ostatnich 12 miesiącach',
              ],
            },
          ],
        },
        {
          number: '8.2',
          title: 'Odpowiedzialność Użytkownika',
          paragraphs: ['Użytkownik ponosi odpowiedzialność za:'],
          lists: [
            {
              items: [
                'Treści przekazywane klientom końcowym',
                'Przestrzeganie przepisów prawa (w tym RODO)',
                'Bezpieczeństwo danych logowania',
                'Działania osób, którym udostępnił dostęp',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'section-9',
      number: '9',
      title: 'Wsparcie techniczne',
      subsections: [
        {
          number: '9.1',
          title: 'Kanały wsparcia',
          tables: [
            {
              headers: ['Kanał', 'Dostępność', 'Czas odpowiedzi'],
              rows: [
                { cells: ['Email (support@chataptor.com)', '24/7', 'Do 24h (dni robocze)'] },
                { cells: ['Dokumentacja', '24/7', '—'] },
                { cells: ['Status usługi', '24/7', '—'] },
              ],
            },
          ],
        },
        {
          number: '9.2',
          title: 'Zakres wsparcia',
          paragraphs: ['Wsparcie obejmuje:'],
          lists: [
            {
              items: [
                'Problemy techniczne z działaniem Usługi',
                'Pytania dotyczące konfiguracji',
                'Zgłaszanie błędów',
              ],
            },
            {
              heading: 'Wsparcie nie obejmuje:',
              items: [
                'Szkoleń indywidualnych',
                'Integracji z systemami zewnętrznymi',
                'Modyfikacji kodu widgetu',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'section-10',
      number: '10',
      title: 'Rozwiązanie umowy',
      subsections: [
        {
          number: '10.1',
          title: 'Przez Użytkownika',
          paragraphs: ['Użytkownik może rozwiązać umowę:'],
          lists: [
            {
              items: [
                'Odinstalowując aplikację z panelu Shoper',
                'Wysyłając email na support@chataptor.com',
              ],
            },
          ],
        },
        {
          number: '10.2',
          title: 'Przez Usługodawcę',
          paragraphs: ['Usługodawca może rozwiązać umowę w przypadku:'],
          lists: [
            {
              items: [
                'Naruszenia Regulaminu',
                'Braku akceptacji przyszłych płatnych warunków, jeżeli dalsze świadczenie danego zakresu Usługi będzie od nich zależne',
                'Działań na szkodę Usługi lub innych użytkowników',
              ],
            },
          ],
        },
        {
          number: '10.3',
          title: 'Skutki rozwiązania',
          paragraphs: ['Po rozwiązaniu umowy:'],
          lists: [
            {
              items: [
                'Widget zostaje usunięty ze sklepu',
                'Dostęp do Panelu zostaje zablokowany',
                'Dane przechowywane przez 30 dni',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'section-11',
      number: '11',
      title: 'Zmiany Regulaminu',
      subsections: [
        {
          number: '11.1',
          title: 'Powiadomienie',
          paragraphs: ['O zmianach Regulaminu informujemy:'],
          lists: [
            {
              items: [
                'Emailem z co najmniej 30-dniowym wyprzedzeniem',
                'Komunikatem w Panelu',
              ],
            },
          ],
        },
        {
          number: '11.2',
          title: 'Akceptacja zmian',
          paragraphs: [
            'Dalsze korzystanie z Usługi po wejściu zmian w życie oznacza akceptację nowego Regulaminu, z zastrzeżeniem że wprowadzenie odpłatnych usług wobec danego Użytkownika wymaga jego wyraźnej akceptacji.',
          ],
        },
        {
          number: '11.3',
          title: 'Brak akceptacji',
          paragraphs: [
            'W przypadku braku akceptacji zmian Użytkownik może rozwiązać umowę bez ponoszenia dodatkowych kosztów.',
          ],
        },
      ],
    },
    {
      id: 'section-12',
      number: '12',
      title: 'Postanowienia końcowe',
      subsections: [
        {
          number: '12.1',
          title: 'Prawo właściwe',
          paragraphs: ['Regulamin podlega prawu polskiemu.'],
        },
        {
          number: '12.2',
          title: 'Rozstrzyganie sporów',
          paragraphs: ['Spory rozstrzygane będą przez sąd właściwy dla siedziby Usługodawcy.'],
        },
        {
          number: '12.3',
          title: 'Rozdzielność',
          paragraphs: [
            'Jeśli którekolwiek postanowienie Regulaminu okaże się nieważne, pozostałe postanowienia pozostają w mocy.',
          ],
        },
        {
          number: '12.4',
          title: 'Kontakt',
          paragraphs: [
            '<strong>BROWIN Spółka z ograniczoną odpowiedzialnością Sp. k.</strong><br/>ul. Pryncypalna 129/141, 93-373 Łódź<br/>Email: contact@chataptor.com<br/>NIP: PL 729-268-73-25<br/>KRS: 0000459418',
          ],
        },
      ],
    },
  ],
};

// Fallback: pozostałe locale pokazują wersję PL (pełna, wiążąca prawnie wersja).
const translations: Record<Locale, ShoperTermsTranslations> = {
  pl,
  en: pl,
  de: pl,
  fr: pl,
  es: pl,
  it: pl,
  cs: pl,
  sk: pl,
};

export function getShoperTerms(lang: Locale): ShoperTermsTranslations {
  return translations[lang] || translations.pl;
}
