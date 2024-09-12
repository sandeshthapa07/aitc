import Link from 'next/link';

const services = [
  {
    id: 1,
    title: 'Software Development',
    icon: 'image',
    subcategories: {
      description:
        'As a Leading Software development service provider, we deliver custom software solutions for businesses of all sizes. Whether it’s an ideation with startups to growth-focused applications for mid-sized companies, as well as large-scale enterprise process optimization across various industries; our expertise scales to meet your unique needs ensuring the best-suited solution for the success.',
      category: [
        {
          id: 1,
          url: '/softwaredevelopment',
          title: 'WebSite Development',
        },
        {
          id: 2,
          url: '/ecommerdevelopment',
          title: 'Ecommerce development',
        },
      ],
    },
  },
  {
    id: 2,
    title: 'Software Development',
    icon: 'image',
    subcategories: {
      description:
        'As a Leading Software development service provider, we deliver custom software solutions for businesses of all sizes. Whether it’s an ideation with startups to growth-focused applications for mid-sized companies, as well as large-scale enterprise process optimization across various industries; our expertise scales to meet your unique needs ensuring the best-suited solution for the success.',
      category: [
        {
          id: 1,
          url: '/softwaredevelopment',
          title: 'WebSite Development',
        },
        {
          id: 2,
          url: '/ecommerdevelopment',
          title: 'Ecommerce development',
        },
      ],
    },
  },
  {
    id: 3,
    title: 'Software Development',
    icon: 'image',
    subcategories: {
      description:
        'As a Leading Software development service provider, we deliver custom software solutions for businesses of all sizes. Whether it’s an ideation with startups to growth-focused applications for mid-sized companies, as well as large-scale enterprise process optimization across various industries; our expertise scales to meet your unique needs ensuring the best-suited solution for the success.',
      category: [
        {
          id: 1,
          url: '/softwaredevelopment',
          title: 'WebSite Development',
        },
        {
          id: 2,
          url: '/ecommerdevelopment',
          title: 'Ecommerce development',
        },
      ],
    },
  },
  {
    id: 4,
    title: 'Software Development',
    icon: 'image',
    subcategories: {
      description:
        'As a Leading Software development service provider, we deliver custom software solutions for businesses of all sizes. Whether it’s an ideation with startups to growth-focused applications for mid-sized companies, as well as large-scale enterprise process optimization across various industries; our expertise scales to meet your unique needs ensuring the best-suited solution for the success.',
      category: [
        {
          id: 1,
          url: '/softwaredevelopment',
          title: 'WebSite Development',
        },
        {
          id: 2,
          url: '/ecommerdevelopment',
          title: 'Ecommerce development',
        },
      ],
    },
  },
  {
    id: 5,
    title: 'Software Development',
    icon: 'image',
    subcategories: {
      description:
        'As a Leading Software development service provider, we deliver custom software solutions for businesses of all sizes. Whether it’s an ideation with startups to growth-focused applications for mid-sized companies, as well as large-scale enterprise process optimization across various industries; our expertise scales to meet your unique needs ensuring the best-suited solution for the success.',
      category: [
        {
          id: 1,
          url: '/softwaredevelopment',
          title: 'WebSite Development',
        },
        {
          id: 2,
          url: '/ecommerdevelopment',
          title: 'Ecommerce development',
        },
      ],
    },
  },
  {
    id: 6,
    title: 'Software Development',
    icon: 'image',
    subcategories: {
      description:
        'As a Leading Software development service provider, we deliver custom software solutions for businesses of all sizes. Whether it’s an ideation with startups to growth-focused applications for mid-sized companies, as well as large-scale enterprise process optimization across various industries; our expertise scales to meet your unique needs ensuring the best-suited solution for the success.',
      category: [
        {
          id: 1,
          url: '/softwaredevelopment',
          title: 'WebSite Development',
        },
        {
          id: 2,
          url: '/ecommerdevelopment',
          title: 'Ecommerce development',
        },
      ],
    },
  },
  {
    id: 7,
    title: 'Software Development',
    icon: 'image',
    subcategories: {
      description:
        'As a Leading Software development service provider, we deliver custom software solutions for businesses of all sizes. Whether it’s an ideation with startups to growth-focused applications for mid-sized companies, as well as large-scale enterprise process optimization across various industries; our expertise scales to meet your unique needs ensuring the best-suited solution for the success.',
      category: [
        {
          id: 1,
          url: '/softwaredevelopment',
          title: 'WebSite Development',
        },
        {
          id: 2,
          url: '/ecommerdevelopment',
          title: 'Ecommerce development',
        },
      ],
    },
  },
];

const ServicesList = () => {
  return (
    <ul className='grid grid-cols-3 gap-6'>
      {services.map((service) => (
        <li
          className='services-1 flex h-[194px] w-[266px] cursor-pointer flex-col items-center justify-center gap-6 rounded-2xl border border-border px-4 py-6'
          key={service?.id}
        >
          <div className='h-[95px] w-[123px] rounded-2xl bg-lightShade1'></div>
          <p className='text-lg font-medium  text-mainBlack'>{service.title}</p>
        </li>
      ))}

      <li className='rounded-lg border border-border p-4 '>
        <p>
          Whether it’s an ideation with startups to growth-focused applications
          for mid-sized companies, as well as large-scale enterprise process
          optimization across various industries; our expertise scales to meet
          your unique needs ensuring the best-suited solution for the success.
        </p>
        <div className='flex flex-row flex-wrap gap-4'>
          <Link href='/'>Website Development</Link>
        </div>
      </li>
    </ul>
  );
};

export default ServicesList;
