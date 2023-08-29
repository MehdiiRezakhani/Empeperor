'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useFormik} from 'formik';
import * as yup from 'yup';
//component
import Header from '../../../../components/Header';
import ContactOrbit from '../../../../components/ContactOrbit'
//media
import BackArrow_Icon from '../../../../assets/backArrow.svg';
import Phone_Icon from '../../../../assets/PhoneIcon.svg';
import Location_Icon from '../../../../assets/LocationIcon.svg';
import Email_Icon from '../../../../assets/EmailIcon.svg';
import Bg from '../../../../assets/bg3.png'

const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            title: '',
            location: '',
            message:'',
        },
        validateOnMount:true,
        enableReinitialize:true,
        validationSchema: yup.object({
            firstName: yup.string().required("Enter your first name!"),
            lastName: yup.string().required("Enter your last name!"),
            email: yup.string().required('Enter your email!'),
            title: yup.string().required('Select a title!'),
            location: yup.string().required('Enter your location!'),
            message: yup.string().required('Enter your message!'),
        }),
        onSubmit : (val) => console.log(val)
    })
    return (
        <div className='w-full h-full'>
            <div className="w-full h-full">
                <Image src={Bg} alt='background' className='w-full h-full object-cover'/>
            </div>
            <div className='w-full h-full flex flex-col justify-center absolute inset-0 overflow-y-scroll'>
                <Header/>
                <div className='flex flex-col justify-start lg:flex-row mx-2.5 lg:mx-9 mt-[250px] sm:mt-[50px] lg:mt-[450px] xl:mt-[250px] mb-10 p-2.5'>
                    <div className='lg:hidden flex flex-col'>
                        <h5 className='text-xl text-black text-center font-semibold leading-4'>We’d Love To Help</h5>
                        <p className='text-base text-white text-center font-normal leading-4 mt-4 mb-6'>Reach out and we’ll get in<br/> touch in within 24 hours.</p>
                    </div>
                    <div className='hidden lg:flex w-1/4 h-full max-h-full lg:mr-5 rounded-[20px] bg-[rgba(255,255,255,0.3)] backdrop-blur-sm'>
                        <ContactOrbit/>                        
                    </div>
                    <div className='w-full h-full lg:w-3/4 p-6 lg:py-12 lg:px-[80px] rounded-[20px] bg-[rgba(255,255,255,0.44)] backdrop-blur-[10px]'>
                        <div className='hidden lg:flex flex-col'>
                            <h5 className='text-5xl text-black font-semibold leading-[60px] my-0'>We’d Love To Help</h5>
                            <p className='text-sm text-[rgba(135,128,128,1)] font-normal leading-5 mt-2 mb-5'>Reach out and we’ll get in touch in within 24 hours.</p>
                        </div>
                        <div className='w-full flex justify-center'>
                            <form className='w-full' onSubmit={formik.handleSubmit}>
                                <div className='flex flex-col lg:flex-row justify-between w-full'>
                                    <div className='flex flex-col w-full'> 
                                        <label
                                            htmlFor='Fname'
                                            className='text-xs text-black font-bold leading-3 ml-1.5'
                                        >First Name</label>
                                        <input 
                                            id="Fname"
                                            type='text'
                                            {...formik.getFieldProps('firstName')} 
                                            className='text-xs text-black font-bold leading-3 mt-3 p-3 bg-transparent border-[1px] border-white rounded-[10px] placeholder:text-[#888282] focus:outline-none focus:border-[#fff] focus:ring-0 peer-focus' 
                                            placeholder='First Name'
                                        />
                                        {formik.errors.firstName && formik.touched.firstName && <p className='text-xs text-red-500 font-bold ml-1 mt-0.5'>{formik.errors.firstName}</p>}
                                    </div>
                                    <div className='flex flex-col w-full lg:ml-5 mt-4 lg:mt-0'> 
                                        <label
                                            htmlFor='Lname'
                                            className='text-xs text-black font-bold leading-3 ml-1.5'
                                        >Last Name</label>
                                        <input 
                                            id="Lname"
                                            type='text' 
                                            {...formik.getFieldProps('lastName')}
                                            className='text-xs text-black font-bold leading-3 mt-3 p-3 bg-transparent border-[1px] border-white rounded-[10px] placeholder:text-[#888282] focus:outline-none focus:border-[#fff] focus:ring-0 peer-focus' 
                                            placeholder='Last Name'
                                        />
                                        {formik.errors.lastName && formik.touched.lastName && <p className='text-xs text-red-500 font-bold ml-1 mt-0.5'>{formik.errors.lastName}</p>}
                                    </div>
                                </div>
                                <div className='flex flex-col w-full mt-4'> 
                                    <label
                                        htmlFor='Email'
                                        className='text-xs text-black font-bold leading-3 ml-1.5'
                                    >Email</label>
                                    <input 
                                        id="Email"
                                        type='email' 
                                        {...formik.getFieldProps('email')}
                                        className='text-xs text-black font-bold leading-3 mt-3 p-3 bg-transparent border-[1px] border-white rounded-[10px] placeholder:text-[#888282] focus:outline-none focus:border-[#fff] focus:ring-0 peer-focus' 
                                        placeholder='Email Address'
                                    />
                                    {formik.errors.email && formik.touched.email && <p className='text-xs text-red-500 font-bold ml-1 mt-0.5'>{formik.errors.email}</p>}
                                </div>
                                <div className='block lg:flex justify-between lg:flex-row-reverse'>
                                    <div className='flex flex-col w-full mt-4'> 
                                        <label
                                            htmlFor='Location'
                                            className='text-xs text-black font-bold leading-3 ml-1.5'
                                        >Location</label>
                                        <input 
                                            id="Location"
                                            type='text'
                                            {...formik.getFieldProps('location')} 
                                            className='text-xs text-black font-bold leading-3 mt-3 p-3 bg-transparent border-[1px] border-white rounded-[10px] placeholder:text-[#888282] focus:outline-none focus:border-[#fff] focus:ring-0 peer-focus' 
                                            placeholder='Location'
                                        />
                                        {formik.errors.location && formik.touched.location && <p className='text-xs text-red-500 font-bold ml-1 mt-0.5'>{formik.errors.location}</p>}
                                    </div>
                                    <div className='flex flex-col w-full mt-4 mr-5'> 
                                        <label
                                            htmlFor='Title'
                                            className='text-xs text-black font-bold leading-3 ml-1.5'
                                        >Title</label>
                                        <select 
                                            id="Title"
                                            type='text'
                                            {...formik.getFieldProps('title')} 
                                            className='text-xs text-black font-bold leading-3 mt-3 p-3 bg-transparent border-[1px] border-white rounded-[10px] placeholder:text-[#888282] focus:outline-none focus:border-[#fff] focus:ring-0 peer-focus' 
                                            placeholder='Title'
                                        >
                                            <option value=''>Select a title</option>
                                            <option value='title1'>title 1</option>
                                            <option value='title2'>title 2</option>
                                            <option value='title3'>title 3</option>
                                        </select>
                                        {formik.errors.title && formik.touched.title && <p className='text-xs text-red-500 font-bold ml-1 mt-0.5'>{formik.errors.title}</p>}
                                    </div>
                                </div>
                                <div className='flex flex-col w-full mt-4'> 
                                    <label
                                            htmlFor='Message'
                                            className='text-xs text-black font-bold leading-3 ml-1.5'
                                    >Message</label>
                                    <textarea
                                        id="Message"
                                        type='text'
                                        {...formik.getFieldProps('message')} 
                                        className='text-xs text-black font-bold leading-3 mt-3 p-3 h-[95px] bg-transparent border-[1px] border-white rounded-[10px] placeholder:text-[#888282] focus:outline-none focus:border-[#fff] focus:ring-0 peer-focus' 
                                        placeholder='Leave us a message...'
                                    ></textarea>
                                    {formik.errors.message && formik.touched.message && <p className='text-xs text-red-500 font-bold ml-1 mt-0.5'>{formik.errors.message}</p>}
                                </div>
                                <button type='submit' className='text-xs text-center text-white font-bold leading-3 w-full my-8 py-2.5 bg-[#123274] rounded-[10px]'>Send message</button>
                            </form>
                            <div className='hidden lg:flex flex-col ml-10'>
                                <div className='flex mt-4'>
                                    <Image src={Phone_Icon} alt='Phone Icon'/>
                                    <h4 className='text-base text-black font-normal leading-6 ml-1'><Link href='call:+989301296471' target='_blank' rel="noreferrer">+989301296471</Link></h4>
                                </div>
                                <div className='flex mt-5'>
                                    <Image src={Email_Icon} alt='Email Icon'/>
                                    <h4 className='text-base text-black font-normal leading-6 ml-1'><Link href='mailto:Sales@arka.com' target='_blank' rel="noreferrer">Sales@empeperor.com</Link></h4>
                                </div>
                                <div className='flex mt-5'>
                                    <Image src={Location_Icon} alt='Location Icon'/>
                                    <h4 className='text-base text-black font-normal leading-6 ml-1'>Tehran, Iran</h4>
                                </div>
                                <div className='flex mt-5'>
                                    <Image src={Phone_Icon} alt='Phone Icon'/>
                                    <h4 className='text-base text-black font-normal leading-6 ml-1'><Link href='call:+989301296471' target='_blank' rel='noreferrer'>+989301296471</Link></h4>
                                </div>
                                <div className='flex mt-5'>
                                    <Image src={Email_Icon} alt='Email Icon'/>
                                    <h4 className='text-base text-black font-normal leading-6 ml-1'><Link href='mailto:Test@arka.com' target='_blank' rel='noreferrer'>Test@empeperor.com</Link></h4>
                                </div>
                                <div className='flex mt-5'>
                                    <Image src={Location_Icon} alt='Location Icon'/>
                                    <h4 className='text-base text-black font-normal leading-6 ml-1'>Shiraz, Iran</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
