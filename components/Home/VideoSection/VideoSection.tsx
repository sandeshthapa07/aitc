import React from 'react';

import CommonButton from '../../common/CommonButton';
import CommonParargraph from '../../common/CommonParargraph';
import { FlipWords } from './FlipWords';

const VideoSection = () => {
  const words = [
    {
      name: 'Coding',
      icon: '/images/code.png',
      color: '#484BA0',
    },
    {
      name: 'Crafting',
      icon: '/images/crafting.png',
      color: '#8B50D7',
    },
    {
      name: 'Designing',
      icon: '/images/design.png',
      color: '#3F66F0',
    },
    {
      name: 'Engineering',
      icon: '/images/engineering.png',
      color: '#FF7500',
    },
  ];
  return (
    <div
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#FFFFFF',
      }}
      className="video-section-main xl:min-w-screen flex flex-col items-center justify-center gap-14 !bg-[#f8f8ff] px-6 py-16 md:bg-[url('/svg/videosection.svg')] md:px-16 md:py-20 xl:min-h-screen"
    >
      <div className='video-section-description flex flex-col gap-8'>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex flex-wrap items-center justify-center text-center text-[2rem] font-black text-mainBlack xmd:text-[2.5rem] lg:text-5xl'>
            A Company <FlipWords words={words} /> Success
          </div>
          <CommonParargraph
            text='Join us where innovation meets teamwork: a hub of creativity and collaboration driving tech, design, SEO, marketing, and business development to new heights!. Join us where innovation meets teamwork.'
            className='text-center lg:w-3/5'
          />
        </div>
      </div>
      <div className='video-container-main flex size-full justify-center'>
        <video
          src={'/deletable/video.mp4'}
          autoPlay
          muted
          playsInline
          loop
          className='rounded-lg border-primary xl:w-3/5'
        >
          <track src='/video.vtt' kind='captions' />
        </video>
      </div>
      <CommonButton
        href='/contact us'
        text='Explore more'
        variant='secondary'
        className='link-button bg-lightShad2'
      />
    </div>
  );
};

export default VideoSection;
