
import { Link } from "react-router-dom";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import Login from "./Login";
import { TfiAlignRight, TfiClose } from "react-icons/tfi";
import { useDarkMode } from "../ContextApi/DarkModeApi";
import { useState } from "react";
import DropdownMenu from "./DropDownMenu";

const MobilMenuItem = ({isOpen, setIsOpen}) => {
    
    const {darkMode} = useDarkMode()
  
  
    const closeMenu = () => {
      setIsOpen(false);
    };

  return (
    <div className={``}>

   
      <ul className="flex flex-col items-center gap-10">
      <li>
          <Link className="text-xl font-medium" ><DarkModeButton /></Link>
        </li>
        <li>
          <Link to={'/'} onClick={closeMenu} className="text-xl font-medium">Home</Link>
        </li>
       
        
      
        <li>
          <Link to={'/'} onClick={closeMenu} className="text-xl font-medium">Prodcts</Link>
        </li>
        <li>
          <Link to={'/'} onClick={closeMenu} className="text-xl font-medium">Shop</Link>
        </li>
        <li>
          <Link to={'/'} onClick={closeMenu} className="text-xl font-medium"> Contract</Link>
        </li>
        <Login/>
      </ul>

    </div>
  );
};

export default MobilMenuItem;
