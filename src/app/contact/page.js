import React from 'react';
import Header from '../../../components/Header';
import Link from 'next/link';
import Image from 'next/image';
import Contact_bg from '../../../assets/Contact_bg2.png';

import IranFlag_Image from '../../../assets/IranFlag.png';
import GermanFlag_Image from '../../../assets/GermanFlag.png';
import JapanFlag_Image from '../../../assets/JapanFlag.png';
import UkFlag_Image from '../../../assets/UkFlag.png';
import MiladTower_Image from '../../../assets/MiladTower.png';

const Contact = () => {
    return (
        <div className='w-full h-screen'>
            <div className='w-full h-full'>
                <Image src={Contact_bg} alt='background' className='w-full h-full object-cover animate-[zoomInOutContact_20s_linear_infinite]'/>
            </div>
            <div className='w-full h-full overflow-hidden absolute inset-0 bg-[rgba(2,36,67,0.5)]'>
                <Header/>
                {/* mt-5 lg:mt-0 lg:mr-5 xl:mt-5 */}
                <div className='w-full h-full flex flex-col lg:flex-row justify-center items-center lg:content-center lg:px-[100px]'>
                    <div className='flex flex-col justify-center items-center lg:items-start mt-[250px] xs:mt-[100px] sm:mt-[100px] lg:mt-0 lg:w-1/2 h-full text-center lg:text-left'>
                        <p className='text-2xl lg:text-4xl text-white font-semibold leading-9 lg:leading-[50px]'>Need Help?</p>
                        <p className='text-2xl lg:text-4xl text-white font-semibold leading-9 lg:leading-[50px]'>Contact with us now!</p>
                        <div className='flex mt-5'>
                            <Link href='/contact/form' className='text-sm text-white text-center font-semibold leading-5 px-4 py-1 lg:px-7 lg:py-2 bg-[#F59D0F] rounded-[10px]'>Contact Form</Link>
                            <Link href='/contact/location' className='text-sm text-white text-center font-semibold leading-5 px-5 py-1 lg:px-7 lg:py-2 ml-3 bg-[#123274] rounded-[10px]'>All Branches</Link>
                        </div>
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="block relative w-[614px] h-[614px] rounded-[50%] lg:mr-5 mt-5 scale-50 md:scale-[0.8] lg:scale-[0.6] xl:scale-[1]">
                            {/* ta1 */}
                            <div className="block transition-all duration-300 ease-linear delay-0 rounded-[50%] absolute w-[614px] h-[614px] top-0 right-0 border-[2px] border-[#ffffff5b] ">
                                <div className="w-[84px] h-[84px] flex flex-col justify-center items-center rounded-[50%] cursor-pointer z-[1] absolute top-[230px] left-[-35px] origin-[350px_65px] animate-[rotation_20s_linear_infinite]">
                                    <div className="w-full h-full p-1.5 border-b-[4px] border-white rounded-full">                         
                                        <Image src={GermanFlag_Image} alt="Icon" className="w-full h-full animate-[rotationReverse_20s_linear_infinite]"/>
                                    </div>
                                </div>
                                
                            </div>
                            {/* ta2 */}
                            <div className="transition-all duration-300 ease-linear delay-0 rounded-[50%] absolute w-[480px] h-[480px] top-[50%] left-0 right-0 translate-y-[-50%] mx-auto my-0 border-[2px] border-[#ffffff5b]">
                                <div className="w-[84px] h-[84px] flex flex-col justify-center items-center rounded-[50%] cursor-pointer z-[1] absolute top-[-25px] left-[105px] origin-[125px_260px] animate-[rotation_15s_linear_infinite]">
                                    <div className="w-full h-full p-1.5 border-t-[4px] border-white rounded-full">
                                        <Image src={UkFlag_Image} alt="Icon" className="w-full h-full animate-[rotationReverse_15s_linear_infinite]"/>
                                    </div>
                                </div>
                            </div>     
                             {/* ta3 */}
                            <div className="flex justify-center items-center transition-all duration-300 ease-linear delay-0 rounded-[50%] absolute w-[317px] h-[317px] top-[50%] left-0 right-0 translate-y-[-50%] mx-auto my-0 border-[2px] border-[#ffffff5b]">
                                <div className="w-[84px] h-[84px] flex flex-col justify-center items-center cursor-pointer z-[1] absolute bottom-[30px] left-[-15px] origin-[165px_-50px] animate-[rotation_25s_linear_infinite]">
                                    <div className="w-full h-full p-1.5 border-r-[4px] border-white rounded-full">                      
                                            <Image src={IranFlag_Image} alt="Icon" className="w-full h-full animate-[rotationReverse_25s_linear_infinite]"/>
                                    </div>
                                </div>
                                <h4 className='text-4xl text-center text-white font-semibold leading-10'>24H<br/><span className='text-center opacity-50'>Support</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;