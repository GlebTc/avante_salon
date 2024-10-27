import WorkContent from './WorkContent';
import WorkCarousel from './WorkCarousel';

const WorkMain = () => {
  const component = 'WORK_MAIN';
  return (
    <div className='max-w-[1200px] mx-auto grid md:grid-cols-2'>
      <WorkContent />
      <WorkCarousel />
    </div>
  );
};

export default WorkMain;