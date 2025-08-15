import React from 'react';
import Header from './Header.jsx';
import DisclaimerBar from './DisclaimerBar.jsx';
import './ProxyPage.css';

const MagicPage = ({ setCurrentPage }) => {
  return (
    <div className="proxy-page">
      <Header title="Welcome to learning how to Make Magic Proxy" setCurrentPage={setCurrentPage} />
      
      <div className="description-box">
        <p>
          Dive into the world of Magic: The Gathering and create your own proxy cards. This is a great way to experiment with powerful deck combinations without the cost of real cards.
        </p>
      </div>
      
      {/* ... rest of the component content */}
      
      <DisclaimerBar />
    </div>
  );
};

export default MagicPage;