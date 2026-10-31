# Kingsman Odyssey — site complet (clone développé)

Site multi-pages construit à partir de l'artefact partagé sur Z.ai
(https://chat.z.ai/space/j1q5g7zg2uy0-art), entièrement développé :
10 pages, logo officiel intégré, formulaires fonctionnels avec réception
des demandes, design navy & or.

## Lancer le site

```bash
cd kingsman-odyssey
python -m http.server 8765
# ouvrir http://localhost:8765/
```

(Un double-clic sur `index.html` fonctionne aussi, mais le serveur local
est recommandé pour les formulaires.)

## Pages

| Page | Contenu |
|---|---|
| `index.html` | Accueil : hero, recherche rapide, statistiques animées, bourses ouvertes, universités, destinations, processus, témoignages, articles, FAQ, newsletter |
| `bourses.html` | Catalogue de 21 bourses : recherche plein texte, filtres (pays, niveau, financement), tri par échéance, fiche détaillée en modale, pré-remplissage du formulaire d'accompagnement |
| `universites.html` | 15 universités partenaires, filtre par pays |
| `universite.html?id=…` | Fiche détaillée d'université (présentation, points forts, vie étudiante, frais, langue, bourses liées) |
| `destinations.html` | 18 pays : langues, devise, nombre de bourses, accès direct au catalogue filtré |
| `services.html` | Procédure, tarifs officiels du guide KO (consultation, ouverture, 4 formules au succès), frais non inclus, avertissement |
| `a-propos.html` | Mission, valeurs, équipe |
| `faq.html` | 8 questions en accordéon + newsletter |
| `ressources.html` | Articles + liens guides pays |
| `article.html?id=…` | Article complet (3 articles rédigés) |
| `legal.html?id=…` | Conditions d'utilisation, politique de confidentialité, mentions légales (bilingue) |
| `contact.html` | Réservation de consultation + formulaire de contact + coordonnées |

## Architecture

```
kingsman-odyssey/
├── index.html … contact.html   # 10 pages
└── assets/
    ├── site.css                # design system (navy #0b1230, or #c9a227, crème)
    ├── layout.js               # header/footer partagés, menu mobile, toasts, utilitaires
    ├── app.js                  # rendu des listes, filtres, modales, formulaires
    ├── data.js                 # bourses, universités, pays, articles, FAQ, formules
    ├── tailwind.js             # Tailwind (local)
    ├── fonts/                  # Manrope + Playfair Display (woff2 locaux + fonts.css)
    └── img/                    # logo, emblème, favicon + photos (locales)
```

## Formulaires et réception des réponses

**Réservation de consultation** : assistant multi-étapes fidèle à l'ancien
formulaire — 1) Identité & Contact (prénom, nom, WhatsApp, e-mail, âge,
nationalité, résidence), 2) Profil académique (niveau, moyenne /20, domaine),
3) Projet d'études en Russie (niveau visé, domaine, rentrée, objectif, budget
RUB, situation), 4) Récapitulatif vérifiable, 5) Avertissement & Conditions
(« aucune garantie d'obtention » — J'ai compris pour envoyer). Le champ
« Créneau préféré » a été supprimé. Chaque envoi :

1. valide les champs côté client (champs requis, e-mail, consentement) ;
2. envoie la demande par e-mail via **formsubmit.co** vers
   **kingsmanodyssey@gmail.com** (avec anti-spam honeypot) ;
