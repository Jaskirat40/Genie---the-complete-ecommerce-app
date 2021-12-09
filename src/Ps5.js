import React from 'react'
import "./Ps5.css"
import {useStateValue} from "./StateProvider"
import LockIcon from '@mui/icons-material/Lock';

function Ps5() {
    const [state, dispatch] = useStateValue();
    const addToBasket=() =>
    {
        //dispach the item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: "1011",
                title: "Sony Playstation 5 console",
                image: "https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg",
                price: 499.99,
                rating: 5,
            },
        });
    };
    return (
        <div className="Ps5__container">
            <img className="Ps5__ad__image" 
            src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Amazon_Exports/XCM_CUTTLE_1351597_1786068_US_650x45_en_US._CB645630042_.jpg"/>
            <div className="Ps5__details">
                <img className="Ps5__Image"
                    src="https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg"
                    alt="PS5 image" 
                />
                <div className="Ps5__Product__details">
                    <span className="Ps5__title">PlayStation 5 Console</span>
                    <p>
                    <small>$</small>
                    <strong>{499.99}</strong>
                    </p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p className="Ps5__status">In Stock.</p>
                    <ul className="Ps5__desc">
                        <li>
                        Lightning Speed - Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do.
                        </li>
                        <li>
                        Stunning Games - Marvel at incredible graphics and experience new PS5 features.
                        </li>
                        <li>
                        Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.
                        </li>
                    </ul>
                </div>
                <div className="Ps5__addToCart">
                    <span >Arrives: Oct 22 - 29</span>
                    <button className="Ps5__Button"
                        onClick={addToBasket}>
                        Add to basket
                    </button>
                    <div className="Ps5__addToCart__secure">
                        <LockIcon/>
                        <span>Secure Transaction</span>
                    </div>
                </div>
            </div>
            <div className="Ps5__details1">
                <hr size="2" width="100%" color="black" />  
                <span className="Ps5__FTM">From the manufacturer</span>
                <img src="https://m.media-amazon.com/images/S/aplus-media/vc/8795ff91-1814-4b88-a9f7-c57cff0b1669.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"/>
                <img src="https://m.media-amazon.com/images/S/aplus-media/vc/cee06183-2021-45ed-a662-84d7e570f370.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"/>
                <img src="https://m.media-amazon.com/images/S/aplus-media/vc/5a2cbd73-f6ea-429b-a286-9be1fbefe586.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"/>
                <img src="https://m.media-amazon.com/images/S/aplus-media/vc/474e5931-3bc2-4e9a-8300-6b37994f3a72.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"/>
                <img src="https://m.media-amazon.com/images/S/aplus-media/vc/a9f3c165-c008-4a4e-85f7-f75bbd119d0d.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"/>
                <img src="https://m.media-amazon.com/images/S/aplus-media/vc/c32b6aa0-ba02-4944-bef5-3e1c88d52eae.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"/>
            </div>
        </div>
    )
}

export default Ps5