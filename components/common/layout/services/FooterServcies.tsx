'use client';

import { FaChevronRight } from 'react-icons/fa';

import CommonParargraph from '../../CommonParargraph';
import { CommonHeader } from '../../CommonTitle';

const serviceslist = [
  {
    id: 1,
    title: 'Software Development',
    url: '/softwaredevelopment',
    subCategory: [
      {
        id: 1,
        title: 'ui/ux',
        url: '/softwaredevelopment/ui-ux',
      },
      {
        id: 2,
        title: 'frontedn',
        url: '/softwaredevelopment/frontend',
      },
    ],
  },
  {
    id: 2,
    title: 'Website Development',
    url: '/websitedevelopment',
    subCategory: [
      {
        id: 1,
        title: 'E-commerce',
        url: '/websitedevelopment/e-commerce',
      },
      {
        id: 2,
        title: 'Portfolio',
        url: '/websitedevelopment/portfolio',
      },
    ],
  },
  {
    id: 3,
    title: 'Mobile Development',
    url: '/mobiledevelopment',
    subCategory: [
      {
        id: 1,
        title: 'Android',
        url: '/mobiledevelopment/android',
      },
      {
        id: 2,
        title: 'iOS',
        url: '/mobiledevelopment/ios',
      },
    ],
  },
];

export const Services = () => {
  return (
    <div className='flex flex-col gap-[1.125rem]'>
      <CommonHeader title='SERVICE' />
      <div className='serviceslist flex flex-col gap-4'>
        {serviceslist.map((service) => (
          <div
            className='flex cursor-pointer flex-row items-center gap-4'
            key={service?.id}
          >
            <CommonParargraph text={service.title} />
            <span>
              <FaChevronRight size={12} fill='#3C3C46' />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const FooterServcies = () => {
  return <div>FooterServcies</div>;
};

export default FooterServcies;

const PopOver = () => {
  return <div className='flex flex-col bg-secondary  '></div>;
};
