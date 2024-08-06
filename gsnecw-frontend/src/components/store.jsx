



import React, { useState, useEffect } from 'react';
import ProductCard from './Productcard';

const url = "http://127.0.0.1:5000/products";

function App1() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function handleApiCall() {
            try {
                const response = await fetch(url, {
                    headers: {
                        //'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Replace with your actual token
                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMjkzMDI4NywianRpIjoiOTEyNDZjZDUtNTk2Yy00NTFkLWJhZDctMDNkNjJkYzY2NDQ4IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6NiwidXNlcm5hbWUiOiJpc2Fja2trIn0sIm5iZiI6MTcyMjkzMDI4NywiY3NyZiI6IjI4NjIwNTBjLTc0NmQtNGM3My05NGFhLTZkMGZjZDU4NDQ0MSIsImV4cCI6MTcyMzAxNjY4N30.Xe-d6usRGgD8n7k9sZDwnYQnHEzpDF7Ipr2F6s3RXaA"
                    },
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data); // Log the response to check its structure
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
        <section>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
}

export default App1;
