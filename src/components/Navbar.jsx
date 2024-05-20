import { useState } from "react";
import { Search, logo } from "../assets";
import { LuAlignJustify } from "react-icons/lu";
import { navbar } from "../utils";
import { Link } from "react-scroll";

export default function Navbar() {
    const [showNav, setShowNav] = useState(true)
    const [nav, setNav] = useState(navbar)


    function handleActive(id) {
        console.log(id)
        setNav(prev => {
            return prev.map(el => {
                if (el.id === id) {
                    return { ...el, active: true }
                }
                else {
                    return { ...el, active: false }
                }
            })
        })




    }
    return (
        <div className="w-full ">
            <div className=" py-4 px-8 bg-[#333333] flex flex-col w-full sm:flex-row justify-between sm:bg-transparent sm:absolute sm:z-10 sm:px-12 sm:py-4">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div onClick={() => { setShowNav(!showNav) }} className="sm:hidden">
                        <LuAlignJustify stroke="white" fontSize={28}></LuAlignJustify>

                    </div>

                </div>

                <nav className={`w-full ${showNav ? "max-h-0" : "max-h-[600px]"} transition-all duration-500 sm:hidden`}>
                    <ul className={` px-3 py-4 flex flex-col justify-start gap-2 text-white font-medium  ${showNav ? "opacity-0 -translate-x-[100px] pb-[0px]" : "opacity-100 translate-x-0"} transition-all duration-200 sm:hidden`}>

                        {
                            nav.map(nav => (
                                <Link to={`${nav.link}`} key={nav.id} className={` ${nav.active && "active"} text-[16px] cursor-pointer `} onClick={() => handleActive(nav.id)}>{nav.name}</Link>

                            ))
                        }

                    </ul>

                </nav>

                <nav className="hidden sm:flex">
                    {nav.map(nav => (
                        <a href="#best" key={nav.id} onClick={() => handleActive(nav.id)} className={` ${nav.active && "active"} cursor-pointer text-[19.2px] text-white mr-8`}>{nav.name}</a>
                    ))}
                    <span><img src={Search} alt="" /></span>

                </nav>




            </div>

        </div>
    )
}
