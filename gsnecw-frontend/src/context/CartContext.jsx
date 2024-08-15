import React, { createContext, useReducer, useContext } from 'react';

const Add_to_cart = 'Add_to_cart';
const Remove_from_cart = 'Remove_from_cart';




const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case Add_to_cart:
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                return state;

            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }
        case Remove_from_cart:
            return state.filter(item => item.id !== action.payload.id);

        case Clear_cart:
            return [];
        case Set_cart: 
            return action.payload;

        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    const updateQuantity = (productId, quantity) => {
        dispatch({ type:Update_quantity, payload: { id: productId, quantity } });
    };
    const syncCart = (newCartData) => {
        dispatch({ type: Sync_cart, payload: newCartData });
      };
    
    return (
        <CartContext.Provider value={{ cart, dispatch,updateQuantity,syncCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);