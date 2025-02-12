import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDarkMode } from "../ContextApi/DarkModeApi";
import Listimages from "../../assets/listicon.png";

const MenuItem = () => {
  const [dropDown, setDropDown] = useState(false);
  const { darkMode } = useDarkMode();
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
    <div>
      <ul className="flex items-center gap-10">
        {/* Dropdown Parent */}
        <li 
          className="relative group" 
          onMouseEnter={() => setDropDown(true)} 
          onMouseLeave={() => setDropDown(false)}
        >
          {/* Category Link */}
          <Link to="/" className="text-xl font-medium flex items-center gap-2">
            Category
            <IoMdArrowDropdown
              size={30}
              className={`transition-transform duration-300 ${
                dropDown ? "rotate-180" : "rotate-0"
              }`}
            />
          </Link>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-[50px] left-0 w-[700px] shadow-lg rounded-md overflow-hidden transform transition-all duration-500 ease-in-out 
              ${dropDown ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-5 invisible"}`}
          >
            <ul className="p-4 grid grid-cols-2 gap-5">
              {dropDownMenuItem.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 p-2 rounded cursor-pointer transition-all duration-500 ease-in-out hover:bg-gray-100"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  {hoverIndex === index && (
                    <img
                      src={Listimages}
                      alt="icon"
                      className="w-4 h-4 transition-all duration-500"
                    />
                  )}
                  <Link
                    className={`transition-all duration-500 ${
                      hoverIndex === index ? "ml-2 text-secondary" : ""
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>

        {/* Other Menu Items */}
        <li>
          <Link to="/" className="text-xl font-medium">
            Home
          </Link>
        </li>
        <li>
          <Link to="/" className="text-xl font-medium">
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
