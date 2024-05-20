import { bestSellar } from "../utils";
import { Element } from "react-scroll";

export default function BestSeller() {
    return (
        <Element name="product" id="product">
            <div className=" p-8 sm:p-[80px] flex flex-col items-center" id="product">
                <h2 className="text-[48px] font-bold font-grand text-theme3-0">Best Sellar</h2>
                <p className="text-center text-[20px] mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat sunt nobis quis repellendus in.</p>
                <div className="flex flex-col w-full items-center mt-[80px] gap-4 sm:flex-row sm:justify-around">
                    {bestSellar.map((sellar) => (
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-[300px] overflow-hidden rounded-full">
                                <img src={sellar.img} alt="" className="
                                rounded-full w-full h-full hover:scale-110 transition-all duration-200"/>
                            </div>
                            <h3 className="text-center text-[48px] font-grand font-bold text-theme3-0">{sellar.name}</h3>
                            <p className="text-center text-[16px]">{sellar.lorem}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Element>
    )
}
