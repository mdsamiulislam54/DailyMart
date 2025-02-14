import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

import DarkModeButton from "../DarkModeButton/DarkModeButton";
import Cart from "./Cart";
import { CreateuserAuthenticationContext } from "../ContextApi/UserAuthentication";
import { CgProfile } from "react-icons/cg";
import { useDarkMode } from "../ContextApi/DarkModeApi";
import { IoIosCloseCircle } from "react-icons/io";

const Login = () => {
  const { user } = useContext(CreateuserAuthenticationContext);
  const { darkMode } = useDarkMode();
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div>
      <ul className="flex items-center justify-center gap-5 relative">
        {user ? (
          <div>
            <Link
              to={"/userprofile"}
              className="flex flex-col justify-center items-center"
            >
              <span>
                <CgProfile size={28} />
              </span>
              <span className="text-sm">{user.name}</span>
            </Link>
          </div>
        ) : (
          <div className="flex gap-5">
            <li>
              <Link to={"/login"} className="text-xl font-medium">
                Login
              </Link>
            </li>
            <li>
              <Link to={"/registration"} className="text-xl font-medium">
                Sign Up
              </Link>
            </li>
          </div>
        )}

        <li className="">
          {isShow ? (
            <li
              className={`absolute bottom-[-180px] h-auto left-0 py-2 ${
                darkMode
                  ? "bg-text rounded-2xl text-white"
                  : "bg-text rounded-2xl text-white"
              } w-8/12 h-30 flex  flex-col justify-center p-5`}
            >
              <div className="flex justify-end py-2">
                <button onClick={handleShow}>
                  <IoIosCloseCircle size={20} />
                </button>
              </div>
              <Link className="text-xl font-medium flex flex-col gap-5">
                <p className="text-sm text-center">Change Theme</p>
                <DarkModeButton />
              </Link>
            </li>
          ) : (
            <li className={`lg:hidden block`}></li>
          )}
        </li>

        <button onClick={handleShow}>
          <HiOutlineSquares2X2 size={30} />
        </button>
      </ul>
    </div>
  );
};

export default Login;
