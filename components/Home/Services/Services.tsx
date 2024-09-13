import HeadingSection from './HeadingSection';
import ServicesList from './ServicesList';

const Services = () => {
  return (
    <section
      className='flex flex-row items-center justify-center gap-10 px-6
    xmd:gap-[3.25rem] xmd:px-16 lg:gap-[6.25rem]  lg:py-[6.25rem] xl:px-[16.125rem] '
    >
      {' '}
      <HeadingSection />
      <ServicesList />
    </section>
  );
};

export default Services;
