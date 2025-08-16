import React, { useState } from 'react';
import Header from './Header.jsx';
import DisclaimerBar from './DisclaimerBar.jsx';
import './ProxyPage.css';

const magicLinks = [
  {
    title: 'MTGPrint',
    description: 'For an easy way to print your proxy cards, you can use the MTGPrint tool. This website helps you arrange multiple cards on a single page for efficient printing.',
    url: 'https://mtgprint.net/'
  }
];

// Array of objects for the image index
const proxyImages = [
  {
    description: 'Step 1: After entering the page that is simple put your list of card on the table.',
    path: './src/MTGproxy/MTG-Home.png' // REPLACE WITH YOUR IMAGE PATH
  },
  {
    description: 'Step 2.1: This is one of the formats to get the cards. That is just the name plus the quantity of cards. *Important*: Add the quantity of cards.',
    path: './src/MTGproxy/MTG-Example1.png' // REPLACE WITH YOUR IMAGE PATH
  },
  {
    description: 'Step 2.2: This is second of the formats to get the cards. That is just the name, format and set of the cards, plus the quantity of cards. *Important*: Add the quantity of cards.',
    path: './src/MTGproxy/MTG-Example2.png' // REPLACE WITH YOUR IMAGE PATH
  },
  {
    description: 'Step 3: Finally, click on the button to add it to your list and generate a PDF of your proxy cards.',
    path: './src/MTGproxy/MTG-Submit.png' // REPLACE WITH YOUR IMAGE PATH
  },
   // New text-only entry
  {
    description: 'Warning: Please check the number of cards on the PDF. Where is you want less than 9 cards that they are in the same page. If you want more the the maximum number of cards per page is 9. Please Verify.',
    textOnly: true
  }
];

const MagicPage = ({ setCurrentPage }) => {
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

        // Condition 2: Remove 'x' or 'X' and ensure a space
        const noXMatch = trimmedLine.match(/^(\d+)\s*[xX]\s*(.*)$/);
        if (noXMatch) {
          trimmedLine = `${noXMatch[1]} ${noXMatch[2]}`;
        }
        
        // New Condition: Handle set code and number with the updated regex
        const setMatch = trimmedLine.match(/^(\d+\s+.*?)\s+([A-Z0-9]{3,4})[\s/]+(\d+)$/);
        if (setMatch) {
          const countAndName = setMatch[1].trim();
          const setCode = setMatch[2];
          const collectorNumber = setMatch[3];
          return `${countAndName} (${setCode}) ${collectorNumber}`;
        }

        // Condition 1: Add "1" if no number is present
        const startsWithNumber = /^\d+\s/.test(trimmedLine);
        if (!startsWithNumber) {
          return `1 ${trimmedLine}`;
        }
        
        return trimmedLine;
      })
      .filter(line => line !== null)
      .join('\n');

    setFormattedList(newFormattedList);
  };

  return (
    <div className="proxy-page">
      <Header title="Welcome to learning how to Make Magic Proxy" setCurrentPage={setCurrentPage} />
      
      <div className="description-box">
        <p>
          Proxy cards are used in Magic: The Gathering to test out new deck builds and strategies with friends. This allows you to try out expensive or rare cards without having to buy them first, helping you to make informed decisions about your deck. It's a great way to experiment with new ideas and have fun with your playgroup.
        </p>
      </div>

      <div className="links-container">
        {magicLinks.map((link, index) => (
          <div className="index-card" key={index}>
            <div className="link-description">
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </div>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="external-link-button">
              Go to MTGPrint
            </a>
          </div>
        ))}
      </div>

      <div className="collapsible-container">
        <button className="collapsible-header" onClick={toggleVisibility}>
          How the Webpage Works
          <span className={`arrow ${isContentVisible ? 'open' : ''}`}>&#9660;</span>
        </button>
        <div className={`collapsible-content ${isContentVisible ? 'visible' : ''}`}>
          <div className="collapsible-scrollable-content">
            <div className="image-index-container">
              {proxyImages.map((item, index) => (
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
Counterspell
2x Opt
3 Lightning Storm
1 Counterspell JVC 24
1 Tyrant Guard 40K/103"
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

export default MagicPage;