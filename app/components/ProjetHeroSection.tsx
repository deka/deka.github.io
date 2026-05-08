import React from 'react'

interface ProjetHeroSectionProps {
  eyebrow: string
  titleMain: string
  titleAccent: string
  description: React.ReactNode
  metaTags: [string, string, string]
}

export default function ProjetHeroSection({
  eyebrow,
  titleMain,
  titleAccent,
  description,
  metaTags,
}: ProjetHeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-slate-900 print:bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl print:hidden"
        style={{ background: "radial-gradient(circle, var(--teal) 0%, transparent 60%)" }}
      />
      <div className="container-wide relative pt-16 pb-16 md:pt-24 md:pb-24 print:pt-4 print:pb-4">
        <p className="eyebrow text-primary-turquoise print:text-teal-700">{eyebrow}</p>
        <h1 className="font-display mt-4 max-w-3xl text-5xl font-medium leading-[1.05] text-white md:text-7xl print:text-slate-900">
          {titleMain} <span className="italic text-primary-turquoise print:text-teal-700">{titleAccent}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70 md:text-xl print:text-slate-700">
          {description}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-md bg-primary-yellow px-5 py-3 text-sm font-medium text-primary-blue transition hover:bg-primary-yellow-hover print:hidden"
          >
            Discuter de votre projet
            <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#enjeu"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5 print:hidden"
          >
            Lire l'étude de cas
          </a>
        </div>
        <div className="mt-16 print:mt-4 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-white/50 print:text-slate-500">
          <span>{metaTags[0]}</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/30 md:block" />
          <span>{metaTags[1]}</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/30 md:block" />
          <span>{metaTags[2]}</span>
        </div>
      </div>
    </section>
  )
}
