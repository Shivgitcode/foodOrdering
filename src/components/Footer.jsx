import { Instagram } from "../assets";
import { footer, icons } from "../utils";
import FooterCard from "./FooterCard";

export default function Footer() {
    return (
        <div className=" bg-theme2-0 p-8 sm:flex sm:py-[160px] sm:px-[112px] sm:justify-between ">
            <div className="flex flex-col gap-4 w-full sm:w-[50%]">
                <h3 className="text-white uppercase font-bold text-[24px] sm:w-fit">title here</h3>
                <p className=" text-white  font-medium text-lg sm:w-[80%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum eos, natus, autem perspiciatis aut iusto illo dolore unde necessitatibus a ut rerum odio. Incidunt, quasi error mollitia ipsum nulla hic!</p>
                <ul className="flex items-center justify-start gap-4 sm:w-fit">
                    {icons.map(icon => (
                        <li><img src={icon.img} alt="" /></li>
                    ))}
                </ul>


            </div>

            <div className="flex justify-between flex-wrap mt-5 gap-20">
                {
                    footer.map((el) => (
                        <FooterCard el={el} />
                    ))
                }

            </div>

        </div>
    )
}
