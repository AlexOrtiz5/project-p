import React from 'react';
import Header from './Header.jsx';
import DisclaimerBar from './DisclaimerBar.jsx';
import './LinksPage.css';

// Data for external links, updated for Commander (EDH)
const externalLinks = [
  {
    name: 'EDHREC',
    description: 'A comprehensive database for Magic: The Gathering Commander (EDH) deck building, showing popular card choices and synergies.',
    url: 'https://edhrec.com/'
  },
  {
    name: 'EDH Power Level',
    description: 'A tool to help you estimate the power level of your Commander deck based on its card choices and strategy.',
    url: 'https://edhpowerlevel.com/'
  },
  {
    name: 'Cards Realm Power Calculator',
    description: 'A Commander power level calculator to help you understand where your deck fits on the power scale.',
    url: 'https://mtg.cardsrealm.com/en-us/tools/commander-power-level-calculator'
  }
];

const LinksPage = ({ setCurrentPage }) => {
  return (
    <div className="links-page">
      <Header title="Interesting Links" setCurrentPage={setCurrentPage} />

      <div className="description-box">
        <p>
          This page contains a curated list of interesting and useful external links for Magic: The Gathering Commander players.
        </p>
      </div>

      <div className="links-container">
        {externalLinks.map((link, index) => (
          <div className="index-card" key={index}>
            <div className="link-description">
              <h3>{link.name}</h3>
              <p>{link.description}</p>
            </div>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="external-link-button">
              Visit Page
            </a>
          </div>
        ))}
      </div>

      <DisclaimerBar />
    </div>
  );
};

export default LinksPage;