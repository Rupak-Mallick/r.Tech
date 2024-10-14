import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";


export const Header = () => {
    const[ toggle, setToggle ] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
        <div className="max-w-[1240px] items-center py-[12px] mx-auto flex justify-between md:border-b  border-gray-900   ">
            <div className="text-3xl font-bold">
                R. Tech
            </div>
            {
                toggle ? <IoClose onClick={()=> setToggle(!toggle)} className="text-2xl md:hidden block"/>
                :
                <IoMdMenu onClick={()=> setToggle(!toggle)} className="text-2xl md:hidden block" />
            }
           
            
            <ul className="hidden md:flex gap-10">
                <li>Home</li>
                <li>Company</li>
                <li>Resources</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            {/* Responsive Menu */}
            <ul className={`duration-300 w-full h-screen md:hidden md:flex fixed bg-black text-white  top-[92px] space-y-5 pt-3 pl-3
                ${ toggle ? `left-[0]` : `left-[-100%]` }
                `}>
                <li>Home</li>
                <li>Company</li>
                <li>Resources</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}
