import laptop from "../assets/laptop.jpg";


export const Experts = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-2  md:grid grid-cols-2">
        <div className=" md:w-[80%] ">
            <img src={laptop} alt="" />
        </div>
        <div className=" space-y-3 flex flex-col justify-center" >
            <div className="text-[#00df9a] font-bold">LEARN FROM EXPERTS</div>  
            <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim laboriosam quos beatae aliquam velit? Quasi illum, at voluptas, amet eligendi sequi magni iste perspiciatis accusantium veritatis quod ipsa est optio!

            </div>
            <button className= "bg-black text-white p-3 rounded-md w-[30%] p-3 ">Get Started</button>
        </div>
    </div>
  )
}
