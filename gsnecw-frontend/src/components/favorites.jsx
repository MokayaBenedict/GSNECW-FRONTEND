import React, { useEffect, useContext } from "react";
import axios from "axios";
import { FavouriteContext, setFavourites } from '../context/FavouriteContext';
import './favourites.css';
import { useNavigate } from 'react-router-dom';

function Favourites() {
    const { favourites, dispatch } = useContext(FavouriteContext);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFavourites = async () => {
            const token = localStorage.getItem('authToken');
            
            if (!token) {
                console.error('No token found');
                navigate('/login');
                return;
            }

            try {
                const response = await axios.get('http://127.0.0.1:5000/favourites', {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                const data = response.data;
                dispatch(setFavourites(data)); 
            } catch (error) {
                console.error('Error fetching favourites :( ', error);
            }
        };

        fetchFavourites();
    }, [dispatch, navigate]);

    const handleRemoveFavorite = async (id) => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            console.error('No token found');
            navigate('/login');
            return;
        }

        try {
            await axios.delete(`http://127.0.0.1:5000/favourites/${id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            const updatedFavourites = favourites.filter(product => product.id !== id);
            dispatch(setFavourites(updatedFavourites)); 
        } catch (error) {
            console.error('Error removing favourite :( ', error);
        }
    };

    if (favourites.length === 0) {
        return <h1>No favourites found</h1>;
    }

    return (
        <div className="favourites-container">
            <h2 className="favourites-header">Your Favourites</h2>
            <ul className="favourites-list">
                {favourites.map(product => (
                    <li key={product.id || product.name} className="favourites-item">
                        <img src={product.image_url} alt={product.name} style={{ width: '150px', height: '150px' }} />
                        <h4>Name: {product.name}</h4>
                        <p className="description">Description: {product.description}</p>
                        <p className="stock">Stock available: {product.stock}</p>
                        <p className="price">Price: {product.price}</p>
                        <button 
                            className="remove-button" 
                            onClick={() => handleRemoveFavorite(product.id)}
                        >
                            Remove from Favorites
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Favourites;
