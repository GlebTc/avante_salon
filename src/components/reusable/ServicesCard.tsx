'use client';
import Image from 'next/image';
import { useState } from 'react';
import ServicesOptions from './ServicesOptions';

type ServiceOption = {
  option_title: string;
  option_price: string;
};

type Service = {
  description: string;
  price: string;
  options?: ServiceOption[];
};

type ServicesCardProps = {
  title: string;
  imageSource: string;
  imageIndex: number;
  servicesList: Service[];
};

const ServicesCard: React.FC<ServicesCardProps> = ({
  title,
  imageSource,
  imageIndex,
  servicesList,
}) => {
  const componentName = 'SERVICES_CARD';
  const imagePath = `/images/${imageSource}/${imageSource}_00${imageIndex}.webp`;
  const [showOptions, setShowOptions] = useState<{ [key: number]: boolean }>({});

  const toggleOptions = (index: number) => {
    setShowOptions((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className={`${componentName}_MAIN_CONTAINER border p-4 rounded-lg shadow-lg`}>
      <h3 className='border-b-2 border-amber-800 mb-2 text-2xl w-[70%] md:w-[100%] font-bold'>
        {title}
      </h3>

      <div className='relative h-[300px] w-full mb-4 item-hover'>
        <Image
          src={imagePath}
          alt={title}
          fill
          className='object-cover rounded-md object-left-top'
          sizes='1'
        />
      </div>

      <div className={`${componentName}_SERVICES_LIST py-4 flex flex-col gap-2`}>
        {servicesList.map((service, idx) => (
          <div key={idx} className={`${componentName}_SERVICE_ITEM flex flex-col gap-1 relative`}>
            <div className="flex justify-between">
              <p>{service.description}</p>
              <p
                className={`text-amber-800 font-bold ${
                  service.options ? 'cursor-pointer hover:text-amber-600 duration-[var(--main-duration)]' : ''
                }`}
                onClick={() => service.options && toggleOptions(idx)}
              >
                {service.price}
              </p>
            </div>

            {/* Options Overlay */}
            {service.options && showOptions[idx] && (
              <ServicesOptions
                options={service.options}
                showOptions={showOptions[idx]}
                setShowOptions={() => toggleOptions(idx)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCard;
