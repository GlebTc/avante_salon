import { IoCall, IoMailSharp } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import Link from 'next/link';
import constants from '@/src/data/constants.json';

const Footer = () => {
  const componentName = 'FOOTER';
  const currentYear = new Date().getFullYear();
  return (
    <div className='FOOTER_MAIN_CONTAINER h-180 bg-gray-500 text-amber-50 px-4 w-full max-w-[1170px] mx-auto xl:rounded-t-xl'>
      <div className='CONTACT_CONTAINER border-b border-gray-300 py-4 w-full'>
        <h2 className=' border-b-2 mb-8 border-b-amber-50'>
          Avanté Salon & Spa
        </h2>

        <div className='CONTACT_INFO'>
          <ul className='sm:text-xl md:text-2xl lg:text-3xl flex flex-col gap-2'>
            <li className='PHONE_CONTACT_CONTAINER flex items-center gap-4'>
              <FaLocationDot />
              <Link
                href='https://maps.app.goo.gl/rdsqxjYdqAe78SeNA'
                className='hover:text-amber-200 duration-[var(--main-duration)]'
                aria-label='Call Avanté Salon & Spa | (905) 546-5151'
                title='Call Avanté Salon & Spa | (905) 546-5151'
              >
                <p>
                  {constants.locations[0].address_one}{' '}
                  {constants.locations[0].address_two}
                </p>
              </Link>
            </li>

            <li className='PHONE_CONTACT_CONTAINER flex items-center gap-4'>
              <IoCall />
              <Link
                href='tel:9055465151'
                className='hover:text-amber-200 duration-[var(--main-duration)]'
                aria-label='Call Avanté Salon & Spa | (905) 546-5151'
                title='Call Avanté Salon & Spa | (905) 546-5151'
              >
                <p>{constants.locations[0].phone}</p>
              </Link>
            </li>

            <li className='EMAIL_CONTACT_CONTAINER flex items-center gap-4'>
              <IoMailSharp />

              <Link
                href='mailto:avante1050@gmail.com'
                className='hover:text-amber-200 duration-[var(--main-duration)]'
                aria-label='Email Avanté Salon & Spa | avante1050@gmail.com'
                title='Email Avanté Salon & Spa | avante1050@gmail.com'
              >
                <p>{constants.locations[0].email}</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='HOURS_CONTAINER border-b border-gray-300 w-full py-4 flex flex-col gap-2'>
        <h2 className='text-lg font-[600] uppercase'>Hours</h2>
        <div className='flex gap-8'>
          <p>Mon - Fri</p>
          <p>10:00 AM - 08:00 PM</p>
        </div>
        <div className='flex gap-8'>
          <p>Sat & Sun</p>
          <p>10:00 AM - 05:00 PM</p>
        </div>
      </div>
      <div
        className='text-[#90cdf4] text-2xl font-bold text-center w-fit mx-auto py-4'
        aria-label='© 2023 Web Development Hamilton. All rights reserved. | www.webdevelopmenthamilton.com | Web Development Hamilton'
      >
        <p>
          &copy; {currentYear} Web Development Hamilton. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
