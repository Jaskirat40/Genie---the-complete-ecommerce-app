import React from 'react'
import "./Home.css"
import Product from './Product'
import {Link} from "react-router-dom"
import logo from "./NicePng_genie-png_2277046.png"

function Home() {
    
    return (
        <div classname="home">
            <div className="home__container">
                {/* <div className="about__website">
                <span className="genie__text">
                    Genie
                </span>
                <img 
                className = "home__logo" 
                src={logo}
                />
                <span className="makeawish__text">
                    Make A Wish...
                </span>
                </div> */}
                <figure>
                   
                    <img
                    className="home__image1"
                    src="https://images-na.ssl-images-amazon.com/images/G/31/img21/Fashion/Flip/Winterwear21/AFPage/Header/PC/15kstyles-Header-PC._SX3000_QL85_.jpg"
                    alt="Banner-unavaliable"
                    />
                     <img
                    className="home__image3"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Laptops/Fujitsu/1500x300_LG_v2.jpg"
                    alt="Banner-unavaliable"
                    />
                    <img
                    className="home__image2"
                    src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
                    alt="Banner-unavaliable"
                    />
                    <img
                    className=""
                    src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
                    alt="Banner-unavaliable"
                    />
                    <img
                    className="home__image"
                    src="https://m.media-amazon.com/images/I/6153Nzpt6mL._SX3000_.jpg"
                    alt="Banner-unavaliable"
                    />
                </figure>
            </div>
            <div className="rows">
            <div className= "home__row3">
                <a  href="https://www.lg.com">
                <img className="ultragear"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Monitors/Co-op/LG/675x645_Dec21.jpg"/>
                </a>
                <a  href="/books">
                <img className="book"
                    src="https://images-na.ssl-images-amazon.com/images/G/31/img21/Books/072021/bookshprefresh/680-X-680-beginners._SS680_QL85_.jpg"/>
                </a>
                <a  href="/electronics">
                <img className="babystore"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/pTron/JBL_670x645.jpg"/>
                </a>
                <a  href="https://blogs.windows.com/windowsexperience/2021/06/24/introducing-windows-11/">
                <img className="windows11"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Laptops/Microsoft/Windows-11/Revised/Amazon-Category-teaser-Windows11_670x645px.jpg"/>
                </a>
                </div>
                <div className="category1">
                <Link to="/Electronics" className="category__link">
                      <span>Electronics</span>
                    </Link>
                </div>
                <div className= "home__row1">
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
                    title= "LG 27GL850-B 27 Inch Ultragear Gaming Monitor"
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
                </div>
                <div className="category2">
                    <Link to="/Fashion" className="category__link">
                      <span>Fashion</span>
                    </Link>
                </div>
                <div className= "home__row2">
                    <Product
                    id="2011"
                    title= "Gildan Men's Fleecw Hooded Sweatshirt"
                    price={14.99}
                    image="https://m.media-amazon.com/images/I/71VZueFCKVS._AC_UX679_.jpg" 
                    rating={4}
                    /> 
                    <Product
                    id="2012"
                    title= "Levi's Men's 505 Regular Fit Jeans"
                    price={34.99}
                    image="https://m.media-amazon.com/images/I/61NlrvixWeL._AC_UX679_.jpg" 
                    rating={5}
                    /> 
                    <Product
                    id="2013"
                    title= "Womens Button Down V Neck Shirts Long Sleeve Blouse"
                    price={18.99}
                    image="https://m.media-amazon.com/images/I/71foGG88YiL._AC_UX569_.jpg" 
                    rating={5}
                    />
                </div>
                <div className={"furniture"}>
                <Link to="/Furniture" className={"category__link"}>
                      <span>Furniture</span>
                    </Link>
                </div>
                <div className= "home__row2">
                    <Product
                    id="3011"
                    title= "Serta Rane Collection Convertible Sofa, L66.1 x W33.1 x H29.5, Charcoal"
                    price={159.99}
                    image="https://m.media-amazon.com/images/I/91UGkZmARtL._AC_SL1500_.jpg" 
                    rating={4}
                    /> 
                    <Product
                    id="3012"
                    title= "Walker Edison Milton Classic 2 Shelf Corner TV Stand for TVs up to 65 Inches Driftwood"
                    price={129.99}
                    image="https://m.media-amazon.com/images/I/81jnyijxDqL._AC_SL1500_.jpg" 
                    rating={5}
                    /> 
                    <Product
                    id="3013"
                    title= "Rolanstar Bookshelf with 2 Wooden Drawers, Rustic Brown"
                    price={109.99}
                    image="https://m.media-amazon.com/images/I/816e63evwqL._AC_SL1500_.jpg" 
                    rating={5}
                    /> 
                    <Product
                    id="3014"
                    title= "Flash Furniture Capri Comfortable Sleep Memory Foam & Pocket Spring Mattress"
                    price={247.59}
                    image="https://m.media-amazon.com/images/I/91Rba07yhUS._AC_SL1500_.jpg" 
                    rating={4}
                    /> 
                </div>  
                <div className="Toysnbaby">
                <Link to="/Toysnbaby" className="category__link">
                      <span>Toys and baby products</span>
                    </Link>
                </div>
                <div className= "home__row2">
                    <Product
                    id="4011"
                    title= "Tiny Love 4-in-1 Here I Grow Mobile Activity Center"
                    price={99.99}
                    image="https://m.media-amazon.com/images/I/81GXBymwQoL._SL1500_.jpg" 
                    rating={5}
                    /> 
                    <Product
                    id="4012"
                    title= "Graco Simple Sway Swing"
                    price={67.99}
                    image="https://m.media-amazon.com/images/I/71CnAb9DDnL._SL1500_.jpg" 
                    rating={5}
                    /> 
                    <Product
                    id="4013"
                    title= "Funko Pop! Advent Calendar: Harry Potter - 2021"
                    price={39.99}
                    image="https://m.media-amazon.com/images/I/81Zd-0CvRJL._AC_SL1500_.jpg" 
                    rating={5}
                    /> 
                </div>  
                <div className="books">
                    <Link to="/books" className="category__link">
                      <span>Books</span>
                    </Link>
                </div>
                <div className= "home__row2">
                    <Product
                    id="5011"
                    title= "Peril Hardcover – September 21, 2021"
                    price={18.43}
                    image="https://m.media-amazon.com/images/P/B098PF8D41.01._SCLZZZZZZZ_SX500_.jpg" 
                    rating={4}
                    /> 
                    <Product
                    id="5012"
                    title= "What's Left Unsaid: A Novel"
                    price={8.43}
                    image="https://m.media-amazon.com/images/P/1542027209.01._SCLZZZZZZZ_SX500_.jpg" 
                    rating={4}
                    /> 
                    <Product
                    id="5013"
                    title= "The Keeper of Happy Endings"
                    price={10.99}
                    image="https://m.media-amazon.com/images/P/1542021472.01._SCLZZZZZZZ_SX500_.jpg" 
                    rating={5}
                    /> 
                    <Product
                    id="5014"
                    title= "A Promised Land - Barack Obama"
                    price={25.89}
                    image="https://images-na.ssl-images-amazon.com/images/I/41iYr6o753L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" 
                    rating={5}
                    /> 
                    <Product
                    id="5015"
                    title= "The Ride of a Lifetime - Robert Iger"
                    price={12.00}
                    image="https://images-na.ssl-images-amazon.com/images/I/41MBBddHqQL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" 
                    rating={5}
                    />
                </div>  
            </div>
        </div>
    )
}
export default Home

