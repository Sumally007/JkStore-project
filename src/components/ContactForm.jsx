import React, { useState } from 'react'
import shoppingImage from "../assets/images/pexels-sam-lion-5710214-removebg-preview 1.png"

const ContactForm = () => {
    const [whatsapp, setWhatsapp] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks! We will Check You On: ${whatsapp}`);
        setWhatsapp("")
    };

    return (
        <section className="contact-section">
            <div className="contact-card">
                <div className="contact-info">
                    <h2>Contact Us Right Now</h2>
                    <p>Please provide us with your WhatsApp number along with the country code.</p>

                    <form onSubmit={handleSubmit} className="whatsapp-form">
                        <input
                            type="number"
                            placeholder="Enter your WhatsApp number"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>

                <div className="contact-image">
                    <img src={shoppingImage} alt="Shopping people" />
                </div>
            </div>
        </section>
    )
}

export default ContactForm