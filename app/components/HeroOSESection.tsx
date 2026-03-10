import React from 'react'

export default function HeroOSESection() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 
                id="hero-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-blue leading-tight"
              >
                Sécuriser Observer Exposer
              </h1>
              
              <p className="text-xl sm:text-2xl text-primary-blue leading-relaxed font-light">
                Une approche unifiée pour sécuriser vos accès, comprendre vos systèmes et exposer vos ressources avec confiance.
              </p>
              
              <p className="text-base text-gray-600 italic">
                Permet de répondre aux enjeux modernes des applications d'aujourd'hui et de demain
              </p>
            </div>
            
            <div className="space-y-4 pt-4">
              <p className="text-2xl sm:text-3xl font-light text-primary-blue italic">
                Sécuriser. Observer. Exposer.
              </p>
              <p className="text-2xl sm:text-3xl font-light text-primary-blue italic">
                Beyond The Stack.
              </p>
            </div>
            
            <div className="pt-6">
              <p className="text-lg text-primary-blue font-medium">
                Valeur : Accompagnement pour maîtriser son système.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              {/* Cercle de fond décoratif */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-yellow/20 to-primary-turquoise/20 rounded-full blur-3xl transform translate-x-4 -translate-y-4"></div>
              
              {/* Container de l'image */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/ose-abstract.png" 
                    alt="Observe-Secure-Expose - Vision globale" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

