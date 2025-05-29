import React, { useState, useEffect } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Kiểm tra theme đã lưu trong localStorage
    const savedTheme = localStorage.getItem('youtube-theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    // Cập nhật localStorage và body class khi theme thay đổi
    localStorage.setItem('youtube-theme', isDarkMode ? 'dark' : 'light');
    
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button 
      className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="toggle-container">
        <div className={`icon-container ${isDarkMode ? 'rotated' : ''}`}>
          {/* Sun Icon */}
          <svg 
            className={`sun-icon ${isDarkMode ? 'hidden' : 'visible'}`}
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          
          {/* Moon Icon */}
          <svg 
            className={`moon-icon ${isDarkMode ? 'visible' : 'hidden'}`}
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;