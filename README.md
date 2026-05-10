# 🚀 Nathan Colson - Portfolio 2026

Bienvenue sur le dépôt de mon portfolio professionnel et académique. Ce projet centralise mon parcours, mes compétences en tant que **Junior Internal System Engineer** et mes réalisations en développement Full-Stack.

## 🛠️ Stack Technique

| Technologie | Utilisation |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (OKLCH colors) |
| **Langage** | [TypeScript](https://www.typescriptlang.org/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Composants** | [Shadcn UI](https://ui.shadcn.com/) & Radix UI |
| **Icônes** | [Lucide React](https://lucide.dev/) |

---

## ✨ Fonctionnalités Clés

* **🌍 Système Multilingue** : Support complet Français / Anglais via un Context Provider personnalisé.
* **🎓 Hub Académique (Portfolio de Compétences)** :
    * Suivi dynamique des heures de formation.
    * Barre de progression "XP" interactive.
    * Gestion des plafonds d'heures par thématique.
    * **Système de Preuves** : Fenêtres modales affichant certificats (PDF), photos et liens GitHub.
* **📄 CV Interactif** :
    * Design adaptatif Dark/Light mode.
    * Génération/Téléchargement de PDF dynamique selon la langue sélectionnée.
* **🎨 Projets Freelance** : Vitrine de réalisations réelles (Kristel-art, Cielpied, The Beauty Corner).
* **🌓 Mode Sombre/Clair** : Support natif du thème système avec `next-themes` et variables OKLCH.

---

## 📂 Structure du Projet

```text
├── src/
│   ├── app/                # Routage Next.js (CV, Activités, Hub)
│   ├── components/         # Composants UI réutilisables
│   ├── context/            # Gestion de la langue et du thème
│   ├── lib/                # Fichiers de données (activities-content, cv-content, etc.)
│   └── styles/             # Global CSS avec Tailwind v4
└── public/
    └── proofs/             # Certificats, images et preuves de réalisation


## 🌐 Déploiement

Le projet est déployé et synchronisé automatiquement avec Vercel.

