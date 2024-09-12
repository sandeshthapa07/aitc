import React from 'react';

import { CommonAnimation } from '../../common/animation/CommonAnimation';
import CommonButton from '../../common/CommonButton';
import CommonParargraph from '../../common/CommonParargraph';
import CommonTitle from '../../common/CommonTitle';
import PortfolioCard from './PortfolioCard';

const data = [
  {
    id: 1,
    title: 'VMS(Visitor Management System)',
    description:
      'Welcome to Kabel Interiors, where we turn spaces into art. We craft inspired interior designs with style and spohistication, bringing your vision to life.',
    image: '/deletable/creative.png',
  },
  {
    id: 2,
    title: 'VMS(Visitor Management System)',
    description:
      'Welcome to Kabel Interiors, where we turn spaces into art. We craft inspired interior designs with style and spohistication, bringing your vision to life.',
    image: '/deletable/creative.png',
  },
  {
    id: 3,
    title: 'VMS(Visitor Management System)',
    description:
      'Welcome to Kabel Interiors, where we turn spaces into art. We craft inspired interior designs with style and spohistication, bringing your vision to life.',
    image: '/deletable/creative.png',
  },
];

const Portfolio = () => {
  return (
    <CommonAnimation className='flex min-h-screen flex-col items-center justify-center gap-12 bg-lightShad2 px-6 py-14'>
      <CommonTitle title="See what's in our creative stove" />
      <CommonParargraph
        text='Discover in-depth insights and innovative discoveries to understand the industry shifts. Our team provides valuable knowledge and expert guidance'
        className='text-center xl:w-1/2'
      />
      <div className='grid  items-center justify-items-center gap-8 md:grid-cols-2 xl:w-3/5 xl:grid-cols-3'>
        {data.map((item) => (
          <PortfolioCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
      <CommonButton text='Explore More' href='/portfolio' />
    </CommonAnimation>
  );
};

export default Portfolio;
