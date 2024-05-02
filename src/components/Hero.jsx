import { grey } from "../assets";
import Button from "./Button";

export default function Hero() {
    return (
        <div className='heroBg w-full relative sm:bg-cover sm:h-[870px] overflow-hidden'>
            <div className=" absolute opacity-40 bg-[#333333] w-full h-full sm:hidden"></div>
            <div className="absolute right-[-70px] overflow-hidden top-[-600px] w-[80%] sm:block hidden">
                <img src={grey} alt="" className="w-full bg-no-repeat object-cover" />

            </div>

            <div className="py-[80px] flex justify-end items-center">
                <div className='flex flex-col items-start p-8 py-[80px] relative z-10 sm:w-fit'>
                    <h1 className=' text-[80px] text-[#ffc200] w-full font-grand'>Title Here</h1>
                    <p className=" text-[24px] font-normal text-white ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tenetur et minima beatae vitae?

                    </p>
                    <Button></Button>

                </div>

            </div>

        </div>
    )
}
