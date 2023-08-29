import Image from "next/image";
//media 
import Preloader_Logo from '../assets/logo/Empeperor_Logo1.png';
const Preloader = () => {
    return (
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] animate-[slideUpLeave_2s_linear_infinite]">
            <div className="flex justify-center items-center h-44 w-44 z-50 rounded-full border-4 border-[rgba(2,36,67,1)] border-r-transparent  align-[-0.125em] animate-[rotation_2s_linear_infinite]">
                <div className="flex justify-center items-center w-28 h-28 animate-[rotationReverse_2s_linear_infinite]">
                    <Image src={Preloader_Logo} alt="Empeperor Icon" className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    );
};

export default Preloader;