
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../../Firebase/Firebase'

export const CreateuserAuthenticationContext = createContext()

const UserAuthentication = ({children}) => {

    const [user, setUser] = useState(null)
    const [sucessMsg , setSuccessMsg] = useState()
    const [errorMsg, setErrorMsg] = useState()
    const [customData , setCustomData] = useState({})

    const registeruser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginuser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
const logout = () => {
    signOut(auth)
    .then(()=>{
        setSuccessMsg("Sign out Successful!")
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

const userinfomation = {registeruser,user, loginuser,logout,sucessMsg,errorMsg,userCustomData,customData}



  return (
    <CreateuserAuthenticationContext.Provider value={userinfomation}>
        {children}
    </CreateuserAuthenticationContext.Provider>
  )
}

export default UserAuthentication 
