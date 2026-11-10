
function Hero() {
  return (
    <section className="hero hero-premium" id="accueil">
      <div className="hero-content">
        <span className="hero-badge">
          <span className="status-dot"></span>
          Disponible pour de nouvelles opportunités
        </span>

        <p className="hero-intro">BONJOUR, JE SUIS</p>

        <h1>
          Amos <span>N'cho.</span>
        </h1>

        <h2>
          Je transforme vos idées
          <br />
          en <span>solutions digitales.</span>
        </h2>

        <p className="hero-description">
          Développeur Web & spécialiste en automatisation WhatsApp.
          Je conçois des expériences numériques modernes, des
          applications performantes et des systèmes intelligents.
        </p>

        <div className="hero-actions">
          <a href="#projets" className="btn-primary">
            Explorer mes projets <span aria-hidden="true">↗</span>
          </a>
          <a href="#contact" className="btn-secondary">
            Me contacter
          </a>
        </div>

       <div className="hero-socials">
  <a
    href="https://github.com/nchoamos216-cell"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.23 3.15 1.65.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/>
    </svg>
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/amos-n-cho-140436409/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.97V9h2.96v9.45ZM6.45 7.71a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.74h-2.96v-4.6c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.68H9.2V9h2.84v1.29h.04a3.12 3.12 0 0 1 2.8-1.54c3 0 3.57 1.97 3.57 4.53v5.17Z"/>
    </svg>
    LinkedIn
  </a>
    <a
    href="https://www.facebook.com/profile.php?id=61587634566869"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.2H7.5V13h2.7v8h3.3Z"
      />
    </svg>
    Facebook
  </a>

     <a
      href="https://www.tiktok.com/@amosncho3"
       target="_blank"
       rel="noreferrer"
       aria-label="TikTok"
      >
     <svg viewBox="0 0 24 24" aria-hidden="true">
       <path fill="currentColor" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.33V2h-3.55v13.67a2.9 2.9 0 0 1-2.9 2.9 2.9 2.9 0 1 1 2.9-2.9c0-.16-.02-.32-.04-.47V11.6a6.5 6.5 0 1 0 3.59 5.82V10.5a8.36 8.36 0 0 0 4.9 1.57V8.53a4.85 4.85 0 0 1-1.13-.13Z"/>
     </svg>
        TikTok
      </a>
    </div>
      </div>

      <div className="hero-visual hero-code-visual">

        {/* IDENTITÉ AN */}
        <div className="hero-tech-brand">
          <div className="hero-brand-orbit">
            <span>AN</span>
          </div>
          <h3>AMOS N'CHO</h3>
          <p>BUILDING DIGITAL EXPERIENCES</p>
        </div>

        {/* FENÊTRE DE CODE */}
        <div className="hero-code-window">
          <div className="code-window-header">
            <div className="code-dots">
              <i></i><i></i><i></i>
            </div>
            <span>amos-portfolio.jsx</span>
            <span className="code-status">LIVE</span>
          </div>

          <div className="code-window-body">
            <div><span className="code-number">01</span> <span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div>
            <div><span className="code-number">02</span> &nbsp; name: <span className="code-green">'Amos N’cho'</span>,</div>
            <div><span className="code-number">03</span> &nbsp; role: <span className="code-green">'Full Stack Developer'</span>,</div>
            <div><span className="code-number">04</span> &nbsp; frontend: <span className="code-green">'React & Next.js'</span>,</div>
            <div><span className="code-number">05</span> &nbsp; backend: <span className="code-green">'Node.js & API'</span>,</div>
            <div><span className="code-number">06</span> &nbsp; database: <span className="code-green">'PostgreSQL'</span>,</div>
            <div><span className="code-number">07</span> &nbsp; automation: <span className="code-green">'WhatsApp'</span>,</div>
            <div><span className="code-number">08</span> &nbsp; passion: <span className="code-cyan">'Innovation'</span></div>
            <div><span className="code-number">09</span> {'}'}</div>
            <div><span className="code-number">10</span> <span className="code-purple">export default</span> developer;</div>
          </div>

          <div className="code-window-footer">
            <span><i></i> System operational</span>
            <span>AN.DEV © 2026</span>
          </div>
        </div>

        {/* PANNEAU FRONTEND */}
        <div className="hero-tech-panel panel-frontend">
          <span className="tech-panel-label">01 / INTERFACE</span>
          <strong>Frontend Development</strong>
          <div className="tech-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
          </div>
        </div>

        {/* PANNEAU BACKEND */}
        <div className="hero-tech-panel panel-backend">
          <span className="tech-panel-label">02 / ENGINE</span>
          <strong>Backend Development</strong>
          <div className="tech-tags">
            <span>Node.js</span>
            <span>REST API</span>
            <span>Prisma</span>
          </div>
        </div>

        {/* PANNEAU DATABASE */}
        <div className="hero-tech-panel panel-database">
          <span className="tech-panel-label">03 / DATA</span>
          <strong>Database Management</strong>
          <div className="tech-tags">
            <span>PostgreSQL</span>
            <span>Prisma ORM</span>
          </div>
        </div>

        {/* PANNEAU OUTILS */}
        <div className="hero-tech-panel panel-tools">
          <span className="tech-panel-label">04 / WORKSPACE</span>
          <strong>Development Tools</strong>
          <div className="tech-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Figma</span>
          </div>
        </div>

        {/* PANNEAU DEPLOIEMENT */}
        <div className="hero-tech-panel panel-deploy">
          <span className="tech-panel-label">05 / PRODUCTION</span>
          <strong>Deployment & Hosting</strong>
          <div className="tech-tags">
            <span>Vercel</span>
            <span>Netlify</span>
            <span>Cloudflare</span>
          </div>
        </div>

        {/* PANNEAU AUTOMATISATION */}
        <div className="hero-tech-panel panel-automation">
          <span className="tech-panel-label">06 / INTELLIGENCE</span>
          <strong>WhatsApp Automation</strong>
          <div className="tech-tags">
            <span>WhatsApp Business</span>
            <span>UChat</span>
            <span>ManyChat</span>
          </div>
        </div>

        {/* PARCOURS DE DEVELOPPEMENT */}
        <div className="hero-workflow">
          <div className="workflow-heading">
            <span>MON PROCESSUS DE CRÉATION</span>
            <span>IDEA → LIVE</span>
          </div>

          <div className="workflow-steps">
            <div className="workflow-step">
              <span className="workflow-icon">✦</span>
              <strong>Design</strong>
              <small>Concevoir</small>
            </div>

            <span className="workflow-arrow">→</span>

            <div className="workflow-step">
              <span className="workflow-icon">⌘</span>
              <strong>Code</strong>
              <small>Développer</small>
            </div>

            <span className="workflow-arrow">→</span>

            <div className="workflow-step">
              <span className="workflow-icon">◈</span>
              <strong>Backend</strong>
              <small>Connecter</small>
            </div>

            <span className="workflow-arrow">→</span>

            <div className="workflow-step">
              <span className="workflow-icon">✓</span>
              <strong>Tests</strong>
              <small>Vérifier</small>
            </div>

            <span className="workflow-arrow">→</span>

            <div className="workflow-step">
              <span className="workflow-icon">▲</span>
              <strong>Deploy</strong>
              <small>Publier</small>
            </div>

            <span className="workflow-arrow">→</span>

            <div className="workflow-step workflow-live">
              <span className="workflow-icon">●</span>
              <strong>Live</strong>
              <small>En ligne</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero

