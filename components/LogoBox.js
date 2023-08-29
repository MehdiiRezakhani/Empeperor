"use client"
import Image from 'next/image';
import Link from 'next/link';
import Empeperor_Logo from '../assets/logo/Empeperor_Logo1.png';

export default function LogoBox() {
    return (
    <div className='w-12 lg:w-20  lg:mr-7'>
        <Link 
            href='/' 
            className='w-full h-full' 
            passHref
        >
            <Image src={Empeperor_Logo} alt='Empeperor Logo' className='w-full h-full'/>
        </Link>
      </div>
    );
};
