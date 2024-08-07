

import React, { useState, useEffect } from 'react';
import ProductCard from './Productcard';
import './store.css';


const url = "http://127.0.0.1:5000/products";

function App1() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function handleApiCall() {
            try {
                const response = await fetch(url, {
                    headers: {
                        //'Authorization': `Bearer 
                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMzAzMTg4MywianRpIjoiNjYwMmU5ZDEtNzBkNi00YTU4LWFiNzgtYjZkYTM2MjkxOWIyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6MTEsInVzZXJuYW1lIjoiQmVuZWRpY3QifSwibmJmIjoxNzIzMDMxODgzLCJjc3JmIjoiYjUxZTJiNDUtMjAyMi00ZGNjLTk3ZTctNzQ1ZThhMWE3OWVmIiwiZXhwIjoxNzIzMTE4MjgzfQ.yOfObA0xAtPhg6Jx4itV0irhem1GzG1KxW18NZRTBuc"
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                setProducts(data);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching products:', error);
            }
        }

        handleApiCall();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!Array.isArray(products)) {
        return <div>Unexpected data format</div>;
    }

    return (
        <section className='category'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
}

export default App1;