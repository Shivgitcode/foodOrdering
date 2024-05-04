import { ff } from "../../assets"
import Button from "../Button"
export default function Grill() {
    return (
        <section className="flex flex-col-reverse items-center mb-[80px] sectionBg2 sm:flex-row-reverse sm:justify-center sm:py-[300px] ">
            <div>
                <img src={ff} alt="" className="rounded-full" />
            </div>
            <div className="flex flex-col items-center mb-10 sm:items-start sm:w-[38%]">
                <h3 className=" font-grand font-bold text-[80px] text-theme1-0">Chicken Grill</h3>
                <p className="text-center w-fit text-[20.8px] leading-6 text-white sm:text-left sm:w-[50%] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit animi, a molestias molestiae voluptate excepturi?</p>
                <Button></Button>

            </div>

        </section>
    )
}
