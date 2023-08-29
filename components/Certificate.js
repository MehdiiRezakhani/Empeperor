import * as React from 'react';
import Modal from '@mui/material/Modal';
import Image from 'next/image';

//media 
import Empeperor_Logo from '../assets/logo/Empeperor_Logo2.jpg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Certificate({open, onClose}) {
  return (
    <div className='flex justify-center items-center'>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="w-full h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-5 lg:px-20 lg:pb-7 lg:pt-[80px]">
            <div className='flex flex-col lg:flex-row w-full h-full rounded-[20px] bg-[rgba(255,255,255,0.3)] backdrop-blur-sm border-none outline-none'>
                <div className='w-full lg:w-1/2 h-full'>
                    <div className='w-full h-full rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl overflow-hidden'>
                        <Image src={Empeperor_Logo} alt="Empeperor" className='w-full h-full object-cover'/>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 h-full lg:ml-5  p-3.5 pb-3 flex flex-col items-start justify-between lg:justify-start'>
                    <p className='hidden lg:block text-base lg:text-4xl text-white font-medium leading-10 self-end cursor-pointer' onClick={onClose}>X</p>
                    <h3 className='text-xl lg:text-4xl text-white font-bold leading-10 my-1 lg:mt-1 lg:mb-4 self-center lg:self-start'>Empeperor</h3>
                    <p className='text-xs xs:text-sm text-white font-normal leading-4 lg:leading-6'>
                      Cryptocurrency is a type of digital or virtual currency that uses cryptography for secure transactions and control of new units. It operates on decentralized technology called blockchain, ensuring transparency and immutability. Unlike traditional currencies, cryptocurrencies are not issued by any central authority, making them resistant to government manipulation. Bitcoin was the first cryptocurrency, introduced in 2009, and since then, thousands of other cryptocurrencies with various features and purposes have emerged. They are used for various applications, including peer-to-peer transactions, investments, and as a means to access decentralized networks.
                    </p>
                    <p className='lg:hidden text-3xl lg:text-4xl text-white font-medium leading-10 self-center cursor-pointer' onClick={onClose}>X</p>
                </div>
            </div>
        </div>
      </Modal>
    </div>
  );
}