import { grey, main } from "../assets";
import Button from "./Button";

export default function Hero() {
    return (
        <div className='heroBg sm:bg-none w-full relative sm:bg-cover sm:h-[870px] overflow-hidden'>
            <div className=" hidden w-full sm:block absolute">
                <img src={main} alt="" className="h-[100vh] object-cover" />
            </div>
            <div className=" absolute opacity-40 bg-[#333333] w-full h-full sm:hidden"></div>
            <div className="absolute right-[-70px] overflow-hidden top-[-600px] w-[80%] sm:block hidden">
                <img src={grey} alt="" className="w-full bg-no-repeat object-cover" />

            </div>

            <div className="py-[80px] flex justify-end items-center">
                <div className='flex flex-col items-start p-8 py-[80px] relative z-10 sm:w-[60%] '>
                    <h1 className=' text-[80px] text-[#ffc200] w-full font-grand sm:text-[112px] sm:w-fit'>Title Here</h1>
                    <p className=" text-[24px] font-normal text-white sm:text-[35px] sm:w-[80%]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur et minima beatae vitae?

                    </p>
                    <Button></Button>

                </div>

            </div>

        </div>
    )
}
