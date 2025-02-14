
import { Link } from "react-router-dom";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import Login from "./Login";
import { TfiAlignRight, TfiClose } from "react-icons/tfi";
import { useDarkMode } from "../ContextApi/DarkModeApi";
import { useState } from "react";

const MobilMenuItem = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {darkMode} = useDarkMode()
  
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <div className={``}>

        {/* <button
                    onClick={handleToggle}
                    className={`text-2xl text-white ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <TfiClose/>
                  </button> */}
      <ul className="flex flex-col items-center gap-10">
      <li>
          <Link className="text-xl font-medium" ><DarkModeButton /></Link>
        </li>
        <li>
          <Link className="text-xl font-medium">Home</Link>
        </li>
        <li>
          <Link className="text-xl font-medium">Cetagori </Link>
        </li>
        <li>
          <Link className="text-xl font-medium">Prodcts</Link>
        </li>
        <li>
          <Link className="text-xl font-medium">Shop</Link>
        </li>
        <li>
          <Link className="text-xl font-medium"> Contract</Link>
        </li>
        <Login/>
      </ul>

    </div>
  );
};

export default MobilMenuItem;
