import { info } from "../../utils";

export default function Statistics() {
    return (
        <section className=" p-8 flex flex-col items-center bg-theme2-0 ">
            <h3 className=" font-grand font-bold text-[112px] text-theme1-0">Statistics</h3>
            <p className=" font-medium text-center text-[24px] mt-8 text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ullam rerum eius perspiciatis.</p>
            <div className="mt-[80px] flex flex-col items-center gap-12 sm:flex-row">
                {info.map(el => (
                    <div className="w-[250px] border-2 rounded-full flex flex-col items-center p-6">
                        <h3 className="text-[112px] text-theme1-0 font-grand">{el.count}</h3>
                        <p className="text-[19.2px] font-bold uppercase text-white">{el.name}</p>
                    </div>


                ))}

            </div>

        </section>
    )
}
