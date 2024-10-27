import React from 'react';

const WorkContent = () => {
  const componentName = 'WORK_CONTENT';
  return (
    <div
      className={`${componentName}_HEADING_CONTAINER py-4 flex flex-col justify-center gap-4`}
    >
      <h2 className={`font-bold text-3xl text-center mx-8`}>
        Our Work at Avanté Salon & Spa
      </h2>
      <p className='text-center p-4 md:px-12 lg:px-24'>
        At Avanté Salon & Spa, we take immense pride in the work we do,
        transforming our clients and leaving them feeling confident and
        beautiful. Take a glimpse into our portfolio to see some examples of our
        expertise
      </p>
    </div>
  );
};

export default WorkContent;