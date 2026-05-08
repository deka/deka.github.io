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

export default function ProjetCMP() {
  return (
    <div className="min-h-screen bg-white">
      <div className="print:hidden">
        <Header />
      </div>

      <ProjetHeroSection
        eyebrow="Hébergement & Infrastructure Cloud · 2024–2025"
        titleMain="Cloud Management"
        titleAccent="Platform"
        description={<>
          Plateforme de gestion d'infrastructure cloud privée pour environnements
          à exigences normatives fortes — <span className="text-white">ISO 27001, HDS</span>.
        </>}
        metaTags={[
          "Tech Lead & Architecte solution",
          "Nutanix · Keycloak · OAuth2 PKCE · CQRS",
          "Conformité ISO 27001 / HDS",
        ]}
      />

      <section className="pt-12 md:pt-20 pb-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetEnjeuSection imageSrc="/cmp-1.webp" imageAlt="Cloud Management Platform — interface self-service">
            <p>
              Sur une infrastructure Nutanix mutualisée, les clients hébergés n'avaient aucun
              accès direct à leur environnement. Toute opération — ajout de CPU, extension
              mémoire, redimensionnement disque — passait par un ticket support. Le délai
              moyen constaté était de 48 à 72 heures pour des actions qui, techniquement,
              prennent quelques secondes.
            </p>
            <p>
              Ce n'était pas un problème de capacité infrastructure. C'était un problème
              d'architecture d'accès. Les équipes ITC absorbaient une charge répétitive sans
              valeur ajoutée, les clients subissaient une dépendance opérationnelle totale,
              et l'ensemble du système était inadapté à une croissance du parc hébergé.
            </p>
            <p>
              La difficulté n'était pas de donner un accès — c'était d'en donner un qui soit
              strictement borné, auditable à chaque action, et conforme aux exigences d'une
              certification HDS. Dans ce contexte, une erreur d'isolation entre deux clients
              hébergés n'est pas un bug — c'est un incident de sécurité.
            </p>
          </ProjetEnjeuSection>
        </div>
      </section>

      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetChiffreCleSection chiffres={[
            { valeur: "72h", label: <>délai moyen avant<br />toute modification de VM</> },
            { valeur: "<2 min", label: <>délai en self-service<br />après déploiement</> },
            { valeur: "100%", label: <>Sécurisé</> },
          ]} />
        </div>
      </section>

      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetApprocheSection imageSrc="/cmp-2.webp" imageAlt="Cloud Management Platform — architecture IAM">
            <ProjetApprocheParagraphe titre="Isolation multi-tenant par construction">
              L'isolation n'est pas imposée par des règles de validation — elle est
              rendue structurellement impossible à contourner. Chaque requête est
              scopée à une organisation avant d'atteindre le handler. Les endpoints
              Admin et Client sont distincts, sans surface partagée. Un client ne
              peut pas voir les ressources d'un autre, même avec un token valide,
              parce que la requête ne peut physiquement pas traverser la frontière.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="CQRS et handlers isolés par cas d'usage">
              Chaque opération — démarrer une VM, étendre un disque, créer un
              snapshot — vit dans son propre handler. Les effets de bord sont
              contenus, le mapping HTTP est centralisé, et les erreurs métier
              remontent comme valeurs plutôt que comme exceptions. Ce choix rend
              le comportement de chaque endpoint prévisible et testable
              indépendamment, ce qui est une contrainte forte dans un environnement
              où chaque action modifie de l'infrastructure réelle.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="Traçabilité transversale sans discipline d'équipe requise">
              L'audit trail couvre toutes les opérations d'écriture — utilisateur,
              organisation, action, correlation ID, timestamp — sans que chaque
              développeur ait à y penser. Trois processors globaux interceptent le
              cycle de vie de chaque requête : timing, lifecycle log, audit.
              La conformité est une propriété du pipeline, pas une convention fragile.
              C'est ce qui permet de produire un dossier architecture HDS défendable.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="Opérations asynchrones sans blocage client">
              L'API Nutanix est asynchrone par nature — une opération de modification
              de VM retourne immédiatement un identifiant de tâche, pas un résultat.
              Plutôt que de masquer ce comportement derrière un polling côté serveur
              qui aurait tenu des connexions ouvertes, un mécanisme de task polling
              expose le statut en temps réel côté client. L'utilisateur voit
              la progression de son opération — en cours, succès, erreur — sans
              attendre, sans bloquer, sans ambiguïté.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="Sécurité native, pas ajoutée après coup">
              OAuth2 PKCE pour les SPA (pas de secret côté navigateur), JWT RS256
              avec vérification d'issuer, MFA TOTP pour les clients et WebAuthn
              pour les administrateurs, chiffrement AES-256-GCM au repos,
              TLS 1.2+ avec HSTS. Ces choix ne sont pas une liste de cases cochées
              pour la certification — ils correspondent chacun à un vecteur d'attaque
              précis, documenté dans le dossier sécurité remis aux équipes conformité.
            </ProjetApprocheParagraphe>
          </ProjetApprocheSection>
        </div>
      </section>

      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetResultatsSection imageSrc="/cmp-3.webp" imageAlt="Cloud Management Platform — vue 3" items={[
            "Toutes les opérations VM ramenées de 48–72h à moins de 2 minutes, sans intervention des équipes ITC",
            "Self-service complet : dimensionnement CPU/RAM/disque, actions d'alimentation, snapshots — isolation multi-tenant validée sur chaque opération",
            "Dossier architecture sécurité et DAA livrés et validés par les équipes conformité — ISO 27001 et HDS",
            "Socle IAM opérationnel : Keycloak 26, PKCE, MFA, fédération LDAP, expiration de session — prêt pour une montée en charge du parc hébergé",
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
