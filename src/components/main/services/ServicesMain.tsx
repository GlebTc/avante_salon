import ServicesCard from '@/src/components/reusable/ServicesCard';
import main_page_services from '@/src/data/main_page_services.json';
import ServicesDescription from '@/src/components/main/services/ServicesDescription';

const ServicesMain: React.FC = () => {
  const componentName = 'SERVICES_MAIN';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-full p-4 max-w-7xl mx-auto`}
    >
      <ServicesDescription />
      <div
        className={`${componentName}_INDIVIDUAL_SERVICES_CONTAINER grid md:grid-cols-2 lg:grid-cols-4 gap-4`}
      >
        {' '}
        {main_page_services.categories.map((category, index) => (
          <ServicesCard
            key={index}
            title={category.title}
            imageSource={main_page_services.image_source}
            imageIndex={category.image_index}
            servicesList={category.services_list}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesMain;
