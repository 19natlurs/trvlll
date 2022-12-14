import React from 'react'
import { Link } from 'react-router-dom'
import "./Button.css"

const STYLES = ["btn--primary", "btn--outline"]
const SIZES = ["btn--medium", "btn--large"]

const Button = ({ children, onClick, type, buttonSize, buttonStyle }) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to="/signup">
            <button className={`btn ${checkButtonSize} ${checkButtonStyle}`}
                type={type}
                onClick={onClick}
            >
                {children}
            </button>
        </Link>
    )
}

export default Button