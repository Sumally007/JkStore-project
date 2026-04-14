import React from 'react'

import sefamerveLogo from '../assets/images/nav-new-logo 1.png';
import minicityLogo from '../assets/images/mini-logo 2.png';
import modasenaLogo from '../assets/images/big-modasena-logo 1.png';

const Partners = () => {
    return (
        <section className="partners-section" >
            <div className="partners-container">
                <img src={sefamerveLogo} alt="Sefamerve Logo" className="partner-logo" />
                <img src={minicityLogo} alt="Minicity Logo" className="partner-logo" />
                <img src={modasenaLogo} alt="ModaSena Logo" className="partner-logo" />
            </div>
        </section >
    )
}

export default Partners