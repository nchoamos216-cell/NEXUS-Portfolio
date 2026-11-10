import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './styles/style.css'
import './styles/responsive.css'
import './styles/modern.css'

import App from './App.jsx'
import AdminPage from './admin/AdminPage.jsx'
import Tracking from './sections/Tracking.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/suivi" element={<Tracking />} />
        <Route path="/confidentialite" element={<PrivacyPolicy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
