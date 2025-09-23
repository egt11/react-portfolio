import React from 'react'

const Button = ({ text, background }) => {
    const colorStyle = background === 'white' ? "border-primary text-primary hover:bg-primary hover:text-white" : "border-white text-white hover:bg-white hover:text-primary"

    return (
        <button className={`py-1 px-4 border-2 font-bold text-md md:py-2 md:px-6 md:text-lg transition cursor-pointer capitalize ${colorStyle}`}>{text}</button>
    )
}

export default Button