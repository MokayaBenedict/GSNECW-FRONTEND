import React from 'react';
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineLogout } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';

const Header = ({ children }) => {
  const navigate = useNavigate();  

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (token) {
        await fetch('http://127.0.0.1:5000/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        localStorage.removeItem('authToken');

        navigate('/login');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      
    }
  };

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
        <span className="icon-link" onClick={handleLogout}>
          <AiOutlineLogout title="Logout" />
        </span>
      </div>
    </header>
  );
};

export default Header;
