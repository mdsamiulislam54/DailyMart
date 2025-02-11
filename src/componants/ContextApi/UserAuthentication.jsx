
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../../Firebase/Firebase'

export const CreateuserAuthenticationContext = createContext()

const UserAuthentication = ({children}) => {

    const [user, setUser] = useState(null)

    const registeruser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginuser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
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

const userinfomation = {registeruser,user, loginuser}



  return (
    <CreateuserAuthenticationContext.Provider value={userinfomation}>
        {children}
    </CreateuserAuthenticationContext.Provider>
  )
}

export default UserAuthentication 
