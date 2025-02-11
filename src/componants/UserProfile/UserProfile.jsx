import React, { useContext } from 'react'
import { CreateuserAuthenticationContext } from '../ContextApi/UserAuthentication'

const UserProfile = () => {
    const {user} = useContext(CreateuserAuthenticationContext)
  return (
    <div>
       <h1>Profile</h1>
        {
            user ? (
                <div>
                    <p>{user.email}</p>
                    <p>{user.name}</p>
                </div>
            ):(
                <div>
                <p>not user</p>
                </div>
            )
        }

    </div>
  )
}

export default UserProfile