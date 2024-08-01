
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Login from './components/login.jsx';
import Store from './components/store.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/store" element={<Store />} />


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;