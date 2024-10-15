// components/Navbar.tsx
"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './ui/YellowButton';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`absolute top-0 left-0 w-full flex items-center justify-between py-5 px-5 lg:px-40 z-10 
      ${isOpen ? 'backdrop-blur-md bg-white bg-opacity-30 border border-white/20' : 'bg-transparent'}`}>
      
      <div className='flex gap-5 items-center font-bold text-white'>
        <Link href='/' className='text-[20px]'>
          Construction <span className='text-foreground'>X</span>
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className='md:hidden' onClick={toggleMenu}>
        {isOpen ? <FaTimes className='text-white text-2xl' /> : <FaBars className='text-white text-2xl' />}
      </div>

      {/* Menu Links */}
      <div className={`flex-col md:text-lg md:font-bold md:flex-row md:flex items-center gap-5 transition-transform duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden md:flex'}`}>
        <Link href='/' className='text-white'>Home</Link>
        <Link href='/' className='text-white'>Services</Link>
        <Link href='/' className='text-white'>About</Link>
        <Link href='/' className='text-white'>Projects</Link>
        <Link href='/' className='text-white'>Contact</Link>
        
        {/* Get a Quote Button */}
        <Button text='Get a quote' href='/get-a-quote' />
      </div>
    </div>
  );
}

export default Navbar;
