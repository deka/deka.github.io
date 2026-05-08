---
name: projet-image
description: Use when generating an illustration prompt for a project page (/projet-xxx). Produces a Midjourney/DALL-E prompt that looks like a real professional deliverable, calibrated for B2B prospects.
---

# Skill : Générer un prompt d'image pour une page projet

## Objectif

L'image doit **rassurer** le prospect B2B, pas l'impressionner.

Il cherche à se reconnaître dans le problème et à voir la preuve que tu l'as résolu. L'image qui signe un client est celle qui dit : *"ce livrable existe, je l'ai produit, ça ressemble à ce que tu attends."*

**Elle ne doit pas être de l'art abstrait.** Elle doit ressembler à un vrai document professionnel — soigné, dans la palette du site, représentatif sans exposer les détails réels.

---

## Identité visuelle du site

| Token | Valeur | Usage |
|-------|--------|-------|
| `primary-blue` | `#2D3C4B` | Fond dominant, header, zones sombres |
| `primary-turquoise` | `#3C9B96` | Connecteurs, labels, accents |
| `primary-yellow` | `#F5C36E` | Points chauds, highlights clés |
| Typographie | Inter, font-light | Aéré, sobre |
| Format image | Carré (1:1), arrondis | Dans un container `rounded-2xl shadow-2xl` |

---

## Ce qu'il faut éviter (absolu)

- Art abstrait, formes géométriques décoratives sans sens
- Isométrique 3D stylisé → signal agence créative, pas expert technique
- Flux de lumière, métaphores spatiales poétiques
- Circuit boards, fils enchevêtrés, "tech bleue" générique
- Personnages, écrans flottants, interfaces holographiques
- Icônes cloud, cadenas, boucliers, logos clipart
- Stock photo aesthetic, rendu photographique réaliste
- Froids exclusifs sans chaleur — toujours du `#F5C36E` quelque part

---

## Étape 1 — Identifier le type de valeur du projet

Lire la page projet et déterminer où réside la valeur principale :

**Type A — Valeur dans l'architecture**
Projets d'infrastructure, plateforme, IAM, sécurité, backend complexe.
La valeur est dans la conception du système, pas dans l'interface.
→ Produire un **diagramme d'architecture stylisé** : boîtes, zones, connecteurs, annotations.

**Type B — Valeur dans l'interface métier**
Projets avec un produit visible, une UI, une expérience utilisateur métier.
La valeur est dans ce que l'utilisateur voit et utilise.
→ Produire une **capture d'interface stylisée** : layout propre, données représentatives, composants métier.

---

## Étape 2 — Construire le prompt selon le type

**Règle de densité (valable pour les deux types) :** max 4 éléments nommés dans le prompt. Au-delà, le modèle les ignore ou les déforme. Choisir les plus représentatifs, pas les plus exhaustifs.

### Type A — Diagramme d'architecture

Style cible : un vrai diagramme de type C4 ou draw.io — propre, lisible — recolorisé dans la palette du site.

```
Clean professional architecture diagram of [description en 1 ligne],
[2-3 zones ou composants max, avec leurs relations],
dark slate blue (#2D3C4B) background panels,
teal (#3C9B96) connector lines,
warm primary-yellow (#F5C36E) highlight on [élément central],
box-and-arrow layout, flat design, square composition
```

**Négatif :**
```
--no 3D isometric abstract art people icons holographic circuit boards decorative patterns
```

### Type B — Interface métier

Style cible : une capture d'écran stylisée d'un vrai outil — dashboard, formulaire, liste — dans la palette du site.

```
Clean UI screenshot of [type d'interface],
showing [2-3 composants métier max],
dark slate blue (#2D3C4B) sidebar and header,
teal (#3C9B96) action buttons,
warm primary-yellow (#F5C36E) on [KPI ou alerte clé],
flat design, square composition
```

**Négatif :**
```
--no abstract art people holographic 3D isometric circuit boards decorative patterns
```

---

## Étape 3 — Flags de format

```
--ar 1:1 --style raw --q 2
```

---

## Étape 4 — Table de référence par type de projet

| Projet | Type | Élément central à highlighter |
|--------|------|-------------------------------|
| IAM / authentification | A | La séparation des zones d'identité, le flux d'autorisation |
| Infrastructure cloud / CMP | A | Les couches de service, les frontières tenant |
| API / intégration | A | Les nœuds de connexion, le flux de données entre systèmes |
| Conformité / audit | A | Le pipeline de traçabilité, les checkpoints |
| Dashboard / reporting | B | Les KPIs principaux, l'état du système |
| Self-service / portail client | B | L'interface d'action principale, les statuts |
| Backoffice / admin | B | La liste de ressources, les actions rapides |

---

## Étape 5 — Exemple complet (projet CMP)

**Type :** A — valeur dans l'architecture (isolation multi-tenant, conformité HDS)

**Élément central :** les frontières entre tenants, le pipeline d'audit

```
Clean professional architecture diagram of a multi-tenant cloud platform,
three separated tenant zones, central audit pipeline connecting them,
dark slate blue (#2D3C4B) background panels,
teal (#3C9B96) connector lines,
warm primary-yellow (#F5C36E) highlight on the audit pipeline,
box-and-arrow layout, flat design, square composition
--no 3D isometric abstract art people icons holographic circuit boards decorative patterns
--ar 1:1 --style raw --q 2
```

**Fichier suggéré :** `/public/projet-cmp-hero.png`

---

## Livrable attendu

1. Le type identifié (A ou B) avec justification courte
2. Le prompt principal (en anglais)
3. Le bloc `--no` négatif
4. Les flags de format
5. Le nom de fichier suggéré (`/public/projet-[slug]-hero.png`)
