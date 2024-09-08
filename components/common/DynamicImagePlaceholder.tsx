import Image from 'next/image';

import getImage from '@/app/utils/dynamicImageBlur';

const DynamicImagePlaceholder = async () => {
  const image = await getImage(
    'https://plus.unsplash.com/premium_photo-1666672388644-2d99f3feb9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  );
  return (
    <div
      style={image?.css}
      className='relative flex size-20 flex-col items-center justify-center gap-10 bg-primary p-3 text-white'
    >
      <Image
        src={image?.img?.src}
        alt='placeholder'
        fill
        blurDataURL={image?.base64}
        placeholder='blur'
        sizes='100vw'
      />
    </div>
  );
};

export default DynamicImagePlaceholder;
