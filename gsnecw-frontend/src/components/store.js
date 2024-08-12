// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios'; // Ensure you have axios installed

const ProductListing = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this runs once when the component mounts

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
      <div>
        <h2>Cart Items:</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - Ksh {item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductListing;