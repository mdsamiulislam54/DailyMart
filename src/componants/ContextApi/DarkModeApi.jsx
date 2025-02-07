import { createContext, useEffect, useState, useContext } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
 
  const storedTheme = JSON.parse(localStorage.getItem("darkMode")) || false;

  const [darkMode, setDarkMode] = useState(storedTheme);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", JSON.stringify(newMode)); 
      return newMode;
    });
  };

  useEffect(() => {
   
    if (darkMode) {
      document.body.style.backgroundColor = "#333333"; 
      document.body.style.color = "#fff"; 
    } else {
      document.body.style.backgroundColor = "#fafafa"; 
      document.body.style.color = "#333333"; 
    }
  }, [darkMode]);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
