
import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Button from './UI/Button'

import "./Navbar.css"

const Navbar = () => {

    const [click, setClick] = useState(false)
    // const [button, setButton] = useState(true)
    const [menu, setMenu] = useState(false)

    const handleClick = () => {

        setClick(!click)
    }



    const showButton = () => {
        if (window.innerWidth <= 560) {

            setMenu(true)
        } else {

            setMenu(false)
        }
    }

    window.addEventListener("resize", showButton)


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className="logo">
                        <Link to="/" className='navbar-logo'>
                            <div className='logo-content'>TRVL <i className='fab fa-typo3 ' /></div>
                        </Link>

                        {menu && <div onClick={handleClick}>
                            < i className={click ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"} />
                        </div>}



                    </div>

                    <ul className={click && "nav-active"} >
                        <li>
                            <Link to="/" onClick={handleClick}>Home</Link>
                        </li>
                        <li>
                            <Link to="/services" onClick={handleClick}>Services</Link>
                        </li>
                        <li>
                            <Link to="/products" onClick={handleClick}>Product</Link>
                        </li>
                        <li>
                            <Link to="/signup" onClick={handleClick}> <Button buttonStyle='btn--outline' >SIGN UP</Button> </Link>

                        </li>
                    </ul>

                </div>
            </nav>

        </>
    )
}

export default Navbar
