'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';

import useOutsideClick from '../../../hooks/useOutSideClick';

const MobileLayout = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const ref = useRef<HTMLButtonElement>(null);

  useOutsideClick(ref, () => setOpenMenu(false));
  useEffect(() => {
    if (!openMenu) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [openMenu]);

  return (
    <button
      ref={ref}
      onClick={() => setOpenMenu(!openMenu)}
      className=' lg:hidden'
    >
      <RxHamburgerMenu size={32} fill='#5F6368' />
      {openMenu && <MobileMenu />}
    </button>
  );
};

export default MobileLayout;

const MobileMenu = () => {
  return (
    <div className='  absolute left-0 top-full z-[9999999999]  h-screen w-full   border bg-white '>
      <ul className='flex size-full   flex-col items-start gap-8 overflow-y-auto p-6 '>
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
    </div>
  );
};
