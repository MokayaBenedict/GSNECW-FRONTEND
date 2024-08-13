import React, { createContext, useReducer, useContext } from 'react';

const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
const SET_FAVOURITES = 'SET_FAVOURITES';

export const FavouriteContext = createContext();

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

export const FavouriteProvider = ({ children }) => {
    const [favourites, dispatch] = useReducer(favouriteReducer, []);

    return (
        <FavouriteContext.Provider value={{ favourites, dispatch }}>
            {children}
        </FavouriteContext.Provider>
    );
};

export const useFavourites = () => useContext(FavouriteContext);

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
