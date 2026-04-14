import React from 'react'
import Dressing from "../assets/images/Rectangle 15.png"
import Dressing1 from "../assets/images/Rectangle 16.png"
import Dressing2 from "../assets/images/Rectangle 17.png"

const NewArrivals = () => {
    return (
        <section className='new-arrivals-container'>
            <div className="new-arrivals-contents">
                <h1 className='title'>2022 New Arrivals!</h1>
                <div className="card-container">
                    <div className="card">
                        <div className="image-card">
                            <img src={Dressing} alt="Dressing" />
                        </div>
                        <div className="text-card">
                            <p className='text'>Knitwear Hijab Dress</p>
                            <a className='link' href="#">Buy Now</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-card">
                            <img src={Dressing1} alt="Dressing1" />
                        </div>
                        <div className="text-card">
                            <p className='text'>Shirt/blouse</p>
                            <a className='link' href="#">Buy Now</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="image-card">
                            <img src={Dressing2} alt="Dressing2" />
                        </div>
                        <div className="text-card">
                            <p className='text'>Sweatshirt</p>
                            <a className='link' href="#">Buy Now</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default NewArrivals