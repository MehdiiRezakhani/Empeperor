import Image from 'next/image';
import Link from 'next/link';
//component
import Header from '../../../../components/Header';
//media
import Map_Image from '../../../../assets/Map.png';
import Bg from '../../../../assets/Bg2.png';
import IranFlag_Pic from '../../../../assets/IranFlag.png';

const Location = () => {
    return (
        <div className='w-full h-full'>
             <div className='w-full h-full'>
                <Image src={Bg} alt='background' className='w-full h-full object-cover' fill/>
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center absolute inset-0 overflow-y-scroll'>
                <Header/>
                <div className='flex flex-col text-center mt-[110px] lg:mt-[80px]'>
                    <p className='text-base lg:text-5xl text-[#123274] font-semibold leading-6 lg:leading-[60px]'>We’d Love To hear from you</p>
                    <p className='text-base text-black font-semibold leading-6 mt-1 lg:mt-2'>we have offices and teams all around the world</p>
                </div>
                <div className='w-full h-full  lg:w-3/4 lg:h-3/4 relative '>
                    <Image 
                        src={Map_Image}
                        alt="Map"
                        className='w-full h-full object-cover'
                    />
                    {/* location1 */}
                    <div className='w-[30px] h-[30px] bg-[rgba(245,157,15,0.25)] animate-[locationAnimate_2s_linear_infinite] rounded-full group absolute top-[32%] left-[65%] lg:top-[32%] lg:left-[57%] flex justify-center items-center'>
                        <div className='w-[24px] h-[24px] bg-[rgba(245,157,15,0.5)] rounded-full flex justify-center items-center'>
                            <div className='w-[19px] h-[19px] bg-[#F59D0F] rounded-full flex justify-center items-center'>
                                <div className='w-[16px] h-[16px] relative'>
                                    <Image src={IranFlag_Pic} alt='Iran Flag' className='hidden group-hover:block w-full h-full object-cover rounded-full'/>
                                    <div className='hidden group-hover:flex flex-col justify-center items-center text-center text-black text-xs font-semibold leading-4 absolute bottom-[30px] right-[-35px] p-2 rounded-[10px] bg-white after:content-[""] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-white'>
                                        <p>Iran, Tehran</p>
                                        <p>Valiasr</p>
                                        <p>09301296471</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* location2 */}
                    <div className='w-[30px] h-[30px] bg-[rgba(245,157,15,0.25)] animate-[locationAnimate_2s_linear_infinite] rounded-full group absolute top-[45%] left-[65%] lg:top-[45%] lg:left-[57%] flex justify-center items-center'>
                        <div className='w-[24px] h-[24px] bg-[rgba(245,157,15,0.5)] rounded-full flex justify-center items-center'>
                            <div className='w-[19px] h-[19px] bg-[#F59D0F] rounded-full flex justify-center items-center'>
                                <div className='w-[16px] h-[16px] relative'>
                                    <Image src={IranFlag_Pic} alt='Iran Flag' className='hidden group-hover:block w-full h-full object-cover rounded-full'/>
                                    <div className='hidden group-hover:flex flex-col justify-center items-center text-center text-black text-xs font-semibold leading-4 absolute bottom-[30px] right-[-35px] p-2 rounded-[10px] bg-white after:content-[""] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-white'>
                                        <p>Iran, Shiraz</p>
                                        <p>Tachara</p>
                                        <p>09301296471</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* location3 */}
                    {/* <div className='w-[30px] h-[30px] bg-[rgba(245,157,15,0.25)] animate-[locationAnimate_2s_linear_infinite] rounded-full group absolute top-[40%] left-[85%] lg:top-[37%] lg:left-[63%] flex justify-center items-center'>
                        <div className='w-[24px] h-[24px] bg-[rgba(245,157,15,0.5)] rounded-full flex justify-center items-center'>
                            <div className='w-[19px] h-[19px] bg-[#F59D0F] rounded-full flex justify-center items-center'>
                                <div className='w-[16px] h-[16px] relative'>
                                    <Image src={IranFlag_Pic} alt='Iran Flag' className='hidden group-hover:block w-full h-full object-cover rounded-full'/>
                                    <div className='hidden group-hover:flex flex-col justify-center items-center text-center text-black text-xs font-semibold leading-4 absolute bottom-[30px] right-[-35px] p-2 rounded-[10px] bg-white after:content-[""] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-white'>
                                        <p>Iran, Chabahar</p>
                                        <p>Valiasr</p>
                                        <p>09301296471</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className='hidden lg:flex justify-evenly items-center w-full absolute bottom-5'>
                    <div className='flex flex-col items-center'>
                        <h5 className='text-base text-white text-center font-semibold leading-6'>Support</h5>
                        <h6 className='text-base text-white text-center font-semibold leading-6'><Link href='mailto:support@empeperor.com' target='_blank' rel="noreferrer">Support@empeperor.com</Link></h6>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h5 className='text-base text-white text-center font-semibold leading-6'>Sales</h5>
                        <h6 className='text-base text-white text-center font-semibold leading-6'><Link href='mailto:sales@empeperor.com' target='_blank' rel="noreferrer">Support@empeperor.com</Link></h6>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h5 className='text-base text-white text-center font-semibold leading-6'>Phone</h5>
                        <h6 className='text-base text-white text-center font-semibold leading-6'><Link href='call:09301296471' target='_blank' rel="noreferrer">09301296471</Link></h6>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Location;