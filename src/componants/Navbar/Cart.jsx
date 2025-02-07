import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import {Link} from 'react-router-dom'

const Cart = () => {
  return (
    <div>
      <li className="list-none">
        <Link className="text-xl font-medium ">
          <TiShoppingCart size={30} />
        </Link>
      </li>
    </div>
  );
};

export default Cart;
