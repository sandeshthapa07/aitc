import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRightLong } from 'react-icons/fa6';

const SpotlightCard = ({
  title,
  image,
  tags,
}: {
  title: string;
  image: string;
  tags: string[];
}) => {
  return (
    <Link
      href='/portfolio'
      className='flex flex-col gap-8 rounded-2xl bg-lightShad2'
    >
      <Image
        src={image}
        alt='spotlight'
        width={500}
        height={500}
        className='size-full rounded-t-2xl object-contain'
      />
      <div className='flex flex-col gap-6 px-6 pb-6'>
        <div className='flex flex-row items-center gap-2'>
          <p className='text-lg font-bold text-mainBlack'>{title}</p>
          <FaRightLong className='text-lg text-primary' />
        </div>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <p key={tag}>
              {tag}
              {index < tags.length - 1 && ','}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default SpotlightCard;
