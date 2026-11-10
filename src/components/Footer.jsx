
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#accueil" className="footer-logo">
          <img src="/images/logo.png" alt="Logo AN - Amos N'cho" />
        </a>

        <p>
          Développeur Web & Automatisation WhatsApp.
          Je transforme les idées en solutions digitales.
        </p>

        <div className="footer-socials">
          <a href="https://github.com/nchoamos216-cell" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/>
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/amos-n-cho-140436409/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.96V9h2.97v9.5ZM6.45 7.7a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.05 10.8h-2.97v-4.62c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.7H9.26V9h2.85v1.3h.04c.4-.75 1.37-1.53 2.82-1.53 3.02 0 3.58 1.99 3.58 4.58v5.15Z"/>
            </svg>
          </a>
          <a
  href="https://www.facebook.com/profile.php?id=61587634566869"
  target="_blank"
  rel="noreferrer"
  aria-label="Facebook"
>
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.2H7.5V13h2.7v8h3.3Z"
    />
  </svg>
</a>

          <a href="https://www.tiktok.com/@amosncho3" target="_blank" rel="noreferrer" aria-label="TikTok">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M19.59 6.69a4.83 4.83 0 0 1-4.22-4.22V2h-3.45v13.67a2.9 2.9 0 0 1-2.9 2.9 2.9 2.9 0 1 1 2.9-2.9c0-.16-.01-.32-.04-.47V11.7a6.35 6.35 0 1 0 3.49 5.67V9.98a8.18 8.18 0 0 0 4.78 1.54V8.07c-.19 0-.38-.02-.56-.05Z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Amos N'cho. Tous droits réservés.</p>
        <a href="#accueil">Retour en haut ↑</a>
      </div>
    </footer>
  )
}

export default Footer
