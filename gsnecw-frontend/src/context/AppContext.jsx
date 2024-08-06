import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    return (
        <AppContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
