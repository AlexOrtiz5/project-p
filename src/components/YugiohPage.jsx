import React from 'react';
import Header from './Header.jsx';
import DisclaimerBar from './DisclaimerBar.jsx';
import './ProxyPage.css';

const YugiohPage = ({ setCurrentPage }) => {
  return (
    <div className="proxy-page">
      <Header title="Welcome to learning how to Make Yugioh Proxy" setCurrentPage={setCurrentPage} />
      
      <div className="description-box">
        <p>
          Learn all about creating custom Yu-Gi-Oh! proxy cards to test new strategies and build your dream deck. This page will guide you through the process step-by-step.
        </p>
      </div>
      
      {/* ... rest of the component content */}
      
      <DisclaimerBar />
    </div>
  );
};

export default YugiohPage;