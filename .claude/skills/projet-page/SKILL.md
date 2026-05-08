---
name: projet-page
description: Ajouter une étude de cas au portfolio sous forme de page dédiée, accessible uniquement par URL directe. Design high-ticket, classe, orienté démonstration de maîtrise. Trigger: /projet-page
---

# Skill : Ajouter une expérience au portfolio

## Philosophie

**Ce n'est pas une page de vente. C'est une preuve de maîtrise.**

Le visiteur qui arrive sur cette page a déjà l'URL — il cherche à comprendre le niveau, la profondeur, la rigueur. Il veut sentir qu'il a affaire à quelqu'un qui pense à un autre niveau.

Objectif : **lui donner envie d'en savoir plus**, pas lui vendre quelque chose.

Registre : cabinet de conseil haut de gamme (McKinsey, Thoughtworks), pas landing page startup.

---

## Étape 1 — Collecter les informations

L'utilisateur a fourni les éléments du projet. Synthétise à partir de ce qu'il a donné, sans poser de questions superflues.

Ce dont tu as besoin :

### Contexte
- Secteur / type d'organisation
- Enjeu principal (1 phrase)
- Durée / statut (mission terminée, en cours)

### Le problème
- Situation initiale concrète (pas générique)
- Ce que ça coûtait ou empêchait
- Pourquoi les solutions existantes ne suffisaient pas

### Ce qui a été conçu
- L'approche (pas la stack — les choix structurants)
- Les décisions d'architecture clés et POURQUOI (c'est ici que la maîtrise se voit)
- Les contraintes techniques ou normatives imposées

### Les résultats
- Impacts mesurables (délais, charge, autonomie, conformité...)
- Ce que ça a rendu possible

---

## Étape 2 — Construire le contenu

### Principe de reformulation

| À éviter | À viser |
|----------|---------|
| Liste de technologies | Choix architecturaux justifiés |
| "Nous avons développé..." | La nature du problème et pourquoi il était difficile |
| Bullets génériques | Phrases denses, précises, qui prouvent la pensée |
| "Résultats impressionnants" | Chiffres ou faits concrets, sans adjectifs |

**Les décisions techniques peuvent et doivent apparaître** — mais formulées comme des choix raisonnés, pas comme une liste de mots-clés.

Exemple :
> ❌ "Architecture CQRS avec pattern Result"  
> ✅ "Chaque cas d'usage est isolé dans son propre handler — les effets de bord sont impossibles par construction, pas par convention. Les erreurs métier remontent comme valeurs, pas comme exceptions, ce qui rend le comportement prévisible à chaque endpoint."

### Mise en valeur typographique

Dans les paragraphes de prose (Enjeu surtout, Approche si besoin), utilise `<strong className="text-primary-blue">` pour ancrer visuellement les termes clés. **2 à 4 par section maximum** — au-delà, l'effet disparaît.

Quoi mettre en gras :
- **Chiffres et durées** : `<strong className="text-primary-blue">48 à 72 heures</strong>`
- **La contrainte centrale** : `<strong className="text-primary-blue"> aucun accès direct </strong>` (noter les espaces pour respirer dans la phrase)
- **La phrase-choc qui résume l'enjeu** : `<strong className="text-primary-blue">n'est pas un bug — c'est un incident de sécurité</strong>`

Ne pas mettre en gras : des adjectifs génériques, des noms de technologie, ni plus d'une fois la même idée.

---

## Étape 3 — Structure de la page

La page suit ce plan narratif :

