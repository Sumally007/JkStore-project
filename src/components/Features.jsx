import React from 'react'
import moneyIcon from "../assets/icons/money-svgrepo-com 1.svg";
import Shipping from "../assets/icons/delivery-truck-svgrepo-com 1.svg";
import customerCare from "../assets/icons/operator-customer-service-svgrepo-com 1.svg"
import payment from "../assets/icons/secure-payment-svgrepo-com 1.svg"

const Features = () => {
    return (
        <section className='feature-container'>
            <div className="feature-contents">
                <div className='feature-content'>
                    <img className='icon' src={moneyIcon} alt="the money icon" />
                    <p className='name'>Monery Back Guarantee</p>
                </div>
                <div className='feature-content'>
                    <img className='icon' src={Shipping} alt="the Shipping icon" />
                    <p className='name'>Free Shipping</p>
                </div>
                <div className='feature-content'>
                    <img className='icon' src={customerCare} alt="the customerCare icon" />
                    <p className='name'>24/7 Customer Support</p>
                </div>
                <div className='feature-content'>
                    <img className='icon' src={payment} alt="the payment icon" />
                    <p className='name'>Secure Payment</p>
                </div>
            </div>
        </section>
    )
}

export default Features