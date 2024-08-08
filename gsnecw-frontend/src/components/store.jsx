

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
                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMzExOTM0NiwianRpIjoiZjU4OTc5MDEtOWY4My00MTRkLWEwYWQtYzAxMTM1ZDVjODhhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6MTEsInVzZXJuYW1lIjoiQmVuZWRpY3QifSwibmJmIjoxNzIzMTE5MzQ2LCJjc3JmIjoiNzBkZTU0YWItZDhhYy00YmIyLWFmNWItZDAwNGM0M2I4YjRiIiwiZXhwIjoxNzIzMjA1NzQ2fQ.5wQBuay4TsczT7k7Qk2jt8bwuea3A3ypbTJl4k64PSs"
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