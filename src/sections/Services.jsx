
const services = [
  {
    number: '01',
    icon: '✦',
    title: 'Développement Web',
    description:
      'Conception de sites web modernes, élégants et responsives pour présenter votre activité, valoriser votre image et attirer vos clients.',
  },
  {
    number: '02',
    icon: '⌘',
    title: 'Applications Web',
    description:
      'Création d’applications web interactives et de plateformes sur mesure, adaptées à vos processus et aux besoins de vos utilisateurs.',
  },
  {
    number: '03',
    icon: '◈',
    title: 'Automatisation WhatsApp',
    description:
      'Mise en place de chatbots intelligents pour automatiser les échanges, accompagner vos clients et simplifier vos réservations.',
  },
  {
    number: '04',
    icon: '▣',
    title: 'Intégration Responsive',
    description:
      'Adaptation de vos interfaces aux ordinateurs, tablettes et smartphones pour offrir une expérience fluide sur tous les écrans.',
  },
  {
    number: '05',
    icon: '⚡',
    title: 'Optimisation Web',
    description:
      'Amélioration des performances, de la structure et de l’expérience utilisateur pour rendre vos plateformes plus efficaces.',
  },
  {
    number: '06',
    icon: '✧',
    title: 'Maintenance Web',
    description:
      'Suivi technique, corrections, mises à jour et évolutions pour assurer la fiabilité et la pérennité de vos projets.',
  },
]

function Services() {
  return (
    <section className="services section" id="services">
      <div className="section-heading">
        <span className="section-label">CE QUE JE PROPOSE</span>

        <h2>
          Mes <span>services.</span>
        </h2>

        <p>
          Des solutions digitales conçues pour développer votre
          présence en ligne et faire évoluer votre activité.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-top">
              <span className="service-icon">{service.icon}</span>
              <span className="service-number">{service.number}</span>
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#contact" className="service-link">
              Discutons de votre projet
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
