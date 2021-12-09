import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
import logo from "./NicePng_genie-png_2277046.png"

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
        else{
            console.log("userNotPresent")
        }
    }
    var user1;
    var user2;
    if(!user){
        user1 = 'none'
    }
    else{
        user1 = 'all'
    }
    if(basket?.length<=0){
        user2 = 'none'
    }
    else{
        user2 = 'all'
    }
    return (
        <div className='header'>   
           <span className="header__genie__text"> Genie
            </span>
            <Link to='/'>
           <img 
                className = "header__logo" 
                src={logo}
                />
           </Link>
            <div className="header__search">
                <input
                className="header__searchInput"
                type="text"
                />
                <SearchIcon 
                className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={!user && '/login'}
                className="link">
                <div onClick={auth.signOut()}
                className="header__option">
                    <span className="header__optionLineOne">
                        Hello {user? user?.email : "Guest"}
                    </span>
                    <span className="header__optionLineTwo">
                        {user ? 'Sign-Out' : 'Sign-In'}
                    </span>
                </div>
                </Link>
                <Link style= {{pointerEvents: user1}} 
                to='/orders' className="link">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link style= {{pointerEvents: user2}}  
                to='/checkout'>
                <div className= "header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className= "header__optionLineTwo header__basketCount">
                        {basket?.length}
                    </span>
                </div>
                </Link>
            </div>
        </div>
    );
}
export default Header
