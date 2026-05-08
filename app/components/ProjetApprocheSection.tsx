import React from 'react'
import ProjetFloatImage from './ProjetFloatImage'

interface ProjetApprocheSectionProps {
  children: React.ReactNode
  imageSrc?: string
  imageAlt?: string
}

export default function ProjetApprocheSection({ children, imageSrc, imageAlt }: ProjetApprocheSectionProps) {
  return (
    <section>
      <h2 className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-10">
        Approche
      </h2>
      {imageSrc && <ProjetFloatImage src={imageSrc} alt={imageAlt ?? ''} side="left" />}
      <div className="space-y-12">
        {children}
      </div>
      {imageSrc && <div className="clear-both" />}
    </section>
  )
}
