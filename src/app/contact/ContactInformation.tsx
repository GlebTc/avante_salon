import Image from 'next/image';
import contact_img from '@/public/images/contact_img.webp';
import constants from '@/src/data/constants.json';

const ContactInformation = () => {
  const componentName = 'CONTACT_INFORMATION';
  return (
    <div className={`${componentName}`}>
      <div className='flex flex-col items-center justify-center item-hover h-full p-4 gap-4'>
        <div>
          <Image
            src={contact_img}
            alt='Contact Image'
            placeholder='blur'
            className='rounded-md'
          />
        </div>
        <div className='flex flex-col items-start justify-center w-full gap-2'>
          <div
            className={`${componentName}_ADDRESS_CONTAINER w-full flex justify-between text-sm gap-4`}
          >
            <p className='text-amber-800 font-bold'>Address: </p>
            <p className='text-right'>
              {constants.locations[0].address_one}
            </p>
          </div>
          <div
            className={`${componentName}_ADDRESS_CONTAINER w-full flex justify-between text-sm gap-4`}
          >
            <p className='text-amber-800 font-bold'>Phone: </p>
            <p className='text-right'>{constants.locations[0].phone}</p>
          </div>
          <div
            className={`${componentName}_ADDRESS_CONTAINER w-full flex justify-between text-sm gap-4`}
          >
            <p className='text-amber-800 font-bold'>Email: </p>
            <p className='text-right'>{constants.locations[0].email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;