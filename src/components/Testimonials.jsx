import React from 'react';

import person1 from '../assets/images/Ellipse 2 (1).png';
import person2 from '../assets/images/Ellipse 2.png';

const testimonialsData = [
    {
        id: 1,
        name: "Okshan Aby",
        image: person1,
        comment: "Dolcelatte cheese slices gouda halloumi squirty cheese manchego stilton blue castello."
    },
    {
        id: 2,
        name: "Ismail Said",
        image: person2,
        comment: "Dolcelatte cheese slices gouda halloumi squirty cheese manchego stilton blue castello."
    }
];

function Testimonials() {
    return (
        <section className="testimonials-section">
            <h2 className="section-title">Testimonials</h2>
            <p className="section-subtitle">See what our customers saying about our products and services</p>

            <div className="testimonials-container">
                {testimonialsData.map((item) => (
                    <div key={item.id} className="testimonial-card">
                        <div className="profile-wrapper">
                            <img src={item.image} alt={item.name} className="profile-img" />
                        </div>
                        <h3 className="user-name">{item.name}</h3>
                        <p className="user-comment">{item.comment}</p>
                    </div>
                ))}
            </div>


            <div className="dots-container">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </section>
    );
}

export default Testimonials;