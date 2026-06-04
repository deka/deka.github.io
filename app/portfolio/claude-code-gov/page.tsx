import Header from '../../components/Header'
import FooterSection from '../../components/FooterSection'
import ProjetHeroSection from '../../components/ProjetHeroSection'
import ProjetChiffreCleSection from '../../components/ProjetChiffreCleSection'
import ProjetEnjeuSection from '../../components/ProjetEnjeuSection'
import ProjetApprocheSection from '../../components/ProjetApprocheSection'
import ProjetApprocheParagraphe from '../../components/ProjetApprocheParagraphe'
import ProjetResultatsSection from '../../components/ProjetResultatsSection'
import ProjetCtaSection from '../../components/ProjetCtaSection'

export const metadata = {
  robots: 'noindex, nofollow',
}

export default function ProjetClaudeCodeGov() {
  return (
    <div className="min-h-screen bg-white">
      <div className="print:hidden">
        <Header />
      </div>

      <ProjetHeroSection
        eyebrow="Éditeur SaaS B2B · 2026"
        titleMain="Gouvernance"
        titleAccent="Claude Code"
        description={<>
          Cadre de gouvernance IA déployé sur une équipe de 5 développeurs —
          sécurité, uniformisation des pratiques et{" "}
          <span className="text-white">onboarding réduit de 3 jours à 3 heures</span>.
        </>}
        metaTags={[
          "Consultant & Architecte IA",
          "Claude Code · .NET · Azure DevOps · MariaDB",
          "Compte Anthropic Enterprise — Windows 11 / WSL",
        ]}
      />

      <section className="pt-12 md:pt-20 pb-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetEnjeuSection imageSrc="/claude-code-gov-1.webp" imageAlt="Gouvernance Claude Code — socle de règles et templates">
            <p>
              L'éditeur avait déployé Claude Code sur son équipe de développement via un compte
              Anthropic Enterprise — une décision stratégique juste, mais sans le cadre qui la rend
              opérationnellement sûre. Chaque développeur configurait son poste à sa façon,
              sans règle commune sur ce que Claude pouvait lire, écrire, ou exécuter.
              Code source, secrets d'API, fichiers de configuration .NET, données clients :
              tout transitait potentiellement vers l'API Anthropic{" "}
              <strong className="text-primary-blue">sans garde-fou RGPD ni périmètre de confidentialité métier</strong>{" "}
              formellement défini.
            </p>
            <p>
              Le second risque était comportemental. Claude Code peut exécuter des commandes shell —
              c'est précisément ce qui le rend productif. Mais sur Windows et WSL,
              contrairement aux environnements macOS avec sandbox native,{" "}
              <strong className="text-primary-blue">aucune barrière technique n'empêche</strong>{" "}
              un <code>rm -rf</code>, un <code>git push --force</code> sur main,
              ou un déploiement non planifié déclenché par une instruction ambiguë.
              Sans règles explicites, la seule protection est la prudence du moment.
            </p>
            <p>
              Le troisième risque était organisationnel. Sans référentiel commun,
              toute évolution de sécurité exigeait de contacter chaque développeur individuellement.
              Aucun audit n'était possible. L'onboarding d'un nouveau membre prenait{" "}
              <strong className="text-primary-blue">plusieurs jours</strong>{" "}
              — non par complexité technique, mais par absence de procédure documentée
              et de configuration prête à l'emploi.
            </p>
          </ProjetEnjeuSection>
        </div>
      </section>

      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetChiffreCleSection chiffres={[
            { valeur: "3h", label: <>onboarding après<br />déploiement du cadre</> },
            { valeur: "~30", label: <>règles deny couvrant<br />secrets, exfiltration, déploiement</> },
            { valeur: "1 PR", label: <>pour propager une<br />évolution de sécurité à toute l'équipe</> },
          ]} />
        </div>
      </section>

      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetApprocheSection imageSrc="/claude-code-gov-2.webp" imageAlt="Gouvernance Claude Code — mécanisme d'héritage et CLAUDE.md">
            <ProjetApprocheParagraphe titre="Deny-first par construction, pas par convention">
              Le parti pris central : toute action non explicitement autorisée est bloquée.
              Pas de liste blanche ajoutée après un incident — un périmètre fermé dès le premier
              jour, élargi à la demande et documenté à chaque extension. Les ~30 règles couvrent
              les secrets d'application .NET, les fichiers de configuration sensibles,
              les commandes shell destructrices, l'exfiltration de données vers des services
              tiers, et les déploiements non planifiés. Sur Windows et WSL, où la sandbox native
              de Claude Code n'existe pas, ces règles sont la seule barrière technique réelle.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="Source de vérité unique, propagation mécanique">
              Plutôt qu'un <code>CLAUDE.md</code> différent dans chaque repo — impossible à maintenir
              à cinq développeurs — un fichier socle central versionné en SemVer concentre
              l'ensemble des règles. Chaque projet importe ce socle via le mécanisme{" "}
              <code>@-import</code> natif de Claude Code. Mettre à jour la politique de sécurité
              revient à modifier un seul fichier et ouvrir une PR : la propagation est mécanique,
              pas éditoriale. Ce qui aurait nécessité un message Slack par développeur
              devient un commit traçable dans l'historique git.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="Onboarding reproductible, pas mémorisé">
              Le cadre d'onboarding a été conçu pour fonctionner sans l'auteur présent.
              Installation Claude Code sur Windows 11, initialisation d'un projet,
              branchement MCP base de données en lecture seule, vérification des règles actives :
              chaque étape est documentée avec les commandes exactes à exécuter,
              les sorties attendues, et les points de vérification. Un développeur
              qui rejoint l'équipe suit le document — il n'a pas besoin de poser des questions
              pour être opérationnel.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="Passation orientée autonomie, pas dépendance">
              L'objectif de la mission n'était pas de livrer un système que seul son auteur
              peut faire évoluer. Le responsable de l'équipe a été formé sur la structure du socle,
              la logique des règles deny, et le cycle de vie d'une évolution : modifier le fichier central,
              versionner, propager. Les prochaines phases — montée en compétence avancée,
              checklists opérationnelles, extension du périmètre MCP — peuvent être
              conduites en interne sans intervention extérieure.
            </ProjetApprocheParagraphe>
          </ProjetApprocheSection>
        </div>
      </section>

      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetResultatsSection imageSrc="/claude-code-gov-3.webp" imageAlt="Gouvernance Claude Code — tableau de bord équipe" items={[
            "Onboarding d'un nouveau développeur ramené de 3 jours à 3 heures, documentation prête à l'emploi",
            "Règles deny commitées dans chaque repo — seule barrière technique effective sur Windows/WSL sans sandbox native",
            "Toute évolution de sécurité se propage par PR plutôt que par coordination manuelle entre développeurs",
            "Responsable dev formé et autonome : structure du socle, cycle de mise à jour, extension du périmètre",
          ]} />
        </div>
      </section>

      <ProjetCtaSection />

      <div className="print:hidden">
        <FooterSection />
      </div>
    </div>
  )
}
