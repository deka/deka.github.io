import React from 'react'

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
      {imageSrc && (
        <div className="mb-8 md:float-left md:mr-10 md:mb-4 md:w-56 lg:w-96">
          <img
            src={imageSrc}
            alt={imageAlt ?? ''}
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
      )}
      <div className="space-y-12">
        {children}
      </div>
      {imageSrc && <div className="clear-both" />}
    </section>
  )
}
