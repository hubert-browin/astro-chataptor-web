import type { Locale } from './config';

/**
 * Tłumaczenia Polityki Prywatności dla aplikacji Chataptor w Shoper App Store.
 *
 * Źródło treści: docs/legal/shoper-privacy-policy.md (repo główne Chataptor, wersja PL, 2026-05-18).
 *
 * Uwaga: aktualnie tylko wersja PL. Dla pozostałych locale (en/de/fr/es/it/cs/sk)
 * funkcja `getShoperPrivacy` zwraca wariant PL jako fallback — lepiej pokazać pełną,
 * prawnie wiążącą wersję polską niż niekompletne tłumaczenie. Tłumaczenia na kolejne
 * języki do wykonania w osobnej iteracji przez zespół prawny + tłumacza.
 */

export interface TableRow {
  cells: string[];
}

export interface PrivacySection {
  id: string;
  number: string;
  title: string;
  /** Paragrafy z opisem sekcji. Akceptują HTML inline (np. <strong>). */
  paragraphs?: string[];
  /** Listy punktowane (po sekcjach/paragrafach). */
  lists?: Array<{
    heading?: string;
    items: string[];
  }>;
  /** Tabele z danymi (np. zakres danych, okresy retencji). */
  tables?: Array<{
    heading?: string;
    headers: string[];
    rows: TableRow[];
    /** Opcjonalna notka pod tabelą (np. legenda gwiazdki). */
    note?: string;
  }>;
  /** Podsekcje (np. 2.1, 2.2). */
  subsections?: Array<{
    number: string;
    title: string;
    paragraphs?: string[];
    lists?: Array<{ heading?: string; items: string[] }>;
    tables?: Array<{ heading?: string; headers: string[]; rows: TableRow[]; note?: string }>;
  }>;
}

export interface ShoperPrivacyTranslations {
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
  sections: PrivacySection[];
}

