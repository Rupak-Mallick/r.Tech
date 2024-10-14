import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

export const Plans = () => {
  return (
    <div className="py-[100px] mx-20">
        <div className="max-w-[1240px]  md:grid md:grid-cols-3 gap-2 ">
            <div className="shadow-xl  h-[500px] hover:scale-105 duration-500">
                <img src={single} className=" w-[25%] mx-24 md:mx-40" alt="" />
                <h1 className="font-bold mx-14 md:mx-28 mt-5">Web Development</h1>
                <h2 className="font-bold text-2xl mx-24 md:mx-36 mt-5">$149</h2>
                <div className="mt-5 flex flex-col items-center px-12">
                    <h1 className="mt-3">Lorem ipsum dolor sit.</h1>
                    <h2 className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore!</h2>
                    <h3 className="mt-3">Lorem ipsum dolor sit amet.</h3>
                </div>
                <button className="bg-[#2699fb] px-6 py-1.5 rounded-sm  mt-6 mx-32">Start trial</button>
            </div>
            <div className="shadow-xl  h-[500px]  hover:scale-105 duration-500 bg-gray-100">
                <img src={double} className=" w-[25%] mx-24 md:mx-40" alt="" />
                <h1 className="font-bold mx-14 md:mx-32 mt-5">Digital Marketing</h1>
                <h2 className="font-bold text-2xl mx-24 md:mx-40 mt-5">$149</h2>
                <div className="mt-5 flex flex-col items-center px-12">
                    <h1 className="mt-3">Lorem ipsum dolor sit.</h1>
                    <h2 className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore!</h2>
                    <h3 className="mt-3">Lorem ipsum dolor sit amet.</h3>
                </div>
                <button className="bg-black text-[#2699fb] px-6 py-1.5 rounded-sm  mt-6 mx-32">Start trial</button>
            </div>
            <div className="shadow-xl  h-[500px]  hover:scale-105 duration-500">
                <img src={triple} className=" w-[25%] mx-24 md:mx-32" alt="" />
                <h1 className="font-bold mx-14 md:mx-28 mt-5">App Development</h1>
                <h2 className="font-bold text-2xl mx-24 md:mx-36 mt-5">$149</h2>
                <div className="mt-5 flex flex-col items-center px-12">
                    <h1 className="mt-3">Lorem ipsum dolor sit.</h1>
                    <h2 className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore!</h2>
                    <h3 className="mt-3"> Lorem ipsum dolor sit amet.</h3>
                </div>
                <button className="bg-[#2699fb] px-6 py-1.5 rounded-sm mt-6 mx-32">Start trial</button>
            </div>
        </div>
    </div>
  )
}
