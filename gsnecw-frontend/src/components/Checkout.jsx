import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
    const { cart, dispatch } = useCart();
    const [shippingDetails, setShippingDetails] = useState({
        name: '',
        address: '',
        city: '',
        postalCode: '',
        country: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails({ ...shippingDetails, [name]: value });
    };

    const getTotalPrice = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const handlePlaceOrder = () => {
        // Here you would typically send the order details to your backend
        // For now, we'll just simulate an order confirmation
        console.log("Order placed", { cart, shippingDetails });
        dispatch({ type: 'clear_cart' });
        alert('Order placed successfully!');
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <div className="checkout-section">
                <h2>Shipping Information</h2>
                <form className="shipping-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={shippingDetails.name} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" value={shippingDetails.address} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" name="city" value={shippingDetails.city} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postalCode">Postal Code:</label>
                        <input type="text" id="postalCode" name="postalCode" value={shippingDetails.postalCode} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country:</label>
                        <input type="text" id="country" name="country" value={shippingDetails.country} onChange={handleInputChange} required />
                    </div>
                </form>
            </div>
            <div className="checkout-section">
                <h2>Order Summary</h2>
                <ul className="order-list">
                    {cart.map((product) => (
                        <li key={product.id} className="order-item">
                            <span>{product.name} (x{product.quantity})</span>
                            <span>Ksh {product.price * product.quantity}</span>
                        </li>
                    ))}
                </ul>
                <div className="order-total">
                    <h3>Total: Ksh {getTotalPrice().toFixed(2)}</h3>
                </div>
            </div>
            <button className="place-order-button" onClick={handlePlaceOrder}>Place Order</button>
        </div>
    );
};

export default Checkout;
