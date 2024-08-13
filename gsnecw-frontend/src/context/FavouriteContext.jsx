import React, { createContext, useReducer, useContext } from 'react';

// Action Types
const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
const SET_FAVOURITES = 'SET_FAVOURITES';

// Create the context
const FavouriteContext = createContext();

// Reducer to manage state transitions
const favouriteReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return [...state, action.payload];
        case REMOVE_FROM_FAVOURITES:
            return state.filter(item => item.id !== action.payload.id);
        case SET_FAVOURITES:
            return action.payload;
        default:
            return state;
    }
};

// Provider component
export const FavouriteProvider = ({ children }) => {
    const [favourites, dispatch] = useReducer(favouriteReducer, []);

    return (
        <FavouriteContext.Provider value={{ favourites, dispatch }}>
            {children}
        </FavouriteContext.Provider>
    );
};

// Custom hook to use the favourites context
export const useFavourites = () => useContext(FavouriteContext);

// Action creators
export const addToFavourites = (product) => ({
    type: ADD_TO_FAVOURITES,
    payload: product
});

export const removeFromFavourites = (product) => ({
    type: REMOVE_FROM_FAVOURITES,
    payload: product
});

export const setFavourites = (favourites) => ({
    type: SET_FAVOURITES,
    payload: favourites
});
