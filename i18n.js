/* =========================================================
   Kingsman Odyssey — couche bilingue FR / EN
   ========================================================= */

(function () {
  "use strict";
  window.KO_DICT = window.KO_DICT || {};

  const APO = "\u2019"; /* apostrophe typographique utilisée dans toutes les clés FR */

  const DICT = {
    /* navigation / entête */
    "Accueil": "Home",
    "Bourses": "Scholarships",
    ["Bourses d" + APO + "études"]: "Scholarships",
    "Universités partenaires": "Partner universities",
    "Universités": "Universities",
    "Destinations": "Destinations",
    "Services": "Services",
    "À propos": "About",
    "FAQ": "FAQ",
    "Ressources": "Resources",
    "Réserver une consultation": "Book a consultation",
    "Réserver ma consultation": "Book my consultation",
    "Ouvrir le menu": "Open menu",
    "Fermer le menu": "Close menu",
    "Navigation": "Navigation",
    "Contact": "Contact",

    /* pied de page */
    ["« L" + APO + "art du voyage, l" + APO + "élégance de l" + APO + "odyssée. » Votre partenaire de confiance pour la mobilité académique internationale."]:
      "« The art of travel, the elegance of the odyssey. » Your trusted partner for international academic mobility.",
    "Derniers articles": "Latest articles",
    "Guides pays": "Country guides",
    "Nous contacter": "Contact us",
    "Notre processus": "Our process",
    "WhatsApp / Telegram : +7 (993) 964-79-36": "WhatsApp / Telegram: +7 (993) 964-79-36",
    "Tous les jours · 10h – 22h (GMT+3)": "Every day · 10 am – 10 pm (GMT+3)",
    "Tous droits réservés.": "All rights reserved.",

    /* accueil */
    ["« L" + APO + "art du voyage, l" + APO + "élégance de l" + APO + "odyssée »"]: "« The art of travel, the elegance of the odyssey »",
    ["Votre passeport vers l" + APO]: "Your passport to ",
    "excellence académique": "academic excellence",
    " internationale": " worldwide",
    ["Kingsman Odyssey vous accompagne vers les meilleures universités et bourses d" + APO + "études à travers le monde."]:
      "Kingsman Odyssey guides you to the best universities and scholarships around the world.",
    "Explorer les bourses": "Explore scholarships",
    ["Recherche rapide d" + APO + "opportunités"]: "Quick opportunity search",
    ["Niveau d" + APO + "étude"]: "Study level",
    ["Niveau d" + APO + "étude — Tous"]: "Study level — All",
    "Pays": "Country",
    "Pays — Tous": "Country — All",
    "Russie — disponible": "Russia — available",
    "— bientôt": " — coming soon",
    "Rechercher": "Search",
    "Bourses référencées": "Listed scholarships",
    "Pays couverts": "Countries covered",
    "Clients satisfaits": "Satisfied clients",
    ["Bourses d" + APO + "études les plus récentes"]: "Latest scholarships",
    "Les programmes actuellement ouverts, mis à jour par notre veille permanente.":
      "Programmes currently open, updated by our permanent monitoring.",
    "Toutes": "All",
    "Licence": "Bachelor's",
    "Master": "Master's",
    "Doctorat": "PhD",
    "Aucune bourse ouverte pour ce niveau pour le moment — ": "No open scholarship for this level right now — ",
    "voir tout le catalogue": "see the full catalogue",
    "Universités en vedette": "Featured universities",
    "Explorer par pays": "Explore by country",
    "Comment ça marche": "How it works",
    "Un accompagnement structuré en 4 étapes pour maximiser vos chances de succès":
      "A structured 4-step support programme to maximise your chances of success",
    "Consultation initiale": "Initial consultation",
    "Échange détaillé pour comprendre vos objectifs académiques et professionnels.":
      "A detailed discussion to understand your academic and professional goals.",
    "Évaluation du profil": "Profile assessment",
    "Analyse de votre dossier et identification des meilleures opportunités.":
      "Analysis of your application file and identification of the best opportunities.",
    "Préparation de la candidature": "Application preparation",
    "Constitution et optimisation de votre dossier pour maximiser vos chances.":
      "Building and optimising your application to maximise your chances.",
    "Suivi et admission": "Follow-up and admission",
    ["Accompagnement jusqu" + APO + "à l" + APO + "obtention de votre admission et au-delà."]:
      "Support until you obtain your admission and beyond.",
    "Pourquoi Kingsman Odyssey": "Why Kingsman Odyssey",
    "Une plateforme complète pour votre mobilité académique":
      "A complete platform for your academic mobility",
    "Nous combinons expertise humaine, technologie et accompagnement personnalisé":
      "We combine human expertise, technology and personalised support",
    "Recherche avancée": "Advanced search",
    "Trouvez rapidement des bourses et universités adaptées à votre profil grâce à nos filtres avancés.":
      "Quickly find scholarships and universities that match your profile thanks to our advanced filters.",
    "Alertes personnalisées": "Personalised alerts",
    "Recevez des notifications pour les opportunités correspondant à vos critères.":
      "Receive notifications for opportunities matching your criteria.",
    "Accompagnement complet": "End-to-end support",
    ["Gérez et suivez l" + APO + "état de votre candidature de bout en bout, jusqu" + APO + "au visa et à l" + APO + "installation."]:
      "Manage and track your application from start to finish, through to your visa and settling in.",
    "Ressources et conseils": "Resources and advice",
    "Accédez à des guides et conseils pratiques pour maximiser vos chances de succès.":
      "Access practical guides and advice to maximise your chances of success.",
    "Témoignages": "Testimonials",
    "Ils ont réussi leur odyssée": "They completed their odyssey",
    "Questions fréquentes": "Frequently asked questions",
    "Vos questions, nos réponses": "Your questions, our answers",
    "Trouvez rapidement des réponses aux questions les plus courantes":
      "Quickly find answers to the most common questions",
    "Une autre question ?": "Another question?",
    "Voir toute la FAQ": "See the whole FAQ",
    "contactez-nous": "contact us",
    "Restez informé": "Stay informed",
    "Recevez les dernières opportunités de bourses": "Receive the latest scholarship opportunities",
    "Conseils et nouvelles bourses directement dans votre boîte mail, une fois par mois.":
      "Advice and new scholarships straight to your inbox, once a month.",
    "Votre adresse e-mail": "Your e-mail address",
    ["S" + APO + "inscrire"]: "Subscribe",
    "Inscription confirmée !": "Subscription confirmed!",
    "recevra nos prochaines opportunités.": "will receive our upcoming opportunities.",
    "Pas de spam. Désabonnez-vous à tout moment.": "No spam. Unsubscribe at any time.",
    ["Passez à l" + APO + "action"]: "Take action",
    "Prêt à commencer votre aventure académique ?": "Ready to start your academic adventure?",
    ["Rejoignez des centaines d" + APO + "étudiants qui ont réalisé leur rêve d" + APO + "études à l" + APO + "étranger. Notre équipe vous accompagne à chaque étape de votre odyssée."]:
      "Join hundreds of students who achieved their dream of studying abroad. Our team supports you at every step of your odyssey.",
    "Nous contacter sur WhatsApp": "Contact us on WhatsApp",

    /* bourses */
    ["Catalogue des bourses d" + APO + "études"]: "Scholarship catalogue",
    "21 programmes analysés, vérifiés et mis à jour en continu. Filtrez par niveau, pays et financement pour trouver la vôtre.":
      "21 programmes analysed, checked and updated continuously. Filter by level, country and funding to find yours.",
    "est actuellement dédié aux": "is currently dedicated to",
    "Les autres destinations arrivent bientôt.": "Other destinations are coming soon.",
    "Recherche": "Search",
    "Titre, organisme, mot-clé…": "Title, organisation, keyword…",
    "Tous les pays": "All countries",
    "Financement": "Funding",
    "100% financée": "Fully funded",
    "Partielle": "Partial",
    "Trier par": "Sort by",
    "Échéance la plus proche": "Closest deadline",
    ["Populaires d" + APO + "abord"]: "Most popular first",
    "Tous niveaux": "All levels",
    "opportunité trouvée": "opportunity found",
    "opportunités trouvées": "opportunities found",
    "Aucune bourse ne correspond": "No scholarship matches",
    ["Essayez d" + APO + "élargir vos critères, ou "]: "Try broadening your criteria, or ",
    "demandez une recherche personnalisée": "request a personalised search",
    "Vous hésitez entre plusieurs bourses ?": "Torn between several scholarships?",
    "Lors de la consultation, nous analysons votre profil et construisons une stratégie réaliste — elle est déduite de votre procédure si vous poursuivez.":
      "During the consultation we analyse your profile and build a realistic strategy — it is deducted from your procedure if you continue.",
    "Voir la bourse": "View scholarship",
    "Être accompagné": "Get support",
    "⭐ Populaire": "⭐ Popular",
    "jours restants": "days left",
    "jour restant": "day left",
    "Dernier jour !": "Last day!",
    "Date dépassée": "Deadline passed",

    /* modale bourse */
    "Points couverts": "What is covered",
    ["Conditions d" + APO + "éligibilité"]: "Eligibility requirements",
    "Être accompagné sur cette bourse": "Get support for this scholarship",
    "Site officiel ↗": "Official website ↗",
    "Montant": "Amount",
    "Niveaux": "Levels",
    "Date limite": "Deadline",
    "Réouverture": "Reopening",
    " — clôture le ": " — closes on ",

    /* universités */
    "Nos universités partenaires": "Our partner universities",
    "Des établissements sélectionnés pour leur excellence académique, leur accueil des étudiants internationaux et leurs programmes de bourses.":
      "Institutions selected for their academic excellence, their welcome for international students and their scholarship programmes.",
    "une sélection exigeante": "a demanding selection",
    "Voici une sélection de nos établissements les plus demandés.":
      "Here is a selection of our most sought-after institutions.",
    "Filtrer par pays": "Filter by country",
    ["Ciblons ensemble l" + APO + "université idéale"]: "Let's target the ideal university together",
    "Nous connaissons les programmes, les frais réels et les bourses associées de chaque établissement partenaire.":
      "We know the programmes, the real costs and the related scholarships of every partner institution.",
    "Échanger avec un conseiller": "Talk to an advisor",
    "En savoir plus": "Learn more",

    /* fiche université */
    "Fiche": "Profile",
    "Points forts": "Strengths",
    "Vie étudiante": "Student life",
    "Frais de scolarité": "Tuition fees",
    "Langue": "Language",
    "Bourses liées à cette université": "Scholarships linked to this university",
    "Aucune bourse référencée pour cette université pour le moment — ": "No scholarship listed for this university yet — ",
    "parlons de votre projet": "let's talk about your project",
    "Cette université vous attire ?": "Drawn to this university?",
    ["Réservez votre consultation : nous évaluons vos chances et construisons votre stratégie d" + APO + "admission ou de bourse."]:
      "Book your consultation: we assess your chances and build your admission or scholarship strategy.",
    "Autres universités partenaires": "Other partner universities",
    "Fondation": "Founded",
    "Effectif": "Students",
    "Site officiel": "Official website",
    "Site ↗": "Website ↗",

    /* destinations */
    "Notre méthode": "Our method",
    ["Choisir un pays, c" + APO + "est choisir un avenir"]: "Choosing a country is choosing a future",
    ["Langue d" + APO + "enseignement, coût réel de la vie, débouchés après le diplôme, facilité du visa, climat, communauté étudiante… Nous comparons pour vous ce que les brochures ne disent pas toujours."]:
      "Language of instruction, real cost of living, prospects after graduation, visa ease, climate, student community… We compare for you what brochures do not always say.",
    "Comparatif honnête de 12 destinations phares": "An honest comparison of 12 flagship destinations",
    "Estimation précise du budget mensuel par ville": "Accurate monthly budget estimate per city",
    ["Taux d" + APO + "obtention des visas par nationalité"]: "Visa success rates by nationality",
    ["Réseaux d" + APO + "anciens étudiants à interroger"]: "Alumni networks to tap into",
    "Faire analyser mon projet": "Have my project analysed",
    ["Vue panoramique d" + APO + "une grande ville étudiante"]: "Panoramic view of a great student city",
    "Accompagnement ouvert": "Support open",
    "Bientôt disponible": "Coming soon",
    ["Nos conseillers préparent l" + APO + "ouverture de cette destination — "]: "Our advisors are preparing the opening of this destination — ",
    "être prévenu(e)": "be notified",

    /* services */
    "Études en Russie : une procédure claire, des tarifs au succès":
      "Studying in Russia: a clear process, success-based pricing",
    ["Bourses d" + APO + "études et admissions universitaires en Russie : un accompagnement complet dont les frais de procédure ne sont soldés que si vous obtenez votre bourse ou votre admission."]:
      "Scholarships and university admissions in Russia: comprehensive support whose procedure fees are only settled if you obtain your scholarship or admission.",
    "Voir les tarifs": "See pricing",
    ["À propos de l" + APO + "accompagnement"]: "About the support programme",
    "Deux types de projets, une même exigence": "Two types of projects, one standard of excellence",
    "La procédure": "The process",
    "Une procédure en plusieurs étapes": "A multi-step process",
    ["Tout commence par une consultation personnalisée, puis le dossier avance étape par étape jusqu" + APO + "à l" + APO + "installation."]:
      "Everything starts with a personalised consultation, then your file moves forward step by step until you settle in.",
    "Analyse du profil & choix de la procédure": "Profile analysis & choice of procedure",
    "Âge, nationalité, résultats, niveau et domaine souhaités : nous définissons la stratégie la plus pertinente et la formule adaptée à votre situation.":
      "Age, nationality, results, desired level and field: we define the most relevant strategy and the right formula for your situation.",
    "Dossier & candidatures": "File & applications",
    "Ouverture du dossier, constitution des pièces, recherche des opportunités (au moins 3 présentées pour une formule bourse, si disponibles), préparation et soumission.":
      "Opening your file, gathering documents, searching for opportunities (at least 3 presented for a scholarship formula, where available), preparation and submission.",
    "Suivi, résultats & départ": "Follow-up, results & departure",
    ["Suivi des candidatures, résultats, préparation au départ et, selon la formule, accompagnement à l" + APO + "installation en Russie."]:
      "Application follow-up, results, departure preparation and, depending on the formula, settling-in support in Russia.",
    "Facturation": "Pricing",
    "Les premières étapes": "The first steps",
    "Deux petites étapes qui lancent votre procédure — puis elles vous sont remboursées sous forme de déduction.":
      "Two small steps that launch your procedure — then they are refunded as a deduction.",
    ["Formules d" + APO + "accompagnement"]: "Support formulas",
    "Choisissez la formule selon votre projet et votre situation.": "Choose the formula that fits your project and situation.",
    "Démarrer avec cette formule": "Start with this formula",
    "La plus demandée": "Most requested",
    "Principe de déduction": "Deduction principle",
    "Exemple — bourse, candidat hors de Russie": "Example — scholarship, applicant outside Russia",
    "Frais de procédure : ": "Procedure fees: ",
    "Transparence": "Transparency",
    "Ce qui reste à votre charge": "What remains at your expense",
    ["Les tarifs concernent l" + APO + "accompagnement prévu dans la formule choisie. Certaines dépenses externes ne sont pas incluses."]:
      "Fees cover the support included in the chosen formula. Some external expenses are not included.",
    "Documents": "Documents",
    "Santé": "Health",
    "Voyage": "Travel",
    ["Après l" + APO + "arrivée"]: "After arrival",
    "Aucune garantie de résultat.": "No guarantee of results.",
    ["Votre projet d" + APO + "études mérite une stratégie."]: "Your study project deserves a strategy.",
    "Kingsman Odyssey vous accompagne dans chaque étape de votre odyssée.":
      "Kingsman Odyssey supports you at every step of your odyssey.",
    "Non remboursable — déduite si vous poursuivez": "Non-refundable — deducted if you continue",
    "Non remboursable — déduit si vous poursuivez": "Non-refundable — deducted if you continue",
    "À solder uniquement si la bourse est obtenue": "Only settled if the scholarship is granted",
    ["À solder uniquement si l" + APO + "admission est obtenue"]: "Only settled if the admission is granted",

    /* à propos */
    ["L" + APO + "art du voyage, l" + APO + "élégance de l" + APO + "odyssée"]: "The art of travel, the elegance of the odyssey",
    ["L" + APO + "art du voyage, l" + APO + "élégance de l" + APO + "odyssée. Notre mission, nos valeurs et notre équipe au service de votre mobilité académique internationale."]:
      "The art of travel, the elegance of the odyssey. Our mission, values and team at the service of your international academic mobility.",
    ["Kingsman Odyssey est né d" + APO + "une conviction simple : un parcours académique international devrait se décider avec des informations justes et un accompagnement digne de confiance."]:
      "Kingsman Odyssey was born from a simple conviction: an international academic journey should be decided with accurate information and trustworthy support.",
    "Notre mission": "Our mission",
    ["Rendre l" + APO + "excellence académique accessible"]: "Making academic excellence accessible",
    ["Chaque année, des milliers d" + APO + "étudiants brillants renoncent à étudier à l" + APO + "étranger — faute d" + APO + "information fiable, intimidés par les procédures, ou perdus parmi des centaines de bourses mal référencées."]:
      "Every year, thousands of brilliant students give up studying abroad — for lack of reliable information, intimidated by the procedures, or lost among hundreds of poorly listed scholarships.",
    ["Nous avons construit Kingsman Odyssey comme un cabinet de conseil à taille humaine : une veille permanente sur les programmes réels, des conseillers qui ont eux-mêmes étudié à l" + APO + "étranger, et une règle d" + APO + "or — ne jamais vendre un projet qui ne correspond pas au candidat."]:
      "We built Kingsman Odyssey as a human-scale consultancy: permanent monitoring of real programmes, advisors who have themselves studied abroad, and a golden rule — never sell a project that does not match the candidate.",
    ["Du premier appel WhatsApp à l" + APO + "installation en résidence universitaire, nous sommes à vos côtés. Votre admission est notre signature."]:
      "From the first WhatsApp call to moving into university accommodation, we are by your side. Your admission is our signature.",
    "Nos valeurs": "Our values",
    "Ce qui guide chacune de nos décisions": "What guides each of our decisions",
    "Excellence": "Excellence",
    "Des dossiers préparés comme des œuvres sur mesure — chaque détail compte face à un comité de sélection.":
      "Applications prepared like tailored works — every detail matters before a selection committee.",
    "Confiance": "Trust",
    "Des conseils honnêtes, même quand ils nous coûtent une formule : nous ne recommandons que ce que nous signerions pour notre famille.":
      "Honest advice, even when it costs us a formula: we only recommend what we would sign up for our own family.",
    "Sur-mesure": "Tailor-made",
    ["Aucun parcours identique : stratégie, calendrier et budget sont construits pour vous, pas recopiés d" + APO + "un modèle."]:
      "No two journeys are alike: strategy, timeline and budget are built for you, not copied from a template.",
    "Engagement": "Commitment",
    ["Nous restons à vos côtés après l" + APO + "admission — le vrai voyage commence une fois la valise posée."]:
      "We stay by your side after admission — the real journey begins once the suitcase is unpacked.",
    "Faisons connaissance": "Let's get to know each other",
    ["Consultation personnalisée à500 RUB, déduite de votre procédure si vous poursuivez. Vous repartez avec une feuille de route, quoi qu" + APO + "il arrive."]:
      "Personalised consultation for500 RUB, deducted from your procedure if you continue. You leave with a roadmap, whatever happens.",

    /* FAQ */
    "Notre équipe répond en français et en anglais, du lundi au samedi.":
      "Our team answers in French and English, Monday to Saturday.",
    "Poser ma question": "Ask my question",
    "WhatsApp direct": "Direct WhatsApp",
    "Étudiants diplômés célébrant leur réussite": "Graduating students celebrating their success",

    /* ressources / articles */
    ["Guides pratiques, retours d" + APO + "expérience et conseils de nos conseillers pour préparer chaque étape de votre odyssée académique."]:
      "Detailed guides, feedback and advice from our advisors to prepare every step of your academic odyssey.",
    "À lire avant de candidater": "Must-read before applying",
    "Préparez votre destination": "Prepare your destination",
    "Chaque fiche destination réunit langues, devise, bourses disponibles et universités partenaires.":
      "Each destination sheet gathers languages, currency, available scholarships and partner universities.",
    "Article": "Article",
    "de lecture": "of reading",
    ["Lire l" + APO + "article →"]: "Read the article →",
    ["Vous voulez passer à l" + APO + "action ?"]: "Ready to take action?",
    "À lire également": "Also worth reading",

    /* contact */
    "Parlons de votre projet": "Let's talk about your project",
    "Réservez votre consultation personnalisée — 500 RUB, déduite de votre procédure si vous poursuivez avec nous. Nous répondons sous 24 h ouvrées, en français ou en anglais.":
      "Book your personalised consultation — 500 RUB, deducted from your procedure if you continue with us. We answer within 24 working hours, in French or English.",
    "E-mail": "E-mail",
    "WhatsApp / Telegram": "WhatsApp / Telegram",
    "Horaires": "Opening hours",
    "Réservation": "Booking",
    "45 minutes avec un conseiller senior, en visioconférence ou sur WhatsApp. Feuille de route personnalisée incluse, sans engagement.":
      "45 minutes with a senior advisor, by video call or WhatsApp. Personalised roadmap included, no commitment.",
    "Identité & Contact": "Identity & Contact",
    "Profil Académique": "Academic profile",
    "Étape 1 sur 3": "Step 1 of 3",
    "Étape 2 sur 3": "Step 2 of 3",
    "Étape 3 sur 3": "Step 3 of 3",
    "Prénom": "First name",
    "Entrez votre prénom": "Enter your first name",
    "Nom de famille": "Last name",
    "Entrez votre nom": "Enter your last name",
    "Numéro WhatsApp": "WhatsApp number",
    ["Avec l" + APO + "indicatif (ex. +33…)"]: "With country code (e.g. +33…)",
    "Adresse e-mail": "E-mail address",
    "email@exemple.com": "email@example.com",
    "Âge": "Age",
    "Ex : 19": "E.g.: 19",
    "Nationalité": "Nationality",
    "Votre nationalité": "Your nationality",
    "Pays de résidence": "Country of residence",
    "Pays de résidence actuel": "Current country of residence",
    "Continuer": "Continue",
    "Retour": "Back",
    "Niveau actuel": "Current level",
    "Sélectionnez…": "Select…",
    "Terminale": "Final year of high school",
    "Licence 1": "Bachelor's Year 1",
    "Licence 2": "Bachelor's Year 2",
    "Licence 3": "Bachelor's Year 3",
    "Master 1": "Master's Year 1",
    "Master 2": "Master's Year 2",
    "Diplômé(e)": "Graduate",
    "Autre": "Other",
    "Moyenne académique /20": "Academic average /20",
    "Ex : 14.5": "E.g.: 14.5",
    "Domaine actuel": "Current field",
    "Lettres & Sciences humaines": "Humanities & Social sciences",
    "Droit & Sciences politiques": "Law & Political science",
    "Économie & Gestion": "Economics & Management",
    "Médecine & Santé": "Medicine & Health",
    "Ingénierie & Sciences appliquées": "Engineering & Applied sciences",
    "Informatique": "Computer science",
    "Arts & Design": "Arts & Design",
    ["Projet d" + APO + "études 🇷🇺"]: "Study project 🇷🇺",
    "Niveau souhaité en Russie": "Desired level in Russia",
    "Année préparatoire de russe": "Russian preparatory year",
    "Spécialiste": "Specialist",
    "Situation actuelle": "Current situation",
    "Je suis hors de Russie": "I am outside Russia",
    "Je suis déjà en Russie": "I am already in Russia",
    "Domaine souhaité": "Desired field",
    "Ex : Cybersécurité": "E.g.: Cybersecurity",
    "Année de rentrée": "Intake year",
    "Ex : Septembre 2026": "E.g.: September 2026",
    "Objectif principal": "Main goal",
    "Bourse + admission": "Scholarship + admission",
    "Bourse seulement": "Scholarship only",
    "Admission seulement (financement propre)": "Admission only (self-funded)",
    "Je ne sais pas encore": "Not sure yet",
    "Budget disponible (hors frais KO)": "Available budget (excluding KO fees)",
    "hors frais KO": "excluding KO fees",
    "À propos | Kingsman Odyssey, accompagnement études en Russie": "About | Kingsman Odyssey, study support for Russia",
    "Bourses d’études en Russie et à l’étranger | Kingsman Odyssey": "Scholarships in Russia and abroad | Kingsman Odyssey",
    "Contact et consultation études en Russie | Kingsman Odyssey": "Contact and consultation for studying in Russia | Kingsman Odyssey",
    "Destinations : étudier en Russie et ailleurs | Kingsman Odyssey": "Destinations: study in Russia and beyond | Kingsman Odyssey",
    "FAQ : bourses, admission et visa en Russie | Kingsman Odyssey": "FAQ: scholarships, admission and visa for Russia | Kingsman Odyssey",
    "Mentions légales, confidentialité et CGU | Kingsman Odyssey": "Legal notice, privacy and terms | Kingsman Odyssey",
    "Guides et articles pour étudier en Russie | Kingsman Odyssey": "Guides and articles to study in Russia | Kingsman Odyssey",
    "Tarifs en roubles, payés au succès | Kingsman Odyssey": "Prices in roubles, paid on success | Kingsman Odyssey",
    "Universités partenaires : Russie et monde | Kingsman Odyssey": "Partner universities: Russia and worldwide | Kingsman Odyssey",
    "Aller au contenu": "Skip to content",
    "Lire la transcription de la vidéo": "Read the video transcript",
    "Et si votre avenir se construisait en Russie ?": "What if your future were built in Russia?",
    "En deux mille vingt-cinq, plus de quatre cent vingt mille étudiants étrangers y ont étudié.": "In 2025, more than four hundred and twenty thousand international students studied there.",
    "Licence en quatre ans, spécialité en cinq, master en deux, puis doctorat : un cursus clair et structuré.": "Bachelor’s in four years, specialist in five, master’s in two, then doctorate: a clear, structured path.",
    "Médecine, ingénierie, informatique, sciences, économie : des centaines de programmes, dont plusieurs en anglais.": "Medicine, engineering, IT, sciences, economics: hundreds of programs, several of them in English.",
    "L’Université d’État de Moscou est classée cent quinzième au classement QS.": "Moscow State University is ranked 115th in the QS rankings.",
    "Campus complets, laboratoires, bibliothèques, cliniques universitaires et résidences étudiantes.": "Full campuses, laboratories, libraries, university clinics and student residences.",
    "Une vie étudiante vibrante, à Moscou, Saint-Pétersbourg, Kazan ou Novossibirsk, avec des frais de scolarité dès environ mille cinq cents dollars par an.": "A vibrant student life in Moscow, Saint Petersburg, Kazan or Novosibirsk, with tuition from about fifteen hundred dollars a year.",
    "Mieux encore : la bourse du Gouvernement russe peut couvrir votre scolarité, votre hébergement et une allocation mensuelle.": "Better still: the Russian Government scholarship can cover your tuition, your accommodation and a monthly allowance.",
    "Kingsman Odyssey vous guide : consultation, évaluation de votre profil, préparation du dossier, suivi jusqu’à l’admission, puis visa et installation.": "Kingsman Odyssey guides you: consultation, profile assessment, application preparation, follow-up until admission, then visa and settling in.",
    "Votre avenir commence ici.": "Your future starts here.",
    "Écrivez-nous sur WhatsApp !": "Message us on WhatsApp!",
    "Présentation": "Presentation",
    "Découvrez Kingsman Odyssey en une minute": "Discover Kingsman Odyssey in one minute",
    "Pourquoi la Russie, comment fonctionne l’accompagnement et ce que vous pouvez en attendre, présentés simplement.": "Why Russia, how our support works and what you can expect, explained simply.",
    "Télécharger la vidéo": "Download the video",
    "Votre navigateur ne lit pas cette vidéo.": "Your browser cannot play this video.",
    "Vidéo de présentation de Kingsman Odyssey, 1 minute": "Kingsman Odyssey presentation video, 1 minute",
    "< 75 000 RUB": "< 75,000 RUB",
    "75 000 – 150 000 RUB": "75,000 – 150,000 RUB",
    "150 000 – 300 000 RUB": "150,000 – 300,000 RUB",
    "≥ 300 000 RUB": "≥ 300,000 RUB",
    "Je recherche principalement une bourse": "I am mainly looking for a scholarship",
    "Je ne sais pas": "I don't know",
    "Précisions (facultatif)": "Details (optional)",
    "Bourse visée, questions particulières…": "Targeted scholarship, specific questions…",
    "Récapitulatif": "Summary",
    ["Vérifiez vos informations avant l" + APO + "envoi."]: "Check your information before sending.",
    "Modifier": "Edit",
    "Avertissement & Conditions": "Warning & Terms",
    ["J" + APO + "ai compris"]: "I understand",
    ["En cliquant sur « J" + APO + "ai compris », votre demande nous parvient par e-mail. Réponse garantie sous 24 h ouvrées."]:
      "By clicking « I understand », your request reaches us by e-mail. Guaranteed answer within 24 working hours.",
    "Ou envoyer ma demande via WhatsApp": "Or send my request via WhatsApp",
    "Demande bien reçue !": "Request received!",
    "Un conseiller vous écrira pour confirmer le lancement de votre procédure.":
      "An advisor will write to you to confirm the launch of your procedure.",
    "Faire une autre demande": "Make another request",
    "Ce que couvre la consultation": "What the consultation covers",
    "— déduite de votre procédure si vous poursuivez": "— deducted from your procedure if you continue",
    "Niveau académique et parcours scolaire ou universitaire": "Academic level and school or university background",
    "Projet et objectifs du candidat": "The candidate's project and goals",
    "Éligibilité potentielle aux opportunités": "Potential eligibility for opportunities",
    ["Possibilités de bourses et d" + APO + "admission"]: "Scholarship and admission possibilities",
    "Feuille de route : stratégie de candidature": "Roadmap: application strategy",
    "Une question simple ?": "A simple question?",
    "Bourses, admission, procédure, partenariat… Écrivez-nous directement : nous lisons tout et répondons sous 24 h ouvrées.":
      "Scholarships, admission, procedure, partnership… Write to us directly: we read everything and answer within 24 working hours.",
    "Urgent ?": "Urgent?",
    "Nom complet": "Full name",
    "Prénom et nom": "First and last name",
    "vous@exemple.com": "you@example.com",
    "Sujet": "Subject",
    "Choisir…": "Choose…",
    "Admission / universités": "Admission / universities",
    "Procédure et tarifs": "Procedure and pricing",
    "Partenariat": "Partnership",
    "Message": "Message",
    "Votre message…": "Your message…",
    "Écrivez votre message.": "Write your message.",
    "Envoyer mon message": "Send my message",
    "Message envoyé !": "Message sent!",
    "Envoyer un autre message": "Send another message",
    "Indiquez votre prénom.": "Please enter your first name.",
    "Indiquez votre nom.": "Please enter your last name.",
    ["Indiquez votre numéro avec l" + APO + "indicatif."]: "Please enter your number with the country code.",
    "Adresse e-mail invalide.": "Invalid e-mail address.",
    "Âge invalide (10 – 80).": "Invalid age (10 – 80).",
    "Indiquez votre nationalité.": "Please enter your nationality.",
    "Indiquez votre pays de résidence.": "Please enter your country of residence.",
    "Sélectionnez votre niveau actuel.": "Please select your current level.",
    "Moyenne invalide (0 – 20).": "Invalid average (0 – 20).",
    "Sélectionnez votre domaine.": "Please select your field.",
    "Sélectionnez le niveau souhaité.": "Please select the desired level.",
    "Sélectionnez votre situation.": "Please select your situation.",
    "Indiquez le domaine souhaité.": "Please enter the desired field.",
    ["Indiquez l" + APO + "année de rentrée."]: "Please enter the intake year.",
    "Sélectionnez votre objectif.": "Please select your goal.",
    "Sélectionnez votre budget.": "Please select your budget.",
    ["Merci d" + APO + "indiquer votre nom."]: "Please enter your name.",
    "Choisissez un sujet.": "Please choose a subject.",
    "Merci de compléter les champs signalés.": "Please complete the highlighted fields.",

    /* toasts & messages dynamiques */
    "Message envoyé avec succès ✓": "Message sent successfully ✓",
    "Demande envoyée avec succès ✓": "Request sent successfully ✓",
    ["L" + APO + "envoi a échoué. Vérifiez votre connexion ou utilisez le bouton WhatsApp ci-dessous."]:
      "Sending failed. Check your connection or use the WhatsApp button below.",
    ["L" + APO + "envoi par e-mail met trop de temps à répondre (réseau). Utilisez le bouton WhatsApp ci-dessous : votre demande nous parviendra aussitôt."]:
      "E-mail sending is taking too long to answer (network). Use the WhatsApp button below: your request will reach us right away.",
    ["L" + APO + "envoi par e-mail met trop de temps à répondre (réseau). Utilisez le bouton WhatsApp : votre demande nous parviendra aussitôt."]:
      "E-mail sending is taking too long to answer (network). Use the WhatsApp button: your request will reach us right away.",
    "WhatsApp ouvert : appuyez sur « Envoyer » pour nous transmettre votre demande ✓":
      "WhatsApp opened: press « Send » to pass us your request ✓",
    "Bourse « ": "Scholarship « ",
    " » ajoutée à votre demande": " » added to your request",
    "est bien reçue. Nous vous répondons sous 24 h à ": "has been received. We will answer within 24h at ",
    "Votre demande de consultation pour « ": "Your consultation request for « ",
    " » est bien enregistrée. Nous vous répondons sous 24 h à ": " » has been recorded. We will answer within 24h at ",
    "Merci ": "Thank you ",
    "! Votre demande de consultation est bien enregistrée. Un conseiller vous contacte sous 24 h via WhatsApp ou e-mail.":
      "! Your consultation request has been recorded. An advisor will contact you within 24h via WhatsApp or e-mail.",
    "! Votre message a bien été reçu. Nous vous répondons à ": "! Your message has been received. We will answer at ",
    " sous 24 h ouvrées.": " within 24 working hours.",
    ["⚠️ Première utilisation : un e-mail d" + APO + "activation vient d" + APO + "être envoyé à kingsmanodyssey@gmail.com — cliquez sur « Activate Form » dans cet e-mail pour activer la réception des prochaines demandes. Cette demande est déjà archivée localement."]:
      "⚠️ First use: an activation e-mail has just been sent to kingsmanodyssey@gmail.com — click « Activate Form » in that e-mail to activate reception of upcoming requests. This request is already archived locally.",

    /* fragments composés */
    "Situation": "Situation",
    "Résidence": "Residence",
    "Domaine": "Field",
    "Niveau visé": "Desired level",
    "Domaine visé": "Desired field",
    "Rentrée": "Intake",
    "Objectif": "Goal",
    "Précisions": "Details",
    ["Projet d" + APO + "études"]: "Study project",
    "Moyenne": "Average",
    "études en Russie": "studies in Russia",
    "Études en Russie": "Studies in Russia",

    /* pays */
    "Russie": "Russia",
    "Japon": "Japan",
    "Allemagne": "Germany",
    "Chine": "China",
    "Turquie": "Turkey",
    "Hongrie": "Hungary",
    "Pologne": "Poland",
    "Pays-Bas": "Netherlands",
    "Italie": "Italy",
    "Belgique": "Belgium",
    "Canada": "Canada",
    "France": "France",
    "Europe": "Europe",

    /* divers */
    "⭐ La plus demandée": "⭐ Most requested",
    "Sur devis": "On quotation",
    "Retour en haut": "Back to top"
  };

  /* ---------- moteur ---------- */
  const store = window.KO_DICT;
  Object.keys(DICT).forEach((k) => { if (DICT[k]) store[k] = DICT[k]; });

  let LONG = [], WORD = [], VALUES = new Set();
  function rebuild() {
    const all = Object.keys(store);
    VALUES = new Set(all.map((k) => store[k]));
    LONG = all.filter((k) => k.length >= 14 || k.includes(" ")).sort((a, b) => b.length - a.length)
      .map((k) => [k, store[k]]);
    WORD = all.filter((k) => k.length < 14 && !k.includes(" ")).map((k) => {
      const esc = k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return [k, store[k], new RegExp("(?<![\\p{L}\\p{N}])" + esc + "(?![\\p{L}\\p{N}]|[" + APO + "']s)", "gu")];
    });
  }

  function trStr(s) {
    if (window.KO.lang !== "en" || !s) return s;
    if (VALUES.has(s)) return s; /* déjà en anglais : ne pas re-traduire */
    for (const [k, v] of LONG) { if (s.includes(k)) s = s.split(k).join(v); }
    if (VALUES.has(s)) return s; /* la traduction est une valeur du dictionnaire : stop */
    for (const [k, v, re] of WORD) s = s.replace(re, v);
    return s;
  }
  window.KO.trStr = trStr;

  function translateElement(el) {
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((n) => {
      const t = n.nodeValue;
      if (!t || !t.trim()) return;
      const nt = trStr(t);
      if (nt !== t) n.nodeValue = nt;
    });
    if (el instanceof Element) {
      el.querySelectorAll("[placeholder]").forEach((i) => {
        const v = i.getAttribute("placeholder");
        const nv = trStr(v);
        if (nv !== v) i.setAttribute("placeholder", nv);
      });
      /* conserver le libellé français original des options (valeurs des formulaires) */
      el.querySelectorAll("option").forEach((o) => {
        if (o.dataset.frText === undefined) o.dataset.frText = o.textContent;
        const nt = trStr(o.dataset.frText);
        if (nt !== o.textContent) o.textContent = nt;
      });
    }
  }

  function translateAll(root) {
    if (window.KO.lang !== "en") return;
    translateElement(root || document.body);
    if (document.title) document.title = trStr(document.title);
  }

  window.KO.setLang = function (lang) {
    localStorage.setItem("ko_lang", lang);
    location.reload();
  };

  document.addEventListener("DOMContentLoaded", function () {
    rebuild();
    document.documentElement.lang = window.KO.lang === "en" ? "en" : "fr";
    if (window.KO.lang === "en") translateAll();

    new MutationObserver((muts) => {
      if (window.KO.lang !== "en") return;
      muts.forEach((m) => m.addedNodes.forEach((n) => {
        if (n.nodeType === 1) translateElement(n);
        else if (n.nodeType === 3) { const t = trStr(n.nodeValue); if (t !== n.nodeValue) n.nodeValue = t; }
      }));
    }).observe(document.body, { childList: true, subtree: true });

    document.querySelectorAll(".lang-toggle").forEach((b) => {
      const cur = window.KO.lang;
      b.innerHTML = '<span class="' + (cur === "fr" ? "on" : "") + '">FR</span>' +
        ' <span style="opacity:.45">/</span> <span class="' + (cur === "en" ? "on" : "") + '">EN</span>';
      b.setAttribute("aria-label", "Switch to English / Passer en français");
      b.title = cur === "fr" ? "Switch to English" : "Passer en français";
      b.addEventListener("click", () => window.KO.setLang(cur === "fr" ? "en" : "fr"));
    });
  });
})();
