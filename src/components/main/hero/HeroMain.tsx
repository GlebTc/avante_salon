import Image from 'next/image';
import main_hero_bg from '@/public/images/main_hero_bg.webp';
import Link from 'next/link';

const HeroMain = () => {
  const componentName = 'MAIN_HERO';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-[100dvh] w-full relative`}
    >
      <div
        className={`${componentName}_IMAGE_OVERLAY absolute top-0 left-0 w-full h-full bg-gray-950/30 z-[-5]`}
      ></div>
      <Image
        src={main_hero_bg}
        alt='Main Hero Background | Avanté Salon & Spa | Hair Salon & Spa in Hamilton'
        title='Main Hero Background | Avanté Salon & Spa | Hair Salon & Spa in Hamilton'
        fill
        className='object-cover object-center z-[-10]'
        priority
      />

      <div
        className={`${componentName}_CONTENT_CONTAINER h-full pt-[90px] flex flex-col justify-around items-center text-amber-50 text-center p-4 md:px-12 lg:px-24 xl:px-32 2xl:px-52`}
      >
        <h1>Welcome to Avanté Salon & Spa</h1>
        <h2>Where Beauty Meets Serenity</h2>
        <p className='text-base md:text-lg lg:text-xl xl:text-2xl'>
          Indulge in the ultimate pampering experience at Avanté Salon & Spa.
          Step into a world where relaxation and rejuvenation are the norms, and
          every visit leaves you feeling refreshed, revitalized, and radiant.
        </p>
        <Link
          href='/contact'
          className='button'
          aria-label='Link to Contact Us Page | Avanté Salon & Spa | avante1050@gmail.com | Hair Salon & Spa in Hamilton'
          title='Link to Contact Us Page | Avanté Salon & Spa | avante1050@gmail.com | Hair Salon & Spa in Hamilton'
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default HeroMain;
