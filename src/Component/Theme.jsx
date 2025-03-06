import React, { createContext, useContext, useState } from 'react';
import { Chip } from '@mui/material';
import { FaSun, FaMoon } from 'react-icons/fa6';

// Create a context for the theme
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Theme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="absolute right-6 top-2 z-50 w-fit">
      <Chip
        label={theme === 'light' ? 'Light' : 'Dark'}
        icon={theme === 'light' ? <FaSun /> : <FaMoon />}
        onClick={toggleTheme}
      />
    </div>
  );
};

export { ThemeProvider };
export default Theme;