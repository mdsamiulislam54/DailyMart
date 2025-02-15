import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import Listimages from "../../assets/listicon.png";
import { useDarkMode } from "../ContextApi/DarkModeApi";

const DropdownMenu = ({ isMobile, closeMenu }) => {
  const {darkMode} = useDarkMode()
  const [dropDown, setDropDown] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  const dropDownMenuItem = [
    "Electronics & Gadgets",
    "Fashion & Apparel",
    "Home & Kitchen",
    "Groceries & Essentials",
    "Books & Stationery",
    "Toys & Baby Products",
    "Automotive & Accessories",
    "Sports & Outdoors",
    "Health & Wellness",
    "Beauty & Personal Care",
  ];

  return (
    <li
      className={`relative list-none ${isMobile ? "" : "group"}`}
      onMouseEnter={() => setDropDown(true)}
      onMouseLeave={() => setDropDown(false)}
    >
      {/* Parent Category */}
      <button
        className="text-xl font-medium flex items-center gap-2"
        onClick={() => isMobile && setDropDown(!dropDown)}
      >
        Category
        <IoMdArrowDropdown
          size={30}
          className={`transition-transform duration-300 ${
            dropDown ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-[45px] lg:left-0 -left-36 lg:w-[700px] w-[500px] z-40 shadow-lg rounded-md overflow-hidden transform transition-all duration-500 ease-in-out  ${darkMode ? "bg-text":"bg-background"}
        ${dropDown ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-5 invisible"}
        ${isMobile ? "relative top-0 w-full block opacity-100 visible translate-y-0" : ""}`}
      >
        <ul className="p-4 grid grid-cols-2  gap-5 ">
          {dropDownMenuItem.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 p-2 rounded cursor-pointer transition-all duration-500 ease-in-out list-none "
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => isMobile && closeMenu()}
            >
              {hoverIndex === index && (
                <img
                  src={Listimages}
                  alt="icon"
                  className="w-4 h-4 transition-all duration-500"
                />
              )}
              <Link className={`transition-all duration-500 text-sm ${hoverIndex === index ? "ml-2 text-secondary" : ""}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default DropdownMenu;
