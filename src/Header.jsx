import React from 'react';
import './Header.css';

const Header = ({ title, setCurrentPage }) => {
  return (
    <div className="header-bar">
      <header>
        <button className="back-button" onClick={() => setCurrentPage('home')}>
          Back to Home
        </button>
        <h1>{title}</h1>
      </header>
    </div>
  );
};

export default Header;