
function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <div className="privacy-container">
        <a href="/" className="privacy-back">
          ← Retour au portfolio
        </a>

        <header className="privacy-header">
          <span className="privacy-label">NEXUS · CONFIDENTIALITÉ</span>
          <h1>Politique de confidentialité</h1>
          <p>
            La protection de vos données personnelles est une priorité.
            Cette politique explique quelles informations sont collectées,
            pourquoi elles le sont et comment elles sont protégées.
          </p>
          <small>Dernière mise à jour : 9 novembre 2026</small>
        </header>

        <section className="privacy-section">
          <h2>1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données collectées sur ce
            portfolio est Amos N'cho, propriétaire et responsable du site
            NEXUS.
          </p>
          <p>
            Pour toute question relative à vos données personnelles ou pour
            exercer vos droits, vous pouvez écrire à :
          </p>
          <p>
            <a href="mailto:nchoamos216@gmail.com">
              nchoamos216@gmail.com
            </a>
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Données personnelles collectées</h2>
          <p>
            Selon le formulaire que vous utilisez, les informations suivantes
            peuvent être collectées :
          </p>

          <h3>Formulaire de prise de rendez-vous</h3>
          <ul>
            <li>Nom et prénom ;</li>
            <li>Adresse e-mail ;</li>
            <li>Numéro de téléphone, facultatif ;</li>
            <li>Date et heure souhaitées ;</li>
            <li>Message complémentaire, facultatif ;</li>
            <li>Code de suivi généré automatiquement.</li>
          </ul>

          <h3>Formulaire de contact</h3>
          <ul>
            <li>Nom ;</li>
            <li>Adresse e-mail ;</li>
            <li>Contenu du message.</li>
          </ul>

          <p>
            Des informations techniques peuvent également être transmises
            automatiquement aux services utilisés pour faire fonctionner
            le site, notamment l'adresse IP, le navigateur et les
            informations relatives à l'appareil.
          </p>
        </section>

        <section className="privacy-section">
          <h2>3. Finalités de la collecte</h2>
          <p>Vos informations sont utilisées uniquement pour :</p>
          <ul>
            <li>Recevoir et gérer les demandes de rendez-vous ;</li>
            <li>Vous contacter concernant votre demande ;</li>
            <li>Proposer une nouvelle date ou confirmer un rendez-vous ;</li>
            <li>Permettre le suivi de votre demande ;</li>
            <li>Répondre aux messages envoyés depuis le formulaire de contact ;</li>
            <li>Assurer la sécurité et le bon fonctionnement du site.</li>
          </ul>
          <p>
            Les informations ne sont pas destinées à être utilisées pour
            envoyer des communications publicitaires non sollicitées.
          </p>
        </section>

        <section className="privacy-section">
          <h2>4. Conservation des données</h2>

          <h3>Demandes de rendez-vous</h3>
          <p>
            Les informations relatives aux rendez-vous sont conservées
            pendant leur traitement. Lorsqu'un rendez-vous est terminé,
            sa date de fin est enregistrée. Les demandes marquées comme
            terminées sont programmées pour être supprimées après
            douze mois.
          </p>
          <p>
            Les demandes qui ne sont pas marquées comme terminées ne
            bénéficient pas encore de cette suppression automatique.
            Elles sont conservées le temps nécessaire à leur traitement
            et doivent faire l'objet d'un examen régulier.
          </p>

          <h3>Messages de contact</h3>
          <p>
            Les messages sont conservés jusqu'à la fin de l'échange avec
            leur expéditeur. Ils sont ensuite supprimés manuellement
            des soumissions Formspree et des éventuelles copies conservées.
          </p>

          <h3>Données de sécurité</h3>
          <p>
            Les informations techniques utilisées pour limiter les tentatives
            de consultation du suivi des rendez-vous sont programmées pour
            être supprimées après 24 heures.
          </p>
        </section>

        <section className="privacy-section">
          <h2>5. Services tiers et sous-traitants</h2>
          <p>
            Le fonctionnement du portfolio repose sur certains services
            externes susceptibles de traiter des informations techniques
            ou personnelles :
          </p>
          <ul>
            <li>
              <strong>Supabase :</strong> stockage des demandes de rendez-vous
              et gestion de certaines fonctionnalités de la base de données.
            </li>
            <li>
              <strong>Formspree :</strong> réception et traitement des
              messages envoyés depuis le formulaire de contact.
            </li>
            <li>
              <strong>Google Fonts :</strong> chargement des polices
              d'écriture du site.
            </li>
            <li>
              <strong>Font Awesome et Devicon :</strong> chargement
              de certaines icônes et ressources graphiques.
            </li>
          </ul>
          <p>
            Ces services peuvent recevoir certaines données techniques
            nécessaires à leurs prestations. Leurs propres politiques de
            confidentialité et conditions de traitement s'appliquent
            également. Selon leur infrastructure, des traitements peuvent
            avoir lieu en dehors de la Côte d'Ivoire.
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Sécurité des données</h2>
          <p>
            Des mesures techniques et organisationnelles sont mises en
            œuvre pour limiter les accès non autorisés, notamment :
          </p>
          <ul>
            <li>Des règles d'accès à la base de données ;</li>
            <li>Des politiques de sécurité au niveau des tables ;</li>
            <li>Une limitation des tentatives de consultation du suivi ;</li>
            <li>Une séparation des fonctionnalités publiques et administratives ;</li>
            <li>La suppression programmée de certaines données arrivées à expiration.</li>
          </ul>
          <p>
            Malgré ces précautions, aucun système informatique ne peut
            garantir une sécurité absolue.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. Cookies et stockage local</h2>
          <p>
            Le site utilise le stockage local du navigateur (localStorage)
            pour mémoriser votre préférence de thème, notamment le mode
            clair ou sombre.
          </p>
          <p>
            Cette préférence est conservée sur votre appareil jusqu'à ce
            que vous effaciez les données du site ou la modifiiez.
          </p>
          <p>
            Aucun outil de publicité ciblée ou de mesure d'audience n'a
            été identifié dans les fichiers du projet examinés.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. Vos droits</h2>
          <p>
            Conformément à la réglementation applicable en Côte d'Ivoire
            relative à la protection des données personnelles, vous pouvez
            notamment demander, selon les conditions prévues par la loi :
          </p>
          <ul>
            <li>L'accès aux données vous concernant ;</li>
            <li>La rectification des informations inexactes ;</li>
            <li>La suppression de vos données lorsque cela est applicable ;</li>
            <li>La limitation ou l'opposition à certains traitements ;</li>
            <li>Des informations sur l'utilisation de vos données.</li>
          </ul>
          <p>
            Pour exercer vos droits, contactez le responsable du traitement
            à l'adresse suivante :
          </p>
          <p>
            <a href="mailto:nchoamos216@gmail.com">
              nchoamos216@gmail.com
            </a>
          </p>
          <p>
            Vous pouvez également vous renseigner auprès de l'Autorité de
            Protection des Données à caractère Personnel (APDP) de Côte
            d'Ivoire.
          </p>
        </section>

        <section className="privacy-section">
          <h2>9. Modifications de cette politique</h2>
          <p>
            Cette politique peut être actualisée pour tenir compte de
            l'évolution du site, de ses fonctionnalités ou de la
            réglementation applicable. La date de dernière mise à jour
            sera modifiée en conséquence.
          </p>
        </section>

        <footer className="privacy-footer">
          <p>© {new Date().getFullYear()} Amos N'cho · NEXUS</p>
          <p>La transparence et le respect de votre vie privée comptent.</p>
        </footer>
      </div>
    </main>
  )
}

export default PrivacyPolicy
