import { Alkatra } from 'next/font/google';
import Image from 'next/image';
import about_me from '@/public/images/about_me.webp';

const alkatra = Alkatra({ subsets: ['latin'] });

const AboutMain = () => {
  const componentName = 'MAIN_ABOUT';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-full p-4 max-w-7xl mx-auto grid md:grid-cols-2`}
    >
      <Image
        src={about_me}
        alt='About Me'
        className='object-cover object-top w-full h-[75dvh] item-hover'
      />
      <div
        className={`${componentName}_HEADING_CONTAINER py-4 flex flex-col justify-center gap-4`}
      >
        <h2 className={`font-bold text-3xl text-center`}>About Me</h2>
        <p className='text-center p-4 md:px-12 lg:px-24'>
          With over a decade of experience in the beauty industry, I am proud to
          lead a team dedicated to excellence at Avanté Salon & Spa . As a master
          stylist, I have honed my craft to perfection, specializing in creating
          stunning looks that reflect each client's unique personality and
          style.
        </p>
        <p className={`${alkatra.className} text-center`}>
          Master Stylis & Salon Owner
        </p>
      </div>
    </div>
  );
};

export default AboutMain;