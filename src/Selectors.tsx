const Selectors = ({
    setInclDown,
    setInclNum,
    setInclUp,
    setInclSym,
    setCopied,
}) => {
    return (
        <div className="form-control text-body ">
            <label className="label cursor-pointer">
                <input
                    type="checkbox"
                    className="checkbox checked:checkbox-primary"
                    onClick={() => {
                        setCopied(false)
                        setInclUp((prev) => !prev)
                    }}
                />
                <span className="label-text">Include Uppercase Letters</span>
            </label>
            <label className="label cursor-pointer">
                <input
                    type="checkbox"
                    className="checkbox checked:checkbox-primary"
                    onClick={() => {
                        setCopied(false)
                        setInclDown((prev) => !prev)
                    }}
                />
                <span className="label-text">Include Lowercase Letters</span>
            </label>{" "}
            <label className="label cursor-pointer">
                <input
                    type="checkbox"
                    className="checkbox checked:checkbox-primary"
                    onClick={() => {
                        setCopied(false)
                        setInclNum((prev) => !prev)
                    }}
                />
                <span className="label-text">Include Numbers</span>
            </label>{" "}
            <label className="label cursor-pointer">
                <input
                    type="checkbox"
                    className="checkbox checked:checkbox-primary"
                    onClick={() => {
                        setCopied(false)
                        setInclSym((prev) => !prev)
                    }}
                />
                <span className="label-text">Include Symbols</span>
            </label>
        </div>
    )
}

export default Selectors
