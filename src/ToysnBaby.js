import React from 'react'
import "./Toysnbaby.css"
import Product from "./Product"
function ToysnBaby() {
    return (
        <div className="Tnb">
            {/* <span className="Tnb1">Toys and Baby products</span> */}
            <img className="Tnb__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/BAU/Baby_header_1500x250.jpg"/>
            <div className="Tnb__row1">
                <Product
                link=""
                id="4011"
                title= "Tiny Love 4-in-1 Here I Grow Mobile Activity Center"
                price={99.99}
                image="https://m.media-amazon.com/images/I/81GXBymwQoL._SL1500_.jpg" 
                rating={5}
                /> 
                <Product
                link=""
                id="4012"
                title= "Graco Simple Sway Swing"
                price={67.99}
                image="https://m.media-amazon.com/images/I/71CnAb9DDnL._SL1500_.jpg" 
                rating={5}
                /> 
                <Product
                link=""
                id="4013"
                title= "Funko Pop! Advent Calendar: Harry Potter - 2021"
                price={39.99}
                image="https://m.media-amazon.com/images/I/81Zd-0CvRJL._AC_SL1500_.jpg" 
                rating={5}
                />
            </div>
        </div>
    )
}

export default ToysnBaby
