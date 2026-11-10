
const projects = [
  {
    number: '01',
    category: 'AUTOMATISATION WHATSAPP · ENTREPRISE',
    title: 'Business Car',
    description:
      'Développement d’un assistant conversationnel WhatsApp qui accompagne les clients de leur première demande jusqu’à la réservation et à la mise à disposition du chauffeur.',
    image: 'public/images/Business.webp',
    technologies: ['WhatsApp', 'ManyChat', 'Automatisation'],
    link: 'https://wa.me/2250501995454?text=Bonjour%2C%20je%20souhaite%20effectuer%20une%20r%C3%A9servation%20avec%20Business%20Car.',
    linkLabel: 'Tester l’assistant WhatsApp',
    external: true,
  },
  {
    number: '02',
    category: 'SITE WEB · ENTREPRISE',
    title: 'NANAH IVOIRE GADGETS',
    description:
      'Réalisation du site web d’une entreprise ivoirienne spécialisée dans la personnalisation, afin de présenter son activité et renforcer sa présence en ligne.',
    image: 'public/images/nanah.webp',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://nanahivoiregadgets.com',
    linkLabel: 'Visiter le site officiel',
    external: true,
  },
]

function Projects() {
  return (
    <section className="projects section" id="projets">
      <div className="section-heading">
        <span className="section-label">
          PORTFOLIO · MES RÉALISATIONS
        </span>

        <h2>
          Des projets,
          <span> des solutions concrètes.</span>
        </h2>

        <p>
          Des solutions digitales conçues et développées pour répondre
          aux besoins réels des entreprises.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            className="project-card reveal-on-scroll"
            key={project.number}
            style={{ '--delay': `${index * 0.2}s` }}
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={`Aperçu du projet ${project.title}`}
                loading="lazy"
              />

              <span className="project-number">
                {project.number}
              </span>
            </div>

            <div className="project-content">
              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <a
                href={project.link}
                className="project-link"
                aria-label={`${project.linkLabel} — ${project.title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.linkLabel}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
