import { IoMdCloseCircleOutline } from 'react-icons/io';

type ServiceOption = {
  option_title: string;
  option_price: string;
};

const ServicesOptions = ({
  options,
  showOptions,
  setShowOptions,
}: {
  options: ServiceOption[];
  showOptions: boolean;
  setShowOptions: any;
}) => {
  return (
    <div className={`${showOptions ? 'absolute' : 'hidden'} z-[50] h-full w-full right-0`}>
      <div
        className='CLOSE_BUTTON_CONTAINER absolute top-2 right-2 text-white cursor-pointer hover:text-gray-400 duration-[var(--main-duration)]'
        onClick={() => setShowOptions(!showOptions)}
      >
        <IoMdCloseCircleOutline size={30} />
      </div>
      {options && (
        <div className='flex flex-col gap-2 justify-center items-start pt-12 p-4 bg-amber-800/95 rounded-lg'>
          {options.map((option: ServiceOption, index: number) => (
            <div
              key={index}
              className='text-white font-bold flex justify-between w-full'
            >
              <p>{option.option_title}</p>
              <p>{option.option_price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesOptions;
