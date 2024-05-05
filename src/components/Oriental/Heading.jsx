import { HeroBg } from "../../assets";
import Button from "../Button";

export default function Heading() {
    return (
        <section className="flex flex-col items-center pb-[80px] sectionBg sm:flex-row sm:justify-center  sm:py-[100px] gap-7  mx-auto">
            <div>
                <img src={HeroBg} alt="" className="rounded-full" />
            </div>
            <div className="flex flex-col items-center sm:items-start  sm:ml-[300px] sm:w-[30%]  ">
                <h3 className=" font-grand font-bold text-[80px] text-theme1-0">Oriental Taste</h3>
                <p className="text-center w-fit text-[20.8px] leading-6 text-white sm:w-[60%] sm:text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit animi, a molestias molestiae voluptate excepturi?</p>
                <Button></Button>

            </div>

        </section>
    )
}
