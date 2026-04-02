import React, { useState, useEffect } from 'react'
import { HashLink } from "react-router-hash-link";
import { assets } from '../assets/assets'
import { Link } from "react-router-dom"

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] =useState(false);
useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'  }
      else{
        document.body.style.overflow = 'auto'
      }
      return () => { document.body.style.overflow = 'auto'
      };
    }, [showMobileMenu]); 

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className='w-full flex justify-between items-center py-4 px-8 md:px-20 lg:px-32 bg-transparent'>
     <Link to="/#Header">
  <img src={assets.estatelogo2} alt="Logo" className="w-30 object-contain" />
</Link>
        <ul className='hidden md:flex gap-8 text-white'>
           <HashLink to="/#Header" className='cursor-pointer hover:text-gray-400'>Home</HashLink>
          <HashLink to="/#About" className='cursor-pointer hover:text-gray-400'>About</HashLink>
          <HashLink to="/#Services" className='cursor-pointer hover:text-gray-400'>Services</HashLink>
          <HashLink to="/#Properties" className='cursor-pointer hover:text-gray-400'>Properties</HashLink>
          <HashLink to="/#Projects" className='cursor-pointer hover:text-gray-400'>Projects</HashLink>
          <HashLink to="/#Testimonails" className='cursor-pointer hover:text-gray-400'>Testimonials</HashLink>
        </ul>
          <Link to="/signup">
  <button className="hidden md:block bg-white px-8 py-2 rounded-full 
  transition-all duration-200
  hover:shadow-lg hover:-translate-y-0.5
  active:scale-95">
    Sign Up
  </button>
</Link>
            <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className="md:hidden w-7 " alt=""/>
      </div>
      {/*------------------------------Mobile Menu------------------*/}
     <div className={`md:hidden ${
  showMobileMenu ? 'fixed w-full' : 'h-0 w-0'
} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
        <img  onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} alt="" className='w-6' />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={() => setShowMobileMenu(false)}  href='#Header' className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={() => setShowMobileMenu(false)}  href='#About' className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={() => setShowMobileMenu(false)}  href='#Services' className='px-4 py-2 rounded-full inline-block'>Services</a>
          <a onClick={() => setShowMobileMenu(false)}  href='#Properties' className='px-4 py-2 rounded-full inline-block'>Properties</a>
          <a onClick={() => setShowMobileMenu(false)}  href='#Projects' className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a onClick={() => setShowMobileMenu(false)}  href='#Testimonails' className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar