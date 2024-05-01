import { bestSellar } from "../utils";

export default function BestSeller() {
    return (
        <div>
            <div className=" p-8 flex flex-col items-center">
                <h2 className="text-[48px] font-bold font-grand">Best Sellar</h2>
                <p className="text-center text-[16px] mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat sunt nobis quis repellendus in.</p>
                <div className="flex flex-col w-full items-center mt-[80px] gap-4">
                    {bestSellar.map((sellar) => (
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-[300px]">
                                <img src={sellar.img} alt="" className="
                                rounded-full w-full"/>
                            </div>
                            <h3 className="text-center text-[48px] font-grand">{sellar.name}</h3>
                            <p className="text-center text-[16px]">{sellar.lorem}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
