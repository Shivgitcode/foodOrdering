import { useState } from "react";
import { logo } from "../assets";
import { LuAlignJustify } from "react-icons/lu";
import { navbar } from "../utils";

export default function Navbar() {
    const [showNav, setShowNav] = useState(true)
    return (
        <div className="w-full ">
            <div className=" py-4 px-8 bg-[#333333] flex flex-col w-full">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div onClick={() => { setShowNav(!showNav) }}>
                        <LuAlignJustify stroke="white" fontSize={28}></LuAlignJustify>

                    </div>

                </div>

                <div className={`w-full ${showNav ? "max-h-0" : "max-h-[600px]"} transition-all duration-500`}>
                    <ul className={` px-8 py-4 flex flex-col justify-start gap-2 text-white font-medium  ${showNav ? "opacity-0 -translate-x-[100px]" : "opacity-100 translate-x-0"} transition-all duration-200`}>

                        {
                            navbar.map(nav => (
                                <li className="text-[16px]">{nav.name}</li>

                            ))
                        }

                    </ul>

                </div>


            </div>

        </div>
    )
}
