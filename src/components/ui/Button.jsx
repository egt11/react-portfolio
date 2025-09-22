import React from 'react'

const Button = ({ text, href, background }) => {
    const Tag = href ? "a" : "button"
    const colorStyle = background === 'white' ? "border-primary text-primary hover:bg-primary hover:text-white" : "border-white text-white hover:bg-white hover:text-primary"

    return (
        <Tag href={href} className={`py-2 px-6 border-2 font-bold text-lg transition cursor-pointer capitalize ${colorStyle}`}>{text}</Tag>
    )
}

export default Button