import { useState } from 'react'
import { supabase } from '../lib/supabase'

function Appointment() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [trackingCode, setTrackingCode] = useState('')

  const today = new Date()
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0'),
  ].join('-')

  async function handleSubmit(event) {
    event.preventDefault()

    setLoading(true)
    setStatus('')
    setErrorMessage('')
    setTrackingCode('')

    const form = event.currentTarget
    const formData = new FormData(form)

    const appointment = {
      client_name: formData.get('client_name').trim(),
      client_email: formData.get('client_email').trim(),
      client_phone: formData.get('client_phone').trim() || null,
      requested_date: formData.get('requested_date'),
      requested_time: formData.get('requested_time'),
      message: formData.get('message').trim() || null,
      status: 'pending',
      tracking_code: 'RDV-' + crypto.randomUUID().replaceAll('-', '').slice(0, 12).toUpperCase(),
    }

    try {
      const { error } = await supabase
        .from('appointments')
        .insert([appointment])

      if (error) {
        throw error
      }

      setTrackingCode(appointment.tracking_code)
      form.reset()
      setStatus('success')
    } catch (error) {
      console.error('Erreur rendez-vous :', error)
      setErrorMessage(
        'Impossible d’envoyer votre demande. Veuillez réessayer.'
      )
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="appointment section" id="rendez-vous">
      <div className="section-heading">
        <span className="section-label">PLANIFIONS NOTRE ÉCHANGE</span>

        <h2>
          Prenons <span>rendez-vous.</span>
        </h2>

        <p>
          Choisissez une date et un horaire qui vous conviennent.
          Votre demande sera examinée avant confirmation.
        </p>
      </div>

      <div className="appointment-container">
        <div className="appointment-info">
          <span className="contact-label">UN PREMIER ÉCHANGE</span>

          <h3>Parlons de votre prochain projet.</h3>

          <p>
            Présentez-moi votre besoin et proposez un créneau.
            Je vous répondrai après avoir étudié votre demande.
          </p>

          <div className="appointment-note">
            <span>01</span>
            <div>
              <strong>Vous proposez</strong>
              <p>Une date, une heure et votre besoin.</p>
            </div>
          </div>

          <div className="appointment-note">
            <span>02</span>
            <div>
              <strong>J'étudie votre demande</strong>
              <p>Je vérifie mes disponibilités.</p>
            </div>
          </div>

          <div className="appointment-note">
            <span>03</span>
            <div>
              <strong>Je vous confirme</strong>
              <p>Le rendez-vous est définitif après validation.</p>
            </div>
          </div>
        </div>

        <form
          className="appointment-form"
          onSubmit={handleSubmit}
        >
          <div className="contact-form-heading">
            <h3>Demander un rendez-vous</h3>
            <p>Les champs marqués sont obligatoires.</p>
          </div>

          <label htmlFor="appointment-name">Votre nom *</label>
          <input
            id="appointment-name"
            name="client_name"
            type="text"
            placeholder="Nom et prénom"
            maxLength="120"
            required
          />

          <label htmlFor="appointment-email">Votre adresse e-mail *</label>
          <input
            id="appointment-email"
            name="client_email"
            type="email"
            placeholder="exemple@email.com"
            maxLength="255"
            required
          />

          <label htmlFor="appointment-phone">Téléphone / WhatsApp</label>
          <input
            id="appointment-phone"
            name="client_phone"
            type="tel"
            placeholder="+225 07 00 00 00 00"
            maxLength="30"
          />

          <div className="appointment-fields">
            <div>
              <label htmlFor="appointment-date">Date souhaitée *</label>
              <input
                id="appointment-date"
                name="requested_date"
                type="date"
                min={minDate}
                required
              />
            </div>

            <div>
              <label htmlFor="appointment-time">Heure souhaitée *</label>
              <input
                id="appointment-time"
                name="requested_time"
                type="time"
                required
              />
            </div>
          </div>

          <label htmlFor="appointment-message">
            Votre besoin ou votre projet
          </label>
          <textarea
            id="appointment-message"
            name="message"
            rows="4"
            maxLength="2000"
            placeholder="Expliquez brièvement le motif de votre rendez-vous..."
          />

          {status === 'success' && (
            <div className="appointment-success">
              <p>
                Votre demande a bien été envoyée. Elle est en attente de validation.
              </p>
              <div className="appointment-tracking-code">
                <strong>Votre numéro de suivi :</strong>
                <span>{trackingCode}</span>
                <small>
                  Conservez ce numéro pour consulter l'état de votre demande.
                </small>
                <a href="/suivi" className="appointment-tracking-link">
                  Suivre ma demande →
                </a>
              </div>
            </div>
          )}

          {status === 'error' && (
            <p className="appointment-error">{errorMessage}</p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </button>

          <p className="appointment-disclaimer">
            L'envoi de cette demande ne constitue pas encore une confirmation
            de rendez-vous.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Appointment


