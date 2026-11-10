
import { useState } from 'react'

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <a href="#accueil" className="navbar-logo" onClick={closeMenu}>
        <img src="/images/logo.png" alt="Logo AN - Amos N'cho" />
      </a>

      <nav className={`navbar-links ${menuOpen ? 'is-open' : ''}`}>
        <a href="#accueil" onClick={closeMenu}>Accueil</a>
        <a href="#apropos" onClick={closeMenu}>À propos</a>
        <a href="#competences" onClick={closeMenu}>Compétences</a>
        <a href="#projets" onClick={closeMenu}>Projets</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="/suivi" onClick={closeMenu}>Suivre ma demande</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>

        <button
          className="navbar-theme-toggle navbar-theme-mobile"
          type="button"
          onClick={() => {
            toggleTheme()
            closeMenu()
          }}
          aria-label="Changer de thème"
        >
          <span>{theme === 'dark' ? '☀' : '☾'}</span>
          <span>{theme === 'dark' ? 'Mode clair' : 'Mode sombre'}</span>
        </button>
      </nav>

      <div className="navbar-actions">
        <button
          className="navbar-theme-toggle navbar-theme-desktop"
          type="button"
          onClick={toggleTheme}
          aria-label="Changer de thème"
          title={theme === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre'}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>

        <a href="#contact" className="navbar-cta" onClick={closeMenu}>
          Me contacter <span>↗</span>
        </a>

        <button
          className="navbar-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}

export default Navbar


