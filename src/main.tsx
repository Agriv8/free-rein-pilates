import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import MatPilates from './pages/MatPilates'
import StudioPilates from './pages/StudioPilates'
import EquestrianPilates from './pages/EquestrianPilates'
import SportsTherapy from './pages/SportsTherapy'
import BookOnline from './pages/BookOnline'
import ContactPage from './pages/ContactPage'
import Shop from './pages/Shop'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import { CartProvider } from './context/CartContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mat-pilates" element={<MatPilates />} />
        <Route path="/studio-pilates" element={<StudioPilates />} />
        <Route path="/equestrian-pilates" element={<EquestrianPilates />} />
        <Route path="/sports-therapy" element={<SportsTherapy />} />
        <Route path="/book-online" element={<BookOnline />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)