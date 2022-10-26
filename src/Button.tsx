const Button = ({ handleSubmit }) => {
    return (
        <div
            onClick={handleSubmit}
            className="btn btn-primary hover:bg-dark-gray-s hover:border-primary hover:text-primary container group rounded-none text-body"
        >
            Generate
            <svg
                className="ml-6 fill-dark-gray-s group-hover:fill-primary"
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
            </svg>
        </div>
    )
}

export default Button
