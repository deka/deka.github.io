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

export default function ProjetSIPasquier() {
  return (
    <div className="min-h-screen bg-white">
      <div className="print:hidden">
        <Header />
      </div>

      <ProjetHeroSection
        eyebrow="Industrie agroalimentaire · 2018–2023"
        titleMain="Refonte du SI"
        titleAccent="industriel"
        description={<>
          Urbanisation progressive d'un ERP monolithique AS400 vers une architecture
          en macro-services — <span className="text-white">18 sites de production, zéro interruption</span>.
        </>}
        metaTags={[
          "Responsable SI & Architecte logiciels",
          ".NET Core · API REST · RabbitMQ · SSIS · DDD",
          "18 sites de production en continu",
        ]}
      />

      <section className="pt-12 md:pt-20 pb-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetEnjeuSection imageSrc="/si-pasquier-1.webp" imageAlt="SI Pasquier — architecture AS400 monolithique">
            <p>
              L'ERP interne de Pasquier — AS400, deux datacenters propriétaires — centralisait
              la planification, l'ordonnancement, la gestion de production et la logistique sur
              {" "}<strong className="text-primary-blue">les mêmes tables de données</strong>.
              Des milliers de programmes cohabitaient sur un socle unique. Modifier une structure
              côté production provoquait des dysfonctionnements côté logistique, et inversement.
              Toute évolution du schéma de données était de fait{" "}
              <strong className="text-primary-blue">bloquée</strong>.
            </p>
            <p>
              Les équipes métiers étaient en friction permanente sur un socle qu'aucune ne pouvait
              faire évoluer indépendamment. Les nouveaux besoins s'accumulaient sans pouvoir être
              intégrés. Une première tentative de modernisation via ADELIA avait apporté des interfaces
              graphiques plus riches, mais sans toucher au problème de fond : le couplage structurel
              entre les données et les programmes.
            </p>
            <p>
              Le vrai défi n'est pas technique — il est organisationnel. Décorréler des périmètres
              métiers enchevêtrés depuis des décennies, sans jamais arrêter la production sur{" "}
              <strong className="text-primary-blue">18 sites qui dépendent de ce SI au quotidien</strong>.
            </p>
          </ProjetEnjeuSection>
        </div>
      </section>

      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetChiffreCleSection chiffres={[
            { valeur: "18", label: <>sites de production<br />en service continu</> },
            { valeur: "5 ans", label: <>de transformation<br />progressive</> },
            { valeur: "2030", label: <>trajectoire posée<br />et séquencée</> },
          ]} />
        </div>
      </section>

      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetApprocheSection imageSrc="/si-pasquier-2.webp" imageAlt="SI Pasquier — architecture macro-services">
            <ProjetApprocheParagraphe titre="Un pilote pour poser les standards">
              Le référentiel produit a été choisi comme première brique à découpler — premier
              module avec sa propre base de données, premier consommateur par les applications
              existantes et nouvelles. Ce n'était pas un choix anodin : c'est cette brique qui
              a posé les patrons d'architecture (API, Hexagonale, DDD, CQRS) et permis le premier
              décommissionnement de tables AS400. Tout le séquencement ultérieur s'appuie sur
              ce précédent.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="Séquencement par dépendance métier, pas par priorité politique">
              Référentiel produit, puis gestion de stocks, puis logistique, puis ordonnancement.
              L'ordre n'a pas été négocié — il a été déduit du graphe de dépendances. Chaque brique
              cohabite avec l'AS400 pendant la transition : l'ancien et le nouveau consomment
              le même référentiel. Cette cohabitation forcée est le prix d'une migration sans
              interruption, et elle impose une discipline de contrats d'API dès le premier jour.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="Trois types de flux selon la nature de l'échange">
              API REST par défaut pour les échanges synchrones entre modules. RabbitMQ pour
              les flux asynchrones et la diffusion broadcast multi-consommateurs — quand plusieurs
              modules doivent réagir au même événement sans se connaître. SSIS pour les migrations
              de données de masse nécessitant dénormalisation, tri, agrégation et performances
              en lecture sur du volume. Chaque type de flux répond à un besoin précis, pas à
              une préférence technique.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="Embarquer plusieurs dizaines de développeurs dans le changement">
              La dimension humaine a été aussi structurante que l'architecture. Plusieurs dizaines
              de développeurs métier — profils reconvertis depuis l'AS400 et nouveaux arrivants —
              ont été formés aux standards d'architecture, aux API, au CI/CD. Un comité
              d'urbanisation réunissant responsables de pôle et experts techniques arbitrait
              le séquencement et les choix inter-modules. La principale résistance n'était pas
              technique : c'était le cycle d'appropriation face à des habitudes ancrées depuis
              des années.
            </ProjetApprocheParagraphe>
          </ProjetApprocheSection>
        </div>
      </section>

      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetResultatsSection imageSrc="/si-pasquier-3.webp" imageAlt="SI Pasquier — résultats de la transformation" items={[
            "Plusieurs dizaines d'APIs en production par environnement (test, préprod, prod)",
            "Déploiements automatisés via CI/CD Azure DevOps — temps de mise en production réduit de jours à minutes",
            "Découplage effectif entre modules : fin des incidents en chaîne entre production et logistique",
            "Premières tables AS400 décommissionnées (référentiel produit)",
            "Équipes autonomes sur les standards techniques après le départ de la mission",
            "Trajectoire de migration posée et séquencée jusqu'à 2030",
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
