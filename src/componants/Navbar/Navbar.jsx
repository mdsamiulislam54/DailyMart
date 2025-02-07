import Logo from "./Logo";
import MenuItem from "./MenuItem";
import { useDarkMode } from "../ContextApi/DarkModeApi";
import { TiShoppingCart } from "react-icons/ti";
import Login from "./Login";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import Cart from "./Cart";


const Navbar = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={` py-3 lg:px-0 px-4  ${
        darkMode ? "bg-Text text-white" : "bg-Text text-white"
      } `}
    >
      <div className="lg:max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
         
          
          <Logo />
          <div className="lg:block hidden">
          <MenuItem />
          </div>
         <div className="lg:block hidden">
         <Login />
         </div>

         <div className="lg:hidden flex items-center gap-5">
         <Cart/>
         <button className="text-2xl text-white">☰</button>
         
         </div>
        
            
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
