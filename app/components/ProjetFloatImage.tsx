import React from 'react'

interface ProjetFloatImageProps {
  src: string
  alt: string
  side: 'left' | 'right'
}

export default function ProjetFloatImage({ src, alt, side }: ProjetFloatImageProps) {
  const floatClass = side === 'right'
    ? 'mb-4 md:mb-8 float-right ml-4 md:ml-10 md:mb-4 w-48 md:w-56 lg:w-96 print:float-right print:ml-8 print:mb-4 print:w-72'
    : 'mb-4 md:mb-8 float-left mr-4 md:mr-10 md:mb-4 w-48 md:w-56 lg:w-96 print:float-left print:mr-8 print:mb-4 print:w-72'
  return (
    <div className={floatClass}>
      <img
        src={src}
        alt={alt}
        className="w-full rounded-lg shadow-lg shadow-slate-900/10 object-cover"
      />
    </div>
  )
}
