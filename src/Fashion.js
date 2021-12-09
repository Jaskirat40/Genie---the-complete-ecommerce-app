import React from 'react'
import "./Fashion.css"
import Product from './Product'

function Fashion() {
    return (
        <div className="Fashion">
            <span className="Fashion1">🧥👖👞Fashion👚👗👠</span>
            <img className="Fashion__image"
             src="https://images-na.ssl-images-amazon.com/images/G/31/img21/Fashion/Flip/Winterwear21/AFPage/Header/PC/15kstyles-Header-PC._SX3000_QL85_.jpg"/>
            <div className="Fashion__row1">
            <Product
                    id="2011"
                    link=""
                    title= "Gildan Men's Fleecw Hooded Sweatshirt"
                    price={14.99}
                    image="https://m.media-amazon.com/images/I/71VZueFCKVS._AC_UX679_.jpg" 
                    rating={4}
                    /> 
                    <Product
                    link=""
                    id="2012"
                    title= "Levi's Men's 505 Regular Fit Jeans"
                    price={34.99}
                    image="https://m.media-amazon.com/images/I/61NlrvixWeL._AC_UX679_.jpg" 
                    rating={5}
                    /> 
                    <Product
                    link=""
                    id="2013"
                    title= "Womens Button Down V Neck Shirts Long Sleeve Blouse"
                    price={18.99}
                    image="https://m.media-amazon.com/images/I/71foGG88YiL._AC_UX569_.jpg" 
                    rating={5}
                    />
            </div>
        </div>
    )
}

export default Fashion
