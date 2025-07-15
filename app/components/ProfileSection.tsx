import React from 'react'

export default function ProfileSection() {
  return (
    <section className="py-5 sm:py-20 px-4 sm:px-6 lg:px-8" id="about" aria-labelledby="profile-heading">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenu textuel */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">
                BIENVENUE
              </p>
              <h1 
                id="profile-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-blue leading-tight"
              >
                Je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow to-primary-turquoise">Dimitri Rayer</span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-primary-blue leading-relaxed">
                Un tech lead expérimenté, architecte logiciel et dirigeant avec plus de 15 ans d'expérience dans la livraison de projets IT complexes 
                pour des startup, éditeurs, E.T.I et grands groupes.
              </p>
              
              <p className="text-lg text-primary-blue leading-relaxed">
                Grâce à mon approche centrée sur les résultats, l'attention aux détails, la précision, la proactivité, la vaste expertise et l'efficacité, un taux de satisfaction de 100% n'est pas étonnant.
              </p>
              
              <p className="text-lg text-primary-blue leading-relaxed">
                Voyons comment je peux vous aider à réussir !
              </p>
            </div>

            <div className="pt-4">
              <a
                href="https://cal.com/dimitri-rayer-onea/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
                aria-label="Planifier un échange (ouvre dans un nouvel onglet)"
              >
                PLANIFIER UN ÉCHANGE
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
                <span className="sr-only">Lien externe</span>
              </a>
            </div>
          </div>

          {/* Image de profil */}
          <div className="relative">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Cercle de fond décoratif */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-yellow/20 to-primary-turquoise/20 rounded-full blur-3xl transform -translate-x-4 translate-y-4"></div>
              
              {/* Container de l'image */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/portrait.png" 
                    alt="Portrait de Dimitri Rayer" 
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