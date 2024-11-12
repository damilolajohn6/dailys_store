import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from 'react-icons/fa6';
import { FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-2 py-5 w-full mx-auto max-w-sm">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icons" />
          </div>

          <form className='pt-6'>
            <div className="grid">
              <label>Email:</label>
              <div className='bg-slate-100 p-2'>
                <input
                  type="email"
                  placeholder="enter email"
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="grid">
              <label>Password:</label>
              <div className='bg-slate-100 p-2 flex'>
                <input
                  type={showPassword? "text" : "password"}
                  placeholder="enter password"
                  className="w-full h-full outline-none bg-transparent"
                />
                <div className='cursor-pointer text-xl ' onClick={()=>setShowPassword((preve)=>!preve)}>
                    <span>
                        {
                            showPassword?(
                                <FaEyeSlash />
                            )
                            :
                            (
                                <FaEye />
                            )
                        }
                    </span>
                </div>
              </div>
              <Link to={"/forgot-password"} className='block w-fit ml-auto hover:underline hover:text-red-700'>
                    Forgot Password
              </Link>
            </div>

            <button className='bg-red-700 hover:bg-red-900 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-100'>Login</button>
          </form>

          <p className='my-5'>Don't have an account?
            <Link to={"/sign-up"}
            className='hover:text-red-700'>Sign Up
            </Link></p>

        </div>
      </div>
    </section>
  );
}

export default Login
