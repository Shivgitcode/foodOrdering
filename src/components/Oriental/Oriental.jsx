import Heading from "./Heading";
import Statistics from "./Statistics";
import Grill from "./Grill";
import { Element } from "react-scroll";

export default function Oriental() {
    return (
        <Element name="promo">
            <div>
                <Heading direction={"flex-col"}></Heading>

                <Statistics></Statistics>

                <Grill></Grill>


            </div>
        </Element>
    )
}
