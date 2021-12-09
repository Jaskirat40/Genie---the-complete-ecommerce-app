import React from 'react'
import "./Lg_Monitor.css"
import {useStateValue} from "./StateProvider"
import LockIcon from '@mui/icons-material/Lock';


function Lg_Monitor() {
    const [state, dispatch] = useStateValue();
    const addToBasket=() =>
    {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: "1012",
                title: "LG 27GL850-B 27 Inch Ultragear Gaming Monitor",
                image: "https://m.media-amazon.com/images/I/81ZYbkU1uKL._AC_SL1500_.jpg",
                price: 378.99,
                rating: 4,
            },
        });
    };
    return (
        <div className="LG__container">
            <img className="LG__ad__image" 
            src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Amazon_Exports/XCM_CUTTLE_1351597_1786068_US_650x45_en_US._CB645630042_.jpg"/>
            <div className="LG__details">
                <img className="LG__Image"
                    src="https://m.media-amazon.com/images/I/81ZYbkU1uKL._AC_SL1500_.jpg"
                    alt="monitor image" 
                />
                <div className="LG__Product__details">
                    <span className="LG__title">LG 27GL850-B 27 Inch Ultragear Gaming Monitor</span>
                    <p className="LG__product__price">
                    <small>$</small>
                    <strong>{378.99}</strong>
                    </p>
                    <p>⭐⭐⭐⭐</p>
                    <p className="LG__status">In Stock.</p>
                    <ul className="LG__desc">
                        <li>
                        27 inches QHD (2560 X 1440) Nano IPS display.
                        </li>

                        <li>
                        Nvidia G SYNC compatible. Dimension with stand (W x H x D): (614.2 x 574.8 x 274.4) millimeter; Dimension without stand (W x H x D): (614.2x 364.8 x 56.3) millimeter.
                        </li>
                        <li>
                        144 Hertz refresh rate. Viewing Angle : 178˚(R/L),178˚(U/D).
                        </li>
                        <li>
                        Ultra-thin bezel and tilt, height, pivot adjustable
                        </li>
                    </ul>
                </div>
                <div className="LG__addToCart">
                    <span >Arrives: Oct 22 - 29</span>
                    <button className="LG__Button"
                        onClick={addToBasket}>
                        Add to basket
                    </button>
                    <div className="LG__addToCart__secure">
                        <LockIcon/>
                        <span>Secure Transaction</span>
                    </div>
                </div>
            </div>
            {/* <span className="FTM">From the manufacturer</span> */}
            <div className="LG__details1">
                <hr size="2" width="100%" color="black"/>
                <span className="LG__FTM">From the manufacturer</span>
                <img src="https://m.media-amazon.com/images/S/aplus-media/vc/f8ee8388-60bf-43c5-ab8c-ed40370c1698.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"/>
                <span className="LG__image1__text1">Geared Up for Victory</span>
                <span className="LG__image1__text2">See your way to victory with the innovative 27GL850 UltraGear gaming monitor, providing the crispest visuals and the sharpest clarity. You can experience breath-taking immersion on a Nano IPS display with a 1ms response time.</span>
                <img src="https://m.media-amazon.com/images/S/aplus-media/vc/4092f657-8839-4340-9635-fc00d58efb1b.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"/>
                <img src="https://m.media-amazon.com/images/S/aplus-media/vc/9613f47c-caff-4ab3-8ef3-8c86968e787c.__CR0,0,650,350_PT0_SX650_V1___.jpg"/>
                <img src="https://m.media-amazon.com/images/S/aplus-media/vc/5df9b94b-aff4-4ef5-823b-dcdd55259c8e.__CR0,0,650,350_PT0_SX650_V1___.jpg"/>
                <img src="https://m.media-amazon.com/images/S/aplus-media/vc/62dda381-2125-4710-b70b-c8ec28689979.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"/>
                <img src="https://m.media-amazon.com/images/S/aplus-media/vc/d31bfae6-dda0-4eee-9e79-e8968a823b22.__CR0,0,650,350_PT0_SX650_V1___.jpg"/>
            </div>
        </div>
    )
}

export default Lg_Monitor