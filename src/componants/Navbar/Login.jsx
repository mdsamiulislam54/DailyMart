import React, { useContext } from "react";
import { Link } from "react-router-dom";

import DarkModeButton from "../DarkModeButton/DarkModeButton";
import Cart from "./Cart";
import { CreateuserAuthenticationContext } from "../ContextApi/UserAuthentication";
import { CgProfile } from "react-icons/cg";


const Login = () => {
  const { user } = useContext(CreateuserAuthenticationContext);
  return (
    <div>
      <ul className="flex items-center gap-5">
       
        {user ? (
        <div>
          <Link to={'/userprofile'} className="flex flex-col justify-center items-center">
            <span><CgProfile size={28}/></span>
            <span className="text-sm">{user.name}</span>
          </Link>
        </div>
        ):(
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
        <li className="lg:block hidden">
          <Link className="text-xl font-medium">
            <DarkModeButton />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Login;
