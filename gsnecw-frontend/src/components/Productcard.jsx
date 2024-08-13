import React from 'react';
import Swal from 'sweetalert2';
import './ProductCard.css';
import { useCart } from '../context/CartContext';
import axios from 'axios';
import { useContext } from 'react';
import { FavouriteContext, setFavourites } from '../context/FavouriteContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();
  const { favourites, dispatch: favDispatch } = useContext(FavouriteContext);

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'You must be logged in to add to cart',
          showConfirmButton: true,
        });
        return;
      }

      const response = await axios.post('http://127.0.0.1:5000/cart/add', 
        { product_id: product.id },
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      );

      const data = response.data;

     
      dispatch({ type: 'Add_to_cart', payload: data });

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Item added to cart 🛒, proceed to cart for checkout.',
        showConfirmButton: false,
        timer: 1500
      });

    } catch (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error adding to cart',
        showConfirmButton: true,
      });
      console.error('Error adding to cart:', error);
    }
  };

  const handleAddToFavorites = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'You must be logged in to add to favorites',
          showConfirmButton: true,
        });
        return;
      }

      const response = await axios.post('http://127.0.0.1:5000/favourites/add', 
        { product_id: product.id },
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        }
      );

      const data = response.data;

      const isAlreadyFavourite = favourites.some(fav => fav.id === data.id);
      
      if (isAlreadyFavourite) {
        console.log('Product already in favourites');
        return;
      }

      // Update the state with the new favourite
      favDispatch(setFavourites([...favourites, data]));

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Item added to favorites ❤️',
        showConfirmButton: false,
        timer: 1500
      });

    } catch (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error adding to favorites',
        showConfirmButton: true,
      });
      console.error('Error adding to favorites:', error);
    }
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
        <button className="buy-now" onClick={handleAddToCart}>Buy Now</button>
        <div className="icon-buttons">
          <button className="icon-button" onClick={handleAddToFavorites}>
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.29877 3.31672C6.22565 2.15376 4.51567 2.15376 3.44256 3.31672C2.33398 4.5181 2.33398 6.49156 3.44256 7.69294L9.00001 13.7157L14.5575 7.69294C15.666 6.49156 15.666 4.5181 14.5575 3.31672C13.4844 2.15376 11.7744 2.15376 10.7013 3.31672L9.61245 4.49668C9.45469 4.66764 9.23265 4.76489 9.00001 4.76489C8.76738 4.76489 8.54534 4.66764 8.38758 4.49668L7.29877 3.31672ZM2.21768 2.18647C3.95077 0.308286 6.79056 0.308286 8.52364 2.18647L9.00001 2.70272L9.47638 2.18647C11.2095 0.308286 14.0493 0.308286 15.7823 2.18647C17.48 4.02623 17.48 6.98343 15.7823 8.82319L10.0207 15.0672C9.47077 15.6632 8.52926 15.6632 7.97929 15.0672L2.21768 8.82319C0.52005 6.98344 0.52005 4.02623 2.21768 2.18647Z" fill="#4A4A4A" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
