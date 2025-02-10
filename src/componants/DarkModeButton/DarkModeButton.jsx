import React from "react";
import { useDarkMode } from "../ContextApi/DarkModeApi";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="flex relative items-center justify-between px-10 py-4 bg-text rounded-3xl border-2 "
    >
      
      <FaSun
        className={` absolute top-[50%] translate-[-50%] left-3  text-primary transition-opacity duration-300  ${
          darkMode ? "opacity-30" : "opacity-100"
        }`}
      />

     
      <FaMoon
        className={` absolute top-[50%] translate-[-50%] right-0  text-primary transition-opacity duration-300 ${
          darkMode ? "opacity-100" : "opacity-30"
        }`}
      />
    </button>
  );
};

export default DarkModeButton;
