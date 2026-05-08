import React from 'react'
import ProjetFloatImage from './ProjetFloatImage'

interface ProjetEnjeuSectionProps {
  children: React.ReactNode
  imageSrc?: string
  imageAlt?: string
}

export default function ProjetEnjeuSection({ children, imageSrc, imageAlt }: ProjetEnjeuSectionProps) {
  return (
    <section id="enjeu">
      <h2 className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-8">
        Enjeu
      </h2>
      {imageSrc && <ProjetFloatImage src={imageSrc} alt={imageAlt ?? ''} side="right" />}
      <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
        {children}
      </div>
      {imageSrc && <div className="clear-both" />}
    </section>
  )
}
