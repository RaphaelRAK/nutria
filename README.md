# NutrIA - Site Web

Un site web moderne pour NutrIA, une entreprise qui utilise l'intelligence artificielle pour améliorer l'agriculture durable.

## Technologies utilisées

- [Next.js](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Typage statique
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [React Icons](https://react-icons.github.io/react-icons/) - Icônes
- [Framer Motion](https://www.framer.com/motion/) - Animations

## Démarrage

### Prérequis

- Node.js 18.x ou supérieur
- npm 9.x ou supérieur

### Installation

1. Cloner ce dépôt
```bash
git clone <url-du-depot>
cd nutria
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer le serveur de développement
```bash
npm run dev
```

4. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## Structure du projet

```
nutria/
├── app/                  # Répertoire principal de l'application (App Router)
│   ├── components/       # Composants réutilisables
│   ├── about/            # Page "Qui sommes-nous?"
│   ├── pricing/          # Page "Tarifs"
│   ├── contact/          # Page "Contact"
│   ├── globals.css       # Styles globaux
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Page d'accueil
├── public/               # Ressources statiques
│   └── images/           # Images du site
└── tailwind.config.ts    # Configuration Tailwind CSS
```

## Fonctionnalités

- Design responsive adapté à tous les écrans
- Navigation fluide avec animations
- Formulaires de contact et de demande de devis
- Intégration des icônes pour une meilleure expérience utilisateur
- Sections de présentation des services et avantages

## Palette de couleurs

- Vert forêt (#2E7D32) - Agriculture et durabilité
- Bleu technologique (#1976D2) - Innovation et IA
- Blanc pur (#FFFFFF) - Fond principal
- Gris clair (#F5F5F5) - Sections secondaires
- Jaune doré (#F9A825) - Accents

## Déploiement

Pour construire la version de production :

```bash
npm run build
```

Pour démarrer la version de production :

```bash
npm start
```

## License

Ce projet est sous licence MIT.

---

Créé avec 💚 pour NutrIA
