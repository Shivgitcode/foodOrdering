import Heading from "./Heading";
import Statistics from "./Statistics";
import Grill from "./Grill";

export default function Oriental() {
    return (
        <div>
            <div>
                <Heading direction={"flex-col"}></Heading>

                <Statistics></Statistics>

                <Grill></Grill>


            </div>
        </div>
    )
}
