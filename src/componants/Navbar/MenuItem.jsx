import React from "react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";

const MenuItem = () => {
  return (
    <div>
      <ul className="flex items-center gap-5">
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>About </Link>
        </li>
        <li>
          <Link>Prodcts</Link>
        </li>
        <li>
          <Link>Shop</Link>
        </li>
        <li>
          <Link>Contract</Link>
        </li>
        <li>
          <Link><TiShoppingCart /></Link>
        </li>
        <li>
          <Link>Login</Link>
        </li>
        <li>
          <Link>Regestion</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuItem;
