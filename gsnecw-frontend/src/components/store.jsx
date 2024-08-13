

import React, { useState, useEffect } from 'react';
import ProductCard from './Productcard';
import './store.css';

const url = "http://127.0.0.1:5000/products";

function App1() {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        async function handleApiCall() {
            try {
                const response = await fetch(url, {
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMzUzNTI2NiwianRpIjoiNTY4ZThkNGYtYmNlNC00N2RjLTkwZjctMzAxYjIyM2FlZmRjIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6MTMsInVzZXJuYW1lIjoidHV0dGllIn0sIm5iZiI6MTcyMzUzNTI2NiwiZXhwIjoxNzIzNjIxNjY2fQ.nFfzCyp5vDfS1Tmw17GJsumQnEIPUoY2Zho2FLi4rdg"
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
            
            <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />

            <section className='category'>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
}

export default App1;



