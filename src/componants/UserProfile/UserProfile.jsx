import React, { useContext } from 'react'
import { CreateuserAuthenticationContext } from '../ContextApi/UserAuthentication'
import { useDarkMode } from '../ContextApi/DarkModeApi'
import { FcBusinessman } from "react-icons/fc";

const UserProfile = () => {
    const {user,customData} = useContext(CreateuserAuthenticationContext)
    const {darkMode} = useDarkMode()
  return (
    <div className='relative'>
       
        {
            user ? (
                <div className='lg:w-container mx-auto   mt-1'>
                   <div className='grid grid-cols-6 gap-6 '>
                   <div className={`col-span-2 bg-gray-100 h-[100vh]`}>
                    <div className='flex justify-center items-center gap-5 flex-col  '>
                       <FcBusinessman size={120} className='p-5 shadow-2xl rounded-full'/>
                       <p className='text-xl font-medium '>{user.name}</p>
                       <p className='text-sm font-medium'>{user.email}</p>
                    </div>
                    
                    </div>
                    <div className='col-span-4'>
                      
                    <p>{user.email}</p>
                    <p>{user.name}</p>
                    <p>{customData.phoneNumber}</p>
                    <p>{customData.firstName}</p>
                    </div>
                   </div>
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