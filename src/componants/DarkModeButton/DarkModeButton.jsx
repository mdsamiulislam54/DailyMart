import React from "react";
import { useDarkMode } from "../ContextApi/DarkModeApi";
import { FaBeer, FaSun, FaMoon } from 'react-icons/fa';

const DarkModeButton = () => {
    const {darkMode , toggleDarkMode} = useDarkMode()
  return (
    <div>
      <button
        onClick={toggleDarkMode}
        className="flex items-center px-4 py-2  text-white rounded-md"
      >
        {darkMode ? (
          <FaSun className="w-6 h-6 text-yellow-500" />
        ) : (
          <FaMoon className="w-6 h-6 text-blue-500" />
        )}
        <span className="ml-2">{darkMode ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </div>
  );
};

export default DarkModeButton;
