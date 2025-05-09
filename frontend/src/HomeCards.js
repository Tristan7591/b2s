import React from 'react';
import './HomeCards.css';

const offers = [
  {
    icon: 'fa-server',
    title: 'Instances rapides',
    desc: 'Déployez des machines virtuelles en quelques secondes, avec CPU et RAM à la demande.'
  },
  {
    icon: 'fa-database',
    title: 'Stockage sécurisé',
    desc: 'Volumes SSD/HDD haute disponibilité, sauvegardes automatiques et chiffrement.'
  },
  {
    icon: 'fa-headset',
    title: 'Support 24/7',
    desc: 'Une équipe basée à Paris, disponible à toute heure pour vos besoins cloud.'
  }
];

function HomeCards() {
  return (
    <div className="home-cards">
      {offers.map((offer, idx) => (
        <div className="cloud-card" key={idx} style={{animationDelay: `${0.2 + idx * 0.15}s`}}>
          <i className={`fa ${offer.icon} card-icon`}></i>
          <h4>{offer.title}</h4>
          <p>{offer.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default HomeCards; 