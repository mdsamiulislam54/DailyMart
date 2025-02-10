import React from 'react'
import LoginPagesImages from '/src/assets/loginImages.png'
import { Link } from 'react-router'
import { FcBusinesswoman } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div className='bg-linear-to-r from-primary to-secondary py-4 text-white'>
       <div className='w-container mx-auto'>
       <div className='flex gap-5 justify-around items-center'>
          
          <div className=''>
            <div className="container">
             <picture>
                <img className='w-full ' src={LoginPagesImages} alt="" />
             </picture>
            </div>
          </div>
          <div className='shadow-2xl w-4/12'>
          <form action="" className=' bg-transparent  p-10'>
                <div className="flex flex-col gap-5">
                    <h2 className='flex justify-center items-center  '>
                        <span className='border p-2 rounded-full'><FcBusinesswoman size={70}/></span>
                    </h2>
                    <label for="exampleInputEmail1">Email address :</label>
                    <input
                    className='border-1 outline-none p-2 rounded-2xl text-lg '
                    type="email" name='email' placeholder='Pleace Enter Your Email' id='exampleInputEmail1' />

                    <label for="exampleInputPassword">Password :</label>

                    <input 
                     className='border-1 outline-none p-2 rounded-2xl text-lg '
                    type="password" name='password' placeholder='Pleace Enter Your Password' id='exampleInputPassword' />

                    <div className='flex justify-between'>
                        <button type='button' className='flex items-center gap-2 '>
                            <span><input type="checkbox" name="" id="checkbox" /></span>
                            <label for="checkbox" className='text-sm text-gray-600' >Show password</label>
                        </button>
                        <button>
                            <Link className='hover:underline hover:text-text transition-all duration-300 text-sm'> Forget Password</Link>
                        </button>
                    </div>
                  
                    <input 
                    className='w-full border border-white mb-6 p-2 rounded-2xl  font-bold 
                    text-xl cursor-pointer hover:bg-linear-to-r from-primary to-secondary transition-all duration-300'
                    type="submit"  value='Login' />

                    <div>
                        <p className='text-sm text-center text-gray-600 tracking-wide'>Don't have an account? <Link className='underline
                        font-bold hover:text-text text-white transition-all duration-300
                        '>Register Now</Link></p>
                    </div>
                </div>
            </form>
          </div>
          
        </div>
       </div>
    </div>
  )
}

export default LoginPage