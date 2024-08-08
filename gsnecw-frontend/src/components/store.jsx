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
                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMzEyNDA2OCwianRpIjoiZGZiNGY4ZDUtNGVmNi00YjRlLTk1NmQtNGZhOGYxZjAzY2M1IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6MTEsInVzZXJuYW1lIjoiQmVuZWRpY3QifSwibmJmIjoxNzIzMTI0MDY4LCJjc3JmIjoiYzRiNTdlMjUtYjc0Yi00M2U1LTliYTItZTk3NWM3YTlhMjFlIiwiZXhwIjoxNzIzMjEwNDY4fQ.JtTE2JzNrW6p7eecFSX6iTuTzgErCTfFohD5wnaIGtE"
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