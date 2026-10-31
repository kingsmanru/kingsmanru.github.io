/* =========================================================
   Kingsman Odyssey — extension du catalogue
   (bourses, universités et pays supplémentaires)
   Chargé après data.js.
   ========================================================= */

(function () {
  "use strict";
  const D = window.KO_DATA;

  /* ---------- BOURSES SUPPLÉMENTAIRES ---------- */
  D.bourses.push(
    {
      id: "chevening-uk",
      titre: "Bourse Chevening",
      drapeau: "🇬🇧", pays: "Royaume-Uni", paysId: "royaume-uni",
      org: "Gouvernement britannique — Foreign, Commonwealth & Development Office",
      niveaux: ["Master"],
      financement: "100% financée",
      montant: "Frais de scolarité + allocation mensuelle + vol A/R",
      deadline: "2026-11-03",
      populaire: true,
      description: "Le programme phare du Royaume-Uni pour les futurs leaders : un an de master dans n’importe quelle université britannique, avec frais, allocation de vie, vol et visas couverts.",
      avantages: ["Frais de scolarité intégralement couverts", "Allocation mensuelle de subsistance", "Billet d’avion aller-retour", "Frais de visa pris en charge", "Réseau mondial d’alumni Chevening"],
      conditions: ["Diplôme de licence (Bac+3 minimum)", "2 ans d’expérience professionnelle (2 700 h)", "Retour dans le pays d’origine 2 ans après les études", "Admission dans 3 universités britanniques", "Anglais excellent"],
      site: "https://www.chevening.org"
    },
    {
      id: "gks-coree",
      titre: "Global Korea Scholarship (GKS)",
      drapeau: "🇰🇷", pays: "Corée du Sud", paysId: "coree-du-sud",
      org: "Gouvernement coréen — NIIED",
      niveaux: ["Licence", "Master", "Doctorat"],
      financement: "100% financée",
      montant: "Frais + 900 000 à 1 000 000 KRW/mois + vol + année de coréen",
      deadline: "2027-02-28",
      populaire: true,
      description: "La bourse complète du gouvernement coréen : frais exonérés, allocation mensuelle généreuse, billet d’avion, année préparatoire de langue et assurance, dans les meilleures universités de Corée.",
      avantages: ["Frais de scolarité exonérés", "Allocation mensuelle 900 000–1 000 000 KRW", "Billet d’avion aller-retour", "1 an de cours de coréen offert", "Prime d’installation et de fin d’études", "Assurance médicale"],
      conditions: ["Moins de 25 ans (licence) ou 40 ans (master/doctorat)", "Dossier académique solide (80%+ recommandé)", "Santé compatible avec les études à l’étranger", "Candidature via ambassade ou université partenaire"],
      site: "https://www.studyinkorea.go.kr"
    },
    {
      id: "maeci-italie",
      titre: "Bourse MAECI — Gouvernement italien",
      drapeau: "🇮🇹", pays: "Italie", paysId: "italie",
      org: "Ministère italien des Affaires étrangères et de la Coopération",
      niveaux: ["Master", "Doctorat"],
      financement: "100% financée",
      montant: "900 €/mois + exonération des frais + assurance",
      deadline: "2027-06-08",
      populaire: false,
      description: "Programme du gouvernement italien pour les étudiants étrangers : allocation mensuelle de 900 €, exonération des frais universitaires et assurance maladie, pour 3, 6 ou 9 mois d’études ou de recherche.",
      avantages: ["900 € par mois", "Exonération des frais d’université", "Assurance maladie incluse", "Valable pour master et recherche (doctorat)", "Candidature 100% en ligne (portail Study in Italy)"],
      conditions: ["Diplôme requis selon le niveau visé", "Ne pas avoir déjà bénéficié d’une bourse MAECI", "Italien B2 ou anglais selon le programme", "Moins de 26 ans en master (généralement)"],
      site: "https://studyinitaly.esteri.it"
    },
    {
      id: "roumanie-gov",
      titre: "Bourse du Gouvernement Roumain",
      drapeau: "🇷🇴", pays: "Roumanie", paysId: "roumanie",
      org: "Ministère roumain des Affaires étrangères",
      niveaux: ["Licence", "Master", "Doctorat"],
      financement: "100% financée",
      montant: "Exonération des frais + allocation mensuelle (65 à 85 €)",
      deadline: "2027-03-31",
      populaire: false,
      description: "Bourses d’État roumaines pour les étudiants non-UE : formation gratuite dans les universités roumaines, allocation mensuelle et hébergement en résidence à tarif réduit — une porte d’entrée économique vers l’Union européenne.",
      avantages: ["Exonération totale des frais de scolarité", "Allocation mensuelle 65–85 €", "Logement en résidence universitaire subventionné", "Diplômes reconnus dans toute l’UE", "Programmes en anglais et en français"],
      conditions: ["Nationalité hors UE", "Dossier académique conforme (moyenne exigée selon cycle)", "Lettre d’acceptation préalable de l’université", "Bon niveau d’anglais ou de français"],
      site: "https://www.mae.ro"
    },
    {
      id: "suisse-excellence",
      titre: "Bourses d’Excellence du Gouvernement Suisse",
      drapeau: "🇨🇭", pays: "Suisse", paysId: "suisse",
      org: "Confédération suisse — SERI",
      niveaux: ["Doctorat"],
      financement: "100% financée",
      montant: "1 920 CHF/mois + exonération des frais + assurance",
      deadline: "2026-12-15",
      populaire: false,
      description: "Programme d’excellence de la Confédération pour la recherche : doctorat ou recherche post-doctorale dans une université ou haute école suisse, avec allocation mensuelle généreuse et exemption des frais.",
      avantages: ["1 920 CHF par mois", "Exonération des frais d’inscription", "Assurance maladie obligatoire prise en charge", "Accès aux meilleurs laboratoires européens", "Allocations familiales possibles"],
      conditions: ["Diplôme de master (ou équivalent)", "Directeur de thèse suisse identifié avant candidature", "Moins de 35 ans à la date limite", "Dossier via l’ambassade de Suisse du pays de résidence"],
      site: "https://www.sbfi.admin.ch"
    },
    {
      id: "fulbright-usa",
      titre: "Bourse Fulbright — Programme étudiants étrangers",
      drapeau: "🇺🇸", pays: "États-Unis", paysId: "etats-unis",
      org: "Département d’État américain — Commission Fulbright",
      niveaux: ["Master", "Doctorat"],
      financement: "100% financée",
      montant: "Frais de scolarité + allocation + assurance + vol",
      deadline: "2026-05-31",
      ouverture: "Rouvre généralement entre février et juin 2027",
      populaire: false,
      description: "Le programme d’échanges académiques le plus prestigieux au États-Unis : financement complet d’un master ou doctorat (frais, allocation, assurance, voyage) pour les étudiants brillants du monde entier.",
      avantages: ["Frais de scolarité couverts", "Allocation mensuelle de subsistance", "Assurance santé", "Billet d’avion aller-retour", "Statut J-1 et réseau alumni Fulbright"],
      conditions: ["Diplôme de licence avec excellence", "Retour au pays 2 ans après le programme", "Test d’anglais (TOEFL/IELTS) requis", "Candidature via la commission Fulbright du pays"],
      site: "https://foreign.fulbrightonline.org"
    }
  );

  /* ---------- UNIVERSITÉS SUPPLÉMENTAIRES (Russie) ---------- */
  D.universites.push(
    { id: "mgimo", nom: "MGIMO University", drapeau: "🇷🇺", pays: "Russie", ville: "Moscou, Russie", rang: "Top 300 mondial",
      desc: "L’école de référence en relations internationales, diplomatie et droit international — le vivier des diplomates russes.",
      domaines: ["Relations internationales", "Droit", "Économie"], img: null, site: "https://english.mgimo.ru" },
    { id: "hse", nom: "HSE University", drapeau: "🇷🇺", pays: "Russie", ville: "Moscou, Russie", rang: "Top 300 mondial",
      desc: "L’université de référence en économie et sciences sociales, avec un nombre croissant de programmes 100% en anglais.",
      domaines: ["Économie", "Informatique", "Sciences sociales"], img: null, site: "https://hse.ru/en" },
    { id: "spbugu", nom: "Saint Petersburg State University", drapeau: "🇷🇺", pays: "Russie", ville: "Saint-Pétersbourg, Russie", rang: "Top 300 mondial",
      desc: "La plus ancienne université de Russie (1724) : campus historique au cœur de Saint-Pétersbourg, excellence en droit, médecine et mathématiques.",
      domaines: ["Droit", "Médecine", "Mathématiques"], img: null, site: "https://english.spbu.ru" },
    { id: "rudn", nom: "RUDN University", drapeau: "🇷🇺", pays: "Russie", ville: "Moscou, Russie", rang: "Top 400 mondial",
      desc: "L’université la plus internationale de Russie : étudiants de plus de 160 pays, ambiance multiculturelle et médecine réputée.",
      domaines: ["Médecine", "Ingénierie", "Agronomie"], img: null, site: "https://eng.rudn.ru" },
    { id: "kfu", nom: "Kazan Federal University", drapeau: "🇷🇺", pays: "Russie", ville: "Kazan, Russie", rang: "Top 400 mondial",
      desc: "Deuxième plus ancienne université de Russie (1804), très prisée en médecine, chimie et biologie — coût de la vie très accessible.",
      domaines: ["Médecine", "Chimie", "Biologie"], img: null, site: "https://kpfu.ru/eng" },
    { id: "gumrf", nom: "Admiral Makarov State University (GUMRF)", drapeau: "🇷🇺", pays: "Russie", ville: "Saint-Pétersbourg, Russie", rang: "Référence maritime",
      desc: "L’université d’État maritime de Russie : navigation, ingénierie navale, logistique et droit maritime, au bord de la Néva.",
      domaines: ["Navigation", "Ingénierie navale", "Logistique"], img: null, site: "https://en.gumrf.ru" }
  );

  D.universiteDetails = D.universiteDetails || {};
  Object.assign(D.universiteDetails, {
    mgimo: {
      fondation: "1944", etudiants: "≈ 6 000 étudiants",
      presentation: "Créée par le ministère soviétique des Affaires étrangères, MGIMO est l’école qui forme les diplomates, négociateurs et spécialistes du droit international de la Russie. Son concours d’entrée reste l’un des plus sélectifs du pays.",
      longText: "MGIMO enseigne pas moins de 54 langues étrangères — un record mondial — et entretient des doubles diplômes avec Sciences Po, LSE, ou encore l’Université libre de Berlin. Les programmes en anglais se sont multipliés ces dernières années, ouvrant la porte aux étudiants internationaux.",
      atouts: ["École n°1 en relations internationales en Russie", "54 langues étrangères enseignées", "Doubles diplômes avec Sciences Po et LSE", "Réseau d’alumni diplomates dans le monde entier"],
      vie: "Campus moderne à Moscou (Prospect Vernadskogo), résidences rénovées, clubs de débat et model ONU très actifs, proximité du centre-ville en métro.",
      frais: "Via le quota gouvernemental : formation gratuite + bourse d’État. Hors quota : programmes en anglais plus coûteux (5 500 – 8 500 $/an).",
      langue: "Russe et programmes complets en anglais (relations internationales, économie).",
      bourses: ["quota-russie", "opendoors-russie"]
    },
    hse: {
      fondation: "1992", etudiants: "≈ 50 000 étudiants",
      presentation: "Fondée après la chute de l’URSS, la Higher School of Economics est devenue en trente ans la référence russe en économie, gestion, informatique et sciences sociales — et l’une des universités les mieux classées du pays.",
      longText: "HSE s’est imposée par son ouverture internationale : un tiers de ses publications sont co-signées avec des chercheurs étrangers, de nombreux programmes sont enseignés intégralement en anglais, et ses campus de Moscou, Saint-Pétersbourg, Nijni Novgorod et Perm accueillent des étudiants du monde entier.",
      atouts: ["Top mondial en économie et mathématiques appliquées", "40+ programmes 100% en anglais", "Partenariats avec LSE, Erasmus et Sorbonne", "Yandex Data School et excellentes filières data science"],
      vie: "Campus urbains au cœur de Moscou, vie étudiante très animée, hackathons, clubs d’investissement et incubateur de startups.",
      frais: "Via le quota : gratuite + bourse. Programmes anglais hors quota : 5 000 – 7 500 $/an, nombreux mérit-bourses internes.",
      langue: "Russe et anglais (large offre de masters en anglais).",
      bourses: ["quota-russie", "opendoors-russie"]
    },
    spbugu: {
      fondation: "1724", etudiants: "≈ 30 000 étudiants",
      presentation: "Fondée par Pierre le Grand, l’université d’État de Saint-Pétersbourg est la plus ancienne de Russie. Son campus principal sur l’île Vassilievski et ses bâtiments néo-classiques en font un lieu d’étude unique au monde.",
      longText: "SPbGU a formé plusieurs prix Nobel (Pavlov, Kantorovitch…) et reste une référence en droit, médecine, philologie et mathématiques. Ses facultés de droit et de relations internationales alimentent les plus grandes institutions du pays. Le quota gouvernemental y réserve chaque année des places aux étudiants étrangers.",
      atouts: ["La plus ancienne université de Russie", "Plusieurs prix Nobel parmi ses diplômés", "Droit et médecine de premier plan", "Étudier au cœur de la Venise du Nord"],
      vie: "Saint-Pétersbourg : canaux, musées de l’Ermitage, nuits blanches en juin. Résidences universitaires historiques, coût de la vie inférieur à Moscou.",
      frais: "Via le quota : formation gratuite + bourse d’État + résidence. Hors quota : 3 500 – 6 000 $/an selon la filière.",
      langue: "Russe (année préparatoire possible) et quelques masters en anglais.",
      bourses: ["quota-russie", "opendoors-russie"]
    },
    rudn: {
      fondation: "1960", etudiants: "≈ 27 000 étudiants",
      presentation: "L’université russe de l’Amitié des Peuples, nommée d’après Patrice Lumumba, a été créée pour former les élites du tiers-monde. Elle reste l’université la plus multiculturelle de Russie, avec des étudiants de plus de 160 pays.",
      longText: "RUDN est particulièrement réputée pour sa faculté de médecine — l’une des plus grandes de Russie —, son agronomie tropicale et ses filières d’ingénierie. Son campus de Moscou Sud-Ouest, avec ses 27 résidences, est une véritable petite ville internationale.",
      atouts: ["Étudiants de plus de 160 pays", "Faculté de médecine de très grande renommée", "Filières pensées pour les étudiants internationaux", "Associations nationales étudiantes actives"],
      vie: "Campus verdoyant avec résidences, cantines du monde entier, fêtes interculturelles toute l’année, métro direct vers le centre de Moscou.",
      frais: "Via le quota : gratuite + bourse. Hors quota : médecine environ 4 500 – 6 500 $/an.",
      langue: "Russe avec année préparatoire solide, programmes de médecine en anglais disponibles.",
      bourses: ["quota-russie", "opendoors-russie"]
    },
    kfu: {
      fondation: "1804", etudiants: "≈ 50 000 étudiants",
      presentation: "Deuxième plus ancienne université de Russie, l’université fédérale de Kazan a vu étudier Lénine et Tolstoï. Elle est aujourd’hui particulièrement prisée des étudiants internationaux en médecine, chimie et biologie.",
      longText: "Kazan combine un campus historique classé au patrimoine et un pôle high-tech (Institut de chimie, nanotechnologies, IT-park). La faculté de médecine forme depuis des décennies des médecins venus d’Afrique, d’Asie et du Moyen-Orient, avec des cursus en anglais.",
      atouts: ["Faculté de médecine réputée, cursus en anglais", "Ville étudiante parmi les plus agréables de Russie", "Coût de la vie très accessible (200–300 €/mois)", "Métropole multi-confessionnelle et sûre"],
      vie: "Kazan, capitale du Tatarstan : Kremlin classé UNESCO, cuisine tatare, vie nocturne étudiante, à 1 h de vol de Moscou.",
      frais: "Via le quota : gratuite + bourse. Hors quota : médecine ≈ 3 800 – 5 800 $/an.",
      langue: "Russe et anglais (médecine et informatique).",
      bourses: ["quota-russie", "opendoors-russie"]
    },
    gumrf: {
      fondation: "1876", etudiants: "≈ 10 000 étudiants",
      presentation: "L’université d’État maritime de l’amiral Makarov est la référence russe des métiers de la mer : navigation, ingénierie des systèmes de navires, logistique portuaire et droit maritime international.",
      longText: "Située sur les rives de la Néva à Saint-Pétersbourg, GUMRF forme officiers de marine, ingénieurs de navires et managers de la logistique mondiale. Ses simulateurs de passerelle et ses bassins d’essai comptent parmi les mieux équipés d’Europe, et ses diplômés naviguent sur les plus grandes flottes du monde.",
      atouts: ["Référence mondiale des sciences maritimes", "Simulateurs de navigation dernier cri", "Débouchés internationaux dans le shipping", "Un des rares cursus 100% maritime en anglais"],
      vie: "Saint-Pétersbourg au bord de la Néva : stages à bord dès les premières années, proximité des grands ports de la Baltique.",
      frais: "Via le quota : gratuite + bourse. Hors quota : ≈ 3 000 – 4 500 $/an.",
      langue: "Russe et anglais (programmes de navigation).",
      bourses: ["quota-russie", "opendoors-russie"]
    }
  });

  /* ---------- PAYS SUPPLÉMENTAIRES ---------- */
  D.pays.push(
    { id: "etats-unis", nom: "États-Unis", drapeau: "🇺🇸", langues: "Anglais", devise: "USD ($)",
      desc: "Le plus grand système universitaire au monde : bourses Fulbright, recherche de pointe et débouchés internationaux.",
      img: null, disponible: false },
    { id: "royaume-uni", nom: "Royaume-Uni", drapeau: "🇬🇧", langues: "Anglais", devise: "GBP (£)",
      desc: "Universités centenaires (Oxford, LSE…) et la bourse Chevening pour les futurs leaders.",
      img: null, disponible: false },
    { id: "suisse", nom: "Suisse", drapeau: "🇨🇭", langues: "Français / Allemand / Anglais", devise: "CHF",
      desc: "Excellence recherche et bourses fédérales pour doctorats dans les EPF et universités suisses.",
      img: null, disponible: false },
    { id: "coree-du-sud", nom: "Corée du Sud", drapeau: "🇰🇷", langues: "Coréen / Anglais", devise: "KRW (₩)",
      desc: "La bourse GKS, des universités technologiques de premier plan et une culture mondiale (K-pop, cinéma).",
      img: null, disponible: false },
    { id: "roumanie", nom: "Roumanie", drapeau: "🇷🇴", langues: "Roumain / Anglais", devise: "RON (lei)",
      desc: "Bourses gouvernementales complètes et coût de la vie minime — une porte d’entrée vers l’Union européenne.",
      img: null, disponible: false },
    { id: "tchequie", nom: "Tchéquie", drapeau: "🇨🇿", langues: "Tchèque / Anglais", devise: "CZK (Kč)",
      desc: "Universités techniques réputées (Prague, Brno) et frais de scolarité parmi les plus bas d’Europe.",
      img: null, disponible: false }
  );

  /* ---------- mise à jour des statistiques ---------- */
  D.stats[0].valeur = D.bourses.length;

  /* ---------- ARTICLES SUPPLÉMENTAIRES ---------- */
  D.articles.push(
    {
      id: "open-doors-2027",
      cat: "Bourses",
      titre: "Open Doors 2027 : l’olympiade qui ouvre les universités russes",
      resume: "Inscriptions du 20 août au 1er novembre 2026 : passez l’olympiade en ligne, gagnez une place en master ou doctorat avec frais de scolarité exonérés.",
      date: "2026-09-10",
      lecture: "7 min",
      img: "/assets/img/pub-open-doors.jpg",
      contenu: [
        { h: "La porte d’entrée la plus directe vers les universités russes", p: "Organisée par le gouvernement russe, l’olympiade Open Doors permet aux étudiants du monde entier d’entrer en master ou en doctorat dans les meilleures universités russes sans concours d’entrée classique — et avec une exonération totale des frais de scolarité pour les gagnants." },
        { h: "Comment ça se passe", p: "Tout se déroule en ligne, depuis chez vous : inscription sur le site officiel, premier tour de questions ouvert à tous, puis second tour résolu par un jury. Les gagnants choisissent leur université et leur programme parmi plus de 500 formations, sans autre examen d’entrée." },
        { h: "Calendrier de l’édition 2027", p: "Les inscriptions sont ouvertes du 20 août au 1er novembre 2026. Les tours d’épreuves se déroulent entre novembre et février, et les résultats tombent au printemps pour une rentrée en septembre 2027. Anticipez : un passeport valide et vos relevés de notes traduits seront demandés dès l’inscription." },
        { h: "Ce que couvre la bourse", p: "Exonération totale des frais de scolarité et bourse d’État mensuelle pour les gagnants ayant confirmé leur place. Les programmes sont disponibles en russe comme en anglais selon les universités." },
        { h: "Comment Kingsman Odyssey vous aide", p: "Nous vous accompagnons sur toute la chaîne : choix de la matière et des universités cibles, préparation aux épreuves, constitution du dossier, sélection finale et formalités de visa. Notre connaissance des attentes des jurys fait la différence au second tour." },
        { h: "Notre conseil", p: "Ne choisissez pas votre matière au hasard : certains domaines (informatique, physique, économie) sont beaucoup plus concurrentiels que d’autres. Une consultation rapide permet de calibrer votre stratégie avant le 1er novembre." }
      ]
    },
    {
      id: "quota-russie-guide",
      cat: "Guides pays",
      titre: "Quota du Gouvernement russe : le guide pratique 2027",
      resume: "30 000 places gratuites chaque année : fonctionnement du quota, calendrier, documents exigés et erreurs à éviter pour maximiser vos chances.",
      date: "2026-09-08",
      lecture: "9 min",
      img: "/assets/img/students.jpg",
      contenu: [
        { h: "Qu’est-ce que le quota ?", p: "Chaque année, le gouvernement russe réserve 30 000 places gratuites dans ses universités aux étudiants étrangers, via Rossotrudnichestvo. Formation 100% gratuite, bourse d’État mensuelle et logement universitaire à tarif réduit : c’est le dispositif le plus accessible pour étudier en Russie." },
        { h: "Comment candidater", p: "Tout se passe sur la plateforme education-in-russia.com : création du compte, choix de jusqu’à six universités et programmes, dépôt des documents. Aucun frais de dossier. Les commissions d’université examinent puis organisent des entretiens en ligne selon les programmes." },
        { h: "Le calendrier à connaître", p: "Les inscriptions ouvrent généralement en novembre pour une rentrée de septembre de l’année suivante. Les places partent vite dans les filières demandées (médecine, dentaire, informatique, relations internationales) : déposez votre dossier dès l’ouverture." },
        { h: "Les documents à préparer", p: "Passeport valide, relevés de notes et diplômes avec traduction assermentée, photo d’identité normalisée, certificat médical incluant le test VIH. Pour les candidats de moins de 18 ans, l’autorisation parentale est obligatoire." },
        { h: "Les erreurs qui coûtent des places", p: "Un dossier déposé tardivement, des traductions non conformes, une adresse e-mail peu consultée ou un entretien raté faute de préparation : chaque année, des candidats excellents perdent leur place pour des détails évitables. Un accompagnement structuré élimine ces risques." },
        { h: "Comment nous agissons", p: "Kingsman Odyssey anime chaque année des dizaines de dossiers quota : sélection stratégique des six vœux, préparation de l’entretien, suivi des commissions et installation complète sur place. Notre équipe connaît les attentes précises des universités." }
      ]
    },
    {
      id: "budget-russie-2027",
      cat: "Conseils",
      titre: "Budget étudiant en Russie : combien prévoir en 2027 ?",
      resume: "Moscou, Saint-Pétersbourg, Kazan : le coût réel de la vie étudiante russe, poste par poste, et les astuces pour étudier dans une grande capitale sans se ruiner.",
      date: "2026-09-05",
      lecture: "8 min",
      img: "/assets/img/library.jpg",
      contenu: [
        { h: "Une équation très favorable", p: "Entre le niveau de vie élevé des universités russes et un rouble qui rend les dépenses locales attractives, la Russie offre l’un des meilleurs rapports qualité-prix de l’enseignement supérieur international. Tout dépend néanmoins de la ville choisie." },
        { h: "Moscou : le haut de gamme", p: "Comptez 350 à 550 € par mois en tenant compte d’une résidence universitaire (30 à 80 €), d’une cantine ou d’un appartement en colocation, des transports (abonnement étudiant très économique) et des sorties. Les jobs étudiants et les bourses d’excellence compensent largement pour les profils solides." },
        { h: "Saint-Pétersbourg et Kazan : le meilleur rapport", p: "À Saint-Pétersbourg, 250 à 400 € suffisent ; à Kazan, 180 à 300 € couvrent l’essentiel avec un niveau de confort élevé. Ces deux villes accueillent la majorité de nos étudiants et offrent un cadre étudiant exceptionnel." },
        { h: "Le logement : le poste clé", p: "La résidence universitaire reste l’option la plus économique (15 à 50 €/mois selon les villes et les universités). Elle se réserve tôt — dès l’admission. Nos équipes vous accompagnent dans cette démarche pour garantir votre place avant l’arrivée." },
        { h: "Les aides qui changent tout", p: "Les bourses d’État (quota, Open Doors) incluent l’essentiel : frais, allocation mensuelle et logement. Les étudiants en emploi sur campus disposent aussi d’un complément de revenu. Bien construit, votre budget peut descendre sous les 200 € par mois." },
        { h: "Notre méthode", p: "Lors de la consultation, nous établissons avec vous un budget réaliste ville par ville, frais cachés compris : assurance, translations, dépôt de logement, premier mois. Vous savez exactement ce que vous allez engager avant de décider." }
      ]
    }
  );
})();
