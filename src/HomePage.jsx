import React from 'react';
import Header from './Header.jsx';
import DisclaimerBar from './DisclaimerBar.jsx';
import './HomePage.css';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="home-page">
      <div className="header-bar">
        <header>
          <h1>Welcome to Making Proxy</h1>
        </header>
      </div>

      <div className="button-container">
        <div className="main-buttons">
          <button className="yugioh-button" onClick={() => setCurrentPage('yugioh')}>
            <h2>Yugioh Proxi</h2>
          </button>
          <button className="magic-button" onClick={() => setCurrentPage('magic')}>
            <h2>Magic Proxi</h2>
          </button>
        </div>
        <div className="submission-button-container">
          <button className="submit-button" onClick={() => setCurrentPage('submit')}>
            Submit cards
          </button>
        </div>
      </div>

      <DisclaimerBar />
    </div>
  );
};

export default HomePage;