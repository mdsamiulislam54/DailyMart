
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../../Firebase/Firebase'
import { useNavigate } from 'react-router'

export const CreateuserAuthenticationContext = createContext()

const UserAuthentication = ({children}) => {

    const [user, setUser] = useState(null)
    const [sucessMsg , setSuccessMsg] = useState()
    const [errorMsg, setErrorMsg] = useState()
    const [customData , setCustomData] = useState({})
    const navigate = useNavigate()

    const registeruser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginuser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    // login with google
    const loginGoogleHandler = ()=>{
        const GoogleProvider = new  GoogleAuthProvider()
        return signInWithPopup(auth,GoogleProvider)
    }



const logout = () => {
    signOut(auth)
    .then(()=>{
        setSuccessMsg("Sign out Successful!")
        alert("Sign out Successful!")
        navigate('/')
    }).catch(()=>{
        setErrorMsg('Sign Out Unsuccessfully!')
    })
}
    // const Userinfo = (profile)=>{
    //     setUser(profile)
    // }

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
               setUser({
                name : user.displayName,
                email: user.email,
                photo: user.photoURL,
                uid :  user.uid,
                phoneNumber : user.phoneNumber
               })
            }else{
                setUser(null)
            }
        })
    },[])

    const userCustomData = (data)=>{
        setCustomData(data)
    }

const userinfomation = {registeruser,user, loginuser,logout,sucessMsg,errorMsg,userCustomData,customData,loginGoogleHandler}



  return (
    <CreateuserAuthenticationContext.Provider value={userinfomation}>
        {children}
    </CreateuserAuthenticationContext.Provider>
  )
}

export default UserAuthentication 
