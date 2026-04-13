import React from 'react'
import heroImage from "../assets/images/HeroImage.png";


const Hero = () => {
    return (
        <section className='hero-container'>
            <div className="hero-text-content">
                <h1 className='hero-title'>Modest Turkish Dressing</h1>
                <p className="hero-description">
                    Dolcelatte cheese slices gouda halloumi squirty cheese manchego stilton blue castello.
                </p>
            </div>

            <div className="hero-image-content">
                <img src={heroImage} alt="heroImage" className="hero-img" />
            </div>

        </section>
    )
}

export default Hero;