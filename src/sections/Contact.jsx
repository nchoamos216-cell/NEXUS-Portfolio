
import { useState } from 'react'

function Contact() {
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    setIsSending(true)
    setStatus('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(
        'https://formspree.io/f/mqppoawz',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        }
      )

      if (response.ok) {
        form.reset()
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="section-heading">
        <span className="section-label">
          TRANSFORMONS VOS IDÉES EN PROJETS
        </span>

        <h2>
          Parlons de votre <span>prochain projet.</span>
        </h2>

        <p>
          Vous avez une idée, un besoin ou une opportunité de collaboration ?
          Je serais ravi d'échanger avec vous pour donner vie à votre projet.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <span className="contact-label">DISCUTONS ENSEMBLE</span>

          <h3>Construisons quelque chose de remarquable.</h3>

          <p>
            Je suis disponible pour vos projets de développement web,
            d'applications et d'automatisation WhatsApp.
            Contactez-moi pour échanger sur vos besoins.
          </p>

          <a
            href="mailto:ncho216@gmail.com"
            className="contact-item"
          >
            <span>✉</span>

            <div>
              <small>ADRESSE EMAIL</small>
              <strong>ncho216@gmail.com</strong>
            </div>
          </a>

          <a
            href="https://wa.me/2250717678259"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <span>✆</span>

            <div>
              <small>WHATSAPP</small>
              <strong>Discuter directement avec moi</strong>
            </div>
          </a>

          <div className="contact-availability">
            <span className="contact-availability-dot"></span>
            Disponible pour de nouvelles opportunités
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input
            type="hidden"
            name="_subject"
            value="Nouveau message depuis le portfolio d'Amos N'cho"
          />

          <div className="contact-form-heading">
            <h3>Envoyez-moi un message</h3>
            <p>Présentez-moi brièvement votre projet.</p>
          </div>

          <label htmlFor="name">Votre nom</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Comment vous appelez-vous ?"
            autoComplete="name"
            required
          />

          <label htmlFor="email">Votre adresse email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="exemple@email.com"
            autoComplete="email"
            required
          />

          <label htmlFor="message">Votre message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Décrivez votre projet ou votre besoin..."
            required
          />

          <button
            type="submit"
            className="btn-primary"
            disabled={isSending}
          >
            {isSending ? 'Envoi en cours...' : 'Envoyer mon message'}
            {!isSending && <span aria-hidden="true">↗</span>}
          </button>

          {status === 'success' && (
            <div className="contact-feedback contact-success" role="status">
              <span>✓</span>
              <div>
                <strong>Message envoyé avec succès !</strong>
                <p>Merci pour votre message. Je vous répondrai rapidement.</p>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="contact-feedback contact-error" role="alert">
              <strong>Une erreur est survenue.</strong>
              <p>Votre message n'a pas pu être envoyé. Veuillez réessayer.</p>
            </div>
          )}

          <small className="contact-form-note">
            Vos informations sont utilisées uniquement pour répondre à votre demande.
          </small>
        </form>
      </div>
    </section>
  )
}

export default Contact
