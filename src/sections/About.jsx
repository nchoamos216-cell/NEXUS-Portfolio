
function About() {
  return (
    <section className="about section" id="apropos">
      <div className="section-heading">
        <span className="section-label">
          MON UNIVERS · MON PARCOURS · MA VISION
        </span>

        <h2>
          Derrière le code,
          <span> une vision.</span>
        </h2>

        <p className="section-description">
          Découvrez mon parcours, mon approche du développement
          et ce qui me pousse à créer des solutions digitales.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-main">
          <span className="about-number">
            01 / QUI SUIS-JE ?
          </span>

          <h3>
            Je suis Amos N'cho,
            <span> créateur de solutions digitales.</span>
          </h3>

          <p>
            Passionné par les technologies et le développement web,
            je conçois des expériences numériques modernes et des
            applications pensées pour répondre à de véritables besoins.
          </p>

          <p>
            Mon travail couvre le développement d'interfaces web,
            la création de fonctionnalités côté serveur et la gestion
            des données. Je m'intéresse également à l'automatisation
            des échanges professionnels grâce aux chatbots WhatsApp.
          </p>

          <p>
            Mon ambition est simple : transformer des idées en
            solutions fiables, utiles et agréables à utiliser.
          </p>

          <div className="about-signature">
            <span className="about-signature-line"></span>
            <span>AMOS N'CHO</span>
            <small>WEB DEVELOPER · DIGITAL AUTOMATION</small>
          </div>
        </div>

        
<div className="about-details">
  <div className="about-card">
    <div className="about-card-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m2 10 10-5 10 5-10 5-10-5Z" />
        <path d="M6 12v5c3.5 2.5 8.5 2.5 12 0v-5" />
        <path d="M22 10v6" />
      </svg>
    </div>
    <span>01 — FORMATION</span>
    <h4>Sciences informatiques</h4>
    <p>Licence</p>
  </div>

  <div className="about-card">
    <div className="about-card-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 8-5 4 5 4" />
        <path d="m16 8 5 4-5 4" />
        <path d="m14 4-4 16" />
      </svg>
    </div>
    <span>02 — DÉVELOPPEMENT</span>
    <h4>Web & Applications</h4>
    <p>React · JavaScript · Next.js · Node.js</p>
  </div>

  <div className="about-card">
    <div className="about-card-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="3" />
        <path d="M12 3v4M8 13h.01M16 13h.01M9 17h6" />
        <path d="M1 11v5M23 11v5" />
      </svg>
    </div>
    <span>03 — AUTOMATISATION</span>
    <h4>Solutions WhatsApp</h4>
    <p>Chatbots · UChat · ManyChat</p>
  </div>

  <div className="about-card">
    <div className="about-card-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 19c4-1 9-5 11-11 1-3 4-5 6-5-1 5-2 8-5 11-3 3-7 5-12 5Z" />
        <path d="M5 19c0-4 2-7 5-9" />
        <path d="m14 5 5 5" />
      </svg>
    </div>
    <span>04 — MA VISION</span>
    <h4>Innovation & Impact</h4>
    <p>Créer des outils numériques utiles et performants</p>
  </div>
</div>

      </div>
    </section>
  )
}

export default About
