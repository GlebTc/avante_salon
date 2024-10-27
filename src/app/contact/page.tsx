import ContactForm from '@/src/app/contact/ContactForm';
import ContactInformation from '@/src/app/contact/ContactInformation';

const Contact = () => {
  const componentName = 'CONTACT';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER max-w-[1200px] mx-auto p-4`}
    >
      <h2
        className={`${componentName}_HEADER_CONTAINER font-bold text-3xl text-center m-4 mt-24`}
      >
        Contact Us
      </h2>

      <div
        className={`${componentName}_CONTENT_CONTAINER grid gap-4 lg:grid-cols-2`}
      >
        <ContactInformation />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;