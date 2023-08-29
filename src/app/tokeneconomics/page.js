'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';
//components
import Header from '../../../components/Header';

//media
import Bg from '../../../assets/backgrounds/bg6.png';
import tokenChart1_Image from '../../../assets/images/tokenChart1_Image.png';
import tokenChart2_Image from '../../../assets/images/tokenChart2_Image.png';
import tokenChart3_Image from '../../../assets/images/tokenChart3_Image.png';


const TokenEconomicsPage = () => {
    return (
      <div className='w-full h-screen overflow-hidden'>
        <div className='w-full h-full z-0'>
            <Image src={Bg} alt='background' className='w-full h-full object-cover'/>
        </div>
        <div className='absolute inset-0 z-20 w-full h-full overflow-hidden bg-gradient-to-b from-[rgba(0,0,0,0.2)]  to-[rgba(0,0,0,0.5)]'>
          <Header/>
          <div className='flex flex-col items-stretch w-full h-full overflow-y-scroll pt-[100px] lg:pt-[200px]'>
            <div className='flex flex-col items-stretch w-full px-10 lg:px-32'>
              <h1 className='text-2xl sm:text-4xl font-bold text-primary leading-6 mb-6 sm:mb-12'>Token Economics</h1>
              <h2 className='text-sm sm:text-xl text-primary font-semibold leading-7'>Token Name: <span className='text-white'>EMPEPEROR</span></h2>
              <h2 className='text-sm sm:text-xl text-primary font-semibold leading-7'>Ticker: <span className='text-white'>EMPEPE</span></h2>
              <h2 className='text-sm sm:text-xl text-primary font-semibold leading-7'>Token Contract: <span className='text-white text-[8px] xs:text-xs sm:text-sm lg:text-xl'>0xEe56BF3d175c8d37e6D3C6b867291AB7b1865367r</span></h2>
              <h2 className='text-sm sm:text-xl text-primary font-semibold leading-7'>Token Network: <span className='text-white'>Ethereum</span></h2>
              <h2 className='text-sm sm:text-xl text-primary font-semibold leading-7'>Token Supply: <span className='text-white'>88,888,888,888,888</span></h2>
            </div>
            <div className='flex flex-col lg:flex-row justify-between mt-36 px-5 lg:px-24'>
              <div>
                <h2 className='text-2xl sm:text-3xl text-primary font-bold'>Token Distribution</h2>
                <div className='lg:w-[300px] lg:h-[300px] mt-6 sm:mt-10 ml-10'>
                  <Image 
                    src={tokenChart1_Image} 
                    alt='Token Chart'
                    className='w-full h-full'
                  />
                </div>
              </div> 
              <div className='lg:w-[600px] lg:h-[600px] mt-16 lg:mt-0'>
                <Image 
                  src={tokenChart2_Image} 
                  alt='Token Chart'
                  className='w-full h-full object-cover backdrop-blur-md'
                />
              </div>
            </div>
            <div className='w-full px-5 lg:px-24 mt-20 self-center'>
              <div className='w-full p-3 lg:px-10 lg:py-7 bg-[rgba(25,251,155,0.16)] rounded-3xl backdrop-blur-md'> 
                <table className='w-full text-[6px] xs:text-[10px] sm:text-sm lg:text-xl text-white text-center font-semibold'>
                  <tr className='w-full border-b-[1px] lg:border-b-[3px] border-white/20'>
                    <th className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>Allocation</th>
                    <th className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>Amount</th>
                    <th className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>%</th>
                    <th className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>Vesting</th>
                    <th className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>Days</th>
                    <th className= 'p-1 lg:p-2.5'>Cycle Release %</th>
                  </tr>
                  <tr className='w-full border-b-[1px] lg:border-b-[3px] border-white/20'>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>Liquidity</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>18888888888888</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>-</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>-</td>
                    <td className='p-1 lg:p-2.5'>-</td>
                  </tr>
                  <tr className='w-full border-b-[1px] lg:border-b-[3px] border-white/20'>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5 text-primary'>Staking</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5 text-primary'>18888888888888</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>25 mos</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='p-1 lg:p-2.5'>95</td>
                  </tr>
                  <tr className='w-full border-b-[1px] lg:border-b-[3px] border-white/20'>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>Ecosystem</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>18888888888888</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>25 mos</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='p-1 lg:p-2.5'>95</td>
                  </tr>
                  <tr className='w-full border-b-[1px] lg:border-b-[3px] border-white/20'>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5 text-primary'>Treasury</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5 text-primary'>18888888888888</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>25 mos</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='p-1 lg:p-2.5'>95</td>
                  </tr>
                  <tr className='w-full border-b-[1px] lg:border-b-[3px] border-white/20'>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>Marketing</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>18888888888888</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>25 mos</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='p-1 lg:p-2.5'>95</td>
                  </tr>
                  <tr className='w-full border-b-[1px] lg:border-b-[3px] border-white/20'>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5 text-primary'>Rewards</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5 text-primary'>18888888888888</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>25 mos</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='p-1 lg:p-2.5'>95</td>
                  </tr>
                  <tr className='w-full border-b-[1px] lg:border-b-[3px] border-white/20'>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>CEX Listing</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>18888888888888</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>25 mos</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='p-1 lg:p-2.5'>95</td>
                  </tr>
                  <tr className='w-full border-b-[1px] lg:border-b-[3px] border-white/20'>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5 text-primary'>Team</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5 text-primary'>18888888888888</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>25 mos</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='p-1 lg:p-2.5'>95</td>
                  </tr>
                  <tr className='w-full border-b-[1px] lg:border-b-[3px] border-white/20'>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>Unlocked</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>18888888888888</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>25 mos</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='p-1 lg:p-2.5'>95</td>
                  </tr>
                  <tr className='w-full'>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5 text-primary'>Total</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5 text-primary'>18888888888888</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>25 mos</td>
                    <td className='border-r-[1px] lg:border-r-[3px] border-white/20 p-1 lg:p-2.5'>21</td>
                    <td className='p-1 lg:p-2.5'>95</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className='w-full lg:w-[876px] h-[360px] self-center mt-9 px-5'>
              <Image
                src={tokenChart3_Image}
                alt='Token Chart Image'
                className='w-full h-full object-cover rounded-lg'
              />
            </div>
            <p className='text-base text-center text-white font-normal my-9 self-center'>Last modified 3 day ago</p>
          </div>
        </div>
      </div>
    );
};

export default TokenEconomicsPage;