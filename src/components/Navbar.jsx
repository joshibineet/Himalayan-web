import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Footer/footer logo.png";

const Navbar = () => {
  return (
    <>
       <header className='flex flex-col md:flex-row bg-gray-800 justify-between items-center shadow-xl py-5 px-[88px] text-white sticky top-0 z-50 h-5'>
        <div className="logo">
          <img src={logo} className='w-24 h-10 rounded-md' alt="Logo" />
        </div>
        <nav className='md:flex md:space-x-16 md:items-center text-xl mt-4 md:mt-0 mb-3 '>
          <Link to="/" className='hover:text-orange-400 no-underline'>Home</Link>
          <Link to="/about_us" className='hover:text-orange-400 no-underline'>About</Link>
          <Link to="/contact_us" className='hover:text-orange-400 no-underline'>Contact</Link>
          <Link to="/travel" className='hover:text-orange-400 no-underline'>Travel</Link>
        </nav>
        <div className=" buttons mt-4 md:mt-0 mb-3">
          <button className='bg-white text-black px-6 py-2 rounded-lg font-semibold text-lg transition duration-300 hover:bg-red-700 hover:text-white'>
            Sign In
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar;
