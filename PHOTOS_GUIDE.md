# Guide pour ajouter les photos

## Photos de profil pour les témoignages

Pour reproduire fidèlement l'image fournie, vous devez ajouter les photos des personnes qui ont donné les témoignages :

### Étapes :

1. **Ajouter les photos dans le dossier `public/`** :
   - `public/testimonial-viktor.jpg` - Photo de Viktor Fasl
   - `public/testimonial-peter.jpg` - Photo de Peter Salis  
   - `public/testimonial-jordan.jpg` - Photo de Jordan Meyer

2. **Remplacer les placeholders dans `app/components/TestimonialsSection.tsx`** :

Remplacez cette section :
```tsx
<div className="w-12 h-12 bg-gradient-to-br from-primary-yellow to-primary-turquoise rounded-full flex items-center justify-center">
  {/* Placeholder avec initiales */}
  <span className="text-white font-semibold text-sm">
    {testimonial.name.split(' ').map(n => n[0]).join('')}
  </span>
</div>
```

Par :
```tsx
<div className="w-12 h-12 rounded-full overflow-hidden">
  <img 
    src={testimonial.avatar}
    alt={`Photo de ${testimonial.name}`}
    className="w-full h-full object-cover"
  />
</div>
```

## Photo de profil principale

Pour la section de présentation, ajoutez votre photo :
- `public/profile-photo.jpg` - Votre photo de profil

Puis remplacez le placeholder dans `app/components/ProfileSection.tsx` :

Remplacez :
```tsx
<div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
  <div className="text-center">
    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    </div>
    <p className="text-sm text-gray-600">Image de profil</p>
  </div>
</div>
```

Par :
```tsx
<img 
  src="/profile-photo.jpg"
  alt="Dimitri Rayer"
  className="w-full h-full object-cover"
/>
```

## Tailles recommandées

- **Photos de témoignages** : 200x200px minimum, format carré
- **Photo de profil** : 500x500px minimum, format carré
- **Format** : JPG ou PNG optimisé pour le web

## Optimisation

Pour de meilleures performances, utilisez des images optimisées :
- Compression JPEG à 85-90%
- Format WebP si possible
- Taille de fichier < 100KB par image 