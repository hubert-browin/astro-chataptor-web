import type { Locale } from './config';

const translations = {
  pl: {
    hero: {
      title: "Centrum wiedzy",
      subtitle: "Najnowsze trendy w AI, poradniki e-commerce i aktualizacje Chataptor.",
      readMore: "Czytaj artykuł",
      new: "NOWOŚĆ",
    },
    card: {
      readMore: "Czytaj dalej",
      published: "Opublikowano",
    },
    cta: {
      title: "Zwiększ konwersję o 40%",
      desc: "Nie trać klientów przez brak odpowiedzi. Wdróż AI w 5 minut.",
      button: "Wypróbuj za darmo",
    },
    empty: "Wkrótce pojawią się tu pierwsze artykuły.",
    backToBlog: "← Wróć do bloga",
  },
  en: {
    hero: {
      title: "Knowledge hub",
      subtitle: "Latest AI trends, e-commerce guides, and Chataptor updates.",
      readMore: "Read article",
      new: "NEW",
    },
    card: {
      readMore: "Read more",
      published: "Published",
    },
    cta: {
      title: "Boost conversion by 40%",
      desc: "Don't lose customers due to lack of response. Deploy AI in 5 mins.",
      button: "Try for free",
    },
    empty: "First articles coming soon.",
    backToBlog: "← Back to blog",
  },
  de: {
    hero: {
      title: "Wissenszentrum",
      subtitle: "Neueste KI-Trends, E-Commerce-Guides und Chataptor-Updates.",
      readMore: "Artikel lesen",
      new: "NEU",
    },
    card: {
      readMore: "Weiterlesen",
      published: "Veröffentlicht",
    },
    cta: {
      title: "Konversion um 40% steigern",
      desc: "Verlieren Sie keine Kunden durch fehlende Antworten.",
      button: "Kostenlos testen",
    },
    empty: "Erste Artikel kommen bald.",
    backToBlog: "← Zurück zum Blog",
  },
  // Fallbacki dla pozostałych języków (domyślnie EN lub uproszczone)
  fr: { 
    hero: { title: "Centre de connaissances", subtitle: "Dernières tendances IA et guides e-commerce.", readMore: "Lire", new: "NOUVEAU" }, 
    card: { readMore: "Lire la suite", published: "Publié" }, 
    cta: { title: "Boostez la conversion", desc: "Ne perdez plus de clients.", button: "Essai gratuit" }, 
    empty: "À venir.",
    backToBlog: "← Retour au blog"
  },
  it: { 
    hero: { title: "Centro di conoscenza", subtitle: "Ultime tendenze IA e guide e-commerce.", readMore: "Leggi", new: "NUOVO" }, 
    card: { readMore: "Leggi tutto", published: "Pubblicato" }, 
    cta: { title: "Aumenta la conversione", desc: "Non perdere clienti.", button: "Prova gratis" }, 
    empty: "In arrivo.",
    backToBlog: "← Torna al blog"
  },
  es: { 
    hero: { title: "Centro de conocimiento", subtitle: "Últimas tendencias en IA y guías.", readMore: "Leer", new: "NUEVO" }, 
    card: { readMore: "Leer más", published: "Publicado" }, 
    cta: { title: "Aumenta la conversión", desc: "No pierdas clientes.", button: "Prueba gratis" }, 
    empty: "Próximamente.",
    backToBlog: "← Volver al blog"
  },
  cs: { 
    hero: { title: "Centrum znalostí", subtitle: "Nejnovější trendy v AI.", readMore: "Číst", new: "NOVÝ" }, 
    card: { readMore: "Číst více", published: "Publikováno" }, 
    cta: { title: "Zvyšte konverzi", desc: "Neztrácejte zákazníky.", button: "Vyzkoušet zdarma" }, 
    empty: "Již brzy.",
    backToBlog: "← Zpět na blog"
  },
  sk: { 
    hero: { title: "Centrum znalostí", subtitle: "Najnovšie trendy v AI.", readMore: "Čítať", new: "NOVÝ" }, 
    card: { readMore: "Čítať viac", published: "Publikované" }, 
    cta: { title: "Zvýšte konverziu", desc: "Nestracajte zákazníkov.", button: "Vyskúšať zadarmo" }, 
    empty: "Čoskoro.",
    backToBlog: "← Späť na blog"
  },
} as const;

// Helper function do pobierania tłumaczeń
export function getBlogUI(lang: string) {
  // Jeśli język istnieje w obiekcie, zwróć go, w przeciwnym razie zwróć angielski (fallback)
  return translations[lang as keyof typeof translations] || translations['en'];
}