import React from 'react'

const Button = ({ className, children }) => {
    return (
        <button className={`btn ${className}`}>Contact</button>
    )
}

export default Button