import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ClientManager from './ClientManager';
import './App.css';
import Footer from './Footer';
import HomeCards from './HomeCards';
const logo = '/collabsync-logo.png';

function HomePage() {
  return (
    <div className="home-hero">
      <div className="cloud-bg">
        <div className="cloud cloud1" />
        <div className="cloud cloud2" />
        <div className="cloud cloud3" />
      </div>
      <div className="home-content">
        <img src={logo} alt="CollabSync Logo" className="collabsync-logo-large" />
        <h1>CollabSync Cloud Provider</h1>
        <p className="home-subtitle">Réservez vos instances et volumes cloud en quelques clics.<br />L'expérience cloud nouvelle génération, hébergée en France.</p>
        <Link to="/clients" className="b2s-btn home-btn">Réserver une ressource</Link>
      </div>
      <HomeCards />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="b2s-navbar">
      <Link to="/" className="nav-logo">
        <img src={logo} alt="CollabSync Logo" className="collabsync-logo" />
        CollabSync Cloud
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/clients" className="nav-link">Réserver</Link>
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
      <Footer />
    </div>
  );
}

export default App; 