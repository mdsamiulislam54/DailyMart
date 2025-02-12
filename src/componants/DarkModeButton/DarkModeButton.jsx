import React from "react";
import { useDarkMode } from "../ContextApi/DarkModeApi";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeButton = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="flex relative items-center justify-between px-8 py-2  rounded-3xl border border-gray-400 "
    >
      
      <FaSun
      size={10}
        className={` absolute top-[50%] translate-[-50%] left-3  text-primary transition-opacity duration-300  ${
          darkMode ? "opacity-30" : "opacity-100"
        }`}
      />

     
      <FaMoon
      size={10}
        className={` absolute top-[50%] translate-[-50%] right-0  text-primary transition-opacity duration-300 ${
          darkMode ? "opacity-100" : "opacity-30"
        }`}
      />
    </button>
 
  )
};

export default DarkModeButton;
