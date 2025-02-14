import React from 'react'

import Logo from './Logo'
import Cart from './Cart'
import Login from './Login'
import { useDarkMode } from '../ContextApi/DarkModeApi'

const TopNavbar = () => {
    const {darkMode} = useDarkMode()
  return (
    <div className='flex justify-between items-center py-5 mb-2 '>
        <Logo/>
        <div className='relative '>
            <input 
            className={`border relative md:p-2 p-1 w-62 md:w-100  rounded-2xl  ${darkMode ? "placeholder-gray-300":"placeholder-text"}`}
             type="text" placeholder='Search' required />
            <input 
            className={`absolute top-0 right-0 h-full px-3 rounded-r-2xl    bg-primary ${darkMode ? "":"text-white "}`}
            type="button" value="Search" />
        </div>
       <div className='lg:block hidden'>
       <Login/>
       </div>



    </div>
  )
}

export default TopNavbar