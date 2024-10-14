

export const NewsLetter = () => {
  return (
    <div className="w-full bg-[#2699fb] md:py-[55px] md:pl-28 p-4">
        <div className="max-w-[1240px] mx-auto md:grid md:grid-cols-2 ">
            <div className="mt-2">
                <h1 className="text-white text-xl md:text-2xl font-bold">Want to learn latest IT skills?</h1>
                <h2 className="text-white">Sign up to our newsletter and stay up to date.</h2>
            </div>
            <div className="mt-2">
                <div>
                    <input type="text" className="p-2 mr-2 text-slate-300 rounded-md" placeholder="Email" />
                    <button className="bg-black text-white p-2 rounded-md">Notify me</button>
                </div>
                <div>
                    <h1 className="text-white">We care about the protection of your data.Read our </h1>
                    <h2 className="text-black">Privacy Policy</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
