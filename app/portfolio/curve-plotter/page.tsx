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

export default function ProjetCurvePlotter() {
  return (
    <div className="min-h-screen bg-white">
      <div className="print:hidden">
        <Header />
      </div>

      <ProjetHeroSection
        eyebrow="Industrie · Automatisme embarqué"
        titleMain="Visualisation de données"
        titleAccent="industrielles"
        description={<>
          Refonte d'une interface de consultation de courbes sur automates Wago —
          <span className="text-white"> temps de chargement divisé par 30</span>,
           API ouverte exploitable par d'autres outils métier.
        </>}
        metaTags={[
          "Conception & développement full-stack",
          "Rust · Nuxt 4 · MessagePack · ECharts",
          "ARMv7 · AArch64 · x86_64 — binaire statique",
        ]}
      />

      <section className="pt-12 md:pt-20 pb-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetEnjeuSection imageSrc="/curve-plotter-1.webp" imageAlt="Curve Plotter — interface de visualisation embarquée sur automate Wago">
            <p>
              Les automates Wago déployés sur site produisent en continu des mesures
              process — températures, débits, pressions, états d'équipement. Une première
              version permettait déjà de consulter ces courbes depuis un navigateur,
              mais l'architecture reposait sur un postulat qui ne tenait pas à l'échelle :{" "}
              <strong className="text-primary-blue">la base SQLite était transférée intégralement côté navigateur</strong>{" "}
              à chaque consultation. Sur des historiques de plusieurs semaines, cela
              se traduisait par plus de{" "}
              <strong className="text-primary-blue">30 secondes d'attente</strong>{" "}
              avant d'afficher la moindre courbe — inacceptable en contexte opérationnel.
            </p>
            <p>
              Le problème de performance n'était pas seulement une question de confort.
              Chaque écriture provoquait des accès intensifs à la carte SD embarquée,
              le seul support de stockage de l'automate. Les cartes SD industrielles
              ont un nombre de cycles d'écriture limité : des écritures massives et répétées
              accélèrent leur usure et exposent l'installation à un risque réel de
              corruption des données historiques — sans avertissement préalable.
            </p>
            <p>
              L'application était par ailleurs couplée à Nuxt UI Pro, une bibliothèque
              sous licence commerciale à renouveler, sur un composant qui n'en justifiait
              pas le coût. La combinaison des deux contraintes — performances et dépendance
              propriétaire —{" "}
              <strong className="text-primary-blue">rendait la solution non maintenable à long terme</strong>.
            </p>
          </ProjetEnjeuSection>
        </div>
      </section>

      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetChiffreCleSection chiffres={[
            { valeur: ">30×", label: <>réduction du temps<br />de chargement</> },
            { valeur: "3", label: <>architectures cibles</> },
            { valeur: "0", label: <>dépendance système<br />0 licence propriétaire</> },
          ]} />
        </div>
      </section>

      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetApprocheSection
            imageSrc="/curve-plotter-2.webp"
            imageAlt="Curve Plotter — architecture API Rust embarquée multi-arch">
            <ProjetApprocheParagraphe titre="Déplacer le traitement là où les données sont">
              La racine du problème n'était pas le frontend — c'était l'absence de
              backend. Confier à l'automate lui-même le filtrage et la sérialisation
              des données réglait structurellement la question des performances : seule
              la plage demandée transite sur le réseau. Le binaire Rust est compilé en statique pour trois
              architectures — ARMv7 (Wago PFC), AArch64 (edge Raspberry Pi), x86_64
              (Linux générique) — sans aucune dépendance système.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="Format adaptatif selon le volume de données">
              Sérialiser en JSON est correct pour des plages courtes ; ça devient un
              goulot d'étranglement sur des historiques longs. L'API sélectionne
              automatiquement le format de sérialisation selon le volume estimé — JSON
              pour les petites fenêtres, MessagePack binaire au-delà. La structure
              de réponse est column-oriented : un tableau par variable, directement
              exploitable par ECharts sans transformation côté client. Le frontend
              ne reçoit que ce qu'il peut afficher.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="API ouverte, pas une API interne">
              L'interface graphique n'est qu'un consommateur parmi d'autres possibles.
              L'API expose un contrat OpenAPI standard — elle peut être interrogée
              par des scripts de synchronisation, des outils de supervision externe,
              ou des exports métier sans passer par le navigateur. Ce choix découple
              la valeur des données de la couche de visualisation : la chaîne
              de traitement peut s'étendre sans refonte.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="Frontend allégé, déploiement de fichiers statiques">
              La migration de Nuxt UI Pro vers Nuxt UI v4 open source a supprimé
              le coût de licence sans régression fonctionnelle. L'application est
              générée statiquement et servie par le serveur web intégré de l'automate `lighttpd` —
              Node.js n'est pas requis en production. Un script unique installe
              l'ensemble sur la cible.
            </ProjetApprocheParagraphe>
          </ProjetApprocheSection>
        </div>
      </section>

      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetResultatsSection imageSrc="/curve-plotter-3.webp" imageAlt="Curve Plotter — résultats et déploiement terrain" items={[
            "Temps de chargement ramené de plus de 30 secondes à moins d'une seconde sur les plages courantes",
            "Accès carte SD limités aux seules requêtes actives — usure réduite, risque de corruption éliminé",
            "API OpenAPI autonome, interrogeable par des outils tiers sans passer par l'interface graphique",
            "Coût de licence Nuxt UI Pro supprimé, remplacé par une dépendance open source fonctionnellement équivalente",
            "Même solution déployable sur Wago PFC, Raspberry Pi ou serveur Linux générique sans adaptation",
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
