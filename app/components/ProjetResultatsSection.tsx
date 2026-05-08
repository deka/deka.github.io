import React from 'react'

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
      {imageSrc && (
        <div className="mb-8 md:float-right md:ml-10 md:mb-4 md:w-56 lg:w-96">
          <img
            src={imageSrc}
            alt={imageAlt ?? ''}
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
      )}
      <ul className="space-y-4 text-gray-700 text-lg">
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
