import ServicesCard from '@/src/components/reusable/ServicesCard';
import lashes_services from '@/src/data/lashes_services.json';

const Lashes: React.FC = () => {
  const componentName = 'LASHES';

  return (
    <div className={`${componentName}_MAIN_CONTAINER h-full p-4 max-w-7xl mx-auto`}>
      <h2 className='text-center text-3xl font-bold mb-8'>Lash Services</h2>
      <div className={`${componentName}_INDIVIDUAL_SERVICES_CONTAINER grid md:grid-cols-2 lg:grid-cols-3 gap-4`}>
        {lashes_services.categories.map((category, index) => (
          <ServicesCard
            key={index}
            title={category.title}
            imageSource={lashes_services.image_source}
            imageIndex={category.image_index}
            servicesList={category.services_list}
          />
        ))}
      </div>
    </div>
  );
};

export default Lashes;
