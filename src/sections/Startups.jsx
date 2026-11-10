
const startups = [
  {
    number: '01',
    status: 'EN ÉVOLUTION',
    category: 'STARTUP PERSONNELLE · SAAS',
    title: 'BOOKIZ',
    subtitle: 'La réservation, simplifiée.',
    description:
      'BOOKIZ est une plateforme SaaS de réservation conçue pour permettre aux clients de choisir un service, de renseigner leurs informations et d’effectuer leur réservation depuis un espace public intuitif.',
    details:
      'La plateforme dispose également d’une interface d’administration destinée à gérer les réservations et l’activité. Une nouvelle évolution du produit est prévue.',
    image: '/images/Bookiz.webp',
    technologies: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma'],
    link: '#contact',
    linkLabel: 'Discuter de BOOKIZ',
  },
  {
    number: '02',
    status: 'PLATEFORME EN LIGNE',
    category: 'STARTUP PERSONNELLE · HUB TECHNOLOGIQUE',
    title: 'QAVELYO',
    subtitle: 'Imaginons. Développons. Transformons.',
    description:
      'QAVELYO est un écosystème numérique conçu pour répondre à des besoins concrets à travers des produits et services technologiques accessibles.',
    details:
      'La plateforme propose notamment QAVELYO CV, un créateur de CV professionnel avec téléchargement PDF ; QAVELYO Link, une page personnalisable pour centraliser et partager ses liens ; et QAVELYO Share, un outil de transfert de fichiers entre appareils sans inscription ni câble.',
    image: '/images/logo.webp',
    technologies: [
      'QAVELYO CV',
      'QAVELYO Link',
      'QAVELYO Share',
      'Développement web',
      'Solutions numériques',
    ],
    link: 'https://qavelyo.onrender.com/',
    linkLabel: 'Découvrir QAVELYO',
  },
]

function Startups() {
  return (
    <section className="startups section" id="startups">
      <div className="section-heading">
        <span className="section-label">
          ENTREPRENEURIAT · PRODUITS NUMÉRIQUES
        </span>

        <h2>
          Mes startups
          <span> & produits.</span>
        </h2>

        <p>
          Des idées transformées en produits numériques,
          imaginés pour répondre à des besoins concrets.
        </p>
      </div>

      <div className="startups-grid">
        {startups.map((startup) => (
          <article className="startup-card" key={startup.number}>
            <div className="startup-visual">
              <img
                src={startup.image}
                alt={`Aperçu de ${startup.title}`}
                loading="lazy"
              />

              <span className="startup-number">
                {startup.number}
              </span>

              <span className="startup-status">
                <span className="startup-status-dot"></span>
                {startup.status}
              </span>
            </div>

            <div className="startup-content">
              <span className="startup-category">
                {startup.category}
              </span>

              <h3>{startup.title}</h3>

              <h4>{startup.subtitle}</h4>

              <p>{startup.description}</p>

              <p>{startup.details}</p>

              <div className="startup-technologies">
                {startup.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <a
                href={startup.link}
                className="startup-link"
                target={startup.link.startsWith('http') ? '_blank' : undefined}
                rel={startup.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {startup.linkLabel}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Startups
