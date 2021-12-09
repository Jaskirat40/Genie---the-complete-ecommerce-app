import React from 'react'
import './Checkout.css'
import Subtotal from "./Subtotal"
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket,user}, dispatch] = useStateValue();
    return (
        <div className= "checkout">
           <div className= "checkout__left">
               <div className="checkout__ad">      
                <img
                    className="checkout__img"
                    src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
                    alt="Checkout__ad"
                    />
               </div>
            <div className="checkout__items"> 
                <h3>
                     hello,{user? user?.email: " Guest"}
                </h3>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
                {basket.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
            />
          ))}
               
            </div>
           </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
