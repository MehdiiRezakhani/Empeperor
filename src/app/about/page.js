"use client"
import { useState } from 'react';
import Image from 'next/image';
import { v4 } from 'uuid';
import clsx from 'clsx';
//component
import Header from '../../../components/Header';
//media 
import Home1_bg from '../../../assets/backgrounds/bg1.jpg';
import Home2_bg from '../../../assets/backgrounds/bg2.jpg';
import Home3_bg  from '../../../assets/backgrounds/bg3.jpg';
import LeftArrow_Icon from '../../../assets/whiteLeftArrow.svg';

const About = () => {
    const [sliderChanger,setSliderChanger] = useState(false);
    const data = [
        {image:Home1_bg, title:"About us", detail:'Cryptocurrency is a type of digital or virtual currency that uses cryptography for secure transactions and control of new units. It operates on decentralized technology called blockchain, ensuring transparency and immutability. Unlike traditional currencies, cryptocurrencies are not issued by any central authority, making them resistant to government manipulation. Bitcoin was the first cryptocurrency, introduced in 2009, and since then, thousands of other cryptocurrencies with various features and purposes have emerged. They are used for various applications, including peer-to-peer transactions, investments, and as a means to access decentralized networks.'},
        {image:Home2_bg, title:"About us", detail:'Cryptocurrency is a type of digital or virtual currency that uses cryptography for secure transactions and control of new units. It operates on decentralized technology called blockchain, ensuring transparency and immutability. Unlike traditional currencies, cryptocurrencies are not issued by any central authority, making them resistant to government manipulation. Bitcoin was the first cryptocurrency, introduced in 2009, and since then, thousands of other cryptocurrencies with various features and purposes have emerged. They are used for various applications, including peer-to-peer transactions, investments, and as a means to access decentralized networks.'},
        {image:Home3_bg, title:"About us", detail:'Cryptocurrency is a type of digital or virtual currency that uses cryptography for secure transactions and control of new units. It operates on decentralized technology called blockchain, ensuring transparency and immutability. Unlike traditional currencies, cryptocurrencies are not issued by any central authority, making them resistant to government manipulation. Bitcoin was the first cryptocurrency, introduced in 2009, and since then, thousands of other cryptocurrencies with various features and purposes have emerged. They are used for various applications, including peer-to-peer transactions, investments, and as a means to access decentralized networks.'},
    ]
    const Cards = data;
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
    // const sliderInterval = setInterval(()=> {
    //         console.log("cP:"+currentPage);
    // }
    // ,1000)
    // if(currentPage > 1) {
    //     clearInterval(sliderInterval)
    // }
    // console.log("TC:"+totalCards+", Cp:"+currentPage)
    const slideHandler = (number) => {
        paginate(number);
        const result = +currentPage != +number;
        setSliderChanger(result);
        setTimeout(() => {
            setSliderChanger(false);
        }, 501);
    }
    const slideHandler1 = () => {
        paginateFront();
        if(currentPage !== 1) {
            setSliderChanger(true);
            setTimeout(() => {
                setSliderChanger(false);
            }, 501);
        }
    }
    const slideHandler2 = () => {
        paginateBack();
        if(currentPage !== Math.ceil(totalCards / CardsPerPage)){
            setSliderChanger(true);
            setTimeout(() => {
                setSliderChanger(false);
            }, 501);
        }
    }
    return (
       <div className='w-full h-screen'>
             <div className='w-full h-full'>
                <Image src={Home3_bg} alt='background' className='w-full h-full object-cover'/>
            </div>  
            <div className="w-full h-full overflow-hidden absolute inset-0 backdrop-blur-md">
                {data && data.slice((currentPage - 1) * CardsPerPage, (currentPage - 1) * CardsPerPage + CardsPerPage).map((item,index) => 
                    <div 
                        key={index} 
                        className="w-full h-full"
                    >
                        <div className='flex absolute inset-0'>
                            <div className={clsx('hidden lg:flex flex-col w-1/2 p-[100px] pl-[70px]',{
                                'animate-[slideUpEnter2_0.5s_linear]' : sliderChanger,
                            })}>
                                <h3 className="text-4xl xl:text-5xl text-[#fff] font-semibold leading-10 xl:leading-[60px] mt-5 xl:mt-10">{item.title}</h3>
                                <p className='text-xs xl:text-sm 2xl:text-xl text-[#fff] font-semibold leading-6 mt-4 lg:mt-7'>{item.detail}</p>
                            </div>
                            <div className='lg:w-1/2 h-full lg:bg-[#031C11] lg:relative lg:clip-path-polygonAbout2'>
                                <div className='flex flex-col justify-start absolute top-[10%] lg:top-[50%] left-[50%] translate-x-[-50%] lg:translate-y-[-50%] px-9 lg:px-0 w-full h-full'>
                                    <div className='w-full h-[300px] xs:h-[365px] lg:h-full lg:my-28'>
                                        <Image 
                                            src={item.image} 
                                            alt='item' 
                                            className={clsx('w-full h-full object-cover rounded-[10px] lg:rounded-none',{
                                                'animate-[slideUpEnter_0.5s_linear]' : sliderChanger,
                                            })}
                                        />
                                    </div>
                                    <div className={clsx('w-full flex lg:hidden flex-col',{
                                        'animate-[slideUpEnter2_0.5s_linear]' : sliderChanger,

                                    })}>
                                        <h3 className="text-base text-[#fff] text-center font-semibold leading-6 mt-3">{item.title}</h3>
                                        <p className='text-xs text-[#fff] font-semibold leading-4 mt-3'>{item.detail}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                )}
            </div> 
            <div className='w-full h-full absolute inset-0 flex justify-center items-center'>
                <Header/>
                <div className='absolute right-[50%] lg:left-10 bottom-[20px] lg:bottom-10 translate-x-[50%] lg:translate-x-0'>
                    <div className='flex justify-center items-center'>
                        <div className='text-lg text-white font-semibold leading-6 mx-0'>
                            0{currentPage}/0{totalCards}
                        </div>
                        <div
                            onClick={() => slideHandler1()}
                            className={currentPage === 1 
                                ?'cursor-not-allowed opacity-40 mx-3' 
                                : 'cursor-pointer mx-3'}
                        >
                            <Image src={LeftArrow_Icon} alt="leftArrowIcon"/>
                        </div>
                        <div
                            onClick={() => slideHandler2()}
                            className={currentPage == Math.ceil(totalCards / CardsPerPage)
                                ?'cursor-not-allowed opacity-40 rotate-180' 
                                : 'cursor-pointer rotate-180'}
                        >
                            <Image src={LeftArrow_Icon} alt="leftArrowIcon"/>  
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-2'>
                    {pageNumbers.map((number) => (
                        <div
                            key={v4()}
                            onClick={() => slideHandler(number)}
                            className={
                            currentPage === number
                                ? "z-50 cursor-pointer w-5 h-5 rounded-full bg-white mx-0.5 transition-all"
                                : "z-50 cursor-pointer w-5 h-5 rounded-full bg-[rgba(255,255,255,0.5)] mx-0.5 transition-all"
                            }
                        >
                        </div>
                    ))}
                    </div>
                    </div>
            </div>
       </div>
    );
};

export default About;