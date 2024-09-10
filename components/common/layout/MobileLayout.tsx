'use client';

import { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';

const MobileLayout = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <button onClick={() => setOpenMenu(!openMenu)} className=' lg:hidden'>
      <RxHamburgerMenu size={32} fill='#5F6368' />
      {openMenu && <MobileMenu />}
    </button>
  );
};

export default MobileLayout;

const MobileMenu = () => {
  return (
    <ul className=' absolute bottom-0 left-0 z-[9999999999]  flex size-full flex-col items-center  gap-16 overflow-hidden border  '>
      <li>
        <Link className='text-lg text-mainBlack' href='/services'>
          Services
        </Link>
      </li>
      <li>
        <Link className='text-lg text-mainBlack' href='/ourwork'>
          Our Work
        </Link>
      </li>
      <li>
        <Link className='text-lg text-mainBlack' href='/Career'>
          Career
        </Link>
      </li>
      <li>
        <Link className='text-lg text-mainBlack' href='/insights'>
          Insights
        </Link>
      </li>
      <li>
        <Link
          href='/contact us'
          className='font=medium rounded bg-primary px-4 py-2.5 text-lg text-white '
        >
          Contact us
        </Link>
      </li>
    </ul>
  );
};
