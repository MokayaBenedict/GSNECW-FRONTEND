import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Login from './components/login.jsx';
import Store from './components/store.jsx';
import ProductCard from './components/Productcard.jsx';
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/store" element={<Store />} />
        <Route path="/productcard" element={<ProductCard />} />


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;