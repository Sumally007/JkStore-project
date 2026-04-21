import React from 'react'
import logo from "../assets/images/logo.png";
import List from './List';
import ListData from './ListData';
import Button from './Button';

const NavBar = () => {

    return (
        <nav className='nav-bar'>
            <div className='logo'>
                <img src={logo} alt="the logo" />
            </div>

            {/* <div className='menu'>
                <span></span>
                <span></span>
                <span></span>
            </div> */}

            <ul className='nav-list'>
                {ListData.map((item) => (
                    <List key={item.id} item={item} />
                ))}
            </ul>

            <Button />
        </nav>
    )
}



export default NavBar;