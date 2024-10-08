import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Cart.css';

const Cart = () => {
    const { dispatch } = useCart();
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(false)
    

    const handleRemoveFromCart = async (product_id) => {

        dispatch({ type: 'REMOVE_FROM_CART', payload: product_id });

        try {
            const token = localStorage.getItem('authToken');
            if (token) {
                console.log(product_id)
                const response = await axios.delete('http://127.0.0.1:5000/cart/remove', {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                    data: { product_id: product_id }
                });

                console.log(response)

                // setCart(response.cart_items)
                window.location.reload()
            }
        } catch (error) {

            console.error('Error removing item from cart')

        };
    }


    const handleQuantityChange = (product, quantity) => {
        if (quantity < 1) {
            updateQuantity(product.id, 1);
        } else {
            updateQuantity(product.id, quantity);
        }
    };


    const getTotalPrice = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const handleViewCart = async () => {
        try {
            setLoading(true)
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
              console.log("cart data: ", cartData)
              setCart(cartData.cart_items)
              setLoading(false)
              return cartData
            //   navigate('/cart', { state: { cart: cartData } });
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

      useEffect(() => {
        handleViewCart()
      }, [])

      if (loading) {
        return <>Loading...</>
      }
    

    return (
        <div className="cart-container">
            <div className="return-to-store">
                <Link to="/store">Return to Store</Link>
            </div>

            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <div className="empty-cart">
                    <img src="src/assets/cart empty.jpg" alt="Empty Cart" />
                    <p></p>
                </div>

            ) : (
                <>
                    <ul className="cart-list">
                        {cart.map((product) => (
                            <li key={product.id} className="cart-item">
                                <img src={product.image_url} alt={product.name} />
                                <div>
                                    <h2>{product.name}</h2>
                                    {/* <img src={product.image_url} alt={product.name} /> */}
                                    <button onClick={() => handleRemoveFromCart(product.product_id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <h2>Total: Ksh {getTotalPrice().toFixed(2)}</h2>
                        <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;