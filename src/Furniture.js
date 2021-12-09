import React from 'react'
import "./Furniture.css"
import Product from "./Product"
function Furniture() {
    return (
        <div className="Furniture">
            <span className="Furniture1">🛋️🪑🛏️Furniture🛏️🪑🛋️</span>
            <img className="Furniture__image"
             src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG21/Furniture/BAU/Premium_store_-_Furniture_1242_x__450.jpg"/>
            <div className="Furniture__row1">
                    <Product
                    link=""
                    id="3011"   
                    title= "Serta Rane Collection Convertible Sofa, L66.1 x W33.1 x H29.5, Charcoal"
                    price={159.99}
                    image="https://m.media-amazon.com/images/I/91UGkZmARtL._AC_SL1500_.jpg" 
                    rating={4}
                    /> 
                    <Product
                    link=""
                    id="3012"
                    title= "Walker Edison Milton Classic 2 Shelf Corner TV Stand for TVs up to 65 Inches Driftwood"
                    price={129.99}
                    image="https://m.media-amazon.com/images/I/81jnyijxDqL._AC_SL1500_.jpg" 
                    rating={5}
                    /> 
                    <Product
                    link=""
                    id="3013"
                    title= "Rolanstar Bookshelf with 2 Wooden Drawers, Rustic Brown"
                    price={109.99}
                    image="https://m.media-amazon.com/images/I/816e63evwqL._AC_SL1500_.jpg" 
                    rating={5}
                    /> 
                    <Product
                    link=""
                    id="3014"
                    title= "Flash Furniture Capri Comfortable Sleep Memory Foam & Pocket Spring Mattress"
                    price={247.59}
                    image="https://m.media-amazon.com/images/I/91Rba07yhUS._AC_SL1500_.jpg" 
                    rating={4}
                    />  
            </div>
        </div>
    )
}

export default Furniture
