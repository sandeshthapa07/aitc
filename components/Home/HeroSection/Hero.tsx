'use client';

import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import { CommonAnimation } from '../../common/animation/CommonAnimation';
import CommonButton from '../../common/CommonButton';
import CommonParargraph from '../../common/CommonParargraph';
import CommonTitle from '../../common/CommonTitle';

const Hero = () => {
  return (
    <div className='hero-section-main flex flex-col items-center justify-between bg-lightShad2  px-6 py-10 max-xl:gap-4 xl:flex-row'>
      <div className='hero-section-description flex h-full flex-col items-center justify-center gap-2 xl:w-2/5 '>
        <CommonAnimation>
          <div className='flex flex-col gap-4 '>
            <CommonTitle title='Building Your Tech Solutions' />
            <CommonParargraph text="Transforming Ideas into Digital Reality. Let's Build Success Together" />
            <div className='flex flex-row items-center gap-4'>
              <CommonButton href='/contact us' />
              <CommonButton
                href='/contact us'
                text='Learn More'
                variant='secondary'
                className='w-fit'
              />
            </div>
          </div>
        </CommonAnimation>
      </div>
      <div className='hero-section-animation relative xl:w-3/5'>
        <Player
          autoplay
          loop
          src='/json/animation.json'
          style={{
            width: '50%',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
