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

    // ✅ Nowe klucze używane na stronie posta
    post: {
      authorLabel: "Autor",
      readTimeLabel: "Czas czytania",
      minutesShort: "min",
      tocTitle: "W tym artykule",
      shareLabel: "Udostępnij:",
      allPostsLink: "Zobacz wszystkie wpisy →",
      shareFacebook: "Facebook",
      shareTwitter: "Twitter / X",
      shareLinkedIn: "LinkedIn",
    },
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

    // ✅ Post page
    post: {
      authorLabel: "Author",
      readTimeLabel: "Reading time",
      minutesShort: "min",
      tocTitle: "In this article",
      shareLabel: "Share:",
      allPostsLink: "See all posts →",
      shareFacebook: "Facebook",
      shareTwitter: "Twitter / X",
      shareLinkedIn: "LinkedIn",
    },
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

    // ✅ Post page
    post: {
      authorLabel: "Autor",
      readTimeLabel: "Lesezeit",
      minutesShort: "Min.",
      tocTitle: "In diesem Artikel",
      shareLabel: "Teilen:",
      allPostsLink: "Alle Beiträge ansehen →",
      shareFacebook: "Facebook",
      shareTwitter: "Twitter / X",
      shareLinkedIn: "LinkedIn",
    },
  },

  fr: {
    hero: {
      title: "Centre de connaissances",
      subtitle: "Dernières tendances IA, guides e-commerce et mises à jour de Chataptor.",
      readMore: "Lire l’article",
      new: "NOUVEAU",
    },
    card: {
      readMore: "Lire la suite",
      published: "Publié",
    },
    cta: {
      title: "Augmentez la conversion de 40%",
      desc: "Ne perdez plus de clients faute de réponse. Déployez l’IA en 5 min.",
      button: "Essayer gratuitement",
    },
    empty: "Les premiers articles arrivent bientôt.",
    backToBlog: "← Retour au blog",

    // ✅ Post page
    post: {
      authorLabel: "Auteur",
      readTimeLabel: "Temps de lecture",
      minutesShort: "min",
      tocTitle: "Dans cet article",
      shareLabel: "Partager :",
      allPostsLink: "Voir tous les articles →",
      shareFacebook: "Facebook",
      shareTwitter: "Twitter / X",
      shareLinkedIn: "LinkedIn",
    },
  },

  it: {
    hero: {
      title: "Centro di conoscenza",
      subtitle: "Ultime tendenze AI, guide e-commerce e aggiornamenti di Chataptor.",
      readMore: "Leggi l’articolo",
      new: "NUOVO",
    },
    card: {
      readMore: "Leggi di più",
      published: "Pubblicato",
    },
    cta: {
      title: "Aumenta la conversione del 40%",
      desc: "Non perdere clienti per mancate risposte. Implementa l’AI in 5 minuti.",
      button: "Prova gratis",
    },
    empty: "I primi articoli arrivano presto.",
    backToBlog: "← Torna al blog",

    // ✅ Post page
    post: {
      authorLabel: "Autore",
      readTimeLabel: "Tempo di lettura",
      minutesShort: "min",
      tocTitle: "In questo articolo",
      shareLabel: "Condividi:",
      allPostsLink: "Vedi tutti gli articoli →",
      shareFacebook: "Facebook",
      shareTwitter: "Twitter / X",
      shareLinkedIn: "LinkedIn",
    },
  },

  es: {
    hero: {
      title: "Centro de conocimiento",
      subtitle: "Últimas tendencias en IA, guías de e-commerce y novedades de Chataptor.",
      readMore: "Leer artículo",
      new: "NUEVO",
    },
    card: {
      readMore: "Leer más",
      published: "Publicado",
    },
    cta: {
      title: "Aumenta la conversión un 40%",
      desc: "No pierdas clientes por falta de respuesta. Implementa IA en 5 minutos.",
      button: "Probar gratis",
    },
    empty: "Los primeros artículos llegarán pronto.",
    backToBlog: "← Volver al blog",

    // ✅ Post page
    post: {
      authorLabel: "Autor",
      readTimeLabel: "Tiempo de lectura",
      minutesShort: "min",
      tocTitle: "En este artículo",
      shareLabel: "Compartir:",
      allPostsLink: "Ver todas las entradas →",
      shareFacebook: "Facebook",
      shareTwitter: "Twitter / X",
      shareLinkedIn: "LinkedIn",
    },
  },

  cs: {
    hero: {
      title: "Centrum znalostí",
      subtitle: "Nejnovější trendy v AI, e-commerce návody a novinky z Chataptoru.",
      readMore: "Číst článek",
      new: "NOVÉ",
    },
    card: {
      readMore: "Číst více",
      published: "Publikováno",
    },
    cta: {
      title: "Zvyšte konverzi o 40 %",
      desc: "Neztrácejte zákazníky kvůli chybějícím odpovědím. Nasazení AI za 5 minut.",
      button: "Vyzkoušet zdarma",
    },
    empty: "První články brzy přibudou.",
    backToBlog: "← Zpět na blog",

    // ✅ Post page
    post: {
      authorLabel: "Autor",
      readTimeLabel: "Doba čtení",
      minutesShort: "min",
      tocTitle: "V tomto článku",
      shareLabel: "Sdílet:",
      allPostsLink: "Zobrazit všechny články →",
      shareFacebook: "Facebook",
      shareTwitter: "Twitter / X",
      shareLinkedIn: "LinkedIn",
    },
  },

  sk: {
    hero: {
      title: "Centrum znalostí",
      subtitle: "Najnovšie trendy v AI, e-commerce návody a novinky z Chataptoru.",
      readMore: "Čítať článok",
      new: "NOVÉ",
    },
    card: {
      readMore: "Čítať viac",
      published: "Publikované",
    },
    cta: {
      title: "Zvýšte konverziu o 40 %",
      desc: "Nestrácajte zákazníkov kvôli chýbajúcim odpovediam. Nasadenie AI za 5 minút.",
      button: "Vyskúšať zadarmo",
    },
    empty: "Prvé články už čoskoro.",
    backToBlog: "← Späť na blog",

    // ✅ Post page
    post: {
      authorLabel: "Autor",
      readTimeLabel: "Čas čítania",
      minutesShort: "min",
      tocTitle: "V tomto článku",
      shareLabel: "Zdieľať:",
      allPostsLink: "Zobraziť všetky články →",
      shareFacebook: "Facebook",
      shareTwitter: "Twitter / X",
      shareLinkedIn: "LinkedIn",
    },
  },
} as const;

// Helper function do pobierania tłumaczeń
export function getBlogUI(lang: string) {
  return translations[lang as keyof typeof translations] || translations['en'];
}