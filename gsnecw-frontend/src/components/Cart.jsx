import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, dispatch,Update_quantity } = useCart();

    const handleRemoveFromCart = (product) => {
        dispatch({ type: 'Remove_from_cart', payload: product });
    };
    
    

    const handleQuantityChange = (product, quantity) => {
        if (quantity <1) {
            handleRemoveFromCart(product);
        } else {
            Update_quantity(product.id, quantity);
        }
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

                                    <div className="quantity-controls">
                                        <button onClick={() => handleQuantityChange(product, product.quantity - 1)}>-</button>
                                        <input
                                            type="number"
                                            value={product.quantity}
                                            onChange={(e) => handleQuantityChange(product, parseInt(e.target.value))}
                                            min="1"
                                        />
                                        <button onClick={() => handleQuantityChange(product, product.quantity + 1)}>+</button>
                                    </div>


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
