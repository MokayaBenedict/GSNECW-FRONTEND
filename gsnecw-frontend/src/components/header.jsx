import React from 'react';
import './header.css';

const Header = ({ children }) => {
  return (
    <header className="header-top">
      {children}
    </header>
  );
};

export default Header;