import React from "react";
import { Link } from "react-router-dom";



const MenuItem = () => {
  return (
    <div>
      <ul className="flex items-center gap-10">
        <li>
          <Link to={'/'}  className="text-xl font-medium">Home</Link>
        </li>
        <li>
          <Link to={'/about'} className="text-xl font-medium" >About </Link>
        </li>
        <li>
          <Link className="text-xl font-medium" >Prodcts</Link>
        </li>
        <li>
          <Link className="text-xl font-medium" >Shop</Link>
        </li>
        <li>
          <Link className="text-xl font-medium" > Contract</Link>
        </li>
       
      
      </ul>
    </div>
  );
};

export default MenuItem;
