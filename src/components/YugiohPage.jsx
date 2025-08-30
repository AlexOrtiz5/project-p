import React, { useState } from 'react';
import Header from './Header.jsx';
import DisclaimerBar from './DisclaimerBar.jsx';
import './ProxyPage.css';

const yugiohLinks = [
  {
    title: 'Yu-Gi-Oh! Proxy Generator',
    description: 'For a quick and easy way to create a proxy for your Yu-Gi-Oh! decks, you can use this simple generator. It’s a fast tool to get your cards ready for a test game.',
    url: 'https://dejauxvue.github.io/YGOProxyGenerator/html/index.html'
  }
];

// Array of objects for the image index (5 images)
const yugiohProxyImages = [
  {
    description: 'Step 1: After entering the page that is simple put your list of card on the table.',
    path: './src/YugiohProxy/Yugioh-Home.png' // REPLACE WITH YOUR IMAGE PATH
  },
  {
    description: 'Step 2: Add the cards you selected to your printing list. While following the rules of format.',
    path: './src/YugiohProxy/Yugioh-Example.png' // REPLACE WITH YOUR IMAGE PATH
  },
  {
    description: 'Step 2.1: Hear is the right way to write the names of the card. That is either by the name of the number id of the card.',
    path: './src/YugiohProxy/Yugioh-Example1.png' // REPLACE WITH YOUR IMAGE PATH
  },
  {
    description: 'Step 2.2: Now following the same as above, here is how you add the number of quantity of the cards. *Important*: Add the quantity of cards.',
    path: './src/YugiohProxy/Yugioh-Example2.png' // REPLACE WITH YOUR IMAGE PATH
  },
  {
    description: 'Step 3: Finally, click on the button to add it to your list and generate a PDF of your proxy cards.',
    path: './src/YugiohProxy/Yugioh-Submit.png' // REPLACE WITH YOUR IMAGE PATH
  },
  // New text-only entry
  {
    description: 'Warning: Please check the number of cards on the PDF. Where is you want less than 9 cards that they are in the same page. If you want more the the maximum number of cards per page is 9. Please Verify.',
    textOnly: true
  },
  {
    description: 'Note: For this page from my testing 9 cards per page is to be check because after 9 cards are added there is a possibility that the PDF losses the format and some pages has less than 9 cards.',
    textOnly: true
  }
];

const YugiohPage = ({ setCurrentPage }) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isFormatterVisible, setIsFormatterVisible] = useState(false);
  const [cardList, setCardList] = useState('');
  const [formattedList, setFormattedList] = useState('');

  const toggleVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  const toggleFormatterVisibility = () => {
    setIsFormatterVisible(!isFormatterVisible);
  };

  const formatList = () => {
    const lines = cardList.split('\n');
    const newFormattedList = lines
      .map(line => {
        let trimmedLine = line.trim();
        if (trimmedLine === '') return null;

        if (trimmedLine.startsWith('#') || trimmedLine.startsWith('!')) {
          return null;
        }

        const noXMatch = trimmedLine.match(/^(\d+)\s*[xX]\s*(.*)$/);
        if (noXMatch) {
          trimmedLine = `${noXMatch[1]} ${noXMatch[2]}`;
        }
        
        const startsWithNumber = /^\d+\s/.test(trimmedLine);
        if (!startsWithNumber) {
          trimmedLine = `1 ${trimmedLine}`;
        }
        
        return trimmedLine;
      })
      .filter(line => line !== null)
      .join('\n');

    setFormattedList(newFormattedList);
  };

  return (
    <div className="proxy-page">
      <Header title="Welcome to learning how to Make Yugioh Proxy" setCurrentPage={setCurrentPage} />
      
      <div className="description-box">
        <p>
          Proxy cards in Yu-Gi-Oh! are a fun and casual way to test out new deck ideas and strategies without having to own the actual cards. This allows you to experiment with different card combinations, build your dream deck, and enjoy playing with friends without the financial commitment.
        </p>
      </div>

      <div className="links-container">
        {yugiohLinks.map((link, index) => (
          <div className="index-card" key={index}>
            <div className="link-description">
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </div>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="external-link-button">
              Go to Proxy Generator
            </a>
          </div>
        ))}
      </div>

      <div className="print-settings-info">
        <div className="print-settings-text">
          <h3>Important Print Settings</h3>
          <p>
            To ensure your proxy cards are printed at the correct size, please adjust your printer settings as follows:
          </p>
          <ul>
            <li><strong>Card Size Scale:</strong> Set to <strong>1.05</strong>.</li>
            <li><strong>Margin Between Cards:</strong> Always <strong>0</strong> is recommended for having multiple cards per page.</li>
            <li><strong>Margin Between first card and document border:</strong> Set to <strong>10</strong> for reducing space in the page.</li>
            <li><strong>Paper Size:</strong> Use standard paper sizes such as <strong>Blank</strong> for the standard paper <strong>Letter (8.5 x 11 inches)</strong>.</li>
          </ul>
          <p>
            These settings are crucial for the proxies to match the dimensions of real Yu-Gi-Oh! cards.
          </p>
        </div>
        <div className="print-settings-image">
          {/* Replace with the actual path to your image */}
          <img src="../path/to/your/yugioh-print-settings-image.png" alt="Print Settings Example" className="settings-image" />
        </div>
      </div>

      {/* New section for deck exporting tip */}
      <div className="description-box">
        <p>
          If you have deck-building software like YGOpro or IgnisProject, you can easily get your list. Simply make a deck and save the file, then copy and paste the contents into our text formatter to get your cards with your desired formatting.
        </p>
      </div>

      <div className="collapsible-container">
        <button className="collapsible-header" onClick={toggleVisibility}>
          How the Webpage Works
          <span className={`arrow ${isContentVisible ? 'open' : ''}`}>&#9660;</span>
        </button>
        <div className={`collapsible-content ${isContentVisible ? 'visible' : ''}`}>
          <div className="collapsible-scrollable-content">
            <div className="image-index-container">
              {yugiohProxyImages.map((item, index) => (
                <div className="image-container" key={index}>
                  <div className="image-description">
                    <h4>{item.description}</h4>
                  </div>
                  {item.textOnly ? null : <img src={item.path} alt={`Step ${index + 1}`} className="proxy-image" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="collapsible-container">
        <button className="collapsible-header" onClick={toggleFormatterVisibility}>
          Fix Your Card List
          <span className={`arrow ${isFormatterVisible ? 'open' : ''}`}>&#9660;</span>
        </button>
        <div className={`collapsible-content ${isFormatterVisible ? 'visible' : ''}`}>
          <div className="text-formatter-container">
            <div className="text-input-group">
              <label>Paste your card list here:</label>
              <textarea
                className="card-list-input"
                rows="10"
                value={cardList}
                onChange={(e) => setCardList(e.target.value)}
                placeholder="Example:
74677422
#created by Dragonix
#main
2x Dark Magician
Blue-Eyes White Dragon
"
              ></textarea>
            </div>
            <button className="format-button" onClick={formatList}>
              Fix List
            </button>
            <div className="text-output-group">
              <label>Your formatted list:</label>
              <textarea
                className="card-list-output"
                rows="10"
                value={formattedList}
                readOnly
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      
      <DisclaimerBar />
    </div>
  );
};

export default YugiohPage;