import React from 'react'

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
      {imageSrc && (
        <div className="mb-8 md:float-right md:ml-10 md:mb-4 md:w-56 lg:w-96">
          <img
            src={imageSrc}
            alt={imageAlt ?? ''}
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
      )}
      <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
        {children}
      </div>
      {imageSrc && <div className="clear-both" />}
    </section>
  )
}
