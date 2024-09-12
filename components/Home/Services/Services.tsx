import HeadingSection from './HeadingSection';
import ServicesList from './ServicesList';

const Services = () => {
  return (
    <section className='flex flex-row items-center justify-center
     gap-[6.25rem] p-[6.25rem] '>
      {' '}
      <HeadingSection />
      <ServicesList />{' '}
    </section>
  );
};

export default Services;
