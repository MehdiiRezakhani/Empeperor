'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Header from '../../../components/Header';
import Bg from '../../../assets/crypto_bg1.png';
const ComingSoonPage = () => {
    return (
      <div className='w-full h-screen'>
        <div className='w-full h-full' style={{backgroundImage: `url('./assets/crypto_bg1.png')`}}>
            <Image src={Bg} alt='background' className='w-full h-full object-cover'/>
        </div>
        <div className='absolute inset-0 w-full h-screen bg-[rgba(2,36,67,0.5)] overflow-hidden'>
          <Header/>
          <div className='flex flex-col justify-center items-center w-full h-full mt-[100px] lg:mt-[75px]'>
            <h2 className='text-5xl lg:text-5xl text-center text-white font-semibold leading-7 lg:leading-[58px]'>Empeperor</h2>
            <h3 className='text-sm lg:text-xl text-center text-white font-semibold leading-4 lg:leading-10 my-3 lg:my-5'>Coming Soon...</h3>
          </div>
        </div>
      </div>
    );
};

export default ComingSoonPage;