import React from 'react'
import NavBar from './NavBar'
import logo from "../assets/images/footerLogo.png";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-logo'>
                <img src={logo} alt="the logo" />
            </div>

            <ul className='footer-list'>
                <li>Home</li>
                <li>About</li>
                <li>Product</li>
                <li>Categories</li>
            </ul>

            <button className='footer-btn'>Contact</button>
        </footer>
    )
}

export default Footer