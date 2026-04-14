import React from 'react'
import Dressing from "../assets/images/Rectangle 15.png"
import Dressing1 from "../assets/images/Rectangle 16.png"
import Dressing2 from "../assets/images/Rectangle 17.png"

const NewArrivals = () => {

    const NewArrivalsData = [
        { id: 1, title: 'Knitwear Hijab Dress', subtitle: 'Buy Now', image: Dressing },
        { id: 2, title: 'Shirt/blouse', subtitle: 'Buy Now', image: Dressing1 },
        { id: 3, title: 'Sweatshirt', subtitle: 'Buy Now', image: Dressing2 },
    ];


    return (
        <section className='new-arrivals-container'>
            <div className="new-arrivals-contents">
                <h1 className='title'>2022 New Arrivals!</h1>
                <div className="card-container">
                    {NewArrivalsData.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>

            </div>
        </section>
    )
}

const Card = ({ item }) => {
    console.log(item)
    return (
        <div className="card">
            <div className="image-card">
                <img src={item.image} alt={item.image} />
            </div>
            <div className="text-card">
                <p className='text'>{item.title}</p>
                <a className='link' href="#">{item.subtitle}</a>
            </div>
        </div>
    )
}

export default NewArrivals