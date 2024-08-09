import React from 'react';

import './footer.css';

const Footer = ({ content }) => {
  return (
    <footer className="footer">
      <h1>About Us</h1>
      <h2>Discover top-quality skating gear and apparel at our club shop. Whether you're a beginner or pro, we have everything you need to skate with confidence, style, and passion. Join our community!</h2>
      <p>{content}</p>
    </footer>
  );
};

export default Footer;


// import React from 'react';
// import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import './header.css';

// const Footer = ({ children }) => {
//   return (
//     <footer className="header-top">
//       {children}
//       <div className="header-icons">
//         <Link to="/cart" className="icon-link">
//           <AiOutlineShoppingCart  title="Cart" />
//         </Link>
//         <Link to="/favorites" className="icon-link">
//           <AiOutlineHeart  title="Favorites" />
//         </Link>
//       </div>
//     </footer>
//   );
// };

// export default Footer;