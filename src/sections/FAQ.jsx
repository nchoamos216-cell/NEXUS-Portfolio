import { useState } from 'react'

const faqCategories = [
  {
    id: 'services',
    label: 'Services',
    icon: '✦',
    questions: [
      {
        question: 'Quels services proposes-tu ?',
        answer: 'Je propose la création de sites web modernes, le développement d’applications web sur mesure, l’automatisation WhatsApp, l’intégration responsive, l’optimisation et la maintenance web.'
      },
      {
        question: 'Peux-tu créer un site web adapté à mon entreprise ?',
        answer: 'Oui. Je conçois des sites vitrines et des plateformes web adaptés à votre activité, à votre identité visuelle et aux objectifs de votre entreprise.'
      },
      {
        question: 'Peux-tu développer une application web sur mesure ?',
        answer: 'Oui. Je peux développer des applications interactives, des espaces clients, des plateformes de réservation et des outils adaptés à vos besoins.'
      }
    ]
  },
  {
    id: 'tarifs',
    label: 'Tarifs & Devis',
    icon: '◇',
    questions: [
      {
        question: 'Quels sont tes tarifs ?',
        answer: 'Chaque projet est différent. Le tarif dépend de vos besoins, des fonctionnalités souhaitées et de la complexité du travail. Contactez-moi pour recevoir un devis personnalisé.'
      },
      {
        question: 'Comment obtenir un devis ?',
        answer: 'Présentez-moi votre projet en précisant vos objectifs et les fonctionnalités souhaitées. Nous pourrons échanger afin de définir vos besoins et établir une proposition adaptée.'
      }
    ]
  },
  {
    id: 'collaboration',
    label: 'Collaboration',
    icon: '◎',
    questions: [
      {
        question: 'Comment démarrer une collaboration ?',
        answer: 'Il suffit de me contacter en décrivant votre idée ou votre besoin. Nous échangeons sur votre projet, définissons les objectifs et les étapes de réalisation.'
      },
      {
        question: 'Puis-je suivre l’avancement de mon projet ?',
        answer: 'Oui. Les étapes et les avancées peuvent être partagées pendant la réalisation afin de garder une bonne visibilité sur le travail effectué.'
      },
      {
        question: 'Proposes-tu un service de maintenance ?',
        answer: 'Oui. Je propose un accompagnement technique pouvant inclure les corrections, les mises à jour, les améliorations et le suivi de votre plateforme.'
      }
    ]
  },
  {
    id: 'tech',
    label: 'Technologies',
    icon: '⌘',
    questions: [
      {
        question: 'Quelles technologies utilises-tu ?',
        answer: 'Je travaille notamment avec HTML, CSS, JavaScript, React, Next.js, TypeScript, Node.js, PostgreSQL et Prisma, ainsi qu’avec des outils comme Git, GitHub et Figma.'
      },
      {
        question: 'Peux-tu automatiser les conversations WhatsApp ?',
        answer: 'Oui. Je peux mettre en place des chatbots et des parcours conversationnels avec des outils comme WhatsApp Business, ManyChat et UChat, selon les besoins de votre activité.'
      }
    ]
  }
]

function FAQ() {
  const [activeCategory, setActiveCategory] = useState('services')
  const [openQuestion, setOpenQuestion] = useState(0)

  const category = faqCategories.find(
    (item) => item.id === activeCategory
  )

  function changeCategory(id) {
    setActiveCategory(id)
    setOpenQuestion(0)
  }

  return (
    <section className="faq section" id="faq">
      <div className="section-heading">
        <span className="section-label">VOUS SOUHAITEZ EN SAVOIR PLUS ?</span>
        <h2>
          Questions <span>fréquentes.</span>
        </h2>
        <p>
          Retrouvez les réponses aux questions les plus fréquentes
          sur mes services, mes méthodes de travail et les collaborations.
        </p>
      </div>

      <div className="faq-layout">
        <div className="faq-categories">
          {faqCategories.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`faq-category ${activeCategory === item.id ? 'active' : ''}`}
              onClick={() => changeCategory(item.id)}
            >
              <span className="faq-category-icon">{item.icon}</span>
              <span>{item.label}</span>
              <span className="faq-category-arrow">↗</span>
            </button>
          ))}
        </div>

        <div className="faq-questions">
          {category.questions.map((item, index) => {
            const isOpen = openQuestion === index

            return (
              <article
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
                key={`${category.id}-${index}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenQuestion(isOpen ? null : index)}
                >
                  <span className="faq-question-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-question-toggle">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div className="faq-answer" aria-hidden={!isOpen}>
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      <div className="faq-contact">
        <div>
          <span className="faq-contact-label">UNE QUESTION PARTICULIÈRE ?</span>
          <h3>Parlons de votre projet.</h3>
          <p>Je suis disponible pour échanger sur vos idées et vos besoins.</p>
        </div>
        <a href="#contact" className="faq-contact-link">
          Me contacter <span>↗</span>
        </a>
      </div>
    </section>
  )
}

export default FAQ
