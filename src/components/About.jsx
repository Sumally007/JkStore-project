import React from 'react'
import patternImage from "../assets/images/Rectangle 19.png"
import Button from './Button';
// className="about-btn"

const About = () => {
    return (
        <section className="about-container">
            <div className="about-image">
                <img src={patternImage} alt="Geometric Pattern" />
            </div>

            <div className="about-content">
                <h2 className="about-title">About Us</h2>
                <p className="about-text">
                    Are you looking for affordable and high-quality clothing in Tanzania?
                    Look no further, JK Store is the answer.
                </p>
                <p className="about-subtext">
                    JK Store provides Tanzanian women with high-quality modest clothes
                    at an affordable price. All our clothes selections are sourced from Turkey.
                </p>
                <Button className="about-btn" />
            </div>
        </section>
    )
}

export default About