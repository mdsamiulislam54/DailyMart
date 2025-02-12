import React, { useContext, useState } from "react";
import { CreateuserAuthenticationContext } from "../ContextApi/UserAuthentication";
import { useDarkMode } from "../ContextApi/DarkModeApi";
import { FcBusinessman } from "react-icons/fc";
import { Link } from "react-router";
import Listimages from "../../assets/listicon.png";

const UserProfile = () => {
  const { user, customData,logout } = useContext(CreateuserAuthenticationContext);
  const { darkMode } = useDarkMode();
  const [hoverIndex, setHoverIndex] = useState(null); // Track hover index

  const menuItems = [
    "Profile Overview",
    "My Profile",
    "Address",
    "Payment Option",
    "My Order",
    "My Review",
    "Wishlist",
    "Manage Password",
    "Support & Help",
  ];


  return (
    <div className="relative">
      {user ? (
        <div className="lg:w-container mx-auto mt-1">
          <div className="grid grid-cols-6 ">
            {/* Sidebar */}
            <div className={`col-span-2  h-[100%] ${darkMode ? "shadow-2xl":"bg-gray-100"}`}>
              <div className="flex justify-center items-center gap-5 flex-col">
                {
                    user.photoURL ? <div>
                        <img src={user.photoURL} alt="" />
                    </div>:<div>
                    <FcBusinessman
                  size={120}
                  className="p-5 shadow-2xl rounded-full"
                />
                    </div>
                }
                <p className="text-xl font-medium">{user.name}</p>
                <p className="text-sm font-medium">{user.email}</p>
                <img src={user.photoURL} alt="" />
              </div>

              {/* ✅ Sidebar Menu with Hover Effect */}
              <div>
                <ul className="flex justify-center items-center flex-col gap-2">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 p-2 rounded cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoverIndex(index)}
                      onMouseLeave={() => setHoverIndex(null)}
                    >
                      {/* Show Image Only on Hover */}
                      {hoverIndex === index && (
                        <img
                          src={Listimages}
                          alt="icon"
                          className="w-2 h-2 transition-all duration-500"
                        />
                      )}
                      <Link
                        className={`transition-all duration-500 translate-3d ${
                          hoverIndex === index ? "ml-2 text-secondary" : ""
                        }`}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-4 ">
             <div className={`flex justify-between items-center p-4 ${darkMode ? "shadow-2xl":"bg-gray-100"}`}>
                <h1 className="text-3xl text-secondary font-bold">User Dashboard</h1>
                <span className="flex justify-center items-center gap-2">
                    <FcBusinessman size={30}></FcBusinessman>
                    <button onClick={logout} className="p-2 text-lg font-medium tracking-wide cursor-pointer hover:text-secondary hover:underline transition-all duration-500">Log Out</button>
                </span>
             </div>
             <div className="px-3 mt-2">
             
              <p className="text-center text-xl">Hi,{user.name|| user}</p>
              <p>{customData.phoneNumber}</p>
              <p>{customData.firstName}</p>
              <p className="text-center my-6 text-3xl">Dashboard is coming..........</p>
             </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Not user</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
