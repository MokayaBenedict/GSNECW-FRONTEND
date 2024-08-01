import React from 'react';
import './store.css';

const items = [
    { id: 1, name: 'Item 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Item 2', price: '$20', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Item 3', price: '$30', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Item 4', price: '$40', image: 'https://via.placeholder.com/150' },
    { id: 1, name: 'Item 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Item 2', price: '$20', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Item 3', price: '$30', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Item 4', price: '$40', image: 'https://via.placeholder.com/150' },
    { id: 1, name: 'Item 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Item 2', price: '$20', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Item 3', price: '$30', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Item 4', price: '$40', image: 'https://via.placeholder.com/150' },
    { id: 1, name: 'Item 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Item 2', price: '$20', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Item 3', price: '$30', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Item 4', price: '$40', image: 'https://via.placeholder.com/150' },
    { id: 1, name: 'Item 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Item 2', price: '$20', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Item 3', price: '$30', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Item 4', price: '$40', image: 'https://via.placeholder.com/150' },
    { id: 1, name: 'Item 1', price: '$10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Item 2', price: '$20', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Item 3', price: '$30', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Item 4', price: '$40', image: 'https://via.placeholder.com/150' },
   
];

function Store() {
    return (
        <div className="store">
            <h1>Store</h1>
            <div className="items-container">
                {items.map(item => (
                    <div key={item.id} className="item-card">
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Store;