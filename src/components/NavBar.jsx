import React, { useState } from 'react'
import logo from "../assets/images/logo.png";
import List from './List';
import ListData from './ListData';
import Button from './Button';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='nav-bar'>
            <div className='logo'>
                <img src={logo} alt="the logo" />
            </div>

            <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? "open" : ""}>
                {ListData.map((item) => (
                    <List key={item.id} item={item} />
                ))}
            </ul>

            <Button />
        </nav>
    )
}



export default NavBar;