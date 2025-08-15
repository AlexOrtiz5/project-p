import React, { useState } from 'react';
import HomePage from './components/HomePage.jsx';
import YugiohPage from './components/YugiohPage.jsx';
import MagicPage from './components/MagicPage.jsx';
import LinksPage from './components/LinksPage.jsx'; // New import

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'yugioh':
        return <YugiohPage setCurrentPage={setCurrentPage} />;
      case 'magic':
        return <MagicPage setCurrentPage={setCurrentPage} />;
      case 'links':
        return <LinksPage setCurrentPage={setCurrentPage} />;
      // Add cases for other pages
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