import React from 'react'
import Product from "./Product"
import "./Books.css"
function Books() {
    return (
        <div className="Books">
            <span className="Books1">📚Book Store📚</span>
            <img className="Books__image"
             src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/092020/jupiter/gw/Jeffrey-pc._CB639961902_SY250_.jpg"/>
            <div className="Books__row1">
                <Product
                link=""
                id="5011"
                title= "Peril Hardcover – September 21, 2021"
                price={18.43}
                image="https://m.media-amazon.com/images/P/B098PF8D41.01._SCLZZZZZZZ_SX500_.jpg" 
                rating={4}
                /> 
                <Product
                link=""
                id="5012"
                title= "What's Left Unsaid: A Novel"
                price={8.43}
                image="https://m.media-amazon.com/images/P/1542027209.01._SCLZZZZZZZ_SX500_.jpg" 
                rating={4}
                /> 
                <Product
                link=""
                id="5013"
                title= "The Keeper of Happy Endings"
                price={10.99}
                image="https://m.media-amazon.com/images/P/1542021472.01._SCLZZZZZZZ_SX500_.jpg" 
                rating={5}
                /> 
                <Product
                link=""
                id="5014"
                title= "A Promised Land - Barack Obama"
                price={25.89}
                image="https://images-na.ssl-images-amazon.com/images/I/41iYr6o753L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" 
                rating={5}
                /> 
                <Product
                link=""
                id="5015"
                title= "The Ride of a Lifetime - Robert Iger"
                price={12.00}
                image="https://images-na.ssl-images-amazon.com/images/I/41MBBddHqQL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" 
                rating={5}
                />
            </div>
        </div>
    )
}

export default Books
