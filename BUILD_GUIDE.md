# Guide de Build pour GitHub Pages

## Configuration automatique

Le site est déjà configuré pour être déployé automatiquement sur GitHub Pages.

## Étapes de déploiement

### 1. Configuration du repository GitHub

1. Allez dans les paramètres de votre repository GitHub
2. Section "Pages" 
3. Source : "Deploy from a branch"
4. Branch : `gh-pages`
5. Folder : `/ (root)`

### 2. Déploiement automatique

Le déploiement se fait automatiquement via GitHub Actions quand vous pushez sur la branche `main`.

Le workflow :
- Installe les dépendances
- Build le site statique
- Déploie sur la branche `gh-pages`

### 3. Build locale (optionnel)

Pour tester localement :

```bash
# Build statique
npm run build:static

# Le site sera généré dans le dossier /out
```

### 4. Personnalisation du domaine

Si vous voulez utiliser un domaine personnalisé :

1. Modifiez le fichier `.github/workflows/deploy.yml`
2. Changez la ligne `cname: deka-landing.github.io` avec votre domaine
3. Ou supprimez cette ligne pour utiliser l'URL GitHub Pages par défaut

### 5. URL du site

Une fois déployé, votre site sera disponible à :
- `https://[votre-username].github.io/deka-landing`
- Ou votre domaine personnalisé si configuré

## Dépannage

- Assurez-vous que GitHub Actions est activé dans votre repository
- Vérifiez que la branche `gh-pages` est créée après le premier déploiement
- Les erreurs de build apparaissent dans l'onglet "Actions" de GitHub

## Structure des fichiers

```
/
├── .github/workflows/deploy.yml  # Workflow GitHub Actions
├── public/.nojekyll              # Fichier pour GitHub Pages
├── next.config.js                # Configuration Next.js optimisée
└── out/                          # Dossier de build (généré automatiquement)
``` 