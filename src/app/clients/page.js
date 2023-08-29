'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import SwiperCore, { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Header from '../../../components/Header';
import Bg from '../../../assets/crypto_bg1.png';

import Brand1 from '../../../assets/brand1.svg';
import Emp_Logo from '../../../assets/logo/Empeperor_Logo1.png';
// SwiperCore.use([Virtual, Navigation, Pagination]);
const ClientsPage = () => {
    const ClientsData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]
    // const swiper = new Swiper('.swiper', {
    //   // Optional parameters
    //   direction: 'vertical',
    //   loop: true,
    
    //   // If we need pagination
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    
    //   // Navigation arrows
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    
    //   // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    // });
    return (
      <div className='w-full h-screen'>
        <div className='w-full h-full'>
            <Image src={Bg} alt='background' className='w-full h-full object-cover'/>
        </div>
        <div className='absolute inset-0 w-full h-screen bg-[rgba(2,36,67,0.5)] overflow-hidden'>
          <Header/>
          <div className='flex flex-col justify-center items-center w-full h-full mt-[100px] lg:mt-[75px]'>
            <h2 className='text-2xl lg:text-5xl text-center text-white font-semibold leading-7 lg:leading-[58px]'>Empeperor Clients</h2>
            <h3 className='text-sm lg:text-4xl text-center text-white font-semibold leading-4 lg:leading-10 my-3 lg:my-5'>Powerful Partnerships for Exceptional Results</h3>
            <div className="lg:hidden grid grid-cols-3 gap-3 mx-5 mt-2.5">
              {ClientsData.map((item,index) => 
                <div key={index} className="flex items-center justify-center px-4 py-8 rounded-[20px] bg-[rgba(255,255,255,0.3)] backdrop-blur-sm">
                  <div className='w-10 h-10 flex justify-center items-center'>
                    <Image src={Emp_Logo} alt='brand1 w-full h-full object-cover'/>
                  </div>
                </div>
              )}
            </div>
            <div className='hidden lg:block m-auto w-full h-full'>
              <Swiper
                rewind={true}
                navigation={true}
                slidesPerView={5}
                centeredSlides={true}
                spaceBetween={10}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                className="w-full h-full"
              >
                {ClientsData.map((item,index) => 
                  <SwiperSlide key={index}>
                  <div key={index} className='flex justify-center items-center place-self-center w-full h-[190px] mx-2 rounded-[20px] bg-[rgba(255,255,255,0.3)] backdrop-blur-sm'>
                    <div className='w-[80px] h-[80px] flex justify-center items-center'>
                      <Image src={Emp_Logo} alt='brand1 w-full h-full object-cover'/>
                    </div>
                  </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ClientsPage;