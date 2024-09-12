import Image from 'next/image';

import CommonButton from '../../common/CommonButton';
import CommonParargraph from '../../common/CommonParargraph';
import CommonTitle from '../../common/CommonTitle';
import FAQMain from './FAQMain';

const FAQ = () => {
  return (
    <div className='faq-component-main flex min-h-screen flex-col xl:flex-row'>
      <div className='faq-header relative'>
        <div
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className='-z-10 flex min-h-[700px] w-full flex-col items-center justify-center gap-4 bg-[url("/svg/FAQMobile.svg")] object-contain lg:h-[500px] lg:bg-[url("/svg/FAQTablet.svg")] xl:size-[600px] xl:bg-[url("/svg/FAQWeb.svg")]'
        >
          <div className='flex w-3/5 flex-row items-center justify-center xl:items-start xl:justify-start'>
            <Image
              src='/deletable/questionmark.png'
              alt='FAQ'
              width={103}
              height={131}
              className='size-28 object-contain'
            />
          </div>

          <div className='flex w-3/5 flex-col gap-8'>
            <CommonTitle title='Curiosity Corner' />
            <CommonParargraph text='Welcome to our Knowledge Hub! Delve into frequently asked questions by visitors, potential clients, and collaborators. Find insights into our services, practices and more.' />
            <CommonButton text='Get a free quote' href='' />
          </div>
        </div>
      </div>
      <FAQMain />
    </div>
  );
};

export default FAQ;
