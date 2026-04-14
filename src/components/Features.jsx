import React from 'react'
import moneyIcon from "../assets/icons/money-svgrepo-com 1.svg";
import Shipping from "../assets/icons/delivery-truck-svgrepo-com 1.svg";
import customerCare from "../assets/icons/operator-customer-service-svgrepo-com 1.svg"
import payment from "../assets/icons/secure-payment-svgrepo-com 1.svg"

const Features = () => {
    const FeaturesData = [
        { id: 1, title: "Monery Back Guarantee", image: moneyIcon },
        { id: 2, title: "Free Shipping", image: Shipping },
        { id: 3, title: "24/7 Customer Support", image: customerCare },
        { id: 4, title: "Secure Payment", image: payment }
    ]

    return (
        <section className='feature-container'>
            <div className="feature-contents">
                {FeaturesData.map((item) => (
                    <FeaturesIcons key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}

const FeaturesIcons = ({ item }) => {
    return (
        <div className='feature-content'>
            <img className='icon' src={item.image} alt={item.image} />
            <p className='name'>{item.title}</p>
        </div>
    )
}

export default Features