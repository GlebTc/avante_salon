import { FaInstagram, FaPhone } from 'react-icons/fa6';
import { IoMailSharp } from 'react-icons/io5';
import Link from 'next/link';

const SocialMedia = () => {
  const componentName = 'SOCIAL_MEDIA';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER fixed bottom-2 right-2 flex flex-col justify-center items-center gap-4 bg-gray-950/60 z-[20] p-2 rounded-xl md:flex-row`}
    >
      <Link
        href='https://www.instagram.com/avante_salonspa/'
        className='w-fit h-fit text-amber-50 z-[20] hover:text-amber-200 duration-[var(--main-duration)]'
        aria-label='Avanté Salon & Spa | Instgram Link'
        title='Avanté Salon & Spa | Instgram Link'
      >
        <FaInstagram size={40} />
      </Link>

      <Link
        href='tel:9055465151'
        className='w-fit h-fit text-amber-50 z-[20] hover:text-amber-200 duration-[var(--main-duration)]'
        aria-label='Call Avanté Salon & Spa | (905) 546-5151'
        title='Call Avanté Salon & Spa | (905) 546-5151'
      >
        <FaPhone size={35} />
      </Link>
      <Link
        href='mailto:avante1050@gmail.com'
        className='w-fit h-fit text-amber-50 z-[20] hover:text-amber-200 duration-[var(--main-duration)]'
        aria-label='Email Avanté Salon & Spa | avante1050@gmail.com'
        title='Email Avanté Salon & Spa | avante1050@gmail.com'
      >
        <IoMailSharp size={35} />
      </Link>
    </div>
  );
};

export default SocialMedia;