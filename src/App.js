import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Products, Product, Cart, Error, Contact } from './pages';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
