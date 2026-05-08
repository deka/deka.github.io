---
name: image-web
description: Optimise une image pour le web (redimensionnement, conversion WebP/AVIF, suppression EXIF, rapport de gain). Trigger: /image-web
---

# Skill : Optimisation image pour le web

## Objectif

Redimensionner et compresser une image pour le web :
- Format WebP par défaut (meilleur ratio qualité/poids)
- Suppression des métadonnées EXIF
- Sans agrandissement (jamais plus grand que l'original)
- Rapport de gain affiché en sortie

## Outil utilisé

`sharp` — disponible via Node.js dans le projet (dépendance transitive Next.js).

---

## Usage

```
/image-web <chemin_source> <chemin_destination> [options]
```

**Options :**
- `--width=<px>` — largeur max (défaut : `1920`)
- `--quality=<0-100>` — qualité de compression (défaut : `85`)
- `--format=<webp|avif|jpeg|png>` — format de sortie (défaut : `webp`)

**Exemples :**
```bash
/image-web public/hero-raw.jpg public/hero.webp
/image-web public/cmp-1.png public/cmp-1.webp --width=800 --quality=80
/image-web ~/Downloads/photo.jpg public/projet-iam-hero.webp --format=avif
```

---

## Procédure

### 1. Exécuter le script

Le script est inclus dans ce skill (`scripts/image-web.mjs`). Le chemin à utiliser depuis la racine du projet :

```bash
node .claude/skills/image-web/scripts/image-web.mjs <chemin_source> <chemin_destination> [options]
```

### 2. Afficher le résultat

Afficher la sortie du script telle quelle — elle contient déjà le rapport de gain.

---

## Valeurs recommandées par usage

| Contexte | `--width` | `--quality` | `--format` |
|----------|-----------|-------------|------------|
| Hero / pleine page | `1920` | `85` | `webp` |
| Thumbnail / aperçu | `800` | `80` | `webp` |
| Favicon / icône | `512` | `90` | `png` |
| Photo haute fidélité | `2560` | `90` | `avif` |
| Compatibilité max | `1280` | `80` | `jpeg` |

---

## Notes

- Le répertoire de destination est créé automatiquement s'il n'existe pas.
- L'image n'est jamais agrandie (option `withoutEnlargement`).
- Les métadonnées EXIF sont supprimées pour réduire le poids et la vie privée.
- L'auto-rotation EXIF est appliquée avant la suppression des métadonnées.
