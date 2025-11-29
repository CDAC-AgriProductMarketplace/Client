//theme context setup

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () =>{
    return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false); 

  const toggleTheme = () => {
    setDarkMode((mode) => !mode);
  };

  useEffect(() => {
    const htmlEl = document.documentElement;
    if (darkMode) {
      // Add the 'dark' class to enable Tailwind's dark mode utilities
      htmlEl.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      // Remove the 'dark' class for light mode
      htmlEl.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};