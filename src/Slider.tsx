const Slider = ({ length, setLength, setCopied }) => {
    return (
        <div className="form-control ">
            <label className="label flex flex-col ">
                <div className="label-text flex w-full justify-between">
                    <h1 className="text-body ">Character Length</h1>

                    <h1 className="text-password text-green-s">{length}</h1>
                </div>
                <input
                    type="range"
                    defaultValue={0}
                    min="0"
                    max="20"
                    step="1"
                    className="range range-primary"
                    onChange={(e) => {
                        setCopied(false)
                        setLength(e.target.value)
                    }}
                />
            </label>
        </div>
    )
}

export default Slider
