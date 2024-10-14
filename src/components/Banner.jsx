import { ReactTyped } from "react-typed";

export const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[100px] pt-10 md:pt-20">
        <div className="ma-w-[1240px] mx-auto text-center space-y-4 md:space-y-12">
            <div className=" text-xl md:text-3xl font-bold">Learn With Us.</div>
            <div className="text-white font-bold text-2xl md:text-[60px]"> Grow With Us!</div>
            <div className="text-white font-bold text-2xl md:text-[50px] ">
                Learn <ReactTyped 
                strings={["Web Development", "Ethical Hacking", "Digital Marketing"]} 
                typeSpeed={120}
                backSpeed={50}
                loop={true} />
            </div>
            <button className="bg-black text-white p-3 rounded-md">Get Started</button>
        </div>
       
    </div>
  )
}
