import React, { useEffect } from 'react';
import axios from 'axios';
import { useFavourites, setFavourites, removeFromFavourites } from '../context/FavouriteContext';

export function Favorites() {
    const { favourites, dispatch } = useFavourites();

    useEffect(() => {
        const fetchFavourites = async () => {
            const token = localStorage.getItem('authToken');
            console.log("Retrieved token from localStorage:", token);
            
            if (!token) {
                console.error('No token found');
                return;
            }
            
            try {
                const response = await axios.get('http://127.0.0.1:5000/favourites', {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                // Correct way to access response data
                const data = response.data; // Ensure 'data' is defined here
                dispatch(setFavourites(data)); // Use 'data' to set favourites
            } catch (error) {
                console.error('Error fetching favourites :( ', error);
            }
        };

        fetchFavourites();
    }, [dispatch]);

    const handleRemoveFromFavourites = (product) => {
        dispatch(removeFromFavourites(product));
    };

    if (favourites.length === 0) {
        return <div>No favourites found</div>;
    }

    return (
        <div>
            <ol>
                {favourites.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <h3>{product.price}</h3>
                        <h3>{product.stock}</h3>
                        <img src={product.image_url} alt={product.name} style={{ width: '100px', height: '100px' }} />
                        <button onClick={() => handleRemoveFromFavourites(product)}>Remove from Favourites</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}


















 
export function Addfavourites({ productId }) {
  const { dispatch } = useFavourites();

  useEffect(() => {
    const addFavourite = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(`http://127.0.0.1:5000/favourites/add`,
          { product_id: productId },
          {
            headers: {
              "Authorization": `Bearer ${token}`,
              // "Content-Type": "application/json"
            }
          }

        
        );
        dispatch(addToFavourites(response.data));
      } catch (error) {
        console.error('Error adding to favourites :( ', error);
      }
    };

    addFavourite();
  }, [productId, dispatch]);

  return (
    <div>
      <h2>Added to Favourites</h2>
    </div>
  );
}
