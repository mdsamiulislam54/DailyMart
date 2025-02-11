import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./componants/Home/Home";



import LoginPage from  "./componants/UserAuthentication/LoginPage";
import Registraion from "./componants/UserAuthentication/Registraion";


function App() {
  return (
    <>
     
     <Routes>
        {/* Layout সবসময় থাকবে */}
        <Route path="/" element={<Layout />}>
          {/* Nested Routes */}
          <Route index element={<Home />} />
          
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/registration" element={<Registraion/>}/>
          {/* <Route path="contact" element={<Contact />} />  */}
        </Route>
      </Routes>
     
    </>
  );
}

export default App;
