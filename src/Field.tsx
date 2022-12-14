const Field = ({ value, copied, setCopied }) => {
    return (
        <label className="grid grid-cols-9 grid-rows-1 container max-w-lg rounded-xs ">
            <input
                value={value}
                id="password"
                type="text"
                placeholder="P4$5W0rD!"
                readOnly
                className="input row-start-1 row-end-1 col-start-1 col-end-10 z-1 text-password bg-dark-gray-s px-4 rounded-none placeholder:text-gray-s focus:text-white-s focus:outline-none cursor-default"
            />
            {copied && (
                <h1 className="row-start-1 text-body text-green-s row-end-1 col-start-8 col-end-9 mx-auto relative top-3 right-4">
                    COPIED
                </h1>
            )}
            <svg
                className="fill-green-s hover:fill-white-s row-start-1 row-end-1  col-end-10 relative top-3 left-2 cursor-pointer"
                width="21"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                    navigator.clipboard.writeText(value)
                    setCopied(true)
                }}
            >
                <path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z " />
            </svg>
        </label>
    )
}

export default Field
