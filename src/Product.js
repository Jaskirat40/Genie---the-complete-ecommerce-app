import React from 'react'
import { Link } from 'react-router-dom';
import "./Product.css"
import {useStateValue} from "./StateProvider"
function Product({link,id, title, image, price, rating}) {
    const [state, dispatch] = useStateValue();
    const addToBasket=() =>
    {
        //dispach the item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                <Link to={link}
                className="link">
                <span>
                   {title} 
                </span>
                </Link>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className= "product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) =>
                    (<p>⭐</p>
                    ))}
                </div>
            </div>
            <img
                src={image}
                alt="" 
            />

            <button onClick={addToBasket}>
                Add to basket
            </button>
        </div>
    )
}

export default Product
