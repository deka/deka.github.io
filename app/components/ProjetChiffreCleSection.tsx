import React from 'react'

interface Chiffre {
  valeur: string
  label: React.ReactNode
}

interface ProjetChiffreClesSectionProps {
  chiffres: Chiffre[]
}

export default function ProjetChiffreCleSection({ chiffres }: ProjetChiffreClesSectionProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-8 sm:py-14 border-y border-gray-100">
      {chiffres.map((c, i) => (
        <div key={i} className="text-center">
          <div className="font-display text-5xl font-bold text-primary-turquoise">{c.valeur}</div>
          <div className="text-sm text-gray-500 mt-2 leading-snug">{c.label}</div>
        </div>
      ))}
    </section>
  )
}
