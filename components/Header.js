'use client'
import LogoBox from "./LogoBox";
import MenuBox from "./MenuBox";
import ListBox from "./ListBox";
export default function Header() {
    return(
        <div className="flex items-center justify-between px-5 lg:px-10 py-5 absolute top-0 inset-x-0 z-30">
            <div className="flex items-center">
                <LogoBox/>
                <ListBox/>
            </div>
            <MenuBox/>
        </div>
    )
}