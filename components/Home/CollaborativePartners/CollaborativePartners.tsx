import CommonParargraph from '../../common/CommonParargraph';
import CommonTitle from '../../common/CommonTitle';
import { InfiniteMovingCards } from './InfiniteMovingCards';

type item = {
  url: string;
};

const items: item[] = [
  {
    url: '/deletable/annapurna.png',
  },
  {
    url: '/deletable/cafe.png',
  },
  {
    url: '/deletable/eureka.png',
  },
  {
    url: '/deletable/jasper.png',
  },
  {
    url: '/deletable/mona.png',
  },
];

export const CollaborativePartners = () => {
  return (
    <section className='collaborative-partners-main flex w-screen flex-col items-center gap-8 overflow-hidden bg-white px-[48px] py-16 text-black sm:px-[100px] lg:px-[200px] lg:py-[100px]'>
      <CommonTitle title='Our Collaborative partners' />
      <CommonParargraph text='At AITC International, we view our clients as valued partners. Through collaboration, we tailor our solutions to their specific needs and aspirations.' />
      <div className='scrollbar-wrapper relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased'>
        <InfiniteMovingCards items={items} speed='slow' />
      </div>
    </section>
  );
};
