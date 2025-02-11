import React from "react";
import RegisterImages from "../../assets/loginImages.png";
import { FcBusinesswoman } from "react-icons/fc";
import { Link } from "react-router";
import { BiLogoGooglePlusCircle, BiLogoFacebookCircle } from "react-icons/bi";
import { useDarkMode } from "../ContextApi/DarkModeApi";

const Registraion = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`${darkMode ? "bg-text" : "bg-background"}`}>
      <div className="lg:w-container mx-auto py-2">
        <div className="grid grid-cols-5 gap-5 place-content-center ">
          <div className="col-span-2 place-content-center">
            <picture>
              <img src={RegisterImages} alt="" />
            </picture>
          </div>
          <div className={`col-span-3 place-content-center`}>
            <form action="" className={``}>
              {/* All input fild */}

              <div className="grid gap-5 w-full shadow-lg   p-10">
                {/* Man icon */}
                <div className="grid place-content-center">
                  <Link className="bg-white shadow-2xl p-5 rounded-full">
                    <FcBusinesswoman size={70} />{" "}
                  </Link>
                </div>
                {/* Man icon */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    className={` border p-2 rounded-2xl placeholder-gray-500 `}
                    type="text"
                    name="fstname"
                    placeholder="Enter Your First Name"
                    required
                  />

                  <input
                    className={` border p-2 rounded-2xl placeholder-gray-500 `}
                    type="text"
                    name="fstname"
                    placeholder="Enter Your Last Name"
                    required
                  />
                </div>

                <input
                className={` border p-2 rounded-2xl placeholder-gray-500 `}
                  type="numbar"
                  name="phoneNumbar"
                  placeholder="Enter Your Phone Numbar"
                  required
                />

                <input
                className={` border p-2 rounded-2xl placeholder-gray-500 `}
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />

                <input
                className={` border p-2 rounded-2xl placeholder-gray-500 `}
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  required
                />

                <input
                className={` border p-2 rounded-2xl placeholder-gray-500 `}
                  type="password"
                  name="repassword"
                  placeholder="Enter Your Repassword"
                  required
                />
                <div className="flex justify-between my-6">
                  <div className="flex gap-2 items-center">
                    <input type="checkbox" name="" id="checkboxShowPassword" />
                    <label for="checkboxShowPassword" className="text-base cursor-pointer">Show Password</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input

                      type="checkbox"
                      name="condition"
                      id="termsCondition"
                    />
                    <label for="termsCondition" className="text-base cursor-pointer">
                      Terms &amp; Conditions <span>Policy Accept</span>
                    </label>
                  </div>
                </div>
                <button
                className={`w-full border p-2 rounded-2xl text-xl font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                    darkMode ? "hover:bg-gray-300 bg-background text-text":"hover:bg-primary border border-text text-text hover:text-white hover:border-transparent"
                }`}
                type="submit">Sign Up </button>

                <div>
                  <button
                    type="button"
                    className={`flex items-center gap-3 w-full justify-center p-2 rounded-2xl text-xl font-medium mb-5 cursor-pointer ${
                      darkMode ? "hover:bg-gray-300 bg-background text-text":"hover:bg-primary border border-text text-text hover:text-white hover:border-transparent"
                }
                    }`}
                  >
                    <span>
                      <BiLogoGooglePlusCircle size={30} />
                    </span>{" "}
                    Login with Google
                  </button>
                  <button
                    type="button"
                    className={`flex items-center gap-3 w-full justify-center p-2 rounded-2xl text-xl font-medium ${
                      darkMode ? "hover:bg-gray-300 bg-background text-text":"hover:bg-primary border border-text text-text hover:text-white hover:border-transparent"
                }
                    }`}
                  >
                    <span>
                      <BiLogoFacebookCircle size={30} />
                    </span>{" "}
                    Login with Facebook
                  </button>
                </div>

                <div>
                  <p className={`text-center font-medium text-base tracking-wider`}>
                    Already have an account? <Link to={'/login'} className={`text-secondary hover:underline transition-all duration-300`}>Login</Link>{" "}
                  </p>
                </div>
              </div>

              {/* All input fild */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registraion;
