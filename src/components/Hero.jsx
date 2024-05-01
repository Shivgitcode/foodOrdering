
export default function Hero() {
    return (
        <div className='heroBg w-full h-[550px] relative'>
            <div className=" absolute opacity-40 bg-[#333333] w-full h-full"></div>
            <div className='flex flex-col items-start p-8 mx-auto py-[80px] relative z-10'>
                <h1 className=' text-[80px] text-[#ffc200] w-full font-grand'>Title Here</h1>
                <p className=" text-[24px] font-normal text-white ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur et minima beatae vitae?

                </p>
                <button className="px-8 py-4 mt-4 text-[19.2px] bg-[#ffc200] font-bold rounded-md">
                    order now
                </button>

            </div>
        </div>
    )
}
