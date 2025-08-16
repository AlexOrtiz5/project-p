import React from 'react';
import Header from './Header.jsx';
import DisclaimerBar from './DisclaimerBar.jsx';
import './HomePage.css';

const HomePage = ({ setCurrentPage }) => {
  const handleFormRedirect = () => {
    // Access the environment variable securely
    const formUrl = import.meta.env.VITE_GOOGLE_FORM_URL;
    if (formUrl) {
      window.open(formUrl, '_blank');
    }
  };

  return (
    <div className="home-page">
      <div className="header-bar">
        <header>
          <h1>Welcome to Making Proxy</h1>
        </header>
      </div>

      <div className="content-container">
        <div className="description-box">
          <p>
            A **proxy card** is a stand-in for an official card in a trading card game. Players create them for personal use and fun to test new deck ideas and strategies without having to buy expensive or hard-to-find cards. It's a great way to experiment with different builds and optimize your deck before investing money in the real cards. Proxies are typically used in a casual, friendly setting and are not permitted in official or sanctioned tournaments.
          </p>
        </div>

        <div className="button-container">
          <div className="main-buttons-grid">
            <button className="yugioh-button" onClick={() => setCurrentPage('yugioh')}>
              <img src="./src/Logo/YugiohLogo.jpg" alt="Yugioh Logo" className="button-logo" />
              <h2>Yugioh Proxi</h2>
            </button>
            <button className="magic-button" onClick={() => setCurrentPage('magic')}>
              <img src="./src/Logo/MagicLogo.jpg" alt="Magic Logo" className="button-logo" />
              <h2>Magic Proxi</h2>
            </button>
            <div className="blank-space"></div>
            <button className="links-button" onClick={() => setCurrentPage('links')}>
              Links to Pages
            </button>
          </div>
          <div className="submission-button-container">
            <button className="submit-button" onClick={handleFormRedirect}>
              Submit cards
            </button>
          </div>
        </div>
      </div>

      <DisclaimerBar />
    </div>
  );
};

export default HomePage;