import React from 'react'
import "./Electronics.css"
import Product from './Product'
function Electronics() {
    return (
        <div className="Electronics">
            <span className="Electronics__store">🖥️💻📱   Electronics Store   📱💻🖥️</span>
            <img className="Elecronics__image"
             src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Monitors/Co-op/LG/UG_1500x300_Sep.jpg"/>
            <div className= "Electronics__row1">
                    <Product 
                    link="/Ps5"
                    id="1011"
                    title= "Sony Playstation 5 console"
                    price={499.99}
                    image="https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg" 
                    rating={5}
                    />
                    <Product
                    link="/Lg_Monitor"
                    id="1012"
                    title= "LG 27GL850-B 27-Inch Ultragear Gaming Monitor"
                    price={378.99}
                    image="https://m.media-amazon.com/images/I/81ZYbkU1uKL._AC_SL1500_.jpg" 
                    rating={4}
                    /> 
                    <Product
                    link=""
                    id="1013"
                    title= "Fire TV Stick 4K streaming device"
                    price={39.99}
                    image="https://m.media-amazon.com/images/I/51CgKGfMelL._AC_SL1000_.jpg" 
                    rating={5}
                    />
                    <Product 
                    link=""
                    id="1014"
                    title= "Samsung Galaxy Z Fold3 5G"
                    price={1599.99}
                    image="https://m.media-amazon.com/images/I/71MmJNwZcML._SL1500_.jpg" 
                    rating={4}
                    />
                    <Product 
                    link=""
                    id="1015"
                    title= "HyperX Cloud II Wireless - Gaming Headset"
                    price={149.99}
                    image="https://m.media-amazon.com/images/I/61hn00qw8TL._AC_SL1500_.jpg" 
                    rating={4}
                    />
                </div>
                <div className= "Electronics__row2">
                    <Product 
                    link=""
                    id="1016"
                    title= "Apple AirPods Pro"
                    price={199.99}
                    image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg" 
                    rating={5}
                    />
                    <Product
                    link=""
                    id="1017"
                    title= "Apple MacBook Pro 13-in M1 8-core GPU 16GB 2TB Space Gray"
                    price={2239.74}
                    image="https://m.media-amazon.com/images/I/51nLjnGoVPL._AC_UY327_FMwebp_QL65_.jpg" 
                    rating={4}
                    /> 
                    <Product
                    link=""
                    id="1018"
                    title= "Garmin 010-02064-00 Instinct, Rugged Outdoor Watch"
                    price={199.99}
                    image="https://m.media-amazon.com/images/I/6181t0057sL._AC_SL1500_.jpg" 
                    rating={5}
                    />
                </div>
                <div className= "Electronics__row3">
                    <Product 
                    link=""
                    id="1019"
                    title= 'LG OLED55C1PUB Alexa Built-in C1 Series 55" 4K Smart OLED TV (2021)'
                    price={1496.99}
                    image="https://m.media-amazon.com/images/I/91n+0a65XFL._AC_SL1500_.jpg" 
                    rating={5}
                    />
                    <Product
                    link=""
                    id="1020"
                    title= "Sony A90J 83 Inch TV: BRAVIA XR OLED 4K Ultra HD Smart Google TV with Dolby Vision HDR and Alexa Compatibility XR83A90J"
                    price={378.99}
                    image="https://m.media-amazon.com/images/I/91HwNoF+fAL._AC_SL1500_.jpg" 
                    rating={5}
                    /> 
                </div>
                <div className="Electronics__row4">
                    <Product
                    link=""
                    id="1021"
                    title= 'Linksys AX4200 Smart Mesh Wi-Fi 6 Router Whole Home WiFi Mesh System'
                    price={214.69}
                    image="https://m.media-amazon.com/images/I/41Jli6ZRcoL._AC_SL1000_.jpg" 
                    rating={5}
                    />
                    <Product
                    link=""
                    id="1022"
                    title= 'Razer BlackWidow V3 Pro Mechanical Wireless Gaming Keyboard'
                    price={179.99}
                    image="https://m.media-amazon.com/images/I/81RyDhL6FjL._AC_SL1500_.jpg" 
                    rating={5}
                    />
                    <Product
                    link=""
                    id="1023"
                    title= 'Razer Basilisk V3 Customizable Ergonomic Gaming Mouse - 26K DPI Optical Sensor'
                    price={69.99}
                    image="https://m.media-amazon.com/images/I/61JKqNxaZkL._AC_SL1500_.jpg" 
                    rating={5}
                    />
                </div>
        </div>
    )
}

export default Electronics