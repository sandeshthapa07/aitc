'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

import { cn } from '../../../utils/cn';
import CommonButton from '../../common/CommonButton';

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
  const [index, setIndex] = useState<number>(0);
  const [openIndex, setOpenIndex] = useState<boolean>(false);

  const handleIndex = (index: number) => {
    setOpenIndex(!openIndex);
    setIndex(index);
  };

  const subCategoryRowStart = (index: number) => {
    return Math.floor((index + 5) / 3);
  };

  const tailwind = `row-start-${subCategoryRowStart(index)}`;
  console.log(tailwind);

  return (
    <LayoutGroup>
      <motion.ul
        layout
        className='grid w-full grid-cols-1 content-center gap-6 xmd:grid-cols-2 lg:grid-cols-[repeat(3,262px)]'
      >
        {' '}
        {services.map((service) => (
          <motion.li
            layout
            onClick={() => handleIndex(service?.id)}
            className='services-1 flex cursor-pointer flex-col items-center justify-center gap-6 rounded-2xl border border-border px-4 py-6'
            key={service?.id}
          >
            <div className='h-[95px] w-[123px] rounded-2xl bg-lightShade1'></div>
            <p className='text-center text-lg font-medium  text-mainBlack'>{service.title}</p>
          </motion.li>
        ))}
        <SubCategoryRowStart index={index} openIndex={openIndex} />
      </motion.ul>
    </LayoutGroup>
  );
};

export default ServicesList;

const SubCategoryRowStart = ({ index, openIndex }: { index: number; openIndex: boolean }) => {
  const largeScreenRowStart = (index: number) => {
    return Math.floor((index + 5) / 3);
  };
  const tabletSizeRowStart = (index: number) => {
    return Math.floor((index + 3) / 2);
  };

  const mobileSizeRowStart = (index: number) => {
    return Math.floor(index + 1);
  };
  const mediumScreenRowStart = window.innerWidth > 834 ? tabletSizeRowStart(index) : mobileSizeRowStart(index);

  function calculateWhereToshowArrow(dividend: number): string {
    if (window.innerWidth > 1024) {
      const result = dividend % 3;
      const rightSideposition = result == 2 ? 'right-1/2' : 'right-[15%]';
      const position = result == 1 ? 'right-[80%]' : rightSideposition;
      return position;
    } else if (window.innerWidth > 834) {
      const result = dividend % 2;
      const position = result == 1 ? 'right-[74%]' : 'right-[21%]';
      return position;
    } else {
      return 'right-1/2';
    }
  }

  return (
    <AnimatePresence>
      {openIndex && (
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            gridRowStart: window.innerWidth > 1024 ? largeScreenRowStart(index) : mediumScreenRowStart,
          }}
          className={cn(
            'relative col-span-full hidden  gap-6 rounded-lg border border-border p-4 ',
            openIndex && `flex`
          )}
        >
          <div className='flex flex-col  gap-6'>
            <p>
              Whether it’s an ideation with startups to growth-focused applications for mid-sized companies, as well as
              large-scale enterprise process optimization across various industries; our expertise scales to meet your
              unique needs ensuring the best-suited solution for the success.
            </p>
            <div className='flex flex-row flex-wrap gap-4'>
              <Link href='/' className='rounded-[6px] bg-lightShad2 p-4 font-medium text-mainBlack '>
                Website Development
              </Link>
              <Link href='/' className='rounded-[6px] bg-lightShad2 p-4 text-mainBlack '>
                Website Development
              </Link>
            </div>
            <CommonButton text='Learn more' variant='secondary' href={'/contactus'} />
          </div>
          <span className={cn('absolute bottom-[99.3%] right-1/2 ', calculateWhereToshowArrow(index))}>
            <svg width='23' height='20' viewBox='0 0 23 20' fill='white' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M1 18.5217L10.2863 1.5746C10.7042 0.811841 12.0304 0.806796 12.4484 1.56954C14.8059 5.87111 20.3357 15.9612 22 19'
                stroke='#C2C2F0'
              />
            </svg>
          </span>
        </motion.li>
      )}
    </AnimatePresence>
  );
};
