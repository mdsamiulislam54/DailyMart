import React, { useContext, useRef, useState, useEffect } from "react";
import LoginPagesImages from "/src/assets/loginImages.png";
import { Link, useNavigate } from "react-router-dom";
import { FcBusinesswoman } from "react-icons/fc";
import { useDarkMode } from "../ContextApi/DarkModeApi";
import { BiLogoGooglePlusCircle, BiLogoFacebookCircle } from "react-icons/bi";
import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { CreateuserAuthenticationContext } from "../ContextApi/UserAuthentication";

const LoginPage = () => {
  const { darkMode } = useDarkMode();
  const { loginuser, Userinfo } = useContext(CreateuserAuthenticationContext);

  const [errorMessage, setErrorMessage] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");
  const [showPassword, setShowpassword] = useState(false);
  const clearRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (sucessMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSucessMessage("");
        setErrorMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [sucessMessage, errorMessage]);
const ShowPassword =()=>{
  setShowpassword(!showPassword)
}
  const handleLogin = (e) => {
    e.preventDefault();
    const form = clearRef.current;
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginuser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSucessMessage("Login Success");
        console.log(user);
        navigate("/userprofile");
        updateProfile(user, {
          email: user.email,
        });
        // .then(()=>{
        //   Userinfo({
        //     email: user.email,
        //     name : user.displayName,
        //     uid: user.uid,
        //     photoURL : user.photoURL
        //   })
        // })
        form.reset();
      })
      .catch((error) => {
        setErrorMessage("Invalid Email or Password", error);
      });
  };

  return (
    <div className={` py-4 h-[100%] text-white ${darkMode ? "bg-text" : ""}`}>
      <div className="lg:w-container mx-auto">
        <div className="flex lg:flex-row flex-col-reverse  gap-5 lg:justify-around justify-center items-center">
          <div className="">
            <div className="flex items-center justify-center">
              <picture>
                <img className="lg:w-full  " src={LoginPagesImages} alt="" />
              </picture>
            </div>
          </div>
          <div className="lg:shadow-sm rounded-2xl  lg:w-6/12 w-full">
            <form
              onSubmit={handleLogin}
              ref={clearRef}
              action=""
              className=" relative bg-transparent  p-10"
            >
              <div className="flex flex-col gap-5">
                <h2 className="flex justify-center items-center  ">
                  <span className="border p-2 rounded-full shadow-2xl">
                    <FcBusinesswoman size={70} />
                  </span>
                </h2>

                <input
                  className={`border outline-none p-2 rounded-2xl text-lg ${
                    darkMode
                      ? " text-white placeholder-white"
                      : " text-gray-900 placeholder-text"
                  }`}
                  type="email"
                  name="email"
                  placeholder=" Enter Your Email"
                  id="exampleInputEmail1"
                />

                <input
                  className={`border outline-none p-2 rounded-2xl text-lg ${
                    darkMode
                      ? " text-white placeholder-white"
                      : " text-text placeholder-text "
                  }`}
                  type={showPassword ? "text":"password"}
                  name="password"
                  placeholder=" Enter Your Password"
                  id="exampleInputPassword"
                />

                <div className="flex justify-between">
                  <button  onChange={ShowPassword}type="button" className="flex items-center gap-2 ">
                    <span>
                      <input type="checkbox" name="" id="checkbox" />
                    </span>
                    <label
                      htmlFor="checkbox"
                      className={`text-sm ${
                        darkMode ? "text-white" : "text-text"
                      }`}
                    >
                      Show password
                    </label>
                  </button>
                  <button>
                    <Link
                      className={`text-secondary  transition-all duration-300 text-sm
                              ${
                                darkMode
                                  ? "hover:hover:underline"
                                  : " hover:underline"
                              }
                              `}
                    >
                      {" "}
                      Forget Password
                    </Link>
                  </button>
                </div>

                <input
                  className={`w-full   mb-6 p-2 rounded-2xl  font-bold 
                    text-xl cursor-pointer  transition-all duration-300 ${
                      darkMode
                        ? " hover:bg-gray-300 bg-background text-text"
                        : "hover:bg-primary border border-text text-text hover:text-white hover:border-transparent"
                    }`}
                  type="submit"
                  value="Login"
                />

                <div>
                  <button
                    type="button"
                    className={`flex items-center gap-3 w-full justify-center p-2 rounded-2xl text-xl font-medium mb-5 cursor-pointer  transition-all duration-300 ${
                      darkMode
                        ? "text-text bg-white hover:bg-gray-300"
                        : "hover:bg-primary border border-text text-text hover:text-white hover:border-transparent"
                    }`}
                  >
                    <span>
                      <BiLogoGooglePlusCircle size={30} />
                    </span>{" "}
                    Login with Google
                  </button>
                  <button
                    type="button"
                    className={`flex items-center gap-3 w-full justify-center p-2 rounded-2xl text-xl font-medium transition-all duration-300 ${
                      darkMode
                        ? "text-text bg-white hover:bg-gray-300"
                        : "hover:bg-primary border border-text text-text hover:text-white hover:border-transparent"
                    }`}
                  >
                    <span>
                      <BiLogoFacebookCircle size={30} />
                    </span>{" "}
                    Login with Facebook
                  </button>
                </div>

                <div>
                  <p
                    className={`text-sm text-center ${
                      darkMode ? "text-white" : "text-text"
                    } tracking-wide`}
                  >
                    Don't have an account?{" "}
                    <Link
                      to={"/registration"}
                      className={`
                        f text-secondary transition-all duration-300
                        ${darkMode ? "hover:underline" : " hover:underline"}
                        `}
                    >
                      Register Now
                    </Link>
                  </p>
                  <div className="absolute top-0 left-0">
                    {errorMessage && (
                      <p className="text-red-500 text-center mt-2 ">
                        {errorMessage}
                      </p>
                    )}
                    {sucessMessage && (
                      <p className="text-green-500 text-center mt-2">
                        {sucessMessage}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
