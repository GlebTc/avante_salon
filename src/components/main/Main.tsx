import ServicesMain from '@/src/components/main/services/ServicesMain';
import AboutMain from '@/src/components/main/about/AboutMain';
import HeroMain from '@/src/components/main/hero/HeroMain';
import WorkMain from '@/src/components/main/work/WorkMain';

const Main = () => {
  return (
    <div>
      <HeroMain />
      <ServicesMain />
      <AboutMain />
      <WorkMain />
    </div>
  );
};

export default Main;
