import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductInfo from './pages/ProductInfo';
import CartPage from './pages/CartPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/loginpage" element={<LoginPage/>}/>
          <Route path="/registerpage" element={<RegisterPage/>}/>
          <Route path="/productinfo" element={<ProductInfo/>}/>
          <Route path="/cartpage" element={<CartPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
