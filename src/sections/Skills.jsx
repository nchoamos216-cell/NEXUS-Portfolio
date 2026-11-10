
const skillGroups = [
  {
    number: '01',
    title: 'Frontend Development',
    description: 'Concevoir des interfaces modernes, fluides et interactives, pensées pour offrir une excellente expérience utilisateur.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 6.5h.01M11 6.5h.01" />
        <path d="m9 13-2 2 2 2M15 13l2 2-2 2" />
      </svg>
    ),
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'TypeScript'],
  },
  {
    number: '02',
    title: 'Backend & Database',
    description: 'Développer la logique serveur, créer des API et structurer les données pour des applications fiables.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </svg>
    ),
    skills: ['Node.js', 'PostgreSQL', 'Prisma', 'API REST'],
  },
  {
    number: '03',
    title: 'Design & Tools',
    description: 'Utiliser les outils de conception et de développement pour organiser, construire et faire évoluer des projets.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3 2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2L12 3Z" />
        <path d="m19 2 .8 2.2L22 5l-2.2.8L19 8l-.8-2.2L16 5l2.2-.8L19 2Z" />
      </svg>
    ),
    skills: ['Git', 'GitHub', 'Figma', 'VS Code', 'Responsive Design'],
  },
  {
    number: '04',
    title: 'WhatsApp Automation',
    description: 'Automatiser les conversations professionnelles et créer des parcours interactifs pour faciliter les échanges.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.1-5.3A8.4 8.4 0 1 1 21 11.5Z" />
        <path d="M8.5 9c.5 2.5 2 4 4.5 4.5" />
        <path d="M8.5 9c.3-.8.8-1.2 1.2-1.2l1.1 1.8-1 1M13 13.5l1-1 1.8 1.1c0 .5-.4.9-1.2 1.2" />
      </svg>
    ),
    skills: ['WhatsApp Business', 'Chatbots', 'ManyChat', 'UChat'],
  },
]

function Skills() {
  return (
    <section className="skills section" id="competences">
      <div className="section-heading">
        <span className="section-label">MON EXPERTISE</span>

        <h2>
          Compétences <span>techniques.</span>
        </h2>

        <p>
          Un ensemble de technologies et d'outils que je mobilise
          pour concevoir et développer des solutions digitales
          modernes et performantes.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.number}>
            <div className="skill-card-top">
              <div className="skill-icon">
                {group.icon}
              </div>

              <span className="skill-number">
                {group.number}
              </span>
            </div>

            <h3>{group.title}</h3>

            <p>{group.description}</p>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
