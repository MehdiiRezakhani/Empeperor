"use client"
import { useState } from 'react';
import Image from 'next/image';
import { v4 } from 'uuid';
import clsx from 'clsx';
import Link from 'next/link';
//component
import Header from '../../components/Header';
import Orbit from '../../components/Orbit';
import Preloader from '../../components/Preloader';
//media 
import Home1_bg from '../../assets/backgrounds/bg1.jpg';
import Home2_bg from '../../assets/backgrounds/bg2.jpg';    
import Home3_bg from '../../assets/backgrounds/bg3.jpg';
import Home4_bg from '../../assets/backgrounds/bg4.jpg';

const Page = () => {

    const data = [
        {image:Home1_bg, title:""},
        {image:Home2_bg, title:""},
        {image:Home3_bg, title:""},

    ]
    const Cards = data;
    // const [sliderChanger,setSliderChanger] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [CardsPerPage] = useState(1);
    const totalCards = Cards.length
    const paginateBack = () =>{
    if(currentPage !== Math.ceil(Cards.length/ CardsPerPage))
        setCurrentPage(currentPage + 1)
    };
    const paginateFront = () => {
        if(currentPage !== 1)
        setCurrentPage(currentPage - 1)
    };
    const paginate = function(pageNumber) {
        setCurrentPage(pageNumber);
    } 
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCards / CardsPerPage); i++) {
        pageNumbers.push(i);
    }
    const slideHandler = (number) => {
        paginate(number);
        const result = +currentPage != +number;
        // setSliderChanger(result);
        // setTimeout(() => {
        //     setSliderChanger(false);
        // }, 501);
    }
    const [loading,setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false);
    },2000)
    return (
       <div className='w-full h-screen flex justify-center'>
            {loading ? 
            <Preloader/>
            :
            <div className='w-full h-full animate-[firstLoading_2s_linear]'>
                <div className="w-full h-full relative">
                    {data && data.slice((currentPage - 1) * CardsPerPage, (currentPage - 1) * CardsPerPage + CardsPerPage).map((item,index) => 
                        <div 
                            key={index} 
                            className={clsx('w-full h-full overflow-hidden',{
                            // 'animate-[slideUpEnter_0.5s_linear]' : sliderChanger,
                            })}
                        >
                            <Image src={item.image} alt="Slider.Pic" className="w-full h-full object-cover animate-[zoomInOut_20s_linear_infinite]"/>
                            {/* <h3 className="text-3xl text-white text-center font-normal leading-10 absolute top-[100px] left-[50%] translate-x-[-50%]">{item.title}</h3> */}
                        </div> 
                    )}
                </div> 
                <div className='w-full h-full absolute inset-0'>
                    <Header/>
                    <Orbit/>
                    <div className="flex flex-col justify-center items-center absolute right-6 sm:right-10 top-[150px] sm:top-[40%] lg:top-1/2 sm:-translate-y-1/2">
                        {pageNumbers.map((number) => (
                        <div
                            key={v4()}
                            onClick={() => slideHandler(number)}
                            className={
                            currentPage === number
                                ? "z-10 cursor-pointer w-5 h-5 rounded-full bg-white my-1.5 transition-all"
                                : "z-10 cursor-pointer w-5 h-5 rounded-full bg-[rgba(255,255,255,0.5)] my-1.5 transition-all"
                            }
                        >
                        </div>
                        ))}
                    </div>
                </div>
            </div>

            }

       </div>
    );
};

export default Page;