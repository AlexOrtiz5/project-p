import React from 'react';
import Header from './Header.jsx';
import DisclaimerBar from './DisclaimerBar.jsx';
import './ProxyPage.css';

const YugiohPage = ({ setCurrentPage }) => {
  return (
    <div className="proxy-page">
      <Header title="Welcome to learning how to Make Yugioh Proxy" setCurrentPage={setCurrentPage} />
      {/* ... rest of the component content */}
      <DisclaimerBar />
    </div>
  );
};

export default YugiohPage;