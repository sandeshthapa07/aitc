import InfoHeader from './InfoHeader';
import MainHeader from './MainHeader';

const Header = () => {
  return (
    <header className='header main-padding h-24 w-full '>
      <InfoHeader />
      <MainHeader />
    </header>
  );
};

export default Header;
