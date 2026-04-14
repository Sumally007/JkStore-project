import React from 'react'

import sefamerveLogo from '../assets/images/nav-new-logo 1.png';
import minicityLogo from '../assets/images/mini-logo 2.png';
import modasenaLogo from '../assets/images/big-modasena-logo 1.png';

const Partners = () => {
    const PartnersData = [
        { id: 1, image: sefamerveLogo },
        { id: 2, image: minicityLogo },
        { id: 3, image: modasenaLogo },
    ]
    return (
        <section className="partners-section" >
            <div className="partners-container">
                {PartnersData.map((item) => (
                    <PartnersImage key={item.id} item={item} />
                ))}
            </div>
        </section >
    )
}

const PartnersImage = ({ item }) => {
    return (
        <img src={item.image} alt={item.image} className="partner-logo" />
    )
}

export default Partners