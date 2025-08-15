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

      <div className="content-container">
        <div className="description-box">
          <p>
            This website is dedicated to providing tools and guides for creating proxy cards for popular trading card games. Whether you're a new player testing out deck ideas or a veteran looking to complete your collection, our resources will help you get started.
          </p>
        </div>

        <div className="button-container">
          <div className="main-buttons-grid">
            <button className="yugioh-button" onClick={() => setCurrentPage('yugioh')}>
              <h2>Yugioh Proxi</h2>
            </button>
            <button className="magic-button" onClick={() => setCurrentPage('magic')}>
              <h2>Magic Proxi</h2>
            </button>
            <div className="blank-space"></div> {/* This is the blank space placeholder */}
            <button className="links-button" onClick={() => setCurrentPage('links')}>
              Links
            </button>
          </div>
          <div className="submission-button-container">
            <button className="submit-button" onClick={() => setCurrentPage('submit')}>
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