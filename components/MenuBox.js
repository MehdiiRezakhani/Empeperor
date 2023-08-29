'use client'
import Image from 'next/image';
import Link from 'next/link';
//assets
import Home_Icon from '../assets/home_Icon.svg';

//component
import Drawer from '../components/Drawer';

export default function MenuBox() {
    return (
        <div className="flex flex-row-reverse items-center">
            <div className='flex flex-row-reverse items-center lg:items-end'>
                <div className='w-5 h-4 lg:w-7 lg:h-6 cursor-pointer'>
                    <Drawer/>
                </div>
                <Link 
                    href='/' 
                    className='w-7 h-6 lg:w-9 lg:h-8 mr-3 lg:mr-5 hover:scale-110 transition-transform duration-200 ease-linear'
                    passHref
                >
                    <Image src={Home_Icon} alt='Home Icon' className='w-full h-full'/>
                </Link>
            </div>
            <p className='hidden xs:inline-block text-sm xl:text-base text-black font-semibold cursor-pointer px-[13px] py-[7px] mr-[18px] ml-1.5 bg-primary rounded-[10px]'>Sign up</p>
            <p className='hidden xs:inline-block text-sm xl:text-base text-primary font-semibold cursor-pointer px-[20px] py-[7px] border-[1px] border-primary rounded-[10px] hover:text-black hover:bg-primary'>Login</p>
        </div>
    )
}