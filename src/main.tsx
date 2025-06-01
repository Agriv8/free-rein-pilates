import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import MatPilates from './pages/MatPilates'
import StudioPilates from './pages/StudioPilates'
import EquestrianPilates from './pages/EquestrianPilates'
import SportsTherapy from './pages/SportsTherapy'
import BookOnline from './pages/BookOnline'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mat-pilates" element={<MatPilates />} />
        <Route path="/studio-pilates" element={<StudioPilates />} />
        <Route path="/equestrian-pilates" element={<EquestrianPilates />} />
        <Route path="/sports-therapy" element={<SportsTherapy />} />
        <Route path="/book-online" element={<BookOnline />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)