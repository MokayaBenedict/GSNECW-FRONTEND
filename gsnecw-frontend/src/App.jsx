import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AppContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/login.jsx';
import Store from './components/store.jsx';
import ProductCard from './components/Productcard.jsx';
import Cart from './components/Cart.jsx';
import NotFound from './components/NotFound';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Favourites from './components/favorites.jsx';
import Checkout from './components/Checkout.jsx';
import { FavouriteProvider } from './context/FavouriteContext.jsx';
import OrderHistory from './components/OrderHistory.jsx'; // Import the OrderHistory component

// Wrapper for passing productId from route
function AddFavouritesWrapper() {
  const { productId } = useParams();
  return <AddFavourites productId={productId} />;
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <FavouriteProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/store"
                element={
                  <>
                    <Header>
                      <h1 className='header-name'>Grab upto 50% Off on
                        <br />
                        Selected Products
                      </h1>
                    </Header>
                    <Store />
                    <Footer />
                  </>
                }
              />
              <Route path="/productcard" element={<ProductCard />} />
              <Route path="/favorites" element={<Favourites />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-history" element={<OrderHistory />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </FavouriteProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
