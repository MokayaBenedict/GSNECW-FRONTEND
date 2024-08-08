// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './context/AppContext.jsx';
// import Signup from './components/Signup.jsx';
// import Login from './components/login.jsx';
// import Store from './components/store.jsx';
// import ProductCard from './components/Productcard.jsx';
// import NotFound from './components/NotFound';
// import Header from './components/header.jsx';
// import Footer from './components/footer.jsx';


// import './index.css'

// function App() {
//   return (
//     <AuthProvider>
//     <BrowserRouter>
//       <Routes>
//         <Route path="" element={<Login/>}/>
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/store" element={<Store />} />
//         <Route path="/productcard" element={<ProductCard />} />
//         <Route path="*" element={<NotFound />} />
        
       


        
//       </Routes>
//     </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AppContext.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/login.jsx';
import Store from './components/store.jsx';
import ProductCard from './components/Productcard.jsx';
import NotFound from './components/NotFound';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';




function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/store"
            element={
              <>
                <Header>
                  <h1>Grab upto 50% Off on
                    <br></br>
                    Selected Products
                  </h1>
                  <img src="https://i.pinimg.com/564x/fe/9f/8b/fe9f8ba1ba1ae18e97dcc1d05d546b32.jpg" alt="Logo" className='pic-header'/>
                  
                </Header>
                <Store />
                <Footer />
              </>
            }
          />
          <Route path="/productcard" element={<ProductCard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
