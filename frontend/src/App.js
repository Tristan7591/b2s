import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ClientManager from './ClientManager';
import './App.css';

function HomePage() {
  return (
    <div className="home-hero">
      <div className="cloud-bg">
        <div className="cloud cloud1" />
        <div className="cloud cloud2" />
        <div className="cloud cloud3" />
      </div>
      <div className="home-content">
        <h1>B2S Cloud Services</h1>
        <p className="home-subtitle">L'expérience cloud nouvelle génération, hébergée en France par notre entreprise.</p>
        <Link to="/clients" className="b2s-btn home-btn">Accéder à la gestion clients</Link>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="b2s-navbar">
      <Link to="/" className="nav-logo">B2S Cloud</Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/clients" className="nav-link">Gestion Clients</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="App b2s-theme">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clients" element={<ClientManager />} />
      </Routes>
    </div>
  );
}

export default App; 