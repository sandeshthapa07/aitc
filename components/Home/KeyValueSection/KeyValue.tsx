import Image from 'next/image';

import { CommonAnimation } from '../../common/animation/CommonAnimation';
import CommonTitle from '../../common/CommonTitle';

const data = [
  {
    id: 1,
    title: 'Innovative Solutions tailored for you',
    description:
      'At AITC, pride in delivering tailored innovative solutions is paramount. From software development to digital marketing and IT consulting, we utilize cutting-edge tech and strategic thinking for your business success.',
    icon: '/deletable/key1.png',
  },
  {
    id: 2,
    title: 'Reliable partnership for growth',
    description:
      'Trust AITC, your growth ally. We forge partnerships beyond services for long-term goals. Expertise, dedication, proactive approach drive value, continuous improvement.',
    icon: '/deletable/key2.png',
  },
  {
    id: 3,
    title: 'Exceptional quality and customer satisfaction',
    description:
      'Quality is paramount at AITC. From consultation to delivery, we prioritize excellence. Rigorous QA and clear communication ensure exceptional results, exceeding expectations.',
    icon: '/deletable/key3.png',
  },
];

const KeyValue = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-14 bg-lightShad2 py-14 xl:py-24'>
      <CommonAnimation>
        <CommonTitle title='Our Key Value Proposition' />
      </CommonAnimation>
      <div className='grid w-[90%] gap-10 lg:grid-cols-2 xl:w-[70%] xl:grid-cols-3 '>
        {data.map((item) => (
          <div
            key={item.id}
            className='flex flex-col gap-6 rounded-2xl bg-white p-4'
          >
            <div className='flex h-[200px] items-center justify-center'>
              <Image
                src={item.icon}
                alt='keyvalue'
                width={100}
                height={100}
                className='size-32 object-contain'
              />
            </div>
            <p className='text-center text-lg text-mainBlack'>{item.title}</p>
            <p className='text-center text-mainBlack'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyValue;
