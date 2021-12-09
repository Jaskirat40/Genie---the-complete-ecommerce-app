import React from 'react'
import './Footer.css'
import {Link} from "react-router-dom"
import { useStateValue } from "./StateProvider";

function Footer() {
    const [{ basket, user}, dispatch] = useStateValue();
    var user1;
    var user2;
    if(basket?.length<=0){
        user2 = 'none'
    }
    else{
        user2 = 'all'
    }
    if(!user){
        user1 = 'none'
    }
    else{
        user1 = 'all'
    }
    return (
        <div>
            <div className="home__Footer">
                <Link to='/login'
                className="footer__Signin">
                    <span>Sign-In</span>
                </Link>
                <Link style={{ pointerEvents: user2 }} 
                to='/checkout' 
                className="footer__Cart">
                    <span>Cart</span>
                </Link>
                <Link style={{ pointerEvents: user1 }} 
                to='/orders' 
                className="footer__Orders">
                <span>Orders</span>
                </Link>
                <span className="footer__Categories">Categories</span>
                <ul className="footer__Categorylist">
                    <li>
                        <Link to='/Electronics' 
                        className="footer__CategoryList">
                            <span>Electronics</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Fashion'
                        className="footer__CategoryList">
                            <span>Fashion</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Furniture'
                        className="footer__CategoryList">
                            <span>Furniture</span>
                        </Link>
                    </li>
                    <li style = {{width: '200px'}}> 
                        <Link to='/Toysnbaby'
                        className="footer__CategoryList">
                            <span>Toys and baby products</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/Books'
                        className="footer__CategoryList">
                            <span>Books</span>
                        </Link>
                    </li>
                </ul>
                <span className="footer__Copyright">2021, E-commerce website created by Jaskirat, Ritesh, Arshiya.</span>
            </div>
        </div>
    )
}

export default Footer
