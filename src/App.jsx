
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Logo from './componants/Navbar/Logo'
import Navbar from './componants/Navbar/Navbar'
import MenuItem from './componants/Navbar/MenuItem'

function App() {
 

  return (
    <>
        <Routes>
        <Route path="/" element={
          <>
           <Navbar/>
          
          </>
        } />
        </Routes>
    </>
  )
}

export default App
