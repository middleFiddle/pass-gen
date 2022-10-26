const Indicator = ({ id }) => {
    return (
        <div id={id} className="rating flex justify-between space-x-2 p-2 ">
            <input type="radio" name="rating-1" className="mask mask-box " />
            <input type="radio" name="rating-1" className="mask mask-box " />
            <input type="radio" name="rating-1" className="mask mask-box" />
            <input type="radio" name="rating-1" className="mask mask-box" />
        </div>
    )
}

export default Indicator
