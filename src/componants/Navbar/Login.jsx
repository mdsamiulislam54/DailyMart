import React from 'react'
import {Link} from 'react-router-dom'

import DarkModeButton from "../DarkModeButton/DarkModeButton";
import Cart from './Cart';


const Login = () => {
  return (
    <div>
        <ul className='flex items-center gap-5'>
        <li><Link to="/login"> <Cart/> </Link></li>
        <li>
          <Link className="text-xl font-medium" >Login</Link>
        </li>
        <li>
          <Link className="text-xl font-medium" >Regestion</Link>
        </li>
        <li>
          <Link className="text-xl font-medium" ><DarkModeButton /></Link>
        </li>

        </ul>
    </div>
  )
}

export default Login