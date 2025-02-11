import React, { useContext } from "react";
import { Link } from "react-router-dom";

import DarkModeButton from "../DarkModeButton/DarkModeButton";
import Cart from "./Cart";
import { CreateuserAuthenticationContext } from "../ContextApi/UserAuthentication";


const Login = () => {
  const { user } = useContext(CreateuserAuthenticationContext);
  return (
    <div>
      <ul className="flex items-center gap-5">
        <Cart />
        {user ? (
        <div>
          <p>{user.name}</p>
        </div>
        ):(
          <div>
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
