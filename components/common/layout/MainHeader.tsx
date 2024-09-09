import Link from 'next/link';

const MainHeader = () => {
  return (
    <nav className='header flex flex-row items-center justify-between   '>
      <Link href='/'>Logo</Link>
      <ul className='gap- flex flex-row items-center gap-16'>
        <li>
          <Link href='/services'>Services</Link>
        </li>
        <li>
          <Link href='/ourwork'>Our Work</Link>
        </li>
        <li>
          <Link href='/Career'>Career</Link>
        </li>
        <li>
          <Link href='/insights'>Insights</Link>
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
    </nav>
  );
};

export default MainHeader;
