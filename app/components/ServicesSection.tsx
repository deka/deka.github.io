import React from 'react'

export default function ServicesSection() {
  const services = [
    {
      image: "/services-1.jpg.webp",
      title: "Solution Complète & Développement MVP",
      description: "Quand vous avez une idée et avez besoin d'un partenaire expert pour faire la découverte business, le design produit, le développement logiciel et la gestion d'infrastructure pour livrer tout ou partie de votre projet."
    },
    {
      image: "/services-2.avif",
      title: "Développement Full-Stack",
      description: "Quand le plan est prêt, vous avez juste besoin de quelqu'un pour le construire, maintenir votre solution existante, corriger un bug complexe, ou accompagner votre équipe dans l'apprentissage de nouvelles technologies."
    },
    {
      image: "/services-3.jpeg",
      title: "CTO en temps partagé & Leadership Technique",
      description: `Accompagner les dirigeants qui nécessitent un leadership technique temporaire rapide, 
        préparer et planifier des changements stratégiques, 
        connecter les équipes techniques avec les objectifs de l'entreprise, ou soutenir la transformation digitale.`
    },
    {
      image: "/services-4.webp",
      title: "Coaching & Audit",
      description: "Aider les équipes à apprendre de nouvelles technologies, assurer une connaissance cohérente, ou accompagner et coacher le leadership technique interne pour devenir plus efficace dans les opérations quotidiennes."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50" id="services" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-primary-blue mb-4"
          >
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <article 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary-blue mb-8">
            Prêt à parler de votre projet ?
          </h3>
          <div className="pt-4">
          <a
                href="https://cal.com/dimitri-rayer-onea/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
                aria-label="Planifier un échange (ouvre dans un nouvel onglet)"
              >
                PLANIFIER UN ÉCHANGE
                <span className="sr-only">Lien externe</span>
              </a>
          </div>
        </div>
      </div>
    </section>
  )
} 