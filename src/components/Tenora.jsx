import { main2 } from "../assets";

export default function Tenora() {
    return (
        <div className=" flex flex-col items-center w-full h-[800px] sm:h-[1000px]  relative overflow-hidden  bg-[#ffe437] ">
            {/* <div className="w-full h-full absolute bg-theme1-0 top-0 mix-blend-overlay"></div> */}
            <img src={main2} alt="" className="w-full h-full mix-blend-overlay object-cover " />

            <div className=" absolute z-10 flex flex-col items-center w-[55%] sm:p-8 mix-blend-multiply sm:translate-y-[100%] py-[80px]  sm:py-0 ">
                <p className=" text-center text-[1.5rem] sm:text-[2rem] text-theme3-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium commodi possimus, vero quod nesciunt doloremque modi necessitatibus enim consectetur animi.
                </p>
                <h3 className="text-[8rem] font-grand font-bold text-center text-theme3-0">
                    Lenora Fields
                </h3>
            </div>
        </div>
    )
}
