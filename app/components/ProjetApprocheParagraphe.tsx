import React from 'react'

interface ProjetApprocheParagrapheProps {
  titre: string
  children: React.ReactNode
}

export default function ProjetApprocheParagraphe({ titre, children }: ProjetApprocheParagrapheProps) {
  return (
    <div>
      <h3 className="font-display text-xl font-semibold text-primary-blue mb-3">{titre}</h3>
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">{children}</p>
    </div>
  )
}
