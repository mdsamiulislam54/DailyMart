import React, { useContext, useRef, useState, useEffect } from "react";
import RegisterImages from "../../assets/loginImages.png";
import { FcBusinesswoman } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { BiLogoGooglePlusCircle, BiLogoFacebookCircle } from "react-icons/bi";
import { useDarkMode } from "../ContextApi/DarkModeApi";
import { CreateuserAuthenticationContext } from "../ContextApi/UserAuthentication";
import { updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Registraion = () => {
  const { UserInfo, registeruser, user,userCustomData ,loginGoogleHandler} = useContext(
    CreateuserAuthenticationContext
  );
  const { darkMode } = useDarkMode();
  const [sucessMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
    const [showPassword, setShowpassword] = useState(false);
    const [termsCheck , settermsCheck] = useState(false)
  const navigate = useNavigate();

  const clearFrom = useRef();
  useEffect(() => {
    if (sucessMessage || error) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [sucessMessage, error]);
  const ShowPassword =()=>{
    setShowpassword(!showPassword)
  }
  const handleForm = (e) => {
    e.preventDefault();
    const from = clearFrom.current;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const phoneNumber = e.target.phoneNumber.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const email = e.target.email.value;
   

    if (password !== confirmPassword) {
      setError("Password and Confirm Password should be the same");
      return;
    }else if(!termsCheck){
      setError('You must agree to the terms and conditions')
      return
    }

    registeruser(email, confirmPassword).then((result) => {
      const user = result.user;
      console.log(user);
      setSuccessMessage("Registration Successful!");
      userCustomData({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,

      })
      updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
        
      }).then(() => {
        UserInfo({
          name: user.displayName,
          email: user.email,
          
          photo: user.photoURL,
          uid: user.uid,
        });
      })
      .catch((err)=>{
        console.log(err)
      })
    });

 

    from.reset();
    setTimeout(() => navigate("/login"), 3000).then(() => {
      console.log("Registration Successful");
    });
  };
//restration with google 
const googleHandler = () => {
  loginGoogleHandler()
    .then((result) => {
      const user = result.user;
      setSuccessMessage("Registration Successful!");
      navigate('/userprofile')
      
      // Store user info
      setUser({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid: user.uid,
      });

      // If needed, you can call userCustomData
      userCustomData({
        name: user.displayName,
        email: user.email,
        uid: user.uid
      });

    })
    .catch((error) => {
      setError(error.message);
    });
};

  return (
    <div className={`z-10${darkMode ? "bg-text" : "bg-background"}`}>
     
      <div className="lg:w-container mx-auto py-2">
        <div className="lg:grid grid-cols-5 gap-5 place-content-center ">
          <div className="col-span-2 place-content-center lg:block hidden">
            <picture>
              <img src={RegisterImages} alt="" />
            </picture>
          </div>
          <div className={`col-span-3 place-content-center`}>
            {/* From handle  */}
            <form
              ref={clearFrom}
              onSubmit={handleForm}
              action=""
              className={`relative`}
            >
              {/* All input fild */}

              <div className="grid gap-5 w-full shadow-lg   p-10">
                {/* Man icon */}
                <div className="grid place-content-center">
                  <Link className="bg-white shadow-2xl p-5 rounded-full">
                    <FcBusinesswoman size={70} />
                  </Link>
                </div>
                {/* Man icon */}
                <div className="grid grid-cols-2 gap-3">
                  <input
                    className={` border border-gray-400 p-2 rounded-2xl  ${
                      darkMode
                        ? "placeholder-gray-300 "
                        : "placeholder-gray-600"
                    } `}
                    type="text"
                    name="firstName"
                    placeholder="Enter Your First Name"
                    required
                  />

                  <input
                    className={` border border-gray-400 p-2 rounded-2xl  ${
                      darkMode
                        ? "placeholder-gray-300 "
                        : "placeholder-gray-600"
                    } `}
                    type="text"
                    name="lastName"
                    placeholder="Enter Your Last Name"
                    required
                  />
                </div>

                <input
                  className={` border border-gray-400 p-2 rounded-2xl  ${
                    darkMode ? "placeholder-gray-300 " : "placeholder-gray-600"
                  } `}
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter Your Phone Numbar"
                  required
                />

                <input
                  className={` border border-gray-400 p-2 rounded-2xl  ${
                    darkMode ? "placeholder-gray-300 " : "placeholder-gray-600"
                  } `}
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />

                <input
                  className={` border border-gray-400 p-2 rounded-2xl  ${
                    darkMode ? "placeholder-gray-300 " : "placeholder-gray-600"
                  } `}
                  type={showPassword ? "text":"password"}
                  name="password"
                  placeholder="Enter Your Password"
                  required
                />

                <input
                  className={` border border-gray-400 p-2 rounded-2xl  ${
                    darkMode ? "placeholder-gray-300 " : "placeholder-gray-600"
                  } `}
                  type={showPassword ? "text":"password"}
                  name="confirmPassword"
                  placeholder="Enter Your Repassword"
                  required
                />
                <div className="flex justify-between my-6">
                  <div className="flex gap-2 items-center">
                    <input onChange={ShowPassword} type="checkbox" name="" id="checkboxShowPassword" />
                    <label
                      htmlFor="checkboxShowPassword"
                      className="text-base cursor-pointer"
                    >
                      Show Password
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      onChange={((e)=> settermsCheck(e.target.checked))}
                      checked={termsCheck}
                      type="checkbox"
                      name="condition"
                      id="termsCondition"
                    />
                    <label
                      htmlFor="termsCondition"
                      className="text-base cursor-pointer"
                    >
                      Terms &amp; Conditions <span>Policy Accept</span>
                    </label>
                  </div>
                </div>
                <div>
                  {error && (
                    <p className="text-red-500 text-center mt-2 ">{error}</p>
                  )}
                  {sucessMessage && (
                    <p className="text-green-500 text-center mt-2">
                      {sucessMessage}
                    </p>
                  )}
                </div>
                <button
                  className={`w-full border  p-2 rounded-2xl text-xl font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                    darkMode
                      ? "hover:bg-gray-300 bg-background text-text"
                      : "hover:bg-primary border border-gray-400  text-text hover:text-white hover:border-transparent"
                  }`}
                  type="submit"
                >
                  Sign Up{" "}
                </button>

                <div>
                  <button
                    type="button"
                    onClick={googleHandler}
                    className={`flex items-center gap-3 w-full justify-center p-2 rounded-2xl text-xl font-medium mb-5 cursor-pointer ${
                      darkMode
                        ? "hover:bg-gray-300 bg-background text-text"
                        : "hover:bg-primary border border-gray-400  text-text hover:text-white hover:border-transparent"
                    }
                    }`}
                  >
                    <span>
                      <BiLogoGooglePlusCircle size={30} />
                    </span>
                    Login with Google
                  </button>
                  <button
                    type="button"
                    className={`flex items-center gap-3 w-full justify-center p-2 rounded-2xl text-xl font-medium ${
                      darkMode
                        ? "hover:bg-gray-300 bg-background text-text"
                        : "hover:bg-primary border border-gray-400  text-text hover:text-white hover:border-transparent"
                    }
                    }`}
                  >
                    <span>
                      <BiLogoFacebookCircle size={30} />
                    </span>
                    Login with Facebook
                  </button>
                </div>

                <div>
                  <p
                    className={`text-center font-medium text-base tracking-wider`}
                  >
                    Already have an account?{" "}
                    <Link
                      to={"/login"}
                      className={`text-secondary hover:underline transition-all duration-300`}
                    >
                      Login
                    </Link>
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
