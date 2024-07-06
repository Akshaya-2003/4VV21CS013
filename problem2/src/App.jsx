import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProducts from './components/allProducts';
import ProductDetails from './components/productDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
