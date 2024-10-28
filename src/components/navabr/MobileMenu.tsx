import React from 'react';
import menuItems from '@/src/data/menuItems.json';
import { IoCloseSharp } from 'react-icons/io5';
import Link from 'next/link';
import constants from '@/src/data/constants.json';

const MobileMenu = ({
  menuIsOpen,
  setMenuIsOpen,
}: {
  menuIsOpen: boolean;
  setMenuIsOpen: any;
}) => {
  const componentName = 'MENU';
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div
      className={`z-[200] fixed top-0 left-0 w-full h-screen duration-1000 bg-amber-800 text-[var(--background)] ${
        menuIsOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Close Button */}
      <button
        onClick={toggleMenu}
        className='absolute top-4 right-4 text-3xl z-20'
        aria-label='Mobile Menu Close Button | Avanté Salon & Spa | Hair Salon & Spa in Hamilton'
        title='Mobile Menu Close Button | Avanté Salon & Spa | Hair Salon & Spa in Hamilton'
      >
        <IoCloseSharp />
      </button>

      <div
        className={`${componentName}_MENU_ITEMS_CONTAINER h-full w-full text-center relative z-10`}
      >
        <ul className='space-y-4 h-[75%] flex flex-col justify-center items-center'>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={toggleMenu}
            >
              <h2>
                <Link
                  href={item.href}
                  aria-label={`${item.title} | Mobile Menu Item | Avanté Salon & Spa  | Hair Salon & Spa in Hamilton`}
                  title={`${item.title} | Mobile Menu Item | Avanté Salon & Spa  | Hair Salon & Spa in Hamilton`}
                >
                  {item.title}
                </Link>
              </h2>
            </li>
          ))}
        </ul>
        <div
          className={`${componentName}_MENU_FOOTER_CONTAINER w-full h-fit pt-12 border-t-[1px] border-[var(--main-color)] flex justify-center items-center`}
        >
          <h4>
            Follow us{' '}
            <Link
              href='https://www.instagram.com/avante_salonspa/'
              title='Instagram Link @avante_salonspa | Avanté Salon & Spa  | Hair Salon & Spa in Hamilton'
              aria-label='Instagram Link @avante_salonspa | Avanté Salon & Spa  | Hair Salon & Spa in Hamilton'
            >
              @{constants.locations[0].instagram_account}
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