### 1. Hero — sobre, ancré
- Nom du projet (court, clair)
- Secteur + année
- Une phrase de contexte (pas d'accroche marketing)

### 2. Enjeu — le vrai problème
Paragraphe(s) de prose. Pas de bullets. Expliquer pourquoi la situation était bloquante, pourquoi c'était difficile à résoudre, ce que ça impliquait.

### 3. Approche — les choix structurants
2 à 4 décisions clés, chacune avec son WHY. C'est la section centrale — c'est ici que la maîtrise se démontre. Montrer la pensée, pas la liste de frameworks.

### 4. Résultats — ce qui a changé
Faits concrets. Pas d'adjectifs superlatifs. Court.

### 5. CTA — léger, non intrusif
"Une question sur ce projet ? On peut en parler." + lien cal.com

---

## Étape 4 — Créer la page Next.js

### Route

```
app/portfolio/[slug]/page.tsx
```

Exemple : `app/portfolio/cmp/page.tsx` → accessible à `/portfolio/cmp`

Les pages portfolio sont **regroupées sous `/portfolio/`** pour l'organisation. Elles ne sont **pas liées depuis le menu principal**. Accessibles uniquement par URL directe.

### Design système

Couleurs disponibles : `primary-blue` (#2D3C4B), `primary-turquoise` (#3C9B96), `primary-yellow` (#F5C36E)  
Tokens hero : `primary-turquoise` (#3C9B96), `primary-yellow-hover` (#f0b84d), `primary-blue` (#2D3C4B)  
Variable CSS : `--teal` (#3C9B96) — utilisable via `var(--teal)` dans les styles inline  
Utilitaires CSS : `.eyebrow`, `.container-wide`  
Fonts : `font-display` (Fraunces, serif) pour les titres expressifs — `font-sans` (Inter) pour le corps  
Pattern existant : sections alternant fond blanc / fond slate-900

**Règles design pour ces pages :**
- Fond blanc, typographie sombre — sobre, aéré
- Hero en slate-900 avec halo radial teal + texte blanc
- Titre hero en `font-display text-5xl md:text-7xl font-medium`, dernier mot en `italic text-primary-turquoise`
- Grande typographie pour les titres de section (`text-4xl font-light`)
- Beaucoup d'espace blanc entre sections (`py-20` minimum)
- Pas de cards, pas de grilles à 3 colonnes : du texte bien typographié
- Les chiffres clés en `font-display text-5xl font-bold text-primary-turquoise` pour créer des points d'accroche visuels
- Les titres de décision approche en `font-display` (géré par `ProjetApprocheParagraphe`)
- Largeur de lecture contrainte (`max-w-3xl`) pour le corps de texte

### Template de page

**Convention nommage images** : `[slug]-1.webp`, `[slug]-2.webp`, `[slug]-3.webp` dans `/public/`.  
Ex : `/public/mon-projet-1.webp`, `/public/mon-projet-2.webp`, `/public/mon-projet-3.webp`

**Print** : header et footer masqués via `print:hidden`. Le CTA "En parler" est aussi masqué à l'impression.

```tsx
// app/portfolio/[slug]/page.tsx
import Header from '../../components/Header'
import FooterSection from '../../components/FooterSection'
import ProjetHeroSection from '../../components/ProjetHeroSection'
import ProjetChiffreCleSection from '../../components/ProjetChiffreCleSection'
import ProjetEnjeuSection from '../../components/ProjetEnjeuSection'
import ProjetApprocheSection from '../../components/ProjetApprocheSection'
import ProjetApprocheParagraphe from '../../components/ProjetApprocheParagraphe'
import ProjetResultatsSection from '../../components/ProjetResultatsSection'
import ProjetCtaSection from '../../components/ProjetCtaSection'

export const metadata = {
  robots: 'noindex, nofollow',
}

export default function ProjetSlug() {
  return (
    <div className="min-h-screen bg-white">
      <div className="print:hidden">
        <Header />
      </div>

      <ProjetHeroSection
        eyebrow="Secteur · Année"
        titleMain="Titre du"
        titleAccent="Projet"
        description={<>
          Une phrase de contexte — <span className="text-white">élément clé mis en évidence</span>.
        </>}
        metaTags={[
          "Rôle tenu",
          "Tech1 · Tech2 · Tech3",
          "Contrainte normative ou contexte",
        ]}
      />

      {/* Enjeu — image 1 flotte à droite sur lg, dessous sur mobile */}
      <section className="pt-20 pb-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetEnjeuSection imageSrc="/[slug]-1.webp" imageAlt="Nom du projet — description courte">
            <p>
              Texte du paragraphe avec
              {" "}<strong className="text-primary-blue"> terme clé </strong>{" "}
              ancré visuellement, et plus loin{" "}
              <strong className="text-primary-blue">chiffre ou durée</strong>{" "}
              pour le concret.
            </p>
            <p>
              Deuxième paragraphe — peut se terminer sur une phrase-choc :{" "}
              <strong className="text-primary-blue">phrase qui résume l'enjeu en une ligne</strong>.
            </p>
          </ProjetEnjeuSection>
        </div>
      </section>

      {/* Chiffres clés optionnels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetChiffreCleSection chiffres={[
            { valeur: "X", label: <>label ligne 1<br />label ligne 2</> },
          ]} />
        </div>
      </section>

      {/* Approche — image 2 flotte à gauche sur lg, au-dessus sur mobile */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetApprocheSection imageSrc="/[slug]-2.webp" imageAlt="Nom du projet — description courte">
            <ProjetApprocheParagraphe titre="Titre de la décision">
              Justification du WHY — pourquoi ce choix, pas un autre.
            </ProjetApprocheParagraphe>
          </ProjetApprocheSection>
        </div>
      </section>

      {/* Résultats — image 3 flotte à droite sur lg, au-dessus sur mobile */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetResultatsSection imageSrc="/[slug]-3.webp" imageAlt="Nom du projet — description courte" items={[
            "Résultat factuel court, sans adjectif",
          ]} />
        </div>
      </section>

      <ProjetCtaSection />

      <div className="print:hidden">
        <FooterSection />
      </div>
    </div>
  )
}
```

---

## Étape 5 — Remplir le contenu

Utilise les informations collectées à l'Étape 1 pour remplir le template :

- **Hero** : nom projet, secteur/année, phrase de contexte factuelle
- **Enjeu** : 2-3 paragraphes de prose (pas de bullets) — le vrai problème et pourquoi il était difficile
- **Chiffres clés** : 2-4 métriques percutantes si disponibles (avant/après, ou faits marquants)
- **Approche** : 2-4 décisions architecturales reformulées avec leur justification (style "voici pourquoi ce choix")
- **Résultats** : liste courte, factuelle, sans adjectifs

---

## Étape 6 — Vérification qualité

Avant de déclarer terminé :

- [ ] Aucun adjectif marketing ("innovant", "performant", "robuste")
- [ ] Termes clés en `<strong className="text-primary-blue">` dans les paragraphes Enjeu (2-4 max, pas plus)
- [ ] Chaque décision technique est justifiée (WHY visible)
- [ ] Le texte se lit comme de la prose, pas comme un pitch deck
- [ ] Au moins 2 faits concrets dans les résultats
- [ ] La page build sans erreur (`npm run build`)
- [ ] Mobile responsive
- [ ] Header et Footer présents (wrappés dans `<div className="print:hidden">`)
- [ ] Images présentes dans `/public/` : `[slug]-1.webp`, `[slug]-2.webp`, `[slug]-3.webp`
- [ ] `metadata` avec `robots: 'noindex, nofollow'` présent
- [ ] `ProjetHeroSection` : props `eyebrow`, `titleMain`, `titleAccent`, `description` (ReactNode), `metaTags` (tuple de 3)
- [ ] `ProjetEnjeuSection` : prop `imageSrc="/[slug]-1.webp"` — float-right sur lg, au-dessus sur mobile ; `id="enjeu"` géré par le composant
- [ ] `ProjetChiffreCleSection` si chiffres disponibles — prop `chiffres` : tableau `{ valeur, label: ReactNode }`
- [ ] `ProjetApprocheSection` : prop `imageSrc="/[slug]-2.webp"` — float-left sur lg, au-dessus sur mobile
- [ ] `ProjetApprocheParagraphe` : un par décision avec `titre="..."`
- [ ] `ProjetResultatsSection` : prop `imageSrc="/[slug]-3.webp"` — float-right sur lg, au-dessus sur mobile ; prop `items` : tableau de `ReactNode`
- [ ] Toutes les sections dans `max-w-5xl mx-auto` pour laisser la place aux images flottantes
- [ ] `ProjetCtaSection` présent (gère le `print:hidden` et le lien cal.com)

---

## Règle d'or

> Un profil high-ticket ne se vend pas. Il se reconnaît.
>
> La page doit laisser une impression : "cette personne pense à un niveau que peu atteignent."
