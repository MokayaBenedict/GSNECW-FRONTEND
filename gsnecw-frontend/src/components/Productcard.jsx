import React from 'react';
import Swal from 'sweetalert2';
import './ProductCard.css';
import Footer from './footer';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();
  const handleAddToCart = () => {
    dispatch({type: 'Add_to_cart', payload: product});
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: ' Item added to cart 🛒',
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleAddToFavorites = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Item added to favorites ❤️',
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image_url} alt={product.name} className="product-image" />
      </div>
      <div className="details">
        <div className="header">
          <h1 className="title">{product.name}</h1>
          <h1 className="price">Ksh:{product.price}</h1>
          
        </div>
        <p className="description">{product.description}</p>
        {/* <h2 className="stock">{product.stock}</h2> items remaining */}
      </div>
      <div className="actions">
        <button className="buy-now"onClick={handleAddToCart}>Buy Now</button>
        <div className="icon-buttons">
          <button className="icon-button" onClick={handleAddToFavorites}>
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.29877 3.31672C6.22565 2.15376 4.51567 2.15376 3.44256 3.31672C2.33398 4.5181 2.33398 6.49156 3.44256 7.69294L9.00001 13.7157L14.5575 7.69294C15.666 6.49156 15.666 4.5181 14.5575 3.31672C13.4844 2.15376 11.7744 2.15376 10.7013 3.31672L9.61245 4.49668C9.45469 4.66764 9.23265 4.76489 9.00001 4.76489C8.76738 4.76489 8.54534 4.66764 8.38758 4.49668L7.29877 3.31672ZM2.21768 2.18647C3.95077 0.308286 6.79056 0.308286 8.52364 2.18647L9.00001 2.70272L9.47638 2.18647C11.2095 0.308286 14.0493 0.308286 15.7823 2.18647C17.48 4.02623 17.48 6.98343 15.7823 8.82319L10.0207 15.0672C9.47077 15.6632 8.52926 15.6632 7.97929 15.0672L2.21768 8.82319C0.52005 6.98344 0.52005 4.02623 2.21768 2.18647Z" fill="#4A4A4A" />
            </svg>
          </button>
          <button className="icon-button" onClick={handleAddToCart}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.66663 3.0555C1.66663 2.59526 2.03972 2.22217 2.49996 2.22217H4.29106C5.25988 2.22217 6.07819 2.93473 6.21556 3.88883H16.9444C17.1765 3.88883 17.3981 3.98565 17.5558 4.15596C17.7136 4.32627 17.7931 4.55465 17.7753 4.78608L17.3776 9.95652C17.2551 11.5485 15.9276 12.7777 14.331 12.7777H7.27436L7.37748 13.6439C7.39411 13.7836 7.5126 13.8888 7.65331 13.8888H14.7222C15.1824 13.8888 15.5555 14.2619 15.5555 14.7222C15.5555 15.1824 15.1824 15.5555 14.7222 15.5555H7.65331C6.66833 15.5555 5.83893 14.819 5.7225 13.8409L4.56689 4.13378C4.55025 3.99405 4.43177 3.88883 4.29106 3.88883H2.49996C2.03972 3.88883 1.66663 3.51574 1.66663 3.0555ZM7.07595 11.1111H14.331C15.0567 11.1111 15.6601 10.5523 15.7158 9.82869L16.0445 5.5555H6.41457L7.07595 11.1111Z" fill="#4A4A4A" />
              <path d="M9.99996 17.7777C9.99996 18.3914 9.5025 18.8888 8.88885 18.8888C8.2752 18.8888 7.77774 18.3914 7.77774 17.7777C7.77774 17.1641 8.2752 16.6666 8.88885 16.6666C9.5025 16.6666 9.99996 17.1641 9.99996 17.7777Z" fill="#4A4A4A" />
              <path d="M15.5555 17.7777C15.5555 18.3914 15.0581 18.8888 14.4444 18.8888C13.8308 18.8888 13.3333 18.3914 13.3333 17.7777C13.3333 17.1641 13.8308 16.6666 14.4444 16.6666C15.0581 16.6666 15.5555 17.1641 15.5555 17.7777Z" fill="#4A4A4A" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;