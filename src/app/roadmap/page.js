'use client'
import React, { useRef, useState } from 'react';
import Image from 'next/image';

import Header from '../../../components/Header';
import Bg from '../../../assets/backgrounds/bg4.jpg';

const RoadMap = () => {
    return (
      <div className='w-full h-screen'>
        <div className='w-full h-full'>
            <Image src={Bg} alt='background' className='w-full h-full object-cover'/>
        </div>
        <div className='absolute inset-0 w-full h-screen overflow-hidden'>
          <Header/>
          <div className='flex flex-col justify-center items-center w-full h-full mt-[10px] lg:mt-[75px]'>
            <div className="svgLoaded">
              <svg version="1.1" id="InteractiveSVG" xmlns="http://www.w3.org/2000/svg" x="0px"
                y="0px" className='w-[500px] xs:w-[750px] sm:w-[1000px] h-full lg:h-4/5 mt-0 lg:mt-36' viewBox="0 0 1024 1388" 
              >
              <g id="timeline">
                <g id="coffee">
                  <rect x="505.545" y="429" fill="#19FB9B" width="17" height="107"/>
                  <polyline fill="#19FB9B" points="509.334,474.132 497.023,483.456 514.566,494.415"/>
                  <g>
                    <text transform="matrix(1 0 0 1 565.5449 494.2139)" className='text-xl text-white' fill='#fff'>3rd Quarter 2023</text>
                  </g>
                  <g id="coffee-badge">
                    <circle fill='#19FB9B' cx="311.581" cy="484.273" r="130.5"/>
                    <g id="coffee-title">
                      <text transform="matrix(1 0 0 1 270.416 403.2793)" className='text-xl' fill='#000'>target A</text>
                    </g>
                    <g id="coffee-details">
                      <text transform="matrix(1 0 0 1 219.7134 430.4023)" fill="#000" className='text-sm'>Web Site</text>
                      <text transform="matrix(1 0 0 1 219.7134 450.4023)" fill="#000" className='text-sm'>Twitter</text>
                      <text transform="matrix(1 0 0 1 219.7134 470.4023)" fill="#000" className='text-sm'>Telegram</text>
                      <text transform="matrix(1 0 0 1 219.7134 490.4023)" fill="#000" className='text-sm'>Uniswap Listing</text>
                      <text transform="matrix(1 0 0 1 219.7134 510.4023)" fill="#000" className='text-sm'>Platform Launch</text>
                      <text transform="matrix(1 0 0 1 219.7134 530.4023)" fill="#000" className='text-sm'>Referral System Launch</text>
                      <text transform="matrix(1 0 0 1 219.7134 550.4023)" fill="#000" className='text-sm'>Escrow Service Launch</text>
                    </g>
                  </g>
                </g>
                <g id="design">
                  <rect x="505.545" y="536" fill="#19FB9B" width="17" height="135"/>
                  <polyline fill="#19FB9B" points="520.256,614.415 532.566,605.092 515.023,594.132 		"/>
                  <text transform="matrix(1 0 0 1 300.2793 616.6328)" className='text-xl text-white' fill='#fff'>4th Quarter 2023</text>
                  <g id="design-badge">
                    <circle fill="#19FB9B" cx="711" cy="604.5" r="130.5"/>
                    <g id="design-title">
                      <text transform="matrix(1 0 0 1 670.4639 523.5059)" fill="#000" className='text-xl'>target B</text>
                    </g>
                    <g id="design-details">
                      <text transform="matrix(1 0 0 1 610.1738 550.6289)" fill="#000" className="text-xs">Launch 10 Gambling Games</text>
                      <text transform="matrix(1 0 0 1 610.1738 570.6289)" fill="#000" className="text-xs">Tier 2 CEX Listing</text>
                      <text transform="matrix(1 0 0 1 610.1738 590.6289)" fill="#000" className="text-xs">Launch 10 Play and Earn Games</text>
                      <text transform="matrix(1 0 0 1 610.1738 610.6289)" fill="#000" className="text-xs">Discord Launch</text>
                      <text transform="matrix(1 0 0 1 610.1738 630.6289)" fill="#000" className="text-xs">Airdrop Launch</text>
                      <text transform="matrix(1 0 0 1 610.1738 650.6289)" fill="#000" className="text-xs">Community Games Competition</text>
                      <text transform="matrix(1 0 0 1 610.1738 670.6289)" fill="#000" className="text-xs">Second Wave of Marketing</text>
                    </g>
                  </g>
                </g>
                {/* <g id="complain">
                  <rect x="505.545" y="860" fill="#19FB9B" width="17" height="283"/>
                  <polyline fill="#19FB9B" points="520.256,1010.415 532.566,1001.092 515.023,990.133 		"/>
                  <text transform="matrix(1 0 0 1 407.2793 1007.6328)" className='text-xl text-white' fill='#000'>1st Quarter 2024</text>
                  <g id="complain-badge">
                    <circle fill="#19FB9B" cx="717" cy="1000.5" r="130.5"/>
                    <g id="complain-title">
                      <text transform="matrix(1 0 0 1 680.0996 916.1816)" fill="#000" className='text-xl'>target</text>
                    </g>
                    <g id="complain-details">
                      <text transform="matrix(1 0 0 1 637.332 1059.6289)" fill="#000" className='text-sm'>BROWSER QUIRKS CAN INCREASE </text>
                    </g>
                  </g>
                </g> */}
                <g id="build">
                  <rect x="505.545" y="671" fill="#19FB9B" width="17" height="189"/>
                  <polyline fill="#19FB9B" points="509.334,761.133 497.023,770.455 514.566,781.415 		"/>
                  <text transform="matrix(1 0 0 1 558.6953 780.7109)" fill="#fff" className='text-xl'>1st Quarter 2024</text>
                  <g id="build-badge">
                    <circle fill="#19FB9B" cx="311" cy="772.5" r="130.5"/>
                    <g id="build-title">
                      <text transform="matrix(1 0 0 1 270.0991 691.5059)" fill="#000" className='text-xl'>target C</text>
                    </g>
                    <g id="build-details">
                      <text transform="matrix(1 0 0 1 226.1045 731.6289)" fill="#000" className='text-sm'>Partnerships</text>
                      <text transform="matrix(1 0 0 1 226.1045 751.6289)" fill="#000" className='text-sm'>Tier 1 CEX Listing</text>
                      <text transform="matrix(1 0 0 1 226.1045 771.6289)" fill="#000" className='text-sm'>Sports Betting Launch</text>
                      <text transform="matrix(1 0 0 1 226.1045 791.6289)" fill="#000" className='text-sm'>IOS/Android App</text>
                      <text transform="matrix(1 0 0 1 226.1045 811.6289)" fill="#000" className='text-sm'>Onchain Lottery</text>
                      <text transform="matrix(1 0 0 1 226.1045 831.6289)" fill="#000" className='text-sm'>Add more Gambling Games</text>
                    </g>
                  </g>
                </g>
              </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
};

export default RoadMap;