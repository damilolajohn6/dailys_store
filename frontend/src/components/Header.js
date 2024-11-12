import React from 'react'
import Logo from './logo'
import { CiSearch } from "react-icons/ci";
import { FaUserLarge } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header className="h-26 shadow-md bg-white ">
      <div className="h-full flex container mx-auto items-center px-4 justify-between">
        <div className="  text-blue-900">
            <Link to={"/"}>
                <Logo w={100} h={60} />
            </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-1">
          <input
            type="text"
            placeholder="search product here..."
            className="w-full outline-none"
          />
          <div className="text-white text-lg min-w-[50px] h-8 flex items-center hover:bg-red-900 bg-red-700 justify-center rounded-r-full">
            <CiSearch />
          </div>
        </div>

        <div className="flex gap-7 items-center">
          <div className="text-3xl cursor-pointer">
            <FaUserLarge />
          </div>

          <div className='text-2xl relative'>
            <span><FaShoppingCart /></span>

            <div className='bg-red-700 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                <p className='text-sm'>0</p>
            </div>

          </div>

          <div className=''>
            <Link to={"/login"} className='px-3 py-1  rounded-full bg-red-700 hover:bg-red-900 text-white'>Login</Link>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header