const pl: ShoperPrivacyTranslations = {
  meta: {
    title: 'Polityka Prywatności — Chataptor dla Shoper',
    description:
      'Polityka prywatności aplikacji Chataptor w Shoper App Store. Administrator danych, zakres przetwarzania, okresy retencji, prawa użytkowników. Zgodność z RODO.',
  },
  header: {
    backToHome: 'Powrót do strony głównej',
    badge: 'Ochrona danych osobowych',
    pageTitle: 'Polityka Prywatności — Chataptor dla Shoper',
    effectiveDate: 'Data wejścia w życie: 18 maja 2026',
    lastUpdated: 'Ostatnia aktualizacja: 18 maja 2026',
    version: 'Wersja 1.1',
  },
  intro: {
    title: 'Twoje dane są bezpieczne',
    description:
      'Ta polityka opisuje, jakie dane zbieramy w związku z korzystaniem z aplikacji Chataptor zainstalowanej w sklepie Shoper, w jakim celu je przetwarzamy oraz jakie prawa Ci przysługują. Dane przechowujemy wyłącznie na serwerach w Unii Europejskiej, zgodnie z RODO.',
  },
  sections: [
    {
      id: 'section-1',
      number: '1',
      title: 'Administrator danych',
      paragraphs: [
        'Administratorem danych osobowych przetwarzanych w związku z korzystaniem z aplikacji <strong>Chataptor</strong> jest:',
        '<strong>BROWIN Spółka z ograniczoną odpowiedzialnością Sp. k.</strong><br/>ul. Pryncypalna 129/141, 93-373 Łódź, Polska<br/>NIP: PL 729-268-73-25<br/>REGON: 101003641<br/>KRS: 0000459418<br/>Email: contact@chataptor.com<br/>Telefon: +48 42 23 23 200',
      ],
    },
    {
      id: 'section-2',
      number: '2',
      title: 'Zakres zbieranych danych',
      subsections: [
        {
          number: '2.1',
          title: 'Dane właściciela sklepu',
          paragraphs: [
            'Podczas instalacji aplikacji Chataptor w sklepie Shoper zbieramy:',
          ],
          tables: [
            {
              headers: ['Dane', 'Źródło', 'Cel przetwarzania'],
              rows: [
                { cells: ['Adres email', 'Konto Shoper', 'Utworzenie konta, komunikacja'] },
                { cells: ['Nazwa sklepu', 'API Shoper', 'Identyfikacja, personalizacja'] },
                { cells: ['URL sklepu', 'API Shoper', 'Konfiguracja widgetu'] },
                { cells: ['Język sklepu', 'API Shoper', 'Lokalizacja interfejsu'] },
              ],
            },
          ],
        },
        {
          number: '2.2',
          title: 'Dane klientów sklepu',
          paragraphs: [
            'Podczas korzystania z czatu przez klientów sklepu zbieramy:',
          ],
          tables: [
            {
              headers: ['Dane', 'Źródło', 'Cel przetwarzania'],
              rows: [
                { cells: ['Imię i nazwisko*', 'Sesja Shoper lub formularz', 'Identyfikacja w czacie'] },
                { cells: ['Adres email*', 'Sesja Shoper lub formularz', 'Kontakt, historia rozmów'] },
                { cells: ['Treść wiadomości', 'Wprowadzone przez klienta', 'Obsługa zapytania'] },
                { cells: ['Adres IP', 'Automatycznie', 'Bezpieczeństwo, analityka'] },
                { cells: ['Dane przeglądarki', 'Automatycznie', 'Kompatybilność, diagnostyka'] },
              ],
              note: '* Dane opcjonalne — zbierane tylko gdy klient jest zalogowany lub je poda.',
            },
          ],
        },
        {
          number: '2.3',
          title: 'Dane techniczne',
          tables: [
            {
              headers: ['Dane', 'Cel'],
              rows: [
                { cells: ['Tokeny OAuth (zaszyfrowane)', 'Autoryzacja dostępu do API Shoper'] },
                { cells: ['Logi systemowe', 'Diagnostyka, bezpieczeństwo'] },
                { cells: ['Metryki użycia', 'Poprawa jakości usługi'] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'section-3',
      number: '3',
      title: 'Cele przetwarzania danych',
      paragraphs: ['Przetwarzamy dane osobowe w następujących celach:'],
      subsections: [
        {
          number: '3.1',
          title: 'Realizacja usługi (art. 6 ust. 1 lit. b RODO)',
          lists: [
            {
              items: [
                'Umożliwienie komunikacji między właścicielem sklepu a klientami',
                'Identyfikacja klientów w panelu agenta',
                'Przechowywanie historii konwersacji',
              ],
            },
          ],
        },
        {
          number: '3.2',
          title: 'Prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO)',
          lists: [
            {
              items: [
                'Zapewnienie bezpieczeństwa usługi',
                'Wykrywanie nadużyć i oszustw',
                'Analiza i poprawa jakości usługi',
              ],
            },
          ],
        },
        {
          number: '3.3',
          title: 'Zgoda (art. 6 ust. 1 lit. a RODO)',
          lists: [
            {
              items: [
                'Wysyłanie informacji marketingowych (opcjonalne)',
                'Wykorzystanie danych do celów analitycznych (opcjonalne)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'section-4',
      number: '4',
      title: 'Udostępnianie danych',
      subsections: [
        {
          number: '4.1',
          title: 'Podmioty przetwarzające',
          paragraphs: ['Dane mogą być przekazywane podmiotom przetwarzającym dane w naszym imieniu:'],
          tables: [
            {
              headers: ['Podmiot', 'Cel', 'Lokalizacja'],
              rows: [
                { cells: ['Dostawca hostingu', 'Przechowywanie danych', 'UE'] },
                { cells: ['Dostawca email', 'Wysyłka powiadomień', 'UE'] },
                { cells: ['Narzędzia analityczne', 'Analiza użycia', 'UE'] },
              ],
            },
          ],
        },
        {
          number: '4.2',
          title: 'Przekazywanie poza EOG',
          paragraphs: ['Nie przekazujemy danych osobowych poza Europejski Obszar Gospodarczy (EOG).'],
        },
        {
          number: '4.3',
          title: 'Właściciel sklepu',
          paragraphs: [
            'Właściciel sklepu Shoper, który zainstalował aplikację Chataptor, ma dostęp do:',
          ],
          lists: [
            {
              items: [
                'Treści rozmów prowadzonych przez klientów jego sklepu',
                'Danych identyfikacyjnych klientów (imię, email)',
                'Historii konwersacji',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'section-5',
      number: '5',
      title: 'Okres przechowywania danych',
      tables: [
        {
          headers: ['Kategoria danych', 'Okres przechowywania'],
          rows: [
            { cells: ['Dane konta (właściciel sklepu)', 'Do usunięcia konta lub 3 lata od ostatniej aktywności'] },
            { cells: ['Historia konwersacji', '12 miesięcy od zakończenia rozmowy'] },
            { cells: ['Dane po odinstalowaniu', '30 dni (na wypadek reaktywacji)'] },
            { cells: ['Logi systemowe', '90 dni'] },
            {
              cells: [
                'Dane rozliczeniowe, jeśli wprowadzimy usługi płatne',
                '5 lat (wymogi księgowe)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'section-6',
      number: '6',
      title: 'Prawa użytkowników',
      paragraphs: ['Zgodnie z RODO przysługują Państwu następujące prawa:'],
      tables: [
        {
          headers: ['Prawo', 'Opis'],
          rows: [
            { cells: ['<strong>Dostęp</strong>', 'Prawo do uzyskania informacji o przetwarzanych danych'] },
            { cells: ['<strong>Sprostowanie</strong>', 'Prawo do poprawienia nieprawidłowych danych'] },
            { cells: ['<strong>Usunięcie</strong>', 'Prawo do żądania usunięcia danych („prawo do bycia zapomnianym")'] },
            { cells: ['<strong>Ograniczenie</strong>', 'Prawo do ograniczenia przetwarzania'] },
            { cells: ['<strong>Przenoszenie</strong>', 'Prawo do otrzymania danych w formacie nadającym się do odczytu maszynowego'] },
            { cells: ['<strong>Sprzeciw</strong>', 'Prawo do wniesienia sprzeciwu wobec przetwarzania'] },
            { cells: ['<strong>Skarga</strong>', 'Prawo do wniesienia skargi do organu nadzorczego (UODO)'] },
          ],
        },
      ],
      subsections: [
        {
          number: '6.1',
          title: 'Jak skorzystać z praw?',
          paragraphs: [
            'Wyślij email na adres: <strong>privacy@chataptor.com</strong>',
            'Podaj: imię i nazwisko, adres email powiązany z kontem oraz opis żądania.',
            'Odpowiemy w ciągu <strong>30 dni</strong> od otrzymania żądania.',
          ],
        },
      ],
    },
    {
      id: 'section-7',
      number: '7',
      title: 'Bezpieczeństwo danych',
      paragraphs: ['Stosujemy następujące środki ochrony danych:'],
      tables: [
        {
          headers: ['Środek', 'Opis'],
          rows: [
            { cells: ['<strong>Szyfrowanie transmisji</strong>', 'TLS 1.3 dla wszystkich połączeń'] },
            { cells: ['<strong>Szyfrowanie tokenów</strong>', 'AES-256-GCM dla tokenów OAuth'] },
            { cells: ['<strong>Kontrola dostępu</strong>', 'Uwierzytelnianie dwuskładnikowe dla panelu'] },
            { cells: ['<strong>Monitoring</strong>', 'Wykrywanie nieautoryzowanych dostępów'] },
            { cells: ['<strong>Backupy</strong>', 'Regularne kopie zapasowe z szyfrowaniem'] },
            { cells: ['<strong>Lokalizacja</strong>', 'Serwery w Unii Europejskiej'] },
          ],
        },
      ],
    },
    {
      id: 'section-8',
      number: '8',
      title: 'Pliki cookies',
      paragraphs: ['Aplikacja Chataptor wykorzystuje pliki cookies:'],
      tables: [
        {
          headers: ['Nazwa', 'Cel', 'Czas życia'],
          rows: [
            { cells: ['<code>chataptor_session</code>', 'Identyfikacja sesji czatu', 'Sesja'] },
            { cells: ['<code>chataptor_visitor_id</code>', 'Powiązanie historii rozmów', '1 rok'] },
          ],
        },
      ],
      lists: [
        {
          items: ['Widget czatu <strong>nie wykorzystuje</strong> cookies marketingowych ani śledzących.'],
        },
      ],
    },
    {
      id: 'section-9',
      number: '9',
      title: 'Integracja z Shoper',
      subsections: [
        {
          number: '9.1',
          title: 'Uprawnienia API',
          paragraphs: ['Aplikacja Chataptor wymaga następujących uprawnień w API Shoper:'],
          tables: [
            {
              headers: ['Uprawnienie', 'Cel', 'Dostęp do danych osobowych'],
              rows: [
                { cells: ['<code>shop_read</code>', 'Pobranie nazwy sklepu i danych kontaktowych', 'Tak (email właściciela)'] },
                { cells: ['<code>scripts_write</code>', 'Dodanie widgetu czatu do sklepu', 'Nie'] },
              ],
            },
          ],
        },
        {
          number: '9.2',
          title: 'Dane, do których NIE mamy dostępu',
          paragraphs: ['Chataptor <strong>nie ma dostępu</strong> do:'],
          lists: [
            {
              items: [
                'Listy produktów i ich cen',
                'Zamówień i historii zakupów',
                'Danych płatniczych klientów',
                'Haseł i danych logowania',
                'Danych osobowych klientów sklepu (poza sesją czatu)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'section-10',
      number: '10',
      title: 'Zmiany w polityce prywatności',
      paragraphs: [
        'O istotnych zmianach w polityce prywatności poinformujemy:',
      ],
      lists: [
        {
          items: [
            'Emailem na adres właściciela sklepu',
            'Komunikatem w panelu Chataptor',
          ],
        },
      ],
    },
    {
      id: 'section-11',
      number: '11',
      title: 'Kontakt',
      subsections: [
        {
          number: '11.1',
          title: 'W sprawach ochrony danych osobowych',
          paragraphs: [
            'Email: contact@chataptor.com<br/>Adres: ul. Pryncypalna 129/141, 93-373 Łódź',
          ],
        },
        {
          number: '11.2',
          title: 'Inspektor Ochrony Danych (IODO)',
          paragraphs: [
            'Email: iodo@browin.pl<br/>Telefon: +48 42 23 23 200',
          ],
        },
      ],
    },
    {
      id: 'section-12',
      number: '12',
      title: 'Organ nadzorczy',
      paragraphs: [
        'Organem nadzorczym właściwym w sprawach ochrony danych osobowych jest:',
        '<strong>Prezes Urzędu Ochrony Danych Osobowych (UODO)</strong><br/>ul. Stawki 2, 00-193 Warszawa<br/><a href="https://uodo.gov.pl" class="text-emerald-700 underline" rel="noopener" target="_blank">uodo.gov.pl</a>',
      ],
    },
  ],
};

// Fallback: pozostałe locale pokazują wersję PL (pełna, wiążąca prawnie wersja).
const translations: Record<Locale, ShoperPrivacyTranslations> = {
  pl,
  en: pl,
  de: pl,
  fr: pl,
  es: pl,
  it: pl,
  cs: pl,
  sk: pl,
};

export function getShoperPrivacy(lang: Locale): ShoperPrivacyTranslations {
  return translations[lang] || translations.pl;
}
