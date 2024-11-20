import React, { useState } from 'react';

function Darkbutton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      document.body.style.background = prevMode ? 'white' : 'black';
      document.body.style.color = prevMode ? 'black' : 'white';
      return !prevMode;
    });
  };

  return (
    <>
      <div className="dark">
        <button
          className={`ball ${isDarkMode ? 'dark' : 'light'}`}
          onClick={toggleDarkMode}
          aria-label="Dark"
        ></button>
        <br />
        <p className="dark"></p>
      </div>
    </>
  );
}
export default Darkbutton;
