import { ArrowRight, Check } from 'lucide-react'

const POINTS = [
  "Audit d'architecture orienté conformité (ISO 27001, HDS, SOC 2)",
  "Conception de plateformes self-service multi-tenant",
  "Mise en place de socle IAM (Keycloak, OAuth2/OIDC, MFA)",
]

export default function ProjetCtaSection() {
  return (
    <section id="cta" className="print:hidden bg-slate-50 py-24 md:py-32 ">
      <div className="container-wide flex flex-col gap-12 max-w-2xl">
        <div>
          <p className="eyebrow text-primary-turquoise">Prochaine étape</p>
          <h2 className="mt-3 text-3xl font-medium md:text-5xl text-gray-900">
            Un projet d'infrastructure sous contrainte de conformité ?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-500">
            Je travaille avec les équipes qui doivent concilier autonomie utilisateur,
            isolation stricte et auditabilité. Un échange de 30 minutes suffit pour
            poser le cadre — sans engagement.
          </p>
          <ul className="mt-8 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-gray-700">
                <Check className="mt-1 h-4 w-4 shrink-0 text-primary-turquoise" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-10 w-1/2 mx-auto">
          <p className="text-sm text-gray-400">Une question sur ce projet ?</p>
          <p className="mt-2 text-2xl font-medium text-gray-900">Parlons-en directement.</p>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="mailto:dimitri.rayer@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-yellow px-5 py-3 text-sm font-medium text-gray-900 transition hover:bg-primary-yellow-hover"
            >
              Envoyer un message <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://cal.com/dimitri-rayer-onea/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-slate-100"
            >
              Planifier un échange de 30 min
            </a>
          </div>
          <p className="mt-6 text-xs text-gray-400">
            Réponse sous 24h ouvrées · Disponibilités à partir de juin 2026.
          </p>
        </div>
      </div>
    </section>
  )
}
