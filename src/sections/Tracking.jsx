import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function Tracking() {
  const [trackingCode, setTrackingCode] = useState('')
  const [email, setEmail] = useState('')
  const [appointment, setAppointment] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    setLoading(true)
    setError('')
    setAppointment(null)

    try {
      const { data, error: rpcError } = await supabase.rpc(
        'track_appointment',
        {
          p_tracking_code: trackingCode.trim().toUpperCase(),
          p_email: email.trim(),
        }
      )

      if (rpcError) throw rpcError

      if (!data || data.length === 0) {
        setError('Aucune demande trouvée. Vérifiez votre numéro de suivi et votre adresse e-mail.')
      } else {
        setAppointment(data[0])
      }
    } catch (err) {
      console.error('Erreur de suivi :', err)
      setError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  const statusInfo = {
    pending: { label: 'En attente de validation', icon: '⏳' },
    accepted: { label: 'Demande acceptée', icon: '✓' },
    rejected: { label: 'Demande refusée', icon: '✕' },
    rescheduled: { label: 'Nouvelle date proposée', icon: '📅' },
  }

  function formatDate(date) {
    if (!date) return 'Non renseignée'

    return new Date(`${date}T12:00:00`).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <main className="tracking-page">
      <div className="tracking-container">
        <Link to="/" className="tracking-back">
          ← Retour au portfolio
        </Link>

        <div className="tracking-heading">
          <span className="tracking-eyebrow">ESPACE CLIENT</span>
          <h1>Suivre ma demande</h1>
          <p>
            Consultez l'état de votre demande de rendez-vous à tout moment.
          </p>
        </div>

        <form className="tracking-form" onSubmit={handleSubmit}>
          <label htmlFor="tracking-code">Numéro de suivi</label>
          <input
            id="tracking-code"
            type="text"
            placeholder="Exemple : RDV-824168BCA909"
            value={trackingCode}
            onChange={(event) => setTrackingCode(event.target.value)}
            required
          />

          <label htmlFor="tracking-email">Adresse e-mail utilisée lors de la demande</label>
          <input
            id="tracking-email"
            type="email"
            placeholder="votre@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Recherche en cours...' : 'Consulter ma demande'}
          </button>
        </form>

        {error && (
          <div className="tracking-error" role="alert">
            {error}
          </div>
        )}

        {appointment && (
          <section className="tracking-result">
            <span className="tracking-result-label">RÉSULTAT DE VOTRE DEMANDE</span>

            <div className={`tracking-status tracking-status-${appointment.status}`}>
              <span>{statusInfo[appointment.status]?.icon || '•'}</span>
              <strong>
                {statusInfo[appointment.status]?.label || appointment.status}
              </strong>
            </div>

            <div className="tracking-details">
              <div>
                <span>Date demandée</span>
                <strong>{formatDate(appointment.requested_date)}</strong>
              </div>

              <div>
                <span>Heure demandée</span>
                <strong>{appointment.requested_time?.slice(0, 5) || 'Non renseignée'}</strong>
              </div>
            </div>

            {appointment.status === 'rescheduled' && (
              <div className="tracking-proposal">
                <h3>Nouvelle proposition de rendez-vous</h3>
                <p>
                  <strong>Date :</strong> {formatDate(appointment.proposed_date)}
                </p>
                <p>
                  <strong>Heure :</strong> {appointment.proposed_time?.slice(0, 5) || 'Non renseignée'}
                </p>
              </div>
            )}

            {appointment.admin_note && (
              <div className="tracking-note">
                <h3>Message concernant votre demande</h3>
                <p>{appointment.admin_note}</p>
              </div>
            )}
          </section>
        )}

        <p className="tracking-help">
          Une question ? <Link to="/#contact">Contactez-moi</Link>.
        </p>
      </div>
    </main>
  )
}

export default Tracking

import './tracking.css'
