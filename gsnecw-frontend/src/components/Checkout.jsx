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
    const [specialRequests, setSpecialRequests] = useState('');
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails({ ...shippingDetails, [name]: value });
    };

    const handleSpecialRequestChange = (e) => {
        setSpecialRequests(e.target.value);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const validateShippingDetails = () => {
        const missingFields = [];
        if (!shippingDetails.name) missingFields.push('name');
        if (!shippingDetails.address) missingFields.push('address');
        if (!shippingDetails.city) missingFields.push('city');
        if (!shippingDetails.postalCode) missingFields.push('postal code');
        if (!shippingDetails.country) missingFields.push('country');

        return missingFields;
    };

    const handlePlaceOrder = () => {
        if (orderPlaced) return; 

        const missingFields = validateShippingDetails();

        if (missingFields.length > 0) {
            alert(`Please fill in the following fields: ${missingFields.join(', ')}`);
            return;
        }

        console.log("Order placed", { cart, shippingDetails, specialRequests });
        dispatch({ type: 'clear_cart' });
        setOrderPlaced(true); 
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
                <h2>Special Order Requests</h2>
                <textarea placeholder="Optional" value={specialRequests} onChange={handleSpecialRequestChange} />
            </div>
            <div className="checkout-section">
                <h2>Order Summary</h2>
                <ul className="order-list">
                    {cart.map((product) => (
                        <li key={product.id} className="order-item">  {/* Make sure the key is unique */}
                            <span>{product.name} (x{product.quantity})</span>
                            <span>Ksh {product.price * product.quantity}</span>
                        </li>
                    ))}
                </ul>
                <div className="order-total">
                    <h3>Total: Ksh {getTotalPrice().toFixed(2)}</h3>
                </div>
            </div>
            <button
                className="place-order-button"
                onClick={handlePlaceOrder}
                disabled={orderPlaced} 
            >
                {orderPlaced ? 'Order Placed' : 'Place Order'}
            </button>
        </div>
    );
};

export default Checkout;
