import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDarkMode } from "../ContextApi/DarkModeApi";
import Listimages from "../../assets/listicon.png";
import DropdownMenu from "./DropDownMenu";

const MenuItem = () => {
  const [dropDown, setDropDown] = useState(false);
  const { darkMode } = useDarkMode();
  const [hoverIndex, setHoverIndex] = useState(null);


  return (
    <div>
      <ul className="flex items-center gap-10">
 
        <DropdownMenu isMobile={false}/>

        
     
        <li>
          <Link to="/" className="text-xl font-medium">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="text-xl font-medium">
            Products
          </Link>
        </li>
        <li>
          <Link to="/" className="text-xl font-medium">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/" className="text-xl font-medium">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuItem;
