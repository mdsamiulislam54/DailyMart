import React from 'react'
import Navbar from '../componants/Navbar/Navbar'
import { Outlet } from 'react-router'
import Home from '../componants/Home/Home'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        
    </div>
  )
}

export default Layout