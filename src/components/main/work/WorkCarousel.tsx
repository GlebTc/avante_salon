'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GoDotFill, GoDot } from 'react-icons/go';

const WorkCarousel = () => {
  const numberOfImages = 9;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex === numberOfImages - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className='relative h-[75dvh] rounded-2xl overflow-hidden m-4 item-hover'>
      <Image
        src={`/images/carousel/carousel_00${currentIndex + 1}.webp`}
        alt={`Our Work Image | Avanté Salon & Spa | Hair Salon & Spa in Hamilton`}
        title={`Our Work Image | Avanté Salon & Spa | Hair Salon & Spa in Hamilton`}
        fill
        sizes="1"
        className='object-cover object-top'
        quality={100}
      />
      <div className='absolute bottom-2 left-0 right-0 flex justify-center py-2'>
        {Array.from({ length: numberOfImages }).map((_, index) => (
          <div
            key={index}
            className='flex items-center justify-center mx-2 cursor-pointer text-amber-50'
            onClick={() => setCurrentIndex(index)}
          >
            {currentIndex === index ? (
              <GoDotFill size={20} />
            ) : (
              <GoDot size={20} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCarousel;