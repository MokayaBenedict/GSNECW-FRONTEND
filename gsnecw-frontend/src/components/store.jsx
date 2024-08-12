

import React, { useState, useEffect } from 'react';
import ProductCard from './Productcard';

import './store.css';

const url = "http://127.0.0.1:5000/products";

function App1() {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
   // const [cart, setCart] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function handleApiCall() {
            try {
                const response = await fetch(url, {
                    headers: {
                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMzQ0MzIyMiwianRpIjoiMjMxYjE4YWUtN2EwNy00OWYyLWIwMTEtNjg2MmZlMjEwOWMwIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6MTEsInVzZXJuYW1lIjoiQmVuZWRpY3QifSwibmJmIjoxNzIzNDQzMjIyLCJjc3JmIjoiOGNiNTVhNzctZWI2OC00ZDYwLWE2MzEtMDAxYzBjODljMDJiIiwiZXhwIjoxNzIzNTI5NjIyfQ.kZe_zwlHwytFUhQFTsP3iea_Z7snQiWqB_KEj7mkxyY " 
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching products:', error);
            }
        }

        handleApiCall();
    }, []);

   
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!Array.isArray(products)) {
        return <div>Unexpected data format</div>;
    }

    return (
        <div>
            
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                {searchQuery && (
                    <button 
                        className="clear-search-button" 
                        onClick={() => setSearchQuery('')}
                    >
                        ❌
                    </button>
                )}
            </div>

            <section className='category'>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
}
export default App1;



