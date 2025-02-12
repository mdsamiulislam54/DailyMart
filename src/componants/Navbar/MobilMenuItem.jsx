import React from "react";
import { Link } from "react-router-dom";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import Login from "./Login";

const MobilMenuItem = () => {
  return (
    <div>
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
