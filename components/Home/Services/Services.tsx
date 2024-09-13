import HeadingSection from './HeadingSection';
import ServicesList from './ServicesList';

const Services = () => {
  return (
    <section
      className='flex flex-col gap-10 px-6 py-[3.75rem] xmd:gap-[3.25rem]
    xmd:px-16 xmd:py-[6.25rem] lg:flex-row  lg:gap-[6.25rem] xl:px-[16.125rem] '
    >
      {' '}
      <HeadingSection />
      <ServicesList />
    </section>
  );
};

export default Services;
