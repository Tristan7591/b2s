import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-cloud">
      <div className="footer-contact">
        <h3>Contactez-nous</h3>
        <p>42 Avenue des Champs-Élysées, 75008 Paris, France</p>
        <p>Tél : 01 23 45 67 89</p>
        <p>Email : <a href="mailto:contact@collabsync.fr">contact@collabsync.fr</a></p>
        <div className="footer-socials">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" title="Twitter" className="footer-social-icon"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="footer-social-icon"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" title="GitHub" className="footer-social-icon"><i className="fab fa-github"></i></a>
        </div>
      </div>
      <div className="footer-copyright">
        © 2024 CollabSync Cloud. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer; 