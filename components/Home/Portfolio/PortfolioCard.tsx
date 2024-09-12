import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className='flex flex-col content-center justify-center gap-4 rounded-2xl bg-white p-4'>
      <div>
        <Image
          src={image}
          alt='portfolio'
          width={500}
          height={500}
          className='size-full rounded-2xl object-contain'
        />
      </div>
      <div className='flex flex-col items-center justify-center gap-6 rounded-2xl bg-lightShad2 p-4 text-center'>
        <p className='text-lg font-bold text-mainBlack'>{title}</p>
        <p>{description}</p>
        <Link href='/portfolio' className='text-lg font-bold text-primary'>
          Read case study
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
