import React from 'react'
import NavBar from './NavBar'
import logo from "../assets/images/footerLogo.png";
import List from './List';
import ListData from './ListData';
import Button from './Button';
// className='footer-btn'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-logo'>
                <img src={logo} alt="the logo" />
            </div>

            <ul className='footer-list'>
                {ListData.map((item) => (
                    <List key={item.id} item={item} />
                ))}
            </ul>

            <Button className='footer-btn' />
        </footer>
    )
}

export default Footer