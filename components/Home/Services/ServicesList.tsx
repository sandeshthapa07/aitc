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

  return (
    <LayoutGroup>
      <motion.ul layout className='grid w-full grid-cols-3 content-center gap-6'>
        {' '}
        {services.map((service) => (
          <motion.li
            layout
            onClick={() => handleIndex(service?.id)}
            className='services-1 flex cursor-pointer flex-col items-center justify-center gap-6 rounded-2xl border border-border px-4 py-6'
            key={service?.id}
          >
            <div className='h-[95px] w-[123px] rounded-2xl bg-lightShade1'></div>
            <p className='text-lg font-medium  text-mainBlack'>{service.title}</p>
          </motion.li>
        ))}
        <AnimatePresence>
          {openIndex && (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ gridRowStart: subCategoryRowStart(index) }}
              className={cn(
                'relative col-span-full hidden flex-col gap-6 rounded-lg border border-border p-4 ',
                openIndex && 'flex'
              )}
            >
              <p>
                Whether it’s an ideation with startups to growth-focused applications for mid-sized companies, as well
                as large-scale enterprise process optimization across various industries; our expertise scales to meet
                your unique needs ensuring the best-suited solution for the success.
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
            </motion.li>
          )}
        </AnimatePresence>
      </motion.ul>
    </LayoutGroup>
  );
};

export default ServicesList;
