import type { Locale } from './config';

export interface AboutTranslations {
  hero: {
    title: string;
    highlight: string;
    subtitle: string;
  };
  story: {
    part1: string;
    highlight: string;
    part2: string;
  };
  problems: {
    p1: {
      title: string;
      desc: string;
    };
    p2: {
      title: string;
      desc: string;
    };
    p3: {
      title: string;
      desc: string;
    };
  };
  solution: {
    text: string;
    highlight: string;
  };
  team: {
    title: string;
    desc: string;
    hubert: {
      role: string;
      bio: string;
    };
    marek: {
      role: string;
      bio: string;
    };
  };
  philosophy: {
    title1: string;
    p1: string;
    p2: string;
    title2: string;
    p3: string;
    p4: string;
  };
  cta: {
    title: string;
    desc: string;
  };
}

export const about: Record<Locale, AboutTranslations> = {
  pl: {
    hero: {
      title: 'Zbudowaliśmy Chataptora, bo mieliśmy ',
      highlight: 'dość',
      subtitle: '(I wiemy, że Ty też masz).',
    },
    story: {
      part1: 'Gdy Twój biznes rośnie i chcesz rozpocząć sprzedaż na zagranicznych rynkach, pojawia się bardzo realny, kosztowny problem: bariera językowa.',
      highlight: 'Byliśmy w dokładnie tym samym miejscu.',
      part2: 'Chataptor nie powstał w inkubatorze startupów jako kolejny "genialny pomysł na aplikację". Powstał wewnątrz działającej firmy, która próbowała skalować sprzedaż międzynarodową. Przeanalizowaliśmy rynek i okazało się, że dostępne opcje to po prostu biznesowa droga przez mękę:',
    },
    problems: {
      p1: {
        title: 'Zatrudnienie native speakerów dla każdego nowego rynku?',
        desc: 'Gigantyczne koszty, które pożerają całą marżę.',
      },
      p2: {
        title: 'Posiłkowanie się darmowymi translatorami?',
        desc: 'Amatorka, wieczne „kopiuj-wklej” i wstyd przed klientem.',
      },
      p3: {
        title: 'Korzystanie z rozwiązań rynkowych gigantów?',
        desc: 'Płacenie korporacyjnego haraczu za przeładowane systemy, z których 80% funkcji i tak nigdy nie użyjesz.',
      },
    },
    solution: {
      text: 'Zrozumieliśmy, że nikt nie stworzył narzędzia dla firm takich jak nasza - chcących po prostu sprawnie obsługiwać zagranicznych klientów, bez rozbijania banku.',
      highlight: 'Więc postanowiliśmy zbudować je sami.',
    },
    team: {
      title: 'Poznaj ludzi po drugiej stronie ekranu.',
      desc: 'Nie jesteśmy wielką korporacją z armią inwestorów w garniturach. Jesteśmy dwuosobowym zespołem, który postanowił udowodnić, że można rzucić wyzwanie rynkowym gigantom, tworząc mądrzejszy i sprytniejszy produkt.',
      hubert: {
        role: 'Twój głos w Chataptorze',
        bio: 'Młody, ambitny i napędzany wizją stworzenia czegoś wielkiego. Odpowiadam za to, żeby cały ten statek płynął w dobrym kierunku. Moim zadaniem jest słuchać Ciebie - klienta - i upewniać się, że Chataptor idealnie rozwiązuje Twoje problemy. Pilnuję, żeby nasz produkt nigdy nie stał w miejscu i zawsze był o krok przed Twoimi potrzebami.',
      },
      marek: {
        role: 'Magik od kodu i e-commerce',
        bio: 'Mózg operacyjny i architekt całej naszej technologii. Programista, który przez lata hartował się w rygorystycznej branży bankowej (gdzie nie ma miejsca na błędy ani opóźnienia), a potem przeniósł tę niezawodność do świata e-commerce. Marek to prawdziwy specjalista od wykorzystywania IT do zwiększania sprzedaży. Udowodnił, że niemożliwe nie istnieje - z pomocą sztucznej inteligencji, w zaledwie rok napisał całego Chataptora od zera. Nasz system działa błyskawicznie i to właśnie jego zasługa.',
      },
    },
    philosophy: {
      title1: 'Człowiek w centrum, AI w tle.',
      p1: 'Postawmy sprawę jasno: nie lubimy bezdusznych botów, które udają ludzi i doprowadzają klientów do szału. Wierzymy, że sercem biznesu zawsze jest i będzie człowiek.',
      p2: 'Dlatego nie stworzyliśmy sztucznej inteligencji po to, by zastąpić Twoich pracowników. Stworzyliśmy ją po to, by dać im supermoce. Dzięki Chataptorowi Twój zespół może obsługiwać klientów ze stu różnych krajów, nie znając ani jednego słowa w obcym języku. Wy piszecie po swojemu, Wasi klienci czytają po swojemu.',
      title2: 'Nasza Misja: Cały świat to lokalny rynek.',
      p3: 'Naszym celem jest zburzenie granic. Chcemy, aby każda firma - niezależnie od tego, czy jest to rozwijający się e-commerce, lokalny software house, czy hotel - mogła uruchomić sprzedaż na nowym rynku dosłownie z dnia na dzień.',
      p4: 'Dajemy Ci narzędzie do globalnej ekspansji, które jest proste, uczciwe cenowo i po prostu działa.',
    },
    cta: {
      title: 'Gotowy na usunięcie barier?',
      desc: 'Nie potrzebujesz kolejnego skomplikowanego systemu. Wybierz pakiet, wklej jeden kod na stronę i zacznij działać globalnie.',
    },
  },
  en: {
    hero: {
      title: 'We built Chataptor because we had ',
      highlight: 'enough',
      subtitle: '(And we know you do too).',
    },
    story: {
      part1: 'When your business grows and you want to start selling in foreign markets, a very real, costly problem appears: the language barrier.',
      highlight: 'We were in exactly the same place.',
      part2: 'Chataptor was not created in a startup incubator as another "brilliant app idea". It was born inside a working company trying to scale international sales. We analyzed the market and it turned out that the available options were simply a business nightmare:',
    },
    problems: {
      p1: {
        title: 'Hiring native speakers for every new market?',
        desc: 'Gigantic costs that eat up your entire margin.',
      },
      p2: {
        title: 'Using free translators?',
        desc: 'Amateurish, constant "copy-paste" and embarrassment in front of the client.',
      },
      p3: {
        title: 'Using solutions from market giants?',
        desc: 'Paying corporate ransom for bloated systems where you never use 80% of the features anyway.',
      },
    },
    solution: {
      text: 'We realized that no one had created a tool for companies like ours - wanting to simply and efficiently serve foreign clients without breaking the bank.',
      highlight: 'So we decided to build it ourselves.',
    },
    team: {
      title: 'Meet the people behind the screen.',
      desc: 'We are not a huge corporation with an army of investors in suits. We are a two-person team that decided to prove that you can challenge market giants by creating a smarter and cleverer product.',
      hubert: {
        role: 'Your voice at Chataptor',
        bio: 'Young, ambitious and driven by the vision of creating something big. I am responsible for steering this ship in the right direction. My job is to listen to you - the client - and make sure Chataptor perfectly solves your problems. I ensure our product never stands still and is always one step ahead of your needs.',
      },
      marek: {
        role: 'Code and E-commerce Wizard',
        bio: 'The operational brain and architect of our entire technology. A programmer who hardened himself for years in the rigorous banking industry (where there is no room for errors or delays), and then transferred this reliability to the world of e-commerce. Marek is a true specialist in using IT to increase sales. He proved that the impossible does not exist - with the help of artificial intelligence, he wrote the entire Chataptor from scratch in just a year. Our system works instantly and that is his merit.',
      },
    },
    philosophy: {
      title1: 'Human in the center, AI in the background.',
      p1: 'Let\'s be clear: we don\'t like soulless bots that pretend to be humans and drive customers crazy. We believe that the heart of business is and always will be human.',
      p2: 'That\'s why we didn\'t create artificial intelligence to replace your employees. We created it to give them superpowers. Thanks to Chataptor, your team can serve customers from a hundred different countries without knowing a single word in a foreign language. You write in your way, your clients read in theirs.',
      title2: 'Our Mission: The whole world is a local market.',
      p3: 'Our goal is to tear down borders. We want every company - whether it\'s a growing e-commerce, a local software house, or a hotel - to be able to launch sales in a new market literally overnight.',
      p4: 'We give you a tool for global expansion that is simple, fairly priced, and simply works.',
    },
    cta: {
      title: 'Ready to remove barriers?',
      desc: 'You don\'t need another complicated system. Choose a package, paste one code on the page and start operating globally.',
    },
  },
  de: {
    hero: {
      title: 'Wir haben Chataptor gebaut, weil wir ',
      highlight: 'genug hatten',
      subtitle: '(Und wir wissen, dass Sie das auch haben).',
    },
    story: {
      part1: 'Wenn Ihr Geschäft wächst und Sie den Verkauf auf ausländischen Märkten starten wollen, tritt ein sehr reales, kostspieliges Problem auf: die Sprachbarriere.',
      highlight: 'Wir waren an genau demselben Punkt.',
      part2: 'Chataptor entstand nicht in einem Startup-Inkubator als eine weitere "geniale App-Idee". Es entstand innerhalb eines funktionierenden Unternehmens, das versuchte, den internationalen Vertrieb zu skalieren. Wir analysierten den Markt und stellten fest, dass die verfügbaren Optionen einfach ein geschäftlicher Albtraum waren:',
    },
    problems: {
      p1: {
        title: 'Muttersprachler für jeden neuen Markt einstellen?',
        desc: 'Gigantische Kosten, die Ihre gesamte Marge auffressen.',
      },
      p2: {
        title: 'Kostenlose Übersetzer nutzen?',
        desc: 'Amateurhaft, ständiges "Copy-Paste" und Peinlichkeit vor dem Kunden.',
      },
      p3: {
        title: 'Lösungen von Marktriesen nutzen?',
        desc: 'Zahlung von Unternehmenslösegeld für überladene Systeme, bei denen Sie ohnehin 80% der Funktionen nie nutzen.',
      },
    },
    solution: {
      text: 'Wir haben erkannt, dass niemand ein Tool für Unternehmen wie unseres geschaffen hat - die einfach und effizient ausländische Kunden bedienen wollen, ohne die Bank zu sprengen.',
      highlight: 'Also haben wir beschlossen, es selbst zu bauen.',
    },
    team: {
      title: 'Treffen Sie die Menschen hinter dem Bildschirm.',
      desc: 'Wir sind kein riesiges Unternehmen mit einer Armee von Investoren in Anzügen. Wir sind ein Zwei-Mann-Team, das beschlossen hat zu beweisen, dass man Marktriesen herausfordern kann, indem man ein intelligenteres und clevereres Produkt schafft.',
      hubert: {
        role: 'Ihre Stimme bei Chataptor',
        bio: 'Jung, ehrgeizig und angetrieben von der Vision, etwas Großes zu schaffen. Ich bin dafür verantwortlich, dieses Schiff in die richtige Richtung zu lenken. Meine Aufgabe ist es, Ihnen - dem Kunden - zuzuhören und sicherzustellen, dass Chataptor Ihre Probleme perfekt löst. Ich sorge dafür, dass unser Produkt niemals stillsteht und Ihren Bedürfnissen immer einen Schritt voraus ist.',
      },
      marek: {
        role: 'Code- und E-Commerce-Zauberer',
        bio: 'Das operative Gehirn und der Architekt unserer gesamten Technologie. Ein Programmierer, der sich jahrelang in der strengen Bankenbranche (wo es keinen Platz für Fehler oder Verzögerungen gibt) abgehärtet hat und diese Zuverlässigkeit dann in die Welt des E-Commerce übertragen hat. Marek ist ein wahrer Spezialist darin, IT zur Umsatzsteigerung einzusetzen. Er hat bewiesen, dass das Unmögliche nicht existiert - mit Hilfe künstlicher Intelligenz hat er den gesamten Chataptor in nur einem Jahr von Grund auf neu geschrieben. Unser System arbeitet sofort, und das ist sein Verdienst.',
      },
    },
    philosophy: {
      title1: 'Der Mensch im Mittelpunkt, KI im Hintergrund.',
      p1: 'Lassen Sie uns eines klarstellen: Wir mögen keine seelenlosen Bots, die vorgeben, Menschen zu sein, und Kunden in den Wahnsinn treiben. Wir glauben, dass das Herz des Geschäfts immer der Mensch ist und sein wird.',
      p2: 'Deshalb haben wir keine künstliche Intelligenz geschaffen, um Ihre Mitarbeiter zu ersetzen. Wir haben sie geschaffen, um ihnen Superkräfte zu verleihen. Dank Chataptor kann Ihr Team Kunden aus hundert verschiedenen Ländern bedienen, ohne ein einziges Wort in einer Fremdsprache zu kennen. Sie schreiben auf Ihre Weise, Ihre Kunden lesen auf ihre.',
      title2: 'Unsere Mission: Die ganze Welt ist ein lokaler Markt.',
      p3: 'Unser Ziel ist es, Grenzen niederzureißen. Wir wollen, dass jedes Unternehmen - ob wachsender E-Commerce, lokales Softwarehaus oder Hotel - den Verkauf auf einem neuen Markt buchstäblich über Nacht starten kann.',
      p4: 'Wir geben Ihnen ein Werkzeug für die globale Expansion, das einfach ist, fair bepreist ist und einfach funktioniert.',
    },
    cta: {
      title: 'Bereit, Barrieren zu beseitigen?',
      desc: 'Sie brauchen kein weiteres kompliziertes System. Wählen Sie ein Paket, fügen Sie einen Code auf der Seite ein und beginnen Sie global zu operieren.',
    },
  },
  fr: {
    hero: {
      title: 'Nous avons créé Chataptor car nous en avions ',
      highlight: 'assez',
      subtitle: '(Et nous savons que vous aussi).',
    },
    story: {
      part1: 'Lorsque votre entreprise se développe et que vous souhaitez commencer à vendre sur les marchés étrangers, un problème très réel et coûteux apparaît : la barrière de la langue.',
      highlight: 'Nous étions exactement au même endroit.',
      part2: 'Chataptor n\'a pas été créé dans un incubateur de startups comme une autre "idée d\'application géniale". Il est né au sein d\'une entreprise en activité essayant de développer ses ventes internationales. Nous avons analysé le marché et il s\'est avéré que les options disponibles étaient simplement un cauchemar commercial :',
    },
    problems: {
      p1: {
        title: 'Embaucher des locuteurs natifs pour chaque nouveau marché ?',
        desc: 'Des coûts gigantesques qui dévorent toute votre marge.',
      },
      p2: {
        title: 'Utiliser des traducteurs gratuits ?',
        desc: 'Amateurisme, "copier-coller" constant et embarras devant le client.',
      },
      p3: {
        title: 'Utiliser les solutions des géants du marché ?',
        desc: 'Payer une rançon d\'entreprise pour des systèmes surchargés où vous n\'utilisez de toute façon jamais 80% des fonctionnalités.',
      },
    },
    solution: {
      text: 'Nous avons réalisé que personne n\'avait créé d\'outil pour des entreprises comme la nôtre - voulant simplement et efficacement servir des clients étrangers sans se ruiner.',
      highlight: 'Nous avons donc décidé de le construire nous-mêmes.',
    },
    team: {
      title: 'Rencontrez les personnes derrière l\'écran.',
      desc: 'Nous ne sommes pas une énorme entreprise avec une armée d\'investisseurs en costume. Nous sommes une équipe de deux personnes qui a décidé de prouver que l\'on peut défier les géants du marché en créant un produit plus intelligent et plus astucieux.',
      hubert: {
        role: 'Votre voix chez Chataptor',
        bio: 'Jeune, ambitieux et motivé par la vision de créer quelque chose de grand. Je suis responsable de diriger ce navire dans la bonne direction. Mon travail est de vous écouter - le client - et de m\'assurer que Chataptor résout parfaitement vos problèmes. Je veille à ce que notre produit ne reste jamais immobile et soit toujours une étape devant vos besoins.',
      },
      marek: {
        role: 'Sorcier du code et de l\'e-commerce',
        bio: 'Le cerveau opérationnel et l\'architecte de toute notre technologie. Un programmeur qui s\'est endurci pendant des années dans le secteur bancaire rigoureux (où il n\'y a pas de place pour les erreurs ou les retards), puis a transféré cette fiabilité au monde de l\'e-commerce. Marek est un véritable spécialiste de l\'utilisation de l\'informatique pour augmenter les ventes. Il a prouvé que l\'impossible n\'existe pas - avec l\'aide de l\'intelligence artificielle, il a écrit tout Chataptor à partir de zéro en seulement un an. Notre système fonctionne instantanément et c\'est son mérite.',
      },
    },
    philosophy: {
      title1: 'L\'humain au centre, l\'IA en arrière-plan.',
      p1: 'Soyons clairs : nous n\'aimons pas les robots sans âme qui prétendent être des humains et rendent les clients fous. Nous croyons que le cœur de l\'entreprise est et sera toujours humain.',
      p2: 'C\'est pourquoi nous n\'avons pas créé l\'intelligence artificielle pour remplacer vos employés. Nous l\'avons créée pour leur donner des super-pouvoirs. Grâce à Chataptor, votre équipe peut servir des clients de cent pays différents sans connaître un seul mot dans une langue étrangère. Vous écrivez à votre façon, vos clients lisent à la leur.',
      title2: 'Notre mission : Le monde entier est un marché local.',
      p3: 'Notre objectif est d\'abattre les frontières. Nous voulons que chaque entreprise - qu\'il s\'agisse d\'un e-commerce en croissance, d\'une société de logiciels locale ou d\'un hôtel - puisse lancer des ventes sur un nouveau marché littéralement du jour au lendemain.',
      p4: 'Nous vous donnons un outil pour l\'expansion mondiale qui est simple, à un prix équitable et qui fonctionne simplement.',
    },
    cta: {
      title: 'Prêt à supprimer les barrières ?',
      desc: 'Vous n\'avez pas besoin d\'un autre système compliqué. Choisissez un forfait, collez un code sur la page et commencez à opérer mondialement.',
    },
  },
  es: {
    hero: {
      title: 'Creamos Chataptor porque ya habíamos tenido ',
      highlight: 'suficiente',
      subtitle: '(Y sabemos que tú también).',
    },
    story: {
      part1: 'Cuando tu negocio crece y quieres empezar a vender en mercados extranjeros, aparece un problema muy real y costoso: la barrera del idioma.',
      highlight: 'Estuvimos exactamente en el mismo lugar.',
      part2: 'Chataptor no se creó en una incubadora de startups como otra "idea genial de aplicación". Nació dentro de una empresa en funcionamiento que intentaba escalar las ventas internacionales. Analizamos el mercado y resultó que las opciones disponibles eran simplemente una pesadilla empresarial:',
    },
    problems: {
      p1: {
        title: '¿Contratar hablantes nativos para cada nuevo mercado?',
        desc: 'Costos gigantescos que se comen todo tu margen.',
      },
      p2: {
        title: '¿Usar traductores gratuitos?',
        desc: 'Amateur, "copiar y pegar" constante y vergüenza frente al cliente.',
      },
      p3: {
        title: '¿Usar soluciones de gigantes del mercado?',
        desc: 'Pagar un rescate corporativo por sistemas sobrecargados donde de todos modos nunca usas el 80% de las funciones.',
      },
    },
    solution: {
      text: 'Nos dimos cuenta de que nadie había creado una herramienta para empresas como la nuestra: que quisieran atender de manera simple y eficiente a clientes extranjeros sin arruinarse.',
      highlight: 'Así que decidimos construirla nosotros mismos.',
    },
    team: {
      title: 'Conoce a las personas detrás de la pantalla.',
      desc: 'No somos una gran corporación con un ejército de inversores en traje. Somos un equipo de dos personas que decidió demostrar que se puede desafiar a los gigantes del mercado creando un producto más inteligente y astuto.',
      hubert: {
        role: 'Tu voz en Chataptor',
        bio: 'Joven, ambicioso e impulsado por la visión de crear algo grande. Soy responsable de dirigir este barco en la dirección correcta. Mi trabajo es escucharte a ti, el cliente, y asegurarme de que Chataptor resuelva perfectamente tus problemas. Me aseguro de que nuestro producto nunca se detenga y esté siempre un paso por delante de tus necesidades.',
      },
      marek: {
        role: 'Mago del código y el comercio electrónico',
        bio: 'El cerebro operativo y arquitecto de toda nuestra tecnología. Un programador que se endureció durante años en la rigurosa industria bancaria (donde no hay lugar para errores o retrasos), y luego transfirió esta fiabilidad al mundo del comercio electrónico. Marek es un verdadero especialista en el uso de TI para aumentar las ventas. Demostró que lo imposible no existe: con la ayuda de la inteligencia artificial, escribió todo Chataptor desde cero en solo un año. Nuestro sistema funciona al instante y ese es su mérito.',
      },
    },
    philosophy: {
      title1: 'Humano en el centro, IA en segundo plano.',
      p1: 'Seamos claros: no nos gustan los bots sin alma que fingen ser humanos y vuelven locos a los clientes. Creemos que el corazón del negocio es y siempre será humano.',
      p2: 'Es por eso que no creamos inteligencia artificial para reemplazar a tus empleados. La creamos para darles superpoderes. Gracias a Chataptor, tu equipo puede atender a clientes de cien países diferentes sin saber una sola palabra en un idioma extranjero. Tú escribes a tu manera, tus clientes leen a la suya.',
      title2: 'Nuestra misión: El mundo entero es un mercado local.',
      p3: 'Nuestro objetivo es derribar fronteras. Queremos que cada empresa, ya sea un comercio electrónico en crecimiento, una empresa de software local o un hotel, pueda lanzar ventas en un nuevo mercado literalmente de la noche a la mañana.',
      p4: 'Te damos una herramienta para la expansión global que es simple, tiene un precio justo y simplemente funciona.',
    },
    cta: {
      title: '¿Listo para eliminar barreras?',
      desc: 'No necesitas otro sistema complicado. Elige un paquete, pega un código en la página y comienza a operar globalmente.',
    },
  },
  it: {
    hero: {
      title: 'Abbiamo costruito Chataptor perché ne avevamo ',
      highlight: 'abbastanza',
      subtitle: '(E sappiamo che anche tu ne hai).',
    },
    story: {
      part1: 'Quando la tua attività cresce e vuoi iniziare a vendere nei mercati esteri, appare un problema molto reale e costoso: la barriera linguistica.',
      highlight: 'Eravamo esattamente nello stesso posto.',
      part2: 'Chataptor non è stato creato in un incubatore di startup come un\'altra "idea geniale per un\'app". È nato all\'interno di un\'azienda operativa che cercava di scalare le vendite internazionali. Abbiamo analizzato il mercato ed è emerso che le opzioni disponibili erano semplicemente un incubo aziendale:',
    },
    problems: {
      p1: {
        title: 'Assumere madrelingua per ogni nuovo mercato?',
        desc: 'Costi giganteschi che divorano tutto il tuo margine.',
      },
      p2: {
        title: 'Usare traduttori gratuiti?',
        desc: 'Dilettantistico, "copia-incolla" costante e imbarazzo di fronte al cliente.',
      },
      p3: {
        title: 'Usare soluzioni dei giganti del mercato?',
        desc: 'Pagare un riscatto aziendale per sistemi sovraccarichi dove non usi mai l\'80% delle funzionalità comunque.',
      },
    },
    solution: {
      text: 'Ci siamo resi conto che nessuno aveva creato uno strumento per aziende come la nostra: che volessero servire in modo semplice ed efficiente i clienti stranieri senza andare in bancarotta.',
      highlight: 'Così abbiamo deciso di costruirlo noi stessi.',
    },
    team: {
      title: 'Incontra le persone dietro lo schermo.',
      desc: 'Non siamo una grande azienda con un esercito di investitori in giacca e cravatta. Siamo un team di due persone che ha deciso di dimostrare che si possono sfidare i giganti del mercato creando un prodotto più intelligente e astuto.',
      hubert: {
        role: 'La tua voce in Chataptor',
        bio: 'Giovane, ambizioso e guidato dalla visione di creare qualcosa di grande. Sono responsabile di guidare questa nave nella giusta direzione. Il mio lavoro è ascoltare te - il cliente - e assicurarmi che Chataptor risolva perfettamente i tuoi problemi. Mi assicuro che il nostro prodotto non si fermi mai e sia sempre un passo avanti rispetto alle tue esigenze.',
      },
      marek: {
        role: 'Mago del codice e dell\'e-commerce',
        bio: 'Il cervello operativo e l\'architetto di tutta la nostra tecnologia. Un programmatore che si è temprato per anni nel rigoroso settore bancario (dove non c\'è spazio per errori o ritardi), e poi ha trasferito questa affidabilità al mondo dell\'e-commerce. Marek è un vero specialista nell\'uso dell\'IT per aumentare le vendite. Ha dimostrato che l\'impossibile non esiste: con l\'aiuto dell\'intelligenza artificiale, ha scritto l\'intero Chataptor da zero in un solo anno. Il nostro sistema funziona all\'istante e questo è merito suo.',
      },
    },
    philosophy: {
      title1: 'Umano al centro, IA sullo sfondo.',
      p1: 'Siamo chiari: non ci piacciono i bot senza anima che fingono di essere umani e fanno impazzire i clienti. Crediamo che il cuore del business sia e sarà sempre umano.',
      p2: 'Ecco perché non abbiamo creato l\'intelligenza artificiale per sostituire i tuoi dipendenti. L\'abbiamo creata per dare loro superpoteri. Grazie a Chataptor, il tuo team può servire clienti da cento paesi diversi senza conoscere una sola parola in una lingua straniera. Tu scrivi a modo tuo, i tuoi clienti leggono a modo loro.',
      title2: 'La nostra missione: Il mondo intero è un mercato locale.',
      p3: 'Il nostro obiettivo è abbattere i confini. Vogliamo che ogni azienda - che si tratti di un e-commerce in crescita, una software house locale o un hotel - possa lanciare le vendite in un nuovo mercato letteralmente da un giorno all\'altro.',
      p4: 'Ti diamo uno strumento per l\'espansione globale che è semplice, ha un prezzo equo e funziona semplicemente.',
    },
    cta: {
      title: 'Pronto a rimuovere le barriere?',
      desc: 'Non hai bisogno di un altro sistema complicato. Scegli un pacchetto, incolla un codice sulla pagina e inizia a operare a livello globale.',
    },
  },
  cs: {
    hero: {
      title: 'Postavili jsme Chataptor, protože jsme toho měli ',
      highlight: 'dost',
      subtitle: '(A víme, že vy také).',
    },
    story: {
      part1: 'Když vaše podnikání roste a chcete začít prodávat na zahraničních trzích, objeví se velmi reálný, nákladný problém: jazyková bariéra.',
      highlight: 'Byli jsme přesně na stejném místě.',
      part2: 'Chataptor nevznikl v startupovém inkubátoru jako další "geniální nápad na aplikaci". Zrodil se uvnitř fungující firmy, která se snažila škálovat mezinárodní prodej. Analyzovali jsme trh a ukázalo se, že dostupné možnosti jsou prostě obchodní noční můra:',
    },
    problems: {
      p1: {
        title: 'Najímání rodilých mluvčích pro každý nový trh?',
        desc: 'Gigantické náklady, které požírají celou vaši marži.',
      },
      p2: {
        title: 'Používání bezplatných překladačů?',
        desc: 'Amatérismus, neustálé "kopírovat-vložit" a ostuda před klientem.',
      },
      p3: {
        title: 'Používání řešení tržních gigantů?',
        desc: 'Placení korporátního výkupného za přetížené systémy, kde stejně nikdy nepoužijete 80 % funkcí.',
      },
    },
    solution: {
      text: 'Uvědomili jsme si, že nikdo nevytvořil nástroj pro firmy, jako je ta naše - které chtějí jednoduše a efektivně obsluhovat zahraniční klienty, aniž by zbankrotovaly.',
      highlight: 'Tak jsme se rozhodli ho postavit sami.',
    },
    team: {
      title: 'Poznejte lidi za obrazovkou.',
      desc: 'Nejsme obrovská korporace s armádou investorů v oblecích. Jsme dvoučlenný tým, který se rozhodl dokázat, že můžete vyzvat tržní giganty vytvořením chytřejšího a bystřejšího produktu.',
      hubert: {
        role: 'Váš hlas v Chataptoru',
        bio: 'Mladý, ambiciózní a hnaný vizí vytvořit něco velkého. Jsem zodpovědný za to, aby tato loď plula správným směrem. Mým úkolem je naslouchat vám - klientovi - a ujistit se, že Chataptor dokonale řeší vaše problémy. Dohlížím na to, aby náš produkt nikdy nestál na místě a byl vždy o krok napřed před vašimi potřebami.',
      },
      marek: {
        role: 'Kouzelník kódu a e-commerce',
        bio: 'Operační mozek a architekt celé naší technologie. Programátor, který se léta zoceloval v přísném bankovním sektoru (kde není prostor pro chyby nebo zpoždění), a poté tuto spolehlivost přenesl do světa e-commerce. Marek je skutečný specialista na využívání IT ke zvýšení prodeje. Dokázal, že nemožné neexistuje - s pomocí umělé inteligence napsal celý Chataptor od nuly za pouhý rok. Náš systém funguje okamžitě a to je jeho zásluha.',
      },
    },
    philosophy: {
      title1: 'Člověk ve středu, AI v pozadí.',
      p1: 'Řekněme si to jasně: nemáme rádi bezduché boty, kteří předstírají, že jsou lidé, a přivádějí zákazníky k šílenství. Věříme, že srdcem podnikání je a vždy bude člověk.',
      p2: 'Proto jsme nevytvořili umělou inteligenci, aby nahradila vaše zaměstnance. Vytvořili jsme ji, abychom jim dali superschopnosti. Díky Chataptoru může váš tým obsluhovat zákazníky ze sta různých zemí, aniž by znal jediné slovo v cizím jazyce. Vy píšete po svém, vaši klienti čtou po svém.',
      title2: 'Naše mise: Celý svět je lokální trh.',
      p3: 'Naším cílem je bořit hranice. Chceme, aby každá firma - ať už je to rostoucí e-commerce, lokální softwarový dům nebo hotel - mohla spustit prodej na novém trhu doslova přes noc.',
      p4: 'Dáváme vám nástroj pro globální expanzi, který je jednoduchý, férově naceněný a prostě funguje.',
    },
    cta: {
      title: 'Jste připraveni odstranit bariéry?',
      desc: 'Nepotřebujete další složitý systém. Vyberte si balíček, vložte jeden kód na stránku a začněte fungovat globálně.',
    },
  },
  sk: {
    hero: {
      title: 'Postavili sme Chataptor, pretože sme toho mali ',
      highlight: 'dosť',
      subtitle: '(A vieme, že vy tiež).',
    },
    story: {
      part1: 'Keď vaše podnikanie rastie a chcete začať predávať na zahraničných trhoch, objaví sa veľmi reálny, nákladný problém: jazyková bariéra.',
      highlight: 'Boli sme presne na tom istom mieste.',
      part2: 'Chataptor nevznikol v startupovom inkubátore ako ďalší "geniálny nápad na aplikáciu". Zrodil sa vo vnútri fungujúcej firmy, ktorá sa snažila škálovať medzinárodný predaj. Analyzovali sme trh a ukázalo sa, že dostupné možnosti sú jednoducho obchodná nočná mora:',
    },
    problems: {
      p1: {
        title: 'Najímanie rodených hovorcov pre každý nový trh?',
        desc: 'Gigantické náklady, ktoré požierajú celú vašu maržu.',
      },
      p2: {
        title: 'Používanie bezplatných prekladačov?',
        desc: 'Amatérizmus, neustále "kopírovať-vložiť" a hanba pred klientom.',
      },
      p3: {
        title: 'Používanie riešení trhových gigantov?',
        desc: 'Platenie korporátneho výkupného za preťažené systémy, kde aj tak nikdy nepoužijete 80 % funkcií.',
      },
    },
    solution: {
      text: 'Uvedomili sme si, že nikto nevytvoril nástroj pre firmy, ako je tá naša - ktoré chcú jednoducho a efektívne obsluhovať zahraničných klientov bez toho, aby zbankrotovali.',
      highlight: 'Tak sme sa rozhodli ho postaviť sami.',
    },
    team: {
      title: 'Spoznajte ľudí za obrazovkou.',
      desc: 'Nie sme obrovská korporácia s armádou investorov v oblekoch. Sme dvojčlenný tím, ktorý sa rozhodol dokázať, že môžete vyzvať trhových gigantov vytvorením inteligentnejšieho a bystrejšieho produktu.',
      hubert: {
        role: 'Váš hlas v Chataptore',
        bio: 'Mladý, ambiciózní a hnaný víziou vytvoriť niečo veľké. Som zodpovedný za to, aby táto loď plávala správnym smerom. Mojou úlohou je počúvať vás - klienta - a uistiť sa, že Chataptor dokonale rieši vaše problémy. Dohliadam na to, aby náš produkt nikdy nestál na mieste a bol vždy o krok vpred pred vašimi potřebami.',
      },
      marek: {
        role: 'Čarodejník kódu a e-commerce',
        bio: 'Operačný mozog a architekt celej našej technológie. Programátor, ktorý sa roky zoceloval v prísnom bankovom sektore (kde nie je priestor pre chyby alebo oneskorenia), a potom túto spoľahlivosť preniesol do sveta e-commerce. Marek je skutočný špecialista na využívanie IT na zvýšenie predaja. Dokázal, že nemožné neexistuje - s pomocou umelej inteligencie napísal celý Chataptor od nuly za jediný rok. Náš systém funguje okamžite a to je jeho zásluha.',
      },
    },
    philosophy: {
      title1: 'Človek v strede, AI v pozadí.',
      p1: 'Povedzme si to jasne: nemáme radi bezduché roboty, ktoré predstierajú, že sú ľudia, a privádzajú zákazníkov do šialenstva. Veríme, že srdcom podnikania je a vždy bude človek.',
      p2: 'Preto sme nevytvorili umelú inteligenciu, aby nahradila vašich zamestnancov. Vytvorili sme ju, aby sme im dali superschopnosti. Vďaka Chataptoru môže váš tím obsluhovať zákazníkov zo sto rôznych krajín bez toho, aby poznal jediné slovo v cudzom jazyku. Vy píšete po svojom, vaši klienti čítajú po svojom.',
      title2: 'Naša misia: Celý svet je lokálny trh.',
      p3: 'Naším cieľom je búrať hranice. Chceme, aby každá firma - či už je to rastúci e-commerce, lokálny softvérový dom alebo hotel - mohla spustiť predaj na novom trhu doslova cez noc.',
      p4: 'Dávame vám nástroj pre globálnu expanziu, ktorý je jednoduchý, férovo nacenený a jednoducho funguje.',
    },
    cta: {
      title: 'Ste pripravení odstrániť bariéry?',
      desc: 'Nepotrebujete ďalší zložitý systém. Vyberte si balíček, vložte jeden kód na stránku a začnite fungovat globálne.',
    },
  },
};

export function getAbout(lang: Locale): AboutTranslations {
  return about[lang] || about.en;
}
