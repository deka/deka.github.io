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

export default function ProjetPluginSupportN1() {
  return (
    <div className="min-h-screen bg-white">
      <div className="print:hidden">
        <Header />
      </div>

      <ProjetHeroSection
        eyebrow="Éditeur Logiciel B2B · 2026"
        titleMain="Automatisation du"
        titleAccent="Support N1"
        description={<>
          Plugin Claude Code déployable en une commande, automatisant le tri, l'analyse
          et la préparation de réponse des tickets Zoho — <span className="text-white">sans infrastructure centrale, sans envoi IA</span>.
        </>}
        metaTags={[
          "Consultant & Architecte IA",
          "Claude Code · TypeScript · Zoho Desk API · Tesseract · MariaDB",
          "Plug-and-play, cross-platform, zéro serveur central",
          "Architecture frugale : OCR et appels Zoho hors LLM, zéro token gaspillé",
        ]}
      />

      {/* Enjeu */}
      <section className="pt-12 md:pt-20 pb-0 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetEnjeuSection imageSrc="/plugin-support-n1-1.webp" imageAlt="Plugin Support N1 — interface ticket Zoho">
            <p>
              Une petite équipe support traitait plusieurs dizaines de tickets par semaine via Zoho Desk.
              Pour chaque ticket entrant, l'agent devait manuellement croiser{" "}
              <strong className="text-primary-blue">quatre systèmes distincts</strong>{" "}
              : le CRM pour l'historique client, les logs applicatifs pour le contexte technique,
              la base de données MariaDB pour les données métier, et la base de code pour comprendre
              le comportement attendu. Tri, accusé de réception, analyse, demande de renseignements
              complémentaires, escalade — chaque étape était manuelle.
            </p>
            <p>
              Le coût par ticket n'était pas dans le traitement lui-même, mais dans la reconstitution
              du contexte : assembler des informations dispersées sur des systèmes sans pont entre eux
              prenait{" "}
              <strong className="text-primary-blue">45 à 60 minutes par ticket N1</strong>,
              y compris pour des cas standards et répétitifs. La charge absorbait l'équipe
              sans lui laisser de capacité pour les cas complexes qui en valaient la peine.
            </p>
            <p>
              La contrainte structurante du projet était claire dès le départ : déléguer l'envoi
              d'emails à un agent IA était exclu. La maîtrise de la communication client était
              non négociable — toute solution qui contournait ce point, même avec les meilleures
              intentions, était{" "}
              <strong className="text-primary-blue">inacceptable par conception, pas par consigne</strong>.
            </p>
          </ProjetEnjeuSection>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetChiffreCleSection chiffres={[
            { valeur: "5 min", label: <>temps de traitement N1<br />après déploiement</> },
            { valeur: "0 token", label: <>consommé par l'OCR<br />et les appels Zoho</> },
            { valeur: "4", label: <>systèmes intégrés<br />en source unique</> },
          ]} />
        </div>
      </section>

      {/* Approche */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetApprocheSection imageSrc="/plugin-support-n1-2.webp" imageAlt="Plugin Support N1 — architecture CLI et skills">
            <ProjetApprocheParagraphe titre="Un plugin installable sans infrastructure centrale">
              La contrainte de déploiement était forte : l'équipe ne voulait pas gérer un serveur
              supplémentaire. Le plugin devait s'installer en un{" "}
              <code>/plugin install</code>, fonctionner identiquement sur Windows, Mac et Linux,
              et ne dépendre d'aucun service central. La CLI TypeScript est bundlée en CJS
              self-contained via esbuild — zéro dépendance runtime, zéro setup post-installation.
              Ce choix a également éliminé toute question de disponibilité : le plugin fonctionne
              en local, avec les credentials de l'agent, sans point de défaillance partagé.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="Frugalité tokens : opérations déterministes, LLM réservé à l'analyse">
              La philosophie de l'architecture est la frugalité : chaque token consommé doit
              correspondre à une tâche de raisonnement que seul un LLM peut faire. Les appels
              à l'API Zoho — lecture de ticket, recherche, écriture de brouillon — sont
              déterministes et ne passent pas par le modèle. Ils ne consomment aucun token.
              Le LLM reçoit un contexte déjà assemblé et structuré, et n'intervient que sur
              l'analyse et la synthèse. Ce parti pris rend également le comportement des
              opérations prévisible et testable indépendamment du modèle.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="Brouillons idempotents — l'humain envoie, l'IA prépare">
              La contrainte de maîtrise de la communication client est tenue par construction :
              le plugin prépare un brouillon Zoho via{" "}
              <code>PATCH</code> (idempotent, jamais d'empilement),
              jamais envoyé. L'agent support valide et envoie depuis l'UI Zoho, en un clic.
              Quatre templates couvrent les cas standards : accusé de réception, demande de
              complément, relance, escalade N2. La guardrail n'est pas une consigne dans
              un prompt — c'est une limite technique dans le code.
            </ProjetApprocheParagraphe>
            <ProjetApprocheParagraphe titre="OCR local, zéro token — Tesseract traite les pièces jointes hors LLM">
              L'extraction du contenu des pièces jointes (images, PDF scannés) est réalisée
              localement par Tesseract et Poppler — sans passer par le modèle, sans consommer
              un seul token. Le résultat est un sidecar <code>.md</code> directement
              consommable. Le MCP MariaDB est configuré en read-only — les données métier
              sont accessibles pour le diagnostic sans risque d'écriture accidentelle.
              En une commande d'initialisation du dossier de travail, l'agent dispose d'un
              contexte unifié depuis le CRM, les logs, la base de données et la base de code
              — ce qui prenait 45 minutes à rassembler manuellement.
            </ProjetApprocheParagraphe>
          </ProjetApprocheSection>
        </div>
      </section>

      {/* Résultats */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ProjetResultatsSection imageSrc="/plugin-support-n1-3.webp" imageAlt="Plugin Support N1 — brouillon Zoho prêt à envoyer" items={[
            "Temps de traitement N1 ramené de 45–60 minutes à 5 minutes par ticket, sans perte de qualité de réponse",
            "Support N1 opérationnel en autonomie sur les cas standards — tri, analyse RCA, brouillon prêt en une commande",
            "Maîtrise de la communication client préservée : aucun email envoyé par l'IA, validation humaine obligatoire avant envoi depuis l'UI Zoho",
            "Équipe dimensionnée pour absorber la croissance du volume : 1 agent au lancement, montée à 3 prévue fin 2026 sans recrutement proportionnel",
            "Architecture frugale : OCR via Tesseract et appels Zoho exécutés hors LLM — zéro token consommé sur les opérations déterministes, modèle réservé à l'analyse",
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
