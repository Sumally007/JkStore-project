import React from 'react'
import logo from "../assets/images/logo.png";

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <div className='logo'>
                <img src={logo} alt="the logo" />
            </div>

            <ul className='nav-list'>
                <li>Home</li>
                <li>About</li>
                <li>Product</li>
                <li>Categories</li>
            </ul>

            <button className='btn'>Contact</button>
        </nav>
    )
}

export default NavBar;