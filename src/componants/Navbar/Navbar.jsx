import Logo from "./Logo";
import MenuItem from "./MenuItem";
import { useDarkMode } from "../ContextApi/DarkModeApi";
import { TiShoppingCart } from "react-icons/ti";
import { TfiAlignRight, TfiClose } from "react-icons/tfi";
import Login from "./Login";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import Cart from "./Cart";
import MobilMenuItem from "./MobilMenuItem";
import { useState ,useEffect} from "react";
import { useWindowScrollY } from "../ContextApi/WindowScrollY";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  const { darkMode } = useDarkMode();
  const { scrollY } = useWindowScrollY();
  const [isOpen, setIsOpen] = useState(false);


  const handleToggle = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div
    className={` sticky top-0 w-full mx-auto px-4 z-50 shadow-lg ${
      darkMode ? "bg-text text-white" : " text-text"
    } ${ scrollY > 0 ? 'bg-background':'bg-transparent'} ` }
  >
    <nav className=" py-3 ">
    <div className="lg:w-container mx-auto">
      {/* TopNavber */}
      <TopNavbar/>
      {/* TopNavber */}
        <div className="flex items-center justify-between">
          
          <div className="lg:block hidden">
            <MenuItem />
          </div>
          <div className="lg:block hidden">
            <Cart/>
          </div>

          <div className="lg:hidden flex items-center gap-5">
          
            <button
              onClick={handleToggle}
              className={`text-2xl text-white ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              {isOpen ? <TfiClose className={`${darkMode ? 'text-white':'text-text'}`} /> : <TfiAlignRight  className={`${darkMode ? 'text-white':'text-text'}`} />}
            </button>
          </div>

          {
            <div
              className={`lg:hidden fixed right-0 w-6/12 h-[100vh] bg-Primary p-4 
                transition-all duration-500 ease-in-out transform 
                ${isOpen ? "top-14 opacity-100" : "top-full opacity-0"}`}
              style={{
                position: "fixed",
                right: "0",
                transform: "translateX(0%)",
              }}
            >
              <MobilMenuItem />
            </div>
          }
        </div>
      
      </div>
    </nav>
     
    </div>
  );
};

export default Navbar;
