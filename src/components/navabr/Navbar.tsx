'use client';
import { useState, useEffect } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import MobileMenu from './MobileMenu';
import logo from '@/public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const componentName = 'NAVBAR';
  const [navShadow, setNavShadow] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER fixed top-0 left-0 w-full h-fit bg-amber-50 flex justify-between items-center p-2 z-[100] ${
        navShadow ? 'shadow-md shadow-gray-400' : ''
      }`}
    >
      <Link
        href='/'
        className='relative h-[50px] w-[100px]'
      >
        <Image
          src={logo}
          alt='Logo'
          fill
          className='object-contain h-full w-auto rounded-xl'
        />
      </Link>

      <Link
        className={`${componentName}_PHONE_BUTTON_CONTAINER bg-gray-950/60 p-1 rounded-xl cursor-pointer duraion-[var(--main-duration)] animate-pulse font-bold`}
        href='tel:9055465151'
        aria-label='Call Avanté Salon & Spa | (905) 546-5151'
        title='Call Avanté Salon & Spa | (905) 546-5151'
      >
        <h1 className='text-amber-50 hover:text-amber-200 xl:text-4xl'>
          (905) 546-5151
        </h1>
      </Link>

      <IoMenuSharp
        size={30}
        className='text-amber-800 cursor-pointer hover:text-amber-600 duration-[var(--main-duration)]'
        onClick={toggleMenu}
      />

      <MobileMenu
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
      />
    </div>
  );
};

export default Navbar;
