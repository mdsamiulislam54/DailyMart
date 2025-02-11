import React from 'react'
import {Link} from 'react-router-dom'

import DarkModeButton from "../DarkModeButton/DarkModeButton";
import Cart from './Cart';


const Login = () => {
  return (
    <div>
        <ul className='flex items-center gap-5'>
        <li className='lg:block hidden'><Link to="/login"> <Cart/> </Link></li>
        <li>
          <Link to={'/login'} className="text-xl font-medium" >Login</Link>
        </li>
        <li>
          <Link to={'/registration'} className="text-xl font-medium" >Sign Up</Link>
        </li>
        <li className='lg:block hidden'>
          <Link className="text-xl font-medium" ><DarkModeButton /></Link>
        </li>

        </ul>
    </div>
  )
}

export default Login