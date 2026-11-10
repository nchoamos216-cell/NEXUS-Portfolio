import { useState } from 'react'
import { supabase } from '../lib/supabase'

function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setError(error.message)
      return
    }

    onLogin(data.user)
  }

  return (
    <main className="admin-login-page">
      <form className="admin-login-card" onSubmit={handleSubmit}>
        <div className="admin-login-logo">AN</div>

        <p className="admin-login-label">ESPACE PRIVÉ</p>
        <h1>Administration NEXUS</h1>
        <p className="admin-login-description">
          Connecte-toi pour gérer ton portfolio.
        </p>

        <label htmlFor="admin-email">Adresse e-mail</label>
        <input
          id="admin-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Ton adresse e-mail"
          autoComplete="username"
          required
        />

        <label htmlFor="admin-password">Mot de passe</label>
        <input
          id="admin-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Ton mot de passe"
          autoComplete="current-password"
          required
        />

        {error && <p className="admin-login-error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Connexion en cours...' : 'Se connecter'}
        </button>

        <a href="/" className="admin-login-back">
          ← Retour au portfolio
        </a>
      </form>
    </main>
  )
}

export default Login

