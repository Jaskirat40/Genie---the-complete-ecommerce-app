import './Header2.css'
import React from 'react'
import {Link} from "react-router-dom"
function Header2() {
    return (
        <div className="header2">
            <h3>Shop by Department: </h3>
            <div className="header2__nav">
                <Link to="/Electronics" className="header2__nav__link">
                <span> Electronics </span>
                </Link>
                <Link to="/Fashion" className="header2__nav__link">
                <span> Fashion</span>
                </Link>
                <Link to="Furniture" className="header2__nav__link">
                <span>Furniture</span>
                </Link>
                <Link to="ToysnBaby" className="header2__nav__link">
                <span>Toys and baby products</span>
                </Link>
                <Link to="/Books" className="header2__nav__link">
                <span>Books</span>
                </Link>
            </div>
        </div>
    )
}

export default Header2
