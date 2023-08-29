'use client'
import Image from "next/image"
import { useState } from "react";
import Certificate from "./Certificate";
import Icon1 from '../assets/icons/analytics.png';
import Icon2 from '../assets/icons/cryptocurrency.png';
import Icon3 from '../assets/icons/ethereum-coins.png';

export default function Orbit() {
    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        // <div className="w-full h-screen flex overflow-hidden">
        <div className="w-full h-screen overflow-hidden">
            <ul className="block relative w-[980px] h-[980px] left-[-500px] lg:left-[-500px] top-[-100px] xs:top-[0px] lg:top-[200px] xl:top-[150px] lg:inset-y-0 scale-[0.8] xs:scale-100">
                {/* ta1 */}
                <li className="block transition-all duration-300 ease-linear delay-0 rounded-[50%] scale-[0.75] lg:scale-100 absolute w-[980px] h-[980px] top-0 border-[2px] border-[rgba(255,255,255,0.3)] ">
                    <div
                        onClick={handleOpen} 
                        className="w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-primary cursor-pointer z-[1] absolute top-[275px] right-[5px] origin-[-425px_210px] animate-[rotation_15s_linear_infinite]"
                    >
                        <div className="w-10 h-10 flex flex-col justify-center items-center animate-[rotationReverse_15s_linear_infinite]">
                            <Image src={Icon1} alt="Empeperor" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </li>
                {/* ta2 */}
                <li className="transition-all duration-300 ease-linear delay-0 rounded-[50%] scale-[0.75] lg:scale-100 absolute w-[810px] h-[810px] top-[50%] left-0 right-0 translate-y-[-50%] mx-auto my-0 border-[2px] border-[rgba(255,255,255,0.3)]">
                    {/* <div
                        onClick={handleOpen} 
                        className="w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-primary cursor-pointer z-[1] absolute top-[530px] right-[-5px] origin-[-350px_-120px] animate-[rotation_20s_linear_infinite]"
                    >
                        <div className="w-10 h-10 flex flex-col justify-center items-center animate-[rotationReverse_20s_linear_infinite]">
                            <Image src={Icon3} alt="Empeperor Logo" className="w-full h-full object-cover"/>
                        </div>
                    </div> */}
                </li>
                {/* ta3 */}
                <li className="transition-all duration-300 ease-linear delay-0 rounded-[50%] scale-[0.75] lg:scale-100 absolute w-[650px] h-[650px] top-[50%] left-0 right-0 translate-y-[-50%] mx-auto my-0 border-[2px] border-[rgba(255,255,255,0.3)]">
                    <div
                        onClick={handleOpen} 
                        className="w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-primary cursor-pointer z-[1] absolute top-[360px] right-[-25px] origin-[-285px_-40px] animate-[rotation_20s_linear_infinite]"
                    >
                        <div className="w-10 h-10 flex flex-col justify-center items-center animate-[rotationReverse_20s_linear_infinite]">
                            <Image src={Icon2} alt="Empeperor" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </li>
                {/* ta4 */}
                <li className="transition-all duration-300 ease-linear delay-0 rounded-[50%] scale-[0.75] lg:scale-100 absolute w-[460px] h-[460px] top-[50%] left-0 right-0 translate-y-[-50%] mx-auto my-0 border-[2px] border-[rgba(255,255,255,0.3)]">
                    <div
                        onClick={handleOpen} 
                        className="w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-primary cursor-pointer z-[1] absolute top-[20px] right-[50px] origin-[-120px_200px] animate-[rotation_20s_linear_infinite]"
                    >
                        <div className="w-10 h-10 flex flex-col justify-center items-center animate-[rotationReverse_20s_linear_infinite]">
                            <Image src={Icon3} alt="Empeperor" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </li>   
                {/* ta5 */}
                <li className="transition-all duration-300 ease-linear delay-0 rounded-[50%] scale-[0.75] lg:scale-100 absolute w-[320px] h-[320px] top-[50%] left-0 right-0 translate-y-[-50%] mx-auto my-0 border-[2px] border-[rgba(255,255,255,0.3)]">
                    {/* <div
                        onClick={handleOpen} 
                        className="w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-primary cursor-pointer z-[1] absolute top-[110px] right-[-30px] origin-[-130px_50px] animate-[rotation_30s_linear_infinite]"
                    >
                        <div className="w-10 h-10 flex flex-col justify-center items-center animate-[rotationReverse_30s_linear_infinite]">
                            <Image src={Icon1} alt="Empeperor Logo" className="w-full h-full object-cover"/>
                        </div>
                    </div> */}
                </li> 
                {/* ta6 */}
                <li className="transition-all duration-300 ease-linear delay-0 rounded-[50%] scale-[0.75] lg:scale-100 absolute w-[195px] h-[195px] top-[50%] left-0 right-0 translate-y-[-50%] mx-auto my-0 border-[2px] border-[rgba(255,255,255,0.3)]">
                    <div
                        onClick={handleOpen} 
                        className="w-[60px] h-[60px] flex justify-center items-center rounded-[50%] bg-primary cursor-pointer z-[1] absolute top-[-30px] right-[60px] origin-[30px_125px] animate-[rotation_20s_linear_infinite]"
                    >
                        <div className="w-10 h-10 flex flex-col justify-center items-center animate-[rotationReverse_20s_linear_infinite]">
                            <Image src={Icon2} alt="Empeperor Logo" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </li>
            </ul>
            <Certificate open={open} onClose={handleClose}/>
        </div>

    )
}