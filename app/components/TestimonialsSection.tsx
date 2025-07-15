import React from 'react'
import Image from 'next/image'

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Dimitri était notre responsable R&D, au delà de ses capacités techniques, Dimitri a une grande capacité d'écoute, de compréhension des besoins et s'adapte au contexte du projet dans lequel il travaille. Je recommande vivement Dimitri pour toutes ses compétences techniques et son savoir être.",
      name: "Laurent Humeau",
      title: "Directeur des systèmes d'Information",
      company: "Brioche Pasquier",
      avatar: "/testimonial-laurent.jpeg"
    },
    {
      id: 2,
      quote: "De part sa grande expérience et ses compétences, Dimitri est un atout incontestable à avoir dans son équipe. Je vous recommande vivement d'échanger avec lui par vous même pour vous en rendre compte ;).",
      name: "Jérôme Dumas",
      title: "CTO & Entrepreneur",
      company: "Peek'in",
      avatar: "/testimonial-jerome.jpeg"
    },
    {
      id: 3,
      quote: `Autonome, disponible, réactif, synthétique.
Expert dans son domaine, s'adapte facilement au contexte projet.
Très bon savoir-être.
Précis et rigoureux, les livrables sont de très bonnes qualités.`,
      name: "Nordine Boutiba",
      title: "Program Manager",
      company: "SoGet SA",
      avatar: "/testimonial-nordine.jpeg"
    }
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 
            id="testimonials-heading"
            className="text-4xl sm:text-5xl font-light text-white mb-4 tracking-tight"
          >
            Vous êtes en bonne compagnie
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mt-8"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <article 
              key={testimonial.id}
              className="relative group"
            >
              {/* Quote Mark */}
              <div className="absolute -top-4 left-0 z-10">
                <div className="w-16 h-16 bg-primary-turquoise/10 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-8 h-8 text-primary-turquoise" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 pt-12 h-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col">
                {/* Quote Text */}
                <blockquote className="text-gray-300 text-base leading-relaxed mb-8 font-light flex-1">
                  {testimonial.quote}
                </blockquote>

                {/* Profile */}
                <div className="flex items-center space-x-4 border-t border-white/10 pt-6 mt-auto">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/20">
                      <Image
                        src={testimonial.avatar}
                        alt={`Photo de ${testimonial.name}`}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white text-base mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-sm leading-tight">
                      {testimonial.title}
                    </div>
                    <div className="text-primary-turquoise text-sm font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
} 