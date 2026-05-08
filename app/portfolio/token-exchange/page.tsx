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

export default function ProjetTokenExchange() {
  return (
    <div className="min-h-screen bg-white">
      <div className="print:hidden">
        <Header />
      </div>

      <ProjetHeroSection
        eyebrow="Mobilité as a Service · 2024–2025"
        titleMain="Token Exchange"
        titleAccent="OAuth2"
        description={<>
          Conception d'un flux de délégation inter-IdP pour un éditeur MaaS —
          appel d'API partenaire au nom de l'utilisateur, <span className="text-white">sans credentials stockés</span>,
          sans briser la chaîne d'identité.
        </>}
        metaTags={[
          "Architecte IAM & Solution",
          "Keycloak · RFC 8693 · OAuth2 PKCE · JWT",
          "Multi-région · Data residency",
        ]}
      />

      <section className="pt-12 md:pt-20 pb-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetEnjeuSection imageSrc="/token-exchange-1.webp" imageAlt="Token Exchange OAuth2 — flux de délégation inter-IdP">
            <p>
              La plateforme MaaS devait permettre à ses utilisateurs de s'authentifier
              via l'IdP d'un partenaire — billettique, monétique, mobilité intelligente —
              puis d'appeler l'API de ce partenaire depuis le backend du MaaS, au nom
              de l'utilisateur authentifié. Deux réalms distincts, deux émetteurs de tokens,
              une seule session côté utilisateur.
            </p>
            <p>
              La solution naïve aurait consisté à stocker des credentials partenaire
              côté backend et à les réutiliser pour chaque appel. C'est précisément ce
              que l'architecture ne pouvait pas se permettre : le partenaire ne délègue
              pas un compte de service — il attend que l'appelant soit identifiable comme
              l'utilisateur réel. Un proxy de credentials brise cette exigence, expose
              l'ensemble des utilisateurs en cas de compromission, et rend l'audit
              des appels API intraçable.
            </p>
            <p>
              L'authentification existante du client, reposant sur Supabase, n'offrait
              aucune surface d'extension pour ce type de délégation inter-services.
              Le problème ne se réduisait pas à de l'intégration : il s'agissait de
              concevoir un flux d'identité correct, conforme à un standard, et déployable
              dans une architecture multi-région à data residency stricte — trois instances
              isolées, Europe, Canada, États-Unis, sans partage d'état d'authentification.
            </p>
          </ProjetEnjeuSection>
        </div>
      </section>

      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetChiffreCleSection chiffres={[
            { valeur: "0", label: <>credential partenaire<br />stocké côté client</> },
            { valeur: "1", label: <>commande pour<br />lancer le POC complet</> },
            { valeur: "3", label: <>régions prêtes à<br />recevoir le déploiement</> },
          ]} />
        </div>
      </section>

      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetApprocheSection 
            imageSrc="/token-exchange-2.webp" 
            imageAlt="Token Exchange OAuth2 — architecture 3-clients Keycloak">
            <ProjetApprocheParagraphe titre="RFC 8693 comme primitive, pas comme contournement">
              Le Token Exchange (RFC 8693) existe précisément pour ce cas : échanger
              un token issu d'un realm contre un token accepté par un autre, en conservant
              l'identité du sujet d'origine. Ce n'est pas un raccourci — c'est le mécanisme
              standard de délégation inter-domaines d'identité. L'adopter signifiait
              ne rien inventer : le comportement attendu, les claims à propager,
              les validations à effectuer sont spécifiés. Le partenaire peut auditer
              chaque appel et retrouver l'utilisateur réel — pas un compte système intermédiaire.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="Architecture 3-clients avec audiences strictes">
              Trois clients Keycloak distincts, chacun avec un rôle précis : le client
              public PKCE pour l'application frontend (aucun secret côté navigateur),
              le client confidentiel qui initie l'échange de token depuis le backend
              du MaaS, et le client cible dans le realm partenaire qui accepte le token
              échangé. Les audiences sont déclarées explicitement — un token émis pour
              le client initiateur ne peut pas être présenté au client cible. Cette
              séparation n'est pas défensive : elle empêche structurellement toute
              élévation de privilèges, même accidentelle.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="Backchannel logout bidirectionnel">
              Quand un utilisateur se déconnecte depuis l'application MaaS, sa session
              dans le realm partenaire doit être invalidée — et réciproquement. Sans
              cette propagation, la déconnexion est partielle : le token partenaire
              reste valide jusqu'à expiration, ce qui crée une fenêtre d'utilisation
              non supervisée. Le backchannel logout garantit que la déconnexion
              d'un côté invalide les sessions des deux realms, sans dépendre du
              navigateur ou d'une redirection que l'utilisateur pourrait ne pas compléter.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="POC reproductible comme artefact de référence">
              Le flux implique deux stacks Keycloak, un middleware JWT, un service
              de token exchange, et une application OIDC complète. Chaque composant
              introduit une surface de configuration susceptible de diverger entre
              environnements. Livrer un POC exécutable en une commande — deux stacks
              simulées, TLS local avec certificats wildcard, résolution DNS
              multi-domaines — avait un objectif précis : que les équipes Canada et
              Europe puissent déployer leurs instances en partant d'une configuration
              validée, sans reconstituer le raisonnement à partir de zéro.
            </ProjetApprocheParagraphe>
          </ProjetApprocheSection>
        </div>
      </section>

      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetResultatsSection imageSrc="/token-exchange-3.webp" imageAlt="Token Exchange OAuth2 — vue 3" items={[
            "Flow complet validé en staging : authentification partenaire → token MaaS → token exchange → appel API partenaire avec propagation correcte de l'identité utilisateur",
            "Aucun credential partenaire stocké côté client, aucun proxy maison — la chaîne d'identité est intacte à chaque appel",
            "POC livré comme référence d'implémentation pour les déploiements Canada et Europe, exécutable sans configuration manuelle",
            "Équipe autonome sur les sujets IAM à l'issue de la prestation — middleware JWT, service de token exchange, validation du flow d'authentification",
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