3. **archive une copie locale** de chaque demande dans le navigateur
   (`localStorage`, clé `ko_messages` — jusqu'à 50 demandes) ;
4. affiche un accusé de réception personnalisé.

⚠️ **Activation unique à faire** : au premier envoi, FormSubmit envoie un
e-mail « Activate Form » à kingsmanodyssey@gmail.com — ouvrez-le et cliquez
sur le lien d'activation pour commencer à recevoir les réponses par e-mail.

🔁 **Secours WhatsApp** : chaque formulaire comporte un bouton
« Ou envoyer ma demande via WhatsApp » qui ouvre WhatsApp (+7 993 964 79 36)
avec la demande pré-remplie — réception garantie même si l'e-mail échoue
(utile hors ligne ou si FormSubmit est lent/bloqué sur le réseau).

## Tarifs officiels (Guide complet KO)

- **Consultation** : 500 RUB — non remboursable, déduite si poursuite.
- **Ouverture de dossier** : 3 000 RUB — non remboursable, déduite.
- **Bourse d'études** : 75 000 RUB (candidat hors Russie) · 50 000 RUB (déjà en Russie) — soldées uniquement si la bourse est obtenue.
- **Admission universitaire** : 25 000 RUB (hors Russie) · 10 000 RUB (déjà en Russie) — soldées uniquement si l'admission est obtenue.
- Horaires : tous les jours, 10h – 22h (GMT+3). Contact : WhatsApp / Telegram +7 (993) 964-79-36.
- Destination ouverte : **Russie uniquement** (autres destinations « bientôt disponible »).

## Déploiement GitHub Pages

Le site est structuré pour GitHub Pages : chaque page vit dans son dossier
(`/bourses/index.html` servie sur `/bourses/`). Fichiers spéciaux inclus :
`CNAME` (domaine), `.nojekyll`, `404.html` (page d'erreur de marque).

Étapes :
1. Créer un dépôt GitHub (public) et y téléverser le contenu de
   `kingsman-odyssey-github.zip` (à la racine du dépôt, pas dans un sous-dossier).
2. Settings → Pages → Source : « Deploy from a branch » → branche `main`,
   dossier `/ (root)` → Save.
3. Settings → Pages → Custom domain : `www.kingsmanodyssey.ru` → Save.
4. DNS chez le registrar :
   - `www` CNAME → `<votre-compte>.github.io`
   - `@` (racine) A → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
5. Une fois le DNS propagé : cocher « Enforce HTTPS ».

Mise à jour : modifier les fichiers puis pousser — le site se redéploie seul.

## Réseaux officiels
- Bot Telegram : https://t.me/KingsmanOdyssey_bot
- Groupe WhatsApp : https://chat.whatsapp.com/IqsLeVoZeImGjwp4BL0fhI
- Facebook / Instagram / LinkedIn : liens dans le pied de page et la page contact (aussi en sameAs JSON-LD)
- Image de partage réseaux : assets/img/social-card.png (1200x630)

## Pages légales
`legal.html?id=conditions|confidentialite|mentions` — contenu bilingue intégré dans
`assets/legal-content.js`, liens dans le pied de page, URLs propres configurées.

## Bilingue FR / EN

Un sélecteur **FR / EN** dans l'en-tête (et dans le menu mobile) bascule
tout le site : textes d'interface, bourses, universités, pays, formules,
articles, FAQ, formulaires. Le choix est mémorisé (localStorage) et la
page est rechargée dans la langue choisie.

- `assets/i18n.js` : moteur (dictionnaire UI + traduction du DOM rendu)
- `assets/i18n-data.js` : traductions EN du contenu (data.js)
- Les dates s'affichent au format FR (12 août 2026) ou EN (12 Aug 2026).

## Design

- Palette issue du logo : navy `#0b1230`, or `#c9a227`, crème `#f6f1e7`.
- Logo officiel : emblème rond dans l'en-tête et le pied de page,
  filigrane dans les bandeaux des pages internes, favicon dérivé de l'emblème.
- Drapeaux dessinés en CSS (les emojis drapeaux ne s'affichent pas sous Windows).
- Animations d'apparition au défilement, compteurs animés, menu mobile,
  bouton retour en haut, notifications toast.

## Notes techniques

- Tout est local (polices, images, Tailwind) : le site fonctionne hors ligne,
  seuls les envois de formulaires et les liens WhatsApp/mailto demandent du réseau.
- Le proxy CDN des artefacts Z.ai a été neutralisé (aucune dépendance externe).
- Échéances de bourses calculées dynamiquement (« X jours restants » / « Date dépassée »)
  à partir de `data.js`.

## Refonte d'octobre 2026

- Nouveau design "carnet de voyage" : `assets/redesign.css` se charge après `site.css` (palette minuit, papier bleuté, laiton, rouge tampon).
- Tarifs affichés uniquement en roubles (RUB) sur toutes les pages, y compris le champ budget du formulaire de consultation.
- SEO : titres et descriptions uniques, robots, theme-color, fil d'Ariane (BreadcrumbList) sur les pages internes, Service et Offer en RUB sur la page Services, ContactPage, sitemap daté du 2026-10-31.
- Performance : Tailwind (407 Ko) retiré, images des cartes en chargement différé, police principale préchargée.
- Accessibilité : lien d'évitement, focus visible, cibles tactiles de 44 px, mouvement réduit respecté.
- Correction d'un bug de `data-plus.js` qui empêchait l'affichage de 3 articles (Open Doors 2027, quota, budget Russie).
- Formulaires : envoi inchangé via FormSubmit vers kingsmanodyssey@gmail.com.
