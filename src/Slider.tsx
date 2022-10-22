import React from "react"

const Slider = () => {
    return (
        <label>
            <div className="flex container ">
                <h1 className="text-body">Character Length</h1>

                <h1 className="text-password font-green-s">10</h1>
            </div>
            <input
                type="range"
                min="0"
                max="100"
                step="25"
                className="range range-primary "
            />
        </label>
    )
}

export default Slider
