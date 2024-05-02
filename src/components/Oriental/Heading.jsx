import { HeroBg } from "../../assets";
import Button from "../Button";

export default function Heading() {
    return (
        <section className="flex flex-col items-center pb-[80px] sectionBg sm:flex-row sm:justify-around  sm:py-24 gap-7 ">
            <div>
                <img src={HeroBg} alt="" className="rounded-full" />
            </div>
            <div className="flex flex-col items-center sm:items-start ml-[40px] sm:w-[40%]  ">
                <h3 className=" font-grand font-bold text-[80px] text-theme1-0">Oriental Taste</h3>
                <p className="text-center w-fit text-[20.8px] leading-6 text-white sm:w-[50%] sm:text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit animi, a molestias molestiae voluptate excepturi?</p>
                <Button></Button>

            </div>

        </section>
    )
}
