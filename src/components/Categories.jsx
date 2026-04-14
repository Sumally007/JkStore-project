import React from 'react'

import topsImg from '../assets/images/Rectangle 9.png';
import dressImg from '../assets/images/Rectangle 10.png';
import shoesImg from '../assets/images/Rectangle 12.png';
import hatsImg from '../assets/images/Rectangle 11.png';
import tshirtImg from '../assets/images/Rectangle 9 (1).png';
import pantsImg from '../assets/images/Rectangle 10 (1).png';
import socksImg from '../assets/images/Rectangle 11 (1).png';
import sweatPantsImg from '../assets/images/Rectangle 12 (1).png';


const categoriesData = [
    { id: 1, title: 'Tops', image: topsImg },
    { id: 2, title: 'Dress', image: dressImg },
    { id: 3, title: 'Shoes', image: shoesImg },
    { id: 4, title: 'Hats', image: hatsImg },
    { id: 5, title: 'T-shirt', image: tshirtImg },
    { id: 6, title: 'Pants', image: pantsImg },
    { id: 7, title: 'Socks', image: socksImg },
    { id: 8, title: 'Sweat Pants', image: sweatPantsImg },
];


const Categories = () => {
    return (
        <section className="category-section">
            <div className="category-header">
                <h2>Category</h2>
                <p>Browse some of our cateries from the store</p>
            </div>

            <div className="category-grid">
                {categoriesData.map((item) => (
                    <div key={item.id} className="category-card">
                        <div className="card-image-wrapper">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Categories