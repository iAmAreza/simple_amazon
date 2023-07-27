import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
         <nav className='nav-bar'>
            <div className="img">
                <img src={logo} alt="" srcset="" /> 
            </div> 
            <div className="header-content">
                  <a href="#">Shop</a>
                  <a href="#">Orders</a>
                  <a href="#">Inventory</a>
                  <a href="#">About</a>
            </div>
         </nav>
    );
};

export default Header;