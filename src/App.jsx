import React, { useState } from 'react';
import HomePage from './HomePage.jsx';
import YugiohPage from './YugiohPage.jsx';
import MagicPage from './MagicPage.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'yugioh':
        return <YugiohPage setCurrentPage={setCurrentPage} />;
      case 'magic':
        return <MagicPage setCurrentPage={setCurrentPage} />;
      // Add a case for the submission page if needed
      // case 'submit':
      //   return <SubmitPage setCurrentPage={setCurrentPage} />;
      case 'home':
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
};

export default App;