import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {

    const [{ basket }] = useStateValue();

    return (
        <nav className="header">
           <Link to="/">
               <img 
               src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
               alt="FlipKart"/>
           </Link>
            <div className="header__search">
                <input className="header__input" type="text" />
                <SearchIcon className="header__searchicon" />
            </div>
            <div className="header__nav">
                <Link className="header__link">
                    <div className="header__option">
                        <span className="header__optionone">Hello User</span>
                        <span className="header__optiontwo"></span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionone">return</span>
                        <span className="header__optiontwo">& order</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionone">your</span>
                        <span className="header__optiontwo">prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionbasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optiontwo header__basketcount">{basket.length}</span>
                    </div>
                </Link>
            </div>
           
        </nav>
    )
}

export default Header