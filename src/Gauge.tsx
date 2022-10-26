import Indicator from "./Indicator"

const Gauge = ({ index }) => {
    const descriptors: string[] = ["", "TOO WEAK", "WEAK", "MEDIUM", "STRONG"]

    return (
        <div className="flex bg-black-s justify-between items-center ">
            <h1 className="text-body p-2 ml-4 text-gray-s">STRENGTH</h1>
            <div className="flex mr-4">
                <h1 className="text-heading p-2 text-white-s">
                    {descriptors[index]}
                    {index === 1 && "!"}
                </h1>
                <Indicator
                    id={descriptors[index]?.toLowerCase().split(" ").join("")}
                />
            </div>
        </div>
    )
}

export default Gauge
