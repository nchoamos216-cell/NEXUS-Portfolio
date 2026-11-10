import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import Login from './Login'
import Dashboard from './Dashboard'
import './admin.css'

const ADMIN_ID = 'd803ef15-e0c8-44a9-8347-5323f4d380a1'

function AdminPage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [unauthorized, setUnauthorized] = useState(false)

  useEffect(() => {
    let active = true

    const checkSession = async () => {
      const { data } = await supabase.auth.getSession()
      const currentUser = data.session?.user

      if (!active) return

      if (currentUser?.id === ADMIN_ID) {
        setUser(currentUser)
      } else if (currentUser) {
        setUnauthorized(true)
        await supabase.auth.signOut()
      }

      if (active) setLoading(false)
    }

    checkSession()

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!active) return

        const currentUser = session?.user

        if (currentUser?.id === ADMIN_ID) {
          setUser(currentUser)
          setUnauthorized(false)
        } else {
          setUser(null)
        }
      }
    )

    return () => {
      active = false
      listener.subscription.unsubscribe()
    }
  }, [])

  const handleLogin = (loggedUser) => {
    if (loggedUser.id === ADMIN_ID) {
      setUser(loggedUser)
      setUnauthorized(false)
    } else {
      setUnauthorized(true)
      supabase.auth.signOut()
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  if (loading) {
    return (
      <main className="admin-login-page">
        <p>Vérification de la connexion...</p>
      </main>
    )
  }

  if (unauthorized) {
    return (
      <main className="admin-login-page">
        <div className="admin-login-card">
          <h1>Accès refusé</h1>
          <p>Ce compte n'est pas autorisé à accéder à cette administration.</p>
          <button type="button" onClick={() => setUnauthorized(false)}>
            Retour à la connexion
          </button>
        </div>
      </main>
    )
  }

  return user ? (
    <Dashboard user={user} onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  )
}

export default AdminPage
