import React from 'react';
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ children }) => {
  return (
    <header className="header-top">
      {children}
      <div className="header-icons">
        <Link to="/cart" className="icon-link">
          <AiOutlineShoppingCart title="Cart" />
        </Link>
        <Link to="/favorites" className="icon-link">
          <AiOutlineHeart title="Favorites" />
        </Link>
      </div>
    </header>
  );
};

export default Header;