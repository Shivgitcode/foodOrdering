import { Element } from "react-scroll"
export default function Subscribe() {
    return (
        <Element name="contact">
            <div className="flex justify-center items-center pb-40 sm:py-40 sm:pb-44">
                <div className="flex flex-col items-center mt-16">
                    <h3 className=" font-bold text-[80px] font-grand mt-4 sm:text-[112px] ">Subscribe</h3>
                    <p className="text-center text-[24px] w-[40%] sm:text-[32px] sm:w-[45%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quam eveniet excepturi asperiores.</p>
                    <div className="flex flex-col items-center gap-3 w-[70%] mt-12">
                        <input type="text" placeholder="Your Email" className=" p-3 placeholder:text-[13px] shadow w-full" />
                        <button className=" p-3 font-semibold bg-theme1-0 w-full">Subscribe</button>
                    </div>


                </div>

            </div>

        </Element>

    )
}
