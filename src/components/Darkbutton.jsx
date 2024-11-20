import React, { useState } from 'react';
import './Darkbutton.css';

function Darkbutton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // TASK 4: Implement the logic for changing the background and text color of the entire page.
  const toggleDarkMode = () => {
    // When dark mode is active, change background to black and text to white.
    // When light mode is active, change background to white and text to black.
  };

  return (
    <div className="toggle-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          aria-label="Toggle Dark Mode"
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Darkbutton;
