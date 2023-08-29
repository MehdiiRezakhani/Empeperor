import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

//media 
import Nav_Icon from '../assets/nav_Icon.svg';
import Home_Icon from '../assets/home_Icon.svg';
import About_Icon from '../assets/AboutIcon.svg';


export default function TemporaryDrawer() {
    const headerMenu = [
      {label:'Home', name:'',  icon:Home_Icon},
      {label:'About',name:'about', icon:About_Icon},
      {label:"RoadMap", name:"roadmap"},
      {label:"Token Econicts", name:"comingsoon"},
      {label:"Doc", name:"comingsoon"},
      {label:"Buy Empeper", name:"comingsoon"},
    ];

  return (
        <React.Fragment>
          <div className='flex'>
            <input type="checkbox" id="drawer-toggle" className="relative sr-only peer hidden"/>
            <label htmlFor="drawer-toggle" className="block cursor-pointer hover:scale-110 transition-transform duration-200 ease-linear">
              <Image src={Nav_Icon} alt="Nav Icon" className='w-full h-full object-cover'/>
            </label>
            <div className="fixed top-0 right-0 z-50 w-[220px] h-full transition-all duration-500 transform translate-x-[100%] bg-primary/10 backdrop-blur-sm shadow-lg peer-checked:translate-x-0">
              <div className='h-screen flex flex-col backdrop-blur-[10px] bg-transparnet p-9'>
                <input type="checkbox" id="drawer-toggle" className="relative sr-only peer hidden"/>
                <label htmlFor="drawer-toggle" className="block text-3xl text-white font-normal leading-9 opacity-50 self-end cursor-pointer">X</label>
                <div className='h-screen flex flex-col'>
                    <div className='flex flex-col'>
                        {headerMenu.map((item,index) => 
                            <Link                        
                                key={index} 
                                className='flex items-center hover:scale-110 transition-transform duration-200 ease-linear'
                                href={`/${item.name}`}
                                passHref
                            >
                                {/* <div className='w-8 h-8 mr-1.5'>
                                    <Image src={item.icon} alt={item.label + 'Icon'} className='w-full h-full'/>  
                                </div> */}
                            <h5 className='text-lg text-white font-semibold leading-9 my-3'>{item.label}</h5>
                            </Link>
                        )}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
  );
}