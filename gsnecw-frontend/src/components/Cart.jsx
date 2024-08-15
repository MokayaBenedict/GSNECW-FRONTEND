import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Cart.css';
import axios from 'axios';

// Define cartReducer function
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'Add_to_cart':
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                return state;
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload.id);
        case 'SET_CART':
            return action.payload;
        default:
            return state;
    }
};


const Cart = () => {
    const { cart, dispatch } = useCart();

    const handleRemoveFromCart = async (product) => {

        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    
        try {
            const token = localStorage.getItem('authToken');
            if (token) {
                await axios.delete('http://127.0.0.1:5000/cart/remove', {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                    data: { product_id: product.id }
                });
            }
        } catch (error) {

            console.error('Error removing item from cart')

    };
    
    

    const handleQuantityChange = async (product, quantity) => {
        const updatedQuantity = quantity < 1 ? 1 : quantity;
        updateQuantity(product.id, updatedQuantity);

        try {
            const token = localStorage.getItem('authToken');
            if (token) {
                await axios.put('http://127.0.0.1:5000/cart/update', {
                    product_id: product.id,
                    quantity: updatedQuantity,
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const getTotalPrice = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    return (
        <div className="cart-container">
            <div className="return-to-store">
                <Link to="/store">Return to Store</Link>
            </div>
    
            <h1>Your Cart</h1>
            {Array.isArray(cart) && cart.length === 0 ? (
                <div className="empty-cart">
                    <img src="src/assets/cart empty.jpg" alt="Empty Cart" />
                    <p>Your cart is empty.</p>
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
                                    
                       


                                    <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
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
}}

export default Cart;
