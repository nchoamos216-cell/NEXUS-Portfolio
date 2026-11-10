import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const statusLabels = {
  pending: 'En attente',
  accepted: 'Accepté',
  rejected: 'Refusé',
  rescheduled: 'Nouvelle date proposée',
  completed: 'Terminé',
}

function formatDate(value) {
  if (!value) return 'Non renseignée'

  return new Date(`${value}T12:00:00`).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

function Dashboard({ user, onLogout }) {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [updatingId, setUpdatingId] = useState(null)
  const [reschedulingId, setReschedulingId] = useState(null)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [newDate, setNewDate] = useState('')
  const [newTime, setNewTime] = useState('')
  const [adminNote, setAdminNote] = useState('')

  const today = new Date()
  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, '0'),
    String(today.getDate()).padStart(2, '0'),
  ].join('-')

  const loadAppointments = async () => {
    setLoading(true)
    setError('')

    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      setError('Impossible de charger les rendez-vous.')
    } else {
      setAppointments(data || [])
    }

    setLoading(false)
  }

  useEffect(() => {
    loadAppointments()
  }, [])

   const updateStatus = async (id, status) => {
  setUpdatingId(id)
  setError('')

  const updates = status === 'completed'
    ? {
        status,
        completed_at: new Date().toISOString(),
      }
    : { status }

  const { error } = await supabase
    .from('appointments')
    .update(updates)
    .eq('id', id)

  if (error) {
    setError('La modification a échoué. Réessaie.')
  } else {
    await loadAppointments()
  }

  setUpdatingId(null)
}

  const openReschedule = (appointment) => {
    setReschedulingId(appointment.id)
    setNewDate(appointment.proposed_date || appointment.requested_date)
    setNewTime(
      appointment.proposed_time || appointment.requested_time?.slice(0, 5) || ''
    )
    setAdminNote(appointment.admin_note || '')
    setError('')
  }

  const submitReschedule = async (event, id) => {
    event.preventDefault()

    if (!newDate || !newTime) {
      setError('Choisis une nouvelle date et une nouvelle heure.')
      return
    }

    if (newDate < minDate) {
      setError('La nouvelle date doit être aujourd’hui ou ultérieure.')
      return
    }

    setUpdatingId(id)
    setError('')

    const { error } = await supabase
      .from('appointments')
      .update({
        status: 'rescheduled',
        proposed_date: newDate,
        proposed_time: newTime,
        admin_note: adminNote.trim() || null,
      })
      .eq('id', id)

    if (error) {
      setError('Impossible d’enregistrer la proposition. Réessaie.')
    } else {
      setReschedulingId(null)
      setNewDate('')
      setNewTime('')
      setAdminNote('')
      await loadAppointments()
    }

    setUpdatingId(null)
  }

  const pendingCount = appointments.filter(
    (item) => item.status === 'pending'
  ).length

  const acceptedCount = appointments.filter(
    (item) => item.status === 'accepted'
  ).length

  const rescheduledCount = appointments.filter(
    (item) => item.status === 'rescheduled'
  ).length

  const filteredAppointments = appointments.filter((item) => {
    const matchesStatus = filter === 'all' || item.status === filter
    const term = search.toLowerCase().trim()

    const matchesSearch =
      !term ||
      item.client_name?.toLowerCase().includes(term) ||
      item.client_email?.toLowerCase().includes(term) ||
      item.client_phone?.toLowerCase().includes(term)

    return matchesStatus && matchesSearch
  })

  return (
    <main className="admin-dashboard">
      <aside className="admin-sidebar">
        <a href="/" className="admin-brand">
          <span>AN</span>
          <div>
            <strong>NEXUS</strong>
            <small>CONTROL CENTER</small>
          </div>
        </a>

        <div className="admin-sidebar-label">ESPACE DE TRAVAIL</div>

        <nav className="admin-navigation">
          <a className="admin-nav-link active" href="#overview">
            <span>◈</span> Vue d'ensemble
          </a>
          <a className="admin-nav-link" href="#appointments">
            <span>▤</span> Rendez-vous
          </a>
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-online">
            <span />
            Administration sécurisée
          </div>
          <a href="/" className="admin-sidebar-back">← Voir le portfolio</a>
        </div>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar">
          <div className="admin-breadcrumb">
            <span>NEXUS</span>
            <span>/</span>
            <strong>Administration</strong>
          </div>

          <div className="admin-user">
            <div className="admin-avatar">AN</div>
            <div className="admin-user-details">
              <strong>Administrateur</strong>
              <span>{user?.email}</span>
            </div>
            <button type="button" onClick={onLogout}>
              Déconnexion
            </button>
          </div>
        </header>

        <section className="admin-dashboard-content">
          <section className="admin-welcome" id="overview">
            <p>TABLEAU DE CONTRÔLE</p>
            <h1>Vue d'ensemble<span>.</span></h1>
            <span>Bienvenue dans ton espace de gestion NEXUS.</span>
          </section>

          {error && <p className="admin-error">{error}</p>}

          <section className="admin-stats">
            <article className="admin-stat-card">
              <span className="admin-stat-icon">▤</span>
              <span>Total des demandes</span>
              <strong>{appointments.length}</strong>
              <small>Toutes les demandes reçues</small>
            </article>

            <article className="admin-stat-card">
              <span className="admin-stat-icon">◷</span>
              <span>En attente</span>
              <strong>{pendingCount}</strong>
              <small>Demandes à examiner</small>
            </article>

            <article className="admin-stat-card">
              <span className="admin-stat-icon">✓</span>
              <span>Rendez-vous acceptés</span>
              <strong>{acceptedCount}</strong>
              <small>Demandes validées</small>
            </article>

            <article className="admin-stat-card">
              <span className="admin-stat-icon">↗</span>
              <span>À reprogrammer</span>
              <strong>{rescheduledCount}</strong>
              <small>Nouvelles propositions</small>
            </article>
          </section>

          <section className="admin-appointments" id="appointments">
            <div className="admin-section-heading">
              <div>
                <p>RELATION CLIENT</p>
                <h2>Gestion des rendez-vous</h2>
                <span>{filteredAppointments.length} demande(s) affichée(s)</span>
              </div>

              <button type="button" onClick={loadAppointments}>
                ↻ Actualiser
              </button>
            </div>

            <div className="admin-toolbar">
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Rechercher un client, un e-mail..."
                aria-label="Rechercher un rendez-vous"
              />

              <select
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                aria-label="Filtrer les rendez-vous"
              >
                <option value="all">Tous les statuts</option>
                <option value="pending">En attente</option>
                <option value="accepted">Acceptés</option>
                <option value="rejected">Refusés</option>
                <option value="rescheduled">À reprogrammer</option>
                <option value="completed">Terminés</option>
              </select>
            </div>

            {loading ? (
              <p className="admin-empty">Chargement des demandes...</p>
            ) : filteredAppointments.length === 0 ? (
              <p className="admin-empty">
                Aucune demande ne correspond à cette recherche.
              </p>
            ) : (
              <div className="admin-appointments-list">
                {filteredAppointments.map((appointment) => (
                  <article
                    className="admin-appointment-card"
                    key={appointment.id}
                  >
                    <div className="admin-appointment-header">
                      <div className="admin-client-identity">
                        <div className="admin-client-avatar">
                          {appointment.client_name?.charAt(0)?.toUpperCase() || '?'}
                        </div>
                        <div>
                          <h3>{appointment.client_name}</h3>
                          <span>
                            Demande du {formatDate(appointment.created_at?.slice(0, 10))}
                          </span>
                        </div>
                      </div>

                      <span className={`admin-status ${appointment.status}`}>
                        {statusLabels[appointment.status] || appointment.status}
                      </span>
                    </div>

                    <div className="admin-appointment-details">
                      <p><strong>E-mail</strong>{appointment.client_email}</p>
                      <p><strong>Téléphone</strong>{appointment.client_phone || 'Non renseigné'}</p>
                      <p><strong>Date souhaitée</strong>{formatDate(appointment.requested_date)}</p>
                      <p><strong>Heure souhaitée</strong>{appointment.requested_time?.slice(0, 5)}</p>
                    </div>

                    {appointment.message && (
                      <div className="admin-appointment-message">
                        <strong>Objet de la demande</strong>
                        <p>{appointment.message}</p>
                      </div>
                    )}

                    {appointment.status === 'rescheduled' && (
                      <div className="admin-proposal-preview">
                        <strong>Nouvelle proposition</strong>
                        <p>
                          {formatDate(appointment.proposed_date)} à{' '}
                          {appointment.proposed_time?.slice(0, 5)}
                        </p>
                        {appointment.admin_note && <p>{appointment.admin_note}</p>}
                      </div>
                    )}

                    {reschedulingId === appointment.id ? (
                      <form
                        className="admin-reschedule-form"
                        onSubmit={(event) => submitReschedule(event, appointment.id)}
                      >
                        <h4>Proposer un nouveau créneau</h4>

                        <div className="admin-reschedule-fields">
                          <label>
                            Nouvelle date
                            <input
                              type="date"
                              min={minDate}
                              value={newDate}
                              onChange={(event) => setNewDate(event.target.value)}
                              required
                            />
                          </label>

                          <label>
                            Nouvelle heure
                            <input
                              type="time"
                              value={newTime}
                              onChange={(event) => setNewTime(event.target.value)}
                              required
                            />
                          </label>
                        </div>

                        <label className="admin-note-label">
                          Message pour le client
                          <textarea
                            rows="3"
                            maxLength="1000"
                            value={adminNote}
                            onChange={(event) => setAdminNote(event.target.value)}
                            placeholder="Explique brièvement pourquoi tu proposes ce créneau..."
                          />
                        </label>

                        <div className="admin-appointment-actions">
                          <button type="submit" disabled={updatingId === appointment.id}>
                            {updatingId === appointment.id ? 'Enregistrement...' : 'Enregistrer la proposition'}
                          </button>
                          <button
                            type="button"
                            className="admin-cancel-button"
                            onClick={() => setReschedulingId(null)}
                          >
                            Annuler
                          </button>
                        </div>
                      </form>
                    ) : (
                      <div className="admin-appointment-actions">
                        <button
                          type="button"
                          disabled={updatingId === appointment.id || appointment.status === 'accepted'}
                          onClick={() => updateStatus(appointment.id, 'accepted')}
                        >
                          Accepter
                        </button>

                        {appointment.status === 'accepted' && (
  <button
    type="button"
    disabled={updatingId === appointment.id}
    onClick={() => updateStatus(appointment.id, 'completed')}
  >
    {updatingId === appointment.id ? 'Enregistrement...' : 'Marquer comme terminé'}
  </button>
)}

                        <button
                          type="button"
                          disabled={updatingId === appointment.id || appointment.status === 'rejected'}
                          onClick={() => updateStatus(appointment.id, 'rejected')}
                        >
                          Refuser
                        </button>

                        <button
                          type="button"
                          className="admin-reschedule-button"
                          disabled={updatingId === appointment.id}
                          onClick={() => openReschedule(appointment)}
                        >
                          Reprogrammer
                        </button>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            )}
          </section>
        </section>
      </div>
    </main>
  )
}

export default Dashboard
