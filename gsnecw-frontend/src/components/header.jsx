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

  const handleViewCart = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (token) {
        const response = await fetch('http://127.0.0.1:5000/cart', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const cartData = await response.json();
          navigate('/cart', { state: { cart: cartData } });
        } else {
          console.error('Error fetching cart data');
        }
      } else {
        navigate('/login'); 
      }
    } catch (error) {
      console.error('Error viewing cart:', error);
    }
  };

  return (
    <header className="header-top">
      {children}
      <div className="header-icons">
        <span className="icon-link" onClick={handleViewCart}>
          <AiOutlineShoppingCart title="Cart" />
        </span>
        <Link to="/favorites" className="icon-link">
          <AiOutlineHeart title="Favorites" />
        </Link>
        {localStorage.getItem('authToken') ? (
          <span className="icon-link" onClick={handleLogout}>
            <AiOutlineLogout title="Logout" />
          </span>
        ) : (
          <Link to="/login" className="icon-link">
            <span>Login</span>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;