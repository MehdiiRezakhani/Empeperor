'use client'
import Image from "next/image"
import { useState } from "react";

//media 
import Icon1 from '../assets/ContactFormsIcon1.png';
import Icon2 from '../assets/ContactFormsIcon2.png';
import Icon3 from '../assets/ContactFormsIcon3.png';
import Icon4 from '../assets/ContactFormsIcon4.png';

export default function ContactOrbit() {
    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <div className="w-full overflow-hidden">
            <ul className="block relative w-[604px] h-[604px] left-0 top-5">
                {/* ta1 */}
                <li className="block transition-all duration-300 ease-linear delay-0 rounded-[50%] absolute w-[604px] h-[604px] top-0 border-[2px] border-[rgba(18,50,116,0.9)] ">
                    <div className="w-[48px] h-[48px] flex justify-center items-center rounded-[50%] bg-[rgba(18,50,116,1)] cursor-pointer z-[1] absolute top-[150px] left-[5px] origin-[285px_155px] animate-[rotation_15s_linear_infinite]">
                        <div className="w-[35px] h-[35px] flex justify-center items-center animate-[rotationReverse_15s_linear_infinite]">
                            <Image src={Icon1} alt="Icon" className="w-full h-full object-cover invert"/>
                        </div>
                    </div>
                </li>
                {/* ta2 */}
                <li className="transition-all duration-300 ease-linear delay-0 rounded-[50%] absolute w-[527px] h-[527px] top-[50%] left-0 right-0 translate-y-[-50%] mx-auto my-0 border-[2px] border-[rgba(18,50,116,0.9)]">
                    <div className="w-[48px] h-[48px] flex justify-center items-center rounded-[50%] bg-[rgba(18,50,116,1)] cursor-pointer z-[1] absolute top-[50px] left-[55px] origin-[210px_210px] animate-[rotation_20s_linear_infinite]">
                        <div className="w-[30px] h-[30px] flex justify-center items-center animate-[rotationReverse_20s_linear_infinite]">
                            <Image src={Icon2} alt="Icon" className="w-full h-full object-cover invert"/>
                        </div>
                    </div>
                </li>
                {/* ta3 */}
                <li className="transition-all duration-300 ease-linear delay-0 rounded-[50%] absolute w-[431px] h-[431px] top-[50%] left-0 right-0 translate-y-[-50%] mx-auto my-0 border-[2px] border-[rgba(18,50,116,0.9)]">
                    <div className="w-[48px] h-[48px] flex justify-center items-center rounded-[50%] bg-[rgba(18,50,116,1)] cursor-pointer z-[1] absolute top-[350px] left-[45px] origin-[180px_-135px] animate-[rotation_15s_linear_infinite]">
                        <div className="w-[35px] h-[35px] flex justify-center items-center animate-[rotationReverse_15s_linear_infinite]">
                            <Image src={Icon3} alt="Icon" className="w-full h-full object-cover invert"/>
                        </div>
                    </div>
                </li>
                {/* ta4 */}
                <li className="transition-all duration-300 ease-linear delay-0 rounded-[50%] absolute w-[316px] h-[316px] top-[50%] left-0 right-0 translate-y-[-50%] mx-auto my-0 border-[2px] border-[rgba(18,50,116,0.9)]">
                    <div className="w-[48px] h-[48px] flex justify-center items-center rounded-[50%] bg-[rgba(18,50,116,1)] cursor-pointer z-[1] absolute top-[-20px] left-[90px] origin-[60px_170px] animate-[rotation_10s_linear_infinite]">
                        <div className="w-[30px] h-[30px] flex justify-center items-center animate-[rotationReverse_10s_linear_infinite]">
                            <Image src={Icon4} alt="Icon" className="w-full h-full object-cover invert"/>
                        </div>
                    </div>
                </li>   
                {/* ta5 */}
                <li className="transition-all duration-300 ease-linear delay-0 rounded-[50%] absolute w-[214px] h-[214px] top-[50%] left-0 right-0 translate-y-[-50%] mx-auto my-0 border-[2px] border-[rgba(18,50,116,0.9)]">
                    <div className="w-[48px] h-[48px] flex justify-center items-center rounded-[50%] bg-[rgba(18,50,116,1)] cursor-pointer z-[1] absolute top-[150px] left-[5px] origin-[95px_-45px] animate-[rotation_10s_linear_infinite]">
                        <div className="w-[35px] h-[35px] flex justify-center items-center animate-[rotationReverse_10s_linear_infinite]">
                            <Image src={Icon1} alt="Icon" className="w-full h-full object-cover invert"/>
                        </div>
                    </div>
                </li> 
            </ul>
        </div>

    )
}