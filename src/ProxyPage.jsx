import React from 'react';
import Disclaimer from './Disclaimer';
import './ProxyPage.css';

const ProxyPage = ({ cardType }) => {
  return (
    <div className="proxy-page">
      <header className="proxy-header">
        <Link to="/">
          <button className="back-button">Back to Home</button>
        </Link>
        <h1>Welcome to learning how to Make {cardType} Proxy</h1>
      </header>
      <div className="content-section">
        <div className="index-cards">
          {/* You would map over an array of card data here */}
          <div className="card">
            <img src="/path/to/image1.jpg" alt="Step 1" />
            <div className="text-box">
              <p>Description of the first step.</p>
            </div>
          </div>
          <div className="card">
            <img src="/path/to/image2.jpg" alt="Step 2" />
            <div className="text-box">
              <p>Description of the second step.</p>
            </div>
          </div>
        </div>
        <Link to="/proxy-form">
          <button className="proxy-button">
            Work with the proxy to PDF
          </button>
        </Link>
      </div>
      <Disclaimer />
    </div>
  );
};

export default ProxyPage;