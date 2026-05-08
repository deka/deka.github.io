import React from 'react'
import ProjetFloatImage from './ProjetFloatImage'

interface ProjetResultatsSectionProps {
  items: React.ReactNode[]
  imageSrc?: string
  imageAlt?: string
}

export default function ProjetResultatsSection({ items, imageSrc, imageAlt }: ProjetResultatsSectionProps) {
  return (
    <section>
      <h2 className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-8">
        Résultats
      </h2>
      {imageSrc && <ProjetFloatImage src={imageSrc} alt={imageAlt ?? ''} side="right" />}
      <ul className="space-y-4 text-gray-700 text-base md:text-lg">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-primary-turquoise mt-1 flex-shrink-0">—</span>
            {item}
          </li>
        ))}
      </ul>
      {imageSrc && <div className="clear-both" />}
    </section>
  )
}
