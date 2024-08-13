import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, dispatch } = useCart();

    const handleRemoveFromCart = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    };

    const getTotalPrice = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    return (
        <div className="cart-container">
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
                                    <p>Ksh:{product.price}</p>
                                    <p>Quantity: {product.quantity}</p>
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
};

export default Cart;
