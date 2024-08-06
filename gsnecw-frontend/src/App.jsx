import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AppContext.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/login.jsx';
import Store from './components/store.jsx';
import ProductCard from './components/Productcard.jsx';
import NotFound from './components/NotFound';


import './index.css'

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/store" element={<Store />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="*" element={<NotFound />} />
       


        
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
