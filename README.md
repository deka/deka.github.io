# Dimitri Rayer - Site de Présentation

Site web personnel créé avec Next.js 14, TailwindCSS, et TypeScript. Optimisé pour le SEO et l'accessibilité.

## 🚀 Fonctionnalités

- **Next.js 14** avec App Router
- **Génération statique (SSG)** pour des performances optimales
- **TailwindCSS** pour un design moderne et responsive
- **TypeScript** pour une meilleure maintenabilité
- **SEO optimisé** avec metadata complètes
- **Accessibilité** conforme aux standards WCAG
- **Design responsive** adapté à tous les appareils
- **Performance** optimisée avec score Lighthouse élevé

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn

## 🔧 Installation

1. Clonez le repository :
```bash
git clone <url-du-repo>
cd mark-tolmacs-landing
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Build et Déploiement

### Build pour production :
```bash
npm run build
```

### Export statique :
```bash
npm run build && npm run export
```

Les fichiers générés seront dans le dossier `out/` et peuvent être déployés sur n'importe quel hébergement statique.

## 📁 Structure du projet

```
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── ProfileSection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── ContactSection.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.js` :
- `primary-blue`: #6366f1
- `primary-turquoise`: #ff1493

### Contenu
Modifiez le contenu dans les composants :
- `ProfileSection.tsx` : Informations personnelles
- `ServicesSection.tsx` : Services proposés
- `ContactSection.tsx` : Informations de contact

### SEO
Les métadonnées sont configurées dans `app/layout.tsx`. Modifiez :
- Title et description
- Open Graph tags
- Twitter Card
- URL canonique

## 🔍 SEO et Performance

- **Métadonnées complètes** : Title, description, Open Graph, Twitter Card
- **Sitemap automatique** généré par Next.js
- **Images optimisées** avec le composant Next.js Image
- **Chargement lazy** des composants
- **CSS critiques** inlinés
- **Compression automatique** des assets

## ♿ Accessibilité

- **Navigation au clavier** complète
- **Lecteurs d'écran** compatibles
- **Contraste** respectant les normes WCAG
- **Focus visible** sur tous les éléments interactifs
- **Balises sémantiques** appropriées
- **Liens de saut** pour la navigation

## 🚀 Déploiement

### Vercel (recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Uploadez le dossier 'out' sur Netlify
```

### GitHub Pages
```bash
npm run build
# Configurez GitHub Pages pour utiliser le dossier 'out'
```

## 📝 Licence

Ce projet est sous licence MIT.

## 🤝 Contact

Dimitri Rayer - [mark@marktolmacs.com](mailto:mark@marktolmacs.com)

Site web : [https://deka.github.io](https://deka.github.io) 