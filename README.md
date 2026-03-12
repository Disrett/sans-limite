# SL SANSLimites

> Plateforme sociale dédiée aux sportifs et passionnés de dépassement de soi.

SANSLimites est une application web qui permet aux athlètes de partager leurs performances, de relever des défis quotidiens, de découvrir des athlètes inspirants et de rester connectés avec une communauté sportive motivante.

---

## Table des matières

- [Aperçu](#aperçu)
- [Technologies utilisées](#technologies-utilisées)
- [Prérequis](#prérequis)
- [Installation et lancement](#installation-et-lancement)
- [Structure du projet](#structure-du-projet)
- [Pages de l'application](#pages-de-lapplication)
- [Composants](#composants)
- [Charte graphique](#charte-graphique)
- [Contributeurs](#contributeurs)

---

## Aperçu

SANSLimites est pensé comme un réseau social sportif. L'utilisateur dispose d'un fil d'actualité avec les publications des autres membres, d'un système de défis quotidiens, d'une mise en avant des athlètes de la semaine, d'une page de notifications interactive et d'un formulaire de contact.

L'interface s'inspire des grandes plateformes sociales avec une sidebar de navigation fixe sur desktop et un menu mobile adapté.

---

## Technologies utilisées

| Technologie | Version | Rôle |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1.1 | Framework React (App Router) |
| [React](https://react.dev/) | 19.2.3 | Bibliothèque UI |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Styles utilitaires |
| [Lucide React](https://lucide.dev/) | 0.562.0 | Icônes |
| [Google Fonts](https://fonts.google.com/) | — | Typographie (Geist, Montserrat) |

---

## Prérequis

- **Node.js** v18 ou supérieur
- **npm** v9 ou supérieur

---

## Installation et lancement

```bash
# 1. Cloner le dépôt
git clone <url-du-repo>
cd sans-limites

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application est accessible sur [http://localhost:3000](http://localhost:3000).

### Autres commandes disponibles

```bash
npm run build   # Compilation pour la production
npm run start   # Lancer le serveur de production (après build)
npm run lint    # Vérification du code avec ESLint
```

> ⚠️ **Remarque** : le fichier `next.config.mjs` ne doit pas contenir `reactCompiler: true` sans avoir installé `babel-plugin-react-compiler`. Si vous rencontrez une erreur de build liée à ce package, supprimez simplement cette ligne.

---

## Structure du projet

```
sans-limites/
│
├── app/                          # Dossier principal Next.js (App Router)
│   ├── layout.js                 # Layout racine (polices, métadonnées globales)
│   ├── globals.css               # Styles globaux (Tailwind + CSS custom)
│   ├── page.js                   # Page d'accueil (fil d'actualité)
│   │
│   ├── notifications/
│   │   └── page.js               # Page des notifications
│   │
│   ├── contact/
│   │   └── page.js               # Page de contact (formulaire)
│   │
│   └── components/               # Composants réutilisables
│       ├── header.js             # Barre de navigation supérieure
│       ├── sidebar.js            # Menu latéral (desktop)
│       ├── mobilemenu.js         # Menu latéral (mobile)
│       ├── featuredathletes.js   # Section "Athlètes de la semaine"
│       ├── dailychallenge.js     # Bloc "Défi du jour"
│       ├── postcard.js           # Carte d'une publication
│       ├── postmodal.js          # Modal de détail d'une publication
│       └── Footer/
│           └── Footer.js         # Pied de page
│
├── public/                       # Assets statiques
│   └── background.png            # Image de fond (page contact)
│
├── next.config.mjs               # Configuration Next.js
├── postcss.config.mjs            # Configuration PostCSS (Tailwind)
├── jsconfig.json                 # Alias de chemins (@/)
├── eslint.config.mjs             # Configuration ESLint
└── package.json                  # Dépendances et scripts
```

---

## Pages de l'application

### `/` — Accueil

Le fil d'actualité principal. Cette page affiche :

- La section **Athlètes de la semaine** avec leurs stats et un bouton "Suivre"
- Le **Défi du jour** avec un bouton de participation
- La liste des **publications** des membres (like, sauvegarde, commentaires)
- Un **modal de détail** par publication avec fil de commentaires
- Le **Footer** en bas de page

La page est entièrement interactive grâce à `useState` (React).

### `/notifications` — Notifications

Liste de toutes les notifications de l'utilisateur. Fonctionnalités :

- Affichage par type : like ❤️, commentaire 💬, abonnement 👤, défi ⚡, badge 🏆, mention ⭐
- Filtre **Toutes / Non lues**
- Bouton **"Tout marquer comme lu"**
- Actions au survol : marquer comme lu ✓, supprimer 🗑️
- État vide si toutes les notifications sont supprimées
- Accessible via l'icône 🔔 en haut à droite du header

### `/contact` — Contact

Formulaire de contact avec :

- Champs Nom, Prénom, Adresse mail, Message
- Case à cocher conditions d'utilisation
- Fond plein écran (`background.png`) avec effet glassmorphism sur le formulaire

---

## Composants

### `Header`

Barre supérieure présente sur toutes les pages. Contient :
- Logo SANSLimites (mobile)
- Bouton "Mon Profil"
- Icône 🔔 Notifications → lien vers `/notifications`
- Icône envoi de message
- Bouton `+` d'ajout de contenu

### `Sidebar`

Navigation principale sur **desktop** (fixe à gauche, largeur 256px). Liens : Accueil, Rechercher, Actualités, Catégories, Groupes, Évènements, Découvrir, Autres (avec sous-menu Paramètres / Mentions légales / Contact).

### `MobileMenu`

Navigation principale sur **mobile** (overlay plein écran, identique à la Sidebar).

### `FeaturedAthletes`

Reçoit un tableau d'athlètes en props et affiche des cartes avec avatar, badge, description et statistiques (posts / abonnés).

### `DailyChallenge`

Bloc statique orange présentant le défi du jour avec un bouton "Participer".

### `PostCard`

Carte de publication. Reçoit en props : les données du post, les callbacks `onLike`, `onSave`, `onOpenModal`.

### `PostModal`

Modal de détail d'un post. Affiche le contenu complet, les commentaires existants et un champ pour en ajouter un nouveau.

### `Footer`

Pied de page avec trois colonnes : Legal, Contactez-nous, Suivez-nous. S'affiche sur la page d'accueil après le fil de publications.

---

## Charte graphique

| Élément | Valeur |
|---|---|
| Couleur principale | `#0047AB` (bleu profond) |
| Couleur secondaire | `#FFA75F` (orange) |
| Couleur d'accentuation | `#92DCD5` (bleu clair) |
| Fond clair | `#DEF9F1` |
| Fond sombre | `#252A30` |
| Typographie | **Montserrat Bold** |

Le dégradé caractéristique de la navbar et du footer passe du bleu `#0047AB` à l'orange `#FFA75F`.

---

## Contributeurs

Ce projet a été développé en collaboration dans le cadre d'un projet de groupe.
