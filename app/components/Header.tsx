'use client'

import React, { useState, useCallback, useEffect } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
  }, [])

  // Gestion de la touche Échap pour fermer le menu mobile
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu()
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMobileMenuOpen, closeMobileMenu])

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-40" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo-cercle.png" 
              alt="Dimitri Rayer - Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12"
            />
          </div>

          {/* Navigation Desktop - cachée sur mobile */}
          <nav role="navigation" aria-label="Navigation principale" className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a 
                  href="#about"
                  className="text-primary-blue hover:text-primary-blue font-medium transition-colors duration-200 focus:outline-none focus:text-primary-blue"
                  aria-label="À propos"
                >
                  À propos
                </a>
              </li> 
              <li>
                <a 
                  href="#testimonials"
                  className="text-primary-blue hover:text-primary-blue font-medium transition-colors duration-200 focus:outline-none focus:text-primary-blue"
                  aria-label="Témoignages"
                >
                  Témoignages
                </a>
              </li>      
              <li>
                <a 
                  href="#services"
                  className="text-primary-blue hover:text-primary-blue font-medium transition-colors duration-200 focus:outline-none focus:text-primary-blue"
                  aria-label="Services"
                >
                  Services
                </a>
              </li>
            </ul>
          </nav>

          {/* Bouton menu mobile et liens sociaux */}
          <div className="flex items-center space-x-4">
            {/* Liens sociaux - toujours visibles */}
            <a 
              href="https://www.linkedin.com/in/dimitri-rayer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-blue transition-colors duration-200 focus:outline-none focus:text-primary-blue"
              aria-label="Profil LinkedIn de Dimitri Rayer (ouvre dans un nouvel onglet)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Lien externe</span>
            </a>
            <a 
              href="https://github.com/deka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-blue transition-colors duration-200 focus:outline-none focus:text-primary-blue"
              aria-label="Profil GitHub de Dimitri Rayer (ouvre dans un nouvel onglet)"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Lien externe</span>
            </a>

            {/* Bouton menu hamburger - visible uniquement sur mobile */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-600 hover:text-primary-blue transition-colors duration-200 focus:outline-none focus:text-primary-blue"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile - affiché seulement quand ouvert */}
        {isMobileMenuOpen && (
          <nav 
            id="mobile-menu"
            role="navigation" 
            aria-label="Navigation mobile" 
            className="md:hidden border-t border-gray-200 pt-4 pb-4"
          >
            <ul className="space-y-4">
              <li>
                <a 
                  href="#about"
                  className="block text-primary-blue hover:text-primary-blue font-medium transition-colors duration-200 focus:outline-none focus:text-primary-blue py-2"
                  aria-label="À propos"
                  onClick={closeMobileMenu}
                >
                  À propos
                </a>
              </li> 
              <li>
                <a 
                  href="#testimonials"
                  className="block text-primary-blue hover:text-primary-blue font-medium transition-colors duration-200 focus:outline-none focus:text-primary-blue py-2"
                  aria-label="Témoignages"
                  onClick={closeMobileMenu}
                >
                  Témoignages
                </a>
              </li>      
              <li>
                <a 
                  href="#services"
                  className="block text-primary-blue hover:text-primary-blue font-medium transition-colors duration-200 focus:outline-none focus:text-primary-blue py-2"
                  aria-label="Services"
                  onClick={closeMobileMenu}
                >
                  Services
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
} 